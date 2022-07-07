import { createMachine, interpret } from 'xstate'
import {
  ArtistMapContext,
} from './ArtistMapTypes.js'

function initialContext() {
  return {};
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
            target: 'fetchingWikiData'
          }
        }
      },
      fetchingWikiData: {
      }
    }
  },
  {}
);

const artistMapService = interpret(artistMapMachine);

export { artistMapService };
