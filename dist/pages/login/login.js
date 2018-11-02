'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_wepy$page) {
  _inherits(Login, _wepy$page);

  function Login() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '授权登录'
    }, _this.data = {
      canIUse: wx.canIUse('button.open-type.getUserInfo')
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: 'onLoad',
    value: function onLoad() {
      var _self = this;
      // 查看是否授权
      wx.getSetting({
        success: function success(res) {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: function success(res) {
                _self.$parent.globalData.userInfo = res.userInfo;
                // console.log(res.userInfo);
                wx.redirectTo({ url: '../home/home' });
              }
            });
          }
        }
      });
    }
  }, {
    key: 'bindGetUserInfo',
    value: function bindGetUserInfo(e) {
      this.$parent.globalData.userInfo = e.detail.userInfo;
      // console.log(e.detail.userInfo);
      wx.redirectTo({ url: '../home/home' });
    }
  }]);

  return Login;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Login , 'pages/login/login'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJjYW5JVXNlIiwid3giLCJfc2VsZiIsImdldFNldHRpbmciLCJzdWNjZXNzIiwicmVzIiwiYXV0aFNldHRpbmciLCJnZXRVc2VySW5mbyIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJyZWRpcmVjdFRvIiwidXJsIiwiZSIsImRldGFpbCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsZUFBU0MsR0FBR0QsT0FBSCxDQUFXLDhCQUFYO0FBREosSzs7Ozs7NkJBSUc7QUFDUixVQUFJRSxRQUFRLElBQVo7QUFDQTtBQUNBRCxTQUFHRSxVQUFILENBQWM7QUFDWkMsZUFEWSxtQkFDSEMsR0FERyxFQUNDO0FBQ1gsY0FBSUEsSUFBSUMsV0FBSixDQUFnQixnQkFBaEIsQ0FBSixFQUF1QztBQUNyQztBQUNBTCxlQUFHTSxXQUFILENBQWU7QUFDYkgsdUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQkgsc0JBQU1NLE9BQU4sQ0FBY0MsVUFBZCxDQUF5QkMsUUFBekIsR0FBb0NMLElBQUlLLFFBQXhDO0FBQ0E7QUFDQVQsbUJBQUdVLFVBQUgsQ0FBYyxFQUFDQyxLQUFLLGNBQU4sRUFBZDtBQUNEO0FBTFksYUFBZjtBQU9EO0FBQ0Y7QUFaVyxPQUFkO0FBY0Q7OztvQ0FFZ0JDLEMsRUFBRztBQUNsQixXQUFLTCxPQUFMLENBQWFDLFVBQWIsQ0FBd0JDLFFBQXhCLEdBQW1DRyxFQUFFQyxNQUFGLENBQVNKLFFBQTVDO0FBQ0E7QUFDQVQsU0FBR1UsVUFBSCxDQUFjLEVBQUNDLEtBQUssY0FBTixFQUFkO0FBQ0Q7Ozs7RUFoQ2dDRyxlQUFLQyxJOztrQkFBbkJwQixLIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW4gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmjojmnYPnmbvlvZUnXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKVxuICAgIH1cblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICBsZXQgX3NlbGYgPSB0aGlzXG4gICAgICAvLyDmn6XnnIvmmK/lkKbmjojmnYNcbiAgICAgIHd4LmdldFNldHRpbmcoe1xuICAgICAgICBzdWNjZXNzIChyZXMpe1xuICAgICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcbiAgICAgICAgICAgIC8vIOW3sue7j+aOiOadg++8jOWPr+S7peebtOaOpeiwg+eUqCBnZXRVc2VySW5mbyDojrflj5blpLTlg4/mmLXnp7BcbiAgICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgX3NlbGYuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzLnVzZXJJbmZvKTtcbiAgICAgICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHt1cmw6ICcuLi9ob21lL2hvbWUnfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgYmluZEdldFVzZXJJbmZvIChlKSB7XG4gICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXG4gICAgICAvLyBjb25zb2xlLmxvZyhlLmRldGFpbC51c2VySW5mbyk7XG4gICAgICB3eC5yZWRpcmVjdFRvKHt1cmw6ICcuLi9ob21lL2hvbWUnfSlcbiAgICB9XG4gIH1cbiJdfQ==