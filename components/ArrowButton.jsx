var React = require('react');

class ArrowButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rightOrLeft: 'right-arrow'
    };
    this.toggle = this.toggle.bind(this);
  }
}
