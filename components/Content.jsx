var React = require('react');
var Loader = require('Loader');
var Projects = require('Projects')
var Contact = require('Contact');

class Content extends React.Component {
  constructor(props)  {
    super(props);
    this.state = {
      addClass: false,
      indexZ: 0,
      addClass2: ""
    };
    this.toggle = this.toggle.bind(this);
    }

    toggle() {
    this.setState({
      indexZ: this.state.indexZ+1,
      addClass: !this.state.addClass,
      addClass2: "moveRight"
    });
    }
  render() {
    let rightTrain = ["rightTrain"];

  return (
    <div id='wrapper' className={this.state.addClass2}>

      <Contact />

        <div id= 'rightPage' className ='rightTrain'>
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


      <Loader />

    </div>
    );
  }
}

module.exports = Content;
