  var React = require('react');
  var Logo = require('Logo');
  var Linkify = require('react-linkify').default;

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addClass: false,
      indexZ: 0,
      homeOrAbout: 'CONTACT'
    };
    this.toggle = this.toggle.bind(this);
  }


  toggle() {
    this.setState({
      indexZ: this.state.indexZ+1,
      addClass: !this.state.addClass,
      homeOrAbout: this.state.homeOrAbout
    });

    if(this.state.indexZ==1){
      setTimeout(function(){
             this.setState({indexZ: 0});
        }.bind(this),600);
    }

    if(this.state.homeOrAbout=='CONTACT'){
      setTimeout(function(){
             this.setState({homeOrAbout: 'HOME'});
        }.bind(this),600);
    } else {
      setTimeout(function(){
             this.setState({homeOrAbout: 'CONTACT'});
        }.bind(this),600);
    }
  }

  render() {
    let leftTrain = ["leftTrain"];
    if(this.state.addClass){
      leftTrain.push('moveLeft');
    }



  return (
    <div id= 'leftPage' className={leftTrain.join(' ')} style={{ zIndex: this.state.indexZ}}>


      <div id="leftInner" className='page'>

          <article className='upper'>
              <p className='text-right'><b>Living Reflect Lifestyles</b> – we strongly believe in personal nature reflect the planning and setting of each spaces where we apply creative solution that ignite changes and improve quality of lifestyle.</p>

              <p className='text-right'>We works closely with each client, often the architects and contractors, in developing and executing the best design solution.
                <br />
                <br />
                <br />
                <Linkify>
                  <b>bryan@custo.com.my<span className='tick right'></span></b>
                </Linkify>
              </p>
          </article>
          <ul className='social text-right'>
              <li>
                <Linkify>
                <div className='lava-link'>
                  <a href=''></a><h4>PINTEREST<span className='tick right'></span></h4>
                </div>
                </Linkify>
              </li>
              <li>
                <div className='lava-link'>
                  <a href='http://instagram.com/custo_design'><h4>INSTAGRAM<span className='tick right'></span></h4></a>
                </div>
              </li>
              <li>
                <div className='lava-link'>
                  <a href='http://facebook.com/custodesign/'><h4>FACEBOOK<span className='tick right'></span></h4></a>
                </div>
              </li>
            </ul>

      </div>

      <div id="rightInner" className='page'>


        <Logo width="175" height="100"/>
          <h1>{this.props.name}</h1>
          <ul className='home text-left'>
              <li>
                <div className='lava-link'>
                  <a onClick={this.toggle}><h4>{this.state.homeOrAbout}<span className='tick'></span></h4></a>
                </div>
              </li>
            </ul>
      </div>
    </div>
  );
}
}


module.exports = Contact;
