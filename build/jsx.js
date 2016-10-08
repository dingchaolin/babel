'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DemoComponent = function (_Component) {
    (0, _inherits3.default)(DemoComponent, _Component);

    function DemoComponent() {
        (0, _classCallCheck3.default)(this, DemoComponent);
        return (0, _possibleConstructorReturn3.default)(this, (DemoComponent.__proto__ || (0, _getPrototypeOf2.default)(DemoComponent)).apply(this, arguments));
    }

    (0, _createClass3.default)(DemoComponent, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'h1',
                null,
                'Hello World!'
            );
        }
    }]);
    return DemoComponent;
}(_react.Component); /**
                      * Created by Administrator on 2016/10/8 0008.
                      */