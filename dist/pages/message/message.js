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
      // 计算总的金额
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
      bindDateChange: function bindDateChange(e) {
        this.message.InvoiceDate = e.detail.value;
      },
      onInput: function onInput(name, e) {
        this.data.message[name] = e.detail.value;
      },
      radioChange: function radioChange(e) {
        this.message.InvoiceType = e.detail.value;
      },
      taxPersonChange: function taxPersonChange(e) {
        this.isTaxPerson = e.detail.value === '是' ? true : false;
      },
      onInputDetail: function onInputDetail(type, index, e) {
        var res = e.detail.value;
        if (type !== 'CommodityName') {
          if (!res) {
            this.message[type][index].word = 0;
          } else {
            console.log(parseFloat(res) || 0);
            this.message[type][index].word = parseFloat(res) || 0;
          }
        } else {
          this.message[type][index].word = res;
        }
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

        console.log(this.message);
        if (this.message.identity === '销售方') {
          console.log('sale');
          wx.navigateTo({
            url: '../sale/sale?result=' + JSON.stringify(this.message)
          });
          return;
        }

        if (this.message.identity === '购买方') {
          if (!this.isTaxPerson || this.message.InvoiceType == '普通发票' || this.message.InvoiceType == '其他发票' || this.message.InvoiceType == '\b普通发票' || this.message.InvoiceType == '\b其他发票') {
            console.log('notax');
            wx.navigateTo({
              url: '../notax/notax?result=' + JSON.stringify(this.message)
            });
            return;
          }

          if (this.message.source === '员工福利' || this.message.source === '业务招待') {
            console.log('notax');
            wx.navigateTo({
              url: '../notax/notax?result=' + JSON.stringify(this.message)
            });
            return;
          } else {
            console.log('pur');
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
      // console.log(options);

      // console.log(JSON.parse(options.message));
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
      //   CommodityName: [
      //     {
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
      //   }
      // ],
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
  }, {
    key: 'handleAddDetail',
    value: function handleAddDetail(e) {
      var index = 0;
      if (e && e.currentTarget) {
        index = e.currentTarget.dataset.index;
      }

      if (this.message.CommodityName.length === 0) {
        this.message.CommodityName.push({ word: '', row: 1 });
        this.message.CommodityAmount.push({ word: '', row: 1 });
        this.message.CommodityTax.push({ word: '', row: 1 });
      } else {
        var tempNameFront = this.message.CommodityName.slice(0, index + 1);
        var tempNameBack = this.message.CommodityName.slice(index + 1);
        this.message.CommodityName = [].concat(_toConsumableArray(tempNameFront), [{ word: '', row: index + 1 }], _toConsumableArray(tempNameBack));

        var tempAmountFront = this.message.CommodityAmount.slice(0, index + 1);
        var tempAmountBack = this.message.CommodityAmount.slice(index + 1);
        this.message.CommodityAmount = [].concat(_toConsumableArray(tempAmountFront), [{ word: '', row: index + 1 }], _toConsumableArray(tempAmountBack));

        var tempTaxFront = this.message.CommodityTax.slice(0, index + 1);
        var tempTaxBack = this.message.CommodityTax.slice(index + 1);
        this.message.CommodityTax = [].concat(_toConsumableArray(tempTaxFront), [{ word: '', row: index + 1 }], _toConsumableArray(tempTaxBack));
      }
    }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UuanMiXSwibmFtZXMiOlsiTWVzc2FnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibWVzc2FnZSIsImNvbXBhbnkiLCJpc1RheFBlcnNvbiIsImVyck1lc3NhZ2UiLCJjb21wdXRlZCIsImNhbFRvdGFsTW9uZXkiLCJDb21tb2RpdHlBbW91bnQiLCJ0b3RhbCIsImZvckVhY2giLCJpdGVtIiwiTnVtYmVyIiwid29yZCIsIkNvbW1vZGl0eVRheCIsIkFtb3VudEluRmlndWVycyIsInRvRml4ZWQiLCJqdWRnZUludm9pY2VUeXBlIiwiSW52b2ljZVR5cGUiLCJqdWRnZU90aGVySW52b2ljZVR5cGUiLCJJbnZvaWNldHlwZSIsImNob29zZURhdGUiLCJJbnZvaWNlRGF0ZSIsInJlcGxhY2UiLCJtZXRob2RzIiwiYmluZERhdGVDaGFuZ2UiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJvbklucHV0IiwibmFtZSIsInJhZGlvQ2hhbmdlIiwidGF4UGVyc29uQ2hhbmdlIiwib25JbnB1dERldGFpbCIsInR5cGUiLCJpbmRleCIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJwYXJzZUZsb2F0IiwiY2hvb3NlSWRlbnRpdHkiLCJpZGVudGl0eSIsImNob29zZVNvdXJjZSIsInNvdXJjZSIsImNob29zZVBheSIsInBheSIsImhhbmRsZURpc2NyaXB0aW9uIiwiZGlzY3JpcHRpb24iLCJzb21lIiwiaW5kZXhPZiIsImhhbmRsZUJlbG9uZ1RvIiwiYmVsb25nUHJvamVjdCIsImhhbmRsZVBlcnNvbk5hbWUiLCJvdGhlck5hbWUiLCJwZXJzb25OYW1lIiwiaGFuZGxlT3RoZXJOYW1lIiwiaGFuZGxlTWFrZVBkZiIsIlB1cmNoYXNlck5hbWUiLCJTZWxsZXJOYW1lIiwiSW52b2ljZU51bSIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsIkpTT04iLCJzdHJpbmdpZnkiLCJvcHRpb25zIiwicGFyc2UiLCIkYXBwbHkiLCJjb21wYW55TmFtZSIsIkNvbW1vZGl0eU5hbWUiLCJsZW5ndGgiLCJoYW5kbGVBZGREZXRhaWwiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInB1c2giLCJyb3ciLCJ0ZW1wTmFtZUZyb250Iiwic2xpY2UiLCJ0ZW1wTmFtZUJhY2siLCJ0ZW1wQW1vdW50RnJvbnQiLCJ0ZW1wQW1vdW50QmFjayIsInRlbXBUYXhGcm9udCIsInRlbXBUYXhCYWNrIiwic3BsaWNlIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsZUFBUyxFQURKO0FBRUxDLGVBQVMsRUFGSjtBQUdMQyxtQkFBYSxJQUhSO0FBSUxDLGtCQUFZO0FBSlAsSyxRQU1QQyxRLEdBQVc7QUFDVDtBQUNBQyxtQkFGUywyQkFFTztBQUNkLFlBQUksS0FBS0wsT0FBTCxJQUFnQixLQUFLQSxPQUFMLENBQWFNLGVBQWpDLEVBQWtEO0FBQ2hELGNBQUlDLFFBQVEsQ0FBWjtBQUNBLGVBQUtQLE9BQUwsQ0FBYU0sZUFBYixDQUE2QkUsT0FBN0IsQ0FBcUMsVUFBQ0MsSUFBRCxFQUFVO0FBQzdDRixxQkFBU0csT0FBT0QsS0FBS0UsSUFBWixDQUFUO0FBQ0QsV0FGRDs7QUFJQSxlQUFLWCxPQUFMLENBQWFZLFlBQWIsQ0FBMEJKLE9BQTFCLENBQWtDLFVBQUNDLElBQUQsRUFBVTtBQUMxQ0YscUJBQVNHLE9BQU9ELEtBQUtFLElBQVosQ0FBVDtBQUNELFdBRkQ7QUFHQSxlQUFLWCxPQUFMLENBQWFhLGVBQWIsR0FBK0JOLE1BQU1PLE9BQU4sQ0FBYyxDQUFkLENBQS9CO0FBQ0EsaUJBQU9QLE1BQU1PLE9BQU4sQ0FBYyxDQUFkLENBQVA7QUFDRDtBQUNGLE9BZlE7O0FBZ0JUO0FBQ0FDLHNCQWpCUyw4QkFpQlU7QUFDakIsWUFBSSxLQUFLZixPQUFMLENBQWFnQixX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TSxlQUFiLENBQTZCMkUsTUFBN0IsQ0FBb0NoRCxLQUFwQyxFQUEyQyxDQUEzQztBQUNBLFdBQUtqQyxPQUFMLENBQWFZLFlBQWIsQ0FBMEJxRSxNQUExQixDQUFpQ2hELEtBQWpDLEVBQXdDLENBQXhDO0FBQ0Q7Ozs7RUE3V2tDaUQsZUFBS0MsSTs7a0JBQXJCdkYsTyIsImZpbGUiOiJtZXNzYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgdXRpbCBmcm9tICcuLi8uLi91dGlscy91dGlsJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ehruiupOWPkeelqOS/oeaBrydcclxuICB9XHJcblxyXG4gIGRhdGEgPSB7XHJcbiAgICBtZXNzYWdlOiB7fSxcclxuICAgIGNvbXBhbnk6IHt9LFxyXG4gICAgaXNUYXhQZXJzb246IHRydWUsXHJcbiAgICBlcnJNZXNzYWdlOiAnJyxcclxuICB9XHJcbiAgY29tcHV0ZWQgPSB7XHJcbiAgICAvLyDorqHnrpfmgLvnmoTph5Hpop1cclxuICAgIGNhbFRvdGFsTW9uZXkoKSB7XHJcbiAgICAgIGlmICh0aGlzLm1lc3NhZ2UgJiYgdGhpcy5tZXNzYWdlLkNvbW1vZGl0eUFtb3VudCkge1xyXG4gICAgICAgIGxldCB0b3RhbCA9IDBcclxuICAgICAgICB0aGlzLm1lc3NhZ2UuQ29tbW9kaXR5QW1vdW50LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgIHRvdGFsICs9IE51bWJlcihpdGVtLndvcmQpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5tZXNzYWdlLkNvbW1vZGl0eVRheC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICB0b3RhbCArPSBOdW1iZXIoaXRlbS53b3JkKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5tZXNzYWdlLkFtb3VudEluRmlndWVycyA9IHRvdGFsLnRvRml4ZWQoMilcclxuICAgICAgICByZXR1cm4gdG90YWwudG9GaXhlZCgyKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8g5Yik5pat5piv5ZCm5Li65pmu6YCa5Y+R56WoXHJcbiAgICBqdWRnZUludm9pY2VUeXBlKCkge1xyXG4gICAgICBpZiAodGhpcy5tZXNzYWdlLkludm9pY2VUeXBlID09PSAn5pmu6YCa5Y+R56WoJyB8fCB0aGlzLm1lc3NhZ2UuSW52b2ljZVR5cGUgPT09ICfnlLXlrZDmma7pgJrlj5HnpagnIHx8IHRoaXMubWVzc2FnZS5JbnZvaWNlVHlwZSA9PT0gJ1xcYuaZrumAmuWPkeelqCcpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGp1ZGdlT3RoZXJJbnZvaWNlVHlwZSgpIHtcclxuICAgICAgaWYgKHRoaXMubWVzc2FnZS5JbnZvaWNlVHlwZSAhPT0gJ+S4k+eUqOWPkeelqCcgJiYgdGhpcy5tZXNzYWdlLkludm9pY2V0eXBlICE9PSAn5pmu6YCa5Y+R56WoJyAmJiB0aGlzLm1lc3NhZ2UuSW52b2ljZVR5cGUgIT09ICfnlLXlrZDmma7pgJrlj5HnpagnICYmIHRoaXMubWVzc2FnZS5JbnZvaWNlVHlwZSAhPT0gJ1xcYuaZrumAmuWPkeelqCcpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGNob29zZURhdGUoKSB7XHJcbiAgICAgIGlmICh0aGlzLm1lc3NhZ2UuSW52b2ljZURhdGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlLkludm9pY2VEYXRlLnJlcGxhY2UoL+W5tHzmnIgvZywgJy0nKS5yZXBsYWNlKC/ml6UvLCAnJylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UuSW52b2ljZURhdGUgPSAnMjAwMC0wMS0wMSdcclxuICAgICAgICByZXR1cm4gJzIwMDAtMDEtMDEnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBiaW5kRGF0ZUNoYW5nZShlKSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZS5JbnZvaWNlRGF0ZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICB9LFxyXG4gICAgb25JbnB1dChuYW1lLCBlKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5tZXNzYWdlW25hbWVdID0gZS5kZXRhaWwudmFsdWVcclxuICAgIH0sXHJcbiAgICByYWRpb0NoYW5nZShlKSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZS5JbnZvaWNlVHlwZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICB9LFxyXG4gICAgdGF4UGVyc29uQ2hhbmdlKGUpIHtcclxuICAgICAgdGhpcy5pc1RheFBlcnNvbiA9IGUuZGV0YWlsLnZhbHVlID09PSAn5pivJyA/IHRydWUgOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIG9uSW5wdXREZXRhaWwodHlwZSwgaW5kZXgsIGUpIHtcclxuICAgICAgbGV0IHJlcyA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIGlmICh0eXBlICE9PSAnQ29tbW9kaXR5TmFtZScpIHtcclxuICAgICAgICBpZiAoIXJlcykge1xyXG4gICAgICAgICAgdGhpcy5tZXNzYWdlW3R5cGVdW2luZGV4XS53b3JkID0gMFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhwYXJzZUZsb2F0KHJlcykgfHwgMCk7XHJcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VbdHlwZV1baW5kZXhdLndvcmQgPSBwYXJzZUZsb2F0KHJlcykgfHwgMFxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VbdHlwZV1baW5kZXhdLndvcmQgPSByZXNcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNob29zZUlkZW50aXR5KGUpIHtcclxuICAgICAgdGhpcy5tZXNzYWdlLmlkZW50aXR5ID0gZS5kZXRhaWwudmFsdWVcclxuICAgIH0sXHJcbiAgICBjaG9vc2VTb3VyY2UoZSkge1xyXG4gICAgICB0aGlzLm1lc3NhZ2Uuc291cmNlID0gZS5kZXRhaWwudmFsdWVcclxuICAgIH0sXHJcbiAgICBjaG9vc2VQYXkoZSkge1xyXG4gICAgICB0aGlzLm1lc3NhZ2UucGF5ID0gZS5kZXRhaWwudmFsdWVcclxuICAgIH0sXHJcbiAgICBoYW5kbGVEaXNjcmlwdGlvbihlKSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZS5kaXNjcmlwdGlvbiA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIC8vIOWIpOaWreS4muWKoeS6p+eUn+eahOWOn+WboFxyXG4gICAgICAgIGlmICh0aGlzLm1lc3NhZ2UuaWRlbnRpdHkgIT09ICfotK3kubDmlrknIHx8ICF0aGlzLm1lc3NhZ2UuZGlzY3JpcHRpb24pIHJldHVyblxyXG5cclxuICAgICAgICBpZiAoWyflm6Llu7onLCAn6IqC5pel56S85ZOBJywgJ+eUn+aXpeekvOWTgScsICfogZrppJAnLCAn5ZGY5bel55eF5YGH5oWw6ZeuJywgJ+WRmOW3peS6p+WBh+aFsOmXriddLnNvbWUoKGl0ZW0pID0+IHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2UuZGlzY3JpcHRpb24uaW5kZXhPZihpdGVtKSAhPT0gLTFcclxuICAgICAgICB9KSkge1xyXG4gICAgICAgICAgIHRoaXMubWVzc2FnZS5zb3VyY2UgPSAn5ZGY5bel56aP5YipJ1xyXG4gICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoWyflrqLmiLfnpLzlk4EnLCAn5Li65a6i5oi35pSv5LuY55qE5beu5peF6LS555SoJywgJ+WVhuWKoea0veiwiOeUqOmkkCddLnNvbWUoKGl0ZW0pID0+IHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2UuZGlzY3JpcHRpb24uaW5kZXhPZihpdGVtKSAhPT0gLTFcclxuICAgICAgICB9KSkge1xyXG4gICAgICAgICAgIHRoaXMubWVzc2FnZS5zb3VyY2UgPSAn5Lia5Yqh5oub5b6FJ1xyXG4gICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoWyflh7rlt64nLCAn5beu5peFJywgJ+WVhuWKoeaXheihjCcsICfmnLrnpagnLCAn54Gr6L2m56WoJywgJ+WFrOWFseS6pOmAmicsICfnp5/ovaYnLCAn5aSn5be0JywgJ+mVv+mAlOWuoui9picsICfphZLlupcnLCAn6aSQ6aWuJywgJ+WBnOi9pui0uScsICflh7rnp5/ovabotLknLCAn572R57qm6L2m6LS5JywgJ+aXheihjOS/nemZqScsXS5zb21lKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlLmRpc2NyaXB0aW9uLmluZGV4T2YoaXRlbSkgIT09IC0xXHJcbiAgICAgICAgfSkpIHtcclxuICAgICAgICAgICB0aGlzLm1lc3NhZ2Uuc291cmNlID0gJ+WRmOW3peW3ruaXhei0ueeUqCdcclxuICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubWVzc2FnZS5zb3VyY2UgPSAn5YW25LuWJ1xyXG4gICAgfSxcclxuICAgIGhhbmRsZUJlbG9uZ1RvKGUpIHtcclxuICAgICAgdGhpcy5tZXNzYWdlLmJlbG9uZ1Byb2plY3QgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgfSxcclxuICAgIGhhbmRsZVBlcnNvbk5hbWUoZSkge1xyXG4gICAgICB0aGlzLm1lc3NhZ2Uub3RoZXJOYW1lID0gJydcclxuICAgICAgdGhpcy5tZXNzYWdlLnBlcnNvbk5hbWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgfSxcclxuICAgIGhhbmRsZU90aGVyTmFtZShlKSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZS5wZXJzb25OYW1lID0gJydcclxuICAgICAgdGhpcy5tZXNzYWdlLm90aGVyTmFtZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICB9LFxyXG4gICAgaGFuZGxlTWFrZVBkZigpIHtcclxuICAgICAgaWYgKCF0aGlzLm1lc3NhZ2UuUHVyY2hhc2VyTmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVyck1lc3NhZ2UgPSAn6K+35aGr5YaZ6LSt5Lmw6ICF55qE5ZCN56ewJ1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5tZXNzYWdlLlNlbGxlck5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lcnJNZXNzYWdlID0gJ+ivt+Whq+WGmemUgOWUruiAheeahOWQjeensCdcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMubWVzc2FnZS5JbnZvaWNlRGF0ZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVyck1lc3NhZ2UgPSAn6K+35aGr5YaZ5byA56Wo5pel5pyfJ1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5tZXNzYWdlLkludm9pY2VOdW0pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lcnJNZXNzYWdlID0gJ+ivt+Whq+WGmeWPkeelqOWPt+eggSdcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMubWVzc2FnZS5kaXNjcmlwdGlvbikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVyck1lc3NhZ2UgPSAn6K+35aGr5YaZ5Lia5Yqh5o+P6L+wJ1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5tZXNzYWdlLmlkZW50aXR5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyTWVzc2FnZSA9ICfor7fpgInmi6nmgqjmmK/lsZ7kuo7otK3kubDmlrnov5jmmK/plIDllK7mlrknXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMubWVzc2FnZS5pZGVudGl0eSA9PT0gJ+i0reS5sOaWuScpIHtcclxuICAgICAgICBpZiAoIXRoaXMubWVzc2FnZS5wYXkpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmVyck1lc3NhZ2UgPSAn6K+36YCJ5oup5Y+R56Wo55Sx6LCB5pSv5LuYJ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5tZXNzYWdlLnBheSA9PT0gJ+WFrOWPuOWRmOW3pScgJiYgIXRoaXMubWVzc2FnZS5wZXJzb25OYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVyck1lc3NhZ2UgPSAn6K+35aGr5YaZ5YWs5Y+45ZGY5bel55qE5ZCN56ewJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXMubWVzc2FnZS5wYXkgPT09ICflhbbku5bnrKzkuInmlrknICYmICF0aGlzLm1lc3NhZ2Uub3RoZXJOYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVyck1lc3NhZ2UgPSAn6K+35aGr5YaZ5YW25LuW56ys5LiJ5pa555qE5ZCN56ewJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLm1lc3NhZ2Uuc291cmNlKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5lcnJNZXNzYWdlID0gJ+ivt+mAieaLqeivpeeslOS4muWKoeS6p+eUn+eahOWOn+WboCdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMubWVzc2FnZSk7XHJcbiAgICAgIGlmICh0aGlzLm1lc3NhZ2UuaWRlbnRpdHkgPT09ICfplIDllK7mlrknKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NhbGUnKTtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogJy4uL3NhbGUvc2FsZT9yZXN1bHQ9JyArIEpTT04uc3RyaW5naWZ5KHRoaXMubWVzc2FnZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5tZXNzYWdlLmlkZW50aXR5ID09PSAn6LSt5Lmw5pa5Jykge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1RheFBlcnNvbiB8fCB0aGlzLm1lc3NhZ2UuSW52b2ljZVR5cGUgPT0gJ+aZrumAmuWPkeelqCcgfHwgdGhpcy5tZXNzYWdlLkludm9pY2VUeXBlID09ICflhbbku5blj5HnpagnIHx8IHRoaXMubWVzc2FnZS5JbnZvaWNlVHlwZSA9PSAnXFxi5pmu6YCa5Y+R56WoJyB8fCB0aGlzLm1lc3NhZ2UuSW52b2ljZVR5cGUgPT0gJ1xcYuWFtuS7luWPkeelqCcpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdub3RheCcpO1xyXG4gICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgIHVybDogJy4uL25vdGF4L25vdGF4P3Jlc3VsdD0nICsgSlNPTi5zdHJpbmdpZnkodGhpcy5tZXNzYWdlKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubWVzc2FnZS5zb3VyY2UgPT09ICflkZjlt6Xnpo/liKknIHx8IHRoaXMubWVzc2FnZS5zb3VyY2UgPT09ICfkuJrliqHmi5vlvoUnKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnbm90YXgnKTtcclxuICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6ICcuLi9ub3RheC9ub3RheD9yZXN1bHQ9JyArIEpTT04uc3RyaW5naWZ5KHRoaXMubWVzc2FnZSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3B1cicpO1xyXG4gICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgIHVybDogJy4uL3B1cmNoYXNlL3B1cmNoYXNlP3Jlc3VsdD0nICsgSlNPTi5zdHJpbmdpZnkodGhpcy5tZXNzYWdlKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2Uob3B0aW9ucy5tZXNzYWdlKSk7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBKU09OLnBhcnNlKG9wdGlvbnMubWVzc2FnZSlcclxuICAgIHRoaXMuY29tcGFueSA9IEpTT04ucGFyc2Uob3B0aW9ucy5jb21wYW55KVxyXG4gICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgLy8gdGhpcy5tZXNzYWdlID0ge1xyXG4gICAgLy8gICBBbW91bnRJbkZpZ3VlcnM6IFwiNS4xNVwiLFxyXG4gICAgLy8gICBBbW91bnRJbldvcmRzOiBcIuS8jeWbvuaEj+inkuS8jeWIhlwiLFxyXG4gICAgLy8gICBDaGVja0NvZGU6IFwiXCIsXHJcbiAgICAvLyAgIENoZWNrZXI6IFwiVElTVFwiLFxyXG4gICAgLy8gICBDb21tb2RpdHlBbW91bnQ6IFt7XHJcbiAgICAvLyAgICAgd29yZDogXCIxMjM0NS44OVwiLFxyXG4gICAgLy8gICAgIHJvdzogXCIxXCJcclxuICAgIC8vICAgfSwge1xyXG4gICAgLy8gICAgIHdvcmQ6IFwiMTIzNDUuODlcIixcclxuICAgIC8vICAgICByb3c6IFwiMVwiXHJcbiAgICAvLyAgIH0sIHtcclxuICAgIC8vICAgICB3b3JkOiBcIjEyMzQ1Ljg5XCIsXHJcbiAgICAvLyAgICAgcm93OiBcIjFcIlxyXG4gICAgLy8gICB9LCB7XHJcbiAgICAvLyAgICAgd29yZDogXCIxMjM0NS44OVwiLFxyXG4gICAgLy8gICAgIHJvdzogXCIxXCJcclxuICAgIC8vICAgfSwge1xyXG4gICAgLy8gICAgIHdvcmQ6IFwiMTIzNDUuODlcIixcclxuICAgIC8vICAgICByb3c6IFwiMVwiXHJcbiAgICAvLyAgIH1dLFxyXG4gICAgLy8gICBDb21tb2RpdHlOYW1lOiBbXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgIHdvcmQ6IFwi6LSn54mp5Y+v5LmQXCIsXHJcbiAgICAvLyAgICAgcm93OiBcIjFcIlxyXG4gICAgLy8gICB9LCB7XHJcbiAgICAvLyAgICAgd29yZDogXCLotKfnianlj6/kuZBcIixcclxuICAgIC8vICAgICByb3c6IFwiMVwiXHJcbiAgICAvLyAgIH0sIHtcclxuICAgIC8vICAgICB3b3JkOiBcIui0p+eJqeWPr+S5kFwiLFxyXG4gICAgLy8gICAgIHJvdzogXCIxXCJcclxuICAgIC8vICAgfSwge1xyXG4gICAgLy8gICAgIHdvcmQ6IFwi6LSn54mp5Y+v5LmQXCIsXHJcbiAgICAvLyAgICAgcm93OiBcIjFcIlxyXG4gICAgLy8gICB9LCB7XHJcbiAgICAvLyAgICAgd29yZDogXCLotKfnianlj6/kuZBcIixcclxuICAgIC8vICAgICByb3c6IFwiMVwiXHJcbiAgICAvLyAgIH1cclxuICAgIC8vIF0sXHJcbiAgICAvLyAgIENvbW1vZGl0eU51bTogW3tcclxuICAgIC8vICAgICB3b3JkOiBcIjIzLjM0XCIsXHJcbiAgICAvLyAgICAgcm93OiBcIjFcIlxyXG4gICAgLy8gICB9LCB7XHJcbiAgICAvLyAgICAgd29yZDogXCIyMy4zNFwiLFxyXG4gICAgLy8gICAgIHJvdzogXCIxXCJcclxuICAgIC8vICAgfSwge1xyXG4gICAgLy8gICAgIHdvcmQ6IFwiMjMuMzRcIixcclxuICAgIC8vICAgICByb3c6IFwiMVwiXHJcbiAgICAvLyAgIH0sIHtcclxuICAgIC8vICAgICB3b3JkOiBcIjIzLjM0XCIsXHJcbiAgICAvLyAgICAgcm93OiBcIjFcIlxyXG4gICAgLy8gICB9LCB7XHJcbiAgICAvLyAgICAgd29yZDogXCIyMy4zNFwiLFxyXG4gICAgLy8gICAgIHJvdzogXCIxXCJcclxuICAgIC8vICAgfV0sXHJcbiAgICAvLyAgIENvbW1vZGl0eVByaWNlOiBbe1xyXG4gICAgLy8gICAgIHdvcmQ6IFwiMTIzNDUuMzRcIixcclxuICAgIC8vICAgICByb3c6IFwiMVwiXHJcbiAgICAvLyAgIH0sIHtcclxuICAgIC8vICAgICB3b3JkOiBcIjEyMzQ1LjM0XCIsXHJcbiAgICAvLyAgICAgcm93OiBcIjFcIlxyXG4gICAgLy8gICB9LCB7XHJcbiAgICAvLyAgICAgd29yZDogXCIxMjM0NS4zNFwiLFxyXG4gICAgLy8gICAgIHJvdzogXCIxXCJcclxuICAgIC8vICAgfSwge1xyXG4gICAgLy8gICAgIHdvcmQ6IFwiMTIzNDUuMzRcIixcclxuICAgIC8vICAgICByb3c6IFwiMVwiXHJcbiAgICAvLyAgIH0sIHtcclxuICAgIC8vICAgICB3b3JkOiBcIjEyMzQ1LjM0XCIsXHJcbiAgICAvLyAgICAgcm93OiBcIjFcIlxyXG4gICAgLy8gICB9XSxcclxuICAgIC8vICAgQ29tbW9kaXR5VGF4OiBbe1xyXG4gICAgLy8gICAgICAgd29yZDogXCIwLjAwXCIsXHJcbiAgICAvLyAgICAgICByb3c6IFwiMlwiXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICB3b3JkOiBcIjAuMDBcIixcclxuICAgIC8vICAgICAgIHJvdzogXCIyXCJcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgIHdvcmQ6IFwiMC4wMFwiLFxyXG4gICAgLy8gICAgICAgcm93OiBcIjJcIlxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgd29yZDogXCIwLjAwXCIsXHJcbiAgICAvLyAgICAgICByb3c6IFwiMlwiXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICB3b3JkOiBcIjAuMDBcIixcclxuICAgIC8vICAgICAgIHJvdzogXCIyXCJcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIF0sXHJcbiAgICAvLyAgIENvbW1vZGl0eVRheFJhdGU6IFtdLFxyXG4gICAgLy8gICBDb21tb2RpdHlUeXBlOiBbXSxcclxuICAgIC8vICAgQ29tbW9kaXR5VW5pdDogW10sXHJcbiAgICAvLyAgIEludm9pY2VDb2RlOiBcIlwiLFxyXG4gICAgLy8gICBJbnZvaWNlRGF0ZTogXCIyMDE35bm0MDnmnIgwMeaXpVwiLFxyXG4gICAgLy8gICBJbnZvaWNlTnVtOiBcIjAwNTkzODAzXCIsXHJcbiAgICAvLyAgIEludm9pY2VUeXBlOiBcIuS4k+eUqOWPkeelqFwiLFxyXG4gICAgLy8gICBOb3RlRHJhd2VyOiBcIlRCU1RcIixcclxuICAgIC8vICAgUGFzc3dvcmQ6IFwiKi8zNzY0NzY5MT43Nz4yMzY8PjAwLy02Pj4vMC00PiswKjI2MDYrPCs1MTgrPDE4KzwqNCs3NjQ3NjkxPjc3PjIzNjw+NzgzPjkvMzE1NzUzPDEqMTEwLys4KzE2KjI4PDI1MTkyPjM0NVwiLFxyXG4gICAgLy8gICBQYXllZTogXCJURVNUXCIsXHJcbiAgICAvLyAgIFB1cmNoYXNlckFkZHJlc3M6IFwiO+WMl+S6rOW4gua1t+a3gOWMuuafpeefs+WPo+i3r+WPt+WkqeS/oeaBr+eUsjE45bCxNjY4ODhcIixcclxuICAgIC8vICAgUHVyY2hhc2VyQmFuazogXCLmtYvor5XkuqzluILmtbfmt4DljLrmn6Xnn7Plj6Pot6/nlLIxOOWPt+WwseWkqeS/oeaBrzvljJdcIixcclxuICAgIC8vICAgUHVyY2hhc2VyTmFtZTogXCLoiKrlpKnkv6Hmga/ku73mnInpmZDlhazlj7hcIixcclxuICAgIC8vICAgUHVyY2hhc2VyUmVnaXN0ZXJOdW06IFwiMjExMDEwMTIyMjY2Njg4OFwiLFxyXG4gICAgLy8gICBSZW1hcmtzOiBcIua1i+ivleaJk+WNsOagt+S+i1wiLFxyXG4gICAgLy8gICBTZWxsZXJBZGRyZXNzOiBcIlRCU1QyMzQ1NlwiLFxyXG4gICAgLy8gICBTZWxsZXJCYW5rOiBcIlwiLFxyXG4gICAgLy8gICBTZWxsZXJOYW1lOiBcIuiIquWkqeS/oeaBr+iCoeS7veaciemZkOWFrOWPuFwiLFxyXG4gICAgLy8gICBTZWxsZXJSZWdpc3Rlck51bTogXCIxMTAxMDEyMjI2NjY4ODhcIixcclxuICAgIC8vICAgVG90YWxBbW91bnQ6IFwiNS4wMFwiLFxyXG4gICAgLy8gICBUb3RhbFRheDogXCIwLjE1XCIsXHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gdGhpcy5jb21wYW55ID0ge1xyXG4gICAgLy8gICBjb21wYW55TmFtZTogJ+iIquWkqeS/oeaBr+S7veaciemZkOWFrOWPuCcsXHJcbiAgICAvLyAgIHBlcnNvbk5hbWU6ICdlbWJhcmsnLFxyXG4gICAgLy8gICBpc1RheFBlcnNvbjogZmFsc2UsXHJcbiAgICAvLyAgIHBlcnNvbk51bTogJzEyMTMnLFxyXG4gICAgLy8gICBwZXJzb25UZWxOdW06ICcxMjM0NTY3ODkxMCdcclxuICAgIC8vIH1cclxuXHJcbiAgICB0aGlzLmlzVGF4UGVyc29uID0gdGhpcy5jb21wYW55LmlzVGF4UGVyc29uXHJcbiAgICBpZiAodGhpcy5jb21wYW55LmNvbXBhbnlOYW1lID09PSB0aGlzLm1lc3NhZ2UuUHVyY2hhc2VyTmFtZSkge1xyXG4gICAgICB0aGlzLm1lc3NhZ2UuaWRlbnRpdHkgPSAn6LSt5Lmw5pa5J1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbXBhbnkuY29tcGFueU5hbWUgPT09IHRoaXMubWVzc2FnZS5TZWxsZXJOYW1lKSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZS5pZGVudGl0eSA9ICfplIDllK7mlrknXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubWVzc2FnZS5Db21tb2RpdHlOYW1lLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLmhhbmRsZUFkZERldGFpbCgwKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQWRkRGV0YWlsKGUpIHtcclxuICAgIGxldCBpbmRleCA9IDBcclxuICAgIGlmIChlICYmIGUuY3VycmVudFRhcmdldCkge1xyXG4gICAgICBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubWVzc2FnZS5Db21tb2RpdHlOYW1lLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLm1lc3NhZ2UuQ29tbW9kaXR5TmFtZS5wdXNoKHt3b3JkOiAnJywgcm93OiAxfSlcclxuICAgICAgdGhpcy5tZXNzYWdlLkNvbW1vZGl0eUFtb3VudC5wdXNoKHt3b3JkOiAnJywgcm93OiAxfSlcclxuICAgICAgdGhpcy5tZXNzYWdlLkNvbW1vZGl0eVRheC5wdXNoKHt3b3JkOiAnJywgcm93OiAxfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCB0ZW1wTmFtZUZyb250ID0gdGhpcy5tZXNzYWdlLkNvbW1vZGl0eU5hbWUuc2xpY2UoMCwgaW5kZXggKyAxKVxyXG4gICAgICBsZXQgdGVtcE5hbWVCYWNrID0gdGhpcy5tZXNzYWdlLkNvbW1vZGl0eU5hbWUuc2xpY2UoaW5kZXggKyAxKVxyXG4gICAgICB0aGlzLm1lc3NhZ2UuQ29tbW9kaXR5TmFtZSA9IFsuLi50ZW1wTmFtZUZyb250LCB7d29yZDogJycsIHJvdzogaW5kZXggKyAxfSwgLi4udGVtcE5hbWVCYWNrXVxyXG5cclxuICAgICAgbGV0IHRlbXBBbW91bnRGcm9udCA9IHRoaXMubWVzc2FnZS5Db21tb2RpdHlBbW91bnQuc2xpY2UoMCwgaW5kZXggKyAxKVxyXG4gICAgICBsZXQgdGVtcEFtb3VudEJhY2sgPSB0aGlzLm1lc3NhZ2UuQ29tbW9kaXR5QW1vdW50LnNsaWNlKGluZGV4ICsgMSlcclxuICAgICAgdGhpcy5tZXNzYWdlLkNvbW1vZGl0eUFtb3VudCA9IFsuLi50ZW1wQW1vdW50RnJvbnQsIHt3b3JkOiAnJywgcm93OiBpbmRleCArIDF9LCAuLi50ZW1wQW1vdW50QmFja11cclxuXHJcbiAgICAgIGxldCB0ZW1wVGF4RnJvbnQgPSB0aGlzLm1lc3NhZ2UuQ29tbW9kaXR5VGF4LnNsaWNlKDAsIGluZGV4ICsgMSlcclxuICAgICAgbGV0IHRlbXBUYXhCYWNrID0gdGhpcy5tZXNzYWdlLkNvbW1vZGl0eVRheC5zbGljZShpbmRleCArIDEpXHJcbiAgICAgIHRoaXMubWVzc2FnZS5Db21tb2RpdHlUYXggPSBbLi4udGVtcFRheEZyb250LCB7d29yZDogJycsIHJvdzogaW5kZXggKyAxfSwgLi4udGVtcFRheEJhY2tdXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEZWxldGVEZXRhaWwoZSkge1xyXG4gICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcclxuICAgIHRoaXMubWVzc2FnZS5Db21tb2RpdHlOYW1lLnNwbGljZShpbmRleCwgMSlcclxuICAgIHRoaXMubWVzc2FnZS5Db21tb2RpdHlBbW91bnQuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgdGhpcy5tZXNzYWdlLkNvbW1vZGl0eVRheC5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgfVxyXG59XG4iXX0=