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

  _createClass(Purchase, [{
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

      ctx.setFontSize(cal(14));
      ctx.fillText('会计科目', cal(330), cal(15));
      ctx.fillText('科目代码', cal(265), cal(33));
      ctx.fillText('科目名称', cal(395), cal(33));

      // 内容部分
      // 摘要内容
      ctx.translate(0, cal(36));
      ctx.setTextAlign('left');
      lineWrap(ctx, this.result.discription, cal(14), cal(16), cal(160), cal(20), cal(10));

      ctx.setTextAlign('center');
      // 物品、服务等
      for (var _i2 = 0; _i2 < this.result.CommodityName.length; _i2++) {
        var temp = (0, _util2.default)(this.result.CommodityName[_i2].word, this.result.source, this.result.CommodityAmount[_i2].word);
        console.log(temp);
        ctx.fillText(temp.code, cal(265), cal(24) + 2 * _i2 * cal(36));
        if (ctx.measureText(temp.name).width >= 0.9 * cal(130)) {
          lineWrap(ctx, temp.name, cal(14), cal(14), cal(130), cal(395), cal(2) + 2 * _i2 * cal(36));
        } else {
          ctx.fillText(temp.name, cal(395), cal(24) + 2 * _i2 * cal(36));
        }
        ctx.fillText(this.result.CommodityAmount[_i2].word, cal(522), cal(24) + 2 * _i2 * cal(36));

        ctx.fillText('2221.01.06', cal(265), cal(24) + (1 + 2 * _i2) * cal(36));
        ctx.fillText('待认证进项税', cal(395), cal(24) + (1 + 2 * _i2) * cal(36));
        // ctx.fillText(lineWrap(), cal(395), cal(24) + 2 * cal(36))
        ctx.fillText(this.result.CommodityTax[_i2].word, cal(522), cal(24) + (1 + 2 * _i2) * cal(36));
      }

      // 价税合计
      switch (this.result.pay) {
        case '公司':
          ctx.fillText('2202', cal(265), cal(24) + this.result.CommodityName.length * 2 * cal(36));
          ctx.fillText('应收账款', cal(395), cal(24) + this.result.CommodityName.length * 2 * cal(36));
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

  return Purchase;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Purchase , 'pages/purchase/purchase'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlLmpzIl0sIm5hbWVzIjpbIlB1cmNoYXNlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwid2lkdGgiLCJoZWlnaHQiLCJyZXN1bHQiLCJ0ZW1wRmlsZVBhdGgiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJoYW5sZGVTYXZlUGljIiwiX3NlbGYiLCJ3eCIsImdldEltYWdlSW5mbyIsInNyYyIsInN1Y2Nlc3MiLCJyZXMxIiwic2F2ZUltYWdlVG9QaG90b3NBbGJ1bSIsImZpbGVQYXRoIiwicGF0aCIsInJlczIiLCJjb25zb2xlIiwibG9nIiwiZmFpbCIsImVyciIsImhhbmRsZUNhbmNlbCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwib3B0aW9ucyIsIkpTT04iLCJwYXJzZSIsInRoYXQiLCJnZXRTeXN0ZW1JbmZvIiwicmVzIiwid2luZG93V2lkdGgiLCJjYWwiLCJweCIsImxpbmVXcmFwIiwiY3R4Iiwic3RyIiwiZm9udHNpemUiLCJsaW5laGVpZ2h0IiwieCIsInkiLCJzZXRGb250U2l6ZSIsInRleHRBcnIiLCJpbmRleCIsImkiLCJsZW5ndGgiLCJtZWFzdXJlVGV4dCIsInN1YnN0cmluZyIsInB1c2giLCJmaWxsVGV4dCIsImNyZWF0ZUNhbnZhc0NvbnRleHQiLCJzZXRGaWxsU3R5bGUiLCJmaWxsUmVjdCIsIkNvbW1vZGl0eU5hbWUiLCJzZXRUZXh0QWxpZ24iLCJkYXRlIiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwidHJhbnNsYXRlIiwibm93IiwidG9TdHJpbmciLCJzdWJzdHIiLCJNYXRoIiwicmFuZG9tIiwidG9GaXhlZCIsInNldFN0cm9rZVN0eWxlIiwic3Ryb2tlUmVjdCIsInJvdyIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsImRpc2NyaXB0aW9uIiwidGVtcCIsIndvcmQiLCJzb3VyY2UiLCJDb21tb2RpdHlBbW91bnQiLCJjb2RlIiwibmFtZSIsIkNvbW1vZGl0eVRheCIsInBheSIsIkFtb3VudEluRmlndWVycyIsImJlZ2luUGF0aCIsImxlZnRUaXRsZSIsInRpdGxlIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsIm5pY2tOYW1lIiwiSW52b2ljZU51bSIsImJlbG9uZ1Byb2plY3QiLCJTZWxsZXJOYW1lIiwicGVyc29uTmFtZSIsIm90aGVyTmFtZSIsImRyYXciLCJjYW52YXNUb1RlbXBGaWxlUGF0aCIsImNhbnZhc0lkIiwiJGFwcGx5Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFJYkMsSSxHQUFPO0FBQ0xDLGFBQU8sQ0FERjtBQUVMQyxjQUFRLENBRkg7QUFHTEMsY0FBUSxFQUhIO0FBSUxDLG9CQUFjO0FBSlQsSyxRQU9QQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUkMsbUJBRFEsMkJBQ1M7QUFDZixZQUFJQyxRQUFRLElBQVo7QUFDSUMsV0FBR0MsWUFBSCxDQUFnQjtBQUNkQyxlQUFLSCxNQUFNSixZQURHO0FBRWRRLGlCQUZjLG1CQUVMQyxJQUZLLEVBRUM7QUFDYkosZUFBR0ssc0JBQUgsQ0FBMEI7QUFDdEJDLHdCQUFVRixLQUFLRyxJQURPO0FBRXRCSix1QkFBUyxpQkFBVUssSUFBVixFQUFnQjtBQUN2QkMsd0JBQVFDLEdBQVIsQ0FBWUYsSUFBWjtBQUNELGVBSnFCO0FBS3RCRyxvQkFBTSxjQUFVQyxHQUFWLEVBQWU7QUFDbkJILHdCQUFRQyxHQUFSLENBQVlFLEdBQVo7QUFDRDtBQVBxQixhQUExQjtBQVNEO0FBWmEsU0FBaEI7QUFjTCxPQWpCTztBQWtCUkMsa0JBbEJRLDBCQWtCUTtBQUNkYixXQUFHYyxZQUFILENBQWdCO0FBQ1pDLGlCQUFPO0FBREss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dXJjaGFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB1dGlsIGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFB1cmNoYXNlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflh63or4EnXG4gIH1cbiAgY29tcG9uZW50cyA9IHtcblxuICB9XG5cbiAgZGF0YSA9IHtcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgcmVzdWx0OiB7fSxcbiAgICB0ZW1wRmlsZVBhdGg6ICcnXG4gIH1cblxuICBjb21wdXRlZCA9IHt9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBoYW5sZGVTYXZlUGljICgpIHtcbiAgICAgIGxldCBfc2VsZiA9IHRoaXNcbiAgICAgICAgICB3eC5nZXRJbWFnZUluZm8oe1xuICAgICAgICAgICAgc3JjOiBfc2VsZi50ZW1wRmlsZVBhdGgsXG4gICAgICAgICAgICBzdWNjZXNzIChyZXMxKSB7XG4gICAgICAgICAgICAgIHd4LnNhdmVJbWFnZVRvUGhvdG9zQWxidW0oe1xuICAgICAgICAgICAgICAgICAgZmlsZVBhdGg6IHJlczEucGF0aCxcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlczIpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgaGFuZGxlQ2FuY2VsICgpIHtcbiAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgZGVsdGE6IDFcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgdGhpcy5yZXN1bHQgPSBKU09OLnBhcnNlKG9wdGlvbnMucmVzdWx0KVxuICAgIC8vIHRoaXMucmVzdWx0ID0ge1xuICAgIC8vICAgXCJJbnZvaWNlTnVtXCI6IFwiMzIzMzA3MzlcIixcbiAgICAvLyAgIFwiU2VsbGVyTmFtZVwiOiBcIuWMl+S6rOWGoOaciOmkkOmlrueuoeeQhuaciemZkOWFrOWPuFwiLFxuICAgIC8vICAgXCJDb21tb2RpdHlUYXhSYXRlXCI6IFt7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIjYlXCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMVwiXG4gICAgLy8gICB9XSxcbiAgICAvLyAgIFwiU2VsbGVyQmFua1wiOiBcIuWMl+S6rOW4gua1t+a3gOWMuuS4reWFs+adkeS4nOi3rzHlj7fpmaIy5Y+35qW8MTAx5a6kNjI3OTg5ODhcIixcbiAgICAvLyAgIFwiQ2hlY2tlclwiOiBcIlwiLFxuICAgIC8vICAgXCJUb3RhbEFtb3VudFwiOiBcIjE4NjQ3LjE3XCIsXG4gICAgLy8gICBcIkNvbW1vZGl0eUFtb3VudFwiOiBbe1xuICAgIC8vICAgICBcIndvcmRcIjogXCIxODQ3LjE3XCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMVwiXG4gICAgLy8gICB9LCB7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIjE4NjQ3LjE3XCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMlwiXG4gICAgLy8gICB9XSxcbiAgICAvLyAgIFwiSW52b2ljZURhdGVcIjogXCIyMDE45bm0MDjmnIgxOeaXpVwiLFxuICAgIC8vICAgXCJDb21tb2RpdHlUYXhcIjogW3tcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiMTExOC44M1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfSwge1xuICAgIC8vICAgICBcIndvcmRcIjogXCIxNzM4LjgzXCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMlwiXG4gICAgLy8gICB9XSxcbiAgICAvLyAgIFwiUHVyY2hhc2VyTmFtZVwiOiBcIuS4iua1t+acieeVpeaVmeiCsuenkeaKgOaciemZkOWFrOWPuFwiLFxuICAgIC8vICAgXCJDb21tb2RpdHlOdW1cIjogW3tcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiXCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMVwiXG4gICAgLy8gICB9XSxcbiAgICAvLyAgIFwiUHVyY2hhc2VyQmFua1wiOiBcIlwiLFxuICAgIC8vICAgXCJSZW1hcmtzXCI6IFwi5qCh6aqM56CBMDAzNDU4MDIyNTZcIixcbiAgICAvLyAgIFwiUGFzc3dvcmRcIjogXCI1Mi8vNTUwMSsxNDkwNi0rMDM8LTMwODQtODk8OTgwNzE5PisyNS00KzYzODY3PDgzPCswMzAxLSowMSs5PCowLzkwPC80Ni08MDI5ODg0PjU0LTI4Pj4wMzkvKy8zNiorOTMvNzg1PjA0PlwiLFxuICAgIC8vICAgXCJTZWxsZXJBZGRyZXNzXCI6IFwi5Y+3MTAx5a6kNjI3OTg5ODg5MTFcIixcbiAgICAvLyAgIFwiUHVyY2hhc2VyQWRkcmVzc1wiOiBcIlwiLFxuICAgIC8vICAgXCJJbnZvaWNlQ29kZVwiOiBcIjAxMTAwMTgwMDEwNFwiLFxuICAgIC8vICAgXCJDb21tb2RpdHlVbml0XCI6IFt7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIlwiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfV0sXG4gICAgLy8gICBcIlBheWVlXCI6IFwi55SE5am3XCIsXG4gICAgLy8gICBcIlB1cmNoYXNlclJlZ2lzdGVyTnVtXCI6IFwiOTEzMTAxMTBNQUcwV05cIixcbiAgICAvLyAgIFwiQ29tbW9kaXR5UHJpY2VcIjogW3tcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiXCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMVwiXG4gICAgLy8gICB9XSxcbiAgICAvLyAgIFwiTm90ZURyYXdlclwiOiBcIumhvuaWsOadsFwiLFxuICAgIC8vICAgXCJBbW91bnRJbldvcmRzXCI6IFwi5LiH5Luf5p+S5L2w6ZmG5ou+6ZmG5ZyG5pW0XCIsXG4gICAgLy8gICBcIkFtb3VudEluRmlndWVyc1wiOiBcIjE5NzY2LjAwXCIsXG4gICAgLy8gICBcIlRvdGFsVGF4XCI6IFwiMTExOC4zMFwiLFxuICAgIC8vICAgXCJJbnZvaWNlVHlwZVwiOiBcIuS4k+eUqOWPkeelqFwiLFxuICAgIC8vICAgXCJTZWxsZXJSZWdpc3Rlck51bVwiOiBcIjkxMTEwMTA4Nzk3NTgzNDMzOFwiLFxuICAgIC8vICAgXCJDb21tb2RpdHlOYW1lXCI6IFt7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIuacjeWKoeWZqFwiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfSwge1xuICAgIC8vICAgICBcIndvcmRcIjogXCLmiavlnLDmnLpcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIyXCJcbiAgICAvLyAgIH1dLFxuICAgIC8vICAgXCJDb21tb2RpdHlUeXBlXCI6IFt7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIlwiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfV0sXG4gICAgLy8gICBcIkNoZWNrQ29kZVwiOiBcIjAwMzQ1ODAyMjU2MTk1OTA5NDlcIixcbiAgICAvLyAgIFwiaWRlbnRpdHlcIjogXCLotK3kubDmlrlcIixcbiAgICAvLyAgIFwicGF5XCI6IFwi5YWs5Y+4XCIsXG4gICAgLy8gICBcInNvdXJjZVwiOiBcIuS4muWKoeaLm+W+hVwiLFxuICAgIC8vICAgXCJwZXJzb25OYW1lXCI6IFwi5byg5LiJ5ZWKXCIsXG4gICAgLy8gICBcImRpc2NyaXB0aW9uXCI6IFwi5oiR5p2l6Ieq5Lit5Zu977yM5oiR5YaNZGprZGtq55u05pKt77yM5oiR5b6X6L+H5LiW55WM5Yag5Yab77yM5oiR5Lmf5Yqe6L+H6L2sLOS9oOimgemineS9oOmDveiDveiusOW+l+eci+aal+WPt+mDveS8mlwiLFxuICAgIC8vICAgXCJiZWxvbmdQcm9qZWN0XCI6IFwi5aSp5Zyw5aSn5ZCMXCJcbiAgICAvLyB9XG5cbiAgICBsZXQgdGhhdCA9IHRoaXNcblxuICAgIC8vIOiOt+WPluWxj+W5leWuvVxuICAgIHd4LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgdGhhdC53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgICAvLyB0aGF0LmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgIH1cbiAgICB9KVxuXG5cbi8vIOWHveaVsOWumuS5ieWMuuWfnyA9PT09PT09PT09PT09PT09PT09XG4gICAgLy8g6K6+572u5LiA5Liq5Z+65YeG5q+U5L6LXG4gICAgbGV0IGNhbCA9IChweCkgPT4ge1xuICAgICAgcmV0dXJuICBweCAvIDM3NSAqIHRoYXQud2lkdGhcbiAgICB9XG5cbiAgICAvLyBjYW52YXPmjaLooYzmmL7npLpcbiAgICBsZXQgbGluZVdyYXAgPSAoY3R4LCBzdHIsIGZvbnRzaXplLCBsaW5laGVpZ2h0LCB3aWR0aCwgeCwgeSkgPT4ge1xuICAgICAgY3R4LnNldEZvbnRTaXplKGZvbnRzaXplKVxuICAgICAgbGV0IHRleHRBcnIgPSBbXVxuICAgICAgbGV0IGluZGV4ID0gMFxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGN0eC5tZWFzdXJlVGV4dChzdHIuc3Vic3RyaW5nKGluZGV4LCBpKSkud2lkdGggPj0gd2lkdGggKiAwLjgpIHtcbiAgICAgICAgICB0ZXh0QXJyLnB1c2goc3RyLnN1YnN0cmluZyhpbmRleCwgaSkpXG4gICAgICAgICAgaW5kZXggPSBpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGV4dEFyci5wdXNoKHN0ci5zdWJzdHJpbmcoaW5kZXgpKVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHRBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRleHRBcnJbaV0sIHgsIHkgKyBsaW5laGVpZ2h0ICogKGkgKyAxKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjdHggPSB3eC5jcmVhdGVDYW52YXNDb250ZXh0KCdjYW52YXNJZCcpXG5cbiAgICBjdHguc2V0RmlsbFN0eWxlKCd3aGl0ZScpXG4gICAgY3R4LmZpbGxSZWN0KGNhbCgwKSwgY2FsKDApLCBjYWwoNzUwKSwgY2FsKDEyMCkgKyAoOCArIDIgKiB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCkgKiBjYWwoMzYpKVxuICAgIGN0eC5zZXRGaWxsU3R5bGUoJ2JsYWNrJylcblxuICAgIC8vIOagh+mimFxuICAgIGN0eC5zZXRGb250U2l6ZShjYWwoMjMpKVxuICAgIGN0eC5zZXRUZXh0QWxpZ24oJ2NlbnRlcicpXG4gICAgY3R4LmZpbGxUZXh0KCforrDotKblh63or4EnLCBjYWwoMzc1KSwgY2FsKDQwKSlcblxuICAgIC8vIOaXtumXtOWPiue8luWPt1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKVxuICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXG4gICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMVxuICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKVxuICAgIGN0eC50cmFuc2xhdGUoY2FsKDczMCksIGNhbCg3MCkpXG4gICAgY3R4LnNldEZvbnRTaXplKGNhbCgxMykpXG4gICAgY3R4LnNldFRleHRBbGlnbigncmlnaHQnKVxuICAgIGN0eC5maWxsVGV4dCh5ZWFyICsgJyDlubQgJyArIG1vbnRoICsgJyDmnIggJyArIGRheSArICcg5Y+3ICAgICAg6K6w5a2X56ysICcgKyBEYXRlLm5vdygpLnRvU3RyaW5nKCkuc3Vic3RyKDYpICsgTWF0aC5yYW5kb20oKS50b0ZpeGVkKDQpKjEwMDAwICsgJyDlj7cnLCBjYWwoMCksIGNhbCgyMikpXG5cbiAgICAvLyDooajmoLxcbiAgICAvLyDlpJbmoYZcbiAgICBjdHgudHJhbnNsYXRlKGNhbCgtNzEwKSwgY2FsKDUwKSlcbiAgICBjdHguc2V0U3Ryb2tlU3R5bGUoJyMwMDAnKVxuICAgIGN0eC5zdHJva2VSZWN0KDAsIDAsIGNhbCg3MTApLCBjYWwoMzYpICogKHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoICogMiAgKyAzKSlcblxuICAgIC8vIOWGheahhlxuICAgIGxldCByb3cgPSB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCAqIDIgKyAzXG4gICAgZm9yIChsZXQgaSA9IDI7IGkgPCByb3cgLSAxOyBpKyspIHtcbiAgICAgIGN0eC5zZXRTdHJva2VTdHlsZSgnIzk5OScpXG4gICAgICBjdHgubW92ZVRvKGNhbCgyMDApLCBjYWwoMzYpICogaSlcbiAgICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikgKiBpKVxuICAgICAgY3R4LnN0cm9rZSgpXG4gICAgfVxuXG4gICAgY3R4Lm1vdmVUbygwLCBjYWwoMzYpKVxuICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikpXG5cbiAgICBjdHgubW92ZVRvKDAsIGNhbCgzNikgKiAocm93IC0xKSlcbiAgICBjdHgubGluZVRvKGNhbCg3MTApLCBjYWwoMzYpICogKHJvdyAtMSkpXG5cbiAgICBjdHgubW92ZVRvKDAsIGNhbCgzNikgKiByb3cpXG4gICAgY3R4LmxpbmVUbyhjYWwoNzEwKSwgY2FsKDM2KSAqIHJvdylcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDIwMCksIDApXG4gICAgY3R4LmxpbmVUbyhjYWwoMjAwKSwgY2FsKDM2KSAqIChyb3cgLTEpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMzMwKSwgY2FsKDE4KSlcbiAgICBjdHgubGluZVRvKGNhbCgzMzApLCBjYWwoMzYpICogKHJvdyAtIDEpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMjAwKSwgY2FsKDE4KSlcbiAgICBjdHgubGluZVRvKGNhbCg0NjApLCBjYWwoMTgpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoNDYwKSwgMClcbiAgICBjdHgubGluZVRvKGNhbCg0NjApLCBjYWwoMzYpICogcm93KVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoNTg1KSwgMClcbiAgICBjdHgubGluZVRvKGNhbCg1ODUpLCBjYWwoMzYpICogcm93KVxuXG4gICAgY3R4LnN0cm9rZSgpXG5cbiAgICAvLyDooajlpLRcbiAgICBjdHguc2V0Rm9udFNpemUoY2FsKDE1KSlcbiAgICBjdHguc2V0VGV4dEFsaWduKCdjZW50ZXInKVxuICAgIGN0eC5maWxsVGV4dCgn5pGY6KaBJywgY2FsKDEwMCksIGNhbCgyNCkpXG4gICAgY3R4LmZpbGxUZXh0KCflgJ/mlrnph5Hpop0nLCBjYWwoNTIyKSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQoJ+i0t+aWuemHkeminScsIGNhbCg2NDYpLCBjYWwoMjQpKVxuXG4gICAgY3R4LnNldEZvbnRTaXplKGNhbCgxNCkpXG4gICAgY3R4LmZpbGxUZXh0KCfkvJrorqHnp5Hnm64nLCBjYWwoMzMwKSwgY2FsKDE1KSlcbiAgICBjdHguZmlsbFRleHQoJ+enkeebruS7o+eggScsIGNhbCgyNjUpLCBjYWwoMzMpKVxuICAgIGN0eC5maWxsVGV4dCgn56eR55uu5ZCN56ewJywgY2FsKDM5NSksIGNhbCgzMykpXG5cbiAgICAvLyDlhoXlrrnpg6jliIZcbiAgICAvLyDmkZjopoHlhoXlrrlcbiAgICBjdHgudHJhbnNsYXRlKDAsIGNhbCgzNikpXG4gICAgY3R4LnNldFRleHRBbGlnbignbGVmdCcpXG4gICAgbGluZVdyYXAoY3R4LCB0aGlzLnJlc3VsdC5kaXNjcmlwdGlvbiwgY2FsKDE0KSwgY2FsKDE2KSwgY2FsKDE2MCksIGNhbCgyMCksIGNhbCgxMCkpXG5cbiAgICBjdHguc2V0VGV4dEFsaWduKCdjZW50ZXInKVxuICAgIC8vIOeJqeWTgeOAgeacjeWKoeetiVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHRlbXAgPSB1dGlsKHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWVbaV0ud29yZCwgdGhpcy5yZXN1bHQuc291cmNlLCB0aGlzLnJlc3VsdC5Db21tb2RpdHlBbW91bnRbaV0ud29yZClcbiAgICAgIGNvbnNvbGUubG9nKHRlbXApO1xuICAgICAgY3R4LmZpbGxUZXh0KHRlbXAuY29kZSwgY2FsKDI2NSksIGNhbCgyNCkgKyAoMiAqIGkpICogY2FsKDM2KSlcbiAgICAgIGlmIChjdHgubWVhc3VyZVRleHQodGVtcC5uYW1lKS53aWR0aCA+PSAwLjkgKiBjYWwoMTMwKSkge1xuICAgICAgICBsaW5lV3JhcChjdHgsIHRlbXAubmFtZSwgY2FsKDE0KSwgY2FsKDE0KSwgY2FsKDEzMCksIGNhbCgzOTUpLCBjYWwoMikgKyAoMiAqIGkpICogY2FsKDM2KSApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdHguZmlsbFRleHQodGVtcC5uYW1lLCBjYWwoMzk1KSwgY2FsKDI0KSArICgyICogaSkgKiBjYWwoMzYpKVxuICAgICAgfVxuICAgICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LkNvbW1vZGl0eUFtb3VudFtpXS53b3JkLCBjYWwoNTIyKSwgY2FsKDI0KSArICgyICogaSkgKiBjYWwoMzYpKVxuXG4gICAgICBjdHguZmlsbFRleHQoJzIyMjEuMDEuMDYnLCBjYWwoMjY1KSwgY2FsKDI0KSArICgxICsgMiAqIGkpICogY2FsKDM2KSlcbiAgICAgIGN0eC5maWxsVGV4dCgn5b6F6K6k6K+B6L+b6aG556iOJywgY2FsKDM5NSksIGNhbCgyNCkgKyAoMSArIDIgKiBpKSAqIGNhbCgzNikpXG4gICAgICAvLyBjdHguZmlsbFRleHQobGluZVdyYXAoKSwgY2FsKDM5NSksIGNhbCgyNCkgKyAyICogY2FsKDM2KSlcbiAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5Db21tb2RpdHlUYXhbaV0ud29yZCwgY2FsKDUyMiksIGNhbCgyNCkgKyAoMSArIDIgKiBpKSAqIGNhbCgzNikpXG4gICAgfVxuXG4gICAgLy8g5Lu356iO5ZCI6K6hXG4gICAgc3dpdGNoICh0aGlzLnJlc3VsdC5wYXkpIHtcbiAgICAgIGNhc2UgJ+WFrOWPuCc6XG4gICAgICAgICAgY3R4LmZpbGxUZXh0KCcyMjAyJywgY2FsKDI2NSksIGNhbCgyNCkgKyAodGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKiAyKSAqIGNhbCgzNikpXG4gICAgICAgICAgY3R4LmZpbGxUZXh0KCflupTmlLbotKbmrL4nLCBjYWwoMzk1KSwgY2FsKDI0KSArICh0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCAqIDIpICogY2FsKDM2KSlcbiAgICAgICAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuQW1vdW50SW5GaWd1ZXJzLCBjYWwoNjQ2KSwgY2FsKDI0KSArICh0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCAqIDIpICogY2FsKDM2KSlcbiAgICAgICAgICBicmVha1xuICAgICAgY2FzZSAn5YWs5Y+45ZGY5belJzpcbiAgICAgICAgICBjdHguZmlsbFRleHQoJzIyNDEuMDEnLCBjYWwoMjY1KSwgY2FsKDI0KSArICh0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCAqIDIpICogY2FsKDM2KSlcbiAgICAgICAgICBsaW5lV3JhcChjdHgsICflhbbku5blupTku5jmrL4t5ZGY5bel5oql6ZSAJywgY2FsKDE0KSwgY2FsKDE0KSwgY2FsKDEzMCksIGNhbCgzOTUpLCBjYWwoMikgKyAodGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKiAyKSAqIGNhbCgzNikpXG4gICAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LkFtb3VudEluRmlndWVycywgY2FsKDY0NiksIGNhbCgyNCkgKyAodGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKiAyKSAqIGNhbCgzNikpXG4gICAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ+WFtuS7luesrOS4ieaWuSc6XG4gICAgICAgICAgY3R4LmZpbGxUZXh0KCcyMjQxLjA0JywgY2FsKDI2NSksIGNhbCgyNCkgKyAodGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKiAyKSAqIGNhbCgzNikpXG4gICAgICAgICAgbGluZVdyYXAoY3R4LCAn5YW25LuW5bqU5LuY5qy+LeWFtuS7luesrOS4ieaWueW+gOadpScsIGNhbCgxNCksIGNhbCgxNCksIGNhbCgxMzApLCBjYWwoMzk1KSwgY2FsKDIpICsgKHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoICogMikgKiBjYWwoMzYpKVxuICAgICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5BbW91bnRJbkZpZ3VlcnMsIGNhbCg2NDYpLCBjYWwoMjQpICsgKHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoICogMikgKiBjYWwoMzYpKVxuICAgICAgICAgIGJyZWFrXG4gICAgfVxuXG5cbiAgICAvLyDlkIjorqFcbiAgICBjdHgudHJhbnNsYXRlKDAsIGNhbCgzNikgKiAodGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKiAyICsgMSkpXG4gICAgY3R4LmZpbGxUZXh0KCflkIjorqEnLCBjYWwoMjMwKSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuQW1vdW50SW5GaWd1ZXJzLCBjYWwoNTIyKSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuQW1vdW50SW5GaWd1ZXJzLCBjYWwoNjQ2KSwgY2FsKDI0KSlcblxuICAgIC8vIOS/oeaBr+agj1xuICAgIGN0eC5iZWdpblBhdGgoKVxuICAgIC8vIOi+ueahhlxuICAgIGN0eC50cmFuc2xhdGUoMCwgY2FsKDM2KSlcbiAgICBsZXQgbGVmdFRpdGxlID0gWyfkvJrorqHmgLvnrqEnLCAn5a6i5oi3JywgJ+S+m+W6lOWVhicsICfpobnnm64nXVxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykge1xuICAgICAgY3R4LmZpbGxUZXh0KGxlZnRUaXRsZVtpIC0gMV0sIGNhbCg1MCksIGNhbCgyNCkgKyAoaSAtIDEpICogY2FsKDM2KSlcbiAgICAgIGN0eC5tb3ZlVG8oMCwgY2FsKDM2KSAqIGkpXG4gICAgICBjdHgubGluZVRvKGNhbCg3MTApLCBjYWwoMzYpICogaSlcbiAgICB9XG5cbiAgICBjdHgubW92ZVRvKGNhbCgzNTUpLCBjYWwoMzYpKVxuICAgIGN0eC5saW5lVG8oY2FsKDM1NSksIGNhbCgzNikgKiA0KVxuICAgIGN0eC5maWxsVGV4dCgn5ZGY5belJywgY2FsKDQwNSksIGNhbCgzNikgKyBjYWwoMjQpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoNDU1KSwgY2FsKDM2KSlcbiAgICBjdHgubGluZVRvKGNhbCg0NTUpLCBjYWwoMzYpICogNClcbiAgICBjdHguZmlsbFRleHQoJ+WFtuS7luesrOS4ieaWuScsIGNhbCg0MDUpLCBjYWwoMzYpICogMiArIGNhbCgyNCkpXG5cbiAgICBjdHgubW92ZVRvKGNhbCg3MTApLCAwKVxuICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikgKiA0KVxuICAgIGN0eC5maWxsVGV4dCgn5Y+R56Wo5Y+356CBJywgY2FsKDQwNSksIGNhbCgzNikgKiAzICsgY2FsKDI0KSlcblxuICAgIGN0eC5tb3ZlVG8oMCwgMClcbiAgICBjdHgubGluZVRvKDAsIGNhbCgzNikgKiA0KVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMTAwKSwgMClcbiAgICBjdHgubGluZVRvKGNhbCgxMDApLCBjYWwoMzYpICogNClcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDE5MCksIDApXG4gICAgY3R4LmxpbmVUbyhjYWwoMTkwKSwgY2FsKDM2KSlcblxuICAgIGxldCB0aXRsZSA9IFsn6K6w6LSmJywgJ+WHuue6sycsICflrqHmoLgnLCAn5Yi25Y2VJ11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgY3R4LmZpbGxUZXh0KHRpdGxlW2ldLCBjYWwoMTkwICsgMTMwICogaSArIDI1KSwgY2FsKDI0KSApXG4gICAgICBjdHgubW92ZVRvKGNhbCgxOTAgKyAxMzAgKiBpICsgNTApLCAwKVxuICAgICAgY3R4LmxpbmVUbyhjYWwoMTkwICsgMTMwICogaSArIDUwKSwgY2FsKDM2KSlcbiAgICAgIGN0eC5tb3ZlVG8oY2FsKDE5MCArIDEzMCAqIGkgKyAxMzApLCAwKVxuICAgICAgY3R4LmxpbmVUbyhjYWwoMTkwICsgMTMwICogaSArIDEzMCksIGNhbCgzNikpXG4gICAgfVxuICAgIGN0eC5zdHJva2UoKVxuXG4gICAgY3R4LmZpbGxUZXh0KHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJJbmZvLm5pY2tOYW1lLCBjYWwoMTkwICsgMTMwICogMyArIDkwKSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuSW52b2ljZU51bSwgY2FsKDU4MiksIGNhbCgyNCkgKyBjYWwoMzYpICogMylcbiAgICB0aGlzLnJlc3VsdC5iZWxvbmdQcm9qZWN0ICYmIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5iZWxvbmdQcm9qZWN0LCBjYWwoMjI4KSwgY2FsKDI0KSArIGNhbCgzNikgKiAzKVxuXG4gICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LlNlbGxlck5hbWUsIGNhbCgyMjgpLCBjYWwoMjQpICsgY2FsKDM2KSAqIDIpXG4gICAgdGhpcy5yZXN1bHQucGVyc29uTmFtZSAmJiBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQucGVyc29uTmFtZSwgY2FsKDU4MiksIGNhbCgyNCkgKyBjYWwoMzYpKVxuICAgIHRoaXMucmVzdWx0Lm90aGVyTmFtZSAmJiBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQub3RoZXJOYW1lLCBjYWwoNTgyKSwgY2FsKDI0KSArIGNhbCgzNikgKiAyKVxuXG4gICAgY3R4LmRyYXcodHJ1ZSwgKCkgPT4ge1xuICAgICAgd3guY2FudmFzVG9UZW1wRmlsZVBhdGgoe1xuICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgeTogMCxcbiAgICAgICAgICB3aWR0aDogY2FsKDc1MCksXG4gICAgICAgICAgaGVpZ2h0OiBjYWwoMTIwKSArICg4ICsgMiAqIHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoKSAqIGNhbCgzNiksXG4gICAgICAgICAgY2FudmFzSWQ6ICdjYW52YXNJZCcsLy9jYW52YXNJZOWSjOagh+etvumHjOmdoueahGlk5a+55bqUXG4gICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICAvL+WwhuiOt+WPluWIsOeahOWbvueJh+S4tOaXtui3r+W+hHNldOWIsGNhbnZhc1NhdmVpbWfkuK1cbiAgICAgICAgICAgICAgdGhhdC50ZW1wRmlsZVBhdGggPSByZXMudGVtcEZpbGVQYXRoXG4gICAgICAgICAgICAgIHRoYXQuJGFwcGx5KClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6IChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG4iXX0=