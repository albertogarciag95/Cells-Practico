{
  const CellsPage = customElements.get('cells-page');

  class HomePage extends CellsPage {

    static get is() {
      return 'home-page';
    }

    static get properties() {
      return {
        title: {
          type: String,
          value: 'Mi checklist de lugares'
        },
        places: {
          type: Array,
          value: () => ([ 'Bangkok', 'London', 'Istambul', 'Marrakech', 'Bali', 'Iceland' ])
        }
      }
    }

    navigateToHelp() {
      this.navigate('help', {});
    }

  }

  window.customElements.define(HomePage.is, HomePage);
}
