var LogoA = require('LogoA');
var React = require('react');


class Loader extends React.Component {
  constructor() {
    super();
    this.state = {
      opacity: 1,
      visibility: "visible",
      transform: 'translate3d(0,0,0)'

    };
  }

  onHide() {
    this.setState({
      transform: 'translate3d(0,-100%,0)',
      opacity: 0,
      visibility: "hidden"


    });
  }
    render() {
      return(
        
        <div id= 'loader' style={{ opacity: this.state.opacity, visibility: this.state.visibility, transform: this.state.transform}}>
          <a onClick={this.onHide.bind(this)} style={{cursor:'pointer'}}>
            <LogoA />
          </a>
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
