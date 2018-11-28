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
      // show: true,
      // currentIndex: 0,
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
                  url: _constant.URL.getBaiDuAccessToken,
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
        var _self, _ref10, words_result;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _self = this;
                _context5.next = 3;
                return _wepy2.default.request({
                  url: _constant.URL.invoiceIdentification + access_token,
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


                if (words_result) {
                  wx.hideToast();

                  // const { statusCode } = await wepy.request({
                  //   url: URL.checkInvoice,
                  //   method: 'POST',
                  //   data: {
                  //     "no": wepy.$store.getState().userInfo.no,
                  //     "companyId": _self.company[_self.currentIndex].id,
                  //     "invoiceNum": words_result.InvoiceNum
                  //   }
                  // })
                  //
                  // if (statusCode === 403) {
                  //   return wx.showModal({
                  //     title: '该发票已经被识别过!',
                  //     content: `绑定的公司为：${_self.company[_self.currentIndex].name}`,
                  //     confirmColor: '#55ACEE',
                  //     confirmText: '知道了',
                  //     showCancel: false,
                  //     success(res) {
                  //     }
                  //   })
                  // } else if (statusCode === 200) {
                  wx.navigateTo({
                    url: '../invoice/invoice?message=' + JSON.stringify(words_result) + '&company=' + JSON.stringify(_self.company[_self.currentIndex])
                  });
                  // }
                } else {
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
                }

              case 6:
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
      var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(userInfo) {
        var _ref12, code, _ref13, openid, _ref14, _ref14$data, no, company;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _wepy2.default.login();

              case 2:
                _ref12 = _context6.sent;
                code = _ref12.code;

                if (code) {
                  _context6.next = 6;
                  break;
                }

                return _context6.abrupt('return');

              case 6:
                _context6.next = 8;
                return _wepy2.default.request(_constant.URL.getOpenId + '?code=' + code);

              case 8:
                _ref13 = _context6.sent;
                openid = _ref13.data.openid;


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
                _ref14 = _context6.sent;
                _ref14$data = _ref14.data;
                no = _ref14$data.no;
                company = _ref14$data.company;

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

              case 21:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getTotalUserInfo(_x6) {
        return _ref11.apply(this, arguments);
      }

      return getTotalUserInfo;
    }()
  }, {
    key: 'onLoad',
    value: function () {
      var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var res, _ref16, userInfo;

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
                _ref16 = _context7.sent;
                userInfo = _ref16.userInfo;


                this.getTotalUserInfo(userInfo);

              case 12:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function onLoad() {
        return _ref15.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Home;
}(_wepy2.default.page)) || _class);

Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/home/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbXBhbnkiLCJzdGF0ZSIsInVzZXJJbmZvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJjYW5JVXNlIiwid3giLCJzaG93IiwiY3VycmVudEluZGV4IiwibWV0aG9kcyIsImJpbmRHZXRVc2VySW5mbyIsImUiLCJnZXRUb3RhbFVzZXJJbmZvIiwiZGV0YWlsIiwiaGFuZGxlQWRkQ29tcGFueSIsImhhbmRsZUVkaXRDb21wYW55IiwibmF2aWdhdGVUbyIsInVybCIsIkpTT04iLCJzdHJpbmdpZnkiLCJoYW5kbGVEZWxldGVDb21wYW55Iiwid2VweSIsInNob3dNb2RhbCIsImNvbnRlbnQiLCIkc3RvcmUiLCJnZXRTdGF0ZSIsIm5hbWUiLCJjb25maXJtIiwicmVxdWVzdCIsIlVSTCIsImRlbGV0ZUNvbXBhbnkiLCJtZXRob2QiLCJubyIsImlkIiwiZGlzcGF0Y2giLCJ0eXBlIiwicGF5bG9hZCIsIiRhcHBseSIsInNob3dUb2FzdCIsInRpdGxlIiwic2hvd1BvcHVwIiwiaW5kZXgiLCJoaWRlUG9wdXAiLCJnZXRQaG90byIsIl9zZWxmIiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInNpemVUeXBlIiwic291cmNlVHlwZSIsImltYWdlRGF0YSIsImljb24iLCJtYXNrIiwiZHVyYXRpb24iLCJnZXRGaWxlU3lzdGVtTWFuYWdlciIsInJlYWRGaWxlIiwiZmlsZVBhdGgiLCJ0ZW1wRmlsZVBhdGhzIiwiZW5jb2RpbmciLCJzdWNjZXNzIiwicmVzIiwiaGFuZGxlR2V0QWNjZXNzVG9rZW4iLCJ3cml0ZUJ5U2VsZiIsImJhc2U2NCIsImdldEJhaUR1QWNjZXNzVG9rZW4iLCJhY2Nlc3NfdG9rZW4iLCJnZXRJbnZvaWNlRGF0YSIsImludm9pY2VJZGVudGlmaWNhdGlvbiIsImltYWdlIiwiZGV0ZWN0X2RpcmVjdGlvbiIsImhlYWRlciIsIndvcmRzX3Jlc3VsdCIsImhpZGVUb2FzdCIsImNvbmZpcm1UZXh0IiwiY2FuY2VsVGV4dCIsImxvZ2luIiwiY29kZSIsImdldE9wZW5JZCIsIm9wZW5pZCIsInBob25lIiwic2F2ZVVzZXJJbmZvIiwiZ2V0U2V0dGluZyIsImF1dGhTZXR0aW5nIiwiZ2V0VXNlckluZm8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQVdxQkEsSSxXQVRwQix3QkFBUTtBQUNQQyxTQURPLG1CQUNDQyxLQURELEVBQ1E7QUFDYixXQUFPQSxNQUFNRCxPQUFiO0FBQ0QsR0FITTtBQUlQRSxVQUpPLG9CQUlFRCxLQUpGLEVBSVM7QUFDZCxXQUFPQSxNQUFNQyxRQUFiO0FBQ0Q7QUFOTSxDQUFSLEM7Ozs7Ozs7Ozs7Ozs7O2tMQVVDQyxNLEdBQVM7QUFDUEMsOEJBQXdCLEVBRGpCO0FBRVBDLHVCQUFpQjtBQUNmLHNCQUFjLDhCQURDO0FBRWYsMEJBQWtCLGtDQUZIO0FBR2Ysb0JBQVksNEJBSEc7QUFJZiwwQkFBa0Isa0NBSkg7QUFLZixxQkFBYTtBQUxFO0FBRlYsSyxRQVdUQyxJLEdBQU87QUFDTEMsZUFBU0MsR0FBR0QsT0FBSCxDQUFXLDhCQUFYLENBREo7QUFFTDtBQUNBO0FBQ0FFLFlBQU0sS0FKRDtBQUtMQyxvQkFBYyxDQUFDO0FBTFYsSyxRQVFQQyxPLEdBQVU7QUFDUjtBQUNNQyxxQkFGRTtBQUFBLDZGQUVjQyxDQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUdBLEtBQUtDLGdCQUFMLENBQXNCRCxFQUFFRSxNQUFGLENBQVNiLFFBQS9CLENBSEE7O0FBQUE7QUFJTix1QkFBS1MsT0FBTCxDQUFhSyxnQkFBYjs7QUFKTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFNUjtBQUNBQyx1QkFQUSwrQkFPYTtBQUNuQlQsV0FBR1UsVUFBSCxDQUFjO0FBQ1pDLGVBQUssNENBQTRD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ZDtBQUNBWCwrQkFBS0csTUFBTCxDQUFZVSxRQUFaLENBQXFCO0FBQ25CQyx3QkFBTSxnQkFEYTtBQUVuQkMsMkJBQVNwQztBQUZVLGlCQUFyQjtBQUlBcUIsK0JBQUtHLE1BQUwsQ0FBWVUsUUFBWixDQUFxQjtBQUNuQkMsd0JBQU0sZUFEYTtBQUVuQkMsMkJBQVN0QztBQUZVLGlCQUFyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBT0l1QixlQUFLRyxNQUFMLENBQVlDLFFBQVosR0FBdUJ6QixROzs7Ozs7Ozs7dUJBRVRxQixlQUFLMkQsVUFBTCxFOzs7QUFBWnJCLG1COztxQkFFRkEsSUFBSXNCLFdBQUosQ0FBZ0IsZ0JBQWhCLEM7Ozs7O0FBQ0YzRSxtQkFBR2dDLFNBQUgsQ0FBYTtBQUNYQyx5QkFBTyxhQURJO0FBRVhXLHdCQUFNO0FBRkssaUJBQWI7Ozt1QkFLMkI3QixlQUFLNkQsV0FBTCxFOzs7O0FBQW5CbEYsd0IsVUFBQUEsUTs7O0FBRVIscUJBQUtZLGdCQUFMLENBQXNCWixRQUF0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWpPNEJxQixlQUFLOEQsSTtrQkFBbEJ0RixJIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcbmltcG9ydCB7IEFQUElELCBTRUNSRVQsIFVSTCB9IGZyb20gJy4uLy4uL2NvbnN0YW50L2NvbnN0YW50J1xuXG5AY29ubmVjdCh7XG4gIGNvbXBhbnkoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuY29tcGFueVxuICB9LFxuICB1c2VySW5mbyhzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS51c2VySW5mb1xuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICcnLFxuICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgXCJ2YW4tYnV0dG9uXCI6IFwiL2NvbXBvbmVudHMvdmFuL2J1dHRvbi9pbmRleFwiLFxuICAgICAgXCJ2YW4tc3dpcGUtY2VsbFwiOiBcIi9jb21wb25lbnRzL3Zhbi9zd2lwZS1jZWxsL2luZGV4XCIsXG4gICAgICBcInZhbi1jZWxsXCI6IFwiL2NvbXBvbmVudHMvdmFuL2NlbGwvaW5kZXhcIixcbiAgICAgIFwidmFuLWNlbGwtZ3JvdXBcIjogXCIvY29tcG9uZW50cy92YW4vY2VsbC1ncm91cC9pbmRleFwiLFxuICAgICAgXCJ2YW4tcG9wdXBcIjogXCIvY29tcG9uZW50cy92YW4vcG9wdXAvaW5kZXhcIixcbiAgICB9LFxuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXG4gICAgLy8gc2hvdzogdHJ1ZSxcbiAgICAvLyBjdXJyZW50SW5kZXg6IDAsXG4gICAgc2hvdzogZmFsc2UsXG4gICAgY3VycmVudEluZGV4OiAtMSxcbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgLy8g5pyq5o6I5p2D5pe25Li75Yqo5o6I5p2D5YaN5omn6KGM5aKe5Yqg5YWs5Y+45pON5L2cXG4gICAgYXN5bmMgYmluZEdldFVzZXJJbmZvKGUpIHtcbiAgICAgIGF3YWl0IHRoaXMuZ2V0VG90YWxVc2VySW5mbyhlLmRldGFpbC51c2VySW5mbylcbiAgICAgIHRoaXMubWV0aG9kcy5oYW5kbGVBZGRDb21wYW55KClcbiAgICB9LFxuICAgIC8vIOe8lui+keWFrOWPuOS/oeaBr1xuICAgIGhhbmRsZUVkaXRDb21wYW55ICgpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuLi9jb21wYW55L2NvbXBhbnk/dHlwZT11cGRhdGUmY29tcGFueT0nICsgSlNPTi5zdHJpbmdpZnkodGhpcy5jb21wYW55W3RoaXMuY3VycmVudEluZGV4XSlcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc2hvdyA9IGZhbHNlXG4gICAgfSxcbiAgICAvLyDliKDpmaTlhazlj7jkv6Hmga9cbiAgICBhc3luYyBoYW5kbGVEZWxldGVDb21wYW55KCkge1xuICAgICAgY29uc3QgeyBjb25maXJtIH0gPSBhd2FpdCB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgIGNvbnRlbnQ6ICfmmK/lkKbliKDpmaQnICsgd2VweS4kc3RvcmUuZ2V0U3RhdGUoKS5jb21wYW55W3RoaXMuY3VycmVudEluZGV4XS5uYW1lICsgJ+WPiuWFtue7keWumueahOWPkeelqOS/oeaBr++8nycsXG4gICAgICB9KVxuXG4gICAgICBpZiAoY29uZmlybSkge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiBVUkwuZGVsZXRlQ29tcGFueSxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBubzogd2VweS4kc3RvcmUuZ2V0U3RhdGUoKS51c2VySW5mby5ubyxcbiAgICAgICAgICAgIGlkOiB3ZXB5LiRzdG9yZS5nZXRTdGF0ZSgpLmNvbXBhbnlbdGhpcy5jdXJyZW50SW5kZXhdLmlkXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcblxuICAgICAgICB3ZXB5LiRzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogJ1VQREFURUNPTVBBTlknLFxuICAgICAgICAgIHBheWxvYWQ6IGRhdGFcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnNob3cgPSBmYWxzZVxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IC0xXG4gICAgICAgIHRoaXMuJGFwcGx5KClcblxuICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn5Yig6Zmk5oiQ5YqfJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sXG4gICAgLy8g5aKe5Yqg5YWs5Y+4XG4gICAgaGFuZGxlQWRkQ29tcGFueSgpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuLi9jb21wYW55L2NvbXBhbnk/dHlwZT1hZGQmY29tcGFueT0nXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICAvLyDmmL7npLrpmpDol4/lj5Hnpajor4bliKvnmoTlhaXlj6NcbiAgICBzaG93UG9wdXAoaW5kZXgpIHtcbiAgICAgIHRoaXMuc2hvdyA9IHRydWVcbiAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gaW5kZXhcbiAgICB9LFxuICAgIGhpZGVQb3B1cCgpIHtcbiAgICAgIHRoaXMuc2hvdyA9IGZhbHNlXG4gICAgfSxcblxuICAgIC8vIOiwg+eUqOaLjeeFp+aIluiAhemAieWPlueFp+eJh+aOpeWPoyA9PT09PT3lj5Hnpajor4bliKtcbiAgICBhc3luYyBnZXRQaG90byh0eXBlKSB7XG4gICAgICB0aGlzLnNob3cgPSBmYWxzZVxuICAgICAgY29uc3QgX3NlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbWFnZURhdGEgPSBhd2FpdCB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgY291bnQ6IDEsXG4gICAgICAgIHNpemVUeXBlOiAnb3JpZ2luYWwnLFxuICAgICAgICBzb3VyY2VUeXBlOiBbdHlwZV1cbiAgICAgIH0pXG5cbiAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgIHRpdGxlOiAn5q2j5Zyo6K+G5YirLi4uJyxcbiAgICAgICAgaWNvbjogJ2xvYWRpbmcnLFxuICAgICAgICBtYXNrOiB0cnVlLFxuICAgICAgICBkdXJhdGlvbjogNjAwMDBcbiAgICAgIH0pXG5cbiAgICAgIHd4LmdldEZpbGVTeXN0ZW1NYW5hZ2VyKCkucmVhZEZpbGUoe1xuICAgICAgICBmaWxlUGF0aDogaW1hZ2VEYXRhLnRlbXBGaWxlUGF0aHNbMF0sIC8v6YCJ5oup5Zu+54mH6L+U5Zue55qE55u45a+56Lev5b6EXG4gICAgICAgIGVuY29kaW5nOiAnYmFzZTY0JywgLy/nvJbnoIHmoLzlvI9cbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICBfc2VsZi5oYW5kbGVHZXRBY2Nlc3NUb2tlbihyZXMuZGF0YSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIC8vIOiHquihjOW9leWFpVxuICAgIHdyaXRlQnlTZWxmKCkge1xuICAgICAgdGhpcy5zaG93ID0gZmFsc2VcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuLi9pbnZvaWNlL2ludm9pY2U/bWVzc2FnZT0mY29tcGFueT0nICsgSlNPTi5zdHJpbmdpZnkodGhpcy5jb21wYW55W3RoaXMuY3VycmVudEluZGV4XSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLy8g6I635Y+WYWNjZXNzX3Rva2VuXG4gIGFzeW5jIGhhbmRsZUdldEFjY2Vzc1Rva2VuKGJhc2U2NCkge1xuICAgIGNvbnN0IHsgZGF0YTogeyBhY2Nlc3NfdG9rZW4gfSB9ID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogVVJMLmdldEJhaUR1QWNjZXNzVG9rZW4sXG4gICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgIH0pXG4gICAgdGhpcy5nZXRJbnZvaWNlRGF0YShhY2Nlc3NfdG9rZW4sIGJhc2U2NClcbiAgfVxuXG4gIC8vIOagueaNrmFjY2Vzc190b2tlbiDosIPnlKjnmb7luqbkupHlj5Hnpajor4bliKvmjqXlj6NcbiAgYXN5bmMgZ2V0SW52b2ljZURhdGEoYWNjZXNzX3Rva2VuLCBiYXNlNjQpIHtcbiAgICBjb25zdCBfc2VsZiA9IHRoaXNcbiAgICBjb25zdCB7IGRhdGE6IHsgd29yZHNfcmVzdWx0IH0gfSA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6ICBVUkwuaW52b2ljZUlkZW50aWZpY2F0aW9uICsgYWNjZXNzX3Rva2VuLFxuICAgICAgZGF0YToge1xuICAgICAgICBpbWFnZTogYmFzZTY0LFxuICAgICAgICBkZXRlY3RfZGlyZWN0aW9uOiB0cnVlXG4gICAgICB9LFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgfSxcbiAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgfSlcblxuICAgIGlmICh3b3Jkc19yZXN1bHQpIHtcbiAgICAgIHd4LmhpZGVUb2FzdCgpXG5cbiAgICAgIC8vIGNvbnN0IHsgc3RhdHVzQ29kZSB9ID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgIC8vICAgdXJsOiBVUkwuY2hlY2tJbnZvaWNlLFxuICAgICAgLy8gICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIC8vICAgZGF0YToge1xuICAgICAgLy8gICAgIFwibm9cIjogd2VweS4kc3RvcmUuZ2V0U3RhdGUoKS51c2VySW5mby5ubyxcbiAgICAgIC8vICAgICBcImNvbXBhbnlJZFwiOiBfc2VsZi5jb21wYW55W19zZWxmLmN1cnJlbnRJbmRleF0uaWQsXG4gICAgICAvLyAgICAgXCJpbnZvaWNlTnVtXCI6IHdvcmRzX3Jlc3VsdC5JbnZvaWNlTnVtXG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0pXG4gICAgICAvL1xuICAgICAgLy8gaWYgKHN0YXR1c0NvZGUgPT09IDQwMykge1xuICAgICAgLy8gICByZXR1cm4gd3guc2hvd01vZGFsKHtcbiAgICAgIC8vICAgICB0aXRsZTogJ+ivpeWPkeelqOW3sue7j+iiq+ivhuWIq+i/hyEnLFxuICAgICAgLy8gICAgIGNvbnRlbnQ6IGDnu5HlrprnmoTlhazlj7jkuLrvvJoke19zZWxmLmNvbXBhbnlbX3NlbGYuY3VycmVudEluZGV4XS5uYW1lfWAsXG4gICAgICAvLyAgICAgY29uZmlybUNvbG9yOiAnIzU1QUNFRScsXG4gICAgICAvLyAgICAgY29uZmlybVRleHQ6ICfnn6XpgZPkuoYnLFxuICAgICAgLy8gICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgLy8gICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gICB9KVxuICAgICAgLy8gfSBlbHNlIGlmIChzdGF0dXNDb2RlID09PSAyMDApIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi4vaW52b2ljZS9pbnZvaWNlP21lc3NhZ2U9JyArIEpTT04uc3RyaW5naWZ5KHdvcmRzX3Jlc3VsdCkgKyAnJmNvbXBhbnk9JyArIEpTT04uc3RyaW5naWZ5KF9zZWxmLmNvbXBhbnlbX3NlbGYuY3VycmVudEluZGV4XSlcbiAgICAgICAgfSlcbiAgICAgIC8vIH1cbiAgICB9IGVsc2Uge1xuICAgICAgd3guaGlkZVRvYXN0KClcbiAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgIHRpdGxlOiAn6K+G5Yir5aSx6LSlJyxcbiAgICAgICAgY29udGVudDogJ+acquiDveivhuWIq+WHuuWPkeelqOS/oeaBrycsXG4gICAgICAgIGNvbmZpcm1UZXh0OiAn6Ieq6KGM5b2V5YWlJyxcbiAgICAgICAgY2FuY2VsVGV4dDogJ+mHjemAieeFp+eJhycsXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICB0aGlzLnNob3cgPSBmYWxzZVxuICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgIHVybDogJy4uL2ludm9pY2UvaW52b2ljZT9tZXNzYWdlPSZjb21wYW55PScgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmNvbXBhbnlbdGhpcy5jdXJyZW50SW5kZXhdKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLy8g5qC55o2u55So5oi35Z+65pys5L+h5oGv6I635Y+W5ZSv5LiAaWTlkozlhazlj7jkv6Hmga9cbiAgYXN5bmMgZ2V0VG90YWxVc2VySW5mbyh1c2VySW5mbykge1xuICAgIGNvbnN0IHsgY29kZSB9ID0gYXdhaXQgd2VweS5sb2dpbigpXG4gICAgaWYgKCFjb2RlKSByZXR1cm5cbiAgICAvLyBjb25zdCB7IGRhdGE6IHsgb3BlbmlkIH0gfSA9IGF3YWl0IHdlcHkucmVxdWVzdCgnaHR0cHM6Ly9hcGkud2VpeGluLnFxLmNvbS9zbnMvanNjb2RlMnNlc3Npb24/YXBwaWQ9JyArIEFQUElEICsgJyZzZWNyZXQ9JyArIFNFQ1JFVCArICcmanNfY29kZT0nICsgY29kZSArICcmZ3JhbnRfdHlwZT1hdXRob3JpemF0aW9uX2NvZGUnKVxuICAgIGNvbnN0IHsgZGF0YTogeyBvcGVuaWQgfSB9ID0gYXdhaXQgd2VweS5yZXF1ZXN0KFVSTC5nZXRPcGVuSWQgKyAnP2NvZGU9JyArIGNvZGUpXG5cbiAgICB1c2VySW5mby5vcGVuaWQgPSBvcGVuaWRcbiAgICAvLyBUT0RPOiDmiYvmnLrlj7fnoIHnmoTojrflj5ZcbiAgICB1c2VySW5mby5waG9uZSA9ICcnXG4gICAgY29uc3QgeyBkYXRhOiB7IG5vLCBjb21wYW55IH0gfSA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6IFVSTC5zYXZlVXNlckluZm8sXG4gICAgICBkYXRhOiB1c2VySW5mbyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgfSlcbiAgICAvLyBjb25zb2xlLmxvZyhubywgY29tcGFueSlcbiAgICB1c2VySW5mby5ubyA9IG5vXG4gICAgd2VweS4kc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ1VQREFURVVTRVJJTkZPJyxcbiAgICAgIHBheWxvYWQ6IHVzZXJJbmZvXG4gICAgfSlcbiAgICB3ZXB5LiRzdG9yZS5kaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnVVBEQVRFQ09NUEFOWScsXG4gICAgICBwYXlsb2FkOiBjb21wYW55XG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIG9uTG9hZCgpIHtcbiAgICBpZiAod2VweS4kc3RvcmUuZ2V0U3RhdGUoKS51c2VySW5mbykgcmV0dXJuXG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCB3ZXB5LmdldFNldHRpbmcoKVxuXG4gICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xuICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6ICfmraPlnKjojrflj5blhazlj7jkv6Hmga8uLi4nLFxuICAgICAgICBpY29uOiAnbG9hZGluZydcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IHsgdXNlckluZm8gfSA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKVxuXG4gICAgICB0aGlzLmdldFRvdGFsVXNlckluZm8odXNlckluZm8pXG4gICAgfVxuICB9XG59XG4iXX0=