import { createMachine, interpret } from 'xstate'
import {
  ArtistMapContext,
} from './ArtistMapTypes.js'

const artistMapMachine = createMachine<ArtistMapContext>(
  {
  },
  {}
);

const artistMapService = interpret(artistMapMachine);

export { artistMapService };
