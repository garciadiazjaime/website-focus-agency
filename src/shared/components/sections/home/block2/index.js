/* eslint max-len: [2, 500, 4] */

import React from 'react';
import { Link } from 'react-router';
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
              <div>
                <Link to="/focus-groups" title="FOCUS GROUPS" className={style.title10}>
                  FOCUS GROUPS <br />
                </Link>
              </div>
              <div className={style.icon4}>
                <SVG network="arrow_right" />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div style={getImageBackground(image2)} className={style.image}>
              <div className={style.icon3} />
              <div>
                <Link to="/apoyo-logistico" title="APOYO LOGÍSTICO DE CAMPO" className={style.title10}>
                  APOYO LOGÍSTICO <br /> DE CAMPO
                </Link>
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
