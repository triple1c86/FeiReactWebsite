var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, browserHistory} = require('react-router');
var Main = require('Main');
var Content = require('Content');
var About = require('About');
var Contact = require('Contact');


// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')
//require('style!css!fullreactNorm')
//require('style!css!fullreactSke')
require('style!css!sass!exampleStyles')


// App font
require('style!css!sass!applicationFonts')



ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={About} ></IndexRoute>
      <Route path="contact" component={Contact}></Route>
      <Route path="content" component={Content}></Route>
    </Route>
  </Router>
),
  document.getElementById('app')
);
