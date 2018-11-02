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

var Home = function (_wepy$page) {
  _inherits(Home, _wepy$page);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '发票验证'
    }, _this.data = {
      userInfo: {
        nickName: '加载中...'
      }
    }, _this.methods = {
      // 调用拍照或者选取照片接口
      getPhoto: function getPhoto() {
        var that = this;
        wx.chooseImage({
          count: 1,
          sizeType: 'original',
          sourceType: ['camera', 'album'],
          success: function success(res) {
            wx.getFileSystemManager().readFile({
              filePath: res.tempFilePaths[0], //选择图片返回的相对路径
              encoding: 'base64', //编码格式
              success: function success(res2) {
                //成功的回调
                // console.log('成功获取图片');
                // console.log('data:image/png;base64,' + res.data)
                that.handleIdentifyInvoice(res2.data);
              }
            });
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'handleIdentifyInvoice',


    // 获取access_token
    value: function handleIdentifyInvoice(base64) {
      wx.showToast({
        title: '正在识别...',
        icon: 'loading',
        mask: true,
        duration: 60000
      });
      var that = this;
      wx.request({
        url: 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=UVVOjbGt1XpSR9cW6GCSh77t&client_secret=mwHCmi819kPcVlOn7r8XAbnerudcOGwB&',
        method: 'POST',
        success: function success(res) {
          // console.log('成功获取access_token');
          that.getInvoiceData(res.data.access_token, base64);
        },
        fail: function fail(err) {
          console.log(err);
        }
      });
    }

    // 根据access_token 调用百度云发票识别接口

  }, {
    key: 'getInvoiceData',
    value: function getInvoiceData(access_token, base64) {
      // console.log('发送识别发票的请求');
      var that = this;
      wx.request({
        url: 'https://aip.baidubce.com/rest/2.0/ocr/v1/vat_invoice?access_token=' + access_token,
        data: {
          image: base64,
          detect_direction: true
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        success: function success(res) {
          if (res.data.words_result) {
            console.log(res.data.words_result);
            wx.hideToast();
            wx.navigateTo({ url: '../message/message?message=' + JSON.stringify(res.data.words_result) });
          } else {
            wx.hideToast();
            wx.showToast({
              icon: 'none',
              title: '识别失败，请重新上传照片',
              duration: 2000
            });
          }
        },
        fail: function fail(err) {
          wx.hideToast();
          wx.showToast({
            icon: 'none',
            title: '识别失败，请重新上传照片',
            duration: 2000
          });
          console.log(err);
        }
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.userInfo = this.$parent.globalData.userInfo;
    }
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/home/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidXNlckluZm8iLCJuaWNrTmFtZSIsIm1ldGhvZHMiLCJnZXRQaG90byIsInRoYXQiLCJ3eCIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJzdWNjZXNzIiwicmVzIiwiZ2V0RmlsZVN5c3RlbU1hbmFnZXIiLCJyZWFkRmlsZSIsImZpbGVQYXRoIiwidGVtcEZpbGVQYXRocyIsImVuY29kaW5nIiwiaGFuZGxlSWRlbnRpZnlJbnZvaWNlIiwicmVzMiIsImJhc2U2NCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsIm1hc2siLCJkdXJhdGlvbiIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJnZXRJbnZvaWNlRGF0YSIsImFjY2Vzc190b2tlbiIsImZhaWwiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiaW1hZ2UiLCJkZXRlY3RfZGlyZWN0aW9uIiwiaGVhZGVyIiwid29yZHNfcmVzdWx0IiwiaGlkZVRvYXN0IiwibmF2aWdhdGVUbyIsIkpTT04iLCJzdHJpbmdpZnkiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFDUkMsa0JBQVU7QUFERjtBQURMLEssUUFNUEMsTyxHQUFVO0FBQ1I7QUFDQUMsY0FGUSxzQkFFSTtBQUNWLFlBQUlDLE9BQU8sSUFBWDtBQUNBQyxXQUFHQyxXQUFILENBQWU7QUFDYkMsaUJBQU8sQ0FETTtBQUViQyxvQkFBVSxVQUZHO0FBR2JDLHNCQUFZLENBQUMsUUFBRCxFQUFXLE9BQVgsQ0FIQztBQUliQyxpQkFKYSxtQkFJSkMsR0FKSSxFQUlDO0FBQ1pOLGVBQUdPLG9CQUFILEdBQTBCQyxRQUExQixDQUFtQztBQUNqQ0Msd0JBQVVILElBQUlJLGFBQUosQ0FBa0IsQ0FBbEIsQ0FEdUIsRUFDRDtBQUNoQ0Msd0JBQVUsUUFGdUIsRUFFYjtBQUNwQk4sdUJBQVMsdUJBQVE7QUFBRTtBQUNqQjtBQUNBO0FBQ0FOLHFCQUFLYSxxQkFBTCxDQUEyQkMsS0FBS25CLElBQWhDO0FBQ0Q7QUFQZ0MsYUFBbkM7QUFTRDtBQWRZLFNBQWY7QUFnQkQ7QUFwQk8sSzs7Ozs7OztBQXVCVjswQ0FDdUJvQixNLEVBQVE7QUFDN0JkLFNBQUdlLFNBQUgsQ0FBYTtBQUNYQyxlQUFPLFNBREk7QUFFWEMsY0FBTSxTQUZLO0FBR1hDLGNBQU0sSUFISztBQUlYQyxrQkFBVTtBQUpDLE9BQWI7QUFNQSxVQUFJcEIsT0FBTyxJQUFYO0FBQ0FDLFNBQUdvQixPQUFILENBQVc7QUFDVEMsYUFBSywySkFESTtBQUVUQyxnQkFBUSxNQUZDO0FBR1RqQixlQUhTLG1CQUdBQyxHQUhBLEVBR0s7QUFDWjtBQUNBUCxlQUFLd0IsY0FBTCxDQUFvQmpCLElBQUlaLElBQUosQ0FBUzhCLFlBQTdCLEVBQTJDVixNQUEzQztBQUNELFNBTlE7QUFPVFcsWUFQUyxnQkFPSEMsR0FQRyxFQU9FO0FBQ1RDLGtCQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDRDtBQVRRLE9BQVg7QUFXRDs7QUFFRDs7OzttQ0FDZ0JGLFksRUFBY1YsTSxFQUFRO0FBQ3BDO0FBQ0EsVUFBSWYsT0FBTyxJQUFYO0FBQ0FDLFNBQUdvQixPQUFILENBQVc7QUFDVEMsYUFBSyx1RUFBdUVHLFlBRG5FO0FBRVQ5QixjQUFNO0FBQ0ptQyxpQkFBT2YsTUFESDtBQUVKZ0IsNEJBQWtCO0FBRmQsU0FGRztBQU1UQyxnQkFBUTtBQUNGLDBCQUFnQjtBQURkLFNBTkM7QUFTVFQsZ0JBQVEsTUFUQztBQVVUakIsaUJBQVMsaUJBQUNDLEdBQUQsRUFBUztBQUNoQixjQUFJQSxJQUFJWixJQUFKLENBQVNzQyxZQUFiLEVBQTJCO0FBQ3pCTCxvQkFBUUMsR0FBUixDQUFZdEIsSUFBSVosSUFBSixDQUFTc0MsWUFBckI7QUFDQWhDLGVBQUdpQyxTQUFIO0FBQ0FqQyxlQUFHa0MsVUFBSCxDQUFjLEVBQUNiLEtBQUssZ0NBQWdDYyxLQUFLQyxTQUFMLENBQWU5QixJQUFJWixJQUFKLENBQVNzQyxZQUF4QixDQUF0QyxFQUFkO0FBQ0QsV0FKRCxNQUtLO0FBQ0hoQyxlQUFHaUMsU0FBSDtBQUNBakMsZUFBR2UsU0FBSCxDQUFhO0FBQ1hFLG9CQUFNLE1BREs7QUFFWEQscUJBQU8sY0FGSTtBQUdYRyx3QkFBVTtBQUhDLGFBQWI7QUFLRDtBQUNGLFNBeEJRO0FBeUJUTSxjQUFNLGNBQUNDLEdBQUQsRUFBUztBQUNiMUIsYUFBR2lDLFNBQUg7QUFDQWpDLGFBQUdlLFNBQUgsQ0FBYTtBQUNYRSxrQkFBTSxNQURLO0FBRVhELG1CQUFPLGNBRkk7QUFHWEcsc0JBQVU7QUFIQyxXQUFiO0FBS0FRLGtCQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDRDtBQWpDUSxPQUFYO0FBbUNEOzs7NkJBRVE7QUFDUCxXQUFLL0IsUUFBTCxHQUFnQixLQUFLMEMsT0FBTCxDQUFhQyxVQUFiLENBQXdCM0MsUUFBeEM7QUFDRDs7OztFQW5HK0I0QyxlQUFLQyxJOztrQkFBbEJqRCxJIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WPkeelqOmqjOivgSdcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICB1c2VySW5mbzoge1xyXG4gICAgICAgIG5pY2tOYW1lOiAn5Yqg6L295LitLi4uJ1xyXG4gICAgICB9LFxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIC8vIOiwg+eUqOaLjeeFp+aIluiAhemAieWPlueFp+eJh+aOpeWPo1xyXG4gICAgICBnZXRQaG90byAoKSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzXHJcbiAgICAgICAgd3guY2hvb3NlSW1hZ2Uoe1xyXG4gICAgICAgICAgY291bnQ6IDEsXHJcbiAgICAgICAgICBzaXplVHlwZTogJ29yaWdpbmFsJyxcclxuICAgICAgICAgIHNvdXJjZVR5cGU6IFsnY2FtZXJhJywgJ2FsYnVtJ10sXHJcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgICAgd3guZ2V0RmlsZVN5c3RlbU1hbmFnZXIoKS5yZWFkRmlsZSh7XHJcbiAgICAgICAgICAgICAgZmlsZVBhdGg6IHJlcy50ZW1wRmlsZVBhdGhzWzBdLCAvL+mAieaLqeWbvueJh+i/lOWbnueahOebuOWvuei3r+W+hFxyXG4gICAgICAgICAgICAgIGVuY29kaW5nOiAnYmFzZTY0JywgLy/nvJbnoIHmoLzlvI9cclxuICAgICAgICAgICAgICBzdWNjZXNzOiByZXMyID0+IHsgLy/miJDlip/nmoTlm57osINcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfmiJDlip/ojrflj5blm77niYcnKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsJyArIHJlcy5kYXRhKVxyXG4gICAgICAgICAgICAgICAgdGhhdC5oYW5kbGVJZGVudGlmeUludm9pY2UocmVzMi5kYXRhKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6I635Y+WYWNjZXNzX3Rva2VuXHJcbiAgICBoYW5kbGVJZGVudGlmeUludm9pY2UgKGJhc2U2NCkge1xyXG4gICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgIHRpdGxlOiAn5q2j5Zyo6K+G5YirLi4uJyxcclxuICAgICAgICBpY29uOiAnbG9hZGluZycsXHJcbiAgICAgICAgbWFzazogdHJ1ZSxcclxuICAgICAgICBkdXJhdGlvbjogNjAwMDBcclxuICAgICAgfSlcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzXHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vYWlwLmJhaWR1YmNlLmNvbS9vYXV0aC8yLjAvdG9rZW4/Z3JhbnRfdHlwZT1jbGllbnRfY3JlZGVudGlhbHMmY2xpZW50X2lkPVVWVk9qYkd0MVhwU1I5Y1c2R0NTaDc3dCZjbGllbnRfc2VjcmV0PW13SENtaTgxOWtQY1ZsT243cjhYQWJuZXJ1ZGNPR3dCJicsXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5oiQ5Yqf6I635Y+WYWNjZXNzX3Rva2VuJyk7XHJcbiAgICAgICAgICB0aGF0LmdldEludm9pY2VEYXRhKHJlcy5kYXRhLmFjY2Vzc190b2tlbiwgYmFzZTY0KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbCAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyDmoLnmja5hY2Nlc3NfdG9rZW4g6LCD55So55m+5bqm5LqR5Y+R56Wo6K+G5Yir5o6l5Y+jXHJcbiAgICBnZXRJbnZvaWNlRGF0YSAoYWNjZXNzX3Rva2VuLCBiYXNlNjQpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ+WPkemAgeivhuWIq+WPkeelqOeahOivt+axgicpO1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXNcclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9haXAuYmFpZHViY2UuY29tL3Jlc3QvMi4wL29jci92MS92YXRfaW52b2ljZT9hY2Nlc3NfdG9rZW49JyArIGFjY2Vzc190b2tlbixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBpbWFnZTogYmFzZTY0LFxyXG4gICAgICAgICAgZGV0ZWN0X2RpcmVjdGlvbjogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEud29yZHNfcmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLndvcmRzX3Jlc3VsdCk7XHJcbiAgICAgICAgICAgIHd4LmhpZGVUb2FzdCgpXHJcbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe3VybDogJy4uL21lc3NhZ2UvbWVzc2FnZT9tZXNzYWdlPScgKyBKU09OLnN0cmluZ2lmeShyZXMuZGF0YS53b3Jkc19yZXN1bHQpfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB3eC5oaWRlVG9hc3QoKVxyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ+ivhuWIq+Wksei0pe+8jOivt+mHjeaWsOS4iuS8oOeFp+eJhycsXHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6IChlcnIpID0+IHtcclxuICAgICAgICAgIHd4LmhpZGVUb2FzdCgpXHJcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn6K+G5Yir5aSx6LSl77yM6K+36YeN5paw5LiK5Lyg54Wn54mHJyxcclxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgIHRoaXMudXNlckluZm8gPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VySW5mb1xyXG4gICAgfVxyXG4gIH1cclxuIl19