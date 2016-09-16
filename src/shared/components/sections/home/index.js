/* eslint max-len: [2, 500, 4] */
import React from 'react';

import Block1 from './block1';
import Block2 from './block2';
import Block3 from './block3';
import Block4 from './block4';

export default class HomeSection extends React.Component {
  render() {
    return (<div>
      <Block1 />
      <Block2 />
      <Block3 />
      <Block4 />
    </div>);
  }
}
