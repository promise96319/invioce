'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _other = require('./../db/other.js');

var _other2 = _interopRequireDefault(_other);

var _travel = require('./../db/travel.js');

var _travel2 = _interopRequireDefault(_travel);

var _buy = require('./../db/buy.js');

var _buy2 = _interopRequireDefault(_buy);

var _sale = require('./../db/sale.js');

var _sale2 = _interopRequireDefault(_sale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 参数：服务名等、业务产生原因、金额
// 返回值：科目代码、科目名
// 作用：根据服务名查找是否具有改科目，并返回科目代码和科目名
exports.default = function (targetName, source, money) {
  var temp = { code: '未配对', name: '未配对' };
  var isHave = false;
  switch (source) {

    case '员工福利':
      return temp = { code: '5602.08', name: '管理费用-员工福利费' };

    case '业务招待':
      return temp = { code: '5601.14', name: '销售费用-业务招待费' };

    case '购买样品':
      return temp = { code: '5601.13', name: '销售费用-样品费' };

    case '办公司租金':
      return temp = { code: '5602.09.01', name: '管理费用-办公室租金' };

    case '员工租赁房屋的租金':
      return temp = { code: '5602.09.02', name: '管理费用-公寓租金' };

    case '公司成立前的设立费用':
      return temp = { code: '5602.14', name: '管理费用-开办费' };

    case '办公司保洁及维修保养':
      return temp = { code: '5602.30', name: '管理费用-办公室维护费' };

    case '员工差旅':
      isHave = false;
      for (var i = 0; i < _travel2.default.length; i++) {
        var tempKeyword = _travel2.default[i].keywords.split('，');
        for (var j = 0; j < tempKeyword.length; j++) {
          if (targetName.indexOf(tempKeyword[j]) !== -1) {
            isHave = true;
            temp = {
              code: _travel2.default[i].code,
              name: _travel2.default[i].name
            };
            break;
          }
        }

        if (isHave) break;
      }

      if (!isHave) {
        temp = {
          code: '5602.18.14',
          name: '管理费用-差旅费-差旅杂费'
        };
      }

      return temp;

    case '购入公司经营的商品':
      isHave = false;
      for (var _i = 0; _i < _buy2.default.length; _i++) {
        // 处理关键词 -- 去除括号及括号内内容 --
        var _tempKeyword = _buy2.default[_i].keywords.replace(/\（[\s]*[\S]*\）/gi, '');
        //  , 、 及 和 或 分割
        _tempKeyword = _tempKeyword.replace(/，|、|和|或|及/g, ',');
        _tempKeyword = _tempKeyword.split(',');
        for (var _j = 0; _j < _tempKeyword.length; _j++) {
          if (targetName.indexOf(_tempKeyword[_j]) !== -1) {
            isHave = true;
            temp = {
              code: _buy2.default[_i].code,
              name: _buy2.default[_i].name
            };
            break;
          }
        }

        if (isHave) break;
      }

      if (!isHave) {
        if (targetName.indexOf('服务') !== -1 || targetName.indexOf('费') !== -1) {
          temp = {
            code: '5401.99',
            name: '主营业务成本-其他采购成本'
          };
        } else {
          temp = {
            code: '1405.01',
            name: '存货-库存商品'
          };
        }
      }

      return temp;

    case '售出公司经营的商品':
      isHave = false;
      for (var _i2 = 0; _i2 < _sale2.default.length; _i2++) {
        // 处理关键词 -- 去除括号及括号内内容 --
        var _tempKeyword2 = _sale2.default[_i2].keywords.replace(/\（[\s]*[\S]*\）/gi, '');
        //  , 、 及 和 或 分割
        _tempKeyword2 = _tempKeyword2.replace(/，|、|和|或|及/g, ',');
        _tempKeyword2 = _tempKeyword2.split(',');
        for (var _j2 = 0; _j2 < _tempKeyword2.length; _j2++) {
          if (targetName.indexOf(_tempKeyword2[_j2]) !== -1) {
            isHave = true;
            temp = {
              code: _sale2.default[_i2].code,
              name: _sale2.default[_i2].name
            };
            break;
          }
        }

        if (isHave) break;
      }

      if (!isHave) {
        temp = {
          code: '5601.99',
          name: '销售费用-其他销售费用'
        };
      }

      return temp;

    case '其他':
      isHave = false;
      for (var _i3 = 0; _i3 < _other2.default.length; _i3++) {
        // 处理关键词 -- 去除括号及括号内内容 --
        var _tempKeyword3 = _other2.default[_i3].keywords.replace(/\（[\s]*[\S]*\）/gi, '');
        //  , 、 及 和 或 分割
        _tempKeyword3 = _tempKeyword3.replace(/，|、|和|或|及/g, ',');
        _tempKeyword3 = _tempKeyword3.split(',');
        for (var _j3 = 0; _j3 < _tempKeyword3.length; _j3++) {
          if (targetName.indexOf(_tempKeyword3[_j3]) !== -1) {
            isHave = true;
            console.log(_other2.default[_i3]);
            if (_other2.default[_i3].other) {
              if (_other2.default[_i3].other === '金额>5000') {
                if (Number(money) <= 5000) {
                  isHave = false;
                  break;
                }
              }

              if (_other2.default[_i3].other === '金额<5000') {
                if (Number(money) > 5000) {
                  isHave = false;
                  break;
                }
              }
            }
            temp = {
              code: _other2.default[_i3].code,
              name: _other2.default[_i3].name
            };
            break;
          }
        }

        if (isHave) break;
      }

      if (!isHave) {
        temp = {
          code: '5602.99',
          name: '管理费用-其他管理费用'
        };
      }

      return temp;

    default:
      return temp;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwuanMiXSwibmFtZXMiOlsidGFyZ2V0TmFtZSIsInNvdXJjZSIsIm1vbmV5IiwidGVtcCIsImNvZGUiLCJuYW1lIiwiaXNIYXZlIiwiaSIsInRyYXZlbEpzb24iLCJsZW5ndGgiLCJ0ZW1wS2V5d29yZCIsImtleXdvcmRzIiwic3BsaXQiLCJqIiwiaW5kZXhPZiIsImJ1eUpzb24iLCJyZXBsYWNlIiwic2FsZUpzb24iLCJvdGhlckpzb24iLCJjb25zb2xlIiwibG9nIiwib3RoZXIiLCJOdW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQTtBQUNBO0FBQ0E7a0JBQ2UsVUFBQ0EsVUFBRCxFQUFhQyxNQUFiLEVBQXFCQyxLQUFyQixFQUErQjtBQUM1QyxNQUFJQyxPQUFPLEVBQUNDLE1BQU0sS0FBUCxFQUFjQyxNQUFNLEtBQXBCLEVBQVg7QUFDQSxNQUFJQyxTQUFTLEtBQWI7QUFDQSxVQUFRTCxNQUFSOztBQUVFLFNBQUssTUFBTDtBQUNFLGFBQU9FLE9BQU8sRUFBQ0MsTUFBTSxTQUFQLEVBQWtCQyxNQUFNLFlBQXhCLEVBQWQ7O0FBRUYsU0FBSyxNQUFMO0FBQ0UsYUFBT0YsT0FBTyxFQUFDQyxNQUFNLFNBQVAsRUFBa0JDLE1BQU0sWUFBeEIsRUFBZDs7QUFFRixTQUFLLE1BQUw7QUFDRSxhQUFPRixPQUFPLEVBQUNDLE1BQU0sU0FBUCxFQUFrQkMsTUFBTSxVQUF4QixFQUFkOztBQUVGLFNBQUssT0FBTDtBQUNFLGFBQU9GLE9BQU8sRUFBQ0MsTUFBTSxZQUFQLEVBQXFCQyxNQUFNLFlBQTNCLEVBQWQ7O0FBRUYsU0FBSyxXQUFMO0FBQ0UsYUFBT0YsT0FBTyxFQUFDQyxNQUFNLFlBQVAsRUFBcUJDLE1BQU0sV0FBM0IsRUFBZDs7QUFFRixTQUFLLFlBQUw7QUFDRSxhQUFPRixPQUFPLEVBQUNDLE1BQU0sU0FBUCxFQUFrQkMsTUFBTSxVQUF4QixFQUFkOztBQUVGLFNBQUssWUFB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QVVYLEdBQVYsRUFBYWMsS0FBYixLQUF1QixTQUEzQixFQUFzQztBQUNwQyxvQkFBSUMsT0FBT3BCLEtBQVAsS0FBaUIsSUFBckIsRUFBMkI7QUFDekJJLDJCQUFTLEtBQVQ7QUFDQTtBQUNEO0FBQ0Y7O0FBRUQsa0JBQUlZLGdCQUFVWCxHQUFWLEVBQWFjLEtBQWIsS0FBdUIsU0FBM0IsRUFBc0M7QUFDcEMsb0JBQUlDLE9BQU9wQixLQUFQLElBQWdCLElBQXBCLEVBQTBCO0FBQ3hCSSwyQkFBUyxLQUFUO0FBQ0E7QUFDRDtBQUNGO0FBQ0Y7QUFDREgsbUJBQU87QUFDTEMsb0JBQU1jLGdCQUFVWCxHQUFWLEVBQWFILElBRGQ7QUFFTEMsb0JBQU1hLGdCQUFVWCxHQUFWLEVBQWFGO0FBRmQsYUFBUDtBQUlBO0FBQ0Q7QUFDRjs7QUFFRCxZQUFJQyxNQUFKLEVBQVk7QUFDYjs7QUFFRCxVQUFJLENBQUNBLE1BQUwsRUFBYTtBQUNYSCxlQUFPO0FBQ0xDLGdCQUFNLFNBREQ7QUFFTEMsZ0JBQU07QUFGRCxTQUFQO0FBSUQ7O0FBRUQsYUFBT0YsSUFBUDs7QUFFQTtBQUNFLGFBQU9BLElBQVA7QUF2S0o7QUF5S0QsQyIsImZpbGUiOiJ1dGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG90aGVySnNvbiBmcm9tICcuLi9kYi9vdGhlci5qcydcbmltcG9ydCB0cmF2ZWxKc29uIGZyb20gJy4uL2RiL3RyYXZlbC5qcydcbmltcG9ydCBidXlKc29uIGZyb20gJy4uL2RiL2J1eS5qcydcbmltcG9ydCBzYWxlSnNvbiBmcm9tICcuLi9kYi9zYWxlLmpzJ1xuXG5cbi8vIOWPguaVsO+8muacjeWKoeWQjeetieOAgeS4muWKoeS6p+eUn+WOn+WboOOAgemHkeminVxuLy8g6L+U5Zue5YC877ya56eR55uu5Luj56CB44CB56eR55uu5ZCNXG4vLyDkvZznlKjvvJrmoLnmja7mnI3liqHlkI3mn6Xmib7mmK/lkKblhbfmnInmlLnnp5Hnm67vvIzlubbov5Tlm57np5Hnm67ku6PnoIHlkoznp5Hnm67lkI1cbmV4cG9ydCBkZWZhdWx0ICh0YXJnZXROYW1lLCBzb3VyY2UsIG1vbmV5KSA9PiB7XG4gIGxldCB0ZW1wID0ge2NvZGU6ICfmnKrphY3lr7knLCBuYW1lOiAn5pyq6YWN5a+5J31cbiAgbGV0IGlzSGF2ZSA9IGZhbHNlXG4gIHN3aXRjaCAoc291cmNlKSB7XG5cbiAgICBjYXNlICflkZjlt6Xnpo/liKknOlxuICAgICAgcmV0dXJuIHRlbXAgPSB7Y29kZTogJzU2MDIuMDgnLCBuYW1lOiAn566h55CG6LS555SoLeWRmOW3peemj+WIqei0uSd9XG5cbiAgICBjYXNlICfkuJrliqHmi5vlvoUnOlxuICAgICAgcmV0dXJuIHRlbXAgPSB7Y29kZTogJzU2MDEuMTQnLCBuYW1lOiAn6ZSA5ZSu6LS555SoLeS4muWKoeaLm+W+hei0uSd9XG5cbiAgICBjYXNlICfotK3kubDmoLflk4EnOlxuICAgICAgcmV0dXJuIHRlbXAgPSB7Y29kZTogJzU2MDEuMTMnLCBuYW1lOiAn6ZSA5ZSu6LS555SoLeagt+WTgei0uSd9XG5cbiAgICBjYXNlICflip7lhazlj7jnp5/ph5EnOlxuICAgICAgcmV0dXJuIHRlbXAgPSB7Y29kZTogJzU2MDIuMDkuMDEnLCBuYW1lOiAn566h55CG6LS555SoLeWKnuWFrOWupOenn+mHkSd9XG5cbiAgICBjYXNlICflkZjlt6Xnp5/otYHmiL/lsYvnmoTnp5/ph5EnOlxuICAgICAgcmV0dXJuIHRlbXAgPSB7Y29kZTogJzU2MDIuMDkuMDInLCBuYW1lOiAn566h55CG6LS555SoLeWFrOWvk+enn+mHkSd9XG5cbiAgICBjYXNlICflhazlj7jmiJDnq4vliY3nmoTorr7nq4votLnnlKgnOlxuICAgICAgcmV0dXJuIHRlbXAgPSB7Y29kZTogJzU2MDIuMTQnLCBuYW1lOiAn566h55CG6LS555SoLeW8gOWKnui0uSd9XG5cbiAgICBjYXNlICflip7lhazlj7jkv53mtIHlj4rnu7Tkv67kv53lhbsnOlxuICAgICAgcmV0dXJuIHRlbXAgPSB7Y29kZTogJzU2MDIuMzAnLCBuYW1lOiAn566h55CG6LS555SoLeWKnuWFrOWupOe7tOaKpOi0uSd9XG5cbiAgICBjYXNlICflkZjlt6Xlt67ml4UnOlxuICAgIGlzSGF2ZSA9IGZhbHNlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmF2ZWxKc29uLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdGVtcEtleXdvcmQgPSB0cmF2ZWxKc29uW2ldLmtleXdvcmRzLnNwbGl0KCfvvIwnKVxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0ZW1wS2V5d29yZC5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAodGFyZ2V0TmFtZS5pbmRleE9mKHRlbXBLZXl3b3JkW2pdKSAhPT0gLTEpIHtcbiAgICAgICAgICBpc0hhdmUgPSB0cnVlXG4gICAgICAgICAgdGVtcCA9IHtcbiAgICAgICAgICAgIGNvZGU6IHRyYXZlbEpzb25baV0uY29kZSxcbiAgICAgICAgICAgIG5hbWU6IHRyYXZlbEpzb25baV0ubmFtZVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0hhdmUpIGJyZWFrXG4gICAgfVxuXG4gICAgaWYgKCFpc0hhdmUpIHtcbiAgICAgIHRlbXAgPSB7XG4gICAgICAgIGNvZGU6ICc1NjAyLjE4LjE0JyxcbiAgICAgICAgbmFtZTogJ+euoeeQhui0ueeUqC3lt67ml4XotLkt5beu5peF5p2C6LS5J1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZW1wXG5cbiAgICBjYXNlICfotK3lhaXlhazlj7jnu4/okKXnmoTllYblk4EnOlxuICAgICAgaXNIYXZlID0gZmFsc2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnV5SnNvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyDlpITnkIblhbPplK7or40gLS0g5Y676Zmk5ous5Y+35Y+K5ous5Y+35YaF5YaF5a65IC0tXG4gICAgICAgIGxldCB0ZW1wS2V5d29yZCA9IGJ1eUpzb25baV0ua2V5d29yZHMucmVwbGFjZSgvXFzvvIhbXFxzXSpbXFxTXSpcXO+8iS9naSwgJycpXG4gICAgICAgIC8vICAsIOOAgSDlj4og5ZKMIOaIliDliIblibJcbiAgICAgICAgdGVtcEtleXdvcmQgPSB0ZW1wS2V5d29yZC5yZXBsYWNlKC/vvIx844CBfOWSjHzmiJZ85Y+KL2csICcsJylcbiAgICAgICAgdGVtcEtleXdvcmQgPSB0ZW1wS2V5d29yZC5zcGxpdCgnLCcpXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGVtcEtleXdvcmQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBpZiAodGFyZ2V0TmFtZS5pbmRleE9mKHRlbXBLZXl3b3JkW2pdKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGlzSGF2ZSA9IHRydWVcbiAgICAgICAgICAgIHRlbXAgPSB7XG4gICAgICAgICAgICAgIGNvZGU6IGJ1eUpzb25baV0uY29kZSxcbiAgICAgICAgICAgICAgbmFtZTogYnV5SnNvbltpXS5uYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0hhdmUpIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGlmICghaXNIYXZlKSB7XG4gICAgICAgIGlmICh0YXJnZXROYW1lLmluZGV4T2YoJ+acjeWKoScpICE9PSAtMSB8fCB0YXJnZXROYW1lLmluZGV4T2YoJ+i0uScpICE9PSAtMSkge1xuICAgICAgICAgIHRlbXAgPSB7XG4gICAgICAgICAgICBjb2RlOiAnNTQwMS45OScsXG4gICAgICAgICAgICBuYW1lOiAn5Li76JCl5Lia5Yqh5oiQ5pysLeWFtuS7lumHh+i0reaIkOacrCdcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVtcCA9IHtcbiAgICAgICAgICAgIGNvZGU6ICcxNDA1LjAxJyxcbiAgICAgICAgICAgIG5hbWU6ICflrZjotKct5bqT5a2Y5ZWG5ZOBJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGVtcFxuXG4gICAgY2FzZSAn5ZSu5Ye65YWs5Y+457uP6JCl55qE5ZWG5ZOBJzpcbiAgICAgIGlzSGF2ZSA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNhbGVKc29uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIOWkhOeQhuWFs+mUruivjSAtLSDljrvpmaTmi6zlj7flj4rmi6zlj7flhoXlhoXlrrkgLS1cbiAgICAgICAgbGV0IHRlbXBLZXl3b3JkID0gc2FsZUpzb25baV0ua2V5d29yZHMucmVwbGFjZSgvXFzvvIhbXFxzXSpbXFxTXSpcXO+8iS9naSwgJycpXG4gICAgICAgIC8vICAsIOOAgSDlj4og5ZKMIOaIliDliIblibJcbiAgICAgICAgdGVtcEtleXdvcmQgPSB0ZW1wS2V5d29yZC5yZXBsYWNlKC/vvIx844CBfOWSjHzmiJZ85Y+KL2csICcsJylcbiAgICAgICAgdGVtcEtleXdvcmQgPSB0ZW1wS2V5d29yZC5zcGxpdCgnLCcpXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGVtcEtleXdvcmQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBpZiAodGFyZ2V0TmFtZS5pbmRleE9mKHRlbXBLZXl3b3JkW2pdKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGlzSGF2ZSA9IHRydWVcbiAgICAgICAgICAgIHRlbXAgPSB7XG4gICAgICAgICAgICAgIGNvZGU6IHNhbGVKc29uW2ldLmNvZGUsXG4gICAgICAgICAgICAgIG5hbWU6IHNhbGVKc29uW2ldLm5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzSGF2ZSkgYnJlYWtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc0hhdmUpIHtcbiAgICAgICAgdGVtcCA9IHtcbiAgICAgICAgICBjb2RlOiAnNTYwMS45OScsXG4gICAgICAgICAgbmFtZTogJ+mUgOWUrui0ueeUqC3lhbbku5bplIDllK7otLnnlKgnXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRlbXBcblxuICAgIGNhc2UgJ+WFtuS7lic6XG4gICAgaXNIYXZlID0gZmFsc2VcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG90aGVySnNvbi5sZW5ndGg7IGkrKykge1xuICAgICAgLy8g5aSE55CG5YWz6ZSu6K+NIC0tIOWOu+mZpOaLrOWPt+WPiuaLrOWPt+WGheWGheWuuSAtLVxuICAgICAgbGV0IHRlbXBLZXl3b3JkID0gb3RoZXJKc29uW2ldLmtleXdvcmRzLnJlcGxhY2UoL1xc77yIW1xcc10qW1xcU10qXFzvvIkvZ2ksICcnKVxuICAgICAgLy8gICwg44CBIOWPiiDlkowg5oiWIOWIhuWJslxuICAgICAgdGVtcEtleXdvcmQgPSB0ZW1wS2V5d29yZC5yZXBsYWNlKC/vvIx844CBfOWSjHzmiJZ85Y+KL2csICcsJylcbiAgICAgIHRlbXBLZXl3b3JkID0gdGVtcEtleXdvcmQuc3BsaXQoJywnKVxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0ZW1wS2V5d29yZC5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAodGFyZ2V0TmFtZS5pbmRleE9mKHRlbXBLZXl3b3JkW2pdKSAhPT0gLTEpIHtcbiAgICAgICAgICBpc0hhdmUgPSB0cnVlXG4gICAgICAgICAgY29uc29sZS5sb2cob3RoZXJKc29uW2ldKTtcbiAgICAgICAgICBpZiAob3RoZXJKc29uW2ldLm90aGVyKSB7XG4gICAgICAgICAgICBpZiAob3RoZXJKc29uW2ldLm90aGVyID09PSAn6YeR6aKdPjUwMDAnKSB7XG4gICAgICAgICAgICAgIGlmIChOdW1iZXIobW9uZXkpIDw9IDUwMDApIHtcbiAgICAgICAgICAgICAgICBpc0hhdmUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG90aGVySnNvbltpXS5vdGhlciA9PT0gJ+mHkeminTw1MDAwJykge1xuICAgICAgICAgICAgICBpZiAoTnVtYmVyKG1vbmV5KSA+IDUwMDApIHtcbiAgICAgICAgICAgICAgICBpc0hhdmUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGVtcCA9IHtcbiAgICAgICAgICAgIGNvZGU6IG90aGVySnNvbltpXS5jb2RlLFxuICAgICAgICAgICAgbmFtZTogb3RoZXJKc29uW2ldLm5hbWVcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNIYXZlKSBicmVha1xuICAgIH1cblxuICAgIGlmICghaXNIYXZlKSB7XG4gICAgICB0ZW1wID0ge1xuICAgICAgICBjb2RlOiAnNTYwMi45OScsXG4gICAgICAgIG5hbWU6ICfnrqHnkIbotLnnlKgt5YW25LuW566h55CG6LS555SoJ1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZW1wXG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHRlbXBcbiAgfVxufVxuIl19