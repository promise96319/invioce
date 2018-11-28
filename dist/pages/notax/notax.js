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

var Purchase = function (_wepy$page) {
  _inherits(Purchase, _wepy$page);

  function Purchase() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Purchase);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Purchase.__proto__ || Object.getPrototypeOf(Purchase)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '凭证'
    }, _this.components = {}, _this.data = {
      width: 0,
      height: 0,
      result: {},
      tempFilePath: '',
      imageHeight: 0
    }, _this.methods = {
      hanldeSavePic: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _ref3, path, _ref4, errMsg;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _wepy2.default.getImageInfo({ src: this.tempFilePath });

                case 2:
                  _ref3 = _context.sent;
                  path = _ref3.path;
                  _context.next = 6;
                  return _wepy2.default.saveImageToPhotosAlbum({ filePath: path });

                case 6:
                  _ref4 = _context.sent;
                  errMsg = _ref4.errMsg;

                  if (errMsg === 'saveImageToPhotosAlbum:ok') {
                    wx.showToast({
                      title: '保存成功'
                    });
                    setTimeout(function () {
                      wx.navigateBack({
                        delta: 1
                      });
                    }, 1500);
                  }

                case 9:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function hanldeSavePic() {
          return _ref2.apply(this, arguments);
        }

        return hanldeSavePic;
      }(),
      handleCancel: function handleCancel() {
        wx.navigateBack({
          delta: 1
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Purchase, [{
    key: 'onLoad',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(options) {
        var _this2 = this;

        var _ref6, windowWidth, cal, lineWrap, ctx, date, year, month, day, row, i, _i2, leftTitle, _i3, title, _i4;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                wx.showToast({
                  title: '正在生成凭证',
                  icon: 'loading',
                  duration: 10000
                });
                this.result = JSON.parse(options.result);
                // this.result = {
                //   "summary": "这是业务描述",
                //   "preparedBy": "c",
                //   "client": "航天信息份有限公司",
                //   "supplier": "航天信息股份有限公司",
                //   "project": "这是业务所属项目",
                //   "employeeName": "xiu小明",
                //   "thirdPartyName": "",
                //   "invoice": {
                //     "purchaserName": "航天信息份有限公司",
                //     "sellerName": "航天信息股份有限公司",
                //     "invoiceType": 0,
                //     "invoiceNum": "00593803",
                //     "invoiceDate": "2014-12-31T16:00:00.000Z",
                //     "amountInFiguers": "5.15",
                //     "serviceDetail": [
                //       {
                //         "commodityName": "货物可乐",
                //         "commodityAmount": "12345.89",
                //         "commodityTax": "0.03"
                //       }, {
                //         "commodityName": "货物可乐",
                //         "commodityAmount": "12345.80",
                //         "commodityTax": "0.00"
                //       }, {
                //         "commodityName": "货物可乐",
                //         "commodityAmount": "12345.89",
                //         "commodityTax": "0.03"
                //       }, {
                //         "commodityName": "货物可乐",
                //         "commodityAmount": "12345.80",
                //         "commodityTax": "0.03"
                //       }, {
                //         "commodityName": "货物可乐",
                //         "commodityAmount": "12345.89",
                //         "commodityTax": "0.03"
                //       }
                //     ],
                //     "discription": "这是业务描述",
                //     "project": "这是业务所属项目",
                //     "identity": 1,
                //     "whoPays": 1,
                //     "employeeName": "xiu小明",
                //     "thirdPartyName": "",
                //     "reason": 1,
                //     "id": 53,
                //     "createdAt": "2018-11-22T03:27:24.640Z",
                //     "updatedAt": "2018-11-22T03:27:24.640Z"
                //   },
                //   "subjects": [
                //     {
                //       "subjectName": "应收账款",
                //       "subjectCode": "1122",
                //       "amount": "5.15"
                //     }, {
                //       "subjectName": "主营业务收入",
                //       "subjectCode": "5001",
                //       "amount": "12345.89"
                //     }, {
                //       "subjectName": "主营业务收入",
                //       "subjectCode": "5001",
                //       "amount": "12345.80"
                //     }, {
                //       "subjectName": "应交税费 - 增值税 - 销项税",
                //       "subjectCode": "5001",
                //       "amount": "0.00"
                //     }, {
                //       "subjectName": "主营业务收入",
                //       "subjectCode": "5001",
                //       "amount": "12345.89"
                //     }, {
                //       "subjectName": "主营业务收入",
                //       "subjectCode": "5001",
                //       "amount": "12345.80"
                //     }, {
                //       "subjectName": "主营业务收入",
                //       "subjectCode": "5001",
                //       "amount": "12345.89"
                //     }, {
                //       "subjectName": "应交税费 - 增值税 - 销项税",
                //       "subjectCode": "5001",
                //       "amount": "0.03"
                //     }
                //   ],
                //   "accountingSupervisor": null,
                //   "bookkeeper": null,
                //   "cashier": null,
                //   "auditor": null,
                //   "id": 8,
                //   "voucherDate": "2018-11-22T03:27:24.649Z",
                //   "createdAt": "2018-11-22T03:27:24.649Z",
                //   "updatedAt": "2018-11-22T03:27:24.649Z"
                // }

                // 获取屏幕宽
                _context2.next = 4;
                return _wepy2.default.getSystemInfo();

              case 4:
                _ref6 = _context2.sent;
                windowWidth = _ref6.windowWidth;

                this.width = windowWidth;
                this.$apply();

                // 函数定义区域 ===================
                // 设置一个基准比例

                cal = function cal(px) {
                  return px / 750 * _this2.width;
                };

                // canvas换行显示


                lineWrap = function lineWrap(ctx, str, fontsize, lineheight, width, x, y) {
                  ctx.setFontSize(fontsize);
                  var textArr = [];
                  var index = 0;
                  for (var i = 1; i < str.length; i++) {
                    if (ctx.measureText(str.substring(index, i)).width >= width * 0.8) {
                      textArr.push(str.substring(index, i));
                      index = i;
                    }
                  }

                  textArr.push(str.substring(index));

                  for (var _i = 0; _i < textArr.length; _i++) {
                    ctx.fillText(textArr[_i], x, y + lineheight * (_i + 1));
                  }
                };

                ctx = wx.createCanvasContext('canvasId');


                ctx.setFillStyle('white');
                ctx.fillRect(cal(0), cal(0), cal(750), cal(120) + (8 + this.result.subjects.length) * cal(36));
                ctx.setFillStyle('black');

                // 标题
                ctx.setFontSize(cal(23));
                ctx.setTextAlign('center');
                ctx.fillText('记账凭证', cal(375), cal(40));

                // 时间及编号
                date = new Date();
                year = date.getFullYear();
                month = date.getMonth() + 1;
                day = date.getDate();

                ctx.translate(cal(730), cal(70));
                ctx.setFontSize(cal(13));
                ctx.setTextAlign('right');
                ctx.fillText(year + ' 年 ' + month + ' 月 ' + day + ' 号      记字第 ' + this.result.id + ' 号', cal(0), cal(22));
                ctx.setTextAlign('center');
                ctx.setTextAlign('center');
                ctx.setTextAlign('center');

                // 表格
                // 外框
                row = this.result.subjects.length + 2;

                ctx.translate(cal(-710), cal(50));
                ctx.setStrokeStyle('#000');
                ctx.strokeRect(0, 0, cal(710), cal(36) * row);

                // 内框
                for (i = 2; i < row - 1; i++) {
                  ctx.setStrokeStyle('#999');
                  ctx.moveTo(cal(200), cal(36) * i);
                  ctx.lineTo(cal(710), cal(36) * i);
                  ctx.stroke();
                }

                ctx.moveTo(0, cal(36));
                ctx.lineTo(cal(710), cal(36));

                ctx.moveTo(0, cal(36) * (row - 1));
                ctx.lineTo(cal(710), cal(36) * (row - 1));

                ctx.moveTo(0, cal(36) * row);
                ctx.lineTo(cal(710), cal(36) * row);

                ctx.moveTo(cal(200), 0);
                ctx.lineTo(cal(200), cal(36) * (row - 1));

                ctx.moveTo(cal(330), cal(18));
                ctx.lineTo(cal(330), cal(36) * (row - 1));

                ctx.moveTo(cal(200), cal(18));
                ctx.lineTo(cal(460), cal(18));

                ctx.moveTo(cal(460), 0);
                ctx.lineTo(cal(460), cal(36) * row);

                ctx.moveTo(cal(585), 0);
                ctx.lineTo(cal(585), cal(36) * row);

                ctx.stroke();

                // 表头
                ctx.setFontSize(cal(15));
                ctx.fillText('摘要', cal(100), cal(24));
                ctx.fillText('借方金额', cal(522), cal(24));
                ctx.fillText('贷方金额', cal(646), cal(24));

                ctx.setFontSize(cal(14));
                ctx.fillText('会计科目', cal(330), cal(15));
                ctx.fillText('科目代码', cal(265), cal(33));
                ctx.fillText('科目名称', cal(395), cal(33));

                // 内容部分
                // 摘要内容
                ctx.translate(0, cal(36));
                lineWrap(ctx, this.result.summary, cal(14), cal(16), cal(160), cal(100), cal(10));

                // 物品、服务等
                for (_i2 = 0; _i2 < this.result.subjects.length; _i2++) {
                  ctx.fillText(this.result.subjects[_i2].subjectCode, cal(265), cal(24) + cal(36) * _i2);
                  if (ctx.measureText(this.result.subjects[_i2].subjectName).width >= cal(130) * 0.8) {
                    lineWrap(ctx, this.result.subjects[_i2].subjectName, cal(14), cal(14), cal(130), cal(395), cal(2) + cal(36) * _i2);
                  } else {
                    ctx.fillText(this.result.subjects[_i2].subjectName, cal(395), cal(24) + cal(36) * _i2);
                  }
                  if (_i2 === this.result.subjects.length - 1) {
                    ctx.fillText(this.result.subjects[_i2].amount, cal(646), cal(24) + cal(36) * _i2);
                  } else {
                    ctx.fillText(this.result.subjects[_i2].amount, cal(522), cal(24) + cal(36) * _i2);
                  }
                }

                // 合计
                ctx.translate(0, cal(36) * this.result.subjects.length);
                ctx.fillText('合计', cal(230), cal(24));
                ctx.fillText(this.result.invoice.amountInFiguers, cal(522), cal(24));
                ctx.fillText(this.result.invoice.amountInFiguers, cal(646), cal(24));

                // // 信息栏
                ctx.beginPath();
                // 边框
                ctx.translate(0, cal(36));
                leftTitle = ['会计总管', '客户', '供应商', '项目'];

                for (_i3 = 1; _i3 <= 4; _i3++) {
                  ctx.fillText(leftTitle[_i3 - 1], cal(50), cal(24) + (_i3 - 1) * cal(36));
                  ctx.moveTo(0, cal(36) * _i3);
                  ctx.lineTo(cal(710), cal(36) * _i3);
                }

                ctx.moveTo(cal(355), cal(36));
                ctx.lineTo(cal(355), cal(36) * 4);
                ctx.fillText('员工', cal(405), cal(36) + cal(24));

                ctx.moveTo(cal(455), cal(36));
                ctx.lineTo(cal(455), cal(36) * 4);
                ctx.fillText('其他第三方', cal(405), cal(36) * 2 + cal(24));

                ctx.moveTo(cal(710), 0);
                ctx.lineTo(cal(710), cal(36) * 4);
                ctx.fillText('发票号码', cal(405), cal(36) * 3 + cal(24));

                ctx.moveTo(0, 0);
                ctx.lineTo(0, cal(36) * 4);

                ctx.moveTo(cal(100), 0);
                ctx.lineTo(cal(100), cal(36) * 4);

                ctx.moveTo(cal(190), 0);
                ctx.lineTo(cal(190), cal(36));

                title = ['记账', '出纳', '审核', '制单'];

                for (_i4 = 1; _i4 <= 4; _i4++) {
                  ctx.fillText(title[_i4 - 1], cal(190 + 130 * (_i4 - 1) + 25), cal(24));
                  ctx.moveTo(cal(190 + 130 * (_i4 - 1) + 50), 0);
                  ctx.lineTo(cal(190 + 130 * (_i4 - 1) + 50), cal(36));
                  ctx.moveTo(cal(190 + 130 * (_i4 - 1) + 130), 0);
                  ctx.lineTo(cal(190 + 130 * (_i4 - 1) + 130), cal(36));
                }
                ctx.stroke();

                ctx.fillText(this.result.preparedBy, cal(190 + 130 * 3 + 90), cal(24));
                ctx.fillText(this.result.invoice.invoiceNum, cal(582), cal(24) + cal(36) * 3);
                this.result.project && ctx.fillText(this.result.project, cal(228), cal(24) + cal(36) * 3);

                ctx.fillText(this.result.supplier, cal(228), cal(24) + cal(36) * 2);
                this.result.employeeName && ctx.fillText(this.result.employeeName, cal(582), cal(24) + cal(36));
                this.result.thirdPartyName && ctx.fillText(this.result.thirdPartyName, cal(582), cal(24) + cal(36) * 2);

                ctx.draw(true, function () {
                  _this2.imageHeight = cal(120) + (7 + _this2.result.subjects.length) * cal(36);
                  wx.canvasToTempFilePath({
                    x: 0,
                    y: 0,
                    width: cal(750),
                    height: cal(120) + (7 + _this2.result.subjects.length) * cal(36),
                    fileType: 'jpg',
                    quality: 0.5,
                    canvasId: 'canvasId', //canvasId和标签里面的id对应
                    success: function success(res) {
                      wx.hideToast();
                      //将获取到的图片临时路径set到canvasSaveimg中
                      _this2.tempFilePath = res.tempFilePath;
                      _this2.$apply();
                    },
                    fail: function fail(err) {
                      console.log(err);
                    }
                  });
                });

              case 94:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onLoad(_x) {
        return _ref5.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'onUnload',
    value: function onUnload() {
      wx.navigateBack({
        delta: 1
      });
    }
  }]);

  return Purchase;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Purchase , 'pages/notax/notax'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGF4LmpzIl0sIm5hbWVzIjpbIlB1cmNoYXNlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwid2lkdGgiLCJoZWlnaHQiLCJyZXN1bHQiLCJ0ZW1wRmlsZVBhdGgiLCJpbWFnZUhlaWdodCIsIm1ldGhvZHMiLCJoYW5sZGVTYXZlUGljIiwid2VweSIsImdldEltYWdlSW5mbyIsInNyYyIsInBhdGgiLCJzYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtIiwiZmlsZVBhdGgiLCJlcnJNc2ciLCJ3eCIsInNob3dUb2FzdCIsInRpdGxlIiwic2V0VGltZW91dCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiaGFuZGxlQ2FuY2VsIiwib3B0aW9ucyIsImljb24iLCJkdXJhdGlvbiIsIkpTT04iLCJwYXJzZSIsImdldFN5c3RlbUluZm8iLCJ3aW5kb3dXaWR0aCIsIiRhcHBseSIsImNhbCIsInB4IiwibGluZVdyYXAiLCJjdHgiLCJzdHIiLCJmb250c2l6ZSIsImxpbmVoZWlnaHQiLCJ4IiwieSIsInNldEZvbnRTaXplIiwidGV4dEFyciIsImluZGV4IiwiaSIsImxlbmd0aCIsIm1lYXN1cmVUZXh0Iiwic3Vic3RyaW5nIiwicHVzaCIsImZpbGxUZXh0IiwiY3JlYXRlQ2FudmFzQ29udGV4dCIsInNldEZpbGxTdHlsZSIsImZpbGxSZWN0Iiwic3ViamVjdHMiLCJzZXRUZXh0QWxpZ24iLCJkYXRlIiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwidHJhbnNsYXRlIiwiaWQiLCJyb3ciLCJzZXRTdHJva2VTdHlsZSIsInN0cm9rZVJlY3QiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJzdW1tYXJ5Iiwic3ViamVjdENvZGUiLCJzdWJqZWN0TmFtZSIsImFtb3VudCIsImludm9pY2UiLCJhbW91bnRJbkZpZ3VlcnMiLCJiZWdpblBhdGgiLCJsZWZ0VGl0bGUiLCJwcmVwYXJlZEJ5IiwiaW52b2ljZU51bSIsInByb2plY3QiLCJzdXBwbGllciIsImVtcGxveWVlTmFtZSIsInRoaXJkUGFydHlOYW1lIiwiZHJhdyIsImNhbnZhc1RvVGVtcEZpbGVQYXRoIiwiZmlsZVR5cGUiLCJxdWFsaXR5IiwiY2FudmFzSWQiLCJzdWNjZXNzIiwicmVzIiwiaGlkZVRvYXN0IiwiZmFpbCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBSWJDLEksR0FBTztBQUNMQyxhQUFPLENBREY7QUFFTEMsY0FBUSxDQUZIO0FBR0xDLGNBQVEsRUFISDtBQUlMQyxvQkFBYyxFQUpUO0FBS0xDLG1CQUFhO0FBTFIsSyxRQVFQQyxPLEdBQVU7QUFDRkMsbUJBREU7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFFaUJDLGVBQUtDLFlBQUwsQ0FBa0IsRUFBQ0MsS0FBSyxLQUFLTixZQUFYLEVBQWxCLENBRmpCOztBQUFBO0FBQUE7QUFFRU8sc0JBRkYsU0FFRUEsSUFGRjtBQUFBO0FBQUEseUJBR21CSCxlQUFLSSxzQkFBTCxDQUE0QixFQUFDQyxVQUFVRixJQUFYLEVBQTVCLENBSG5COztBQUFBO0FBQUE7QUFHRUcsd0JBSEYsU0FHRUEsTUFIRjs7QUFJTixzQkFBSUEsV0FBVywyQkFBZixFQUE0QztBQUMxQ0MsdUJBQUdDLFNBQUgsQ0FBYTtBQUNYQyw2QkFBTztBQURJLHFCQUFiO0FBR0FDLCtCQUFXLFlBQU07QUFDZkgseUJBQUdJLFlBQUgsQ0FBZ0I7QUFDZEMsK0JBQU87QUFETyx1QkFBaEI7QUFHRCxxQkFKRCxFQUlHLElBSkg7QUFLRDs7QUFiSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7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Q0MsR0FBRCxFQUFTO0FBQ2QxRSx5QkFBRzJFLFNBQUg7QUFDQTtBQUNBLDZCQUFLdEYsWUFBTCxHQUFvQnFGLElBQUlyRixZQUF4QjtBQUNBLDZCQUFLeUIsTUFBTDtBQUNILHFCQWJtQjtBQWNwQjhELDBCQUFNLGNBQUNDLEdBQUQsRUFBUztBQUNiQyw4QkFBUUMsR0FBUixDQUFZRixHQUFaO0FBQ0Q7QUFoQm1CLG1CQUF4QjtBQWtCRCxpQkFwQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkF1QlU7QUFDVjdFLFNBQUdJLFlBQUgsQ0FBZ0I7QUFDZEMsZUFBTztBQURPLE9BQWhCO0FBR0Q7Ozs7RUE3Vm1DWixlQUFLdUYsSTs7a0JBQXRCbkcsUSIsImZpbGUiOiJub3RheC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHVyY2hhc2UgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WHreivgSdcbiAgfVxuICBjb21wb25lbnRzID0ge1xuXG4gIH1cblxuICBkYXRhID0ge1xuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICByZXN1bHQ6IHt9LFxuICAgIHRlbXBGaWxlUGF0aDogJycsXG4gICAgaW1hZ2VIZWlnaHQ6IDAsXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIGFzeW5jIGhhbmxkZVNhdmVQaWMgKCkge1xuICAgICAgY29uc3QgeyBwYXRoIH0gPSBhd2FpdCB3ZXB5LmdldEltYWdlSW5mbyh7c3JjOiB0aGlzLnRlbXBGaWxlUGF0aH0pXG4gICAgICBjb25zdCB7IGVyck1zZyB9ID0gYXdhaXQgd2VweS5zYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtKHtmaWxlUGF0aDogcGF0aH0pXG4gICAgICBpZiAoZXJyTXNnID09PSAnc2F2ZUltYWdlVG9QaG90b3NBbGJ1bTpvaycpIHtcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+S/neWtmOaIkOWKnycsXG4gICAgICAgIH0pXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICBkZWx0YTogMVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sIDE1MDApXG4gICAgICB9XG4gICAgfSxcbiAgICBoYW5kbGVDYW5jZWwgKCkge1xuICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgZGVsdGE6IDFcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICB0aXRsZTogJ+ato+WcqOeUn+aIkOWHreivgScsXG4gICAgICAgaWNvbjogJ2xvYWRpbmcnLFxuICAgICAgIGR1cmF0aW9uOiAxMDAwMFxuICAgICB9KVxuICAgIHRoaXMucmVzdWx0ID0gSlNPTi5wYXJzZShvcHRpb25zLnJlc3VsdClcbiAgICAvLyB0aGlzLnJlc3VsdCA9IHtcbiAgICAvLyAgIFwic3VtbWFyeVwiOiBcIui/meaYr+S4muWKoeaPj+i/sFwiLFxuICAgIC8vICAgXCJwcmVwYXJlZEJ5XCI6IFwiY1wiLFxuICAgIC8vICAgXCJjbGllbnRcIjogXCLoiKrlpKnkv6Hmga/ku73mnInpmZDlhazlj7hcIixcbiAgICAvLyAgIFwic3VwcGxpZXJcIjogXCLoiKrlpKnkv6Hmga/ogqHku73mnInpmZDlhazlj7hcIixcbiAgICAvLyAgIFwicHJvamVjdFwiOiBcIui/meaYr+S4muWKoeaJgOWxnumhueebrlwiLFxuICAgIC8vICAgXCJlbXBsb3llZU5hbWVcIjogXCJ4aXXlsI/mmI5cIixcbiAgICAvLyAgIFwidGhpcmRQYXJ0eU5hbWVcIjogXCJcIixcbiAgICAvLyAgIFwiaW52b2ljZVwiOiB7XG4gICAgLy8gICAgIFwicHVyY2hhc2VyTmFtZVwiOiBcIuiIquWkqeS/oeaBr+S7veaciemZkOWFrOWPuFwiLFxuICAgIC8vICAgICBcInNlbGxlck5hbWVcIjogXCLoiKrlpKnkv6Hmga/ogqHku73mnInpmZDlhazlj7hcIixcbiAgICAvLyAgICAgXCJpbnZvaWNlVHlwZVwiOiAwLFxuICAgIC8vICAgICBcImludm9pY2VOdW1cIjogXCIwMDU5MzgwM1wiLFxuICAgIC8vICAgICBcImludm9pY2VEYXRlXCI6IFwiMjAxNC0xMi0zMVQxNjowMDowMC4wMDBaXCIsXG4gICAgLy8gICAgIFwiYW1vdW50SW5GaWd1ZXJzXCI6IFwiNS4xNVwiLFxuICAgIC8vICAgICBcInNlcnZpY2VEZXRhaWxcIjogW1xuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIFwiY29tbW9kaXR5TmFtZVwiOiBcIui0p+eJqeWPr+S5kFwiLFxuICAgIC8vICAgICAgICAgXCJjb21tb2RpdHlBbW91bnRcIjogXCIxMjM0NS44OVwiLFxuICAgIC8vICAgICAgICAgXCJjb21tb2RpdHlUYXhcIjogXCIwLjAzXCJcbiAgICAvLyAgICAgICB9LCB7XG4gICAgLy8gICAgICAgICBcImNvbW1vZGl0eU5hbWVcIjogXCLotKfnianlj6/kuZBcIixcbiAgICAvLyAgICAgICAgIFwiY29tbW9kaXR5QW1vdW50XCI6IFwiMTIzNDUuODBcIixcbiAgICAvLyAgICAgICAgIFwiY29tbW9kaXR5VGF4XCI6IFwiMC4wMFwiXG4gICAgLy8gICAgICAgfSwge1xuICAgIC8vICAgICAgICAgXCJjb21tb2RpdHlOYW1lXCI6IFwi6LSn54mp5Y+v5LmQXCIsXG4gICAgLy8gICAgICAgICBcImNvbW1vZGl0eUFtb3VudFwiOiBcIjEyMzQ1Ljg5XCIsXG4gICAgLy8gICAgICAgICBcImNvbW1vZGl0eVRheFwiOiBcIjAuMDNcIlxuICAgIC8vICAgICAgIH0sIHtcbiAgICAvLyAgICAgICAgIFwiY29tbW9kaXR5TmFtZVwiOiBcIui0p+eJqeWPr+S5kFwiLFxuICAgIC8vICAgICAgICAgXCJjb21tb2RpdHlBbW91bnRcIjogXCIxMjM0NS44MFwiLFxuICAgIC8vICAgICAgICAgXCJjb21tb2RpdHlUYXhcIjogXCIwLjAzXCJcbiAgICAvLyAgICAgICB9LCB7XG4gICAgLy8gICAgICAgICBcImNvbW1vZGl0eU5hbWVcIjogXCLotKfnianlj6/kuZBcIixcbiAgICAvLyAgICAgICAgIFwiY29tbW9kaXR5QW1vdW50XCI6IFwiMTIzNDUuODlcIixcbiAgICAvLyAgICAgICAgIFwiY29tbW9kaXR5VGF4XCI6IFwiMC4wM1wiXG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICBdLFxuICAgIC8vICAgICBcImRpc2NyaXB0aW9uXCI6IFwi6L+Z5piv5Lia5Yqh5o+P6L+wXCIsXG4gICAgLy8gICAgIFwicHJvamVjdFwiOiBcIui/meaYr+S4muWKoeaJgOWxnumhueebrlwiLFxuICAgIC8vICAgICBcImlkZW50aXR5XCI6IDEsXG4gICAgLy8gICAgIFwid2hvUGF5c1wiOiAxLFxuICAgIC8vICAgICBcImVtcGxveWVlTmFtZVwiOiBcInhpdeWwj+aYjlwiLFxuICAgIC8vICAgICBcInRoaXJkUGFydHlOYW1lXCI6IFwiXCIsXG4gICAgLy8gICAgIFwicmVhc29uXCI6IDEsXG4gICAgLy8gICAgIFwiaWRcIjogNTMsXG4gICAgLy8gICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxOC0xMS0yMlQwMzoyNzoyNC42NDBaXCIsXG4gICAgLy8gICAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0xMS0yMlQwMzoyNzoyNC42NDBaXCJcbiAgICAvLyAgIH0sXG4gICAgLy8gICBcInN1YmplY3RzXCI6IFtcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgIFwic3ViamVjdE5hbWVcIjogXCLlupTmlLbotKbmrL5cIixcbiAgICAvLyAgICAgICBcInN1YmplY3RDb2RlXCI6IFwiMTEyMlwiLFxuICAgIC8vICAgICAgIFwiYW1vdW50XCI6IFwiNS4xNVwiXG4gICAgLy8gICAgIH0sIHtcbiAgICAvLyAgICAgICBcInN1YmplY3ROYW1lXCI6IFwi5Li76JCl5Lia5Yqh5pS25YWlXCIsXG4gICAgLy8gICAgICAgXCJzdWJqZWN0Q29kZVwiOiBcIjUwMDFcIixcbiAgICAvLyAgICAgICBcImFtb3VudFwiOiBcIjEyMzQ1Ljg5XCJcbiAgICAvLyAgICAgfSwge1xuICAgIC8vICAgICAgIFwic3ViamVjdE5hbWVcIjogXCLkuLvokKXkuJrliqHmlLblhaVcIixcbiAgICAvLyAgICAgICBcInN1YmplY3RDb2RlXCI6IFwiNTAwMVwiLFxuICAgIC8vICAgICAgIFwiYW1vdW50XCI6IFwiMTIzNDUuODBcIlxuICAgIC8vICAgICB9LCB7XG4gICAgLy8gICAgICAgXCJzdWJqZWN0TmFtZVwiOiBcIuW6lOS6pOeojui0uSAtIOWinuWAvOeojiAtIOmUgOmhueeojlwiLFxuICAgIC8vICAgICAgIFwic3ViamVjdENvZGVcIjogXCI1MDAxXCIsXG4gICAgLy8gICAgICAgXCJhbW91bnRcIjogXCIwLjAwXCJcbiAgICAvLyAgICAgfSwge1xuICAgIC8vICAgICAgIFwic3ViamVjdE5hbWVcIjogXCLkuLvokKXkuJrliqHmlLblhaVcIixcbiAgICAvLyAgICAgICBcInN1YmplY3RDb2RlXCI6IFwiNTAwMVwiLFxuICAgIC8vICAgICAgIFwiYW1vdW50XCI6IFwiMTIzNDUuODlcIlxuICAgIC8vICAgICB9LCB7XG4gICAgLy8gICAgICAgXCJzdWJqZWN0TmFtZVwiOiBcIuS4u+iQpeS4muWKoeaUtuWFpVwiLFxuICAgIC8vICAgICAgIFwic3ViamVjdENvZGVcIjogXCI1MDAxXCIsXG4gICAgLy8gICAgICAgXCJhbW91bnRcIjogXCIxMjM0NS44MFwiXG4gICAgLy8gICAgIH0sIHtcbiAgICAvLyAgICAgICBcInN1YmplY3ROYW1lXCI6IFwi5Li76JCl5Lia5Yqh5pS25YWlXCIsXG4gICAgLy8gICAgICAgXCJzdWJqZWN0Q29kZVwiOiBcIjUwMDFcIixcbiAgICAvLyAgICAgICBcImFtb3VudFwiOiBcIjEyMzQ1Ljg5XCJcbiAgICAvLyAgICAgfSwge1xuICAgIC8vICAgICAgIFwic3ViamVjdE5hbWVcIjogXCLlupTkuqTnqI7otLkgLSDlop7lgLznqI4gLSDplIDpobnnqI5cIixcbiAgICAvLyAgICAgICBcInN1YmplY3RDb2RlXCI6IFwiNTAwMVwiLFxuICAgIC8vICAgICAgIFwiYW1vdW50XCI6IFwiMC4wM1wiXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIF0sXG4gICAgLy8gICBcImFjY291bnRpbmdTdXBlcnZpc29yXCI6IG51bGwsXG4gICAgLy8gICBcImJvb2trZWVwZXJcIjogbnVsbCxcbiAgICAvLyAgIFwiY2FzaGllclwiOiBudWxsLFxuICAgIC8vICAgXCJhdWRpdG9yXCI6IG51bGwsXG4gICAgLy8gICBcImlkXCI6IDgsXG4gICAgLy8gICBcInZvdWNoZXJEYXRlXCI6IFwiMjAxOC0xMS0yMlQwMzoyNzoyNC42NDlaXCIsXG4gICAgLy8gICBcImNyZWF0ZWRBdFwiOiBcIjIwMTgtMTEtMjJUMDM6Mjc6MjQuNjQ5WlwiLFxuICAgIC8vICAgXCJ1cGRhdGVkQXRcIjogXCIyMDE4LTExLTIyVDAzOjI3OjI0LjY0OVpcIlxuICAgIC8vIH1cblxuICAgIC8vIOiOt+WPluWxj+W5leWuvVxuICAgIGNvbnN0IHsgd2luZG93V2lkdGggfSA9IGF3YWl0IHdlcHkuZ2V0U3lzdGVtSW5mbygpXG4gICAgdGhpcy53aWR0aCA9IHdpbmRvd1dpZHRoXG4gICAgdGhpcy4kYXBwbHkoKVxuXG5cbi8vIOWHveaVsOWumuS5ieWMuuWfnyA9PT09PT09PT09PT09PT09PT09XG4gICAgLy8g6K6+572u5LiA5Liq5Z+65YeG5q+U5L6LXG4gICAgbGV0IGNhbCA9IChweCkgPT4ge1xuICAgICAgcmV0dXJuICBweCAvIDc1MCAqIHRoaXMud2lkdGhcbiAgICB9XG5cbiAgICAvLyBjYW52YXPmjaLooYzmmL7npLpcbiAgICBsZXQgbGluZVdyYXAgPSAoY3R4LCBzdHIsIGZvbnRzaXplLCBsaW5laGVpZ2h0LCB3aWR0aCwgeCwgeSkgPT4ge1xuICAgICAgY3R4LnNldEZvbnRTaXplKGZvbnRzaXplKVxuICAgICAgbGV0IHRleHRBcnIgPSBbXVxuICAgICAgbGV0IGluZGV4ID0gMFxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGN0eC5tZWFzdXJlVGV4dChzdHIuc3Vic3RyaW5nKGluZGV4LCBpKSkud2lkdGggPj0gd2lkdGggKiAwLjgpIHtcbiAgICAgICAgICB0ZXh0QXJyLnB1c2goc3RyLnN1YnN0cmluZyhpbmRleCwgaSkpXG4gICAgICAgICAgaW5kZXggPSBpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGV4dEFyci5wdXNoKHN0ci5zdWJzdHJpbmcoaW5kZXgpKVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHRBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRleHRBcnJbaV0sIHgsIHkgKyBsaW5laGVpZ2h0ICogKGkgKyAxKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjdHggPSB3eC5jcmVhdGVDYW52YXNDb250ZXh0KCdjYW52YXNJZCcpXG5cbiAgICBjdHguc2V0RmlsbFN0eWxlKCd3aGl0ZScpXG4gICAgY3R4LmZpbGxSZWN0KGNhbCgwKSwgY2FsKDApLCBjYWwoNzUwKSwgY2FsKDEyMCkgKyAoOCArIHRoaXMucmVzdWx0LnN1YmplY3RzLmxlbmd0aCkgKiBjYWwoMzYpKVxuICAgIGN0eC5zZXRGaWxsU3R5bGUoJ2JsYWNrJylcblxuICAgIC8vIOagh+mimFxuICAgIGN0eC5zZXRGb250U2l6ZShjYWwoMjMpKVxuICAgIGN0eC5zZXRUZXh0QWxpZ24oJ2NlbnRlcicpXG4gICAgY3R4LmZpbGxUZXh0KCforrDotKblh63or4EnLCBjYWwoMzc1KSwgY2FsKDQwKSlcblxuICAgIC8vIOaXtumXtOWPiue8luWPt1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKVxuICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXG4gICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMVxuICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKVxuICAgIGN0eC50cmFuc2xhdGUoY2FsKDczMCksIGNhbCg3MCkpXG4gICAgY3R4LnNldEZvbnRTaXplKGNhbCgxMykpXG4gICAgY3R4LnNldFRleHRBbGlnbigncmlnaHQnKVxuICAgIGN0eC5maWxsVGV4dCh5ZWFyICsgJyDlubQgJyArIG1vbnRoICsgJyDmnIggJyArIGRheSArICcg5Y+3ICAgICAg6K6w5a2X56ysICcgKyB0aGlzLnJlc3VsdC5pZCArICcg5Y+3JywgY2FsKDApLCBjYWwoMjIpKVxuICAgIGN0eC5zZXRUZXh0QWxpZ24oJ2NlbnRlcicpXG4gICAgY3R4LnNldFRleHRBbGlnbignY2VudGVyJylcbiAgICBjdHguc2V0VGV4dEFsaWduKCdjZW50ZXInKVxuXG4gICAgLy8g6KGo5qC8XG4gICAgLy8g5aSW5qGGXG4gICAgbGV0IHJvdyA9IHRoaXMucmVzdWx0LnN1YmplY3RzLmxlbmd0aCArIDJcbiAgICBjdHgudHJhbnNsYXRlKGNhbCgtNzEwKSwgY2FsKDUwKSlcbiAgICBjdHguc2V0U3Ryb2tlU3R5bGUoJyMwMDAnKVxuICAgIGN0eC5zdHJva2VSZWN0KDAsIDAsIGNhbCg3MTApLCBjYWwoMzYpICogcm93KVxuXG4gICAgLy8g5YaF5qGGXG4gICAgZm9yIChsZXQgaSA9IDI7IGkgPCByb3cgLSAxOyBpKyspIHtcbiAgICAgIGN0eC5zZXRTdHJva2VTdHlsZSgnIzk5OScpXG4gICAgICBjdHgubW92ZVRvKGNhbCgyMDApLCBjYWwoMzYpICogaSlcbiAgICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikgKiBpKVxuICAgICAgY3R4LnN0cm9rZSgpXG4gICAgfVxuXG4gICAgY3R4Lm1vdmVUbygwLCBjYWwoMzYpKVxuICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikpXG5cbiAgICBjdHgubW92ZVRvKDAsIGNhbCgzNikgKiAocm93IC0xKSlcbiAgICBjdHgubGluZVRvKGNhbCg3MTApLCBjYWwoMzYpICogKHJvdyAtMSkpXG5cbiAgICBjdHgubW92ZVRvKDAsIGNhbCgzNikgKiByb3cpXG4gICAgY3R4LmxpbmVUbyhjYWwoNzEwKSwgY2FsKDM2KSAqIHJvdylcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDIwMCksIDApXG4gICAgY3R4LmxpbmVUbyhjYWwoMjAwKSwgY2FsKDM2KSAqIChyb3cgLTEpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMzMwKSwgY2FsKDE4KSlcbiAgICBjdHgubGluZVRvKGNhbCgzMzApLCBjYWwoMzYpICogKHJvdyAtIDEpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMjAwKSwgY2FsKDE4KSlcbiAgICBjdHgubGluZVRvKGNhbCg0NjApLCBjYWwoMTgpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoNDYwKSwgMClcbiAgICBjdHgubGluZVRvKGNhbCg0NjApLCBjYWwoMzYpICogcm93KVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoNTg1KSwgMClcbiAgICBjdHgubGluZVRvKGNhbCg1ODUpLCBjYWwoMzYpICogcm93KVxuXG4gICAgY3R4LnN0cm9rZSgpXG5cbiAgICAvLyDooajlpLRcbiAgICBjdHguc2V0Rm9udFNpemUoY2FsKDE1KSlcbiAgICBjdHguZmlsbFRleHQoJ+aRmOimgScsIGNhbCgxMDApLCBjYWwoMjQpKVxuICAgIGN0eC5maWxsVGV4dCgn5YCf5pa56YeR6aKdJywgY2FsKDUyMiksIGNhbCgyNCkpXG4gICAgY3R4LmZpbGxUZXh0KCfotLfmlrnph5Hpop0nLCBjYWwoNjQ2KSwgY2FsKDI0KSlcblxuICAgIGN0eC5zZXRGb250U2l6ZShjYWwoMTQpKVxuICAgIGN0eC5maWxsVGV4dCgn5Lya6K6h56eR55uuJywgY2FsKDMzMCksIGNhbCgxNSkpXG4gICAgY3R4LmZpbGxUZXh0KCfnp5Hnm67ku6PnoIEnLCBjYWwoMjY1KSwgY2FsKDMzKSlcbiAgICBjdHguZmlsbFRleHQoJ+enkeebruWQjeensCcsIGNhbCgzOTUpLCBjYWwoMzMpKVxuXG4gICAgLy8g5YaF5a656YOo5YiGXG4gICAgLy8g5pGY6KaB5YaF5a65XG4gICAgY3R4LnRyYW5zbGF0ZSgwLCBjYWwoMzYpKVxuICAgIGxpbmVXcmFwKGN0eCwgdGhpcy5yZXN1bHQuc3VtbWFyeSwgY2FsKDE0KSwgY2FsKDE2KSwgY2FsKDE2MCksIGNhbCgxMDApLCBjYWwoMTApKVxuXG4gICAgLy8g54mp5ZOB44CB5pyN5Yqh562JXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlc3VsdC5zdWJqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LnN1YmplY3RzW2ldLnN1YmplY3RDb2RlLCBjYWwoMjY1KSwgY2FsKDI0KSArIGNhbCgzNikgKiBpKVxuICAgICAgaWYgKGN0eC5tZWFzdXJlVGV4dCh0aGlzLnJlc3VsdC5zdWJqZWN0c1tpXS5zdWJqZWN0TmFtZSkud2lkdGggPj0gY2FsKDEzMCkgKiAwLjgpIHtcbiAgICAgICAgbGluZVdyYXAoY3R4LCB0aGlzLnJlc3VsdC5zdWJqZWN0c1tpXS5zdWJqZWN0TmFtZSwgY2FsKDE0KSwgY2FsKDE0KSwgY2FsKDEzMCksIGNhbCgzOTUpLCBjYWwoMikgKyBjYWwoMzYpICogaSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5zdWJqZWN0c1tpXS5zdWJqZWN0TmFtZSwgY2FsKDM5NSksIGNhbCgyNCkgKyBjYWwoMzYpICogaSlcbiAgICAgIH1cbiAgICAgIGlmIChpID09PSB0aGlzLnJlc3VsdC5zdWJqZWN0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5zdWJqZWN0c1tpXS5hbW91bnQsIGNhbCg2NDYpLCBjYWwoMjQpICsgY2FsKDM2KSAqIGkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuc3ViamVjdHNbaV0uYW1vdW50LCBjYWwoNTIyKSwgY2FsKDI0KSArIGNhbCgzNikgKiBpKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOWQiOiuoVxuICAgIGN0eC50cmFuc2xhdGUoMCwgY2FsKDM2KSAqIHRoaXMucmVzdWx0LnN1YmplY3RzLmxlbmd0aClcbiAgICBjdHguZmlsbFRleHQoJ+WQiOiuoScsIGNhbCgyMzApLCBjYWwoMjQpKVxuICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5pbnZvaWNlLmFtb3VudEluRmlndWVycywgY2FsKDUyMiksIGNhbCgyNCkpXG4gICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0Lmludm9pY2UuYW1vdW50SW5GaWd1ZXJzLCBjYWwoNjQ2KSwgY2FsKDI0KSlcblxuICAgIC8vIC8vIOS/oeaBr+agj1xuICAgIGN0eC5iZWdpblBhdGgoKVxuICAgIC8vIOi+ueahhlxuICAgIGN0eC50cmFuc2xhdGUoMCwgY2FsKDM2KSlcbiAgICBsZXQgbGVmdFRpdGxlID0gWyfkvJrorqHmgLvnrqEnLCAn5a6i5oi3JywgJ+S+m+W6lOWVhicsICfpobnnm64nXVxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykge1xuICAgICAgY3R4LmZpbGxUZXh0KGxlZnRUaXRsZVtpIC0gMV0sIGNhbCg1MCksIGNhbCgyNCkgKyAoaSAtIDEpICogY2FsKDM2KSlcbiAgICAgIGN0eC5tb3ZlVG8oMCwgY2FsKDM2KSAqIGkpXG4gICAgICBjdHgubGluZVRvKGNhbCg3MTApLCBjYWwoMzYpICogaSlcbiAgICB9XG5cbiAgICBjdHgubW92ZVRvKGNhbCgzNTUpLCBjYWwoMzYpKVxuICAgIGN0eC5saW5lVG8oY2FsKDM1NSksIGNhbCgzNikgKiA0KVxuICAgIGN0eC5maWxsVGV4dCgn5ZGY5belJywgY2FsKDQwNSksIGNhbCgzNikgKyBjYWwoMjQpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoNDU1KSwgY2FsKDM2KSlcbiAgICBjdHgubGluZVRvKGNhbCg0NTUpLCBjYWwoMzYpICogNClcbiAgICBjdHguZmlsbFRleHQoJ+WFtuS7luesrOS4ieaWuScsIGNhbCg0MDUpLCBjYWwoMzYpICogMiArIGNhbCgyNCkpXG5cbiAgICBjdHgubW92ZVRvKGNhbCg3MTApLCAwKVxuICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikgKiA0KVxuICAgIGN0eC5maWxsVGV4dCgn5Y+R56Wo5Y+356CBJywgY2FsKDQwNSksIGNhbCgzNikgKiAzICsgY2FsKDI0KSlcblxuICAgIGN0eC5tb3ZlVG8oMCwgMClcbiAgICBjdHgubGluZVRvKDAsIGNhbCgzNikgKiA0KVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMTAwKSwgMClcbiAgICBjdHgubGluZVRvKGNhbCgxMDApLCBjYWwoMzYpICogNClcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDE5MCksIDApXG4gICAgY3R4LmxpbmVUbyhjYWwoMTkwKSwgY2FsKDM2KSlcblxuICAgIGxldCB0aXRsZSA9IFsn6K6w6LSmJywgJ+WHuue6sycsICflrqHmoLgnLCAn5Yi25Y2VJ11cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIHtcbiAgICAgIGN0eC5maWxsVGV4dCh0aXRsZVtpIC0gMV0sIGNhbCgxOTAgKyAxMzAgKiAoaSAtIDEpICsgMjUpLCBjYWwoMjQpIClcbiAgICAgIGN0eC5tb3ZlVG8oY2FsKDE5MCArIDEzMCAqIChpIC0gMSkgKyA1MCksIDApXG4gICAgICBjdHgubGluZVRvKGNhbCgxOTAgKyAxMzAgKiAoaSAtIDEpICsgNTApLCBjYWwoMzYpKVxuICAgICAgY3R4Lm1vdmVUbyhjYWwoMTkwICsgMTMwICogKGkgLSAxKSArIDEzMCksIDApXG4gICAgICBjdHgubGluZVRvKGNhbCgxOTAgKyAxMzAgKiAoaSAtIDEpICsgMTMwKSwgY2FsKDM2KSlcbiAgICB9XG4gICAgY3R4LnN0cm9rZSgpXG5cbiAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQucHJlcGFyZWRCeSwgY2FsKDE5MCArIDEzMCAqIDMgKyA5MCksIGNhbCgyNCkpXG4gICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0Lmludm9pY2UuaW52b2ljZU51bSwgY2FsKDU4MiksIGNhbCgyNCkgKyBjYWwoMzYpICogMylcbiAgICB0aGlzLnJlc3VsdC5wcm9qZWN0ICYmIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5wcm9qZWN0LCBjYWwoMjI4KSwgY2FsKDI0KSArIGNhbCgzNikgKiAzKVxuXG4gICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LnN1cHBsaWVyLCBjYWwoMjI4KSwgY2FsKDI0KSArIGNhbCgzNikgKiAyKVxuICAgIHRoaXMucmVzdWx0LmVtcGxveWVlTmFtZSAmJiBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuZW1wbG95ZWVOYW1lLCBjYWwoNTgyKSwgY2FsKDI0KSArIGNhbCgzNikpXG4gICAgdGhpcy5yZXN1bHQudGhpcmRQYXJ0eU5hbWUgJiYgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LnRoaXJkUGFydHlOYW1lLCBjYWwoNTgyKSwgY2FsKDI0KSArIGNhbCgzNikgKiAyKVxuXG4gICAgY3R4LmRyYXcodHJ1ZSwgKCkgPT4ge1xuICAgICAgdGhpcy5pbWFnZUhlaWdodCA9IGNhbCgxMjApICsgKDcgKyB0aGlzLnJlc3VsdC5zdWJqZWN0cy5sZW5ndGgpICogY2FsKDM2KVxuICAgICAgd3guY2FudmFzVG9UZW1wRmlsZVBhdGgoe1xuICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgeTogMCxcbiAgICAgICAgICB3aWR0aDogY2FsKDc1MCksXG4gICAgICAgICAgaGVpZ2h0OiBjYWwoMTIwKSArICg3ICsgdGhpcy5yZXN1bHQuc3ViamVjdHMubGVuZ3RoKSAqIGNhbCgzNiksXG4gICAgICAgICAgZmlsZVR5cGU6ICdqcGcnLFxuICAgICAgICAgIHF1YWxpdHk6IDAuNSxcbiAgICAgICAgICBjYW52YXNJZDogJ2NhbnZhc0lkJywvL2NhbnZhc0lk5ZKM5qCH562+6YeM6Z2i55qEaWTlr7nlupRcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgIHd4LmhpZGVUb2FzdCgpXG4gICAgICAgICAgICAgIC8v5bCG6I635Y+W5Yiw55qE5Zu+54mH5Li05pe26Lev5b6Ec2V05YiwY2FudmFzU2F2ZWltZ+S4rVxuICAgICAgICAgICAgICB0aGlzLnRlbXBGaWxlUGF0aCA9IHJlcy50ZW1wRmlsZVBhdGhcbiAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDogKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBvblVubG9hZCAoKSB7XG4gICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgIGRlbHRhOiAxXG4gICAgfSlcbiAgfVxufVxuIl19