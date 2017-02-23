var React = require('react');
var Loader = require('Loader');

var Contact = require('Contact');

class Content extends React.Component {
  constructor(props)  {
    super(props);

  }

  render() {
  return (
    <div id='wrapper'>

      <Contact />

      <div id= 'rightPage' className ='rightTrain'>
        <h2 className='text-left'>Right Page</h2>
          <div id="leftInner" className='page'>
            <h2 className='text-right'>Inner Left</h2>
            <div id="projectImg">
              <a href="#">
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
