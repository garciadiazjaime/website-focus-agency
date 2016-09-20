import React from 'react';

import Block1 from './block1';
import Block2 from './block2';
import Block3 from './block3';
import Block4 from './block4';
import Block5 from './block5';
import Block6 from './block6';
import Block7 from '../about/block7';
import Block8 from '../home/block3';
import Block9 from '../home/block4';

export default class ServicesSection extends React.Component {
  render() {
    return (<div>
      <Block1 />
      <Block2 />
      <Block3 />
      <Block4 />
      <Block5 />
      <Block6 />
      <Block7 />
      <Block8 />
      <Block9 />
    </div>);
  }
}
