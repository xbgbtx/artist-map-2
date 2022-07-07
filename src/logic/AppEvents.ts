import { ArtistMapEvents } from '../ArtistMapTypes.js'

export function dispatchAppEvent(e: ArtistMapEvents.BaseEvent) {
  window.dispatchEvent(
    new CustomEvent('app-event', {
      bubbles: true,
      composed: true,
      detail: e,
    })
  );
}

