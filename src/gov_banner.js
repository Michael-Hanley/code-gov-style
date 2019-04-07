/* global HTMLElement */
  class GovBanner extends HTMLElement {

    constructor() {
        super();
    }
  
    static get observedAttributes() {
      return ['flag_icon', 'alt', 'title'];
    }
  
    // fires after the element has been attached to the DOM
    connectedCallback() {
      this.update();
    }
  
    attributeChangedCallback(attrName) {
      if ( attrName === 'flag_icon' || attrName === 'alt' || attrName === 'title' ) {
        this.update();
      }
    }
  
    update() {
      return this.innerHTML = `
        <div class="banner-flag indented">
          <img src="${this.getAttribute('flag_icon')}" alt="${this.getAttribute('alt')}"/><span>${this.getAttribute('title')}</span>
        </div>
      `;
    }
    
  }
    /* global customElements */
  customElements.define('gov-banner', GovBanner);
