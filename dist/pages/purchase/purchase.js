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
                      // 为了与返回按钮同步
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
                //  this.result = {
                //   "summary": "这是业务描述",
                //   "preparedBy": "c",
                //   "client": "个",
                //   "supplier": "广东苏宁云商磷售有限公司",
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
                //       "subjectName": "主营业务收入",
                //       "subjectCode": "5001",
                //       "amount": "12345.89"
                //     }, {
                //       "subjectName": "应交税费 - 增值税 - 销项税",
                //       "subjectCode": "5001",
                //       "amount": "0.03"
                //     }, {
                //       "subjectName": "主营业务收入",
                //       "subjectCode": "5001",
                //       "amount": "12345.80"
                //     }, {
                //       "subjectName": "应交税费 - 增值税 - 销项税",
                //       "subjectCode": "5001",
                //       "amount": "0.00"
                //     },
                //     {
                //       "subjectName": "应收账款",
                //       "subjectCode": "1122",
                //       "amount": "5.15"
                //     },
                //   ],
                //   "accountingSupervisor": null,
                //   "bookkeeper": null,
                //   "cashier": null,
                //   "auditor": null,
                //   "id": 7,
                //   "voucherDate": "2018-11-22T03:14:28.666Z",
                //   "createdAt": "2018-11-22T03:14:28.666Z",
                //   "updatedAt": "2018-11-22T03:14:28.666Z"
                // }

                // 获取屏幕宽
                _context2.next = 4;
                return _wepy2.default.getSystemInfo();

              case 4:
                _ref6 = _context2.sent;
                windowWidth = _ref6.windowWidth;

                this.width = windowWidth;
                this.$apply();

                // 函数定义区域 ======================================
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

                // canvas绘制区域 =======================================


                ctx = wx.createCanvasContext('canvasId');


                ctx.setFillStyle('white');
                ctx.fillRect(cal(0), cal(0), cal(750), cal(120) + (7 + this.result.subjects.length) * cal(36));
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

                // 信息栏
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


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Purchase , 'pages/purchase/purchase'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlLmpzIl0sIm5hbWVzIjpbIlB1cmNoYXNlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwid2lkdGgiLCJoZWlnaHQiLCJyZXN1bHQiLCJ0ZW1wRmlsZVBhdGgiLCJpbWFnZUhlaWdodCIsIm1ldGhvZHMiLCJoYW5sZGVTYXZlUGljIiwid2VweSIsImdldEltYWdlSW5mbyIsInNyYyIsInBhdGgiLCJzYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtIiwiZmlsZVBhdGgiLCJlcnJNc2ciLCJ3eCIsInNob3dUb2FzdCIsInRpdGxlIiwic2V0VGltZW91dCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiaGFuZGxlQ2FuY2VsIiwib3B0aW9ucyIsImljb24iLCJkdXJhdGlvbiIsIkpTT04iLCJwYXJzZSIsImdldFN5c3RlbUluZm8iLCJ3aW5kb3dXaWR0aCIsIiRhcHBseSIsImNhbCIsInB4IiwibGluZVdyYXAiLCJjdHgiLCJzdHIiLCJmb250c2l6ZSIsImxpbmVoZWlnaHQiLCJ4IiwieSIsInNldEZvbnRTaXplIiwidGV4dEFyciIsImluZGV4IiwiaSIsImxlbmd0aCIsIm1lYXN1cmVUZXh0Iiwic3Vic3RyaW5nIiwicHVzaCIsImZpbGxUZXh0IiwiY3JlYXRlQ2FudmFzQ29udGV4dCIsInNldEZpbGxTdHlsZSIsImZpbGxSZWN0Iiwic3ViamVjdHMiLCJzZXRUZXh0QWxpZ24iLCJkYXRlIiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwidHJhbnNsYXRlIiwiaWQiLCJyb3ciLCJzZXRTdHJva2VTdHlsZSIsInN0cm9rZVJlY3QiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJzdW1tYXJ5Iiwic3ViamVjdENvZGUiLCJzdWJqZWN0TmFtZSIsImFtb3VudCIsImludm9pY2UiLCJhbW91bnRJbkZpZ3VlcnMiLCJiZWdpblBhdGgiLCJsZWZ0VGl0bGUiLCJwcmVwYXJlZEJ5IiwiaW52b2ljZU51bSIsInByb2plY3QiLCJzdXBwbGllciIsImVtcGxveWVlTmFtZSIsInRoaXJkUGFydHlOYW1lIiwiZHJhdyIsImNhbnZhc1RvVGVtcEZpbGVQYXRoIiwiZmlsZVR5cGUiLCJxdWFsaXR5IiwiY2FudmFzSWQiLCJzdWNjZXNzIiwicmVzIiwiaGlkZVRvYXN0IiwiZmFpbCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBSWJDLEksR0FBTztBQUNMQyxhQUFPLENBREY7QUFFTEMsY0FBUSxDQUZIO0FBR0xDLGNBQVEsRUFISDtBQUlMQyxvQkFBYyxFQUpUO0FBS0xDLG1CQUFhO0FBTFIsSyxRQVFQQyxPLEdBQVU7QUFDRkMsbUJBREU7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFFaUJDLGVBQUtDLFlBQUwsQ0FBa0IsRUFBQ0MsS0FBSyxLQUFLTixZQUFYLEVBQWxCLENBRmpCOztBQUFBO0FBQUE7QUFFRU8sc0JBRkYsU0FFRUEsSUFGRjtBQUFBO0FBQUEseUJBR21CSCxlQUFLSSxzQkFBTCxDQUE0QixFQUFDQyxVQUFVRixJQUFYLEVBQTVCLENBSG5COztBQUFBO0FBQUE7QUFHRUcsd0JBSEYsU0FHRUEsTUFIRjs7QUFJTixzQkFBSUEsV0FBVywyQkFBZixFQUE0QztBQUMxQ0MsdUJBQUdDLFNBQUgsQ0FBYTtBQUNYQyw2QkFBTztBQURJLHFCQUFiO0FBR0FDLCtCQUFXLFlBQU07QUFDZjtBQUNBSCx5QkFBR0ksWUFBSCxDQUFnQjtBQUNkQywrQkFBTztBQURPLHVCQUFoQjtBQUdELHFCQUxELEVBS0csSUFMSDtBQU1EOztBQWRLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FB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O0FBQ0EsNkJBQUt0RixZQUFMLEdBQW9CcUYsSUFBSXJGLFlBQXhCO0FBQ0EsNkJBQUt5QixNQUFMO0FBQ0gscUJBYm1CO0FBY3BCOEQsMEJBQU0sY0FBQ0MsR0FBRCxFQUFTO0FBQ2JDLDhCQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDRDtBQWhCbUIsbUJBQXhCO0FBa0JELGlCQXBCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQXVCVTtBQUNWN0UsU0FBR0ksWUFBSCxDQUFnQjtBQUNkQyxlQUFPO0FBRE8sT0FBaEI7QUFHRDs7OztFQXBWbUNaLGVBQUt1RixJOztrQkFBdEJuRyxRIiwiZmlsZSI6InB1cmNoYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQdXJjaGFzZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Yet6K+BJ1xuICB9XG4gIGNvbXBvbmVudHMgPSB7XG5cbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIHJlc3VsdDoge30sXG4gICAgdGVtcEZpbGVQYXRoOiAnJyxcbiAgICBpbWFnZUhlaWdodDogMCxcbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgYXN5bmMgaGFubGRlU2F2ZVBpYyAoKSB7XG4gICAgICBjb25zdCB7IHBhdGggfSA9IGF3YWl0IHdlcHkuZ2V0SW1hZ2VJbmZvKHtzcmM6IHRoaXMudGVtcEZpbGVQYXRofSlcbiAgICAgIGNvbnN0IHsgZXJyTXNnIH0gPSBhd2FpdCB3ZXB5LnNhdmVJbWFnZVRvUGhvdG9zQWxidW0oe2ZpbGVQYXRoOiBwYXRofSlcbiAgICAgIGlmIChlcnJNc2cgPT09ICdzYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtOm9rJykge1xuICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn5L+d5a2Y5oiQ5YqfJyxcbiAgICAgICAgfSlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgLy8g5Li65LqG5LiO6L+U5Zue5oyJ6ZKu5ZCM5q2lXG4gICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgIGRlbHRhOiAxXG4gICAgICAgICAgfSlcbiAgICAgICAgfSwgMTUwMClcbiAgICAgIH1cbiAgICB9LFxuICAgIGhhbmRsZUNhbmNlbCAoKSB7XG4gICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICBkZWx0YTogMVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xuICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgIHRpdGxlOiAn5q2j5Zyo55Sf5oiQ5Yet6K+BJyxcbiAgICAgICBpY29uOiAnbG9hZGluZycsXG4gICAgICAgZHVyYXRpb246IDEwMDAwXG4gICAgIH0pXG4gICAgdGhpcy5yZXN1bHQgPSBKU09OLnBhcnNlKG9wdGlvbnMucmVzdWx0KVxuICAgLy8gIHRoaXMucmVzdWx0ID0ge1xuICAgLy8gICBcInN1bW1hcnlcIjogXCLov5nmmK/kuJrliqHmj4/ov7BcIixcbiAgIC8vICAgXCJwcmVwYXJlZEJ5XCI6IFwiY1wiLFxuICAgLy8gICBcImNsaWVudFwiOiBcIuS4qlwiLFxuICAgLy8gICBcInN1cHBsaWVyXCI6IFwi5bm/5Lic6IuP5a6B5LqR5ZWG56O35ZSu5pyJ6ZmQ5YWs5Y+4XCIsXG4gICAvLyAgIFwicHJvamVjdFwiOiBcIui/meaYr+S4muWKoeaJgOWxnumhueebrlwiLFxuICAgLy8gICBcImVtcGxveWVlTmFtZVwiOiBcInhpdeWwj+aYjlwiLFxuICAgLy8gICBcInRoaXJkUGFydHlOYW1lXCI6IFwiXCIsXG4gICAvLyAgIFwiaW52b2ljZVwiOiB7XG4gICAvLyAgICAgXCJwdXJjaGFzZXJOYW1lXCI6IFwi6Iiq5aSp5L+h5oGv5Lu95pyJ6ZmQ5YWs5Y+4XCIsXG4gICAvLyAgICAgXCJzZWxsZXJOYW1lXCI6IFwi6Iiq5aSp5L+h5oGv6IKh5Lu95pyJ6ZmQ5YWs5Y+4XCIsXG4gICAvLyAgICAgXCJpbnZvaWNlVHlwZVwiOiAwLFxuICAgLy8gICAgIFwiaW52b2ljZU51bVwiOiBcIjAwNTkzODAzXCIsXG4gICAvLyAgICAgXCJpbnZvaWNlRGF0ZVwiOiBcIjIwMTQtMTItMzFUMTY6MDA6MDAuMDAwWlwiLFxuICAgLy8gICAgIFwiYW1vdW50SW5GaWd1ZXJzXCI6IFwiNS4xNVwiLFxuICAgLy8gICAgIFwic2VydmljZURldGFpbFwiOiBbXG4gICAvLyAgICAgICB7XG4gICAvLyAgICAgICAgIFwiY29tbW9kaXR5TmFtZVwiOiBcIui0p+eJqeWPr+S5kFwiLFxuICAgLy8gICAgICAgICBcImNvbW1vZGl0eUFtb3VudFwiOiBcIjEyMzQ1Ljg5XCIsXG4gICAvLyAgICAgICAgIFwiY29tbW9kaXR5VGF4XCI6IFwiMC4wM1wiXG4gICAvLyAgICAgICB9LCB7XG4gICAvLyAgICAgICAgIFwiY29tbW9kaXR5TmFtZVwiOiBcIui0p+eJqeWPr+S5kFwiLFxuICAgLy8gICAgICAgICBcImNvbW1vZGl0eUFtb3VudFwiOiBcIjEyMzQ1LjgwXCIsXG4gICAvLyAgICAgICAgIFwiY29tbW9kaXR5VGF4XCI6IFwiMC4wMFwiXG4gICAvLyAgICAgICB9LCB7XG4gICAvLyAgICAgICAgIFwiY29tbW9kaXR5TmFtZVwiOiBcIui0p+eJqeWPr+S5kFwiLFxuICAgLy8gICAgICAgICBcImNvbW1vZGl0eUFtb3VudFwiOiBcIjEyMzQ1Ljg5XCIsXG4gICAvLyAgICAgICAgIFwiY29tbW9kaXR5VGF4XCI6IFwiMC4wM1wiXG4gICAvLyAgICAgICB9LCB7XG4gICAvLyAgICAgICAgIFwiY29tbW9kaXR5TmFtZVwiOiBcIui0p+eJqeWPr+S5kFwiLFxuICAgLy8gICAgICAgICBcImNvbW1vZGl0eUFtb3VudFwiOiBcIjEyMzQ1LjgwXCIsXG4gICAvLyAgICAgICAgIFwiY29tbW9kaXR5VGF4XCI6IFwiMC4wM1wiXG4gICAvLyAgICAgICB9LCB7XG4gICAvLyAgICAgICAgIFwiY29tbW9kaXR5TmFtZVwiOiBcIui0p+eJqeWPr+S5kFwiLFxuICAgLy8gICAgICAgICBcImNvbW1vZGl0eUFtb3VudFwiOiBcIjEyMzQ1Ljg5XCIsXG4gICAvLyAgICAgICAgIFwiY29tbW9kaXR5VGF4XCI6IFwiMC4wM1wiXG4gICAvLyAgICAgICB9XG4gICAvLyAgICAgXSxcbiAgIC8vICAgICBcImRpc2NyaXB0aW9uXCI6IFwi6L+Z5piv5Lia5Yqh5o+P6L+wXCIsXG4gICAvLyAgICAgXCJwcm9qZWN0XCI6IFwi6L+Z5piv5Lia5Yqh5omA5bGe6aG555uuXCIsXG4gICAvLyAgICAgXCJpZGVudGl0eVwiOiAxLFxuICAgLy8gICAgIFwid2hvUGF5c1wiOiAxLFxuICAgLy8gICAgIFwiZW1wbG95ZWVOYW1lXCI6IFwieGl15bCP5piOXCIsXG4gICAvLyAgICAgXCJ0aGlyZFBhcnR5TmFtZVwiOiBcIlwiLFxuICAgLy8gICAgIFwicmVhc29uXCI6IDEsXG4gICAvLyAgICAgXCJpZFwiOiA1MyxcbiAgIC8vICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMTgtMTEtMjJUMDM6Mjc6MjQuNjQwWlwiLFxuICAgLy8gICAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0xMS0yMlQwMzoyNzoyNC42NDBaXCJcbiAgIC8vICAgfSxcbiAgIC8vICAgXCJzdWJqZWN0c1wiOiBbXG4gICAvLyAgICAge1xuICAgLy8gICAgICAgXCJzdWJqZWN0TmFtZVwiOiBcIuS4u+iQpeS4muWKoeaUtuWFpVwiLFxuICAgLy8gICAgICAgXCJzdWJqZWN0Q29kZVwiOiBcIjUwMDFcIixcbiAgIC8vICAgICAgIFwiYW1vdW50XCI6IFwiMTIzNDUuODlcIlxuICAgLy8gICAgIH0sIHtcbiAgIC8vICAgICAgIFwic3ViamVjdE5hbWVcIjogXCLlupTkuqTnqI7otLkgLSDlop7lgLznqI4gLSDplIDpobnnqI5cIixcbiAgIC8vICAgICAgIFwic3ViamVjdENvZGVcIjogXCI1MDAxXCIsXG4gICAvLyAgICAgICBcImFtb3VudFwiOiBcIjAuMDNcIlxuICAgLy8gICAgIH0sIHtcbiAgIC8vICAgICAgIFwic3ViamVjdE5hbWVcIjogXCLkuLvokKXkuJrliqHmlLblhaVcIixcbiAgIC8vICAgICAgIFwic3ViamVjdENvZGVcIjogXCI1MDAxXCIsXG4gICAvLyAgICAgICBcImFtb3VudFwiOiBcIjEyMzQ1LjgwXCJcbiAgIC8vICAgICB9LCB7XG4gICAvLyAgICAgICBcInN1YmplY3ROYW1lXCI6IFwi5bqU5Lqk56iO6LS5IC0g5aKe5YC856iOIC0g6ZSA6aG556iOXCIsXG4gICAvLyAgICAgICBcInN1YmplY3RDb2RlXCI6IFwiNTAwMVwiLFxuICAgLy8gICAgICAgXCJhbW91bnRcIjogXCIwLjAwXCJcbiAgIC8vICAgICB9LFxuICAgLy8gICAgIHtcbiAgIC8vICAgICAgIFwic3ViamVjdE5hbWVcIjogXCLlupTmlLbotKbmrL5cIixcbiAgIC8vICAgICAgIFwic3ViamVjdENvZGVcIjogXCIxMTIyXCIsXG4gICAvLyAgICAgICBcImFtb3VudFwiOiBcIjUuMTVcIlxuICAgLy8gICAgIH0sXG4gICAvLyAgIF0sXG4gICAvLyAgIFwiYWNjb3VudGluZ1N1cGVydmlzb3JcIjogbnVsbCxcbiAgIC8vICAgXCJib29ra2VlcGVyXCI6IG51bGwsXG4gICAvLyAgIFwiY2FzaGllclwiOiBudWxsLFxuICAgLy8gICBcImF1ZGl0b3JcIjogbnVsbCxcbiAgIC8vICAgXCJpZFwiOiA3LFxuICAgLy8gICBcInZvdWNoZXJEYXRlXCI6IFwiMjAxOC0xMS0yMlQwMzoxNDoyOC42NjZaXCIsXG4gICAvLyAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxOC0xMS0yMlQwMzoxNDoyOC42NjZaXCIsXG4gICAvLyAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0xMS0yMlQwMzoxNDoyOC42NjZaXCJcbiAgIC8vIH1cblxuICAgIC8vIOiOt+WPluWxj+W5leWuvVxuICAgIGNvbnN0IHsgd2luZG93V2lkdGggfSA9IGF3YWl0IHdlcHkuZ2V0U3lzdGVtSW5mbygpXG4gICAgdGhpcy53aWR0aCA9IHdpbmRvd1dpZHRoXG4gICAgdGhpcy4kYXBwbHkoKVxuXG5cbi8vIOWHveaVsOWumuS5ieWMuuWfnyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIOiuvue9ruS4gOS4quWfuuWHhuavlOS+i1xuICAgIGxldCBjYWwgPSAocHgpID0+IHtcbiAgICAgIHJldHVybiAgcHggLyA3NTAgKiB0aGlzLndpZHRoXG4gICAgfVxuXG4gICAgLy8gY2FudmFz5o2i6KGM5pi+56S6XG4gICAgbGV0IGxpbmVXcmFwID0gKGN0eCwgc3RyLCBmb250c2l6ZSwgbGluZWhlaWdodCwgd2lkdGgsIHgsIHkpID0+IHtcbiAgICAgIGN0eC5zZXRGb250U2l6ZShmb250c2l6ZSlcbiAgICAgIGxldCB0ZXh0QXJyID0gW11cbiAgICAgIGxldCBpbmRleCA9IDBcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChjdHgubWVhc3VyZVRleHQoc3RyLnN1YnN0cmluZyhpbmRleCwgaSkpLndpZHRoID49IHdpZHRoICogMC44KSB7XG4gICAgICAgICAgdGV4dEFyci5wdXNoKHN0ci5zdWJzdHJpbmcoaW5kZXgsIGkpKVxuICAgICAgICAgIGluZGV4ID0gaVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRleHRBcnIucHVzaChzdHIuc3Vic3RyaW5nKGluZGV4KSlcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0QXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGN0eC5maWxsVGV4dCh0ZXh0QXJyW2ldLCB4LCB5ICsgbGluZWhlaWdodCAqIChpICsgMSkpXG4gICAgICB9XG4gICAgfVxuXG4vLyBjYW52YXPnu5jliLbljLrln58gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY29uc3QgY3R4ID0gd3guY3JlYXRlQ2FudmFzQ29udGV4dCgnY2FudmFzSWQnKVxuXG4gICAgY3R4LnNldEZpbGxTdHlsZSgnd2hpdGUnKVxuICAgIGN0eC5maWxsUmVjdChjYWwoMCksIGNhbCgwKSwgY2FsKDc1MCksIGNhbCgxMjApICsgKDcgKyB0aGlzLnJlc3VsdC5zdWJqZWN0cy5sZW5ndGgpICogY2FsKDM2KSlcbiAgICBjdHguc2V0RmlsbFN0eWxlKCdibGFjaycpXG5cbiAgICAvLyDmoIfpophcbiAgICBjdHguc2V0Rm9udFNpemUoY2FsKDIzKSlcbiAgICBjdHguc2V0VGV4dEFsaWduKCdjZW50ZXInKVxuICAgIGN0eC5maWxsVGV4dCgn6K6w6LSm5Yet6K+BJywgY2FsKDM3NSksIGNhbCg0MCkpXG5cbiAgICAvLyDml7bpl7Tlj4rnvJblj7dcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKClcbiAgICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKVxuICAgIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDFcbiAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKClcbiAgICBjdHgudHJhbnNsYXRlKGNhbCg3MzApLCBjYWwoNzApKVxuICAgIGN0eC5zZXRGb250U2l6ZShjYWwoMTMpKVxuICAgIGN0eC5zZXRUZXh0QWxpZ24oJ3JpZ2h0JylcbiAgICBjdHguZmlsbFRleHQoeWVhciArICcg5bm0ICcgKyBtb250aCArICcg5pyIICcgKyBkYXkgKyAnIOWPtyAgICAgIOiusOWtl+esrCAnICsgdGhpcy5yZXN1bHQuaWQgKyAnIOWPtycsIGNhbCgwKSwgY2FsKDIyKSlcbiAgICBjdHguc2V0VGV4dEFsaWduKCdjZW50ZXInKVxuICAgIGN0eC5zZXRUZXh0QWxpZ24oJ2NlbnRlcicpXG4gICAgY3R4LnNldFRleHRBbGlnbignY2VudGVyJylcblxuICAgIC8vIOihqOagvFxuICAgIC8vIOWkluahhlxuICAgIGxldCByb3cgPSB0aGlzLnJlc3VsdC5zdWJqZWN0cy5sZW5ndGggKyAyXG4gICAgY3R4LnRyYW5zbGF0ZShjYWwoLTcxMCksIGNhbCg1MCkpXG4gICAgY3R4LnNldFN0cm9rZVN0eWxlKCcjMDAwJylcbiAgICBjdHguc3Ryb2tlUmVjdCgwLCAwLCBjYWwoNzEwKSwgY2FsKDM2KSAqIHJvdylcblxuICAgIC8vIOWGheahhlxuICAgIGZvciAobGV0IGkgPSAyOyBpIDwgcm93IC0gMTsgaSsrKSB7XG4gICAgICBjdHguc2V0U3Ryb2tlU3R5bGUoJyM5OTknKVxuICAgICAgY3R4Lm1vdmVUbyhjYWwoMjAwKSwgY2FsKDM2KSAqIGkpXG4gICAgICBjdHgubGluZVRvKGNhbCg3MTApLCBjYWwoMzYpICogaSlcbiAgICAgIGN0eC5zdHJva2UoKVxuICAgIH1cblxuICAgIGN0eC5tb3ZlVG8oMCwgY2FsKDM2KSlcbiAgICBjdHgubGluZVRvKGNhbCg3MTApLCBjYWwoMzYpKVxuXG4gICAgY3R4Lm1vdmVUbygwLCBjYWwoMzYpICogKHJvdyAtMSkpXG4gICAgY3R4LmxpbmVUbyhjYWwoNzEwKSwgY2FsKDM2KSAqIChyb3cgLTEpKVxuXG4gICAgY3R4Lm1vdmVUbygwLCBjYWwoMzYpICogcm93KVxuICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikgKiByb3cpXG5cbiAgICBjdHgubW92ZVRvKGNhbCgyMDApLCAwKVxuICAgIGN0eC5saW5lVG8oY2FsKDIwMCksIGNhbCgzNikgKiAocm93IC0xKSlcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDMzMCksIGNhbCgxOCkpXG4gICAgY3R4LmxpbmVUbyhjYWwoMzMwKSwgY2FsKDM2KSAqIChyb3cgLSAxKSlcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDIwMCksIGNhbCgxOCkpXG4gICAgY3R4LmxpbmVUbyhjYWwoNDYwKSwgY2FsKDE4KSlcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDQ2MCksIDApXG4gICAgY3R4LmxpbmVUbyhjYWwoNDYwKSwgY2FsKDM2KSAqIHJvdylcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDU4NSksIDApXG4gICAgY3R4LmxpbmVUbyhjYWwoNTg1KSwgY2FsKDM2KSAqIHJvdylcblxuICAgIGN0eC5zdHJva2UoKVxuXG4gICAgLy8g6KGo5aS0XG4gICAgY3R4LnNldEZvbnRTaXplKGNhbCgxNSkpXG4gICAgY3R4LmZpbGxUZXh0KCfmkZjopoEnLCBjYWwoMTAwKSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQoJ+WAn+aWuemHkeminScsIGNhbCg1MjIpLCBjYWwoMjQpKVxuICAgIGN0eC5maWxsVGV4dCgn6LS35pa56YeR6aKdJywgY2FsKDY0NiksIGNhbCgyNCkpXG5cbiAgICBjdHguc2V0Rm9udFNpemUoY2FsKDE0KSlcbiAgICBjdHguZmlsbFRleHQoJ+S8muiuoeenkeebricsIGNhbCgzMzApLCBjYWwoMTUpKVxuICAgIGN0eC5maWxsVGV4dCgn56eR55uu5Luj56CBJywgY2FsKDI2NSksIGNhbCgzMykpXG4gICAgY3R4LmZpbGxUZXh0KCfnp5Hnm67lkI3np7AnLCBjYWwoMzk1KSwgY2FsKDMzKSlcblxuICAgIC8vIOWGheWuuemDqOWIhlxuICAgIC8vIOaRmOimgeWGheWuuVxuICAgIGN0eC50cmFuc2xhdGUoMCwgY2FsKDM2KSlcbiAgICBsaW5lV3JhcChjdHgsIHRoaXMucmVzdWx0LnN1bW1hcnksIGNhbCgxNCksIGNhbCgxNiksIGNhbCgxNjApLCBjYWwoMTAwKSwgY2FsKDEwKSlcblxuICAgIC8vIOeJqeWTgeOAgeacjeWKoeetiVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yZXN1bHQuc3ViamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5zdWJqZWN0c1tpXS5zdWJqZWN0Q29kZSwgY2FsKDI2NSksIGNhbCgyNCkgKyBjYWwoMzYpICogaSlcbiAgICAgIGlmIChjdHgubWVhc3VyZVRleHQodGhpcy5yZXN1bHQuc3ViamVjdHNbaV0uc3ViamVjdE5hbWUpLndpZHRoID49IGNhbCgxMzApICogMC44KSB7XG4gICAgICAgIGxpbmVXcmFwKGN0eCwgdGhpcy5yZXN1bHQuc3ViamVjdHNbaV0uc3ViamVjdE5hbWUsIGNhbCgxNCksIGNhbCgxNCksIGNhbCgxMzApLCBjYWwoMzk1KSwgY2FsKDIpICsgY2FsKDM2KSAqIGkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuc3ViamVjdHNbaV0uc3ViamVjdE5hbWUsIGNhbCgzOTUpLCBjYWwoMjQpICsgY2FsKDM2KSAqIGkpXG4gICAgICB9XG4gICAgICBpZiAoaSA9PT0gdGhpcy5yZXN1bHQuc3ViamVjdHMubGVuZ3RoIC0gMSkge1xuICAgICAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuc3ViamVjdHNbaV0uYW1vdW50LCBjYWwoNjQ2KSwgY2FsKDI0KSArIGNhbCgzNikgKiBpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LnN1YmplY3RzW2ldLmFtb3VudCwgY2FsKDUyMiksIGNhbCgyNCkgKyBjYWwoMzYpICogaSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDlkIjorqFcbiAgICBjdHgudHJhbnNsYXRlKDAsIGNhbCgzNikgKiB0aGlzLnJlc3VsdC5zdWJqZWN0cy5sZW5ndGgpXG4gICAgY3R4LmZpbGxUZXh0KCflkIjorqEnLCBjYWwoMjMwKSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuaW52b2ljZS5hbW91bnRJbkZpZ3VlcnMsIGNhbCg1MjIpLCBjYWwoMjQpKVxuICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5pbnZvaWNlLmFtb3VudEluRmlndWVycywgY2FsKDY0NiksIGNhbCgyNCkpXG5cbiAgICAvLyDkv6Hmga/moI9cbiAgICBjdHguYmVnaW5QYXRoKClcbiAgICAvLyDovrnmoYZcbiAgICBjdHgudHJhbnNsYXRlKDAsIGNhbCgzNikpXG4gICAgbGV0IGxlZnRUaXRsZSA9IFsn5Lya6K6h5oC7566hJywgJ+WuouaItycsICfkvpvlupTllYYnLCAn6aG555uuJ11cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIHtcbiAgICAgIGN0eC5maWxsVGV4dChsZWZ0VGl0bGVbaSAtIDFdLCBjYWwoNTApLCBjYWwoMjQpICsgKGkgLSAxKSAqIGNhbCgzNikpXG4gICAgICBjdHgubW92ZVRvKDAsIGNhbCgzNikgKiBpKVxuICAgICAgY3R4LmxpbmVUbyhjYWwoNzEwKSwgY2FsKDM2KSAqIGkpXG4gICAgfVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMzU1KSwgY2FsKDM2KSlcbiAgICBjdHgubGluZVRvKGNhbCgzNTUpLCBjYWwoMzYpICogNClcbiAgICBjdHguZmlsbFRleHQoJ+WRmOW3pScsIGNhbCg0MDUpLCBjYWwoMzYpICsgY2FsKDI0KSlcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDQ1NSksIGNhbCgzNikpXG4gICAgY3R4LmxpbmVUbyhjYWwoNDU1KSwgY2FsKDM2KSAqIDQpXG4gICAgY3R4LmZpbGxUZXh0KCflhbbku5bnrKzkuInmlrknLCBjYWwoNDA1KSwgY2FsKDM2KSAqIDIgKyBjYWwoMjQpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoNzEwKSwgMClcbiAgICBjdHgubGluZVRvKGNhbCg3MTApLCBjYWwoMzYpICogNClcbiAgICBjdHguZmlsbFRleHQoJ+WPkeelqOWPt+eggScsIGNhbCg0MDUpLCBjYWwoMzYpICogMyArIGNhbCgyNCkpXG5cbiAgICBjdHgubW92ZVRvKDAsIDApXG4gICAgY3R4LmxpbmVUbygwLCBjYWwoMzYpICogNClcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDEwMCksIDApXG4gICAgY3R4LmxpbmVUbyhjYWwoMTAwKSwgY2FsKDM2KSAqIDQpXG5cbiAgICBjdHgubW92ZVRvKGNhbCgxOTApLCAwKVxuICAgIGN0eC5saW5lVG8oY2FsKDE5MCksIGNhbCgzNikpXG5cbiAgICBsZXQgdGl0bGUgPSBbJ+iusOi0picsICflh7rnurMnLCAn5a6h5qC4JywgJ+WItuWNlSddXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSB7XG4gICAgICBjdHguZmlsbFRleHQodGl0bGVbaSAtIDFdLCBjYWwoMTkwICsgMTMwICogKGkgLSAxKSArIDI1KSwgY2FsKDI0KSApXG4gICAgICBjdHgubW92ZVRvKGNhbCgxOTAgKyAxMzAgKiAoaSAtIDEpICsgNTApLCAwKVxuICAgICAgY3R4LmxpbmVUbyhjYWwoMTkwICsgMTMwICogKGkgLSAxKSArIDUwKSwgY2FsKDM2KSlcbiAgICAgIGN0eC5tb3ZlVG8oY2FsKDE5MCArIDEzMCAqIChpIC0gMSkgKyAxMzApLCAwKVxuICAgICAgY3R4LmxpbmVUbyhjYWwoMTkwICsgMTMwICogKGkgLSAxKSArIDEzMCksIGNhbCgzNikpXG4gICAgfVxuICAgIGN0eC5zdHJva2UoKVxuXG4gICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LnByZXBhcmVkQnksIGNhbCgxOTAgKyAxMzAgKiAzICsgOTApLCBjYWwoMjQpKVxuICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5pbnZvaWNlLmludm9pY2VOdW0sIGNhbCg1ODIpLCBjYWwoMjQpICsgY2FsKDM2KSAqIDMpXG4gICAgdGhpcy5yZXN1bHQucHJvamVjdCAmJiBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQucHJvamVjdCwgY2FsKDIyOCksIGNhbCgyNCkgKyBjYWwoMzYpICogMylcblxuICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5zdXBwbGllciwgY2FsKDIyOCksIGNhbCgyNCkgKyBjYWwoMzYpICogMilcbiAgICB0aGlzLnJlc3VsdC5lbXBsb3llZU5hbWUgJiYgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LmVtcGxveWVlTmFtZSwgY2FsKDU4MiksIGNhbCgyNCkgKyBjYWwoMzYpKVxuICAgIHRoaXMucmVzdWx0LnRoaXJkUGFydHlOYW1lICYmIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC50aGlyZFBhcnR5TmFtZSwgY2FsKDU4MiksIGNhbCgyNCkgKyBjYWwoMzYpICogMilcblxuICAgIGN0eC5kcmF3KHRydWUsICgpID0+IHtcbiAgICAgIHRoaXMuaW1hZ2VIZWlnaHQgPSBjYWwoMTIwKSArICg3ICsgdGhpcy5yZXN1bHQuc3ViamVjdHMubGVuZ3RoKSAqIGNhbCgzNilcbiAgICAgIHd4LmNhbnZhc1RvVGVtcEZpbGVQYXRoKHtcbiAgICAgICAgICB4OiAwLFxuICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgd2lkdGg6IGNhbCg3NTApLFxuICAgICAgICAgIGhlaWdodDogY2FsKDEyMCkgKyAoNyArIHRoaXMucmVzdWx0LnN1YmplY3RzLmxlbmd0aCkgKiBjYWwoMzYpLFxuICAgICAgICAgIGZpbGVUeXBlOiAnanBnJyxcbiAgICAgICAgICBxdWFsaXR5OiAwLjUsXG4gICAgICAgICAgY2FudmFzSWQ6ICdjYW52YXNJZCcsLy9jYW52YXNJZOWSjOagh+etvumHjOmdoueahGlk5a+55bqUXG4gICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICB3eC5oaWRlVG9hc3QoKVxuICAgICAgICAgICAgICAvL+WwhuiOt+WPluWIsOeahOWbvueJh+S4tOaXtui3r+W+hHNldOWIsGNhbnZhc1NhdmVpbWfkuK1cbiAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsZVBhdGggPSByZXMudGVtcEZpbGVQYXRoXG4gICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6IChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgb25VbmxvYWQgKCkge1xuICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICBkZWx0YTogMVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==