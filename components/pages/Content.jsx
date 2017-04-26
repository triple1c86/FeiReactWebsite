var React = require('react');
var Projects = require('Projects');
var Contact = require('Contact');
var Tappable = require ('react-tappable');

class Content extends React.Component {
  constructor(props)  {
    super(props);
    this.state = {
      name: 'Project Title',
      rightOrLeft: ''
    }
  }

  render() {
  return (
    <div id='wrapper'>

      <Contact name={this.state.name} />

      <Projects onLoad= {this.props.rightOrLeft} />

    </div>
    );
  }
}

module.exports = Content;
