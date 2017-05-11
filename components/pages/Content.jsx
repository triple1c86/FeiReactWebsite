var React = require('react');
var Projects = require('Projects');
var Contact = require('Contact');

class Content extends React.Component {
  constructor(props)  {
    super(props);
    this.state = {
      name: 'Project Title',
      address: 'Project Address',
      rightOrLeft: ''
    }
  }

  render() {
  return (
    <div id='wrapper'>

      <Contact name={this.state.name} address={this.state.address} />

      <Projects onLoad= {this.props.rightOrLeft} />

    </div>
    );
  }
}

module.exports = Content;
