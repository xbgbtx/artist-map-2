import 'leaflet';
import { dispatchAppEvent } from './AppEvents.js';
import { ArtistMapContext } from '../ArtistMapTypes.js';

const sleep = (milliseconds: number) =>
  new Promise(resolve => setTimeout(resolve, milliseconds));

const { L } = window;

const attributionStr =
  '&copy; <a href="https://openstreetmap.org/copyright">' +
  'OpenStreetMap contributors</a> | ' +
  '<a href="https://www.wikidata.org" >Wikidata</a> | ' +
  '<a href="https://github.com/xbgbtx/ArtistMap" >Source Code</a>';

export function createMap(mapDiv: HTMLElement) {
  const map = L.map(mapDiv);

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: attributionStr,
    noWrap: false,
  }).addTo(map);
}

export async function buildMap(ctx: ArtistMapContext) {
  await sleep(1000);
  setTimeout(() => {
    dispatchAppEvent({ type: 'MapBuildComplete' });
  }, 2000);
}
