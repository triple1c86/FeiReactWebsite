import React from 'react';

let Image = function statelessFunctionComponentClass(props) {
  let source = require('./../components/images/' + props.source);

  let style = {
    width: '50%',
    margin: '5% 150px 0px 190px'
  };

  return (
    <img src={source} style={style} />
  );
};

export default Image;
