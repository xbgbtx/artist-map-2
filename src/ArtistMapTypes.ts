export namespace ArtistMapEvents {
  export interface BaseEvent {
    type: string;
  }

}

export interface ArtistMapContext {
  artists: Array<string>;
}
