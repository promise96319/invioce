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
      ctx.fillRect(cal(0), cal(0), cal(750), cal(120) + (8 + this.result.subjects.length) * cal(36));
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

      // for (let i = 0; i < this.result.CommodityName.length; i++) {
      //   let temp = util(this.result.CommodityName[i].word, this.result.source, this.result.CommodityAmount[i].word)
      //   ctx.fillText(temp.code, cal(265), cal(24) + i * cal(36))
      //   if (ctx.measureText(temp.name).width >= 0.9 * cal(130)) {
      //     lineWrap(ctx, temp.name, cal(14), cal(14), cal(130), cal(395), cal(2) + i * cal(36) )
      //   } else {
      //     ctx.fillText(temp.name, cal(395), cal(24) + i * cal(36))
      //   }
      //   ctx.fillText(parseFloat(Number(this.result.CommodityAmount[i].word) + Number(this.result.CommodityTax[i].word) + '.').toFixed(2), cal(522), cal(24) + i * cal(36))
      // }

      // 价税合计
      // switch (this.result.pay) {
      //   case '公司':
      //       ctx.fillText('2202', cal(265), cal(24) + this.result.CommodityName.length * cal(36))
      //       ctx.fillText('应付账款', cal(395), cal(24) + this.result.CommodityName.length * cal(36))
      //       ctx.fillText(this.result.AmountInFiguers, cal(646), cal(24) + this.result.CommodityName.length * cal(36))
      //       break
      //   case '公司员工':
      //       ctx.fillText('2241.01', cal(265), cal(24) + this.result.CommodityName.length * cal(36))
      //       lineWrap(ctx, '其他应付款-员工报销', cal(14), cal(14), cal(130), cal(395), cal(2) + this.result.CommodityName.length * cal(36))
      //       ctx.fillText(this.result.AmountInFiguers, cal(646), cal(24) + this.result.CommodityName.length * cal(36))
      //       break
      //   case '其他第三方':
      //       ctx.fillText('2241.04', cal(265), cal(24) + this.result.CommodityName.length * cal(36))
      //       lineWrap(ctx, '其他应付款-其他第三方往来', cal(14), cal(14), cal(130), cal(395), cal(2) + this.result.CommodityName.length * cal(36))
      //       ctx.fillText(this.result.AmountInFiguers, cal(646), cal(24) + this.result.CommodityName.length * cal(36))
      //       break
      //    default:
      //       ctx.fillText('2202', cal(265), cal(24) + this.result.CommodityName.length * cal(36))
      //       ctx.fillText('应付账款', cal(395), cal(24) + this.result.CommodityName.length * cal(36))
      //       ctx.fillText(this.result.AmountInFiguers, cal(646), cal(24) + this.result.CommodityName.length * cal(36))
      //       break
      // }
      //
      //
      // 合计
      ctx.translate(0, cal(36) * this.result.subjects.length);
      ctx.fillText('合计', cal(230), cal(24));
      ctx.fillText(this.result.invoice.amountInFiguers, cal(522), cal(24));
      ctx.fillText(this.result.invoice.amountInFiguers, cal(646), cal(24));

      // // 信息栏
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


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Purchase , 'pages/notax/notax'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGF4LmpzIl0sIm5hbWVzIjpbIlB1cmNoYXNlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwid2lkdGgiLCJoZWlnaHQiLCJyZXN1bHQiLCJ0ZW1wRmlsZVBhdGgiLCJpbWFnZUhlaWdodCIsImNvbXB1dGVkIiwibWV0aG9kcyIsImhhbmxkZVNhdmVQaWMiLCJfc2VsZiIsInd4IiwiZ2V0SW1hZ2VJbmZvIiwic3JjIiwic3VjY2VzcyIsInJlczEiLCJzYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtIiwiZmlsZVBhdGgiLCJwYXRoIiwicmVzMiIsInNob3dUb2FzdCIsInRpdGxlIiwic2V0VGltZW91dCIsInJlZGlyZWN0VG8iLCJ1cmwiLCJmYWlsIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNhbmNlbCIsIm9wdGlvbnMiLCJpY29uIiwiZHVyYXRpb24iLCJKU09OIiwicGFyc2UiLCJ0aGF0IiwiZ2V0U3lzdGVtSW5mbyIsInJlcyIsIndpbmRvd1dpZHRoIiwiJGFwcGx5IiwiY2FsIiwicHgiLCJsaW5lV3JhcCIsImN0eCIsInN0ciIsImZvbnRzaXplIiwibGluZWhlaWdodCIsIngiLCJ5Iiwic2V0Rm9udFNpemUiLCJ0ZXh0QXJyIiwiaW5kZXgiLCJpIiwibGVuZ3RoIiwibWVhc3VyZVRleHQiLCJzdWJzdHJpbmciLCJwdXNoIiwiZmlsbFRleHQiLCJjcmVhdGVDYW52YXNDb250ZXh0Iiwic2V0RmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzdWJqZWN0cyIsInNldFRleHRBbGlnbiIsImRhdGUiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJ0cmFuc2xhdGUiLCJpZCIsInJvdyIsInNldFN0cm9rZVN0eWxlIiwic3Ryb2tlUmVjdCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsInN1bW1hcnkiLCJzdWJqZWN0Q29kZSIsInN1YmplY3ROYW1lIiwiYW1vdW50IiwiaW52b2ljZSIsImFtb3VudEluRmlndWVycyIsImJlZ2luUGF0aCIsImxlZnRUaXRsZSIsInByZXBhcmVkQnkiLCJpbnZvaWNlTnVtIiwicHJvamVjdCIsInN1cHBsaWVyIiwiZW1wbG95ZWVOYW1lIiwidGhpcmRQYXJ0eU5hbWUiLCJkcmF3IiwiY2FudmFzVG9UZW1wRmlsZVBhdGgiLCJmaWxlVHlwZSIsInF1YWxpdHkiLCJjYW52YXNJZCIsImhpZGVUb2FzdCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUliQyxJLEdBQU87QUFDTEMsYUFBTyxDQURGO0FBRUxDLGNBQVEsQ0FGSDtBQUdMQyxjQUFRLEVBSEg7QUFJTEMsb0JBQWMsRUFKVDtBQUtMQyxtQkFBYTtBQUxSLEssUUFRUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1JDLG1CQURRLDJCQUNTO0FBQ2YsWUFBSUMsUUFBUSxJQUFaO0FBQ0lDLFdBQUdDLFlBQUgsQ0FBZ0I7QUFDZEMsZUFBS0gsTUFBTUwsWUFERztBQUVkUyxpQkFGYyxtQkFFTEMsSUFGSyxFQUVDO0FBQ2JKLGVBQUdLLHNCQUFILENBQTBCO0FBQ3RCQyx3QkFBVUYsS0FBS0csSUFETztBQUV0QkosdUJBQVMsaUJBQVVLLElBQVYsRUFBZ0I7QUFDdkJSLG1CQUFHUyxTQUFILENBQWE7QUFDWEMseUJBQU87QUFESSxpQkFBYjtBQUdBQywyQkFBVyxZQUFNO0FBQ2ZYLHFCQUFHWSxVQUFILENBQWM7QUFDWkMseUJBQUs7QUFETyxtQkFBZDtBQUdELGlCQUpELEVBSUcsSUFKSDtBQUtELGVBWHFCO0FBWXRCQyxvQkFBTSxjQUFVQyxHQUFWLEVBQWU7QUFDbkJDLHdCQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDRDtBQWRxQixhQUExQjtBQWdCRDtBQW5CYSxT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SGE7QUFJcEJyQyxrQkFBUXFDLElBQUksR0FBSixJQUFXLENBQUMsSUFBSSxPQUFLcEMsTUFBTCxDQUFZeUQsUUFBWixDQUFxQlIsTUFBMUIsSUFBb0NiLElBQUksRUFBSixDQUpuQztBQUtwQnVELG9CQUFVLEtBTFU7QUFNcEJDLG1CQUFTLEdBTlc7QUFPcEJDLG9CQUFVLFVBUFUsRUFPQztBQUNyQm5GLG1CQUFTLGlCQUFDdUIsR0FBRCxFQUFTO0FBQ2QxQixlQUFHdUYsU0FBSDtBQUNBO0FBQ0EvRCxpQkFBSzlCLFlBQUwsR0FBb0JnQyxJQUFJaEMsWUFBeEI7QUFDQThCLGlCQUFLSSxNQUFMO0FBQ0gsV0FibUI7QUFjcEJkLGdCQUFNLGNBQUNDLEdBQUQsRUFBUztBQUNiQyxvQkFBUUMsR0FBUixDQUFZRixHQUFaO0FBQ0Q7QUFoQm1CLFNBQXhCO0FBa0JELE9BcEJEO0FBcUJEOzs7O0VBN1ltQ3lFLGVBQUtDLEk7O2tCQUF0QnZHLFEiLCJmaWxlIjoibm90YXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFB1cmNoYXNlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflh63or4EnXG4gIH1cbiAgY29tcG9uZW50cyA9IHtcblxuICB9XG5cbiAgZGF0YSA9IHtcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgcmVzdWx0OiB7fSxcbiAgICB0ZW1wRmlsZVBhdGg6ICcnLFxuICAgIGltYWdlSGVpZ2h0OiAwLFxuICB9XG5cbiAgY29tcHV0ZWQgPSB7fVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgaGFubGRlU2F2ZVBpYyAoKSB7XG4gICAgICBsZXQgX3NlbGYgPSB0aGlzXG4gICAgICAgICAgd3guZ2V0SW1hZ2VJbmZvKHtcbiAgICAgICAgICAgIHNyYzogX3NlbGYudGVtcEZpbGVQYXRoLFxuICAgICAgICAgICAgc3VjY2VzcyAocmVzMSkge1xuICAgICAgICAgICAgICB3eC5zYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtKHtcbiAgICAgICAgICAgICAgICAgIGZpbGVQYXRoOiByZXMxLnBhdGgsXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzMikge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5L+d5a2Y5oiQ5YqfJyxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcuLi9ob21lL2hvbWUnXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSwgMTUwMClcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBoYW5kbGVDYW5jZWwgKCkge1xuICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgIHVybDogJy4uL2hvbWUvaG9tZSdcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgdGl0bGU6ICfmraPlnKjnlJ/miJDlh63or4EnLFxuICAgICAgIGljb246ICdsb2FkaW5nJyxcbiAgICAgICBkdXJhdGlvbjogMTAwMDBcbiAgICAgfSlcbiAgICB0aGlzLnJlc3VsdCA9IEpTT04ucGFyc2Uob3B0aW9ucy5yZXN1bHQpXG4gICAgLy8gdGhpcy5yZXN1bHQgPSB7XG4gICAgLy8gICBcInN1bW1hcnlcIjogXCLov5nmmK/kuJrliqHmj4/ov7BcIixcbiAgICAvLyAgIFwicHJlcGFyZWRCeVwiOiBcImNcIixcbiAgICAvLyAgIFwiY2xpZW50XCI6IFwi6Iiq5aSp5L+h5oGv5Lu95pyJ6ZmQ5YWs5Y+4XCIsXG4gICAgLy8gICBcInN1cHBsaWVyXCI6IFwi6Iiq5aSp5L+h5oGv6IKh5Lu95pyJ6ZmQ5YWs5Y+4XCIsXG4gICAgLy8gICBcInByb2plY3RcIjogXCLov5nmmK/kuJrliqHmiYDlsZ7pobnnm65cIixcbiAgICAvLyAgIFwiZW1wbG95ZWVOYW1lXCI6IFwieGl15bCP5piOXCIsXG4gICAgLy8gICBcInRoaXJkUGFydHlOYW1lXCI6IFwiXCIsXG4gICAgLy8gICBcImludm9pY2VcIjoge1xuICAgIC8vICAgICBcInB1cmNoYXNlck5hbWVcIjogXCLoiKrlpKnkv6Hmga/ku73mnInpmZDlhazlj7hcIixcbiAgICAvLyAgICAgXCJzZWxsZXJOYW1lXCI6IFwi6Iiq5aSp5L+h5oGv6IKh5Lu95pyJ6ZmQ5YWs5Y+4XCIsXG4gICAgLy8gICAgIFwiaW52b2ljZVR5cGVcIjogMCxcbiAgICAvLyAgICAgXCJpbnZvaWNlTnVtXCI6IFwiMDA1OTM4MDNcIixcbiAgICAvLyAgICAgXCJpbnZvaWNlRGF0ZVwiOiBcIjIwMTQtMTItMzFUMTY6MDA6MDAuMDAwWlwiLFxuICAgIC8vICAgICBcImFtb3VudEluRmlndWVyc1wiOiBcIjUuMTVcIixcbiAgICAvLyAgICAgXCJzZXJ2aWNlRGV0YWlsXCI6IFtcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBcImNvbW1vZGl0eU5hbWVcIjogXCLotKfnianlj6/kuZBcIixcbiAgICAvLyAgICAgICAgIFwiY29tbW9kaXR5QW1vdW50XCI6IFwiMTIzNDUuODlcIixcbiAgICAvLyAgICAgICAgIFwiY29tbW9kaXR5VGF4XCI6IFwiMC4wM1wiXG4gICAgLy8gICAgICAgfSwge1xuICAgIC8vICAgICAgICAgXCJjb21tb2RpdHlOYW1lXCI6IFwi6LSn54mp5Y+v5LmQXCIsXG4gICAgLy8gICAgICAgICBcImNvbW1vZGl0eUFtb3VudFwiOiBcIjEyMzQ1LjgwXCIsXG4gICAgLy8gICAgICAgICBcImNvbW1vZGl0eVRheFwiOiBcIjAuMDBcIlxuICAgIC8vICAgICAgIH0sIHtcbiAgICAvLyAgICAgICAgIFwiY29tbW9kaXR5TmFtZVwiOiBcIui0p+eJqeWPr+S5kFwiLFxuICAgIC8vICAgICAgICAgXCJjb21tb2RpdHlBbW91bnRcIjogXCIxMjM0NS44OVwiLFxuICAgIC8vICAgICAgICAgXCJjb21tb2RpdHlUYXhcIjogXCIwLjAzXCJcbiAgICAvLyAgICAgICB9LCB7XG4gICAgLy8gICAgICAgICBcImNvbW1vZGl0eU5hbWVcIjogXCLotKfnianlj6/kuZBcIixcbiAgICAvLyAgICAgICAgIFwiY29tbW9kaXR5QW1vdW50XCI6IFwiMTIzNDUuODBcIixcbiAgICAvLyAgICAgICAgIFwiY29tbW9kaXR5VGF4XCI6IFwiMC4wM1wiXG4gICAgLy8gICAgICAgfSwge1xuICAgIC8vICAgICAgICAgXCJjb21tb2RpdHlOYW1lXCI6IFwi6LSn54mp5Y+v5LmQXCIsXG4gICAgLy8gICAgICAgICBcImNvbW1vZGl0eUFtb3VudFwiOiBcIjEyMzQ1Ljg5XCIsXG4gICAgLy8gICAgICAgICBcImNvbW1vZGl0eVRheFwiOiBcIjAuMDNcIlxuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgXSxcbiAgICAvLyAgICAgXCJkaXNjcmlwdGlvblwiOiBcIui/meaYr+S4muWKoeaPj+i/sFwiLFxuICAgIC8vICAgICBcInByb2plY3RcIjogXCLov5nmmK/kuJrliqHmiYDlsZ7pobnnm65cIixcbiAgICAvLyAgICAgXCJpZGVudGl0eVwiOiAxLFxuICAgIC8vICAgICBcIndob1BheXNcIjogMSxcbiAgICAvLyAgICAgXCJlbXBsb3llZU5hbWVcIjogXCJ4aXXlsI/mmI5cIixcbiAgICAvLyAgICAgXCJ0aGlyZFBhcnR5TmFtZVwiOiBcIlwiLFxuICAgIC8vICAgICBcInJlYXNvblwiOiAxLFxuICAgIC8vICAgICBcImlkXCI6IDUzLFxuICAgIC8vICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMTgtMTEtMjJUMDM6Mjc6MjQuNjQwWlwiLFxuICAgIC8vICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMTgtMTEtMjJUMDM6Mjc6MjQuNjQwWlwiXG4gICAgLy8gICB9LFxuICAgIC8vICAgXCJzdWJqZWN0c1wiOiBbXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICBcInN1YmplY3ROYW1lXCI6IFwi5bqU5pS26LSm5qy+XCIsXG4gICAgLy8gICAgICAgXCJzdWJqZWN0Q29kZVwiOiBcIjExMjJcIixcbiAgICAvLyAgICAgICBcImFtb3VudFwiOiBcIjUuMTVcIlxuICAgIC8vICAgICB9LCB7XG4gICAgLy8gICAgICAgXCJzdWJqZWN0TmFtZVwiOiBcIuS4u+iQpeS4muWKoeaUtuWFpVwiLFxuICAgIC8vICAgICAgIFwic3ViamVjdENvZGVcIjogXCI1MDAxXCIsXG4gICAgLy8gICAgICAgXCJhbW91bnRcIjogXCIxMjM0NS44OVwiXG4gICAgLy8gICAgIH0sIHtcbiAgICAvLyAgICAgICBcInN1YmplY3ROYW1lXCI6IFwi5Li76JCl5Lia5Yqh5pS25YWlXCIsXG4gICAgLy8gICAgICAgXCJzdWJqZWN0Q29kZVwiOiBcIjUwMDFcIixcbiAgICAvLyAgICAgICBcImFtb3VudFwiOiBcIjEyMzQ1LjgwXCJcbiAgICAvLyAgICAgfSwge1xuICAgIC8vICAgICAgIFwic3ViamVjdE5hbWVcIjogXCLlupTkuqTnqI7otLkgLSDlop7lgLznqI4gLSDplIDpobnnqI5cIixcbiAgICAvLyAgICAgICBcInN1YmplY3RDb2RlXCI6IFwiNTAwMVwiLFxuICAgIC8vICAgICAgIFwiYW1vdW50XCI6IFwiMC4wMFwiXG4gICAgLy8gICAgIH0sIHtcbiAgICAvLyAgICAgICBcInN1YmplY3ROYW1lXCI6IFwi5Li76JCl5Lia5Yqh5pS25YWlXCIsXG4gICAgLy8gICAgICAgXCJzdWJqZWN0Q29kZVwiOiBcIjUwMDFcIixcbiAgICAvLyAgICAgICBcImFtb3VudFwiOiBcIjEyMzQ1Ljg5XCJcbiAgICAvLyAgICAgfSwge1xuICAgIC8vICAgICAgIFwic3ViamVjdE5hbWVcIjogXCLkuLvokKXkuJrliqHmlLblhaVcIixcbiAgICAvLyAgICAgICBcInN1YmplY3RDb2RlXCI6IFwiNTAwMVwiLFxuICAgIC8vICAgICAgIFwiYW1vdW50XCI6IFwiMTIzNDUuODBcIlxuICAgIC8vICAgICB9LCB7XG4gICAgLy8gICAgICAgXCJzdWJqZWN0TmFtZVwiOiBcIuS4u+iQpeS4muWKoeaUtuWFpVwiLFxuICAgIC8vICAgICAgIFwic3ViamVjdENvZGVcIjogXCI1MDAxXCIsXG4gICAgLy8gICAgICAgXCJhbW91bnRcIjogXCIxMjM0NS44OVwiXG4gICAgLy8gICAgIH0sIHtcbiAgICAvLyAgICAgICBcInN1YmplY3ROYW1lXCI6IFwi5bqU5Lqk56iO6LS5IC0g5aKe5YC856iOIC0g6ZSA6aG556iOXCIsXG4gICAgLy8gICAgICAgXCJzdWJqZWN0Q29kZVwiOiBcIjUwMDFcIixcbiAgICAvLyAgICAgICBcImFtb3VudFwiOiBcIjAuMDNcIlxuICAgIC8vICAgICB9XG4gICAgLy8gICBdLFxuICAgIC8vICAgXCJhY2NvdW50aW5nU3VwZXJ2aXNvclwiOiBudWxsLFxuICAgIC8vICAgXCJib29ra2VlcGVyXCI6IG51bGwsXG4gICAgLy8gICBcImNhc2hpZXJcIjogbnVsbCxcbiAgICAvLyAgIFwiYXVkaXRvclwiOiBudWxsLFxuICAgIC8vICAgXCJpZFwiOiA4LFxuICAgIC8vICAgXCJ2b3VjaGVyRGF0ZVwiOiBcIjIwMTgtMTEtMjJUMDM6Mjc6MjQuNjQ5WlwiLFxuICAgIC8vICAgXCJjcmVhdGVkQXRcIjogXCIyMDE4LTExLTIyVDAzOjI3OjI0LjY0OVpcIixcbiAgICAvLyAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0xMS0yMlQwMzoyNzoyNC42NDlaXCJcbiAgICAvLyB9XG5cbiAgICBsZXQgdGhhdCA9IHRoaXNcblxuICAgIC8vIOiOt+WPluWxj+W5leWuvVxuICAgIHd4LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgdGhhdC53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgICB0aGF0LiRhcHBseSgpXG4gICAgICAgIC8vIHRoYXQuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgfVxuICAgIH0pXG5cblxuLy8g5Ye95pWw5a6a5LmJ5Yy65Z+fID09PT09PT09PT09PT09PT09PT1cbiAgICAvLyDorr7nva7kuIDkuKrln7rlh4bmr5TkvotcbiAgICBsZXQgY2FsID0gKHB4KSA9PiB7XG4gICAgICByZXR1cm4gIHB4IC8gNzUwICogdGhhdC53aWR0aFxuICAgIH1cblxuICAgIC8vIGNhbnZhc+aNouihjOaYvuekulxuICAgIGxldCBsaW5lV3JhcCA9IChjdHgsIHN0ciwgZm9udHNpemUsIGxpbmVoZWlnaHQsIHdpZHRoLCB4LCB5KSA9PiB7XG4gICAgICBjdHguc2V0Rm9udFNpemUoZm9udHNpemUpXG4gICAgICBsZXQgdGV4dEFyciA9IFtdXG4gICAgICBsZXQgaW5kZXggPSAwXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoY3R4Lm1lYXN1cmVUZXh0KHN0ci5zdWJzdHJpbmcoaW5kZXgsIGkpKS53aWR0aCA+PSB3aWR0aCAqIDAuOCkge1xuICAgICAgICAgIHRleHRBcnIucHVzaChzdHIuc3Vic3RyaW5nKGluZGV4LCBpKSlcbiAgICAgICAgICBpbmRleCA9IGlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0ZXh0QXJyLnB1c2goc3RyLnN1YnN0cmluZyhpbmRleCkpXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dEFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBjdHguZmlsbFRleHQodGV4dEFycltpXSwgeCwgeSArIGxpbmVoZWlnaHQgKiAoaSArIDEpKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGN0eCA9IHd4LmNyZWF0ZUNhbnZhc0NvbnRleHQoJ2NhbnZhc0lkJylcblxuICAgIGN0eC5zZXRGaWxsU3R5bGUoJ3doaXRlJylcbiAgICBjdHguZmlsbFJlY3QoY2FsKDApLCBjYWwoMCksIGNhbCg3NTApLCBjYWwoMTIwKSArICg4ICsgdGhpcy5yZXN1bHQuc3ViamVjdHMubGVuZ3RoKSAqIGNhbCgzNikpXG4gICAgY3R4LnNldEZpbGxTdHlsZSgnYmxhY2snKVxuXG4gICAgLy8g5qCH6aKYXG4gICAgY3R4LnNldEZvbnRTaXplKGNhbCgyMykpXG4gICAgY3R4LnNldFRleHRBbGlnbignY2VudGVyJylcbiAgICBjdHguZmlsbFRleHQoJ+iusOi0puWHreivgScsIGNhbCgzNzUpLCBjYWwoNDApKVxuXG4gICAgLy8g5pe26Ze05Y+K57yW5Y+3XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgICBsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxXG4gICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpXG4gICAgY3R4LnRyYW5zbGF0ZShjYWwoNzMwKSwgY2FsKDcwKSlcbiAgICBjdHguc2V0Rm9udFNpemUoY2FsKDEzKSlcbiAgICBjdHguc2V0VGV4dEFsaWduKCdyaWdodCcpXG4gICAgY3R4LmZpbGxUZXh0KHllYXIgKyAnIOW5tCAnICsgbW9udGggKyAnIOaciCAnICsgZGF5ICsgJyDlj7cgICAgICDorrDlrZfnrKwgJyArIHRoaXMucmVzdWx0LmlkICsgJyDlj7cnLCBjYWwoMCksIGNhbCgyMikpXG4gICAgY3R4LnNldFRleHRBbGlnbignY2VudGVyJylcbiAgICBjdHguc2V0VGV4dEFsaWduKCdjZW50ZXInKVxuICAgIGN0eC5zZXRUZXh0QWxpZ24oJ2NlbnRlcicpXG5cbiAgICAvLyDooajmoLxcbiAgICAvLyDlpJbmoYZcbiAgICBsZXQgcm93ID0gdGhpcy5yZXN1bHQuc3ViamVjdHMubGVuZ3RoICsgMlxuICAgIGN0eC50cmFuc2xhdGUoY2FsKC03MTApLCBjYWwoNTApKVxuICAgIGN0eC5zZXRTdHJva2VTdHlsZSgnIzAwMCcpXG4gICAgY3R4LnN0cm9rZVJlY3QoMCwgMCwgY2FsKDcxMCksIGNhbCgzNikgKiByb3cpXG5cbiAgICAvLyDlhoXmoYZcbiAgICBmb3IgKGxldCBpID0gMjsgaSA8IHJvdyAtIDE7IGkrKykge1xuICAgICAgY3R4LnNldFN0cm9rZVN0eWxlKCcjOTk5JylcbiAgICAgIGN0eC5tb3ZlVG8oY2FsKDIwMCksIGNhbCgzNikgKiBpKVxuICAgICAgY3R4LmxpbmVUbyhjYWwoNzEwKSwgY2FsKDM2KSAqIGkpXG4gICAgICBjdHguc3Ryb2tlKClcbiAgICB9XG5cbiAgICBjdHgubW92ZVRvKDAsIGNhbCgzNikpXG4gICAgY3R4LmxpbmVUbyhjYWwoNzEwKSwgY2FsKDM2KSlcblxuICAgIGN0eC5tb3ZlVG8oMCwgY2FsKDM2KSAqIChyb3cgLTEpKVxuICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikgKiAocm93IC0xKSlcblxuICAgIGN0eC5tb3ZlVG8oMCwgY2FsKDM2KSAqIHJvdylcbiAgICBjdHgubGluZVRvKGNhbCg3MTApLCBjYWwoMzYpICogcm93KVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMjAwKSwgMClcbiAgICBjdHgubGluZVRvKGNhbCgyMDApLCBjYWwoMzYpICogKHJvdyAtMSkpXG5cbiAgICBjdHgubW92ZVRvKGNhbCgzMzApLCBjYWwoMTgpKVxuICAgIGN0eC5saW5lVG8oY2FsKDMzMCksIGNhbCgzNikgKiAocm93IC0gMSkpXG5cbiAgICBjdHgubW92ZVRvKGNhbCgyMDApLCBjYWwoMTgpKVxuICAgIGN0eC5saW5lVG8oY2FsKDQ2MCksIGNhbCgxOCkpXG5cbiAgICBjdHgubW92ZVRvKGNhbCg0NjApLCAwKVxuICAgIGN0eC5saW5lVG8oY2FsKDQ2MCksIGNhbCgzNikgKiByb3cpXG5cbiAgICBjdHgubW92ZVRvKGNhbCg1ODUpLCAwKVxuICAgIGN0eC5saW5lVG8oY2FsKDU4NSksIGNhbCgzNikgKiByb3cpXG5cbiAgICBjdHguc3Ryb2tlKClcblxuICAgIC8vIOihqOWktFxuICAgIGN0eC5zZXRGb250U2l6ZShjYWwoMTUpKVxuICAgIGN0eC5maWxsVGV4dCgn5pGY6KaBJywgY2FsKDEwMCksIGNhbCgyNCkpXG4gICAgY3R4LmZpbGxUZXh0KCflgJ/mlrnph5Hpop0nLCBjYWwoNTIyKSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQoJ+i0t+aWuemHkeminScsIGNhbCg2NDYpLCBjYWwoMjQpKVxuXG4gICAgY3R4LnNldEZvbnRTaXplKGNhbCgxNCkpXG4gICAgY3R4LmZpbGxUZXh0KCfkvJrorqHnp5Hnm64nLCBjYWwoMzMwKSwgY2FsKDE1KSlcbiAgICBjdHguZmlsbFRleHQoJ+enkeebruS7o+eggScsIGNhbCgyNjUpLCBjYWwoMzMpKVxuICAgIGN0eC5maWxsVGV4dCgn56eR55uu5ZCN56ewJywgY2FsKDM5NSksIGNhbCgzMykpXG5cbiAgICAvLyDlhoXlrrnpg6jliIZcbiAgICAvLyDmkZjopoHlhoXlrrlcbiAgICBjdHgudHJhbnNsYXRlKDAsIGNhbCgzNikpXG4gICAgbGluZVdyYXAoY3R4LCB0aGlzLnJlc3VsdC5zdW1tYXJ5LCBjYWwoMTQpLCBjYWwoMTYpLCBjYWwoMTYwKSwgY2FsKDEwMCksIGNhbCgxMCkpXG5cbiAgICAvLyDnianlk4HjgIHmnI3liqHnrYlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmVzdWx0LnN1YmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuc3ViamVjdHNbaV0uc3ViamVjdENvZGUsIGNhbCgyNjUpLCBjYWwoMjQpICsgY2FsKDM2KSAqIGkpXG4gICAgICBpZiAoY3R4Lm1lYXN1cmVUZXh0KHRoaXMucmVzdWx0LnN1YmplY3RzW2ldLnN1YmplY3ROYW1lKS53aWR0aCA+PSBjYWwoMTMwKSAqIDAuOCkge1xuICAgICAgICBsaW5lV3JhcChjdHgsIHRoaXMucmVzdWx0LnN1YmplY3RzW2ldLnN1YmplY3ROYW1lLCBjYWwoMTQpLCBjYWwoMTQpLCBjYWwoMTMwKSwgY2FsKDM5NSksIGNhbCgyKSArIGNhbCgzNikgKiBpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LnN1YmplY3RzW2ldLnN1YmplY3ROYW1lLCBjYWwoMzk1KSwgY2FsKDI0KSArIGNhbCgzNikgKiBpKVxuICAgICAgfVxuICAgICAgaWYgKGkgPT09IHRoaXMucmVzdWx0LnN1YmplY3RzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LnN1YmplY3RzW2ldLmFtb3VudCwgY2FsKDY0NiksIGNhbCgyNCkgKyBjYWwoMzYpICogaSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5zdWJqZWN0c1tpXS5hbW91bnQsIGNhbCg1MjIpLCBjYWwoMjQpICsgY2FsKDM2KSAqIGkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICBsZXQgdGVtcCA9IHV0aWwodGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZVtpXS53b3JkLCB0aGlzLnJlc3VsdC5zb3VyY2UsIHRoaXMucmVzdWx0LkNvbW1vZGl0eUFtb3VudFtpXS53b3JkKVxuICAgIC8vICAgY3R4LmZpbGxUZXh0KHRlbXAuY29kZSwgY2FsKDI2NSksIGNhbCgyNCkgKyBpICogY2FsKDM2KSlcbiAgICAvLyAgIGlmIChjdHgubWVhc3VyZVRleHQodGVtcC5uYW1lKS53aWR0aCA+PSAwLjkgKiBjYWwoMTMwKSkge1xuICAgIC8vICAgICBsaW5lV3JhcChjdHgsIHRlbXAubmFtZSwgY2FsKDE0KSwgY2FsKDE0KSwgY2FsKDEzMCksIGNhbCgzOTUpLCBjYWwoMikgKyBpICogY2FsKDM2KSApXG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICBjdHguZmlsbFRleHQodGVtcC5uYW1lLCBjYWwoMzk1KSwgY2FsKDI0KSArIGkgKiBjYWwoMzYpKVxuICAgIC8vICAgfVxuICAgIC8vICAgY3R4LmZpbGxUZXh0KHBhcnNlRmxvYXQoTnVtYmVyKHRoaXMucmVzdWx0LkNvbW1vZGl0eUFtb3VudFtpXS53b3JkKSArIE51bWJlcih0aGlzLnJlc3VsdC5Db21tb2RpdHlUYXhbaV0ud29yZCkgKyAnLicpLnRvRml4ZWQoMiksIGNhbCg1MjIpLCBjYWwoMjQpICsgaSAqIGNhbCgzNikpXG4gICAgLy8gfVxuXG4gICAgLy8g5Lu356iO5ZCI6K6hXG4gICAgLy8gc3dpdGNoICh0aGlzLnJlc3VsdC5wYXkpIHtcbiAgICAvLyAgIGNhc2UgJ+WFrOWPuCc6XG4gICAgLy8gICAgICAgY3R4LmZpbGxUZXh0KCcyMjAyJywgY2FsKDI2NSksIGNhbCgyNCkgKyB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCAqIGNhbCgzNikpXG4gICAgLy8gICAgICAgY3R4LmZpbGxUZXh0KCflupTku5jotKbmrL4nLCBjYWwoMzk1KSwgY2FsKDI0KSArIHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoICogY2FsKDM2KSlcbiAgICAvLyAgICAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuQW1vdW50SW5GaWd1ZXJzLCBjYWwoNjQ2KSwgY2FsKDI0KSArIHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoICogY2FsKDM2KSlcbiAgICAvLyAgICAgICBicmVha1xuICAgIC8vICAgY2FzZSAn5YWs5Y+45ZGY5belJzpcbiAgICAvLyAgICAgICBjdHguZmlsbFRleHQoJzIyNDEuMDEnLCBjYWwoMjY1KSwgY2FsKDI0KSArIHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoICogY2FsKDM2KSlcbiAgICAvLyAgICAgICBsaW5lV3JhcChjdHgsICflhbbku5blupTku5jmrL4t5ZGY5bel5oql6ZSAJywgY2FsKDE0KSwgY2FsKDE0KSwgY2FsKDEzMCksIGNhbCgzOTUpLCBjYWwoMikgKyB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCAqIGNhbCgzNikpXG4gICAgLy8gICAgICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LkFtb3VudEluRmlndWVycywgY2FsKDY0NiksIGNhbCgyNCkgKyB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCAqIGNhbCgzNikpXG4gICAgLy8gICAgICAgYnJlYWtcbiAgICAvLyAgIGNhc2UgJ+WFtuS7luesrOS4ieaWuSc6XG4gICAgLy8gICAgICAgY3R4LmZpbGxUZXh0KCcyMjQxLjA0JywgY2FsKDI2NSksIGNhbCgyNCkgKyB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCAqIGNhbCgzNikpXG4gICAgLy8gICAgICAgbGluZVdyYXAoY3R4LCAn5YW25LuW5bqU5LuY5qy+LeWFtuS7luesrOS4ieaWueW+gOadpScsIGNhbCgxNCksIGNhbCgxNCksIGNhbCgxMzApLCBjYWwoMzk1KSwgY2FsKDIpICsgdGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKiBjYWwoMzYpKVxuICAgIC8vICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5BbW91bnRJbkZpZ3VlcnMsIGNhbCg2NDYpLCBjYWwoMjQpICsgdGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKiBjYWwoMzYpKVxuICAgIC8vICAgICAgIGJyZWFrXG4gICAgLy8gICAgZGVmYXVsdDpcbiAgICAvLyAgICAgICBjdHguZmlsbFRleHQoJzIyMDInLCBjYWwoMjY1KSwgY2FsKDI0KSArIHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoICogY2FsKDM2KSlcbiAgICAvLyAgICAgICBjdHguZmlsbFRleHQoJ+W6lOS7mOi0puasvicsIGNhbCgzOTUpLCBjYWwoMjQpICsgdGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKiBjYWwoMzYpKVxuICAgIC8vICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5BbW91bnRJbkZpZ3VlcnMsIGNhbCg2NDYpLCBjYWwoMjQpICsgdGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKiBjYWwoMzYpKVxuICAgIC8vICAgICAgIGJyZWFrXG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy9cbiAgICAvLyDlkIjorqFcbiAgICBjdHgudHJhbnNsYXRlKDAsIGNhbCgzNikgKiB0aGlzLnJlc3VsdC5zdWJqZWN0cy5sZW5ndGgpXG4gICAgY3R4LmZpbGxUZXh0KCflkIjorqEnLCBjYWwoMjMwKSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuaW52b2ljZS5hbW91bnRJbkZpZ3VlcnMsIGNhbCg1MjIpLCBjYWwoMjQpKVxuICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5pbnZvaWNlLmFtb3VudEluRmlndWVycywgY2FsKDY0NiksIGNhbCgyNCkpXG5cbiAgICAvLyAvLyDkv6Hmga/moI9cbiAgICBjdHguYmVnaW5QYXRoKClcbiAgICAvLyDovrnmoYZcbiAgICBjdHgudHJhbnNsYXRlKDAsIGNhbCgzNikpXG4gICAgbGV0IGxlZnRUaXRsZSA9IFsn5Lya6K6h5oC7566hJywgJ+WuouaItycsICfkvpvlupTllYYnLCAn6aG555uuJ11cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIHtcbiAgICAgIGN0eC5maWxsVGV4dChsZWZ0VGl0bGVbaSAtIDFdLCBjYWwoNTApLCBjYWwoMjQpICsgKGkgLSAxKSAqIGNhbCgzNikpXG4gICAgICBjdHgubW92ZVRvKDAsIGNhbCgzNikgKiBpKVxuICAgICAgY3R4LmxpbmVUbyhjYWwoNzEwKSwgY2FsKDM2KSAqIGkpXG4gICAgfVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMzU1KSwgY2FsKDM2KSlcbiAgICBjdHgubGluZVRvKGNhbCgzNTUpLCBjYWwoMzYpICogNClcbiAgICBjdHguZmlsbFRleHQoJ+WRmOW3pScsIGNhbCg0MDUpLCBjYWwoMzYpICsgY2FsKDI0KSlcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDQ1NSksIGNhbCgzNikpXG4gICAgY3R4LmxpbmVUbyhjYWwoNDU1KSwgY2FsKDM2KSAqIDQpXG4gICAgY3R4LmZpbGxUZXh0KCflhbbku5bnrKzkuInmlrknLCBjYWwoNDA1KSwgY2FsKDM2KSAqIDIgKyBjYWwoMjQpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoNzEwKSwgMClcbiAgICBjdHgubGluZVRvKGNhbCg3MTApLCBjYWwoMzYpICogNClcbiAgICBjdHguZmlsbFRleHQoJ+WPkeelqOWPt+eggScsIGNhbCg0MDUpLCBjYWwoMzYpICogMyArIGNhbCgyNCkpXG5cbiAgICBjdHgubW92ZVRvKDAsIDApXG4gICAgY3R4LmxpbmVUbygwLCBjYWwoMzYpICogNClcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDEwMCksIDApXG4gICAgY3R4LmxpbmVUbyhjYWwoMTAwKSwgY2FsKDM2KSAqIDQpXG5cbiAgICBjdHgubW92ZVRvKGNhbCgxOTApLCAwKVxuICAgIGN0eC5saW5lVG8oY2FsKDE5MCksIGNhbCgzNikpXG5cbiAgICBsZXQgdGl0bGUgPSBbJ+iusOi0picsICflh7rnurMnLCAn5a6h5qC4JywgJ+WItuWNlSddXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSB7XG4gICAgICBjdHguZmlsbFRleHQodGl0bGVbaSAtIDFdLCBjYWwoMTkwICsgMTMwICogKGkgLSAxKSArIDI1KSwgY2FsKDI0KSApXG4gICAgICBjdHgubW92ZVRvKGNhbCgxOTAgKyAxMzAgKiAoaSAtIDEpICsgNTApLCAwKVxuICAgICAgY3R4LmxpbmVUbyhjYWwoMTkwICsgMTMwICogKGkgLSAxKSArIDUwKSwgY2FsKDM2KSlcbiAgICAgIGN0eC5tb3ZlVG8oY2FsKDE5MCArIDEzMCAqIChpIC0gMSkgKyAxMzApLCAwKVxuICAgICAgY3R4LmxpbmVUbyhjYWwoMTkwICsgMTMwICogKGkgLSAxKSArIDEzMCksIGNhbCgzNikpXG4gICAgfVxuICAgIGN0eC5zdHJva2UoKVxuXG4gICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LnByZXBhcmVkQnksIGNhbCgxOTAgKyAxMzAgKiAzICsgOTApLCBjYWwoMjQpKVxuICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5pbnZvaWNlLmludm9pY2VOdW0sIGNhbCg1ODIpLCBjYWwoMjQpICsgY2FsKDM2KSAqIDMpXG4gICAgdGhpcy5yZXN1bHQucHJvamVjdCAmJiBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQucHJvamVjdCwgY2FsKDIyOCksIGNhbCgyNCkgKyBjYWwoMzYpICogMylcblxuICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5zdXBwbGllciwgY2FsKDIyOCksIGNhbCgyNCkgKyBjYWwoMzYpICogMilcbiAgICB0aGlzLnJlc3VsdC5lbXBsb3llZU5hbWUgJiYgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LmVtcGxveWVlTmFtZSwgY2FsKDU4MiksIGNhbCgyNCkgKyBjYWwoMzYpKVxuICAgIHRoaXMucmVzdWx0LnRoaXJkUGFydHlOYW1lICYmIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC50aGlyZFBhcnR5TmFtZSwgY2FsKDU4MiksIGNhbCgyNCkgKyBjYWwoMzYpICogMilcblxuICAgIGN0eC5kcmF3KHRydWUsICgpID0+IHtcbiAgICAgIHRoYXQuaW1hZ2VIZWlnaHQgPSBjYWwoMTIwKSArICg3ICsgdGhpcy5yZXN1bHQuc3ViamVjdHMubGVuZ3RoKSAqIGNhbCgzNilcbiAgICAgIHd4LmNhbnZhc1RvVGVtcEZpbGVQYXRoKHtcbiAgICAgICAgICB4OiAwLFxuICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgd2lkdGg6IGNhbCg3NTApLFxuICAgICAgICAgIGhlaWdodDogY2FsKDEyMCkgKyAoNyArIHRoaXMucmVzdWx0LnN1YmplY3RzLmxlbmd0aCkgKiBjYWwoMzYpLFxuICAgICAgICAgIGZpbGVUeXBlOiAnanBnJyxcbiAgICAgICAgICBxdWFsaXR5OiAwLjUsXG4gICAgICAgICAgY2FudmFzSWQ6ICdjYW52YXNJZCcsLy9jYW52YXNJZOWSjOagh+etvumHjOmdoueahGlk5a+55bqUXG4gICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICB3eC5oaWRlVG9hc3QoKVxuICAgICAgICAgICAgICAvL+WwhuiOt+WPluWIsOeahOWbvueJh+S4tOaXtui3r+W+hHNldOWIsGNhbnZhc1NhdmVpbWfkuK1cbiAgICAgICAgICAgICAgdGhhdC50ZW1wRmlsZVBhdGggPSByZXMudGVtcEZpbGVQYXRoXG4gICAgICAgICAgICAgIHRoYXQuJGFwcGx5KClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6IChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG4iXX0=