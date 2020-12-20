/**
 * Async flow in a wild example
 */
"use strict";

require([ "news", "Session", "User", "Ui" ], function ( News, Session, User, Ui ) {
  var session = new Session(),
      news = new News(),
      ui = new Ui({ el: document.querySelector( "[data-bind=ui]" ) });
  // load news
 news.load( ui.update );
 //  authorize user
 session.authorize(function( token ){
   var user = new User( token );
   // load user data
   user.load(function(){
     ui.update();
     // load user profile picture
     user.loadProfilePicture( ui.update );
     // load user notifications
     user.loadNotifications( ui.update );
   });
 });
});