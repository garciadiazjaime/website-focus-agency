import React from 'react';

const style = require('./style.scss');

export default class Block2 extends React.Component {

  render() {
    return (<div className={style.block2}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className={style.icon5} />
            <div className={style.title8}>
              Somos tus aliados en proyectos cualitativos, contamos con más de
              18 años de experiencia, la mejor opción de cámara gesell en Tijuana
              y equipo de reclutamiento especializado en toda la región.
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}
