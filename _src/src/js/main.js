var DesktopView = require( "./View/Desktop" ),
    NavView = require( "./View/Nav" );

new NavView({ desktopView: new DesktopView() });
