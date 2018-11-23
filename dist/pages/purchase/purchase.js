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
    }, _this.computed = {}, _this.methods = {
      hanldeSavePic: function hanldeSavePic() {
        var _self = this;
        wx.getImageInfo({
          src: _self.tempFilePath,
          success: function success(res1) {
            wx.saveImageToPhotosAlbum({
              filePath: res1.path,
              success: function success(res2) {
                wx.showToast({
                  title: '保存成功'
                });
                setTimeout(function () {
                  wx.redirectTo({
                    url: '../home/home'
                  });
                }, 1500);
              },
              fail: function fail(err) {
                console.log(err);
              }
            });
          }
        });
      },
      handleCancel: function handleCancel() {
        wx.redirectTo({
          url: '../home/home'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Purchase, [{
    key: 'onLoad',
    value: function onLoad(options) {
      var _this2 = this;

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

      var that = this;

      // 获取屏幕宽
      wx.getSystemInfo({
        success: function success(res) {
          that.width = res.windowWidth;
          that.$apply();
          // that.height = res.windowHeight
        }
      });

      // 函数定义区域 ===================
      // 设置一个基准比例
      var cal = function cal(px) {
        return px / 750 * that.width;
      };

      // canvas换行显示
      var lineWrap = function lineWrap(ctx, str, fontsize, lineheight, width, x, y) {
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

      var ctx = wx.createCanvasContext('canvasId');

      ctx.setFillStyle('white');
      ctx.fillRect(cal(0), cal(0), cal(750), cal(120) + (7 + this.result.subjects.length) * cal(36));
      ctx.setFillStyle('black');

      // 标题
      ctx.setFontSize(cal(23));
      ctx.setTextAlign('center');
      ctx.fillText('记账凭证', cal(375), cal(40));

      // 时间及编号
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      ctx.translate(cal(730), cal(70));
      ctx.setFontSize(cal(13));
      ctx.setTextAlign('right');
      ctx.fillText(year + ' 年 ' + month + ' 月 ' + day + ' 号      记字第 ' + this.result.id + ' 号', cal(0), cal(22));
      ctx.setTextAlign('center');
      ctx.setTextAlign('center');
      ctx.setTextAlign('center');

      // 表格
      // 外框
      var row = this.result.subjects.length + 2;
      ctx.translate(cal(-710), cal(50));
      ctx.setStrokeStyle('#000');
      ctx.strokeRect(0, 0, cal(710), cal(36) * row);

      // 内框
      for (var i = 2; i < row - 1; i++) {
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
      for (var _i2 = 0; _i2 < this.result.subjects.length; _i2++) {
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
      var leftTitle = ['会计总管', '客户', '供应商', '项目'];
      for (var _i3 = 1; _i3 <= 4; _i3++) {
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

      var title = ['记账', '出纳', '审核', '制单'];
      for (var _i4 = 1; _i4 <= 4; _i4++) {
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
        that.imageHeight = cal(120) + (7 + _this2.result.subjects.length) * cal(36);
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
            that.tempFilePath = res.tempFilePath;
            that.$apply();
          },
          fail: function fail(err) {
            console.log(err);
          }
        });
      });
    }
  }]);

  return Purchase;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Purchase , 'pages/purchase/purchase'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlLmpzIl0sIm5hbWVzIjpbIlB1cmNoYXNlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwid2lkdGgiLCJoZWlnaHQiLCJyZXN1bHQiLCJ0ZW1wRmlsZVBhdGgiLCJpbWFnZUhlaWdodCIsImNvbXB1dGVkIiwibWV0aG9kcyIsImhhbmxkZVNhdmVQaWMiLCJfc2VsZiIsInd4IiwiZ2V0SW1hZ2VJbmZvIiwic3JjIiwic3VjY2VzcyIsInJlczEiLCJzYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtIiwiZmlsZVBhdGgiLCJwYXRoIiwicmVzMiIsInNob3dUb2FzdCIsInRpdGxlIiwic2V0VGltZW91dCIsInJlZGlyZWN0VG8iLCJ1cmwiLCJmYWlsIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNhbmNlbCIsIm9wdGlvbnMiLCJpY29uIiwiZHVyYXRpb24iLCJKU09OIiwicGFyc2UiLCJ0aGF0IiwiZ2V0U3lzdGVtSW5mbyIsInJlcyIsIndpbmRvd1dpZHRoIiwiJGFwcGx5IiwiY2FsIiwicHgiLCJsaW5lV3JhcCIsImN0eCIsInN0ciIsImZvbnRzaXplIiwibGluZWhlaWdodCIsIngiLCJ5Iiwic2V0Rm9udFNpemUiLCJ0ZXh0QXJyIiwiaW5kZXgiLCJpIiwibGVuZ3RoIiwibWVhc3VyZVRleHQiLCJzdWJzdHJpbmciLCJwdXNoIiwiZmlsbFRleHQiLCJjcmVhdGVDYW52YXNDb250ZXh0Iiwic2V0RmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzdWJqZWN0cyIsInNldFRleHRBbGlnbiIsImRhdGUiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJ0cmFuc2xhdGUiLCJpZCIsInJvdyIsInNldFN0cm9rZVN0eWxlIiwic3Ryb2tlUmVjdCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsInN1bW1hcnkiLCJzdWJqZWN0Q29kZSIsInN1YmplY3ROYW1lIiwiYW1vdW50IiwiaW52b2ljZSIsImFtb3VudEluRmlndWVycyIsImJlZ2luUGF0aCIsImxlZnRUaXRsZSIsInByZXBhcmVkQnkiLCJpbnZvaWNlTnVtIiwicHJvamVjdCIsInN1cHBsaWVyIiwiZW1wbG95ZWVOYW1lIiwidGhpcmRQYXJ0eU5hbWUiLCJkcmF3IiwiY2FudmFzVG9UZW1wRmlsZVBhdGgiLCJmaWxlVHlwZSIsInF1YWxpdHkiLCJjYW52YXNJZCIsImhpZGVUb2FzdCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUliQyxJLEdBQU87QUFDTEMsYUFBTyxDQURGO0FBRUxDLGNBQVEsQ0FGSDtBQUdMQyxjQUFRLEVBSEg7QUFJTEMsb0JBQWMsRUFKVDtBQUtMQyxtQkFBYTtBQUxSLEssUUFRUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1JDLG1CQURRLDJCQUNTO0FBQ2YsWUFBSUMsUUFBUSxJQUFaO0FBQ0lDLFdBQUdDLFlBQUgsQ0FBZ0I7QUFDZEMsZUFBS0gsTUFBTUwsWUFERztBQUVkUyxpQkFGYyxtQkFFTEMsSUFGSyxFQUVDO0FBQ2JKLGVBQUdLLHNCQUFILENBQTBCO0FBQ3RCQyx3QkFBVUYsS0FBS0csSUFETztBQUV0QkosdUJBQVMsaUJBQVVLLElBQVYsRUFBZ0I7QUFDdkJSLG1CQUFHUyxTQUFILENBQWE7QUFDWEMseUJBQU87QUFESSxpQkFBYjtBQUdBQywyQkFBVyxZQUFNO0FBQ2ZYLHFCQUFHWSxVQUFILENBQWM7QUFDWkMseUJBQUs7QUFETyxtQkFBZDtBQUdELGlCQUpELEVBSUcsSUFKSDtBQUtELGVBWHFCO0FBWXRCQyxvQkFBTSxjQUFVQyxHQUFWLEVBQWU7QUFDbkJDLHdCQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDRDtBQWRxQixhQUExQjtBQWdCRDtBQW5C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QkFBSzlCLFlBQUwsR0FBb0JnQyxJQUFJaEMsWUFBeEI7QUFDQThCLGlCQUFLSSxNQUFMO0FBQ0gsV0FibUI7QUFjcEJkLGdCQUFNLGNBQUNDLEdBQUQsRUFBUztBQUNiQyxvQkFBUUMsR0FBUixDQUFZRixHQUFaO0FBQ0Q7QUFoQm1CLFNBQXhCO0FBa0JELE9BcEJEO0FBcUJEOzs7O0VBOVZtQ3lFLGVBQUtDLEk7O2tCQUF0QnZHLFEiLCJmaWxlIjoicHVyY2hhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFB1cmNoYXNlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflh63or4EnXG4gIH1cbiAgY29tcG9uZW50cyA9IHtcblxuICB9XG5cbiAgZGF0YSA9IHtcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgcmVzdWx0OiB7fSxcbiAgICB0ZW1wRmlsZVBhdGg6ICcnLFxuICAgIGltYWdlSGVpZ2h0OiAwLFxuICB9XG5cbiAgY29tcHV0ZWQgPSB7fVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgaGFubGRlU2F2ZVBpYyAoKSB7XG4gICAgICBsZXQgX3NlbGYgPSB0aGlzXG4gICAgICAgICAgd3guZ2V0SW1hZ2VJbmZvKHtcbiAgICAgICAgICAgIHNyYzogX3NlbGYudGVtcEZpbGVQYXRoLFxuICAgICAgICAgICAgc3VjY2VzcyAocmVzMSkge1xuICAgICAgICAgICAgICB3eC5zYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtKHtcbiAgICAgICAgICAgICAgICAgIGZpbGVQYXRoOiByZXMxLnBhdGgsXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzMikge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5L+d5a2Y5oiQ5YqfJyxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcuLi9ob21lL2hvbWUnXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSwgMTUwMClcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBoYW5kbGVDYW5jZWwgKCkge1xuICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgIHVybDogJy4uL2hvbWUvaG9tZSdcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgdGl0bGU6ICfmraPlnKjnlJ/miJDlh63or4EnLFxuICAgICAgIGljb246ICdsb2FkaW5nJyxcbiAgICAgICBkdXJhdGlvbjogMTAwMDBcbiAgICAgfSlcbiAgICB0aGlzLnJlc3VsdCA9IEpTT04ucGFyc2Uob3B0aW9ucy5yZXN1bHQpXG4gICAvLyAgdGhpcy5yZXN1bHQgPSB7XG4gICAvLyAgIFwic3VtbWFyeVwiOiBcIui/meaYr+S4muWKoeaPj+i/sFwiLFxuICAgLy8gICBcInByZXBhcmVkQnlcIjogXCJjXCIsXG4gICAvLyAgIFwiY2xpZW50XCI6IFwi5LiqXCIsXG4gICAvLyAgIFwic3VwcGxpZXJcIjogXCLlub/kuJzoi4/lroHkupHllYbno7fllK7mnInpmZDlhazlj7hcIixcbiAgIC8vICAgXCJwcm9qZWN0XCI6IFwi6L+Z5piv5Lia5Yqh5omA5bGe6aG555uuXCIsXG4gICAvLyAgIFwiZW1wbG95ZWVOYW1lXCI6IFwieGl15bCP5piOXCIsXG4gICAvLyAgIFwidGhpcmRQYXJ0eU5hbWVcIjogXCJcIixcbiAgIC8vICAgXCJpbnZvaWNlXCI6IHtcbiAgIC8vICAgICBcInB1cmNoYXNlck5hbWVcIjogXCLoiKrlpKnkv6Hmga/ku73mnInpmZDlhazlj7hcIixcbiAgIC8vICAgICBcInNlbGxlck5hbWVcIjogXCLoiKrlpKnkv6Hmga/ogqHku73mnInpmZDlhazlj7hcIixcbiAgIC8vICAgICBcImludm9pY2VUeXBlXCI6IDAsXG4gICAvLyAgICAgXCJpbnZvaWNlTnVtXCI6IFwiMDA1OTM4MDNcIixcbiAgIC8vICAgICBcImludm9pY2VEYXRlXCI6IFwiMjAxNC0xMi0zMVQxNjowMDowMC4wMDBaXCIsXG4gICAvLyAgICAgXCJhbW91bnRJbkZpZ3VlcnNcIjogXCI1LjE1XCIsXG4gICAvLyAgICAgXCJzZXJ2aWNlRGV0YWlsXCI6IFtcbiAgIC8vICAgICAgIHtcbiAgIC8vICAgICAgICAgXCJjb21tb2RpdHlOYW1lXCI6IFwi6LSn54mp5Y+v5LmQXCIsXG4gICAvLyAgICAgICAgIFwiY29tbW9kaXR5QW1vdW50XCI6IFwiMTIzNDUuODlcIixcbiAgIC8vICAgICAgICAgXCJjb21tb2RpdHlUYXhcIjogXCIwLjAzXCJcbiAgIC8vICAgICAgIH0sIHtcbiAgIC8vICAgICAgICAgXCJjb21tb2RpdHlOYW1lXCI6IFwi6LSn54mp5Y+v5LmQXCIsXG4gICAvLyAgICAgICAgIFwiY29tbW9kaXR5QW1vdW50XCI6IFwiMTIzNDUuODBcIixcbiAgIC8vICAgICAgICAgXCJjb21tb2RpdHlUYXhcIjogXCIwLjAwXCJcbiAgIC8vICAgICAgIH0sIHtcbiAgIC8vICAgICAgICAgXCJjb21tb2RpdHlOYW1lXCI6IFwi6LSn54mp5Y+v5LmQXCIsXG4gICAvLyAgICAgICAgIFwiY29tbW9kaXR5QW1vdW50XCI6IFwiMTIzNDUuODlcIixcbiAgIC8vICAgICAgICAgXCJjb21tb2RpdHlUYXhcIjogXCIwLjAzXCJcbiAgIC8vICAgICAgIH0sIHtcbiAgIC8vICAgICAgICAgXCJjb21tb2RpdHlOYW1lXCI6IFwi6LSn54mp5Y+v5LmQXCIsXG4gICAvLyAgICAgICAgIFwiY29tbW9kaXR5QW1vdW50XCI6IFwiMTIzNDUuODBcIixcbiAgIC8vICAgICAgICAgXCJjb21tb2RpdHlUYXhcIjogXCIwLjAzXCJcbiAgIC8vICAgICAgIH0sIHtcbiAgIC8vICAgICAgICAgXCJjb21tb2RpdHlOYW1lXCI6IFwi6LSn54mp5Y+v5LmQXCIsXG4gICAvLyAgICAgICAgIFwiY29tbW9kaXR5QW1vdW50XCI6IFwiMTIzNDUuODlcIixcbiAgIC8vICAgICAgICAgXCJjb21tb2RpdHlUYXhcIjogXCIwLjAzXCJcbiAgIC8vICAgICAgIH1cbiAgIC8vICAgICBdLFxuICAgLy8gICAgIFwiZGlzY3JpcHRpb25cIjogXCLov5nmmK/kuJrliqHmj4/ov7BcIixcbiAgIC8vICAgICBcInByb2plY3RcIjogXCLov5nmmK/kuJrliqHmiYDlsZ7pobnnm65cIixcbiAgIC8vICAgICBcImlkZW50aXR5XCI6IDEsXG4gICAvLyAgICAgXCJ3aG9QYXlzXCI6IDEsXG4gICAvLyAgICAgXCJlbXBsb3llZU5hbWVcIjogXCJ4aXXlsI/mmI5cIixcbiAgIC8vICAgICBcInRoaXJkUGFydHlOYW1lXCI6IFwiXCIsXG4gICAvLyAgICAgXCJyZWFzb25cIjogMSxcbiAgIC8vICAgICBcImlkXCI6IDUzLFxuICAgLy8gICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxOC0xMS0yMlQwMzoyNzoyNC42NDBaXCIsXG4gICAvLyAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDE4LTExLTIyVDAzOjI3OjI0LjY0MFpcIlxuICAgLy8gICB9LFxuICAgLy8gICBcInN1YmplY3RzXCI6IFtcbiAgIC8vICAgICB7XG4gICAvLyAgICAgICBcInN1YmplY3ROYW1lXCI6IFwi5Li76JCl5Lia5Yqh5pS25YWlXCIsXG4gICAvLyAgICAgICBcInN1YmplY3RDb2RlXCI6IFwiNTAwMVwiLFxuICAgLy8gICAgICAgXCJhbW91bnRcIjogXCIxMjM0NS44OVwiXG4gICAvLyAgICAgfSwge1xuICAgLy8gICAgICAgXCJzdWJqZWN0TmFtZVwiOiBcIuW6lOS6pOeojui0uSAtIOWinuWAvOeojiAtIOmUgOmhueeojlwiLFxuICAgLy8gICAgICAgXCJzdWJqZWN0Q29kZVwiOiBcIjUwMDFcIixcbiAgIC8vICAgICAgIFwiYW1vdW50XCI6IFwiMC4wM1wiXG4gICAvLyAgICAgfSwge1xuICAgLy8gICAgICAgXCJzdWJqZWN0TmFtZVwiOiBcIuS4u+iQpeS4muWKoeaUtuWFpVwiLFxuICAgLy8gICAgICAgXCJzdWJqZWN0Q29kZVwiOiBcIjUwMDFcIixcbiAgIC8vICAgICAgIFwiYW1vdW50XCI6IFwiMTIzNDUuODBcIlxuICAgLy8gICAgIH0sIHtcbiAgIC8vICAgICAgIFwic3ViamVjdE5hbWVcIjogXCLlupTkuqTnqI7otLkgLSDlop7lgLznqI4gLSDplIDpobnnqI5cIixcbiAgIC8vICAgICAgIFwic3ViamVjdENvZGVcIjogXCI1MDAxXCIsXG4gICAvLyAgICAgICBcImFtb3VudFwiOiBcIjAuMDBcIlxuICAgLy8gICAgIH0sXG4gICAvLyAgICAge1xuICAgLy8gICAgICAgXCJzdWJqZWN0TmFtZVwiOiBcIuW6lOaUtui0puasvlwiLFxuICAgLy8gICAgICAgXCJzdWJqZWN0Q29kZVwiOiBcIjExMjJcIixcbiAgIC8vICAgICAgIFwiYW1vdW50XCI6IFwiNS4xNVwiXG4gICAvLyAgICAgfSxcbiAgIC8vICAgXSxcbiAgIC8vICAgXCJhY2NvdW50aW5nU3VwZXJ2aXNvclwiOiBudWxsLFxuICAgLy8gICBcImJvb2trZWVwZXJcIjogbnVsbCxcbiAgIC8vICAgXCJjYXNoaWVyXCI6IG51bGwsXG4gICAvLyAgIFwiYXVkaXRvclwiOiBudWxsLFxuICAgLy8gICBcImlkXCI6IDcsXG4gICAvLyAgIFwidm91Y2hlckRhdGVcIjogXCIyMDE4LTExLTIyVDAzOjE0OjI4LjY2NlpcIixcbiAgIC8vICAgXCJjcmVhdGVkQXRcIjogXCIyMDE4LTExLTIyVDAzOjE0OjI4LjY2NlpcIixcbiAgIC8vICAgXCJ1cGRhdGVkQXRcIjogXCIyMDE4LTExLTIyVDAzOjE0OjI4LjY2NlpcIlxuICAgLy8gfVxuXG4gICAgbGV0IHRoYXQgPSB0aGlzXG5cbiAgICAvLyDojrflj5blsY/luZXlrr1cbiAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHRoYXQud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgICAgdGhhdC4kYXBwbHkoKVxuICAgICAgICAvLyB0aGF0LmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgIH1cbiAgICB9KVxuXG5cbi8vIOWHveaVsOWumuS5ieWMuuWfnyA9PT09PT09PT09PT09PT09PT09XG4gICAgLy8g6K6+572u5LiA5Liq5Z+65YeG5q+U5L6LXG4gICAgbGV0IGNhbCA9IChweCkgPT4ge1xuICAgICAgcmV0dXJuICBweCAvIDc1MCAqIHRoYXQud2lkdGhcbiAgICB9XG5cbiAgICAvLyBjYW52YXPmjaLooYzmmL7npLpcbiAgICBsZXQgbGluZVdyYXAgPSAoY3R4LCBzdHIsIGZvbnRzaXplLCBsaW5laGVpZ2h0LCB3aWR0aCwgeCwgeSkgPT4ge1xuICAgICAgY3R4LnNldEZvbnRTaXplKGZvbnRzaXplKVxuICAgICAgbGV0IHRleHRBcnIgPSBbXVxuICAgICAgbGV0IGluZGV4ID0gMFxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGN0eC5tZWFzdXJlVGV4dChzdHIuc3Vic3RyaW5nKGluZGV4LCBpKSkud2lkdGggPj0gd2lkdGggKiAwLjgpIHtcbiAgICAgICAgICB0ZXh0QXJyLnB1c2goc3RyLnN1YnN0cmluZyhpbmRleCwgaSkpXG4gICAgICAgICAgaW5kZXggPSBpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGV4dEFyci5wdXNoKHN0ci5zdWJzdHJpbmcoaW5kZXgpKVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHRBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRleHRBcnJbaV0sIHgsIHkgKyBsaW5laGVpZ2h0ICogKGkgKyAxKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjdHggPSB3eC5jcmVhdGVDYW52YXNDb250ZXh0KCdjYW52YXNJZCcpXG5cbiAgICBjdHguc2V0RmlsbFN0eWxlKCd3aGl0ZScpXG4gICAgY3R4LmZpbGxSZWN0KGNhbCgwKSwgY2FsKDApLCBjYWwoNzUwKSwgY2FsKDEyMCkgKyAoNyArIHRoaXMucmVzdWx0LnN1YmplY3RzLmxlbmd0aCkgKiBjYWwoMzYpKVxuICAgIGN0eC5zZXRGaWxsU3R5bGUoJ2JsYWNrJylcblxuICAgIC8vIOagh+mimFxuICAgIGN0eC5zZXRGb250U2l6ZShjYWwoMjMpKVxuICAgIGN0eC5zZXRUZXh0QWxpZ24oJ2NlbnRlcicpXG4gICAgY3R4LmZpbGxUZXh0KCforrDotKblh63or4EnLCBjYWwoMzc1KSwgY2FsKDQwKSlcblxuICAgIC8vIOaXtumXtOWPiue8luWPt1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKVxuICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXG4gICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMVxuICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKVxuICAgIGN0eC50cmFuc2xhdGUoY2FsKDczMCksIGNhbCg3MCkpXG4gICAgY3R4LnNldEZvbnRTaXplKGNhbCgxMykpXG4gICAgY3R4LnNldFRleHRBbGlnbigncmlnaHQnKVxuICAgIGN0eC5maWxsVGV4dCh5ZWFyICsgJyDlubQgJyArIG1vbnRoICsgJyDmnIggJyArIGRheSArICcg5Y+3ICAgICAg6K6w5a2X56ysICcgKyB0aGlzLnJlc3VsdC5pZCArICcg5Y+3JywgY2FsKDApLCBjYWwoMjIpKVxuICAgIGN0eC5zZXRUZXh0QWxpZ24oJ2NlbnRlcicpXG4gICAgY3R4LnNldFRleHRBbGlnbignY2VudGVyJylcbiAgICBjdHguc2V0VGV4dEFsaWduKCdjZW50ZXInKVxuXG4gICAgLy8g6KGo5qC8XG4gICAgLy8g5aSW5qGGXG4gICAgbGV0IHJvdyA9IHRoaXMucmVzdWx0LnN1YmplY3RzLmxlbmd0aCArIDJcbiAgICBjdHgudHJhbnNsYXRlKGNhbCgtNzEwKSwgY2FsKDUwKSlcbiAgICBjdHguc2V0U3Ryb2tlU3R5bGUoJyMwMDAnKVxuICAgIGN0eC5zdHJva2VSZWN0KDAsIDAsIGNhbCg3MTApLCBjYWwoMzYpICogcm93KVxuXG4gICAgLy8g5YaF5qGGXG4gICAgZm9yIChsZXQgaSA9IDI7IGkgPCByb3cgLSAxOyBpKyspIHtcbiAgICAgIGN0eC5zZXRTdHJva2VTdHlsZSgnIzk5OScpXG4gICAgICBjdHgubW92ZVRvKGNhbCgyMDApLCBjYWwoMzYpICogaSlcbiAgICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikgKiBpKVxuICAgICAgY3R4LnN0cm9rZSgpXG4gICAgfVxuXG4gICAgY3R4Lm1vdmVUbygwLCBjYWwoMzYpKVxuICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikpXG5cbiAgICBjdHgubW92ZVRvKDAsIGNhbCgzNikgKiAocm93IC0xKSlcbiAgICBjdHgubGluZVRvKGNhbCg3MTApLCBjYWwoMzYpICogKHJvdyAtMSkpXG5cbiAgICBjdHgubW92ZVRvKDAsIGNhbCgzNikgKiByb3cpXG4gICAgY3R4LmxpbmVUbyhjYWwoNzEwKSwgY2FsKDM2KSAqIHJvdylcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDIwMCksIDApXG4gICAgY3R4LmxpbmVUbyhjYWwoMjAwKSwgY2FsKDM2KSAqIChyb3cgLTEpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMzMwKSwgY2FsKDE4KSlcbiAgICBjdHgubGluZVRvKGNhbCgzMzApLCBjYWwoMzYpICogKHJvdyAtIDEpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMjAwKSwgY2FsKDE4KSlcbiAgICBjdHgubGluZVRvKGNhbCg0NjApLCBjYWwoMTgpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoNDYwKSwgMClcbiAgICBjdHgubGluZVRvKGNhbCg0NjApLCBjYWwoMzYpICogcm93KVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoNTg1KSwgMClcbiAgICBjdHgubGluZVRvKGNhbCg1ODUpLCBjYWwoMzYpICogcm93KVxuXG4gICAgY3R4LnN0cm9rZSgpXG5cbiAgICAvLyDooajlpLRcbiAgICBjdHguc2V0Rm9udFNpemUoY2FsKDE1KSlcbiAgICBjdHguZmlsbFRleHQoJ+aRmOimgScsIGNhbCgxMDApLCBjYWwoMjQpKVxuICAgIGN0eC5maWxsVGV4dCgn5YCf5pa56YeR6aKdJywgY2FsKDUyMiksIGNhbCgyNCkpXG4gICAgY3R4LmZpbGxUZXh0KCfotLfmlrnph5Hpop0nLCBjYWwoNjQ2KSwgY2FsKDI0KSlcblxuICAgIGN0eC5zZXRGb250U2l6ZShjYWwoMTQpKVxuICAgIGN0eC5maWxsVGV4dCgn5Lya6K6h56eR55uuJywgY2FsKDMzMCksIGNhbCgxNSkpXG4gICAgY3R4LmZpbGxUZXh0KCfnp5Hnm67ku6PnoIEnLCBjYWwoMjY1KSwgY2FsKDMzKSlcbiAgICBjdHguZmlsbFRleHQoJ+enkeebruWQjeensCcsIGNhbCgzOTUpLCBjYWwoMzMpKVxuXG4gICAgLy8g5YaF5a656YOo5YiGXG4gICAgLy8g5pGY6KaB5YaF5a65XG4gICAgY3R4LnRyYW5zbGF0ZSgwLCBjYWwoMzYpKVxuICAgIGxpbmVXcmFwKGN0eCwgdGhpcy5yZXN1bHQuc3VtbWFyeSwgY2FsKDE0KSwgY2FsKDE2KSwgY2FsKDE2MCksIGNhbCgxMDApLCBjYWwoMTApKVxuXG4gICAgLy8g54mp5ZOB44CB5pyN5Yqh562JXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlc3VsdC5zdWJqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LnN1YmplY3RzW2ldLnN1YmplY3RDb2RlLCBjYWwoMjY1KSwgY2FsKDI0KSArIGNhbCgzNikgKiBpKVxuICAgICAgaWYgKGN0eC5tZWFzdXJlVGV4dCh0aGlzLnJlc3VsdC5zdWJqZWN0c1tpXS5zdWJqZWN0TmFtZSkud2lkdGggPj0gY2FsKDEzMCkgKiAwLjgpIHtcbiAgICAgICAgbGluZVdyYXAoY3R4LCB0aGlzLnJlc3VsdC5zdWJqZWN0c1tpXS5zdWJqZWN0TmFtZSwgY2FsKDE0KSwgY2FsKDE0KSwgY2FsKDEzMCksIGNhbCgzOTUpLCBjYWwoMikgKyBjYWwoMzYpICogaSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5zdWJqZWN0c1tpXS5zdWJqZWN0TmFtZSwgY2FsKDM5NSksIGNhbCgyNCkgKyBjYWwoMzYpICogaSlcbiAgICAgIH1cbiAgICAgIGlmIChpID09PSB0aGlzLnJlc3VsdC5zdWJqZWN0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5zdWJqZWN0c1tpXS5hbW91bnQsIGNhbCg2NDYpLCBjYWwoMjQpICsgY2FsKDM2KSAqIGkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuc3ViamVjdHNbaV0uYW1vdW50LCBjYWwoNTIyKSwgY2FsKDI0KSArIGNhbCgzNikgKiBpKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOWQiOiuoVxuICAgIGN0eC50cmFuc2xhdGUoMCwgY2FsKDM2KSAqIHRoaXMucmVzdWx0LnN1YmplY3RzLmxlbmd0aClcbiAgICBjdHguZmlsbFRleHQoJ+WQiOiuoScsIGNhbCgyMzApLCBjYWwoMjQpKVxuICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5pbnZvaWNlLmFtb3VudEluRmlndWVycywgY2FsKDUyMiksIGNhbCgyNCkpXG4gICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0Lmludm9pY2UuYW1vdW50SW5GaWd1ZXJzLCBjYWwoNjQ2KSwgY2FsKDI0KSlcblxuICAgIC8vIOS/oeaBr+agj1xuICAgIGN0eC5iZWdpblBhdGgoKVxuICAgIC8vIOi+ueahhlxuICAgIGN0eC50cmFuc2xhdGUoMCwgY2FsKDM2KSlcbiAgICBsZXQgbGVmdFRpdGxlID0gWyfkvJrorqHmgLvnrqEnLCAn5a6i5oi3JywgJ+S+m+W6lOWVhicsICfpobnnm64nXVxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykge1xuICAgICAgY3R4LmZpbGxUZXh0KGxlZnRUaXRsZVtpIC0gMV0sIGNhbCg1MCksIGNhbCgyNCkgKyAoaSAtIDEpICogY2FsKDM2KSlcbiAgICAgIGN0eC5tb3ZlVG8oMCwgY2FsKDM2KSAqIGkpXG4gICAgICBjdHgubGluZVRvKGNhbCg3MTApLCBjYWwoMzYpICogaSlcbiAgICB9XG5cbiAgICBjdHgubW92ZVRvKGNhbCgzNTUpLCBjYWwoMzYpKVxuICAgIGN0eC5saW5lVG8oY2FsKDM1NSksIGNhbCgzNikgKiA0KVxuICAgIGN0eC5maWxsVGV4dCgn5ZGY5belJywgY2FsKDQwNSksIGNhbCgzNikgKyBjYWwoMjQpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoNDU1KSwgY2FsKDM2KSlcbiAgICBjdHgubGluZVRvKGNhbCg0NTUpLCBjYWwoMzYpICogNClcbiAgICBjdHguZmlsbFRleHQoJ+WFtuS7luesrOS4ieaWuScsIGNhbCg0MDUpLCBjYWwoMzYpICogMiArIGNhbCgyNCkpXG5cbiAgICBjdHgubW92ZVRvKGNhbCg3MTApLCAwKVxuICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikgKiA0KVxuICAgIGN0eC5maWxsVGV4dCgn5Y+R56Wo5Y+356CBJywgY2FsKDQwNSksIGNhbCgzNikgKiAzICsgY2FsKDI0KSlcblxuICAgIGN0eC5tb3ZlVG8oMCwgMClcbiAgICBjdHgubGluZVRvKDAsIGNhbCgzNikgKiA0KVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMTAwKSwgMClcbiAgICBjdHgubGluZVRvKGNhbCgxMDApLCBjYWwoMzYpICogNClcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDE5MCksIDApXG4gICAgY3R4LmxpbmVUbyhjYWwoMTkwKSwgY2FsKDM2KSlcblxuICAgIGxldCB0aXRsZSA9IFsn6K6w6LSmJywgJ+WHuue6sycsICflrqHmoLgnLCAn5Yi25Y2VJ11cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIHtcbiAgICAgIGN0eC5maWxsVGV4dCh0aXRsZVtpIC0gMV0sIGNhbCgxOTAgKyAxMzAgKiAoaSAtIDEpICsgMjUpLCBjYWwoMjQpIClcbiAgICAgIGN0eC5tb3ZlVG8oY2FsKDE5MCArIDEzMCAqIChpIC0gMSkgKyA1MCksIDApXG4gICAgICBjdHgubGluZVRvKGNhbCgxOTAgKyAxMzAgKiAoaSAtIDEpICsgNTApLCBjYWwoMzYpKVxuICAgICAgY3R4Lm1vdmVUbyhjYWwoMTkwICsgMTMwICogKGkgLSAxKSArIDEzMCksIDApXG4gICAgICBjdHgubGluZVRvKGNhbCgxOTAgKyAxMzAgKiAoaSAtIDEpICsgMTMwKSwgY2FsKDM2KSlcbiAgICB9XG4gICAgY3R4LnN0cm9rZSgpXG5cbiAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQucHJlcGFyZWRCeSwgY2FsKDE5MCArIDEzMCAqIDMgKyA5MCksIGNhbCgyNCkpXG4gICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0Lmludm9pY2UuaW52b2ljZU51bSwgY2FsKDU4MiksIGNhbCgyNCkgKyBjYWwoMzYpICogMylcbiAgICB0aGlzLnJlc3VsdC5wcm9qZWN0ICYmIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5wcm9qZWN0LCBjYWwoMjI4KSwgY2FsKDI0KSArIGNhbCgzNikgKiAzKVxuXG4gICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LnN1cHBsaWVyLCBjYWwoMjI4KSwgY2FsKDI0KSArIGNhbCgzNikgKiAyKVxuICAgIHRoaXMucmVzdWx0LmVtcGxveWVlTmFtZSAmJiBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuZW1wbG95ZWVOYW1lLCBjYWwoNTgyKSwgY2FsKDI0KSArIGNhbCgzNikpXG4gICAgdGhpcy5yZXN1bHQudGhpcmRQYXJ0eU5hbWUgJiYgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LnRoaXJkUGFydHlOYW1lLCBjYWwoNTgyKSwgY2FsKDI0KSArIGNhbCgzNikgKiAyKVxuXG4gICAgY3R4LmRyYXcodHJ1ZSwgKCkgPT4ge1xuICAgICAgdGhhdC5pbWFnZUhlaWdodCA9IGNhbCgxMjApICsgKDcgKyB0aGlzLnJlc3VsdC5zdWJqZWN0cy5sZW5ndGgpICogY2FsKDM2KVxuICAgICAgd3guY2FudmFzVG9UZW1wRmlsZVBhdGgoe1xuICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgeTogMCxcbiAgICAgICAgICB3aWR0aDogY2FsKDc1MCksXG4gICAgICAgICAgaGVpZ2h0OiBjYWwoMTIwKSArICg3ICsgdGhpcy5yZXN1bHQuc3ViamVjdHMubGVuZ3RoKSAqIGNhbCgzNiksXG4gICAgICAgICAgZmlsZVR5cGU6ICdqcGcnLFxuICAgICAgICAgIHF1YWxpdHk6IDAuNSxcbiAgICAgICAgICBjYW52YXNJZDogJ2NhbnZhc0lkJywvL2NhbnZhc0lk5ZKM5qCH562+6YeM6Z2i55qEaWTlr7nlupRcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgIHd4LmhpZGVUb2FzdCgpXG4gICAgICAgICAgICAgIC8v5bCG6I635Y+W5Yiw55qE5Zu+54mH5Li05pe26Lev5b6Ec2V05YiwY2FudmFzU2F2ZWltZ+S4rVxuICAgICAgICAgICAgICB0aGF0LnRlbXBGaWxlUGF0aCA9IHJlcy50ZW1wRmlsZVBhdGhcbiAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDogKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==