var React = require('react');
var { Link } = require('react-router-dom');
var Loader = require('Loader');

var About = (props) => {
  return (

    <div id ='wrapper'>
      <Link to='content'>
        <div id= 'leftSite'>
          <div id= 'portraitImg'>
          </div>
        </div>

        <div id= 'rightSite'>
          <article>
              <p className='text-right'><b>Bryan Hew</b> obtaind his Bachelor of Art Degree in Interior Architecture and started his design career since 2007, he’s been actively involved in design developing for residential and commercial projects in Malaysia. Hew is keen in expressing the project uniqueness with innovative spatial planning and design.</p>

              <p className='text-right'>Year 2013, Hew decided to establish a team of professional with capability that able to complete any challenging project which entrusted by client, and he named it <br /><b>- Custo Design -</b></p>
          </article>
        </div>
      </Link>

      <Loader />
    </div>

  );
}

module.exports = About;
