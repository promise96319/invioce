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
      return temp = { code: '5602.08', name: '员工福利费' };

    case '业务招待':
      return temp = { code: '5601.14', name: '业务招待费' };

    case '购买样品':
      return temp = { code: '5601.13', name: '样品费' };

    case '办公司租金':
      return temp = { code: '5602.09.01', name: '办公司租金' };

    case '员工租赁房屋的租金':
      return temp = { code: '5602.09.02', name: '公寓租金' };

    case '公司成立前的设立费用':
      return temp = { code: '5602.14', name: '开办费' };

    case '办公司保洁及维修保养':
      return temp = { code: '5602.30', name: '办公室维护费' };

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

      if (!isHave && (targetName.indexOf('服务') !== -1 || targetName.indexOf('费') !== -1)) {
        temp = {
          code: '5602.18.14',
          name: '差旅杂费'
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
            name: '其他采购成本'
          };
        } else {
          temp = {
            code: '1405.01',
            name: '库存商品'
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
          name: '其他销售费用'
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

      if (!isHave && (targetName.indexOf('服务') !== -1 || targetName.indexOf('费') !== -1)) {
        temp = {
          code: '5602.99',
          name: '其他管理费用'
        };
      }

      return temp;

    default:
      return temp;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwuanMiXSwibmFtZXMiOlsidGFyZ2V0TmFtZSIsInNvdXJjZSIsIm1vbmV5IiwidGVtcCIsImNvZGUiLCJuYW1lIiwiaXNIYXZlIiwiaSIsInRyYXZlbEpzb24iLCJsZW5ndGgiLCJ0ZW1wS2V5d29yZCIsImtleXdvcmRzIiwic3BsaXQiLCJqIiwiaW5kZXhPZiIsImJ1eUpzb24iLCJyZXBsYWNlIiwic2FsZUpzb24iLCJvdGhlckpzb24iLCJjb25zb2xlIiwibG9nIiwib3RoZXIiLCJOdW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQTtBQUNBO0FBQ0E7a0JBQ2UsVUFBQ0EsVUFBRCxFQUFhQyxNQUFiLEVBQXFCQyxLQUFyQixFQUErQjtBQUM1QyxNQUFJQyxPQUFPLEVBQUNDLE1BQU0sS0FBUCxFQUFjQyxNQUFNLEtBQXBCLEVBQVg7QUFDQSxNQUFJQyxTQUFTLEtBQWI7QUFDQSxVQUFRTCxNQUFSOztBQUVFLFNBQUssTUFBTDtBQUNFLGFBQU9FLE9BQU8sRUFBQ0MsTUFBTSxTQUFQLEVBQWtCQyxNQUFNLE9BQXhCLEVBQWQ7O0FBRUYsU0FBSyxNQUFMO0FBQ0UsYUFBT0YsT0FBTyxFQUFDQyxNQUFNLFNBQVAsRUFBa0JDLE1BQU0sT0FBeEIsRUFBZDs7QUFFRixTQUFLLE1BQUw7QUFDRSxhQUFPRixPQUFPLEVBQUNDLE1BQU0sU0FBUCxFQUFrQkMsTUFBTSxLQUF4QixFQUFkOztBQUVGLFNBQUssT0FBTDtBQUNFLGFBQU9GLE9BQU8sRUFBQ0MsTUFBTSxZQUFQLEVBQXFCQyxNQUFNLE9BQTNCLEVBQWQ7O0FBRUYsU0FBSyxXQUFMO0FBQ0UsYUFBT0YsT0FBTyxFQUFDQyxNQUFNLFlBQVAsRUFBcUJDLE1BQU0sTUFBM0IsRUFBZDs7QUFFRixTQUFLLFlBQUw7QUFDRSxhQUFPRixPQUFPLEVBQUNDLE1BQU0sU0FBUCxFQUFrQkMsTUFBTSxLQUF4QixFQUFkOztBQUVGLFNBQUssWUFB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O0FBQ0FhLG9CQUFRQyxHQUFSLENBQVlGLGdCQUFVWCxHQUFWLENBQVo7QUFDQSxnQkFBSVcsZ0JBQVVYLEdBQVYsRUFBYWMsS0FBakIsRUFBd0I7QUFDdEIsa0JBQUlILGdCQUFVWCxHQUFWLEVBQWFjLEtBQWIsS0FBdUIsU0FBM0IsRUFBc0M7QUFDcEMsb0JBQUlDLE9BQU9wQixLQUFQLEtBQWlCLElBQXJCLEVBQTJCO0FBQ3pCSSwyQkFBUyxLQUFUO0FBQ0E7QUFDRDtBQUNGOztBQUVELGtCQUFJWSxnQkFBVVgsR0FBVixFQUFhYyxLQUFiLEtBQXVCLFNBQTNCLEVBQXNDO0FBQ3BDLG9CQUFJQyxPQUFPcEIsS0FBUCxJQUFnQixJQUFwQixFQUEwQjtBQUN4QkksMkJBQVMsS0FBVDtBQUNBO0FBQ0Q7QUFDRjtBQUNGO0FBQ0RILG1CQUFPO0FBQ0xDLG9CQUFNYyxnQkFBVVgsR0FBVixFQUFhSCxJQURkO0FBRUxDLG9CQUFNYSxnQkFBVVgsR0FBVixFQUFhRjtBQUZkLGFBQVA7QUFJQTtBQUNEO0FBQ0Y7O0FBRUQsWUFBSUMsTUFBSixFQUFZO0FBQ2I7O0FBRUQsVUFBSSxDQUFDQSxNQUFELEtBQVlOLFdBQVdjLE9BQVgsQ0FBbUIsSUFBbkIsTUFBNkIsQ0FBQyxDQUE5QixJQUFtQ2QsV0FBV2MsT0FBWCxDQUFtQixHQUFuQixNQUE0QixDQUFDLENBQTVFLENBQUosRUFBb0Y7QUFDbEZYLGVBQU87QUFDTEMsZ0JBQU0sU0FERDtBQUVMQyxnQkFBTTtBQUZELFNBQVA7QUFJRDs7QUFFRCxhQUFPRixJQUFQOztBQUVBO0FBQ0UsYUFBT0EsSUFBUDtBQXZLSjtBQXlLRCxDIiwiZmlsZSI6InV0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgb3RoZXJKc29uIGZyb20gJy4uL2RiL290aGVyLmpzJ1xuaW1wb3J0IHRyYXZlbEpzb24gZnJvbSAnLi4vZGIvdHJhdmVsLmpzJ1xuaW1wb3J0IGJ1eUpzb24gZnJvbSAnLi4vZGIvYnV5LmpzJ1xuaW1wb3J0IHNhbGVKc29uIGZyb20gJy4uL2RiL3NhbGUuanMnXG5cblxuLy8g5Y+C5pWw77ya5pyN5Yqh5ZCN562J44CB5Lia5Yqh5Lqn55Sf5Y6f5Zug44CB6YeR6aKdXG4vLyDov5Tlm57lgLzvvJrnp5Hnm67ku6PnoIHjgIHnp5Hnm67lkI1cbi8vIOS9nOeUqO+8muagueaNruacjeWKoeWQjeafpeaJvuaYr+WQpuWFt+acieaUueenkeebru+8jOW5tui/lOWbnuenkeebruS7o+eggeWSjOenkeebruWQjVxuZXhwb3J0IGRlZmF1bHQgKHRhcmdldE5hbWUsIHNvdXJjZSwgbW9uZXkpID0+IHtcbiAgbGV0IHRlbXAgPSB7Y29kZTogJ+acqumFjeWvuScsIG5hbWU6ICfmnKrphY3lr7knfVxuICBsZXQgaXNIYXZlID0gZmFsc2VcbiAgc3dpdGNoIChzb3VyY2UpIHtcblxuICAgIGNhc2UgJ+WRmOW3peemj+WIqSc6XG4gICAgICByZXR1cm4gdGVtcCA9IHtjb2RlOiAnNTYwMi4wOCcsIG5hbWU6ICflkZjlt6Xnpo/liKnotLknfVxuXG4gICAgY2FzZSAn5Lia5Yqh5oub5b6FJzpcbiAgICAgIHJldHVybiB0ZW1wID0ge2NvZGU6ICc1NjAxLjE0JywgbmFtZTogJ+S4muWKoeaLm+W+hei0uSd9XG5cbiAgICBjYXNlICfotK3kubDmoLflk4EnOlxuICAgICAgcmV0dXJuIHRlbXAgPSB7Y29kZTogJzU2MDEuMTMnLCBuYW1lOiAn5qC35ZOB6LS5J31cblxuICAgIGNhc2UgJ+WKnuWFrOWPuOenn+mHkSc6XG4gICAgICByZXR1cm4gdGVtcCA9IHtjb2RlOiAnNTYwMi4wOS4wMScsIG5hbWU6ICflip7lhazlj7jnp5/ph5EnfVxuXG4gICAgY2FzZSAn5ZGY5bel56ef6LWB5oi/5bGL55qE56ef6YeRJzpcbiAgICAgIHJldHVybiB0ZW1wID0ge2NvZGU6ICc1NjAyLjA5LjAyJywgbmFtZTogJ+WFrOWvk+enn+mHkSd9XG5cbiAgICBjYXNlICflhazlj7jmiJDnq4vliY3nmoTorr7nq4votLnnlKgnOlxuICAgICAgcmV0dXJuIHRlbXAgPSB7Y29kZTogJzU2MDIuMTQnLCBuYW1lOiAn5byA5Yqe6LS5J31cblxuICAgIGNhc2UgJ+WKnuWFrOWPuOS/nea0geWPiue7tOS/ruS/neWFuyc6XG4gICAgICByZXR1cm4gdGVtcCA9IHtjb2RlOiAnNTYwMi4zMCcsIG5hbWU6ICflip7lhazlrqTnu7TmiqTotLknfVxuXG4gICAgY2FzZSAn5ZGY5bel5beu5peFJzpcbiAgICBpc0hhdmUgPSBmYWxzZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJhdmVsSnNvbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHRlbXBLZXl3b3JkID0gdHJhdmVsSnNvbltpXS5rZXl3b3Jkcy5zcGxpdCgn77yMJylcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGVtcEtleXdvcmQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHRhcmdldE5hbWUuaW5kZXhPZih0ZW1wS2V5d29yZFtqXSkgIT09IC0xKSB7XG4gICAgICAgICAgaXNIYXZlID0gdHJ1ZVxuICAgICAgICAgIHRlbXAgPSB7XG4gICAgICAgICAgICBjb2RlOiB0cmF2ZWxKc29uW2ldLmNvZGUsXG4gICAgICAgICAgICBuYW1lOiB0cmF2ZWxKc29uW2ldLm5hbWVcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNIYXZlKSBicmVha1xuICAgIH1cblxuICAgIGlmICghaXNIYXZlICYmICh0YXJnZXROYW1lLmluZGV4T2YoJ+acjeWKoScpICE9PSAtMSB8fCB0YXJnZXROYW1lLmluZGV4T2YoJ+i0uScpICE9PSAtMSkpIHtcbiAgICAgIHRlbXAgPSB7XG4gICAgICAgIGNvZGU6ICc1NjAyLjE4LjE0JyxcbiAgICAgICAgbmFtZTogJ+W3ruaXheadgui0uSdcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVtcFxuXG4gICAgY2FzZSAn6LSt5YWl5YWs5Y+457uP6JCl55qE5ZWG5ZOBJzpcbiAgICAgIGlzSGF2ZSA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1eUpzb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8g5aSE55CG5YWz6ZSu6K+NIC0tIOWOu+mZpOaLrOWPt+WPiuaLrOWPt+WGheWGheWuuSAtLVxuICAgICAgICBsZXQgdGVtcEtleXdvcmQgPSBidXlKc29uW2ldLmtleXdvcmRzLnJlcGxhY2UoL1xc77yIW1xcc10qW1xcU10qXFzvvIkvZ2ksICcnKVxuICAgICAgICAvLyAgLCDjgIEg5Y+KIOWSjCDmiJYg5YiG5YmyXG4gICAgICAgIHRlbXBLZXl3b3JkID0gdGVtcEtleXdvcmQucmVwbGFjZSgv77yMfOOAgXzlkox85oiWfOWPii9nLCAnLCcpXG4gICAgICAgIHRlbXBLZXl3b3JkID0gdGVtcEtleXdvcmQuc3BsaXQoJywnKVxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRlbXBLZXl3b3JkLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgaWYgKHRhcmdldE5hbWUuaW5kZXhPZih0ZW1wS2V5d29yZFtqXSkgIT09IC0xKSB7XG4gICAgICAgICAgICBpc0hhdmUgPSB0cnVlXG4gICAgICAgICAgICB0ZW1wID0ge1xuICAgICAgICAgICAgICBjb2RlOiBidXlKc29uW2ldLmNvZGUsXG4gICAgICAgICAgICAgIG5hbWU6IGJ1eUpzb25baV0ubmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNIYXZlKSBicmVha1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzSGF2ZSkge1xuICAgICAgICBpZiAodGFyZ2V0TmFtZS5pbmRleE9mKCfmnI3liqEnKSAhPT0gLTEgfHwgdGFyZ2V0TmFtZS5pbmRleE9mKCfotLknKSAhPT0gLTEpIHtcbiAgICAgICAgICB0ZW1wID0ge1xuICAgICAgICAgICAgY29kZTogJzU0MDEuOTknLFxuICAgICAgICAgICAgbmFtZTogJ+WFtuS7lumHh+i0reaIkOacrCdcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVtcCA9IHtcbiAgICAgICAgICAgIGNvZGU6ICcxNDA1LjAxJyxcbiAgICAgICAgICAgIG5hbWU6ICflupPlrZjllYblk4EnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0ZW1wXG5cbiAgICBjYXNlICfllK7lh7rlhazlj7jnu4/okKXnmoTllYblk4EnOlxuICAgICAgaXNIYXZlID0gZmFsc2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2FsZUpzb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8g5aSE55CG5YWz6ZSu6K+NIC0tIOWOu+mZpOaLrOWPt+WPiuaLrOWPt+WGheWGheWuuSAtLVxuICAgICAgICBsZXQgdGVtcEtleXdvcmQgPSBzYWxlSnNvbltpXS5rZXl3b3Jkcy5yZXBsYWNlKC9cXO+8iFtcXHNdKltcXFNdKlxc77yJL2dpLCAnJylcbiAgICAgICAgLy8gICwg44CBIOWPiiDlkowg5oiWIOWIhuWJslxuICAgICAgICB0ZW1wS2V5d29yZCA9IHRlbXBLZXl3b3JkLnJlcGxhY2UoL++8jHzjgIF85ZKMfOaIlnzlj4ovZywgJywnKVxuICAgICAgICB0ZW1wS2V5d29yZCA9IHRlbXBLZXl3b3JkLnNwbGl0KCcsJylcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0ZW1wS2V5d29yZC5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGlmICh0YXJnZXROYW1lLmluZGV4T2YodGVtcEtleXdvcmRbal0pICE9PSAtMSkge1xuICAgICAgICAgICAgaXNIYXZlID0gdHJ1ZVxuICAgICAgICAgICAgdGVtcCA9IHtcbiAgICAgICAgICAgICAgY29kZTogc2FsZUpzb25baV0uY29kZSxcbiAgICAgICAgICAgICAgbmFtZTogc2FsZUpzb25baV0ubmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNIYXZlKSBicmVha1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzSGF2ZSkge1xuICAgICAgICB0ZW1wID0ge1xuICAgICAgICAgIGNvZGU6ICc1NjAxLjk5JyxcbiAgICAgICAgICBuYW1lOiAn5YW25LuW6ZSA5ZSu6LS555SoJ1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0ZW1wXG5cbiAgICBjYXNlICflhbbku5YnOlxuICAgIGlzSGF2ZSA9IGZhbHNlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdGhlckpzb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIOWkhOeQhuWFs+mUruivjSAtLSDljrvpmaTmi6zlj7flj4rmi6zlj7flhoXlhoXlrrkgLS1cbiAgICAgIGxldCB0ZW1wS2V5d29yZCA9IG90aGVySnNvbltpXS5rZXl3b3Jkcy5yZXBsYWNlKC9cXO+8iFtcXHNdKltcXFNdKlxc77yJL2dpLCAnJylcbiAgICAgIC8vICAsIOOAgSDlj4og5ZKMIOaIliDliIblibJcbiAgICAgIHRlbXBLZXl3b3JkID0gdGVtcEtleXdvcmQucmVwbGFjZSgv77yMfOOAgXzlkox85oiWfOWPii9nLCAnLCcpXG4gICAgICB0ZW1wS2V5d29yZCA9IHRlbXBLZXl3b3JkLnNwbGl0KCcsJylcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGVtcEtleXdvcmQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHRhcmdldE5hbWUuaW5kZXhPZih0ZW1wS2V5d29yZFtqXSkgIT09IC0xKSB7XG4gICAgICAgICAgaXNIYXZlID0gdHJ1ZVxuICAgICAgICAgIGNvbnNvbGUubG9nKG90aGVySnNvbltpXSk7XG4gICAgICAgICAgaWYgKG90aGVySnNvbltpXS5vdGhlcikge1xuICAgICAgICAgICAgaWYgKG90aGVySnNvbltpXS5vdGhlciA9PT0gJ+mHkeminT41MDAwJykge1xuICAgICAgICAgICAgICBpZiAoTnVtYmVyKG1vbmV5KSA8PSA1MDAwKSB7XG4gICAgICAgICAgICAgICAgaXNIYXZlID0gZmFsc2VcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvdGhlckpzb25baV0ub3RoZXIgPT09ICfph5Hpop08NTAwMCcpIHtcbiAgICAgICAgICAgICAgaWYgKE51bWJlcihtb25leSkgPiA1MDAwKSB7XG4gICAgICAgICAgICAgICAgaXNIYXZlID0gZmFsc2VcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRlbXAgPSB7XG4gICAgICAgICAgICBjb2RlOiBvdGhlckpzb25baV0uY29kZSxcbiAgICAgICAgICAgIG5hbWU6IG90aGVySnNvbltpXS5uYW1lXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGlzSGF2ZSkgYnJlYWtcbiAgICB9XG5cbiAgICBpZiAoIWlzSGF2ZSAmJiAodGFyZ2V0TmFtZS5pbmRleE9mKCfmnI3liqEnKSAhPT0gLTEgfHwgdGFyZ2V0TmFtZS5pbmRleE9mKCfotLknKSAhPT0gLTEpKSB7XG4gICAgICB0ZW1wID0ge1xuICAgICAgICBjb2RlOiAnNTYwMi45OScsXG4gICAgICAgIG5hbWU6ICflhbbku5bnrqHnkIbotLnnlKgnXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlbXBcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdGVtcFxuICB9XG59XG4iXX0=