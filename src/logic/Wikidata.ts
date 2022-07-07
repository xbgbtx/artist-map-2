import { dispatchAppEvent } from './AppEvents.js'
import { ArtistMapContext } from '../ArtistMapTypes.js'

export function getWikidata ( ctx: ArtistMapContext ) {
  ctx.artists = [ "foo", "bar" ];
  setTimeout(()=>{
    dispatchAppEvent({ type: 'WikidataFetchComplete' });
  },5);
}
