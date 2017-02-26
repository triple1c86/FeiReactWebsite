var React = require('react');
var Logo = require('Logo');
var {Link} = require('react-router');

class Projects extends React.Component {
constructor(props) {
  super(props);

}




render() {



return (
  <div id= 'rightPage' className ={rightTrain.join(' ')} style={{ zIndex: this.state.indexZ}}>
    <h2 className='text-left'>Right Page</h2>
      <div id="leftInner" className='page'>
        <h2 className='text-right'>Inner Left</h2>
        <div id="projectImg">
          <a onClick={this.toggle}>
            <span className="right-arrow"></span>
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
