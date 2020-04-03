{
  const CellsPage = customElements.get('cells-page');

  class AddPage extends CellsPage {

    static get is() {
      return 'add-page';
    }

    static get properties() {
      return {
        title: {
          type: String,
          value: 'Añadir'
        }
      }
    }

    backToHome() {
      this.$.newPlaceInput.validate();

      if(!this.$.newPlaceInput.invalid) {
        this.publish('ch_send_new_place', this.$.newPlaceInput.value);
        this.navigate('home', {});
      }
    }

  }

  window.customElements.define(AddPage.is, AddPage);
}
