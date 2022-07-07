import { dispatchAppEvent } from './AppEvents.js'
import { ArtistMapContext } from '../ArtistMapTypes.js'

const sleep = (milliseconds: number) => 
    new Promise(resolve => setTimeout(resolve, milliseconds));


export async function getWikidata ( ctx: ArtistMapContext ) {
  await sleep(1000);
  ctx.artists = [ "foo", "bar" ];
  setTimeout(()=>{
    dispatchAppEvent({ type: 'WikidataFetchComplete' });
  },2000);
}
