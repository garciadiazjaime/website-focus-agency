import React from 'react';

import SVG from '../../../svg';
const style = require('./style.scss');

export default class Block7 extends React.Component {

  render() {
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
              <a className={style.button1} onClick={this.submitFormHandler}>
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
