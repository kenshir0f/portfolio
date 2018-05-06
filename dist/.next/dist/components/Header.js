'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = function (_ref) {
    var pathname = _ref.pathname;
    return React.createElement("header", null, React.createElement("p", null, React.createElement("img", { src: "/static/logo.png" })), React.createElement(_link2.default, { href: "/" }, React.createElement("a", { className: pathname === '/' && 'is-active' || '' }, "Home")), ' ', React.createElement(_link2.default, { href: "/about" }, React.createElement("a", { className: pathname === '/about' && 'is-active' || '' }, "About")));
};
//# sourceMappingURL=Header.js.map