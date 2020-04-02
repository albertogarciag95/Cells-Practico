{
  const CellsPage = customElements.get('cells-page');

  class HomePage extends CellsPage {

    static get is() {
      return 'home-page';
    }

    static get properties() {
      return {}
    }

  }

  window.customElements.define(HomePage.is, HomePage);
}
