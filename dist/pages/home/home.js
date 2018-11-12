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
      time: 0,
      timer: null,
      companies: [{
        companyName: '有方教育0',
        personName: 'embark',
        isTaxPerson: true,
        personNum: '1213',
        personTelNum: '12345678910'
      }, {
        companyName: '有方教育1',
        personName: 'embark',
        isTaxPerson: true,
        personNum: '1213',
        personTelNum: '12345678910'
      }],
      isShow: false,
      currentIndex: 0
    }, _this.computed = {}, _this.methods = {

      // 切换公司
      toggleSelectCompany: function toggleSelectCompany(e) {
        this.currentIndex = e.detail.value;
        this.$apply();
      },

      // 保存公司信息
      handleSaveCompany: function handleSaveCompany() {
        var flag = true;
        this.companies.forEach(function (item) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = Object.values(item)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var value = _step.value;

              if (!value && value !== false) {
                flag = false;
                return wx.showToast({
                  title: '保存信息失败，请确认已经完整填写公司信息',
                  icon: 'none',
                  duration: 2000
                });
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        });

        if (flag) {
          wx.showToast({
            title: '确认成功',
            icon: 'success'
          });
          this.isShow = true;
        } else {
          this.isShow = false;
        }
      },

      // 删除公司信息
      handleDeleteCompany: function handleDeleteCompany(index) {
        this.companies.splice(index, 1);
      },

      // 添加公司信息
      handleAddCompany: function handleAddCompany() {
        this.isShow = false;
        this.companies.push({
          companyName: '',
          personName: '',
          isTaxPerson: true,
          personNum: '',
          personTelNum: ''
        });
      },

      // 是否为一般纳税人资格
      taxPersonChange: function taxPersonChange(index, e) {
        this.companies[index].isTaxPerson = e.detail.value === '是' ? true : false;
      },

      // 处理输入内容
      handleInput: function handleInput(index, name, e) {
        this.isShow = false;
        this.companies[index][name] = e.detail.value;
      },

      // 跳转到查询页面
      handleQuery: function handleQuery() {
        wx.navigateTo({
          url: '../query/query'
        });
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
                // console.log('成功获取图片');
                // wx.hideToast()
                // wx.showToast({
                //   title: '成功获取图片...' + that.time,
                //   icon: 'loading',
                //   mask: true,
                //   duration: 60000
                // })
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
          // wx.hideToast()
          // wx.showToast({
          //   title: 'access_token...' + that.time,
          //   icon: 'loading',
          //   mask: true,
          //   duration: 60000
          // })
          // console.log('成功获取access_token');
          // console.log(1, that.time);
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
      // console.log(2, this.time);
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
          // console.log(3, that.time);
          // wx.hideToast()
          // wx.showToast({
          //   title: '完毕...' + that.time,
          //   icon: 'loading',
          //   mask: true,
          //   duration: 60000
          // })
          // clearInterval(that.timer)
          // console.log(4, that.time);
          if (res.data.words_result) {
            console.log(res.data.words_result);
            wx.hideToast();
            wx.navigateTo({ url: '../message/message?message=' + JSON.stringify(res.data.words_result) + '&company=' + JSON.stringify(that.companies[that.currentIndex]) });
          } else {
            wx.hideToast();
            wx.showToast({
              icon: 'none',
              title: '识别失败，请自行录入信息或者重新上传照片',
              duration: 2000
            });
            setTimeout(function () {
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
            }, 2000);
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
    key: 'getPhoneNumber',
    value: function getPhoneNumber(e) {}
  }, {
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return wx.login();

              case 2:
                this.userInfo = this.$parent.globalData.userInfo;

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/home/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidXNlckluZm8iLCJuaWNrTmFtZSIsInRpbWUiLCJ0aW1lciIsImNvbXBhbmllcyIsImNvbXBhbnlOYW1lIiwicGVyc29uTmFtZSIsImlzVGF4UGVyc29uIiwicGVyc29uTnVtIiwicGVyc29uVGVsTnVtIiwiaXNTaG93IiwiY3VycmVudEluZGV4IiwiY29tcHV0ZWQiLCJtZXRob2RzIiwidG9nZ2xlU2VsZWN0Q29tcGFueSIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsIiRhcHBseSIsImhhbmRsZVNhdmVDb21wYW55IiwiZmxhZyIsImZvckVhY2giLCJpdGVtIiwiT2JqZWN0IiwidmFsdWVzIiwid3giLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsImhhbmRsZURlbGV0ZUNvbXBhbnkiLCJpbmRleCIsInNwbGljZSIsImhhbmRsZUFkZENvbXBhbnkiLCJwdXNoIiwidGF4UGVyc29uQ2hhbmdlIiwiaGFuZGxlSW5wdXQiLCJuYW1lIiwiaGFuZGxlUXVlcnkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZ2V0UGhvdG8iLCJzZXRJbnRlcnZhbCIsInRoYXQiLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwic3VjY2VzcyIsInJlcyIsImdldEZpbGVTeXN0ZW1NYW5hZ2VyIiwicmVhZEZpbGUiLCJmaWxlUGF0aCIsInRlbXBGaWxlUGF0aHMiLCJlbmNvZGluZyIsImhhbmRsZUlkZW50aWZ5SW52b2ljZSIsInJlczIiLCJiYXNlNjQiLCJtYXNrIiwicmVxdWVzdCIsIm1ldGhvZCIsImdldEludm9pY2VEYXRhIiwiYWNjZXNzX3Rva2VuIiwiZmFpbCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJpbWFnZSIsImRldGVjdF9kaXJlY3Rpb24iLCJoZWFkZXIiLCJ3b3Jkc19yZXN1bHQiLCJoaWRlVG9hc3QiLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0VGltZW91dCIsIm1lc3NhZ2UiLCJBbW91bnRJbkZpZ3VlcnMiLCJBbW91bnRJbldvcmRzIiwiQ2hlY2tDb2RlIiwiQ2hlY2tlciIsIkNvbW1vZGl0eUFtb3VudCIsIkNvbW1vZGl0eU5hbWUiLCJDb21tb2RpdHlOdW0iLCJDb21tb2RpdHlQcmljZSIsIkNvbW1vZGl0eVRheCIsIkNvbW1vZGl0eVRheFJhdGUiLCJDb21tb2RpdHlUeXBlIiwiQ29tbW9kaXR5VW5pdCIsIkludm9pY2VDb2RlIiwiSW52b2ljZURhdGUiLCJJbnZvaWNlTnVtIiwiSW52b2ljZVR5cGUiLCJOb3RlRHJhd2VyIiwiUGFzc3dvcmQiLCJQYXllZSIsIlB1cmNoYXNlckFkZHJlc3MiLCJQdXJjaGFzZXJCYW5rIiwiUHVyY2hhc2VyTmFtZSIsIlB1cmNoYXNlclJlZ2lzdGVyTnVtIiwiUmVtYXJrcyIsIlNlbGxlckFkZHJlc3MiLCJTZWxsZXJCYW5rIiwiU2VsbGVyTmFtZSIsIlNlbGxlclJlZ2lzdGVyTnVtIiwiVG90YWxBbW91bnQiLCJUb3RhbFRheCIsImxvZ2luIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFDUkMsa0JBQVU7QUFERixPQURMO0FBSUxDLFlBQU0sQ0FKRDtBQUtMQyxhQUFPLElBTEY7QUFNTEMsaUJBQVcsQ0FDVDtBQUNFQyxxQkFBYSxPQURmO0FBRUVDLG9CQUFZLFFBRmQ7QUFHRUMscUJBQWEsSUFIZjtBQUlFQyxtQkFBVyxNQUpiO0FBS0VDLHNCQUFjO0FBTGhCLE9BRFMsRUFRVDtBQUNFSixxQkFBYSxPQURmO0FBRUVDLG9CQUFZLFFBRmQ7QUFHRUMscUJBQWEsSUFIZjtBQUlFQyxtQkFBVyxNQUpiO0FBS0VD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WkMsK0JBQWUsRUF2Qkg7QUF3QlpDLCtCQUFlLEVBeEJIO0FBeUJaQyxzQ0FBc0IsRUF6QlY7QUEwQlpDLHlCQUFTLEVBMUJHO0FBMkJaQywrQkFBZSxFQTNCSDtBQTRCWkMsNEJBQVksRUE1QkE7QUE2QlpDLDRCQUFZLEVBN0JBO0FBOEJaQyxtQ0FBbUIsRUE5QlA7QUErQlpDLDZCQUFhLEVBL0JEO0FBZ0NaQywwQkFBVTtBQWhDRSxlQUFkO0FBa0NBaEYsaUJBQUdjLFVBQUgsQ0FBYyxFQUFDQyxLQUFLLGdDQUFnQ2dDLEtBQUtDLFNBQUwsQ0FBZUUsT0FBZixDQUFoQyxHQUEwRCxXQUExRCxHQUF3RUgsS0FBS0MsU0FBTCxDQUFlOUIsS0FBS3ZDLFNBQUwsQ0FBZXVDLEtBQUtoQyxZQUFwQixDQUFmLENBQTlFLEVBQWQ7QUFDRCxhQXBDRCxFQW9DRyxJQXBDSDtBQXNDRDtBQUNGLFNBeEVRO0FBeUVUb0QsY0FBTSxjQUFDQyxHQUFELEVBQVM7QUFDYnZDLGFBQUc4QyxTQUFIO0FBQ0E5QyxhQUFHQyxTQUFILENBQWE7QUFDWEUsa0JBQU0sTUFESztBQUVYRCxtQkFBTyxjQUZJO0FBR1hFLHNCQUFVO0FBSEMsV0FBYjtBQUtBb0Msa0JBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNEO0FBakZRLE9BQVg7QUFtRkQ7OzttQ0FFZWpELEMsRUFBRyxDQUVuQjs7Ozs7Ozs7Ozt1QkFHUVUsR0FBR2lGLEtBQUgsRTs7O0FBQ04scUJBQUsxRyxRQUFMLEdBQWdCLEtBQUsyRyxPQUFMLENBQWFDLFVBQWIsQ0FBd0I1RyxRQUF4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQS9QOEI2RyxlQUFLQyxJOztrQkFBbEJsSCxJIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WPkeelqOmqjOivgSdcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICB1c2VySW5mbzoge1xyXG4gICAgICAgIG5pY2tOYW1lOiAn5Yqg6L295LitLi4uJyxcclxuICAgICAgfSxcclxuICAgICAgdGltZTogMCxcclxuICAgICAgdGltZXI6IG51bGwsXHJcbiAgICAgIGNvbXBhbmllczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbXBhbnlOYW1lOiAn5pyJ5pa55pWZ6IKyMCcsXHJcbiAgICAgICAgICBwZXJzb25OYW1lOiAnZW1iYXJrJyxcclxuICAgICAgICAgIGlzVGF4UGVyc29uOiB0cnVlLFxyXG4gICAgICAgICAgcGVyc29uTnVtOiAnMTIxMycsXHJcbiAgICAgICAgICBwZXJzb25UZWxOdW06ICcxMjM0NTY3ODkxMCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbXBhbnlOYW1lOiAn5pyJ5pa55pWZ6IKyMScsXHJcbiAgICAgICAgICBwZXJzb25OYW1lOiAnZW1iYXJrJyxcclxuICAgICAgICAgIGlzVGF4UGVyc29uOiB0cnVlLFxyXG4gICAgICAgICAgcGVyc29uTnVtOiAnMTIxMycsXHJcbiAgICAgICAgICBwZXJzb25UZWxOdW06ICcxMjM0NTY3ODkxMCdcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBpc1Nob3c6IGZhbHNlLFxyXG4gICAgICBjdXJyZW50SW5kZXg6IDAsXHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZWQgPSB7XHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuXHJcbiAgICAgIC8vIOWIh+aNouWFrOWPuFxyXG4gICAgICB0b2dnbGVTZWxlY3RDb21wYW55IChlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgfSxcclxuICAgICAgLy8g5L+d5a2Y5YWs5Y+45L+h5oGvXHJcbiAgICAgIGhhbmRsZVNhdmVDb21wYW55KCkge1xyXG4gICAgICAgIGxldCBmbGFnID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuY29tcGFuaWVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHZhbHVlIG9mIE9iamVjdC52YWx1ZXMoaXRlbSkpIHtcclxuICAgICAgICAgICAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICBmbGFnID0gZmFsc2VcclxuICAgICAgICAgICAgICByZXR1cm4gd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5L+d5a2Y5L+h5oGv5aSx6LSl77yM6K+356Gu6K6k5bey57uP5a6M5pW05aGr5YaZ5YWs5Y+45L+h5oGvJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAoZmxhZykge1xyXG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgdGl0bGU6ICfnoa7orqTmiJDlip8nLFxyXG4gICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgdGhpcy5pc1Nob3cgPSB0cnVlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuaXNTaG93ID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOWIoOmZpOWFrOWPuOS/oeaBr1xyXG4gICAgICBoYW5kbGVEZWxldGVDb21wYW55KGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5jb21wYW5pZXMuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICB9LFxyXG4gICAgICAvLyDmt7vliqDlhazlj7jkv6Hmga9cclxuICAgICAgaGFuZGxlQWRkQ29tcGFueSgpIHtcclxuICAgICAgICB0aGlzLmlzU2hvdyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5jb21wYW5pZXMucHVzaCh7XHJcbiAgICAgICAgICBjb21wYW55TmFtZTogJycsXHJcbiAgICAgICAgICBwZXJzb25OYW1lOiAnJyxcclxuICAgICAgICAgIGlzVGF4UGVyc29uOiB0cnVlLFxyXG4gICAgICAgICAgcGVyc29uTnVtOiAnJyxcclxuICAgICAgICAgIHBlcnNvblRlbE51bTogJydcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICAvLyDmmK/lkKbkuLrkuIDoiKznurPnqI7kurrotYTmoLxcclxuICAgICAgdGF4UGVyc29uQ2hhbmdlKGluZGV4LCBlKSB7XHJcbiAgICAgICAgdGhpcy5jb21wYW5pZXNbaW5kZXhdLmlzVGF4UGVyc29uID0gZS5kZXRhaWwudmFsdWUgPT09ICfmmK8nID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOWkhOeQhui+k+WFpeWGheWuuVxyXG4gICAgICBoYW5kbGVJbnB1dCAoaW5kZXgsIG5hbWUsIGUpIHtcclxuICAgICAgICB0aGlzLmlzU2hvdyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5jb21wYW5pZXNbaW5kZXhdW25hbWVdID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSxcclxuICAgICAgLy8g6Lez6L2s5Yiw5p+l6K+i6aG16Z2iXHJcbiAgICAgIGhhbmRsZVF1ZXJ5ICgpIHtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogJy4uL3F1ZXJ5L3F1ZXJ5J1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOiwg+eUqOaLjeeFp+aIluiAhemAieWPlueFp+eJh+aOpeWPo1xyXG4gICAgICBnZXRQaG90byAoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMudGltZSArK1xyXG4gICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzXHJcbiAgICAgICAgd3guY2hvb3NlSW1hZ2Uoe1xyXG4gICAgICAgICAgY291bnQ6IDEsXHJcbiAgICAgICAgICBzaXplVHlwZTogJ29yaWdpbmFsJyxcclxuICAgICAgICAgIHNvdXJjZVR5cGU6IFsnY2FtZXJhJywgJ2FsYnVtJ10sXHJcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgICAgd3guZ2V0RmlsZVN5c3RlbU1hbmFnZXIoKS5yZWFkRmlsZSh7XHJcbiAgICAgICAgICAgICAgZmlsZVBhdGg6IHJlcy50ZW1wRmlsZVBhdGhzWzBdLCAvL+mAieaLqeWbvueJh+i/lOWbnueahOebuOWvuei3r+W+hFxyXG4gICAgICAgICAgICAgIGVuY29kaW5nOiAnYmFzZTY0JywgLy/nvJbnoIHmoLzlvI9cclxuICAgICAgICAgICAgICBzdWNjZXNzOiByZXMyID0+IHsgLy/miJDlip/nmoTlm57osINcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfmiJDlip/ojrflj5blm77niYcnKTtcclxuICAgICAgICAgICAgICAgIC8vIHd4LmhpZGVUb2FzdCgpXHJcbiAgICAgICAgICAgICAgICAvLyB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgLy8gICB0aXRsZTogJ+aIkOWKn+iOt+WPluWbvueJhy4uLicgKyB0aGF0LnRpbWUsXHJcbiAgICAgICAgICAgICAgICAvLyAgIGljb246ICdsb2FkaW5nJyxcclxuICAgICAgICAgICAgICAgIC8vICAgbWFzazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIC8vICAgZHVyYXRpb246IDYwMDAwXHJcbiAgICAgICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnICsgcmVzLmRhdGEpXHJcbiAgICAgICAgICAgICAgICB0aGF0LmhhbmRsZUlkZW50aWZ5SW52b2ljZShyZXMyLmRhdGEpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcblxyXG4gICAgLy8g6I635Y+WYWNjZXNzX3Rva2VuXHJcbiAgICBoYW5kbGVJZGVudGlmeUludm9pY2UgKGJhc2U2NCkge1xyXG4gICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgIHRpdGxlOiAn5q2j5Zyo6K+G5YirLi4uJyxcclxuICAgICAgICBpY29uOiAnbG9hZGluZycsXHJcbiAgICAgICAgbWFzazogdHJ1ZSxcclxuICAgICAgICBkdXJhdGlvbjogNjAwMDBcclxuICAgICAgfSlcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzXHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vYWlwLmJhaWR1YmNlLmNvbS9vYXV0aC8yLjAvdG9rZW4/Z3JhbnRfdHlwZT1jbGllbnRfY3JlZGVudGlhbHMmY2xpZW50X2lkPVVWVk9qYkd0MVhwU1I5Y1c2R0NTaDc3dCZjbGllbnRfc2VjcmV0PW13SENtaTgxOWtQY1ZsT243cjhYQWJuZXJ1ZGNPR3dCJicsXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICAvLyB3eC5oaWRlVG9hc3QoKVxyXG4gICAgICAgICAgLy8gd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgIC8vICAgdGl0bGU6ICdhY2Nlc3NfdG9rZW4uLi4nICsgdGhhdC50aW1lLFxyXG4gICAgICAgICAgLy8gICBpY29uOiAnbG9hZGluZycsXHJcbiAgICAgICAgICAvLyAgIG1hc2s6IHRydWUsXHJcbiAgICAgICAgICAvLyAgIGR1cmF0aW9uOiA2MDAwMFxyXG4gICAgICAgICAgLy8gfSlcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfmiJDlip/ojrflj5ZhY2Nlc3NfdG9rZW4nKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKDEsIHRoYXQudGltZSk7XHJcbiAgICAgICAgICB0aGF0LmdldEludm9pY2VEYXRhKHJlcy5kYXRhLmFjY2Vzc190b2tlbiwgYmFzZTY0KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbCAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyDmoLnmja5hY2Nlc3NfdG9rZW4g6LCD55So55m+5bqm5LqR5Y+R56Wo6K+G5Yir5o6l5Y+jXHJcbiAgICBnZXRJbnZvaWNlRGF0YSAoYWNjZXNzX3Rva2VuLCBiYXNlNjQpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coMiwgdGhpcy50aW1lKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ+WPkemAgeivhuWIq+WPkeelqOeahOivt+axgicpO1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXNcclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9haXAuYmFpZHViY2UuY29tL3Jlc3QvMi4wL29jci92MS92YXRfaW52b2ljZT9hY2Nlc3NfdG9rZW49JyArIGFjY2Vzc190b2tlbixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBpbWFnZTogYmFzZTY0LFxyXG4gICAgICAgICAgZGV0ZWN0X2RpcmVjdGlvbjogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygzLCB0aGF0LnRpbWUpO1xyXG4gICAgICAgICAgLy8gd3guaGlkZVRvYXN0KClcclxuICAgICAgICAgIC8vIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAvLyAgIHRpdGxlOiAn5a6M5q+VLi4uJyArIHRoYXQudGltZSxcclxuICAgICAgICAgIC8vICAgaWNvbjogJ2xvYWRpbmcnLFxyXG4gICAgICAgICAgLy8gICBtYXNrOiB0cnVlLFxyXG4gICAgICAgICAgLy8gICBkdXJhdGlvbjogNjAwMDBcclxuICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAvLyBjbGVhckludGVydmFsKHRoYXQudGltZXIpXHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyg0LCB0aGF0LnRpbWUpO1xyXG4gICAgICAgICAgaWYgKHJlcy5kYXRhLndvcmRzX3Jlc3VsdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS53b3Jkc19yZXN1bHQpO1xyXG4gICAgICAgICAgICB3eC5oaWRlVG9hc3QoKVxyXG4gICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHt1cmw6ICcuLi9tZXNzYWdlL21lc3NhZ2U/bWVzc2FnZT0nICsgSlNPTi5zdHJpbmdpZnkocmVzLmRhdGEud29yZHNfcmVzdWx0KSArICcmY29tcGFueT0nICsgSlNPTi5zdHJpbmdpZnkodGhhdC5jb21wYW5pZXNbdGhhdC5jdXJyZW50SW5kZXhdKX0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgd3guaGlkZVRvYXN0KClcclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICfor4bliKvlpLHotKXvvIzor7foh6rooYzlvZXlhaXkv6Hmga/miJbogIXph43mlrDkuIrkvKDnhafniYcnLFxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IHtcclxuICAgICAgICAgICAgICAgIEFtb3VudEluRmlndWVyczogXCJcIixcclxuICAgICAgICAgICAgICAgIEFtb3VudEluV29yZHM6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBDaGVja0NvZGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBDaGVja2VyOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgQ29tbW9kaXR5QW1vdW50OiBbXSxcclxuICAgICAgICAgICAgICAgIENvbW1vZGl0eU5hbWU6IFtcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBDb21tb2RpdHlOdW06IFtdLFxyXG4gICAgICAgICAgICAgICAgQ29tbW9kaXR5UHJpY2U6IFtdLFxyXG4gICAgICAgICAgICAgICAgQ29tbW9kaXR5VGF4OiBbXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgQ29tbW9kaXR5VGF4UmF0ZTogW10sXHJcbiAgICAgICAgICAgICAgICBDb21tb2RpdHlUeXBlOiBbXSxcclxuICAgICAgICAgICAgICAgIENvbW1vZGl0eVVuaXQ6IFtdLFxyXG4gICAgICAgICAgICAgICAgSW52b2ljZUNvZGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBJbnZvaWNlRGF0ZTogXCJcIixcclxuICAgICAgICAgICAgICAgIEludm9pY2VOdW06IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBJbnZvaWNlVHlwZTogXCLlhbbku5blj5HnpahcIixcclxuICAgICAgICAgICAgICAgIE5vdGVEcmF3ZXI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBQYXNzd29yZDogXCJcIixcclxuICAgICAgICAgICAgICAgIFBheWVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgUHVyY2hhc2VyQWRkcmVzczogXCJcIixcclxuICAgICAgICAgICAgICAgIFB1cmNoYXNlckJhbms6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBQdXJjaGFzZXJOYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgUHVyY2hhc2VyUmVnaXN0ZXJOdW06IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBSZW1hcmtzOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgU2VsbGVyQWRkcmVzczogXCJcIixcclxuICAgICAgICAgICAgICAgIFNlbGxlckJhbms6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBTZWxsZXJOYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgU2VsbGVyUmVnaXN0ZXJOdW06IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBUb3RhbEFtb3VudDogXCJcIixcclxuICAgICAgICAgICAgICAgIFRvdGFsVGF4OiBcIlwiLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHt1cmw6ICcuLi9tZXNzYWdlL21lc3NhZ2U/bWVzc2FnZT0nICsgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkgKyAnJmNvbXBhbnk9JyArIEpTT04uc3RyaW5naWZ5KHRoYXQuY29tcGFuaWVzW3RoYXQuY3VycmVudEluZGV4XSl9KVxyXG4gICAgICAgICAgICB9LCAyMDAwKVxyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6IChlcnIpID0+IHtcclxuICAgICAgICAgIHd4LmhpZGVUb2FzdCgpXHJcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn6K+G5Yir5aSx6LSl77yM6K+36YeN5paw5LiK5Lyg54Wn54mHJyxcclxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldFBob25lTnVtYmVyIChlKSB7XHJcblxyXG4gIFx0fVxyXG5cclxuICAgIGFzeW5jIG9uTG9hZCgpIHtcclxuICAgICAgYXdhaXQgd3gubG9naW4oKVxyXG4gICAgICB0aGlzLnVzZXJJbmZvID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlckluZm9cclxuICAgIH1cclxuICB9XHJcbiJdfQ==