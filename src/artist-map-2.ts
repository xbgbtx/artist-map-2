/* import { createMachine } from 'xstate'; */
import { ArtistMap2 } from './ArtistMap2.js';


const response = await fetch('xstate/ArtistMap.json');
const xstateData = await response.json();
console.log(xstateData);

/* const appMachine = createMachine(xstateData); */


customElements.define('artist-map-2', ArtistMap2);
