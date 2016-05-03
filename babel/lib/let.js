'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function let_learn() {

  var a = [];
  var i = void 0;
  for (i = 0; i < 10; i++) {
    a[i] = function () {
      console.log(i);
    };
  }
  a[6](); // 6

  function funx() {
    var x = arguments.length <= 0 || arguments[0] === undefined ? 2 : arguments[0];
    var y = arguments.length <= 1 || arguments[1] === undefined ? x : arguments[1];

    return [x, y];
  }
  funx();
  function f() {
    console.log('I am outside!');
  }
  (function () {
    if (false) {
      // 重复声明一次函数f

      var _f = function _f() {
        console.log('I am inside!');
      };
    }

    f();
  })();
}

//let_learn();
function destruct_learn() {
  var a = 1;
  var b = 2;
  var c = 4;

  console.log([a, b, c]);

  function x(_ref) {
    var _ref2 = _slicedToArray(_ref, 2);

    var a = _ref2[0];
    var b = _ref2[1];

    return [a, b];
  }
  var _Hello = 'Hello';

  var _Hello2 = _slicedToArray(_Hello, 1);

  var foo = _Hello2[0];

  console.log(foo);
}
destruct_learn();