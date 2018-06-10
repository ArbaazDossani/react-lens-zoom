import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { zoomImage, setSourceDivDimensions } from './zoomImage';
import './css/zoomImage.css';
import defaultImage from './assets/defaultImage.png';

const noop = () => {};

class ImageLensZoom extends Component {
  componentDidMount() {
    const { sourceWidth, sourceHeight } = this.props;
    setSourceDivDimensions(sourceWidth || 300, sourceHeight || 300, 'sourceImage');
  }
  setupImageZoom() {
    const { source, sourceId, destId, destSource, destWidth, destHeight } = this.props;
    if (source) {
      zoomImage(sourceId, destId, source, destWidth, destHeight, destSource);
      if (this.props.onLoad) {
        this.props.onLoad();
      }
    }
  }
  render() {
    const { source, sourceId, sourceClass, destId, destClass } = this.props;
    return (
      <div className="img-zoom-container">
        <div className="prodImageBox">
          <img
            src={source || defaultImage}
            alt={'Incorrect Source Provided'}
            id={sourceId}
            className={`sourceImage ${sourceClass}`}
            onLoad={() => this.setupImageZoom()}
          />
        </div>
        <div id={destId} className={`img-zoom-result ${destClass}`} />
      </div>
    );
  }
}

ImageLensZoom.propTypes = {
  source: PropTypes.string.isRequired,
  // Source Properties
  sourceId: PropTypes.string,
  sourceClass: PropTypes.string,
  sourceWidth: PropTypes.number,
  sourceHeight: PropTypes.number,
  //Dest Properties
  destId: PropTypes.string,
  destClass: PropTypes.string,
  destWidth: PropTypes.number,
  destHeight: PropTypes.number,
};

ImageLensZoom.defaultProps = {
  sourceId: 'sourceImage',
  sourceClass: 'addSourceClass',
  sourceWidth: 300,
  sourceHeight: 300,
  onLoad: noop,
  
  destId: 'destImage',
  destClass: 'addDestClass',
  destWidth: 700,
  destHeight: 500,
  destSource: null,
};

export default ImageLensZoom;
