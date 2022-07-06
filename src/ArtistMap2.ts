import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { artistMapService } from './xstate/ArtistMapMachine.js'

export class ArtistMap2 extends LitElement {

	@property()
	state: string = "foo";
	

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

  render() {
    return html`
      <main>
				<h1>Artist Map</h1>
				<p>Current state = ${this.state}</p>
      </main>
    `;
  }
}
