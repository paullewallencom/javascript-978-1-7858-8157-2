/**
 * Facade example
 */
class Facade {
  constructor(){
    mediator.on( "show-dashboard", function(){
      this.dashboard.show()
      this.userPanel.remove();
    }, this )
    .on( "show-userpanel", function(a){
      this.dashboard.hide()
      this.userPanel = new UserPanel( this.user );
    }, this )
    .on( "authorized", function( user ){
      this.user = user;
      this.topBar = new TopBar( user.name );
      this.dashboard = new Dashboard( user.lang );
      this.mainMenu = new MainMenu( user.lang );
    }, this )
    .on( "logout", function(){
      this.userPanel.remove();
      this.topBar.remove();
      this.dashboard.remove();
      this.mainMenu.remove();
      this.login = new Login();
    }, this );
  }
}