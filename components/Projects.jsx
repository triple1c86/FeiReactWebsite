var React = require('react');
var Logo = require('Logo');
var {Link} = require('react-router');
var Contact = require('Contact');

var ProjectsList = [{
  'name' : 'project1',
  'b&wUrl' : '-url',
  'mainUrl' : '-url',
  'description' : 'bla bla bla',
  'otherUrls' : ''
}, {
  'name' : 'project2',
  'b&wUrl' : '-url',
  'mainUrl' : '-url',
  'description' : 'bla bla bla',
  'otherUrls' : ''
}, {
  'name' : 'project3',
  'b&wUrl' : '-url',
  'mainUrl' : '-url',
  'description' : 'bla bla bla',
  'otherUrls' : ''
}];

class Projects extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    addClass: false,
    indexZ: 0,
    rightOrLeft: 'right-arrow'
  };
  this.toggle = this.toggle.bind(this);
}

toggle() {
  this.setState({
    indexZ: this.state.indexZ+1,
    addClass: !this.state.addClass,
    rightOrLeft: this.state.rightOrLeft == 'right-arrow' ? 'left-arrow' : 'right-arrow'
  });
  if(this.state.indexZ==1){
    this.setState({indexZ: 0});
  }
}


render() {
  let rightTrain = ["rightTrain"];
  if(this.state.addClass){
    rightTrain.push('moveRight');
  }


return (
  <div id= 'rightPage' className ={rightTrain.join(' ')} style={{ zIndex: this.state.indexZ}}>
    <h2 className='text-left'>Right Page</h2>
      <div id="leftInner" className='page'>
        <h2 className='text-right'>Inner Left</h2>
        <div id="projectImg">
          <a onClick={this.toggle}>
            <span className={this.state.rightOrLeft}></span>
          </a>
        </div>
      </div>
      <div id="rightInner" className='page'>

        <h2 className='text-left'>Inner Right</h2>
      </div>
  </div>
);
}
}

module.exports = Projects;
