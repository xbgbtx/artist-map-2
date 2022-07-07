import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { artistMapService } from './xstate/ArtistMapMachine.js'
import { ArtistMapEvents } from './xstate/ArtistMapTypes.js'
import './WikidataFetch.js'

function forwardAppEvent(e: Event) {
  artistMapService.send((e as CustomEvent).detail);
}

export function dispatchAppEvent(e: ArtistMapEvents.BaseEvent) {
  window.dispatchEvent(
    new CustomEvent('app-event', {
      bubbles: true,
      composed: true,
      detail: e,
    })
  );
}
export class ArtistMap2 extends LitElement {

  @property()
  appState: string = "loading";

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
      (newState) => {
        const s = JSON.stringify(newState.value);
        this.appState = s.replace(/"/g, '');
      }
    );

    artistMapService.start();
    window.addEventListener('app-event', forwardAppEvent);

    setTimeout(()=>{
      dispatchAppEvent({ type: 'PageLoaded' });
    },0);
  }

  render() {
    return html`
      <main>
				<h1>Artist Map</h1>
        ${this.renderCurrentState()}
        <p>State = ${this.appState}</p>
      </main>
    `;
  }

  renderCurrentState() {
    switch (this.appState) {
      case 'init' : 
        return  html`<p>Loading</p>`;
      case 'fetchingWikidata' :
        return html`<p>Fetching Data from Wikidata</p>`        
      default:
        return html`<p>An error has occurred please reload.</p>`
    }
  }
}
