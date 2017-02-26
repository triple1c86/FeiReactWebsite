  var React = require('react');
  var Logo = require('Logo');
  var {Link} = require('react-router');

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addClass: false,
      indexZ: 0
    };
    this.toggle = this.toggle.bind(this);
  }


  toggle() {
    this.setState({
      indexZ: this.state.indexZ +1,
      addClass: !this.state.addClass

    });
    if(this.state.indexZ==1){
      this.setState({indexZ: this.state.indexZ = 0});
    }

  }

  render() {
    let leftTrain = ["leftTrain"];
    if(this.state.addClass){
      leftTrain.push('moveLeft');
    }



  return (
    <div id= 'leftPage' className={leftTrain.join(' ')} style={{ zIndex: this.state.indexZ}}>

      <h2 className='text-right'>Left Page</h2>
      <div id="leftInner" className='page'>
        <h2 className='text-right'>Inner Left</h2>
          <article className='upper'>
              <p className='text-right'><b>Living Reflect Lifestyles</b> – we strongly believe in personal nature reflect the planning and setting of each spaces where we apply creative solution that ignite changes and improve quality of lifestyle.</p>

              <p className='text-right'>We works closely with each client, often the architects and contractors, in developing and executing the best design solution.<br /><br /><br /><Link to='/Contact'><b>bryan@custo.com.my<span className='tick right'></span></b></Link></p>
          </article>
          <ul className='social text-right'>
              <li>
                <div className='lava-link'>
                  <h4>PINTEREST<span className='tick right'></span></h4>
                </div>
              </li>
              <li>
                <div className='lava-link'>
                  <h4>INSTAGRAM<span className='tick right'></span></h4>
                </div>
              </li>
              <li>
                <div className='lava-link'>
                  <h4>FACEBOOK<span className='tick right'></span></h4>
                </div>
              </li>
            </ul>

      </div>

      <div id="rightInner" className='page'>
        <h2 className='text-left'>Inner Right</h2>

        <Logo width="175" height="100"/>

          <ul className='home text-left'>
              <li>
                <div className='lava-link'>
                  <a onClick={this.toggle}><h4>HOME<span className='tick'></span></h4></a>
                </div>
              </li>
            </ul>
      </div>
    </div>
  );
}
}

module.exports = Contact;
