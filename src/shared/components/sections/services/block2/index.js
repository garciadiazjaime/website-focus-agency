import React from 'react';
import contentData from './data.js';
const style = require('./style.scss');

export default class Block2 extends React.Component {

  renderColumn(data) {
    return data.items.map((item, index) => {
      return (<div key={index} className={style.item}>
        <i className={item.icon} />
        <div className={style.title8}>
          {item.text}
        </div>
      </div>);
    });
  }

  render() {
    const { data1, data2 } = contentData;
    return (<div className={style.block2}>
      <div className="container-fluid">
        <div className="row">
          <div className={style.title1}>
            SERVICIOS
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            {this.renderColumn(data1)}
          </div>
          <div className="col-sm-6">
            {this.renderColumn(data2)}
          </div>
        </div>
      </div>
    </div>);
  }
}
