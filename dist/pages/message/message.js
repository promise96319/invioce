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

var Message = function (_wepy$page) {
  _inherits(Message, _wepy$page);

  function Message() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Message);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Message.__proto__ || Object.getPrototypeOf(Message)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '确认发票信息'
    }, _this.data = {
      message: {},
      invoiceType: [{
        value: '其他发票'
      }, {
        value: '专用发票'
      }, {
        value: '普通发票'
      }],
      errMessage: ''
    }, _this.computed = {
      calTotalMoney: function calTotalMoney() {
        if (this.message && this.message.CommodityAmount) {
          var total = 0;
          this.message.CommodityAmount.forEach(function (item) {
            total += Number(item.word);
          });

          this.message.CommodityTax.forEach(function (item) {
            total += Number(item.word);
          });
          this.message.AmountInFiguers = total.toFixed(2);
          return total.toFixed(2);
        }
      }
    }, _this.methods = {
      onInput: function onInput(name, e) {
        this.data.message[name] = e.detail.value;
      },
      radioChange: function radioChange(e) {
        this.message.InvoiceType = e.detail.value;
      },
      onInputDetail: function onInputDetail(type, index, e) {
        this.message[type][index].word = e.detail.value;
      },
      chooseIdentity: function chooseIdentity(e) {
        this.message.identity = e.detail.value;
      },
      chooseSource: function chooseSource(e) {
        this.message.source = e.detail.value;
      },
      choosePay: function choosePay(e) {
        this.message.pay = e.detail.value;
      },
      handleDiscription: function handleDiscription(e) {
        this.message.discription = e.detail.value;
      },
      handleBelongTo: function handleBelongTo(e) {
        this.message.belongProject = e.detail.value;
      },
      handlePersonName: function handlePersonName(e) {
        this.message.otherName = '';
        this.message.personName = e.detail.value;
      },
      handleOtherName: function handleOtherName(e) {
        this.message.personName = '';
        this.message.otherName = e.detail.value;
      },
      handleMakePdf: function handleMakePdf() {
        if (!this.message.PurchaserName) {
          return this.errMessage = '请填写购买者的名称';
        }
        if (!this.message.SellerName) {
          return this.errMessage = '请填写销售者的名称';
        }
        if (!this.message.InvoiceDate) {
          return this.errMessage = '请填写开票日期';
        }
        if (!this.message.InvoiceNum) {
          return this.errMessage = '请填写发票号码';
        }
        if (!this.message.discription) {
          return this.errMessage = '请填写业务描述';
        }
        if (!this.message.identity) {
          return this.errMessage = '请选择您是属于购买方还是销售方';
        }
        if (this.message.identity === '购买方') {
          if (!this.message.pay) {
            return this.errMessage = '请选择发票由谁支付';
          } else {
            if (this.message.pay === '公司员工' && !this.message.personName) {
              return this.errMessage = '请填写公司员工的名称';
            }
            if (this.message.pay === '其他第三方' && !this.message.otherName) {
              return this.errMessage = '请填写其他第三方的名称';
            }
          }

          if (!this.message.source) {
            return this.errMessage = '请选择该笔业务产生的原因';
          }
        }

        // console.log(this.message);
        if (this.message.identity === '销售方') {
          wx.navigateTo({
            url: '../sale/sale?result=' + JSON.stringify(this.message)
          });
        }

        if (this.message.identity === '购买方') {
          if (this.message.source === '员工福利' || this.message.source === '业务招待') {
            wx.navigateTo({
              url: '../notax/notax?result=' + JSON.stringify(this.message)
            });
          } else {
            wx.navigateTo({
              url: '../purchase/purchase?result=' + JSON.stringify(this.message)
            });
          }
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Message, [{
    key: 'onLoad',
    value: function onLoad(options) {

      // console.log(JSON.parse(options.message));
      this.message = JSON.parse(options.message);
      // this.$apply()
      // this.message = {
      //   AmountInFiguers: "5.15",
      //   AmountInWords: "伍图意角伍分",
      //   CheckCode: "",
      //   Checker: "TIST",
      //   CommodityAmount: [{
      //     word: "12345.89",
      //     row: "1"
      //   }, {
      //     word: "12345.89",
      //     row: "1"
      //   }, {
      //     word: "12345.89",
      //     row: "1"
      //   }, {
      //     word: "12345.89",
      //     row: "1"
      //   }, {
      //     word: "12345.89",
      //     row: "1"
      //   }],
      //   CommodityName: [{
      //     word: "货物可乐",
      //     row: "1"
      //   }, {
      //     word: "货物可乐",
      //     row: "1"
      //   }, {
      //     word: "货物可乐",
      //     row: "1"
      //   }, {
      //     word: "货物可乐",
      //     row: "1"
      //   }, {
      //     word: "货物可乐",
      //     row: "1"
      //   }],
      //   CommodityNum: [{
      //     word: "23.34",
      //     row: "1"
      //   }, {
      //     word: "23.34",
      //     row: "1"
      //   }, {
      //     word: "23.34",
      //     row: "1"
      //   }, {
      //     word: "23.34",
      //     row: "1"
      //   }, {
      //     word: "23.34",
      //     row: "1"
      //   }],
      //   CommodityPrice: [{
      //     word: "12345.34",
      //     row: "1"
      //   }, {
      //     word: "12345.34",
      //     row: "1"
      //   }, {
      //     word: "12345.34",
      //     row: "1"
      //   }, {
      //     word: "12345.34",
      //     row: "1"
      //   }, {
      //     word: "12345.34",
      //     row: "1"
      //   }],
      //   CommodityTax: [{
      //       word: "0.00",
      //       row: "2"
      //     },
      //     {
      //       word: "0.00",
      //       row: "2"
      //     },
      //     {
      //       word: "0.00",
      //       row: "2"
      //     },
      //     {
      //       word: "0.00",
      //       row: "2"
      //     },
      //     {
      //       word: "0.00",
      //       row: "2"
      //     }
      //   ],
      //   CommodityTaxRate: [],
      //   CommodityType: [],
      //   CommodityUnit: [],
      //   InvoiceCode: "",
      //   InvoiceDate: "2015年01月01日",
      //   InvoiceNum: "00593803",
      //   InvoiceType: "专用发票",
      //   NoteDrawer: "TBST",
      //   Password: "*/37647691>77>236<>00/-6>>/0-4>+0*2606+<+518+<18+<*4+7647691>77>236<>783>9/315753<1*110/+8+16*28<25192>345",
      //   Payee: "TEST",
      //   PurchaserAddress: ";北京市海淀区查石口路号天信息甲18就66888",
      //   PurchaserBank: "测试京市海淀区查石口路甲18号就天信息;北",
      //   PurchaserName: "航天信息份有限公司",
      //   PurchaserRegisterNum: "2110101222666888",
      //   Remarks: "测试打印样例",
      //   SellerAddress: "TBST23456",
      //   SellerBank: "",
      //   SellerName: "航天信息股份有限公司",
      //   SellerRegisterNum: "110101222666888",
      //   TotalAmount: "5.00",
      //   TotalTax: "0.15",
      // }
    }
  }]);

  return Message;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Message , 'pages/message/message'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UuanMiXSwibmFtZXMiOlsiTWVzc2FnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibWVzc2FnZSIsImludm9pY2VUeXBlIiwidmFsdWUiLCJlcnJNZXNzYWdlIiwiY29tcHV0ZWQiLCJjYWxUb3RhbE1vbmV5IiwiQ29tbW9kaXR5QW1vdW50IiwidG90YWwiLCJmb3JFYWNoIiwiaXRlbSIsIk51bWJlciIsIndvcmQiLCJDb21tb2RpdHlUYXgiLCJBbW91bnRJbkZpZ3VlcnMiLCJ0b0ZpeGVkIiwibWV0aG9kcyIsIm9uSW5wdXQiLCJuYW1lIiwiZSIsImRldGFpbCIsInJhZGlvQ2hhbmdlIiwiSW52b2ljZVR5cGUiLCJvbklucHV0RGV0YWlsIiwidHlwZSIsImluZGV4IiwiY2hvb3NlSWRlbnRpdHkiLCJpZGVudGl0eSIsImNob29zZVNvdXJjZSIsInNvdXJjZSIsImNob29zZVBheSIsInBheSIsImhhbmRsZURpc2NyaXB0aW9uIiwiZGlzY3JpcHRpb24iLCJoYW5kbGVCZWxvbmdUbyIsImJlbG9uZ1Byb2plY3QiLCJoYW5kbGVQZXJzb25OYW1lIiwib3RoZXJOYW1lIiwicGVyc29uTmFtZSIsImhhbmRsZU90aGVyTmFtZSIsImhhbmRsZU1ha2VQZGYiLCJQdXJjaGFzZXJOYW1lIiwiU2VsbGVyTmFtZSIsIkludm9pY2VEYXRlIiwiSW52b2ljZU51bSIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsIkpTT04iLCJzdHJpbmdpZnkiLCJvcHRpb25zIiwicGFyc2UiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsZUFBUyxFQURKO0FBRUxDLG1CQUFhLENBQUM7QUFDVkMsZUFBTztBQURHLE9BQUQsRUFHWDtBQUNFQSxl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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7Ozs7RUFwUGtDbUQsZUFBS0MsSTs7a0JBQXJCeEQsTyIsImZpbGUiOiJtZXNzYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgdXRpbCBmcm9tICcuLi8uLi91dGlscy91dGlsJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ehruiupOWPkeelqOS/oeaBrydcclxuICB9XHJcblxyXG4gIGRhdGEgPSB7XHJcbiAgICBtZXNzYWdlOiB7fSxcclxuICAgIGludm9pY2VUeXBlOiBbe1xyXG4gICAgICAgIHZhbHVlOiAn5YW25LuW5Y+R56WoJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdmFsdWU6ICfkuJPnlKjlj5HnpagnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB2YWx1ZTogJ+aZrumAmuWPkeelqCdcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBlcnJNZXNzYWdlOiAnJ1xyXG4gIH1cclxuXHJcbiAgY29tcHV0ZWQgPSB7XHJcbiAgICBjYWxUb3RhbE1vbmV5KCkge1xyXG4gICAgICBpZiAodGhpcy5tZXNzYWdlICYmIHRoaXMubWVzc2FnZS5Db21tb2RpdHlBbW91bnQpIHtcclxuICAgICAgICBsZXQgdG90YWwgPSAwXHJcbiAgICAgICAgdGhpcy5tZXNzYWdlLkNvbW1vZGl0eUFtb3VudC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICB0b3RhbCArPSBOdW1iZXIoaXRlbS53b3JkKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMubWVzc2FnZS5Db21tb2RpdHlUYXguZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgdG90YWwgKz0gTnVtYmVyKGl0ZW0ud29yZClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubWVzc2FnZS5BbW91bnRJbkZpZ3VlcnMgPSB0b3RhbC50b0ZpeGVkKDIpXHJcbiAgICAgICAgcmV0dXJuIHRvdGFsLnRvRml4ZWQoMilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIG9uSW5wdXQobmFtZSwgZSkge1xyXG4gICAgICB0aGlzLmRhdGEubWVzc2FnZVtuYW1lXSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICB9LFxyXG4gICAgcmFkaW9DaGFuZ2UoZSkge1xyXG4gICAgICB0aGlzLm1lc3NhZ2UuSW52b2ljZVR5cGUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgfSxcclxuICAgIG9uSW5wdXREZXRhaWwodHlwZSwgaW5kZXgsIGUpIHtcclxuICAgICAgdGhpcy5tZXNzYWdlW3R5cGVdW2luZGV4XS53b3JkID0gZS5kZXRhaWwudmFsdWVcclxuICAgIH0sXHJcbiAgICBjaG9vc2VJZGVudGl0eShlKSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZS5pZGVudGl0eSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICB9LFxyXG4gICAgY2hvb3NlU291cmNlKGUpIHtcclxuICAgICAgdGhpcy5tZXNzYWdlLnNvdXJjZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICB9LFxyXG4gICAgY2hvb3NlUGF5KGUpIHtcclxuICAgICAgdGhpcy5tZXNzYWdlLnBheSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICB9LFxyXG4gICAgaGFuZGxlRGlzY3JpcHRpb24oZSkge1xyXG4gICAgICB0aGlzLm1lc3NhZ2UuZGlzY3JpcHRpb24gPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgfSxcclxuICAgIGhhbmRsZUJlbG9uZ1RvKGUpIHtcclxuICAgICAgdGhpcy5tZXNzYWdlLmJlbG9uZ1Byb2plY3QgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgfSxcclxuICAgIGhhbmRsZVBlcnNvbk5hbWUoZSkge1xyXG4gICAgICB0aGlzLm1lc3NhZ2Uub3RoZXJOYW1lID0gJydcclxuICAgICAgdGhpcy5tZXNzYWdlLnBlcnNvbk5hbWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgfSxcclxuICAgIGhhbmRsZU90aGVyTmFtZShlKSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZS5wZXJzb25OYW1lID0gJydcclxuICAgICAgdGhpcy5tZXNzYWdlLm90aGVyTmFtZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICB9LFxyXG4gICAgaGFuZGxlTWFrZVBkZigpIHtcclxuICAgICAgaWYgKCF0aGlzLm1lc3NhZ2UuUHVyY2hhc2VyTmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVyck1lc3NhZ2UgPSAn6K+35aGr5YaZ6LSt5Lmw6ICF55qE5ZCN56ewJ1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5tZXNzYWdlLlNlbGxlck5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lcnJNZXNzYWdlID0gJ+ivt+Whq+WGmemUgOWUruiAheeahOWQjeensCdcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMubWVzc2FnZS5JbnZvaWNlRGF0ZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVyck1lc3NhZ2UgPSAn6K+35aGr5YaZ5byA56Wo5pel5pyfJ1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5tZXNzYWdlLkludm9pY2VOdW0pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lcnJNZXNzYWdlID0gJ+ivt+Whq+WGmeWPkeelqOWPt+eggSdcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMubWVzc2FnZS5kaXNjcmlwdGlvbikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVyck1lc3NhZ2UgPSAn6K+35aGr5YaZ5Lia5Yqh5o+P6L+wJ1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5tZXNzYWdlLmlkZW50aXR5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyTWVzc2FnZSA9ICfor7fpgInmi6nmgqjmmK/lsZ7kuo7otK3kubDmlrnov5jmmK/plIDllK7mlrknXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMubWVzc2FnZS5pZGVudGl0eSA9PT0gJ+i0reS5sOaWuScpIHtcclxuICAgICAgICBpZiAoIXRoaXMubWVzc2FnZS5wYXkpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmVyck1lc3NhZ2UgPSAn6K+36YCJ5oup5Y+R56Wo55Sx6LCB5pSv5LuYJ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5tZXNzYWdlLnBheSA9PT0gJ+WFrOWPuOWRmOW3pScgJiYgIXRoaXMubWVzc2FnZS5wZXJzb25OYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVyck1lc3NhZ2UgPSAn6K+35aGr5YaZ5YWs5Y+45ZGY5bel55qE5ZCN56ewJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXMubWVzc2FnZS5wYXkgPT09ICflhbbku5bnrKzkuInmlrknICYmICF0aGlzLm1lc3NhZ2Uub3RoZXJOYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVyck1lc3NhZ2UgPSAn6K+35aGr5YaZ5YW25LuW56ys5LiJ5pa555qE5ZCN56ewJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLm1lc3NhZ2Uuc291cmNlKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5lcnJNZXNzYWdlID0gJ+ivt+mAieaLqeivpeeslOS4muWKoeS6p+eUn+eahOWOn+WboCdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubWVzc2FnZSk7XHJcbiAgICAgIGlmICh0aGlzLm1lc3NhZ2UuaWRlbnRpdHkgPT09ICfplIDllK7mlrknKSB7XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6ICcuLi9zYWxlL3NhbGU/cmVzdWx0PScgKyBKU09OLnN0cmluZ2lmeSh0aGlzLm1lc3NhZ2UpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMubWVzc2FnZS5pZGVudGl0eSA9PT0gJ+i0reS5sOaWuScpIHtcclxuICAgICAgICBpZiAodGhpcy5tZXNzYWdlLnNvdXJjZSA9PT0gJ+WRmOW3peemj+WIqScgfHwgdGhpcy5tZXNzYWdlLnNvdXJjZSA9PT0gJ+S4muWKoeaLm+W+hScpIHtcclxuICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6ICcuLi9ub3RheC9ub3RheD9yZXN1bHQ9JyArIEpTT04uc3RyaW5naWZ5KHRoaXMubWVzc2FnZSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6ICcuLi9wdXJjaGFzZS9wdXJjaGFzZT9yZXN1bHQ9JyArIEpTT04uc3RyaW5naWZ5KHRoaXMubWVzc2FnZSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkxvYWQob3B0aW9ucykge1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2Uob3B0aW9ucy5tZXNzYWdlKSk7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBKU09OLnBhcnNlKG9wdGlvbnMubWVzc2FnZSlcclxuICAgIC8vIHRoaXMuJGFwcGx5KClcclxuICAgIC8vIHRoaXMubWVzc2FnZSA9IHtcclxuICAgIC8vICAgQW1vdW50SW5GaWd1ZXJzOiBcIjUuMTVcIixcclxuICAgIC8vICAgQW1vdW50SW5Xb3JkczogXCLkvI3lm77mhI/op5LkvI3liIZcIixcclxuICAgIC8vICAgQ2hlY2tDb2RlOiBcIlwiLFxyXG4gICAgLy8gICBDaGVja2VyOiBcIlRJU1RcIixcclxuICAgIC8vICAgQ29tbW9kaXR5QW1vdW50OiBbe1xyXG4gICAgLy8gICAgIHdvcmQ6IFwiMTIzNDUuODlcIixcclxuICAgIC8vICAgICByb3c6IFwiMVwiXHJcbiAgICAvLyAgIH0sIHtcclxuICAgIC8vICAgICB3b3JkOiBcIjEyMzQ1Ljg5XCIsXHJcbiAgICAvLyAgICAgcm93OiBcIjFcIlxyXG4gICAgLy8gICB9LCB7XHJcbiAgICAvLyAgICAgd29yZDogXCIxMjM0NS44OVwiLFxyXG4gICAgLy8gICAgIHJvdzogXCIxXCJcclxuICAgIC8vICAgfSwge1xyXG4gICAgLy8gICAgIHdvcmQ6IFwiMTIzNDUuODlcIixcclxuICAgIC8vICAgICByb3c6IFwiMVwiXHJcbiAgICAvLyAgIH0sIHtcclxuICAgIC8vICAgICB3b3JkOiBcIjEyMzQ1Ljg5XCIsXHJcbiAgICAvLyAgICAgcm93OiBcIjFcIlxyXG4gICAgLy8gICB9XSxcclxuICAgIC8vICAgQ29tbW9kaXR5TmFtZTogW3tcclxuICAgIC8vICAgICB3b3JkOiBcIui0p+eJqeWPr+S5kFwiLFxyXG4gICAgLy8gICAgIHJvdzogXCIxXCJcclxuICAgIC8vICAgfSwge1xyXG4gICAgLy8gICAgIHdvcmQ6IFwi6LSn54mp5Y+v5LmQXCIsXHJcbiAgICAvLyAgICAgcm93OiBcIjFcIlxyXG4gICAgLy8gICB9LCB7XHJcbiAgICAvLyAgICAgd29yZDogXCLotKfnianlj6/kuZBcIixcclxuICAgIC8vICAgICByb3c6IFwiMVwiXHJcbiAgICAvLyAgIH0sIHtcclxuICAgIC8vICAgICB3b3JkOiBcIui0p+eJqeWPr+S5kFwiLFxyXG4gICAgLy8gICAgIHJvdzogXCIxXCJcclxuICAgIC8vICAgfSwge1xyXG4gICAgLy8gICAgIHdvcmQ6IFwi6LSn54mp5Y+v5LmQXCIsXHJcbiAgICAvLyAgICAgcm93OiBcIjFcIlxyXG4gICAgLy8gICB9XSxcclxuICAgIC8vICAgQ29tbW9kaXR5TnVtOiBbe1xyXG4gICAgLy8gICAgIHdvcmQ6IFwiMjMuMzRcIixcclxuICAgIC8vICAgICByb3c6IFwiMVwiXHJcbiAgICAvLyAgIH0sIHtcclxuICAgIC8vICAgICB3b3JkOiBcIjIzLjM0XCIsXHJcbiAgICAvLyAgICAgcm93OiBcIjFcIlxyXG4gICAgLy8gICB9LCB7XHJcbiAgICAvLyAgICAgd29yZDogXCIyMy4zNFwiLFxyXG4gICAgLy8gICAgIHJvdzogXCIxXCJcclxuICAgIC8vICAgfSwge1xyXG4gICAgLy8gICAgIHdvcmQ6IFwiMjMuMzRcIixcclxuICAgIC8vICAgICByb3c6IFwiMVwiXHJcbiAgICAvLyAgIH0sIHtcclxuICAgIC8vICAgICB3b3JkOiBcIjIzLjM0XCIsXHJcbiAgICAvLyAgICAgcm93OiBcIjFcIlxyXG4gICAgLy8gICB9XSxcclxuICAgIC8vICAgQ29tbW9kaXR5UHJpY2U6IFt7XHJcbiAgICAvLyAgICAgd29yZDogXCIxMjM0NS4zNFwiLFxyXG4gICAgLy8gICAgIHJvdzogXCIxXCJcclxuICAgIC8vICAgfSwge1xyXG4gICAgLy8gICAgIHdvcmQ6IFwiMTIzNDUuMzRcIixcclxuICAgIC8vICAgICByb3c6IFwiMVwiXHJcbiAgICAvLyAgIH0sIHtcclxuICAgIC8vICAgICB3b3JkOiBcIjEyMzQ1LjM0XCIsXHJcbiAgICAvLyAgICAgcm93OiBcIjFcIlxyXG4gICAgLy8gICB9LCB7XHJcbiAgICAvLyAgICAgd29yZDogXCIxMjM0NS4zNFwiLFxyXG4gICAgLy8gICAgIHJvdzogXCIxXCJcclxuICAgIC8vICAgfSwge1xyXG4gICAgLy8gICAgIHdvcmQ6IFwiMTIzNDUuMzRcIixcclxuICAgIC8vICAgICByb3c6IFwiMVwiXHJcbiAgICAvLyAgIH1dLFxyXG4gICAgLy8gICBDb21tb2RpdHlUYXg6IFt7XHJcbiAgICAvLyAgICAgICB3b3JkOiBcIjAuMDBcIixcclxuICAgIC8vICAgICAgIHJvdzogXCIyXCJcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgIHdvcmQ6IFwiMC4wMFwiLFxyXG4gICAgLy8gICAgICAgcm93OiBcIjJcIlxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgd29yZDogXCIwLjAwXCIsXHJcbiAgICAvLyAgICAgICByb3c6IFwiMlwiXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICB3b3JkOiBcIjAuMDBcIixcclxuICAgIC8vICAgICAgIHJvdzogXCIyXCJcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgIHdvcmQ6IFwiMC4wMFwiLFxyXG4gICAgLy8gICAgICAgcm93OiBcIjJcIlxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgXSxcclxuICAgIC8vICAgQ29tbW9kaXR5VGF4UmF0ZTogW10sXHJcbiAgICAvLyAgIENvbW1vZGl0eVR5cGU6IFtdLFxyXG4gICAgLy8gICBDb21tb2RpdHlVbml0OiBbXSxcclxuICAgIC8vICAgSW52b2ljZUNvZGU6IFwiXCIsXHJcbiAgICAvLyAgIEludm9pY2VEYXRlOiBcIjIwMTXlubQwMeaciDAx5pelXCIsXHJcbiAgICAvLyAgIEludm9pY2VOdW06IFwiMDA1OTM4MDNcIixcclxuICAgIC8vICAgSW52b2ljZVR5cGU6IFwi5LiT55So5Y+R56WoXCIsXHJcbiAgICAvLyAgIE5vdGVEcmF3ZXI6IFwiVEJTVFwiLFxyXG4gICAgLy8gICBQYXNzd29yZDogXCIqLzM3NjQ3NjkxPjc3PjIzNjw+MDAvLTY+Pi8wLTQ+KzAqMjYwNis8KzUxOCs8MTgrPCo0Kzc2NDc2OTE+Nzc+MjM2PD43ODM+OS8zMTU3NTM8MSoxMTAvKzgrMTYqMjg8MjUxOTI+MzQ1XCIsXHJcbiAgICAvLyAgIFBheWVlOiBcIlRFU1RcIixcclxuICAgIC8vICAgUHVyY2hhc2VyQWRkcmVzczogXCI75YyX5Lqs5biC5rW35reA5Yy65p+l55+z5Y+j6Lev5Y+35aSp5L+h5oGv55SyMTjlsLE2Njg4OFwiLFxyXG4gICAgLy8gICBQdXJjaGFzZXJCYW5rOiBcIua1i+ivleS6rOW4gua1t+a3gOWMuuafpeefs+WPo+i3r+eUsjE45Y+35bCx5aSp5L+h5oGvO+WMl1wiLFxyXG4gICAgLy8gICBQdXJjaGFzZXJOYW1lOiBcIuiIquWkqeS/oeaBr+S7veaciemZkOWFrOWPuFwiLFxyXG4gICAgLy8gICBQdXJjaGFzZXJSZWdpc3Rlck51bTogXCIyMTEwMTAxMjIyNjY2ODg4XCIsXHJcbiAgICAvLyAgIFJlbWFya3M6IFwi5rWL6K+V5omT5Y2w5qC35L6LXCIsXHJcbiAgICAvLyAgIFNlbGxlckFkZHJlc3M6IFwiVEJTVDIzNDU2XCIsXHJcbiAgICAvLyAgIFNlbGxlckJhbms6IFwiXCIsXHJcbiAgICAvLyAgIFNlbGxlck5hbWU6IFwi6Iiq5aSp5L+h5oGv6IKh5Lu95pyJ6ZmQ5YWs5Y+4XCIsXHJcbiAgICAvLyAgIFNlbGxlclJlZ2lzdGVyTnVtOiBcIjExMDEwMTIyMjY2Njg4OFwiLFxyXG4gICAgLy8gICBUb3RhbEFtb3VudDogXCI1LjAwXCIsXHJcbiAgICAvLyAgIFRvdGFsVGF4OiBcIjAuMTVcIixcclxuICAgIC8vIH1cclxuICB9XHJcbn1cbiJdfQ==