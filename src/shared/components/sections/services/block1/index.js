/* eslint max-len: [2, 500, 4] */

import React from 'react';
import CommonBlock1 from '../../../blocks/block1';
const style = require('./style.scss');

export default class Block1 extends React.Component {

  render() {
    return (<div className={style.block1}>
      <CommonBlock1 image="/images/apoyo-logisitico/Focus-ApoyoLogistico-cover.png" icon={style.icon3}>
        APOYO LOGÍSTICO <br />
        DE CAMPO
      </CommonBlock1>
    </div>);
  }
}
