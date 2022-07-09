import { createMachine, interpret, assign } from 'xstate';
import {
  ArtistMapContext,
  initialContext,
  ArtistMapEvents,
} from './ArtistMapTypes.js';
import { getWikidata } from './logic/Wikidata.js';
import { buildMap } from './logic/Leaflet.js';

const artistMapMachine = createMachine<ArtistMapContext>(
  {
    id: 'artist-map',
    initial: 'init',
    context: initialContext(),

    states: {
      init: {
        on: {
          PageLoaded: {
            target: 'creatingMap',
          },
        },
      },
      creatingMap: {
        on: {
          MapDivCreated: {
            target: 'fetchingWikidata',
            actions: assign({
              mapDiv: (ctx: ArtistMapContext, e) =>
                (e as unknown as ArtistMapEvents.MapDivCreated).mapDiv,
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
    actions: { getWikidata, buildMap },
  }
);

const artistMapService = interpret(artistMapMachine);

export { artistMapService };
