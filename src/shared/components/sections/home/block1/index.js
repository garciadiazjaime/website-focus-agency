import React from 'react';

const style = require('./style.scss');

export default class Block1 extends React.Component {

  render() {
    return (<div className={style.block1}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <div className={style.icon1} />
          </div>
          <div className="col-sm-9">
            <div className={style.title1}>
              ¿Cómo podemos apoyarte en tu proyecto de investigación?
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}
