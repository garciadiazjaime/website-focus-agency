/* eslint max-len: [2, 500, 4] */

import React from 'react';

import SVG from '../../../svg';
const style = require('./style.scss');

export default class Block7 extends React.Component {

  render() {
    const gmapsUrl = 'https://maps.google.com/maps?q=Santa+Mar%C3%ADa+%232841+Col.+Am%C3%A9rica++Tijuana+B.C.+22044&hl=en&ie=UTF8&ll=32.517434,-117.018986&spn=0.009952,0.00869&sll=37.0625,-95.677068&sspn=74.158988,71.191406&hnear=Av+la+Santa+Maria,+Baja+California,+Mexico&t=m&z=17&layer=c&cbll=32.517527,-117.018999&panoid=XHjGFs-VM3Yui-6MlowTdw&cbp=12,257.87,,0,4.67';
    return (<div className={style.block7}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-5 col-md-4">
            <div className={style.title8}>
              UBICACIÓN
            </div>
            <div className={style.title6}>
              <b>Tijuana</b>
              <p>
                Santa María #2841
                Col. América Tijuana B.C. 22044
              </p>
              <p>
                (664) 634 2930 y (664) 634 2815
              </p>
              <p>
                Ubicación estratégica en la zona gastronómica, hotelera y financiera de Tijuana.
              </p>
              <p>
                Contamos con amplio estacionamiento.
              </p>
            </div>
            <div>
              <a className={style.button1} href={gmapsUrl} target="_blank">
                VER EN GOOGLE MAPS
                <SVG network="arrow_right" className={style.svg}/>
              </a>
            </div>
          </div>
          <div className="col-sm-7 col-md-8">
            <img src="/images/focus-groups/Focus-Mapa.jpg" className="img-responsive" />
          </div>
        </div>
      </div>
    </div>);
  }
}
