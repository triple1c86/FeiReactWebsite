var React = require('react');
var Logo = require('Logo');
var {Link} = require('react-router');
var ArrowButton = require('ArrowButton');
import Image from './Image.jsx';

import Lightbox from 'react-images';
import Tappable from 'react-tappable';


import Gallery from './Gallery.jsx';




const {Fullpage, Slide, HorizontalSlider, Overlay, changeHorizontalSlide, changeFullpageSlide} = require('fullpage-react');



let fullPageOptions = {
  // for mouse/wheel events
  // represents the level of force required to generate a slide change on non-mobile, 10 is default
  scrollSensitivity: 5,

  // for touchStart/touchEnd/mobile scrolling
  // represents the level of force required to generate a slide change on mobile, 10 is default
  touchSensitivity: 5,
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



const projectsData = [{
  name : 'Foresta',
  cover : './../components/images/projects/foresta/cover.jpg',
  description : 'bla bla bla',
  images :[
            { url: 'projects/foresta/img_1.jpg',
              caption: 'test1',
              orientation: 'square',
              useForDemo: true  },
            { url: 'projects/foresta/img_2.jpg',
              caption: 'test2',
              orientation: 'square',
              useForDemo: true  },
            { url: 'projects/foresta/img_3.jpg',
              caption: 'test3',
              orientation: 'square',
              useForDemo: true  },
            { url: 'projects/foresta/img_4.jpg',
              caption: 'test4',
              orientation: 'square',
              useForDemo: true  },
            { url: 'projects/foresta/img_5.jpg',
              caption: 'test5',
              orientation: 'square',
              useForDemo: true  },
            { url: 'projects/foresta/img_6.jpg',
              caption: 'test6',
              orientation: 'square',
              useForDemo: true  },
          ]
}, {
  name : 'Kiaramas',
  cover : './../components/images/projects/kiaramas/cover.jpg',
  description : 'bla bla bla',
  images :[
            { url: 'projects/kiaramas/img_1.jpg',
              caption: 'test1',
              orientation: 'square',
              useForDemo: true  },
            { url: 'projects/kiaramas/img_2.jpg',
              caption: 'test2',
              orientation: 'square',
              useForDemo: true  },
            { url: 'projects/kiaramas/img_3.jpg',
              caption: 'test3',
              orientation: 'square',
              useForDemo: true  },
            { url: 'projects/kiaramas/img_4.jpg',
              caption: 'test4',
              orientation: 'square',
              useForDemo: true  },
            { url: 'projects/kiaramas/img_5.jpg',
              caption: 'test5',
              orientation: 'square',
              useForDemo: true  },

          ]
}, {
  name : 'Project3',
  cover : './../components/images/projects/project3/cover.jpg',
  description : 'bla bla bla',
  images :[
            { url: 'projects/project3/img_1.jpg',
              caption: 'test1',
              orientation: 'square',
              useForDemo: true  },
            { url: 'projects/project3/img_2.jpg',
              caption: 'test2',
              orientation: 'square',
              useForDemo: true  },
            { url: 'projects/project3/img_3.jpg',
              caption: 'test3',
              orientation: 'square',
              useForDemo: true  },
            { url: 'projects/project3/img_4.jpg',
              caption: 'test4',
              orientation: 'square',
              useForDemo: true  },
            { url: 'projects/project3/img_5.jpg',
              caption: 'test5',
              orientation: 'square',
              useForDemo: true  },

          ]
}];


var data = {
    images :[
      'projects/foresta/cover.jpg',
      'projects/kiaramas/cover.jpg',
      'projects/project3/cover.jpg',
      'projects/foresta/cover.jpg',
      'projects/foresta/cover.jpg',
    ]
}


/* MAIN GALLERY STUFF */

const DEFAULT_IMAGES = [
	{ id: '1470619549108-b85c56fe5be8',
    caption: 'Photo by Alan Emery',
     orientation: 'square',
     useForDemo: true },
     // https://unsplash.com/photos/SYzUF6XcWBY (Flamingo)
	{ id: '1471079502516-250c19af6928',
    caption: 'Photo by Jeremy Bishop',
    orientation: 'square',
    useForDemo: true },
    // https://unsplash.com/photos/GIpGxe2_cT4 (Turtle)
	{ id: '1454023492550-5696f8ff10e1',
    caption: 'Photo by Jessica Weiller',
    orientation: 'square',
    useForDemo: true },
    // https://unsplash.com/photos/LmVSKeDy6EA (Tiger)
	{ id: '1470854989922-5be2f7456d78',
    caption: 'Photo by Piotr Łaskawski',
    orientation: 'square',
    useForDemo: true },
    // https://unsplash.com/photos/GXMr7BadXQo (Hedgehog)
	{ id: '1470317596697-cbdeda56f999',
    caption: 'Photo by Michel Bosma',
    orientation: 'square',
    useForDemo: true },
    // https://unsplash.com/photos/XgF9e93Tkt0 (Ladybug)
];

function makeUnsplashSrc (url) {
	return require('./../components/images/' + url);
}
function makeUnsplashSrcSet (id, size) {
	return 'https://images.unsplash.com/photo-${id}?dpr=2&auto=format&w=${size} ${size}w';
}
function makeUnsplashThumbnail (url, orientation = 'landscape') {
	const dimensions = orientation === 'square'
		? 'w=400&h=300'
		: 'w=240&h=159';

	return require('./../components/images/' + url);
}




/*MAIN COMPONENT*/
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


/*############### FUNCTIONS ###################*/
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
    return <div><Image source={image} key={name}/></div>;
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


    var imgurl = require('./../components/images/projects/kiaramas/cover.jpg');
    var projectStyles = {
      backgroundImage: 'url(' + imgurl + ')',
      backgroundPosition: 'center center'
    };

return (
  <div id= 'rightPage' className ={rightTrain.join(' ')} style={{ zIndex: this.state.indexZ}}>

    <Fullpage onSlideChangeStart={this.onSlideChangeStart} onSlideChangeEnd={this.onSlideChangeEnd} {...fullPageOptions}>

    {/*{topNav}*/}

    <Slide>
      <div id="leftInner" className='page'>

        {/* {this.state.filter}, */}
        <div id="container">
          <div id="projectImg" style={projectStyles}></div>

            <a onClick={this.toggle}>
              <span className={this.state.rightOrLeft}></span>
            </a>

        </div>
      </div>

      <div id="rightInner" className='page'>
        <div id="container">

        <Gallery images={projectsData[0].images.map(({ caption, url, useForDemo, orientation }) => ({
    src: makeUnsplashSrc(url),
    thumbnail: makeUnsplashThumbnail(url, orientation),
    caption,
    orientation,
    useForDemo,
  }))} showThumbnails/>



        </div>
      </div>
    </Slide>


    <Slide>
      <div id="leftInner" className='page'>

        {/* {this.state.filter}, */}
        <div id="container">
          <div id="projectImg" style={projectStyles}></div>

            <a onClick={this.toggle}>
              <span className={this.state.rightOrLeft}></span>
            </a>

        </div>
      </div>

      <div id="rightInner" className='page'>
        <div id="container">

        <Gallery images={projectsData[1].images.map(({ caption, url, useForDemo, orientation }) => ({
    src: makeUnsplashSrc(url),
    thumbnail: makeUnsplashThumbnail(url, orientation),
    caption,
    orientation,
    useForDemo,
  }))} showThumbnails/>



        </div>
      </div>
    </Slide>

    <Slide>
      <div id="leftInner" className='page'>

        {/* {this.state.filter}, */}
        <div id="container">
          <div id="projectImg" style={projectStyles}></div>

            <a onClick={this.toggle}>
              <span className={this.state.rightOrLeft}></span>
            </a>

        </div>
      </div>

      <div id="rightInner" className='page'>
        <div id="container">

        <Gallery images={projectsData[2].images.map(({ caption, url, useForDemo, orientation }) => ({
    src: makeUnsplashSrc(url),
    thumbnail: makeUnsplashThumbnail(url, orientation),
    caption,
    orientation,
    useForDemo,
  }))} showThumbnails/>



        </div>
      </div>
    </Slide>
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
