//个人信息
{
  avatarUrl: "",
  city: "",
  country: "",
  gender: 1,
  language: "zh_CN",
  nickName: "c",
  province: "",
  phoneNumber: ""
}

//公司信息
{
  weChatID: '',
  [
    {
      companyName: '',
      taxPersonNum: '',
      personName: '',
      personTelNum: '',
      isTaxPerson: ''
    },
    {
      companyName: '',
      taxPersonNum: '',
      personName: '',
      personTelNum: '',
      isTaxPerson: ''
    }
  ]
}

//发票信息
{
  companyID: '',
  //下面是发票识别的内容
  PurchaserName: '',
  SellerName: '',
  InvoiceType: '',
  InvoiceDate: '',
  InvoiceNum: '',
  ServiceDetail: [
    {
      CommodityName: '',
      CommodityAmount: '',
      CommodityTax: ''
    },
    {
      CommodityName: '',
      CommodityAmount: '',
      CommodityTax: ''
    },
  ],
  AmountInFiguers: '', //价税合计
  //下面是补充的内容
  discription: '', //业务描述
  belongProject: '', //所属项目（可选）
  isTaxPerson: false, //一般纳税人资格状态
  identity: '购买者', //所属身份
  pay: '', //由谁支付
  personName: '', //或者是 otherName: ''
  source: '', //业务产生原因
}

{
"SellerName": "北京冠月餐饮管理有限公司",
serviceDetail: [
  {
    commodityName: '餐饮',
    commodityAmount: '23',
    commodityTax: '24'
  },
  {
    commodityName: '火车',
    commodityAmount: '23',
    commodityTax: '24'
  },
],
"InvoiceDate": "2323u37",
"InvoiceNum": "2323u37",
"PurchaserName": "上海有略教育科技有限公司",
"AmountInFiguers": "19766.00",
"InvoiceType": "专用发票",
"identity": "购买方",
"pay": "业务招待",
"source": "公司员工",
"personName": "张三啊",
"otherName": "张三啊",
"discription": "漆黑空心也想被释放，奈何思恋比恨更顽强。你也不必牵强再说爱我，反正我的灵魂已片片凋落",
"belongProject": "天地大同",
}
