'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/login/login', //授权登录
      'pages/company/companyInfo', //绑定公司信息
      'pages/home/home', //发票识别接口
      'pages/message/message', //发票是识别后的信息展示
      'pages/purchase/purchase', //为购买者时的凭证
      'pages/sale/sale', //为销售者时的凭证
      'pages/notax/notax', //不用税收时的凭证
      'pages/query/query'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      }
    };
    _this.globalData = {
      // userInfo: null
      userInfo: {
        nickName: '测试名称'
      }
    };

    _this.use('requestfix');
    _this.use('promisify');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLaunch() {
        return _ref.apply(this, arguments);
      }

      return onLaunch;
    }()
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJuaWNrTmFtZSIsInVzZSIsIndlcHkiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQTZCRSxzQkFBZTtBQUFBOztBQUFBOztBQUFBLFVBMUJmQSxNQTBCZSxHQTFCTjtBQUNQQyxhQUFPLENBQ0wsbUJBREssRUFDZ0I7QUFDckIsaUNBRkssRUFFeUI7QUFDOUIsdUJBSEssRUFHYztBQUNuQiw2QkFKSyxFQUlvQjtBQUN6QiwrQkFMSyxFQUtzQjtBQUMzQix1QkFOSyxFQU1jO0FBQ25CLHlCQVBLLEVBT2dCO0FBQ3JCLHlCQVJLLENBREE7QUFXUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsTUFGeEI7QUFHTkMsZ0NBQXdCLFFBSGxCO0FBSU5DLGdDQUF3QjtBQUpsQjtBQVhELEtBMEJNO0FBQUEsVUFQZkMsVUFPZSxHQVBGO0FBQ1g7QUFDQUMsZ0JBQVU7QUFDUkMsa0JBQVU7QUFERjtBQUZDLEtBT0U7O0FBRWIsVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFDQSxVQUFLQSxHQUFMLENBQVMsV0FBVDtBQUhhO0FBSWQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBL0IwQkMsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgcGFnZXM6IFtcclxuICAgICAgJ3BhZ2VzL2xvZ2luL2xvZ2luJywgLy/mjojmnYPnmbvlvZVcclxuICAgICAgJ3BhZ2VzL2NvbXBhbnkvY29tcGFueUluZm8nLCAgLy/nu5Hlrprlhazlj7jkv6Hmga9cclxuICAgICAgJ3BhZ2VzL2hvbWUvaG9tZScsIC8v5Y+R56Wo6K+G5Yir5o6l5Y+jXHJcbiAgICAgICdwYWdlcy9tZXNzYWdlL21lc3NhZ2UnLCAvL+WPkeelqOaYr+ivhuWIq+WQjueahOS/oeaBr+WxleekulxyXG4gICAgICAncGFnZXMvcHVyY2hhc2UvcHVyY2hhc2UnLCAvL+S4uui0reS5sOiAheaXtueahOWHreivgVxyXG4gICAgICAncGFnZXMvc2FsZS9zYWxlJywgLy/kuLrplIDllK7ogIXml7bnmoTlh63or4FcclxuICAgICAgJ3BhZ2VzL25vdGF4L25vdGF4JywgLy/kuI3nlKjnqI7mlLbml7bnmoTlh63or4FcclxuICAgICAgJ3BhZ2VzL3F1ZXJ5L3F1ZXJ5JywgLy/lpJbmjqXnqI7liqHmn6Xor6LnvZHpobVcclxuICAgIF0sXHJcbiAgICB3aW5kb3c6IHtcclxuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcclxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnV2VDaGF0JyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2xvYmFsRGF0YSA9IHtcclxuICAgIC8vIHVzZXJJbmZvOiBudWxsXHJcbiAgICB1c2VySW5mbzoge1xyXG4gICAgICBuaWNrTmFtZTogJ+a1i+ivleWQjeensCdcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcclxuICAgIHRoaXMudXNlKCdwcm9taXNpZnknKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25MYXVuY2goKSB7XHJcbiAgfVxyXG59XHJcbiJdfQ==