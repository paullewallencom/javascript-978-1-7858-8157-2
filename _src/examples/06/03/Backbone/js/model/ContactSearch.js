 "use strict";
/** @class {ContactSearchModel}  */
var ContactSearchModel = Backbone.Model.extend(/** @lends ContactSearchModel.prototype */{
  /** @type {Object} */
  defaults: {
    email: ""
  },
  /**
   * Validate email
  * @param {String} email
  */
  isEmailValid: function( email ) {
    var pattern = /^[a-zA-Z0-9\!\#\$\%\&\'\*\+\-\/\=\?\^\_\`\{\|\}\~\.]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}$/g;
    return email.length && pattern.test( email );
  },
  /**
   * Validate model
  * @param {Map} attrs
  */
  validate: function( attrs ) {
    if ( !attrs.email ) {
      return "Email is required.";
    }
    if ( !this.isEmailValid( attrs.email ) ) {
      return "Invalid email address.";
    }
  }
});
