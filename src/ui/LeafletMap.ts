import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { createMap } from '../logic/Leaflet.js';

@customElement('am-leaflet-map')
export class LeafletMap extends LitElement {
  static styles = css``;

  constructor() {
    super();

    this.updateComplete.then(() => {
      const mapDiv = this.shadowRoot?.getElementById('mapDiv');

      if (mapDiv != null) createMap(mapDiv);
    });
  }

  render() {
    return html`
      <main>
        <div id="mapDiv"></div>
      </main>
    `;
  }
}
