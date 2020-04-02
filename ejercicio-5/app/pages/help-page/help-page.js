{
  const CellsPage = customElements.get('cells-page');

  class HelpPage extends CellsPage {

    static get is() {
      return 'help-page';
    }

    static get properties() {
      return {
        title: {
          type: String,
          value: 'Ayuda'
        },
        description: {
          type: String,
          value: 'Con esta app podrás rápidamente administrar tu lista de lugares pendientes de visitar'
        }
      }
    }

    backToHome() {
      this.navigate('home', {});
    }

  }

  window.customElements.define(HelpPage.is, HelpPage);
}
