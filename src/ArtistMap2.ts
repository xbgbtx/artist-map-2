import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { State } from 'xstate'
import { artistMapService } from './xstate/ArtistMapMachine.js'
import { ArtistMapEvents, ArtistMapContext } from './xstate/ArtistMapTypes.js'

function forwardAppEvent(e: Event) {
  artistMapService.send((e as CustomEvent).detail);
}

export function dispatchMCEvent(e: ArtistMapEvents.BaseEvent) {
  window.dispatchEvent(
    new CustomEvent('artist-map-event', {
      bubbles: true,
      composed: true,
      detail: e,
    })
  );
}
export class ArtistMap2 extends LitElement {


  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--artist-map-2-background-color);
    }

    main {
      flex-grow: 1;
    }

  `;

  constructor() {
    super();

    artistMapService.onTransition(
      (ctx, e) => {
        console.log(ctx);
        console.log(e);
      }
    );

    artistMapService.start();
  }

  render() {
    return html`
      <main>
				<h1>Artist Map</h1>
      </main>
    `;
  }
}
