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
      //     "word": "1847.17",
      //     "row": "1"
      //   }, {
      //     "word": "18647.17",
      //     "row": "2"
      //   }],
      //   "InvoiceDate": "2018年08月19日",
      //   "CommodityTax": [{
      //     "word": "1118.83",
      //     "row": "1"
      //   }, {
      //     "word": "1738.83",
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
      //     "word": "服务器",
      //     "row": "1"
      //   }, {
      //     "word": "扫地机",
      //     "row": "2"
      //   }],
      //   "CommodityType": [{
      //     "word": "",
      //     "row": "1"
      //   }],
      //   "CheckCode": "0034580225619590949",
      //   "identity": "购买方",
      //   "pay": "公司",
      //   "source": "业务招待",
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
      ctx.fillRect(cal(0), cal(0), cal(750), cal(120) + (9 + this.result.CommodityName.length) * cal(36));
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
      ctx.strokeRect(0, 0, cal(710), cal(36) * (this.result.CommodityName.length + 3));

      // 内框
      var row = this.result.CommodityName.length + 3;
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
        ctx.fillText(temp.code, cal(265), cal(24) + _i2 * cal(36));
        if (ctx.measureText(temp.name).width >= 0.9 * cal(130)) {
          lineWrap(ctx, temp.name, cal(14), cal(14), cal(130), cal(395), cal(2) + _i2 * cal(36));
        } else {
          ctx.fillText(temp.name, cal(395), cal(24) + _i2 * cal(36));
        }
        ctx.fillText(parseFloat(Number(this.result.CommodityAmount[_i2].word) + Number(this.result.CommodityTax[_i2].word) + '.').toFixed(2), cal(522), cal(24) + _i2 * cal(36));

        // ctx.fillText('2221.01.06', cal(265), cal(24) + (1 + 2 * i) * cal(36))
        // ctx.fillText('待认证进项税', cal(395), cal(24) + (1 + 2 * i) * cal(36))
        // ctx.fillText(lineWrap(), cal(395), cal(24) + 2 * cal(36))
        // ctx.fillText(this.result.CommodityTax[i].word, cal(522), cal(24) + (1 + 2 * i) * cal(36))
      }

      // if (this.result && this.result.CommodityAmount) {
      //   let total = 0
      //   this.result.CommodityAmount.forEach((item) => {
      //     total += Number(item.word)
      //   })
      //   this.result.AmountInFiguers = total.toFixed(2)
      // }


      // 价税合计
      switch (this.result.pay) {
        case '公司':
          ctx.fillText('2202', cal(265), cal(24) + this.result.CommodityName.length * cal(36));
          ctx.fillText('应付账款', cal(395), cal(24) + this.result.CommodityName.length * cal(36));
          ctx.fillText(this.result.AmountInFiguers, cal(646), cal(24) + this.result.CommodityName.length * cal(36));
          break;
        case '公司员工':
          ctx.fillText('2241.01', cal(265), cal(24) + this.result.CommodityName.length * cal(36));
          lineWrap(ctx, '其他应付款-员工报销', cal(14), cal(14), cal(130), cal(395), cal(2) + this.result.CommodityName.length * cal(36));
          ctx.fillText(this.result.AmountInFiguers, cal(646), cal(24) + this.result.CommodityName.length * cal(36));
          break;
        case '其他第三方':
          ctx.fillText('2241.04', cal(265), cal(24) + this.result.CommodityName.length * cal(36));
          lineWrap(ctx, '其他应付款-其他第三方往来', cal(14), cal(14), cal(130), cal(395), cal(2) + this.result.CommodityName.length * cal(36));
          ctx.fillText(this.result.AmountInFiguers, cal(646), cal(24) + this.result.CommodityName.length * cal(36));
          break;
        default:
          ctx.fillText('2202', cal(265), cal(24) + this.result.CommodityName.length * cal(36));
          ctx.fillText('应付账款', cal(395), cal(24) + this.result.CommodityName.length * cal(36));
          ctx.fillText(this.result.AmountInFiguers, cal(646), cal(24) + this.result.CommodityName.length * cal(36));
          break;
      }

      // 合计
      ctx.translate(0, cal(36) * (this.result.CommodityName.length + 1));
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
        that.imageHeight = cal(120) + (8 + _this2.result.CommodityName.length) * cal(36);
        wx.canvasToTempFilePath({
          x: 0,
          y: 0,
          width: cal(750),
          height: cal(120) + (8 + _this2.result.CommodityName.length) * cal(36),
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGF4LmpzIl0sIm5hbWVzIjpbIlB1cmNoYXNlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwid2lkdGgiLCJoZWlnaHQiLCJyZXN1bHQiLCJ0ZW1wRmlsZVBhdGgiLCJpbWFnZUhlaWdodCIsImNvbXB1dGVkIiwibWV0aG9kcyIsImhhbmxkZVNhdmVQaWMiLCJfc2VsZiIsInd4IiwiZ2V0SW1hZ2VJbmZvIiwic3JjIiwic3VjY2VzcyIsInJlczEiLCJzYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtIiwiZmlsZVBhdGgiLCJwYXRoIiwicmVzMiIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiZmFpbCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDYW5jZWwiLCJvcHRpb25zIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJKU09OIiwicGFyc2UiLCJ0aGF0IiwiZ2V0U3lzdGVtSW5mbyIsInJlcyIsIndpbmRvd1dpZHRoIiwiJGFwcGx5IiwiY2FsIiwicHgiLCJsaW5lV3JhcCIsImN0eCIsInN0ciIsImZvbnRzaXplIiwibGluZWhlaWdodCIsIngiLCJ5Iiwic2V0Rm9udFNpemUiLCJ0ZXh0QXJyIiwiaW5kZXgiLCJpIiwibGVuZ3RoIiwibWVhc3VyZVRleHQiLCJzdWJzdHJpbmciLCJwdXNoIiwiZmlsbFRleHQiLCJjcmVhdGVDYW52YXNDb250ZXh0Iiwic2V0RmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJDb21tb2RpdHlOYW1lIiwic2V0VGV4dEFsaWduIiwiZGF0ZSIsIkRhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsInRyYW5zbGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwic3Vic3RyIiwiTWF0aCIsInJhbmRvbSIsInNwbGl0Iiwic2V0U3Ryb2tlU3R5bGUiLCJzdHJva2VSZWN0Iiwicm93IiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiZGlzY3JpcHRpb24iLCJ0ZW1wIiwid29yZCIsInNvdXJjZSIsIkNvbW1vZGl0eUFtb3VudCIsImNvZGUiLCJuYW1lIiwicGFyc2VGbG9hdCIsIk51bWJlciIsIkNvbW1vZGl0eVRheCIsInRvRml4ZWQiLCJwYXkiLCJBbW91bnRJbkZpZ3VlcnMiLCJiZWdpblBhdGgiLCJsZWZ0VGl0bGUiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwibmlja05hbWUiLCJJbnZvaWNlTnVtIiwiYmVsb25nUHJvamVjdCIsIlNlbGxlck5hbWUiLCJwZXJzb25OYW1lIiwib3RoZXJOYW1lIiwiZHJhdyIsImNhbnZhc1RvVGVtcEZpbGVQYXRoIiwiZmlsZVR5cGUiLCJxdWFsaXR5IiwiY2FudmFzSWQiLCJoaWRlVG9hc3QiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUliQyxJLEdBQU87QUFDTEMsYUFBTyxDQURGO0FBRUxDLGNBQVEsQ0FGSDtBQUdMQyxjQUFRLEVBSEg7QUFJTEMsb0JBQWMsRUFKVDtBQUtMQyxtQkFBYTtBQUxSLEssUUFRUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1JDLG1CQURRLDJCQUNTO0FBQ2YsWUFBSUMsUUFBUSxJQUFaO0FBQ0lDLFdBQUdDLFlBQUgsQ0FBZ0I7QUFDZEMsZUFBS0gsTUFBTUwsWUFERztBQUVkUyxpQkFGYyxtQkFFTEMsSUFGSyxFQUVDO0FBQ2JKLGVBQUdLLHNCQUFILENBQTBCO0FBQ3RCQyx3QkFBVUYsS0FBS0csSUFETztBQUV0QkosdUJBQVMsaUJBQVVLLElBQVYsRUFBZ0I7QUFDdkJSLG1CQUFHUyxZQUFILENBQWdCO0FBQ1pDLHlCQUFPO0FBREssaUJBQWhCO0FBR0QsZUFOcUI7QUFPdEJDLG9CQUFNLGNBQVVDLEdBQVYs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QUhhO0FBSXBCcEMsa0JBQVFvQyxJQUFJLEdBQUosSUFBVyxDQUFDLElBQUksT0FBS25DLE1BQUwsQ0FBWXdELGFBQVosQ0FBMEJSLE1BQS9CLElBQXlDYixJQUFJLEVBQUosQ0FKeEM7QUFLcEJzRSxvQkFBVSxLQUxVO0FBTXBCQyxtQkFBUyxHQU5XO0FBT3BCQyxvQkFBVSxVQVBVLEVBT0M7QUFDckJqRyxtQkFBUyxpQkFBQ3NCLEdBQUQsRUFBUztBQUNkekIsZUFBR3FHLFNBQUg7QUFDQTtBQUNBOUUsaUJBQUs3QixZQUFMLEdBQW9CK0IsSUFBSS9CLFlBQXhCO0FBQ0E2QixpQkFBS0ksTUFBTDtBQUNILFdBYm1CO0FBY3BCaEIsZ0JBQU0sY0FBQ0MsR0FBRCxFQUFTO0FBQ2JDLG9CQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDRDtBQWhCbUIsU0FBeEI7QUFrQkQsT0FwQkQ7QUFxQkQ7Ozs7RUFsWG1DMEYsZUFBS0MsSTs7a0JBQXRCckgsUSIsImZpbGUiOiJub3RheC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB1dGlsIGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFB1cmNoYXNlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflh63or4EnXG4gIH1cbiAgY29tcG9uZW50cyA9IHtcblxuICB9XG5cbiAgZGF0YSA9IHtcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgcmVzdWx0OiB7fSxcbiAgICB0ZW1wRmlsZVBhdGg6ICcnLFxuICAgIGltYWdlSGVpZ2h0OiAwLFxuICB9XG5cbiAgY29tcHV0ZWQgPSB7fVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgaGFubGRlU2F2ZVBpYyAoKSB7XG4gICAgICBsZXQgX3NlbGYgPSB0aGlzXG4gICAgICAgICAgd3guZ2V0SW1hZ2VJbmZvKHtcbiAgICAgICAgICAgIHNyYzogX3NlbGYudGVtcEZpbGVQYXRoLFxuICAgICAgICAgICAgc3VjY2VzcyAocmVzMSkge1xuICAgICAgICAgICAgICB3eC5zYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtKHtcbiAgICAgICAgICAgICAgICAgIGZpbGVQYXRoOiByZXMxLnBhdGgsXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzMikge1xuICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBoYW5kbGVDYW5jZWwgKCkge1xuICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICBkZWx0YTogMVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICB0aXRsZTogJ+ato+WcqOeUn+aIkOWHreivgScsXG4gICAgICAgaWNvbjogJ2xvYWRpbmcnLFxuICAgICAgIGR1cmF0aW9uOiAxMDAwMFxuICAgICB9KVxuICAgIHRoaXMucmVzdWx0ID0gSlNPTi5wYXJzZShvcHRpb25zLnJlc3VsdClcbiAgICAvLyB0aGlzLnJlc3VsdCA9IHtcbiAgICAvLyAgIFwiSW52b2ljZU51bVwiOiBcIjMyMzMwNzM5XCIsXG4gICAgLy8gICBcIlNlbGxlck5hbWVcIjogXCLljJfkuqzlhqDmnIjppJDppa7nrqHnkIbmnInpmZDlhazlj7hcIixcbiAgICAvLyAgIFwiQ29tbW9kaXR5VGF4UmF0ZVwiOiBbe1xuICAgIC8vICAgICBcIndvcmRcIjogXCI2JVwiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfV0sXG4gICAgLy8gICBcIlNlbGxlckJhbmtcIjogXCLljJfkuqzluILmtbfmt4DljLrkuK3lhbPmnZHkuJzot68x5Y+36ZmiMuWPt+alvDEwMeWupDYyNzk4OTg4XCIsXG4gICAgLy8gICBcIkNoZWNrZXJcIjogXCJcIixcbiAgICAvLyAgIFwiVG90YWxBbW91bnRcIjogXCIxODY0Ny4xN1wiLFxuICAgIC8vICAgXCJDb21tb2RpdHlBbW91bnRcIjogW3tcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiMTg0Ny4xN1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfSwge1xuICAgIC8vICAgICBcIndvcmRcIjogXCIxODY0Ny4xN1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjJcIlxuICAgIC8vICAgfV0sXG4gICAgLy8gICBcIkludm9pY2VEYXRlXCI6IFwiMjAxOOW5tDA45pyIMTnml6VcIixcbiAgICAvLyAgIFwiQ29tbW9kaXR5VGF4XCI6IFt7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIjExMTguODNcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH0sIHtcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiMTczOC44M1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjJcIlxuICAgIC8vICAgfV0sXG4gICAgLy8gICBcIlB1cmNoYXNlck5hbWVcIjogXCLkuIrmtbfmnInnlaXmlZnogrLnp5HmioDmnInpmZDlhazlj7hcIixcbiAgICAvLyAgIFwiQ29tbW9kaXR5TnVtXCI6IFt7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIlwiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfV0sXG4gICAgLy8gICBcIlB1cmNoYXNlckJhbmtcIjogXCJcIixcbiAgICAvLyAgIFwiUmVtYXJrc1wiOiBcIuagoemqjOeggTAwMzQ1ODAyMjU2XCIsXG4gICAgLy8gICBcIlBhc3N3b3JkXCI6IFwiNTIvLzU1MDErMTQ5MDYtKzAzPC0zMDg0LTg5PDk4MDcxOT4rMjUtNCs2Mzg2Nzw4MzwrMDMwMS0qMDErOTwqMC85MDwvNDYtPDAyOTg4ND41NC0yOD4+MDM5LysvMzYqKzkzLzc4NT4wND5cIixcbiAgICAvLyAgIFwiU2VsbGVyQWRkcmVzc1wiOiBcIuWPtzEwMeWupDYyNzk4OTg4OTExXCIsXG4gICAgLy8gICBcIlB1cmNoYXNlckFkZHJlc3NcIjogXCJcIixcbiAgICAvLyAgIFwiSW52b2ljZUNvZGVcIjogXCIwMTEwMDE4MDAxMDRcIixcbiAgICAvLyAgIFwiQ29tbW9kaXR5VW5pdFwiOiBbe1xuICAgIC8vICAgICBcIndvcmRcIjogXCJcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH1dLFxuICAgIC8vICAgXCJQYXllZVwiOiBcIueUhOWpt1wiLFxuICAgIC8vICAgXCJQdXJjaGFzZXJSZWdpc3Rlck51bVwiOiBcIjkxMzEwMTEwTUFHMFdOXCIsXG4gICAgLy8gICBcIkNvbW1vZGl0eVByaWNlXCI6IFt7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIlwiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfV0sXG4gICAgLy8gICBcIk5vdGVEcmF3ZXJcIjogXCLpob7mlrDmnbBcIixcbiAgICAvLyAgIFwiQW1vdW50SW5Xb3Jkc1wiOiBcIuS4h+S7n+afkuS9sOmZhuaLvumZhuWchuaVtFwiLFxuICAgIC8vICAgXCJBbW91bnRJbkZpZ3VlcnNcIjogXCIxOTc2Ni4wMFwiLFxuICAgIC8vICAgXCJUb3RhbFRheFwiOiBcIjExMTguMzBcIixcbiAgICAvLyAgIFwiSW52b2ljZVR5cGVcIjogXCLkuJPnlKjlj5HnpahcIixcbiAgICAvLyAgIFwiU2VsbGVyUmVnaXN0ZXJOdW1cIjogXCI5MTExMDEwODc5NzU4MzQzMzhcIixcbiAgICAvLyAgIFwiQ29tbW9kaXR5TmFtZVwiOiBbe1xuICAgIC8vICAgICBcIndvcmRcIjogXCLmnI3liqHlmahcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH0sIHtcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwi5omr5Zyw5py6XCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMlwiXG4gICAgLy8gICB9XSxcbiAgICAvLyAgIFwiQ29tbW9kaXR5VHlwZVwiOiBbe1xuICAgIC8vICAgICBcIndvcmRcIjogXCJcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH1dLFxuICAgIC8vICAgXCJDaGVja0NvZGVcIjogXCIwMDM0NTgwMjI1NjE5NTkwOTQ5XCIsXG4gICAgLy8gICBcImlkZW50aXR5XCI6IFwi6LSt5Lmw5pa5XCIsXG4gICAgLy8gICBcInBheVwiOiBcIuWFrOWPuFwiLFxuICAgIC8vICAgXCJzb3VyY2VcIjogXCLkuJrliqHmi5vlvoVcIixcbiAgICAvLyAgIFwicGVyc29uTmFtZVwiOiBcIuW8oOS4ieWVilwiLFxuICAgIC8vICAgXCJkaXNjcmlwdGlvblwiOiBcIuaIkeadpeiHquS4reWbve+8jOaIkeWGjWRqa2RrauebtOaSre+8jOaIkeW+l+i/h+S4lueVjOWGoOWGm++8jOaIkeS5n+WKnui/h+i9rCzkvaDopoHpop3kvaDpg73og73orrDlvpfnnIvmmpflj7fpg73kvJpcIixcbiAgICAvLyAgIFwiYmVsb25nUHJvamVjdFwiOiBcIuWkqeWcsOWkp+WQjFwiXG4gICAgLy8gfVxuXG4gICAgbGV0IHRoYXQgPSB0aGlzXG5cbiAgICAvLyDojrflj5blsY/luZXlrr1cbiAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHRoYXQud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgICAgdGhhdC4kYXBwbHkoKVxuICAgICAgICAvLyB0aGF0LmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgIH1cbiAgICB9KVxuXG5cbi8vIOWHveaVsOWumuS5ieWMuuWfnyA9PT09PT09PT09PT09PT09PT09XG4gICAgLy8g6K6+572u5LiA5Liq5Z+65YeG5q+U5L6LXG4gICAgbGV0IGNhbCA9IChweCkgPT4ge1xuICAgICAgcmV0dXJuICBweCAvIDc1MCAqIHRoYXQud2lkdGhcbiAgICB9XG5cbiAgICAvLyBjYW52YXPmjaLooYzmmL7npLpcbiAgICBsZXQgbGluZVdyYXAgPSAoY3R4LCBzdHIsIGZvbnRzaXplLCBsaW5laGVpZ2h0LCB3aWR0aCwgeCwgeSkgPT4ge1xuICAgICAgY3R4LnNldEZvbnRTaXplKGZvbnRzaXplKVxuICAgICAgbGV0IHRleHRBcnIgPSBbXVxuICAgICAgbGV0IGluZGV4ID0gMFxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGN0eC5tZWFzdXJlVGV4dChzdHIuc3Vic3RyaW5nKGluZGV4LCBpKSkud2lkdGggPj0gd2lkdGggKiAwLjgpIHtcbiAgICAgICAgICB0ZXh0QXJyLnB1c2goc3RyLnN1YnN0cmluZyhpbmRleCwgaSkpXG4gICAgICAgICAgaW5kZXggPSBpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGV4dEFyci5wdXNoKHN0ci5zdWJzdHJpbmcoaW5kZXgpKVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHRBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRleHRBcnJbaV0sIHgsIHkgKyBsaW5laGVpZ2h0ICogKGkgKyAxKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjdHggPSB3eC5jcmVhdGVDYW52YXNDb250ZXh0KCdjYW52YXNJZCcpXG5cbiAgICBjdHguc2V0RmlsbFN0eWxlKCd3aGl0ZScpXG4gICAgY3R4LmZpbGxSZWN0KGNhbCgwKSwgY2FsKDApLCBjYWwoNzUwKSwgY2FsKDEyMCkgKyAoOSArIHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoKSAqIGNhbCgzNikpXG4gICAgY3R4LnNldEZpbGxTdHlsZSgnYmxhY2snKVxuXG4gICAgLy8g5qCH6aKYXG4gICAgY3R4LnNldEZvbnRTaXplKGNhbCgyMykpXG4gICAgY3R4LnNldFRleHRBbGlnbignY2VudGVyJylcbiAgICBjdHguZmlsbFRleHQoJ+iusOi0puWHreivgScsIGNhbCgzNzUpLCBjYWwoNDApKVxuXG4gICAgLy8g5pe26Ze05Y+K57yW5Y+3XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgICBsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxXG4gICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpXG4gICAgY3R4LnRyYW5zbGF0ZShjYWwoNzMwKSwgY2FsKDcwKSlcbiAgICBjdHguc2V0Rm9udFNpemUoY2FsKDEzKSlcbiAgICBjdHguc2V0VGV4dEFsaWduKCdyaWdodCcpXG4gICAgY3R4LmZpbGxUZXh0KHllYXIgKyAnIOW5tCAnICsgbW9udGggKyAnIOaciCAnICsgZGF5ICsgJyDlj7cgICAgICDorrDlrZfnrKwgJyArIERhdGUubm93KCkudG9TdHJpbmcoKS5zdWJzdHIoNikgKyAoTWF0aC5yYW5kb20oKSogMTAwKS50b1N0cmluZygpLnNwbGl0KCcuJylbMF0gKyAnIOWPtycsIGNhbCgwKSwgY2FsKDIyKSlcbiAgICBjdHguc2V0VGV4dEFsaWduKCdjZW50ZXInKVxuICAgIGN0eC5zZXRUZXh0QWxpZ24oJ2NlbnRlcicpXG4gICAgY3R4LnNldFRleHRBbGlnbignY2VudGVyJylcblxuICAgIC8vIOihqOagvFxuICAgIC8vIOWkluahhlxuICAgIGN0eC50cmFuc2xhdGUoY2FsKC03MTApLCBjYWwoNTApKVxuICAgIGN0eC5zZXRTdHJva2VTdHlsZSgnIzAwMCcpXG4gICAgY3R4LnN0cm9rZVJlY3QoMCwgMCwgY2FsKDcxMCksIGNhbCgzNikgKiAodGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKyAzKSlcblxuICAgIC8vIOWGheahhlxuICAgIGxldCByb3cgPSB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCArIDNcbiAgICBmb3IgKGxldCBpID0gMjsgaSA8IHJvdyAtIDE7IGkrKykge1xuICAgICAgY3R4LnNldFN0cm9rZVN0eWxlKCcjOTk5JylcbiAgICAgIGN0eC5tb3ZlVG8oY2FsKDIwMCksIGNhbCgzNikgKiBpKVxuICAgICAgY3R4LmxpbmVUbyhjYWwoNzEwKSwgY2FsKDM2KSAqIGkpXG4gICAgICBjdHguc3Ryb2tlKClcbiAgICB9XG5cbiAgICBjdHgubW92ZVRvKDAsIGNhbCgzNikpXG4gICAgY3R4LmxpbmVUbyhjYWwoNzEwKSwgY2FsKDM2KSlcblxuICAgIGN0eC5tb3ZlVG8oMCwgY2FsKDM2KSAqIChyb3cgLTEpKVxuICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikgKiAocm93IC0xKSlcblxuICAgIGN0eC5tb3ZlVG8oMCwgY2FsKDM2KSAqIHJvdylcbiAgICBjdHgubGluZVRvKGNhbCg3MTApLCBjYWwoMzYpICogcm93KVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMjAwKSwgMClcbiAgICBjdHgubGluZVRvKGNhbCgyMDApLCBjYWwoMzYpICogKHJvdyAtMSkpXG5cbiAgICBjdHgubW92ZVRvKGNhbCgzMzApLCBjYWwoMTgpKVxuICAgIGN0eC5saW5lVG8oY2FsKDMzMCksIGNhbCgzNikgKiAocm93IC0gMSkpXG5cbiAgICBjdHgubW92ZVRvKGNhbCgyMDApLCBjYWwoMTgpKVxuICAgIGN0eC5saW5lVG8oY2FsKDQ2MCksIGNhbCgxOCkpXG5cbiAgICBjdHgubW92ZVRvKGNhbCg0NjApLCAwKVxuICAgIGN0eC5saW5lVG8oY2FsKDQ2MCksIGNhbCgzNikgKiByb3cpXG5cbiAgICBjdHgubW92ZVRvKGNhbCg1ODUpLCAwKVxuICAgIGN0eC5saW5lVG8oY2FsKDU4NSksIGNhbCgzNikgKiByb3cpXG5cbiAgICBjdHguc3Ryb2tlKClcblxuICAgIC8vIOihqOWktFxuICAgIGN0eC5zZXRGb250U2l6ZShjYWwoMTUpKVxuICAgIGN0eC5maWxsVGV4dCgn5pGY6KaBJywgY2FsKDEwMCksIGNhbCgyNCkpXG4gICAgY3R4LmZpbGxUZXh0KCflgJ/mlrnph5Hpop0nLCBjYWwoNTIyKSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQoJ+i0t+aWuemHkeminScsIGNhbCg2NDYpLCBjYWwoMjQpKVxuXG4gICAgY3R4LnNldEZvbnRTaXplKGNhbCgxNCkpXG4gICAgY3R4LmZpbGxUZXh0KCfkvJrorqHnp5Hnm64nLCBjYWwoMzMwKSwgY2FsKDE1KSlcbiAgICBjdHguZmlsbFRleHQoJ+enkeebruS7o+eggScsIGNhbCgyNjUpLCBjYWwoMzMpKVxuICAgIGN0eC5maWxsVGV4dCgn56eR55uu5ZCN56ewJywgY2FsKDM5NSksIGNhbCgzMykpXG5cbiAgICAvLyDlhoXlrrnpg6jliIZcbiAgICAvLyDmkZjopoHlhoXlrrlcbiAgICBjdHgudHJhbnNsYXRlKDAsIGNhbCgzNikpXG4gICAgbGluZVdyYXAoY3R4LCB0aGlzLnJlc3VsdC5kaXNjcmlwdGlvbiwgY2FsKDE0KSwgY2FsKDE2KSwgY2FsKDE2MCksIGNhbCgxMDApLCBjYWwoMTApKVxuXG4gICAgLy8g54mp5ZOB44CB5pyN5Yqh562JXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdGVtcCA9IHV0aWwodGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZVtpXS53b3JkLCB0aGlzLnJlc3VsdC5zb3VyY2UsIHRoaXMucmVzdWx0LkNvbW1vZGl0eUFtb3VudFtpXS53b3JkKVxuICAgICAgY3R4LmZpbGxUZXh0KHRlbXAuY29kZSwgY2FsKDI2NSksIGNhbCgyNCkgKyBpICogY2FsKDM2KSlcbiAgICAgIGlmIChjdHgubWVhc3VyZVRleHQodGVtcC5uYW1lKS53aWR0aCA+PSAwLjkgKiBjYWwoMTMwKSkge1xuICAgICAgICBsaW5lV3JhcChjdHgsIHRlbXAubmFtZSwgY2FsKDE0KSwgY2FsKDE0KSwgY2FsKDEzMCksIGNhbCgzOTUpLCBjYWwoMikgKyBpICogY2FsKDM2KSApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdHguZmlsbFRleHQodGVtcC5uYW1lLCBjYWwoMzk1KSwgY2FsKDI0KSArIGkgKiBjYWwoMzYpKVxuICAgICAgfVxuICAgICAgY3R4LmZpbGxUZXh0KHBhcnNlRmxvYXQoTnVtYmVyKHRoaXMucmVzdWx0LkNvbW1vZGl0eUFtb3VudFtpXS53b3JkKSArIE51bWJlcih0aGlzLnJlc3VsdC5Db21tb2RpdHlUYXhbaV0ud29yZCkgKyAnLicpLnRvRml4ZWQoMiksIGNhbCg1MjIpLCBjYWwoMjQpICsgaSAqIGNhbCgzNikpXG5cbiAgICAgIC8vIGN0eC5maWxsVGV4dCgnMjIyMS4wMS4wNicsIGNhbCgyNjUpLCBjYWwoMjQpICsgKDEgKyAyICogaSkgKiBjYWwoMzYpKVxuICAgICAgLy8gY3R4LmZpbGxUZXh0KCflvoXorqTor4Hov5vpobnnqI4nLCBjYWwoMzk1KSwgY2FsKDI0KSArICgxICsgMiAqIGkpICogY2FsKDM2KSlcbiAgICAgIC8vIGN0eC5maWxsVGV4dChsaW5lV3JhcCgpLCBjYWwoMzk1KSwgY2FsKDI0KSArIDIgKiBjYWwoMzYpKVxuICAgICAgLy8gY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LkNvbW1vZGl0eVRheFtpXS53b3JkLCBjYWwoNTIyKSwgY2FsKDI0KSArICgxICsgMiAqIGkpICogY2FsKDM2KSlcbiAgICB9XG5cbiAgICAvLyBpZiAodGhpcy5yZXN1bHQgJiYgdGhpcy5yZXN1bHQuQ29tbW9kaXR5QW1vdW50KSB7XG4gICAgLy8gICBsZXQgdG90YWwgPSAwXG4gICAgLy8gICB0aGlzLnJlc3VsdC5Db21tb2RpdHlBbW91bnQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIC8vICAgICB0b3RhbCArPSBOdW1iZXIoaXRlbS53b3JkKVxuICAgIC8vICAgfSlcbiAgICAvLyAgIHRoaXMucmVzdWx0LkFtb3VudEluRmlndWVycyA9IHRvdGFsLnRvRml4ZWQoMilcbiAgICAvLyB9XG5cblxuICAgIC8vIOS7t+eojuWQiOiuoVxuICAgIHN3aXRjaCAodGhpcy5yZXN1bHQucGF5KSB7XG4gICAgICBjYXNlICflhazlj7gnOlxuICAgICAgICAgIGN0eC5maWxsVGV4dCgnMjIwMicsIGNhbCgyNjUpLCBjYWwoMjQpICsgdGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKiBjYWwoMzYpKVxuICAgICAgICAgIGN0eC5maWxsVGV4dCgn5bqU5LuY6LSm5qy+JywgY2FsKDM5NSksIGNhbCgyNCkgKyB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCAqIGNhbCgzNikpXG4gICAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LkFtb3VudEluRmlndWVycywgY2FsKDY0NiksIGNhbCgyNCkgKyB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCAqIGNhbCgzNikpXG4gICAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ+WFrOWPuOWRmOW3pSc6XG4gICAgICAgICAgY3R4LmZpbGxUZXh0KCcyMjQxLjAxJywgY2FsKDI2NSksIGNhbCgyNCkgKyB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCAqIGNhbCgzNikpXG4gICAgICAgICAgbGluZVdyYXAoY3R4LCAn5YW25LuW5bqU5LuY5qy+LeWRmOW3peaKpemUgCcsIGNhbCgxNCksIGNhbCgxNCksIGNhbCgxMzApLCBjYWwoMzk1KSwgY2FsKDIpICsgdGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKiBjYWwoMzYpKVxuICAgICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5BbW91bnRJbkZpZ3VlcnMsIGNhbCg2NDYpLCBjYWwoMjQpICsgdGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKiBjYWwoMzYpKVxuICAgICAgICAgIGJyZWFrXG4gICAgICBjYXNlICflhbbku5bnrKzkuInmlrknOlxuICAgICAgICAgIGN0eC5maWxsVGV4dCgnMjI0MS4wNCcsIGNhbCgyNjUpLCBjYWwoMjQpICsgdGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKiBjYWwoMzYpKVxuICAgICAgICAgIGxpbmVXcmFwKGN0eCwgJ+WFtuS7luW6lOS7mOasvi3lhbbku5bnrKzkuInmlrnlvoDmnaUnLCBjYWwoMTQpLCBjYWwoMTQpLCBjYWwoMTMwKSwgY2FsKDM5NSksIGNhbCgyKSArIHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoICogY2FsKDM2KSlcbiAgICAgICAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuQW1vdW50SW5GaWd1ZXJzLCBjYWwoNjQ2KSwgY2FsKDI0KSArIHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoICogY2FsKDM2KSlcbiAgICAgICAgICBicmVha1xuICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY3R4LmZpbGxUZXh0KCcyMjAyJywgY2FsKDI2NSksIGNhbCgyNCkgKyB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCAqIGNhbCgzNikpXG4gICAgICAgICAgY3R4LmZpbGxUZXh0KCflupTku5jotKbmrL4nLCBjYWwoMzk1KSwgY2FsKDI0KSArIHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoICogY2FsKDM2KSlcbiAgICAgICAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuQW1vdW50SW5GaWd1ZXJzLCBjYWwoNjQ2KSwgY2FsKDI0KSArIHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoICogY2FsKDM2KSlcbiAgICAgICAgICBicmVha1xuICAgIH1cblxuXG4gICAgLy8g5ZCI6K6hXG4gICAgY3R4LnRyYW5zbGF0ZSgwLCBjYWwoMzYpICogKHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoICsgMSkpXG4gICAgY3R4LmZpbGxUZXh0KCflkIjorqEnLCBjYWwoMjMwKSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuQW1vdW50SW5GaWd1ZXJzLCBjYWwoNTIyKSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuQW1vdW50SW5GaWd1ZXJzLCBjYWwoNjQ2KSwgY2FsKDI0KSlcblxuICAgIC8vIOS/oeaBr+agj1xuICAgIGN0eC5iZWdpblBhdGgoKVxuICAgIC8vIOi+ueahhlxuICAgIGN0eC50cmFuc2xhdGUoMCwgY2FsKDM2KSlcbiAgICBsZXQgbGVmdFRpdGxlID0gWyfkvJrorqHmgLvnrqEnLCAn5a6i5oi3JywgJ+S+m+W6lOWVhicsICfpobnnm64nXVxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykge1xuICAgICAgY3R4LmZpbGxUZXh0KGxlZnRUaXRsZVtpIC0gMV0sIGNhbCg1MCksIGNhbCgyNCkgKyAoaSAtIDEpICogY2FsKDM2KSlcbiAgICAgIGN0eC5tb3ZlVG8oMCwgY2FsKDM2KSAqIGkpXG4gICAgICBjdHgubGluZVRvKGNhbCg3MTApLCBjYWwoMzYpICogaSlcbiAgICB9XG5cbiAgICBjdHgubW92ZVRvKGNhbCgzNTUpLCBjYWwoMzYpKVxuICAgIGN0eC5saW5lVG8oY2FsKDM1NSksIGNhbCgzNikgKiA0KVxuICAgIGN0eC5maWxsVGV4dCgn5ZGY5belJywgY2FsKDQwNSksIGNhbCgzNikgKyBjYWwoMjQpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoNDU1KSwgY2FsKDM2KSlcbiAgICBjdHgubGluZVRvKGNhbCg0NTUpLCBjYWwoMzYpICogNClcbiAgICBjdHguZmlsbFRleHQoJ+WFtuS7luesrOS4ieaWuScsIGNhbCg0MDUpLCBjYWwoMzYpICogMiArIGNhbCgyNCkpXG5cbiAgICBjdHgubW92ZVRvKGNhbCg3MTApLCAwKVxuICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikgKiA0KVxuICAgIGN0eC5maWxsVGV4dCgn5Y+R56Wo5Y+356CBJywgY2FsKDQwNSksIGNhbCgzNikgKiAzICsgY2FsKDI0KSlcblxuICAgIGN0eC5tb3ZlVG8oMCwgMClcbiAgICBjdHgubGluZVRvKDAsIGNhbCgzNikgKiA0KVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMTAwKSwgMClcbiAgICBjdHgubGluZVRvKGNhbCgxMDApLCBjYWwoMzYpICogNClcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDE5MCksIDApXG4gICAgY3R4LmxpbmVUbyhjYWwoMTkwKSwgY2FsKDM2KSlcblxuICAgIGxldCB0aXRsZSA9IFsn6K6w6LSmJywgJ+WHuue6sycsICflrqHmoLgnLCAn5Yi25Y2VJ11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgY3R4LmZpbGxUZXh0KHRpdGxlW2ldLCBjYWwoMTkwICsgMTMwICogaSArIDI1KSwgY2FsKDI0KSApXG4gICAgICBjdHgubW92ZVRvKGNhbCgxOTAgKyAxMzAgKiBpICsgNTApLCAwKVxuICAgICAgY3R4LmxpbmVUbyhjYWwoMTkwICsgMTMwICogaSArIDUwKSwgY2FsKDM2KSlcbiAgICAgIGN0eC5tb3ZlVG8oY2FsKDE5MCArIDEzMCAqIGkgKyAxMzApLCAwKVxuICAgICAgY3R4LmxpbmVUbyhjYWwoMTkwICsgMTMwICogaSArIDEzMCksIGNhbCgzNikpXG4gICAgfVxuICAgIGN0eC5zdHJva2UoKVxuXG4gICAgY3R4LmZpbGxUZXh0KHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJJbmZvLm5pY2tOYW1lLCBjYWwoMTkwICsgMTMwICogMyArIDkwKSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuSW52b2ljZU51bSwgY2FsKDU4MiksIGNhbCgyNCkgKyBjYWwoMzYpICogMylcbiAgICB0aGlzLnJlc3VsdC5iZWxvbmdQcm9qZWN0ICYmIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5iZWxvbmdQcm9qZWN0LCBjYWwoMjI4KSwgY2FsKDI0KSArIGNhbCgzNikgKiAzKVxuXG4gICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LlNlbGxlck5hbWUsIGNhbCgyMjgpLCBjYWwoMjQpICsgY2FsKDM2KSAqIDIpXG4gICAgdGhpcy5yZXN1bHQucGVyc29uTmFtZSAmJiBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQucGVyc29uTmFtZSwgY2FsKDU4MiksIGNhbCgyNCkgKyBjYWwoMzYpKVxuICAgIHRoaXMucmVzdWx0Lm90aGVyTmFtZSAmJiBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQub3RoZXJOYW1lLCBjYWwoNTgyKSwgY2FsKDI0KSArIGNhbCgzNikgKiAyKVxuXG4gICAgY3R4LmRyYXcodHJ1ZSwgKCkgPT4ge1xuICAgICAgdGhhdC5pbWFnZUhlaWdodCA9IGNhbCgxMjApICsgKDggKyB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCkgKiBjYWwoMzYpXG4gICAgICB3eC5jYW52YXNUb1RlbXBGaWxlUGF0aCh7XG4gICAgICAgICAgeDogMCxcbiAgICAgICAgICB5OiAwLFxuICAgICAgICAgIHdpZHRoOiBjYWwoNzUwKSxcbiAgICAgICAgICBoZWlnaHQ6IGNhbCgxMjApICsgKDggKyB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCkgKiBjYWwoMzYpLFxuICAgICAgICAgIGZpbGVUeXBlOiAnanBnJyxcbiAgICAgICAgICBxdWFsaXR5OiAwLjUsXG4gICAgICAgICAgY2FudmFzSWQ6ICdjYW52YXNJZCcsLy9jYW52YXNJZOWSjOagh+etvumHjOmdoueahGlk5a+55bqUXG4gICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICB3eC5oaWRlVG9hc3QoKVxuICAgICAgICAgICAgICAvL+WwhuiOt+WPluWIsOeahOWbvueJh+S4tOaXtui3r+W+hHNldOWIsGNhbnZhc1NhdmVpbWfkuK1cbiAgICAgICAgICAgICAgdGhhdC50ZW1wRmlsZVBhdGggPSByZXMudGVtcEZpbGVQYXRoXG4gICAgICAgICAgICAgIHRoYXQuJGFwcGx5KClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6IChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG4iXX0=