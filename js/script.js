"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function () {
  var card = document.querySelector('.two__card');
  var btn = document.querySelector('.two__button');
  card.classList.add('two__card__transition');
  card.classList.remove('two__card__fade-in');
  btn.addEventListener('click', function () {
    card.classList.add('two__card__fade-out');

    var foo = function foo() {
      console.log('end');
      card.classList.remove('two__card__transition');
      card.classList.remove('two__card__fade-out');
      card.classList.add('two__card__fade-in');
      setTimeout(function () {
        card.classList.add('two__card__transition');
        card.classList.remove('two__card__fade-in');
      }); //card.classList.remove('two__card__fade-in')

      card.removeEventListener('transitionend', foo);
    };

    card.addEventListener('transitionend', foo);
  });
})();

(function () {
  var list = document.querySelectorAll('.three__item-box');

  var _iterator = _createForOfIteratorHelper(list),
      _step;

  try {
    var _loop = function _loop() {
      var item = _step.value;
      item.addEventListener('click', function () {
        item.classList.add('three__item-box__complete');
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
})();

(function () {
  var input = document.querySelector('.d29__input');
  var dd = document.querySelector('.d29__list');
  var itemList = document.querySelectorAll('.d29__list-item');
  var itemText = [],
      y = 0,
      z = 0;

  var _iterator2 = _createForOfIteratorHelper(itemList),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var i = _step2.value;
      itemText[y] = i.innerHTML;
      y++;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  input.addEventListener('input', function () {
    var value = this.value;

    if (!value) {
      dd.classList.add('d29__list__hidden');
    } else {
      dd.classList.remove('d29__list__hidden');
    }

    var _iterator3 = _createForOfIteratorHelper(itemList),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var item = _step3.value;
        item.innerHTML = itemText[z] + value;
        z++;
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    z = 0;
  });
  input.addEventListener('focusout', function () {
    dd.classList.add('d29__list__hidden');
    z = 0;

    var _iterator4 = _createForOfIteratorHelper(itemList),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var item = _step4.value;
        item.innerHTML = itemText[z];
        input.value = '';
        z++;
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    z = 0;
  });
})();

(function () {
  var inc = document.querySelector('.d32__inc');
  var dec = document.querySelector('.d32__dec');
  var count = document.querySelector('.d32__countnum');
  inc.addEventListener('click', function () {
    count.classList.add('d32__countnum__transition');
    count.classList.add('d32__countnum__fade-out');

    var f1 = function f1() {
      console.log('yo');
      count.innerHTML = Number(count.innerHTML) + 1;
      count.removeEventListener('transitionend', f1);
      count.classList.remove('d32__countnum__transition');
      count.classList.add('d32__countnum__fade-in');
      count.classList.remove('d32__countnum__fade-out');
      setTimeout(function () {
        count.classList.add('d32__countnum__transition');
        count.classList.remove('d32__countnum__fade-in');
      });
    };

    count.addEventListener('transitionend', f1);
  });
  dec.addEventListener('click', function () {
    count.classList.add('d32__countnum__transition');
    count.classList.add('d32__countnum__fade-in');

    var f1 = function f1() {
      console.log('yo');
      count.innerHTML = Number(count.innerHTML) - 1;
      count.removeEventListener('transitionend', f1);
      count.classList.remove('d32__countnum__transition');
      count.classList.add('d32__countnum__fade-out');
      count.classList.remove('d32__countnum__fade-in');
      setTimeout(function () {
        count.classList.add('d32__countnum__transition');
        count.classList.remove('d32__countnum__fade-out');
      });
    };

    count.addEventListener('transitionend', f1);
  });
})();

(function () {
  var pointer = document.querySelector('.d25__pointer-box');
  var card = document.querySelector('.d25__card');
  pointer.addEventListener('click', function () {
    pointer.classList.add('d25__pointer-box__hide');

    var foo = function foo() {
      pointer.removeEventListener('transitionend', foo);
      card.classList.remove('d25__card__hide');
    };

    pointer.addEventListener('transitionend', foo);
  });
  card.addEventListener('click', function () {
    card.classList.add('d25__card__hide');

    var foo = function foo() {
      card.removeEventListener('transitionend', foo);
      pointer.classList.remove('d25__pointer-box__hide');
    };

    card.addEventListener('transitionend', foo);
  });
})();

(function () {
  var btn = document.querySelector('.d24__button');
  var circle = document.querySelector('.d24__circle');
  btn.addEventListener('click', function () {
    circle.classList.remove('d24__circle__animated');
    btn.classList.toggle('d24__button__min');
    btn.addEventListener('transitionend', foo);

    function foo() {
      if (btn.classList.contains('d24__button__min')) circle.classList.add('d24__circle__animated');
      btn.removeEventListener('transitionend', foo);
    }
  });
})();

(function () {
  var rect = document.querySelector('.d22__km-cir');
  document.addEventListener('scroll', function () {
    if (isInViewport(rect)) {
      rect.classList.add('d22__km-cir__animated');
      document.querySelector('.d22__steps-cir').classList.add('d22__steps-cir__animated');
      document.querySelector('.d22__cal-cir').classList.add('d22__cal-cir__animated');
    }
  });
})();

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

(function () {
  var btn = document.querySelector('.d20__button');
  var path1 = document.querySelector('.d20__path1');
  var path2 = document.querySelector('.d20__path2');
  var path3 = document.querySelector('.d20__path3');
  var path4 = document.querySelector('.d20__path4');
  var svg = document.querySelector('.d20__svg-box');
  var cir = document.querySelector('.d20__back-cir');
  btn.addEventListener('click', function () {
    path1.classList.toggle('d20__path1__animated');
    path2.classList.toggle('d20__path2__animated');
    path3.classList.toggle('d20__path3__animated');
    path4.classList.toggle('d20__path4__animated');
    svg.classList.toggle('d20__svg-box__animated');
    cir.classList.toggle('d20__back-cir__animated');

    if (btn.innerHTML == 'send mail') {
      btn.innerHTML = 'reset';
    } else {
      btn.innerHTML = 'send mail';
    }
  });
})();

(function () {
  var r = document.querySelector('.d19__round');
  var back = document.querySelector('.d19__back-box');
  var b1 = document.querySelector('.d19__cir1');
  var b2 = document.querySelector('.d19__cir2');
  var b3 = document.querySelector('.d19__cir3');
  b1.addEventListener('click', function () {
    r.classList.remove('d19__round__mid');
    r.classList.remove('d19__round__right');
    r.classList.add('d19__round__left');
    back.classList.remove('d19__back-box__mid');
    back.classList.remove('d19__back-box__right');
    back.classList.add('d19__back-box__left');
  });
  b2.addEventListener('click', function () {
    r.classList.remove('d19__round__right');
    r.classList.remove('d19__right__left');
    r.classList.add('d19__round__mid');
    back.classList.remove('d19__back-box__right');
    back.classList.remove('d19__back-box__left');
    back.classList.add('d19__back-box__mid');
  });
  b3.addEventListener('click', function () {
    r.classList.remove('d19__round__left');
    r.classList.remove('d19__right__mid');
    r.classList.add('d19__round__right');
    back.classList.remove('d19__back-box__left');
    back.classList.remove('d19__back-box__mid');
    back.classList.add('d19__back-box__right');
  });
})();

(function () {
  var btn = document.querySelector('.d15__submit');
  var input = document.querySelector('.d15__input');
  var label = document.querySelector('label');
  var filename = document.querySelector('.d15__filename');
  var card = document.querySelector('.d15__card');
  input.addEventListener("change", function () {
    console.log(input.files[0].name);
    label.classList.toggle('d15__label--getfile');
    filename.innerHTML = input.files[0].name;
  });
  btn.addEventListener('click', function (e) {
    e.preventDefault();

    if (label.classList.contains('d15__label--getfile')) {
      card.classList.add('d15__card--loading');
    }

    document.querySelector('.d15__loader').addEventListener('transitionend', function () {
      console.log('yo');
      document.querySelector('.d15__syncing').style.display = 'none';
      document.querySelector('.d15__check').style.display = 'block';
    });
  });
})();

(function () {
  var l = document.querySelectorAll('.d13__image__overlay');
  var card = document.querySelector('.d13__card');
  var close = document.querySelector('.d13__close-btn');

  var _iterator5 = _createForOfIteratorHelper(l),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var i = _step5.value;
      i.addEventListener('click', function () {
        console.log('yo');
        card.classList.remove('d13__card--opened');
      });
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  close.addEventListener('click', function () {
    card.classList.add('d13__card--opened');
  });
})();