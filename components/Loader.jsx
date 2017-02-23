var LogoA = require('LogoA');
var React = require('react');
var {Link} = require('react-router');


class Loader extends React.Component {
  constructor() {
    super();
    this.state = {
      opacity: 1,
      visibility: "visible"

    };
  }

  onHide() {
    this.setState({
      opacity: 0,
      visibility: "hidden"


    });
  }
    render() {
      return(

      <div id= 'loader' style={{ opacity: this.state.opacity, visibility: this.state.visibility}}>
        <a onClick={this.onHide.bind(this)} style={{cursor:'pointer'}}><LogoA /></a>
        <div className= 'scrollZone t10'>
          <div className= 'trackLine'>
            <div className='innerLine'>
              <div className='fill'>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

};

module.exports = Loader;
