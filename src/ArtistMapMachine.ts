import { createMachine, interpret } from 'xstate'
import {
  ArtistMapContext,
} from './ArtistMapTypes.js'
import { getWikidata } from './logic/Wikidata.js'

function initialContext() {
  return {
    artists : []
  };
}

async function wikidataDownload(ctx: ArtistMapContext) {
  await getWikidata(ctx);
}

const artistMapMachine = createMachine<ArtistMapContext>(
  {
    id: 'artist-map',
    initial: 'init',
    context: initialContext(),

    states: {
      init: {
        on: {
          PageLoaded: {
            target: 'fetchingWikidata',
            actions: 'wikidataDownload'
          }
        }
      },
      fetchingWikidata: {
        on: {
          WikidataFetchComplete : {
            target: 'buildingMap'
          }
        }
      },
      buildingMap: {
      }
    }
  },
  {
    actions: { wikidataDownload },
  }
);

const artistMapService = interpret(artistMapMachine);

export { artistMapService };
