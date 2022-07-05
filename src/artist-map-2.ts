/* import { createMachine } from 'xstate'; */
import { ArtistMap2 } from './ArtistMap2.js';

import * as json from '../xstate/ArtistMap.json';

console.log(json);

/* const response = await fetch('xstate/ArtistMap.json'); */
/* const xstateData = await response.json(); */

/* const appMachine = createMachine(xstateData); */

/* console.log(appMachine); */

customElements.define('artist-map-2', ArtistMap2);
