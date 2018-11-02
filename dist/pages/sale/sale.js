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
                console.log(res2);
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
      //     "word": "18647.17",
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
      //     "word": "*餐饮服务*餐费",
      //     "row": "1"
      //   }, {
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
      ctx.fillText(year + ' 年 ' + month + ' 月 ' + day + ' 号      记字第 ' + Date.now().toString().substr(6) + Math.random().toFixed(4) * 10000 + ' 号', cal(0), cal(22));

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

      ctx.setTextAlign('center');
      ctx.setFontSize(cal(14));
      ctx.fillText('会计科目', cal(330), cal(15));
      ctx.fillText('科目代码', cal(265), cal(33));
      ctx.fillText('科目名称', cal(395), cal(33));

      // 内容部分
      // 摘要内容
      ctx.translate(0, cal(36));
      ctx.setTextAlign('left');
      lineWrap(ctx, this.result.discription, cal(14), cal(16), cal(160), cal(20), cal(10));

      // 价税合计
      ctx.setTextAlign('center');
      ctx.fillText('1122', cal(265), cal(24));
      ctx.fillText('应收账款', cal(395), cal(24));
      ctx.fillText(this.result.AmountInFiguers, cal(522), cal(24));

      // 物品、服务等
      ctx.setTextAlign('center');
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
      ctx.setTextAlign('center');
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGUuanMiXSwibmFtZXMiOlsiU2FsZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsIndpZHRoIiwiaGVpZ2h0IiwicmVzdWx0IiwidGVtcEZpbGVQYXRoIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiaGFubGRlU2F2ZVBpYyIsIl9zZWxmIiwid3giLCJnZXRJbWFnZUluZm8iLCJzcmMiLCJzdWNjZXNzIiwicmVzMSIsInNhdmVJbWFnZVRvUGhvdG9zQWxidW0iLCJmaWxlUGF0aCIsInBhdGgiLCJyZXMyIiwiY29uc29sZSIsImxvZyIsImZhaWwiLCJlcnIiLCJoYW5kbGVDYW5jZWwiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsIm9wdGlvbnMiLCJKU09OIiwicGFyc2UiLCJ0aGF0IiwiZ2V0U3lzdGVtSW5mbyIsInJlcyIsIndpbmRvd1dpZHRoIiwiY2FsIiwicHgiLCJsaW5lV3JhcCIsImN0eCIsInN0ciIsImZvbnRzaXplIiwibGluZWhlaWdodCIsIngiLCJ5Iiwic2V0Rm9udFNpemUiLCJ0ZXh0QXJyIiwiaW5kZXgiLCJpIiwibGVuZ3RoIiwibWVhc3VyZVRleHQiLCJzdWJzdHJpbmciLCJwdXNoIiwiZmlsbFRleHQiLCJjcmVhdGVDYW52YXNDb250ZXh0Iiwic2V0RmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJDb21tb2RpdHlOYW1lIiwic2V0VGV4dEFsaWduIiwiZGF0ZSIsIkRhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsInRyYW5zbGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwic3Vic3RyIiwiTWF0aCIsInJhbmRvbSIsInRvRml4ZWQiLCJzZXRTdHJva2VTdHlsZSIsInN0cm9rZVJlY3QiLCJyb3ciLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJkaXNjcmlwdGlvbiIsIkFtb3VudEluRmlndWVycyIsIkNvbW1vZGl0eUFtb3VudCIsIndvcmQiLCJDb21tb2RpdHlUYXgiLCJiZWdpblBhdGgiLCJsZWZ0VGl0bGUiLCJ0aXRsZSIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJuaWNrTmFtZSIsIkludm9pY2VOdW0iLCJiZWxvbmdQcm9qZWN0IiwiUHVyY2hhc2VyTmFtZSIsImRyYXciLCJjYW52YXNUb1RlbXBGaWxlUGF0aCIsImNhbnZhc0lkIiwiJGFwcGx5Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFJYkMsSSxHQUFPO0FBQ0xDLGFBQU8sQ0FERjtBQUVMQyxjQUFRLENBRkg7QUFHTEMsY0FBUSxFQUhIO0FBSUxDLG9CQUFjO0FBSlQsSyxRQU9QQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUkMsbUJBRFEsMkJBQ1M7QUFDZixZQUFJQyxRQUFRLElBQVo7QUFDSUMsV0FBR0MsWUFBSCxDQUFnQjtBQUNkQyxlQUFLSCxNQUFNSixZQURHO0FBRWRRLGlCQUZjLG1CQUVMQyxJQUZLLEVBRUM7QUFDYkosZUFBR0ssc0JBQUgsQ0FBMEI7QUFDdEJDLHdCQUFVRixLQUFLRyxJQURPO0FBRXRCSix1QkFBUyxpQkFBVUssSUFBVixFQUFnQjtBQUN2QkMsd0JBQVFDLEdBQVIsQ0FBWUYsSUFBWjtBQUNELGVBSnFCO0FBS3RCRyxvQkFBTSxjQUFVQyxHQUFWLEVBQWU7QUFDbkJILHdCQUFRQyxHQUFSLENBQVlFLEdBQVo7QUFDRDtBQVBxQixhQUExQjtBQVNEO0FBWmEsU0FBaEI7QUFjTCxPQWpCTztBQWtCUkMsa0JBbEJRLDBCQWtCUTtBQUNkYixXQUFHYyxZQUFILENBQWdCO0FBQ1pDLGlCQUFPO0FBREssU0FBaEI7QUFHRDtBQXRCTyxLOzs7OzsyQkF5QkZDLE8sRUFBUztBQUFBOztBQUNmLFdBQUt0QixNQUFMLEdBQWN1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QUFKLElBQVUsQ0FBdEUsQ0FBN0I7QUFDQUcsVUFBSWMsUUFBSixDQUFhLEtBQUs5QyxNQUFMLENBQVl1RixhQUF6QixFQUF3QzFELElBQUksR0FBSixDQUF4QyxFQUFrREEsSUFBSSxFQUFKLElBQVVBLElBQUksRUFBSixDQUE1RDs7QUFFQUcsVUFBSXdELElBQUosQ0FBUyxJQUFULEVBQWUsWUFBTTtBQUNuQmxGLFdBQUdtRixvQkFBSCxDQUF3QjtBQUNwQnJELGFBQUcsQ0FEaUI7QUFFcEJDLGFBQUcsQ0FGaUI7QUFHcEJ2QyxpQkFBTytCLElBQUksR0FBSixDQUhhO0FBSXBCOUIsa0JBQVE4QixJQUFJLEdBQUosSUFBVyxDQUFDLElBQUksSUFBSSxPQUFLN0IsTUFBTCxDQUFZa0QsYUFBWixDQUEwQlIsTUFBbkMsSUFBNkNiLElBQUksRUFBSixDQUo1QztBQUtwQjZELG9CQUFVLFVBTFUsRUFLQztBQUNyQmpGLG1CQUFTLGlCQUFDa0IsR0FBRCxFQUFTO0FBQ2Q7QUFDQUYsaUJBQUt4QixZQUFMLEdBQW9CMEIsSUFBSTFCLFlBQXhCO0FBQ0F3QixpQkFBS2tFLE1BQUw7QUFDSCxXQVZtQjtBQVdwQjFFLGdCQUFNLGNBQUNDLEdBQUQsRUFBUztBQUNiSCxvQkFBUUMsR0FBUixDQUFZRSxHQUFaO0FBQ0Q7QUFibUIsU0FBeEI7QUFlRCxPQWhCRDtBQWlCRDs7OztFQWxVK0IwRSxlQUFLQyxJOztrQkFBbEJwRyxJIiwiZmlsZSI6InNhbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgdXRpbCBmcm9tICcuLi8uLi91dGlscy91dGlsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYWxlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflh63or4EnXG4gIH1cbiAgY29tcG9uZW50cyA9IHtcblxuICB9XG5cbiAgZGF0YSA9IHtcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgcmVzdWx0OiB7fSxcbiAgICB0ZW1wRmlsZVBhdGg6ICcnXG4gIH1cblxuICBjb21wdXRlZCA9IHt9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBoYW5sZGVTYXZlUGljICgpIHtcbiAgICAgIGxldCBfc2VsZiA9IHRoaXNcbiAgICAgICAgICB3eC5nZXRJbWFnZUluZm8oe1xuICAgICAgICAgICAgc3JjOiBfc2VsZi50ZW1wRmlsZVBhdGgsXG4gICAgICAgICAgICBzdWNjZXNzIChyZXMxKSB7XG4gICAgICAgICAgICAgIHd4LnNhdmVJbWFnZVRvUGhvdG9zQWxidW0oe1xuICAgICAgICAgICAgICAgICAgZmlsZVBhdGg6IHJlczEucGF0aCxcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlczIpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgaGFuZGxlQ2FuY2VsICgpIHtcbiAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgZGVsdGE6IDFcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgdGhpcy5yZXN1bHQgPSBKU09OLnBhcnNlKG9wdGlvbnMucmVzdWx0KVxuICAgIC8vIHRoaXMucmVzdWx0ID0ge1xuICAgIC8vICAgXCJJbnZvaWNlTnVtXCI6IFwiMzIzMzA3MzlcIixcbiAgICAvLyAgIFwiU2VsbGVyTmFtZVwiOiBcIuWMl+S6rOWGoOaciOmkkOmlrueuoeeQhuaciemZkOWFrOWPuFwiLFxuICAgIC8vICAgXCJDb21tb2RpdHlUYXhSYXRlXCI6IFt7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIjYlXCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMVwiXG4gICAgLy8gICB9XSxcbiAgICAvLyAgIFwiU2VsbGVyQmFua1wiOiBcIuWMl+S6rOW4gua1t+a3gOWMuuS4reWFs+adkeS4nOi3rzHlj7fpmaIy5Y+35qW8MTAx5a6kNjI3OTg5ODhcIixcbiAgICAvLyAgIFwiQ2hlY2tlclwiOiBcIlwiLFxuICAgIC8vICAgXCJUb3RhbEFtb3VudFwiOiBcIjE4NjQ3LjE3XCIsXG4gICAgLy8gICBcIkNvbW1vZGl0eUFtb3VudFwiOiBbe1xuICAgIC8vICAgICBcIndvcmRcIjogXCIxODY0Ny4xN1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfSwge1xuICAgIC8vICAgICBcIndvcmRcIjogXCIxODY0Ny4xN1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjJcIlxuICAgIC8vICAgfV0sXG4gICAgLy8gICBcIkludm9pY2VEYXRlXCI6IFwiMjAxOOW5tDA45pyIMTnml6VcIixcbiAgICAvLyAgIFwiQ29tbW9kaXR5VGF4XCI6IFt7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIjExMTguODNcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH0sIHtcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiMTczOC44M1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjJcIlxuICAgIC8vICAgfV0sXG4gICAgLy8gICBcIlB1cmNoYXNlck5hbWVcIjogXCLkuIrmtbfmnInnlaXmlZnogrLnp5HmioDmnInpmZDlhazlj7hcIixcbiAgICAvLyAgIFwiQ29tbW9kaXR5TnVtXCI6IFt7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIlwiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfV0sXG4gICAgLy8gICBcIlB1cmNoYXNlckJhbmtcIjogXCJcIixcbiAgICAvLyAgIFwiUmVtYXJrc1wiOiBcIuagoemqjOeggTAwMzQ1ODAyMjU2XCIsXG4gICAgLy8gICBcIlBhc3N3b3JkXCI6IFwiNTIvLzU1MDErMTQ5MDYtKzAzPC0zMDg0LTg5PDk4MDcxOT4rMjUtNCs2Mzg2Nzw4MzwrMDMwMS0qMDErOTwqMC85MDwvNDYtPDAyOTg4ND41NC0yOD4+MDM5LysvMzYqKzkzLzc4NT4wND5cIixcbiAgICAvLyAgIFwiU2VsbGVyQWRkcmVzc1wiOiBcIuWPtzEwMeWupDYyNzk4OTg4OTExXCIsXG4gICAgLy8gICBcIlB1cmNoYXNlckFkZHJlc3NcIjogXCJcIixcbiAgICAvLyAgIFwiSW52b2ljZUNvZGVcIjogXCIwMTEwMDE4MDAxMDRcIixcbiAgICAvLyAgIFwiQ29tbW9kaXR5VW5pdFwiOiBbe1xuICAgIC8vICAgICBcIndvcmRcIjogXCJcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH1dLFxuICAgIC8vICAgXCJQYXllZVwiOiBcIueUhOWpt1wiLFxuICAgIC8vICAgXCJQdXJjaGFzZXJSZWdpc3Rlck51bVwiOiBcIjkxMzEwMTEwTUFHMFdOXCIsXG4gICAgLy8gICBcIkNvbW1vZGl0eVByaWNlXCI6IFt7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIlwiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfV0sXG4gICAgLy8gICBcIk5vdGVEcmF3ZXJcIjogXCLpob7mlrDmnbBcIixcbiAgICAvLyAgIFwiQW1vdW50SW5Xb3Jkc1wiOiBcIuS4h+S7n+afkuS9sOmZhuaLvumZhuWchuaVtFwiLFxuICAgIC8vICAgXCJBbW91bnRJbkZpZ3VlcnNcIjogXCIxOTc2Ni4wMFwiLFxuICAgIC8vICAgXCJUb3RhbFRheFwiOiBcIjExMTguMzBcIixcbiAgICAvLyAgIFwiSW52b2ljZVR5cGVcIjogXCLkuJPnlKjlj5HnpahcIixcbiAgICAvLyAgIFwiU2VsbGVyUmVnaXN0ZXJOdW1cIjogXCI5MTExMDEwODc5NzU4MzQzMzhcIixcbiAgICAvLyAgIFwiQ29tbW9kaXR5TmFtZVwiOiBbe1xuICAgIC8vICAgICBcIndvcmRcIjogXCIq6aSQ6aWu5pyN5YqhKumkkOi0uVwiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfSwge1xuICAgIC8vICAgICBcIndvcmRcIjogXCIqYWnmlZnogrJcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIyXCJcbiAgICAvLyAgIH1dLFxuICAgIC8vICAgXCJDb21tb2RpdHlUeXBlXCI6IFt7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIlwiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfV0sXG4gICAgLy8gICBcIkNoZWNrQ29kZVwiOiBcIjAwMzQ1ODAyMjU2MTk1OTA5NDlcIixcbiAgICAvLyAgIFwiaWRlbnRpdHlcIjogXCLotK3kubDmlrlcIixcbiAgICAvLyAgIFwicGF5XCI6IFwi5Lia5Yqh5oub5b6FXCIsXG4gICAgLy8gICBcInNvdXJjZVwiOiBcIuWFrOWPuOWRmOW3pVwiLFxuICAgIC8vICAgXCJwZXJzb25OYW1lXCI6IFwi5byg5LiJ5ZWKXCIsXG4gICAgLy8gICBcImRpc2NyaXB0aW9uXCI6IFwi5oiR5p2l6Ieq5Lit5Zu977yM5oiR5YaNZGprZGtq55u05pKt77yM5oiR5b6X6L+H5LiW55WM5Yag5Yab77yM5oiR5Lmf5Yqe6L+H6L2sLOS9oOimgemineS9oOmDveiDveiusOW+l+eci+aal+WPt+mDveS8mlwiLFxuICAgIC8vICAgXCJiZWxvbmdQcm9qZWN0XCI6IFwi5aSp5Zyw5aSn5ZCMXCJcbiAgICAvLyB9XG5cbiAgICBsZXQgdGhhdCA9IHRoaXNcblxuICAgIC8vIOiOt+WPluWxj+W5leWuvVxuICAgIHd4LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgdGhhdC53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgICAvLyB0aGF0LmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgIH1cbiAgICB9KVxuXG5cbi8vIOWHveaVsOWumuS5ieWMuuWfnyA9PT09PT09PT09PT09PT09PT09XG4gICAgLy8g6K6+572u5LiA5Liq5Z+65YeG5q+U5L6LXG4gICAgbGV0IGNhbCA9IChweCkgPT4ge1xuICAgICAgcmV0dXJuICBweCAvIDM3NSAqIHRoYXQud2lkdGhcbiAgICB9XG5cbiAgICAvLyBjYW52YXPmjaLooYzmmL7npLpcbiAgICBsZXQgbGluZVdyYXAgPSAoY3R4LCBzdHIsIGZvbnRzaXplLCBsaW5laGVpZ2h0LCB3aWR0aCwgeCwgeSkgPT4ge1xuICAgICAgY3R4LnNldEZvbnRTaXplKGZvbnRzaXplKVxuICAgICAgbGV0IHRleHRBcnIgPSBbXVxuICAgICAgbGV0IGluZGV4ID0gMFxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGN0eC5tZWFzdXJlVGV4dChzdHIuc3Vic3RyaW5nKGluZGV4LCBpKSkud2lkdGggPj0gd2lkdGgpIHtcbiAgICAgICAgICB0ZXh0QXJyLnB1c2goc3RyLnN1YnN0cmluZyhpbmRleCwgaSkpXG4gICAgICAgICAgaW5kZXggPSBpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGV4dEFyci5wdXNoKHN0ci5zdWJzdHJpbmcoaW5kZXgpKVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHRBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRleHRBcnJbaV0sIHgsIHkgKyBsaW5laGVpZ2h0ICogKGkgKyAxKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjdHggPSB3eC5jcmVhdGVDYW52YXNDb250ZXh0KCdjYW52YXNJZCcpXG5cbiAgICBjdHguc2V0RmlsbFN0eWxlKCd3aGl0ZScpXG4gICAgY3R4LmZpbGxSZWN0KGNhbCgwKSwgY2FsKDApLCBjYWwoNzUwKSwgY2FsKDEyMCkgKyAoOCArIDIgKiB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCkgKiBjYWwoMzYpKVxuICAgIGN0eC5zZXRGaWxsU3R5bGUoJ2JsYWNrJylcblxuICAgIC8vIOagh+mimFxuICAgIGN0eC5zZXRGb250U2l6ZShjYWwoMjMpKVxuICAgIGN0eC5zZXRUZXh0QWxpZ24oJ2NlbnRlcicpXG4gICAgY3R4LmZpbGxUZXh0KCforrDotKblh63or4EnLCBjYWwoMzc1KSwgY2FsKDQwKSlcblxuICAgIC8vIOaXtumXtOWPiue8luWPt1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKVxuICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXG4gICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMVxuICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKVxuICAgIGN0eC50cmFuc2xhdGUoY2FsKDczMCksIGNhbCg3MCkpXG4gICAgY3R4LnNldEZvbnRTaXplKGNhbCgxMykpXG4gICAgY3R4LnNldFRleHRBbGlnbigncmlnaHQnKVxuICAgIGN0eC5maWxsVGV4dCh5ZWFyICsgJyDlubQgJyArIG1vbnRoICsgJyDmnIggJyArIGRheSArICcg5Y+3ICAgICAg6K6w5a2X56ysICcgKyBEYXRlLm5vdygpLnRvU3RyaW5nKCkuc3Vic3RyKDYpICsgTWF0aC5yYW5kb20oKS50b0ZpeGVkKDQpKjEwMDAwICsgJyDlj7cnLCBjYWwoMCksIGNhbCgyMikpXG5cbiAgICAvLyDooajmoLxcbiAgICAvLyDlpJbmoYZcbiAgICBjdHgudHJhbnNsYXRlKGNhbCgtNzEwKSwgY2FsKDUwKSlcbiAgICBjdHguc2V0U3Ryb2tlU3R5bGUoJyMwMDAnKVxuICAgIGN0eC5zdHJva2VSZWN0KDAsIDAsIGNhbCg3MTApLCBjYWwoMzYpICogKHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoICogMiAgKyAzKSlcblxuICAgIC8vIOWGheahhlxuICAgIGxldCByb3cgPSB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCAqIDIgKyAzXG4gICAgZm9yIChsZXQgaSA9IDI7IGkgPCByb3cgLSAxOyBpKyspIHtcbiAgICAgIGN0eC5zZXRTdHJva2VTdHlsZSgnIzk5OScpXG4gICAgICBjdHgubW92ZVRvKGNhbCgyMDApLCBjYWwoMzYpICogaSlcbiAgICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikgKiBpKVxuICAgICAgY3R4LnN0cm9rZSgpXG4gICAgfVxuXG4gICAgY3R4Lm1vdmVUbygwLCBjYWwoMzYpKVxuICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikpXG5cbiAgICBjdHgubW92ZVRvKDAsIGNhbCgzNikgKiAocm93IC0xKSlcbiAgICBjdHgubGluZVRvKGNhbCg3MTApLCBjYWwoMzYpICogKHJvdyAtMSkpXG5cbiAgICBjdHgubW92ZVRvKDAsIGNhbCgzNikgKiByb3cpXG4gICAgY3R4LmxpbmVUbyhjYWwoNzEwKSwgY2FsKDM2KSAqIHJvdylcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDIwMCksIDApXG4gICAgY3R4LmxpbmVUbyhjYWwoMjAwKSwgY2FsKDM2KSAqIChyb3cgLTEpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMzMwKSwgY2FsKDE4KSlcbiAgICBjdHgubGluZVRvKGNhbCgzMzApLCBjYWwoMzYpICogKHJvdyAtIDEpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMjAwKSwgY2FsKDE4KSlcbiAgICBjdHgubGluZVRvKGNhbCg0NjApLCBjYWwoMTgpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoNDYwKSwgMClcbiAgICBjdHgubGluZVRvKGNhbCg0NjApLCBjYWwoMzYpICogcm93KVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoNTg1KSwgMClcbiAgICBjdHgubGluZVRvKGNhbCg1ODUpLCBjYWwoMzYpICogcm93KVxuXG4gICAgY3R4LnN0cm9rZSgpXG5cbiAgICAvLyDooajlpLRcbiAgICBjdHguc2V0Rm9udFNpemUoY2FsKDE1KSlcbiAgICBjdHguc2V0VGV4dEFsaWduKCdjZW50ZXInKVxuICAgIGN0eC5maWxsVGV4dCgn5pGY6KaBJywgY2FsKDEwMCksIGNhbCgyNCkpXG4gICAgY3R4LmZpbGxUZXh0KCflgJ/mlrnph5Hpop0nLCBjYWwoNTIyKSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQoJ+i0t+aWuemHkeminScsIGNhbCg2NDYpLCBjYWwoMjQpKVxuXG4gICAgY3R4LnNldFRleHRBbGlnbignY2VudGVyJylcbiAgICBjdHguc2V0Rm9udFNpemUoY2FsKDE0KSlcbiAgICBjdHguZmlsbFRleHQoJ+S8muiuoeenkeebricsIGNhbCgzMzApLCBjYWwoMTUpKVxuICAgIGN0eC5maWxsVGV4dCgn56eR55uu5Luj56CBJywgY2FsKDI2NSksIGNhbCgzMykpXG4gICAgY3R4LmZpbGxUZXh0KCfnp5Hnm67lkI3np7AnLCBjYWwoMzk1KSwgY2FsKDMzKSlcblxuICAgIC8vIOWGheWuuemDqOWIhlxuICAgIC8vIOaRmOimgeWGheWuuVxuICAgIGN0eC50cmFuc2xhdGUoMCwgY2FsKDM2KSlcbiAgICBjdHguc2V0VGV4dEFsaWduKCdsZWZ0JylcbiAgICBsaW5lV3JhcChjdHgsIHRoaXMucmVzdWx0LmRpc2NyaXB0aW9uLCBjYWwoMTQpLCBjYWwoMTYpLCBjYWwoMTYwKSwgY2FsKDIwKSwgY2FsKDEwKSlcblxuICAgIC8vIOS7t+eojuWQiOiuoVxuICAgIGN0eC5zZXRUZXh0QWxpZ24oJ2NlbnRlcicpXG4gICAgY3R4LmZpbGxUZXh0KCcxMTIyJywgY2FsKDI2NSksIGNhbCgyNCkpXG4gICAgY3R4LmZpbGxUZXh0KCflupTmlLbotKbmrL4nLCBjYWwoMzk1KSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuQW1vdW50SW5GaWd1ZXJzLCBjYWwoNTIyKSwgY2FsKDI0KSlcblxuICAgIC8vIOeJqeWTgeOAgeacjeWKoeetiVxuICAgIGN0eC5zZXRUZXh0QWxpZ24oJ2NlbnRlcicpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjdHguZmlsbFRleHQoJzUwMDEnLCBjYWwoMjY1KSwgY2FsKDI0KSArICgxICsgMiAqIGkpICogY2FsKDM2KSlcbiAgICAgIGN0eC5maWxsVGV4dCgn5Li76JCl5Lia5Yqh5pS25YWlJywgY2FsKDM5NSksIGNhbCgyNCkgKyAoMSArIDIgKiBpKSAqIGNhbCgzNikpXG4gICAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuQ29tbW9kaXR5QW1vdW50W2ldLndvcmQsIGNhbCg2NDYpLCBjYWwoMjQpICsgKDEgKyAyICogaSkgKiBjYWwoMzYpKVxuXG4gICAgICBjdHguZmlsbFRleHQoJzIyMjEuMDEuMDEnLCBjYWwoMjY1KSwgY2FsKDI0KSArICgyICsgMiAqIGkpICogY2FsKDM2KSlcbiAgICAgIGxpbmVXcmFwKGN0eCwgJ+W6lOS6pOeojui0uSAtIOWinuWAvOeojiAtIOmUgOmhueeojicsIGNhbCgxNCksIGNhbCgxNCksIGNhbCgxMzApLCBjYWwoMzk1KSwgY2FsKDIpICsgKDIgKyAyICogaSkgKiBjYWwoMzYpIClcbiAgICAgIC8vIGN0eC5maWxsVGV4dChsaW5lV3JhcCgpLCBjYWwoMzk1KSwgY2FsKDI0KSArIDIgKiBjYWwoMzYpKVxuICAgICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LkNvbW1vZGl0eVRheFtpXS53b3JkLCBjYWwoNjQ2KSwgY2FsKDI0KSArICgyICsgMiAqIGkpICogY2FsKDM2KSlcbiAgICB9XG5cbiAgICAvLyDlkIjorqFcbiAgICBjdHgudHJhbnNsYXRlKDAsIGNhbCgzNikgKiAodGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKiAyICsgMSkpXG4gICAgY3R4LmZpbGxUZXh0KCflkIjorqEnLCBjYWwoMjMwKSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuQW1vdW50SW5GaWd1ZXJzLCBjYWwoNTIyKSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuQW1vdW50SW5GaWd1ZXJzLCBjYWwoNjQ2KSwgY2FsKDI0KSlcblxuICAgIC8vIOS/oeaBr+agj1xuICAgIGN0eC5iZWdpblBhdGgoKVxuICAgIC8vIOi+ueahhlxuICAgIGN0eC5zZXRUZXh0QWxpZ24oJ2NlbnRlcicpXG4gICAgY3R4LnRyYW5zbGF0ZSgwLCBjYWwoMzYpKVxuICAgIGxldCBsZWZ0VGl0bGUgPSBbJ+S8muiuoeaAu+euoScsICflrqLmiLcnLCAn5L6b5bqU5ZWGJywgJ+mhueebriddXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSB7XG4gICAgICBjdHguZmlsbFRleHQobGVmdFRpdGxlW2kgLSAxXSwgY2FsKDUwKSwgY2FsKDI0KSArIChpIC0gMSkgKiBjYWwoMzYpKVxuICAgICAgY3R4Lm1vdmVUbygwLCBjYWwoMzYpICogaSlcbiAgICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikgKiBpKVxuICAgIH1cblxuICAgIGN0eC5tb3ZlVG8oY2FsKDM1NSksIGNhbCgzNikpXG4gICAgY3R4LmxpbmVUbyhjYWwoMzU1KSwgY2FsKDM2KSAqIDQpXG4gICAgY3R4LmZpbGxUZXh0KCflkZjlt6UnLCBjYWwoNDA1KSwgY2FsKDM2KSArIGNhbCgyNCkpXG5cbiAgICBjdHgubW92ZVRvKGNhbCg0NTUpLCBjYWwoMzYpKVxuICAgIGN0eC5saW5lVG8oY2FsKDQ1NSksIGNhbCgzNikgKiA0KVxuICAgIGN0eC5maWxsVGV4dCgn5YW25LuW56ys5LiJ5pa5JywgY2FsKDQwNSksIGNhbCgzNikgKiAyICsgY2FsKDI0KSlcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDcxMCksIDApXG4gICAgY3R4LmxpbmVUbyhjYWwoNzEwKSwgY2FsKDM2KSAqIDQpXG4gICAgY3R4LmZpbGxUZXh0KCflj5Hnpajlj7fnoIEnLCBjYWwoNDA1KSwgY2FsKDM2KSAqIDMgKyBjYWwoMjQpKVxuXG4gICAgY3R4Lm1vdmVUbygwLCAwKVxuICAgIGN0eC5saW5lVG8oMCwgY2FsKDM2KSAqIDQpXG5cbiAgICBjdHgubW92ZVRvKGNhbCgxMDApLCAwKVxuICAgIGN0eC5saW5lVG8oY2FsKDEwMCksIGNhbCgzNikgKiA0KVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMTkwKSwgMClcbiAgICBjdHgubGluZVRvKGNhbCgxOTApLCBjYWwoMzYpKVxuICAgIGxldCB0aXRsZSA9IFsn6K6w6LSmJywgJ+WHuue6sycsICflrqHmoLgnLCAn5Yi25Y2VJ11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgY3R4LmZpbGxUZXh0KHRpdGxlW2ldLCBjYWwoMTkwICsgMTMwICogaSArIDI1KSwgY2FsKDI0KSApXG4gICAgICBjdHgubW92ZVRvKGNhbCgxOTAgKyAxMzAgKiBpICsgNTApLCAwKVxuICAgICAgY3R4LmxpbmVUbyhjYWwoMTkwICsgMTMwICogaSArIDUwKSwgY2FsKDM2KSlcbiAgICAgIGN0eC5tb3ZlVG8oY2FsKDE5MCArIDEzMCAqIGkgKyAxMzApLCAwKVxuICAgICAgY3R4LmxpbmVUbyhjYWwoMTkwICsgMTMwICogaSArIDEzMCksIGNhbCgzNikpXG4gICAgfVxuICAgIGN0eC5zdHJva2UoKVxuXG4gICAgY3R4LmZpbGxUZXh0KHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJJbmZvLm5pY2tOYW1lLCBjYWwoMTkwICsgMTMwICogMyArIDkwKSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuSW52b2ljZU51bSwgY2FsKDU4MiksIGNhbCgyNCkgKyBjYWwoMzYpICogMylcbiAgICB0aGlzLnJlc3VsdC5iZWxvbmdQcm9qZWN0ICYmIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5iZWxvbmdQcm9qZWN0LCBjYWwoMjI4KSwgY2FsKDI0KSArIGNhbCgzNikgKiAzKVxuICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5QdXJjaGFzZXJOYW1lLCBjYWwoMjI4KSwgY2FsKDI0KSArIGNhbCgzNikpXG5cbiAgICBjdHguZHJhdyh0cnVlLCAoKSA9PiB7XG4gICAgICB3eC5jYW52YXNUb1RlbXBGaWxlUGF0aCh7XG4gICAgICAgICAgeDogMCxcbiAgICAgICAgICB5OiAwLFxuICAgICAgICAgIHdpZHRoOiBjYWwoNzUwKSxcbiAgICAgICAgICBoZWlnaHQ6IGNhbCgxMjApICsgKDggKyAyICogdGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGgpICogY2FsKDM2KSxcbiAgICAgICAgICBjYW52YXNJZDogJ2NhbnZhc0lkJywvL2NhbnZhc0lk5ZKM5qCH562+6YeM6Z2i55qEaWTlr7nlupRcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgIC8v5bCG6I635Y+W5Yiw55qE5Zu+54mH5Li05pe26Lev5b6Ec2V05YiwY2FudmFzU2F2ZWltZ+S4rVxuICAgICAgICAgICAgICB0aGF0LnRlbXBGaWxlUGF0aCA9IHJlcy50ZW1wRmlsZVBhdGhcbiAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDogKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==