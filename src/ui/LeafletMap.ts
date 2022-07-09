import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { dispatchAppEvent } from '../logic/AppEvents.js';

@customElement('am-leaflet-map')
export class LeafletMap extends LitElement {
  static styles = css`
    #mapDiv {
      width: 800px;
      height: 600px;
    }
  `;

  constructor() {
    super();

    this.updateComplete.then(() => {
      const mapDiv = this.shadowRoot?.getElementById('mapDiv');

      if (mapDiv != null) {
        const type = 'MapDivCreated';
        const e = { type, mapDiv };
        dispatchAppEvent(e);
      }
    });
  }

  render() {
    return html`
      <link rel="stylesheet" href="./node_modules/leaflet/dist/leaflet.css" />
      <main>
        <div id="mapDiv"></div>
      </main>
    `;
  }
}
