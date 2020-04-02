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
          value: () => ([])
        }
      }
    }


    connectedCallback() {
      super.connectedCallback();
      this.subscribe('ch_send_new_place', newPlace => {
        this.$.placesDm.savePlace(newPlace)
      });
    }

    onPageEnter() {
      this.places = this.$.placesDm.getAllPlaces();
      this.isAnyPlace = !!this.places.length;
    }

    navigateToHelp() {
      this.navigate('help', {});
    }

    navigateToAdd() {
      this.navigate('add', {});
    }

  }

  window.customElements.define(HomePage.is, HomePage);
}
