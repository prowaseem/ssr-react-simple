'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function render(req) {
  var context = {};
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRouter.StaticRouter,
    { context: context, location: req.url },
    _react2.default.createElement(_app2.default, null)
  ));
  return { content: content, context: context };
};