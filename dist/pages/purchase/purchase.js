'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _util = require('./../../utils/util.js');

var _util2 = _interopRequireDefault(_util);

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
                wx.navigateBack({
                  delta: 1
                });
              },
              fail: function fail(err) {
                console.log(err);
              }
            });
          }
        });
      },
      handleCancel: function handleCancel() {
        wx.navigateBack({
          delta: 1
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
      //   "InvoiceNum": "32330739",
      //   "SellerName": "北京冠月餐饮管理有限公司",
      //   "CommodityTaxRate": [{
      //     "word": "6%",
      //     "row": "1"
      //   }],
      //   "SellerBank": "北京市海淀区中关村东路1号院2号楼101室62798988",
      //   "Checker": "",
      //   "TotalAmount": "18647.17",
      //   "CommodityAmount": [{
      //     "word": "13847.17",
      //     "row": "1"
      //   }, {
      //     "word": "12647.17",
      //     "row": "2"
      //   }],
      //   "InvoiceDate": "2018年08月19日",
      //   "CommodityTax": [{
      //     "word": "11118.83",
      //     "row": "1"
      //   }, {
      //     "word": "11738.83",
      //     "row": "2"
      //   }],
      //   "PurchaserName": "上海有略教育科技有限公司",
      //   "CommodityNum": [{
      //     "word": "",
      //     "row": "1"
      //   }],
      //   "PurchaserBank": "",
      //   "Remarks": "校验码00345802256",
      //   "Password": "52//5501+14906-+03<-3084-89<980719>+25-4+63867<83<+0301-*01+9<*0/90</46-<029884>54-28>>039/+/36*+93/785>04>",
      //   "SellerAddress": "号101室62798988911",
      //   "PurchaserAddress": "",
      //   "InvoiceCode": "011001800104",
      //   "CommodityUnit": [{
      //     "word": "",
      //     "row": "1"
      //   }],
      //   "Payee": "甄婷",
      //   "PurchaserRegisterNum": "91310110MAG0WN",
      //   "CommodityPrice": [{
      //     "word": "",
      //     "row": "1"
      //   }],
      //   "NoteDrawer": "顾新杰",
      //   "AmountInWords": "万仟柒佰陆拾陆圆整",
      //   "AmountInFiguers": "19766.00",
      //   "TotalTax": "1118.30",
      //   "InvoiceType": "专用发票",
      //   "SellerRegisterNum": "911101087975834338",
      //   "CommodityName": [{
      //     "word": "发酵、提取设备",
      //     "row": "1"
      //   }, {
      //     "word": "安全检查仪器",
      //     "row": "2"
      //   }],
      //   "CommodityType": [{
      //     "word": "",
      //     "row": "1"
      //   }],
      //   "CheckCode": "0034580225619590949",
      //   "identity": "购买方",
      //   "pay": "公司",
      //   "source": "其他",
      //   "personName": "张三啊",
      //   "discription": "我来自中国，我再djkdkj直播，我得过世界冠军，我也办过转,你要额你都能记得看暗号都会",
      //   "belongProject": "天地大同"
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
      ctx.fillRect(cal(0), cal(0), cal(750), cal(120) + (8 + 2 * this.result.CommodityName.length) * cal(36));
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
      ctx.fillText(year + ' 年 ' + month + ' 月 ' + day + ' 号      记字第 ' + Date.now().toString().substr(6) + (Math.random() * 100).toString().split('.')[0] + ' 号', cal(0), cal(22));
      ctx.setTextAlign('center');
      ctx.setTextAlign('center');
      ctx.setTextAlign('center');

      // 表格
      // 外框
      ctx.translate(cal(-710), cal(50));
      ctx.setStrokeStyle('#000');
      ctx.strokeRect(0, 0, cal(710), cal(36) * (this.result.CommodityName.length * 2 + 3));

      // 内框
      var row = this.result.CommodityName.length * 2 + 3;
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
      lineWrap(ctx, this.result.discription, cal(14), cal(16), cal(160), cal(100), cal(10));

      // 物品、服务等
      for (var _i2 = 0; _i2 < this.result.CommodityName.length; _i2++) {
        var temp = (0, _util2.default)(this.result.CommodityName[_i2].word, this.result.source, this.result.CommodityAmount[_i2].word);
        ctx.fillText(temp.code, cal(265), cal(24) + 2 * _i2 * cal(36));
        if (ctx.measureText(temp.name).width >= 0.9 * cal(130)) {
          lineWrap(ctx, temp.name, cal(14), cal(14), cal(130), cal(395), cal(2) + 2 * _i2 * cal(36));
        } else {
          ctx.fillText(temp.name, cal(395), cal(24) + 2 * _i2 * cal(36));
        }
        ctx.fillText(parseFloat(this.result.CommodityAmount[_i2].word + '.').toFixed(2), cal(522), cal(24) + 2 * _i2 * cal(36));

        ctx.fillText('2221.01.06', cal(265), cal(24) + (1 + 2 * _i2) * cal(36));
        ctx.fillText('待认证进项税', cal(395), cal(24) + (1 + 2 * _i2) * cal(36));
        // ctx.fillText(lineWrap(), cal(395), cal(24) + 2 * cal(36))
        ctx.fillText(parseFloat(this.result.CommodityTax[_i2].word + '.').toFixed(2), cal(522), cal(24) + (1 + 2 * _i2) * cal(36));
      }

      // 价税合计
      switch (this.result.pay) {
        case '公司':
          ctx.fillText('2202', cal(265), cal(24) + this.result.CommodityName.length * 2 * cal(36));
          ctx.fillText('应付账款', cal(395), cal(24) + this.result.CommodityName.length * 2 * cal(36));
          ctx.fillText(this.result.AmountInFiguers, cal(646), cal(24) + this.result.CommodityName.length * 2 * cal(36));
          break;
        case '公司员工':
          ctx.fillText('2241.01', cal(265), cal(24) + this.result.CommodityName.length * 2 * cal(36));
          lineWrap(ctx, '其他应付款-员工报销', cal(14), cal(14), cal(130), cal(395), cal(2) + this.result.CommodityName.length * 2 * cal(36));
          ctx.fillText(this.result.AmountInFiguers, cal(646), cal(24) + this.result.CommodityName.length * 2 * cal(36));
          break;
        case '其他第三方':
          ctx.fillText('2241.04', cal(265), cal(24) + this.result.CommodityName.length * 2 * cal(36));
          lineWrap(ctx, '其他应付款-其他第三方往来', cal(14), cal(14), cal(130), cal(395), cal(2) + this.result.CommodityName.length * 2 * cal(36));
          ctx.fillText(this.result.AmountInFiguers, cal(646), cal(24) + this.result.CommodityName.length * 2 * cal(36));
          break;
      }

      // 合计
      ctx.translate(0, cal(36) * (this.result.CommodityName.length * 2 + 1));
      ctx.fillText('合计', cal(230), cal(24));
      ctx.fillText(this.result.AmountInFiguers, cal(522), cal(24));
      ctx.fillText(this.result.AmountInFiguers, cal(646), cal(24));

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
      for (var _i4 = 0; _i4 < 4; _i4++) {
        ctx.fillText(title[_i4], cal(190 + 130 * _i4 + 25), cal(24));
        ctx.moveTo(cal(190 + 130 * _i4 + 50), 0);
        ctx.lineTo(cal(190 + 130 * _i4 + 50), cal(36));
        ctx.moveTo(cal(190 + 130 * _i4 + 130), 0);
        ctx.lineTo(cal(190 + 130 * _i4 + 130), cal(36));
      }
      ctx.stroke();

      ctx.fillText(this.$parent.globalData.userInfo.nickName, cal(190 + 130 * 3 + 90), cal(24));
      ctx.fillText(this.result.InvoiceNum, cal(582), cal(24) + cal(36) * 3);
      this.result.belongProject && ctx.fillText(this.result.belongProject, cal(228), cal(24) + cal(36) * 3);

      ctx.fillText(this.result.SellerName, cal(228), cal(24) + cal(36) * 2);
      this.result.personName && ctx.fillText(this.result.personName, cal(582), cal(24) + cal(36));
      this.result.otherName && ctx.fillText(this.result.otherName, cal(582), cal(24) + cal(36) * 2);

      ctx.draw(true, function () {
        that.imageHeight = cal(120) + (8 + 2 * _this2.result.CommodityName.length) * cal(36);
        wx.canvasToTempFilePath({
          x: 0,
          y: 0,
          width: cal(750),
          height: cal(120) + (8 + 2 * _this2.result.CommodityName.length) * cal(36),
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlLmpzIl0sIm5hbWVzIjpbIlB1cmNoYXNlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwid2lkdGgiLCJoZWlnaHQiLCJyZXN1bHQiLCJ0ZW1wRmlsZVBhdGgiLCJpbWFnZUhlaWdodCIsImNvbXB1dGVkIiwibWV0aG9kcyIsImhhbmxkZVNhdmVQaWMiLCJfc2VsZiIsInd4IiwiZ2V0SW1hZ2VJbmZvIiwic3JjIiwic3VjY2VzcyIsInJlczEiLCJzYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtIiwiZmlsZVBhdGgiLCJwYXRoIiwicmVzMiIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiZmFpbCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDYW5jZWwiLCJvcHRpb25zIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJKU09OIiwicGFyc2UiLCJ0aGF0IiwiZ2V0U3lzdGVtSW5mbyIsInJlcyIsIndpbmRvd1dpZHRoIiwiJGFwcGx5IiwiY2FsIiwicHgiLCJsaW5lV3JhcCIsImN0eCIsInN0ciIsImZvbnRzaXplIiwibGluZWhlaWdodCIsIngiLCJ5Iiwic2V0Rm9udFNpemUiLCJ0ZXh0QXJyIiwiaW5kZXgiLCJpIiwibGVuZ3RoIiwibWVhc3VyZVRleHQiLCJzdWJzdHJpbmciLCJwdXNoIiwiZmlsbFRleHQiLCJjcmVhdGVDYW52YXNDb250ZXh0Iiwic2V0RmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJDb21tb2RpdHlOYW1lIiwic2V0VGV4dEFsaWduIiwiZGF0ZSIsIkRhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsInRyYW5zbGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwic3Vic3RyIiwiTWF0aCIsInJhbmRvbSIsInNwbGl0Iiwic2V0U3Ryb2tlU3R5bGUiLCJzdHJva2VSZWN0Iiwicm93IiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiZGlzY3JpcHRpb24iLCJ0ZW1wIiwid29yZCIsInNvdXJjZSIsIkNvbW1vZGl0eUFtb3VudCIsImNvZGUiLCJuYW1lIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJDb21tb2RpdHlUYXgiLCJwYXkiLCJBbW91bnRJbkZpZ3VlcnMiLCJiZWdpblBhdGgiLCJsZWZ0VGl0bGUiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwibmlja05hbWUiLCJJbnZvaWNlTnVtIiwiYmVsb25nUHJvamVjdCIsIlNlbGxlck5hbWUiLCJwZXJzb25OYW1lIiwib3RoZXJOYW1lIiwiZHJhdyIsImNhbnZhc1RvVGVtcEZpbGVQYXRoIiwiZmlsZVR5cGUiLCJxdWFsaXR5IiwiY2FudmFzSWQiLCJoaWRlVG9hc3QiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUliQyxJLEdBQU87QUFDTEMsYUFBTyxDQURGO0FBRUxDLGNBQVEsQ0FGSDtBQUdMQyxjQUFRLEVBSEg7QUFJTEMsb0JBQWMsRUFKVDtBQUtMQyxtQkFBYTtBQUxSLEssUUFRUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1JDLG1CQURRLDJCQUNTO0FBQ2YsWUFBSUMsUUFBUSxJQUFaO0FBQ0lDLFdBQUdDLFlBQUgsQ0FBZ0I7QUFDZEMsZUFBS0gsTUFBTUwsWUFERztBQUVkUyxpQkFGYyxtQkFFTEMsSUFGSyxFQUVDO0FBQ2JKLGVBQUdLLHNCQUFILENBQTBCO0FBQ3RCQyx3QkFBVUYsS0FBS0csSUFETztBQUV0QkosdUJBQVMsaUJBQVVLLElBQVYsRUFBZ0I7QUFDdkJSLG1CQUFHUyxZQUFILENBQWdCO0FBQ1pDLHlCQUFPO0FBREssaUJBQWhCO0FBR0QsZUFOcUI7QUFPdEJDLG9CQUFNLGNBQVVDLEdBQVYsRUFBZTtB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QUFILENBQXdCO0FBQ3BCN0QsYUFBRyxDQURpQjtBQUVwQkMsYUFBRyxDQUZpQjtBQUdwQjdDLGlCQUFPcUMsSUFBSSxHQUFKLENBSGE7QUFJcEJwQyxrQkFBUW9DLElBQUksR0FBSixJQUFXLENBQUMsSUFBSSxJQUFJLE9BQUtuQyxNQUFMLENBQVl3RCxhQUFaLENBQTBCUixNQUFuQyxJQUE2Q2IsSUFBSSxFQUFKLENBSjVDO0FBS3BCcUUsb0JBQVUsS0FMVTtBQU1wQkMsbUJBQVMsR0FOVztBQU9wQkMsb0JBQVUsVUFQVSxFQU9DO0FBQ3JCaEcsbUJBQVMsaUJBQUNzQixHQUFELEVBQVM7QUFDZHpCLGVBQUdvRyxTQUFIO0FBQ0E7QUFDQTdFLGlCQUFLN0IsWUFBTCxHQUFvQitCLElBQUkvQixZQUF4QjtBQUNBNkIsaUJBQUtJLE1BQUw7QUFDSCxXQWJtQjtBQWNwQmhCLGdCQUFNLGNBQUNDLEdBQUQsRUFBUztBQUNiQyxvQkFBUUMsR0FBUixDQUFZRixHQUFaO0FBQ0Q7QUFoQm1CLFNBQXhCO0FBa0JELE9BcEJEO0FBcUJEOzs7O0VBcFdtQ3lGLGVBQUtDLEk7O2tCQUF0QnBILFEiLCJmaWxlIjoicHVyY2hhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgdXRpbCBmcm9tICcuLi8uLi91dGlscy91dGlsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQdXJjaGFzZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Yet6K+BJ1xuICB9XG4gIGNvbXBvbmVudHMgPSB7XG5cbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIHJlc3VsdDoge30sXG4gICAgdGVtcEZpbGVQYXRoOiAnJyxcbiAgICBpbWFnZUhlaWdodDogMCxcbiAgfVxuXG4gIGNvbXB1dGVkID0ge31cblxuICBtZXRob2RzID0ge1xuICAgIGhhbmxkZVNhdmVQaWMgKCkge1xuICAgICAgbGV0IF9zZWxmID0gdGhpc1xuICAgICAgICAgIHd4LmdldEltYWdlSW5mbyh7XG4gICAgICAgICAgICBzcmM6IF9zZWxmLnRlbXBGaWxlUGF0aCxcbiAgICAgICAgICAgIHN1Y2Nlc3MgKHJlczEpIHtcbiAgICAgICAgICAgICAgd3guc2F2ZUltYWdlVG9QaG90b3NBbGJ1bSh7XG4gICAgICAgICAgICAgICAgICBmaWxlUGF0aDogcmVzMS5wYXRoLFxuICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlczIpIHtcbiAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgaGFuZGxlQ2FuY2VsICgpIHtcbiAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgZGVsdGE6IDFcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgdGl0bGU6ICfmraPlnKjnlJ/miJDlh63or4EnLFxuICAgICAgIGljb246ICdsb2FkaW5nJyxcbiAgICAgICBkdXJhdGlvbjogMTAwMDBcbiAgICAgfSlcbiAgICB0aGlzLnJlc3VsdCA9IEpTT04ucGFyc2Uob3B0aW9ucy5yZXN1bHQpXG4gICAgLy8gdGhpcy5yZXN1bHQgPSB7XG4gICAgLy8gICBcIkludm9pY2VOdW1cIjogXCIzMjMzMDczOVwiLFxuICAgIC8vICAgXCJTZWxsZXJOYW1lXCI6IFwi5YyX5Lqs5Yag5pyI6aSQ6aWu566h55CG5pyJ6ZmQ5YWs5Y+4XCIsXG4gICAgLy8gICBcIkNvbW1vZGl0eVRheFJhdGVcIjogW3tcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiNiVcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH1dLFxuICAgIC8vICAgXCJTZWxsZXJCYW5rXCI6IFwi5YyX5Lqs5biC5rW35reA5Yy65Lit5YWz5p2R5Lic6LevMeWPt+mZojLlj7fmpbwxMDHlrqQ2Mjc5ODk4OFwiLFxuICAgIC8vICAgXCJDaGVja2VyXCI6IFwiXCIsXG4gICAgLy8gICBcIlRvdGFsQW1vdW50XCI6IFwiMTg2NDcuMTdcIixcbiAgICAvLyAgIFwiQ29tbW9kaXR5QW1vdW50XCI6IFt7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIjEzODQ3LjE3XCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMVwiXG4gICAgLy8gICB9LCB7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIjEyNjQ3LjE3XCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMlwiXG4gICAgLy8gICB9XSxcbiAgICAvLyAgIFwiSW52b2ljZURhdGVcIjogXCIyMDE45bm0MDjmnIgxOeaXpVwiLFxuICAgIC8vICAgXCJDb21tb2RpdHlUYXhcIjogW3tcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiMTExMTguODNcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH0sIHtcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiMTE3MzguODNcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIyXCJcbiAgICAvLyAgIH1dLFxuICAgIC8vICAgXCJQdXJjaGFzZXJOYW1lXCI6IFwi5LiK5rW35pyJ55Wl5pWZ6IKy56eR5oqA5pyJ6ZmQ5YWs5Y+4XCIsXG4gICAgLy8gICBcIkNvbW1vZGl0eU51bVwiOiBbe1xuICAgIC8vICAgICBcIndvcmRcIjogXCJcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH1dLFxuICAgIC8vICAgXCJQdXJjaGFzZXJCYW5rXCI6IFwiXCIsXG4gICAgLy8gICBcIlJlbWFya3NcIjogXCLmoKHpqoznoIEwMDM0NTgwMjI1NlwiLFxuICAgIC8vICAgXCJQYXNzd29yZFwiOiBcIjUyLy81NTAxKzE0OTA2LSswMzwtMzA4NC04OTw5ODA3MTk+KzI1LTQrNjM4Njc8ODM8KzAzMDEtKjAxKzk8KjAvOTA8LzQ2LTwwMjk4ODQ+NTQtMjg+PjAzOS8rLzM2Kis5My83ODU+MDQ+XCIsXG4gICAgLy8gICBcIlNlbGxlckFkZHJlc3NcIjogXCLlj7cxMDHlrqQ2Mjc5ODk4ODkxMVwiLFxuICAgIC8vICAgXCJQdXJjaGFzZXJBZGRyZXNzXCI6IFwiXCIsXG4gICAgLy8gICBcIkludm9pY2VDb2RlXCI6IFwiMDExMDAxODAwMTA0XCIsXG4gICAgLy8gICBcIkNvbW1vZGl0eVVuaXRcIjogW3tcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiXCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMVwiXG4gICAgLy8gICB9XSxcbiAgICAvLyAgIFwiUGF5ZWVcIjogXCLnlITlqbdcIixcbiAgICAvLyAgIFwiUHVyY2hhc2VyUmVnaXN0ZXJOdW1cIjogXCI5MTMxMDExME1BRzBXTlwiLFxuICAgIC8vICAgXCJDb21tb2RpdHlQcmljZVwiOiBbe1xuICAgIC8vICAgICBcIndvcmRcIjogXCJcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH1dLFxuICAgIC8vICAgXCJOb3RlRHJhd2VyXCI6IFwi6aG+5paw5p2wXCIsXG4gICAgLy8gICBcIkFtb3VudEluV29yZHNcIjogXCLkuIfku5/mn5LkvbDpmYbmi77pmYblnIbmlbRcIixcbiAgICAvLyAgIFwiQW1vdW50SW5GaWd1ZXJzXCI6IFwiMTk3NjYuMDBcIixcbiAgICAvLyAgIFwiVG90YWxUYXhcIjogXCIxMTE4LjMwXCIsXG4gICAgLy8gICBcIkludm9pY2VUeXBlXCI6IFwi5LiT55So5Y+R56WoXCIsXG4gICAgLy8gICBcIlNlbGxlclJlZ2lzdGVyTnVtXCI6IFwiOTExMTAxMDg3OTc1ODM0MzM4XCIsXG4gICAgLy8gICBcIkNvbW1vZGl0eU5hbWVcIjogW3tcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwi5Y+R6YW144CB5o+Q5Y+W6K6+5aSHXCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMVwiXG4gICAgLy8gICB9LCB7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIuWuieWFqOajgOafpeS7quWZqFwiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjJcIlxuICAgIC8vICAgfV0sXG4gICAgLy8gICBcIkNvbW1vZGl0eVR5cGVcIjogW3tcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiXCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMVwiXG4gICAgLy8gICB9XSxcbiAgICAvLyAgIFwiQ2hlY2tDb2RlXCI6IFwiMDAzNDU4MDIyNTYxOTU5MDk0OVwiLFxuICAgIC8vICAgXCJpZGVudGl0eVwiOiBcIui0reS5sOaWuVwiLFxuICAgIC8vICAgXCJwYXlcIjogXCLlhazlj7hcIixcbiAgICAvLyAgIFwic291cmNlXCI6IFwi5YW25LuWXCIsXG4gICAgLy8gICBcInBlcnNvbk5hbWVcIjogXCLlvKDkuInllYpcIixcbiAgICAvLyAgIFwiZGlzY3JpcHRpb25cIjogXCLmiJHmnaXoh6rkuK3lm73vvIzmiJHlho1kamtka2rnm7Tmkq3vvIzmiJHlvpfov4fkuJbnlYzlhqDlhpvvvIzmiJHkuZ/lip7ov4fovaws5L2g6KaB6aKd5L2g6YO96IO96K6w5b6X55yL5pqX5Y+36YO95LyaXCIsXG4gICAgLy8gICBcImJlbG9uZ1Byb2plY3RcIjogXCLlpKnlnLDlpKflkIxcIlxuICAgIC8vIH1cblxuICAgIGxldCB0aGF0ID0gdGhpc1xuXG4gICAgLy8g6I635Y+W5bGP5bmV5a69XG4gICAgd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICB0aGF0LndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICAgIHRoYXQuJGFwcGx5KClcbiAgICAgICAgLy8gdGhhdC5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICB9XG4gICAgfSlcblxuXG4vLyDlh73mlbDlrprkuYnljLrln58gPT09PT09PT09PT09PT09PT09PVxuICAgIC8vIOiuvue9ruS4gOS4quWfuuWHhuavlOS+i1xuICAgIGxldCBjYWwgPSAocHgpID0+IHtcbiAgICAgIHJldHVybiAgcHggLyA3NTAgKiB0aGF0LndpZHRoXG4gICAgfVxuXG4gICAgLy8gY2FudmFz5o2i6KGM5pi+56S6XG4gICAgbGV0IGxpbmVXcmFwID0gKGN0eCwgc3RyLCBmb250c2l6ZSwgbGluZWhlaWdodCwgd2lkdGgsIHgsIHkpID0+IHtcbiAgICAgIGN0eC5zZXRGb250U2l6ZShmb250c2l6ZSlcbiAgICAgIGxldCB0ZXh0QXJyID0gW11cbiAgICAgIGxldCBpbmRleCA9IDBcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChjdHgubWVhc3VyZVRleHQoc3RyLnN1YnN0cmluZyhpbmRleCwgaSkpLndpZHRoID49IHdpZHRoICogMC44KSB7XG4gICAgICAgICAgdGV4dEFyci5wdXNoKHN0ci5zdWJzdHJpbmcoaW5kZXgsIGkpKVxuICAgICAgICAgIGluZGV4ID0gaVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRleHRBcnIucHVzaChzdHIuc3Vic3RyaW5nKGluZGV4KSlcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0QXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGN0eC5maWxsVGV4dCh0ZXh0QXJyW2ldLCB4LCB5ICsgbGluZWhlaWdodCAqIChpICsgMSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY3R4ID0gd3guY3JlYXRlQ2FudmFzQ29udGV4dCgnY2FudmFzSWQnKVxuXG4gICAgY3R4LnNldEZpbGxTdHlsZSgnd2hpdGUnKVxuICAgIGN0eC5maWxsUmVjdChjYWwoMCksIGNhbCgwKSwgY2FsKDc1MCksIGNhbCgxMjApICsgKDggKyAyICogdGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGgpICogY2FsKDM2KSlcbiAgICBjdHguc2V0RmlsbFN0eWxlKCdibGFjaycpXG5cbiAgICAvLyDmoIfpophcbiAgICBjdHguc2V0Rm9udFNpemUoY2FsKDIzKSlcbiAgICBjdHguc2V0VGV4dEFsaWduKCdjZW50ZXInKVxuICAgIGN0eC5maWxsVGV4dCgn6K6w6LSm5Yet6K+BJywgY2FsKDM3NSksIGNhbCg0MCkpXG5cbiAgICAvLyDml7bpl7Tlj4rnvJblj7dcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKClcbiAgICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKVxuICAgIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDFcbiAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKClcbiAgICBjdHgudHJhbnNsYXRlKGNhbCg3MzApLCBjYWwoNzApKVxuICAgIGN0eC5zZXRGb250U2l6ZShjYWwoMTMpKVxuICAgIGN0eC5zZXRUZXh0QWxpZ24oJ3JpZ2h0JylcbiAgICBjdHguZmlsbFRleHQoeWVhciArICcg5bm0ICcgKyBtb250aCArICcg5pyIICcgKyBkYXkgKyAnIOWPtyAgICAgIOiusOWtl+esrCAnICsgRGF0ZS5ub3coKS50b1N0cmluZygpLnN1YnN0cig2KSArIChNYXRoLnJhbmRvbSgpKiAxMDApLnRvU3RyaW5nKCkuc3BsaXQoJy4nKVswXSArICcg5Y+3JywgY2FsKDApLCBjYWwoMjIpKVxuICAgIGN0eC5zZXRUZXh0QWxpZ24oJ2NlbnRlcicpXG4gICAgY3R4LnNldFRleHRBbGlnbignY2VudGVyJylcbiAgICBjdHguc2V0VGV4dEFsaWduKCdjZW50ZXInKVxuXG4gICAgLy8g6KGo5qC8XG4gICAgLy8g5aSW5qGGXG4gICAgY3R4LnRyYW5zbGF0ZShjYWwoLTcxMCksIGNhbCg1MCkpXG4gICAgY3R4LnNldFN0cm9rZVN0eWxlKCcjMDAwJylcbiAgICBjdHguc3Ryb2tlUmVjdCgwLCAwLCBjYWwoNzEwKSwgY2FsKDM2KSAqICh0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCAqIDIgICsgMykpXG5cbiAgICAvLyDlhoXmoYZcbiAgICBsZXQgcm93ID0gdGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKiAyICsgM1xuICAgIGZvciAobGV0IGkgPSAyOyBpIDwgcm93IC0gMTsgaSsrKSB7XG4gICAgICBjdHguc2V0U3Ryb2tlU3R5bGUoJyM5OTknKVxuICAgICAgY3R4Lm1vdmVUbyhjYWwoMjAwKSwgY2FsKDM2KSAqIGkpXG4gICAgICBjdHgubGluZVRvKGNhbCg3MTApLCBjYWwoMzYpICogaSlcbiAgICAgIGN0eC5zdHJva2UoKVxuICAgIH1cblxuICAgIGN0eC5tb3ZlVG8oMCwgY2FsKDM2KSlcbiAgICBjdHgubGluZVRvKGNhbCg3MTApLCBjYWwoMzYpKVxuXG4gICAgY3R4Lm1vdmVUbygwLCBjYWwoMzYpICogKHJvdyAtMSkpXG4gICAgY3R4LmxpbmVUbyhjYWwoNzEwKSwgY2FsKDM2KSAqIChyb3cgLTEpKVxuXG4gICAgY3R4Lm1vdmVUbygwLCBjYWwoMzYpICogcm93KVxuICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikgKiByb3cpXG5cbiAgICBjdHgubW92ZVRvKGNhbCgyMDApLCAwKVxuICAgIGN0eC5saW5lVG8oY2FsKDIwMCksIGNhbCgzNikgKiAocm93IC0xKSlcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDMzMCksIGNhbCgxOCkpXG4gICAgY3R4LmxpbmVUbyhjYWwoMzMwKSwgY2FsKDM2KSAqIChyb3cgLSAxKSlcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDIwMCksIGNhbCgxOCkpXG4gICAgY3R4LmxpbmVUbyhjYWwoNDYwKSwgY2FsKDE4KSlcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDQ2MCksIDApXG4gICAgY3R4LmxpbmVUbyhjYWwoNDYwKSwgY2FsKDM2KSAqIHJvdylcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDU4NSksIDApXG4gICAgY3R4LmxpbmVUbyhjYWwoNTg1KSwgY2FsKDM2KSAqIHJvdylcblxuICAgIGN0eC5zdHJva2UoKVxuXG4gICAgLy8g6KGo5aS0XG4gICAgY3R4LnNldEZvbnRTaXplKGNhbCgxNSkpXG4gICAgY3R4LmZpbGxUZXh0KCfmkZjopoEnLCBjYWwoMTAwKSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQoJ+WAn+aWuemHkeminScsIGNhbCg1MjIpLCBjYWwoMjQpKVxuICAgIGN0eC5maWxsVGV4dCgn6LS35pa56YeR6aKdJywgY2FsKDY0NiksIGNhbCgyNCkpXG5cbiAgICBjdHguc2V0Rm9udFNpemUoY2FsKDE0KSlcbiAgICBjdHguZmlsbFRleHQoJ+S8muiuoeenkeebricsIGNhbCgzMzApLCBjYWwoMTUpKVxuICAgIGN0eC5maWxsVGV4dCgn56eR55uu5Luj56CBJywgY2FsKDI2NSksIGNhbCgzMykpXG4gICAgY3R4LmZpbGxUZXh0KCfnp5Hnm67lkI3np7AnLCBjYWwoMzk1KSwgY2FsKDMzKSlcblxuICAgIC8vIOWGheWuuemDqOWIhlxuICAgIC8vIOaRmOimgeWGheWuuVxuICAgIGN0eC50cmFuc2xhdGUoMCwgY2FsKDM2KSlcbiAgICBsaW5lV3JhcChjdHgsIHRoaXMucmVzdWx0LmRpc2NyaXB0aW9uLCBjYWwoMTQpLCBjYWwoMTYpLCBjYWwoMTYwKSwgY2FsKDEwMCksIGNhbCgxMCkpXG5cbiAgICAvLyDnianlk4HjgIHmnI3liqHnrYlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB0ZW1wID0gdXRpbCh0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lW2ldLndvcmQsIHRoaXMucmVzdWx0LnNvdXJjZSwgdGhpcy5yZXN1bHQuQ29tbW9kaXR5QW1vdW50W2ldLndvcmQpXG4gICAgICBjdHguZmlsbFRleHQodGVtcC5jb2RlLCBjYWwoMjY1KSwgY2FsKDI0KSArICgyICogaSkgKiBjYWwoMzYpKVxuICAgICAgaWYgKGN0eC5tZWFzdXJlVGV4dCh0ZW1wLm5hbWUpLndpZHRoID49IDAuOSAqIGNhbCgxMzApKSB7XG4gICAgICAgIGxpbmVXcmFwKGN0eCwgdGVtcC5uYW1lLCBjYWwoMTQpLCBjYWwoMTQpLCBjYWwoMTMwKSwgY2FsKDM5NSksIGNhbCgyKSArICgyICogaSkgKiBjYWwoMzYpIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN0eC5maWxsVGV4dCh0ZW1wLm5hbWUsIGNhbCgzOTUpLCBjYWwoMjQpICsgKDIgKiBpKSAqIGNhbCgzNikpXG4gICAgICB9XG4gICAgICBjdHguZmlsbFRleHQocGFyc2VGbG9hdCh0aGlzLnJlc3VsdC5Db21tb2RpdHlBbW91bnRbaV0ud29yZCArICcuJykudG9GaXhlZCgyKSwgY2FsKDUyMiksIGNhbCgyNCkgKyAoMiAqIGkpICogY2FsKDM2KSlcblxuICAgICAgY3R4LmZpbGxUZXh0KCcyMjIxLjAxLjA2JywgY2FsKDI2NSksIGNhbCgyNCkgKyAoMSArIDIgKiBpKSAqIGNhbCgzNikpXG4gICAgICBjdHguZmlsbFRleHQoJ+W+heiupOivgei/m+mhueeojicsIGNhbCgzOTUpLCBjYWwoMjQpICsgKDEgKyAyICogaSkgKiBjYWwoMzYpKVxuICAgICAgLy8gY3R4LmZpbGxUZXh0KGxpbmVXcmFwKCksIGNhbCgzOTUpLCBjYWwoMjQpICsgMiAqIGNhbCgzNikpXG4gICAgICBjdHguZmlsbFRleHQocGFyc2VGbG9hdCh0aGlzLnJlc3VsdC5Db21tb2RpdHlUYXhbaV0ud29yZCArICcuJykudG9GaXhlZCgyKSwgY2FsKDUyMiksIGNhbCgyNCkgKyAoMSArIDIgKiBpKSAqIGNhbCgzNikpXG4gICAgfVxuXG4gICAgLy8g5Lu356iO5ZCI6K6hXG4gICAgc3dpdGNoICh0aGlzLnJlc3VsdC5wYXkpIHtcbiAgICAgIGNhc2UgJ+WFrOWPuCc6XG4gICAgICAgICAgY3R4LmZpbGxUZXh0KCcyMjAyJywgY2FsKDI2NSksIGNhbCgyNCkgKyAodGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKiAyKSAqIGNhbCgzNikpXG4gICAgICAgICAgY3R4LmZpbGxUZXh0KCflupTku5jotKbmrL4nLCBjYWwoMzk1KSwgY2FsKDI0KSArICh0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCAqIDIpICogY2FsKDM2KSlcbiAgICAgICAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuQW1vdW50SW5GaWd1ZXJzLCBjYWwoNjQ2KSwgY2FsKDI0KSArICh0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCAqIDIpICogY2FsKDM2KSlcbiAgICAgICAgICBicmVha1xuICAgICAgY2FzZSAn5YWs5Y+45ZGY5belJzpcbiAgICAgICAgICBjdHguZmlsbFRleHQoJzIyNDEuMDEnLCBjYWwoMjY1KSwgY2FsKDI0KSArICh0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCAqIDIpICogY2FsKDM2KSlcbiAgICAgICAgICBsaW5lV3JhcChjdHgsICflhbbku5blupTku5jmrL4t5ZGY5bel5oql6ZSAJywgY2FsKDE0KSwgY2FsKDE0KSwgY2FsKDEzMCksIGNhbCgzOTUpLCBjYWwoMikgKyAodGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKiAyKSAqIGNhbCgzNikpXG4gICAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LkFtb3VudEluRmlndWVycywgY2FsKDY0NiksIGNhbCgyNCkgKyAodGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKiAyKSAqIGNhbCgzNikpXG4gICAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ+WFtuS7luesrOS4ieaWuSc6XG4gICAgICAgICAgY3R4LmZpbGxUZXh0KCcyMjQxLjA0JywgY2FsKDI2NSksIGNhbCgyNCkgKyAodGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKiAyKSAqIGNhbCgzNikpXG4gICAgICAgICAgbGluZVdyYXAoY3R4LCAn5YW25LuW5bqU5LuY5qy+LeWFtuS7luesrOS4ieaWueW+gOadpScsIGNhbCgxNCksIGNhbCgxNCksIGNhbCgxMzApLCBjYWwoMzk1KSwgY2FsKDIpICsgKHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoICogMikgKiBjYWwoMzYpKVxuICAgICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5BbW91bnRJbkZpZ3VlcnMsIGNhbCg2NDYpLCBjYWwoMjQpICsgKHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoICogMikgKiBjYWwoMzYpKVxuICAgICAgICAgIGJyZWFrXG4gICAgfVxuXG5cbiAgICAvLyDlkIjorqFcbiAgICBjdHgudHJhbnNsYXRlKDAsIGNhbCgzNikgKiAodGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKiAyICsgMSkpXG4gICAgY3R4LmZpbGxUZXh0KCflkIjorqEnLCBjYWwoMjMwKSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuQW1vdW50SW5GaWd1ZXJzLCBjYWwoNTIyKSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuQW1vdW50SW5GaWd1ZXJzLCBjYWwoNjQ2KSwgY2FsKDI0KSlcblxuICAgIC8vIOS/oeaBr+agj1xuICAgIGN0eC5iZWdpblBhdGgoKVxuICAgIC8vIOi+ueahhlxuICAgIGN0eC50cmFuc2xhdGUoMCwgY2FsKDM2KSlcbiAgICBsZXQgbGVmdFRpdGxlID0gWyfkvJrorqHmgLvnrqEnLCAn5a6i5oi3JywgJ+S+m+W6lOWVhicsICfpobnnm64nXVxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykge1xuICAgICAgY3R4LmZpbGxUZXh0KGxlZnRUaXRsZVtpIC0gMV0sIGNhbCg1MCksIGNhbCgyNCkgKyAoaSAtIDEpICogY2FsKDM2KSlcbiAgICAgIGN0eC5tb3ZlVG8oMCwgY2FsKDM2KSAqIGkpXG4gICAgICBjdHgubGluZVRvKGNhbCg3MTApLCBjYWwoMzYpICogaSlcbiAgICB9XG5cbiAgICBjdHgubW92ZVRvKGNhbCgzNTUpLCBjYWwoMzYpKVxuICAgIGN0eC5saW5lVG8oY2FsKDM1NSksIGNhbCgzNikgKiA0KVxuICAgIGN0eC5maWxsVGV4dCgn5ZGY5belJywgY2FsKDQwNSksIGNhbCgzNikgKyBjYWwoMjQpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoNDU1KSwgY2FsKDM2KSlcbiAgICBjdHgubGluZVRvKGNhbCg0NTUpLCBjYWwoMzYpICogNClcbiAgICBjdHguZmlsbFRleHQoJ+WFtuS7luesrOS4ieaWuScsIGNhbCg0MDUpLCBjYWwoMzYpICogMiArIGNhbCgyNCkpXG5cbiAgICBjdHgubW92ZVRvKGNhbCg3MTApLCAwKVxuICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikgKiA0KVxuICAgIGN0eC5maWxsVGV4dCgn5Y+R56Wo5Y+356CBJywgY2FsKDQwNSksIGNhbCgzNikgKiAzICsgY2FsKDI0KSlcblxuICAgIGN0eC5tb3ZlVG8oMCwgMClcbiAgICBjdHgubGluZVRvKDAsIGNhbCgzNikgKiA0KVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMTAwKSwgMClcbiAgICBjdHgubGluZVRvKGNhbCgxMDApLCBjYWwoMzYpICogNClcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDE5MCksIDApXG4gICAgY3R4LmxpbmVUbyhjYWwoMTkwKSwgY2FsKDM2KSlcblxuICAgIGxldCB0aXRsZSA9IFsn6K6w6LSmJywgJ+WHuue6sycsICflrqHmoLgnLCAn5Yi25Y2VJ11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgY3R4LmZpbGxUZXh0KHRpdGxlW2ldLCBjYWwoMTkwICsgMTMwICogaSArIDI1KSwgY2FsKDI0KSApXG4gICAgICBjdHgubW92ZVRvKGNhbCgxOTAgKyAxMzAgKiBpICsgNTApLCAwKVxuICAgICAgY3R4LmxpbmVUbyhjYWwoMTkwICsgMTMwICogaSArIDUwKSwgY2FsKDM2KSlcbiAgICAgIGN0eC5tb3ZlVG8oY2FsKDE5MCArIDEzMCAqIGkgKyAxMzApLCAwKVxuICAgICAgY3R4LmxpbmVUbyhjYWwoMTkwICsgMTMwICogaSArIDEzMCksIGNhbCgzNikpXG4gICAgfVxuICAgIGN0eC5zdHJva2UoKVxuXG4gICAgY3R4LmZpbGxUZXh0KHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJJbmZvLm5pY2tOYW1lLCBjYWwoMTkwICsgMTMwICogMyArIDkwKSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuSW52b2ljZU51bSwgY2FsKDU4MiksIGNhbCgyNCkgKyBjYWwoMzYpICogMylcbiAgICB0aGlzLnJlc3VsdC5iZWxvbmdQcm9qZWN0ICYmIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5iZWxvbmdQcm9qZWN0LCBjYWwoMjI4KSwgY2FsKDI0KSArIGNhbCgzNikgKiAzKVxuXG4gICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LlNlbGxlck5hbWUsIGNhbCgyMjgpLCBjYWwoMjQpICsgY2FsKDM2KSAqIDIpXG4gICAgdGhpcy5yZXN1bHQucGVyc29uTmFtZSAmJiBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQucGVyc29uTmFtZSwgY2FsKDU4MiksIGNhbCgyNCkgKyBjYWwoMzYpKVxuICAgIHRoaXMucmVzdWx0Lm90aGVyTmFtZSAmJiBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQub3RoZXJOYW1lLCBjYWwoNTgyKSwgY2FsKDI0KSArIGNhbCgzNikgKiAyKVxuXG4gICAgY3R4LmRyYXcodHJ1ZSwgKCkgPT4ge1xuICAgICAgdGhhdC5pbWFnZUhlaWdodCA9IGNhbCgxMjApICsgKDggKyAyICogdGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGgpICogY2FsKDM2KVxuICAgICAgd3guY2FudmFzVG9UZW1wRmlsZVBhdGgoe1xuICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgeTogMCxcbiAgICAgICAgICB3aWR0aDogY2FsKDc1MCksXG4gICAgICAgICAgaGVpZ2h0OiBjYWwoMTIwKSArICg4ICsgMiAqIHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoKSAqIGNhbCgzNiksXG4gICAgICAgICAgZmlsZVR5cGU6ICdqcGcnLFxuICAgICAgICAgIHF1YWxpdHk6IDAuNSxcbiAgICAgICAgICBjYW52YXNJZDogJ2NhbnZhc0lkJywvL2NhbnZhc0lk5ZKM5qCH562+6YeM6Z2i55qEaWTlr7nlupRcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgIHd4LmhpZGVUb2FzdCgpXG4gICAgICAgICAgICAgIC8v5bCG6I635Y+W5Yiw55qE5Zu+54mH5Li05pe26Lev5b6Ec2V05YiwY2FudmFzU2F2ZWltZ+S4rVxuICAgICAgICAgICAgICB0aGF0LnRlbXBGaWxlUGF0aCA9IHJlcy50ZW1wRmlsZVBhdGhcbiAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDogKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==