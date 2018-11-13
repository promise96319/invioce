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
                wx.redirectTo({ url: '../company/companyInfo' });
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
      wx.navigateTo({ url: '../company/companyInfo' });
    }
  }]);

  return Login;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Login , 'pages/login/login'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJjYW5JVXNlIiwid3giLCJfc2VsZiIsImxvZ2luIiwic3VjY2VzcyIsInJlcyIsImNvZGUiLCJjb25zb2xlIiwibG9nIiwiQVBQSUQiLCJTRUNSRVQiLCJyZXF1ZXN0IiwidXJsIiwiZXJyTXNnIiwiZ2V0U2V0dGluZyIsImF1dGhTZXR0aW5nIiwiZ2V0VXNlckluZm8iLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwicmVkaXJlY3RUbyIsImUiLCJkZXRhaWwiLCJuYXZpZ2F0ZVRvIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGVBQVNDLEdBQUdELE9BQUgsQ0FBVyw4QkFBWDtBQURKLEs7Ozs7OzZCQUlHO0FBQ1IsVUFBSUUsUUFBUSxJQUFaOztBQUVBRCxTQUFHRSxLQUFILENBQVM7QUFDVEMsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNuQixjQUFJQSxJQUFJQyxJQUFSLEVBQWM7QUFDWkMsb0JBQVFDLEdBQVIsQ0FBWSx3REFBd0RYLGlCQUFPWSxLQUEvRCxHQUF1RSxVQUF2RSxHQUFvRlosaUJBQU9hLE1BQTNGLEdBQW9HLCtDQUFoSDtBQUNBO0FBQ0FULGVBQUdVLE9BQUgsQ0FBVztBQUNUQyxtQkFBSyx3REFBd0RmLGlCQUFPWSxLQUEvRCxHQUF1RSxVQUF2RSxHQUFvRlosaUJBQU9hLE1BQTNGLEdBQW9HLFdBQXBHLEdBQWtITCxJQUFJQyxJQUF0SCxHQUE2SCxnQ0FEekg7QUFFVEYscUJBRlMsbUJBRURMLElBRkMsRUFFSztBQUNaUSx3QkFBUUMsR0FBUixDQUFZVCxJQUFaO0FBQ0Q7QUFKUSxhQUFYO0FBTUQsV0FURCxNQVNPO0FBQ0xRLG9CQUFRQyxHQUFSLENBQVksVUFBVUgsSUFBSVEsTUFBMUI7QUFDRDtBQUNGO0FBZE0sT0FBVDs7QUFpQkE7QUFDQVosU0FBR2EsVUFBSCxDQUFjO0FBQ1pWLGVBRFksbUJBQ0hDLEdBREcsRUFDQztBQUNYLGNBQUlBLElBQUlVLFdBQUosQ0FBZ0IsZ0JBQWhCLENBQUosRUFBdUM7QUFDckM7QUFDQWQsZUFBR2UsV0FBSCxDQUFlO0FBQ2JaLHVCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJILHNCQUFNZSxPQUFOLENBQWNDLFVBQWQsQ0FBeUJDLFFBQXpCLEdBQW9DZCxJQUFJYyxRQUF4QztBQUNBO0FBQ0FsQixtQkFBR21CLFVBQUgsQ0FBYyxFQUFDUixLQUFLLHdCQUFOLEVBQWQ7QUFDRDtBQUxZLGFBQWY7QUFPRDtBQUNGO0FBWlcsT0FBZDtBQWNEOzs7b0NBRWdCUyxDLEVBQUc7QUFDbEIsV0FBS0osT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxRQUF4QixHQUFtQ0UsRUFBRUMsTUFBRixDQUFTSCxRQUE1QztBQUNBbEIsU0FBR3NCLFVBQUgsQ0FBYyxFQUFDWCxLQUFLLHdCQUFOLEVBQWQ7QUFDRDs7OztFQWpEZ0NZLGVBQUtDLEk7O2tCQUFuQjdCLEsiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5o6I5p2D55m75b2VJ1xuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJylcbiAgICB9XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgbGV0IF9zZWxmID0gdGhpc1xuXG4gICAgICB3eC5sb2dpbih7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBpZiAocmVzLmNvZGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdodHRwczovL2FwaS53ZWl4aW4ucXEuY29tL3Nucy9qc2NvZGUyc2Vzc2lvbj9hcHBpZD0nICsgY29uZmlnLkFQUElEICsgJyZzZWNyZXQ9JyArIGNvbmZpZy5TRUNSRVQgKyAnJmpzX2NvZGU9SlNDT0RFJmdyYW50X3R5cGU9YXV0aG9yaXphdGlvbl9jb2RlJywpO1xuICAgICAgICAgICAgLy/lj5HotbfnvZHnu5zor7fmsYJcbiAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2FwaS53ZWl4aW4ucXEuY29tL3Nucy9qc2NvZGUyc2Vzc2lvbj9hcHBpZD0nICsgY29uZmlnLkFQUElEICsgJyZzZWNyZXQ9JyArIGNvbmZpZy5TRUNSRVQgKyAnJmpzX2NvZGU9JyArIHJlcy5jb2RlICsgJyZncmFudF90eXBlPWF1dGhvcml6YXRpb25fY29kZScsXG4gICAgICAgICAgICAgIHN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn55m75b2V5aSx6LSl77yBJyArIHJlcy5lcnJNc2cpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICAvLyDmn6XnnIvmmK/lkKbmjojmnYMo5aaC5p6c5o6I5p2D5YiZ55u05o6l55m75b2VKVxuICAgICAgd3guZ2V0U2V0dGluZyh7XG4gICAgICAgIHN1Y2Nlc3MgKHJlcyl7XG4gICAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xuICAgICAgICAgICAgLy8g5bey57uP5o6I5p2D77yM5Y+v5Lul55u05o6l6LCD55SoIGdldFVzZXJJbmZvIOiOt+WPluWktOWDj+aYteensFxuICAgICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICBfc2VsZi4kcGFyZW50Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMudXNlckluZm8pO1xuICAgICAgICAgICAgICAgIHd4LnJlZGlyZWN0VG8oe3VybDogJy4uL2NvbXBhbnkvY29tcGFueUluZm8nfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgYmluZEdldFVzZXJJbmZvIChlKSB7XG4gICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHt1cmw6ICcuLi9jb21wYW55L2NvbXBhbnlJbmZvJ30pXG4gICAgfVxuICB9XG4iXX0=