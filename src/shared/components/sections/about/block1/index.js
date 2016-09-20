import React from 'react';
import CommonBlock1 from '../../../blocks/block1';
const style = require('./style.scss');

export default class Block1 extends React.Component {
  render() {
    return (<div className={style.block1}>
      <CommonBlock1 image="/images/focus-groups/Focus-FocusGroups-cover.png" icon={style.icon2}>
        CÁMARA GESELL Y <br />
        FOCUS GROUPS
      </CommonBlock1>
    </div>);
  }
}
