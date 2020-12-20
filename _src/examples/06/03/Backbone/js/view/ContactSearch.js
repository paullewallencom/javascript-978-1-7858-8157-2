"use strict";
/** @class {ContactSearchView}  */
var ContactSearchView = Backbone.View.extend(/** @lends ContactSearchView.prototype */{
  events: {
    "submit": "onSubmit"
  },
  /** @constructs {ContactSearchView} */
  initialize: function() {
    this.$email = this.$el.find( "[name=email]" );
    this.$errorMsg = this.$el.find( "[data-bind=errorMsg]" );
    this.$submitBtn = this.$el.find( "[data-bind=submitBtn]" );
    this.bindUi();
  },
  /** Bind handlers */
  bindUi: function(){
    this.$email.on( "input", this.onChange.bind( this ) );
    this.model.on( "invalid", this.onInvalid.bind( this ) );
    this.model.on( "change", this.onValid.bind( this ) );
  },
  /** Handle input onchange event */
  onChange: function(){
    this.model.set({
      email: this.$email.val(),
      // Hack to force model running validation on repeating payloads
      "model:state": ( 1 + Math.random() ) * 0x10000
    }, { validate: true });
  },
  /** Handle model in invalid state */
  onInvalid: function(){
    var error = arguments[ 1 ];
    this.$errorMsg.text( error );
    this.$submitBtn.prop( "disabled", "disabled" );
  },
  /** Handle model in valid state */
  onValid: function(){
    this.$errorMsg.empty();
    this.$submitBtn.removeProp( "disabled" );
  },
  /** Handle form submit */
  onSubmit: function( e ){
    e.preventDefault();
    alert( "Submitting " + this.model.get( "email") );
  }
});