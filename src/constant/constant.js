export const APPID = 'wx3006c281c28c3c7d'
export const SECRET = '485c18470a98a4555f26c7ffc9483b3d'
// 查询纳税人识别号的APPCODE
export const APPCODE = 'f27eb1070a9f4ad9bc7a3f92c0963d15'

// const HOST = 'http://192.168.1.106:3333'
const HOST = 'https://bangbook.embarkchina.org'
export const URL = {
  saveUserInfo: HOST + '/api/login',  //保存用户信息
  addCompany: HOST + '/api/user/add/company',  //增加公司信息
  deleteCompany: HOST + '/api/user/remove/company',  //删除公司信息
  updateCompany: HOST + '/api/user/update/company',  //更新公司信息
  addInvoice: HOST + '/api/user/add/invoice',  //更新公司信息
  checkInvoice: HOST + '/api/user/check/invoice',  //检验某公司是否识别过该发票
  getInvoiceInfo: HOST + '/getInvoiceInfo',  //根据公司名称查询纳税人识别号,
  getOpenId: HOST + '/api/wechat/auth',  //获取openid

  getBaiDuAccessToken: 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=UVVOjbGt1XpSR9cW6GCSh77t&client_secret=mwHCmi819kPcVlOn7r8XAbnerudcOGwB&',  //获取百度发票识别的access_token
  invoiceIdentification: 'https://aip.baidubce.com/rest/2.0/ocr/v1/vat_invoice?access_token=', //百度云识别发票接口
}

// 增值税专用发票
export const SPECIAL_INVOICE = 1

// 增值税普通发票
export const PLAIN_INVOICE = 2

// 其他发票
export const OTHER_INVOICE = 3

// 录入发票方所属身份
export const PURCHASER = 1  //购买方
export const SELLER = 2  // 销售方

// 发票由谁支付
export const PAID_BY_COMPANY = 1  // 公司支付
export const PAID_BY_EMPLOYEE = 2  // 员工支付
export const PAID_BY_OTHERS  = 3  // 其他第三方
