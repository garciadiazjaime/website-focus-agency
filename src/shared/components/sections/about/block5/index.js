import React from 'react';
import SVG from '../../../svg';
import contentData from './data.js';
const style = require('./style.scss');

export default class Block5 extends React.Component {

  renderColumn(data) {
    return (<div>
      {
        data.items.map((item, index) => {
          return (<div key={index}>
            <div className={style.item}>
              <div className="row">
                <div className="col-sm-4">
                  <i className={item.icon} />
                </div>
                <div className="col-sm-7">
                  <div className={style.title9}>
                    {item.text}
                  </div>
                </div>
              </div>
            </div>
          </div>);
        })
      }
    </div>);
  }

  render() {
    const { data1, data2 } = contentData;
    return (<div className={style.block5}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <div className={style.title10}>
              {data1.title}
            </div>
            <div className={style.content}>
              {this.renderColumn(data1)}
            </div>
          </div>
          <div className="col-sm-6">
            <div className={style.title10}>
              {data2.title}
            </div>
            <div className={style.content2}>
              {this.renderColumn(data2)}
            </div>
          </div>
        </div>

        <div className="row">
          <div className={style.cta}>
            <a className={style.button2} href="http://www.focus.mx/contacto" target="_blank">
              CONTÁCTANOS
              <SVG network="arrow_right" className={style.svg}/>
            </a>
          </div>
        </div>
      </div>
    </div>);
  }
}
