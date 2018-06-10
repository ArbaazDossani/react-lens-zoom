'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ImageLensZoom = require('./ImageLensZoom');

var _ImageLensZoom2 = _interopRequireDefault(_ImageLensZoom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Example = function Example() {
  return _react2.default.createElement(_ImageLensZoom2.default, {
    source: 'https://webkit.org/demos/srcset/image-src.png'
  });
};

exports.default = Example;