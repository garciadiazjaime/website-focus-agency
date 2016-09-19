/* eslint max-len: [2, 500, 4] */
import React from 'react';
import _ from 'lodash';

import Carousel from '../../../elements/carousel';
import { getImageBackground } from '../../../../utils/imageUtil';

import carouselData from './data';
const style = require('./style.scss');

export default class Block4 extends React.Component {

  renderItems(data) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        const divStyle = getImageBackground(item.image);
        const className = index === 0 ? 'active' : '';
        return (<div className={'item ' + (style.item || '') + ' ' + className} key={index} style={divStyle}>
          <div className="container-fluid">
          </div>
        </div>);
      });
    }
    return null;
  }

  render() {
    const carouselClasses = {
      inner: style.inner,
      controls: {
        base: style.controls,
        prev: style.prev,
        next: style.next,
        arrow: style.arrow,
      },
    };
    return (<div className={style.block4}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8">
            <div className={style.title1}>
              RENTA DE <br />CÁMARA DE GESELL
            </div>
            <div className={style.title6}>
              La cámara Gesell está completamente equipada para la realización
              de focus groups.
            </div>
          </div>
          <div className="col-sm-4">
            <div className={style.icon18} />
            <div className={style.title6}>
              <p>
                Somos parte de la selección de Focus
                Vision, líder global en trasmisión en vivo de
                video de estudios cualitativos
              </p>
            </div>
          </div>
        </div>
        <br /><br />
        <div className="row">
          <div className="col-sm-12">
            <Carousel id="carousel-section2-block4" interval={8000} indicators={false} classes={carouselClasses}>
              {this.renderItems(carouselData)}
            </Carousel>
          </div>
        </div>
      </div>
    </div>);
  }
}
