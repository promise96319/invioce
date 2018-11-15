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

  return Sale;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Sale , 'pages/sale/sale'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGUuanMiXSwibmFtZXMiOlsiU2FsZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsIndpZHRoIiwiaGVpZ2h0IiwicmVzdWx0IiwidGVtcEZpbGVQYXRoIiwiaW1hZ2VIZWlnaHQiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJoYW5sZGVTYXZlUGljIiwiX3NlbGYiLCJ3eCIsImdldEltYWdlSW5mbyIsInNyYyIsInN1Y2Nlc3MiLCJyZXMxIiwic2F2ZUltYWdlVG9QaG90b3NBbGJ1bSIsImZpbGVQYXRoIiwicGF0aCIsInJlczIiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsImZhaWwiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2FuY2VsIiwib3B0aW9ucyIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwiSlNPTiIsInBhcnNlIiwidGhhdCIsImdldFN5c3RlbUluZm8iLCJyZXMiLCJ3aW5kb3dXaWR0aCIsIiRhcHBseSIsImNhbCIsInB4IiwibGluZVdyYXAiLCJjdHgiLCJzdHIiLCJmb250c2l6ZSIsImxpbmVoZWlnaHQiLCJ4IiwieSIsInNldEZvbnRTaXplIiwidGV4dEFyciIsImluZGV4IiwiaSIsImxlbmd0aCIsIm1lYXN1cmVUZXh0Iiwic3Vic3RyaW5nIiwicHVzaCIsImZpbGxUZXh0IiwiY3JlYXRlQ2FudmFzQ29udGV4dCIsInNldEZpbGxTdHlsZSIsImZpbGxSZWN0IiwiQ29tbW9kaXR5TmFtZSIsImRhdGUiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJ0cmFuc2xhdGUiLCJzZXRUZXh0QWxpZ24iLCJub3ciLCJ0b1N0cmluZyIsInN1YnN0ciIsIk1hdGgiLCJyYW5kb20iLCJzcGxpdCIsInNldFN0cm9rZVN0eWxlIiwic3Ryb2tlUmVjdCIsInJvdyIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsImRpc2NyaXB0aW9uIiwiQW1vdW50SW5GaWd1ZXJzIiwicGFyc2VGbG9hdCIsIkNvbW1vZGl0eUFtb3VudCIsIndvcmQiLCJ0b0ZpeGVkIiwiQ29tbW9kaXR5VGF4IiwiYmVnaW5QYXRoIiwibGVmdFRpdGxlIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsIm5pY2tOYW1lIiwiSW52b2ljZU51bSIsImJlbG9uZ1Byb2plY3QiLCJQdXJjaGFzZXJOYW1lIiwiZHJhdyIsImNhbnZhc1RvVGVtcEZpbGVQYXRoIiwiZmlsZVR5cGUiLCJxdWFsaXR5IiwiY2FudmFzSWQiLCJoaWRlVG9hc3QiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUliQyxJLEdBQU87QUFDTEMsYUFBTyxDQURGO0FBRUxDLGNBQVEsQ0FGSDtBQUdMQyxjQUFRLEVBSEg7QUFJTEMsb0JBQWMsRUFKVDtBQUtMQyxtQkFBYTtBQUxSLEssUUFRUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1JDLG1CQURRLDJCQUNTO0FBQ2YsWUFBSUMsUUFBUSxJQUFaO0FBQ0lDLFdBQUdDLFlBQUgsQ0FBZ0I7QUFDZEMsZUFBS0gsTUFBTUwsWUFERztBQUVkUyxpQkFGYyxtQkFFTEMsSUFGSyxFQUVDO0FBQ2JKLGVBQUdLLHNCQUFILENBQTBCO0FBQ3RCQyx3QkFBVUYsS0FBS0csSUFETztBQUV0QkosdUJBQVMsaUJBQVVLLElBQVYsRUFBZ0I7QUFDdkJSLG1CQUFHUyxZQUFILENBQWdCO0FBQ1pDLHlCQUFPO0FBREssaUJBQWhCO0FBR0QsZUFOcUI7QUFPdEJDLG9CQUFNLGNBQVVDLEdBQVYsRUFBZTtBQUNuQkMsd0JBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNEO0FBVHFCLGFBQTFCO0FBV0Q7QUFkYSxTQUFoQjtBQWdCTCxPQW5CTztBQW9CUkcsa0JBcEJRLDBCQW9CUTtBQUNkZixXQUFHUyxZQUFILENBQWdCO0FBQ1pDLGlCQUFPO0FBREssU0FBaEI7QUFHRDtBQXhCTyxLOzs7OzsyQkEyQkZNLE8sRUFBUztBQUFBOztBQUNkaEIsU0FBR2lCLFNBQUgsQ0FBYTtBQUNYQyxlQUFPLFFBREk7QUFFWEMsY0FBTSxTQUZLO0FBR1hDLGtCQUFVO0FBSEMsT0FBYjtBQUtELFdBQUszQixNQUFMLEdBQWM0QixLQUFLQyxLQUFMLENBQVdOLFFBQVF2QixNQUFuQixDQUFkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFJOEIsT0FBTyxJQUFYOztBQUVBO0FBQ0F2QixTQUFHd0IsYUFBSCxDQUFpQjtBQUNmckIsZUFEZSxtQkFDUHNCLEdBRE8sRUFDRjtBQUNYRixlQUFLaEMsS0FBTCxHQUFha0MsSUFBSUMsV0FBakI7QUFDQUgsZUFBS0ksTUFBTDtBQUNBO0FBQ0Q7QUFMYyxPQUFqQjs7QUFTSjtBQUNJO0FBQ0EsVUFBSUMsTUFBTSxTQUFOQSxHQUFNLENBQUNDLEVBQUQsRUFBUTtBQUNoQixlQUFRQSxLQUFLLEdBQUwsR0FBV04sS0FBS2hDLEtBQXhCO0FBQ0QsT0FGRDs7QUFJQTtBQUNBLFVBQUl1QyxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLFFBQVgsRUFBcUJDLFVBQXJCLEVBQWlDM0MsS0FBakMsRUFBd0M0QyxDQUF4QyxFQUEyQ0MsQ0FBM0MsRUFBaUQ7QUFDOURMLFlBQUlNLFdBQUosQ0FBZ0JKLFFBQWhCO0FBQ0EsWUFBSUssVUFBVSxFQUFkO0FBQ0EsWUFBSUMsUUFBUSxDQUFaO0FBQ0EsYUFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlSLElBQUlTLE1BQXhCLEVBQWdDRCxHQUFoQyxFQUFxQztBQUNuQyxjQUFJVCxJQUFJVyxXQUFKLENBQWdCVixJQUFJVyxTQUFKLENBQWNKLEtBQWQsRUFBcUJDLENBQXJCLENBQWhCLEVBQXlDakQsS0FBekMsSUFBa0RBLFFBQVEsR0FBOUQsRUFBbUU7QUFDakUrQyxvQkFBUU0sSUFBUixDQUFhWixJQUFJVyxTQUFKLENBQWNKLEtBQWQsRUFBcUJDLENBQXJCLENBQWI7QUFDQUQsb0JBQVFDLENBQVI7QUFDRDtBQUNGOztBQUVERixnQkFBUU0sSUFBUixDQUFhWixJQUFJVyxTQUFKLENBQWNKLEtBQWQsQ0FBYjs7QUFFQSxhQUFLLElBQUlDLEtBQUksQ0FBYixFQUFnQkEsS0FBSUYsUUFBUUcsTUFBNUIsRUFBb0NELElBQXBDLEVBQXlDO0FBQ3ZDVCxjQUFJYyxRQUFKLENBQWFQLFFBQVFFLEVBQVIsQ0FBYixFQUF5QkwsQ0FBekIsRUFBNEJDLElBQUlGLGNBQWNNLEtBQUksQ0FBbEIsQ0FBaEM7QUFDRDtBQUNGLE9BaEJEOztBQWtCQSxVQUFNVCxNQUFNL0IsR0FBRzhDLG1CQUFILENBQXVCLFVBQXZCLENBQVo7O0FBRUFmLFVBQUlnQixZQUFKLENBQWlCLE9BQWpCO0FBQ0FoQixVQUFJaUIsUUFBSixDQUFhcEIsSUFBSSxDQUFKLENBQWIsRUFBcUJBLElBQUksQ0FBSixDQUFyQixFQUE2QkEsSUFBSSxHQUFKLENBQTdCLEVBQXVDQSxJQUFJLEdBQUosSUFBVyxDQUFDLElBQUksSUFBSSxLQUFLbkMsTUFBTCxDQUFZd0QsYUFBWixDQUEwQlIsTUFBbkMsSUFBNkNiLElBQUksRUFBSixDQUEvRjtBQUNBRyxVQUFJZ0IsWUFBSixDQUFpQixPQUFqQjs7QUFFQTtBQUNBaEIsVUFBSU0sV0FBSixDQUFnQlQsSUFBSSxFQUFKLENBQWhCO0FBQ0FHLFVBQUljLFFBQUosQ0FBYSxNQUFiLEVBQXFCakIsSUFBSSxHQUFKLENBQXJCLEVBQStCQSxJQUFJLEVBQUosQ0FBL0I7O0FBRUE7QUFDQSxVQUFJc0IsT0FBTyxJQUFJQyxJQUFKLEVBQVg7QUFDQSxVQUFJQyxPQUFPRixLQUFLRyxXQUFMLEVBQVg7QUFDQSxVQUFJQyxRQUFRSixLQUFLSyxRQUFMLEtBQWtCLENBQTlCO0FBQ0EsVUFBSUMsTUFBTU4sS0FBS08sT0FBTCxFQUFWO0FBQ0ExQixVQUFJMkIsU0FBSixDQUFjOUIsSUFBSSxHQUFKLENBQWQsRUFBd0JBLElBQUksRUFBSixDQUF4QjtBQUNBRyxVQUFJTSxXQUFKLENBQWdCVCxJQUFJLEVBQUosQ0FBaEI7QUFDQUcsVUFBSTRCLFlBQUosQ0FBaUIsT0FBakI7QUFDQTVCLFVBQUljLFFBQUosQ0FBYU8sT0FBTyxLQUFQLEdBQWVFLEtBQWYsR0FBdUIsS0FBdkIsR0FBK0JFLEdBQS9CLEdBQXFDLGNBQXJDLEdBQXNETCxLQUFLUyxHQUFMLEdBQVdDLFFBQVgsR0FBc0JDLE1BQXRCLENBQTZCLENBQTdCLENBQXRELEdBQXdGLENBQUNDLEtBQUtDLE1BQUwsS0FBZSxHQUFoQixFQUFxQkgsUUFBckIsR0FBZ0NJLEtBQWhDLENBQXNDLEdBQXRDLEVBQTJDLENBQTNDLENBQXhGLEdBQXdJLElBQXJKLEVBQTJKckMsSUFBSSxDQUFKLENBQTNKLEVBQW1LQSxJQUFJLEVBQUosQ0FBbks7QUFDQUcsVUFBSTRCLFlBQUosQ0FBaUIsUUFBakI7QUFDQTVCLFVBQUk0QixZQUFKLENBQWlCLFFBQWpCO0FBQ0E1QixVQUFJNEIsWUFBSixDQUFpQixRQUFqQjs7QUFFQTtBQUNBO0FBQ0E1QixVQUFJMkIsU0FBSixDQUFjOUIsSUFBSSxDQUFDLEdBQUwsQ0FBZCxFQUF5QkEsSUFBSSxFQUFKLENBQXpCO0FBQ0FHLFVBQUltQyxjQUFKLENBQW1CLE1BQW5CO0FBQ0FuQyxVQUFJb0MsVUFBSixDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUJ2QyxJQUFJLEdBQUosQ0FBckIsRUFBK0JBLElBQUksRUFBSixLQUFXLEtBQUtuQyxNQUFMLENBQVl3RCxhQUFaLENBQTBCUixNQUExQixHQUFtQyxDQUFuQyxHQUF3QyxDQUFuRCxDQUEvQjs7QUFFQTtBQUNBLFVBQUkyQixNQUFNLEtBQUszRSxNQUFMLENBQVl3RCxhQUFaLENBQTBCUixNQUExQixHQUFtQyxDQUFuQyxHQUF1QyxDQUFqRDtBQUNBLFdBQUssSUFBSUQsSUFBSSxDQUFiLEVBQWdCQSxJQUFJNEIsTUFBTSxDQUExQixFQUE2QjVCLEdBQTdCLEVBQWtDO0FBQ2hDVCxZQUFJbUMsY0FBSixDQUFtQixNQUFuQjtBQUNBbkMsWUFBSXNDLE1BQUosQ0FBV3pDLElBQUksR0FBSixDQUFYLEVBQXFCQSxJQUFJLEVBQUosSUFBVVksQ0FBL0I7QUFDQVQsWUFBSXVDLE1BQUosQ0FBVzFDLElBQUksR0FBSixDQUFYLEVBQXFCQSxJQUFJLEVBQUosSUFBVVksQ0FBL0I7QUFDQVQsWUFBSXdDLE1BQUo7QUFDRDs7QUFFRHhDLFVBQUlzQyxNQUFKLENBQVcsQ0FBWCxFQUFjekMsSUFBSSxFQUFKLENBQWQ7QUFDQUcsVUFBSXVDLE1BQUosQ0FBVzFDLElBQUksR0FBSixDQUFYLEVBQXFCQSxJQUFJLEVBQUosQ0FBckI7O0FBRUFHLFVBQUlzQyxNQUFKLENBQVcsQ0FBWCxFQUFjekMsSUFBSSxFQUFKLEtBQVd3QyxNQUFLLENBQWhCLENBQWQ7QUFDQXJDLFVBQUl1QyxNQUFKLENBQVcxQyxJQUFJLEdBQUosQ0FBWCxFQUFxQkEsSUFBSSxFQUFKLEtBQVd3QyxNQUFLLENBQWhCLENBQXJCOztBQUVBckMsVUFBSXNDLE1BQUosQ0FBVyxDQUFYLEVBQWN6QyxJQUFJLEVBQUosSUFBVXdDLEdBQXhCO0FBQ0FyQyxVQUFJdUMsTUFBSixDQUFXMUMsSUFBSSxHQUFKLENBQVgsRUFBcUJBLElBQUksRUFBSixJQUFVd0MsR0FBL0I7O0FBRUFyQyxVQUFJc0MsTUFBSixDQUFXekMsSUFBSSxHQUFKLENBQVgsRUFBcUIsQ0FBckI7QUFDQUcsVUFBSXVDLE1BQUosQ0FBVzFDLElBQUksR0FBSixDQUFYLEVBQXFCQSxJQUFJLEVBQUosS0FBV3dDLE1BQUssQ0FBaEIsQ0FBckI7O0FBRUFyQyxVQUFJc0MsTUFBSixDQUFXekMsSUFBSSxHQUFKLENBQVgsRUFBcUJBLElBQUksRUFBSixDQUFyQjtBQUNBRyxVQUFJdUMsTUFBSixDQUFXMUMsSUFBSSxHQUFKLENBQVgsRUFBcUJBLElBQUksRUFBSixLQUFXd0MsTUFBTSxDQUFqQixDQUFyQjs7QUFFQXJDLFVBQUlzQyxNQUFKLENBQVd6QyxJQUFJLEdBQUosQ0FBWCxFQUFxQkEsSUFBSSxFQUFKLENBQXJCO0FBQ0FHLFVBQUl1QyxNQUFKLENBQVcxQyxJQUFJLEdBQUosQ0FBWCxFQUFxQkEsSUFBSSxFQUFKLENBQXJCOztBQUVBRyxVQUFJc0MsTUFBSixDQUFXekMsSUFBSSxHQUFKLENBQVgsRUFBcUIsQ0FBckI7QUFDQUcsVUFBSXVDLE1BQUosQ0FBVzFDLElBQUksR0FBSixDQUFYLEVBQXFCQSxJQUFJLEVBQUosSUFBVXdDLEdBQS9COztBQUVBckMsVUFBSXNDLE1BQUosQ0FBV3pDLElBQUksR0FBSixDQUFYLEVBQXFCLENBQXJCO0FBQ0FHLFVBQUl1QyxNQUFKLENBQVcxQyxJQUFJLEdBQUosQ0FBWCxFQUFxQkEsSUFBSSxFQUFKLElBQVV3QyxHQUEvQjs7QUFFQXJDLFVBQUl3QyxNQUFKOztBQUVBO0FBQ0F4QyxVQUFJTSxXQUFKLENBQWdCVCxJQUFJLEVBQUosQ0FBaEI7QUFDQUcsVUFBSTRCLFlBQUosQ0FBaUIsUUFBakI7QUFDQTVCLFVBQUljLFFBQUosQ0FBYSxJQUFiLEVBQW1CakIsSUFBSSxHQUFKLENBQW5CLEVBQTZCQSxJQUFJLEVBQUosQ0FBN0I7QUFDQUcsVUFBSWMsUUFBSixDQUFhLE1BQWIsRUFBcUJqQixJQUFJLEdBQUosQ0FBckIsRUFBK0JBLElBQUksRUFBSixDQUEvQjtBQUNBRyxVQUFJYyxRQUFKLENBQWEsTUFBYixFQUFxQmpCLElBQUksR0FBSixDQUFyQixFQUErQkEsSUFBSSxFQUFKLENBQS9COztBQUVBRyxVQUFJTSxXQUFKLENBQWdCVCxJQUFJLEVBQUosQ0FBaEI7QUFDQUcsVUFBSWMsUUFBSixDQUFhLE1BQWIsRUFBcUJqQixJQUFJLEdBQUosQ0FBckIsRUFBK0JBLElBQUksRUFBSixDQUEvQjtBQUNBRyxVQUFJYyxRQUFKLENBQWEsTUFBYixFQUFxQmpCLElBQUksR0FBSixDQUFyQixFQUErQkEsSUFBSSxFQUFKLENBQS9CO0FBQ0FHLFVBQUljLFFBQUosQ0FBYSxNQUFiLEVBQXFCakIsSUFBSSxHQUFKLENBQXJCLEVBQStCQSxJQUFJLEVBQUosQ0FBL0I7O0FBRUE7QUFDQTtBQUNBRyxVQUFJMkIsU0FBSixDQUFjLENBQWQsRUFBaUI5QixJQUFJLEVBQUosQ0FBakI7QUFDQUUsZUFBU0MsR0FBVCxFQUFjLEtBQUt0QyxNQUFMLENBQVkrRSxXQUExQixFQUF1QzVDLElBQUksRUFBSixDQUF2QyxFQUFnREEsSUFBSSxFQUFKLENBQWhELEVBQXlEQSxJQUFJLEdBQUosQ0FBekQsRUFBbUVBLElBQUksR0FBSixDQUFuRSxFQUE2RUEsSUFBSSxFQUFKLENBQTdFOztBQUVBO0FBQ0FHLFVBQUljLFFBQUosQ0FBYSxNQUFiLEVBQXFCakIsSUFBSSxHQUFKLENBQXJCLEVBQStCQSxJQUFJLEVBQUosQ0FBL0I7QUFDQUcsVUFBSWMsUUFBSixDQUFhLE1BQWIsRUFBcUJqQixJQUFJLEdBQUosQ0FBckIsRUFBK0JBLElBQUksRUFBSixDQUEvQjtBQUNBRyxVQUFJYyxRQUFKLENBQWEsS0FBS3BELE1BQUwsQ0FBWWdGLGVBQXpCLEVBQTBDN0MsSUFBSSxHQUFKLENBQTFDLEVBQW9EQSxJQUFJLEVBQUosQ0FBcEQ7O0FBRUE7QUFDQSxXQUFLLElBQUlZLE1BQUksQ0FBYixFQUFnQkEsTUFBSSxLQUFLL0MsTUFBTCxDQUFZd0QsYUFBWixDQUEwQlIsTUFBOUMsRUFBc0RELEtBQXRELEVBQTJEO0FBQ3pEVCxZQUFJYyxRQUFKLENBQWEsTUFBYixFQUFxQmpCLElBQUksR0FBSixDQUFyQixFQUErQkEsSUFBSSxFQUFKLElBQVUsQ0FBQyxJQUFJLElBQUlZLEdBQVQsSUFBY1osSUFBSSxFQUFKLENBQXZEO0FBQ0FHLFlBQUljLFFBQUosQ0FBYSxRQUFiLEVBQXVCakIsSUFBSSxHQUFKLENBQXZCLEVBQWlDQSxJQUFJLEVBQUosSUFBVSxDQUFDLElBQUksSUFBSVksR0FBVCxJQUFjWixJQUFJLEVBQUosQ0FBekQ7QUFDQUcsWUFBSWMsUUFBSixDQUFhNkIsV0FBVyxLQUFLakYsTUFBTCxDQUFZa0YsZUFBWixDQUE0Qm5DLEdBQTVCLEVBQStCb0MsSUFBL0IsR0FBc0MsR0FBakQsRUFBc0RDLE9BQXRELENBQThELENBQTlELENBQWIsRUFBK0VqRCxJQUFJLEdBQUosQ0FBL0UsRUFBeUZBLElBQUksRUFBSixJQUFVLENBQUMsSUFBSSxJQUFJWSxHQUFULElBQWNaLElBQUksRUFBSixDQUFqSDs7QUFFQUcsWUFBSWMsUUFBSixDQUFhLFlBQWIsRUFBMkJqQixJQUFJLEdBQUosQ0FBM0IsRUFBcUNBLElBQUksRUFBSixJQUFVLENBQUMsSUFBSSxJQUFJWSxHQUFULElBQWNaLElBQUksRUFBSixDQUE3RDtBQUNBRSxpQkFBU0MsR0FBVCxFQUFjLGtCQUFkLEVBQWtDSCxJQUFJLEVBQUosQ0FBbEMsRUFBMkNBLElBQUksRUFBSixDQUEzQyxFQUFvREEsSUFBSSxHQUFKLENBQXBELEVBQThEQSxJQUFJLEdBQUosQ0FBOUQsRUFBd0VBLElBQUksQ0FBSixJQUFTLENBQUMsSUFBSSxJQUFJWSxHQUFULElBQWNaLElBQUksRUFBSixDQUEvRjtBQUNBO0FBQ0FHLFlBQUljLFFBQUosQ0FBYTZCLFdBQVcsS0FBS2pGLE1BQUwsQ0FBWXFGLFlBQVosQ0FBeUJ0QyxHQUF6QixFQUE0Qm9DLElBQTVCLEdBQW1DLEdBQTlDLEVBQW1EQyxPQUFuRCxDQUEyRCxDQUEzRCxDQUFiLEVBQTRFakQsSUFBSSxHQUFKLENBQTVFLEVBQXNGQSxJQUFJLEVBQUosSUFBVSxDQUFDLElBQUksSUFBSVksR0FBVCxJQUFjWixJQUFJLEVBQUosQ0FBOUc7QUFDRDs7QUFFRDtBQUNBRyxVQUFJMkIsU0FBSixDQUFjLENBQWQsRUFBaUI5QixJQUFJLEVBQUosS0FBVyxLQUFLbkMsTUFBTCxDQUFZd0QsYUFBWixDQUEwQlIsTUFBMUIsR0FBbUMsQ0FBbkMsR0FBdUMsQ0FBbEQsQ0FBakI7QUFDQVYsVUFBSWMsUUFBSixDQUFhLElBQWIsRUFBbUJqQixJQUFJLEdBQUosQ0FBbkIsRUFBNkJBLElBQUksRUFBSixDQUE3QjtBQUNBRyxVQUFJYyxRQUFKLENBQWEsS0FBS3BELE1BQUwsQ0FBWWdGLGVBQXpCLEVBQTBDN0MsSUFBSSxHQUFKLENBQTFDLEVBQW9EQSxJQUFJLEVBQUosQ0FBcEQ7QUFDQUcsVUFBSWMsUUFBSixDQUFhLEtBQUtwRCxNQUFMLENBQVlnRixlQUF6QixFQUEwQzdDLElBQUksR0FBSixDQUExQyxFQUFvREEsSUFBSSxFQUFKLENBQXBEOztBQUVBO0FBQ0FHLFVBQUlnRCxTQUFKO0FBQ0E7QUFDQWhELFVBQUkyQixTQUFKLENBQWMsQ0FBZCxFQUFpQjlCLElBQUksRUFBSixDQUFqQjtBQUNBLFVBQUlvRCxZQUFZLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxLQUFmLEVBQXNCLElBQXRCLENBQWhCO0FBQ0EsV0FBSyxJQUFJeEMsTUFBSSxDQUFiLEVBQWdCQSxPQUFLLENBQXJCLEVBQXdCQSxLQUF4QixFQUE2QjtBQUMzQlQsWUFBSWMsUUFBSixDQUFhbUMsVUFBVXhDLE1BQUksQ0FBZCxDQUFiLEVBQStCWixJQUFJLEVBQUosQ0FBL0IsRUFBd0NBLElBQUksRUFBSixJQUFVLENBQUNZLE1BQUksQ0FBTCxJQUFVWixJQUFJLEVBQUosQ0FBNUQ7QUFDQUcsWUFBSXNDLE1BQUosQ0FBVyxDQUFYLEVBQWN6QyxJQUFJLEVBQUosSUFBVVksR0FBeEI7QUFDQVQsWUFBSXVDLE1BQUosQ0FBVzFDLElBQUksR0FBSixDQUFYLEVBQXFCQSxJQUFJLEVBQUosSUFBVVksR0FBL0I7QUFDRDs7QUFFRFQsVUFBSXNDLE1BQUosQ0FBV3pDLElBQUksR0FBSixDQUFYLEVBQXFCQSxJQUFJLEVBQUosQ0FBckI7QUFDQUcsVUFBSXVDLE1BQUosQ0FBVzFDLElBQUksR0FBSixDQUFYLEVBQXFCQSxJQUFJLEVBQUosSUFBVSxDQUEvQjtBQUNBRyxVQUFJYyxRQUFKLENBQWEsSUFBYixFQUFtQmpCLElBQUksR0FBSixDQUFuQixFQUE2QkEsSUFBSSxFQUFKLElBQVVBLElBQUksRUFBSixDQUF2Qzs7QUFFQUcsVUFBSXNDLE1BQUosQ0FBV3pDLElBQUksR0FBSixDQUFYLEVBQXFCQSxJQUFJLEVBQUosQ0FBckI7QUFDQUcsVUFBSXVDLE1BQUosQ0FBVzFDLElBQUksR0FBSixDQUFYLEVBQXFCQSxJQUFJLEVBQUosSUFBVSxDQUEvQjtBQUNBRyxVQUFJYyxRQUFKLENBQWEsT0FBYixFQUFzQmpCLElBQUksR0FBSixDQUF0QixFQUFnQ0EsSUFBSSxFQUFKLElBQVUsQ0FBVixHQUFjQSxJQUFJLEVBQUosQ0FBOUM7O0FBRUFHLFVBQUlzQyxNQUFKLENBQVd6QyxJQUFJLEdBQUosQ0FBWCxFQUFxQixDQUFyQjtBQUNBRyxVQUFJdUMsTUFBSixDQUFXMUMsSUFBSSxHQUFKLENBQVgsRUFBcUJBLElBQUksRUFBSixJQUFVLENBQS9CO0FBQ0FHLFVBQUljLFFBQUosQ0FBYSxNQUFiLEVBQXFCakIsSUFBSSxHQUFKLENBQXJCLEVBQStCQSxJQUFJLEVBQUosSUFBVSxDQUFWLEdBQWNBLElBQUksRUFBSixDQUE3Qzs7QUFFQUcsVUFBSXNDLE1BQUosQ0FBVyxDQUFYLEVBQWMsQ0FBZDtBQUNBdEMsVUFBSXVDLE1BQUosQ0FBVyxDQUFYLEVBQWMxQyxJQUFJLEVBQUosSUFBVSxDQUF4Qjs7QUFFQUcsVUFBSXNDLE1BQUosQ0FBV3pDLElBQUksR0FBSixDQUFYLEVBQXFCLENBQXJCO0FBQ0FHLFVBQUl1QyxNQUFKLENBQVcxQyxJQUFJLEdBQUosQ0FBWCxFQUFxQkEsSUFBSSxFQUFKLElBQVUsQ0FBL0I7O0FBRUFHLFVBQUlzQyxNQUFKLENBQVd6QyxJQUFJLEdBQUosQ0FBWCxFQUFxQixDQUFyQjtBQUNBRyxVQUFJdUMsTUFBSixDQUFXMUMsSUFBSSxHQUFKLENBQVgsRUFBcUJBLElBQUksRUFBSixDQUFyQjtBQUNBLFVBQUlWLFFBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsQ0FBWjtBQUNBLFdBQUssSUFBSXNCLE1BQUksQ0FBYixFQUFnQkEsTUFBSSxDQUFwQixFQUF1QkEsS0FBdkIsRUFBNEI7QUFDMUJULFlBQUljLFFBQUosQ0FBYTNCLE1BQU1zQixHQUFOLENBQWIsRUFBdUJaLElBQUksTUFBTSxNQUFNWSxHQUFaLEdBQWdCLEVBQXBCLENBQXZCLEVBQWdEWixJQUFJLEVBQUosQ0FBaEQ7QUFDQUcsWUFBSXNDLE1BQUosQ0FBV3pDLElBQUksTUFBTSxNQUFNWSxHQUFaLEdBQWdCLEVBQXBCLENBQVgsRUFBb0MsQ0FBcEM7QUFDQVQsWUFBSXVDLE1BQUosQ0FBVzFDLElBQUksTUFBTSxNQUFNWSxHQUFaLEdBQWdCLEVBQXBCLENBQVgsRUFBb0NaLElBQUksRUFBSixDQUFwQztBQUNBRyxZQUFJc0MsTUFBSixDQUFXekMsSUFBSSxNQUFNLE1BQU1ZLEdBQVosR0FBZ0IsR0FBcEIsQ0FBWCxFQUFxQyxDQUFyQztBQUNBVCxZQUFJdUMsTUFBSixDQUFXMUMsSUFBSSxNQUFNLE1BQU1ZLEdBQVosR0FBZ0IsR0FBcEIsQ0FBWCxFQUFxQ1osSUFBSSxFQUFKLENBQXJDO0FBQ0Q7QUFDREcsVUFBSXdDLE1BQUo7O0FBRUF4QyxVQUFJYyxRQUFKLENBQWEsS0FBS29DLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsUUFBeEIsQ0FBaUNDLFFBQTlDLEVBQXdEeEQsSUFBSSxNQUFNLE1BQU0sQ0FBWixHQUFnQixFQUFwQixDQUF4RCxFQUFpRkEsSUFBSSxFQUFKLENBQWpGO0FBQ0FHLFVBQUljLFFBQUosQ0FBYSxLQUFLcEQsTUFBTCxDQUFZNEYsVUFBekIsRUFBcUN6RCxJQUFJLEdBQUosQ0FBckMsRUFBK0NBLElBQUksRUFBSixJQUFVQSxJQUFJLEVBQUosSUFBVSxDQUFuRTtBQUNBLFdBQUtuQyxNQUFMLENBQVk2RixhQUFaLElBQTZCdkQsSUFBSWMsUUFBSixDQUFhLEtBQUtwRCxNQUFMLENBQVk2RixhQUF6QixFQUF3QzFELElBQUksR0FBSixDQUF4QyxFQUFrREEsSUFBSSxFQUFKLElBQVVBLElBQUksRUFBSixJQUFVLENBQXRFLENBQTdCO0FBQ0FHLFVBQUljLFFBQUosQ0FBYSxLQUFLcEQsTUFBTCxDQUFZOEYsYUFBekIsRUFBd0MzRCxJQUFJLEdBQUosQ0FBeEMsRUFBa0RBLElBQUksRUFBSixJQUFVQSxJQUFJLEVBQUosQ0FBNUQ7O0FBRUFHLFVBQUl5RCxJQUFKLENBQVMsSUFBVCxFQUFlLFlBQU07QUFDbkJqRSxhQUFLNUIsV0FBTCxHQUFtQmlDLElBQUksR0FBSixJQUFXLENBQUMsSUFBSSxJQUFJLE9BQUtuQyxNQUFMLENBQVl3RCxhQUFaLENBQTBCUixNQUFuQyxJQUE2Q2IsSUFBSSxFQUFKLENBQTNFO0FBQ0E1QixXQUFHeUYsb0JBQUgsQ0FBd0I7QUFDcEJ0RCxhQUFHLENBRGlCO0FBRXBCQyxhQUFHLENBRmlCO0FBR3BCN0MsaUJBQU9xQyxJQUFJLEdBQUosQ0FIYTtBQUlwQnBDLGtCQUFRb0MsSUFBSSxHQUFKLElBQVcsQ0FBQyxJQUFJLElBQUksT0FBS25DLE1BQUwsQ0FBWXdELGFBQVosQ0FBMEJSLE1BQW5DLElBQTZDYixJQUFJLEVBQUosQ0FKNUM7QUFLcEI4RCxvQkFBVSxLQUxVO0FBTXBCQyxtQkFBUyxHQU5XO0FBT3BCQyxvQkFBVSxVQVBVLEVBT0M7QUFDckJ6RixtQkFBUyxpQkFBQ3NCLEdBQUQsRUFBUztBQUNkekIsZUFBRzZGLFNBQUg7QUFDQTtBQUNBdEUsaUJBQUs3QixZQUFMLEdBQW9CK0IsSUFBSS9CLFlBQXhCO0FBQ0E2QixpQkFBS0ksTUFBTDtBQUNILFdBYm1CO0FBY3BCaEIsZ0JBQU0sY0FBQ0MsR0FBRCxFQUFTO0FBQ2JDLG9CQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDRDtBQWhCbUIsU0FBeEI7QUFrQkQsT0FwQkQ7QUFxQkQ7Ozs7RUF0YStCa0YsZUFBS0MsSTs7a0JBQWxCN0csSSIsImZpbGUiOiJzYWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHV0aWwgZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2FsZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Yet6K+BJ1xuICB9XG4gIGNvbXBvbmVudHMgPSB7XG5cbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIHJlc3VsdDoge30sXG4gICAgdGVtcEZpbGVQYXRoOiAnJyxcbiAgICBpbWFnZUhlaWdodDogMCxcbiAgfVxuXG4gIGNvbXB1dGVkID0ge31cblxuICBtZXRob2RzID0ge1xuICAgIGhhbmxkZVNhdmVQaWMgKCkge1xuICAgICAgbGV0IF9zZWxmID0gdGhpc1xuICAgICAgICAgIHd4LmdldEltYWdlSW5mbyh7XG4gICAgICAgICAgICBzcmM6IF9zZWxmLnRlbXBGaWxlUGF0aCxcbiAgICAgICAgICAgIHN1Y2Nlc3MgKHJlczEpIHtcbiAgICAgICAgICAgICAgd3guc2F2ZUltYWdlVG9QaG90b3NBbGJ1bSh7XG4gICAgICAgICAgICAgICAgICBmaWxlUGF0aDogcmVzMS5wYXRoLFxuICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlczIpIHtcbiAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgaGFuZGxlQ2FuY2VsICgpIHtcbiAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgZGVsdGE6IDFcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgdGl0bGU6ICfmraPlnKjnlJ/miJDlh63or4EnLFxuICAgICAgIGljb246ICdsb2FkaW5nJyxcbiAgICAgICBkdXJhdGlvbjogMTAwMDBcbiAgICAgfSlcbiAgICB0aGlzLnJlc3VsdCA9IEpTT04ucGFyc2Uob3B0aW9ucy5yZXN1bHQpXG4gICAgLy8gdGhpcy5yZXN1bHQgPSB7XG4gICAgLy8gICBcIkludm9pY2VOdW1cIjogXCIzMjMzMDczOVwiLFxuICAgIC8vICAgXCJTZWxsZXJOYW1lXCI6IFwi5YyX5Lqs5Yag5pyI6aSQ6aWu566h55CG5pyJ6ZmQ5YWs5Y+4XCIsXG4gICAgLy8gICBcIkNvbW1vZGl0eVRheFJhdGVcIjogW3tcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiNiVcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH1dLFxuICAgIC8vICAgXCJTZWxsZXJCYW5rXCI6IFwi5YyX5Lqs5biC5rW35reA5Yy65Lit5YWz5p2R5Lic6LevMeWPt+mZojLlj7fmpbwxMDHlrqQ2Mjc5ODk4OFwiLFxuICAgIC8vICAgXCJDaGVja2VyXCI6IFwiXCIsXG4gICAgLy8gICBcIlRvdGFsQW1vdW50XCI6IFwiMTg2NDcuMTdcIixcbiAgICAvLyAgIFwiQ29tbW9kaXR5QW1vdW50XCI6IFtcbiAgICAvLyAgICAge1xuICAgIC8vICAgICBcIndvcmRcIjogXCIxODY0Ny4xN1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICBcIndvcmRcIjogXCIxODY0Ny4xN1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICBcIndvcmRcIjogXCIxODY0Ny4xN1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICBcIndvcmRcIjogXCIxODY0Ny4xN1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICBcIndvcmRcIjogXCIxODY0Ny4xN1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICBcIndvcmRcIjogXCIxODY0Ny4xN1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICBcIndvcmRcIjogXCIxODY0Ny4xN1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICBcIndvcmRcIjogXCIxODY0Ny4xN1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfSxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiMTg2NDcuMTdcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIyXCJcbiAgICAvLyAgIH1dLFxuICAgIC8vICAgXCJJbnZvaWNlRGF0ZVwiOiBcIjIwMTjlubQwOOaciDE55pelXCIsXG4gICAgLy8gICBcIkNvbW1vZGl0eVRheFwiOiBbXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiMTExOC44M1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICBcIndvcmRcIjogXCIxMTE4LjgzXCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMVwiXG4gICAgLy8gICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIjExMTguODNcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiMTExOC44M1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICBcIndvcmRcIjogXCIxMTE4LjgzXCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMVwiXG4gICAgLy8gICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIjExMTguODNcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiMTExOC44M1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICBcIndvcmRcIjogXCIxMTE4LjgzXCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMVwiXG4gICAgLy8gICB9LFxuICAgIC8vICAgIHtcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiMTczOC44M1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjJcIlxuICAgIC8vICAgfV0sXG4gICAgLy8gICBcIlB1cmNoYXNlck5hbWVcIjogXCLkuIrmtbfmnInnlaXmlZnogrLnp5HmioDmnInpmZDlhazlj7hcIixcbiAgICAvLyAgIFwiQ29tbW9kaXR5TnVtXCI6IFt7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIlwiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfV0sXG4gICAgLy8gICBcIlB1cmNoYXNlckJhbmtcIjogXCJcIixcbiAgICAvLyAgIFwiUmVtYXJrc1wiOiBcIuagoemqjOeggTAwMzQ1ODAyMjU2XCIsXG4gICAgLy8gICBcIlBhc3N3b3JkXCI6IFwiNTIvLzU1MDErMTQ5MDYtKzAzPC0zMDg0LTg5PDk4MDcxOT4rMjUtNCs2Mzg2Nzw4MzwrMDMwMS0qMDErOTwqMC85MDwvNDYtPDAyOTg4ND41NC0yOD4+MDM5LysvMzYqKzkzLzc4NT4wND5cIixcbiAgICAvLyAgIFwiU2VsbGVyQWRkcmVzc1wiOiBcIuWPtzEwMeWupDYyNzk4OTg4OTExXCIsXG4gICAgLy8gICBcIlB1cmNoYXNlckFkZHJlc3NcIjogXCJcIixcbiAgICAvLyAgIFwiSW52b2ljZUNvZGVcIjogXCIwMTEwMDE4MDAxMDRcIixcbiAgICAvLyAgIFwiQ29tbW9kaXR5VW5pdFwiOiBbe1xuICAgIC8vICAgICBcIndvcmRcIjogXCJcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH1dLFxuICAgIC8vICAgXCJQYXllZVwiOiBcIueUhOWpt1wiLFxuICAgIC8vICAgXCJQdXJjaGFzZXJSZWdpc3Rlck51bVwiOiBcIjkxMzEwMTEwTUFHMFdOXCIsXG4gICAgLy8gICBcIkNvbW1vZGl0eVByaWNlXCI6IFt7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIlwiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfV0sXG4gICAgLy8gICBcIk5vdGVEcmF3ZXJcIjogXCLpob7mlrDmnbBcIixcbiAgICAvLyAgIFwiQW1vdW50SW5Xb3Jkc1wiOiBcIuS4h+S7n+afkuS9sOmZhuaLvumZhuWchuaVtFwiLFxuICAgIC8vICAgXCJBbW91bnRJbkZpZ3VlcnNcIjogXCIxOTc2Ni4wMFwiLFxuICAgIC8vICAgXCJUb3RhbFRheFwiOiBcIjExMTguMzBcIixcbiAgICAvLyAgIFwiSW52b2ljZVR5cGVcIjogXCLkuJPnlKjlj5HnpahcIixcbiAgICAvLyAgIFwiU2VsbGVyUmVnaXN0ZXJOdW1cIjogXCI5MTExMDEwODc5NzU4MzQzMzhcIixcbiAgICAvLyAgIFwiQ29tbW9kaXR5TmFtZVwiOiBbXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiKumkkOmlruacjeWKoSrppJDotLlcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiKumkkOmlruacjeWKoSrppJDotLlcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiKumkkOmlruacjeWKoSrppJDotLlcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiKumkkOmlruacjeWKoSrppJDotLlcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiKumkkOmlruacjeWKoSrppJDotLlcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiKumkkOmlruacjeWKoSrppJDotLlcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiKumkkOmlruacjeWKoSrppJDotLlcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiKumkkOmlruacjeWKoSrppJDotLlcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIxXCJcbiAgICAvLyAgIH0sXG4gICAgLy8gICB7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIiphaeaVmeiCslwiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjJcIlxuICAgIC8vICAgfV0sXG4gICAgLy8gICBcIkNvbW1vZGl0eVR5cGVcIjogW3tcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiXCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMVwiXG4gICAgLy8gICB9XSxcbiAgICAvLyAgIFwiQ2hlY2tDb2RlXCI6IFwiMDAzNDU4MDIyNTYxOTU5MDk0OVwiLFxuICAgIC8vICAgXCJpZGVudGl0eVwiOiBcIui0reS5sOaWuVwiLFxuICAgIC8vICAgXCJwYXlcIjogXCLkuJrliqHmi5vlvoVcIixcbiAgICAvLyAgIFwic291cmNlXCI6IFwi5YWs5Y+45ZGY5belXCIsXG4gICAgLy8gICBcInBlcnNvbk5hbWVcIjogXCLlvKDkuInllYpcIixcbiAgICAvLyAgIFwiZGlzY3JpcHRpb25cIjogXCLmiJHmnaXoh6rkuK3lm73vvIzmiJHlho1kamtka2rnm7Tmkq3vvIzmiJHlvpfov4fkuJbnlYzlhqDlhpvvvIzmiJHkuZ/lip7ov4fovaws5L2g6KaB6aKd5L2g6YO96IO96K6w5b6X55yL5pqX5Y+36YO95LyaXCIsXG4gICAgLy8gICBcImJlbG9uZ1Byb2plY3RcIjogXCLlpKnlnLDlpKflkIxcIlxuICAgIC8vIH1cblxuICAgIGxldCB0aGF0ID0gdGhpc1xuXG4gICAgLy8g6I635Y+W5bGP5bmV5a69XG4gICAgd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICB0aGF0LndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICAgIHRoYXQuJGFwcGx5KClcbiAgICAgICAgLy8gdGhhdC5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICB9XG4gICAgfSlcblxuXG4vLyDlh73mlbDlrprkuYnljLrln58gPT09PT09PT09PT09PT09PT09PVxuICAgIC8vIOiuvue9ruS4gOS4quWfuuWHhuavlOS+i1xuICAgIGxldCBjYWwgPSAocHgpID0+IHtcbiAgICAgIHJldHVybiAgcHggLyA3NTAgKiB0aGF0LndpZHRoXG4gICAgfVxuXG4gICAgLy8gY2FudmFz5o2i6KGM5pi+56S6XG4gICAgbGV0IGxpbmVXcmFwID0gKGN0eCwgc3RyLCBmb250c2l6ZSwgbGluZWhlaWdodCwgd2lkdGgsIHgsIHkpID0+IHtcbiAgICAgIGN0eC5zZXRGb250U2l6ZShmb250c2l6ZSlcbiAgICAgIGxldCB0ZXh0QXJyID0gW11cbiAgICAgIGxldCBpbmRleCA9IDBcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChjdHgubWVhc3VyZVRleHQoc3RyLnN1YnN0cmluZyhpbmRleCwgaSkpLndpZHRoID49IHdpZHRoICogMC44KSB7XG4gICAgICAgICAgdGV4dEFyci5wdXNoKHN0ci5zdWJzdHJpbmcoaW5kZXgsIGkpKVxuICAgICAgICAgIGluZGV4ID0gaVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRleHRBcnIucHVzaChzdHIuc3Vic3RyaW5nKGluZGV4KSlcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0QXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGN0eC5maWxsVGV4dCh0ZXh0QXJyW2ldLCB4LCB5ICsgbGluZWhlaWdodCAqIChpICsgMSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY3R4ID0gd3guY3JlYXRlQ2FudmFzQ29udGV4dCgnY2FudmFzSWQnKVxuXG4gICAgY3R4LnNldEZpbGxTdHlsZSgnd2hpdGUnKVxuICAgIGN0eC5maWxsUmVjdChjYWwoMCksIGNhbCgwKSwgY2FsKDc1MCksIGNhbCgxMjApICsgKDggKyAyICogdGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGgpICogY2FsKDM2KSlcbiAgICBjdHguc2V0RmlsbFN0eWxlKCdibGFjaycpXG5cbiAgICAvLyDmoIfpophcbiAgICBjdHguc2V0Rm9udFNpemUoY2FsKDIzKSlcbiAgICBjdHguZmlsbFRleHQoJ+iusOi0puWHreivgScsIGNhbCgzNzUpLCBjYWwoNDApKVxuXG4gICAgLy8g5pe26Ze05Y+K57yW5Y+3XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgICBsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxXG4gICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpXG4gICAgY3R4LnRyYW5zbGF0ZShjYWwoNzMwKSwgY2FsKDcwKSlcbiAgICBjdHguc2V0Rm9udFNpemUoY2FsKDEzKSlcbiAgICBjdHguc2V0VGV4dEFsaWduKCdyaWdodCcpXG4gICAgY3R4LmZpbGxUZXh0KHllYXIgKyAnIOW5tCAnICsgbW9udGggKyAnIOaciCAnICsgZGF5ICsgJyDlj7cgICAgICDorrDlrZfnrKwgJyArIERhdGUubm93KCkudG9TdHJpbmcoKS5zdWJzdHIoNikgKyAoTWF0aC5yYW5kb20oKSogMTAwKS50b1N0cmluZygpLnNwbGl0KCcuJylbMF0gKyAnIOWPtycsIGNhbCgwKSwgY2FsKDIyKSlcbiAgICBjdHguc2V0VGV4dEFsaWduKCdjZW50ZXInKVxuICAgIGN0eC5zZXRUZXh0QWxpZ24oJ2NlbnRlcicpXG4gICAgY3R4LnNldFRleHRBbGlnbignY2VudGVyJylcblxuICAgIC8vIOihqOagvFxuICAgIC8vIOWkluahhlxuICAgIGN0eC50cmFuc2xhdGUoY2FsKC03MTApLCBjYWwoNTApKVxuICAgIGN0eC5zZXRTdHJva2VTdHlsZSgnIzAwMCcpXG4gICAgY3R4LnN0cm9rZVJlY3QoMCwgMCwgY2FsKDcxMCksIGNhbCgzNikgKiAodGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKiAyICArIDMpKVxuXG4gICAgLy8g5YaF5qGGXG4gICAgbGV0IHJvdyA9IHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoICogMiArIDNcbiAgICBmb3IgKGxldCBpID0gMjsgaSA8IHJvdyAtIDE7IGkrKykge1xuICAgICAgY3R4LnNldFN0cm9rZVN0eWxlKCcjOTk5JylcbiAgICAgIGN0eC5tb3ZlVG8oY2FsKDIwMCksIGNhbCgzNikgKiBpKVxuICAgICAgY3R4LmxpbmVUbyhjYWwoNzEwKSwgY2FsKDM2KSAqIGkpXG4gICAgICBjdHguc3Ryb2tlKClcbiAgICB9XG5cbiAgICBjdHgubW92ZVRvKDAsIGNhbCgzNikpXG4gICAgY3R4LmxpbmVUbyhjYWwoNzEwKSwgY2FsKDM2KSlcblxuICAgIGN0eC5tb3ZlVG8oMCwgY2FsKDM2KSAqIChyb3cgLTEpKVxuICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikgKiAocm93IC0xKSlcblxuICAgIGN0eC5tb3ZlVG8oMCwgY2FsKDM2KSAqIHJvdylcbiAgICBjdHgubGluZVRvKGNhbCg3MTApLCBjYWwoMzYpICogcm93KVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMjAwKSwgMClcbiAgICBjdHgubGluZVRvKGNhbCgyMDApLCBjYWwoMzYpICogKHJvdyAtMSkpXG5cbiAgICBjdHgubW92ZVRvKGNhbCgzMzApLCBjYWwoMTgpKVxuICAgIGN0eC5saW5lVG8oY2FsKDMzMCksIGNhbCgzNikgKiAocm93IC0gMSkpXG5cbiAgICBjdHgubW92ZVRvKGNhbCgyMDApLCBjYWwoMTgpKVxuICAgIGN0eC5saW5lVG8oY2FsKDQ2MCksIGNhbCgxOCkpXG5cbiAgICBjdHgubW92ZVRvKGNhbCg0NjApLCAwKVxuICAgIGN0eC5saW5lVG8oY2FsKDQ2MCksIGNhbCgzNikgKiByb3cpXG5cbiAgICBjdHgubW92ZVRvKGNhbCg1ODUpLCAwKVxuICAgIGN0eC5saW5lVG8oY2FsKDU4NSksIGNhbCgzNikgKiByb3cpXG5cbiAgICBjdHguc3Ryb2tlKClcblxuICAgIC8vIOihqOWktFxuICAgIGN0eC5zZXRGb250U2l6ZShjYWwoMTUpKVxuICAgIGN0eC5zZXRUZXh0QWxpZ24oJ2NlbnRlcicpXG4gICAgY3R4LmZpbGxUZXh0KCfmkZjopoEnLCBjYWwoMTAwKSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQoJ+WAn+aWuemHkeminScsIGNhbCg1MjIpLCBjYWwoMjQpKVxuICAgIGN0eC5maWxsVGV4dCgn6LS35pa56YeR6aKdJywgY2FsKDY0NiksIGNhbCgyNCkpXG5cbiAgICBjdHguc2V0Rm9udFNpemUoY2FsKDE0KSlcbiAgICBjdHguZmlsbFRleHQoJ+S8muiuoeenkeebricsIGNhbCgzMzApLCBjYWwoMTUpKVxuICAgIGN0eC5maWxsVGV4dCgn56eR55uu5Luj56CBJywgY2FsKDI2NSksIGNhbCgzMykpXG4gICAgY3R4LmZpbGxUZXh0KCfnp5Hnm67lkI3np7AnLCBjYWwoMzk1KSwgY2FsKDMzKSlcblxuICAgIC8vIOWGheWuuemDqOWIhlxuICAgIC8vIOaRmOimgeWGheWuuVxuICAgIGN0eC50cmFuc2xhdGUoMCwgY2FsKDM2KSlcbiAgICBsaW5lV3JhcChjdHgsIHRoaXMucmVzdWx0LmRpc2NyaXB0aW9uLCBjYWwoMTQpLCBjYWwoMTYpLCBjYWwoMTYwKSwgY2FsKDEwMCksIGNhbCgxMCkpXG5cbiAgICAvLyDku7fnqI7lkIjorqFcbiAgICBjdHguZmlsbFRleHQoJzExMjInLCBjYWwoMjY1KSwgY2FsKDI0KSlcbiAgICBjdHguZmlsbFRleHQoJ+W6lOaUtui0puasvicsIGNhbCgzOTUpLCBjYWwoMjQpKVxuICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5BbW91bnRJbkZpZ3VlcnMsIGNhbCg1MjIpLCBjYWwoMjQpKVxuXG4gICAgLy8g54mp5ZOB44CB5pyN5Yqh562JXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjdHguZmlsbFRleHQoJzUwMDEnLCBjYWwoMjY1KSwgY2FsKDI0KSArICgxICsgMiAqIGkpICogY2FsKDM2KSlcbiAgICAgIGN0eC5maWxsVGV4dCgn5Li76JCl5Lia5Yqh5pS25YWlJywgY2FsKDM5NSksIGNhbCgyNCkgKyAoMSArIDIgKiBpKSAqIGNhbCgzNikpXG4gICAgICBjdHguZmlsbFRleHQocGFyc2VGbG9hdCh0aGlzLnJlc3VsdC5Db21tb2RpdHlBbW91bnRbaV0ud29yZCArICcuJykudG9GaXhlZCgyKSwgY2FsKDY0NiksIGNhbCgyNCkgKyAoMSArIDIgKiBpKSAqIGNhbCgzNikpXG5cbiAgICAgIGN0eC5maWxsVGV4dCgnMjIyMS4wMS4wMScsIGNhbCgyNjUpLCBjYWwoMjQpICsgKDIgKyAyICogaSkgKiBjYWwoMzYpKVxuICAgICAgbGluZVdyYXAoY3R4LCAn5bqU5Lqk56iO6LS5IC0g5aKe5YC856iOIC0g6ZSA6aG556iOJywgY2FsKDE0KSwgY2FsKDE0KSwgY2FsKDEzMCksIGNhbCgzOTUpLCBjYWwoMikgKyAoMiArIDIgKiBpKSAqIGNhbCgzNikgKVxuICAgICAgLy8gY3R4LmZpbGxUZXh0KGxpbmVXcmFwKCksIGNhbCgzOTUpLCBjYWwoMjQpICsgMiAqIGNhbCgzNikpXG4gICAgICBjdHguZmlsbFRleHQocGFyc2VGbG9hdCh0aGlzLnJlc3VsdC5Db21tb2RpdHlUYXhbaV0ud29yZCArICcuJykudG9GaXhlZCgyKSwgY2FsKDY0NiksIGNhbCgyNCkgKyAoMiArIDIgKiBpKSAqIGNhbCgzNikpXG4gICAgfVxuXG4gICAgLy8g5ZCI6K6hXG4gICAgY3R4LnRyYW5zbGF0ZSgwLCBjYWwoMzYpICogKHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoICogMiArIDEpKVxuICAgIGN0eC5maWxsVGV4dCgn5ZCI6K6hJywgY2FsKDIzMCksIGNhbCgyNCkpXG4gICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LkFtb3VudEluRmlndWVycywgY2FsKDUyMiksIGNhbCgyNCkpXG4gICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LkFtb3VudEluRmlndWVycywgY2FsKDY0NiksIGNhbCgyNCkpXG5cbiAgICAvLyDkv6Hmga/moI9cbiAgICBjdHguYmVnaW5QYXRoKClcbiAgICAvLyDovrnmoYZcbiAgICBjdHgudHJhbnNsYXRlKDAsIGNhbCgzNikpXG4gICAgbGV0IGxlZnRUaXRsZSA9IFsn5Lya6K6h5oC7566hJywgJ+WuouaItycsICfkvpvlupTllYYnLCAn6aG555uuJ11cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIHtcbiAgICAgIGN0eC5maWxsVGV4dChsZWZ0VGl0bGVbaSAtIDFdLCBjYWwoNTApLCBjYWwoMjQpICsgKGkgLSAxKSAqIGNhbCgzNikpXG4gICAgICBjdHgubW92ZVRvKDAsIGNhbCgzNikgKiBpKVxuICAgICAgY3R4LmxpbmVUbyhjYWwoNzEwKSwgY2FsKDM2KSAqIGkpXG4gICAgfVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMzU1KSwgY2FsKDM2KSlcbiAgICBjdHgubGluZVRvKGNhbCgzNTUpLCBjYWwoMzYpICogNClcbiAgICBjdHguZmlsbFRleHQoJ+WRmOW3pScsIGNhbCg0MDUpLCBjYWwoMzYpICsgY2FsKDI0KSlcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDQ1NSksIGNhbCgzNikpXG4gICAgY3R4LmxpbmVUbyhjYWwoNDU1KSwgY2FsKDM2KSAqIDQpXG4gICAgY3R4LmZpbGxUZXh0KCflhbbku5bnrKzkuInmlrknLCBjYWwoNDA1KSwgY2FsKDM2KSAqIDIgKyBjYWwoMjQpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoNzEwKSwgMClcbiAgICBjdHgubGluZVRvKGNhbCg3MTApLCBjYWwoMzYpICogNClcbiAgICBjdHguZmlsbFRleHQoJ+WPkeelqOWPt+eggScsIGNhbCg0MDUpLCBjYWwoMzYpICogMyArIGNhbCgyNCkpXG5cbiAgICBjdHgubW92ZVRvKDAsIDApXG4gICAgY3R4LmxpbmVUbygwLCBjYWwoMzYpICogNClcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDEwMCksIDApXG4gICAgY3R4LmxpbmVUbyhjYWwoMTAwKSwgY2FsKDM2KSAqIDQpXG5cbiAgICBjdHgubW92ZVRvKGNhbCgxOTApLCAwKVxuICAgIGN0eC5saW5lVG8oY2FsKDE5MCksIGNhbCgzNikpXG4gICAgbGV0IHRpdGxlID0gWyforrDotKYnLCAn5Ye657qzJywgJ+WuoeaguCcsICfliLbljZUnXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICBjdHguZmlsbFRleHQodGl0bGVbaV0sIGNhbCgxOTAgKyAxMzAgKiBpICsgMjUpLCBjYWwoMjQpIClcbiAgICAgIGN0eC5tb3ZlVG8oY2FsKDE5MCArIDEzMCAqIGkgKyA1MCksIDApXG4gICAgICBjdHgubGluZVRvKGNhbCgxOTAgKyAxMzAgKiBpICsgNTApLCBjYWwoMzYpKVxuICAgICAgY3R4Lm1vdmVUbyhjYWwoMTkwICsgMTMwICogaSArIDEzMCksIDApXG4gICAgICBjdHgubGluZVRvKGNhbCgxOTAgKyAxMzAgKiBpICsgMTMwKSwgY2FsKDM2KSlcbiAgICB9XG4gICAgY3R4LnN0cm9rZSgpXG5cbiAgICBjdHguZmlsbFRleHQodGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlckluZm8ubmlja05hbWUsIGNhbCgxOTAgKyAxMzAgKiAzICsgOTApLCBjYWwoMjQpKVxuICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5JbnZvaWNlTnVtLCBjYWwoNTgyKSwgY2FsKDI0KSArIGNhbCgzNikgKiAzKVxuICAgIHRoaXMucmVzdWx0LmJlbG9uZ1Byb2plY3QgJiYgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LmJlbG9uZ1Byb2plY3QsIGNhbCgyMjgpLCBjYWwoMjQpICsgY2FsKDM2KSAqIDMpXG4gICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LlB1cmNoYXNlck5hbWUsIGNhbCgyMjgpLCBjYWwoMjQpICsgY2FsKDM2KSlcblxuICAgIGN0eC5kcmF3KHRydWUsICgpID0+IHtcbiAgICAgIHRoYXQuaW1hZ2VIZWlnaHQgPSBjYWwoMTIwKSArICg4ICsgMiAqIHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoKSAqIGNhbCgzNilcbiAgICAgIHd4LmNhbnZhc1RvVGVtcEZpbGVQYXRoKHtcbiAgICAgICAgICB4OiAwLFxuICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgd2lkdGg6IGNhbCg3NTApLFxuICAgICAgICAgIGhlaWdodDogY2FsKDEyMCkgKyAoOCArIDIgKiB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCkgKiBjYWwoMzYpLFxuICAgICAgICAgIGZpbGVUeXBlOiAnanBnJyxcbiAgICAgICAgICBxdWFsaXR5OiAwLjUsXG4gICAgICAgICAgY2FudmFzSWQ6ICdjYW52YXNJZCcsLy9jYW52YXNJZOWSjOagh+etvumHjOmdoueahGlk5a+55bqUXG4gICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICB3eC5oaWRlVG9hc3QoKVxuICAgICAgICAgICAgICAvL+WwhuiOt+WPluWIsOeahOWbvueJh+S4tOaXtui3r+W+hHNldOWIsGNhbnZhc1NhdmVpbWfkuK1cbiAgICAgICAgICAgICAgdGhhdC50ZW1wRmlsZVBhdGggPSByZXMudGVtcEZpbGVQYXRoXG4gICAgICAgICAgICAgIHRoYXQuJGFwcGx5KClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6IChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG4iXX0=