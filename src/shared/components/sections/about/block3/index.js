import React from 'react';

const style = require('./style.scss');

export default class Block3 extends React.Component {

  render() {
    return (<div className={style.block3}>
      <div className="container-fluid">
        <div className="row">

          <div className="col-sm-6">
            <div className={style.title8}>
              Servicio de Reclutamiento Especializado
            </div>
            <div className={style.title9}>
              <ul className={style.list1}>
                <li>Personal con experiencia dedicado a reclutar.</li>
                <li>Aseguramos el target solicitado con llenado de filtro previo</li>
                <li>Control interno de reclutados para evitar su participación frecuente.</li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6">
            <div className={style.title8}>
              Coordinación Profesional del Proyecto
            </div>
            <div className={style.title9}>
              <ul className={style.list1}>
                <li>Asignamos un coordinador para la logística y seguimiento de tu proyecto.
                  (Focus group , entrevistas y entnografías)</li>
                <li>Podrás conocer el estatus de tu proyecto en todo momento.</li>
                <li>Nos adecuamos a tu sistema de control del estudio.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>);
  }
}
