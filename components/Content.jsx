var React = require('react');
var Projects = require('Projects');
var Contact = require('Contact');
var Tappable = require ('react-tappable');

class Content extends React.Component {
  constructor(props)  {
    super(props);

  }

  render() {
  return (
    <div id='wrapper'>

      <Contact />

      <Projects />

    </div>
    );
  }
}

module.exports = Content;
