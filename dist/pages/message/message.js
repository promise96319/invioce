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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
      company: {},
      isTaxPerson: true,
      errMessage: ''
    }, _this.computed = {
      // 计算总的金额（价税合计）
      calTotalMoney: function calTotalMoney() {
        if (this.message && this.message.CommodityAmount) {
          var total = 0;
          this.message.CommodityAmount.forEach(function (item) {
            total += Number(item.word) || 0;
          });

          this.message.CommodityTax.forEach(function (item) {
            total += Number(item.word) || 0;
          });
          this.message.AmountInFiguers = total.toFixed(2);
          return total.toFixed(2);
        }
      },

      // 判断是否为普通发票
      judgeInvoiceType: function judgeInvoiceType() {
        if (this.message.InvoiceType === '普通发票' || this.message.InvoiceType === '电子普通发票' || this.message.InvoiceType === '\b普通发票') {
          return true;
        }
        return false;
      },
      judgeOtherInvoiceType: function judgeOtherInvoiceType() {
        if (this.message.InvoiceType !== '专用发票' && this.message.Invoicetype !== '普通发票' && this.message.InvoiceType !== '电子普通发票' && this.message.InvoiceType !== '\b普通发票') {
          return true;
        }
        return false;
      },
      chooseDate: function chooseDate() {
        if (this.message.InvoiceDate) {
          return this.message.InvoiceDate.replace(/年|月/g, '-').replace(/日/, '');
        } else {
          this.message.InvoiceDate = '2000-01-01';
          return '2000-01-01';
        }
      }
    }, _this.methods = {
      // 开票日期
      bindDateChange: function bindDateChange(e) {
        this.message.InvoiceDate = e.detail.value;
      },
      onInput: function onInput(name, e) {
        this.data.message[name] = e.detail.value;
      },

      // 发票类型
      radioChange: function radioChange(e) {
        this.message.InvoiceType = e.detail.value;
      },

      // 一般纳税人状态
      taxPersonChange: function taxPersonChange(e) {
        this.isTaxPerson = e.detail.value === '是' ? true : false;
      },

      // 商品信息
      onInputDetail: function onInputDetail(type, index, e) {
        var res = e.detail.value;
        if (type !== 'CommodityName') {
          if (!res) {
            if (res === 0) {
              this.message[type][index].word = res;
            } else {
              this.message[type][index].word = '';
            }
          } else {
            if (res[0] === '-' && res.length === 1) {
              this.message[type][index].word = res;
            } else {
              this.message[type][index].word = parseFloat(res) || 0;
            }
          }
        } else {
          this.message[type][index].word = res;
        }
      },

      // 购买者还是消费者
      chooseIdentity: function chooseIdentity(e) {
        this.message.identity = e.detail.value;
      },

      // 业务产生原因
      chooseSource: function chooseSource(e) {
        this.message.source = e.detail.value;
      },

      // 由谁支付
      choosePay: function choosePay(e) {
        this.message.pay = e.detail.value;
      },

      // 业务描述 == 默认业务产生原因
      handleDiscription: function handleDiscription(e) {
        var _this2 = this;

        this.message.discription = e.detail.value;
        // 判断业务产生的原因
        if (this.message.identity !== '购买方' || !this.message.discription) return;

        if (['团建', '节日礼品', '生日礼品', '聚餐', '员工病假慰问', '员工产假慰问'].some(function (item) {
          return _this2.message.discription.indexOf(item) !== -1;
        })) {
          this.message.source = '员工福利';
          return;
        }
        if (['客户礼品', '为客户支付的差旅费用', '商务洽谈用餐'].some(function (item) {
          return _this2.message.discription.indexOf(item) !== -1;
        })) {
          this.message.source = '业务招待';
          return;
        }
        if (['出差', '差旅', '商务旅行', '机票', '火车票', '公共交通', '租车', '大巴', '长途客车', '酒店', '餐饮', '停车费', '出租车费', '网约车费', '旅行保险'].some(function (item) {
          return _this2.message.discription.indexOf(item) !== -1;
        })) {
          this.message.source = '员工差旅费用';
          return;
        }

        this.message.source = '其他';
      },

      // 发票由谁支付
      handleBelongTo: function handleBelongTo(e) {
        this.message.belongProject = e.detail.value;
      },

      // 公司员工名称
      handlePersonName: function handlePersonName(e) {
        this.message.otherName = '';
        this.message.personName = e.detail.value;
      },

      // 第三方名称
      handleOtherName: function handleOtherName(e) {
        this.message.personName = '';
        this.message.otherName = e.detail.value;
      },

      // 生成凭证
      handleMakePdf: function handleMakePdf() {
        if (!this.message.PurchaserName) {
          return this.errMessage = '请填写购买者的名称';
        }
        if (!this.message.SellerName) {
          return this.errMessage = '请填写销售者的名称';
        }

        for (var i = 0; i < this.message.CommodityName.length; i++) {
          if (!this.message.CommodityName[i].word) {
            return this.errMessage = '请填写支付信息' + (i + 1) + '的名称';
          }

          if (!this.message.CommodityAmount[i].word && this.message.CommodityAmount[i].word !== 0 || this.message.CommodityAmount[i].word === '-') {
            return this.errMessage = '请填写支付信息' + (i + 1) + '的金额';
          }

          if (!this.message.CommodityTax[i].word && this.message.CommodityTax[i].word !== 0 || this.message.CommodityTax[i].word === '-') {
            return this.errMessage = '请填写支付信息' + (i + 1) + '的税额';
          }
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

        this.errMessage = '';

        if (this.message.identity === '销售方') {
          wx.navigateTo({
            url: '../sale/sale?result=' + JSON.stringify(this.message)
          });
          return;
        }

        if (this.message.identity === '购买方') {
          if (!this.isTaxPerson || this.message.InvoiceType == '普通发票' || this.message.InvoiceType == '其他发票' || this.message.InvoiceType == '\b普通发票' || this.message.InvoiceType == '\b其他发票') {
            wx.navigateTo({
              url: '../notax/notax?result=' + JSON.stringify(this.message)
            });
            return;
          }

          if (this.message.source === '员工福利' || this.message.source === '业务招待') {
            wx.navigateTo({
              url: '../notax/notax?result=' + JSON.stringify(this.message)
            });
            return;
          } else {
            wx.navigateTo({
              url: '../purchase/purchase?result=' + JSON.stringify(this.message)
            });
            return;
          }
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Message, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.message = JSON.parse(options.message);
      this.company = JSON.parse(options.company);
      this.$apply();
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
      //   InvoiceDate: "2017年09月01日",
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
      //
      // this.company = {
      //   companyName: '航天信息份有限公司',
      //   personName: 'embark',
      //   isTaxPerson: false,
      //   personNum: '1213',
      //   personTelNum: '12345678910'
      // }

      this.isTaxPerson = this.company.isTaxPerson;
      if (this.company.companyName === this.message.PurchaserName) {
        this.message.identity = '购买方';
      } else if (this.company.companyName === this.message.SellerName) {
        this.message.identity = '销售方';
      }

      if (this.message.CommodityName.length === 0) {
        this.handleAddDetail(0);
      }
    }

    // 增加商品信息

  }, {
    key: 'handleAddDetail',
    value: function handleAddDetail(e) {
      var index = 0;
      if (e && e.currentTarget) {
        index = e.currentTarget.dataset.index;
      }

      if (this.message.CommodityName.length === 0) {
        this.message.CommodityName.push({
          word: '',
          row: 1
        });
        this.message.CommodityAmount.push({
          word: '',
          row: 1
        });
        this.message.CommodityTax.push({
          word: '',
          row: 1
        });
      } else {
        var tempNameFront = this.message.CommodityName.slice(0, index + 1);
        var tempNameBack = this.message.CommodityName.slice(index + 1);
        this.message.CommodityName = [].concat(_toConsumableArray(tempNameFront), [{
          word: '',
          row: index + 1
        }], _toConsumableArray(tempNameBack));

        var tempAmountFront = this.message.CommodityAmount.slice(0, index + 1);
        var tempAmountBack = this.message.CommodityAmount.slice(index + 1);
        this.message.CommodityAmount = [].concat(_toConsumableArray(tempAmountFront), [{
          word: '',
          row: index + 1
        }], _toConsumableArray(tempAmountBack));

        var tempTaxFront = this.message.CommodityTax.slice(0, index + 1);
        var tempTaxBack = this.message.CommodityTax.slice(index + 1);
        this.message.CommodityTax = [].concat(_toConsumableArray(tempTaxFront), [{
          word: '',
          row: index + 1
        }], _toConsumableArray(tempTaxBack));
      }
    }

    // 删除商品信息

  }, {
    key: 'handleDeleteDetail',
    value: function handleDeleteDetail(e) {
      var index = e.currentTarget.dataset.index;
      this.message.CommodityName.splice(index, 1);
      this.message.CommodityAmount.splice(index, 1);
      this.message.CommodityTax.splice(index, 1);
    }
  }]);

  return Message;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Message , 'pages/message/message'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UuanMiXSwibmFtZXMiOlsiTWVzc2FnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibWVzc2FnZSIsImNvbXBhbnkiLCJpc1RheFBlcnNvbiIsImVyck1lc3NhZ2UiLCJjb21wdXRlZCIsImNhbFRvdGFsTW9uZXkiLCJDb21tb2RpdHlBbW91bnQiLCJ0b3RhbCIsImZvckVhY2giLCJpdGVtIiwiTnVtYmVyIiwid29yZCIsIkNvbW1vZGl0eVRheCIsIkFtb3VudEluRmlndWVycyIsInRvRml4ZWQiLCJqdWRnZUludm9pY2VUeXBlIiwiSW52b2ljZVR5cGUiLCJqdWRnZU90aGVySW52b2ljZVR5cGUiLCJJbnZvaWNldHlwZSIsImNob29zZURhdGUiLCJJbnZvaWNlRGF0ZSIsInJlcGxhY2UiLCJtZXRob2RzIiwiYmluZERhdGVDaGFuZ2UiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJvbklucHV0IiwibmFtZSIsInJhZGlvQ2hhbmdlIiwidGF4UGVyc29uQ2hhbmdlIiwib25JbnB1dERldGFpbCIsInR5cGUiLCJpbmRleCIsInJlcyIsImxlbmd0aCIsInBhcnNlRmxvYXQiLCJjaG9vc2VJZGVudGl0eSIsImlkZW50aXR5IiwiY2hvb3NlU291cmNlIiwic291cmNlIiwiY2hvb3NlUGF5IiwicGF5IiwiaGFuZGxlRGlzY3JpcHRpb24iLCJkaXNjcmlwdGlvbiIsInNvbWUiLCJpbmRleE9mIiwiaGFuZGxlQmVsb25nVG8iLCJiZWxvbmdQcm9qZWN0IiwiaGFuZGxlUGVyc29uTmFtZSIsIm90aGVyTmFtZSIsInBlcnNvbk5hbWUiLCJoYW5kbGVPdGhlck5hbWUiLCJoYW5kbGVNYWtlUGRmIiwiUHVyY2hhc2VyTmFtZSIsIlNlbGxlck5hbWUiLCJpIiwiQ29tbW9kaXR5TmFtZSIsIkludm9pY2VOdW0iLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJKU09OIiwic3RyaW5naWZ5Iiwib3B0aW9ucyIsInBhcnNlIiwiJGFwcGx5IiwiY29tcGFueU5hbWUiLCJoYW5kbGVBZGREZXRhaWwiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInB1c2giLCJyb3ciLCJ0ZW1wTmFtZUZyb250Iiwic2xpY2UiLCJ0ZW1wTmFtZUJhY2siLCJ0ZW1wQW1vdW50RnJvbnQiLCJ0ZW1wQW1vdW50QmFjayIsInRlbXBUYXhGcm9udCIsInRlbXBUYXhCYWNrIiwic3BsaWNlIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsZUFBUyxFQURKO0FBRUxDLGVBQVMsRUFGSjtBQUdMQyxtQkFBYSxJQUhSO0FBSUxDLGtCQUFZO0FBSlAsSyxRQU1QQyxRLEdBQVc7QUFDVDtBQUNBQyxtQkFGUywyQkFFTztBQUNkLFlBQUksS0FBS0wsT0FBTCxJQUFnQixLQUFLQSxPQUFMLENBQWFNLGVBQWpDLEVBQWtEO0FBQ2hELGNBQUlDLFFBQVEsQ0FBWjtBQUNBLGVBQUtQLE9BQUwsQ0FBYU0sZUFBYixDQUE2QkUsT0FBN0IsQ0FBcUMsVUFBQ0MsSUFBRCxFQUFVO0FBQzdDRixxQkFBVUcsT0FBT0QsS0FBS0UsSUFBWixLQUFxQixDQUEvQjtBQUNELFdBRkQ7O0FBSUEsZUFBS1gsT0FBTCxDQUFhWSxZQUFiLENBQTBCSixPQUExQixDQUFrQyxVQUFDQyxJQUFELEVBQVU7QUFDMUNGLHFCQUFVRyxPQUFPRCxLQUFLRSxJQUFaLEtBQXFCLENBQS9CO0FBQ0QsV0FGRDtBQUdBLGVBQUtYLE9BQUwsQ0FBYWEsZUFBYixHQUErQk4sTUFBTU8sT0FBTixDQUFjLENBQWQsQ0FBL0I7QUFDQSxpQkFBT1AsTUFBTU8sT0FBTixDQUFjLENBQWQsQ0FBUDtBQUNEO0FBQ0YsT0FmUTs7QUFnQlQ7QUFDQUMsc0JBakJTLDhCQWlCVTtBQUNqQixZQUFJLEtBQUtmLE9BQUwsQ0FBYWdC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QyxFQUF5QyxDQUF6QztBQUNBLFdBQUtqQyxPQUFMLENBQWFNLGVBQWIsQ0FBNkIwRSxNQUE3QixDQUFvQy9DLEtBQXBDLEVBQTJDLENBQTNDO0FBQ0EsV0FBS2pDLE9BQUwsQ0FBYVksWUFBYixDQUEwQm9FLE1BQTFCLENBQWlDL0MsS0FBakMsRUFBd0MsQ0FBeEM7QUFDRDs7OztFQS9Za0NnRCxlQUFLQyxJOztrQkFBckJ0RixPIiwiZmlsZSI6Im1lc3NhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB1dGlsIGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn56Gu6K6k5Y+R56Wo5L+h5oGvJ1xyXG4gIH1cclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIG1lc3NhZ2U6IHt9LFxyXG4gICAgY29tcGFueToge30sXHJcbiAgICBpc1RheFBlcnNvbjogdHJ1ZSxcclxuICAgIGVyck1lc3NhZ2U6ICcnLFxyXG4gIH1cclxuICBjb21wdXRlZCA9IHtcclxuICAgIC8vIOiuoeeul+aAu+eahOmHkemine+8iOS7t+eojuWQiOiuoe+8iVxyXG4gICAgY2FsVG90YWxNb25leSgpIHtcclxuICAgICAgaWYgKHRoaXMubWVzc2FnZSAmJiB0aGlzLm1lc3NhZ2UuQ29tbW9kaXR5QW1vdW50KSB7XHJcbiAgICAgICAgbGV0IHRvdGFsID0gMFxyXG4gICAgICAgIHRoaXMubWVzc2FnZS5Db21tb2RpdHlBbW91bnQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgdG90YWwgKz0gKE51bWJlcihpdGVtLndvcmQpIHx8IDApXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5tZXNzYWdlLkNvbW1vZGl0eVRheC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICB0b3RhbCArPSAoTnVtYmVyKGl0ZW0ud29yZCkgfHwgMClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubWVzc2FnZS5BbW91bnRJbkZpZ3VlcnMgPSB0b3RhbC50b0ZpeGVkKDIpXHJcbiAgICAgICAgcmV0dXJuIHRvdGFsLnRvRml4ZWQoMilcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIOWIpOaWreaYr+WQpuS4uuaZrumAmuWPkeelqFxyXG4gICAganVkZ2VJbnZvaWNlVHlwZSgpIHtcclxuICAgICAgaWYgKHRoaXMubWVzc2FnZS5JbnZvaWNlVHlwZSA9PT0gJ+aZrumAmuWPkeelqCcgfHwgdGhpcy5tZXNzYWdlLkludm9pY2VUeXBlID09PSAn55S15a2Q5pmu6YCa5Y+R56WoJyB8fCB0aGlzLm1lc3NhZ2UuSW52b2ljZVR5cGUgPT09ICdcXGLmma7pgJrlj5HnpagnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH0sXHJcbiAgICBqdWRnZU90aGVySW52b2ljZVR5cGUoKSB7XHJcbiAgICAgIGlmICh0aGlzLm1lc3NhZ2UuSW52b2ljZVR5cGUgIT09ICfkuJPnlKjlj5HnpagnICYmIHRoaXMubWVzc2FnZS5JbnZvaWNldHlwZSAhPT0gJ+aZrumAmuWPkeelqCcgJiYgdGhpcy5tZXNzYWdlLkludm9pY2VUeXBlICE9PSAn55S15a2Q5pmu6YCa5Y+R56WoJyAmJiB0aGlzLm1lc3NhZ2UuSW52b2ljZVR5cGUgIT09ICdcXGLmma7pgJrlj5HnpagnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH0sXHJcbiAgICBjaG9vc2VEYXRlKCkge1xyXG4gICAgICBpZiAodGhpcy5tZXNzYWdlLkludm9pY2VEYXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZS5JbnZvaWNlRGF0ZS5yZXBsYWNlKC/lubR85pyIL2csICctJykucmVwbGFjZSgv5pelLywgJycpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlLkludm9pY2VEYXRlID0gJzIwMDAtMDEtMDEnXHJcbiAgICAgICAgcmV0dXJuICcyMDAwLTAxLTAxJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgLy8g5byA56Wo5pel5pyfXHJcbiAgICBiaW5kRGF0ZUNoYW5nZShlKSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZS5JbnZvaWNlRGF0ZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICB9LFxyXG4gICAgb25JbnB1dChuYW1lLCBlKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5tZXNzYWdlW25hbWVdID0gZS5kZXRhaWwudmFsdWVcclxuICAgIH0sXHJcbiAgICAvLyDlj5HnpajnsbvlnotcclxuICAgIHJhZGlvQ2hhbmdlKGUpIHtcclxuICAgICAgdGhpcy5tZXNzYWdlLkludm9pY2VUeXBlID0gZS5kZXRhaWwudmFsdWVcclxuICAgIH0sXHJcbiAgICAvLyDkuIDoiKznurPnqI7kurrnirbmgIFcclxuICAgIHRheFBlcnNvbkNoYW5nZShlKSB7XHJcbiAgICAgIHRoaXMuaXNUYXhQZXJzb24gPSBlLmRldGFpbC52YWx1ZSA9PT0gJ+aYrycgPyB0cnVlIDogZmFsc2VcclxuICAgIH0sXHJcbiAgICAvLyDllYblk4Hkv6Hmga9cclxuICAgIG9uSW5wdXREZXRhaWwodHlwZSwgaW5kZXgsIGUpIHtcclxuICAgICAgbGV0IHJlcyA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIGlmICh0eXBlICE9PSAnQ29tbW9kaXR5TmFtZScpIHtcclxuICAgICAgICBpZiAoIXJlcykge1xyXG4gICAgICAgICAgaWYgKHJlcyA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VbdHlwZV1baW5kZXhdLndvcmQgPSByZXNcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZVt0eXBlXVtpbmRleF0ud29yZCA9ICcnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChyZXNbMF0gPT09ICctJyAmJiByZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZVt0eXBlXVtpbmRleF0ud29yZCA9IHJlc1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlW3R5cGVdW2luZGV4XS53b3JkID0gcGFyc2VGbG9hdChyZXMpIHx8IDBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlW3R5cGVdW2luZGV4XS53b3JkID0gcmVzXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyDotK3kubDogIXov5jmmK/mtojotLnogIVcclxuICAgIGNob29zZUlkZW50aXR5KGUpIHtcclxuICAgICAgdGhpcy5tZXNzYWdlLmlkZW50aXR5ID0gZS5kZXRhaWwudmFsdWVcclxuICAgIH0sXHJcbiAgICAvLyDkuJrliqHkuqfnlJ/ljp/lm6BcclxuICAgIGNob29zZVNvdXJjZShlKSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZS5zb3VyY2UgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgfSxcclxuICAgIC8vIOeUseiwgeaUr+S7mFxyXG4gICAgY2hvb3NlUGF5KGUpIHtcclxuICAgICAgdGhpcy5tZXNzYWdlLnBheSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICB9LFxyXG4gICAgLy8g5Lia5Yqh5o+P6L+wID09IOm7mOiupOS4muWKoeS6p+eUn+WOn+WboFxyXG4gICAgaGFuZGxlRGlzY3JpcHRpb24oZSkge1xyXG4gICAgICB0aGlzLm1lc3NhZ2UuZGlzY3JpcHRpb24gPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICAvLyDliKTmlq3kuJrliqHkuqfnlJ/nmoTljp/lm6BcclxuICAgICAgaWYgKHRoaXMubWVzc2FnZS5pZGVudGl0eSAhPT0gJ+i0reS5sOaWuScgfHwgIXRoaXMubWVzc2FnZS5kaXNjcmlwdGlvbikgcmV0dXJuXHJcblxyXG4gICAgICBpZiAoWyflm6Llu7onLCAn6IqC5pel56S85ZOBJywgJ+eUn+aXpeekvOWTgScsICfogZrppJAnLCAn5ZGY5bel55eF5YGH5oWw6ZeuJywgJ+WRmOW3peS6p+WBh+aFsOmXriddLnNvbWUoKGl0ZW0pID0+IHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2UuZGlzY3JpcHRpb24uaW5kZXhPZihpdGVtKSAhPT0gLTFcclxuICAgICAgICB9KSkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZS5zb3VyY2UgPSAn5ZGY5bel56aP5YipJ1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGlmIChbJ+WuouaIt+ekvOWTgScsICfkuLrlrqLmiLfmlK/ku5jnmoTlt67ml4XotLnnlKgnLCAn5ZWG5Yqh5rS96LCI55So6aSQJ10uc29tZSgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZS5kaXNjcmlwdGlvbi5pbmRleE9mKGl0ZW0pICE9PSAtMVxyXG4gICAgICAgIH0pKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlLnNvdXJjZSA9ICfkuJrliqHmi5vlvoUnXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgaWYgKFsn5Ye65beuJywgJ+W3ruaXhScsICfllYbliqHml4XooYwnLCAn5py656WoJywgJ+eBq+i9puelqCcsICflhazlhbHkuqTpgJonLCAn56ef6L2mJywgJ+Wkp+W3tCcsICfplb/pgJTlrqLovaYnLCAn6YWS5bqXJywgJ+mkkOmlricsICflgZzovabotLknLCAn5Ye656ef6L2m6LS5JywgJ+e9kee6pui9pui0uScsICfml4XooYzkv53pmaknLCBdLnNvbWUoKGl0ZW0pID0+IHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2UuZGlzY3JpcHRpb24uaW5kZXhPZihpdGVtKSAhPT0gLTFcclxuICAgICAgICB9KSkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZS5zb3VyY2UgPSAn5ZGY5bel5beu5peF6LS555SoJ1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLm1lc3NhZ2Uuc291cmNlID0gJ+WFtuS7lidcclxuICAgIH0sXHJcbiAgICAvLyDlj5HnpajnlLHosIHmlK/ku5hcclxuICAgIGhhbmRsZUJlbG9uZ1RvKGUpIHtcclxuICAgICAgdGhpcy5tZXNzYWdlLmJlbG9uZ1Byb2plY3QgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgfSxcclxuICAgIC8vIOWFrOWPuOWRmOW3peWQjeensFxyXG4gICAgaGFuZGxlUGVyc29uTmFtZShlKSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZS5vdGhlck5hbWUgPSAnJ1xyXG4gICAgICB0aGlzLm1lc3NhZ2UucGVyc29uTmFtZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICB9LFxyXG4gICAgLy8g56ys5LiJ5pa55ZCN56ewXHJcbiAgICBoYW5kbGVPdGhlck5hbWUoZSkge1xyXG4gICAgICB0aGlzLm1lc3NhZ2UucGVyc29uTmFtZSA9ICcnXHJcbiAgICAgIHRoaXMubWVzc2FnZS5vdGhlck5hbWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgfSxcclxuICAgIC8vIOeUn+aIkOWHreivgVxyXG4gICAgaGFuZGxlTWFrZVBkZigpIHtcclxuICAgICAgaWYgKCF0aGlzLm1lc3NhZ2UuUHVyY2hhc2VyTmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVyck1lc3NhZ2UgPSAn6K+35aGr5YaZ6LSt5Lmw6ICF55qE5ZCN56ewJ1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5tZXNzYWdlLlNlbGxlck5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lcnJNZXNzYWdlID0gJ+ivt+Whq+WGmemUgOWUruiAheeahOWQjeensCdcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1lc3NhZ2UuQ29tbW9kaXR5TmFtZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICghdGhpcy5tZXNzYWdlLkNvbW1vZGl0eU5hbWVbaV0ud29yZCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZXJyTWVzc2FnZSA9ICfor7floavlhpnmlK/ku5jkv6Hmga8nICsgKGkgKyAxKSArICfnmoTlkI3np7AnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoKCF0aGlzLm1lc3NhZ2UuQ29tbW9kaXR5QW1vdW50W2ldLndvcmQgJiYgdGhpcy5tZXNzYWdlLkNvbW1vZGl0eUFtb3VudFtpXS53b3JkICE9PSAwKSB8fCB0aGlzLm1lc3NhZ2UuQ29tbW9kaXR5QW1vdW50W2ldLndvcmQgPT09ICctJykge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZXJyTWVzc2FnZSA9ICfor7floavlhpnmlK/ku5jkv6Hmga8nICsgKGkgKyAxKSArICfnmoTph5Hpop0nXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMubWVzc2FnZS5Db21tb2RpdHlUYXhbaV0ud29yZCAmJiB0aGlzLm1lc3NhZ2UuQ29tbW9kaXR5VGF4W2ldLndvcmQgIT09IDAgfHwgdGhpcy5tZXNzYWdlLkNvbW1vZGl0eVRheFtpXS53b3JkID09PSAnLScpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmVyck1lc3NhZ2UgPSAn6K+35aGr5YaZ5pSv5LuY5L+h5oGvJyArIChpICsgMSkgKyAn55qE56iO6aKdJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCF0aGlzLm1lc3NhZ2UuSW52b2ljZURhdGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lcnJNZXNzYWdlID0gJ+ivt+Whq+WGmeW8gOelqOaXpeacnydcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMubWVzc2FnZS5JbnZvaWNlTnVtKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyTWVzc2FnZSA9ICfor7floavlhpnlj5Hnpajlj7fnoIEnXHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLm1lc3NhZ2UuZGlzY3JpcHRpb24pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lcnJNZXNzYWdlID0gJ+ivt+Whq+WGmeS4muWKoeaPj+i/sCdcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMubWVzc2FnZS5pZGVudGl0eSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVyck1lc3NhZ2UgPSAn6K+36YCJ5oup5oKo5piv5bGe5LqO6LSt5Lmw5pa56L+Y5piv6ZSA5ZSu5pa5J1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLm1lc3NhZ2UuaWRlbnRpdHkgPT09ICfotK3kubDmlrknKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1lc3NhZ2UucGF5KSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5lcnJNZXNzYWdlID0gJ+ivt+mAieaLqeWPkeelqOeUseiwgeaUr+S7mCdcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHRoaXMubWVzc2FnZS5wYXkgPT09ICflhazlj7jlkZjlt6UnICYmICF0aGlzLm1lc3NhZ2UucGVyc29uTmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJNZXNzYWdlID0gJ+ivt+Whq+WGmeWFrOWPuOWRmOW3peeahOWQjeensCdcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLm1lc3NhZ2UucGF5ID09PSAn5YW25LuW56ys5LiJ5pa5JyAmJiAhdGhpcy5tZXNzYWdlLm90aGVyTmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJNZXNzYWdlID0gJ+ivt+Whq+WGmeWFtuS7luesrOS4ieaWueeahOWQjeensCdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5tZXNzYWdlLnNvdXJjZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZXJyTWVzc2FnZSA9ICfor7fpgInmi6nor6XnrJTkuJrliqHkuqfnlJ/nmoTljp/lm6AnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmVyck1lc3NhZ2UgPSAnJ1xyXG5cclxuICAgICAgaWYgKHRoaXMubWVzc2FnZS5pZGVudGl0eSA9PT0gJ+mUgOWUruaWuScpIHtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogJy4uL3NhbGUvc2FsZT9yZXN1bHQ9JyArIEpTT04uc3RyaW5naWZ5KHRoaXMubWVzc2FnZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5tZXNzYWdlLmlkZW50aXR5ID09PSAn6LSt5Lmw5pa5Jykge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1RheFBlcnNvbiB8fCB0aGlzLm1lc3NhZ2UuSW52b2ljZVR5cGUgPT0gJ+aZrumAmuWPkeelqCcgfHwgdGhpcy5tZXNzYWdlLkludm9pY2VUeXBlID09ICflhbbku5blj5HnpagnIHx8IHRoaXMubWVzc2FnZS5JbnZvaWNlVHlwZSA9PSAnXFxi5pmu6YCa5Y+R56WoJyB8fCB0aGlzLm1lc3NhZ2UuSW52b2ljZVR5cGUgPT0gJ1xcYuWFtuS7luWPkeelqCcpIHtcclxuICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6ICcuLi9ub3RheC9ub3RheD9yZXN1bHQ9JyArIEpTT04uc3RyaW5naWZ5KHRoaXMubWVzc2FnZSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1lc3NhZ2Uuc291cmNlID09PSAn5ZGY5bel56aP5YipJyB8fCB0aGlzLm1lc3NhZ2Uuc291cmNlID09PSAn5Lia5Yqh5oub5b6FJykge1xyXG4gICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgIHVybDogJy4uL25vdGF4L25vdGF4P3Jlc3VsdD0nICsgSlNPTi5zdHJpbmdpZnkodGhpcy5tZXNzYWdlKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiAnLi4vcHVyY2hhc2UvcHVyY2hhc2U/cmVzdWx0PScgKyBKU09OLnN0cmluZ2lmeSh0aGlzLm1lc3NhZ2UpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgdGhpcy5tZXNzYWdlID0gSlNPTi5wYXJzZShvcHRpb25zLm1lc3NhZ2UpXHJcbiAgICB0aGlzLmNvbXBhbnkgPSBKU09OLnBhcnNlKG9wdGlvbnMuY29tcGFueSlcclxuICAgIHRoaXMuJGFwcGx5KClcclxuICAgIC8vIHRoaXMubWVzc2FnZSA9IHtcclxuICAgIC8vICAgQW1vdW50SW5GaWd1ZXJzOiBcIjUuMTVcIixcclxuICAgIC8vICAgQW1vdW50SW5Xb3JkczogXCLkvI3lm77mhI/op5LkvI3liIZcIixcclxuICAgIC8vICAgQ2hlY2tDb2RlOiBcIlwiLFxyXG4gICAgLy8gICBDaGVja2VyOiBcIlRJU1RcIixcclxuICAgIC8vICAgQ29tbW9kaXR5QW1vdW50OiBbe1xyXG4gICAgLy8gICAgIHdvcmQ6IFwiMTIzNDUuODlcIixcclxuICAgIC8vICAgICByb3c6IFwiMVwiXHJcbiAgICAvLyAgIH0sIHtcclxuICAgIC8vICAgICB3b3JkOiBcIjEyMzQ1Ljg5XCIsXHJcbiAgICAvLyAgICAgcm93OiBcIjFcIlxyXG4gICAgLy8gICB9LCB7XHJcbiAgICAvLyAgICAgd29yZDogXCIxMjM0NS44OVwiLFxyXG4gICAgLy8gICAgIHJvdzogXCIxXCJcclxuICAgIC8vICAgfSwge1xyXG4gICAgLy8gICAgIHdvcmQ6IFwiMTIzNDUuODlcIixcclxuICAgIC8vICAgICByb3c6IFwiMVwiXHJcbiAgICAvLyAgIH0sIHtcclxuICAgIC8vICAgICB3b3JkOiBcIjEyMzQ1Ljg5XCIsXHJcbiAgICAvLyAgICAgcm93OiBcIjFcIlxyXG4gICAgLy8gICB9XSxcclxuICAgIC8vICAgQ29tbW9kaXR5TmFtZTogW3tcclxuICAgIC8vICAgICB3b3JkOiBcIui0p+eJqeWPr+S5kFwiLFxyXG4gICAgLy8gICAgIHJvdzogXCIxXCJcclxuICAgIC8vICAgfV0sXHJcbiAgICAvLyAgIENvbW1vZGl0eU51bTogW3tcclxuICAgIC8vICAgICB3b3JkOiBcIjIzLjM0XCIsXHJcbiAgICAvLyAgICAgcm93OiBcIjFcIlxyXG4gICAgLy8gICB9LCB7XHJcbiAgICAvLyAgICAgd29yZDogXCIyMy4zNFwiLFxyXG4gICAgLy8gICAgIHJvdzogXCIxXCJcclxuICAgIC8vICAgfSwge1xyXG4gICAgLy8gICAgIHdvcmQ6IFwiMjMuMzRcIixcclxuICAgIC8vICAgICByb3c6IFwiMVwiXHJcbiAgICAvLyAgIH0sIHtcclxuICAgIC8vICAgICB3b3JkOiBcIjIzLjM0XCIsXHJcbiAgICAvLyAgICAgcm93OiBcIjFcIlxyXG4gICAgLy8gICB9LCB7XHJcbiAgICAvLyAgICAgd29yZDogXCIyMy4zNFwiLFxyXG4gICAgLy8gICAgIHJvdzogXCIxXCJcclxuICAgIC8vICAgfV0sXHJcbiAgICAvLyAgIENvbW1vZGl0eVByaWNlOiBbe1xyXG4gICAgLy8gICAgIHdvcmQ6IFwiMTIzNDUuMzRcIixcclxuICAgIC8vICAgICByb3c6IFwiMVwiXHJcbiAgICAvLyAgIH0sIHtcclxuICAgIC8vICAgICB3b3JkOiBcIjEyMzQ1LjM0XCIsXHJcbiAgICAvLyAgICAgcm93OiBcIjFcIlxyXG4gICAgLy8gICB9LCB7XHJcbiAgICAvLyAgICAgd29yZDogXCIxMjM0NS4zNFwiLFxyXG4gICAgLy8gICAgIHJvdzogXCIxXCJcclxuICAgIC8vICAgfSwge1xyXG4gICAgLy8gICAgIHdvcmQ6IFwiMTIzNDUuMzRcIixcclxuICAgIC8vICAgICByb3c6IFwiMVwiXHJcbiAgICAvLyAgIH0sIHtcclxuICAgIC8vICAgICB3b3JkOiBcIjEyMzQ1LjM0XCIsXHJcbiAgICAvLyAgICAgcm93OiBcIjFcIlxyXG4gICAgLy8gICB9XSxcclxuICAgIC8vICAgQ29tbW9kaXR5VGF4OiBbe1xyXG4gICAgLy8gICAgICAgd29yZDogXCIwLjAwXCIsXHJcbiAgICAvLyAgICAgICByb3c6IFwiMlwiXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICB3b3JkOiBcIjAuMDBcIixcclxuICAgIC8vICAgICAgIHJvdzogXCIyXCJcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgIHdvcmQ6IFwiMC4wMFwiLFxyXG4gICAgLy8gICAgICAgcm93OiBcIjJcIlxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgd29yZDogXCIwLjAwXCIsXHJcbiAgICAvLyAgICAgICByb3c6IFwiMlwiXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICB3b3JkOiBcIjAuMDBcIixcclxuICAgIC8vICAgICAgIHJvdzogXCIyXCJcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIF0sXHJcbiAgICAvLyAgIENvbW1vZGl0eVRheFJhdGU6IFtdLFxyXG4gICAgLy8gICBDb21tb2RpdHlUeXBlOiBbXSxcclxuICAgIC8vICAgQ29tbW9kaXR5VW5pdDogW10sXHJcbiAgICAvLyAgIEludm9pY2VDb2RlOiBcIlwiLFxyXG4gICAgLy8gICBJbnZvaWNlRGF0ZTogXCIyMDE35bm0MDnmnIgwMeaXpVwiLFxyXG4gICAgLy8gICBJbnZvaWNlTnVtOiBcIjAwNTkzODAzXCIsXHJcbiAgICAvLyAgIEludm9pY2VUeXBlOiBcIuS4k+eUqOWPkeelqFwiLFxyXG4gICAgLy8gICBOb3RlRHJhd2VyOiBcIlRCU1RcIixcclxuICAgIC8vICAgUGFzc3dvcmQ6IFwiKi8zNzY0NzY5MT43Nz4yMzY8PjAwLy02Pj4vMC00PiswKjI2MDYrPCs1MTgrPDE4KzwqNCs3NjQ3NjkxPjc3PjIzNjw+NzgzPjkvMzE1NzUzPDEqMTEwLys4KzE2KjI4PDI1MTkyPjM0NVwiLFxyXG4gICAgLy8gICBQYXllZTogXCJURVNUXCIsXHJcbiAgICAvLyAgIFB1cmNoYXNlckFkZHJlc3M6IFwiO+WMl+S6rOW4gua1t+a3gOWMuuafpeefs+WPo+i3r+WPt+WkqeS/oeaBr+eUsjE45bCxNjY4ODhcIixcclxuICAgIC8vICAgUHVyY2hhc2VyQmFuazogXCLmtYvor5XkuqzluILmtbfmt4DljLrmn6Xnn7Plj6Pot6/nlLIxOOWPt+WwseWkqeS/oeaBrzvljJdcIixcclxuICAgIC8vICAgUHVyY2hhc2VyTmFtZTogXCLoiKrlpKnkv6Hmga/ku73mnInpmZDlhazlj7hcIixcclxuICAgIC8vICAgUHVyY2hhc2VyUmVnaXN0ZXJOdW06IFwiMjExMDEwMTIyMjY2Njg4OFwiLFxyXG4gICAgLy8gICBSZW1hcmtzOiBcIua1i+ivleaJk+WNsOagt+S+i1wiLFxyXG4gICAgLy8gICBTZWxsZXJBZGRyZXNzOiBcIlRCU1QyMzQ1NlwiLFxyXG4gICAgLy8gICBTZWxsZXJCYW5rOiBcIlwiLFxyXG4gICAgLy8gICBTZWxsZXJOYW1lOiBcIuiIquWkqeS/oeaBr+iCoeS7veaciemZkOWFrOWPuFwiLFxyXG4gICAgLy8gICBTZWxsZXJSZWdpc3Rlck51bTogXCIxMTAxMDEyMjI2NjY4ODhcIixcclxuICAgIC8vICAgVG90YWxBbW91bnQ6IFwiNS4wMFwiLFxyXG4gICAgLy8gICBUb3RhbFRheDogXCIwLjE1XCIsXHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gdGhpcy5jb21wYW55ID0ge1xyXG4gICAgLy8gICBjb21wYW55TmFtZTogJ+iIquWkqeS/oeaBr+S7veaciemZkOWFrOWPuCcsXHJcbiAgICAvLyAgIHBlcnNvbk5hbWU6ICdlbWJhcmsnLFxyXG4gICAgLy8gICBpc1RheFBlcnNvbjogZmFsc2UsXHJcbiAgICAvLyAgIHBlcnNvbk51bTogJzEyMTMnLFxyXG4gICAgLy8gICBwZXJzb25UZWxOdW06ICcxMjM0NTY3ODkxMCdcclxuICAgIC8vIH1cclxuXHJcbiAgICB0aGlzLmlzVGF4UGVyc29uID0gdGhpcy5jb21wYW55LmlzVGF4UGVyc29uXHJcbiAgICBpZiAodGhpcy5jb21wYW55LmNvbXBhbnlOYW1lID09PSB0aGlzLm1lc3NhZ2UuUHVyY2hhc2VyTmFtZSkge1xyXG4gICAgICB0aGlzLm1lc3NhZ2UuaWRlbnRpdHkgPSAn6LSt5Lmw5pa5J1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbXBhbnkuY29tcGFueU5hbWUgPT09IHRoaXMubWVzc2FnZS5TZWxsZXJOYW1lKSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZS5pZGVudGl0eSA9ICfplIDllK7mlrknXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubWVzc2FnZS5Db21tb2RpdHlOYW1lLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLmhhbmRsZUFkZERldGFpbCgwKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5aKe5Yqg5ZWG5ZOB5L+h5oGvXHJcbiAgaGFuZGxlQWRkRGV0YWlsKGUpIHtcclxuICAgIGxldCBpbmRleCA9IDBcclxuICAgIGlmIChlICYmIGUuY3VycmVudFRhcmdldCkge1xyXG4gICAgICBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubWVzc2FnZS5Db21tb2RpdHlOYW1lLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLm1lc3NhZ2UuQ29tbW9kaXR5TmFtZS5wdXNoKHtcclxuICAgICAgICB3b3JkOiAnJyxcclxuICAgICAgICByb3c6IDFcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5tZXNzYWdlLkNvbW1vZGl0eUFtb3VudC5wdXNoKHtcclxuICAgICAgICB3b3JkOiAnJyxcclxuICAgICAgICByb3c6IDFcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5tZXNzYWdlLkNvbW1vZGl0eVRheC5wdXNoKHtcclxuICAgICAgICB3b3JkOiAnJyxcclxuICAgICAgICByb3c6IDFcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCB0ZW1wTmFtZUZyb250ID0gdGhpcy5tZXNzYWdlLkNvbW1vZGl0eU5hbWUuc2xpY2UoMCwgaW5kZXggKyAxKVxyXG4gICAgICBsZXQgdGVtcE5hbWVCYWNrID0gdGhpcy5tZXNzYWdlLkNvbW1vZGl0eU5hbWUuc2xpY2UoaW5kZXggKyAxKVxyXG4gICAgICB0aGlzLm1lc3NhZ2UuQ29tbW9kaXR5TmFtZSA9IFsuLi50ZW1wTmFtZUZyb250LCB7XHJcbiAgICAgICAgd29yZDogJycsXHJcbiAgICAgICAgcm93OiBpbmRleCArIDFcclxuICAgICAgfSwgLi4udGVtcE5hbWVCYWNrXVxyXG5cclxuICAgICAgbGV0IHRlbXBBbW91bnRGcm9udCA9IHRoaXMubWVzc2FnZS5Db21tb2RpdHlBbW91bnQuc2xpY2UoMCwgaW5kZXggKyAxKVxyXG4gICAgICBsZXQgdGVtcEFtb3VudEJhY2sgPSB0aGlzLm1lc3NhZ2UuQ29tbW9kaXR5QW1vdW50LnNsaWNlKGluZGV4ICsgMSlcclxuICAgICAgdGhpcy5tZXNzYWdlLkNvbW1vZGl0eUFtb3VudCA9IFsuLi50ZW1wQW1vdW50RnJvbnQsIHtcclxuICAgICAgICB3b3JkOiAnJyxcclxuICAgICAgICByb3c6IGluZGV4ICsgMVxyXG4gICAgICB9LCAuLi50ZW1wQW1vdW50QmFja11cclxuXHJcbiAgICAgIGxldCB0ZW1wVGF4RnJvbnQgPSB0aGlzLm1lc3NhZ2UuQ29tbW9kaXR5VGF4LnNsaWNlKDAsIGluZGV4ICsgMSlcclxuICAgICAgbGV0IHRlbXBUYXhCYWNrID0gdGhpcy5tZXNzYWdlLkNvbW1vZGl0eVRheC5zbGljZShpbmRleCArIDEpXHJcbiAgICAgIHRoaXMubWVzc2FnZS5Db21tb2RpdHlUYXggPSBbLi4udGVtcFRheEZyb250LCB7XHJcbiAgICAgICAgd29yZDogJycsXHJcbiAgICAgICAgcm93OiBpbmRleCArIDFcclxuICAgICAgfSwgLi4udGVtcFRheEJhY2tdXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDliKDpmaTllYblk4Hkv6Hmga9cclxuICBoYW5kbGVEZWxldGVEZXRhaWwoZSkge1xyXG4gICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcclxuICAgIHRoaXMubWVzc2FnZS5Db21tb2RpdHlOYW1lLnNwbGljZShpbmRleCwgMSlcclxuICAgIHRoaXMubWVzc2FnZS5Db21tb2RpdHlBbW91bnQuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgdGhpcy5tZXNzYWdlLkNvbW1vZGl0eVRheC5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgfVxyXG59XG4iXX0=