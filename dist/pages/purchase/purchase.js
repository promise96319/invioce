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


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Purchase , 'pages/purchase/purchase'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlLmpzIl0sIm5hbWVzIjpbIlB1cmNoYXNlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwid2lkdGgiLCJoZWlnaHQiLCJyZXN1bHQiLCJ0ZW1wRmlsZVBhdGgiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJoYW5sZGVTYXZlUGljIiwiX3NlbGYiLCJ3eCIsImdldEltYWdlSW5mbyIsInNyYyIsInN1Y2Nlc3MiLCJyZXMxIiwic2F2ZUltYWdlVG9QaG90b3NBbGJ1bSIsImZpbGVQYXRoIiwicGF0aCIsInJlczIiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsImZhaWwiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2FuY2VsIiwib3B0aW9ucyIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwiSlNPTiIsInBhcnNlIiwidGhhdCIsImdldFN5c3RlbUluZm8iLCJyZXMiLCJ3aW5kb3dXaWR0aCIsImNhbCIsInB4IiwibGluZVdyYXAiLCJjdHgiLCJzdHIiLCJmb250c2l6ZSIsImxpbmVoZWlnaHQiLCJ4IiwieSIsInNldEZvbnRTaXplIiwidGV4dEFyciIsImluZGV4IiwiaSIsImxlbmd0aCIsIm1lYXN1cmVUZXh0Iiwic3Vic3RyaW5nIiwicHVzaCIsImZpbGxUZXh0IiwiY3JlYXRlQ2FudmFzQ29udGV4dCIsInNldEZpbGxTdHlsZSIsImZpbGxSZWN0IiwiQ29tbW9kaXR5TmFtZSIsInNldFRleHRBbGlnbiIsImRhdGUiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJ0cmFuc2xhdGUiLCJub3ciLCJ0b1N0cmluZyIsInN1YnN0ciIsIk1hdGgiLCJyYW5kb20iLCJzcGxpdCIsInNldFN0cm9rZVN0eWxlIiwic3Ryb2tlUmVjdCIsInJvdyIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsImRpc2NyaXB0aW9uIiwidGVtcCIsIndvcmQiLCJzb3VyY2UiLCJDb21tb2RpdHlBbW91bnQiLCJjb2RlIiwibmFtZSIsIkNvbW1vZGl0eVRheCIsInBheSIsIkFtb3VudEluRmlndWVycyIsImJlZ2luUGF0aCIsImxlZnRUaXRsZSIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJuaWNrTmFtZSIsIkludm9pY2VOdW0iLCJiZWxvbmdQcm9qZWN0IiwiU2VsbGVyTmFtZSIsInBlcnNvbk5hbWUiLCJvdGhlck5hbWUiLCJkcmF3IiwiY2FudmFzVG9UZW1wRmlsZVBhdGgiLCJjYW52YXNJZCIsImhpZGVUb2FzdCIsIiRhcHBseSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBSWJDLEksR0FBTztBQUNMQyxhQUFPLENBREY7QUFFTEMsY0FBUSxDQUZIO0FBR0xDLGNBQVEsRUFISDtBQUlMQyxvQkFBYztBQUpULEssUUFPUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1JDLG1CQURRLDJCQUNTO0FBQ2YsWUFBSUMsUUFBUSxJQUFaO0FBQ0lDLFdBQUdDLFlBQUgsQ0FBZ0I7QUFDZEMsZUFBS0gsTUFBTUosWUFERztBQUVkUSxpQkFGYyxtQkFFTEMsSUFGSyxFQUVDO0FBQ2JKLGVBQUdLLHNCQUFILENBQTBCO0FBQ3RCQyx3QkFBVUYsS0FBS0csSUFETztBQUV0QkosdUJBQVMsaUJBQVVLLElBQVYsRUFBZ0I7QUFDdkJSLG1CQUFHUyxZQUFILENBQWdCO0FBQ1pDLHlCQUFPO0FBREssaUJBQWhCO0FBR0QsZUFOcUI7QUFPdEJDLG9CQUFNLGNBQVVDLEdBQVYsRUFBZTtBQUNuQkMsd0JBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNEO0FBVHFCLGFBQTFCO0FBV0Q7QUFkYSxTQUFoQjtBQWdCTCxPQW5CTztB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Q0E0QixpQkFBS3lFLE1BQUw7QUFDSCxXQVhtQjtBQVlwQnJGLGdCQUFNLGNBQUNDLEdBQUQsRUFBUztBQUNiQyxvQkFBUUMsR0FBUixDQUFZRixHQUFaO0FBQ0Q7QUFkbUIsU0FBeEI7QUFnQkQsT0FqQkQ7QUFrQkQ7Ozs7RUEvVm1DcUYsZUFBS0MsSTs7a0JBQXRCL0csUSIsImZpbGUiOiJwdXJjaGFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB1dGlsIGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFB1cmNoYXNlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflh63or4EnXG4gIH1cbiAgY29tcG9uZW50cyA9IHtcblxuICB9XG5cbiAgZGF0YSA9IHtcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgcmVzdWx0OiB7fSxcbiAgICB0ZW1wRmlsZVBhdGg6ICcnXG4gIH1cblxuICBjb21wdXRlZCA9IHt9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBoYW5sZGVTYXZlUGljICgpIHtcbiAgICAgIGxldCBfc2VsZiA9IHRoaXNcbiAgICAgICAgICB3eC5nZXRJbWFnZUluZm8oe1xuICAgICAgICAgICAgc3JjOiBfc2VsZi50ZW1wRmlsZVBhdGgsXG4gICAgICAgICAgICBzdWNjZXNzIChyZXMxKSB7XG4gICAgICAgICAgICAgIHd4LnNhdmVJbWFnZVRvUGhvdG9zQWxidW0oe1xuICAgICAgICAgICAgICAgICAgZmlsZVBhdGg6IHJlczEucGF0aCxcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMyKSB7XG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIGhhbmRsZUNhbmNlbCAoKSB7XG4gICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgIGRlbHRhOiAxXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gICBvbkxvYWQob3B0aW9ucykge1xuICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgIHRpdGxlOiAn5q2j5Zyo55Sf5oiQ5Yet6K+BJyxcbiAgICAgICBpY29uOiAnbG9hZGluZycsXG4gICAgICAgZHVyYXRpb246IDEwMDAwXG4gICAgIH0pXG4gICAgdGhpcy5yZXN1bHQgPSBKU09OLnBhcnNlKG9wdGlvbnMucmVzdWx0KVxuICAgIC8vIHRoaXMucmVzdWx0ID0ge1xuICAgIC8vICAgXCJJbnZvaWNlTnVtXCI6IFwiMzIzMzA3MzlcIixcbiAgICAvLyAgIFwiU2VsbGVyTmFtZVwiOiBcIuWMl+S6rOWGoOaciOmkkOmlrueuoeeQhuaciemZkOWFrOWPuFwiLFxuICAgIC8vICAgXCJDb21tb2RpdHlUYXhSYXRlXCI6IFt7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIjYlXCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMVwiXG4gICAgLy8gICB9XSxcbiAgICAvLyAgIFwiU2VsbGVyQmFua1wiOiBcIuWMl+S6rOW4gua1t+a3gOWMuuS4reWFs+adkeS4nOi3rzHlj7fpmaIy5Y+35qW8MTAx5a6kNjI3OTg5ODhcIixcbiAgICAvLyAgIFwiQ2hlY2tlclwiOiBcIlwiLFxuICAgIC8vICAgXCJUb3RhbEFtb3VudFwiOiBcIjE4NjQ3LjE3XCIsXG4gICAgLy8gICBcIkNvbW1vZGl0eUFtb3VudFwiOiBbe1xuICAgIC8vICAgICBcIndvcmRcIjogXCIxMzg0Ny4xN1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfSwge1xuICAgIC8vICAgICBcIndvcmRcIjogXCIxMjY0Ny4xN1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjJcIlxuICAgIC8vICAgfV0sXG4gICAgLy8gICBcIkludm9pY2VEYXRlXCI6IFwiMjAxOOW5tDA45pyIMTnml6VcIixcbiAgICAvLyAgIFwiQ29tbW9kaXR5VGF4XCI6IFt7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIjExMTE4LjgzXCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMVwiXG4gICAgLy8gICB9LCB7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIjExNzM4LjgzXCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMlwiXG4gICAgLy8gICB9XSxcbiAgICAvLyAgIFwiUHVyY2hhc2VyTmFtZVwiOiBcIuS4iua1t+acieeVpeaVmeiCsuenkeaKgOaciemZkOWFrOWPuFwiLFxuICAgIC8vICAgXCJDb21tb2RpdHlOdW1cIjogW3tcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiXCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMVwiXG4gICAgLy8gICB9XSxcbiAgICAvLyAgIFwiUHVyY2hhc2VyQmFua1wiOiBcIlwiLFxuICAgIC8vICAgXCJSZW1hcmtzXCI6IFwi5qCh6aqM56CBMDAzNDU4MDIyNTZcIixcbiAgICAvLyAgIFwiUGFzc3dvcmRcIjogXCI1Mi8vNTUwMSsxNDkwNi0rMDM8LTMwODQtODk8OTgwNzE5PisyNS00KzYzODY3PDgzPCswMzAxLSowMSs5PCowLzkwPC80Ni08MDI5ODg0PjU0LTI4Pj4wMzkvKy8zNiorOTMvNzg1PjA0PlwiLFxuICAgIC8vICAgXCJTZWxsZXJBZGRyZXNzXCI6IFwi5Y+3MTAx5a6kNjI3OTg5ODg5MTFcIixcbiAgICAvLyAgIFwiUHVyY2hhc2VyQWRkcmVzc1wiOiBcIlwiLFxuICAgIC8vICAgXCJJbnZvaWNlQ29kZVwiOiBcIjAxMTAwMTgwMDEwNFwiLFxuICAgIC8vICAgXCJDb21tb2RpdHlVbml0XCI6IFt7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIlwiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfV0sXG4gICAgLy8gICBcIlBheWVlXCI6IFwi55SE5am3XCIsXG4gICAgLy8gICBcIlB1cmNoYXNlclJlZ2lzdGVyTnVtXCI6IFwiOTEzMTAxMTBNQUcwV05cIixcbiAgICAvLyAgIFwiQ29tbW9kaXR5UHJpY2VcIjogW3tcbiAgICAvLyAgICAgXCJ3b3JkXCI6IFwiXCIsXG4gICAgLy8gICAgIFwicm93XCI6IFwiMVwiXG4gICAgLy8gICB9XSxcbiAgICAvLyAgIFwiTm90ZURyYXdlclwiOiBcIumhvuaWsOadsFwiLFxuICAgIC8vICAgXCJBbW91bnRJbldvcmRzXCI6IFwi5LiH5Luf5p+S5L2w6ZmG5ou+6ZmG5ZyG5pW0XCIsXG4gICAgLy8gICBcIkFtb3VudEluRmlndWVyc1wiOiBcIjE5NzY2LjAwXCIsXG4gICAgLy8gICBcIlRvdGFsVGF4XCI6IFwiMTExOC4zMFwiLFxuICAgIC8vICAgXCJJbnZvaWNlVHlwZVwiOiBcIuS4k+eUqOWPkeelqFwiLFxuICAgIC8vICAgXCJTZWxsZXJSZWdpc3Rlck51bVwiOiBcIjkxMTEwMTA4Nzk3NTgzNDMzOFwiLFxuICAgIC8vICAgXCJDb21tb2RpdHlOYW1lXCI6IFt7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIuWPkemFteOAgeaPkOWPluiuvuWkh1wiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfSwge1xuICAgIC8vICAgICBcIndvcmRcIjogXCLlronlhajmo4Dmn6Xku6rlmahcIixcbiAgICAvLyAgICAgXCJyb3dcIjogXCIyXCJcbiAgICAvLyAgIH1dLFxuICAgIC8vICAgXCJDb21tb2RpdHlUeXBlXCI6IFt7XG4gICAgLy8gICAgIFwid29yZFwiOiBcIlwiLFxuICAgIC8vICAgICBcInJvd1wiOiBcIjFcIlxuICAgIC8vICAgfV0sXG4gICAgLy8gICBcIkNoZWNrQ29kZVwiOiBcIjAwMzQ1ODAyMjU2MTk1OTA5NDlcIixcbiAgICAvLyAgIFwiaWRlbnRpdHlcIjogXCLotK3kubDmlrlcIixcbiAgICAvLyAgIFwicGF5XCI6IFwi5YWs5Y+4XCIsXG4gICAgLy8gICBcInNvdXJjZVwiOiBcIuWFtuS7llwiLFxuICAgIC8vICAgXCJwZXJzb25OYW1lXCI6IFwi5byg5LiJ5ZWKXCIsXG4gICAgLy8gICBcImRpc2NyaXB0aW9uXCI6IFwi5oiR5p2l6Ieq5Lit5Zu977yM5oiR5YaNZGprZGtq55u05pKt77yM5oiR5b6X6L+H5LiW55WM5Yag5Yab77yM5oiR5Lmf5Yqe6L+H6L2sLOS9oOimgemineS9oOmDveiDveiusOW+l+eci+aal+WPt+mDveS8mlwiLFxuICAgIC8vICAgXCJiZWxvbmdQcm9qZWN0XCI6IFwi5aSp5Zyw5aSn5ZCMXCJcbiAgICAvLyB9XG5cbiAgICBsZXQgdGhhdCA9IHRoaXNcblxuICAgIC8vIOiOt+WPluWxj+W5leWuvVxuICAgIHd4LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgdGhhdC53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgICAvLyB0aGF0LmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgIH1cbiAgICB9KVxuXG5cbi8vIOWHveaVsOWumuS5ieWMuuWfnyA9PT09PT09PT09PT09PT09PT09XG4gICAgLy8g6K6+572u5LiA5Liq5Z+65YeG5q+U5L6LXG4gICAgbGV0IGNhbCA9IChweCkgPT4ge1xuICAgICAgcmV0dXJuICBweCAvIDM3NSAqIHRoYXQud2lkdGhcbiAgICB9XG5cbiAgICAvLyBjYW52YXPmjaLooYzmmL7npLpcbiAgICBsZXQgbGluZVdyYXAgPSAoY3R4LCBzdHIsIGZvbnRzaXplLCBsaW5laGVpZ2h0LCB3aWR0aCwgeCwgeSkgPT4ge1xuICAgICAgY3R4LnNldEZvbnRTaXplKGZvbnRzaXplKVxuICAgICAgbGV0IHRleHRBcnIgPSBbXVxuICAgICAgbGV0IGluZGV4ID0gMFxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGN0eC5tZWFzdXJlVGV4dChzdHIuc3Vic3RyaW5nKGluZGV4LCBpKSkud2lkdGggPj0gd2lkdGggKiAwLjgpIHtcbiAgICAgICAgICB0ZXh0QXJyLnB1c2goc3RyLnN1YnN0cmluZyhpbmRleCwgaSkpXG4gICAgICAgICAgaW5kZXggPSBpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGV4dEFyci5wdXNoKHN0ci5zdWJzdHJpbmcoaW5kZXgpKVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHRBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRleHRBcnJbaV0sIHgsIHkgKyBsaW5laGVpZ2h0ICogKGkgKyAxKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjdHggPSB3eC5jcmVhdGVDYW52YXNDb250ZXh0KCdjYW52YXNJZCcpXG5cbiAgICBjdHguc2V0RmlsbFN0eWxlKCd3aGl0ZScpXG4gICAgY3R4LmZpbGxSZWN0KGNhbCgwKSwgY2FsKDApLCBjYWwoNzUwKSwgY2FsKDEyMCkgKyAoOCArIDIgKiB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCkgKiBjYWwoMzYpKVxuICAgIGN0eC5zZXRGaWxsU3R5bGUoJ2JsYWNrJylcblxuICAgIC8vIOagh+mimFxuICAgIGN0eC5zZXRGb250U2l6ZShjYWwoMjMpKVxuICAgIGN0eC5zZXRUZXh0QWxpZ24oJ2NlbnRlcicpXG4gICAgY3R4LmZpbGxUZXh0KCforrDotKblh63or4EnLCBjYWwoMzc1KSwgY2FsKDQwKSlcblxuICAgIC8vIOaXtumXtOWPiue8luWPt1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKVxuICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXG4gICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMVxuICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKVxuICAgIGN0eC50cmFuc2xhdGUoY2FsKDczMCksIGNhbCg3MCkpXG4gICAgY3R4LnNldEZvbnRTaXplKGNhbCgxMykpXG4gICAgY3R4LnNldFRleHRBbGlnbigncmlnaHQnKVxuICAgIGN0eC5maWxsVGV4dCh5ZWFyICsgJyDlubQgJyArIG1vbnRoICsgJyDmnIggJyArIGRheSArICcg5Y+3ICAgICAg6K6w5a2X56ysICcgKyBEYXRlLm5vdygpLnRvU3RyaW5nKCkuc3Vic3RyKDYpICsgKE1hdGgucmFuZG9tKCkqIDEwMCkudG9TdHJpbmcoKS5zcGxpdCgnLicpWzBdICsgJyDlj7cnLCBjYWwoMCksIGNhbCgyMikpXG4gICAgY3R4LnNldFRleHRBbGlnbignY2VudGVyJylcbiAgICBjdHguc2V0VGV4dEFsaWduKCdjZW50ZXInKVxuICAgIGN0eC5zZXRUZXh0QWxpZ24oJ2NlbnRlcicpXG5cbiAgICAvLyDooajmoLxcbiAgICAvLyDlpJbmoYZcbiAgICBjdHgudHJhbnNsYXRlKGNhbCgtNzEwKSwgY2FsKDUwKSlcbiAgICBjdHguc2V0U3Ryb2tlU3R5bGUoJyMwMDAnKVxuICAgIGN0eC5zdHJva2VSZWN0KDAsIDAsIGNhbCg3MTApLCBjYWwoMzYpICogKHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoICogMiAgKyAzKSlcblxuICAgIC8vIOWGheahhlxuICAgIGxldCByb3cgPSB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCAqIDIgKyAzXG4gICAgZm9yIChsZXQgaSA9IDI7IGkgPCByb3cgLSAxOyBpKyspIHtcbiAgICAgIGN0eC5zZXRTdHJva2VTdHlsZSgnIzk5OScpXG4gICAgICBjdHgubW92ZVRvKGNhbCgyMDApLCBjYWwoMzYpICogaSlcbiAgICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikgKiBpKVxuICAgICAgY3R4LnN0cm9rZSgpXG4gICAgfVxuXG4gICAgY3R4Lm1vdmVUbygwLCBjYWwoMzYpKVxuICAgIGN0eC5saW5lVG8oY2FsKDcxMCksIGNhbCgzNikpXG5cbiAgICBjdHgubW92ZVRvKDAsIGNhbCgzNikgKiAocm93IC0xKSlcbiAgICBjdHgubGluZVRvKGNhbCg3MTApLCBjYWwoMzYpICogKHJvdyAtMSkpXG5cbiAgICBjdHgubW92ZVRvKDAsIGNhbCgzNikgKiByb3cpXG4gICAgY3R4LmxpbmVUbyhjYWwoNzEwKSwgY2FsKDM2KSAqIHJvdylcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDIwMCksIDApXG4gICAgY3R4LmxpbmVUbyhjYWwoMjAwKSwgY2FsKDM2KSAqIChyb3cgLTEpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMzMwKSwgY2FsKDE4KSlcbiAgICBjdHgubGluZVRvKGNhbCgzMzApLCBjYWwoMzYpICogKHJvdyAtIDEpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMjAwKSwgY2FsKDE4KSlcbiAgICBjdHgubGluZVRvKGNhbCg0NjApLCBjYWwoMTgpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoNDYwKSwgMClcbiAgICBjdHgubGluZVRvKGNhbCg0NjApLCBjYWwoMzYpICogcm93KVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoNTg1KSwgMClcbiAgICBjdHgubGluZVRvKGNhbCg1ODUpLCBjYWwoMzYpICogcm93KVxuXG4gICAgY3R4LnN0cm9rZSgpXG5cbiAgICAvLyDooajlpLRcbiAgICBjdHguc2V0Rm9udFNpemUoY2FsKDE1KSlcbiAgICBjdHguZmlsbFRleHQoJ+aRmOimgScsIGNhbCgxMDApLCBjYWwoMjQpKVxuICAgIGN0eC5maWxsVGV4dCgn5YCf5pa56YeR6aKdJywgY2FsKDUyMiksIGNhbCgyNCkpXG4gICAgY3R4LmZpbGxUZXh0KCfotLfmlrnph5Hpop0nLCBjYWwoNjQ2KSwgY2FsKDI0KSlcblxuICAgIGN0eC5zZXRGb250U2l6ZShjYWwoMTQpKVxuICAgIGN0eC5maWxsVGV4dCgn5Lya6K6h56eR55uuJywgY2FsKDMzMCksIGNhbCgxNSkpXG4gICAgY3R4LmZpbGxUZXh0KCfnp5Hnm67ku6PnoIEnLCBjYWwoMjY1KSwgY2FsKDMzKSlcbiAgICBjdHguZmlsbFRleHQoJ+enkeebruWQjeensCcsIGNhbCgzOTUpLCBjYWwoMzMpKVxuXG4gICAgLy8g5YaF5a656YOo5YiGXG4gICAgLy8g5pGY6KaB5YaF5a65XG4gICAgY3R4LnRyYW5zbGF0ZSgwLCBjYWwoMzYpKVxuICAgIGxpbmVXcmFwKGN0eCwgdGhpcy5yZXN1bHQuZGlzY3JpcHRpb24sIGNhbCgxNCksIGNhbCgxNiksIGNhbCgxNjApLCBjYWwoMTAwKSwgY2FsKDEwKSlcblxuICAgIC8vIOeJqeWTgeOAgeacjeWKoeetiVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHRlbXAgPSB1dGlsKHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWVbaV0ud29yZCwgdGhpcy5yZXN1bHQuc291cmNlLCB0aGlzLnJlc3VsdC5Db21tb2RpdHlBbW91bnRbaV0ud29yZClcbiAgICAgIGN0eC5maWxsVGV4dCh0ZW1wLmNvZGUsIGNhbCgyNjUpLCBjYWwoMjQpICsgKDIgKiBpKSAqIGNhbCgzNikpXG4gICAgICBpZiAoY3R4Lm1lYXN1cmVUZXh0KHRlbXAubmFtZSkud2lkdGggPj0gMC45ICogY2FsKDEzMCkpIHtcbiAgICAgICAgbGluZVdyYXAoY3R4LCB0ZW1wLm5hbWUsIGNhbCgxNCksIGNhbCgxNCksIGNhbCgxMzApLCBjYWwoMzk1KSwgY2FsKDIpICsgKDIgKiBpKSAqIGNhbCgzNikgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRlbXAubmFtZSwgY2FsKDM5NSksIGNhbCgyNCkgKyAoMiAqIGkpICogY2FsKDM2KSlcbiAgICAgIH1cbiAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5Db21tb2RpdHlBbW91bnRbaV0ud29yZCwgY2FsKDUyMiksIGNhbCgyNCkgKyAoMiAqIGkpICogY2FsKDM2KSlcblxuICAgICAgY3R4LmZpbGxUZXh0KCcyMjIxLjAxLjA2JywgY2FsKDI2NSksIGNhbCgyNCkgKyAoMSArIDIgKiBpKSAqIGNhbCgzNikpXG4gICAgICBjdHguZmlsbFRleHQoJ+W+heiupOivgei/m+mhueeojicsIGNhbCgzOTUpLCBjYWwoMjQpICsgKDEgKyAyICogaSkgKiBjYWwoMzYpKVxuICAgICAgLy8gY3R4LmZpbGxUZXh0KGxpbmVXcmFwKCksIGNhbCgzOTUpLCBjYWwoMjQpICsgMiAqIGNhbCgzNikpXG4gICAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuQ29tbW9kaXR5VGF4W2ldLndvcmQsIGNhbCg1MjIpLCBjYWwoMjQpICsgKDEgKyAyICogaSkgKiBjYWwoMzYpKVxuICAgIH1cblxuICAgIC8vIOS7t+eojuWQiOiuoVxuICAgIHN3aXRjaCAodGhpcy5yZXN1bHQucGF5KSB7XG4gICAgICBjYXNlICflhazlj7gnOlxuICAgICAgICAgIGN0eC5maWxsVGV4dCgnMjIwMicsIGNhbCgyNjUpLCBjYWwoMjQpICsgKHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoICogMikgKiBjYWwoMzYpKVxuICAgICAgICAgIGN0eC5maWxsVGV4dCgn5bqU5LuY6LSm5qy+JywgY2FsKDM5NSksIGNhbCgyNCkgKyAodGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKiAyKSAqIGNhbCgzNikpXG4gICAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LkFtb3VudEluRmlndWVycywgY2FsKDY0NiksIGNhbCgyNCkgKyAodGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKiAyKSAqIGNhbCgzNikpXG4gICAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ+WFrOWPuOWRmOW3pSc6XG4gICAgICAgICAgY3R4LmZpbGxUZXh0KCcyMjQxLjAxJywgY2FsKDI2NSksIGNhbCgyNCkgKyAodGhpcy5yZXN1bHQuQ29tbW9kaXR5TmFtZS5sZW5ndGggKiAyKSAqIGNhbCgzNikpXG4gICAgICAgICAgbGluZVdyYXAoY3R4LCAn5YW25LuW5bqU5LuY5qy+LeWRmOW3peaKpemUgCcsIGNhbCgxNCksIGNhbCgxNCksIGNhbCgxMzApLCBjYWwoMzk1KSwgY2FsKDIpICsgKHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoICogMikgKiBjYWwoMzYpKVxuICAgICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5BbW91bnRJbkZpZ3VlcnMsIGNhbCg2NDYpLCBjYWwoMjQpICsgKHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoICogMikgKiBjYWwoMzYpKVxuICAgICAgICAgIGJyZWFrXG4gICAgICBjYXNlICflhbbku5bnrKzkuInmlrknOlxuICAgICAgICAgIGN0eC5maWxsVGV4dCgnMjI0MS4wNCcsIGNhbCgyNjUpLCBjYWwoMjQpICsgKHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoICogMikgKiBjYWwoMzYpKVxuICAgICAgICAgIGxpbmVXcmFwKGN0eCwgJ+WFtuS7luW6lOS7mOasvi3lhbbku5bnrKzkuInmlrnlvoDmnaUnLCBjYWwoMTQpLCBjYWwoMTQpLCBjYWwoMTMwKSwgY2FsKDM5NSksIGNhbCgyKSArICh0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCAqIDIpICogY2FsKDM2KSlcbiAgICAgICAgICBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuQW1vdW50SW5GaWd1ZXJzLCBjYWwoNjQ2KSwgY2FsKDI0KSArICh0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCAqIDIpICogY2FsKDM2KSlcbiAgICAgICAgICBicmVha1xuICAgIH1cblxuXG4gICAgLy8g5ZCI6K6hXG4gICAgY3R4LnRyYW5zbGF0ZSgwLCBjYWwoMzYpICogKHRoaXMucmVzdWx0LkNvbW1vZGl0eU5hbWUubGVuZ3RoICogMiArIDEpKVxuICAgIGN0eC5maWxsVGV4dCgn5ZCI6K6hJywgY2FsKDIzMCksIGNhbCgyNCkpXG4gICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LkFtb3VudEluRmlndWVycywgY2FsKDUyMiksIGNhbCgyNCkpXG4gICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LkFtb3VudEluRmlndWVycywgY2FsKDY0NiksIGNhbCgyNCkpXG5cbiAgICAvLyDkv6Hmga/moI9cbiAgICBjdHguYmVnaW5QYXRoKClcbiAgICAvLyDovrnmoYZcbiAgICBjdHgudHJhbnNsYXRlKDAsIGNhbCgzNikpXG4gICAgbGV0IGxlZnRUaXRsZSA9IFsn5Lya6K6h5oC7566hJywgJ+WuouaItycsICfkvpvlupTllYYnLCAn6aG555uuJ11cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIHtcbiAgICAgIGN0eC5maWxsVGV4dChsZWZ0VGl0bGVbaSAtIDFdLCBjYWwoNTApLCBjYWwoMjQpICsgKGkgLSAxKSAqIGNhbCgzNikpXG4gICAgICBjdHgubW92ZVRvKDAsIGNhbCgzNikgKiBpKVxuICAgICAgY3R4LmxpbmVUbyhjYWwoNzEwKSwgY2FsKDM2KSAqIGkpXG4gICAgfVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoMzU1KSwgY2FsKDM2KSlcbiAgICBjdHgubGluZVRvKGNhbCgzNTUpLCBjYWwoMzYpICogNClcbiAgICBjdHguZmlsbFRleHQoJ+WRmOW3pScsIGNhbCg0MDUpLCBjYWwoMzYpICsgY2FsKDI0KSlcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDQ1NSksIGNhbCgzNikpXG4gICAgY3R4LmxpbmVUbyhjYWwoNDU1KSwgY2FsKDM2KSAqIDQpXG4gICAgY3R4LmZpbGxUZXh0KCflhbbku5bnrKzkuInmlrknLCBjYWwoNDA1KSwgY2FsKDM2KSAqIDIgKyBjYWwoMjQpKVxuXG4gICAgY3R4Lm1vdmVUbyhjYWwoNzEwKSwgMClcbiAgICBjdHgubGluZVRvKGNhbCg3MTApLCBjYWwoMzYpICogNClcbiAgICBjdHguZmlsbFRleHQoJ+WPkeelqOWPt+eggScsIGNhbCg0MDUpLCBjYWwoMzYpICogMyArIGNhbCgyNCkpXG5cbiAgICBjdHgubW92ZVRvKDAsIDApXG4gICAgY3R4LmxpbmVUbygwLCBjYWwoMzYpICogNClcblxuICAgIGN0eC5tb3ZlVG8oY2FsKDEwMCksIDApXG4gICAgY3R4LmxpbmVUbyhjYWwoMTAwKSwgY2FsKDM2KSAqIDQpXG5cbiAgICBjdHgubW92ZVRvKGNhbCgxOTApLCAwKVxuICAgIGN0eC5saW5lVG8oY2FsKDE5MCksIGNhbCgzNikpXG5cbiAgICBsZXQgdGl0bGUgPSBbJ+iusOi0picsICflh7rnurMnLCAn5a6h5qC4JywgJ+WItuWNlSddXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgIGN0eC5maWxsVGV4dCh0aXRsZVtpXSwgY2FsKDE5MCArIDEzMCAqIGkgKyAyNSksIGNhbCgyNCkgKVxuICAgICAgY3R4Lm1vdmVUbyhjYWwoMTkwICsgMTMwICogaSArIDUwKSwgMClcbiAgICAgIGN0eC5saW5lVG8oY2FsKDE5MCArIDEzMCAqIGkgKyA1MCksIGNhbCgzNikpXG4gICAgICBjdHgubW92ZVRvKGNhbCgxOTAgKyAxMzAgKiBpICsgMTMwKSwgMClcbiAgICAgIGN0eC5saW5lVG8oY2FsKDE5MCArIDEzMCAqIGkgKyAxMzApLCBjYWwoMzYpKVxuICAgIH1cbiAgICBjdHguc3Ryb2tlKClcblxuICAgIGN0eC5maWxsVGV4dCh0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VySW5mby5uaWNrTmFtZSwgY2FsKDE5MCArIDEzMCAqIDMgKyA5MCksIGNhbCgyNCkpXG4gICAgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0Lkludm9pY2VOdW0sIGNhbCg1ODIpLCBjYWwoMjQpICsgY2FsKDM2KSAqIDMpXG4gICAgdGhpcy5yZXN1bHQuYmVsb25nUHJvamVjdCAmJiBjdHguZmlsbFRleHQodGhpcy5yZXN1bHQuYmVsb25nUHJvamVjdCwgY2FsKDIyOCksIGNhbCgyNCkgKyBjYWwoMzYpICogMylcblxuICAgIGN0eC5maWxsVGV4dCh0aGlzLnJlc3VsdC5TZWxsZXJOYW1lLCBjYWwoMjI4KSwgY2FsKDI0KSArIGNhbCgzNikgKiAyKVxuICAgIHRoaXMucmVzdWx0LnBlcnNvbk5hbWUgJiYgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0LnBlcnNvbk5hbWUsIGNhbCg1ODIpLCBjYWwoMjQpICsgY2FsKDM2KSlcbiAgICB0aGlzLnJlc3VsdC5vdGhlck5hbWUgJiYgY3R4LmZpbGxUZXh0KHRoaXMucmVzdWx0Lm90aGVyTmFtZSwgY2FsKDU4MiksIGNhbCgyNCkgKyBjYWwoMzYpICogMilcblxuICAgIGN0eC5kcmF3KHRydWUsICgpID0+IHtcbiAgICAgIHd4LmNhbnZhc1RvVGVtcEZpbGVQYXRoKHtcbiAgICAgICAgICB4OiAwLFxuICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgd2lkdGg6IGNhbCg3NTApLFxuICAgICAgICAgIGhlaWdodDogY2FsKDEyMCkgKyAoOCArIDIgKiB0aGlzLnJlc3VsdC5Db21tb2RpdHlOYW1lLmxlbmd0aCkgKiBjYWwoMzYpLFxuICAgICAgICAgIGNhbnZhc0lkOiAnY2FudmFzSWQnLC8vY2FudmFzSWTlkozmoIfnrb7ph4zpnaLnmoRpZOWvueW6lFxuICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgd3guaGlkZVRvYXN0KClcbiAgICAgICAgICAgICAgLy/lsIbojrflj5bliLDnmoTlm77niYfkuLTml7bot6/lvoRzZXTliLBjYW52YXNTYXZlaW1n5LitXG4gICAgICAgICAgICAgIHRoYXQudGVtcEZpbGVQYXRoID0gcmVzLnRlbXBGaWxlUGF0aFxuICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuIl19