import React from 'react';
import SVG from '../../../svg';
const style = require('./style.scss');

export default class Block4 extends React.Component {

  render() {
    return (<div className={style.block4}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className={style.title5}>
              Conoce más acerca de FOCUS Investigación de mercados
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className={style.cta}>
              <a className={style.button2} href="http://www.focus.mx/" target="_blank">
                VISITA NUESTRO SITIO
                <SVG network="arrow_right" className={style.svg}/>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className={style.title7}>
              Tijuana
              <br />
              Santa María #2841 Col. América Tijuana B.C. <br />
              22044 (664) 634 2930 y (664) 634 2815 <br />
              contactotij@focus.com.mx
            </div>
          </div>
          <div className="col-sm-6">
            <div className={style.title7}>
              Mexicali
              <br />
              Cetys Universidad Campus Mexicali Despacho #8010 <br />
              (686) 554 3347 y (686) 552 3345 <br />
              contacto@focus.com.mx
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}
