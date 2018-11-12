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
      tempFilePath: ''
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
      //   "CommodityAmount": [
      //     {
      //     "word": "18647.17",
      //     "row": "1"
      //   },
      //     {
      //     "word": "18647.17",
      //     "row": "1"
      //   },
      //     {
      //     "word": "18647.17",
      //     "row": "1"
      //   },
      //     {
      //     "word": "18647.17",
      //     "row": "1"
      //   },
      //     {
      //     "word": "18647.17",
      //     "row": "1"
      //   },
      //   {
      //     "word": "18647.17",
      //     "row": "2"
      //   }],
      //   "InvoiceDate": "2018年08月19日",
      //   "CommodityTax": [
      //     {
      //     "word": "1118.83",
      //     "row": "1"
      //   },
      //     {
      //     "word": "1118.83",
      //     "row": "1"
      //   },
      //     {
      //     "word": "1118.83",
      //     "row": "1"
      //   },
      //     {
      //     "word": "1118.83",
      //     "row": "1"
      //   },
      //     {
      //     "word": "1118.83",
      //     "row": "1"
      //   },
      //    {
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
      //   "CommodityName": [
      //     {
      //     "word": "*餐饮服务*餐费",
      //     "row": "1"
      //   },
      //     {
      //     "word": "*餐饮服务*餐费",
      //     "row": "1"
      //   },
      //     {
      //     "word": "*餐饮服务*餐费",
      //     "row": "1"
      //   },
      //     {
      //     "word": "*餐饮服务*餐费",
      //     "row": "1"
      //   },
      //     {
      //     "word": "*餐饮服务*餐费",
      //     "row": "1"
      //   },
      //   {
      //     "word": "*ai教育",
      //     "row": "2"
      //   }],
      //   "CommodityType": [{
      //     "word": "",
      //     "row": "1"
      //   }],
      //   "CheckCode": "0034580225619590949",
      //   "identity": "购买方",
      //   "pay": "业务招待",
      //   "source": "公司员工",
      //   "personName": "张三啊",
      //   "discription": "我来自中国，我再djkdkj直播，我得过世界冠军，我也办过转,你要额你都能记得看暗号都会",
      //   "belongProject": "天地大同"
      // }

      var that = this;

      // 获取屏幕宽
      wx.getSystemInfo({
        success: function success(res) {
          that.width = res.windowWidth;
          // that.height = res.windowHeight
        }
      });

      // 函数定义区域 ===================
      // 设置一个基准比例
      var cal = function cal(px) {
        return px / 375 * that.width;
      };

      // canvas换行显示
      var lineWrap = function lineWrap(ctx, str, fontsize, lineheight, width, x, y) {
        ctx.setFontSize(fontsize);
        var textArr = [];
        var index = 0;
        for (var i = 1; i < str.length; i++) {
          if (ctx.measureText(str.substring(index, i)).width >= width) {
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
      lineWrap(ctx, this.result.discription, cal(14), cal(16), cal(160), cal(100), cal(10));

      // 价税合计
      ctx.fillText('1122', cal(265), cal(24));
      ctx.fillText('应收账款', cal(395), cal(24));
      ctx.fillText(this.result.AmountInFiguers, cal(522), cal(24));

      // 物品、服务等
      for (var _i2 = 0; _i2 < this.result.CommodityName.length; _i2++) {
        ctx.fillText('5001', cal(265), cal(24) + (1 + 2 * _i2) * cal(36));
        ctx.fillText('主营业务收入', cal(395), cal(24) + (1 + 2 * _i2) * cal(36));
        ctx.fillText(this.result.CommodityAmount[_i2].word, cal(646), cal(24) + (1 + 2 * _i2) * cal(36));

        ctx.fillText('2221.01.01', cal(265), cal(24) + (2 + 2 * _i2) * cal(36));
        lineWrap(ctx, '应交税费 - 增值税 - 销项税', cal(14), cal(14), cal(130), cal(395), cal(2) + (2 + 2 * _i2) * cal(36));
        // ctx.fillText(lineWrap(), cal(395), cal(24) + 2 * cal(36))
        ctx.fillText(this.result.CommodityTax[_i2].word, cal(646), cal(24) + (2 + 2 * _i2) * cal(36));
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
      ctx.fillText(this.result.PurchaserName, cal(228), cal(24) + cal(36));

      ctx.draw(true, function () {
        wx.canvasToTempFilePath({
          x: 0,
          y: 0,
          width: cal(750),
          height: cal(120) + (8 + 2 * _this2.result.CommodityName.length) * cal(36),
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGUuanMiXSwibmFtZXMiOlsiU2FsZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsIndpZHRoIiwiaGVpZ2h0IiwicmVzdWx0IiwidGVtcEZpbGVQYXRoIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiaGFubGRlU2F2ZVBpYyIsIl9zZWxmIiwid3giLCJnZXRJbWFnZUluZm8iLCJzcmMiLCJzdWNjZXNzIiwicmVzMSIsInNhdmVJbWFnZVRvUGhvdG9zQWxidW0iLCJmaWxlUGF0aCIsInBhdGgiLCJyZXMyIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJmYWlsIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNhbmNlbCIsIm9wdGlvbnMiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsIkpTT04iLCJwYXJzZSIsInRoYXQiLCJnZXRTeXN0ZW1JbmZvIiwicmVzIiwid2luZG93V2lkdGgiLCJjYWwiLCJweCIsImxpbmVXcmFwIiwiY3R4Iiwic3RyIiwiZm9udHNpemUiLCJsaW5laGVpZ2h0IiwieCIsInkiLCJzZXRGb250U2l6ZSIsInRleHRBcnIiLCJpbmRleCIsImkiLCJsZW5ndGgiLCJtZWFzdXJlVGV4dCIsInN1YnN0cmluZyIsInB1c2giLCJmaWxsVGV4dCIsImNyZWF0ZUNhbnZhc0NvbnRleHQiLCJzZXRGaWxsU3R5bGUiLCJmaWxsUmVjdCIsIkNvbW1vZGl0eU5hbWUiLCJkYXRlIiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwidHJhbnNsYXRlIiwic2V0VGV4dEFsaWduIiwibm93IiwidG9TdHJpbmciLCJzdWJzdHIiLCJNYXRoIiwicmFuZG9tIiwic3BsaXQiLCJzZXRTdHJva2VTdHlsZSIsInN0cm9rZVJlY3QiLCJyb3ciLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJkaXNjcmlwdGlvbiIsIkFtb3VudEluRmlndWVycyIsIkNvbW1vZGl0eUFtb3VudCIsIndvcmQiLCJDb21tb2RpdHlUYXgiLCJiZWdpblBhdGgiLCJsZWZ0VGl0bGUiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwibmlja05hbWUiLCJJbnZvaWNlTnVtIiwiYmVsb25nUHJvamVjdCIsIlB1cmNoYXNlck5hbWUiLCJkcmF3IiwiY2FudmFzVG9UZW1wRmlsZVBhdGgiLCJjYW52YXNJZCIsImhpZGVUb2FzdCIsIiRhcHBseSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBSWJDLEksR0FBTztBQUNMQyxhQUFPLENBREY7QUFFTEMsY0FBUSxDQUZIO0FBR0xDLGNBQVEsRUFISDtBQUlMQyxvQkFBYztBQUpULEssUUFPUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1JDLG1CQURRLDJCQUNTO0FBQ2YsWUFBSUMsUUFBUSxJQUFaO0FBQ0lDLFdBQUdDLFlBQUgsQ0FBZ0I7QUFDZEMsZUFBS0gsTUFBTUosWUFERztBQUVkUSxpQkFGYyxtQkFFTEMsSUFGSyxFQUVDO0FBQ2JKLGVBQUdLLHNCQUFILENBQTBCO0FBQ3RCQyx3QkFBVUYsS0FBS0csSUFETztBQUV0QkosdUJBQVMsaUJBQVVLLElBQVYsRUFBZ0I7QUFDdkJSLG1CQUFHUyxZQUFILENBQWdCO0FBQ1pDLHlCQUFPO0FBREssaUJBQWhCO0FBR0QsZUFOcUI7QUFPdEJDLG9CQUFNLGNBQVVDLEdBQVYsRUFBZTtBQUNuQkMsd0JBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNEO0FBVHFCLGFBQTFCO0FBV0Q7QUFkYSxTQUFoQjtBQWdCTCxPQW5CTztBQW9CUkcsa0JBcEJRLDBCQW9CUTtBQUNkZixXQUFHUyxZQUFILENBQWdCO0FBQ1pDLGlCQUFPO0FBREssU0FBaEI7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RUFBUztBQUNiQyxvQkFBUUMsR0FBUixDQUFZRixHQUFaO0FBQ0Q7QUFkbUIsU0FBeEI7QUFnQkQsT0FqQkQ7QUFrQkQ7Ozs7RUE3WCtCOEUsZUFBS0MsSTs7a0JBQWxCeEcsSSIsImZpbGUiOiJzYWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHV0aWwgZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2FsZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Yet6K+BJ1xuICB9XG4gIGNvbXBvbmVudHMgPSB7XG5cbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIHJlc3VsdDoge30sXG4gICAgdGVtcEZpbGVQYXRoOiAnJ1xuICB9XG5cbiAgY29tcHV0ZWQgPSB7fVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgaGFubGRlU2F2ZVBpYyAoKSB7XG4gICAgICBsZXQgX3NlbGYgPSB0aGlzXG4gICAgICAgICAgd3guZ2V0SW1hZ2VJbmZvKHtcbiAgICAgICAgICAgIHNyYzogX3NlbGYudGVtcEZpbGVQYXRoLFxuICAgICAgICAgICAgc3VjY2VzcyAocmVzMSkge1xuICAgICAgICAgICAgICB3eC5zYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtKHtcbiAgICAgICAgICAgICAgICAgIGZpbGVQYXRoOiByZXMxLnBhdGgsXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzMikge1xuICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBoYW5kbGVDYW5jZWwgKCkge1xuICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICBkZWx0YTogMVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICB0aXRsZTogJ+ato+WcqOeUn+aIkOWHreivgScsXG4gICAgICAgaWNvbjogJ2xvYWRpbmcnLFxuICAgICAgIGR1cmF0aW9uOiAxMDAwMFxuICAgICB9KVxuICAgIHRoaXMucmVzdWx0ID0gSlNPTi5wYXJzZShvcHRpb25zLnJlc3VsdClcbiAgICAvLyB0aGlzLnJlc3VsdCA9IHtcbiAgICAvLyAgIFwiSW52b2ljZU51bVwiOiBcIjMyMzMwNzM5XCIsXG4gICAgLy8gICBcIlNlbGxlck5hbWVcIjogXCLljJfkuqzlhqDmnIjppJDppa7nrqHnkIbmnInpmZDlhazlj7hcIixcbiAgICAvLyAgIFwiQ29tbW9kaXR5VGF4UmF0ZVwiOiBbe1xuICAgIC8vICAgICBcIndvcmRcIjogXCI2JVwiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfV0sXG4gICAgLy8gICBcIlNlbGxlckJhbmtcIjogXCLljJfkuqzluILmtbfmt4DljLrkuK3lhbPmnZHkuJzot68x5Y+36ZmiMuWPt+alvDEwMeWupDYyNzk4OTg4XCIsXG4gICAgLy8gICBcIkNoZWNrZXJcIjogXCJcIixcbiAgICAvLyAgIFwiVG90YWxBbW91bnRcIjogXCIxODY0Ny4xN1wiLFxuICAgIC8vICAgXCJDb21tb2RpdHlBbW91bnRcIjogW1xuICAgIC8vICAgICB7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIjE4NjQ3LjE3XCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMVwiXG4gICAgLy8gICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIjE4NjQ3LjE3XCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMVwiXG4gICAgLy8gICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIjE4NjQ3LjE3XCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMVwiXG4gICAgLy8gICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIjE4NjQ3LjE3XCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMVwiXG4gICAgLy8gICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIjE4NjQ3LjE3XCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMVwiXG4gICAgLy8gICB9LFxuICAgIC8vICAge1xuICAgIC8vICAgICBcIndvcmRcIjogXCIxODY0Ny4xN1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjJcIlxuICAgIC8vICAgfV0sXG4gICAgLy8gICBcIkludm9pY2VEYXRlXCI6IFwiMjAxOOW5tDA45pyIMTnml6VcIixcbiAgICAvLyAgIFwiQ29tbW9kaXR5VGF4XCI6IFtcbiAgICAvLyAgICAge1xuICAgIC8vICAgICBcIndvcmRcIjogXCIxMTE4LjgzXCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMVwiXG4gICAgLy8gICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIjExMTguODNcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiMTExOC44M1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICBcIndvcmRcIjogXCIxMTE4LjgzXCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMVwiXG4gICAgLy8gICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIjExMTguODNcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH0sXG4gICAgLy8gICAge1xuICAgIC8vICAgICBcIndvcmRcIjogXCIxNzM4LjgzXCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMlwiXG4gICAgLy8gICB9XSxcbiAgICAvLyAgIFwiUHVyY2hhc2VyTmFtZVwiOiBcIuS4iua1t+acieeVpeaVmeiCsuenkeaKgOaciemZkOWFrOWPuFwiLFxuICAgIC8vICAgXCJDb21tb2RpdHlOdW1cIjogW3tcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiXCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMVwiXG4gICAgLy8gICB9XSxcbiAgICAvLyAgIFwiUHVyY2hhc2VyQmFua1wiOiBcIlwiLFxuICAgIC8vICAgXCJSZW1hcmtzXCI6IFwi5qCh6aqM56CBMDAzNDU4MDIyNTZcIixcbiAgICAvLyAgIFwiUGFzc3dvcmRcIjogXCI1Mi8vNTUwMSsxNDkwNi0rMDM8LTMwODQtODk8OTgwNzE5PisyNS00KzYzODY3PDgzPCswMzAxLSowMSs5PCowLzkwPC80Ni08MDI5ODg0PjU0LTI4Pj4wMzkvKy8zNiorOTMvNzg1PjA0PlwiLFxuICAgIC8vICAgXCJTZWxsZXJBZGRyZXNzXCI6IFwi5Y+3MTAx5a6kNjI3OTg5ODg5MTFcIixcbiAgICAvLyAgIFwiUHVyY2hhc2VyQWRkcmVzc1wiOiBcIlwiLFxuICAgIC8vICAgXCJJbnZvaWNlQ29kZVwiOiBcIjAxMTAwMTgwMDEwNFwiLFxuICAgIC8vICAgXCJDb21tb2RpdHlVbml0XCI6IFt7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIlwiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfV0sXG4gICAgLy8gICBcIlBheWVlXCI6IFwi55SE5am3XCIsXG4gICAgLy8gICBcIlB1cmNoYXNlclJlZ2lzdGVyTnVtXCI6IFwiOTEzMTAxMTBNQUcwV05cIixcbiAgICAvLyAgIFwiQ29tbW9kaXR5UHJpY2VcIjogW3tcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiXCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMVwiXG4gICAgLy8gICB9XSxcbiAgICAvLyAgIFwiTm90ZURyYXdlclwiOiBcIumhvuaWsOadsFwiLFxuICAgIC8vICAgXCJBbW91bnRJbldvcmRzXCI6IFwi5LiH5Luf5p+S5L2w6ZmG5ou+6ZmG5ZyG5pW0XCIsXG4gICAgLy8gICBcIkFtb3VudEluRmlndWVyc1wiOiBcIjE5NzY2LjAwXCIsXG4gICAgLy8gICBcIlRvdGFsVGF4XCI6IFwiMTExOC4zMFwiLFxuICAgIC8vICAgXCJJbnZvaWNlVHlwZVwiOiBcIuS4k+eUqOWPkeelqFwiLFxuICAgIC8vICAgXCJTZWxsZXJSZWdpc3Rlck51bVwiOiBcIjkxMTEwMTA4Nzk3NTgzNDMzOFwiLFxuICAgIC8vICAgXCJDb21tb2RpdHlOYW1lXCI6IFtcbiAgICAvLyAgICAge1xuICAgIC8vICAgICBcIndvcmRcIjogXCIq6aSQ6aWu5pyN5YqhKumkkOi0uVwiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICBcIndvcmRcIjogXCIq6aSQ6aWu5pyN5YqhKumkkOi0uVwiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICBcIndvcmRcIjogXCIq6aSQ6aWu5pyN5YqhKumkkOi0uVwiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICBcIndvcmRcIjogXCIq6aSQ6aWu5pyN5YqhKumkkOi0uVwiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICBcIndvcmRcIjogXCIq6aSQ6aWu5pyN5YqhKumkkOi0uVwiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfSxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiKmFp5pWZ6IKyXCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMlwiXG4gICAgLy8gICB9XSxcbiAgICAvLyAgIFwiQ29tbW9kaXR5VHlwZVwiOiBbe1xuICAgIC8vICAgICBcIndvcmRcIjogXCJcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH1dLFxuICAgIC8vICAgXCJDaGVja0NvZGVcIjogXCIwMDM0NTgwMjI1NjE5NTkwOTQ5XCIsXG4gICAgLy8gICBcImlkZW50aXR5XCI6IFwi6LSt5Lmw5pa5XCIsXG4gICAgLy8gICBcInBheVwiOiBcIuS4muWKoeaLm+W+hVwiLFxuICAgIC8vICAgXCJzb3VyY2VcIjogXCLlhazlj7jlkZjlt6VcIixcbiAgICAvLyAgIFwicGVyc29uTmFtZVwiOiBcIuW8oOS4ieWVilwiLFxuICAgIC8vICAgXCJkaXNjcmlwdGlvblwiOiBcIuaIkeadpeiHquS4reWbve+8jOaIkeWGjWRqa2RrauebtOaSre+8jOaIkeW+l+i/h+S4lueVjOWGoOWGm++8jOaIkeS5n+WKnui/h+i9rCzkvaDopoHpop3kvaDpg73og73orrDlvpfnnIvmmpflj7fpg73kvJpcIixcbiAgICAvLyAgIFwiYmVsb25nUHJvamVjdFwiOiBcIuWkqeWcsOWkp+WQjFwiXG4gICAgLy8gfVxuXG4gICAgbGV0IHRoYXQgPSB0aGlzXG5cbiAgICAvLyDojrflj5blsY/luZXlrr1cbiAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHRoYXQud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgICAgLy8gdGhhdC5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICB9XG4gICAgfSlcblxuXG4vLyDlh73mlbDlrprkuYnljLrln58gPT09PT09PT09PT09PT09PT09PVxuICAgIC8vIOiuvue9ruS4gOS4quWfuuWHhuavlOS+i1xuICAgIGxldCBjYWwgPSAocHgpID0+IHtcbiAgICAgIHJldHVybiAgcHggLyAzNzUgKiB0aGF0LndpZHRoXG4gICAgfVxuXG4gICAgLy8gY2FudmFz5o2i6KGM5pi+56S6XG4gICAgbGV0IGxpbmVXcmFwID0gKGN0eCwgc3RyLCBmb250c2l6ZSwgbGluZWhlaWdodCwgd2lkdGgsIHgsIHkpID0+IHtcbiAgICAgIGN0eC5zZXRGb250U2l6ZShmb250c2l6ZSlcbiAgICAgIGxldCB0ZXh0QXJyID0gW11cbiAgICAgIGxldCBpbmRleCA9IDBcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChjdHgubWVhc3VyZVRleHQoc3RyLnN1YnN0cmluZyhpbmRleCwgaSkpLndpZHRoID49IHdpZHRoKSB7XG4gICAgICAgICAgdGV4dEFyci5wdXNoKHN0ci5zdWJzdHJpbmcoaW5kZXgsIGkpKVxuICAgICAgICAgIGluZGV4ID0gaVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRleHRBcnIucHVzaChzdHIuc3Vic3RyaW5nKGluZGV4KSlcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0QXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGN0eC5maWxsVGV4dCh0ZXh0QXJyW2ldLCB4LCB5ICsgbGluZWhlaWdodCAqIChpICsgMSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY3R4ID0gd3guY3JlYXRlQ2FudmFzQ29udGV4dCgnY2FudmFzSWQnKVxuXG4gICAgY3R4LnNldEZpbGxTdHlsZSgnd2hpdGUnKVxuICAgIGN0eC5maWxsUmVjdChjYWwoMCksIGNhbCgwKSwgY2FsKDc1MCksIGNhbCgxMjApICsgKDggKyAyICogdGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGgpICogY2FsKDM2KSlcbiAgICBjdHguc2V0RmlsbFN0eWxlKCdibGFjaycpXG5cbiAgICAvLyDmoIfpophcbiAgICBjdHguc2V0Rm9udFNpemUoY2FsKDIzKSlcbiAgICBjdHguZmlsbFRleHQoJ+iusOi0puWHreivgScsIGNhbCgzNzUpLCBjYWwoNDApKVxuXG4gICAgLy8g5pe26Ze05Y+K57yW5Y+3XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgICBsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxXG4gICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpXG4gICAgY3R4LnRyYW5zbGF0ZShjYWwoNzMwKSwgY2FsKDcwKSlcbiAgICBjdHguc2V0Rm9udFNpemUoY2FsKDEzKSlcbiAgICBjdHguc2V0VGV4dEFsaWduKCdyaWdodCcpXG4gICAgY3R4LmZpbGxUZXh0KHllYXIgKyAnIOW5tCAnICsgbW9udGggKyAnIOaciCAnICsgZGF5ICsgJyDlj7cgICAgICDorrDlrZfnrKwgJyArIERhdGUubm93KCkudG9TdHJpbmcoKS5zdWJzdHIoNikgKyAoTWF0aC5yYW5kb20oKSogMTAwKS50b1N0cmluZygpLnNwbGl0KCcuJylbMF0gKyAnIOWPtycsIGNhbCgwKSwgY2FsKDIyKSlcbiAgICBjdHguc2V0VGV4dEFsaWduKCdjZW50ZXInKVxuICAgIGN0eC5zZXRUZXh0QWxpZ24oJ2NlbnRlcicpXG4gICAgY3R4LnNldFRleHRBbGlnbignY2VudGVyJylcblxuICAgIC8vIOihqOagvFxuICAgIC8vIOWkluahhlxuICAgIGN0eC50cmFuc2xhdGUoY2FsKC03MTApLCBjYWwoNTApKVxuICAgIGN0eC5zZXRTdHJva2VTdHlsZSgnIzAwMCcpXG4gICAgY3R4LnN0cm9rZVJlY3QoMCwgMCwgY2FsKDcxMCksIGNhbCgzNikgKiAodGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKiAyICArIDMpKVxuXG4gICAgLy8g5YaF5qGGXG4gICAgbGV0IHJvdyA9IHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoICogMiArIDNcbiAgICBmb3IgKGxldCBpID0gMjsgaSA8IHJvdyAtIDE7IGkrKykge1xuICAgICAgY3R4LnNldFN0cm9rZVN0eWxlKCcjOTk5JylcbiAgICAgIGN0eC5tb3ZlVG8oY2FsKDIwMCksIGNhbCgzNikgKiBpKVxuICAgICAgY3R4LmxpbmVUbyhjYWwoNzEwKSwgY2FsKDM2KSAqIGkpXG4gICAgICBjdHguc3Ryb2tlKClcbiAgICB9XG5cbiAgICBjdHgubW92ZVRvKDAsIGNhbCgzNikpXG4gICAgY3R4LmxpbmVUbyhjYWwoNzEwKSwgY2FsKDM2KSlcblxuICAgIGN0eC5tb3ZlVG8oMCwgY2FsKDM2KSAqIChyb3cgLTEpKVxuICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikgKiAocm93IC0xKSlcblxuICAgIGN0eC5tb3ZlVG8oMCwgY2FsKDM2KSAqIHJvdylcbiAgICBjdHgubGluZVRvKGNhbCg3MTApLCBjYWwoMzYpICogcm93KVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMjAwKSwgMClcbiAgICBjdHgubGluZVRvKGNhbCgyMDApLCBjYWwoMzYpICogKHJvdyAtMSkpXG5cbiAgICBjdHgubW92ZVRvKGNhbCgzMzApLCBjYWwoMTgpKVxuICAgIGN0eC5saW5lVG8oY2FsKDMzMCksIGNhbCgzNikgKiAocm93IC0gMSkpXG5cbiAgICBjdHgubW92ZVRvKGNhbCgyMDApLCBjYWwoMTgpKVxuICAgIGN0eC5saW5lVG8oY2FsKDQ2MCksIGNhbCgxOCkpXG5cbiAgICBjdHgubW92ZVRvKGNhbCg0NjApLCAwKVxuICAgIGN0eC5saW5lVG8oY2FsKDQ2MCksIGNhbCgzNikgKiByb3cpXG5cbiAgICBjdHgubW92ZVRvKGNhbCg1ODUpLCAwKVxuICAgIGN0eC5saW5lVG8oY2FsKDU4NSksIGNhbCgzNikgKiByb3cpXG5cbiAgICBjdHguc3Ryb2tlKClcblxuICAgIC8vIOihqOWktFxuICAgIGN0eC5zZXRGb250U2l6ZShjYWwoMTUpKVxuICAgIGN0eC5zZXRUZXh0QWxpZ24oJ2NlbnRlcicpXG4gICAgY3R4LmZpbGxUZXh0KCfmkZjopoEnLCBjYWwoMTAwKSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQoJ+WAn+aWuemHkeminScsIGNhbCg1MjIpLCBjYWwoMjQpKVxuICAgIGN0eC5maWxsVGV4dCgn6LS35pa56YeR6aKdJywgY2FsKDY0NiksIGNhbCgyNCkpXG5cbiAgICBjdHguc2V0Rm9udFNpemUoY2FsKDE0KSlcbiAgICBjdHguZmlsbFRleHQoJ+S8muiuoeenkeebricsIGNhbCgzMzApLCBjYWwoMTUpKVxuICAgIGN0eC5maWxsVGV4dCgn56eR55uu5Luj56CBJywgY2FsKDI2NSksIGNhbCgzMykpXG4gICAgY3R4LmZpbGxUZXh0KCfnp5Hnm67lkI3np7AnLCBjYWwoMzk1KSwgY2FsKDMzKSlcblxuICAgIC8vIOWGheWuuemDqOWIhlxuICAgIC8vIOaRmOimgeWGheWuuVxuICAgIGN0eC50cmFuc2xhdGUoMCwgY2FsKDM2KSlcbiAgICBsaW5lV3JhcChjdHgsIHRoaXMucmVzdWx0LmRpc2NyaXB0aW9uLCBjYWwoMTQpLCBjYWwoMTYpLCBjYWwoMTYwKSwgY2FsKDEwMCksIGNhbCgxMCkpXG5cbiAgICAvLyDku7fnqI7lkIjorqFcbiAgICBjdHguZmlsbFRleHQoJzExMjInLCBjYWwoMjY1KSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQoJ+W6lOaUtui0puasvicsIGNhbCgzOTUpLCBjYWwoMjQpKVxuICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5BbW91bnRJbkZpZ3VlcnMsIGNhbCg1MjIpLCBjYWwoMjQpKVxuXG4gICAgLy8g54mp5ZOB44CB5pyN5Yqh562JXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjdHguZmlsbFRleHQoJzUwMDEnLCBjYWwoMjY1KSwgY2FsKDI0KSArICgxICsgMiAqIGkpICogY2FsKDM2KSlcbiAgICAgIGN0eC5maWxsVGV4dCgn5Li76JCl5Lia5Yqh5pS25YWlJywgY2FsKDM5NSksIGNhbCgyNCkgKyAoMSArIDIgKiBpKSAqIGNhbCgzNikpXG4gICAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuQ29tbW9kaXR5QW1vdW50W2ldLndvcmQsIGNhbCg2NDYpLCBjYWwoMjQpICsgKDEgKyAyICogaSkgKiBjYWwoMzYpKVxuXG4gICAgICBjdHguZmlsbFRleHQoJzIyMjEuMDEuMDEnLCBjYWwoMjY1KSwgY2FsKDI0KSArICgyICsgMiAqIGkpICogY2FsKDM2KSlcbiAgICAgIGxpbmVXcmFwKGN0eCwgJ+W6lOS6pOeojui0uSAtIOWinuWAvOeojiAtIOmUgOmhueeojicsIGNhbCgxNCksIGNhbCgxNCksIGNhbCgxMzApLCBjYWwoMzk1KSwgY2FsKDIpICsgKDIgKyAyICogaSkgKiBjYWwoMzYpIClcbiAgICAgIC8vIGN0eC5maWxsVGV4dChsaW5lV3JhcCgpLCBjYWwoMzk1KSwgY2FsKDI0KSArIDIgKiBjYWwoMzYpKVxuICAgICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LkNvbW1vZGl0eVRheFtpXS53b3JkLCBjYWwoNjQ2KSwgY2FsKDI0KSArICgyICsgMiAqIGkpICogY2FsKDM2KSlcbiAgICB9XG5cbiAgICAvLyDlkIjorqFcbiAgICBjdHgudHJhbnNsYXRlKDAsIGNhbCgzNikgKiAodGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKiAyICsgMSkpXG4gICAgY3R4LmZpbGxUZXh0KCflkIjorqEnLCBjYWwoMjMwKSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuQW1vdW50SW5GaWd1ZXJzLCBjYWwoNTIyKSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuQW1vdW50SW5GaWd1ZXJzLCBjYWwoNjQ2KSwgY2FsKDI0KSlcblxuICAgIC8vIOS/oeaBr+agj1xuICAgIGN0eC5iZWdpblBhdGgoKVxuICAgIC8vIOi+ueahhlxuICAgIGN0eC50cmFuc2xhdGUoMCwgY2FsKDM2KSlcbiAgICBsZXQgbGVmdFRpdGxlID0gWyfkvJrorqHmgLvnrqEnLCAn5a6i5oi3JywgJ+S+m+W6lOWVhicsICfpobnnm64nXVxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykge1xuICAgICAgY3R4LmZpbGxUZXh0KGxlZnRUaXRsZVtpIC0gMV0sIGNhbCg1MCksIGNhbCgyNCkgKyAoaSAtIDEpICogY2FsKDM2KSlcbiAgICAgIGN0eC5tb3ZlVG8oMCwgY2FsKDM2KSAqIGkpXG4gICAgICBjdHgubGluZVRvKGNhbCg3MTApLCBjYWwoMzYpICogaSlcbiAgICB9XG5cbiAgICBjdHgubW92ZVRvKGNhbCgzNTUpLCBjYWwoMzYpKVxuICAgIGN0eC5saW5lVG8oY2FsKDM1NSksIGNhbCgzNikgKiA0KVxuICAgIGN0eC5maWxsVGV4dCgn5ZGY5belJywgY2FsKDQwNSksIGNhbCgzNikgKyBjYWwoMjQpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoNDU1KSwgY2FsKDM2KSlcbiAgICBjdHgubGluZVRvKGNhbCg0NTUpLCBjYWwoMzYpICogNClcbiAgICBjdHguZmlsbFRleHQoJ+WFtuS7luesrOS4ieaWuScsIGNhbCg0MDUpLCBjYWwoMzYpICogMiArIGNhbCgyNCkpXG5cbiAgICBjdHgubW92ZVRvKGNhbCg3MTApLCAwKVxuICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikgKiA0KVxuICAgIGN0eC5maWxsVGV4dCgn5Y+R56Wo5Y+356CBJywgY2FsKDQwNSksIGNhbCgzNikgKiAzICsgY2FsKDI0KSlcblxuICAgIGN0eC5tb3ZlVG8oMCwgMClcbiAgICBjdHgubGluZVRvKDAsIGNhbCgzNikgKiA0KVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMTAwKSwgMClcbiAgICBjdHgubGluZVRvKGNhbCgxMDApLCBjYWwoMzYpICogNClcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDE5MCksIDApXG4gICAgY3R4LmxpbmVUbyhjYWwoMTkwKSwgY2FsKDM2KSlcbiAgICBsZXQgdGl0bGUgPSBbJ+iusOi0picsICflh7rnurMnLCAn5a6h5qC4JywgJ+WItuWNlSddXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgIGN0eC5maWxsVGV4dCh0aXRsZVtpXSwgY2FsKDE5MCArIDEzMCAqIGkgKyAyNSksIGNhbCgyNCkgKVxuICAgICAgY3R4Lm1vdmVUbyhjYWwoMTkwICsgMTMwICogaSArIDUwKSwgMClcbiAgICAgIGN0eC5saW5lVG8oY2FsKDE5MCArIDEzMCAqIGkgKyA1MCksIGNhbCgzNikpXG4gICAgICBjdHgubW92ZVRvKGNhbCgxOTAgKyAxMzAgKiBpICsgMTMwKSwgMClcbiAgICAgIGN0eC5saW5lVG8oY2FsKDE5MCArIDEzMCAqIGkgKyAxMzApLCBjYWwoMzYpKVxuICAgIH1cbiAgICBjdHguc3Ryb2tlKClcblxuICAgIGN0eC5maWxsVGV4dCh0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VySW5mby5uaWNrTmFtZSwgY2FsKDE5MCArIDEzMCAqIDMgKyA5MCksIGNhbCgyNCkpXG4gICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0Lkludm9pY2VOdW0sIGNhbCg1ODIpLCBjYWwoMjQpICsgY2FsKDM2KSAqIDMpXG4gICAgdGhpcy5yZXN1bHQuYmVsb25nUHJvamVjdCAmJiBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuYmVsb25nUHJvamVjdCwgY2FsKDIyOCksIGNhbCgyNCkgKyBjYWwoMzYpICogMylcbiAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuUHVyY2hhc2VyTmFtZSwgY2FsKDIyOCksIGNhbCgyNCkgKyBjYWwoMzYpKVxuXG4gICAgY3R4LmRyYXcodHJ1ZSwgKCkgPT4ge1xuICAgICAgd3guY2FudmFzVG9UZW1wRmlsZVBhdGgoe1xuICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgeTogMCxcbiAgICAgICAgICB3aWR0aDogY2FsKDc1MCksXG4gICAgICAgICAgaGVpZ2h0OiBjYWwoMTIwKSArICg4ICsgMiAqIHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoKSAqIGNhbCgzNiksXG4gICAgICAgICAgY2FudmFzSWQ6ICdjYW52YXNJZCcsLy9jYW52YXNJZOWSjOagh+etvumHjOmdoueahGlk5a+55bqUXG4gICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICB3eC5oaWRlVG9hc3QoKVxuICAgICAgICAgICAgICAvL+WwhuiOt+WPluWIsOeahOWbvueJh+S4tOaXtui3r+W+hHNldOWIsGNhbnZhc1NhdmVpbWfkuK1cbiAgICAgICAgICAgICAgdGhhdC50ZW1wRmlsZVBhdGggPSByZXMudGVtcEZpbGVQYXRoXG4gICAgICAgICAgICAgIHRoYXQuJGFwcGx5KClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6IChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG4iXX0=