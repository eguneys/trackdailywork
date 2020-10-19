"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = modal;

var dom = _interopRequireWildcard(require("./dom"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function modal(content, cls, onClose) {
  var $content = dom.parse(content);
  var $wrap = dom.div({
    id: 'modal-wrap'
  }, [dom.span({
    cls: 'close'
  })]);
  var $overlay = dom.div({
    id: 'modal-overlay',
    cls: "".concat(cls)
  }, [], dom.fListen('click', modal.close));
  $overlay.appendChild($wrap);

  while ($content.childNodes[0]) {
    $wrap.appendChild($content.childNodes[0]);
  }

  modal.onClose = onClose;
  dom.fListen('click', modal.close)(dom.findKlass($wrap, 'close')[0]);
  dom.fListen('click', function (_, e) {
    return e.stopPropagation();
  })($wrap);
  dom.prepend(dom.findTag(document, 'body')[0], $overlay);
  return $wrap;
}

modal.close = function () {
  var $overlay = dom.findId(document, 'modal-overlay');

  if (modal.onClose) {
    modal.onClose();
  }

  $overlay.remove();
  delete modal.onClose;
};