import React from 'react';
import Form from '../../../elements/forms/form2';

const style = require('./style.scss');

export default class Block3 extends React.Component {

  render() {
    return (<div className={style.block3}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <div className={style.title5}>
              Resultados Confiables <br /> Reales y Precisos
            </div>
            <div className={style.description + ' ' + style.title6}>
              Para mayor información acerca de nuestros servicios,
              preguntas o comentarios favor de llenar la siguiente forma
            </div>
          </div>
          <div className="col-sm-6">
            <Form />
          </div>
        </div>
      </div>
    </div>);
  }
}
