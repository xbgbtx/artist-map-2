import { createMachine, interpret } from 'xstate'
import {
  ArtistMapContext,
} from './ArtistMapTypes.js'
import { getWikidata } from './logic/Wikidata.js'
import { createMap, buildMap } from './logic/Leaflet.js'

function initialContext() {
  return {
    artists : []
  };
}

const artistMapMachine = createMachine<ArtistMapContext>(
  {
    id: 'artist-map',
    initial: 'init',
    context: initialContext(),

    states: {
      init: {
        entry: 'createMap',
        on: {
          PageLoaded: {
            target: 'fetchingWikidata',
          }
        }
      },
      fetchingWikidata: {
        entry: 'getWikidata',
        on: {
          WikidataFetchComplete : {
            target: 'buildingMap'
          }
        }
      },
      buildingMap: {
        entry: 'buildMap',
        on: {
          MapBuildComplete: {
            target: 'awaitingInput',
          }
        }
      },
      awaitingInput: {
      }
    }
  },
  {
    actions: { getWikidata, createMap, buildMap },
  }
);

const artistMapService = interpret(artistMapMachine);

export { artistMapService };
