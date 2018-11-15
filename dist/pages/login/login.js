'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../../config/config.js');

var _config2 = _interopRequireDefault(_config);

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
      navigationBarTitleText: ''
    }, _this.data = {
      canIUse: wx.canIUse('button.open-type.getUserInfo')
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: 'onLoad',
    value: function onLoad() {
      var _self = this;

      // wx.login({
      // success: function(res) {
      //     if (res.code) {
      //       console.log('https://api.weixin.qq.com/sns/jscode2session?appid=' + config.APPID + '&secret=' + config.SECRET + '&js_code=JSCODE&grant_type=authorization_code',);
      //       //发起网络请求
      //       wx.request({
      //         url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + config.APPID + '&secret=' + config.SECRET + '&js_code=' + res.code + '&grant_type=authorization_code',
      //         success(data) {
      //           console.log(data);
      //         }
      //       })
      //     } else {
      //       console.log('登录失败！' + res.errMsg)
      //     }
      //   }
      // })

      // 查看是否授权(如果授权则直接登录)
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
      wx.navigateTo({ url: '../home/home' });
    }
  }]);

  return Login;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Login , 'pages/login/login'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJjYW5JVXNlIiwid3giLCJfc2VsZiIsImdldFNldHRpbmciLCJzdWNjZXNzIiwicmVzIiwiYXV0aFNldHRpbmciLCJnZXRVc2VySW5mbyIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJyZWRpcmVjdFRvIiwidXJsIiwiZSIsImRldGFpbCIsIm5hdmlnYXRlVG8iLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsZUFBU0MsR0FBR0QsT0FBSCxDQUFXLDhCQUFYO0FBREosSzs7Ozs7NkJBSUc7QUFDUixVQUFJRSxRQUFRLElBQVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQUQsU0FBR0UsVUFBSCxDQUFjO0FBQ1pDLGVBRFksbUJBQ0hDLEdBREcsRUFDQztBQUNYLGNBQUlBLElBQUlDLFdBQUosQ0FBZ0IsZ0JBQWhCLENBQUosRUFBdUM7QUFDckM7QUFDQUwsZUFBR00sV0FBSCxDQUFlO0FBQ2JILHVCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJILHNCQUFNTSxPQUFOLENBQWNDLFVBQWQsQ0FBeUJDLFFBQXpCLEdBQW9DTCxJQUFJSyxRQUF4QztBQUNBO0FBQ0FULG1CQUFHVSxVQUFILENBQWMsRUFBQ0MsS0FBSyxjQUFOLEVBQWQ7QUFDRDtBQUxZLGFBQWY7QUFPRDtBQUNGO0FBWlcsT0FBZDtBQWNEOzs7b0NBRWdCQyxDLEVBQUc7QUFDbEIsV0FBS0wsT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxRQUF4QixHQUFtQ0csRUFBRUMsTUFBRixDQUFTSixRQUE1QztBQUNBVCxTQUFHYyxVQUFILENBQWMsRUFBQ0gsS0FBSyxjQUFOLEVBQWQ7QUFDRDs7OztFQWpEZ0NJLGVBQUtDLEk7O2tCQUFuQnJCLEsiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnJ1xuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJylcbiAgICB9XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgbGV0IF9zZWxmID0gdGhpc1xuXG4gICAgICAvLyB3eC5sb2dpbih7XG4gICAgICAvLyBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgIC8vICAgICBpZiAocmVzLmNvZGUpIHtcbiAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKCdodHRwczovL2FwaS53ZWl4aW4ucXEuY29tL3Nucy9qc2NvZGUyc2Vzc2lvbj9hcHBpZD0nICsgY29uZmlnLkFQUElEICsgJyZzZWNyZXQ9JyArIGNvbmZpZy5TRUNSRVQgKyAnJmpzX2NvZGU9SlNDT0RFJmdyYW50X3R5cGU9YXV0aG9yaXphdGlvbl9jb2RlJywpO1xuICAgICAgLy8gICAgICAgLy/lj5HotbfnvZHnu5zor7fmsYJcbiAgICAgIC8vICAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgLy8gICAgICAgICB1cmw6ICdodHRwczovL2FwaS53ZWl4aW4ucXEuY29tL3Nucy9qc2NvZGUyc2Vzc2lvbj9hcHBpZD0nICsgY29uZmlnLkFQUElEICsgJyZzZWNyZXQ9JyArIGNvbmZpZy5TRUNSRVQgKyAnJmpzX2NvZGU9JyArIHJlcy5jb2RlICsgJyZncmFudF90eXBlPWF1dGhvcml6YXRpb25fY29kZScsXG4gICAgICAvLyAgICAgICAgIHN1Y2Nlc3MoZGF0YSkge1xuICAgICAgLy8gICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgLy8gICAgICAgICB9XG4gICAgICAvLyAgICAgICB9KVxuICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAvLyAgICAgICBjb25zb2xlLmxvZygn55m75b2V5aSx6LSl77yBJyArIHJlcy5lcnJNc2cpXG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gICB9XG4gICAgICAvLyB9KVxuXG4gICAgICAvLyDmn6XnnIvmmK/lkKbmjojmnYMo5aaC5p6c5o6I5p2D5YiZ55u05o6l55m75b2VKVxuICAgICAgd3guZ2V0U2V0dGluZyh7XG4gICAgICAgIHN1Y2Nlc3MgKHJlcyl7XG4gICAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xuICAgICAgICAgICAgLy8g5bey57uP5o6I5p2D77yM5Y+v5Lul55u05o6l6LCD55SoIGdldFVzZXJJbmZvIOiOt+WPluWktOWDj+aYteensFxuICAgICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICBfc2VsZi4kcGFyZW50Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMudXNlckluZm8pO1xuICAgICAgICAgICAgICAgIHd4LnJlZGlyZWN0VG8oe3VybDogJy4uL2hvbWUvaG9tZSd9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBiaW5kR2V0VXNlckluZm8gKGUpIHtcbiAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cbiAgICAgIHd4Lm5hdmlnYXRlVG8oe3VybDogJy4uL2hvbWUvaG9tZSd9KVxuICAgIH1cbiAgfVxuIl19