import otherJson from '../db/other.js'
import travelJson from '../db/travel.js'
import buyJson from '../db/buy.js'
import saleJson from '../db/sale.js'


// 参数：服务名等、业务产生原因、金额
// 返回值：科目代码、科目名
// 作用：根据服务名查找是否具有改科目，并返回科目代码和科目名
export default (targetName, source, money) => {
  let temp = {code: '未配对', name: '未配对'}
  let isHave = false
  switch (source) {

    case '员工福利':
      return temp = {code: '5602.08', name: '管理费用-员工福利费'}

    case '业务招待':
      return temp = {code: '5601.14', name: '销售费用-业务招待费'}

    case '购买样品':
      return temp = {code: '5601.13', name: '销售费用-样品费'}

    case '办公司租金':
      return temp = {code: '5602.09.01', name: '管理费用-办公室租金'}

    case '员工租赁房屋的租金':
      return temp = {code: '5602.09.02', name: '管理费用-公寓租金'}

    case '公司成立前的设立费用':
      return temp = {code: '5602.14', name: '管理费用-开办费'}

    case '办公司保洁及维修保养':
      return temp = {code: '5602.30', name: '管理费用-办公室维护费'}

    case '员工差旅':
    isHave = false
    for (let i = 0; i < travelJson.length; i++) {
      let tempKeyword = travelJson[i].keywords.split('，')
      for (let j = 0; j < tempKeyword.length; j++) {
        if (targetName.indexOf(tempKeyword[j]) !== -1) {
          isHave = true
          temp = {
            code: travelJson[i].code,
            name: travelJson[i].name
          }
          break
        }
      }

      if (isHave) break
    }

    if (!isHave) {
      temp = {
        code: '5602.18.14',
        name: '管理费用-差旅费-差旅杂费'
      }
    }

    return temp

    case '购入公司经营的商品':
      isHave = false
      for (let i = 0; i < buyJson.length; i++) {
        // 处理关键词 -- 去除括号及括号内内容 --
        let tempKeyword = buyJson[i].keywords.replace(/\（[\s]*[\S]*\）/gi, '')
        //  , 、 及 和 或 分割
        tempKeyword = tempKeyword.replace(/，|、|和|或|及/g, ',')
        tempKeyword = tempKeyword.split(',')
        for (let j = 0; j < tempKeyword.length; j++) {
          if (targetName.indexOf(tempKeyword[j]) !== -1) {
            isHave = true
            temp = {
              code: buyJson[i].code,
              name: buyJson[i].name
            }
            break
          }
        }

        if (isHave) break
      }

      if (!isHave) {
        if (targetName.indexOf('服务') !== -1 || targetName.indexOf('费') !== -1) {
          temp = {
            code: '5401.99',
            name: '主营业务成本-其他采购成本'
          }
        } else {
          temp = {
            code: '1405.01',
            name: '存货-库存商品'
          }
        }
      }

      return temp

    case '售出公司经营的商品':
      isHave = false
      for (let i = 0; i < saleJson.length; i++) {
        // 处理关键词 -- 去除括号及括号内内容 --
        let tempKeyword = saleJson[i].keywords.replace(/\（[\s]*[\S]*\）/gi, '')
        //  , 、 及 和 或 分割
        tempKeyword = tempKeyword.replace(/，|、|和|或|及/g, ',')
        tempKeyword = tempKeyword.split(',')
        for (let j = 0; j < tempKeyword.length; j++) {
          if (targetName.indexOf(tempKeyword[j]) !== -1) {
            isHave = true
            temp = {
              code: saleJson[i].code,
              name: saleJson[i].name
            }
            break
          }
        }

        if (isHave) break
      }

      if (!isHave) {
        temp = {
          code: '5601.99',
          name: '销售费用-其他销售费用'
        }
      }

      return temp

    case '其他':
    isHave = false
    for (let i = 0; i < otherJson.length; i++) {
      // 处理关键词 -- 去除括号及括号内内容 --
      let tempKeyword = otherJson[i].keywords.replace(/\（[\s]*[\S]*\）/gi, '')
      //  , 、 及 和 或 分割
      tempKeyword = tempKeyword.replace(/，|、|和|或|及/g, ',')
      tempKeyword = tempKeyword.split(',')
      for (let j = 0; j < tempKeyword.length; j++) {
        if (targetName.indexOf(tempKeyword[j]) !== -1) {
          isHave = true
          console.log(otherJson[i]);
          if (otherJson[i].other) {
            if (otherJson[i].other === '金额>5000') {
              if (Number(money) <= 5000) {
                isHave = false
                break
              }
            }

            if (otherJson[i].other === '金额<5000') {
              if (Number(money) > 5000) {
                isHave = false
                break
              }
            }
          }
          temp = {
            code: otherJson[i].code,
            name: otherJson[i].name
          }
          break
        }
      }

      if (isHave) break
    }

    if (!isHave) {
      temp = {
        code: '5602.99',
        name: '管理费用-其他管理费用'
      }
    }

    return temp

    default:
      return temp
  }
}
