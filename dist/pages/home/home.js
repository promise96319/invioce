'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
      },
      companies: [],
      currentIndex: 0
    }, _this.methods = {
      // 切换公司
      toggleSelectCompany: function toggleSelectCompany(e) {
        this.currentIndex = e.detail.value;
        this.$apply();
      },

      // 调用拍照或者选取照片接口
      getPhoto: function getPhoto() {
        var _this2 = this;

        this.timer = setInterval(function () {
          _this2.time++;
        }, 1000);
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
            wx.hideToast();
            wx.navigateTo({ url: '../message/message?message=' + JSON.stringify(res.data.words_result) + '&company=' + JSON.stringify(that.companies[that.currentIndex]) });
          } else {
            wx.hideToast();
            wx.showModal({
              title: '识别失败',
              content: '未能识别出发票信息',
              confirmText: '自行录入',
              cancelText: '重选照片',
              success: function success(res) {
                if (res.confirm) {
                  var message = {
                    AmountInFiguers: "",
                    AmountInWords: "",
                    CheckCode: "",
                    Checker: "",
                    CommodityAmount: [],
                    CommodityName: [],
                    CommodityNum: [],
                    CommodityPrice: [],
                    CommodityTax: [],
                    CommodityTaxRate: [],
                    CommodityType: [],
                    CommodityUnit: [],
                    InvoiceCode: "",
                    InvoiceDate: "",
                    InvoiceNum: "",
                    InvoiceType: "其他发票",
                    NoteDrawer: "",
                    Password: "",
                    Payee: "",
                    PurchaserAddress: "",
                    PurchaserBank: "",
                    PurchaserName: "",
                    PurchaserRegisterNum: "",
                    Remarks: "",
                    SellerAddress: "",
                    SellerBank: "",
                    SellerName: "",
                    SellerRegisterNum: "",
                    TotalAmount: "",
                    TotalTax: ""
                  };
                  wx.navigateTo({ url: '../message/message?message=' + JSON.stringify(message) + '&company=' + JSON.stringify(that.companies[that.currentIndex]) });
                } else if (res.cancel) {}
              }
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
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.companies = JSON.parse(options.companies);
                _context.next = 3;
                return wx.login();

              case 3:
                this.userInfo = this.$parent.globalData.userInfo;

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/home/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidXNlckluZm8iLCJuaWNrTmFtZSIsImNvbXBhbmllcyIsImN1cnJlbnRJbmRleCIsIm1ldGhvZHMiLCJ0b2dnbGVTZWxlY3RDb21wYW55IiwiZSIsImRldGFpbCIsInZhbHVlIiwiJGFwcGx5IiwiZ2V0UGhvdG8iLCJ0aW1lciIsInNldEludGVydmFsIiwidGltZSIsInRoYXQiLCJ3eCIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJzdWNjZXNzIiwicmVzIiwiZ2V0RmlsZVN5c3RlbU1hbmFnZXIiLCJyZWFkRmlsZSIsImZpbGVQYXRoIiwidGVtcEZpbGVQYXRocyIsImVuY29kaW5nIiwiaGFuZGxlSWRlbnRpZnlJbnZvaWNlIiwicmVzMiIsImJhc2U2NCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsIm1hc2siLCJkdXJhdGlvbiIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJnZXRJbnZvaWNlRGF0YSIsImFjY2Vzc190b2tlbiIsImZhaWwiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiaW1hZ2UiLCJkZXRlY3RfZGlyZWN0aW9uIiwiaGVhZGVyIiwid29yZHNfcmVzdWx0IiwiaGlkZVRvYXN0IiwibmF2aWdhdGVUbyIsIkpTT04iLCJzdHJpbmdpZnkiLCJzaG93TW9kYWwiLCJjb250ZW50IiwiY29uZmlybVRleHQiLCJjYW5jZWxUZXh0IiwiY29uZmlybSIsIm1lc3NhZ2UiLCJBbW91bnRJbkZpZ3VlcnMiLCJBbW91bnRJbldvcmRzIiwiQ2hlY2tDb2RlIiwiQ2hlY2tlciIsIkNvbW1vZGl0eUFtb3VudCIsIkNvbW1vZGl0eU5hbWUiLCJDb21tb2RpdHlOdW0iLCJDb21tb2RpdHlQcmljZSIsIkNvbW1vZGl0eVRheCIsIkNvbW1vZGl0eVRheFJhdGUiLCJDb21tb2RpdHlUeXBlIiwiQ29tbW9kaXR5VW5pdCIsIkludm9pY2VDb2RlIiwiSW52b2ljZURhdGUiLCJJbnZvaWNlTnVtIiwiSW52b2ljZVR5cGUiLCJOb3RlRHJhd2VyIiwiUGFzc3dvcmQiLCJQYXllZSIsIlB1cmNoYXNlckFkZHJlc3MiLCJQdXJjaGFzZXJCYW5rIiwiUHVyY2hhc2VyTmFtZSIsIlB1cmNoYXNlclJlZ2lzdGVyTnVtIiwiUmVtYXJrcyIsIlNlbGxlckFkZHJlc3MiLCJTZWxsZXJCYW5rIiwiU2VsbGVyTmFtZSIsIlNlbGxlclJlZ2lzdGVyTnVtIiwiVG90YWxBbW91bnQiLCJUb3RhbFRheCIsImNhbmNlbCIsIm9wdGlvbnMiLCJwYXJzZSIsImxvZ2luIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFDUkMsa0JBQVU7QUFERixPQURMO0FBSUxDLGlCQUFXLEVBSk47QUFNTEMsb0JBQWM7QUFOVCxLLFFBU1BDLE8sR0FBVTtBQUNSO0FBQ0FDLHlCQUZRLCtCQUVhQyxDQUZiLEVBRWdCO0FBQ3RCLGFBQUtILFlBQUwsR0FBb0JHLEVBQUVDLE1BQUYsQ0FBU0MsS0FBN0I7QUFDQSxhQUFLQyxNQUFMO0FBQ0QsT0FMTzs7QUFNUjtBQUNBQyxjQVBRLHNCQU9JO0FBQUE7O0FBQ1YsYUFBS0MsS0FBTCxHQUFhQyxZQUFZLFlBQU07QUFDN0IsaUJBQUtDLElBQUw7QUFDRCxTQUZZLEVBRVYsSUFGVSxDQUFiO0FBR0EsWUFBSUMsT0FBTyxJQUFYO0FBQ0FDLFdBQUdDLFdBQUgsQ0FBZTtBQUNiQyxpQkFBTyxDQURNO0FBRWJDLG9CQUFVLFVBRkc7QUFHYkMsc0JBQVksQ0FBQyxRQUFELEVBQVcsT0FBWCxDQUhDO0FBSWJDLGlCQUphLG1CQUlKQyxHQUpJLEVBSUM7QUFDWk4sZUFB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QWdDWkMsOEJBQVU7QUFoQ0UsbUJBQWQ7QUFrQ0F4RSxxQkFBR2tDLFVBQUgsQ0FBYyxFQUFDYixLQUFLLGdDQUFnQ2MsS0FBS0MsU0FBTCxDQUFlTSxPQUFmLENBQWhDLEdBQTBELFdBQTFELEdBQXdFUCxLQUFLQyxTQUFMLENBQWVyQyxLQUFLWixTQUFMLENBQWVZLEtBQUtYLFlBQXBCLENBQWYsQ0FBOUUsRUFBZDtBQUNELGlCQXBDRCxNQW9DTyxJQUFJa0IsSUFBSW1FLE1BQVIsRUFBZ0IsQ0FFdEI7QUFDRjtBQTdDVSxhQUFiO0FBK0NEO0FBQ0YsU0FqRVE7QUFrRVRoRCxjQUFNLGNBQUNDLEdBQUQsRUFBUztBQUNiMUIsYUFBR2lDLFNBQUg7QUFDQWpDLGFBQUdlLFNBQUgsQ0FBYTtBQUNYRSxrQkFBTSxNQURLO0FBRVhELG1CQUFPLGNBRkk7QUFHWEcsc0JBQVU7QUFIQyxXQUFiO0FBS0FRLGtCQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDRDtBQTFFUSxPQUFYO0FBNEVEOzs7OzJGQUVZZ0QsTzs7Ozs7QUFDWCxxQkFBS3ZGLFNBQUwsR0FBaUJnRCxLQUFLd0MsS0FBTCxDQUFXRCxRQUFRdkYsU0FBbkIsQ0FBakI7O3VCQUNNYSxHQUFHNEUsS0FBSCxFOzs7QUFDTixxQkFBSzNGLFFBQUwsR0FBZ0IsS0FBSzRGLE9BQUwsQ0FBYUMsVUFBYixDQUF3QjdGLFFBQXhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBcEo4QjhGLGVBQUtDLEk7O2tCQUFsQm5HLEkiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Y+R56Wo6aqM6K+BJ1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHVzZXJJbmZvOiB7XHJcbiAgICAgICAgbmlja05hbWU6ICfliqDovb3kuK0uLi4nLFxyXG4gICAgICB9LFxyXG4gICAgICBjb21wYW5pZXM6IFtcclxuICAgICAgXSxcclxuICAgICAgY3VycmVudEluZGV4OiAwLFxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIC8vIOWIh+aNouWFrOWPuFxyXG4gICAgICB0b2dnbGVTZWxlY3RDb21wYW55IChlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgfSxcclxuICAgICAgLy8g6LCD55So5ouN54Wn5oiW6ICF6YCJ5Y+W54Wn54mH5o6l5Y+jXHJcbiAgICAgIGdldFBob3RvICgpIHtcclxuICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy50aW1lICsrXHJcbiAgICAgICAgfSwgMTAwMClcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXNcclxuICAgICAgICB3eC5jaG9vc2VJbWFnZSh7XHJcbiAgICAgICAgICBjb3VudDogMSxcclxuICAgICAgICAgIHNpemVUeXBlOiAnb3JpZ2luYWwnLFxyXG4gICAgICAgICAgc291cmNlVHlwZTogWydjYW1lcmEnLCAnYWxidW0nXSxcclxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgICB3eC5nZXRGaWxlU3lzdGVtTWFuYWdlcigpLnJlYWRGaWxlKHtcclxuICAgICAgICAgICAgICBmaWxlUGF0aDogcmVzLnRlbXBGaWxlUGF0aHNbMF0sIC8v6YCJ5oup5Zu+54mH6L+U5Zue55qE55u45a+56Lev5b6EXHJcbiAgICAgICAgICAgICAgZW5jb2Rpbmc6ICdiYXNlNjQnLCAvL+e8lueggeagvOW8j1xyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlczIgPT4geyAvL+aIkOWKn+eahOWbnuiwg1xyXG4gICAgICAgICAgICAgICAgdGhhdC5oYW5kbGVJZGVudGlmeUludm9pY2UocmVzMi5kYXRhKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgfVxyXG5cclxuICAgIC8vIOiOt+WPlmFjY2Vzc190b2tlblxyXG4gICAgaGFuZGxlSWRlbnRpZnlJbnZvaWNlIChiYXNlNjQpIHtcclxuICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICB0aXRsZTogJ+ato+WcqOivhuWIqy4uLicsXHJcbiAgICAgICAgaWNvbjogJ2xvYWRpbmcnLFxyXG4gICAgICAgIG1hc2s6IHRydWUsXHJcbiAgICAgICAgZHVyYXRpb246IDYwMDAwXHJcbiAgICAgIH0pXHJcbiAgICAgIGxldCB0aGF0ID0gdGhpc1xyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICdodHRwczovL2FpcC5iYWlkdWJjZS5jb20vb2F1dGgvMi4wL3Rva2VuP2dyYW50X3R5cGU9Y2xpZW50X2NyZWRlbnRpYWxzJmNsaWVudF9pZD1VVlZPamJHdDFYcFNSOWNXNkdDU2g3N3QmY2xpZW50X3NlY3JldD1td0hDbWk4MTlrUGNWbE9uN3I4WEFibmVydWRjT0d3QiYnLFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgdGhhdC5nZXRJbnZvaWNlRGF0YShyZXMuZGF0YS5hY2Nlc3NfdG9rZW4sIGJhc2U2NClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWwgKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8g5qC55o2uYWNjZXNzX3Rva2VuIOiwg+eUqOeZvuW6puS6keWPkeelqOivhuWIq+aOpeWPo1xyXG4gICAgZ2V0SW52b2ljZURhdGEgKGFjY2Vzc190b2tlbiwgYmFzZTY0KSB7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpc1xyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICdodHRwczovL2FpcC5iYWlkdWJjZS5jb20vcmVzdC8yLjAvb2NyL3YxL3ZhdF9pbnZvaWNlP2FjY2Vzc190b2tlbj0nICsgYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGltYWdlOiBiYXNlNjQsXHJcbiAgICAgICAgICBkZXRlY3RfZGlyZWN0aW9uOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgIGlmIChyZXMuZGF0YS53b3Jkc19yZXN1bHQpIHtcclxuICAgICAgICAgICAgd3guaGlkZVRvYXN0KClcclxuICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7dXJsOiAnLi4vbWVzc2FnZS9tZXNzYWdlP21lc3NhZ2U9JyArIEpTT04uc3RyaW5naWZ5KHJlcy5kYXRhLndvcmRzX3Jlc3VsdCkgKyAnJmNvbXBhbnk9JyArIEpTT04uc3RyaW5naWZ5KHRoYXQuY29tcGFuaWVzW3RoYXQuY3VycmVudEluZGV4XSl9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHd4LmhpZGVUb2FzdCgpXHJcbiAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICfor4bliKvlpLHotKUnLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICfmnKrog73or4bliKvlh7rlj5Hnpajkv6Hmga8nLFxyXG4gICAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn6Ieq6KGM5b2V5YWlJyxcclxuICAgICAgICAgICAgICBjYW5jZWxUZXh0OiAn6YeN6YCJ54Wn54mHJyxcclxuICAgICAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBBbW91bnRJbkZpZ3VlcnM6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgQW1vdW50SW5Xb3JkczogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBDaGVja0NvZGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgQ2hlY2tlcjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBDb21tb2RpdHlBbW91bnQ6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIENvbW1vZGl0eU5hbWU6IFtcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIENvbW1vZGl0eU51bTogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgQ29tbW9kaXR5UHJpY2U6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIENvbW1vZGl0eVRheDogW1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgQ29tbW9kaXR5VGF4UmF0ZTogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgQ29tbW9kaXR5VHlwZTogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgQ29tbW9kaXR5VW5pdDogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgSW52b2ljZUNvZGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgSW52b2ljZURhdGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgSW52b2ljZU51bTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBJbnZvaWNlVHlwZTogXCLlhbbku5blj5HnpahcIixcclxuICAgICAgICAgICAgICAgICAgICBOb3RlRHJhd2VyOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFBheWVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFB1cmNoYXNlckFkZHJlc3M6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgUHVyY2hhc2VyQmFuazogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBQdXJjaGFzZXJOYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFB1cmNoYXNlclJlZ2lzdGVyTnVtOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlbWFya3M6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgU2VsbGVyQWRkcmVzczogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBTZWxsZXJCYW5rOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFNlbGxlck5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgU2VsbGVyUmVnaXN0ZXJOdW06IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgVG90YWxBbW91bnQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgVG90YWxUYXg6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7dXJsOiAnLi4vbWVzc2FnZS9tZXNzYWdlP21lc3NhZ2U9JyArIEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpICsgJyZjb21wYW55PScgKyBKU09OLnN0cmluZ2lmeSh0aGF0LmNvbXBhbmllc1t0aGF0LmN1cnJlbnRJbmRleF0pfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICB3eC5oaWRlVG9hc3QoKVxyXG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ+ivhuWIq+Wksei0pe+8jOivt+mHjeaWsOS4iuS8oOeFp+eJhycsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgICB0aGlzLmNvbXBhbmllcyA9IEpTT04ucGFyc2Uob3B0aW9ucy5jb21wYW5pZXMpXHJcbiAgICAgIGF3YWl0IHd4LmxvZ2luKClcclxuICAgICAgdGhpcy51c2VySW5mbyA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJJbmZvXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=