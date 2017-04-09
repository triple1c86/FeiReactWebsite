import React from 'react';

let Image = function statelessFunctionComponentClass(props) {
  let source = require('./../components/images/' + props.source);

  let style = {
    width: '82%',
    margin: '5% 50px 0px 90px',
    clip: 'rect(0px, 360px, 300px, 0px)'
  };

  return (
    <img src={source} style={style} />
  );
};

export default Image;
