import { createMachine, interpret, assign } from 'xstate';
import {
  ArtistMapContext,
  initialContext,
  ArtistMapEvents,
} from './ArtistMapTypes.js';
import { getWikidata } from './logic/Wikidata.js';
import { initLeaflet, buildMap } from './logic/Leaflet.js';

const artistMapMachine = createMachine<ArtistMapContext>(
  {
    id: 'artist-map',
    initial: 'init',
    context: initialContext(),

    states: {
      init: {
        on: {
          PageLoaded: {
            target: 'creatingMapDiv',
          },
        },
      },
      creatingMapDiv: {
        on: {
          MapDivCreated: {
            target: 'initializingLeaflet',
            actions: assign({
              mapDiv: (ctx: ArtistMapContext, e) =>
                (e as unknown as ArtistMapEvents.MapDivCreated).mapDiv,
            }),
          },
        },
      },
      initializingLeaflet: {
        entry: 'initLeaflet',
        on: {
          LeafletReady: {
            target: 'fetchingWikidata',
            actions: assign({
              map: (ctx: ArtistMapContext, e) =>
                (e as unknown as ArtistMapEvents.LeafletReady).map,
            }),
          },
        },
      },
      fetchingWikidata: {
        entry: 'getWikidata',
        on: {
          WikidataFetchComplete: {
            target: 'buildingMap',
          },
        },
      },
      buildingMap: {
        entry: 'buildMap',
        on: {
          MapBuildComplete: {
            target: 'awaitingInput',
          },
        },
      },
      awaitingInput: {},
    },
  },
  {
    actions: { getWikidata, buildMap, initLeaflet },
  }
);

const artistMapService = interpret(artistMapMachine);

export { artistMapService };
