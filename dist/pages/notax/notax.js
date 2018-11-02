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
      ctx.fillText(year + ' 年 ' + month + ' 月 ' + day + ' 号      记字第 ' + Date.now().toString().substr(6) + Math.random().toFixed(4) * 10000 + ' 号', cal(0), cal(22));

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
        ctx.fillText(temp.code, cal(265), cal(24) + _i2 * cal(36));
        if (ctx.measureText(temp.name).width >= 0.9 * cal(130)) {
          lineWrap(ctx, temp.name, cal(14), cal(14), cal(130), cal(395), cal(2) + _i2 * cal(36));
        } else {
          ctx.fillText(temp.name, cal(395), cal(24) + _i2 * cal(36));
        }
        ctx.fillText(this.result.CommodityAmount[_i2].word, cal(522), cal(24) + _i2 * cal(36));

        // ctx.fillText('2221.01.06', cal(265), cal(24) + (1 + 2 * i) * cal(36))
        // ctx.fillText('待认证进项税', cal(395), cal(24) + (1 + 2 * i) * cal(36))
        // ctx.fillText(lineWrap(), cal(395), cal(24) + 2 * cal(36))
        // ctx.fillText(this.result.CommodityTax[i].word, cal(522), cal(24) + (1 + 2 * i) * cal(36))
      }

      // 价税合计
      switch (this.result.pay) {
        case '公司':
          ctx.fillText('2202', cal(265), cal(24) + this.result.CommodityName.length * cal(36));
          ctx.fillText('应收账款', cal(395), cal(24) + this.result.CommodityName.length * cal(36));
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


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Purchase , 'pages/notax/notax'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGF4LmpzIl0sIm5hbWVzIjpbIlB1cmNoYXNlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwid2lkdGgiLCJoZWlnaHQiLCJyZXN1bHQiLCJ0ZW1wRmlsZVBhdGgiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJoYW5sZGVTYXZlUGljIiwiX3NlbGYiLCJ3eCIsImdldEltYWdlSW5mbyIsInNyYyIsInN1Y2Nlc3MiLCJyZXMxIiwic2F2ZUltYWdlVG9QaG90b3NBbGJ1bSIsImZpbGVQYXRoIiwicGF0aCIsInJlczIiLCJjb25zb2xlIiwibG9nIiwiZmFpbCIsImVyciIsImhhbmRsZUNhbmNlbCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwib3B0aW9ucyIsIkpTT04iLCJwYXJzZSIsInRoYXQiLCJnZXRTeXN0ZW1JbmZvIiwicmVzIiwid2luZG93V2lkdGgiLCJjYWwiLCJweCIsImxpbmVXcmFwIiwiY3R4Iiwic3RyIiwiZm9udHNpemUiLCJsaW5laGVpZ2h0IiwieCIsInkiLCJzZXRGb250U2l6ZSIsInRleHRBcnIiLCJpbmRleCIsImkiLCJsZW5ndGgiLCJtZWFzdXJlVGV4dCIsInN1YnN0cmluZyIsInB1c2giLCJmaWxsVGV4dCIsImNyZWF0ZUNhbnZhc0NvbnRleHQiLCJzZXRGaWxsU3R5bGUiLCJmaWxsUmVjdCIsIkNvbW1vZGl0eU5hbWUiLCJzZXRUZXh0QWxpZ24iLCJkYXRlIiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwidHJhbnNsYXRlIiwibm93IiwidG9TdHJpbmciLCJzdWJzdHIiLCJNYXRoIiwicmFuZG9tIiwidG9GaXhlZCIsInNldFN0cm9rZVN0eWxlIiwic3Ryb2tlUmVjdCIsInJvdyIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsImRpc2NyaXB0aW9uIiwidGVtcCIsIndvcmQiLCJzb3VyY2UiLCJDb21tb2RpdHlBbW91bnQiLCJjb2RlIiwibmFtZSIsInBheSIsIkFtb3VudEluRmlndWVycyIsImJlZ2luUGF0aCIsImxlZnRUaXRsZSIsInRpdGxlIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsIm5pY2tOYW1lIiwiSW52b2ljZU51bSIsImJlbG9uZ1Byb2plY3QiLCJTZWxsZXJOYW1lIiwicGVyc29uTmFtZSIsIm90aGVyTmFtZSIsImRyYXciLCJjYW52YXNUb1RlbXBGaWxlUGF0aCIsImNhbnZhc0lkIiwiJGFwcGx5Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFJYkMsSSxHQUFPO0FBQ0xDLGFBQU8sQ0FERjtBQUVMQyxjQUFRLENBRkg7QUFHTEMsY0FBUSxFQUhIO0FBSUxDLG9CQUFjO0FBSlQsSyxRQU9QQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUkMsbUJBRFEsMkJBQ1M7QUFDZixZQUFJQyxRQUFRLElBQVo7QUFDSUMsV0FBR0MsWUFBSCxDQUFnQjtBQUNkQyxlQUFLSCxNQUFNSixZQURHO0FBRWRRLGlCQUZjLG1CQUVMQyxJQUZLLEVBRUM7QUFDYkosZUFBR0ssc0JBQUgsQ0FBMEI7QUFDdEJDLHdCQUFVRixLQUFLRyxJQURPO0FBRXRCSix1QkFBUyxpQkFBVUssSUFBVixFQUFnQjtBQUN2QkMsd0JBQVFDLEdBQVIsQ0FBWUYsSUFBWjtBQUNELGVBSnFCO0FBS3RCRyxvQkFBTSxjQUFVQyxHQUFWLEVBQWU7QUFDbkJILHdCQUFRQyxHQUFSLENBQVlFLEdBQVo7QUFDRDtBQVBxQixhQUExQjtBQVNEO0FBWmEsU0FBaEI7QUFjTCxPQWpCTztBQWtCUkMsa0JBbEJRLDBCQWtCUTtBQUNkYixXQUFHYyxZQUFILENBQWdCO0FBQ1pDLGlCQUFPO0FBREssU0FBaEI7QUFHRDtBQXRCTyxL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QUFJLEVBQUosQ0FKNUM7QUFLcEJtRSxvQkFBVSxVQUxVLEVBS0M7QUFDckJ2RixtQkFBUyxpQkFBQ2tCLEdBQUQsRUFBUztBQUNkO0FBQ0FGLGlCQUFLeEIsWUFBTCxHQUFvQjBCLElBQUkxQixZQUF4QjtBQUNBd0IsaUJBQUt3RSxNQUFMO0FBQ0gsV0FWbUI7QUFXcEJoRixnQkFBTSxjQUFDQyxHQUFELEVBQVM7QUFDYkgsb0JBQVFDLEdBQVIsQ0FBWUUsR0FBWjtBQUNEO0FBYm1CLFNBQXhCO0FBZUQsT0FoQkQ7QUFpQkQ7Ozs7RUF2Vm1DZ0YsZUFBS0MsSTs7a0JBQXRCMUcsUSIsImZpbGUiOiJub3RheC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB1dGlsIGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFB1cmNoYXNlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflh63or4EnXG4gIH1cbiAgY29tcG9uZW50cyA9IHtcblxuICB9XG5cbiAgZGF0YSA9IHtcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgcmVzdWx0OiB7fSxcbiAgICB0ZW1wRmlsZVBhdGg6ICcnXG4gIH1cblxuICBjb21wdXRlZCA9IHt9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBoYW5sZGVTYXZlUGljICgpIHtcbiAgICAgIGxldCBfc2VsZiA9IHRoaXNcbiAgICAgICAgICB3eC5nZXRJbWFnZUluZm8oe1xuICAgICAgICAgICAgc3JjOiBfc2VsZi50ZW1wRmlsZVBhdGgsXG4gICAgICAgICAgICBzdWNjZXNzIChyZXMxKSB7XG4gICAgICAgICAgICAgIHd4LnNhdmVJbWFnZVRvUGhvdG9zQWxidW0oe1xuICAgICAgICAgICAgICAgICAgZmlsZVBhdGg6IHJlczEucGF0aCxcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlczIpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgaGFuZGxlQ2FuY2VsICgpIHtcbiAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgZGVsdGE6IDFcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgdGhpcy5yZXN1bHQgPSBKU09OLnBhcnNlKG9wdGlvbnMucmVzdWx0KVxuICAgIC8vIHRoaXMucmVzdWx0ID0ge1xuICAgIC8vICAgXCJJbnZvaWNlTnVtXCI6IFwiMzIzMzA3MzlcIixcbiAgICAvLyAgIFwiU2VsbGVyTmFtZVwiOiBcIuWMl+S6rOWGoOaciOmkkOmlrueuoeeQhuaciemZkOWFrOWPuFwiLFxuICAgIC8vICAgXCJDb21tb2RpdHlUYXhSYXRlXCI6IFt7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIjYlXCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMVwiXG4gICAgLy8gICB9XSxcbiAgICAvLyAgIFwiU2VsbGVyQmFua1wiOiBcIuWMl+S6rOW4gua1t+a3gOWMuuS4reWFs+adkeS4nOi3rzHlj7fpmaIy5Y+35qW8MTAx5a6kNjI3OTg5ODhcIixcbiAgICAvLyAgIFwiQ2hlY2tlclwiOiBcIlwiLFxuICAgIC8vICAgXCJUb3RhbEFtb3VudFwiOiBcIjE4NjQ3LjE3XCIsXG4gICAgLy8gICBcIkNvbW1vZGl0eUFtb3VudFwiOiBbe1xuICAgIC8vICAgICBcIndvcmRcIjogXCIxODQ3LjE3XCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMVwiXG4gICAgLy8gICB9LCB7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIjE4NjQ3LjE3XCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMlwiXG4gICAgLy8gICB9XSxcbiAgICAvLyAgIFwiSW52b2ljZURhdGVcIjogXCIyMDE45bm0MDjmnIgxOeaXpVwiLFxuICAgIC8vICAgXCJDb21tb2RpdHlUYXhcIjogW3tcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiMTExOC44M1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfSwge1xuICAgIC8vICAgICBcIndvcmRcIjogXCIxNzM4LjgzXCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMlwiXG4gICAgLy8gICB9XSxcbiAgICAvLyAgIFwiUHVyY2hhc2VyTmFtZVwiOiBcIuS4iua1t+acieeVpeaVmeiCsuenkeaKgOaciemZkOWFrOWPuFwiLFxuICAgIC8vICAgXCJDb21tb2RpdHlOdW1cIjogW3tcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiXCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMVwiXG4gICAgLy8gICB9XSxcbiAgICAvLyAgIFwiUHVyY2hhc2VyQmFua1wiOiBcIlwiLFxuICAgIC8vICAgXCJSZW1hcmtzXCI6IFwi5qCh6aqM56CBMDAzNDU4MDIyNTZcIixcbiAgICAvLyAgIFwiUGFzc3dvcmRcIjogXCI1Mi8vNTUwMSsxNDkwNi0rMDM8LTMwODQtODk8OTgwNzE5PisyNS00KzYzODY3PDgzPCswMzAxLSowMSs5PCowLzkwPC80Ni08MDI5ODg0PjU0LTI4Pj4wMzkvKy8zNiorOTMvNzg1PjA0PlwiLFxuICAgIC8vICAgXCJTZWxsZXJBZGRyZXNzXCI6IFwi5Y+3MTAx5a6kNjI3OTg5ODg5MTFcIixcbiAgICAvLyAgIFwiUHVyY2hhc2VyQWRkcmVzc1wiOiBcIlwiLFxuICAgIC8vICAgXCJJbnZvaWNlQ29kZVwiOiBcIjAxMTAwMTgwMDEwNFwiLFxuICAgIC8vICAgXCJDb21tb2RpdHlVbml0XCI6IFt7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIlwiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfV0sXG4gICAgLy8gICBcIlBheWVlXCI6IFwi55SE5am3XCIsXG4gICAgLy8gICBcIlB1cmNoYXNlclJlZ2lzdGVyTnVtXCI6IFwiOTEzMTAxMTBNQUcwV05cIixcbiAgICAvLyAgIFwiQ29tbW9kaXR5UHJpY2VcIjogW3tcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiXCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMVwiXG4gICAgLy8gICB9XSxcbiAgICAvLyAgIFwiTm90ZURyYXdlclwiOiBcIumhvuaWsOadsFwiLFxuICAgIC8vICAgXCJBbW91bnRJbldvcmRzXCI6IFwi5LiH5Luf5p+S5L2w6ZmG5ou+6ZmG5ZyG5pW0XCIsXG4gICAgLy8gICBcIkFtb3VudEluRmlndWVyc1wiOiBcIjE5NzY2LjAwXCIsXG4gICAgLy8gICBcIlRvdGFsVGF4XCI6IFwiMTExOC4zMFwiLFxuICAgIC8vICAgXCJJbnZvaWNlVHlwZVwiOiBcIuS4k+eUqOWPkeelqFwiLFxuICAgIC8vICAgXCJTZWxsZXJSZWdpc3Rlck51bVwiOiBcIjkxMTEwMTA4Nzk3NTgzNDMzOFwiLFxuICAgIC8vICAgXCJDb21tb2RpdHlOYW1lXCI6IFt7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIuacjeWKoeWZqFwiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfSwge1xuICAgIC8vICAgICBcIndvcmRcIjogXCLmiavlnLDmnLpcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIyXCJcbiAgICAvLyAgIH1dLFxuICAgIC8vICAgXCJDb21tb2RpdHlUeXBlXCI6IFt7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIlwiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfV0sXG4gICAgLy8gICBcIkNoZWNrQ29kZVwiOiBcIjAwMzQ1ODAyMjU2MTk1OTA5NDlcIixcbiAgICAvLyAgIFwiaWRlbnRpdHlcIjogXCLotK3kubDmlrlcIixcbiAgICAvLyAgIFwicGF5XCI6IFwi5YWs5Y+4XCIsXG4gICAgLy8gICBcInNvdXJjZVwiOiBcIuS4muWKoeaLm+W+hVwiLFxuICAgIC8vICAgXCJwZXJzb25OYW1lXCI6IFwi5byg5LiJ5ZWKXCIsXG4gICAgLy8gICBcImRpc2NyaXB0aW9uXCI6IFwi5oiR5p2l6Ieq5Lit5Zu977yM5oiR5YaNZGprZGtq55u05pKt77yM5oiR5b6X6L+H5LiW55WM5Yag5Yab77yM5oiR5Lmf5Yqe6L+H6L2sLOS9oOimgemineS9oOmDveiDveiusOW+l+eci+aal+WPt+mDveS8mlwiLFxuICAgIC8vICAgXCJiZWxvbmdQcm9qZWN0XCI6IFwi5aSp5Zyw5aSn5ZCMXCJcbiAgICAvLyB9XG5cbiAgICBsZXQgdGhhdCA9IHRoaXNcblxuICAgIC8vIOiOt+WPluWxj+W5leWuvVxuICAgIHd4LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgdGhhdC53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgICAvLyB0aGF0LmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgIH1cbiAgICB9KVxuXG5cbi8vIOWHveaVsOWumuS5ieWMuuWfnyA9PT09PT09PT09PT09PT09PT09XG4gICAgLy8g6K6+572u5LiA5Liq5Z+65YeG5q+U5L6LXG4gICAgbGV0IGNhbCA9IChweCkgPT4ge1xuICAgICAgcmV0dXJuICBweCAvIDM3NSAqIHRoYXQud2lkdGhcbiAgICB9XG5cbiAgICAvLyBjYW52YXPmjaLooYzmmL7npLpcbiAgICBsZXQgbGluZVdyYXAgPSAoY3R4LCBzdHIsIGZvbnRzaXplLCBsaW5laGVpZ2h0LCB3aWR0aCwgeCwgeSkgPT4ge1xuICAgICAgY3R4LnNldEZvbnRTaXplKGZvbnRzaXplKVxuICAgICAgbGV0IHRleHRBcnIgPSBbXVxuICAgICAgbGV0IGluZGV4ID0gMFxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGN0eC5tZWFzdXJlVGV4dChzdHIuc3Vic3RyaW5nKGluZGV4LCBpKSkud2lkdGggPj0gd2lkdGggKiAwLjgpIHtcbiAgICAgICAgICB0ZXh0QXJyLnB1c2goc3RyLnN1YnN0cmluZyhpbmRleCwgaSkpXG4gICAgICAgICAgaW5kZXggPSBpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGV4dEFyci5wdXNoKHN0ci5zdWJzdHJpbmcoaW5kZXgpKVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHRBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRleHRBcnJbaV0sIHgsIHkgKyBsaW5laGVpZ2h0ICogKGkgKyAxKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjdHggPSB3eC5jcmVhdGVDYW52YXNDb250ZXh0KCdjYW52YXNJZCcpXG5cbiAgICBjdHguc2V0RmlsbFN0eWxlKCd3aGl0ZScpXG4gICAgY3R4LmZpbGxSZWN0KGNhbCgwKSwgY2FsKDApLCBjYWwoNzUwKSwgY2FsKDEyMCkgKyAoOSArIHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoKSAqIGNhbCgzNikpXG4gICAgY3R4LnNldEZpbGxTdHlsZSgnYmxhY2snKVxuXG4gICAgLy8g5qCH6aKYXG4gICAgY3R4LnNldEZvbnRTaXplKGNhbCgyMykpXG4gICAgY3R4LnNldFRleHRBbGlnbignY2VudGVyJylcbiAgICBjdHguZmlsbFRleHQoJ+iusOi0puWHreivgScsIGNhbCgzNzUpLCBjYWwoNDApKVxuXG4gICAgLy8g5pe26Ze05Y+K57yW5Y+3XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgICBsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxXG4gICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpXG4gICAgY3R4LnRyYW5zbGF0ZShjYWwoNzMwKSwgY2FsKDcwKSlcbiAgICBjdHguc2V0Rm9udFNpemUoY2FsKDEzKSlcbiAgICBjdHguc2V0VGV4dEFsaWduKCdyaWdodCcpXG4gICAgY3R4LmZpbGxUZXh0KHllYXIgKyAnIOW5tCAnICsgbW9udGggKyAnIOaciCAnICsgZGF5ICsgJyDlj7cgICAgICDorrDlrZfnrKwgJyArIERhdGUubm93KCkudG9TdHJpbmcoKS5zdWJzdHIoNikgKyBNYXRoLnJhbmRvbSgpLnRvRml4ZWQoNCkqMTAwMDAgKyAnIOWPtycsIGNhbCgwKSwgY2FsKDIyKSlcblxuICAgIC8vIOihqOagvFxuICAgIC8vIOWkluahhlxuICAgIGN0eC50cmFuc2xhdGUoY2FsKC03MTApLCBjYWwoNTApKVxuICAgIGN0eC5zZXRTdHJva2VTdHlsZSgnIzAwMCcpXG4gICAgY3R4LnN0cm9rZVJlY3QoMCwgMCwgY2FsKDcxMCksIGNhbCgzNikgKiAodGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKyAzKSlcblxuICAgIC8vIOWGheahhlxuICAgIGxldCByb3cgPSB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCArIDNcbiAgICBmb3IgKGxldCBpID0gMjsgaSA8IHJvdyAtIDE7IGkrKykge1xuICAgICAgY3R4LnNldFN0cm9rZVN0eWxlKCcjOTk5JylcbiAgICAgIGN0eC5tb3ZlVG8oY2FsKDIwMCksIGNhbCgzNikgKiBpKVxuICAgICAgY3R4LmxpbmVUbyhjYWwoNzEwKSwgY2FsKDM2KSAqIGkpXG4gICAgICBjdHguc3Ryb2tlKClcbiAgICB9XG5cbiAgICBjdHgubW92ZVRvKDAsIGNhbCgzNikpXG4gICAgY3R4LmxpbmVUbyhjYWwoNzEwKSwgY2FsKDM2KSlcblxuICAgIGN0eC5tb3ZlVG8oMCwgY2FsKDM2KSAqIChyb3cgLTEpKVxuICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikgKiAocm93IC0xKSlcblxuICAgIGN0eC5tb3ZlVG8oMCwgY2FsKDM2KSAqIHJvdylcbiAgICBjdHgubGluZVRvKGNhbCg3MTApLCBjYWwoMzYpICogcm93KVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMjAwKSwgMClcbiAgICBjdHgubGluZVRvKGNhbCgyMDApLCBjYWwoMzYpICogKHJvdyAtMSkpXG5cbiAgICBjdHgubW92ZVRvKGNhbCgzMzApLCBjYWwoMTgpKVxuICAgIGN0eC5saW5lVG8oY2FsKDMzMCksIGNhbCgzNikgKiAocm93IC0gMSkpXG5cbiAgICBjdHgubW92ZVRvKGNhbCgyMDApLCBjYWwoMTgpKVxuICAgIGN0eC5saW5lVG8oY2FsKDQ2MCksIGNhbCgxOCkpXG5cbiAgICBjdHgubW92ZVRvKGNhbCg0NjApLCAwKVxuICAgIGN0eC5saW5lVG8oY2FsKDQ2MCksIGNhbCgzNikgKiByb3cpXG5cbiAgICBjdHgubW92ZVRvKGNhbCg1ODUpLCAwKVxuICAgIGN0eC5saW5lVG8oY2FsKDU4NSksIGNhbCgzNikgKiByb3cpXG5cbiAgICBjdHguc3Ryb2tlKClcblxuICAgIC8vIOihqOWktFxuICAgIGN0eC5zZXRGb250U2l6ZShjYWwoMTUpKVxuICAgIGN0eC5zZXRUZXh0QWxpZ24oJ2NlbnRlcicpXG4gICAgY3R4LmZpbGxUZXh0KCfmkZjopoEnLCBjYWwoMTAwKSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQoJ+WAn+aWuemHkeminScsIGNhbCg1MjIpLCBjYWwoMjQpKVxuICAgIGN0eC5maWxsVGV4dCgn6LS35pa56YeR6aKdJywgY2FsKDY0NiksIGNhbCgyNCkpXG5cbiAgICBjdHguc2V0Rm9udFNpemUoY2FsKDE0KSlcbiAgICBjdHguZmlsbFRleHQoJ+S8muiuoeenkeebricsIGNhbCgzMzApLCBjYWwoMTUpKVxuICAgIGN0eC5maWxsVGV4dCgn56eR55uu5Luj56CBJywgY2FsKDI2NSksIGNhbCgzMykpXG4gICAgY3R4LmZpbGxUZXh0KCfnp5Hnm67lkI3np7AnLCBjYWwoMzk1KSwgY2FsKDMzKSlcblxuICAgIC8vIOWGheWuuemDqOWIhlxuICAgIC8vIOaRmOimgeWGheWuuVxuICAgIGN0eC50cmFuc2xhdGUoMCwgY2FsKDM2KSlcbiAgICBjdHguc2V0VGV4dEFsaWduKCdsZWZ0JylcbiAgICBsaW5lV3JhcChjdHgsIHRoaXMucmVzdWx0LmRpc2NyaXB0aW9uLCBjYWwoMTQpLCBjYWwoMTYpLCBjYWwoMTYwKSwgY2FsKDIwKSwgY2FsKDEwKSlcblxuICAgIGN0eC5zZXRUZXh0QWxpZ24oJ2NlbnRlcicpXG4gICAgLy8g54mp5ZOB44CB5pyN5Yqh562JXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdGVtcCA9IHV0aWwodGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZVtpXS53b3JkLCB0aGlzLnJlc3VsdC5zb3VyY2UsIHRoaXMucmVzdWx0LkNvbW1vZGl0eUFtb3VudFtpXS53b3JkKVxuICAgICAgY3R4LmZpbGxUZXh0KHRlbXAuY29kZSwgY2FsKDI2NSksIGNhbCgyNCkgKyBpICogY2FsKDM2KSlcbiAgICAgIGlmIChjdHgubWVhc3VyZVRleHQodGVtcC5uYW1lKS53aWR0aCA+PSAwLjkgKiBjYWwoMTMwKSkge1xuICAgICAgICBsaW5lV3JhcChjdHgsIHRlbXAubmFtZSwgY2FsKDE0KSwgY2FsKDE0KSwgY2FsKDEzMCksIGNhbCgzOTUpLCBjYWwoMikgKyBpICogY2FsKDM2KSApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdHguZmlsbFRleHQodGVtcC5uYW1lLCBjYWwoMzk1KSwgY2FsKDI0KSArIGkgKiBjYWwoMzYpKVxuICAgICAgfVxuICAgICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LkNvbW1vZGl0eUFtb3VudFtpXS53b3JkLCBjYWwoNTIyKSwgY2FsKDI0KSArIGkgKiBjYWwoMzYpKVxuXG4gICAgICAvLyBjdHguZmlsbFRleHQoJzIyMjEuMDEuMDYnLCBjYWwoMjY1KSwgY2FsKDI0KSArICgxICsgMiAqIGkpICogY2FsKDM2KSlcbiAgICAgIC8vIGN0eC5maWxsVGV4dCgn5b6F6K6k6K+B6L+b6aG556iOJywgY2FsKDM5NSksIGNhbCgyNCkgKyAoMSArIDIgKiBpKSAqIGNhbCgzNikpXG4gICAgICAvLyBjdHguZmlsbFRleHQobGluZVdyYXAoKSwgY2FsKDM5NSksIGNhbCgyNCkgKyAyICogY2FsKDM2KSlcbiAgICAgIC8vIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5Db21tb2RpdHlUYXhbaV0ud29yZCwgY2FsKDUyMiksIGNhbCgyNCkgKyAoMSArIDIgKiBpKSAqIGNhbCgzNikpXG4gICAgfVxuXG4gICAgLy8g5Lu356iO5ZCI6K6hXG4gICAgc3dpdGNoICh0aGlzLnJlc3VsdC5wYXkpIHtcbiAgICAgIGNhc2UgJ+WFrOWPuCc6XG4gICAgICAgICAgY3R4LmZpbGxUZXh0KCcyMjAyJywgY2FsKDI2NSksIGNhbCgyNCkgKyB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCAqIGNhbCgzNikpXG4gICAgICAgICAgY3R4LmZpbGxUZXh0KCflupTmlLbotKbmrL4nLCBjYWwoMzk1KSwgY2FsKDI0KSArIHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoICogY2FsKDM2KSlcbiAgICAgICAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuQW1vdW50SW5GaWd1ZXJzLCBjYWwoNjQ2KSwgY2FsKDI0KSArIHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoICogY2FsKDM2KSlcbiAgICAgICAgICBicmVha1xuICAgICAgY2FzZSAn5YWs5Y+45ZGY5belJzpcbiAgICAgICAgICBjdHguZmlsbFRleHQoJzIyNDEuMDEnLCBjYWwoMjY1KSwgY2FsKDI0KSArIHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoICogY2FsKDM2KSlcbiAgICAgICAgICBsaW5lV3JhcChjdHgsICflhbbku5blupTku5jmrL4t5ZGY5bel5oql6ZSAJywgY2FsKDE0KSwgY2FsKDE0KSwgY2FsKDEzMCksIGNhbCgzOTUpLCBjYWwoMikgKyB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCAqIGNhbCgzNikpXG4gICAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LkFtb3VudEluRmlndWVycywgY2FsKDY0NiksIGNhbCgyNCkgKyB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCAqIGNhbCgzNikpXG4gICAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ+WFtuS7luesrOS4ieaWuSc6XG4gICAgICAgICAgY3R4LmZpbGxUZXh0KCcyMjQxLjA0JywgY2FsKDI2NSksIGNhbCgyNCkgKyB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCAqIGNhbCgzNikpXG4gICAgICAgICAgbGluZVdyYXAoY3R4LCAn5YW25LuW5bqU5LuY5qy+LeWFtuS7luesrOS4ieaWueW+gOadpScsIGNhbCgxNCksIGNhbCgxNCksIGNhbCgxMzApLCBjYWwoMzk1KSwgY2FsKDIpICsgdGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKiBjYWwoMzYpKVxuICAgICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5BbW91bnRJbkZpZ3VlcnMsIGNhbCg2NDYpLCBjYWwoMjQpICsgdGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKiBjYWwoMzYpKVxuICAgICAgICAgIGJyZWFrXG4gICAgfVxuXG5cbiAgICAvLyDlkIjorqFcbiAgICBjdHgudHJhbnNsYXRlKDAsIGNhbCgzNikgKiAodGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKyAxKSlcbiAgICBjdHguZmlsbFRleHQoJ+WQiOiuoScsIGNhbCgyMzApLCBjYWwoMjQpKVxuICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5BbW91bnRJbkZpZ3VlcnMsIGNhbCg1MjIpLCBjYWwoMjQpKVxuICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5BbW91bnRJbkZpZ3VlcnMsIGNhbCg2NDYpLCBjYWwoMjQpKVxuXG4gICAgLy8g5L+h5oGv5qCPXG4gICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgLy8g6L655qGGXG4gICAgY3R4LnRyYW5zbGF0ZSgwLCBjYWwoMzYpKVxuICAgIGxldCBsZWZ0VGl0bGUgPSBbJ+S8muiuoeaAu+euoScsICflrqLmiLcnLCAn5L6b5bqU5ZWGJywgJ+mhueebriddXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSB7XG4gICAgICBjdHguZmlsbFRleHQobGVmdFRpdGxlW2kgLSAxXSwgY2FsKDUwKSwgY2FsKDI0KSArIChpIC0gMSkgKiBjYWwoMzYpKVxuICAgICAgY3R4Lm1vdmVUbygwLCBjYWwoMzYpICogaSlcbiAgICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikgKiBpKVxuICAgIH1cblxuICAgIGN0eC5tb3ZlVG8oY2FsKDM1NSksIGNhbCgzNikpXG4gICAgY3R4LmxpbmVUbyhjYWwoMzU1KSwgY2FsKDM2KSAqIDQpXG4gICAgY3R4LmZpbGxUZXh0KCflkZjlt6UnLCBjYWwoNDA1KSwgY2FsKDM2KSArIGNhbCgyNCkpXG5cbiAgICBjdHgubW92ZVRvKGNhbCg0NTUpLCBjYWwoMzYpKVxuICAgIGN0eC5saW5lVG8oY2FsKDQ1NSksIGNhbCgzNikgKiA0KVxuICAgIGN0eC5maWxsVGV4dCgn5YW25LuW56ys5LiJ5pa5JywgY2FsKDQwNSksIGNhbCgzNikgKiAyICsgY2FsKDI0KSlcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDcxMCksIDApXG4gICAgY3R4LmxpbmVUbyhjYWwoNzEwKSwgY2FsKDM2KSAqIDQpXG4gICAgY3R4LmZpbGxUZXh0KCflj5Hnpajlj7fnoIEnLCBjYWwoNDA1KSwgY2FsKDM2KSAqIDMgKyBjYWwoMjQpKVxuXG4gICAgY3R4Lm1vdmVUbygwLCAwKVxuICAgIGN0eC5saW5lVG8oMCwgY2FsKDM2KSAqIDQpXG5cbiAgICBjdHgubW92ZVRvKGNhbCgxMDApLCAwKVxuICAgIGN0eC5saW5lVG8oY2FsKDEwMCksIGNhbCgzNikgKiA0KVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMTkwKSwgMClcbiAgICBjdHgubGluZVRvKGNhbCgxOTApLCBjYWwoMzYpKVxuXG4gICAgbGV0IHRpdGxlID0gWyforrDotKYnLCAn5Ye657qzJywgJ+WuoeaguCcsICfliLbljZUnXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICBjdHguZmlsbFRleHQodGl0bGVbaV0sIGNhbCgxOTAgKyAxMzAgKiBpICsgMjUpLCBjYWwoMjQpIClcbiAgICAgIGN0eC5tb3ZlVG8oY2FsKDE5MCArIDEzMCAqIGkgKyA1MCksIDApXG4gICAgICBjdHgubGluZVRvKGNhbCgxOTAgKyAxMzAgKiBpICsgNTApLCBjYWwoMzYpKVxuICAgICAgY3R4Lm1vdmVUbyhjYWwoMTkwICsgMTMwICogaSArIDEzMCksIDApXG4gICAgICBjdHgubGluZVRvKGNhbCgxOTAgKyAxMzAgKiBpICsgMTMwKSwgY2FsKDM2KSlcbiAgICB9XG4gICAgY3R4LnN0cm9rZSgpXG5cbiAgICBjdHguZmlsbFRleHQodGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlckluZm8ubmlja05hbWUsIGNhbCgxOTAgKyAxMzAgKiAzICsgOTApLCBjYWwoMjQpKVxuICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5JbnZvaWNlTnVtLCBjYWwoNTgyKSwgY2FsKDI0KSArIGNhbCgzNikgKiAzKVxuICAgIHRoaXMucmVzdWx0LmJlbG9uZ1Byb2plY3QgJiYgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LmJlbG9uZ1Byb2plY3QsIGNhbCgyMjgpLCBjYWwoMjQpICsgY2FsKDM2KSAqIDMpXG5cbiAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuU2VsbGVyTmFtZSwgY2FsKDIyOCksIGNhbCgyNCkgKyBjYWwoMzYpICogMilcbiAgICB0aGlzLnJlc3VsdC5wZXJzb25OYW1lICYmIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5wZXJzb25OYW1lLCBjYWwoNTgyKSwgY2FsKDI0KSArIGNhbCgzNikpXG4gICAgdGhpcy5yZXN1bHQub3RoZXJOYW1lICYmIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5vdGhlck5hbWUsIGNhbCg1ODIpLCBjYWwoMjQpICsgY2FsKDM2KSAqIDIpXG5cbiAgICBjdHguZHJhdyh0cnVlLCAoKSA9PiB7XG4gICAgICB3eC5jYW52YXNUb1RlbXBGaWxlUGF0aCh7XG4gICAgICAgICAgeDogMCxcbiAgICAgICAgICB5OiAwLFxuICAgICAgICAgIHdpZHRoOiBjYWwoNzUwKSxcbiAgICAgICAgICBoZWlnaHQ6IGNhbCgxMjApICsgKDggKyAyICogdGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGgpICogY2FsKDM2KSxcbiAgICAgICAgICBjYW52YXNJZDogJ2NhbnZhc0lkJywvL2NhbnZhc0lk5ZKM5qCH562+6YeM6Z2i55qEaWTlr7nlupRcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgIC8v5bCG6I635Y+W5Yiw55qE5Zu+54mH5Li05pe26Lev5b6Ec2V05YiwY2FudmFzU2F2ZWltZ+S4rVxuICAgICAgICAgICAgICB0aGF0LnRlbXBGaWxlUGF0aCA9IHJlcy50ZW1wRmlsZVBhdGhcbiAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDogKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==