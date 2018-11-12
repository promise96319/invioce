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
      navigationBarTitleText: '授权登录'
    }, _this.data = {
      canIUse: wx.canIUse('button.open-type.getUserInfo')
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: 'onLoad',
    value: function onLoad() {
      var _self = this;

      wx.login({
        success: function success(res) {
          if (res.code) {
            console.log('https://api.weixin.qq.com/sns/jscode2session?appid=' + _config2.default.APPID + '&secret=' + _config2.default.SECRET + '&js_code=JSCODE&grant_type=authorization_code');
            //发起网络请求
            wx.request({
              url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + _config2.default.APPID + '&secret=' + _config2.default.SECRET + '&js_code=' + res.code + '&grant_type=authorization_code',
              success: function success(data) {
                console.log(data);
              }
            });
          } else {
            console.log('登录失败！' + res.errMsg);
          }
        }
      });

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJjYW5JVXNlIiwid3giLCJfc2VsZiIsImxvZ2luIiwic3VjY2VzcyIsInJlcyIsImNvZGUiLCJjb25zb2xlIiwibG9nIiwiQVBQSUQiLCJTRUNSRVQiLCJyZXF1ZXN0IiwidXJsIiwiZXJyTXNnIiwiZ2V0U2V0dGluZyIsImF1dGhTZXR0aW5nIiwiZ2V0VXNlckluZm8iLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwicmVkaXJlY3RUbyIsImUiLCJkZXRhaWwiLCJuYXZpZ2F0ZVRvIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGVBQVNDLEdBQUdELE9BQUgsQ0FBVyw4QkFBWDtBQURKLEs7Ozs7OzZCQUlHO0FBQ1IsVUFBSUUsUUFBUSxJQUFaOztBQUVBRCxTQUFHRSxLQUFILENBQVM7QUFDVEMsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNuQixjQUFJQSxJQUFJQyxJQUFSLEVBQWM7QUFDWkMsb0JBQVFDLEdBQVIsQ0FBWSx3REFBd0RYLGlCQUFPWSxLQUEvRCxHQUF1RSxVQUF2RSxHQUFvRlosaUJBQU9hLE1BQTNGLEdBQW9HLCtDQUFoSDtBQUNBO0FBQ0FULGVBQUdVLE9BQUgsQ0FBVztBQUNUQyxtQkFBSyx3REFBd0RmLGlCQUFPWSxLQUEvRCxHQUF1RSxVQUF2RSxHQUFvRlosaUJBQU9hLE1BQTNGLEdBQW9HLFdBQXBHLEdBQWtITCxJQUFJQyxJQUF0SCxHQUE2SCxnQ0FEekg7QUFFVEYscUJBRlMsbUJBRURMLElBRkMsRUFFSztBQUNaUSx3QkFBUUMsR0FBUixDQUFZVCxJQUFaO0FBQ0Q7QUFKUSxhQUFYO0FBTUQsV0FURCxNQVNPO0FBQ0xRLG9CQUFRQyxHQUFSLENBQVksVUFBVUgsSUFBSVEsTUFBMUI7QUFDRDtBQUNGO0FBZE0sT0FBVDs7QUFpQkE7QUFDQVosU0FBR2EsVUFBSCxDQUFjO0FBQ1pWLGVBRFksbUJBQ0hDLEdBREcsRUFDQztBQUNYLGNBQUlBLElBQUlVLFdBQUosQ0FBZ0IsZ0JBQWhCLENBQUosRUFBdUM7QUFDckM7QUFDQWQsZUFBR2UsV0FBSCxDQUFlO0FBQ2JaLHVCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJILHNCQUFNZSxPQUFOLENBQWNDLFVBQWQsQ0FBeUJDLFFBQXpCLEdBQW9DZCxJQUFJYyxRQUF4QztBQUNBO0FBQ0FsQixtQkFBR21CLFVBQUgsQ0FBYyxFQUFDUixLQUFLLGNBQU4sRUFBZDtBQUNEO0FBTFksYUFBZjtBQU9EO0FBQ0Y7QUFaVyxPQUFkO0FBY0Q7OztvQ0FFZ0JTLEMsRUFBRztBQUNsQixXQUFLSixPQUFMLENBQWFDLFVBQWIsQ0FBd0JDLFFBQXhCLEdBQW1DRSxFQUFFQyxNQUFGLENBQVNILFFBQTVDO0FBQ0FsQixTQUFHc0IsVUFBSCxDQUFjLEVBQUNYLEtBQUssY0FBTixFQUFkO0FBQ0Q7Ozs7RUFqRGdDWSxlQUFLQyxJOztrQkFBbkI3QixLIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZydcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbiBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aOiOadg+eZu+W9lSdcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpXG4gICAgfVxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgIGxldCBfc2VsZiA9IHRoaXNcblxuICAgICAgd3gubG9naW4oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgaWYgKHJlcy5jb2RlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaHR0cHM6Ly9hcGkud2VpeGluLnFxLmNvbS9zbnMvanNjb2RlMnNlc3Npb24/YXBwaWQ9JyArIGNvbmZpZy5BUFBJRCArICcmc2VjcmV0PScgKyBjb25maWcuU0VDUkVUICsgJyZqc19jb2RlPUpTQ09ERSZncmFudF90eXBlPWF1dGhvcml6YXRpb25fY29kZScsKTtcbiAgICAgICAgICAgIC8v5Y+R6LW3572R57uc6K+35rGCXG4gICAgICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkud2VpeGluLnFxLmNvbS9zbnMvanNjb2RlMnNlc3Npb24/YXBwaWQ9JyArIGNvbmZpZy5BUFBJRCArICcmc2VjcmV0PScgKyBjb25maWcuU0VDUkVUICsgJyZqc19jb2RlPScgKyByZXMuY29kZSArICcmZ3JhbnRfdHlwZT1hdXRob3JpemF0aW9uX2NvZGUnLFxuICAgICAgICAgICAgICBzdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ+eZu+W9leWksei0pe+8gScgKyByZXMuZXJyTXNnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgLy8g5p+l55yL5piv5ZCm5o6I5p2DKOWmguaenOaOiOadg+WImeebtOaOpeeZu+W9lSlcbiAgICAgIHd4LmdldFNldHRpbmcoe1xuICAgICAgICBzdWNjZXNzIChyZXMpe1xuICAgICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcbiAgICAgICAgICAgIC8vIOW3sue7j+aOiOadg++8jOWPr+S7peebtOaOpeiwg+eUqCBnZXRVc2VySW5mbyDojrflj5blpLTlg4/mmLXnp7BcbiAgICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgX3NlbGYuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzLnVzZXJJbmZvKTtcbiAgICAgICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHt1cmw6ICcuLi9ob21lL2hvbWUnfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgYmluZEdldFVzZXJJbmZvIChlKSB7XG4gICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHt1cmw6ICcuLi9ob21lL2hvbWUnfSlcbiAgICB9XG4gIH1cbiJdfQ==