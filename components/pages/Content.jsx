var React = require('react');
var Projects = require('Projects');
var Contact = require('Contact');

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
