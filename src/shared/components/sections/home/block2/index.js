import React from 'react';
import SVG from '../../../svg';
const style = require('./style.scss');

export default class Block2 extends React.Component {

  render() {
    return (<div className={style.block2}>
        <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <img src="/images/home/Focus-FocusGroups-portada.png" className="img-responsive" />
            <div className={style.icon1} />
            <div className={style.title}>
              FOCUS GROUPS <br />
            </div>
            <div className={style.icon3}>
              <SVG network="arrow_right" />
            </div>
          </div>
          <div className="col-sm-6">
            <img src="/images/home/Focus-ApoyoLogistico-portada.png" className="img-responsive" />
            <div className={style.icon2} />
            <div className={style.title}>
              APOYO LOGÍSTICO <br /> DE CAMPO
            </div>
            <div className={style.icon3}>
              <SVG network="arrow_right" />
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}
