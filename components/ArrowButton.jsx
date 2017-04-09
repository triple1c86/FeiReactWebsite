var React = require('react');

class ArrowButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rightOrLeft: 'right-arrow'
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      indexZ: this.state.indexZ+1,
      addClass: !this.state.addClass,
      rightOrLeft: this.state.rightOrLeft == 'right-arrow' ? 'left-arrow' : 'right-arrow',
      filter: 'none, style.WebkitTransition : grayscale(0%)'
    });
    if(this.state.indexZ==1){
      this.setState({indexZ: 0});
    }
  }

  render() {




  return (
  <a onClick={this.toggle}>
    <span className={this.state.rightOrLeft}></span>
  </a>

  );

  }
}



module.exports = ArrowButton;
