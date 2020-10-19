"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formToXhr = exports.form = exports.text = exports.json = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var json = function json(url, init) {
  return fetch(url, _objectSpread({}, init)).then(function (res) {
    if (res.ok) return res.json();
    throw res.statusText;
  });
};

exports.json = json;

var text = function text(url, init) {
  return fetch(url, _objectSpread({}, init)).then(function (res) {
    if (res.ok) return res.text();
    throw res.statusText;
  });
};

exports.text = text;

var form = function form(data) {
  var formData = new FormData();

  for (var _i = 0, _Object$keys = Object.keys(data); _i < _Object$keys.length; _i++) {
    var k = _Object$keys[_i];
    formData.append(k, data[k]);
  }

  return formData;
};

exports.form = form;

var formToXhr = function formToXhr($_) {
  return json($_.action, {
    method: $_.method,
    body: new FormData($_)
  });
};

exports.formToXhr = formToXhr;