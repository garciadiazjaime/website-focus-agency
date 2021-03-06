/* eslint max-len: [2, 500, 4] */
import React from 'react';
import _ from 'lodash';

import SVG from '../../svg';
import Slider from 'react-slick';

const style = require('./style.scss');

export default class Block2 extends React.Component {

  renderItems(data) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        return (<div key={index}>
          <img src={item.image} />
        </div>);
      });
    }
    return null;
  }

  render() {
    const { data } = this.props;
    const prevArrow = (<div className={style.arrow}><SVG network="carousel_left" /></div>);
    const nextArrow = (<div className={style.arrow}><SVG network="carousel_right" /></div>);
    const settings = {
      arrows: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 7000,
      prevArrow,
      nextArrow,
      responsive: [{
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      }, {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
        },
      }, {
        breakpoint: 100000,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 5,
        },
      }],
    };
    return (<div className={style.block2}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <div className={style.title8}>
              NUESTRA EXPERIENCIA
            </div>
          </div>
          <div className="col-sm-8">
            <div className={style.title8}>
              Hemos colaborado con las mejores agencias de investigación
              de mercados a nivel nacional.
            </div>
          </div>
        </div>

        <div className="row">
          <div className={style.slider}>
            <Slider {...settings}>
            {this.renderItems(data)}
            </Slider>
          </div>
        </div>
      </div>
    </div>);
  }
}

Block2.propTypes = {
  data: React.PropTypes.array.isRequired,
};
