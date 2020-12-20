<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Unlocked JavaScript Examples</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="lib/highlight/default.css">
        <link rel="stylesheet" href="assets/css/main.css">
    </head>
    <body class="l-main">
      <header class="l-main-header">Unlocked JavaScript Examples</header>
      <div class="l-main-body l-desktop">
        <nav class="l-desktop-nav scrollbar">
          <ul class="contents" data-bind="nav">
					{{contents}}
          </ul>
        </nav>
        <div class="l-desktop-view">
          <div data-bind="src" src="assets/source.html" class="pane pane-src scrollbar">
            <p>Please, choose an example in the left-hand menu</p>
          </div>
          <div class="l-desktop-view-actions">
            <a href="#" target="exec" data-bind="run" class="btn btn-primary is-hidden">Run</a>
            <a data-bind="link" class="btn btn-link is-hidden" href="https://babeljs.io/repl/" target="_blank">Your browser may not yet support ES6, try this code in Babel</a>
          </div>

          <iframe data-bind="exec" src="assets/console.html" class="pane pane-exec is-hidden scrollbar" name="exec"></iframe>
        </div>
      </div>
      {{templates}}
    </body>
    <script src="Lib/highlight.js"></script>
    <script src="assets/js/main.js"></script>
</html>