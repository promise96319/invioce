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
        ctx.fillText(parseFloat(this.result.CommodityAmount[_i2].word + '.').toFixed(2), cal(646), cal(24) + (1 + 2 * _i2) * cal(36));

        ctx.fillText('2221.01.01', cal(265), cal(24) + (2 + 2 * _i2) * cal(36));
        lineWrap(ctx, '应交税费 - 增值税 - 销项税', cal(14), cal(14), cal(130), cal(395), cal(2) + (2 + 2 * _i2) * cal(36));
        // ctx.fillText(lineWrap(), cal(395), cal(24) + 2 * cal(36))
        ctx.fillText(parseFloat(this.result.CommodityTax[_i2].word + '.').toFixed(2), cal(646), cal(24) + (2 + 2 * _i2) * cal(36));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGUuanMiXSwibmFtZXMiOlsiU2FsZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsIndpZHRoIiwiaGVpZ2h0IiwicmVzdWx0IiwidGVtcEZpbGVQYXRoIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiaGFubGRlU2F2ZVBpYyIsIl9zZWxmIiwid3giLCJnZXRJbWFnZUluZm8iLCJzcmMiLCJzdWNjZXNzIiwicmVzMSIsInNhdmVJbWFnZVRvUGhvdG9zQWxidW0iLCJmaWxlUGF0aCIsInBhdGgiLCJyZXMyIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJmYWlsIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNhbmNlbCIsIm9wdGlvbnMiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsIkpTT04iLCJwYXJzZSIsInRoYXQiLCJnZXRTeXN0ZW1JbmZvIiwicmVzIiwid2luZG93V2lkdGgiLCJjYWwiLCJweCIsImxpbmVXcmFwIiwiY3R4Iiwic3RyIiwiZm9udHNpemUiLCJsaW5laGVpZ2h0IiwieCIsInkiLCJzZXRGb250U2l6ZSIsInRleHRBcnIiLCJpbmRleCIsImkiLCJsZW5ndGgiLCJtZWFzdXJlVGV4dCIsInN1YnN0cmluZyIsInB1c2giLCJmaWxsVGV4dCIsImNyZWF0ZUNhbnZhc0NvbnRleHQiLCJzZXRGaWxsU3R5bGUiLCJmaWxsUmVjdCIsIkNvbW1vZGl0eU5hbWUiLCJkYXRlIiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwidHJhbnNsYXRlIiwic2V0VGV4dEFsaWduIiwibm93IiwidG9TdHJpbmciLCJzdWJzdHIiLCJNYXRoIiwicmFuZG9tIiwic3BsaXQiLCJzZXRTdHJva2VTdHlsZSIsInN0cm9rZVJlY3QiLCJyb3ciLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJkaXNjcmlwdGlvbiIsIkFtb3VudEluRmlndWVycyIsInBhcnNlRmxvYXQiLCJDb21tb2RpdHlBbW91bnQiLCJ3b3JkIiwidG9GaXhlZCIsIkNvbW1vZGl0eVRheCIsImJlZ2luUGF0aCIsImxlZnRUaXRsZSIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJuaWNrTmFtZSIsIkludm9pY2VOdW0iLCJiZWxvbmdQcm9qZWN0IiwiUHVyY2hhc2VyTmFtZSIsImRyYXciLCJjYW52YXNUb1RlbXBGaWxlUGF0aCIsImNhbnZhc0lkIiwiaGlkZVRvYXN0IiwiJGFwcGx5Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFJYkMsSSxHQUFPO0FBQ0xDLGFBQU8sQ0FERjtBQUVMQyxjQUFRLENBRkg7QUFHTEMsY0FBUSxFQUhIO0FBSUxDLG9CQUFjO0FBSlQsSyxRQU9QQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUkMsbUJBRFEsMkJBQ1M7QUFDZixZQUFJQyxRQUFRLElBQVo7QUFDSUMsV0FBR0MsWUFBSCxDQUFnQjtBQUNkQyxlQUFLSCxNQUFNSixZQURHO0FBRWRRLGlCQUZjLG1CQUVMQyxJQUZLLEVBRUM7QUFDYkosZUFBR0ssc0JBQUgsQ0FBMEI7QUFDdEJDLHdCQUFVRixLQUFLRyxJQURPO0FBRXRCSix1QkFBUyxpQkFBVUssSUFBVixFQUFnQjtBQUN2QlIsbUJBQUdTLFlBQUgsQ0FBZ0I7QUFDWkMseUJBQU87QUFESyxpQkFBaEI7QUFHRCxlQU5xQjtBQU90QkMsb0JBQU0sY0FBVUMsR0FBVixFQUFlO0FBQ25CQyx3QkFBUUMsR0FBUixDQUFZRixHQUFaO0FBQ0Q7QUFUcUIsYUFBMUI7QUFXRDtBQWRhLFNBQWhCO0FBZ0JMLE9BbkJPO0FBb0JSRyxrQkFwQlEsMEJBb0JRO0FBQ2RmLFdBQUdTLFlBQUgsQ0FBZ0I7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QUFDZHpCLGVBQUcwRixTQUFIO0FBQ0E7QUFDQW5FLGlCQUFLNUIsWUFBTCxHQUFvQjhCLElBQUk5QixZQUF4QjtBQUNBNEIsaUJBQUtvRSxNQUFMO0FBQ0gsV0FYbUI7QUFZcEJoRixnQkFBTSxjQUFDQyxHQUFELEVBQVM7QUFDYkMsb0JBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNEO0FBZG1CLFNBQXhCO0FBZ0JELE9BakJEO0FBa0JEOzs7O0VBN1grQmdGLGVBQUtDLEk7O2tCQUFsQjFHLEkiLCJmaWxlIjoic2FsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB1dGlsIGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhbGUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WHreivgSdcbiAgfVxuICBjb21wb25lbnRzID0ge1xuXG4gIH1cblxuICBkYXRhID0ge1xuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICByZXN1bHQ6IHt9LFxuICAgIHRlbXBGaWxlUGF0aDogJydcbiAgfVxuXG4gIGNvbXB1dGVkID0ge31cblxuICBtZXRob2RzID0ge1xuICAgIGhhbmxkZVNhdmVQaWMgKCkge1xuICAgICAgbGV0IF9zZWxmID0gdGhpc1xuICAgICAgICAgIHd4LmdldEltYWdlSW5mbyh7XG4gICAgICAgICAgICBzcmM6IF9zZWxmLnRlbXBGaWxlUGF0aCxcbiAgICAgICAgICAgIHN1Y2Nlc3MgKHJlczEpIHtcbiAgICAgICAgICAgICAgd3guc2F2ZUltYWdlVG9QaG90b3NBbGJ1bSh7XG4gICAgICAgICAgICAgICAgICBmaWxlUGF0aDogcmVzMS5wYXRoLFxuICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlczIpIHtcbiAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgaGFuZGxlQ2FuY2VsICgpIHtcbiAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgZGVsdGE6IDFcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgdGl0bGU6ICfmraPlnKjnlJ/miJDlh63or4EnLFxuICAgICAgIGljb246ICdsb2FkaW5nJyxcbiAgICAgICBkdXJhdGlvbjogMTAwMDBcbiAgICAgfSlcbiAgICB0aGlzLnJlc3VsdCA9IEpTT04ucGFyc2Uob3B0aW9ucy5yZXN1bHQpXG4gICAgLy8gdGhpcy5yZXN1bHQgPSB7XG4gICAgLy8gICBcIkludm9pY2VOdW1cIjogXCIzMjMzMDczOVwiLFxuICAgIC8vICAgXCJTZWxsZXJOYW1lXCI6IFwi5YyX5Lqs5Yag5pyI6aSQ6aWu566h55CG5pyJ6ZmQ5YWs5Y+4XCIsXG4gICAgLy8gICBcIkNvbW1vZGl0eVRheFJhdGVcIjogW3tcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiNiVcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH1dLFxuICAgIC8vICAgXCJTZWxsZXJCYW5rXCI6IFwi5YyX5Lqs5biC5rW35reA5Yy65Lit5YWz5p2R5Lic6LevMeWPt+mZojLlj7fmpbwxMDHlrqQ2Mjc5ODk4OFwiLFxuICAgIC8vICAgXCJDaGVja2VyXCI6IFwiXCIsXG4gICAgLy8gICBcIlRvdGFsQW1vdW50XCI6IFwiMTg2NDcuMTdcIixcbiAgICAvLyAgIFwiQ29tbW9kaXR5QW1vdW50XCI6IFtcbiAgICAvLyAgICAge1xuICAgIC8vICAgICBcIndvcmRcIjogXCIxODY0Ny4xN1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICBcIndvcmRcIjogXCIxODY0Ny4xN1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICBcIndvcmRcIjogXCIxODY0Ny4xN1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICBcIndvcmRcIjogXCIxODY0Ny4xN1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICBcIndvcmRcIjogXCIxODY0Ny4xN1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfSxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiMTg2NDcuMTdcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIyXCJcbiAgICAvLyAgIH1dLFxuICAgIC8vICAgXCJJbnZvaWNlRGF0ZVwiOiBcIjIwMTjlubQwOOaciDE55pelXCIsXG4gICAgLy8gICBcIkNvbW1vZGl0eVRheFwiOiBbXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiMTExOC44M1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICBcIndvcmRcIjogXCIxMTE4LjgzXCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMVwiXG4gICAgLy8gICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIjExMTguODNcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiMTExOC44M1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICBcIndvcmRcIjogXCIxMTE4LjgzXCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMVwiXG4gICAgLy8gICB9LFxuICAgIC8vICAgIHtcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiMTczOC44M1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjJcIlxuICAgIC8vICAgfV0sXG4gICAgLy8gICBcIlB1cmNoYXNlck5hbWVcIjogXCLkuIrmtbfmnInnlaXmlZnogrLnp5HmioDmnInpmZDlhazlj7hcIixcbiAgICAvLyAgIFwiQ29tbW9kaXR5TnVtXCI6IFt7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIlwiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfV0sXG4gICAgLy8gICBcIlB1cmNoYXNlckJhbmtcIjogXCJcIixcbiAgICAvLyAgIFwiUmVtYXJrc1wiOiBcIuagoemqjOeggTAwMzQ1ODAyMjU2XCIsXG4gICAgLy8gICBcIlBhc3N3b3JkXCI6IFwiNTIvLzU1MDErMTQ5MDYtKzAzPC0zMDg0LTg5PDk4MDcxOT4rMjUtNCs2Mzg2Nzw4MzwrMDMwMS0qMDErOTwqMC85MDwvNDYtPDAyOTg4ND41NC0yOD4+MDM5LysvMzYqKzkzLzc4NT4wND5cIixcbiAgICAvLyAgIFwiU2VsbGVyQWRkcmVzc1wiOiBcIuWPtzEwMeWupDYyNzk4OTg4OTExXCIsXG4gICAgLy8gICBcIlB1cmNoYXNlckFkZHJlc3NcIjogXCJcIixcbiAgICAvLyAgIFwiSW52b2ljZUNvZGVcIjogXCIwMTEwMDE4MDAxMDRcIixcbiAgICAvLyAgIFwiQ29tbW9kaXR5VW5pdFwiOiBbe1xuICAgIC8vICAgICBcIndvcmRcIjogXCJcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH1dLFxuICAgIC8vICAgXCJQYXllZVwiOiBcIueUhOWpt1wiLFxuICAgIC8vICAgXCJQdXJjaGFzZXJSZWdpc3Rlck51bVwiOiBcIjkxMzEwMTEwTUFHMFdOXCIsXG4gICAgLy8gICBcIkNvbW1vZGl0eVByaWNlXCI6IFt7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIlwiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfV0sXG4gICAgLy8gICBcIk5vdGVEcmF3ZXJcIjogXCLpob7mlrDmnbBcIixcbiAgICAvLyAgIFwiQW1vdW50SW5Xb3Jkc1wiOiBcIuS4h+S7n+afkuS9sOmZhuaLvumZhuWchuaVtFwiLFxuICAgIC8vICAgXCJBbW91bnRJbkZpZ3VlcnNcIjogXCIxOTc2Ni4wMFwiLFxuICAgIC8vICAgXCJUb3RhbFRheFwiOiBcIjExMTguMzBcIixcbiAgICAvLyAgIFwiSW52b2ljZVR5cGVcIjogXCLkuJPnlKjlj5HnpahcIixcbiAgICAvLyAgIFwiU2VsbGVyUmVnaXN0ZXJOdW1cIjogXCI5MTExMDEwODc5NzU4MzQzMzhcIixcbiAgICAvLyAgIFwiQ29tbW9kaXR5TmFtZVwiOiBbXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiKumkkOmlruacjeWKoSrppJDotLlcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiKumkkOmlruacjeWKoSrppJDotLlcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiKumkkOmlruacjeWKoSrppJDotLlcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiKumkkOmlruacjeWKoSrppJDotLlcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiKumkkOmlruacjeWKoSrppJDotLlcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH0sXG4gICAgLy8gICB7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIiphaeaVmeiCslwiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjJcIlxuICAgIC8vICAgfV0sXG4gICAgLy8gICBcIkNvbW1vZGl0eVR5cGVcIjogW3tcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiXCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMVwiXG4gICAgLy8gICB9XSxcbiAgICAvLyAgIFwiQ2hlY2tDb2RlXCI6IFwiMDAzNDU4MDIyNTYxOTU5MDk0OVwiLFxuICAgIC8vICAgXCJpZGVudGl0eVwiOiBcIui0reS5sOaWuVwiLFxuICAgIC8vICAgXCJwYXlcIjogXCLkuJrliqHmi5vlvoVcIixcbiAgICAvLyAgIFwic291cmNlXCI6IFwi5YWs5Y+45ZGY5belXCIsXG4gICAgLy8gICBcInBlcnNvbk5hbWVcIjogXCLlvKDkuInllYpcIixcbiAgICAvLyAgIFwiZGlzY3JpcHRpb25cIjogXCLmiJHmnaXoh6rkuK3lm73vvIzmiJHlho1kamtka2rnm7Tmkq3vvIzmiJHlvpfov4fkuJbnlYzlhqDlhpvvvIzmiJHkuZ/lip7ov4fovaws5L2g6KaB6aKd5L2g6YO96IO96K6w5b6X55yL5pqX5Y+36YO95LyaXCIsXG4gICAgLy8gICBcImJlbG9uZ1Byb2plY3RcIjogXCLlpKnlnLDlpKflkIxcIlxuICAgIC8vIH1cblxuICAgIGxldCB0aGF0ID0gdGhpc1xuXG4gICAgLy8g6I635Y+W5bGP5bmV5a69XG4gICAgd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICB0aGF0LndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICAgIC8vIHRoYXQuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgfVxuICAgIH0pXG5cblxuLy8g5Ye95pWw5a6a5LmJ5Yy65Z+fID09PT09PT09PT09PT09PT09PT1cbiAgICAvLyDorr7nva7kuIDkuKrln7rlh4bmr5TkvotcbiAgICBsZXQgY2FsID0gKHB4KSA9PiB7XG4gICAgICByZXR1cm4gIHB4IC8gMzc1ICogdGhhdC53aWR0aFxuICAgIH1cblxuICAgIC8vIGNhbnZhc+aNouihjOaYvuekulxuICAgIGxldCBsaW5lV3JhcCA9IChjdHgsIHN0ciwgZm9udHNpemUsIGxpbmVoZWlnaHQsIHdpZHRoLCB4LCB5KSA9PiB7XG4gICAgICBjdHguc2V0Rm9udFNpemUoZm9udHNpemUpXG4gICAgICBsZXQgdGV4dEFyciA9IFtdXG4gICAgICBsZXQgaW5kZXggPSAwXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoY3R4Lm1lYXN1cmVUZXh0KHN0ci5zdWJzdHJpbmcoaW5kZXgsIGkpKS53aWR0aCA+PSB3aWR0aCkge1xuICAgICAgICAgIHRleHRBcnIucHVzaChzdHIuc3Vic3RyaW5nKGluZGV4LCBpKSlcbiAgICAgICAgICBpbmRleCA9IGlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0ZXh0QXJyLnB1c2goc3RyLnN1YnN0cmluZyhpbmRleCkpXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dEFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBjdHguZmlsbFRleHQodGV4dEFycltpXSwgeCwgeSArIGxpbmVoZWlnaHQgKiAoaSArIDEpKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGN0eCA9IHd4LmNyZWF0ZUNhbnZhc0NvbnRleHQoJ2NhbnZhc0lkJylcblxuICAgIGN0eC5zZXRGaWxsU3R5bGUoJ3doaXRlJylcbiAgICBjdHguZmlsbFJlY3QoY2FsKDApLCBjYWwoMCksIGNhbCg3NTApLCBjYWwoMTIwKSArICg4ICsgMiAqIHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoKSAqIGNhbCgzNikpXG4gICAgY3R4LnNldEZpbGxTdHlsZSgnYmxhY2snKVxuXG4gICAgLy8g5qCH6aKYXG4gICAgY3R4LnNldEZvbnRTaXplKGNhbCgyMykpXG4gICAgY3R4LmZpbGxUZXh0KCforrDotKblh63or4EnLCBjYWwoMzc1KSwgY2FsKDQwKSlcblxuICAgIC8vIOaXtumXtOWPiue8luWPt1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKVxuICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXG4gICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMVxuICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKVxuICAgIGN0eC50cmFuc2xhdGUoY2FsKDczMCksIGNhbCg3MCkpXG4gICAgY3R4LnNldEZvbnRTaXplKGNhbCgxMykpXG4gICAgY3R4LnNldFRleHRBbGlnbigncmlnaHQnKVxuICAgIGN0eC5maWxsVGV4dCh5ZWFyICsgJyDlubQgJyArIG1vbnRoICsgJyDmnIggJyArIGRheSArICcg5Y+3ICAgICAg6K6w5a2X56ysICcgKyBEYXRlLm5vdygpLnRvU3RyaW5nKCkuc3Vic3RyKDYpICsgKE1hdGgucmFuZG9tKCkqIDEwMCkudG9TdHJpbmcoKS5zcGxpdCgnLicpWzBdICsgJyDlj7cnLCBjYWwoMCksIGNhbCgyMikpXG4gICAgY3R4LnNldFRleHRBbGlnbignY2VudGVyJylcbiAgICBjdHguc2V0VGV4dEFsaWduKCdjZW50ZXInKVxuICAgIGN0eC5zZXRUZXh0QWxpZ24oJ2NlbnRlcicpXG5cbiAgICAvLyDooajmoLxcbiAgICAvLyDlpJbmoYZcbiAgICBjdHgudHJhbnNsYXRlKGNhbCgtNzEwKSwgY2FsKDUwKSlcbiAgICBjdHguc2V0U3Ryb2tlU3R5bGUoJyMwMDAnKVxuICAgIGN0eC5zdHJva2VSZWN0KDAsIDAsIGNhbCg3MTApLCBjYWwoMzYpICogKHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoICogMiAgKyAzKSlcblxuICAgIC8vIOWGheahhlxuICAgIGxldCByb3cgPSB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCAqIDIgKyAzXG4gICAgZm9yIChsZXQgaSA9IDI7IGkgPCByb3cgLSAxOyBpKyspIHtcbiAgICAgIGN0eC5zZXRTdHJva2VTdHlsZSgnIzk5OScpXG4gICAgICBjdHgubW92ZVRvKGNhbCgyMDApLCBjYWwoMzYpICogaSlcbiAgICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikgKiBpKVxuICAgICAgY3R4LnN0cm9rZSgpXG4gICAgfVxuXG4gICAgY3R4Lm1vdmVUbygwLCBjYWwoMzYpKVxuICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikpXG5cbiAgICBjdHgubW92ZVRvKDAsIGNhbCgzNikgKiAocm93IC0xKSlcbiAgICBjdHgubGluZVRvKGNhbCg3MTApLCBjYWwoMzYpICogKHJvdyAtMSkpXG5cbiAgICBjdHgubW92ZVRvKDAsIGNhbCgzNikgKiByb3cpXG4gICAgY3R4LmxpbmVUbyhjYWwoNzEwKSwgY2FsKDM2KSAqIHJvdylcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDIwMCksIDApXG4gICAgY3R4LmxpbmVUbyhjYWwoMjAwKSwgY2FsKDM2KSAqIChyb3cgLTEpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMzMwKSwgY2FsKDE4KSlcbiAgICBjdHgubGluZVRvKGNhbCgzMzApLCBjYWwoMzYpICogKHJvdyAtIDEpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMjAwKSwgY2FsKDE4KSlcbiAgICBjdHgubGluZVRvKGNhbCg0NjApLCBjYWwoMTgpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoNDYwKSwgMClcbiAgICBjdHgubGluZVRvKGNhbCg0NjApLCBjYWwoMzYpICogcm93KVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoNTg1KSwgMClcbiAgICBjdHgubGluZVRvKGNhbCg1ODUpLCBjYWwoMzYpICogcm93KVxuXG4gICAgY3R4LnN0cm9rZSgpXG5cbiAgICAvLyDooajlpLRcbiAgICBjdHguc2V0Rm9udFNpemUoY2FsKDE1KSlcbiAgICBjdHguc2V0VGV4dEFsaWduKCdjZW50ZXInKVxuICAgIGN0eC5maWxsVGV4dCgn5pGY6KaBJywgY2FsKDEwMCksIGNhbCgyNCkpXG4gICAgY3R4LmZpbGxUZXh0KCflgJ/mlrnph5Hpop0nLCBjYWwoNTIyKSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQoJ+i0t+aWuemHkeminScsIGNhbCg2NDYpLCBjYWwoMjQpKVxuXG4gICAgY3R4LnNldEZvbnRTaXplKGNhbCgxNCkpXG4gICAgY3R4LmZpbGxUZXh0KCfkvJrorqHnp5Hnm64nLCBjYWwoMzMwKSwgY2FsKDE1KSlcbiAgICBjdHguZmlsbFRleHQoJ+enkeebruS7o+eggScsIGNhbCgyNjUpLCBjYWwoMzMpKVxuICAgIGN0eC5maWxsVGV4dCgn56eR55uu5ZCN56ewJywgY2FsKDM5NSksIGNhbCgzMykpXG5cbiAgICAvLyDlhoXlrrnpg6jliIZcbiAgICAvLyDmkZjopoHlhoXlrrlcbiAgICBjdHgudHJhbnNsYXRlKDAsIGNhbCgzNikpXG4gICAgbGluZVdyYXAoY3R4LCB0aGlzLnJlc3VsdC5kaXNjcmlwdGlvbiwgY2FsKDE0KSwgY2FsKDE2KSwgY2FsKDE2MCksIGNhbCgxMDApLCBjYWwoMTApKVxuXG4gICAgLy8g5Lu356iO5ZCI6K6hXG4gICAgY3R4LmZpbGxUZXh0KCcxMTIyJywgY2FsKDI2NSksIGNhbCgyNCkpXG4gICAgY3R4LmZpbGxUZXh0KCflupTmlLbotKbmrL4nLCBjYWwoMzk1KSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuQW1vdW50SW5GaWd1ZXJzLCBjYWwoNTIyKSwgY2FsKDI0KSlcblxuICAgIC8vIOeJqeWTgeOAgeacjeWKoeetiVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGg7IGkrKykge1xuICAgICAgY3R4LmZpbGxUZXh0KCc1MDAxJywgY2FsKDI2NSksIGNhbCgyNCkgKyAoMSArIDIgKiBpKSAqIGNhbCgzNikpXG4gICAgICBjdHguZmlsbFRleHQoJ+S4u+iQpeS4muWKoeaUtuWFpScsIGNhbCgzOTUpLCBjYWwoMjQpICsgKDEgKyAyICogaSkgKiBjYWwoMzYpKVxuICAgICAgY3R4LmZpbGxUZXh0KHBhcnNlRmxvYXQodGhpcy5yZXN1bHQuQ29tbW9kaXR5QW1vdW50W2ldLndvcmQgKyAnLicpLnRvRml4ZWQoMiksIGNhbCg2NDYpLCBjYWwoMjQpICsgKDEgKyAyICogaSkgKiBjYWwoMzYpKVxuXG4gICAgICBjdHguZmlsbFRleHQoJzIyMjEuMDEuMDEnLCBjYWwoMjY1KSwgY2FsKDI0KSArICgyICsgMiAqIGkpICogY2FsKDM2KSlcbiAgICAgIGxpbmVXcmFwKGN0eCwgJ+W6lOS6pOeojui0uSAtIOWinuWAvOeojiAtIOmUgOmhueeojicsIGNhbCgxNCksIGNhbCgxNCksIGNhbCgxMzApLCBjYWwoMzk1KSwgY2FsKDIpICsgKDIgKyAyICogaSkgKiBjYWwoMzYpIClcbiAgICAgIC8vIGN0eC5maWxsVGV4dChsaW5lV3JhcCgpLCBjYWwoMzk1KSwgY2FsKDI0KSArIDIgKiBjYWwoMzYpKVxuICAgICAgY3R4LmZpbGxUZXh0KHBhcnNlRmxvYXQodGhpcy5yZXN1bHQuQ29tbW9kaXR5VGF4W2ldLndvcmQgKyAnLicpLnRvRml4ZWQoMiksIGNhbCg2NDYpLCBjYWwoMjQpICsgKDIgKyAyICogaSkgKiBjYWwoMzYpKVxuICAgIH1cblxuICAgIC8vIOWQiOiuoVxuICAgIGN0eC50cmFuc2xhdGUoMCwgY2FsKDM2KSAqICh0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCAqIDIgKyAxKSlcbiAgICBjdHguZmlsbFRleHQoJ+WQiOiuoScsIGNhbCgyMzApLCBjYWwoMjQpKVxuICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5BbW91bnRJbkZpZ3VlcnMsIGNhbCg1MjIpLCBjYWwoMjQpKVxuICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5BbW91bnRJbkZpZ3VlcnMsIGNhbCg2NDYpLCBjYWwoMjQpKVxuXG4gICAgLy8g5L+h5oGv5qCPXG4gICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgLy8g6L655qGGXG4gICAgY3R4LnRyYW5zbGF0ZSgwLCBjYWwoMzYpKVxuICAgIGxldCBsZWZ0VGl0bGUgPSBbJ+S8muiuoeaAu+euoScsICflrqLmiLcnLCAn5L6b5bqU5ZWGJywgJ+mhueebriddXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSB7XG4gICAgICBjdHguZmlsbFRleHQobGVmdFRpdGxlW2kgLSAxXSwgY2FsKDUwKSwgY2FsKDI0KSArIChpIC0gMSkgKiBjYWwoMzYpKVxuICAgICAgY3R4Lm1vdmVUbygwLCBjYWwoMzYpICogaSlcbiAgICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikgKiBpKVxuICAgIH1cblxuICAgIGN0eC5tb3ZlVG8oY2FsKDM1NSksIGNhbCgzNikpXG4gICAgY3R4LmxpbmVUbyhjYWwoMzU1KSwgY2FsKDM2KSAqIDQpXG4gICAgY3R4LmZpbGxUZXh0KCflkZjlt6UnLCBjYWwoNDA1KSwgY2FsKDM2KSArIGNhbCgyNCkpXG5cbiAgICBjdHgubW92ZVRvKGNhbCg0NTUpLCBjYWwoMzYpKVxuICAgIGN0eC5saW5lVG8oY2FsKDQ1NSksIGNhbCgzNikgKiA0KVxuICAgIGN0eC5maWxsVGV4dCgn5YW25LuW56ys5LiJ5pa5JywgY2FsKDQwNSksIGNhbCgzNikgKiAyICsgY2FsKDI0KSlcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDcxMCksIDApXG4gICAgY3R4LmxpbmVUbyhjYWwoNzEwKSwgY2FsKDM2KSAqIDQpXG4gICAgY3R4LmZpbGxUZXh0KCflj5Hnpajlj7fnoIEnLCBjYWwoNDA1KSwgY2FsKDM2KSAqIDMgKyBjYWwoMjQpKVxuXG4gICAgY3R4Lm1vdmVUbygwLCAwKVxuICAgIGN0eC5saW5lVG8oMCwgY2FsKDM2KSAqIDQpXG5cbiAgICBjdHgubW92ZVRvKGNhbCgxMDApLCAwKVxuICAgIGN0eC5saW5lVG8oY2FsKDEwMCksIGNhbCgzNikgKiA0KVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMTkwKSwgMClcbiAgICBjdHgubGluZVRvKGNhbCgxOTApLCBjYWwoMzYpKVxuICAgIGxldCB0aXRsZSA9IFsn6K6w6LSmJywgJ+WHuue6sycsICflrqHmoLgnLCAn5Yi25Y2VJ11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgY3R4LmZpbGxUZXh0KHRpdGxlW2ldLCBjYWwoMTkwICsgMTMwICogaSArIDI1KSwgY2FsKDI0KSApXG4gICAgICBjdHgubW92ZVRvKGNhbCgxOTAgKyAxMzAgKiBpICsgNTApLCAwKVxuICAgICAgY3R4LmxpbmVUbyhjYWwoMTkwICsgMTMwICogaSArIDUwKSwgY2FsKDM2KSlcbiAgICAgIGN0eC5tb3ZlVG8oY2FsKDE5MCArIDEzMCAqIGkgKyAxMzApLCAwKVxuICAgICAgY3R4LmxpbmVUbyhjYWwoMTkwICsgMTMwICogaSArIDEzMCksIGNhbCgzNikpXG4gICAgfVxuICAgIGN0eC5zdHJva2UoKVxuXG4gICAgY3R4LmZpbGxUZXh0KHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJJbmZvLm5pY2tOYW1lLCBjYWwoMTkwICsgMTMwICogMyArIDkwKSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuSW52b2ljZU51bSwgY2FsKDU4MiksIGNhbCgyNCkgKyBjYWwoMzYpICogMylcbiAgICB0aGlzLnJlc3VsdC5iZWxvbmdQcm9qZWN0ICYmIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5iZWxvbmdQcm9qZWN0LCBjYWwoMjI4KSwgY2FsKDI0KSArIGNhbCgzNikgKiAzKVxuICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5QdXJjaGFzZXJOYW1lLCBjYWwoMjI4KSwgY2FsKDI0KSArIGNhbCgzNikpXG5cbiAgICBjdHguZHJhdyh0cnVlLCAoKSA9PiB7XG4gICAgICB3eC5jYW52YXNUb1RlbXBGaWxlUGF0aCh7XG4gICAgICAgICAgeDogMCxcbiAgICAgICAgICB5OiAwLFxuICAgICAgICAgIHdpZHRoOiBjYWwoNzUwKSxcbiAgICAgICAgICBoZWlnaHQ6IGNhbCgxMjApICsgKDggKyAyICogdGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGgpICogY2FsKDM2KSxcbiAgICAgICAgICBjYW52YXNJZDogJ2NhbnZhc0lkJywvL2NhbnZhc0lk5ZKM5qCH562+6YeM6Z2i55qEaWTlr7nlupRcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgIHd4LmhpZGVUb2FzdCgpXG4gICAgICAgICAgICAgIC8v5bCG6I635Y+W5Yiw55qE5Zu+54mH5Li05pe26Lev5b6Ec2V05YiwY2FudmFzU2F2ZWltZ+S4rVxuICAgICAgICAgICAgICB0aGF0LnRlbXBGaWxlUGF0aCA9IHJlcy50ZW1wRmlsZVBhdGhcbiAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDogKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==