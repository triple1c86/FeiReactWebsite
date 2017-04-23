var React = require('react');
var Projects = require('Projects');
var Contact = require('Contact');
var Tappable = require ('react-tappable');

class Content extends React.Component {
  constructor(props)  {
    super(props);
    this.state = {
      name: 'Project Title'
    }
  }

  render() {
  return (
    <div id='wrapper'>

      <Contact name={this.state.name} />

      <Projects />

    </div>
    );
  }
}

module.exports = Content;
