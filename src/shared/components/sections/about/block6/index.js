import React from 'react';

import carouselData from './data';
import Block2Commen from '../../../blocks/block2';
const style = require('./style.scss');

export default class Block6 extends React.Component {

  render() {
    return (<div className={style.block6}>
      <Block2Commen data={carouselData} />
    </div>);
  }
}
