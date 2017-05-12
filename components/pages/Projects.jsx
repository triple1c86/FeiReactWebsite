var React = require('react');
var Logo = require('Logo');
var ArrowButton = require('ArrowButton');
var Gallery = require('Gallery');

import Lightbox from 'react-images';
import $ from 'jquery';
import 'fullpage.js';

const projectsData = [{
  name : 'Foresta',
  cover : './../components/images/projects/foresta/cover.jpg',
  description : 'bla bla bla',
  images :[
            { url: 'projects/foresta/img_1.jpg',
              caption: 'photo1',
              orientation: 'square',
              useForDemo: true  },
            { url: 'projects/foresta/img_2.jpg',
              caption: 'photo2',
              orientation: 'square',
              useForDemo: true  },
            { url: 'projects/foresta/img_3.jpg',
              caption: 'photo3',
              orientation: 'square',
              useForDemo: true  },
            { url: 'projects/foresta/img_4.jpg',
              caption: 'photo4',
              orientation: 'square',
              useForDemo: true  },
            { url: 'projects/foresta/img_5.jpg',
              caption: 'photo5',
              orientation: 'square',
              useForDemo: true  },
            { url: 'projects/foresta/img_6.jpg',
              caption: 'photo6',
              orientation: 'square',
              useForDemo: true  },
          ]
}, {
  name : 'Kiaramas',
  cover : './../components/images/projects/kiaramas/cover.jpg',
  description : 'bla bla bla',
  images :[
            { url: 'projects/kiaramas/img_1.jpg',
              caption: 'photo1',
              orientation: 'square',
              useForDemo: true  },
            { url: 'projects/kiaramas/img_2.jpg',
              caption: 'photo2',
              orientation: 'square',
              useForDemo: true  },
            { url: 'projects/kiaramas/img_3.jpg',
              caption: 'photo3',
              orientation: 'square',
              useForDemo: true  },
            { url: 'projects/kiaramas/img_4.jpg',
              caption: 'photo4',
              orientation: 'square',
              useForDemo: true  },
            { url: 'projects/kiaramas/img_5.jpg',
              caption: 'photo5',
              orientation: 'square',
              useForDemo: true  },

          ]
}, {
  name : 'Inside Scoop',
  cover : './../components/images/projects/scoop/cover.jpg',
  description : 'bla bla bla',
  images :[
            { url: 'projects/scoop/img_1.jpg',
              caption: 'photo1',
              orientation: 'square',
              useForDemo: true  },
            { url: 'projects/scoop/img_2.jpg',
              caption: 'photo2',
              orientation: 'square',
              useForDemo: true  },
            { url: 'projects/scoop/img_3.jpg',
              caption: 'photo3',
              orientation: 'square',
              useForDemo: true  },
            { url: 'projects/scoop/img_4.jpg',
              caption: 'photo4',
              orientation: 'square',
              useForDemo: true  },
            { url: 'projects/scoop/img_5.jpg',
              caption: 'photo5',
              orientation: 'square',
              useForDemo: true  },

          ]
}];

function makeImgSrc (url) {
	return require('./../../components/images/' + url);
}


/*MAIN COMPONENT*/
class Projects extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    addClass: false,
    indexZ: 0,
    rightOrLeft: 'right-arrow',
    filter: 'grayscale(90%)',
    title: 'Foresta',
    address: 'Bandar Sri Damansara'

  };
  this.toggle = this.toggle.bind(this);

}

componentDidMount() {
    $('#fullpage').fullpage({
      anchors: ['foresta','kiaramas','inside'],
      navigationTooltips: ['Foresta', 'Kiaramas','Inside Scoop'],
      navigation: true,
      showActiveTooltip: true,

    css3: true,
		scrollingSpeed: 1000,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
    continuousVertical: true,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,



    onLeave: function(index, nextIndex, direction){
     switch(nextIndex) {
       case 1:
         this.setState({
           title: 'Foresta',
           address: 'Bandar Sri Damansara'
         });
        break;
         case 2:
         this.setState({
           title: 'Kiaramas',
           address: 'Mont Kiara'
         });
        break;
         case 3:
         this.setState({
           title: 'Inside Scoop',
           address: 'Mahkota Cheras'
         });
        break;
     //etc
     }
 }.bind(this),
    });
  }

/*############### FUNCTIONS ###################*/
toggle() {
  this.setState({
    indexZ: this.state.indexZ+1,
    addClass: !this.state.addClass,
    rightOrLeft: this.state.rightOrLeft == 'right-arrow' ? 'left-arrow' : 'right-arrow',
    filter: this.state.filter == 'grayscale(90%)' ? 'none' : 'grayscale(90%)'
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

    var urlP1 = require('./../../components/images/projects/foresta/cover.jpg');
    var project1 = {
      backgroundImage: 'url(' + urlP1 + ')'
    };

    var urlP2 = require('./../../components/images/projects/kiaramas/cover.jpg');
    var project2 = {
      backgroundImage: 'url(' + urlP2 + ')'
    };

    var urlP3 = require('./../../components/images/projects/scoop/cover.jpg');
    var project3 = {
      backgroundImage: 'url(' + urlP3 + ')'
    };

return (
  <div id= 'rightPage' className ={rightTrain.join(' ')} style={{ zIndex: this.state.indexZ}}>

    <a>
      <span onClick={this.toggle} style={{cursor: 'pointer'}} className={this.state.rightOrLeft}></span>
    </a>
    <div className='title'>
      <h1>{this.state.title}</h1>
      <h4>{this.state.address}</h4>
    </div>
    <div id="fullpage">
        <div className="section active">
          <div id="leftInner" className='page'>

              <div id="projectImg" style={Object.assign({}, project1, {filter:this.state.filter})}></div>

          </div>

          <div id="rightInner" className='page'>


            <Gallery images={projectsData[0].images.map(({ caption, url, useForDemo, orientation }) => ({
                src: makeImgSrc(url),
                thumbnail: makeImgSrc(url),
                caption,
                orientation,
                useForDemo,
              }))} showThumbnails/>
          </div>
        </div>


        <div className="section">
          <div id="leftInner" className='page'>
              <div id="projectImg" style={Object.assign({}, project2, {filter:this.state.filter})}></div>
          </div>

          <div id="rightInner" className='page'>

            <Gallery images={projectsData[1].images.map(({ caption, url, useForDemo, orientation }) => ({
        src: makeImgSrc(url),
        thumbnail: makeImgSrc(url),
        caption,
        orientation,
        useForDemo,
      }))} showThumbnails/>
          </div>
        </div>

        <div className="section">
          <div id="leftInner" className='page'>
              <div id="projectImg" style={Object.assign({}, project3, {filter:this.state.filter})}></div>
          </div>

          <div id="rightInner" className='page'>

            <Gallery images={projectsData[2].images.map(({ caption, url, useForDemo, orientation }) => ({
        src: makeImgSrc(url),
        thumbnail: makeImgSrc(url),
        caption,
        orientation,
        useForDemo,
      }))} showThumbnails/>
          </div>
        </div>
      </div>


  </div>
);
}
}

module.exports = Projects;
