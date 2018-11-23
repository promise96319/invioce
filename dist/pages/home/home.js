'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../../npm/wepy-redux/lib/index.js');

var _constant = require('./../../constant/constant.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = (_dec = (0, _wepyRedux.connect)({
  company: function company(state) {
    return state.company;
  },
  userInfo: function userInfo(state) {
    return state.userInfo;
  }
}), _dec(_class = function (_wepy$page) {
  _inherits(Home, _wepy$page);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '',
      usingComponents: {
        "van-button": "/components/van/button/index",
        "van-swipe-cell": "/components/van/swipe-cell/index",
        "van-cell": "/components/van/cell/index",
        "van-cell-group": "/components/van/cell-group/index",
        "van-popup": "/components/van/popup/index"
      }
    }, _this.data = {
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      show: false,
      currentIndex: -1
    }, _this.methods = {
      // 未授权时主动授权再执行增加公司操作
      bindGetUserInfo: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.getTotalUserInfo(e.detail.userInfo);

                case 2:
                  this.methods.handleAddCompany();

                case 3:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function bindGetUserInfo(_x) {
          return _ref2.apply(this, arguments);
        }

        return bindGetUserInfo;
      }(),

      // 编辑公司信息
      handleEditCompany: function handleEditCompany() {
        wx.navigateTo({
          url: '../company/company?type=update&company=' + JSON.stringify(this.company[this.currentIndex])
        });

        this.show = false;
      },

      // 删除公司信息
      handleDeleteCompany: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var _ref4, confirm, _ref5, data;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return _wepy2.default.showModal({
                    content: '是否删除' + _wepy2.default.$store.getState().company[this.currentIndex].name + '及其绑定的发票信息？'
                  });

                case 2:
                  _ref4 = _context2.sent;
                  confirm = _ref4.confirm;

                  if (!confirm) {
                    _context2.next = 14;
                    break;
                  }

                  _context2.next = 7;
                  return _wepy2.default.request({
                    url: _constant.URL.deleteCompany,
                    method: 'POST',
                    data: {
                      no: _wepy2.default.$store.getState().userInfo.no,
                      id: _wepy2.default.$store.getState().company[this.currentIndex].id
                    }
                  });

                case 7:
                  _ref5 = _context2.sent;
                  data = _ref5.data;


                  _wepy2.default.$store.dispatch({
                    type: 'UPDATECOMPANY',
                    payload: data
                  });

                  this.show = false;
                  this.currentIndex = -1;
                  this.$apply();

                  wx.showToast({
                    title: '删除成功'
                  });

                case 14:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function handleDeleteCompany() {
          return _ref3.apply(this, arguments);
        }

        return handleDeleteCompany;
      }(),

      // 增加公司
      handleAddCompany: function handleAddCompany() {
        wx.navigateTo({
          url: '../company/company?type=add&company='
        });
      },

      // 显示隐藏发票识别的入口
      showPopup: function showPopup(index) {
        this.show = true;
        this.currentIndex = index;
      },
      hidePopup: function hidePopup() {
        this.show = false;
      },

      // 调用拍照或者选取照片接口 ======发票识别
      getPhoto: function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(type) {
          var _self, imageData;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  this.show = false;
                  _self = this;
                  _context3.next = 4;
                  return _wepy2.default.chooseImage({
                    count: 1,
                    sizeType: 'original',
                    sourceType: [type]
                  });

                case 4:
                  imageData = _context3.sent;


                  wx.showToast({
                    title: '正在识别...',
                    icon: 'loading',
                    mask: true,
                    duration: 60000
                  });

                  wx.getFileSystemManager().readFile({
                    filePath: imageData.tempFilePaths[0], //选择图片返回的相对路径
                    encoding: 'base64', //编码格式
                    success: function success(res) {
                      _self.handleGetAccessToken(res.data);
                    }
                  });

                case 7:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function getPhoto(_x2) {
          return _ref6.apply(this, arguments);
        }

        return getPhoto;
      }(),

      // 自行录入
      writeBySelf: function writeBySelf() {
        this.show = false;
        wx.navigateTo({
          url: '../invoice/invoice?message=&company=' + JSON.stringify(this.company[this.currentIndex])
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'handleGetAccessToken',


    // 获取access_token
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(base64) {
        var _ref8, access_token;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _wepy2.default.request({
                  url: 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=UVVOjbGt1XpSR9cW6GCSh77t&client_secret=mwHCmi819kPcVlOn7r8XAbnerudcOGwB&',
                  method: 'POST'
                });

              case 2:
                _ref8 = _context4.sent;
                access_token = _ref8.data.access_token;

                this.getInvoiceData(access_token, base64);

              case 5:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function handleGetAccessToken(_x3) {
        return _ref7.apply(this, arguments);
      }

      return handleGetAccessToken;
    }()

    // 根据access_token 调用百度云发票识别接口

  }, {
    key: 'getInvoiceData',
    value: function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(access_token, base64) {
        var _self, _ref10, words_result, _ref11, statusCode;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _self = this;
                _context5.next = 3;
                return _wepy2.default.request({
                  url: 'https://aip.baidubce.com/rest/2.0/ocr/v1/vat_invoice?access_token=' + access_token,
                  data: {
                    image: base64,
                    detect_direction: true
                  },
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  method: 'POST'
                });

              case 3:
                _ref10 = _context5.sent;
                words_result = _ref10.data.words_result;

                if (!words_result) {
                  _context5.next = 18;
                  break;
                }

                wx.hideToast();

                _context5.next = 9;
                return _wepy2.default.request({
                  url: _constant.URL.checkInvoice,
                  method: 'POST',
                  data: {
                    "no": _wepy2.default.$store.getState().userInfo.no,
                    "companyId": _self.company[_self.currentIndex].id,
                    "invoiceNum": words_result.InvoiceNum
                  }
                });

              case 9:
                _ref11 = _context5.sent;
                statusCode = _ref11.statusCode;

                if (!(statusCode === 403)) {
                  _context5.next = 15;
                  break;
                }

                return _context5.abrupt('return', wx.showModal({
                  title: '该发票已经被识别过!',
                  content: '\u7ED1\u5B9A\u7684\u516C\u53F8\u4E3A\uFF1A' + _self.company[_self.currentIndex].name,
                  confirmColor: '#55ACEE',
                  confirmText: '知道了',
                  showCancel: false,
                  success: function success(res) {}
                }));

              case 15:
                if (statusCode === 200) {
                  console.log(words_result);
                  wx.navigateTo({
                    url: '../invoice/invoice?message=' + JSON.stringify(words_result) + '&company=' + JSON.stringify(_self.company[_self.currentIndex])
                  });
                }

              case 16:
                _context5.next = 20;
                break;

              case 18:
                wx.hideToast();
                wx.showModal({
                  title: '识别失败',
                  content: '未能识别出发票信息',
                  confirmText: '自行录入',
                  cancelText: '重选照片',
                  success: function success(res) {
                    if (res.confirm) {
                      this.show = false;
                      wx.navigateTo({
                        url: '../invoice/invoice?message=&company=' + JSON.stringify(this.company[this.currentIndex])
                      });
                    }
                  }
                });

              case 20:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getInvoiceData(_x4, _x5) {
        return _ref9.apply(this, arguments);
      }

      return getInvoiceData;
    }()

    // 根据用户基本信息获取唯一id和公司信息

  }, {
    key: 'getTotalUserInfo',
    value: function () {
      var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(userInfo) {
        var _ref13, code, _ref14, openid, _ref15, _ref15$data, no, company;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _wepy2.default.login();

              case 2:
                _ref13 = _context6.sent;
                code = _ref13.code;

                if (code) {
                  _context6.next = 6;
                  break;
                }

                return _context6.abrupt('return');

              case 6:
                _context6.next = 8;
                return _wepy2.default.request(_constant.URL.getOpenId + '?code=' + code);

              case 8:
                _ref14 = _context6.sent;
                openid = _ref14.data.openid;


                userInfo.openid = openid;
                // TODO: 手机号码的获取
                userInfo.phone = '';
                _context6.next = 14;
                return _wepy2.default.request({
                  url: _constant.URL.saveUserInfo,
                  data: userInfo,
                  method: 'POST'
                });

              case 14:
                _ref15 = _context6.sent;
                _ref15$data = _ref15.data;
                no = _ref15$data.no;
                company = _ref15$data.company;

                // console.log(no, company)
                userInfo.no = no;
                _wepy2.default.$store.dispatch({
                  type: 'UPDATEUSERINFO',
                  payload: userInfo
                });
                _wepy2.default.$store.dispatch({
                  type: 'UPDATECOMPANY',
                  payload: company
                });

                wx.hideToast();

              case 22:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getTotalUserInfo(_x6) {
        return _ref12.apply(this, arguments);
      }

      return getTotalUserInfo;
    }()
  }, {
    key: 'onLoad',
    value: function () {
      var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var res, _ref17, userInfo;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!_wepy2.default.$store.getState().userInfo) {
                  _context7.next = 2;
                  break;
                }

                return _context7.abrupt('return');

              case 2:
                _context7.next = 4;
                return _wepy2.default.getSetting();

              case 4:
                res = _context7.sent;

                if (!res.authSetting['scope.userInfo']) {
                  _context7.next = 12;
                  break;
                }

                wx.showToast({
                  title: '正在获取公司信息...',
                  icon: 'loading'
                });

                _context7.next = 9;
                return _wepy2.default.getUserInfo();

              case 9:
                _ref17 = _context7.sent;
                userInfo = _ref17.userInfo;


                this.getTotalUserInfo(userInfo);

              case 12:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function onLoad() {
        return _ref16.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Home;
}(_wepy2.default.page)) || _class);

Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/home/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbXBhbnkiLCJzdGF0ZSIsInVzZXJJbmZvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJjYW5JVXNlIiwid3giLCJzaG93IiwiY3VycmVudEluZGV4IiwibWV0aG9kcyIsImJpbmRHZXRVc2VySW5mbyIsImUiLCJnZXRUb3RhbFVzZXJJbmZvIiwiZGV0YWlsIiwiaGFuZGxlQWRkQ29tcGFueSIsImhhbmRsZUVkaXRDb21wYW55IiwibmF2aWdhdGVUbyIsInVybCIsIkpTT04iLCJzdHJpbmdpZnkiLCJoYW5kbGVEZWxldGVDb21wYW55Iiwid2VweSIsInNob3dNb2RhbCIsImNvbnRlbnQiLCIkc3RvcmUiLCJnZXRTdGF0ZSIsIm5hbWUiLCJjb25maXJtIiwicmVxdWVzdCIsIlVSTCIsImRlbGV0ZUNvbXBhbnkiLCJtZXRob2QiLCJubyIsImlkIiwiZGlzcGF0Y2giLCJ0eXBlIiwicGF5bG9hZCIsIiRhcHBseSIsInNob3dUb2FzdCIsInRpdGxlIiwic2hvd1BvcHVwIiwiaW5kZXgiLCJoaWRlUG9wdXAiLCJnZXRQaG90byIsIl9zZWxmIiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInNpemVUeXBlIiwic291cmNlVHlwZSIsImltYWdlRGF0YSIsImljb24iLCJtYXNrIiwiZHVyYXRpb24iLCJnZXRGaWxlU3lzdGVtTWFuYWdlciIsInJlYWRGaWxlIiwiZmlsZVBhdGgiLCJ0ZW1wRmlsZVBhdGhzIiwiZW5jb2RpbmciLCJzdWNjZXNzIiwicmVzIiwiaGFuZGxlR2V0QWNjZXNzVG9rZW4iLCJ3cml0ZUJ5U2VsZiIsImJhc2U2NCIsImFjY2Vzc190b2tlbiIsImdldEludm9pY2VEYXRhIiwiaW1hZ2UiLCJkZXRlY3RfZGlyZWN0aW9uIiwiaGVhZGVyIiwid29yZHNfcmVzdWx0IiwiaGlkZVRvYXN0IiwiY2hlY2tJbnZvaWNlIiwiSW52b2ljZU51bSIsInN0YXR1c0NvZGUiLCJjb25maXJtQ29sb3IiLCJjb25maXJtVGV4dCIsInNob3dDYW5jZWwiLCJjb25zb2xlIiwibG9nIiwiY2FuY2VsVGV4dCIsImxvZ2luIiwiY29kZSIsImdldE9wZW5JZCIsIm9wZW5pZCIsInBob25lIiwic2F2ZVVzZXJJbmZvIiwiZ2V0U2V0dGluZyIsImF1dGhTZXR0aW5nIiwiZ2V0VXNlckluZm8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBR0E7Ozs7Ozs7Ozs7OztJQWVxQkEsSSxXQVRwQix3QkFBUTtBQUNQQyxTQURPLG1CQUNDQyxLQURELEVBQ1E7QUFDYixXQUFPQSxNQUFNRCxPQUFiO0FBQ0QsR0FITTtBQUlQRSxVQUpPLG9CQUlFRCxLQUpGLEVBSVM7QUFDZCxXQUFPQSxNQUFNQyxRQUFiO0FBQ0Q7QUFOTSxDQUFSLEM7Ozs7Ozs7Ozs7Ozs7O2tMQVVDQyxNLEdBQVM7QUFDUEMsOEJBQXdCLEVBRGpCO0FBRVBDLHVCQUFpQjtBQUNmLHNCQUFjLDhCQURDO0FBRWYsMEJBQWtCLGtDQUZIO0FBR2Ysb0JBQVksNEJBSEc7QUFJZiwwQkFBa0Isa0NBSkg7QUFLZixxQkFBYTtBQUxFO0FBRlYsSyxRQVdUQyxJLEdBQU87QUFDTEMsZUFBU0MsR0FBR0QsT0FBSCxDQUFXLDhCQUFYLENBREo7QUFFTEUsWUFBTSxLQUZEO0FBR0xDLG9CQUFjLENBQUM7QUFIVixLLFFBTVBDLE8sR0FBVTtBQUNSO0FBQ01DLHFCQUZFO0FBQUEsNkZBRWNDLENBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBR0EsS0FBS0MsZ0JBQUwsQ0FBc0JELEVBQUVFLE1BQUYsQ0FBU2IsUUFBL0IsQ0FIQTs7QUFBQTtBQUlOLHVCQUFLUyxPQUFMLENBQWFLLGdCQUFiOztBQUpNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQU1SO0FBQ0FDLHVCQVBRLCtCQU9hO0FBQ25CVCxXQUFH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QUF0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXJPNEJxQixlQUFLbUUsSTtrQkFBbEIzRixJIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQge1xuICBjb25uZWN0XG59IGZyb20gJ3dlcHktcmVkdXgnXG5pbXBvcnQge1xuICBBUFBJRCxcbiAgU0VDUkVULFxuICBVUkxcbn0gZnJvbSAnLi4vLi4vY29uc3RhbnQvY29uc3RhbnQnXG5cbkBjb25uZWN0KHtcbiAgY29tcGFueShzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5jb21wYW55XG4gIH0sXG4gIHVzZXJJbmZvKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLnVzZXJJbmZvXG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJycsXG4gICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICBcInZhbi1idXR0b25cIjogXCIvY29tcG9uZW50cy92YW4vYnV0dG9uL2luZGV4XCIsXG4gICAgICBcInZhbi1zd2lwZS1jZWxsXCI6IFwiL2NvbXBvbmVudHMvdmFuL3N3aXBlLWNlbGwvaW5kZXhcIixcbiAgICAgIFwidmFuLWNlbGxcIjogXCIvY29tcG9uZW50cy92YW4vY2VsbC9pbmRleFwiLFxuICAgICAgXCJ2YW4tY2VsbC1ncm91cFwiOiBcIi9jb21wb25lbnRzL3Zhbi9jZWxsLWdyb3VwL2luZGV4XCIsXG4gICAgICBcInZhbi1wb3B1cFwiOiBcIi9jb21wb25lbnRzL3Zhbi9wb3B1cC9pbmRleFwiLFxuICAgIH0sXG4gIH1cblxuICBkYXRhID0ge1xuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcbiAgICBzaG93OiBmYWxzZSxcbiAgICBjdXJyZW50SW5kZXg6IC0xLFxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICAvLyDmnKrmjojmnYPml7bkuLvliqjmjojmnYPlho3miafooYzlop7liqDlhazlj7jmk43kvZxcbiAgICBhc3luYyBiaW5kR2V0VXNlckluZm8oZSkge1xuICAgICAgYXdhaXQgdGhpcy5nZXRUb3RhbFVzZXJJbmZvKGUuZGV0YWlsLnVzZXJJbmZvKVxuICAgICAgdGhpcy5tZXRob2RzLmhhbmRsZUFkZENvbXBhbnkoKVxuICAgIH0sXG4gICAgLy8g57yW6L6R5YWs5Y+45L+h5oGvXG4gICAgaGFuZGxlRWRpdENvbXBhbnkgKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4uL2NvbXBhbnkvY29tcGFueT90eXBlPXVwZGF0ZSZjb21wYW55PScgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmNvbXBhbnlbdGhpcy5jdXJyZW50SW5kZXhdKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zaG93ID0gZmFsc2VcbiAgICB9LFxuICAgIC8vIOWIoOmZpOWFrOWPuOS/oeaBr1xuICAgIGFzeW5jIGhhbmRsZURlbGV0ZUNvbXBhbnkoKSB7XG4gICAgICBjb25zdCB7IGNvbmZpcm0gfSA9IGF3YWl0IHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgY29udGVudDogJ+aYr+WQpuWIoOmZpCcgKyB3ZXB5LiRzdG9yZS5nZXRTdGF0ZSgpLmNvbXBhbnlbdGhpcy5jdXJyZW50SW5kZXhdLm5hbWUgKyAn5Y+K5YW257uR5a6a55qE5Y+R56Wo5L+h5oGv77yfJyxcbiAgICAgIH0pXG5cbiAgICAgIGlmIChjb25maXJtKSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6IFVSTC5kZWxldGVDb21wYW55LFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIG5vOiB3ZXB5LiRzdG9yZS5nZXRTdGF0ZSgpLnVzZXJJbmZvLm5vLFxuICAgICAgICAgICAgaWQ6IHdlcHkuJHN0b3JlLmdldFN0YXRlKCkuY29tcGFueVt0aGlzLmN1cnJlbnRJbmRleF0uaWRcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuXG4gICAgICAgIHdlcHkuJHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAnVVBEQVRFQ09NUEFOWScsXG4gICAgICAgICAgcGF5bG9hZDogZGF0YVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuc2hvdyA9IGZhbHNlXG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gLTFcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfliKDpmaTmiJDlip8nXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICAvLyDlop7liqDlhazlj7hcbiAgICBoYW5kbGVBZGRDb21wYW55KCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4uL2NvbXBhbnkvY29tcGFueT90eXBlPWFkZCZjb21wYW55PSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICAvLyDmmL7npLrpmpDol4/lj5Hnpajor4bliKvnmoTlhaXlj6NcbiAgICBzaG93UG9wdXAoaW5kZXgpIHtcbiAgICAgIHRoaXMuc2hvdyA9IHRydWVcbiAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gaW5kZXhcbiAgICB9LFxuICAgIGhpZGVQb3B1cCgpIHtcbiAgICAgIHRoaXMuc2hvdyA9IGZhbHNlXG4gICAgfSxcbiAgICAvLyDosIPnlKjmi43nhafmiJbogIXpgInlj5bnhafniYfmjqXlj6MgPT09PT095Y+R56Wo6K+G5YirXG4gICAgYXN5bmMgZ2V0UGhvdG8odHlwZSkge1xuICAgICAgdGhpcy5zaG93ID0gZmFsc2VcbiAgICAgIGNvbnN0IF9zZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW1hZ2VEYXRhID0gYXdhaXQgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgIGNvdW50OiAxLFxuICAgICAgICBzaXplVHlwZTogJ29yaWdpbmFsJyxcbiAgICAgICAgc291cmNlVHlwZTogW3R5cGVdXG4gICAgICB9KVxuXG4gICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICB0aXRsZTogJ+ato+WcqOivhuWIqy4uLicsXG4gICAgICAgIGljb246ICdsb2FkaW5nJyxcbiAgICAgICAgbWFzazogdHJ1ZSxcbiAgICAgICAgZHVyYXRpb246IDYwMDAwXG4gICAgICB9KVxuXG4gICAgICB3eC5nZXRGaWxlU3lzdGVtTWFuYWdlcigpLnJlYWRGaWxlKHtcbiAgICAgICAgZmlsZVBhdGg6IGltYWdlRGF0YS50ZW1wRmlsZVBhdGhzWzBdLCAvL+mAieaLqeWbvueJh+i/lOWbnueahOebuOWvuei3r+W+hFxuICAgICAgICBlbmNvZGluZzogJ2Jhc2U2NCcsIC8v57yW56CB5qC85byPXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgX3NlbGYuaGFuZGxlR2V0QWNjZXNzVG9rZW4ocmVzLmRhdGEpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICAvLyDoh6rooYzlvZXlhaVcbiAgICB3cml0ZUJ5U2VsZigpIHtcbiAgICAgIHRoaXMuc2hvdyA9IGZhbHNlXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vaW52b2ljZS9pbnZvaWNlP21lc3NhZ2U9JmNvbXBhbnk9JyArIEpTT04uc3RyaW5naWZ5KHRoaXMuY29tcGFueVt0aGlzLmN1cnJlbnRJbmRleF0pXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIOiOt+WPlmFjY2Vzc190b2tlblxuICBhc3luYyBoYW5kbGVHZXRBY2Nlc3NUb2tlbihiYXNlNjQpIHtcbiAgICBjb25zdCB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGFjY2Vzc190b2tlblxuICAgICAgfVxuICAgIH0gPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cHM6Ly9haXAuYmFpZHViY2UuY29tL29hdXRoLzIuMC90b2tlbj9ncmFudF90eXBlPWNsaWVudF9jcmVkZW50aWFscyZjbGllbnRfaWQ9VVZWT2piR3QxWHBTUjljVzZHQ1NoNzd0JmNsaWVudF9zZWNyZXQ9bXdIQ21pODE5a1BjVmxPbjdyOFhBYm5lcnVkY09Hd0ImJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgfSlcbiAgICB0aGlzLmdldEludm9pY2VEYXRhKGFjY2Vzc190b2tlbiwgYmFzZTY0KVxuICB9XG5cbiAgLy8g5qC55o2uYWNjZXNzX3Rva2VuIOiwg+eUqOeZvuW6puS6keWPkeelqOivhuWIq+aOpeWPo1xuICBhc3luYyBnZXRJbnZvaWNlRGF0YShhY2Nlc3NfdG9rZW4sIGJhc2U2NCkge1xuICAgIGNvbnN0IF9zZWxmID0gdGhpc1xuICAgIGNvbnN0IHsgZGF0YTogeyB3b3Jkc19yZXN1bHQgfSB9ID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHBzOi8vYWlwLmJhaWR1YmNlLmNvbS9yZXN0LzIuMC9vY3IvdjEvdmF0X2ludm9pY2U/YWNjZXNzX3Rva2VuPScgKyBhY2Nlc3NfdG9rZW4sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGltYWdlOiBiYXNlNjQsXG4gICAgICAgIGRldGVjdF9kaXJlY3Rpb246IHRydWVcbiAgICAgIH0sXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICB9LFxuICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICB9KVxuXG4gICAgaWYgKHdvcmRzX3Jlc3VsdCkge1xuICAgICAgd3guaGlkZVRvYXN0KClcblxuICAgICAgY29uc3QgeyBzdGF0dXNDb2RlIH0gPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IFVSTC5jaGVja0ludm9pY2UsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgXCJub1wiOiB3ZXB5LiRzdG9yZS5nZXRTdGF0ZSgpLnVzZXJJbmZvLm5vLFxuICAgICAgICAgIFwiY29tcGFueUlkXCI6IF9zZWxmLmNvbXBhbnlbX3NlbGYuY3VycmVudEluZGV4XS5pZCxcbiAgICAgICAgICBcImludm9pY2VOdW1cIjogd29yZHNfcmVzdWx0Lkludm9pY2VOdW1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgaWYgKHN0YXR1c0NvZGUgPT09IDQwMykge1xuICAgICAgICByZXR1cm4gd3guc2hvd01vZGFsKHtcbiAgICAgICAgICB0aXRsZTogJ+ivpeWPkeelqOW3sue7j+iiq+ivhuWIq+i/hyEnLFxuICAgICAgICAgIGNvbnRlbnQ6IGDnu5HlrprnmoTlhazlj7jkuLrvvJoke19zZWxmLmNvbXBhbnlbX3NlbGYuY3VycmVudEluZGV4XS5uYW1lfWAsXG4gICAgICAgICAgY29uZmlybUNvbG9yOiAnIzU1QUNFRScsXG4gICAgICAgICAgY29uZmlybVRleHQ6ICfnn6XpgZPkuoYnLFxuICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmIChzdGF0dXNDb2RlID09PSAyMDApIHtcbiAgICAgIGNvbnNvbGUubG9nKHdvcmRzX3Jlc3VsdCk7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uL2ludm9pY2UvaW52b2ljZT9tZXNzYWdlPScgKyBKU09OLnN0cmluZ2lmeSh3b3Jkc19yZXN1bHQpICsgJyZjb21wYW55PScgKyBKU09OLnN0cmluZ2lmeShfc2VsZi5jb21wYW55W19zZWxmLmN1cnJlbnRJbmRleF0pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHd4LmhpZGVUb2FzdCgpXG4gICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICB0aXRsZTogJ+ivhuWIq+Wksei0pScsXG4gICAgICAgIGNvbnRlbnQ6ICfmnKrog73or4bliKvlh7rlj5Hnpajkv6Hmga8nLFxuICAgICAgICBjb25maXJtVGV4dDogJ+iHquihjOW9leWFpScsXG4gICAgICAgIGNhbmNlbFRleHQ6ICfph43pgInnhafniYcnLFxuICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgdGhpcy5zaG93ID0gZmFsc2VcbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICB1cmw6ICcuLi9pbnZvaWNlL2ludm9pY2U/bWVzc2FnZT0mY29tcGFueT0nICsgSlNPTi5zdHJpbmdpZnkodGhpcy5jb21wYW55W3RoaXMuY3VycmVudEluZGV4XSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIOagueaNrueUqOaIt+WfuuacrOS/oeaBr+iOt+WPluWUr+S4gGlk5ZKM5YWs5Y+45L+h5oGvXG4gIGFzeW5jIGdldFRvdGFsVXNlckluZm8odXNlckluZm8pIHtcbiAgICBjb25zdCB7IGNvZGUgfSA9IGF3YWl0IHdlcHkubG9naW4oKVxuICAgIC8vIGNvbnNvbGUubG9nKCdjb2RlJywgY29kZSk7XG4gICAgaWYgKCFjb2RlKSByZXR1cm5cbiAgICAvLyBjb25zdCB7IGRhdGE6IHsgb3BlbmlkIH0gfSA9IGF3YWl0IHdlcHkucmVxdWVzdCgnaHR0cHM6Ly9hcGkud2VpeGluLnFxLmNvbS9zbnMvanNjb2RlMnNlc3Npb24/YXBwaWQ9JyArIEFQUElEICsgJyZzZWNyZXQ9JyArIFNFQ1JFVCArICcmanNfY29kZT0nICsgY29kZSArICcmZ3JhbnRfdHlwZT1hdXRob3JpemF0aW9uX2NvZGUnKVxuICAgIGNvbnN0IHsgZGF0YTogeyBvcGVuaWQgfSB9ID0gYXdhaXQgd2VweS5yZXF1ZXN0KFVSTC5nZXRPcGVuSWQgKyAnP2NvZGU9JyArIGNvZGUpXG5cbiAgICB1c2VySW5mby5vcGVuaWQgPSBvcGVuaWRcbiAgICAvLyBUT0RPOiDmiYvmnLrlj7fnoIHnmoTojrflj5ZcbiAgICB1c2VySW5mby5waG9uZSA9ICcnXG4gICAgY29uc3QgeyBkYXRhOiB7IG5vLCBjb21wYW55IH0gfSA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6IFVSTC5zYXZlVXNlckluZm8sXG4gICAgICBkYXRhOiB1c2VySW5mbyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgfSlcbiAgICAvLyBjb25zb2xlLmxvZyhubywgY29tcGFueSlcbiAgICB1c2VySW5mby5ubyA9IG5vXG4gICAgd2VweS4kc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ1VQREFURVVTRVJJTkZPJyxcbiAgICAgIHBheWxvYWQ6IHVzZXJJbmZvXG4gICAgfSlcbiAgICB3ZXB5LiRzdG9yZS5kaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnVVBEQVRFQ09NUEFOWScsXG4gICAgICBwYXlsb2FkOiBjb21wYW55XG4gICAgfSlcblxuICAgIHd4LmhpZGVUb2FzdCgpXG4gIH1cblxuICBhc3luYyBvbkxvYWQoKSB7XG4gICAgaWYgKHdlcHkuJHN0b3JlLmdldFN0YXRlKCkudXNlckluZm8pIHJldHVyblxuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgd2VweS5nZXRTZXR0aW5nKClcblxuICAgIGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcbiAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgIHRpdGxlOiAn5q2j5Zyo6I635Y+W5YWs5Y+45L+h5oGvLi4uJyxcbiAgICAgICAgaWNvbjogJ2xvYWRpbmcnXG4gICAgICB9KVxuXG4gICAgICBjb25zdCB7IHVzZXJJbmZvIH0gPSBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKClcblxuICAgICAgdGhpcy5nZXRUb3RhbFVzZXJJbmZvKHVzZXJJbmZvKVxuICAgIH1cbiAgfVxufVxuIl19