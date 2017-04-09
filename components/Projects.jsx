var React = require('react');
var Logo = require('Logo');
var {Link} = require('react-router');
var ArrowButton = require('ArrowButton');
import Image from './Image.jsx';
import testimg from './../components/images/projects/foresta/cover.jpg';


import Tappable from 'react-tappable';

const {Fullpage, Slide, HorizontalSlider, Overlay, changeHorizontalSlide, changeFullpageSlide} = require('fullpage-react');



let fullPageOptions = {
  // for mouse/wheel events
  // represents the level of force required to generate a slide change on non-mobile, 10 is default
  scrollSensitivity: 2,

  // for touchStart/touchEnd/mobile scrolling
  // represents the level of force required to generate a slide change on mobile, 10 is default
  touchSensitivity: 2,
  scrollSpeed: 500,
  resetSlides: true,
  hideScrollBars: true
};

let topNavStyle = {
  textAlign: 'center',
  position: 'fixed',
  width: '100%',
  cursor: 'pointer',
  zIndex: 10,
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  top: '0px'
};

let horizontalNavStyle = {
  position: 'relative',
  top: '50%'
};

let horizontalSliderProps = {
  name: 'horizontalSlider1',
  scrollSpeed: 500,
  infinite: true,
  resetSlides: false,
  scrollSensitivity: 2,
  touchSensitivity: 2
};
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
  'mainUrl' : './../components/images/projects/foresta/cover.jpg',
  'description' : 'bla bla bla',
  'otherUrls' : ''
}, {
  'name' : 'project2',
  'mainUrl' : './../components/images/projects/foresta/cover.jpg',
  'description' : 'bla bla bla',
  'otherUrls' : ''
}, {
  'name' : 'project3',
  'mainUrl' : './../components/images/projects/foresta/cover.jpg',
  'description' : 'bla bla bla',
  'otherUrls' : ''
}];

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

var data = {
    'images':[
      'projects/foresta/cover.jpg',
      'projects/project2/cover.jpg',
      'projects/project3/cover.jpg',
      'projects/foresta/cover.jpg',
      'projects/foresta/cover.jpg',
    ]
}


class Projects extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    addClass: false,
    indexZ: 0,
    rightOrLeft: 'right-arrow',
/*  filter: '', */
    active: {
        Fullpage: 0,
        horizontalSlider1: 0
      },
      previous: {
        Fullpage: 0,
        horizontalSlider1: 0
      }
  };
  this.toggle = this.toggle.bind(this);
/* SLIDE PROBLEM STILL */
  this.onSlideChangeStart = this.onSlideChangeStart.bind(this);
  this.onSlideChangeEnd = this.onSlideChangeEnd.bind(this);
}

toggle() {
  this.setState({
    indexZ: this.state.indexZ+1,
    addClass: !this.state.addClass,
    rightOrLeft: this.state.rightOrLeft == 'right-arrow' ? 'left-arrow' : 'right-arrow',
/*    filter: 'none, style.WebkitTransition : grayscale(0%)' */
  });
  if(this.state.indexZ==1){
    this.setState({indexZ: 0});
  }
}
/* SLIDE PROBLEM STILL */
onSlideChangeStart(name, state) {
    console.log('slide STARTED for', name, state.activeSlide);
    var sliderState = { previous: {} };
    sliderState.previous[name] = state.activeSlide;
    this.setState(sliderState);
  }

  onSlideChangeEnd(name, state) {
    console.log('slide ENDED for', name, state.activeSlide);
    var sliderState = { active: {} };
    sliderState.active[name] = state.activeSlide;
    this.setState(sliderState);
  }

  /* FUNCTION FOR IMAGES key={image}*/
  createImage (image) {
    return <div><Image source={image}/></div>;
  }

  createImages (images) {
    return images.map(this.createImage);
  }


render() {
  let rightTrain = ["rightTrain"];
  if(this.state.addClass){
    rightTrain.push('moveRight');
  }

/* SLIDE PROBLEM STILL */
  let prevSlide = changeFullpageSlide.bind(null, 'PREV');
    let nextSlide = changeFullpageSlide.bind(null, 'NEXT');
    let backToTop = changeFullpageSlide.bind(null, 0);

    let topNav = (
      <Overlay style={topNavStyle}>
        <Tappable onTap={prevSlide}>
          <button>Previous Slide</button>
        </Tappable>
        <Tappable onTap={backToTop}>
          <button>Back to Top</button>
        </Tappable>
        <Tappable onTap={nextSlide}>
          <button>Next Slide</button>
        </Tappable>
      </Overlay>
    );

    let prevHorizontalSlide = changeHorizontalSlide.bind(null, 'horizontalSlider1', 'PREV');
    let nextHorizontalSlide = changeHorizontalSlide.bind(null, 'horizontalSlider1', 'NEXT');

    let horizontalNav = (
      <Overlay style={{top: '50%'}}>
        <div style={horizontalNavStyle}>
          <Tappable onTap={prevHorizontalSlide}><button>PREV</button></Tappable>
          <Tappable style={{position: 'absolute', right: '0px'}} onTap={nextHorizontalSlide}><button>Next</button></Tappable>
        </div>
      </Overlay>
    );
    var imgurl = require('./../components/images/projects/project2/cover.jpg');
    var projectStyles = {
      backgroundImage: 'url(' + imgurl + ')'
    };

return (
  <div id= 'rightPage' className ={rightTrain.join(' ')} style={{ zIndex: this.state.indexZ}}>

    <Fullpage onSlideChangeStart={this.onSlideChangeStart} onSlideChangeEnd={this.onSlideChangeEnd} {...fullPageOptions}>

    {/*{topNav}*/}

    <Slide className="blue">
      <div id="leftInner" className='page'>

        {/* {this.state.filter}, */}
        <div id="container">
          <div id="projectImg" style={{projectStyles}}></div>

            <a onClick={this.toggle}>
              <span className={this.state.rightOrLeft}></span>
            </a>

        </div>
      </div>
      <div id="rightInner" className='page'>
        <div id="container">

            {this.createImages(data.images)}

      </div>
  {/*    <img className="logo" src={testimg} />
          <ProjectsList projectsData={projectsData} /> */}

      </div>

    </Slide>


    <Slide className="dark-blue">
      <div id="leftInner" className='page'>


        <div id="container">
          <div id="projectImg" style={{filter: this.state.filter}}></div>
          <a onClick={this.toggle}>
            <span className={this.state.rightOrLeft}></span>
          </a>
        </div>
      </div>
      <div id="rightInner" className='page'>
        <p><br/>Slide 1</p>

          <ProjectsList projectsData={projectsData} />
      </div>
      <p>Slide 3</p>
    </Slide>
    <Slide className="green"><p>Slide 4</p></Slide>
  </Fullpage>


  </div>
);
}
}

module.exports = Projects;


{/*
    <HorizontalSlider {...horizontalSliderProps}>
      <Slide className="red"><p><br/>Slide 2</p><p>Horizontal 1</p></Slide>

      <Slide className="yellow"><p>Slide 2</p><p>Horizontal 2</p></Slide>

      <Slide className="green"><p>Slide 2</p><p>Horizontal 3</p></Slide>

      {horizontalNav}
    </HorizontalSlider>
*/}
