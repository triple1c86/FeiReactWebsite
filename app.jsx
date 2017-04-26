var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, Switch, BrowserRouter} = require('react-router-dom');
var Main = require('Main');
var Content = require('Content');
var About = require('About');
var Contact = require('Contact');
var Projects = require('Projects');


// Load foundation
  require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css')
 // $(document).foundation();
 //require("foundation-sites-loader");

// App css
require('style-loader!css-loader!sass-loader!applicationStyles')
//require('style-loader!css-loader!fullreactNorm')
//require('style-loader!css-loader!fullreactSke')
require('style-loader!css-loader!sass-loader!exampleStyles')


// App font
require('style-loader!css-loader!sass-loader!applicationFonts')

const App = () => (
  <Switch>
    <Route exact path="/" component={About} />
      <Route path="/about" component={About} />
      <Route path="/content" component={Content}/>
      <Route path="/projects" render= {()=>(
          <Content rightOrLeft='left-arrow' />
        )} />
      <Route path="/contact" component={Content} />
  </Switch>
)

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'))
