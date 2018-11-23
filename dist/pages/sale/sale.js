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

  _createClass(Sale, [{
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
      //       "subjectName": "应收账款",
      //       "subjectCode": "1122",
      //       "amount": "5.15"
      //     }, {
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
      //     }
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
      for (var _i2 = 0; _i2 < this.result.subjects.length; _i2++) {
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
      ctx.fillText(this.result.client, cal(228), cal(24) + cal(36));

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

  return Sale;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Sale , 'pages/sale/sale'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGUuanMiXSwibmFtZXMiOlsiU2FsZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsIndpZHRoIiwiaGVpZ2h0IiwicmVzdWx0IiwidGVtcEZpbGVQYXRoIiwiaW1hZ2VIZWlnaHQiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJoYW5sZGVTYXZlUGljIiwiX3NlbGYiLCJ3eCIsImdldEltYWdlSW5mbyIsInNyYyIsInN1Y2Nlc3MiLCJyZXMxIiwic2F2ZUltYWdlVG9QaG90b3NBbGJ1bSIsImZpbGVQYXRoIiwicGF0aCIsInJlczIiLCJzaG93VG9hc3QiLCJ0aXRsZSIsInNldFRpbWVvdXQiLCJyZWRpcmVjdFRvIiwidXJsIiwiZmFpbCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDYW5jZWwiLCJvcHRpb25zIiwiaWNvbiIsImR1cmF0aW9uIiwiSlNPTiIsInBhcnNlIiwidGhhdCIsImdldFN5c3RlbUluZm8iLCJyZXMiLCJ3aW5kb3dXaWR0aCIsIiRhcHBseSIsImNhbCIsInB4IiwibGluZVdyYXAiLCJjdHgiLCJzdHIiLCJmb250c2l6ZSIsImxpbmVoZWlnaHQiLCJ4IiwieSIsInNldEZvbnRTaXplIiwidGV4dEFyciIsImluZGV4IiwiaSIsImxlbmd0aCIsIm1lYXN1cmVUZXh0Iiwic3Vic3RyaW5nIiwicHVzaCIsImZpbGxUZXh0IiwiY3JlYXRlQ2FudmFzQ29udGV4dCIsInNldEZpbGxTdHlsZSIsImZpbGxSZWN0Iiwic3ViamVjdHMiLCJkYXRlIiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwidHJhbnNsYXRlIiwic2V0VGV4dEFsaWduIiwiaWQiLCJyb3ciLCJzZXRTdHJva2VTdHlsZSIsInN0cm9rZVJlY3QiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJzdW1tYXJ5Iiwic3ViamVjdENvZGUiLCJzdWJqZWN0TmFtZSIsImFtb3VudCIsImludm9pY2UiLCJhbW91bnRJbkZpZ3VlcnMiLCJiZWdpblBhdGgiLCJsZWZ0VGl0bGUiLCJwcmVwYXJlZEJ5IiwiaW52b2ljZU51bSIsInByb2plY3QiLCJjbGllbnQiLCJkcmF3IiwiY2FudmFzVG9UZW1wRmlsZVBhdGgiLCJmaWxlVHlwZSIsInF1YWxpdHkiLCJjYW52YXNJZCIsImhpZGVUb2FzdCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUliQyxJLEdBQU87QUFDTEMsYUFBTyxDQURGO0FBRUxDLGNBQVEsQ0FGSDtBQUdMQyxjQUFRLEVBSEg7QUFJTEMsb0JBQWMsRUFKVDtBQUtMQyxtQkFBYTtBQUxSLEssUUFRUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1JDLG1CQURRLDJCQUNTO0FBQ2YsWUFBSUMsUUFBUSxJQUFaO0FBQ0lDLFdBQUdDLFlBQUgsQ0FBZ0I7QUFDZEMsZUFBS0gsTUFBTUwsWUFERztBQUVkUyxpQkFGYyxtQkFFTEMsSUFGSyxFQUVDO0FBQ2JKLGVBQUdLLHNCQUFILENBQTBCO0FBQ3RCQyx3QkFBVUYsS0FBS0csSUFETztBQUV0QkosdUJBQVMsaUJBQVVLLElBQVYsRUFBZ0I7QUFDdkJSLG1CQUFHUyxTQUFILENBQWE7QUFDWEMseUJBQU87QUFESSxpQkFBYjtBQUdBQywyQkFBVyxZQUFNO0FBQ2ZYLHFCQUFHWSxVQUFILENBQWM7QUFDWkMseUJBQUs7QUFETyxtQkFBZDtBQUdELGlCQUpELEVBSUcsSUFKSDtBQUtELGVBWHFCO0FBWXRCQyxvQkFBTSxjQUFVQyxHQUFWLEVBQWU7QUFDbkJDLHdCQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDRDtBQWRxQixhQUExQjtBQWdCRDtBQW5CYSxTQUFoQjtBQXFCTCxPQXhCTztBQXlCUkcsa0JBekJRLDBCQXlCUTtB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QUksRUFBSixJQUFVQSxJQUFJLEVBQUosQ0FBckQ7O0FBRUFHLFVBQUlnRCxJQUFKLENBQVMsSUFBVCxFQUFlLFlBQU07QUFDbkJ4RCxhQUFLN0IsV0FBTCxHQUFtQmtDLElBQUksR0FBSixJQUFXLENBQUMsSUFBSSxPQUFLcEMsTUFBTCxDQUFZeUQsUUFBWixDQUFxQlIsTUFBMUIsSUFBb0NiLElBQUksRUFBSixDQUFsRTtBQUNBN0IsV0FBR2lGLG9CQUFILENBQXdCO0FBQ3BCN0MsYUFBRyxDQURpQjtBQUVwQkMsYUFBRyxDQUZpQjtBQUdwQjlDLGlCQUFPc0MsSUFBSSxHQUFKLENBSGE7QUFJcEJyQyxrQkFBUXFDLElBQUksR0FBSixJQUFXLENBQUMsSUFBSSxPQUFLcEMsTUFBTCxDQUFZeUQsUUFBWixDQUFxQlIsTUFBMUIsSUFBb0NiLElBQUksRUFBSixDQUpuQztBQUtwQnFELG9CQUFVLEtBTFU7QUFNcEJDLG1CQUFTLEdBTlc7QUFPcEJDLG9CQUFVLFVBUFUsRUFPQztBQUNyQmpGLG1CQUFTLGlCQUFDdUIsR0FBRCxFQUFTO0FBQ2QxQixlQUFHcUYsU0FBSDtBQUNBO0FBQ0E3RCxpQkFBSzlCLFlBQUwsR0FBb0JnQyxJQUFJaEMsWUFBeEI7QUFDQThCLGlCQUFLSSxNQUFMO0FBQ0gsV0FibUI7QUFjcEJkLGdCQUFNLGNBQUNDLEdBQUQsRUFBUztBQUNiQyxvQkFBUUMsR0FBUixDQUFZRixHQUFaO0FBQ0Q7QUFoQm1CLFNBQXhCO0FBa0JELE9BcEJEO0FBcUJEOzs7O0VBeFYrQnVFLGVBQUtDLEk7O2tCQUFsQnJHLEkiLCJmaWxlIjoic2FsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2FsZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Yet6K+BJ1xuICB9XG4gIGNvbXBvbmVudHMgPSB7XG5cbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIHJlc3VsdDoge30sXG4gICAgdGVtcEZpbGVQYXRoOiAnJyxcbiAgICBpbWFnZUhlaWdodDogMCxcbiAgfVxuXG4gIGNvbXB1dGVkID0ge31cblxuICBtZXRob2RzID0ge1xuICAgIGhhbmxkZVNhdmVQaWMgKCkge1xuICAgICAgbGV0IF9zZWxmID0gdGhpc1xuICAgICAgICAgIHd4LmdldEltYWdlSW5mbyh7XG4gICAgICAgICAgICBzcmM6IF9zZWxmLnRlbXBGaWxlUGF0aCxcbiAgICAgICAgICAgIHN1Y2Nlc3MgKHJlczEpIHtcbiAgICAgICAgICAgICAgd3guc2F2ZUltYWdlVG9QaG90b3NBbGJ1bSh7XG4gICAgICAgICAgICAgICAgICBmaWxlUGF0aDogcmVzMS5wYXRoLFxuICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlczIpIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+S/neWtmOaIkOWKnycsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHd4LnJlZGlyZWN0VG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi4vaG9tZS9ob21lJ1xuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0sIDE1MDApXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgaGFuZGxlQ2FuY2VsICgpIHtcbiAgICAgIHd4LnJlZGlyZWN0VG8oe1xuICAgICAgICB1cmw6ICcuLi9ob21lL2hvbWUnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gICBvbkxvYWQob3B0aW9ucykge1xuICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgIHRpdGxlOiAn5q2j5Zyo55Sf5oiQ5Yet6K+BJyxcbiAgICAgICBpY29uOiAnbG9hZGluZycsXG4gICAgICAgZHVyYXRpb246IDEwMDAwXG4gICAgIH0pXG4gICAgdGhpcy5yZXN1bHQgPSBKU09OLnBhcnNlKG9wdGlvbnMucmVzdWx0KVxuICAgLy8gIHRoaXMucmVzdWx0ID0ge1xuICAgLy8gICBcInN1bW1hcnlcIjogXCLov5nmmK/kuJrliqHmj4/ov7BcIixcbiAgIC8vICAgXCJwcmVwYXJlZEJ5XCI6IFwiY1wiLFxuICAgLy8gICBcImNsaWVudFwiOiBcIuS4qlwiLFxuICAgLy8gICBcInN1cHBsaWVyXCI6IFwi5bm/5Lic6IuP5a6B5LqR5ZWG56O35ZSu5pyJ6ZmQ5YWs5Y+4XCIsXG4gICAvLyAgIFwicHJvamVjdFwiOiBcIui/meaYr+S4muWKoeaJgOWxnumhueebrlwiLFxuICAgLy8gICBcImVtcGxveWVlTmFtZVwiOiBcInhpdeWwj+aYjlwiLFxuICAgLy8gICBcInRoaXJkUGFydHlOYW1lXCI6IFwiXCIsXG4gICAvLyAgIFwiaW52b2ljZVwiOiB7XG4gICAvLyAgICAgXCJwdXJjaGFzZXJOYW1lXCI6IFwi6Iiq5aSp5L+h5oGv5Lu95pyJ6ZmQ5YWs5Y+4XCIsXG4gICAvLyAgICAgXCJzZWxsZXJOYW1lXCI6IFwi6Iiq5aSp5L+h5oGv6IKh5Lu95pyJ6ZmQ5YWs5Y+4XCIsXG4gICAvLyAgICAgXCJpbnZvaWNlVHlwZVwiOiAwLFxuICAgLy8gICAgIFwiaW52b2ljZU51bVwiOiBcIjAwNTkzODAzXCIsXG4gICAvLyAgICAgXCJpbnZvaWNlRGF0ZVwiOiBcIjIwMTQtMTItMzFUMTY6MDA6MDAuMDAwWlwiLFxuICAgLy8gICAgIFwiYW1vdW50SW5GaWd1ZXJzXCI6IFwiNS4xNVwiLFxuICAgLy8gICAgIFwic2VydmljZURldGFpbFwiOiBbXG4gICAvLyAgICAgICB7XG4gICAvLyAgICAgICAgIFwiY29tbW9kaXR5TmFtZVwiOiBcIui0p+eJqeWPr+S5kFwiLFxuICAgLy8gICAgICAgICBcImNvbW1vZGl0eUFtb3VudFwiOiBcIjEyMzQ1Ljg5XCIsXG4gICAvLyAgICAgICAgIFwiY29tbW9kaXR5VGF4XCI6IFwiMC4wM1wiXG4gICAvLyAgICAgICB9LCB7XG4gICAvLyAgICAgICAgIFwiY29tbW9kaXR5TmFtZVwiOiBcIui0p+eJqeWPr+S5kFwiLFxuICAgLy8gICAgICAgICBcImNvbW1vZGl0eUFtb3VudFwiOiBcIjEyMzQ1LjgwXCIsXG4gICAvLyAgICAgICAgIFwiY29tbW9kaXR5VGF4XCI6IFwiMC4wMFwiXG4gICAvLyAgICAgICB9LCB7XG4gICAvLyAgICAgICAgIFwiY29tbW9kaXR5TmFtZVwiOiBcIui0p+eJqeWPr+S5kFwiLFxuICAgLy8gICAgICAgICBcImNvbW1vZGl0eUFtb3VudFwiOiBcIjEyMzQ1Ljg5XCIsXG4gICAvLyAgICAgICAgIFwiY29tbW9kaXR5VGF4XCI6IFwiMC4wM1wiXG4gICAvLyAgICAgICB9LCB7XG4gICAvLyAgICAgICAgIFwiY29tbW9kaXR5TmFtZVwiOiBcIui0p+eJqeWPr+S5kFwiLFxuICAgLy8gICAgICAgICBcImNvbW1vZGl0eUFtb3VudFwiOiBcIjEyMzQ1LjgwXCIsXG4gICAvLyAgICAgICAgIFwiY29tbW9kaXR5VGF4XCI6IFwiMC4wM1wiXG4gICAvLyAgICAgICB9LCB7XG4gICAvLyAgICAgICAgIFwiY29tbW9kaXR5TmFtZVwiOiBcIui0p+eJqeWPr+S5kFwiLFxuICAgLy8gICAgICAgICBcImNvbW1vZGl0eUFtb3VudFwiOiBcIjEyMzQ1Ljg5XCIsXG4gICAvLyAgICAgICAgIFwiY29tbW9kaXR5VGF4XCI6IFwiMC4wM1wiXG4gICAvLyAgICAgICB9XG4gICAvLyAgICAgXSxcbiAgIC8vICAgICBcImRpc2NyaXB0aW9uXCI6IFwi6L+Z5piv5Lia5Yqh5o+P6L+wXCIsXG4gICAvLyAgICAgXCJwcm9qZWN0XCI6IFwi6L+Z5piv5Lia5Yqh5omA5bGe6aG555uuXCIsXG4gICAvLyAgICAgXCJpZGVudGl0eVwiOiAxLFxuICAgLy8gICAgIFwid2hvUGF5c1wiOiAxLFxuICAgLy8gICAgIFwiZW1wbG95ZWVOYW1lXCI6IFwieGl15bCP5piOXCIsXG4gICAvLyAgICAgXCJ0aGlyZFBhcnR5TmFtZVwiOiBcIlwiLFxuICAgLy8gICAgIFwicmVhc29uXCI6IDEsXG4gICAvLyAgICAgXCJpZFwiOiA1MyxcbiAgIC8vICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMTgtMTEtMjJUMDM6Mjc6MjQuNjQwWlwiLFxuICAgLy8gICAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0xMS0yMlQwMzoyNzoyNC42NDBaXCJcbiAgIC8vICAgfSxcbiAgIC8vICAgXCJzdWJqZWN0c1wiOiBbXG4gICAvLyAgICAge1xuICAgLy8gICAgICAgXCJzdWJqZWN0TmFtZVwiOiBcIuW6lOaUtui0puasvlwiLFxuICAgLy8gICAgICAgXCJzdWJqZWN0Q29kZVwiOiBcIjExMjJcIixcbiAgIC8vICAgICAgIFwiYW1vdW50XCI6IFwiNS4xNVwiXG4gICAvLyAgICAgfSwge1xuICAgLy8gICAgICAgXCJzdWJqZWN0TmFtZVwiOiBcIuS4u+iQpeS4muWKoeaUtuWFpVwiLFxuICAgLy8gICAgICAgXCJzdWJqZWN0Q29kZVwiOiBcIjUwMDFcIixcbiAgIC8vICAgICAgIFwiYW1vdW50XCI6IFwiMTIzNDUuODlcIlxuICAgLy8gICAgIH0sIHtcbiAgIC8vICAgICAgIFwic3ViamVjdE5hbWVcIjogXCLlupTkuqTnqI7otLkgLSDlop7lgLznqI4gLSDplIDpobnnqI5cIixcbiAgIC8vICAgICAgIFwic3ViamVjdENvZGVcIjogXCI1MDAxXCIsXG4gICAvLyAgICAgICBcImFtb3VudFwiOiBcIjAuMDNcIlxuICAgLy8gICAgIH0sIHtcbiAgIC8vICAgICAgIFwic3ViamVjdE5hbWVcIjogXCLkuLvokKXkuJrliqHmlLblhaVcIixcbiAgIC8vICAgICAgIFwic3ViamVjdENvZGVcIjogXCI1MDAxXCIsXG4gICAvLyAgICAgICBcImFtb3VudFwiOiBcIjEyMzQ1LjgwXCJcbiAgIC8vICAgICB9LCB7XG4gICAvLyAgICAgICBcInN1YmplY3ROYW1lXCI6IFwi5bqU5Lqk56iO6LS5IC0g5aKe5YC856iOIC0g6ZSA6aG556iOXCIsXG4gICAvLyAgICAgICBcInN1YmplY3RDb2RlXCI6IFwiNTAwMVwiLFxuICAgLy8gICAgICAgXCJhbW91bnRcIjogXCIwLjAwXCJcbiAgIC8vICAgICB9XG4gICAvLyAgIF0sXG4gICAvLyAgIFwiYWNjb3VudGluZ1N1cGVydmlzb3JcIjogbnVsbCxcbiAgIC8vICAgXCJib29ra2VlcGVyXCI6IG51bGwsXG4gICAvLyAgIFwiY2FzaGllclwiOiBudWxsLFxuICAgLy8gICBcImF1ZGl0b3JcIjogbnVsbCxcbiAgIC8vICAgXCJpZFwiOiA3LFxuICAgLy8gICBcInZvdWNoZXJEYXRlXCI6IFwiMjAxOC0xMS0yMlQwMzoxNDoyOC42NjZaXCIsXG4gICAvLyAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxOC0xMS0yMlQwMzoxNDoyOC42NjZaXCIsXG4gICAvLyAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0xMS0yMlQwMzoxNDoyOC42NjZaXCJcbiAgIC8vIH1cblxuICAgIGxldCB0aGF0ID0gdGhpc1xuXG4gICAgLy8g6I635Y+W5bGP5bmV5a69XG4gICAgd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICB0aGF0LndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICAgIHRoYXQuJGFwcGx5KClcbiAgICAgICAgLy8gdGhhdC5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICB9XG4gICAgfSlcblxuLy8g5Ye95pWw5a6a5LmJ5Yy65Z+fID09PT09PT09PT09PT09PT09PT1cbiAgICAvLyDorr7nva7kuIDkuKrln7rlh4bmr5TkvotcbiAgICBsZXQgY2FsID0gKHB4KSA9PiB7XG4gICAgICByZXR1cm4gIHB4IC8gNzUwICogdGhhdC53aWR0aFxuICAgIH1cblxuICAgIC8vIGNhbnZhc+aNouihjOaYvuekulxuICAgIGxldCBsaW5lV3JhcCA9IChjdHgsIHN0ciwgZm9udHNpemUsIGxpbmVoZWlnaHQsIHdpZHRoLCB4LCB5KSA9PiB7XG4gICAgICBjdHguc2V0Rm9udFNpemUoZm9udHNpemUpXG4gICAgICBsZXQgdGV4dEFyciA9IFtdXG4gICAgICBsZXQgaW5kZXggPSAwXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoY3R4Lm1lYXN1cmVUZXh0KHN0ci5zdWJzdHJpbmcoaW5kZXgsIGkpKS53aWR0aCA+PSB3aWR0aCAqIDAuOCkge1xuICAgICAgICAgIHRleHRBcnIucHVzaChzdHIuc3Vic3RyaW5nKGluZGV4LCBpKSlcbiAgICAgICAgICBpbmRleCA9IGlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0ZXh0QXJyLnB1c2goc3RyLnN1YnN0cmluZyhpbmRleCkpXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dEFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBjdHguZmlsbFRleHQodGV4dEFycltpXSwgeCwgeSArIGxpbmVoZWlnaHQgKiAoaSArIDEpKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGN0eCA9IHd4LmNyZWF0ZUNhbnZhc0NvbnRleHQoJ2NhbnZhc0lkJylcblxuICAgIGN0eC5zZXRGaWxsU3R5bGUoJ3doaXRlJylcbiAgICBjdHguZmlsbFJlY3QoY2FsKDApLCBjYWwoMCksIGNhbCg3NTApLCBjYWwoMTIwKSArICg3ICsgdGhpcy5yZXN1bHQuc3ViamVjdHMubGVuZ3RoKSAqIGNhbCgzNikpXG4gICAgY3R4LnNldEZpbGxTdHlsZSgnYmxhY2snKVxuXG4gICAgLy8g5qCH6aKYXG4gICAgY3R4LnNldEZvbnRTaXplKGNhbCgyMykpXG4gICAgY3R4LmZpbGxUZXh0KCforrDotKblh63or4EnLCBjYWwoMzc1KSwgY2FsKDQwKSlcblxuICAgIC8vIOaXtumXtOWPiue8luWPt1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKVxuICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXG4gICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMVxuICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKVxuICAgIGN0eC50cmFuc2xhdGUoY2FsKDczMCksIGNhbCg3MCkpXG4gICAgY3R4LnNldEZvbnRTaXplKGNhbCgxMykpXG4gICAgY3R4LnNldFRleHRBbGlnbigncmlnaHQnKVxuICAgIGN0eC5maWxsVGV4dCh5ZWFyICsgJyDlubQgJyArIG1vbnRoICsgJyDmnIggJyArIGRheSArICcg5Y+3ICAgICAg6K6w5a2X56ysICcgKyB0aGlzLnJlc3VsdC5pZCArICcg5Y+3JywgY2FsKDApLCBjYWwoMjIpKVxuICAgIGN0eC5zZXRUZXh0QWxpZ24oJ2NlbnRlcicpXG4gICAgY3R4LnNldFRleHRBbGlnbignY2VudGVyJylcbiAgICBjdHguc2V0VGV4dEFsaWduKCdjZW50ZXInKVxuXG4gICAgLy8g6KGo5qC8XG4gICAgLy8g5aSW5qGGXG4gICAgbGV0IHJvdyA9IHRoaXMucmVzdWx0LnN1YmplY3RzLmxlbmd0aCArIDJcbiAgICBjdHgudHJhbnNsYXRlKGNhbCgtNzEwKSwgY2FsKDUwKSlcbiAgICBjdHguc2V0U3Ryb2tlU3R5bGUoJyMwMDAnKVxuICAgIGN0eC5zdHJva2VSZWN0KDAsIDAsIGNhbCg3MTApLCBjYWwoMzYpICogcm93KVxuXG4gICAgLy8g5YaF5qGGXG4gICAgZm9yIChsZXQgaSA9IDI7IGkgPCByb3cgLSAxOyBpKyspIHtcbiAgICAgIGN0eC5zZXRTdHJva2VTdHlsZSgnIzk5OScpXG4gICAgICBjdHgubW92ZVRvKGNhbCgyMDApLCBjYWwoMzYpICogaSlcbiAgICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikgKiBpKVxuICAgICAgY3R4LnN0cm9rZSgpXG4gICAgfVxuXG4gICAgY3R4Lm1vdmVUbygwLCBjYWwoMzYpKVxuICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikpXG5cbiAgICBjdHgubW92ZVRvKDAsIGNhbCgzNikgKiAocm93IC0xKSlcbiAgICBjdHgubGluZVRvKGNhbCg3MTApLCBjYWwoMzYpICogKHJvdyAtMSkpXG5cbiAgICBjdHgubW92ZVRvKDAsIGNhbCgzNikgKiByb3cpXG4gICAgY3R4LmxpbmVUbyhjYWwoNzEwKSwgY2FsKDM2KSAqIHJvdylcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDIwMCksIDApXG4gICAgY3R4LmxpbmVUbyhjYWwoMjAwKSwgY2FsKDM2KSAqIChyb3cgLTEpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMzMwKSwgY2FsKDE4KSlcbiAgICBjdHgubGluZVRvKGNhbCgzMzApLCBjYWwoMzYpICogKHJvdyAtIDEpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMjAwKSwgY2FsKDE4KSlcbiAgICBjdHgubGluZVRvKGNhbCg0NjApLCBjYWwoMTgpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoNDYwKSwgMClcbiAgICBjdHgubGluZVRvKGNhbCg0NjApLCBjYWwoMzYpICogcm93KVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoNTg1KSwgMClcbiAgICBjdHgubGluZVRvKGNhbCg1ODUpLCBjYWwoMzYpICogcm93KVxuXG4gICAgY3R4LnN0cm9rZSgpXG5cbiAgICAvLyDooajlpLRcbiAgICBjdHguc2V0Rm9udFNpemUoY2FsKDE1KSlcbiAgICBjdHguc2V0VGV4dEFsaWduKCdjZW50ZXInKVxuICAgIGN0eC5maWxsVGV4dCgn5pGY6KaBJywgY2FsKDEwMCksIGNhbCgyNCkpXG4gICAgY3R4LmZpbGxUZXh0KCflgJ/mlrnph5Hpop0nLCBjYWwoNTIyKSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQoJ+i0t+aWuemHkeminScsIGNhbCg2NDYpLCBjYWwoMjQpKVxuXG4gICAgY3R4LnNldEZvbnRTaXplKGNhbCgxNCkpXG4gICAgY3R4LmZpbGxUZXh0KCfkvJrorqHnp5Hnm64nLCBjYWwoMzMwKSwgY2FsKDE1KSlcbiAgICBjdHguZmlsbFRleHQoJ+enkeebruS7o+eggScsIGNhbCgyNjUpLCBjYWwoMzMpKVxuICAgIGN0eC5maWxsVGV4dCgn56eR55uu5ZCN56ewJywgY2FsKDM5NSksIGNhbCgzMykpXG5cbiAgICAvLyDlhoXlrrnpg6jliIZcbiAgICAvLyDmkZjopoHlhoXlrrlcbiAgICBjdHgudHJhbnNsYXRlKDAsIGNhbCgzNikpXG4gICAgbGluZVdyYXAoY3R4LCB0aGlzLnJlc3VsdC5zdW1tYXJ5LCBjYWwoMTQpLCBjYWwoMTYpLCBjYWwoMTYwKSwgY2FsKDEwMCksIGNhbCgxMCkpXG5cbiAgICAvLyDnianlk4HjgIHmnI3liqHnrYlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmVzdWx0LnN1YmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuc3ViamVjdHNbaV0uc3ViamVjdENvZGUsIGNhbCgyNjUpLCBjYWwoMjQpICsgY2FsKDM2KSAqIGkpXG4gICAgICBpZiAoY3R4Lm1lYXN1cmVUZXh0KHRoaXMucmVzdWx0LnN1YmplY3RzW2ldLnN1YmplY3ROYW1lKS53aWR0aCA+PSBjYWwoMTMwKSAqIDAuOCkge1xuICAgICAgICBsaW5lV3JhcChjdHgsIHRoaXMucmVzdWx0LnN1YmplY3RzW2ldLnN1YmplY3ROYW1lLCBjYWwoMTQpLCBjYWwoMTQpLCBjYWwoMTMwKSwgY2FsKDM5NSksIGNhbCgyKSArIGNhbCgzNikgKiBpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LnN1YmplY3RzW2ldLnN1YmplY3ROYW1lLCBjYWwoMzk1KSwgY2FsKDI0KSArIGNhbCgzNikgKiBpKVxuICAgICAgfVxuICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LnN1YmplY3RzW2ldLmFtb3VudCwgY2FsKDUyMiksIGNhbCgyNCkgKyBjYWwoMzYpICogaSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5zdWJqZWN0c1tpXS5hbW91bnQsIGNhbCg2NDYpLCBjYWwoMjQpICsgY2FsKDM2KSAqIGkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5ZCI6K6hXG4gICAgY3R4LnRyYW5zbGF0ZSgwLCBjYWwoMzYpICogKHRoaXMucmVzdWx0LnN1YmplY3RzLmxlbmd0aCkpXG4gICAgY3R4LmZpbGxUZXh0KCflkIjorqEnLCBjYWwoMjMwKSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuaW52b2ljZS5hbW91bnRJbkZpZ3VlcnMsIGNhbCg1MjIpLCBjYWwoMjQpKVxuICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5pbnZvaWNlLmFtb3VudEluRmlndWVycywgY2FsKDY0NiksIGNhbCgyNCkpXG5cbiAgICAvLyDkv6Hmga/moI9cbiAgICBjdHguYmVnaW5QYXRoKClcbiAgICAvLyDovrnmoYZcbiAgICBjdHgudHJhbnNsYXRlKDAsIGNhbCgzNikpXG4gICAgbGV0IGxlZnRUaXRsZSA9IFsn5Lya6K6h5oC7566hJywgJ+WuouaItycsICfkvpvlupTllYYnLCAn6aG555uuJ11cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIHtcbiAgICAgIGN0eC5maWxsVGV4dChsZWZ0VGl0bGVbaSAtIDFdLCBjYWwoNTApLCBjYWwoMjQpICsgKGkgLSAxKSAqIGNhbCgzNikpXG4gICAgICBjdHgubW92ZVRvKDAsIGNhbCgzNikgKiBpKVxuICAgICAgY3R4LmxpbmVUbyhjYWwoNzEwKSwgY2FsKDM2KSAqIGkpXG4gICAgfVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMzU1KSwgY2FsKDM2KSlcbiAgICBjdHgubGluZVRvKGNhbCgzNTUpLCBjYWwoMzYpICogNClcbiAgICBjdHguZmlsbFRleHQoJ+WRmOW3pScsIGNhbCg0MDUpLCBjYWwoMzYpICsgY2FsKDI0KSlcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDQ1NSksIGNhbCgzNikpXG4gICAgY3R4LmxpbmVUbyhjYWwoNDU1KSwgY2FsKDM2KSAqIDQpXG4gICAgY3R4LmZpbGxUZXh0KCflhbbku5bnrKzkuInmlrknLCBjYWwoNDA1KSwgY2FsKDM2KSAqIDIgKyBjYWwoMjQpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoNzEwKSwgMClcbiAgICBjdHgubGluZVRvKGNhbCg3MTApLCBjYWwoMzYpICogNClcbiAgICBjdHguZmlsbFRleHQoJ+WPkeelqOWPt+eggScsIGNhbCg0MDUpLCBjYWwoMzYpICogMyArIGNhbCgyNCkpXG5cbiAgICBjdHgubW92ZVRvKDAsIDApXG4gICAgY3R4LmxpbmVUbygwLCBjYWwoMzYpICogNClcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDEwMCksIDApXG4gICAgY3R4LmxpbmVUbyhjYWwoMTAwKSwgY2FsKDM2KSAqIDQpXG5cbiAgICBjdHgubW92ZVRvKGNhbCgxOTApLCAwKVxuICAgIGN0eC5saW5lVG8oY2FsKDE5MCksIGNhbCgzNikpXG4gICAgbGV0IHRpdGxlID0gWyforrDotKYnLCAn5Ye657qzJywgJ+WuoeaguCcsICfliLbljZUnXVxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykge1xuICAgICAgY3R4LmZpbGxUZXh0KHRpdGxlW2kgLSAxXSwgY2FsKDE5MCArIDEzMCAqIChpIC0gMSkgKyAyNSksIGNhbCgyNCkgKVxuICAgICAgY3R4Lm1vdmVUbyhjYWwoMTkwICsgMTMwICogKGkgLSAxKSArIDUwKSwgMClcbiAgICAgIGN0eC5saW5lVG8oY2FsKDE5MCArIDEzMCAqIChpIC0gMSkgKyA1MCksIGNhbCgzNikpXG4gICAgICBjdHgubW92ZVRvKGNhbCgxOTAgKyAxMzAgKiAoaSAtIDEpICsgMTMwKSwgMClcbiAgICAgIGN0eC5saW5lVG8oY2FsKDE5MCArIDEzMCAqIChpIC0gMSkgKyAxMzApLCBjYWwoMzYpKVxuICAgIH1cbiAgICBjdHguc3Ryb2tlKClcblxuICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5wcmVwYXJlZEJ5LCBjYWwoMTkwICsgMTMwICogMyArIDkwKSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuaW52b2ljZS5pbnZvaWNlTnVtLCBjYWwoNTgyKSwgY2FsKDI0KSArIGNhbCgzNikgKiAzKVxuICAgIHRoaXMucmVzdWx0LnByb2plY3QgJiYgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LnByb2plY3QsIGNhbCgyMjgpLCBjYWwoMjQpICsgY2FsKDM2KSAqIDMpXG4gICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LmNsaWVudCwgY2FsKDIyOCksIGNhbCgyNCkgKyBjYWwoMzYpKVxuXG4gICAgY3R4LmRyYXcodHJ1ZSwgKCkgPT4ge1xuICAgICAgdGhhdC5pbWFnZUhlaWdodCA9IGNhbCgxMjApICsgKDcgKyB0aGlzLnJlc3VsdC5zdWJqZWN0cy5sZW5ndGgpICogY2FsKDM2KVxuICAgICAgd3guY2FudmFzVG9UZW1wRmlsZVBhdGgoe1xuICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgeTogMCxcbiAgICAgICAgICB3aWR0aDogY2FsKDc1MCksXG4gICAgICAgICAgaGVpZ2h0OiBjYWwoMTIwKSArICg3ICsgdGhpcy5yZXN1bHQuc3ViamVjdHMubGVuZ3RoKSAqIGNhbCgzNiksXG4gICAgICAgICAgZmlsZVR5cGU6ICdqcGcnLFxuICAgICAgICAgIHF1YWxpdHk6IDAuNSxcbiAgICAgICAgICBjYW52YXNJZDogJ2NhbnZhc0lkJywvL2NhbnZhc0lk5ZKM5qCH562+6YeM6Z2i55qEaWTlr7nlupRcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgIHd4LmhpZGVUb2FzdCgpXG4gICAgICAgICAgICAgIC8v5bCG6I635Y+W5Yiw55qE5Zu+54mH5Li05pe26Lev5b6Ec2V05YiwY2FudmFzU2F2ZWltZ+S4rVxuICAgICAgICAgICAgICB0aGF0LnRlbXBGaWxlUGF0aCA9IHJlcy50ZW1wRmlsZVBhdGhcbiAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDogKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==