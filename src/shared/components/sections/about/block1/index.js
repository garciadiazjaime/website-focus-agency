import React from 'react';
import SVG from '../../../svg';
const style = require('./style.scss');

export default class Block1 extends React.Component {
  render() {
    return (<div className={style.block1}>
      <div className={style.icon2} />
      <div className={style.title5}>
        CÁMARA GESELL Y <br />
        FOCUS GROUPS
      </div>
      <div className={style.icon4}>
        <SVG network="arrow_down" />
      </div>
    </div>);
  }
}
