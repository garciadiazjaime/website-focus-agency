import React from 'react';

const style = require('./style.scss');

export default class Loader extends React.Component {

  render() {
    return (<div className={style.wrapper}>
      <div className={style.loader} />
    </div>);
  }
}
