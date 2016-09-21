import React from 'react';
import SVG from '../../../svg';
import { getImageBackground } from '../../../../utils/imageUtil';
const style = require('./style.scss');

export default class Block2 extends React.Component {

  render() {
    const image1 = '/images/home/Focus-FocusGroups-portada.png';
    const image2 = '/images/home/Focus-ApoyoLogistico-portada.png';
    return (<div className={style.block2}>
        <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <div style={getImageBackground(image1)} className={style.image}>
              <div className={style.icon2} />
              <div className={style.title10}>
                FOCUS GROUPS <br />
              </div>
              <div className={style.icon4}>
                <SVG network="arrow_right" />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div style={getImageBackground(image2)} className={style.image}>
              <div className={style.icon3} />
              <div className={style.title10}>
                APOYO LOGÍSTICO <br /> DE CAMPO
              </div>
              <div className={style.icon4}>
                <SVG network="arrow_right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}
