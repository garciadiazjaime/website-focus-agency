import React from 'react';

import Powered from './powered';
const style = require('./style.scss');


export default class FooterAAA extends React.Component {

  render() {
    return (<div className={style.footerWrapper}>
      <Powered />
    </div>);
  }
}

FooterAAA.propTypes = {
  items: React.PropTypes.array.isRequired,
  addresses: React.PropTypes.array,
  icons: React.PropTypes.array,
};
