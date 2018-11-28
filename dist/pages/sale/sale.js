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

var Sale = function (_wepy$page) {
  _inherits(Sale, _wepy$page);

  function Sale() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Sale);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Sale.__proto__ || Object.getPrototypeOf(Sale)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '凭证'
    }, _this.data = {
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
                      wx.redirectTo({
                        url: '../home/home'
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
        wx.redirectTo({
          url: '../home/home'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Sale, [{
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
                //  "summary": "这是业务描述",
                //  "preparedBy": "c",
                //  "client": "个",
                //  "supplier": "广东苏宁云商磷售有限公司",
                //  "project": "这是业务所属项目",
                //  "employeeName": "xiu小明",
                //  "thirdPartyName": "",
                //  "invoice": {
                //    "purchaserName": "航天信息份有限公司",
                //    "sellerName": "航天信息股份有限公司",
                //    "invoiceType": 0,
                //    "invoiceNum": "00593803",
                //    "invoiceDate": "2014-12-31T16:00:00.000Z",
                //    "amountInFiguers": "5.15",
                //    "serviceDetail": [
                //      {
                //        "commodityName": "货物可乐",
                //        "commodityAmount": "12345.89",
                //        "commodityTax": "0.03"
                //      }, {
                //        "commodityName": "货物可乐",
                //        "commodityAmount": "12345.80",
                //        "commodityTax": "0.00"
                //      }, {
                //        "commodityName": "货物可乐",
                //        "commodityAmount": "12345.89",
                //        "commodityTax": "0.03"
                //      }, {
                //        "commodityName": "货物可乐",
                //        "commodityAmount": "12345.80",
                //        "commodityTax": "0.03"
                //      }, {
                //        "commodityName": "货物可乐",
                //        "commodityAmount": "12345.89",
                //        "commodityTax": "0.03"
                //      }
                //    ],
                //    "discription": "这是业务描述",
                //    "project": "这是业务所属项目",
                //    "identity": 1,
                //    "whoPays": 1,
                //    "employeeName": "xiu小明",
                //    "thirdPartyName": "",
                //    "reason": 1,
                //    "id": 53,
                //    "createdAt": "2018-11-22T03:27:24.640Z",
                //    "updatedAt": "2018-11-22T03:27:24.640Z"
                //  },
                //  "subjects": [
                //    {
                //      "subjectName": "应收账款",
                //      "subjectCode": "1122",
                //      "amount": "5.15"
                //    }, {
                //      "subjectName": "主营业务收入",
                //      "subjectCode": "5001",
                //      "amount": "12345.89"
                //    }, {
                //      "subjectName": "应交税费 - 增值税 - 销项税",
                //      "subjectCode": "5001",
                //      "amount": "0.03"
                //    }, {
                //      "subjectName": "主营业务收入",
                //      "subjectCode": "5001",
                //      "amount": "12345.80"
                //    }, {
                //      "subjectName": "应交税费 - 增值税 - 销项税",
                //      "subjectCode": "5001",
                //      "amount": "0.00"
                //    }
                //  ],
                //  "accountingSupervisor": null,
                //  "bookkeeper": null,
                //  "cashier": null,
                //  "auditor": null,
                //  "id": 7,
                //  "voucherDate": "2018-11-22T03:14:28.666Z",
                //  "createdAt": "2018-11-22T03:14:28.666Z",
                //  "updatedAt": "2018-11-22T03:14:28.666Z"
                // }

                // 获取屏幕宽
                _context2.next = 4;
                return _wepy2.default.getSystemInfo();

              case 4:
                _ref6 = _context2.sent;
                windowWidth = _ref6.windowWidth;

                this.width = windowWidth;
                this.$apply();

                // 函数定义区域 =====================================
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
                ctx.setTextAlign('center');
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
                  if (_i2 === 0) {
                    ctx.fillText(this.result.subjects[_i2].amount, cal(522), cal(24) + cal(36) * _i2);
                  } else {
                    ctx.fillText(this.result.subjects[_i2].amount, cal(646), cal(24) + cal(36) * _i2);
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
                ctx.fillText(this.result.client, cal(228), cal(24) + cal(36));

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
                      //将获取到的图片临时路径set到canvasSaveimg中
                      _this2.tempFilePath = res.tempFilePath;
                      _this2.$apply();
                      wx.hideToast();
                    },
                    fail: function fail(err) {
                      console.log(err);
                    }
                  });
                });

              case 92:
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
  }]);

  return Sale;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Sale , 'pages/sale/sale'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGUuanMiXSwibmFtZXMiOlsiU2FsZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwid2lkdGgiLCJoZWlnaHQiLCJyZXN1bHQiLCJ0ZW1wRmlsZVBhdGgiLCJpbWFnZUhlaWdodCIsIm1ldGhvZHMiLCJoYW5sZGVTYXZlUGljIiwid2VweSIsImdldEltYWdlSW5mbyIsInNyYyIsInBhdGgiLCJzYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtIiwiZmlsZVBhdGgiLCJlcnJNc2ciLCJ3eCIsInNob3dUb2FzdCIsInRpdGxlIiwic2V0VGltZW91dCIsInJlZGlyZWN0VG8iLCJ1cmwiLCJoYW5kbGVDYW5jZWwiLCJvcHRpb25zIiwiaWNvbiIsImR1cmF0aW9uIiwiSlNPTiIsInBhcnNlIiwiZ2V0U3lzdGVtSW5mbyIsIndpbmRvd1dpZHRoIiwiJGFwcGx5IiwiY2FsIiwicHgiLCJsaW5lV3JhcCIsImN0eCIsInN0ciIsImZvbnRzaXplIiwibGluZWhlaWdodCIsIngiLCJ5Iiwic2V0Rm9udFNpemUiLCJ0ZXh0QXJyIiwiaW5kZXgiLCJpIiwibGVuZ3RoIiwibWVhc3VyZVRleHQiLCJzdWJzdHJpbmciLCJwdXNoIiwiZmlsbFRleHQiLCJjcmVhdGVDYW52YXNDb250ZXh0Iiwic2V0RmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzdWJqZWN0cyIsImRhdGUiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJ0cmFuc2xhdGUiLCJzZXRUZXh0QWxpZ24iLCJpZCIsInJvdyIsInNldFN0cm9rZVN0eWxlIiwic3Ryb2tlUmVjdCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsInN1bW1hcnkiLCJzdWJqZWN0Q29kZSIsInN1YmplY3ROYW1lIiwiYW1vdW50IiwiaW52b2ljZSIsImFtb3VudEluRmlndWVycyIsImJlZ2luUGF0aCIsImxlZnRUaXRsZSIsInByZXBhcmVkQnkiLCJpbnZvaWNlTnVtIiwicHJvamVjdCIsImNsaWVudCIsImRyYXciLCJjYW52YXNUb1RlbXBGaWxlUGF0aCIsImZpbGVUeXBlIiwicXVhbGl0eSIsImNhbnZhc0lkIiwic3VjY2VzcyIsInJlcyIsImhpZGVUb2FzdCIsImZhaWwiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsYUFBTyxDQURGO0FBRUxDLGNBQVEsQ0FGSDtBQUdMQyxjQUFRLEVBSEg7QUFJTEMsb0JBQWMsRUFKVDtBQUtMQyxtQkFBYTtBQUxSLEssUUFRUEMsTyxHQUFVO0FBQ0ZDLG1CQURFO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRWlCQyxlQUFLQyxZQUFMLENBQWtCLEVBQUNDLEtBQUssS0FBS04sWUFBWCxFQUFsQixDQUZqQjs7QUFBQTtBQUFBO0FBRUVPLHNCQUZGLFNBRUVBLElBRkY7QUFBQTtBQUFBLHlCQUdtQkgsZUFBS0ksc0JBQUwsQ0FBNEIsRUFBQ0MsVUFBVUYsSUFBWCxFQUE1QixDQUhuQjs7QUFBQTtBQUFBO0FBR0VHLHdCQUhGLFNBR0VBLE1BSEY7O0FBSU4sc0JBQUlBLFdBQVcsMkJBQWYsRUFBNEM7QUFDMUNDLHVCQUFHQyxTQUFILENBQWE7QUFDWEMsNkJBQU87QUFESSxxQkFBYjtBQUdBQywrQkFBVyxZQUFNO0FBQ2ZILHlCQUFHSSxVQUFILENBQWM7QUFDWkMsNkJBQUs7QUFETyx1QkFBZDtBQUdELHFCQUpELEVBSUcsSUFKSDtBQUtEOztBQWJLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBZVJDLGtCQWZRLDBCQWVRO0FBQ2ROLFdBQUdJLFVBQUgsQ0FBYztBQUNaQyxlQUFLO0FBRE8sU0FBZDtB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QUFJZ0QsSUFBSixDQUFTLElBQVQsRUFBZSxZQUFNO0FBQ25CLHlCQUFLNUUsV0FBTCxHQUFtQnlCLElBQUksR0FBSixJQUFXLENBQUMsSUFBSSxPQUFLM0IsTUFBTCxDQUFZZ0QsUUFBWixDQUFxQlIsTUFBMUIsSUFBb0NiLElBQUksRUFBSixDQUFsRTtBQUNBZixxQkFBR21FLG9CQUFILENBQXdCO0FBQ3BCN0MsdUJBQUcsQ0FEaUI7QUFFcEJDLHVCQUFHLENBRmlCO0FBR3BCckMsMkJBQU82QixJQUFJLEdBQUosQ0FIYTtBQUlwQjVCLDRCQUFRNEIsSUFBSSxHQUFKLElBQVcsQ0FBQyxJQUFJLE9BQUszQixNQUFMLENBQVlnRCxRQUFaLENBQXFCUixNQUExQixJQUFvQ2IsSUFBSSxFQUFKLENBSm5DO0FBS3BCcUQsOEJBQVUsS0FMVTtBQU1wQkMsNkJBQVMsR0FOVztBQU9wQkMsOEJBQVUsVUFQVSxFQU9DO0FBQ3JCQyw2QkFBUyxpQkFBQ0MsR0FBRCxFQUFTO0FBQ2Q7QUFDQSw2QkFBS25GLFlBQUwsR0FBb0JtRixJQUFJbkYsWUFBeEI7QUFDQSw2QkFBS3lCLE1BQUw7QUFDQWQseUJBQUd5RSxTQUFIO0FBQ0gscUJBYm1CO0FBY3BCQywwQkFBTSxjQUFDQyxHQUFELEVBQVM7QUFDYkMsOEJBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNEO0FBaEJtQixtQkFBeEI7QUFrQkQsaUJBcEJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBL1M4QmxGLGVBQUtxRixJOztrQkFBbEJoRyxJIiwiZmlsZSI6InNhbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhbGUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WHreivgSdcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIHJlc3VsdDoge30sXG4gICAgdGVtcEZpbGVQYXRoOiAnJyxcbiAgICBpbWFnZUhlaWdodDogMCxcbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgYXN5bmMgaGFubGRlU2F2ZVBpYyAoKSB7XG4gICAgICBjb25zdCB7IHBhdGggfSA9IGF3YWl0IHdlcHkuZ2V0SW1hZ2VJbmZvKHtzcmM6IHRoaXMudGVtcEZpbGVQYXRofSlcbiAgICAgIGNvbnN0IHsgZXJyTXNnIH0gPSBhd2FpdCB3ZXB5LnNhdmVJbWFnZVRvUGhvdG9zQWxidW0oe2ZpbGVQYXRoOiBwYXRofSlcbiAgICAgIGlmIChlcnJNc2cgPT09ICdzYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtOm9rJykge1xuICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn5L+d5a2Y5oiQ5YqfJyxcbiAgICAgICAgfSlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgICAgICB1cmw6ICcuLi9ob21lL2hvbWUnXG4gICAgICAgICAgfSlcbiAgICAgICAgfSwgMTUwMClcbiAgICAgIH1cbiAgICB9LFxuICAgIGhhbmRsZUNhbmNlbCAoKSB7XG4gICAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgICAgdXJsOiAnLi4vaG9tZS9ob21lJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xuICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgIHRpdGxlOiAn5q2j5Zyo55Sf5oiQ5Yet6K+BJyxcbiAgICAgICBpY29uOiAnbG9hZGluZycsXG4gICAgICAgZHVyYXRpb246IDEwMDAwXG4gICAgIH0pXG4gICAgdGhpcy5yZXN1bHQgPSBKU09OLnBhcnNlKG9wdGlvbnMucmVzdWx0KVxuICAgIC8vIHRoaXMucmVzdWx0ID0ge1xuICAgIC8vICBcInN1bW1hcnlcIjogXCLov5nmmK/kuJrliqHmj4/ov7BcIixcbiAgICAvLyAgXCJwcmVwYXJlZEJ5XCI6IFwiY1wiLFxuICAgIC8vICBcImNsaWVudFwiOiBcIuS4qlwiLFxuICAgIC8vICBcInN1cHBsaWVyXCI6IFwi5bm/5Lic6IuP5a6B5LqR5ZWG56O35ZSu5pyJ6ZmQ5YWs5Y+4XCIsXG4gICAgLy8gIFwicHJvamVjdFwiOiBcIui/meaYr+S4muWKoeaJgOWxnumhueebrlwiLFxuICAgIC8vICBcImVtcGxveWVlTmFtZVwiOiBcInhpdeWwj+aYjlwiLFxuICAgIC8vICBcInRoaXJkUGFydHlOYW1lXCI6IFwiXCIsXG4gICAgLy8gIFwiaW52b2ljZVwiOiB7XG4gICAgLy8gICAgXCJwdXJjaGFzZXJOYW1lXCI6IFwi6Iiq5aSp5L+h5oGv5Lu95pyJ6ZmQ5YWs5Y+4XCIsXG4gICAgLy8gICAgXCJzZWxsZXJOYW1lXCI6IFwi6Iiq5aSp5L+h5oGv6IKh5Lu95pyJ6ZmQ5YWs5Y+4XCIsXG4gICAgLy8gICAgXCJpbnZvaWNlVHlwZVwiOiAwLFxuICAgIC8vICAgIFwiaW52b2ljZU51bVwiOiBcIjAwNTkzODAzXCIsXG4gICAgLy8gICAgXCJpbnZvaWNlRGF0ZVwiOiBcIjIwMTQtMTItMzFUMTY6MDA6MDAuMDAwWlwiLFxuICAgIC8vICAgIFwiYW1vdW50SW5GaWd1ZXJzXCI6IFwiNS4xNVwiLFxuICAgIC8vICAgIFwic2VydmljZURldGFpbFwiOiBbXG4gICAgLy8gICAgICB7XG4gICAgLy8gICAgICAgIFwiY29tbW9kaXR5TmFtZVwiOiBcIui0p+eJqeWPr+S5kFwiLFxuICAgIC8vICAgICAgICBcImNvbW1vZGl0eUFtb3VudFwiOiBcIjEyMzQ1Ljg5XCIsXG4gICAgLy8gICAgICAgIFwiY29tbW9kaXR5VGF4XCI6IFwiMC4wM1wiXG4gICAgLy8gICAgICB9LCB7XG4gICAgLy8gICAgICAgIFwiY29tbW9kaXR5TmFtZVwiOiBcIui0p+eJqeWPr+S5kFwiLFxuICAgIC8vICAgICAgICBcImNvbW1vZGl0eUFtb3VudFwiOiBcIjEyMzQ1LjgwXCIsXG4gICAgLy8gICAgICAgIFwiY29tbW9kaXR5VGF4XCI6IFwiMC4wMFwiXG4gICAgLy8gICAgICB9LCB7XG4gICAgLy8gICAgICAgIFwiY29tbW9kaXR5TmFtZVwiOiBcIui0p+eJqeWPr+S5kFwiLFxuICAgIC8vICAgICAgICBcImNvbW1vZGl0eUFtb3VudFwiOiBcIjEyMzQ1Ljg5XCIsXG4gICAgLy8gICAgICAgIFwiY29tbW9kaXR5VGF4XCI6IFwiMC4wM1wiXG4gICAgLy8gICAgICB9LCB7XG4gICAgLy8gICAgICAgIFwiY29tbW9kaXR5TmFtZVwiOiBcIui0p+eJqeWPr+S5kFwiLFxuICAgIC8vICAgICAgICBcImNvbW1vZGl0eUFtb3VudFwiOiBcIjEyMzQ1LjgwXCIsXG4gICAgLy8gICAgICAgIFwiY29tbW9kaXR5VGF4XCI6IFwiMC4wM1wiXG4gICAgLy8gICAgICB9LCB7XG4gICAgLy8gICAgICAgIFwiY29tbW9kaXR5TmFtZVwiOiBcIui0p+eJqeWPr+S5kFwiLFxuICAgIC8vICAgICAgICBcImNvbW1vZGl0eUFtb3VudFwiOiBcIjEyMzQ1Ljg5XCIsXG4gICAgLy8gICAgICAgIFwiY29tbW9kaXR5VGF4XCI6IFwiMC4wM1wiXG4gICAgLy8gICAgICB9XG4gICAgLy8gICAgXSxcbiAgICAvLyAgICBcImRpc2NyaXB0aW9uXCI6IFwi6L+Z5piv5Lia5Yqh5o+P6L+wXCIsXG4gICAgLy8gICAgXCJwcm9qZWN0XCI6IFwi6L+Z5piv5Lia5Yqh5omA5bGe6aG555uuXCIsXG4gICAgLy8gICAgXCJpZGVudGl0eVwiOiAxLFxuICAgIC8vICAgIFwid2hvUGF5c1wiOiAxLFxuICAgIC8vICAgIFwiZW1wbG95ZWVOYW1lXCI6IFwieGl15bCP5piOXCIsXG4gICAgLy8gICAgXCJ0aGlyZFBhcnR5TmFtZVwiOiBcIlwiLFxuICAgIC8vICAgIFwicmVhc29uXCI6IDEsXG4gICAgLy8gICAgXCJpZFwiOiA1MyxcbiAgICAvLyAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMTgtMTEtMjJUMDM6Mjc6MjQuNjQwWlwiLFxuICAgIC8vICAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0xMS0yMlQwMzoyNzoyNC42NDBaXCJcbiAgICAvLyAgfSxcbiAgICAvLyAgXCJzdWJqZWN0c1wiOiBbXG4gICAgLy8gICAge1xuICAgIC8vICAgICAgXCJzdWJqZWN0TmFtZVwiOiBcIuW6lOaUtui0puasvlwiLFxuICAgIC8vICAgICAgXCJzdWJqZWN0Q29kZVwiOiBcIjExMjJcIixcbiAgICAvLyAgICAgIFwiYW1vdW50XCI6IFwiNS4xNVwiXG4gICAgLy8gICAgfSwge1xuICAgIC8vICAgICAgXCJzdWJqZWN0TmFtZVwiOiBcIuS4u+iQpeS4muWKoeaUtuWFpVwiLFxuICAgIC8vICAgICAgXCJzdWJqZWN0Q29kZVwiOiBcIjUwMDFcIixcbiAgICAvLyAgICAgIFwiYW1vdW50XCI6IFwiMTIzNDUuODlcIlxuICAgIC8vICAgIH0sIHtcbiAgICAvLyAgICAgIFwic3ViamVjdE5hbWVcIjogXCLlupTkuqTnqI7otLkgLSDlop7lgLznqI4gLSDplIDpobnnqI5cIixcbiAgICAvLyAgICAgIFwic3ViamVjdENvZGVcIjogXCI1MDAxXCIsXG4gICAgLy8gICAgICBcImFtb3VudFwiOiBcIjAuMDNcIlxuICAgIC8vICAgIH0sIHtcbiAgICAvLyAgICAgIFwic3ViamVjdE5hbWVcIjogXCLkuLvokKXkuJrliqHmlLblhaVcIixcbiAgICAvLyAgICAgIFwic3ViamVjdENvZGVcIjogXCI1MDAxXCIsXG4gICAgLy8gICAgICBcImFtb3VudFwiOiBcIjEyMzQ1LjgwXCJcbiAgICAvLyAgICB9LCB7XG4gICAgLy8gICAgICBcInN1YmplY3ROYW1lXCI6IFwi5bqU5Lqk56iO6LS5IC0g5aKe5YC856iOIC0g6ZSA6aG556iOXCIsXG4gICAgLy8gICAgICBcInN1YmplY3RDb2RlXCI6IFwiNTAwMVwiLFxuICAgIC8vICAgICAgXCJhbW91bnRcIjogXCIwLjAwXCJcbiAgICAvLyAgICB9XG4gICAgLy8gIF0sXG4gICAgLy8gIFwiYWNjb3VudGluZ1N1cGVydmlzb3JcIjogbnVsbCxcbiAgICAvLyAgXCJib29ra2VlcGVyXCI6IG51bGwsXG4gICAgLy8gIFwiY2FzaGllclwiOiBudWxsLFxuICAgIC8vICBcImF1ZGl0b3JcIjogbnVsbCxcbiAgICAvLyAgXCJpZFwiOiA3LFxuICAgIC8vICBcInZvdWNoZXJEYXRlXCI6IFwiMjAxOC0xMS0yMlQwMzoxNDoyOC42NjZaXCIsXG4gICAgLy8gIFwiY3JlYXRlZEF0XCI6IFwiMjAxOC0xMS0yMlQwMzoxNDoyOC42NjZaXCIsXG4gICAgLy8gIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0xMS0yMlQwMzoxNDoyOC42NjZaXCJcbiAgICAvLyB9XG5cbiAgICAvLyDojrflj5blsY/luZXlrr1cbiAgICBjb25zdCB7IHdpbmRvd1dpZHRoIH0gPSBhd2FpdCB3ZXB5LmdldFN5c3RlbUluZm8oKVxuICAgIHRoaXMud2lkdGggPSB3aW5kb3dXaWR0aFxuICAgIHRoaXMuJGFwcGx5KClcblxuLy8g5Ye95pWw5a6a5LmJ5Yy65Z+fID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyDorr7nva7kuIDkuKrln7rlh4bmr5TkvotcbiAgICBsZXQgY2FsID0gKHB4KSA9PiB7XG4gICAgICByZXR1cm4gIHB4IC8gNzUwICogdGhpcy53aWR0aFxuICAgIH1cblxuICAgIC8vIGNhbnZhc+aNouihjOaYvuekulxuICAgIGxldCBsaW5lV3JhcCA9IChjdHgsIHN0ciwgZm9udHNpemUsIGxpbmVoZWlnaHQsIHdpZHRoLCB4LCB5KSA9PiB7XG4gICAgICBjdHguc2V0Rm9udFNpemUoZm9udHNpemUpXG4gICAgICBsZXQgdGV4dEFyciA9IFtdXG4gICAgICBsZXQgaW5kZXggPSAwXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoY3R4Lm1lYXN1cmVUZXh0KHN0ci5zdWJzdHJpbmcoaW5kZXgsIGkpKS53aWR0aCA+PSB3aWR0aCAqIDAuOCkge1xuICAgICAgICAgIHRleHRBcnIucHVzaChzdHIuc3Vic3RyaW5nKGluZGV4LCBpKSlcbiAgICAgICAgICBpbmRleCA9IGlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0ZXh0QXJyLnB1c2goc3RyLnN1YnN0cmluZyhpbmRleCkpXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dEFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBjdHguZmlsbFRleHQodGV4dEFycltpXSwgeCwgeSArIGxpbmVoZWlnaHQgKiAoaSArIDEpKVxuICAgICAgfVxuICAgIH1cblxuLy8gY2FudmFz57uY5Yi25Yy65Z+fID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNvbnN0IGN0eCA9IHd4LmNyZWF0ZUNhbnZhc0NvbnRleHQoJ2NhbnZhc0lkJylcblxuICAgIGN0eC5zZXRGaWxsU3R5bGUoJ3doaXRlJylcbiAgICBjdHguZmlsbFJlY3QoY2FsKDApLCBjYWwoMCksIGNhbCg3NTApLCBjYWwoMTIwKSArICg3ICsgdGhpcy5yZXN1bHQuc3ViamVjdHMubGVuZ3RoKSAqIGNhbCgzNikpXG4gICAgY3R4LnNldEZpbGxTdHlsZSgnYmxhY2snKVxuXG4gICAgLy8g5qCH6aKYXG4gICAgY3R4LnNldEZvbnRTaXplKGNhbCgyMykpXG4gICAgY3R4LmZpbGxUZXh0KCforrDotKblh63or4EnLCBjYWwoMzc1KSwgY2FsKDQwKSlcblxuICAgIC8vIOaXtumXtOWPiue8luWPt1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKVxuICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXG4gICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMVxuICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKVxuICAgIGN0eC50cmFuc2xhdGUoY2FsKDczMCksIGNhbCg3MCkpXG4gICAgY3R4LnNldEZvbnRTaXplKGNhbCgxMykpXG4gICAgY3R4LnNldFRleHRBbGlnbigncmlnaHQnKVxuICAgIGN0eC5maWxsVGV4dCh5ZWFyICsgJyDlubQgJyArIG1vbnRoICsgJyDmnIggJyArIGRheSArICcg5Y+3ICAgICAg6K6w5a2X56ysICcgKyB0aGlzLnJlc3VsdC5pZCArICcg5Y+3JywgY2FsKDApLCBjYWwoMjIpKVxuICAgIGN0eC5zZXRUZXh0QWxpZ24oJ2NlbnRlcicpXG4gICAgY3R4LnNldFRleHRBbGlnbignY2VudGVyJylcbiAgICBjdHguc2V0VGV4dEFsaWduKCdjZW50ZXInKVxuXG4gICAgLy8g6KGo5qC8XG4gICAgLy8g5aSW5qGGXG4gICAgbGV0IHJvdyA9IHRoaXMucmVzdWx0LnN1YmplY3RzLmxlbmd0aCArIDJcbiAgICBjdHgudHJhbnNsYXRlKGNhbCgtNzEwKSwgY2FsKDUwKSlcbiAgICBjdHguc2V0U3Ryb2tlU3R5bGUoJyMwMDAnKVxuICAgIGN0eC5zdHJva2VSZWN0KDAsIDAsIGNhbCg3MTApLCBjYWwoMzYpICogcm93KVxuXG4gICAgLy8g5YaF5qGGXG4gICAgZm9yIChsZXQgaSA9IDI7IGkgPCByb3cgLSAxOyBpKyspIHtcbiAgICAgIGN0eC5zZXRTdHJva2VTdHlsZSgnIzk5OScpXG4gICAgICBjdHgubW92ZVRvKGNhbCgyMDApLCBjYWwoMzYpICogaSlcbiAgICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikgKiBpKVxuICAgICAgY3R4LnN0cm9rZSgpXG4gICAgfVxuXG4gICAgY3R4Lm1vdmVUbygwLCBjYWwoMzYpKVxuICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikpXG5cbiAgICBjdHgubW92ZVRvKDAsIGNhbCgzNikgKiAocm93IC0xKSlcbiAgICBjdHgubGluZVRvKGNhbCg3MTApLCBjYWwoMzYpICogKHJvdyAtMSkpXG5cbiAgICBjdHgubW92ZVRvKDAsIGNhbCgzNikgKiByb3cpXG4gICAgY3R4LmxpbmVUbyhjYWwoNzEwKSwgY2FsKDM2KSAqIHJvdylcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDIwMCksIDApXG4gICAgY3R4LmxpbmVUbyhjYWwoMjAwKSwgY2FsKDM2KSAqIChyb3cgLTEpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMzMwKSwgY2FsKDE4KSlcbiAgICBjdHgubGluZVRvKGNhbCgzMzApLCBjYWwoMzYpICogKHJvdyAtIDEpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMjAwKSwgY2FsKDE4KSlcbiAgICBjdHgubGluZVRvKGNhbCg0NjApLCBjYWwoMTgpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoNDYwKSwgMClcbiAgICBjdHgubGluZVRvKGNhbCg0NjApLCBjYWwoMzYpICogcm93KVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoNTg1KSwgMClcbiAgICBjdHgubGluZVRvKGNhbCg1ODUpLCBjYWwoMzYpICogcm93KVxuXG4gICAgY3R4LnN0cm9rZSgpXG5cbiAgICAvLyDooajlpLRcbiAgICBjdHguc2V0Rm9udFNpemUoY2FsKDE1KSlcbiAgICBjdHguc2V0VGV4dEFsaWduKCdjZW50ZXInKVxuICAgIGN0eC5maWxsVGV4dCgn5pGY6KaBJywgY2FsKDEwMCksIGNhbCgyNCkpXG4gICAgY3R4LmZpbGxUZXh0KCflgJ/mlrnph5Hpop0nLCBjYWwoNTIyKSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQoJ+i0t+aWuemHkeminScsIGNhbCg2NDYpLCBjYWwoMjQpKVxuXG4gICAgY3R4LnNldEZvbnRTaXplKGNhbCgxNCkpXG4gICAgY3R4LmZpbGxUZXh0KCfkvJrorqHnp5Hnm64nLCBjYWwoMzMwKSwgY2FsKDE1KSlcbiAgICBjdHguZmlsbFRleHQoJ+enkeebruS7o+eggScsIGNhbCgyNjUpLCBjYWwoMzMpKVxuICAgIGN0eC5maWxsVGV4dCgn56eR55uu5ZCN56ewJywgY2FsKDM5NSksIGNhbCgzMykpXG5cbiAgICAvLyDlhoXlrrnpg6jliIZcbiAgICAvLyDmkZjopoHlhoXlrrlcbiAgICBjdHgudHJhbnNsYXRlKDAsIGNhbCgzNikpXG4gICAgbGluZVdyYXAoY3R4LCB0aGlzLnJlc3VsdC5zdW1tYXJ5LCBjYWwoMTQpLCBjYWwoMTYpLCBjYWwoMTYwKSwgY2FsKDEwMCksIGNhbCgxMCkpXG5cbiAgICAvLyDnianlk4HjgIHmnI3liqHnrYlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmVzdWx0LnN1YmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuc3ViamVjdHNbaV0uc3ViamVjdENvZGUsIGNhbCgyNjUpLCBjYWwoMjQpICsgY2FsKDM2KSAqIGkpXG4gICAgICBpZiAoY3R4Lm1lYXN1cmVUZXh0KHRoaXMucmVzdWx0LnN1YmplY3RzW2ldLnN1YmplY3ROYW1lKS53aWR0aCA+PSBjYWwoMTMwKSAqIDAuOCkge1xuICAgICAgICBsaW5lV3JhcChjdHgsIHRoaXMucmVzdWx0LnN1YmplY3RzW2ldLnN1YmplY3ROYW1lLCBjYWwoMTQpLCBjYWwoMTQpLCBjYWwoMTMwKSwgY2FsKDM5NSksIGNhbCgyKSArIGNhbCgzNikgKiBpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LnN1YmplY3RzW2ldLnN1YmplY3ROYW1lLCBjYWwoMzk1KSwgY2FsKDI0KSArIGNhbCgzNikgKiBpKVxuICAgICAgfVxuICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LnN1YmplY3RzW2ldLmFtb3VudCwgY2FsKDUyMiksIGNhbCgyNCkgKyBjYWwoMzYpICogaSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5zdWJqZWN0c1tpXS5hbW91bnQsIGNhbCg2NDYpLCBjYWwoMjQpICsgY2FsKDM2KSAqIGkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5ZCI6K6hXG4gICAgY3R4LnRyYW5zbGF0ZSgwLCBjYWwoMzYpICogKHRoaXMucmVzdWx0LnN1YmplY3RzLmxlbmd0aCkpXG4gICAgY3R4LmZpbGxUZXh0KCflkIjorqEnLCBjYWwoMjMwKSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuaW52b2ljZS5hbW91bnRJbkZpZ3VlcnMsIGNhbCg1MjIpLCBjYWwoMjQpKVxuICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5pbnZvaWNlLmFtb3VudEluRmlndWVycywgY2FsKDY0NiksIGNhbCgyNCkpXG5cbiAgICAvLyDkv6Hmga/moI9cbiAgICBjdHguYmVnaW5QYXRoKClcbiAgICAvLyDovrnmoYZcbiAgICBjdHgudHJhbnNsYXRlKDAsIGNhbCgzNikpXG4gICAgbGV0IGxlZnRUaXRsZSA9IFsn5Lya6K6h5oC7566hJywgJ+WuouaItycsICfkvpvlupTllYYnLCAn6aG555uuJ11cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIHtcbiAgICAgIGN0eC5maWxsVGV4dChsZWZ0VGl0bGVbaSAtIDFdLCBjYWwoNTApLCBjYWwoMjQpICsgKGkgLSAxKSAqIGNhbCgzNikpXG4gICAgICBjdHgubW92ZVRvKDAsIGNhbCgzNikgKiBpKVxuICAgICAgY3R4LmxpbmVUbyhjYWwoNzEwKSwgY2FsKDM2KSAqIGkpXG4gICAgfVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMzU1KSwgY2FsKDM2KSlcbiAgICBjdHgubGluZVRvKGNhbCgzNTUpLCBjYWwoMzYpICogNClcbiAgICBjdHguZmlsbFRleHQoJ+WRmOW3pScsIGNhbCg0MDUpLCBjYWwoMzYpICsgY2FsKDI0KSlcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDQ1NSksIGNhbCgzNikpXG4gICAgY3R4LmxpbmVUbyhjYWwoNDU1KSwgY2FsKDM2KSAqIDQpXG4gICAgY3R4LmZpbGxUZXh0KCflhbbku5bnrKzkuInmlrknLCBjYWwoNDA1KSwgY2FsKDM2KSAqIDIgKyBjYWwoMjQpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoNzEwKSwgMClcbiAgICBjdHgubGluZVRvKGNhbCg3MTApLCBjYWwoMzYpICogNClcbiAgICBjdHguZmlsbFRleHQoJ+WPkeelqOWPt+eggScsIGNhbCg0MDUpLCBjYWwoMzYpICogMyArIGNhbCgyNCkpXG5cbiAgICBjdHgubW92ZVRvKDAsIDApXG4gICAgY3R4LmxpbmVUbygwLCBjYWwoMzYpICogNClcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDEwMCksIDApXG4gICAgY3R4LmxpbmVUbyhjYWwoMTAwKSwgY2FsKDM2KSAqIDQpXG5cbiAgICBjdHgubW92ZVRvKGNhbCgxOTApLCAwKVxuICAgIGN0eC5saW5lVG8oY2FsKDE5MCksIGNhbCgzNikpXG4gICAgbGV0IHRpdGxlID0gWyforrDotKYnLCAn5Ye657qzJywgJ+WuoeaguCcsICfliLbljZUnXVxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykge1xuICAgICAgY3R4LmZpbGxUZXh0KHRpdGxlW2kgLSAxXSwgY2FsKDE5MCArIDEzMCAqIChpIC0gMSkgKyAyNSksIGNhbCgyNCkgKVxuICAgICAgY3R4Lm1vdmVUbyhjYWwoMTkwICsgMTMwICogKGkgLSAxKSArIDUwKSwgMClcbiAgICAgIGN0eC5saW5lVG8oY2FsKDE5MCArIDEzMCAqIChpIC0gMSkgKyA1MCksIGNhbCgzNikpXG4gICAgICBjdHgubW92ZVRvKGNhbCgxOTAgKyAxMzAgKiAoaSAtIDEpICsgMTMwKSwgMClcbiAgICAgIGN0eC5saW5lVG8oY2FsKDE5MCArIDEzMCAqIChpIC0gMSkgKyAxMzApLCBjYWwoMzYpKVxuICAgIH1cbiAgICBjdHguc3Ryb2tlKClcblxuICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5wcmVwYXJlZEJ5LCBjYWwoMTkwICsgMTMwICogMyArIDkwKSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuaW52b2ljZS5pbnZvaWNlTnVtLCBjYWwoNTgyKSwgY2FsKDI0KSArIGNhbCgzNikgKiAzKVxuICAgIHRoaXMucmVzdWx0LnByb2plY3QgJiYgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LnByb2plY3QsIGNhbCgyMjgpLCBjYWwoMjQpICsgY2FsKDM2KSAqIDMpXG4gICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LmNsaWVudCwgY2FsKDIyOCksIGNhbCgyNCkgKyBjYWwoMzYpKVxuXG4gICAgY3R4LmRyYXcodHJ1ZSwgKCkgPT4ge1xuICAgICAgdGhpcy5pbWFnZUhlaWdodCA9IGNhbCgxMjApICsgKDcgKyB0aGlzLnJlc3VsdC5zdWJqZWN0cy5sZW5ndGgpICogY2FsKDM2KVxuICAgICAgd3guY2FudmFzVG9UZW1wRmlsZVBhdGgoe1xuICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgeTogMCxcbiAgICAgICAgICB3aWR0aDogY2FsKDc1MCksXG4gICAgICAgICAgaGVpZ2h0OiBjYWwoMTIwKSArICg3ICsgdGhpcy5yZXN1bHQuc3ViamVjdHMubGVuZ3RoKSAqIGNhbCgzNiksXG4gICAgICAgICAgZmlsZVR5cGU6ICdqcGcnLFxuICAgICAgICAgIHF1YWxpdHk6IDAuNSxcbiAgICAgICAgICBjYW52YXNJZDogJ2NhbnZhc0lkJywvL2NhbnZhc0lk5ZKM5qCH562+6YeM6Z2i55qEaWTlr7nlupRcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgIC8v5bCG6I635Y+W5Yiw55qE5Zu+54mH5Li05pe26Lev5b6Ec2V05YiwY2FudmFzU2F2ZWltZ+S4rVxuICAgICAgICAgICAgICB0aGlzLnRlbXBGaWxlUGF0aCA9IHJlcy50ZW1wRmlsZVBhdGhcbiAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgICB3eC5oaWRlVG9hc3QoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDogKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==