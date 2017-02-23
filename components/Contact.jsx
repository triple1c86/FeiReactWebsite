  var React = require('react');
  var Logo = require('Logo');
  var {Link} = require('react-router');

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    this.goLeft = this.goLeft.bind(this);
  }

  goLeft() {
    this.setState({isToggleOn: true});
    if(isToggleOn = false){
      alert(isToggleOn);
    }

  }

  render() {
  return (
    <div id= 'leftPage' className='leftTrain'>

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
                  <a onClick={this.goLeft}><h4>HOME<span className='tick'></span></h4></a>
                </div>
              </li>
            </ul>
      </div>
    </div>
  );
}
}

module.exports = Contact;
