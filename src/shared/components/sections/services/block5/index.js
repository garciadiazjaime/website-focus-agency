/* eslint max-len: [2, 500, 4] */

import React from 'react';

const style = require('./style.scss');

export default class Block5 extends React.Component {

  render() {
    return (<div className={style.block5}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <div className={style.icon26} />
            <div className={style.title8}>
              EQUIPO
            </div>
            <ul className={style.list2 + ' ' + style.title6}>
              <li>
                Encuestadores debidamente identificados con chaleco y gafete.
              </li>
              <li>
                El levantamiento es supervisado en todo momento.
              </li>
              <li>
                Contamos con un departamento de validación para el control y calidad de la información recabada.
              </li>
              <li>
                Asignamos un coordinador y asistente de operaciones para el seguimiento de procesos y levantamientos.
              </li>
            </ul>
          </div>
          <div className="col-sm-4">
            <div className={style.icon27} />
            <div className={style.title8}>
              TECNOLOGÍA
            </div>
            <ul className={style.list2 + ' ' + style.title6}>
              <li>
                Realizamos el levantamiento tradicional de encuestas y tablets
              </li>
              <li>
                Procesamos la información en el programa o sistema de su preferencia.
              </li>
              <li>
                Contamos con nuestro propio software PREVIA , con el podrás explorar toda la información.
              </li>
            </ul>
          </div>
          <div className="col-sm-4">
            <div className={style.icon28} />
            <div className={style.title8}>
              OPERACIÓN
            </div>
            <ul className={style.list2 + ' ' + style.title6}>
              <li>
                Diseñamos cuestionarios y manuales de los mismos.
              </li>
              <li>
                Desarrollamos propuestas que incluyan recolección de información en campo, tanto en aspectos técnicos como de presupuesto.
              </li>
              <li>
                Realizamos cartografía para marcos muestrales e identificación de unidades seleccionadas para entrevistas.
              </li>
              <li>
                Realizamos georeferenciación de entrevistas en viviendas y establecimientos.
              </li>
              <li>
                Nos adecuados a tu metodología.
              </li>
              <li>
                Podrás conocer el estatus de tu proyecto en todo momento.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>);
  }
}
