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
        ctx.fillText(this.result.CommodityAmount[_i2].word, cal(522), cal(24) + _i2 * cal(36));

        // ctx.fillText('2221.01.06', cal(265), cal(24) + (1 + 2 * i) * cal(36))
        // ctx.fillText('待认证进项税', cal(395), cal(24) + (1 + 2 * i) * cal(36))
        // ctx.fillText(lineWrap(), cal(395), cal(24) + 2 * cal(36))
        // ctx.fillText(this.result.CommodityTax[i].word, cal(522), cal(24) + (1 + 2 * i) * cal(36))
      }

      if (this.result && this.result.CommodityAmount) {
        var total = 0;
        this.result.CommodityAmount.forEach(function (item) {
          total += Number(item.word);
        });
        this.result.AmountInFiguers = total.toFixed(2);
      }

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

  return Purchase;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Purchase , 'pages/notax/notax'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGF4LmpzIl0sIm5hbWVzIjpbIlB1cmNoYXNlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwid2lkdGgiLCJoZWlnaHQiLCJyZXN1bHQiLCJ0ZW1wRmlsZVBhdGgiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJoYW5sZGVTYXZlUGljIiwiX3NlbGYiLCJ3eCIsImdldEltYWdlSW5mbyIsInNyYyIsInN1Y2Nlc3MiLCJyZXMxIiwic2F2ZUltYWdlVG9QaG90b3NBbGJ1bSIsImZpbGVQYXRoIiwicGF0aCIsInJlczIiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsImZhaWwiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2FuY2VsIiwib3B0aW9ucyIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwiSlNPTiIsInBhcnNlIiwidGhhdCIsImdldFN5c3RlbUluZm8iLCJyZXMiLCJ3aW5kb3dXaWR0aCIsImNhbCIsInB4IiwibGluZVdyYXAiLCJjdHgiLCJzdHIiLCJmb250c2l6ZSIsImxpbmVoZWlnaHQiLCJ4IiwieSIsInNldEZvbnRTaXplIiwidGV4dEFyciIsImluZGV4IiwiaSIsImxlbmd0aCIsIm1lYXN1cmVUZXh0Iiwic3Vic3RyaW5nIiwicHVzaCIsImZpbGxUZXh0IiwiY3JlYXRlQ2FudmFzQ29udGV4dCIsInNldEZpbGxTdHlsZSIsImZpbGxSZWN0IiwiQ29tbW9kaXR5TmFtZSIsInNldFRleHRBbGlnbiIsImRhdGUiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJ0cmFuc2xhdGUiLCJub3ciLCJ0b1N0cmluZyIsInN1YnN0ciIsIk1hdGgiLCJyYW5kb20iLCJzcGxpdCIsInNldFN0cm9rZVN0eWxlIiwic3Ryb2tlUmVjdCIsInJvdyIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsImRpc2NyaXB0aW9uIiwidGVtcCIsIndvcmQiLCJzb3VyY2UiLCJDb21tb2RpdHlBbW91bnQiLCJjb2RlIiwibmFtZSIsInRvdGFsIiwiZm9yRWFjaCIsIml0ZW0iLCJOdW1iZXIiLCJBbW91bnRJbkZpZ3VlcnMiLCJ0b0ZpeGVkIiwicGF5IiwiYmVnaW5QYXRoIiwibGVmdFRpdGxlIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsIm5pY2tOYW1lIiwiSW52b2ljZU51bSIsImJlbG9uZ1Byb2plY3QiLCJTZWxsZXJOYW1lIiwicGVyc29uTmFtZSIsIm90aGVyTmFtZSIsImRyYXciLCJjYW52YXNUb1RlbXBGaWxlUGF0aCIsImNhbnZhc0lkIiwiaGlkZVRvYXN0IiwiJGFwcGx5Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFJYkMsSSxHQUFPO0FBQ0xDLGFBQU8sQ0FERjtBQUVMQyxjQUFRLENBRkg7QUFHTEMsY0FBUSxFQUhIO0FBSUxDLG9CQUFjO0FBSlQsSyxRQU9QQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUkMsbUJBRFEsMkJBQ1M7QUFDZixZQUFJQyxRQUFRLElBQVo7QUFDSUMsV0FBR0MsWUFBSCxDQUFnQjtBQUNkQyxlQUFLSCxNQUFNSixZQURHO0FBRWRRLGlCQUZjLG1CQUVMQyxJQUZLLEVBRUM7QUFDYkosZUFBR0ssc0JBQUgsQ0FBMEI7QUFDdEJDLHdCQUFVRixLQUFLRyxJQURPO0FBRXRCSix1QkFBUyxpQkFBVUssSUFBVixFQUFnQjtBQUN2QlIsbUJBQUdTLFlBQUgsQ0FBZ0I7QUFDWkMseUJBQU87QUFESyxpQkFBaEI7QUFHRCxlQU5xQjtBQU90QkMsb0JBQU0sY0FBVUMsR0FBVixFQUFlO0FBQ25CQyx3QkFBUUMsR0FBUixDQUFZRixHQUFaO0FBQ0Q7QUFUcUIsYUFBMUI7QUFXRDtBQWRhLFNBQWhCO0FBZ0JMLE9BbkJPO0FBb0JSRyxrQkFwQlEsMEJBb0JRO0FBQ2RmLFdBQUdTLFlBQUgsQ0FBZ0I7QUFDWkMsaUJBQU87QUFESyxTQUFoQjtBQUdEO0FBeEJPLEs7Ozs7OzJCQTJCRk0sTyxFQUFTO0FBQUE7O0FBQ2RoQixTQUFHaUIsU0FBSCxDQUFhO0FBQ1hDLGVBQU8sUUFESTtBQUVYQyxjQUFNLFNBRks7QUFHWEMsa0JBQVU7QUFIQyxPQUFiO0FBS0QsV0FBSzFCLE1BQUwsR0FBYzJCLEtBQUtDLEtBQUwsQ0FBV04sUUFBUXRCLE1BQW5CLENBQWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQUk2QixPQUFPLElBQVg7O0FBRUE7QUFDQXZCLFNBQUd3QixhQUFILENBQWlCO0FBQ2ZyQixlQURlLG1CQUNQc0IsR0FETyxFQUNGO0FBQ1hGLGVBQUsvQixLQUFMLEdBQWFpQyxJQUFJQyxXQUFqQjtBQUNBO0FBQ0Q7QUFKYyxPQUFqQjs7QUFRSjtBQUNJO0FBQ0EsVUFBSUMsTUFBTSxTQUFOQSxHQUFNLENBQUNDLEVBQUQsRUFBUTtBQUNoQixlQUFRQSxLQUFLLEdBQUwsR0FBV0wsS0FBSy9CLEtBQXhCO0FBQ0QsT0FGRDs7QUFJQTtBQUNBLFVBQUlxQyxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLFFBQVgsRUFBcUJDLFVBQXJCLEVBQWlDekMsS0FBakMsRUFBd0MwQyxDQUF4QyxFQUEyQ0MsQ0FBM0MsRUFBaUQ7QUFDOURMLFlBQUlNLFdBQUosQ0FBZ0JKLFFBQWhCO0FBQ0EsWUFBSUssVUFBVSxFQUFkO0FBQ0EsWUFBSUMsUUFBUSxDQUFaO0FBQ0EsYUFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlSLElBQUlTLE1BQXhCLEVBQWdDRCxHQUFoQyxFQUFxQztBQUNuQyxjQUFJVCxJQUFJVyxXQUFKLENBQWdCVixJQUFJVyxTQUFKLENBQWNKLEtBQWQsRUFBcUJDLENBQXJCLENBQWhCLEVBQXlDL0MsS0FBekMsSUFBa0RBLFFBQVEsR0FBOUQsRUFBbUU7QUFDakU2QyxvQkFBUU0sSUFBUixDQUFhWixJQUFJVyxTQUFKLENBQWNKLEtBQWQsRUFBcUJDLENBQXJCLENBQWI7QUFDQUQsb0JBQVFDLENBQVI7QUFDRDtBQUNGOztBQUVERixnQkFBUU0sSUFBUixDQUFhWixJQUFJVyxTQUFKLENBQWNKLEtBQWQsQ0FBYjs7QUFFQSxhQUFLLElBQUlDLEtBQUksQ0FBYixFQUFnQkEsS0FBSUYsUUFBUUcsTUFBNUIsRUFBb0NELElBQXBDLEVBQXlDO0FBQ3ZDVCxjQUFJYyxRQUFKLENBQWFQLFFBQVFFLEVBQVIsQ0FBYixFQUF5QkwsQ0FBekIsRUFBNEJDLElBQUlGLGNBQWNNLEtBQUksQ0FBbEIsQ0FBaEM7QUFDRDtBQUNGLE9BaEJEOztBQWtCQSxVQUFNVCxNQUFNOUIsR0FBRzZDLG1CQUFILENBQXVCLFVBQXZCLENBQVo7O0FBRUFmLFVBQUlnQixZQUFKLENBQWlCLE9BQWpCO0FBQ0FoQixVQUFJaUIsUUFBSixDQUFhcEIsSUFBSSxDQUFKLENBQWIsRUFBcUJBLElBQUksQ0FBSixDQUFyQixFQUE2QkEsSUFBSSxHQUFKLENBQTdCLEVBQXVDQSxJQUFJLEdBQUosSUFBVyxDQUFDLElBQUksS0FBS2pDLE1BQUwsQ0FBWXNELGFBQVosQ0FBMEJSLE1BQS9CLElBQXlDYixJQUFJLEVBQUosQ0FBM0Y7QUFDQUcsVUFBSWdCLFlBQUosQ0FBaUIsT0FBakI7O0FBRUE7QUFDQWhCLFVBQUlNLFdBQUosQ0FBZ0JULElBQUksRUFBSixDQUFoQjtBQUNBRyxVQUFJbUIsWUFBSixDQUFpQixRQUFqQjtBQUNBbkIsVUFBSWMsUUFBSixDQUFhLE1BQWIsRUFBcUJqQixJQUFJLEdBQUosQ0FBckIsRUFBK0JBLElBQUksRUFBSixDQUEvQjs7QUFFQTtBQUNBLFVBQUl1QixPQUFPLElBQUlDLElBQUosRUFBWDtBQUNBLFVBQUlDLE9BQU9GLEtBQUtHLFdBQUwsRUFBWDtBQUNBLFVBQUlDLFFBQVFKLEtBQUtLLFFBQUwsS0FBa0IsQ0FBOUI7QUFDQSxVQUFJQyxNQUFNTixLQUFLTyxPQUFMLEVBQVY7QUFDQTNCLFVBQUk0QixTQUFKLENBQWMvQixJQUFJLEdBQUosQ0FBZCxFQUF3QkEsSUFBSSxFQUFKLENBQXhCO0FBQ0FHLFVBQUlNLFdBQUosQ0FBZ0JULElBQUksRUFBSixDQUFoQjtBQUNBRyxVQUFJbUIsWUFBSixDQUFpQixPQUFqQjtBQUNBbkIsVUFBSWMsUUFBSixDQUFhUSxPQUFPLEtBQVAsR0FBZUUsS0FBZixHQUF1QixLQUF2QixHQUErQkUsR0FBL0IsR0FBcUMsY0FBckMsR0FBc0RMLEtBQUtRLEdBQUwsR0FBV0MsUUFBWCxHQUFzQkMsTUFBdEIsQ0FBNkIsQ0FBN0IsQ0FBdEQsR0FBd0YsQ0FBQ0MsS0FBS0MsTUFBTCxLQUFlLEdBQWhCLEVBQXFCSCxRQUFyQixHQUFnQ0ksS0FBaEMsQ0FBc0MsR0FBdEMsRUFBMkMsQ0FBM0MsQ0FBeEYsR0FBd0ksSUFBckosRUFBMkpyQyxJQUFJLENBQUosQ0FBM0osRUFBbUtBLElBQUksRUFBSixDQUFuSztBQUNBRyxVQUFJbUIsWUFBSixDQUFpQixRQUFqQjtBQUNBbkIsVUFBSW1CLFlBQUosQ0FBaUIsUUFBakI7QUFDQW5CLFVBQUltQixZQUFKLENBQWlCLFFBQWpCOztBQUVBO0FBQ0E7QUFDQW5CLFVBQUk0QixTQUFKLENBQWMvQixJQUFJLENBQUMsR0FBTCxDQUFkLEVBQXlCQSxJQUFJLEVBQUosQ0FBekI7QUFDQUcsVUFBSW1DLGNBQUosQ0FBbUIsTUFBbkI7QUFDQW5DLFVBQUlvQyxVQUFKLENBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQnZDLElBQUksR0FBSixDQUFyQixFQUErQkEsSUFBSSxFQUFKLEtBQVcsS0FBS2pDLE1BQUwsQ0FBWXNELGFBQVosQ0FBMEJSLE1BQTFCLEdBQW1DLENBQTlDLENBQS9COztBQUVBO0FBQ0EsVUFBSTJCLE1BQU0sS0FBS3pFLE1BQUwsQ0FBWXNELGFBQVosQ0FBMEJSLE1BQTFCLEdBQW1DLENBQTdDO0FBQ0EsV0FBSyxJQUFJRCxJQUFJLENBQWIsRUFBZ0JBLElBQUk0QixNQUFNLENBQTFCLEVBQTZCNUIsR0FBN0IsRUFBa0M7QUFDaENULFlBQUltQyxjQUFKLENBQW1CLE1BQW5CO0FBQ0FuQyxZQUFJc0MsTUFBSixDQUFXekMsSUFBSSxHQUFKLENBQVgsRUFBcUJBLElBQUksRUFBSixJQUFVWSxDQUEvQjtBQUNBVCxZQUFJdUMsTUFBSixDQUFXMUMsSUFBSSxHQUFKLENBQVgsRUFBcUJBLElBQUksRUFBSixJQUFVWSxDQUEvQjtBQUNBVCxZQUFJd0MsTUFBSjtBQUNEOztBQUVEeEMsVUFBSXNDLE1BQUosQ0FBVyxDQUFYLEVBQWN6QyxJQUFJLEVBQUosQ0FBZDtBQUNBRyxVQUFJdUMsTUFBSixDQUFXMUMsSUFBSSxHQUFKLENBQVgsRUFBcUJBLElBQUksRUFBSixDQUFyQjs7QUFFQUcsVUFBSXNDLE1BQUosQ0FBVyxDQUFYLEVBQWN6QyxJQUFJLEVBQUosS0FBV3dDLE1BQUssQ0FBaEIsQ0FBZDtBQUNBckMsVUFBSXVDLE1BQUosQ0FBVzFDLElBQUksR0FBSixDQUFYLEVBQXFCQSxJQUFJLEVBQUosS0FBV3dDLE1BQUssQ0FBaEIsQ0FBckI7O0FBRUFyQyxVQUFJc0MsTUFBSixDQUFXLENBQVgsRUFBY3pDLElBQUksRUFBSixJQUFVd0MsR0FBeEI7QUFDQXJDLFVBQUl1QyxNQUFKLENBQVcxQyxJQUFJLEdBQUosQ0FBWCxFQUFxQkEsSUFBSSxFQUFKLElBQVV3QyxHQUEvQjs7QUFFQXJDLFVBQUlzQyxNQUFKLENBQVd6QyxJQUFJLEdBQUosQ0FBWCxFQUFxQixDQUFyQjtBQUNBRyxVQUFJdUMsTUFBSixDQUFXMUMsSUFBSSxHQUFKLENBQVgsRUFBcUJBLElBQUksRUFBSixLQUFXd0MsTUFBSyxDQUFoQixDQUFyQjs7QUFFQXJDLFVBQUlzQyxNQUFKLENBQVd6QyxJQUFJLEdBQUosQ0FBWCxFQUFxQkEsSUFBSSxFQUFKLENBQXJCO0FBQ0FHLFVBQUl1QyxNQUFKLENBQVcxQyxJQUFJLEdBQUosQ0FBWCxFQUFxQkEsSUFBSSxFQUFKLEtBQVd3QyxNQUFNLENBQWpCLENBQXJCOztBQUVBckMsVUFBSXNDLE1BQUosQ0FBV3pDLElBQUksR0FBSixDQUFYLEVBQXFCQSxJQUFJLEVBQUosQ0FBckI7QUFDQUcsVUFBSXVDLE1BQUosQ0FBVzFDLElBQUksR0FBSixDQUFYLEVBQXFCQSxJQUFJLEVBQUosQ0FBckI7O0FBRUFHLFVBQUlzQyxNQUFKLENBQVd6QyxJQUFJLEdBQUosQ0FBWCxFQUFxQixDQUFyQjtBQUNBRyxVQUFJdUMsTUFBSixDQUFXMUMsSUFBSSxHQUFKLENBQVgsRUFBcUJBLElBQUksRUFBSixJQUFVd0MsR0FBL0I7O0FBRUFyQyxVQUFJc0MsTUFBSixDQUFXekMsSUFBSSxHQUFKLENBQVgsRUFBcUIsQ0FBckI7QUFDQUcsVUFBSXVDLE1BQUosQ0FBVzFDLElBQUksR0FBSixDQUFYLEVBQXFCQSxJQUFJLEVBQUosSUFBVXdDLEdBQS9COztBQUVBckMsVUFBSXdDLE1BQUo7O0FBRUE7QUFDQXhDLFVBQUlNLFdBQUosQ0FBZ0JULElBQUksRUFBSixDQUFoQjtBQUNBRyxVQUFJYyxRQUFKLENBQWEsSUFBYixFQUFtQmpCLElBQUksR0FBSixDQUFuQixFQUE2QkEsSUFBSSxFQUFKLENBQTdCO0FBQ0FHLFVBQUljLFFBQUosQ0FBYSxNQUFiLEVBQXFCakIsSUFBSSxHQUFKLENBQXJCLEVBQStCQSxJQUFJLEVBQUosQ0FBL0I7QUFDQUcsVUFBSWMsUUFBSixDQUFhLE1BQWIsRUFBcUJqQixJQUFJLEdBQUosQ0FBckIsRUFBK0JBLElBQUksRUFBSixDQUEvQjs7QUFFQUcsVUFBSU0sV0FBSixDQUFnQlQsSUFBSSxFQUFKLENBQWhCO0FBQ0FHLFVBQUljLFFBQUosQ0FBYSxNQUFiLEVBQXFCakIsSUFBSSxHQUFKLENBQXJCLEVBQStCQSxJQUFJLEVBQUosQ0FBL0I7QUFDQUcsVUFBSWMsUUFBSixDQUFhLE1BQWIsRUFBcUJqQixJQUFJLEdBQUosQ0FBckIsRUFBK0JBLElBQUksRUFBSixDQUEvQjtBQUNBRyxVQUFJYyxRQUFKLENBQWEsTUFBYixFQUFxQmpCLElBQUksR0FBSixDQUFyQixFQUErQkEsSUFBSSxFQUFKLENBQS9COztBQUVBO0FBQ0E7QUFDQUcsVUFBSTRCLFNBQUosQ0FBYyxDQUFkLEVBQWlCL0IsSUFBSSxFQUFKLENBQWpCO0FBQ0FFLGVBQVNDLEdBQVQsRUFBYyxLQUFLcEMsTUFBTCxDQUFZNkUsV0FBMUIsRUFBdUM1QyxJQUFJLEVBQUosQ0FBdkMsRUFBZ0RBLElBQUksRUFBSixDQUFoRCxFQUF5REEsSUFBSSxHQUFKLENBQXpELEVBQW1FQSxJQUFJLEdBQUosQ0FBbkUsRUFBNkVBLElBQUksRUFBSixDQUE3RTs7QUFFQTtBQUNBLFdBQUssSUFBSVksTUFBSSxDQUFiLEVBQWdCQSxNQUFJLEtBQUs3QyxNQUFMLENBQVlzRCxhQUFaLENBQTBCUixNQUE5QyxFQUFzREQsS0FBdEQsRUFBMkQ7QUFDekQsWUFBSWlDLE9BQU8sb0JBQUssS0FBSzlFLE1BQUwsQ0FBWXNELGFBQVosQ0FBMEJULEdBQTFCLEVBQTZCa0MsSUFBbEMsRUFBd0MsS0FBSy9FLE1BQUwsQ0FBWWdGLE1BQXBELEVBQTRELEtBQUtoRixNQUFMLENBQVlpRixlQUFaLENBQTRCcEMsR0FBNUIsRUFBK0JrQyxJQUEzRixDQUFYO0FBQ0EzQyxZQUFJYyxRQUFKLENBQWE0QixLQUFLSSxJQUFsQixFQUF3QmpELElBQUksR0FBSixDQUF4QixFQUFrQ0EsSUFBSSxFQUFKLElBQVVZLE1BQUlaLElBQUksRUFBSixDQUFoRDtBQUNBLFlBQUlHLElBQUlXLFdBQUosQ0FBZ0IrQixLQUFLSyxJQUFyQixFQUEyQnJGLEtBQTNCLElBQW9DLE1BQU1tQyxJQUFJLEdBQUosQ0FBOUMsRUFBd0Q7QUFDdERFLG1CQUFTQyxHQUFULEVBQWMwQyxLQUFLSyxJQUFuQixFQUF5QmxELElBQUksRUFBSixDQUF6QixFQUFrQ0EsSUFBSSxFQUFKLENBQWxDLEVBQTJDQSxJQUFJLEdBQUosQ0FBM0MsRUFBcURBLElBQUksR0FBSixDQUFyRCxFQUErREEsSUFBSSxDQUFKLElBQVNZLE1BQUlaLElBQUksRUFBSixDQUE1RTtBQUNELFNBRkQsTUFFTztBQUNMRyxjQUFJYyxRQUFKLENBQWE0QixLQUFLSyxJQUFsQixFQUF3QmxELElBQUksR0FBSixDQUF4QixFQUFrQ0EsSUFBSSxFQUFKLElBQVVZLE1BQUlaLElBQUksRUFBSixDQUFoRDtBQUNEO0FBQ0RHLFlBQUljLFFBQUosQ0FBYSxLQUFLbEQsTUFBTCxDQUFZaUYsZUFBWixDQUE0QnBDLEdBQTVCLEVBQStCa0MsSUFBNUMsRUFBa0Q5QyxJQUFJLEdBQUosQ0FBbEQsRUFBNERBLElBQUksRUFBSixJQUFVWSxNQUFJWixJQUFJLEVBQUosQ0FBMUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7QUFFRCxVQUFJLEtBQUtqQyxNQUFMLElBQWUsS0FBS0EsTUFBTCxDQUFZaUYsZUFBL0IsRUFBZ0Q7QUFDOUMsWUFBSUcsUUFBUSxDQUFaO0FBQ0EsYUFBS3BGLE1BQUwsQ0FBWWlGLGVBQVosQ0FBNEJJLE9BQTVCLENBQW9DLFVBQUNDLElBQUQsRUFBVTtBQUM1Q0YsbUJBQVNHLE9BQU9ELEtBQUtQLElBQVosQ0FBVDtBQUNELFNBRkQ7QUFHQSxhQUFLL0UsTUFBTCxDQUFZd0YsZUFBWixHQUE4QkosTUFBTUssT0FBTixDQUFjLENBQWQsQ0FBOUI7QUFDRDs7QUFHRDtBQUNBLGNBQVEsS0FBS3pGLE1BQUwsQ0FBWTBGLEdBQXBCO0FBQ0UsYUFBSyxJQUFMO0FBQ0l0RCxjQUFJYyxRQUFKLENBQWEsTUFBYixFQUFxQmpCLElBQUksR0FBSixDQUFyQixFQUErQkEsSUFBSSxFQUFKLElBQVUsS0FBS2pDLE1BQUwsQ0FBWXNELGFBQVosQ0FBMEJSLE1BQTFCLEdBQW1DYixJQUFJLEVBQUosQ0FBNUU7QUFDQUcsY0FBSWMsUUFBSixDQUFhLE1BQWIsRUFBcUJqQixJQUFJLEdBQUosQ0FBckIsRUFBK0JBLElBQUksRUFBSixJQUFVLEtBQUtqQyxNQUFMLENBQVlzRCxhQUFaLENBQTBCUixNQUExQixHQUFtQ2IsSUFBSSxFQUFKLENBQTVFO0FBQ0FHLGNBQUljLFFBQUosQ0FBYSxLQUFLbEQsTUFBTCxDQUFZd0YsZUFBekIsRUFBMEN2RCxJQUFJLEdBQUosQ0FBMUMsRUFBb0RBLElBQUksRUFBSixJQUFVLEtBQUtqQyxNQUFMLENBQVlzRCxhQUFaLENBQTBCUixNQUExQixHQUFtQ2IsSUFBSSxFQUFKLENBQWpHO0FBQ0E7QUFDSixhQUFLLE1BQUw7QUFDSUcsY0FBSWMsUUFBSixDQUFhLFNBQWIsRUFBd0JqQixJQUFJLEdBQUosQ0FBeEIsRUFBa0NBLElBQUksRUFBSixJQUFVLEtBQUtqQyxNQUFMLENBQVlzRCxhQUFaLENBQTBCUixNQUExQixHQUFtQ2IsSUFBSSxFQUFKLENBQS9FO0FBQ0FFLG1CQUFTQyxHQUFULEVBQWMsWUFBZCxFQUE0QkgsSUFBSSxFQUFKLENBQTVCLEVBQXFDQSxJQUFJLEVBQUosQ0FBckMsRUFBOENBLElBQUksR0FBSixDQUE5QyxFQUF3REEsSUFBSSxHQUFKLENBQXhELEVBQWtFQSxJQUFJLENBQUosSUFBUyxLQUFLakMsTUFBTCxDQUFZc0QsYUFBWixDQUEwQlIsTUFBMUIsR0FBbUNiLElBQUksRUFBSixDQUE5RztBQUNBRyxjQUFJYyxRQUFKLENBQWEsS0FBS2xELE1BQUwsQ0FBWXdGLGVBQXpCLEVBQTBDdkQsSUFBSSxHQUFKLENBQTFDLEVBQW9EQSxJQUFJLEVBQUosSUFBVSxLQUFLakMsTUFBTCxDQUFZc0QsYUFBWixDQUEwQlIsTUFBMUIsR0FBbUNiLElBQUksRUFBSixDQUFqRztBQUNBO0FBQ0osYUFBSyxPQUFMO0FBQ0lHLGNBQUljLFFBQUosQ0FBYSxTQUFiLEVBQXdCakIsSUFBSSxHQUFKLENBQXhCLEVBQWtDQSxJQUFJLEVBQUosSUFBVSxLQUFLakMsTUFBTCxDQUFZc0QsYUFBWixDQUEwQlIsTUFBMUIsR0FBbUNiLElBQUksRUFBSixDQUEvRTtBQUNBRSxtQkFBU0MsR0FBVCxFQUFjLGVBQWQsRUFBK0JILElBQUksRUFBSixDQUEvQixFQUF3Q0EsSUFBSSxFQUFKLENBQXhDLEVBQWlEQSxJQUFJLEdBQUosQ0FBakQsRUFBMkRBLElBQUksR0FBSixDQUEzRCxFQUFxRUEsSUFBSSxDQUFKLElBQVMsS0FBS2pDLE1BQUwsQ0FBWXNELGFBQVosQ0FBMEJSLE1BQTFCLEdBQW1DYixJQUFJLEVBQUosQ0FBakg7QUFDQUcsY0FBSWMsUUFBSixDQUFhLEtBQUtsRCxNQUFMLENBQVl3RixlQUF6QixFQUEwQ3ZELElBQUksR0FBSixDQUExQyxFQUFvREEsSUFBSSxFQUFKLElBQVUsS0FBS2pDLE1BQUwsQ0FBWXNELGFBQVosQ0FBMEJSLE1BQTFCLEdBQW1DYixJQUFJLEVBQUosQ0FBakc7QUFDQTtBQUNIO0FBQ0dHLGNBQUljLFFBQUosQ0FBYSxNQUFiLEVBQXFCakIsSUFBSSxHQUFKLENBQXJCLEVBQStCQSxJQUFJLEVBQUosSUFBVSxLQUFLakMsTUFBTCxDQUFZc0QsYUFBWixDQUEwQlIsTUFBMUIsR0FBbUNiLElBQUksRUFBSixDQUE1RTtBQUNBRyxjQUFJYyxRQUFKLENBQWEsTUFBYixFQUFxQmpCLElBQUksR0FBSixDQUFyQixFQUErQkEsSUFBSSxFQUFKLElBQVUsS0FBS2pDLE1BQUwsQ0FBWXNELGFBQVosQ0FBMEJSLE1BQTFCLEdBQW1DYixJQUFJLEVBQUosQ0FBNUU7QUFDQUcsY0FBSWMsUUFBSixDQUFhLEtBQUtsRCxNQUFMLENBQVl3RixlQUF6QixFQUEwQ3ZELElBQUksR0FBSixDQUExQyxFQUFvREEsSUFBSSxFQUFKLElBQVUsS0FBS2pDLE1BQUwsQ0FBWXNELGFBQVosQ0FBMEJSLE1BQTFCLEdBQW1DYixJQUFJLEVBQUosQ0FBakc7QUFDQTtBQXBCTjs7QUF3QkE7QUFDQUcsVUFBSTRCLFNBQUosQ0FBYyxDQUFkLEVBQWlCL0IsSUFBSSxFQUFKLEtBQVcsS0FBS2pDLE1BQUwsQ0FBWXNELGFBQVosQ0FBMEJSLE1BQTFCLEdBQW1DLENBQTlDLENBQWpCO0FBQ0FWLFVBQUljLFFBQUosQ0FBYSxJQUFiLEVBQW1CakIsSUFBSSxHQUFKLENBQW5CLEVBQTZCQSxJQUFJLEVBQUosQ0FBN0I7QUFDQUcsVUFBSWMsUUFBSixDQUFhLEtBQUtsRCxNQUFMLENBQVl3RixlQUF6QixFQUEwQ3ZELElBQUksR0FBSixDQUExQyxFQUFvREEsSUFBSSxFQUFKLENBQXBEO0FBQ0FHLFVBQUljLFFBQUosQ0FBYSxLQUFLbEQsTUFBTCxDQUFZd0YsZUFBekIsRUFBMEN2RCxJQUFJLEdBQUosQ0FBMUMsRUFBb0RBLElBQUksRUFBSixDQUFwRDs7QUFFQTtBQUNBRyxVQUFJdUQsU0FBSjtBQUNBO0FBQ0F2RCxVQUFJNEIsU0FBSixDQUFjLENBQWQsRUFBaUIvQixJQUFJLEVBQUosQ0FBakI7QUFDQSxVQUFJMkQsWUFBWSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsS0FBZixFQUFzQixJQUF0QixDQUFoQjtBQUNBLFdBQUssSUFBSS9DLE1BQUksQ0FBYixFQUFnQkEsT0FBSyxDQUFyQixFQUF3QkEsS0FBeEIsRUFBNkI7QUFDM0JULFlBQUljLFFBQUosQ0FBYTBDLFVBQVUvQyxNQUFJLENBQWQsQ0FBYixFQUErQlosSUFBSSxFQUFKLENBQS9CLEVBQXdDQSxJQUFJLEVBQUosSUFBVSxDQUFDWSxNQUFJLENBQUwsSUFBVVosSUFBSSxFQUFKLENBQTVEO0FBQ0FHLFlBQUlzQyxNQUFKLENBQVcsQ0FBWCxFQUFjekMsSUFBSSxFQUFKLElBQVVZLEdBQXhCO0FBQ0FULFlBQUl1QyxNQUFKLENBQVcxQyxJQUFJLEdBQUosQ0FBWCxFQUFxQkEsSUFBSSxFQUFKLElBQVVZLEdBQS9CO0FBQ0Q7O0FBRURULFVBQUlzQyxNQUFKLENBQVd6QyxJQUFJLEdBQUosQ0FBWCxFQUFxQkEsSUFBSSxFQUFKLENBQXJCO0FBQ0FHLFVBQUl1QyxNQUFKLENBQVcxQyxJQUFJLEdBQUosQ0FBWCxFQUFxQkEsSUFBSSxFQUFKLElBQVUsQ0FBL0I7QUFDQUcsVUFBSWMsUUFBSixDQUFhLElBQWIsRUFBbUJqQixJQUFJLEdBQUosQ0FBbkIsRUFBNkJBLElBQUksRUFBSixJQUFVQSxJQUFJLEVBQUosQ0FBdkM7O0FBRUFHLFVBQUlzQyxNQUFKLENBQVd6QyxJQUFJLEdBQUosQ0FBWCxFQUFxQkEsSUFBSSxFQUFKLENBQXJCO0FBQ0FHLFVBQUl1QyxNQUFKLENBQVcxQyxJQUFJLEdBQUosQ0FBWCxFQUFxQkEsSUFBSSxFQUFKLElBQVUsQ0FBL0I7QUFDQUcsVUFBSWMsUUFBSixDQUFhLE9BQWIsRUFBc0JqQixJQUFJLEdBQUosQ0FBdEIsRUFBZ0NBLElBQUksRUFBSixJQUFVLENBQVYsR0FBY0EsSUFBSSxFQUFKLENBQTlDOztBQUVBRyxVQUFJc0MsTUFBSixDQUFXekMsSUFBSSxHQUFKLENBQVgsRUFBcUIsQ0FBckI7QUFDQUcsVUFBSXVDLE1BQUosQ0FBVzFDLElBQUksR0FBSixDQUFYLEVBQXFCQSxJQUFJLEVBQUosSUFBVSxDQUEvQjtBQUNBRyxVQUFJYyxRQUFKLENBQWEsTUFBYixFQUFxQmpCLElBQUksR0FBSixDQUFyQixFQUErQkEsSUFBSSxFQUFKLElBQVUsQ0FBVixHQUFjQSxJQUFJLEVBQUosQ0FBN0M7O0FBRUFHLFVBQUlzQyxNQUFKLENBQVcsQ0FBWCxFQUFjLENBQWQ7QUFDQXRDLFVBQUl1QyxNQUFKLENBQVcsQ0FBWCxFQUFjMUMsSUFBSSxFQUFKLElBQVUsQ0FBeEI7O0FBRUFHLFVBQUlzQyxNQUFKLENBQVd6QyxJQUFJLEdBQUosQ0FBWCxFQUFxQixDQUFyQjtBQUNBRyxVQUFJdUMsTUFBSixDQUFXMUMsSUFBSSxHQUFKLENBQVgsRUFBcUJBLElBQUksRUFBSixJQUFVLENBQS9COztBQUVBRyxVQUFJc0MsTUFBSixDQUFXekMsSUFBSSxHQUFKLENBQVgsRUFBcUIsQ0FBckI7QUFDQUcsVUFBSXVDLE1BQUosQ0FBVzFDLElBQUksR0FBSixDQUFYLEVBQXFCQSxJQUFJLEVBQUosQ0FBckI7O0FBRUEsVUFBSVQsUUFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixDQUFaO0FBQ0EsV0FBSyxJQUFJcUIsTUFBSSxDQUFiLEVBQWdCQSxNQUFJLENBQXBCLEVBQXVCQSxLQUF2QixFQUE0QjtBQUMxQlQsWUFBSWMsUUFBSixDQUFhMUIsTUFBTXFCLEdBQU4sQ0FBYixFQUF1QlosSUFBSSxNQUFNLE1BQU1ZLEdBQVosR0FBZ0IsRUFBcEIsQ0FBdkIsRUFBZ0RaLElBQUksRUFBSixDQUFoRDtBQUNBRyxZQUFJc0MsTUFBSixDQUFXekMsSUFBSSxNQUFNLE1BQU1ZLEdBQVosR0FBZ0IsRUFBcEIsQ0FBWCxFQUFvQyxDQUFwQztBQUNBVCxZQUFJdUMsTUFBSixDQUFXMUMsSUFBSSxNQUFNLE1BQU1ZLEdBQVosR0FBZ0IsRUFBcEIsQ0FBWCxFQUFvQ1osSUFBSSxFQUFKLENBQXBDO0FBQ0FHLFlBQUlzQyxNQUFKLENBQVd6QyxJQUFJLE1BQU0sTUFBTVksR0FBWixHQUFnQixHQUFwQixDQUFYLEVBQXFDLENBQXJDO0FBQ0FULFlBQUl1QyxNQUFKLENBQVcxQyxJQUFJLE1BQU0sTUFBTVksR0FBWixHQUFnQixHQUFwQixDQUFYLEVBQXFDWixJQUFJLEVBQUosQ0FBckM7QUFDRDtBQUNERyxVQUFJd0MsTUFBSjs7QUFFQXhDLFVBQUljLFFBQUosQ0FBYSxLQUFLMkMsT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxRQUF4QixDQUFpQ0MsUUFBOUMsRUFBd0QvRCxJQUFJLE1BQU0sTUFBTSxDQUFaLEdBQWdCLEVBQXBCLENBQXhELEVBQWlGQSxJQUFJLEVBQUosQ0FBakY7QUFDQUcsVUFBSWMsUUFBSixDQUFhLEtBQUtsRCxNQUFMLENBQVlpRyxVQUF6QixFQUFxQ2hFLElBQUksR0FBSixDQUFyQyxFQUErQ0EsSUFBSSxFQUFKLElBQVVBLElBQUksRUFBSixJQUFVLENBQW5FO0FBQ0EsV0FBS2pDLE1BQUwsQ0FBWWtHLGFBQVosSUFBNkI5RCxJQUFJYyxRQUFKLENBQWEsS0FBS2xELE1BQUwsQ0FBWWtHLGFBQXpCLEVBQXdDakUsSUFBSSxHQUFKLENBQXhDLEVBQWtEQSxJQUFJLEVBQUosSUFBVUEsSUFBSSxFQUFKLElBQVUsQ0FBdEUsQ0FBN0I7O0FBRUFHLFVBQUljLFFBQUosQ0FBYSxLQUFLbEQsTUFBTCxDQUFZbUcsVUFBekIsRUFBcUNsRSxJQUFJLEdBQUosQ0FBckMsRUFBK0NBLElBQUksRUFBSixJQUFVQSxJQUFJLEVBQUosSUFBVSxDQUFuRTtBQUNBLFdBQUtqQyxNQUFMLENBQVlvRyxVQUFaLElBQTBCaEUsSUFBSWMsUUFBSixDQUFhLEtBQUtsRCxNQUFMLENBQVlvRyxVQUF6QixFQUFxQ25FLElBQUksR0FBSixDQUFyQyxFQUErQ0EsSUFBSSxFQUFKLElBQVVBLElBQUksRUFBSixDQUF6RCxDQUExQjtBQUNBLFdBQUtqQyxNQUFMLENBQVlxRyxTQUFaLElBQXlCakUsSUFBSWMsUUFBSixDQUFhLEtBQUtsRCxNQUFMLENBQVlxRyxTQUF6QixFQUFvQ3BFLElBQUksR0FBSixDQUFwQyxFQUE4Q0EsSUFBSSxFQUFKLElBQVVBLElBQUksRUFBSixJQUFVLENBQWxFLENBQXpCOztBQUVBRyxVQUFJa0UsSUFBSixDQUFTLElBQVQsRUFBZSxZQUFNO0FBQ25CaEcsV0FBR2lHLG9CQUFILENBQXdCO0FBQ3BCL0QsYUFBRyxDQURpQjtBQUVwQkMsYUFBRyxDQUZpQjtBQUdwQjNDLGlCQUFPbUMsSUFBSSxHQUFKLENBSGE7QUFJcEJsQyxrQkFBUWtDLElBQUksR0FBSixJQUFXLENBQUMsSUFBSSxJQUFJLE9BQUtqQyxNQUFMLENBQVlzRCxhQUFaLENBQTBCUixNQUFuQyxJQUE2Q2IsSUFBSSxFQUFKLENBSjVDO0FBS3BCdUUsb0JBQVUsVUFMVSxFQUtDO0FBQ3JCL0YsbUJBQVMsaUJBQUNzQixHQUFELEVBQVM7QUFDZHpCLGVBQUdtRyxTQUFIO0FBQ0E7QUFDQTVFLGlCQUFLNUIsWUFBTCxHQUFvQjhCLElBQUk5QixZQUF4QjtBQUNBNEIsaUJBQUs2RSxNQUFMO0FBQ0gsV0FYbUI7QUFZcEJ6RixnQkFBTSxjQUFDQyxHQUFELEVBQVM7QUFDYkMsb0JBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNEO0FBZG1CLFNBQXhCO0FBZ0JELE9BakJEO0FBa0JEOzs7O0VBN1dtQ3lGLGVBQUtDLEk7O2tCQUF0Qm5ILFEiLCJmaWxlIjoibm90YXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgdXRpbCBmcm9tICcuLi8uLi91dGlscy91dGlsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQdXJjaGFzZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Yet6K+BJ1xuICB9XG4gIGNvbXBvbmVudHMgPSB7XG5cbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIHJlc3VsdDoge30sXG4gICAgdGVtcEZpbGVQYXRoOiAnJ1xuICB9XG5cbiAgY29tcHV0ZWQgPSB7fVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgaGFubGRlU2F2ZVBpYyAoKSB7XG4gICAgICBsZXQgX3NlbGYgPSB0aGlzXG4gICAgICAgICAgd3guZ2V0SW1hZ2VJbmZvKHtcbiAgICAgICAgICAgIHNyYzogX3NlbGYudGVtcEZpbGVQYXRoLFxuICAgICAgICAgICAgc3VjY2VzcyAocmVzMSkge1xuICAgICAgICAgICAgICB3eC5zYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtKHtcbiAgICAgICAgICAgICAgICAgIGZpbGVQYXRoOiByZXMxLnBhdGgsXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzMikge1xuICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBoYW5kbGVDYW5jZWwgKCkge1xuICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICBkZWx0YTogMVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICB0aXRsZTogJ+ato+WcqOeUn+aIkOWHreivgScsXG4gICAgICAgaWNvbjogJ2xvYWRpbmcnLFxuICAgICAgIGR1cmF0aW9uOiAxMDAwMFxuICAgICB9KVxuICAgIHRoaXMucmVzdWx0ID0gSlNPTi5wYXJzZShvcHRpb25zLnJlc3VsdClcbiAgICAvLyB0aGlzLnJlc3VsdCA9IHtcbiAgICAvLyAgIFwiSW52b2ljZU51bVwiOiBcIjMyMzMwNzM5XCIsXG4gICAgLy8gICBcIlNlbGxlck5hbWVcIjogXCLljJfkuqzlhqDmnIjppJDppa7nrqHnkIbmnInpmZDlhazlj7hcIixcbiAgICAvLyAgIFwiQ29tbW9kaXR5VGF4UmF0ZVwiOiBbe1xuICAgIC8vICAgICBcIndvcmRcIjogXCI2JVwiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfV0sXG4gICAgLy8gICBcIlNlbGxlckJhbmtcIjogXCLljJfkuqzluILmtbfmt4DljLrkuK3lhbPmnZHkuJzot68x5Y+36ZmiMuWPt+alvDEwMeWupDYyNzk4OTg4XCIsXG4gICAgLy8gICBcIkNoZWNrZXJcIjogXCJcIixcbiAgICAvLyAgIFwiVG90YWxBbW91bnRcIjogXCIxODY0Ny4xN1wiLFxuICAgIC8vICAgXCJDb21tb2RpdHlBbW91bnRcIjogW3tcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiMTg0Ny4xN1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfSwge1xuICAgIC8vICAgICBcIndvcmRcIjogXCIxODY0Ny4xN1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjJcIlxuICAgIC8vICAgfV0sXG4gICAgLy8gICBcIkludm9pY2VEYXRlXCI6IFwiMjAxOOW5tDA45pyIMTnml6VcIixcbiAgICAvLyAgIFwiQ29tbW9kaXR5VGF4XCI6IFt7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIjExMTguODNcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH0sIHtcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiMTczOC44M1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjJcIlxuICAgIC8vICAgfV0sXG4gICAgLy8gICBcIlB1cmNoYXNlck5hbWVcIjogXCLkuIrmtbfmnInnlaXmlZnogrLnp5HmioDmnInpmZDlhazlj7hcIixcbiAgICAvLyAgIFwiQ29tbW9kaXR5TnVtXCI6IFt7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIlwiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfV0sXG4gICAgLy8gICBcIlB1cmNoYXNlckJhbmtcIjogXCJcIixcbiAgICAvLyAgIFwiUmVtYXJrc1wiOiBcIuagoemqjOeggTAwMzQ1ODAyMjU2XCIsXG4gICAgLy8gICBcIlBhc3N3b3JkXCI6IFwiNTIvLzU1MDErMTQ5MDYtKzAzPC0zMDg0LTg5PDk4MDcxOT4rMjUtNCs2Mzg2Nzw4MzwrMDMwMS0qMDErOTwqMC85MDwvNDYtPDAyOTg4ND41NC0yOD4+MDM5LysvMzYqKzkzLzc4NT4wND5cIixcbiAgICAvLyAgIFwiU2VsbGVyQWRkcmVzc1wiOiBcIuWPtzEwMeWupDYyNzk4OTg4OTExXCIsXG4gICAgLy8gICBcIlB1cmNoYXNlckFkZHJlc3NcIjogXCJcIixcbiAgICAvLyAgIFwiSW52b2ljZUNvZGVcIjogXCIwMTEwMDE4MDAxMDRcIixcbiAgICAvLyAgIFwiQ29tbW9kaXR5VW5pdFwiOiBbe1xuICAgIC8vICAgICBcIndvcmRcIjogXCJcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH1dLFxuICAgIC8vICAgXCJQYXllZVwiOiBcIueUhOWpt1wiLFxuICAgIC8vICAgXCJQdXJjaGFzZXJSZWdpc3Rlck51bVwiOiBcIjkxMzEwMTEwTUFHMFdOXCIsXG4gICAgLy8gICBcIkNvbW1vZGl0eVByaWNlXCI6IFt7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIlwiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfV0sXG4gICAgLy8gICBcIk5vdGVEcmF3ZXJcIjogXCLpob7mlrDmnbBcIixcbiAgICAvLyAgIFwiQW1vdW50SW5Xb3Jkc1wiOiBcIuS4h+S7n+afkuS9sOmZhuaLvumZhuWchuaVtFwiLFxuICAgIC8vICAgXCJBbW91bnRJbkZpZ3VlcnNcIjogXCIxOTc2Ni4wMFwiLFxuICAgIC8vICAgXCJUb3RhbFRheFwiOiBcIjExMTguMzBcIixcbiAgICAvLyAgIFwiSW52b2ljZVR5cGVcIjogXCLkuJPnlKjlj5HnpahcIixcbiAgICAvLyAgIFwiU2VsbGVyUmVnaXN0ZXJOdW1cIjogXCI5MTExMDEwODc5NzU4MzQzMzhcIixcbiAgICAvLyAgIFwiQ29tbW9kaXR5TmFtZVwiOiBbe1xuICAgIC8vICAgICBcIndvcmRcIjogXCLmnI3liqHlmahcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH0sIHtcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwi5omr5Zyw5py6XCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMlwiXG4gICAgLy8gICB9XSxcbiAgICAvLyAgIFwiQ29tbW9kaXR5VHlwZVwiOiBbe1xuICAgIC8vICAgICBcIndvcmRcIjogXCJcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH1dLFxuICAgIC8vICAgXCJDaGVja0NvZGVcIjogXCIwMDM0NTgwMjI1NjE5NTkwOTQ5XCIsXG4gICAgLy8gICBcImlkZW50aXR5XCI6IFwi6LSt5Lmw5pa5XCIsXG4gICAgLy8gICBcInBheVwiOiBcIuWFrOWPuFwiLFxuICAgIC8vICAgXCJzb3VyY2VcIjogXCLkuJrliqHmi5vlvoVcIixcbiAgICAvLyAgIFwicGVyc29uTmFtZVwiOiBcIuW8oOS4ieWVilwiLFxuICAgIC8vICAgXCJkaXNjcmlwdGlvblwiOiBcIuaIkeadpeiHquS4reWbve+8jOaIkeWGjWRqa2RrauebtOaSre+8jOaIkeW+l+i/h+S4lueVjOWGoOWGm++8jOaIkeS5n+WKnui/h+i9rCzkvaDopoHpop3kvaDpg73og73orrDlvpfnnIvmmpflj7fpg73kvJpcIixcbiAgICAvLyAgIFwiYmVsb25nUHJvamVjdFwiOiBcIuWkqeWcsOWkp+WQjFwiXG4gICAgLy8gfVxuXG4gICAgbGV0IHRoYXQgPSB0aGlzXG5cbiAgICAvLyDojrflj5blsY/luZXlrr1cbiAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHRoYXQud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgICAgLy8gdGhhdC5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICB9XG4gICAgfSlcblxuXG4vLyDlh73mlbDlrprkuYnljLrln58gPT09PT09PT09PT09PT09PT09PVxuICAgIC8vIOiuvue9ruS4gOS4quWfuuWHhuavlOS+i1xuICAgIGxldCBjYWwgPSAocHgpID0+IHtcbiAgICAgIHJldHVybiAgcHggLyAzNzUgKiB0aGF0LndpZHRoXG4gICAgfVxuXG4gICAgLy8gY2FudmFz5o2i6KGM5pi+56S6XG4gICAgbGV0IGxpbmVXcmFwID0gKGN0eCwgc3RyLCBmb250c2l6ZSwgbGluZWhlaWdodCwgd2lkdGgsIHgsIHkpID0+IHtcbiAgICAgIGN0eC5zZXRGb250U2l6ZShmb250c2l6ZSlcbiAgICAgIGxldCB0ZXh0QXJyID0gW11cbiAgICAgIGxldCBpbmRleCA9IDBcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChjdHgubWVhc3VyZVRleHQoc3RyLnN1YnN0cmluZyhpbmRleCwgaSkpLndpZHRoID49IHdpZHRoICogMC44KSB7XG4gICAgICAgICAgdGV4dEFyci5wdXNoKHN0ci5zdWJzdHJpbmcoaW5kZXgsIGkpKVxuICAgICAgICAgIGluZGV4ID0gaVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRleHRBcnIucHVzaChzdHIuc3Vic3RyaW5nKGluZGV4KSlcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0QXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGN0eC5maWxsVGV4dCh0ZXh0QXJyW2ldLCB4LCB5ICsgbGluZWhlaWdodCAqIChpICsgMSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY3R4ID0gd3guY3JlYXRlQ2FudmFzQ29udGV4dCgnY2FudmFzSWQnKVxuXG4gICAgY3R4LnNldEZpbGxTdHlsZSgnd2hpdGUnKVxuICAgIGN0eC5maWxsUmVjdChjYWwoMCksIGNhbCgwKSwgY2FsKDc1MCksIGNhbCgxMjApICsgKDkgKyB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCkgKiBjYWwoMzYpKVxuICAgIGN0eC5zZXRGaWxsU3R5bGUoJ2JsYWNrJylcblxuICAgIC8vIOagh+mimFxuICAgIGN0eC5zZXRGb250U2l6ZShjYWwoMjMpKVxuICAgIGN0eC5zZXRUZXh0QWxpZ24oJ2NlbnRlcicpXG4gICAgY3R4LmZpbGxUZXh0KCforrDotKblh63or4EnLCBjYWwoMzc1KSwgY2FsKDQwKSlcblxuICAgIC8vIOaXtumXtOWPiue8luWPt1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKVxuICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXG4gICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMVxuICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKVxuICAgIGN0eC50cmFuc2xhdGUoY2FsKDczMCksIGNhbCg3MCkpXG4gICAgY3R4LnNldEZvbnRTaXplKGNhbCgxMykpXG4gICAgY3R4LnNldFRleHRBbGlnbigncmlnaHQnKVxuICAgIGN0eC5maWxsVGV4dCh5ZWFyICsgJyDlubQgJyArIG1vbnRoICsgJyDmnIggJyArIGRheSArICcg5Y+3ICAgICAg6K6w5a2X56ysICcgKyBEYXRlLm5vdygpLnRvU3RyaW5nKCkuc3Vic3RyKDYpICsgKE1hdGgucmFuZG9tKCkqIDEwMCkudG9TdHJpbmcoKS5zcGxpdCgnLicpWzBdICsgJyDlj7cnLCBjYWwoMCksIGNhbCgyMikpXG4gICAgY3R4LnNldFRleHRBbGlnbignY2VudGVyJylcbiAgICBjdHguc2V0VGV4dEFsaWduKCdjZW50ZXInKVxuICAgIGN0eC5zZXRUZXh0QWxpZ24oJ2NlbnRlcicpXG5cbiAgICAvLyDooajmoLxcbiAgICAvLyDlpJbmoYZcbiAgICBjdHgudHJhbnNsYXRlKGNhbCgtNzEwKSwgY2FsKDUwKSlcbiAgICBjdHguc2V0U3Ryb2tlU3R5bGUoJyMwMDAnKVxuICAgIGN0eC5zdHJva2VSZWN0KDAsIDAsIGNhbCg3MTApLCBjYWwoMzYpICogKHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoICsgMykpXG5cbiAgICAvLyDlhoXmoYZcbiAgICBsZXQgcm93ID0gdGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKyAzXG4gICAgZm9yIChsZXQgaSA9IDI7IGkgPCByb3cgLSAxOyBpKyspIHtcbiAgICAgIGN0eC5zZXRTdHJva2VTdHlsZSgnIzk5OScpXG4gICAgICBjdHgubW92ZVRvKGNhbCgyMDApLCBjYWwoMzYpICogaSlcbiAgICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikgKiBpKVxuICAgICAgY3R4LnN0cm9rZSgpXG4gICAgfVxuXG4gICAgY3R4Lm1vdmVUbygwLCBjYWwoMzYpKVxuICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikpXG5cbiAgICBjdHgubW92ZVRvKDAsIGNhbCgzNikgKiAocm93IC0xKSlcbiAgICBjdHgubGluZVRvKGNhbCg3MTApLCBjYWwoMzYpICogKHJvdyAtMSkpXG5cbiAgICBjdHgubW92ZVRvKDAsIGNhbCgzNikgKiByb3cpXG4gICAgY3R4LmxpbmVUbyhjYWwoNzEwKSwgY2FsKDM2KSAqIHJvdylcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDIwMCksIDApXG4gICAgY3R4LmxpbmVUbyhjYWwoMjAwKSwgY2FsKDM2KSAqIChyb3cgLTEpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMzMwKSwgY2FsKDE4KSlcbiAgICBjdHgubGluZVRvKGNhbCgzMzApLCBjYWwoMzYpICogKHJvdyAtIDEpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMjAwKSwgY2FsKDE4KSlcbiAgICBjdHgubGluZVRvKGNhbCg0NjApLCBjYWwoMTgpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoNDYwKSwgMClcbiAgICBjdHgubGluZVRvKGNhbCg0NjApLCBjYWwoMzYpICogcm93KVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoNTg1KSwgMClcbiAgICBjdHgubGluZVRvKGNhbCg1ODUpLCBjYWwoMzYpICogcm93KVxuXG4gICAgY3R4LnN0cm9rZSgpXG5cbiAgICAvLyDooajlpLRcbiAgICBjdHguc2V0Rm9udFNpemUoY2FsKDE1KSlcbiAgICBjdHguZmlsbFRleHQoJ+aRmOimgScsIGNhbCgxMDApLCBjYWwoMjQpKVxuICAgIGN0eC5maWxsVGV4dCgn5YCf5pa56YeR6aKdJywgY2FsKDUyMiksIGNhbCgyNCkpXG4gICAgY3R4LmZpbGxUZXh0KCfotLfmlrnph5Hpop0nLCBjYWwoNjQ2KSwgY2FsKDI0KSlcblxuICAgIGN0eC5zZXRGb250U2l6ZShjYWwoMTQpKVxuICAgIGN0eC5maWxsVGV4dCgn5Lya6K6h56eR55uuJywgY2FsKDMzMCksIGNhbCgxNSkpXG4gICAgY3R4LmZpbGxUZXh0KCfnp5Hnm67ku6PnoIEnLCBjYWwoMjY1KSwgY2FsKDMzKSlcbiAgICBjdHguZmlsbFRleHQoJ+enkeebruWQjeensCcsIGNhbCgzOTUpLCBjYWwoMzMpKVxuXG4gICAgLy8g5YaF5a656YOo5YiGXG4gICAgLy8g5pGY6KaB5YaF5a65XG4gICAgY3R4LnRyYW5zbGF0ZSgwLCBjYWwoMzYpKVxuICAgIGxpbmVXcmFwKGN0eCwgdGhpcy5yZXN1bHQuZGlzY3JpcHRpb24sIGNhbCgxNCksIGNhbCgxNiksIGNhbCgxNjApLCBjYWwoMTAwKSwgY2FsKDEwKSlcblxuICAgIC8vIOeJqeWTgeOAgeacjeWKoeetiVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHRlbXAgPSB1dGlsKHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWVbaV0ud29yZCwgdGhpcy5yZXN1bHQuc291cmNlLCB0aGlzLnJlc3VsdC5Db21tb2RpdHlBbW91bnRbaV0ud29yZClcbiAgICAgIGN0eC5maWxsVGV4dCh0ZW1wLmNvZGUsIGNhbCgyNjUpLCBjYWwoMjQpICsgaSAqIGNhbCgzNikpXG4gICAgICBpZiAoY3R4Lm1lYXN1cmVUZXh0KHRlbXAubmFtZSkud2lkdGggPj0gMC45ICogY2FsKDEzMCkpIHtcbiAgICAgICAgbGluZVdyYXAoY3R4LCB0ZW1wLm5hbWUsIGNhbCgxNCksIGNhbCgxNCksIGNhbCgxMzApLCBjYWwoMzk1KSwgY2FsKDIpICsgaSAqIGNhbCgzNikgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRlbXAubmFtZSwgY2FsKDM5NSksIGNhbCgyNCkgKyBpICogY2FsKDM2KSlcbiAgICAgIH1cbiAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5Db21tb2RpdHlBbW91bnRbaV0ud29yZCwgY2FsKDUyMiksIGNhbCgyNCkgKyBpICogY2FsKDM2KSlcblxuICAgICAgLy8gY3R4LmZpbGxUZXh0KCcyMjIxLjAxLjA2JywgY2FsKDI2NSksIGNhbCgyNCkgKyAoMSArIDIgKiBpKSAqIGNhbCgzNikpXG4gICAgICAvLyBjdHguZmlsbFRleHQoJ+W+heiupOivgei/m+mhueeojicsIGNhbCgzOTUpLCBjYWwoMjQpICsgKDEgKyAyICogaSkgKiBjYWwoMzYpKVxuICAgICAgLy8gY3R4LmZpbGxUZXh0KGxpbmVXcmFwKCksIGNhbCgzOTUpLCBjYWwoMjQpICsgMiAqIGNhbCgzNikpXG4gICAgICAvLyBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuQ29tbW9kaXR5VGF4W2ldLndvcmQsIGNhbCg1MjIpLCBjYWwoMjQpICsgKDEgKyAyICogaSkgKiBjYWwoMzYpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnJlc3VsdCAmJiB0aGlzLnJlc3VsdC5Db21tb2RpdHlBbW91bnQpIHtcbiAgICAgIGxldCB0b3RhbCA9IDBcbiAgICAgIHRoaXMucmVzdWx0LkNvbW1vZGl0eUFtb3VudC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIHRvdGFsICs9IE51bWJlcihpdGVtLndvcmQpXG4gICAgICB9KVxuICAgICAgdGhpcy5yZXN1bHQuQW1vdW50SW5GaWd1ZXJzID0gdG90YWwudG9GaXhlZCgyKVxuICAgIH1cblxuXG4gICAgLy8g5Lu356iO5ZCI6K6hXG4gICAgc3dpdGNoICh0aGlzLnJlc3VsdC5wYXkpIHtcbiAgICAgIGNhc2UgJ+WFrOWPuCc6XG4gICAgICAgICAgY3R4LmZpbGxUZXh0KCcyMjAyJywgY2FsKDI2NSksIGNhbCgyNCkgKyB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCAqIGNhbCgzNikpXG4gICAgICAgICAgY3R4LmZpbGxUZXh0KCflupTku5jotKbmrL4nLCBjYWwoMzk1KSwgY2FsKDI0KSArIHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoICogY2FsKDM2KSlcbiAgICAgICAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuQW1vdW50SW5GaWd1ZXJzLCBjYWwoNjQ2KSwgY2FsKDI0KSArIHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoICogY2FsKDM2KSlcbiAgICAgICAgICBicmVha1xuICAgICAgY2FzZSAn5YWs5Y+45ZGY5belJzpcbiAgICAgICAgICBjdHguZmlsbFRleHQoJzIyNDEuMDEnLCBjYWwoMjY1KSwgY2FsKDI0KSArIHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoICogY2FsKDM2KSlcbiAgICAgICAgICBsaW5lV3JhcChjdHgsICflhbbku5blupTku5jmrL4t5ZGY5bel5oql6ZSAJywgY2FsKDE0KSwgY2FsKDE0KSwgY2FsKDEzMCksIGNhbCgzOTUpLCBjYWwoMikgKyB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCAqIGNhbCgzNikpXG4gICAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LkFtb3VudEluRmlndWVycywgY2FsKDY0NiksIGNhbCgyNCkgKyB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCAqIGNhbCgzNikpXG4gICAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ+WFtuS7luesrOS4ieaWuSc6XG4gICAgICAgICAgY3R4LmZpbGxUZXh0KCcyMjQxLjA0JywgY2FsKDI2NSksIGNhbCgyNCkgKyB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCAqIGNhbCgzNikpXG4gICAgICAgICAgbGluZVdyYXAoY3R4LCAn5YW25LuW5bqU5LuY5qy+LeWFtuS7luesrOS4ieaWueW+gOadpScsIGNhbCgxNCksIGNhbCgxNCksIGNhbCgxMzApLCBjYWwoMzk1KSwgY2FsKDIpICsgdGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKiBjYWwoMzYpKVxuICAgICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5BbW91bnRJbkZpZ3VlcnMsIGNhbCg2NDYpLCBjYWwoMjQpICsgdGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKiBjYWwoMzYpKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjdHguZmlsbFRleHQoJzIyMDInLCBjYWwoMjY1KSwgY2FsKDI0KSArIHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoICogY2FsKDM2KSlcbiAgICAgICAgICBjdHguZmlsbFRleHQoJ+W6lOS7mOi0puasvicsIGNhbCgzOTUpLCBjYWwoMjQpICsgdGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKiBjYWwoMzYpKVxuICAgICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5BbW91bnRJbkZpZ3VlcnMsIGNhbCg2NDYpLCBjYWwoMjQpICsgdGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKiBjYWwoMzYpKVxuICAgICAgICAgIGJyZWFrXG4gICAgfVxuXG5cbiAgICAvLyDlkIjorqFcbiAgICBjdHgudHJhbnNsYXRlKDAsIGNhbCgzNikgKiAodGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKyAxKSlcbiAgICBjdHguZmlsbFRleHQoJ+WQiOiuoScsIGNhbCgyMzApLCBjYWwoMjQpKVxuICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5BbW91bnRJbkZpZ3VlcnMsIGNhbCg1MjIpLCBjYWwoMjQpKVxuICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5BbW91bnRJbkZpZ3VlcnMsIGNhbCg2NDYpLCBjYWwoMjQpKVxuXG4gICAgLy8g5L+h5oGv5qCPXG4gICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgLy8g6L655qGGXG4gICAgY3R4LnRyYW5zbGF0ZSgwLCBjYWwoMzYpKVxuICAgIGxldCBsZWZ0VGl0bGUgPSBbJ+S8muiuoeaAu+euoScsICflrqLmiLcnLCAn5L6b5bqU5ZWGJywgJ+mhueebriddXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSB7XG4gICAgICBjdHguZmlsbFRleHQobGVmdFRpdGxlW2kgLSAxXSwgY2FsKDUwKSwgY2FsKDI0KSArIChpIC0gMSkgKiBjYWwoMzYpKVxuICAgICAgY3R4Lm1vdmVUbygwLCBjYWwoMzYpICogaSlcbiAgICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikgKiBpKVxuICAgIH1cblxuICAgIGN0eC5tb3ZlVG8oY2FsKDM1NSksIGNhbCgzNikpXG4gICAgY3R4LmxpbmVUbyhjYWwoMzU1KSwgY2FsKDM2KSAqIDQpXG4gICAgY3R4LmZpbGxUZXh0KCflkZjlt6UnLCBjYWwoNDA1KSwgY2FsKDM2KSArIGNhbCgyNCkpXG5cbiAgICBjdHgubW92ZVRvKGNhbCg0NTUpLCBjYWwoMzYpKVxuICAgIGN0eC5saW5lVG8oY2FsKDQ1NSksIGNhbCgzNikgKiA0KVxuICAgIGN0eC5maWxsVGV4dCgn5YW25LuW56ys5LiJ5pa5JywgY2FsKDQwNSksIGNhbCgzNikgKiAyICsgY2FsKDI0KSlcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDcxMCksIDApXG4gICAgY3R4LmxpbmVUbyhjYWwoNzEwKSwgY2FsKDM2KSAqIDQpXG4gICAgY3R4LmZpbGxUZXh0KCflj5Hnpajlj7fnoIEnLCBjYWwoNDA1KSwgY2FsKDM2KSAqIDMgKyBjYWwoMjQpKVxuXG4gICAgY3R4Lm1vdmVUbygwLCAwKVxuICAgIGN0eC5saW5lVG8oMCwgY2FsKDM2KSAqIDQpXG5cbiAgICBjdHgubW92ZVRvKGNhbCgxMDApLCAwKVxuICAgIGN0eC5saW5lVG8oY2FsKDEwMCksIGNhbCgzNikgKiA0KVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMTkwKSwgMClcbiAgICBjdHgubGluZVRvKGNhbCgxOTApLCBjYWwoMzYpKVxuXG4gICAgbGV0IHRpdGxlID0gWyforrDotKYnLCAn5Ye657qzJywgJ+WuoeaguCcsICfliLbljZUnXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICBjdHguZmlsbFRleHQodGl0bGVbaV0sIGNhbCgxOTAgKyAxMzAgKiBpICsgMjUpLCBjYWwoMjQpIClcbiAgICAgIGN0eC5tb3ZlVG8oY2FsKDE5MCArIDEzMCAqIGkgKyA1MCksIDApXG4gICAgICBjdHgubGluZVRvKGNhbCgxOTAgKyAxMzAgKiBpICsgNTApLCBjYWwoMzYpKVxuICAgICAgY3R4Lm1vdmVUbyhjYWwoMTkwICsgMTMwICogaSArIDEzMCksIDApXG4gICAgICBjdHgubGluZVRvKGNhbCgxOTAgKyAxMzAgKiBpICsgMTMwKSwgY2FsKDM2KSlcbiAgICB9XG4gICAgY3R4LnN0cm9rZSgpXG5cbiAgICBjdHguZmlsbFRleHQodGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlckluZm8ubmlja05hbWUsIGNhbCgxOTAgKyAxMzAgKiAzICsgOTApLCBjYWwoMjQpKVxuICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5JbnZvaWNlTnVtLCBjYWwoNTgyKSwgY2FsKDI0KSArIGNhbCgzNikgKiAzKVxuICAgIHRoaXMucmVzdWx0LmJlbG9uZ1Byb2plY3QgJiYgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LmJlbG9uZ1Byb2plY3QsIGNhbCgyMjgpLCBjYWwoMjQpICsgY2FsKDM2KSAqIDMpXG5cbiAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuU2VsbGVyTmFtZSwgY2FsKDIyOCksIGNhbCgyNCkgKyBjYWwoMzYpICogMilcbiAgICB0aGlzLnJlc3VsdC5wZXJzb25OYW1lICYmIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5wZXJzb25OYW1lLCBjYWwoNTgyKSwgY2FsKDI0KSArIGNhbCgzNikpXG4gICAgdGhpcy5yZXN1bHQub3RoZXJOYW1lICYmIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5vdGhlck5hbWUsIGNhbCg1ODIpLCBjYWwoMjQpICsgY2FsKDM2KSAqIDIpXG5cbiAgICBjdHguZHJhdyh0cnVlLCAoKSA9PiB7XG4gICAgICB3eC5jYW52YXNUb1RlbXBGaWxlUGF0aCh7XG4gICAgICAgICAgeDogMCxcbiAgICAgICAgICB5OiAwLFxuICAgICAgICAgIHdpZHRoOiBjYWwoNzUwKSxcbiAgICAgICAgICBoZWlnaHQ6IGNhbCgxMjApICsgKDggKyAyICogdGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGgpICogY2FsKDM2KSxcbiAgICAgICAgICBjYW52YXNJZDogJ2NhbnZhc0lkJywvL2NhbnZhc0lk5ZKM5qCH562+6YeM6Z2i55qEaWTlr7nlupRcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgIHd4LmhpZGVUb2FzdCgpXG4gICAgICAgICAgICAgIC8v5bCG6I635Y+W5Yiw55qE5Zu+54mH5Li05pe26Lev5b6Ec2V05YiwY2FudmFzU2F2ZWltZ+S4rVxuICAgICAgICAgICAgICB0aGF0LnRlbXBGaWxlUGF0aCA9IHJlcy50ZW1wRmlsZVBhdGhcbiAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDogKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==