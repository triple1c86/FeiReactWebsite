var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, Switch, BrowserRouter, IndexRoute} = require('react-router-dom');
var Main = require('Main');
var Content = require('Content');
var About = require('About');
var Contact = require('Contact');
var Projects = require('Projects');


// Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css')

// App css
require('style-loader!css-loader!sass-loader!applicationStyles')

// App font
require('style-loader!css-loader!sass-loader!applicationFonts')

const App = () => (
  <div>
    <Route exact path="/" component={About} />
    <Route path="/about" component={About} />
    <Route path="/content" component={Content} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Content} />
  </div>
)

ReactDOM.render((
  <BrowserRouter>

      <App />

  </BrowserRouter>
), document.getElementById('app'))
