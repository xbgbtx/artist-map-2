import { Map } from 'leaflet';

export namespace ArtistMapEvents {
  export interface BaseEvent {
    type: string;
  }
}

export interface ArtistMapContext {
  artists: Array<string>;
  map: Map | null;
}

export function initialContext() {
  return {
    artists: [],
    map: null,
  };
}
