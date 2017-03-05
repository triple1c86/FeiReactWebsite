var React = require('react');
import { Linkify } from 'react-linkify'

var EmailUser = React.createClass ({
  render: function () {
    return (
    <Linkify><div>bryan@custo.com.my</div></Linkify>
    )
  }
});

module.exports = EmailUser;
