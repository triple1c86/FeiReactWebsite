var React = require('react');
var Logo = require('Logo');
var {Link} = require('react-router');



var ProjectsList = React.createClass ({
  render: function() {
    var list = this.props.projectsData.map(function(projectsProps){
      return <ProjectsD {...projectsProps} />
    });
    return <div>
      {list}
    </div>
  }
});


var ProjectsD = React.createClass ({
  render: function () {
    return<div>
        <h1>{this.props.name}</h1>
        <p>{this.props.mainUrl}</p>
        <p>{this.props.description}</p>
        <p>{this.props.otherUrls}</p>
    </div>
  }
});

var projectsData = [{
  'name' : 'project1',
  'mainUrl' : '-url',
  'description' : 'bla bla bla',
  'otherUrls' : ''
}, {
  'name' : 'project2',
  'mainUrl' : '-url',
  'description' : 'bla bla bla',
  'otherUrls' : ''
}, {
  'name' : 'project3',
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
    rightOrLeft: 'right-arrow',
    filter: ''
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
  let rightTrain = ["rightTrain"];
  if(this.state.addClass){
    rightTrain.push('moveRight');
  }

return (
  <div id= 'rightPage' className ={rightTrain.join(' ')} style={{ zIndex: this.state.indexZ}}>

      <div id="leftInner" className='page'>

        <div id="container">
          <div id="projectImg" style={{filter: this.state.filter}}></div>
          <a onClick={this.toggle}>
            <span className={this.state.rightOrLeft}></span>
          </a>
        </div>
      </div>
      <div id="rightInner" className='page'>


          <ProjectsList projectsData={projectsData} />
      </div>
  </div>
);
}
}

module.exports = Projects;
