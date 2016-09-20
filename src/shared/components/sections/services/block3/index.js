import React from 'react';

const style = require('./style.scss');

export default class Block3 extends React.Component {

  render() {
    return (<div className={style.block3}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <div className={style.iconWrapper}>
              <div className={style.icon25} />
              <div className={style.title8}>
                Call Center
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <ul className={style.title6 + ' ' + style.list2}>
              <li>
                200 estaciones dumb WYSE con tecnología Quancept (CATI)
              </li>
              <li>
                24 estaciones para uso exclusivo de supervisión de los agentes
                con capacidad de monitoreo audio visual.
              </li>
              <li>
                12 estaciones con capacidad audio visual dedicadas para el monitoreo
                interno de sus proyectos.
              </li>
              <li>
                Monitoreo remoto para que pueda monitorear sus proyectos de forma
                remota en la comodidad de su oficina.
              </li>
              <li>
                CATI. Recolección de información a través de nuestra plataforma
                Quancept SPSS versión 7.9.
              </li>
              <li>
                Nuestro sistema trabaja en Red Ethernet con Servidores Unix, Linux y Windows;
                maneja cuotas y administra bases de datos.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>);
  }
}
