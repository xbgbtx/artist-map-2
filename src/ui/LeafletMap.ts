import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('am-leaflet-map')
export class LeafletMap extends LitElement {

  static styles = css``;

  render() {
    return html`
      <main>
				<div id="mapdiv"></div>
      </main>
    `;
  }
}

