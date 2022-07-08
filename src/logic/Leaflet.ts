import { dispatchAppEvent } from './AppEvents.js'
import { ArtistMapContext } from '../ArtistMapTypes.js'

const sleep = (milliseconds: number) => 
    new Promise(resolve => setTimeout(resolve, milliseconds));


export async function buildMap ( ctx: ArtistMapContext ) {
  await sleep(1000);
  setTimeout(()=>{
    dispatchAppEvent({ type: 'MapBuildComplete' });
  },2000);
}

