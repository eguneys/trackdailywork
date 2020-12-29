export function tag(name, klass, children = [], fStyle) {

  let el = document.createElement(name);

  let { cls, ...attributes } = klass;

  if (cls) {
    if (cls.forEach) {
      cls.forEach(_ => {
        el.classList.add(_);
      });
    } else {
      el.classList.add(cls);
    }
  }

  Object.keys(attributes).forEach(_ => {
    el.setAttribute(_, attributes[_]);
  });


  if (children.forEach) {
    children.forEach(_ => {
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

export const div = (klass, children, fStyle) => tag('div', klass, children, fStyle);
export const span = (klass, children, fStyle) => tag('span', klass, children, fStyle);
export const input = (klass, children, fStyle) => tag('input', klass, children, fStyle);

export const button = (...args) => tag('button', ...args);
export const ul = (...args) => tag('ul', ...args);
export const li = (...args) => tag('li', ...args);


export const textNode = (content) => {
  return document.createTextNode(content);
};

export const updateChildren = (el, fupdate) => {
  el = el.firstChild;

  while (el) {
    fupdate(el);
    el = el.nextSibling;
  }
};

export const removeChildren = (el) => {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
};

export const addChildren = (el, children) => {
  children.forEach(_ => el.appendChild(_));
};

export const replaceChildren = (el, children) => {
  removeChildren(el);
  addChildren(el, children);
};

export const fTranslateAbs = (pos) => {
  return el => {
    el.style.transform = `translate(${pos[0]}px,${pos[1]}px)`;
  };
};

export const fAddClass = (klass) => {
  return el => {
    klass.split('.').forEach(_ => {
      el.classList.add(_);
    });
  };
};

export const fAttribute = attributes => {
  return el => {
    Object.keys(attributes).forEach(_ => {
      el.setAttribute(_, attributes[_]);
    });
  };
};

export const fListen = (event, f) => {
  return el => {
    el.addEventListener(event, _ => {
      f(_, el);
    });
  };
};

export const fHide = el => {
  if (!el.classList.contains('hidden')) {
    el.classList.add('hidden');
  }
};

export const fShow = el => {
  if (el.classList.contains('hidden')) {
    el.classList.remove('hidden');
  }
};

export function prepend($_, $__) {
  $_.insertBefore($__, $_.children[0]);
}

export function findKlass($_, klass) {
  return $_.getElementsByClassName(klass);
}

export function findTag($_, name) {
  return $_.getElementsByTagName(name);
}

export function findId($_, id) {
  return document.getElementById(id);
}

export function parse(str) {
  let parser = new DOMParser();
  let doc = parser.parseFromString(str, 'text/html');
  return doc.body;
}

export function bodyData(data) {
  let $_ = findTag(document, 'body')[0];

  return $_.dataset[data];
};
