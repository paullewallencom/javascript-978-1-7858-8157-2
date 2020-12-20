class News {
  /** Initialize */
  constructor(){
    mediator.on( "translate", this.update, this );
  }
  /** @param {String} lang */
  update( lang ){
    // fetch news from remote host for a given lang
    console.log( "News loaded for", lang );
  }
}

class Language {
  /** @param {String} lang */
  change( lang ) {
    mediator.trigger( "translate", lang );
  }
}

let language = new Language();
new News()
language.change( "de" );