import React from 'react';
import SVG from '../../svg';
import { getImageBackground } from '../../../utils/imageUtil';
const style = require('./style.scss');

export default class Block1 extends React.Component {
  render() {
    const { image, icon, children } = this.props;
    const backgrounImage = getImageBackground(image);
    return (<div className={style.block1} style={backgrounImage}>
      <div className={icon + ' ' + style.icon} />
      <div className={style.title5}>
        {children}
      </div>
      <div className={style.icon4}>
        <SVG network="arrow_down" />
      </div>
    </div>);
  }
}

Block1.propTypes = {
  children: React.PropTypes.any,
  image: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
};
