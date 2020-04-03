{
  const { Element } = Polymer;

  class HelpContent extends Element {

     static get is() {
       return 'help-content';
     }

     static get properties() {
       return {
         description: String
       }
     }


   }

   window.customElements.define(HelpContent.is, HelpContent);
 }
