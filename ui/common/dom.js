"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tag = tag;
exports.prepend = prepend;
exports.findKlass = findKlass;
exports.findTag = findTag;
exports.findId = findId;
exports.parse = parse;
exports.bodyData = bodyData;
exports.fShow = exports.fHide = exports.fListen = exports.fAttribute = exports.fAddClass = exports.fTranslateAbs = exports.replaceChildren = exports.addChildren = exports.removeChildren = exports.updateChildren = exports.textNode = exports.li = exports.ul = exports.button = exports.input = exports.span = exports.div = void 0;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function tag(name, klass) {
  var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var fStyle = arguments.length > 3 ? arguments[3] : undefined;
  var el = document.createElement(name);

  var cls = klass.cls,
      attributes = _objectWithoutProperties(klass, ["cls"]);

  if (cls) {
    if (cls.forEach) {
      cls.forEach(function (_) {
        el.classList.add(_);
      });
    } else {
      el.classList.add(cls);
    }
  }

  Object.keys(attributes).forEach(function (_) {
    el.setAttribute(_, attributes[_]);
  });

  if (children.forEach) {
    children.forEach(function (_) {
      el.appendChild(_);
    });
  } else {
    el.append(children);
  }

  if (fStyle) {
    fStyle(el);
  }

  return el;
}

var div = function div(klass, children, fStyle) {
  return tag('div', klass, children, fStyle);
};

exports.div = div;

var span = function span(klass, children, fStyle) {
  return tag('span', klass, children, fStyle);
};

exports.span = span;

var input = function input(klass, children, fStyle) {
  return tag('input', klass, children, fStyle);
};

exports.input = input;

var button = function button() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return tag.apply(void 0, ['button'].concat(args));
};

exports.button = button;

var ul = function ul() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return tag.apply(void 0, ['ul'].concat(args));
};

exports.ul = ul;

var li = function li() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  return tag.apply(void 0, ['li'].concat(args));
};

exports.li = li;

var textNode = function textNode(content) {
  return document.createTextNode(content);
};

exports.textNode = textNode;

var updateChildren = function updateChildren(el, fupdate) {
  el = el.firstChild;

  while (el) {
    fupdate(el);
    el = el.nextSibling;
  }
};

exports.updateChildren = updateChildren;

var removeChildren = function removeChildren(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
};

exports.removeChildren = removeChildren;

var addChildren = function addChildren(el, children) {
  children.forEach(function (_) {
    return el.appendChild(_);
  });
};

exports.addChildren = addChildren;

var replaceChildren = function replaceChildren(el, children) {
  removeChildren(el);
  addChildren(el, children);
};

exports.replaceChildren = replaceChildren;

var fTranslateAbs = function fTranslateAbs(pos) {
  return function (el) {
    el.style.transform = "translate(".concat(pos[0], "px,").concat(pos[1], "px)");
  };
};

exports.fTranslateAbs = fTranslateAbs;

var fAddClass = function fAddClass(klass) {
  return function (el) {
    klass.split('.').forEach(function (_) {
      el.classList.add(_);
    });
  };
};

exports.fAddClass = fAddClass;

var fAttribute = function fAttribute(attributes) {
  return function (el) {
    Object.keys(attributes).forEach(function (_) {
      el.setAttribute(_, attributes[_]);
    });
  };
};

exports.fAttribute = fAttribute;

var fListen = function fListen(event, f) {
  return function (el) {
    el.addEventListener(event, function (_) {
      f(_, el);
    });
  };
};

exports.fListen = fListen;

var fHide = function fHide(el) {
  if (!el.classList.contains('hidden')) {
    el.classList.add('hidden');
  }
};

exports.fHide = fHide;

var fShow = function fShow(el) {
  if (el.classList.contains('hidden')) {
    el.classList.remove('hidden');
  }
};

exports.fShow = fShow;

function prepend($_, $__) {
  $_.insertBefore($__, $_.children[0]);
}

function findKlass($_, klass) {
  return $_.getElementsByClassName(klass);
}

function findTag($_, name) {
  return $_.getElementsByTagName(name);
}

function findId($_, id) {
  return document.getElementById(id);
}

function parse(str) {
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, 'text/html');
  return doc.body;
}

function bodyData(data) {
  var $_ = findTag(document, 'body')[0];
  return $_.dataset[data];
}

;