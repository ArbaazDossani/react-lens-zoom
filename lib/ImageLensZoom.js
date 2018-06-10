'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _zoomImage = require('./zoomImage');

require('./css/zoomImage.css');

var _defaultImage = require('./assets/defaultImage.png');

var _defaultImage2 = _interopRequireDefault(_defaultImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noop = function noop() {};

var ImageLensZoom = function (_Component) {
  _inherits(ImageLensZoom, _Component);

  function ImageLensZoom() {
    _classCallCheck(this, ImageLensZoom);

    return _possibleConstructorReturn(this, (ImageLensZoom.__proto__ || Object.getPrototypeOf(ImageLensZoom)).apply(this, arguments));
  }

  _createClass(ImageLensZoom, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          sourceWidth = _props.sourceWidth,
          sourceHeight = _props.sourceHeight;

      (0, _zoomImage.setSourceDivDimensions)(sourceWidth || 300, sourceHeight || 300, 'sourceImage');
    }
  }, {
    key: 'setupImageZoom',
    value: function setupImageZoom() {
      var _props2 = this.props,
          source = _props2.source,
          sourceId = _props2.sourceId,
          destId = _props2.destId,
          destSource = _props2.destSource,
          destWidth = _props2.destWidth,
          destHeight = _props2.destHeight;

      if (source) {
        (0, _zoomImage.zoomImage)(sourceId, destId, source, destWidth, destHeight, destSource);
        if (this.props.onLoad) {
          this.props.onLoad();
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props3 = this.props,
          source = _props3.source,
          sourceId = _props3.sourceId,
          sourceClass = _props3.sourceClass,
          destId = _props3.destId,
          destClass = _props3.destClass;

      return _react2.default.createElement(
        'div',
        { className: 'img-zoom-container' },
        _react2.default.createElement(
          'div',
          { className: 'prodImageBox' },
          _react2.default.createElement('img', {
            src: source || _defaultImage2.default,
            alt: 'Incorrect Source Provided',
            id: sourceId,
            className: 'sourceImage ' + sourceClass,
            onLoad: function onLoad() {
              return _this2.setupImageZoom();
            }
          })
        ),
        _react2.default.createElement('div', { id: destId, className: 'img-zoom-result ' + destClass })
      );
    }
  }]);

  return ImageLensZoom;
}(_react.Component);

ImageLensZoom.propTypes = {
  source: _propTypes2.default.string.isRequired,
  // Source Properties
  sourceId: _propTypes2.default.string,
  sourceClass: _propTypes2.default.string,
  sourceWidth: _propTypes2.default.number,
  sourceHeight: _propTypes2.default.number,
  //Dest Properties
  destId: _propTypes2.default.string,
  destClass: _propTypes2.default.string,
  destWidth: _propTypes2.default.number,
  destHeight: _propTypes2.default.number
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
  destSource: null
};

exports.default = ImageLensZoom;