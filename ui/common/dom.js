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
exports.fShow = exports.fHide = exports.fListen = exports.fAttribute = exports.fAddClass = exports.fTranslateAbs = exports.updateChildren = exports.textNode = exports.span = exports.div = void 0;

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
      f(el, _);
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