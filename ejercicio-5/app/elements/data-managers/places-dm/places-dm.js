{
 const { Element } = Polymer;

 class PlacesDm extends Element {

    static get is() {
      return 'places-dm';
    }

    static get properties() {
      return {}
    }

    getAllPlaces() {
      return JSON.parse(sessionStorage.getItem('places')) || [];
    }

    savePlace(newPlace) {
      let placesStored = JSON.parse(sessionStorage.getItem('places')) || [];

      placesStored.push(newPlace);
      sessionStorage.setItem('places', JSON.stringify(placesStored));
    }

  }

  window.customElements.define(PlacesDm.is, PlacesDm);
}
