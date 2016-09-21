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
        return (<div className={'item ' + (style.item || '') + ' ' + className} key={index} style={divStyle} />);
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
          <div className="col-sm-5 col-md-4">
            <div className={style.title8}>
              INFRAESTRUCTURA
            </div>
            <ul className={style.list2 + ' ' + style.title11}>
              <li>
                Sala de capacitación para estudios
              </li>
              <li>
                Camionetas para transportar equipos de trabajo
              </li>
              <li>
                Amplias y cómodas instalaciones para el equipo de levantamiento.
              </li>
            </ul>
          </div>
          <div className="col-sm-7 col-md-8">
            <Carousel id="carousel-section3-block4" interval={80000} indicators={false} classes={carouselClasses}>
              {this.renderItems(carouselData)}
            </Carousel>
          </div>
        </div>
      </div>
    </div>);
  }
}
