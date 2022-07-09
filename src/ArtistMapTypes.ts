import { Map } from 'leaflet';

export namespace ArtistMapEvents {
  export interface BaseEvent {
    type: string;
  }

  export interface MapDivCreated {
    mapDiv: HTMLElement;
  }
}

export interface ArtistMapContext {
  artists: Array<string>;
  mapDiv: HTMLElement | null;
  map: Map | null;
}

export function initialContext() {
  return {
    artists: [],
    mapDiv: null,
    map: null,
  };
}
