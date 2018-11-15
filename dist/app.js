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
      'pages/home/home', //主页
      'pages/company/companyInfo', //绑定公司信息
      'pages/invoice/invoice', //发票识别
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJuaWNrTmFtZSIsInVzZSIsIndlcHkiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQThCRSxzQkFBZTtBQUFBOztBQUFBOztBQUFBLFVBM0JmQSxNQTJCZSxHQTNCTjtBQUNQQyxhQUFPLENBQ0wsbUJBREssRUFDZ0I7QUFDckIsdUJBRkssRUFFYztBQUNuQixpQ0FISyxFQUd5QjtBQUM5Qiw2QkFKSyxFQUlxQjtBQUMxQiw2QkFMSyxFQUtvQjtBQUN6QiwrQkFOSyxFQU1zQjtBQUMzQix1QkFQSyxFQU9jO0FBQ25CLHlCQVJLLEVBUWdCO0FBQ3JCLHlCQVRLLENBREE7QUFZUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsTUFGeEI7QUFHTkMsZ0NBQXdCLFFBSGxCO0FBSU5DLGdDQUF3QjtBQUpsQjtBQVpELEtBMkJNO0FBQUEsVUFQZkMsVUFPZSxHQVBGO0FBQ1g7QUFDQUMsZ0JBQVU7QUFDUkMsa0JBQVU7QUFERjtBQUZDLEtBT0U7O0FBRWIsVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFDQSxVQUFLQSxHQUFMLENBQVMsV0FBVDtBQUhhO0FBSWQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaEMwQkMsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgcGFnZXM6IFtcclxuICAgICAgJ3BhZ2VzL2xvZ2luL2xvZ2luJywgLy/mjojmnYPnmbvlvZVcclxuICAgICAgJ3BhZ2VzL2hvbWUvaG9tZScsIC8v5Li76aG1XHJcbiAgICAgICdwYWdlcy9jb21wYW55L2NvbXBhbnlJbmZvJywgIC8v57uR5a6a5YWs5Y+45L+h5oGvXHJcbiAgICAgICdwYWdlcy9pbnZvaWNlL2ludm9pY2UnLCAgLy/lj5Hnpajor4bliKtcclxuICAgICAgJ3BhZ2VzL21lc3NhZ2UvbWVzc2FnZScsIC8v5Y+R56Wo5piv6K+G5Yir5ZCO55qE5L+h5oGv5bGV56S6XHJcbiAgICAgICdwYWdlcy9wdXJjaGFzZS9wdXJjaGFzZScsIC8v5Li66LSt5Lmw6ICF5pe255qE5Yet6K+BXHJcbiAgICAgICdwYWdlcy9zYWxlL3NhbGUnLCAvL+S4uumUgOWUruiAheaXtueahOWHreivgVxyXG4gICAgICAncGFnZXMvbm90YXgvbm90YXgnLCAvL+S4jeeUqOeojuaUtuaXtueahOWHreivgVxyXG4gICAgICAncGFnZXMvcXVlcnkvcXVlcnknLCAvL+WkluaOpeeojuWKoeafpeivoue9kemhtVxyXG4gICAgXSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdXZUNoYXQnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnbG9iYWxEYXRhID0ge1xyXG4gICAgLy8gdXNlckluZm86IG51bGxcclxuICAgIHVzZXJJbmZvOiB7XHJcbiAgICAgIG5pY2tOYW1lOiAn5rWL6K+V5ZCN56ewJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxyXG4gICAgdGhpcy51c2UoJ3Byb21pc2lmeScpXHJcbiAgfVxyXG5cclxuICBhc3luYyBvbkxhdW5jaCgpIHtcclxuICB9XHJcbn1cclxuIl19