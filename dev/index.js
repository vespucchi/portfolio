/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/uikit/dist/css/uikit.min.css":
/*!***************************************************!*\
  !*** ./node_modules/uikit/dist/css/uikit.min.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index-style.css":
/*!*****************************!*\
  !*** ./src/index-style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/uikit/dist/js/uikit.js":
/*!*********************************************!*\
  !*** ./node_modules/uikit/dist/js/uikit.js ***!
  \*********************************************/
/***/ (function(module) {

/*! UIkit 3.21.9-dev.9668ac3c9 | https://www.getuikit.com | (c) 2014 - 2024 YOOtheme | MIT License */

(function (global, factory) {
     true ? module.exports = factory() :
    0;
})(this, (function () { 'use strict';

    const { hasOwnProperty, toString } = Object.prototype;
    function hasOwn(obj, key) {
      return hasOwnProperty.call(obj, key);
    }
    const hyphenateRe = /\B([A-Z])/g;
    const hyphenate = memoize((str) => str.replace(hyphenateRe, "-$1").toLowerCase());
    const camelizeRe = /-(\w)/g;
    const camelize = memoize(
      (str) => (str.charAt(0).toLowerCase() + str.slice(1)).replace(camelizeRe, (_, c) => c.toUpperCase())
    );
    const ucfirst = memoize((str) => str.charAt(0).toUpperCase() + str.slice(1));
    function startsWith(str, search) {
      var _a;
      return (_a = str == null ? void 0 : str.startsWith) == null ? void 0 : _a.call(str, search);
    }
    function endsWith(str, search) {
      var _a;
      return (_a = str == null ? void 0 : str.endsWith) == null ? void 0 : _a.call(str, search);
    }
    function includes(obj, search) {
      var _a;
      return (_a = obj == null ? void 0 : obj.includes) == null ? void 0 : _a.call(obj, search);
    }
    function findIndex(array, predicate) {
      var _a;
      return (_a = array == null ? void 0 : array.findIndex) == null ? void 0 : _a.call(array, predicate);
    }
    const { isArray, from: toArray } = Array;
    const { assign } = Object;
    function isFunction(obj) {
      return typeof obj === "function";
    }
    function isObject(obj) {
      return obj !== null && typeof obj === "object";
    }
    function isPlainObject(obj) {
      return toString.call(obj) === "[object Object]";
    }
    function isWindow(obj) {
      return isObject(obj) && obj === obj.window;
    }
    function isDocument(obj) {
      return nodeType(obj) === 9;
    }
    function isNode(obj) {
      return nodeType(obj) >= 1;
    }
    function isElement(obj) {
      return nodeType(obj) === 1;
    }
    function nodeType(obj) {
      return !isWindow(obj) && isObject(obj) && obj.nodeType;
    }
    function isBoolean(value) {
      return typeof value === "boolean";
    }
    function isString(value) {
      return typeof value === "string";
    }
    function isNumber(value) {
      return typeof value === "number";
    }
    function isNumeric(value) {
      return isNumber(value) || isString(value) && !isNaN(value - parseFloat(value));
    }
    function isEmpty(obj) {
      return !(isArray(obj) ? obj.length : isObject(obj) ? Object.keys(obj).length : false);
    }
    function isUndefined(value) {
      return value === void 0;
    }
    function toBoolean(value) {
      return isBoolean(value) ? value : value === "true" || value === "1" || value === "" ? true : value === "false" || value === "0" ? false : value;
    }
    function toNumber(value) {
      const number = Number(value);
      return isNaN(number) ? false : number;
    }
    function toFloat(value) {
      return parseFloat(value) || 0;
    }
    function toNode(element) {
      return element && toNodes(element)[0];
    }
    function toNodes(element) {
      return isNode(element) ? [element] : Array.from(element || []).filter(isNode);
    }
    function toWindow(element) {
      if (isWindow(element)) {
        return element;
      }
      element = toNode(element);
      const document = isDocument(element) ? element : element == null ? void 0 : element.ownerDocument;
      return (document == null ? void 0 : document.defaultView) || window;
    }
    function isEqual(value, other) {
      return value === other || isObject(value) && isObject(other) && Object.keys(value).length === Object.keys(other).length && each(value, (val, key) => val === other[key]);
    }
    function swap(value, a, b) {
      return value.replace(new RegExp(`${a}|${b}`, "g"), (match) => match === a ? b : a);
    }
    function last(array) {
      return array[array.length - 1];
    }
    function each(obj, cb) {
      for (const key in obj) {
        if (false === cb(obj[key], key)) {
          return false;
        }
      }
      return true;
    }
    function sortBy(array, prop) {
      return array.slice().sort(
        ({ [prop]: propA = 0 }, { [prop]: propB = 0 }) => propA > propB ? 1 : propB > propA ? -1 : 0
      );
    }
    function sumBy(array, iteratee) {
      return array.reduce(
        (sum, item) => sum + toFloat(isFunction(iteratee) ? iteratee(item) : item[iteratee]),
        0
      );
    }
    function uniqueBy(array, prop) {
      const seen = /* @__PURE__ */ new Set();
      return array.filter(({ [prop]: check }) => seen.has(check) ? false : seen.add(check));
    }
    function pick(obj, props) {
      return props.reduce((res, prop) => ({ ...res, [prop]: obj[prop] }), {});
    }
    function clamp(number, min = 0, max = 1) {
      return Math.min(Math.max(toNumber(number) || 0, min), max);
    }
    function noop() {
    }
    function intersectRect(...rects) {
      return [
        ["bottom", "top"],
        ["right", "left"]
      ].every(
        ([minProp, maxProp]) => Math.min(...rects.map(({ [minProp]: min }) => min)) - Math.max(...rects.map(({ [maxProp]: max }) => max)) > 0
      );
    }
    function pointInRect(point, rect) {
      return point.x <= rect.right && point.x >= rect.left && point.y <= rect.bottom && point.y >= rect.top;
    }
    function ratio(dimensions, prop, value) {
      const aProp = prop === "width" ? "height" : "width";
      return {
        [aProp]: dimensions[prop] ? Math.round(value * dimensions[aProp] / dimensions[prop]) : dimensions[aProp],
        [prop]: value
      };
    }
    function contain(dimensions, maxDimensions) {
      dimensions = { ...dimensions };
      for (const prop in dimensions) {
        dimensions = dimensions[prop] > maxDimensions[prop] ? ratio(dimensions, prop, maxDimensions[prop]) : dimensions;
      }
      return dimensions;
    }
    function cover$1(dimensions, maxDimensions) {
      dimensions = contain(dimensions, maxDimensions);
      for (const prop in dimensions) {
        dimensions = dimensions[prop] < maxDimensions[prop] ? ratio(dimensions, prop, maxDimensions[prop]) : dimensions;
      }
      return dimensions;
    }
    const Dimensions = { ratio, contain, cover: cover$1 };
    function getIndex(i, elements, current = 0, finite = false) {
      elements = toNodes(elements);
      const { length } = elements;
      if (!length) {
        return -1;
      }
      i = isNumeric(i) ? toNumber(i) : i === "next" ? current + 1 : i === "previous" ? current - 1 : i === "last" ? length - 1 : elements.indexOf(toNode(i));
      if (finite) {
        return clamp(i, 0, length - 1);
      }
      i %= length;
      return i < 0 ? i + length : i;
    }
    function memoize(fn) {
      const cache = /* @__PURE__ */ Object.create(null);
      return (key, ...args) => cache[key] || (cache[key] = fn(key, ...args));
    }

    function addClass(element, ...classes) {
      for (const node of toNodes(element)) {
        const add = toClasses(classes).filter((cls) => !hasClass(node, cls));
        if (add.length) {
          node.classList.add(...add);
        }
      }
    }
    function removeClass(element, ...classes) {
      for (const node of toNodes(element)) {
        const remove = toClasses(classes).filter((cls) => hasClass(node, cls));
        if (remove.length) {
          node.classList.remove(...remove);
        }
      }
    }
    function replaceClass(element, oldClass, newClass) {
      newClass = toClasses(newClass);
      oldClass = toClasses(oldClass).filter((cls) => !includes(newClass, cls));
      removeClass(element, oldClass);
      addClass(element, newClass);
    }
    function hasClass(element, cls) {
      [cls] = toClasses(cls);
      return toNodes(element).some((node) => node.classList.contains(cls));
    }
    function toggleClass(element, cls, force) {
      const classes = toClasses(cls);
      if (!isUndefined(force)) {
        force = !!force;
      }
      for (const node of toNodes(element)) {
        for (const cls2 of classes) {
          node.classList.toggle(cls2, force);
        }
      }
    }
    function toClasses(str) {
      return str ? isArray(str) ? str.map(toClasses).flat() : String(str).split(" ").filter(Boolean) : [];
    }

    function attr(element, name, value) {
      var _a;
      if (isObject(name)) {
        for (const key in name) {
          attr(element, key, name[key]);
        }
        return;
      }
      if (isUndefined(value)) {
        return (_a = toNode(element)) == null ? void 0 : _a.getAttribute(name);
      } else {
        for (const el of toNodes(element)) {
          if (isFunction(value)) {
            value = value.call(el, attr(el, name));
          }
          if (value === null) {
            removeAttr(el, name);
          } else {
            el.setAttribute(name, value);
          }
        }
      }
    }
    function hasAttr(element, name) {
      return toNodes(element).some((element2) => element2.hasAttribute(name));
    }
    function removeAttr(element, name) {
      toNodes(element).forEach((element2) => element2.removeAttribute(name));
    }
    function data(element, attribute) {
      for (const name of [attribute, `data-${attribute}`]) {
        if (hasAttr(element, name)) {
          return attr(element, name);
        }
      }
    }

    const inBrowser = typeof window !== "undefined";
    const isRtl = inBrowser && document.dir === "rtl";
    const hasTouch = inBrowser && "ontouchstart" in window;
    const hasPointerEvents = inBrowser && window.PointerEvent;
    const pointerDown$1 = hasPointerEvents ? "pointerdown" : hasTouch ? "touchstart" : "mousedown";
    const pointerMove$1 = hasPointerEvents ? "pointermove" : hasTouch ? "touchmove" : "mousemove";
    const pointerUp$1 = hasPointerEvents ? "pointerup" : hasTouch ? "touchend" : "mouseup";
    const pointerEnter = hasPointerEvents ? "pointerenter" : hasTouch ? "" : "mouseenter";
    const pointerLeave = hasPointerEvents ? "pointerleave" : hasTouch ? "" : "mouseleave";
    const pointerCancel = hasPointerEvents ? "pointercancel" : "touchcancel";

    const voidElements = {
      area: true,
      base: true,
      br: true,
      col: true,
      embed: true,
      hr: true,
      img: true,
      input: true,
      keygen: true,
      link: true,
      meta: true,
      param: true,
      source: true,
      track: true,
      wbr: true
    };
    function isVoidElement(element) {
      return toNodes(element).some((element2) => voidElements[element2.tagName.toLowerCase()]);
    }
    const isVisibleFn = inBrowser && Element.prototype.checkVisibility || function() {
      return this.offsetWidth || this.offsetHeight || this.getClientRects().length;
    };
    function isVisible(element) {
      return toNodes(element).some((element2) => isVisibleFn.call(element2));
    }
    const selInput = "input,select,textarea,button";
    function isInput(element) {
      return toNodes(element).some((element2) => matches(element2, selInput));
    }
    const selFocusable = `${selInput},a[href],[tabindex]`;
    function isFocusable(element) {
      return matches(element, selFocusable);
    }
    function parent(element) {
      var _a;
      return (_a = toNode(element)) == null ? void 0 : _a.parentElement;
    }
    function filter$1(element, selector) {
      return toNodes(element).filter((element2) => matches(element2, selector));
    }
    function matches(element, selector) {
      return toNodes(element).some((element2) => element2.matches(selector));
    }
    function parents(element, selector) {
      const elements = [];
      while (element = parent(element)) {
        if (!selector || matches(element, selector)) {
          elements.push(element);
        }
      }
      return elements;
    }
    function children(element, selector) {
      element = toNode(element);
      const children2 = element ? toArray(element.children) : [];
      return selector ? filter$1(children2, selector) : children2;
    }
    function index(element, ref) {
      return ref ? toNodes(element).indexOf(toNode(ref)) : children(parent(element)).indexOf(element);
    }
    function isSameSiteAnchor(el) {
      el = toNode(el);
      return el && ["origin", "pathname", "search"].every((part) => el[part] === location[part]);
    }
    function getTargetedElement(el) {
      if (isSameSiteAnchor(el)) {
        const { hash, ownerDocument } = toNode(el);
        const id = decodeURIComponent(hash).slice(1);
        return ownerDocument.getElementById(id) || ownerDocument.getElementsByName(id)[0];
      }
    }

    function query(selector, context) {
      return find(selector, getContext(selector, context));
    }
    function queryAll(selector, context) {
      return findAll(selector, getContext(selector, context));
    }
    function find(selector, context) {
      return toNode(_query(selector, toNode(context), "querySelector"));
    }
    function findAll(selector, context) {
      return toNodes(_query(selector, toNode(context), "querySelectorAll"));
    }
    function getContext(selector, context = document) {
      return isString(selector) && parseSelector(selector).isContextSelector || isDocument(context) ? context : context.ownerDocument;
    }
    const addStarRe = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g;
    const splitSelectorRe = /(\([^)]*\)|[^,])+/g;
    const parseSelector = memoize((selector) => {
      selector = selector.replace(addStarRe, "$1 *");
      let isContextSelector = false;
      const selectors = [];
      for (let sel of selector.match(splitSelectorRe)) {
        sel = sel.trim();
        isContextSelector || (isContextSelector = ["!", "+", "~", "-", ">"].includes(sel[0]));
        selectors.push(sel);
      }
      return {
        selector: selectors.join(","),
        selectors,
        isContextSelector
      };
    });
    const positionRe = /(\([^)]*\)|\S)*/;
    const parsePositionSelector = memoize((selector) => {
      selector = selector.slice(1).trim();
      const [position] = selector.match(positionRe);
      return [position, selector.slice(position.length + 1)];
    });
    function _query(selector, context = document, queryFn) {
      if (!selector || !isString(selector)) {
        return selector;
      }
      const parsed = parseSelector(selector);
      if (!parsed.isContextSelector) {
        return _doQuery(context, queryFn, parsed.selector);
      }
      selector = "";
      const isSingle = parsed.selectors.length === 1;
      for (let sel of parsed.selectors) {
        let positionSel;
        let ctx = context;
        if (sel[0] === "!") {
          [positionSel, sel] = parsePositionSelector(sel);
          ctx = context.parentElement.closest(positionSel);
          if (!sel && isSingle) {
            return ctx;
          }
        }
        if (ctx && sel[0] === "-") {
          [positionSel, sel] = parsePositionSelector(sel);
          ctx = ctx.previousElementSibling;
          ctx = matches(ctx, positionSel) ? ctx : null;
          if (!sel && isSingle) {
            return ctx;
          }
        }
        if (!ctx) {
          continue;
        }
        if (isSingle) {
          if (sel[0] === "~" || sel[0] === "+") {
            sel = `:scope > :nth-child(${index(ctx) + 1}) ${sel}`;
            ctx = ctx.parentElement;
          } else if (sel[0] === ">") {
            sel = `:scope ${sel}`;
          }
          return _doQuery(ctx, queryFn, sel);
        }
        selector += `${selector ? "," : ""}${domPath(ctx)} ${sel}`;
      }
      if (!isDocument(context)) {
        context = context.ownerDocument;
      }
      return _doQuery(context, queryFn, selector);
    }
    function _doQuery(context, queryFn, selector) {
      try {
        return context[queryFn](selector);
      } catch (e) {
        return null;
      }
    }
    function domPath(element) {
      const names = [];
      while (element.parentNode) {
        const id = attr(element, "id");
        if (id) {
          names.unshift(`#${escape(id)}`);
          break;
        } else {
          let { tagName } = element;
          if (tagName !== "HTML") {
            tagName += `:nth-child(${index(element) + 1})`;
          }
          names.unshift(tagName);
          element = element.parentNode;
        }
      }
      return names.join(" > ");
    }
    function escape(css) {
      return isString(css) ? CSS.escape(css) : "";
    }

    function on(...args) {
      let [targets, types, selector, listener, useCapture = false] = getArgs(args);
      if (listener.length > 1) {
        listener = detail(listener);
      }
      if (useCapture == null ? void 0 : useCapture.self) {
        listener = selfFilter(listener);
      }
      if (selector) {
        listener = delegate(selector, listener);
      }
      for (const type of types) {
        for (const target of targets) {
          target.addEventListener(type, listener, useCapture);
        }
      }
      return () => off(targets, types, listener, useCapture);
    }
    function off(...args) {
      let [targets, types, , listener, useCapture = false] = getArgs(args);
      for (const type of types) {
        for (const target of targets) {
          target.removeEventListener(type, listener, useCapture);
        }
      }
    }
    function once(...args) {
      const [element, types, selector, listener, useCapture = false, condition] = getArgs(args);
      const off2 = on(
        element,
        types,
        selector,
        (e) => {
          const result = !condition || condition(e);
          if (result) {
            off2();
            listener(e, result);
          }
        },
        useCapture
      );
      return off2;
    }
    function trigger(targets, event, detail2) {
      return toEventTargets(targets).every(
        (target) => target.dispatchEvent(createEvent(event, true, true, detail2))
      );
    }
    function createEvent(e, bubbles = true, cancelable = false, detail2) {
      if (isString(e)) {
        e = new CustomEvent(e, { bubbles, cancelable, detail: detail2 });
      }
      return e;
    }
    function getArgs(args) {
      args[0] = toEventTargets(args[0]);
      if (isString(args[1])) {
        args[1] = args[1].split(" ");
      }
      if (isFunction(args[2])) {
        args.splice(2, 0, false);
      }
      return args;
    }
    function delegate(selector, listener) {
      return (e) => {
        const current = selector[0] === ">" ? findAll(selector, e.currentTarget).reverse().find((element) => element.contains(e.target)) : e.target.closest(selector);
        if (current) {
          e.current = current;
          listener.call(this, e);
          delete e.current;
        }
      };
    }
    function detail(listener) {
      return (e) => isArray(e.detail) ? listener(e, ...e.detail) : listener(e);
    }
    function selfFilter(listener) {
      return function(e) {
        if (e.target === e.currentTarget || e.target === e.current) {
          return listener.call(null, e);
        }
      };
    }
    function isEventTarget(target) {
      return target && "addEventListener" in target;
    }
    function toEventTarget(target) {
      return isEventTarget(target) ? target : toNode(target);
    }
    function toEventTargets(target) {
      return isArray(target) ? target.map(toEventTarget).filter(Boolean) : isString(target) ? findAll(target) : isEventTarget(target) ? [target] : toNodes(target);
    }
    function isTouch(e) {
      return e.pointerType === "touch" || !!e.touches;
    }
    function getEventPos(e) {
      var _a, _b;
      const { clientX: x, clientY: y } = ((_a = e.touches) == null ? void 0 : _a[0]) || ((_b = e.changedTouches) == null ? void 0 : _b[0]) || e;
      return { x, y };
    }

    const cssNumber = {
      "animation-iteration-count": true,
      "column-count": true,
      "fill-opacity": true,
      "flex-grow": true,
      "flex-shrink": true,
      "font-weight": true,
      "line-height": true,
      opacity: true,
      order: true,
      orphans: true,
      "stroke-dasharray": true,
      "stroke-dashoffset": true,
      widows: true,
      "z-index": true,
      zoom: true
    };
    function css(element, property, value, priority) {
      const elements = toNodes(element);
      for (const element2 of elements) {
        if (isString(property)) {
          property = propName(property);
          if (isUndefined(value)) {
            return getComputedStyle(element2).getPropertyValue(property);
          } else {
            element2.style.setProperty(
              property,
              isNumeric(value) && !cssNumber[property] ? `${value}px` : value || isNumber(value) ? value : "",
              priority
            );
          }
        } else if (isArray(property)) {
          const props = {};
          for (const prop of property) {
            props[prop] = css(element2, prop);
          }
          return props;
        } else if (isObject(property)) {
          for (const prop in property) {
            css(element2, prop, property[prop], value);
          }
        }
      }
      return elements[0];
    }
    const propName = memoize((name) => {
      if (startsWith(name, "--")) {
        return name;
      }
      name = hyphenate(name);
      const { style } = document.documentElement;
      if (name in style) {
        return name;
      }
      for (const prefix of ["webkit", "moz"]) {
        const prefixedName = `-${prefix}-${name}`;
        if (prefixedName in style) {
          return prefixedName;
        }
      }
    });

    const clsTransition = "uk-transition";
    const transitionEnd = "transitionend";
    const transitionCanceled = "transitioncanceled";
    function transition$1(element, props, duration = 400, timing = "linear") {
      duration = Math.round(duration);
      return Promise.all(
        toNodes(element).map(
          (element2) => new Promise((resolve, reject) => {
            for (const name in props) {
              css(element2, name);
            }
            const timer = setTimeout(() => trigger(element2, transitionEnd), duration);
            once(
              element2,
              [transitionEnd, transitionCanceled],
              ({ type }) => {
                clearTimeout(timer);
                removeClass(element2, clsTransition);
                css(element2, {
                  transitionProperty: "",
                  transitionDuration: "",
                  transitionTimingFunction: ""
                });
                type === transitionCanceled ? reject() : resolve(element2);
              },
              { self: true }
            );
            addClass(element2, clsTransition);
            css(element2, {
              transitionProperty: Object.keys(props).map(propName).join(","),
              transitionDuration: `${duration}ms`,
              transitionTimingFunction: timing,
              ...props
            });
          })
        )
      );
    }
    const Transition = {
      start: transition$1,
      async stop(element) {
        trigger(element, transitionEnd);
        await Promise.resolve();
      },
      async cancel(element) {
        trigger(element, transitionCanceled);
        await Promise.resolve();
      },
      inProgress(element) {
        return hasClass(element, clsTransition);
      }
    };
    const clsAnimation = "uk-animation";
    const animationEnd = "animationend";
    const animationCanceled = "animationcanceled";
    function animate$2(element, animation, duration = 200, origin, out) {
      return Promise.all(
        toNodes(element).map(
          (element2) => new Promise((resolve, reject) => {
            if (hasClass(element2, clsAnimation)) {
              trigger(element2, animationCanceled);
            }
            const classes = [
              animation,
              clsAnimation,
              `${clsAnimation}-${out ? "leave" : "enter"}`,
              origin && `uk-transform-origin-${origin}`,
              out && `${clsAnimation}-reverse`
            ];
            const timer = setTimeout(() => trigger(element2, animationEnd), duration);
            once(
              element2,
              [animationEnd, animationCanceled],
              ({ type }) => {
                clearTimeout(timer);
                type === animationCanceled ? reject() : resolve(element2);
                css(element2, "animationDuration", "");
                removeClass(element2, classes);
              },
              { self: true }
            );
            css(element2, "animationDuration", `${duration}ms`);
            addClass(element2, classes);
          })
        )
      );
    }
    const Animation = {
      in: animate$2,
      out(element, animation, duration, origin) {
        return animate$2(element, animation, duration, origin, true);
      },
      inProgress(element) {
        return hasClass(element, clsAnimation);
      },
      cancel(element) {
        trigger(element, animationCanceled);
      }
    };

    function ready(fn) {
      if (document.readyState !== "loading") {
        fn();
        return;
      }
      once(document, "DOMContentLoaded", fn);
    }
    function isTag(element, ...tagNames) {
      return tagNames.some((tagName) => {
        var _a;
        return ((_a = element == null ? void 0 : element.tagName) == null ? void 0 : _a.toLowerCase()) === tagName.toLowerCase();
      });
    }
    function empty(element) {
      element = $(element);
      element.innerHTML = "";
      return element;
    }
    function html(parent2, html2) {
      return isUndefined(html2) ? $(parent2).innerHTML : append(empty(parent2), html2);
    }
    const prepend = applyFn("prepend");
    const append = applyFn("append");
    const before = applyFn("before");
    const after = applyFn("after");
    function applyFn(fn) {
      return function(ref, element) {
        var _a;
        const nodes = toNodes(isString(element) ? fragment(element) : element);
        (_a = $(ref)) == null ? void 0 : _a[fn](...nodes);
        return unwrapSingle(nodes);
      };
    }
    function remove$1(element) {
      toNodes(element).forEach((element2) => element2.remove());
    }
    function wrapAll(element, structure) {
      structure = toNode(before(element, structure));
      while (structure.firstElementChild) {
        structure = structure.firstElementChild;
      }
      append(structure, element);
      return structure;
    }
    function wrapInner(element, structure) {
      return toNodes(
        toNodes(element).map(
          (element2) => element2.hasChildNodes() ? wrapAll(toArray(element2.childNodes), structure) : append(element2, structure)
        )
      );
    }
    function unwrap(element) {
      toNodes(element).map(parent).filter((value, index, self) => self.indexOf(value) === index).forEach((parent2) => parent2.replaceWith(...parent2.childNodes));
    }
    const singleTagRe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
    function fragment(html2) {
      const matches = singleTagRe.exec(html2);
      if (matches) {
        return document.createElement(matches[1]);
      }
      const container = document.createElement("template");
      container.innerHTML = html2.trim();
      return unwrapSingle(container.content.childNodes);
    }
    function unwrapSingle(nodes) {
      return nodes.length > 1 ? nodes : nodes[0];
    }
    function apply(node, fn) {
      if (!isElement(node)) {
        return;
      }
      fn(node);
      node = node.firstElementChild;
      while (node) {
        apply(node, fn);
        node = node.nextElementSibling;
      }
    }
    function $(selector, context) {
      return isHtml(selector) ? toNode(fragment(selector)) : find(selector, context);
    }
    function $$(selector, context) {
      return isHtml(selector) ? toNodes(fragment(selector)) : findAll(selector, context);
    }
    function isHtml(str) {
      return isString(str) && startsWith(str.trim(), "<");
    }

    const dirs$1 = {
      width: ["left", "right"],
      height: ["top", "bottom"]
    };
    function dimensions$1(element) {
      const rect = isElement(element) ? toNode(element).getBoundingClientRect() : { height: height(element), width: width(element), top: 0, left: 0 };
      return {
        height: rect.height,
        width: rect.width,
        top: rect.top,
        left: rect.left,
        bottom: rect.top + rect.height,
        right: rect.left + rect.width
      };
    }
    function offset(element, coordinates) {
      if (coordinates) {
        css(element, { left: 0, top: 0 });
      }
      const currentOffset = dimensions$1(element);
      if (element) {
        const { scrollY, scrollX } = toWindow(element);
        const offsetBy = { height: scrollY, width: scrollX };
        for (const dir in dirs$1) {
          for (const prop of dirs$1[dir]) {
            currentOffset[prop] += offsetBy[dir];
          }
        }
      }
      if (!coordinates) {
        return currentOffset;
      }
      for (const prop of ["left", "top"]) {
        css(element, prop, coordinates[prop] - currentOffset[prop]);
      }
    }
    function position(element) {
      let { top, left } = offset(element);
      const {
        ownerDocument: { body, documentElement },
        offsetParent
      } = toNode(element);
      let parent = offsetParent || documentElement;
      while (parent && (parent === body || parent === documentElement) && css(parent, "position") === "static") {
        parent = parent.parentNode;
      }
      if (isElement(parent)) {
        const parentOffset = offset(parent);
        top -= parentOffset.top + toFloat(css(parent, "borderTopWidth"));
        left -= parentOffset.left + toFloat(css(parent, "borderLeftWidth"));
      }
      return {
        top: top - toFloat(css(element, "marginTop")),
        left: left - toFloat(css(element, "marginLeft"))
      };
    }
    function offsetPosition(element) {
      element = toNode(element);
      const offset2 = [element.offsetTop, element.offsetLeft];
      while (element = element.offsetParent) {
        offset2[0] += element.offsetTop + toFloat(css(element, `borderTopWidth`));
        offset2[1] += element.offsetLeft + toFloat(css(element, `borderLeftWidth`));
        if (css(element, "position") === "fixed") {
          const win = toWindow(element);
          offset2[0] += win.scrollY;
          offset2[1] += win.scrollX;
          return offset2;
        }
      }
      return offset2;
    }
    const height = dimension("height");
    const width = dimension("width");
    function dimension(prop) {
      const propName = ucfirst(prop);
      return (element, value) => {
        if (isUndefined(value)) {
          if (isWindow(element)) {
            return element[`inner${propName}`];
          }
          if (isDocument(element)) {
            const doc = element.documentElement;
            return Math.max(doc[`offset${propName}`], doc[`scroll${propName}`]);
          }
          element = toNode(element);
          value = css(element, prop);
          value = value === "auto" ? element[`offset${propName}`] : toFloat(value) || 0;
          return value - boxModelAdjust(element, prop);
        } else {
          return css(
            element,
            prop,
            !value && value !== 0 ? "" : +value + boxModelAdjust(element, prop) + "px"
          );
        }
      };
    }
    function boxModelAdjust(element, prop, sizing = "border-box") {
      return css(element, "boxSizing") === sizing ? sumBy(
        dirs$1[prop].map(ucfirst),
        (prop2) => toFloat(css(element, `padding${prop2}`)) + toFloat(css(element, `border${prop2}Width`))
      ) : 0;
    }
    function flipPosition(pos) {
      for (const dir in dirs$1) {
        for (const i in dirs$1[dir]) {
          if (dirs$1[dir][i] === pos) {
            return dirs$1[dir][1 - i];
          }
        }
      }
      return pos;
    }
    function toPx(value, property = "width", element = window, offsetDim = false) {
      if (!isString(value)) {
        return toFloat(value);
      }
      return sumBy(parseCalc(value), (value2) => {
        const unit = parseUnit(value2);
        return unit ? percent(
          unit === "vh" ? getViewportHeight() : unit === "vw" ? width(toWindow(element)) : offsetDim ? element[`offset${ucfirst(property)}`] : dimensions$1(element)[property],
          value2
        ) : value2;
      });
    }
    const calcRe = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g;
    const parseCalc = memoize((calc) => calc.toString().replace(/\s/g, "").match(calcRe) || []);
    const unitRe$1 = /(?:v[hw]|%)$/;
    const parseUnit = memoize((str) => (str.match(unitRe$1) || [])[0]);
    function percent(base, value) {
      return base * toFloat(value) / 100;
    }
    let vh;
    let vhEl;
    function getViewportHeight() {
      if (vh) {
        return vh;
      }
      if (!vhEl) {
        vhEl = $("<div>");
        css(vhEl, {
          height: "100vh",
          position: "fixed"
        });
        on(window, "resize", () => vh = null);
      }
      append(document.body, vhEl);
      vh = vhEl.clientHeight;
      remove$1(vhEl);
      return vh;
    }

    const fastdom = { read, write, clear, flush };
    const reads = [];
    const writes = [];
    function read(task) {
      reads.push(task);
      scheduleFlush();
      return task;
    }
    function write(task) {
      writes.push(task);
      scheduleFlush();
      return task;
    }
    function clear(task) {
      remove(reads, task);
      remove(writes, task);
    }
    let scheduled = false;
    function flush() {
      runTasks(reads);
      runTasks(writes.splice(0));
      scheduled = false;
      if (reads.length || writes.length) {
        scheduleFlush();
      }
    }
    function scheduleFlush() {
      if (!scheduled) {
        scheduled = true;
        queueMicrotask(flush);
      }
    }
    function runTasks(tasks) {
      let task;
      while (task = tasks.shift()) {
        try {
          task();
        } catch (e) {
          console.error(e);
        }
      }
    }
    function remove(array, item) {
      const index = array.indexOf(item);
      return ~index && array.splice(index, 1);
    }

    class MouseTracker {
      init() {
        this.positions = [];
        let position;
        this.unbind = on(document, "mousemove", (e) => position = getEventPos(e));
        this.interval = setInterval(() => {
          if (!position) {
            return;
          }
          this.positions.push(position);
          if (this.positions.length > 5) {
            this.positions.shift();
          }
        }, 50);
      }
      cancel() {
        var _a;
        (_a = this.unbind) == null ? void 0 : _a.call(this);
        clearInterval(this.interval);
      }
      movesTo(target) {
        if (!this.positions || this.positions.length < 2) {
          return false;
        }
        const p = dimensions$1(target);
        const { left, right, top, bottom } = p;
        const [prevPosition] = this.positions;
        const position = last(this.positions);
        const path = [prevPosition, position];
        if (pointInRect(position, p)) {
          return false;
        }
        const diagonals = [
          [
            { x: left, y: top },
            { x: right, y: bottom }
          ],
          [
            { x: left, y: bottom },
            { x: right, y: top }
          ]
        ];
        return diagonals.some((diagonal) => {
          const intersection = intersect(path, diagonal);
          return intersection && pointInRect(intersection, p);
        });
      }
    }
    function intersect([{ x: x1, y: y1 }, { x: x2, y: y2 }], [{ x: x3, y: y3 }, { x: x4, y: y4 }]) {
      const denominator = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
      if (denominator === 0) {
        return false;
      }
      const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;
      if (ua < 0) {
        return false;
      }
      return { x: x1 + ua * (x2 - x1), y: y1 + ua * (y2 - y1) };
    }

    function observeIntersection(targets, cb, options = {}, { intersecting = true } = {}) {
      const observer = new IntersectionObserver(
        intersecting ? (entries, observer2) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            cb(entries, observer2);
          }
        } : cb,
        options
      );
      for (const el of toNodes(targets)) {
        observer.observe(el);
      }
      return observer;
    }
    const hasResizeObserver = inBrowser && window.ResizeObserver;
    function observeResize(targets, cb, options = { box: "border-box" }) {
      if (hasResizeObserver) {
        return observe$1(ResizeObserver, targets, cb, options);
      }
      const off = [on(window, "load resize", cb), on(document, "loadedmetadata load", cb, true)];
      return { disconnect: () => off.map((cb2) => cb2()) };
    }
    function observeViewportResize(cb) {
      return { disconnect: on([window, window.visualViewport], "resize", cb) };
    }
    function observeMutation(targets, cb, options) {
      return observe$1(MutationObserver, targets, cb, options);
    }
    function observe$1(Observer, targets, cb, options) {
      const observer = new Observer(cb);
      for (const el of toNodes(targets)) {
        observer.observe(el, options);
      }
      return observer;
    }

    function play(el) {
      if (isIFrame(el)) {
        call(el, { func: "playVideo", method: "play" });
      }
      if (isHTML5(el)) {
        el.play().catch(noop);
      }
    }
    function pause(el) {
      if (isIFrame(el)) {
        call(el, { func: "pauseVideo", method: "pause" });
      }
      if (isHTML5(el)) {
        el.pause();
      }
    }
    function mute(el) {
      if (isIFrame(el)) {
        call(el, { func: "mute", method: "setVolume", value: 0 });
      }
      if (isHTML5(el)) {
        el.muted = true;
      }
    }
    function isVideo(el) {
      return isHTML5(el) || isIFrame(el);
    }
    function isHTML5(el) {
      return isTag(el, "video");
    }
    function isIFrame(el) {
      return isTag(el, "iframe") && (isYoutube(el) || isVimeo(el));
    }
    function isYoutube(el) {
      return !!el.src.match(
        /\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/
      );
    }
    function isVimeo(el) {
      return !!el.src.match(/vimeo\.com\/video\/.*/);
    }
    async function call(el, cmd) {
      await enableApi(el);
      post(el, cmd);
    }
    function post(el, cmd) {
      el.contentWindow.postMessage(JSON.stringify({ event: "command", ...cmd }), "*");
    }
    const stateKey = "_ukPlayer";
    let counter = 0;
    function enableApi(el) {
      if (el[stateKey]) {
        return el[stateKey];
      }
      const youtube = isYoutube(el);
      const vimeo = isVimeo(el);
      const id = ++counter;
      let poller;
      return el[stateKey] = new Promise((resolve) => {
        youtube && once(el, "load", () => {
          const listener = () => post(el, { event: "listening", id });
          poller = setInterval(listener, 100);
          listener();
        });
        once(window, "message", resolve, false, ({ data }) => {
          try {
            data = JSON.parse(data);
            return youtube && (data == null ? void 0 : data.id) === id && data.event === "onReady" || vimeo && Number(data == null ? void 0 : data.player_id) === id;
          } catch (e) {
          }
        });
        el.src = `${el.src}${includes(el.src, "?") ? "&" : "?"}${youtube ? "enablejsapi=1" : `api=1&player_id=${id}`}`;
      }).then(() => clearInterval(poller));
    }

    function isInView(element, offsetTop = 0, offsetLeft = 0) {
      if (!isVisible(element)) {
        return false;
      }
      return intersectRect(
        ...overflowParents(element).map((parent2) => {
          const { top, left, bottom, right } = offsetViewport(parent2);
          return {
            top: top - offsetTop,
            left: left - offsetLeft,
            bottom: bottom + offsetTop,
            right: right + offsetLeft
          };
        }).concat(offset(element))
      );
    }
    function scrollIntoView(element, { offset: offsetBy = 0 } = {}) {
      const parents2 = isVisible(element) ? scrollParents(element, false, ["hidden"]) : [];
      return parents2.reduce(
        (fn, scrollElement, i) => {
          const { scrollTop, scrollHeight, offsetHeight } = scrollElement;
          const viewport = offsetViewport(scrollElement);
          const maxScroll = scrollHeight - viewport.height;
          const { height: elHeight, top: elTop } = parents2[i - 1] ? offsetViewport(parents2[i - 1]) : offset(element);
          let top = Math.ceil(elTop - viewport.top - offsetBy + scrollTop);
          if (offsetBy > 0 && offsetHeight < elHeight + offsetBy) {
            top += offsetBy;
          } else {
            offsetBy = 0;
          }
          if (top > maxScroll) {
            offsetBy -= top - maxScroll;
            top = maxScroll;
          } else if (top < 0) {
            offsetBy -= top;
            top = 0;
          }
          return () => scrollTo(scrollElement, top - scrollTop, element, maxScroll).then(fn);
        },
        () => Promise.resolve()
      )();
      function scrollTo(element2, top, targetEl, maxScroll) {
        return new Promise((resolve) => {
          const scroll = element2.scrollTop;
          const duration = getDuration(Math.abs(top));
          const start = Date.now();
          const isScrollingElement = scrollingElement(element2) === element2;
          const targetTop = offset(targetEl).top + (isScrollingElement ? 0 : scroll);
          let prev = 0;
          let frames = 15;
          (function step() {
            const percent = ease(clamp((Date.now() - start) / duration));
            let diff = 0;
            if (parents2[0] === element2 && scroll + top < maxScroll) {
              diff = offset(targetEl).top + (isScrollingElement ? 0 : element2.scrollTop) - targetTop - dimensions$1(getCoveringElement(targetEl)).height;
            }
            element2.scrollTop = scroll + (top + diff) * percent;
            if (percent === 1 && (prev === diff || !frames--)) {
              resolve();
            } else {
              prev = diff;
              requestAnimationFrame(step);
            }
          })();
        });
      }
      function getDuration(dist) {
        return 40 * Math.pow(dist, 0.375);
      }
      function ease(k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
      }
    }
    function scrolledOver(element, startOffset = 0, endOffset = 0) {
      if (!isVisible(element)) {
        return 0;
      }
      const scrollElement = scrollParent(element, true);
      const { scrollHeight, scrollTop } = scrollElement;
      const { height: viewportHeight } = offsetViewport(scrollElement);
      const maxScroll = scrollHeight - viewportHeight;
      const elementOffsetTop = offsetPosition(element)[0] - offsetPosition(scrollElement)[0];
      const start = Math.max(0, elementOffsetTop - viewportHeight + startOffset);
      const end = Math.min(maxScroll, elementOffsetTop + element.offsetHeight - endOffset);
      return start < end ? clamp((scrollTop - start) / (end - start)) : 1;
    }
    function scrollParents(element, scrollable = false, props = []) {
      const scrollEl = scrollingElement(element);
      let ancestors = parents(element).reverse();
      ancestors = ancestors.slice(ancestors.indexOf(scrollEl) + 1);
      const fixedIndex = findIndex(ancestors, (el) => css(el, "position") === "fixed");
      if (~fixedIndex) {
        ancestors = ancestors.slice(fixedIndex);
      }
      return [scrollEl].concat(
        ancestors.filter(
          (parent2) => css(parent2, "overflow").split(" ").some((prop) => includes(["auto", "scroll", ...props], prop)) && (!scrollable || parent2.scrollHeight > offsetViewport(parent2).height)
        )
      ).reverse();
    }
    function scrollParent(...args) {
      return scrollParents(...args)[0];
    }
    function overflowParents(element) {
      return scrollParents(element, false, ["hidden", "clip"]);
    }
    function offsetViewport(scrollElement) {
      const window = toWindow(scrollElement);
      const documentScrollingElement = scrollingElement(scrollElement);
      const useWindow = !isNode(scrollElement) || scrollElement.contains(documentScrollingElement);
      if (useWindow && window.visualViewport) {
        let { height, width, scale, pageTop: top, pageLeft: left } = window.visualViewport;
        height = Math.round(height * scale);
        width = Math.round(width * scale);
        return { height, width, top, left, bottom: top + height, right: left + width };
      }
      let rect = offset(useWindow ? window : scrollElement);
      if (css(scrollElement, "display") === "inline") {
        return rect;
      }
      const { body, documentElement } = window.document;
      const viewportElement = useWindow ? documentScrollingElement === documentElement || // In quirks mode the scrolling element is body, even though the viewport is html
      documentScrollingElement.clientHeight < body.clientHeight ? documentScrollingElement : body : scrollElement;
      for (let [prop, dir, start, end] of [
        ["width", "x", "left", "right"],
        ["height", "y", "top", "bottom"]
      ]) {
        const subpixel = rect[prop] % 1;
        rect[start] += toFloat(css(viewportElement, `border-${start}-width`));
        rect[prop] = rect[dir] = viewportElement[`client${ucfirst(prop)}`] - (subpixel ? subpixel < 0.5 ? -subpixel : 1 - subpixel : 0);
        rect[end] = rect[prop] + rect[start];
      }
      return rect;
    }
    function getCoveringElement(target) {
      const { left, width, top } = dimensions$1(target);
      for (const position of top ? [0, top] : [0]) {
        let coverEl;
        for (const el of toWindow(target).document.elementsFromPoint(left + width / 2, position)) {
          if (!el.contains(target) && // If e.g. Offcanvas is not yet closed
          !hasClass(el, "uk-togglable-leave") && (hasPosition(el, "fixed") && zIndex(
            parents(target).reverse().find(
              (parent2) => !parent2.contains(el) && !hasPosition(parent2, "static")
            )
          ) < zIndex(el) || hasPosition(el, "sticky") && parent(el).contains(target)) && (!coverEl || dimensions$1(coverEl).height < dimensions$1(el).height)) {
            coverEl = el;
          }
        }
        if (coverEl) {
          return coverEl;
        }
      }
    }
    function zIndex(element) {
      return toFloat(css(element, "zIndex"));
    }
    function hasPosition(element, position) {
      return css(element, "position") === position;
    }
    function scrollingElement(element) {
      return toWindow(element).document.scrollingElement;
    }

    const dirs = [
      ["width", "x", "left", "right"],
      ["height", "y", "top", "bottom"]
    ];
    function positionAt(element, target, options) {
      options = {
        attach: {
          element: ["left", "top"],
          target: ["left", "top"],
          ...options.attach
        },
        offset: [0, 0],
        placement: [],
        ...options
      };
      if (!isArray(target)) {
        target = [target, target];
      }
      offset(element, getPosition(element, target, options));
    }
    function getPosition(element, target, options) {
      const position = attachTo(element, target, options);
      const { boundary, viewportOffset = 0, placement } = options;
      let offsetPosition = position;
      for (const [i, [prop, , start, end]] of Object.entries(dirs)) {
        const viewport = getViewport$2(element, target[i], viewportOffset, boundary, i);
        if (isWithin(position, viewport, i)) {
          continue;
        }
        let offsetBy = 0;
        if (placement[i] === "flip") {
          const attach = options.attach.target[i];
          if (attach === end && position[end] <= viewport[end] || attach === start && position[start] >= viewport[start]) {
            continue;
          }
          offsetBy = flip(element, target, options, i)[start] - position[start];
          const scrollArea = getScrollArea(element, target[i], viewportOffset, i);
          if (!isWithin(applyOffset(position, offsetBy, i), scrollArea, i)) {
            if (isWithin(position, scrollArea, i)) {
              continue;
            }
            if (options.recursion) {
              return false;
            }
            const newPos = flipAxis(element, target, options);
            if (newPos && isWithin(newPos, scrollArea, 1 - i)) {
              return newPos;
            }
            continue;
          }
        } else if (placement[i] === "shift") {
          const targetDim = offset(target[i]);
          const { offset: elOffset } = options;
          offsetBy = clamp(
            clamp(position[start], viewport[start], viewport[end] - position[prop]),
            targetDim[start] - position[prop] + elOffset[i],
            targetDim[end] - elOffset[i]
          ) - position[start];
        }
        offsetPosition = applyOffset(offsetPosition, offsetBy, i);
      }
      return offsetPosition;
    }
    function attachTo(element, target, options) {
      let { attach, offset: offsetBy } = {
        attach: {
          element: ["left", "top"],
          target: ["left", "top"],
          ...options.attach
        },
        offset: [0, 0],
        ...options
      };
      let elOffset = offset(element);
      for (const [i, [prop, , start, end]] of Object.entries(dirs)) {
        const targetOffset = attach.target[i] === attach.element[i] ? offsetViewport(target[i]) : offset(target[i]);
        elOffset = applyOffset(
          elOffset,
          targetOffset[start] - elOffset[start] + moveBy(attach.target[i], end, targetOffset[prop]) - moveBy(attach.element[i], end, elOffset[prop]) + +offsetBy[i],
          i
        );
      }
      return elOffset;
    }
    function applyOffset(position, offset2, i) {
      const [, dir, start, end] = dirs[i];
      const newPos = { ...position };
      newPos[start] = position[dir] = position[start] + offset2;
      newPos[end] += offset2;
      return newPos;
    }
    function moveBy(attach, end, dim) {
      return attach === "center" ? dim / 2 : attach === end ? dim : 0;
    }
    function getViewport$2(element, target, viewportOffset, boundary, i) {
      let viewport = getIntersectionArea(...commonScrollParents(element, target).map(offsetViewport));
      if (viewportOffset) {
        viewport[dirs[i][2]] += viewportOffset;
        viewport[dirs[i][3]] -= viewportOffset;
      }
      if (boundary) {
        viewport = getIntersectionArea(
          viewport,
          offset(isArray(boundary) ? boundary[i] : boundary)
        );
      }
      return viewport;
    }
    function getScrollArea(element, target, viewportOffset, i) {
      const [prop, axis, start, end] = dirs[i];
      const [scrollElement] = commonScrollParents(element, target);
      const viewport = offsetViewport(scrollElement);
      if (["auto", "scroll"].includes(css(scrollElement, `overflow-${axis}`))) {
        viewport[start] -= scrollElement[`scroll${ucfirst(start)}`];
        viewport[end] = viewport[start] + scrollElement[`scroll${ucfirst(prop)}`];
      }
      viewport[start] += viewportOffset;
      viewport[end] -= viewportOffset;
      return viewport;
    }
    function commonScrollParents(element, target) {
      return overflowParents(target).filter((parent) => parent.contains(element));
    }
    function getIntersectionArea(...rects) {
      let area = {};
      for (const rect of rects) {
        for (const [, , start, end] of dirs) {
          area[start] = Math.max(area[start] || 0, rect[start]);
          area[end] = Math.min(...[area[end], rect[end]].filter(Boolean));
        }
      }
      return area;
    }
    function isWithin(positionA, positionB, i) {
      const [, , start, end] = dirs[i];
      return positionA[start] >= positionB[start] && positionA[end] <= positionB[end];
    }
    function flip(element, target, { offset: offset2, attach }, i) {
      return attachTo(element, target, {
        attach: {
          element: flipAttach(attach.element, i),
          target: flipAttach(attach.target, i)
        },
        offset: flipOffset(offset2, i)
      });
    }
    function flipAxis(element, target, options) {
      return getPosition(element, target, {
        ...options,
        attach: {
          element: options.attach.element.map(flipAttachAxis).reverse(),
          target: options.attach.target.map(flipAttachAxis).reverse()
        },
        offset: options.offset.reverse(),
        placement: options.placement.reverse(),
        recursion: true
      });
    }
    function flipAttach(attach, i) {
      const newAttach = [...attach];
      const index = dirs[i].indexOf(attach[i]);
      if (~index) {
        newAttach[i] = dirs[i][1 - index % 2 + 2];
      }
      return newAttach;
    }
    function flipAttachAxis(prop) {
      for (let i = 0; i < dirs.length; i++) {
        const index = dirs[i].indexOf(prop);
        if (~index) {
          return dirs[1 - i][index % 2 + 2];
        }
      }
    }
    function flipOffset(offset2, i) {
      offset2 = [...offset2];
      offset2[i] *= -1;
      return offset2;
    }

    var util = /*#__PURE__*/Object.freeze({
        __proto__: null,
        $: $,
        $$: $$,
        Animation: Animation,
        Dimensions: Dimensions,
        MouseTracker: MouseTracker,
        Transition: Transition,
        addClass: addClass,
        after: after,
        append: append,
        apply: apply,
        assign: assign,
        attr: attr,
        before: before,
        boxModelAdjust: boxModelAdjust,
        camelize: camelize,
        children: children,
        clamp: clamp,
        createEvent: createEvent,
        css: css,
        data: data,
        dimensions: dimensions$1,
        each: each,
        empty: empty,
        endsWith: endsWith,
        escape: escape,
        fastdom: fastdom,
        filter: filter$1,
        find: find,
        findAll: findAll,
        findIndex: findIndex,
        flipPosition: flipPosition,
        fragment: fragment,
        getCoveringElement: getCoveringElement,
        getEventPos: getEventPos,
        getIndex: getIndex,
        getTargetedElement: getTargetedElement,
        hasAttr: hasAttr,
        hasClass: hasClass,
        hasOwn: hasOwn,
        hasTouch: hasTouch,
        height: height,
        html: html,
        hyphenate: hyphenate,
        inBrowser: inBrowser,
        includes: includes,
        index: index,
        intersectRect: intersectRect,
        isArray: isArray,
        isBoolean: isBoolean,
        isDocument: isDocument,
        isElement: isElement,
        isEmpty: isEmpty,
        isEqual: isEqual,
        isFocusable: isFocusable,
        isFunction: isFunction,
        isInView: isInView,
        isInput: isInput,
        isNode: isNode,
        isNumber: isNumber,
        isNumeric: isNumeric,
        isObject: isObject,
        isPlainObject: isPlainObject,
        isRtl: isRtl,
        isSameSiteAnchor: isSameSiteAnchor,
        isString: isString,
        isTag: isTag,
        isTouch: isTouch,
        isUndefined: isUndefined,
        isVideo: isVideo,
        isVisible: isVisible,
        isVoidElement: isVoidElement,
        isWindow: isWindow,
        last: last,
        matches: matches,
        memoize: memoize,
        mute: mute,
        noop: noop,
        observeIntersection: observeIntersection,
        observeMutation: observeMutation,
        observeResize: observeResize,
        observeViewportResize: observeViewportResize,
        off: off,
        offset: offset,
        offsetPosition: offsetPosition,
        offsetViewport: offsetViewport,
        on: on,
        once: once,
        overflowParents: overflowParents,
        parent: parent,
        parents: parents,
        pause: pause,
        pick: pick,
        play: play,
        pointInRect: pointInRect,
        pointerCancel: pointerCancel,
        pointerDown: pointerDown$1,
        pointerEnter: pointerEnter,
        pointerLeave: pointerLeave,
        pointerMove: pointerMove$1,
        pointerUp: pointerUp$1,
        position: position,
        positionAt: positionAt,
        prepend: prepend,
        propName: propName,
        query: query,
        queryAll: queryAll,
        ready: ready,
        remove: remove$1,
        removeAttr: removeAttr,
        removeClass: removeClass,
        replaceClass: replaceClass,
        scrollIntoView: scrollIntoView,
        scrollParent: scrollParent,
        scrollParents: scrollParents,
        scrolledOver: scrolledOver,
        selFocusable: selFocusable,
        selInput: selInput,
        sortBy: sortBy,
        startsWith: startsWith,
        sumBy: sumBy,
        swap: swap,
        toArray: toArray,
        toBoolean: toBoolean,
        toEventTargets: toEventTargets,
        toFloat: toFloat,
        toNode: toNode,
        toNodes: toNodes,
        toNumber: toNumber,
        toPx: toPx,
        toWindow: toWindow,
        toggleClass: toggleClass,
        trigger: trigger,
        ucfirst: ucfirst,
        uniqueBy: uniqueBy,
        unwrap: unwrap,
        width: width,
        wrapAll: wrapAll,
        wrapInner: wrapInner
    });

    var Class = {
      connected() {
        addClass(this.$el, this.$options.id);
      }
    };

    const units = ["days", "hours", "minutes", "seconds"];
    var countdown = {
      mixins: [Class],
      props: {
        date: String,
        clsWrapper: String,
        role: String
      },
      data: {
        date: "",
        clsWrapper: ".uk-countdown-%unit%",
        role: "timer"
      },
      connected() {
        attr(this.$el, "role", this.role);
        this.date = toFloat(Date.parse(this.$props.date));
        this.end = false;
        this.start();
      },
      disconnected() {
        this.stop();
      },
      events: {
        name: "visibilitychange",
        el: () => document,
        handler() {
          if (document.hidden) {
            this.stop();
          } else {
            this.start();
          }
        }
      },
      methods: {
        start() {
          this.stop();
          this.update();
          if (!this.timer) {
            trigger(this.$el, "countdownstart");
            this.timer = setInterval(this.update, 1e3);
          }
        },
        stop() {
          if (this.timer) {
            clearInterval(this.timer);
            trigger(this.$el, "countdownstop");
            this.timer = null;
          }
        },
        update() {
          const timespan = getTimeSpan(this.date);
          if (!timespan.total) {
            this.stop();
            if (!this.end) {
              trigger(this.$el, "countdownend");
              this.end = true;
            }
          }
          for (const unit of units) {
            const el = $(this.clsWrapper.replace("%unit%", unit), this.$el);
            if (!el) {
              continue;
            }
            let digits = Math.trunc(timespan[unit]).toString().padStart(2, "0");
            if (el.textContent !== digits) {
              digits = digits.split("");
              if (digits.length !== el.children.length) {
                html(el, digits.map(() => "<span></span>").join(""));
              }
              digits.forEach((digit, i) => el.children[i].textContent = digit);
            }
          }
        }
      }
    };
    function getTimeSpan(date) {
      const total = Math.max(0, date - Date.now()) / 1e3;
      return {
        total,
        seconds: total % 60,
        minutes: total / 60 % 60,
        hours: total / 60 / 60 % 24,
        days: total / 60 / 60 / 24
      };
    }

    const strats = {};
    strats.events = strats.watch = strats.observe = strats.created = strats.beforeConnect = strats.connected = strats.beforeDisconnect = strats.disconnected = strats.destroy = concatStrat;
    strats.args = function(parentVal, childVal) {
      return childVal !== false && concatStrat(childVal || parentVal);
    };
    strats.update = function(parentVal, childVal) {
      return sortBy(
        concatStrat(parentVal, isFunction(childVal) ? { read: childVal } : childVal),
        "order"
      );
    };
    strats.props = function(parentVal, childVal) {
      if (isArray(childVal)) {
        const value = {};
        for (const key of childVal) {
          value[key] = String;
        }
        childVal = value;
      }
      return strats.methods(parentVal, childVal);
    };
    strats.computed = strats.methods = function(parentVal, childVal) {
      return childVal ? parentVal ? { ...parentVal, ...childVal } : childVal : parentVal;
    };
    strats.i18n = strats.data = function(parentVal, childVal, vm) {
      if (!vm) {
        if (!childVal) {
          return parentVal;
        }
        if (!parentVal) {
          return childVal;
        }
        return function(vm2) {
          return mergeFnData(parentVal, childVal, vm2);
        };
      }
      return mergeFnData(parentVal, childVal, vm);
    };
    function mergeFnData(parentVal, childVal, vm) {
      return strats.computed(
        isFunction(parentVal) ? parentVal.call(vm, vm) : parentVal,
        isFunction(childVal) ? childVal.call(vm, vm) : childVal
      );
    }
    function concatStrat(parentVal, childVal) {
      parentVal = parentVal && !isArray(parentVal) ? [parentVal] : parentVal;
      return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
    }
    function defaultStrat(parentVal, childVal) {
      return isUndefined(childVal) ? parentVal : childVal;
    }
    function mergeOptions(parent, child, vm) {
      const options = {};
      if (isFunction(child)) {
        child = child.options;
      }
      if (child.extends) {
        parent = mergeOptions(parent, child.extends, vm);
      }
      if (child.mixins) {
        for (const mixin of child.mixins) {
          parent = mergeOptions(parent, mixin, vm);
        }
      }
      for (const key in parent) {
        mergeKey(key);
      }
      for (const key in child) {
        if (!hasOwn(parent, key)) {
          mergeKey(key);
        }
      }
      function mergeKey(key) {
        options[key] = (strats[key] || defaultStrat)(parent[key], child[key], vm);
      }
      return options;
    }
    function parseOptions(options, args = []) {
      try {
        return options ? startsWith(options, "{") ? JSON.parse(options) : args.length && !includes(options, ":") ? { [args[0]]: options } : options.split(";").reduce((options2, option) => {
          const [key, value] = option.split(/:(.*)/);
          if (key && !isUndefined(value)) {
            options2[key.trim()] = value.trim();
          }
          return options2;
        }, {}) : {};
      } catch (e) {
        return {};
      }
    }
    function coerce$1(type, value) {
      if (type === Boolean) {
        return toBoolean(value);
      } else if (type === Number) {
        return toNumber(value);
      } else if (type === "list") {
        return toList(value);
      } else if (type === Object && isString(value)) {
        return parseOptions(value);
      }
      return type ? type(value) : value;
    }
    const listRe = /,(?![^(]*\))/;
    function toList(value) {
      return isArray(value) ? value : isString(value) ? value.split(listRe).map((value2) => isNumeric(value2) ? toNumber(value2) : toBoolean(value2.trim())) : [value];
    }

    function initUpdates(instance) {
      instance._data = {};
      instance._updates = [...instance.$options.update || []];
    }
    function prependUpdate(instance, update) {
      instance._updates.unshift(update);
    }
    function clearUpdateData(instance) {
      instance._data = null;
    }
    function callUpdate(instance, e = "update") {
      if (!instance._connected) {
        return;
      }
      if (!instance._updates.length) {
        return;
      }
      if (!instance._queued) {
        instance._queued = /* @__PURE__ */ new Set();
        fastdom.read(() => {
          if (instance._connected) {
            runUpdates(instance, instance._queued);
          }
          instance._queued = null;
        });
      }
      instance._queued.add(e.type || e);
    }
    function runUpdates(instance, types) {
      for (const { read, write, events = [] } of instance._updates) {
        if (!types.has("update") && !events.some((type) => types.has(type))) {
          continue;
        }
        let result;
        if (read) {
          result = read.call(instance, instance._data, types);
          if (result && isPlainObject(result)) {
            assign(instance._data, result);
          }
        }
        if (write && result !== false) {
          fastdom.write(() => {
            if (instance._connected) {
              write.call(instance, instance._data, types);
            }
          });
        }
      }
    }

    function resize(options) {
      return observe(observeResize, options, "resize");
    }
    function intersection(options) {
      return observe(observeIntersection, options);
    }
    function mutation(options) {
      return observe(observeMutation, options);
    }
    function lazyload(options = {}) {
      return intersection({
        handler: function(entries, observer) {
          const { targets = this.$el, preload = 5 } = options;
          for (const el of toNodes(isFunction(targets) ? targets(this) : targets)) {
            $$('[loading="lazy"]', el).slice(0, preload - 1).forEach((el2) => removeAttr(el2, "loading"));
          }
          for (const el of entries.filter(({ isIntersecting }) => isIntersecting).map(({ target }) => target)) {
            observer.unobserve(el);
          }
        },
        ...options
      });
    }
    function viewport(options) {
      return observe((target, handler) => observeViewportResize(handler), options, "resize");
    }
    function scroll$1(options) {
      return observe(
        (target, handler) => ({
          disconnect: on(toScrollTargets(target), "scroll", handler, { passive: true })
        }),
        options,
        "scroll"
      );
    }
    function swipe(options) {
      return {
        observe(target, handler) {
          return {
            observe: noop,
            unobserve: noop,
            disconnect: on(target, pointerDown$1, handler, { passive: true })
          };
        },
        handler(e) {
          if (!isTouch(e)) {
            return;
          }
          const pos = getEventPos(e);
          const target = "tagName" in e.target ? e.target : parent(e.target);
          once(document, `${pointerUp$1} ${pointerCancel} scroll`, (e2) => {
            const { x, y } = getEventPos(e2);
            if (e2.type !== "scroll" && target && x && Math.abs(pos.x - x) > 100 || y && Math.abs(pos.y - y) > 100) {
              setTimeout(() => {
                trigger(target, "swipe");
                trigger(target, `swipe${swipeDirection(pos.x, pos.y, x, y)}`);
              });
            }
          });
        },
        ...options
      };
    }
    function observe(observe2, options, emit) {
      return {
        observe: observe2,
        handler() {
          callUpdate(this, emit);
        },
        ...options
      };
    }
    function swipeDirection(x1, y1, x2, y2) {
      return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? "Left" : "Right" : y1 - y2 > 0 ? "Up" : "Down";
    }
    function toScrollTargets(elements) {
      return toNodes(elements).map((node) => {
        const { ownerDocument } = node;
        const parent2 = scrollParent(node, true);
        return parent2 === ownerDocument.scrollingElement ? ownerDocument : parent2;
      });
    }

    var Margin = {
      props: {
        margin: String,
        firstColumn: Boolean
      },
      data: {
        margin: "uk-margin-small-top",
        firstColumn: "uk-first-column"
      },
      observe: [
        mutation({
          options: {
            childList: true
          }
        }),
        mutation({
          options: {
            attributes: true,
            attributeFilter: ["style"]
          },
          target: ({ $el }) => [$el, ...children($el)]
        }),
        resize({
          target: ({ $el }) => [$el, ...children($el)]
        })
      ],
      update: {
        read() {
          return {
            rows: getRows(children(this.$el))
          };
        },
        write({ rows }) {
          for (const row of rows) {
            for (const el of row) {
              toggleClass(el, this.margin, rows[0] !== row);
              toggleClass(el, this.firstColumn, row[isRtl ? row.length - 1 : 0] === el);
            }
          }
        },
        events: ["resize"]
      }
    };
    function getRows(elements) {
      const sorted = [[]];
      const withOffset = elements.some(
        (el, i) => i && elements[i - 1].offsetParent !== el.offsetParent
      );
      for (const el of elements) {
        if (!isVisible(el)) {
          continue;
        }
        const offset = getOffset(el, withOffset);
        for (let i = sorted.length - 1; i >= 0; i--) {
          const current = sorted[i];
          if (!current[0]) {
            current.push(el);
            break;
          }
          const offsetCurrent = getOffset(current[0], withOffset);
          if (offset.top >= offsetCurrent.bottom - 1 && offset.top !== offsetCurrent.top) {
            sorted.push([el]);
            break;
          }
          if (offset.bottom - 1 > offsetCurrent.top || offset.top === offsetCurrent.top) {
            let j = current.length - 1;
            for (; j >= 0; j--) {
              const offsetCurrent2 = getOffset(current[j], withOffset);
              if (offset.left >= offsetCurrent2.left) {
                break;
              }
            }
            current.splice(j + 1, 0, el);
            break;
          }
          if (i === 0) {
            sorted.unshift([el]);
            break;
          }
        }
      }
      return sorted;
    }
    function getOffset(element, offset = false) {
      let { offsetTop, offsetLeft, offsetHeight, offsetWidth } = element;
      if (offset) {
        [offsetTop, offsetLeft] = offsetPosition(element);
      }
      return {
        top: offsetTop,
        left: offsetLeft,
        bottom: offsetTop + offsetHeight,
        right: offsetLeft + offsetWidth
      };
    }

    async function slide(action, target, duration) {
      await awaitFrame();
      let nodes = children(target);
      const currentProps = nodes.map((el) => getProps$1(el, true));
      const targetProps = { ...css(target, ["height", "padding"]), display: "block" };
      const targets = nodes.concat(target);
      await Promise.all(targets.map(Transition.cancel));
      css(targets, "transitionProperty", "none");
      await action();
      nodes = nodes.concat(children(target).filter((el) => !includes(nodes, el)));
      await Promise.resolve();
      css(targets, "transitionProperty", "");
      const targetStyle = attr(target, "style");
      const targetPropsTo = css(target, ["height", "padding"]);
      const [propsTo, propsFrom] = getTransitionProps(target, nodes, currentProps);
      const attrsTo = nodes.map((el) => ({ style: attr(el, "style") }));
      nodes.forEach((el, i) => propsFrom[i] && css(el, propsFrom[i]));
      css(target, targetProps);
      trigger(target, "scroll");
      await awaitFrame();
      const transitions = nodes.map((el, i) => parent(el) === target && Transition.start(el, propsTo[i], duration, "ease")).concat(Transition.start(target, targetPropsTo, duration, "ease"));
      try {
        await Promise.all(transitions);
        nodes.forEach((el, i) => {
          attr(el, attrsTo[i]);
          if (parent(el) === target) {
            css(el, "display", propsTo[i].opacity === 0 ? "none" : "");
          }
        });
        attr(target, "style", targetStyle);
      } catch (e) {
        attr(nodes, "style", "");
        resetProps(target, targetProps);
      }
    }
    function getProps$1(el, opacity) {
      const zIndex = css(el, "zIndex");
      return isVisible(el) ? {
        display: "",
        opacity: opacity ? css(el, "opacity") : "0",
        pointerEvents: "none",
        position: "absolute",
        zIndex: zIndex === "auto" ? index(el) : zIndex,
        ...getPositionWithMargin(el)
      } : false;
    }
    function getTransitionProps(target, nodes, currentProps) {
      const propsTo = nodes.map(
        (el, i) => parent(el) && i in currentProps ? currentProps[i] ? isVisible(el) ? getPositionWithMargin(el) : { opacity: 0 } : { opacity: isVisible(el) ? 1 : 0 } : false
      );
      const propsFrom = propsTo.map((props, i) => {
        const from = parent(nodes[i]) === target && (currentProps[i] || getProps$1(nodes[i]));
        if (!from) {
          return false;
        }
        if (!props) {
          delete from.opacity;
        } else if (!("opacity" in props)) {
          const { opacity } = from;
          if (opacity % 1) {
            props.opacity = 1;
          } else {
            delete from.opacity;
          }
        }
        return from;
      });
      return [propsTo, propsFrom];
    }
    function resetProps(el, props) {
      for (const prop in props) {
        css(el, prop, "");
      }
    }
    function getPositionWithMargin(el) {
      const { height, width } = dimensions$1(el);
      return {
        height,
        width,
        transform: "",
        ...position(el),
        ...css(el, ["marginTop", "marginLeft"])
      };
    }
    function awaitFrame() {
      return new Promise((resolve) => requestAnimationFrame(resolve));
    }

    const clsLeave = "uk-transition-leave";
    const clsEnter = "uk-transition-enter";
    function fade(action, target, duration, stagger = 0) {
      const index = transitionIndex(target, true);
      const propsIn = { opacity: 1 };
      const propsOut = { opacity: 0 };
      const wrapIndexFn = (fn) => () => index === transitionIndex(target) ? fn() : Promise.reject();
      const leaveFn = wrapIndexFn(async () => {
        addClass(target, clsLeave);
        await Promise.all(
          getTransitionNodes(target).map(
            (child, i) => new Promise(
              (resolve) => setTimeout(
                () => Transition.start(child, propsOut, duration / 2, "ease").then(
                  resolve
                ),
                i * stagger
              )
            )
          )
        );
        removeClass(target, clsLeave);
      });
      const enterFn = wrapIndexFn(async () => {
        const oldHeight = height(target);
        addClass(target, clsEnter);
        action();
        css(children(target), { opacity: 0 });
        await awaitFrame();
        const nodes = children(target);
        const newHeight = height(target);
        css(target, "alignContent", "flex-start");
        height(target, oldHeight);
        const transitionNodes = getTransitionNodes(target);
        css(nodes, propsOut);
        const transitions = transitionNodes.map(async (child, i) => {
          await awaitTimeout(i * stagger);
          await Transition.start(child, propsIn, duration / 2, "ease");
        });
        if (oldHeight !== newHeight) {
          transitions.push(
            Transition.start(
              target,
              { height: newHeight },
              duration / 2 + transitionNodes.length * stagger,
              "ease"
            )
          );
        }
        await Promise.all(transitions).then(() => {
          removeClass(target, clsEnter);
          if (index === transitionIndex(target)) {
            css(target, { height: "", alignContent: "" });
            css(nodes, { opacity: "" });
            delete target.dataset.transition;
          }
        });
      });
      return hasClass(target, clsLeave) ? waitTransitionend(target).then(enterFn) : hasClass(target, clsEnter) ? waitTransitionend(target).then(leaveFn).then(enterFn) : leaveFn().then(enterFn);
    }
    function transitionIndex(target, next) {
      if (next) {
        target.dataset.transition = 1 + transitionIndex(target);
      }
      return toNumber(target.dataset.transition) || 0;
    }
    function waitTransitionend(target) {
      return Promise.all(
        children(target).filter(Transition.inProgress).map(
          (el) => new Promise((resolve) => once(el, "transitionend transitioncanceled", resolve))
        )
      );
    }
    function getTransitionNodes(target) {
      return getRows(children(target)).flat().filter(isVisible);
    }
    function awaitTimeout(timeout) {
      return new Promise((resolve) => setTimeout(resolve, timeout));
    }

    var Animate = {
      props: {
        duration: Number,
        animation: Boolean
      },
      data: {
        duration: 150,
        animation: "slide"
      },
      methods: {
        animate(action, target = this.$el) {
          const name = this.animation;
          const animationFn = name === "fade" ? fade : name === "delayed-fade" ? (...args) => fade(...args, 40) : name ? slide : () => {
            action();
            return Promise.resolve();
          };
          return animationFn(action, target, this.duration).catch(noop);
        }
      }
    };

    const keyMap = {
      TAB: 9,
      ESC: 27,
      SPACE: 32,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40
    };

    var filter = {
      mixins: [Animate],
      args: "target",
      props: {
        target: String,
        selActive: Boolean
      },
      data: {
        target: "",
        selActive: false,
        attrItem: "uk-filter-control",
        cls: "uk-active",
        duration: 250
      },
      computed: {
        children: ({ target }, $el) => $$(`${target} > *`, $el),
        toggles: ({ attrItem }, $el) => $$(`[${attrItem}],[data-${attrItem}]`, $el)
      },
      watch: {
        toggles(toggles) {
          this.updateState();
          const actives = $$(this.selActive, this.$el);
          for (const toggle of toggles) {
            if (this.selActive !== false) {
              toggleClass(toggle, this.cls, includes(actives, toggle));
            }
            const button = findButton(toggle);
            if (isTag(button, "a")) {
              attr(button, "role", "button");
            }
          }
        },
        children(list, prev) {
          if (prev) {
            this.updateState();
          }
        }
      },
      events: {
        name: "click keydown",
        delegate: ({ attrItem }) => `[${attrItem}],[data-${attrItem}]`,
        handler(e) {
          if (e.type === "keydown" && e.keyCode !== keyMap.SPACE) {
            return;
          }
          if (e.target.closest("a,button")) {
            e.preventDefault();
            this.apply(e.current);
          }
        }
      },
      methods: {
        apply(el) {
          const prevState = this.getState();
          const newState = mergeState(el, this.attrItem, this.getState());
          if (!isEqualState(prevState, newState)) {
            this.setState(newState);
          }
        },
        getState() {
          return this.toggles.filter((item) => hasClass(item, this.cls)).reduce((state, el) => mergeState(el, this.attrItem, state), {
            filter: { "": "" },
            sort: []
          });
        },
        async setState(state, animate = true) {
          state = { filter: { "": "" }, sort: [], ...state };
          trigger(this.$el, "beforeFilter", [this, state]);
          for (const toggle of this.toggles) {
            toggleClass(toggle, this.cls, matchFilter(toggle, this.attrItem, state));
          }
          await Promise.all(
            $$(this.target, this.$el).map((target) => {
              const filterFn = () => applyState(state, target, children(target));
              return animate ? this.animate(filterFn, target) : filterFn();
            })
          );
          trigger(this.$el, "afterFilter", [this]);
        },
        updateState() {
          fastdom.write(() => this.setState(this.getState(), false));
        }
      }
    };
    function getFilter(el, attr2) {
      return parseOptions(data(el, attr2), ["filter"]);
    }
    function isEqualState(stateA, stateB) {
      return ["filter", "sort"].every((prop) => isEqual(stateA[prop], stateB[prop]));
    }
    function applyState(state, target, children) {
      const selector = Object.values(state.filter).join("");
      for (const el of children) {
        css(el, "display", selector && !matches(el, selector) ? "none" : "");
      }
      const [sort, order] = state.sort;
      if (sort) {
        const sorted = sortItems(children, sort, order);
        if (!isEqual(sorted, children)) {
          append(target, sorted);
        }
      }
    }
    function mergeState(el, attr2, state) {
      const { filter, group, sort, order = "asc" } = getFilter(el, attr2);
      if (filter || isUndefined(sort)) {
        if (group) {
          if (filter) {
            delete state.filter[""];
            state.filter[group] = filter;
          } else {
            delete state.filter[group];
            if (isEmpty(state.filter) || "" in state.filter) {
              state.filter = { "": filter || "" };
            }
          }
        } else {
          state.filter = { "": filter || "" };
        }
      }
      if (!isUndefined(sort)) {
        state.sort = [sort, order];
      }
      return state;
    }
    function matchFilter(el, attr2, { filter: stateFilter = { "": "" }, sort: [stateSort, stateOrder] }) {
      const { filter = "", group = "", sort, order = "asc" } = getFilter(el, attr2);
      return isUndefined(sort) ? group in stateFilter && filter === stateFilter[group] || !filter && group && !(group in stateFilter) && !stateFilter[""] : stateSort === sort && stateOrder === order;
    }
    function sortItems(nodes, sort, order) {
      return [...nodes].sort(
        (a, b) => data(a, sort).localeCompare(data(b, sort), void 0, { numeric: true }) * (order === "asc" || -1)
      );
    }
    function findButton(el) {
      return $("a,button", el) || el;
    }

    let prevented;
    function preventBackgroundScroll(el) {
      const off = on(
        el,
        "touchstart",
        (e) => {
          if (e.targetTouches.length !== 1 || matches(e.target, 'input[type="range"')) {
            return;
          }
          let prev = getEventPos(e).y;
          const offMove = on(
            el,
            "touchmove",
            (e2) => {
              const pos = getEventPos(e2).y;
              if (pos === prev) {
                return;
              }
              prev = pos;
              if (!scrollParents(e2.target).some((scrollParent) => {
                if (!el.contains(scrollParent)) {
                  return false;
                }
                let { scrollHeight, clientHeight } = scrollParent;
                return clientHeight < scrollHeight;
              })) {
                e2.preventDefault();
              }
            },
            { passive: false }
          );
          once(el, "scroll touchend touchcanel", offMove, { capture: true });
        },
        { passive: true }
      );
      if (prevented) {
        return off;
      }
      prevented = true;
      const { scrollingElement } = document;
      css(scrollingElement, {
        overflowY: CSS.supports("overflow", "clip") ? "clip" : "hidden",
        touchAction: "none",
        paddingRight: width(window) - scrollingElement.clientWidth || ""
      });
      return () => {
        prevented = false;
        off();
        css(scrollingElement, { overflowY: "", touchAction: "", paddingRight: "" });
      };
    }

    var Container = {
      props: {
        container: Boolean
      },
      data: {
        container: true
      },
      computed: {
        container({ container }) {
          return container === true && this.$container || container && $(container);
        }
      }
    };

    var Togglable = {
      props: {
        cls: Boolean,
        animation: "list",
        duration: Number,
        velocity: Number,
        origin: String,
        transition: String
      },
      data: {
        cls: false,
        animation: [false],
        duration: 200,
        velocity: 0.2,
        origin: false,
        transition: "ease",
        clsEnter: "uk-togglable-enter",
        clsLeave: "uk-togglable-leave"
      },
      computed: {
        hasAnimation: ({ animation }) => !!animation[0],
        hasTransition: ({ animation }) => ["slide", "reveal"].some((transition) => startsWith(animation[0], transition))
      },
      methods: {
        async toggleElement(targets, toggle, animate) {
          try {
            await Promise.all(
              toNodes(targets).map((el) => {
                const show = isBoolean(toggle) ? toggle : !this.isToggled(el);
                if (!trigger(el, `before${show ? "show" : "hide"}`, [this])) {
                  return Promise.reject();
                }
                const promise = (isFunction(animate) ? animate : animate === false || !this.hasAnimation ? toggleInstant : this.hasTransition ? toggleTransition : toggleAnimation)(el, show, this);
                const cls = show ? this.clsEnter : this.clsLeave;
                addClass(el, cls);
                trigger(el, show ? "show" : "hide", [this]);
                const done = () => {
                  removeClass(el, cls);
                  trigger(el, show ? "shown" : "hidden", [this]);
                };
                return promise ? promise.then(done, () => {
                  removeClass(el, cls);
                  return Promise.reject();
                }) : done();
              })
            );
            return true;
          } catch (e) {
            return false;
          }
        },
        isToggled(el = this.$el) {
          el = toNode(el);
          return hasClass(el, this.clsEnter) ? true : hasClass(el, this.clsLeave) ? false : this.cls ? hasClass(el, this.cls.split(" ")[0]) : isVisible(el);
        },
        _toggle(el, toggled) {
          if (!el) {
            return;
          }
          toggled = Boolean(toggled);
          let changed;
          if (this.cls) {
            changed = includes(this.cls, " ") || toggled !== hasClass(el, this.cls);
            changed && toggleClass(el, this.cls, includes(this.cls, " ") ? void 0 : toggled);
          } else {
            changed = toggled === el.hidden;
            changed && (el.hidden = !toggled);
          }
          $$("[autofocus]", el).some((el2) => isVisible(el2) ? el2.focus() || true : el2.blur());
          if (changed) {
            trigger(el, "toggled", [toggled, this]);
          }
        }
      }
    };
    function toggleInstant(el, show, { _toggle }) {
      Animation.cancel(el);
      Transition.cancel(el);
      return _toggle(el, show);
    }
    async function toggleTransition(el, show, { animation, duration, velocity, transition, _toggle }) {
      var _a;
      const [mode = "reveal", startProp = "top"] = ((_a = animation[0]) == null ? void 0 : _a.split("-")) || [];
      const dirs = [
        ["left", "right"],
        ["top", "bottom"]
      ];
      const dir = dirs[includes(dirs[0], startProp) ? 0 : 1];
      const end = dir[1] === startProp;
      const props = ["width", "height"];
      const dimProp = props[dirs.indexOf(dir)];
      const marginProp = `margin-${dir[0]}`;
      const marginStartProp = `margin-${startProp}`;
      let currentDim = dimensions$1(el)[dimProp];
      const inProgress = Transition.inProgress(el);
      await Transition.cancel(el);
      if (show) {
        _toggle(el, true);
      }
      const prevProps = Object.fromEntries(
        [
          "padding",
          "border",
          "width",
          "height",
          "minWidth",
          "minHeight",
          "overflowY",
          "overflowX",
          marginProp,
          marginStartProp
        ].map((key) => [key, el.style[key]])
      );
      const dim = dimensions$1(el);
      const currentMargin = toFloat(css(el, marginProp));
      const marginStart = toFloat(css(el, marginStartProp));
      const endDim = dim[dimProp] + marginStart;
      if (!inProgress && !show) {
        currentDim += marginStart;
      }
      const [wrapper] = wrapInner(el, "<div>");
      css(wrapper, {
        boxSizing: "border-box",
        height: dim.height,
        width: dim.width,
        ...css(el, [
          "overflow",
          "padding",
          "borderTop",
          "borderRight",
          "borderBottom",
          "borderLeft",
          "borderImage",
          marginStartProp
        ])
      });
      css(el, {
        padding: 0,
        border: 0,
        minWidth: 0,
        minHeight: 0,
        [marginStartProp]: 0,
        width: dim.width,
        height: dim.height,
        overflow: "hidden",
        [dimProp]: currentDim
      });
      const percent = currentDim / endDim;
      duration = (velocity * endDim + duration) * (show ? 1 - percent : percent);
      const endProps = { [dimProp]: show ? endDim : 0 };
      if (end) {
        css(el, marginProp, endDim - currentDim + currentMargin);
        endProps[marginProp] = show ? currentMargin : endDim + currentMargin;
      }
      if (!end ^ mode === "reveal") {
        css(wrapper, marginProp, -endDim + currentDim);
        Transition.start(wrapper, { [marginProp]: show ? 0 : -endDim }, duration, transition);
      }
      try {
        await Transition.start(el, endProps, duration, transition);
      } finally {
        css(el, prevProps);
        unwrap(wrapper.firstChild);
        if (!show) {
          _toggle(el, false);
        }
      }
    }
    function toggleAnimation(el, show, cmp) {
      const { animation, duration, _toggle } = cmp;
      if (show) {
        _toggle(el, true);
        return Animation.in(el, animation[0], duration, cmp.origin);
      }
      return Animation.out(el, animation[1] || animation[0], duration, cmp.origin).then(
        () => _toggle(el, false)
      );
    }

    const active$1 = [];
    var Modal = {
      mixins: [Class, Container, Togglable],
      props: {
        selPanel: String,
        selClose: String,
        escClose: Boolean,
        bgClose: Boolean,
        stack: Boolean,
        role: String
      },
      data: {
        cls: "uk-open",
        escClose: true,
        bgClose: true,
        overlay: true,
        stack: false,
        role: "dialog"
      },
      computed: {
        panel: ({ selPanel }, $el) => $(selPanel, $el),
        transitionElement() {
          return this.panel;
        },
        bgClose({ bgClose }) {
          return bgClose && this.panel;
        }
      },
      connected() {
        attr(this.panel || this.$el, "role", this.role);
        if (this.overlay) {
          attr(this.panel || this.$el, "aria-modal", true);
        }
      },
      beforeDisconnect() {
        if (includes(active$1, this)) {
          this.toggleElement(this.$el, false, false);
        }
      },
      events: [
        {
          name: "click",
          delegate: ({ selClose }) => `${selClose},a[href*="#"]`,
          handler(e) {
            const { current, defaultPrevented } = e;
            const { hash } = current;
            if (!defaultPrevented && hash && isSameSiteAnchor(current) && !this.$el.contains($(hash))) {
              this.hide();
            } else if (matches(current, this.selClose)) {
              e.preventDefault();
              this.hide();
            }
          }
        },
        {
          name: "toggle",
          self: true,
          handler(e) {
            if (e.defaultPrevented) {
              return;
            }
            e.preventDefault();
            if (this.isToggled() === includes(active$1, this)) {
              this.toggle();
            }
          }
        },
        {
          name: "beforeshow",
          self: true,
          handler(e) {
            if (includes(active$1, this)) {
              return false;
            }
            if (!this.stack && active$1.length) {
              Promise.all(active$1.map((modal) => modal.hide())).then(this.show);
              e.preventDefault();
            } else {
              active$1.push(this);
            }
          }
        },
        {
          name: "show",
          self: true,
          handler() {
            if (this.stack) {
              css(this.$el, "zIndex", toFloat(css(this.$el, "zIndex")) + active$1.length);
            }
            const handlers = [
              this.overlay && preventBackgroundFocus(this),
              this.overlay && preventBackgroundScroll(this.$el),
              this.bgClose && listenForBackgroundClose$1(this),
              this.escClose && listenForEscClose$1(this)
            ];
            once(
              this.$el,
              "hidden",
              () => handlers.forEach((handler) => handler && handler()),
              { self: true }
            );
            addClass(document.documentElement, this.clsPage);
          }
        },
        {
          name: "shown",
          self: true,
          handler() {
            if (!isFocusable(this.$el)) {
              attr(this.$el, "tabindex", "-1");
            }
            if (!matches(this.$el, ":focus-within")) {
              this.$el.focus();
            }
          }
        },
        {
          name: "hidden",
          self: true,
          handler() {
            if (includes(active$1, this)) {
              active$1.splice(active$1.indexOf(this), 1);
            }
            css(this.$el, "zIndex", "");
            if (!active$1.some((modal) => modal.clsPage === this.clsPage)) {
              removeClass(document.documentElement, this.clsPage);
            }
          }
        }
      ],
      methods: {
        toggle() {
          return this.isToggled() ? this.hide() : this.show();
        },
        show() {
          if (this.container && parent(this.$el) !== this.container) {
            append(this.container, this.$el);
            return new Promise(
              (resolve) => requestAnimationFrame(() => this.show().then(resolve))
            );
          }
          return this.toggleElement(this.$el, true, animate$1);
        },
        hide() {
          return this.toggleElement(this.$el, false, animate$1);
        }
      }
    };
    function animate$1(el, show, { transitionElement, _toggle }) {
      return new Promise(
        (resolve, reject) => once(el, "show hide", () => {
          var _a;
          (_a = el._reject) == null ? void 0 : _a.call(el);
          el._reject = reject;
          _toggle(el, show);
          const off = once(
            transitionElement,
            "transitionstart",
            () => {
              once(transitionElement, "transitionend transitioncancel", resolve, {
                self: true
              });
              clearTimeout(timer);
            },
            { self: true }
          );
          const timer = setTimeout(
            () => {
              off();
              resolve();
            },
            toMs(css(transitionElement, "transitionDuration"))
          );
        })
      ).then(() => delete el._reject);
    }
    function toMs(time) {
      return time ? endsWith(time, "ms") ? toFloat(time) : toFloat(time) * 1e3 : 0;
    }
    function preventBackgroundFocus(modal) {
      return on(document, "focusin", (e) => {
        if (last(active$1) === modal && !modal.$el.contains(e.target)) {
          modal.$el.focus();
        }
      });
    }
    function listenForBackgroundClose$1(modal) {
      return on(document, pointerDown$1, ({ target }) => {
        if (last(active$1) !== modal || modal.overlay && !modal.$el.contains(target) || modal.panel.contains(target)) {
          return;
        }
        once(
          document,
          `${pointerUp$1} ${pointerCancel} scroll`,
          ({ defaultPrevented, type, target: newTarget }) => {
            if (!defaultPrevented && type === pointerUp$1 && target === newTarget) {
              modal.hide();
            }
          },
          true
        );
      });
    }
    function listenForEscClose$1(modal) {
      return on(document, "keydown", (e) => {
        if (e.keyCode === 27 && last(active$1) === modal) {
          modal.hide();
        }
      });
    }

    var Animations$2 = {
      slide: {
        show(dir) {
          return [{ transform: translate(dir * -100) }, { transform: translate() }];
        },
        percent(current) {
          return translated(current);
        },
        translate(percent, dir) {
          return [
            { transform: translate(dir * -100 * percent) },
            { transform: translate(dir * 100 * (1 - percent)) }
          ];
        }
      }
    };
    function translated(el) {
      return Math.abs(new DOMMatrix(css(el, "transform")).m41 / el.offsetWidth);
    }
    function translate(value = 0, unit = "%") {
      value += value ? unit : "";
      return `translate3d(${value}, 0, 0)`;
    }
    function scale3d(value) {
      return `scale3d(${value}, ${value}, 1)`;
    }

    function Transitioner$1(prev, next, dir, { animation, easing }) {
      const { percent, translate, show = noop } = animation;
      const props = show(dir);
      const { promise, resolve } = withResolvers();
      return {
        dir,
        show(duration, percent2 = 0, linear) {
          const timing = linear ? "linear" : easing;
          duration -= Math.round(duration * clamp(percent2, -1, 1));
          this.translate(percent2);
          triggerUpdate(next, "itemin", { percent: percent2, duration, timing, dir });
          triggerUpdate(prev, "itemout", { percent: 1 - percent2, duration, timing, dir });
          Promise.all([
            Transition.start(next, props[1], duration, timing),
            Transition.start(prev, props[0], duration, timing)
          ]).then(() => {
            this.reset();
            resolve();
          }, noop);
          return promise;
        },
        cancel() {
          return Transition.cancel([next, prev]);
        },
        reset() {
          for (const prop in props[0]) {
            css([next, prev], prop, "");
          }
        },
        async forward(duration, percent2 = this.percent()) {
          await this.cancel();
          return this.show(duration, percent2, true);
        },
        translate(percent2) {
          this.reset();
          const props2 = translate(percent2, dir);
          css(next, props2[1]);
          css(prev, props2[0]);
          triggerUpdate(next, "itemtranslatein", { percent: percent2, dir });
          triggerUpdate(prev, "itemtranslateout", { percent: 1 - percent2, dir });
        },
        percent() {
          return percent(prev || next, next, dir);
        },
        getDistance() {
          return prev == null ? void 0 : prev.offsetWidth;
        }
      };
    }
    function triggerUpdate(el, type, data) {
      trigger(el, createEvent(type, false, false, data));
    }
    function withResolvers() {
      let resolve;
      return { promise: new Promise((res) => resolve = res), resolve };
    }

    var I18n = {
      props: {
        i18n: Object
      },
      data: {
        i18n: null
      },
      methods: {
        t(key, ...params) {
          var _a, _b, _c;
          let i = 0;
          return ((_c = ((_a = this.i18n) == null ? void 0 : _a[key]) || ((_b = this.$options.i18n) == null ? void 0 : _b[key])) == null ? void 0 : _c.replace(
            /%s/g,
            () => params[i++] || ""
          )) || "";
        }
      }
    };

    var SliderAutoplay = {
      props: {
        autoplay: Boolean,
        autoplayInterval: Number,
        pauseOnHover: Boolean
      },
      data: {
        autoplay: false,
        autoplayInterval: 7e3,
        pauseOnHover: true
      },
      connected() {
        attr(this.list, "aria-live", this.autoplay ? "off" : "polite");
        this.autoplay && this.startAutoplay();
      },
      disconnected() {
        this.stopAutoplay();
      },
      update() {
        attr(this.slides, "tabindex", "-1");
      },
      events: [
        {
          name: "visibilitychange",
          el: () => document,
          filter: ({ autoplay }) => autoplay,
          handler() {
            if (document.hidden) {
              this.stopAutoplay();
            } else {
              this.startAutoplay();
            }
          }
        }
      ],
      methods: {
        startAutoplay() {
          this.stopAutoplay();
          this.interval = setInterval(() => {
            if (!(this.stack.length || this.draggable && matches(this.$el, ":focus-within") && !matches(this.$el, ":focus") || this.pauseOnHover && matches(this.$el, ":hover"))) {
              this.show("next");
            }
          }, this.autoplayInterval);
        },
        stopAutoplay() {
          clearInterval(this.interval);
        }
      }
    };

    const pointerOptions = { passive: false, capture: true };
    const pointerUpOptions = { passive: true, capture: true };
    const pointerDown = "touchstart mousedown";
    const pointerMove = "touchmove mousemove";
    const pointerUp = "touchend touchcancel mouseup click input scroll";
    const preventClick = (e) => e.preventDefault();
    var SliderDrag = {
      props: {
        draggable: Boolean
      },
      data: {
        draggable: true,
        threshold: 10
      },
      created() {
        for (const key of ["start", "move", "end"]) {
          const fn = this[key];
          this[key] = (e) => {
            const pos = getEventPos(e).x * (isRtl ? -1 : 1);
            this.prevPos = pos === this.pos ? this.prevPos : this.pos;
            this.pos = pos;
            fn(e);
          };
        }
      },
      events: [
        {
          name: pointerDown,
          passive: true,
          delegate: ({ selList }) => `${selList} > *`,
          handler(e) {
            if (!this.draggable || this.parallax || !isTouch(e) && hasSelectableText(e.target) || e.target.closest(selInput) || e.button > 0 || this.length < 2) {
              return;
            }
            this.start(e);
          }
        },
        {
          name: "dragstart",
          handler(e) {
            e.preventDefault();
          }
        },
        {
          // iOS workaround for slider stopping if swiping fast
          name: pointerMove,
          el: ({ list }) => list,
          handler: noop,
          ...pointerOptions
        }
      ],
      methods: {
        start() {
          this.drag = this.pos;
          if (this._transitioner) {
            this.percent = this._transitioner.percent();
            this.drag += this._transitioner.getDistance() * this.percent * this.dir;
            this._transitioner.cancel();
            this._transitioner.translate(this.percent);
            this.dragging = true;
            this.stack = [];
          } else {
            this.prevIndex = this.index;
          }
          on(document, pointerMove, this.move, pointerOptions);
          on(document, pointerUp, this.end, pointerUpOptions);
          css(this.list, "userSelect", "none");
        },
        move(e) {
          const distance = this.pos - this.drag;
          if (distance === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(distance) < this.threshold) {
            return;
          }
          if (!this.dragging) {
            on(this.list, "click", preventClick, pointerOptions);
          }
          e.cancelable && e.preventDefault();
          this.dragging = true;
          this.dir = distance < 0 ? 1 : -1;
          let { slides, prevIndex } = this;
          let dis = Math.abs(distance);
          let nextIndex = this.getIndex(prevIndex + this.dir);
          let width = getDistance.call(this, prevIndex, nextIndex);
          while (nextIndex !== prevIndex && dis > width) {
            this.drag -= width * this.dir;
            prevIndex = nextIndex;
            dis -= width;
            nextIndex = this.getIndex(prevIndex + this.dir);
            width = getDistance.call(this, prevIndex, nextIndex);
          }
          this.percent = dis / width;
          const prev = slides[prevIndex];
          const next = slides[nextIndex];
          const changed = this.index !== nextIndex;
          const edge = prevIndex === nextIndex;
          let itemShown;
          for (const i of [this.index, this.prevIndex]) {
            if (!includes([nextIndex, prevIndex], i)) {
              trigger(slides[i], "itemhidden", [this]);
              if (edge) {
                itemShown = true;
                this.prevIndex = prevIndex;
              }
            }
          }
          if (this.index === prevIndex && this.prevIndex !== prevIndex || itemShown) {
            trigger(slides[this.index], "itemshown", [this]);
          }
          if (changed) {
            this.prevIndex = prevIndex;
            this.index = nextIndex;
            if (!edge) {
              trigger(prev, "beforeitemhide", [this]);
              trigger(prev, "itemhide", [this]);
            }
            trigger(next, "beforeitemshow", [this]);
            trigger(next, "itemshow", [this]);
          }
          this._transitioner = this._translate(Math.abs(this.percent), prev, !edge && next);
        },
        end() {
          off(document, pointerMove, this.move, pointerOptions);
          off(document, pointerUp, this.end, pointerUpOptions);
          if (this.dragging) {
            this.dragging = null;
            if (this.index === this.prevIndex) {
              this.percent = 1 - this.percent;
              this.dir *= -1;
              this._show(false, this.index, true);
              this._transitioner = null;
            } else {
              const dirChange = (isRtl ? this.dir * (isRtl ? 1 : -1) : this.dir) < 0 === this.prevPos > this.pos;
              this.index = dirChange ? this.index : this.prevIndex;
              if (dirChange) {
                this.percent = 1 - this.percent;
              }
              this.show(
                this.dir > 0 && !dirChange || this.dir < 0 && dirChange ? "next" : "previous",
                true
              );
            }
          }
          setTimeout(() => off(this.list, "click", preventClick, pointerOptions));
          css(this.list, { userSelect: "" });
          this.drag = this.percent = null;
        }
      }
    };
    function getDistance(prev, next) {
      return this._getTransitioner(prev, prev !== next && next).getDistance() || this.slides[prev].offsetWidth;
    }
    function hasSelectableText(el) {
      return css(el, "userSelect") !== "none" && toArray(el.childNodes).some((el2) => el2.nodeType === 3 && el2.textContent.trim());
    }

    function initWatches(instance) {
      instance._watches = [];
      for (const watches of instance.$options.watch || []) {
        for (const [name, watch] of Object.entries(watches)) {
          registerWatch(instance, watch, name);
        }
      }
      instance._initial = true;
    }
    function registerWatch(instance, watch, name) {
      instance._watches.push({
        name,
        ...isPlainObject(watch) ? watch : { handler: watch }
      });
    }
    function runWatches(instance, values) {
      for (const { name, handler, immediate = true } of instance._watches) {
        if (instance._initial && immediate || hasOwn(values, name) && !isEqual(values[name], instance[name])) {
          handler.call(instance, instance[name], values[name]);
        }
      }
      instance._initial = false;
    }

    function initComputed(instance) {
      const { computed } = instance.$options;
      instance._computed = {};
      if (computed) {
        for (const key in computed) {
          registerComputed(instance, key, computed[key]);
        }
      }
    }
    const mutationOptions = { subtree: true, childList: true };
    function registerComputed(instance, key, cb) {
      instance._hasComputed = true;
      Object.defineProperty(instance, key, {
        enumerable: true,
        get() {
          const { _computed, $props, $el } = instance;
          if (!hasOwn(_computed, key)) {
            _computed[key] = (cb.get || cb).call(instance, $props, $el);
            if (cb.observe && instance._computedObserver) {
              const selector = cb.observe.call(instance, $props);
              instance._computedObserver.observe(
                ["~", "+", "-"].includes(selector[0]) ? $el.parentElement : $el.getRootNode(),
                mutationOptions
              );
            }
          }
          return _computed[key];
        },
        set(value) {
          const { _computed } = instance;
          _computed[key] = cb.set ? cb.set.call(instance, value) : value;
          if (isUndefined(_computed[key])) {
            delete _computed[key];
          }
        }
      });
    }
    function initComputedUpdates(instance) {
      if (!instance._hasComputed) {
        return;
      }
      prependUpdate(instance, {
        read: () => runWatches(instance, resetComputed(instance)),
        events: ["resize", "computed"]
      });
      instance._computedObserver = observeMutation(
        instance.$el,
        () => callUpdate(instance, "computed"),
        mutationOptions
      );
    }
    function disconnectComputedUpdates(instance) {
      var _a;
      (_a = instance._computedObserver) == null ? void 0 : _a.disconnect();
      delete instance._computedObserver;
      resetComputed(instance);
    }
    function resetComputed(instance) {
      const values = { ...instance._computed };
      instance._computed = {};
      return values;
    }

    function initEvents(instance) {
      instance._events = [];
      for (const event of instance.$options.events || []) {
        if (hasOwn(event, "handler")) {
          registerEvent(instance, event);
        } else {
          for (const key in event) {
            registerEvent(instance, event[key], key);
          }
        }
      }
    }
    function unbindEvents(instance) {
      instance._events.forEach((unbind) => unbind());
      delete instance._events;
    }
    function registerEvent(instance, event, key) {
      let { name, el, handler, capture, passive, delegate, filter, self } = isPlainObject(event) ? event : { name: key, handler: event };
      el = isFunction(el) ? el.call(instance, instance) : el || instance.$el;
      if (!el || isArray(el) && !el.length || filter && !filter.call(instance, instance)) {
        return;
      }
      instance._events.push(
        on(
          el,
          name,
          delegate ? isString(delegate) ? delegate : delegate.call(instance, instance) : null,
          isString(handler) ? instance[handler] : handler.bind(instance),
          { passive, capture, self }
        )
      );
    }

    function initObservers(instance) {
      instance._observers = [];
      for (const observer of instance.$options.observe || []) {
        registerObservable(instance, observer);
      }
    }
    function registerObserver(instance, ...observer) {
      instance._observers.push(...observer);
    }
    function disconnectObservers(instance) {
      for (const observer of instance._observers) {
        observer.disconnect();
      }
    }
    function registerObservable(instance, observable) {
      let { observe, target = instance.$el, handler, options, filter, args } = observable;
      if (filter && !filter.call(instance, instance)) {
        return;
      }
      const key = `_observe${instance._observers.length}`;
      if (isFunction(target) && !hasOwn(instance, key)) {
        registerComputed(instance, key, () => {
          const targets2 = target.call(instance, instance);
          return isArray(targets2) ? toNodes(targets2) : targets2;
        });
      }
      handler = isString(handler) ? instance[handler] : handler.bind(instance);
      if (isFunction(options)) {
        options = options.call(instance, instance);
      }
      const targets = hasOwn(instance, key) ? instance[key] : target;
      const observer = observe(targets, handler, options, args);
      if (isFunction(target) && isArray(instance[key])) {
        registerWatch(
          instance,
          { handler: updateTargets(observer, options), immediate: false },
          key
        );
      }
      registerObserver(instance, observer);
    }
    function updateTargets(observer, options) {
      return (targets, prev) => {
        for (const target of prev) {
          if (!includes(targets, target)) {
            if (observer.unobserve) {
              observer.unobserve(target);
            } else if (observer.observe) {
              observer.disconnect();
            }
          }
        }
        for (const target of targets) {
          if (!includes(prev, target) || !observer.unobserve) {
            observer.observe(target, options);
          }
        }
      };
    }

    function initProps(instance) {
      const { $options, $props } = instance;
      const props = getProps($options);
      assign($props, props);
      const { computed, methods } = $options;
      for (let key in $props) {
        if (key in props && (!computed || !hasOwn(computed, key)) && (!methods || !hasOwn(methods, key))) {
          instance[key] = $props[key];
        }
      }
    }
    function getProps(opts) {
      const data$1 = {};
      const { args = [], props = {}, el, id } = opts;
      if (!props) {
        return data$1;
      }
      for (const key in props) {
        const prop = hyphenate(key);
        let value = data(el, prop);
        if (isUndefined(value)) {
          continue;
        }
        value = props[key] === Boolean && value === "" ? true : coerce$1(props[key], value);
        if (prop === "target" && startsWith(value, "_")) {
          continue;
        }
        data$1[key] = value;
      }
      const options = parseOptions(data(el, id), args);
      for (const key in options) {
        const prop = camelize(key);
        if (!isUndefined(props[prop])) {
          data$1[prop] = coerce$1(props[prop], options[key]);
        }
      }
      return data$1;
    }
    const getAttributes = memoize((id, props) => {
      const attributes = Object.keys(props);
      const filter = attributes.concat(id).map((key) => [hyphenate(key), `data-${hyphenate(key)}`]).flat();
      return { attributes, filter };
    });
    function initPropsObserver(instance) {
      const { $options, $props } = instance;
      const { id, props, el } = $options;
      if (!props) {
        return;
      }
      const { attributes, filter } = getAttributes(id, props);
      const observer = new MutationObserver((records) => {
        const data = getProps($options);
        if (records.some(({ attributeName }) => {
          const prop = attributeName.replace("data-", "");
          return (prop === id ? attributes : [camelize(prop), camelize(attributeName)]).some(
            (prop2) => !isUndefined(data[prop2]) && data[prop2] !== $props[prop2]
          );
        })) {
          instance.$reset();
        }
      });
      observer.observe(el, {
        attributes: true,
        attributeFilter: filter
      });
      registerObserver(instance, observer);
    }

    function callHook(instance, hook) {
      var _a;
      (_a = instance.$options[hook]) == null ? void 0 : _a.forEach((handler) => handler.call(instance));
    }
    function callConnected(instance) {
      if (instance._connected) {
        return;
      }
      initProps(instance);
      callHook(instance, "beforeConnect");
      instance._connected = true;
      initEvents(instance);
      initUpdates(instance);
      initWatches(instance);
      initObservers(instance);
      initPropsObserver(instance);
      initComputedUpdates(instance);
      callHook(instance, "connected");
      callUpdate(instance);
    }
    function callDisconnected(instance) {
      if (!instance._connected) {
        return;
      }
      callHook(instance, "beforeDisconnect");
      unbindEvents(instance);
      clearUpdateData(instance);
      disconnectObservers(instance);
      disconnectComputedUpdates(instance);
      callHook(instance, "disconnected");
      instance._connected = false;
    }

    let uid = 0;
    function init$1(instance, options = {}) {
      options.data = normalizeData(options, instance.constructor.options);
      instance.$options = mergeOptions(instance.constructor.options, options, instance);
      instance.$props = {};
      instance._uid = uid++;
      initData(instance);
      initMethods(instance);
      initComputed(instance);
      callHook(instance, "created");
      if (options.el) {
        instance.$mount(options.el);
      }
    }
    function initData(instance) {
      const { data = {} } = instance.$options;
      for (const key in data) {
        instance.$props[key] = instance[key] = data[key];
      }
    }
    function initMethods(instance) {
      const { methods } = instance.$options;
      if (methods) {
        for (const key in methods) {
          instance[key] = methods[key].bind(instance);
        }
      }
    }
    function normalizeData({ data = {} }, { args = [], props = {} }) {
      if (isArray(data)) {
        data = data.slice(0, args.length).reduce((data2, value, index) => {
          if (isPlainObject(value)) {
            assign(data2, value);
          } else {
            data2[args[index]] = value;
          }
          return data2;
        }, {});
      }
      for (const key in data) {
        if (isUndefined(data[key])) {
          delete data[key];
        } else if (props[key]) {
          data[key] = coerce$1(props[key], data[key]);
        }
      }
      return data;
    }

    const App = function(options) {
      init$1(this, options);
    };
    App.util = util;
    App.options = {};
    App.version = "3.21.9-dev.9668ac3c9";

    const PREFIX = "uk-";
    const DATA = "__uikit__";
    const components$2 = {};
    function component(name, options) {
      var _a, _b;
      const id = PREFIX + hyphenate(name);
      if (!options) {
        if (!components$2[id].options) {
          components$2[id] = App.extend(components$2[id]);
        }
        return components$2[id];
      }
      name = camelize(name);
      App[name] = (element, data) => createComponent(name, element, data);
      const opt = (_a = options.options) != null ? _a : { ...options };
      opt.id = id;
      opt.name = name;
      (_b = opt.install) == null ? void 0 : _b.call(opt, App, opt, name);
      if (App._initialized && !opt.functional) {
        requestAnimationFrame(() => createComponent(name, `[${id}],[data-${id}]`));
      }
      return components$2[id] = opt;
    }
    function createComponent(name, element, data, ...args) {
      const Component = component(name);
      return Component.options.functional ? new Component({ data: isPlainObject(element) ? element : [element, data, ...args] }) : element ? $$(element).map(init)[0] : init();
      function init(element2) {
        const instance = getComponent(element2, name);
        if (instance) {
          if (data) {
            instance.$destroy();
          } else {
            return instance;
          }
        }
        return new Component({ el: element2, data });
      }
    }
    function getComponents(element) {
      return (element == null ? void 0 : element[DATA]) || {};
    }
    function getComponent(element, name) {
      return getComponents(element)[name];
    }
    function attachToElement(element, instance) {
      if (!element[DATA]) {
        element[DATA] = {};
      }
      element[DATA][instance.$options.name] = instance;
    }
    function detachFromElement(element, instance) {
      var _a;
      (_a = element[DATA]) == null ? true : delete _a[instance.$options.name];
      if (isEmpty(element[DATA])) {
        delete element[DATA];
      }
    }

    function globalApi(App) {
      App.component = component;
      App.getComponents = getComponents;
      App.getComponent = getComponent;
      App.update = update;
      App.use = function(plugin) {
        if (plugin.installed) {
          return;
        }
        plugin.call(null, this);
        plugin.installed = true;
        return this;
      };
      App.mixin = function(mixin, component2) {
        component2 = (isString(component2) ? this.component(component2) : component2) || this;
        component2.options = mergeOptions(component2.options, mixin);
      };
      App.extend = function(options) {
        options || (options = {});
        const Super = this;
        const Sub = function UIkitComponent(options2) {
          init$1(this, options2);
        };
        Sub.prototype = Object.create(Super.prototype);
        Sub.prototype.constructor = Sub;
        Sub.options = mergeOptions(Super.options, options);
        Sub.super = Super;
        Sub.extend = Super.extend;
        return Sub;
      };
      let container;
      Object.defineProperty(App, "container", {
        get() {
          return container || document.body;
        },
        set(element) {
          container = $(element);
        }
      });
    }
    function update(element, e) {
      element = element ? toNode(element) : document.body;
      for (const parentEl of parents(element).reverse()) {
        updateElement(parentEl, e);
      }
      apply(element, (element2) => updateElement(element2, e));
    }
    function updateElement(element, e) {
      const components = getComponents(element);
      for (const name in components) {
        callUpdate(components[name], e);
      }
    }

    function instanceApi(App) {
      App.prototype.$mount = function(el) {
        const instance = this;
        attachToElement(el, instance);
        instance.$options.el = el;
        if (document.contains(el)) {
          callConnected(instance);
        }
      };
      App.prototype.$destroy = function(removeEl = false) {
        const instance = this;
        const { el } = instance.$options;
        if (el) {
          callDisconnected(instance);
        }
        callHook(instance, "destroy");
        detachFromElement(el, instance);
        if (removeEl) {
          remove$1(instance.$el);
        }
      };
      App.prototype.$create = createComponent;
      App.prototype.$emit = function(e) {
        callUpdate(this, e);
      };
      App.prototype.$update = function(element = this.$el, e) {
        update(element, e);
      };
      App.prototype.$reset = function() {
        callDisconnected(this);
        callConnected(this);
      };
      App.prototype.$getComponent = getComponent;
      Object.defineProperties(App.prototype, {
        $el: {
          get() {
            return this.$options.el;
          }
        },
        $container: Object.getOwnPropertyDescriptor(App, "container")
      });
    }
    let id = 1;
    function generateId(instance, el = null) {
      return (el == null ? void 0 : el.id) || `${instance.$options.id}-${id++}`;
    }

    var SliderNav = {
      i18n: {
        next: "Next slide",
        previous: "Previous slide",
        slideX: "Slide %s",
        slideLabel: "%s of %s",
        role: "String"
      },
      data: {
        selNav: false,
        role: "region"
      },
      computed: {
        nav: ({ selNav }, $el) => $(selNav, $el),
        navChildren() {
          return children(this.nav);
        },
        selNavItem: ({ attrItem }) => `[${attrItem}],[data-${attrItem}]`,
        navItems(_, $el) {
          return $$(this.selNavItem, $el);
        }
      },
      watch: {
        nav(nav, prev) {
          attr(nav, "role", "tablist");
          this.padNavitems();
          if (prev) {
            this.$emit();
          }
        },
        list(list) {
          if (isTag(list, "ul")) {
            attr(list, "role", "presentation");
          }
        },
        navChildren(children2) {
          attr(children2, "role", "presentation");
          this.padNavitems();
          this.updateNav();
        },
        navItems(items) {
          for (const el of items) {
            const cmd = data(el, this.attrItem);
            const button = $("a,button", el) || el;
            let ariaLabel;
            let ariaControls = null;
            if (isNumeric(cmd)) {
              const item = toNumber(cmd);
              const slide = this.slides[item];
              if (slide) {
                if (!slide.id) {
                  slide.id = generateId(this, slide);
                }
                ariaControls = slide.id;
              }
              ariaLabel = this.t("slideX", toFloat(cmd) + 1);
              attr(button, "role", "tab");
            } else {
              if (this.list) {
                if (!this.list.id) {
                  this.list.id = generateId(this, this.list);
                }
                ariaControls = this.list.id;
              }
              ariaLabel = this.t(cmd);
            }
            attr(button, {
              "aria-controls": ariaControls,
              "aria-label": attr(button, "aria-label") || ariaLabel
            });
          }
        },
        slides(slides) {
          slides.forEach(
            (slide, i) => attr(slide, {
              role: this.nav ? "tabpanel" : "group",
              "aria-label": this.t("slideLabel", i + 1, this.length),
              "aria-roledescription": this.nav ? null : "slide"
            })
          );
          this.padNavitems();
        }
      },
      connected() {
        attr(this.$el, {
          role: this.role,
          "aria-roledescription": "carousel"
        });
      },
      update: [
        {
          write() {
            this.navItems.concat(this.nav).forEach((el) => el && (el.hidden = !this.maxIndex));
            this.updateNav();
          },
          events: ["resize"]
        }
      ],
      events: [
        {
          name: "click keydown",
          delegate: ({ selNavItem }) => selNavItem,
          filter: ({ parallax }) => !parallax,
          handler(e) {
            if (e.target.closest("a,button") && (e.type === "click" || e.keyCode === keyMap.SPACE)) {
              e.preventDefault();
              this.show(data(e.current, this.attrItem));
            }
          }
        },
        {
          name: "itemshow",
          handler: "updateNav"
        },
        {
          name: "keydown",
          delegate: ({ selNavItem }) => selNavItem,
          filter: ({ parallax }) => !parallax,
          handler(e) {
            const { current, keyCode } = e;
            const cmd = data(current, this.attrItem);
            if (!isNumeric(cmd)) {
              return;
            }
            let i = keyCode === keyMap.HOME ? 0 : keyCode === keyMap.END ? "last" : keyCode === keyMap.LEFT ? "previous" : keyCode === keyMap.RIGHT ? "next" : -1;
            if (~i) {
              e.preventDefault();
              this.show(i);
            }
          }
        }
      ],
      methods: {
        updateNav() {
          const index = this.getValidIndex();
          for (const el of this.navItems) {
            const cmd = data(el, this.attrItem);
            const button = $("a,button", el) || el;
            if (isNumeric(cmd)) {
              const item = toNumber(cmd);
              const active = item === index;
              toggleClass(el, this.clsActive, active);
              toggleClass(button, "uk-disabled", this.parallax);
              attr(button, {
                "aria-selected": active,
                tabindex: active && !this.parallax ? null : -1
              });
              if (active && button && matches(parent(el), ":focus-within")) {
                button.focus();
              }
            } else {
              toggleClass(
                el,
                "uk-invisible",
                this.finite && (cmd === "previous" && index === 0 || cmd === "next" && index >= this.maxIndex)
              );
            }
          }
        },
        padNavitems() {
          if (!this.nav) {
            return;
          }
          const children2 = [];
          for (let i = 0; i < this.length; i++) {
            const attr2 = `${this.attrItem}="${i}"`;
            children2[i] = this.navChildren.findLast((el) => el.matches(`[${attr2}]`)) || $(`<li ${attr2}><a href></a></li>`);
          }
          if (!isEqual(children2, this.navChildren)) {
            html(this.nav, children2);
          }
        }
      }
    };

    const easeOutQuad = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    const easeOutQuart = "cubic-bezier(0.165, 0.84, 0.44, 1)";
    var Slider = {
      mixins: [SliderAutoplay, SliderDrag, SliderNav, I18n],
      props: {
        clsActivated: String,
        easing: String,
        index: Number,
        finite: Boolean,
        velocity: Number
      },
      data: () => ({
        easing: "ease",
        finite: false,
        velocity: 1,
        index: 0,
        prevIndex: -1,
        stack: [],
        percent: 0,
        clsActive: "uk-active",
        clsActivated: "",
        clsEnter: "uk-slide-enter",
        clsLeave: "uk-slide-leave",
        clsSlideActive: "uk-slide-active",
        Transitioner: false,
        transitionOptions: {}
      }),
      connected() {
        this.prevIndex = -1;
        this.index = this.getValidIndex(this.$props.index);
        this.stack = [];
      },
      disconnected() {
        removeClass(this.slides, this.clsActive);
      },
      computed: {
        duration: ({ velocity }, $el) => speedUp($el.offsetWidth / velocity),
        list: ({ selList }, $el) => $(selList, $el),
        maxIndex() {
          return this.length - 1;
        },
        slides() {
          return children(this.list);
        },
        length() {
          return this.slides.length;
        }
      },
      watch: {
        slides(slides, prev) {
          if (prev) {
            this.$emit();
          }
        }
      },
      events: {
        itemshow({ target }) {
          addClass(target, this.clsEnter, this.clsSlideActive);
        },
        itemshown({ target }) {
          removeClass(target, this.clsEnter);
        },
        itemhide({ target }) {
          addClass(target, this.clsLeave);
        },
        itemhidden({ target }) {
          removeClass(target, this.clsLeave, this.clsSlideActive);
        }
      },
      methods: {
        show(index, force = false) {
          var _a;
          if (this.dragging || !this.length || this.parallax) {
            return;
          }
          const { stack } = this;
          const queueIndex = force ? 0 : stack.length;
          const reset = () => {
            stack.splice(queueIndex, 1);
            if (stack.length) {
              this.show(stack.shift(), true);
            }
          };
          stack[force ? "unshift" : "push"](index);
          if (!force && stack.length > 1) {
            if (stack.length === 2) {
              (_a = this._transitioner) == null ? void 0 : _a.forward(Math.min(this.duration, 200));
            }
            return;
          }
          const prevIndex = this.getIndex(this.index);
          const prev = hasClass(this.slides, this.clsActive) && this.slides[prevIndex];
          const nextIndex = this.getIndex(index, this.index);
          const next = this.slides[nextIndex];
          if (prev === next) {
            reset();
            return;
          }
          this.dir = getDirection(index, prevIndex);
          this.prevIndex = prevIndex;
          this.index = nextIndex;
          if (prev && !trigger(prev, "beforeitemhide", [this]) || !trigger(next, "beforeitemshow", [this, prev])) {
            this.index = this.prevIndex;
            reset();
            return;
          }
          const promise = this._show(prev, next, force).then(() => {
            prev && trigger(prev, "itemhidden", [this]);
            trigger(next, "itemshown", [this]);
            stack.shift();
            this._transitioner = null;
            if (stack.length) {
              requestAnimationFrame(() => stack.length && this.show(stack.shift(), true));
            }
          });
          prev && trigger(prev, "itemhide", [this]);
          trigger(next, "itemshow", [this]);
          return promise;
        },
        getIndex(index = this.index, prev = this.index) {
          return clamp(
            getIndex(index, this.slides, prev, this.finite),
            0,
            Math.max(0, this.maxIndex)
          );
        },
        getValidIndex(index = this.index, prevIndex = this.prevIndex) {
          return this.getIndex(index, prevIndex);
        },
        async _show(prev, next, force) {
          this._transitioner = this._getTransitioner(prev, next, this.dir, {
            easing: force ? next.offsetWidth < 600 ? easeOutQuad : easeOutQuart : this.easing,
            ...this.transitionOptions
          });
          if (!force && !prev) {
            this._translate(1);
            return;
          }
          const { length } = this.stack;
          return this._transitioner[length > 1 ? "forward" : "show"](
            length > 1 ? Math.min(this.duration, 75 + 75 / (length - 1)) : this.duration,
            this.percent
          );
        },
        _translate(percent, prev = this.prevIndex, next = this.index) {
          const transitioner = this._getTransitioner(prev === next ? false : prev, next);
          transitioner.translate(percent);
          return transitioner;
        },
        _getTransitioner(prev = this.prevIndex, next = this.index, dir = this.dir || 1, options = this.transitionOptions) {
          return new this.Transitioner(
            isNumber(prev) ? this.slides[prev] : prev,
            isNumber(next) ? this.slides[next] : next,
            dir * (isRtl ? -1 : 1),
            options
          );
        }
      }
    };
    function getDirection(index, prevIndex) {
      return index === "next" ? 1 : index === "previous" ? -1 : index < prevIndex ? -1 : 1;
    }
    function speedUp(x) {
      return 0.5 * x + 300;
    }

    var Slideshow = {
      mixins: [Slider],
      props: {
        animation: String
      },
      data: {
        animation: "slide",
        clsActivated: "uk-transition-active",
        Animations: Animations$2,
        Transitioner: Transitioner$1
      },
      computed: {
        animation({ animation, Animations: Animations2 }) {
          return { ...Animations2[animation] || Animations2.slide, name: animation };
        },
        transitionOptions() {
          return { animation: this.animation };
        }
      },
      observe: resize(),
      events: {
        beforeitemshow({ target }) {
          addClass(target, this.clsActive);
        },
        itemshown({ target }) {
          addClass(target, this.clsActivated);
        },
        itemhidden({ target }) {
          removeClass(target, this.clsActive, this.clsActivated);
        }
      }
    };

    var Animations$1 = {
      ...Animations$2,
      fade: {
        show() {
          return [{ opacity: 0 }, { opacity: 1 }];
        },
        percent(current) {
          return 1 - css(current, "opacity");
        },
        translate(percent) {
          return [{ opacity: 1 - percent }, { opacity: percent }];
        }
      },
      scale: {
        show() {
          return [
            { opacity: 0, transform: scale3d(1 - 0.2) },
            { opacity: 1, transform: scale3d(1) }
          ];
        },
        percent(current) {
          return 1 - css(current, "opacity");
        },
        translate(percent) {
          return [
            { opacity: 1 - percent, transform: scale3d(1 - 0.2 * percent) },
            { opacity: percent, transform: scale3d(1 - 0.2 + 0.2 * percent) }
          ];
        }
      }
    };

    var LightboxPanel = {
      mixins: [Modal, Slideshow],
      functional: true,
      props: {
        delayControls: Number,
        preload: Number,
        videoAutoplay: Boolean,
        template: String
      },
      data: () => ({
        preload: 1,
        videoAutoplay: false,
        delayControls: 3e3,
        items: [],
        cls: "uk-open",
        clsPage: "uk-lightbox-page",
        selList: ".uk-lightbox-items",
        attrItem: "uk-lightbox-item",
        selClose: ".uk-close-large",
        selCaption: ".uk-lightbox-caption",
        pauseOnHover: false,
        velocity: 2,
        Animations: Animations$1,
        template: `<div class="uk-lightbox uk-overflow-hidden"> <div class="uk-lightbox-items"></div> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>`
      }),
      created() {
        const $el = $(this.template);
        const list = $(this.selList, $el);
        this.items.forEach(() => append(list, "<div>"));
        const close = $("[uk-close]", $el);
        const closeLabel = this.t("close");
        if (close && closeLabel) {
          close.dataset.i18n = JSON.stringify({ label: closeLabel });
        }
        this.$mount(append(this.container, $el));
      },
      events: [
        {
          name: `${pointerMove$1} ${pointerDown$1} keydown`,
          handler: "showControls"
        },
        {
          name: "click",
          self: true,
          delegate: ({ selList }) => `${selList} > *`,
          handler(e) {
            if (!e.defaultPrevented) {
              this.hide();
            }
          }
        },
        {
          name: "shown",
          self: true,
          handler: "showControls"
        },
        {
          name: "hide",
          self: true,
          handler() {
            this.hideControls();
            removeClass(this.slides, this.clsActive);
            Transition.stop(this.slides);
          }
        },
        {
          name: "hidden",
          self: true,
          handler() {
            this.$destroy(true);
          }
        },
        {
          name: "keyup",
          el: () => document,
          handler({ keyCode }) {
            if (!this.isToggled(this.$el) || !this.draggable) {
              return;
            }
            let i = -1;
            if (keyCode === keyMap.LEFT) {
              i = "previous";
            } else if (keyCode === keyMap.RIGHT) {
              i = "next";
            } else if (keyCode === keyMap.HOME) {
              i = 0;
            } else if (keyCode === keyMap.END) {
              i = "last";
            }
            if (~i) {
              this.show(i);
            }
          }
        },
        {
          name: "beforeitemshow",
          handler(e) {
            if (this.isToggled()) {
              return;
            }
            this.draggable = false;
            e.preventDefault();
            this.toggleElement(this.$el, true, false);
            this.animation = Animations$1["scale"];
            removeClass(e.target, this.clsActive);
            this.stack.splice(1, 0, this.index);
          }
        },
        {
          name: "itemshow",
          handler() {
            html($(this.selCaption, this.$el), this.getItem().caption || "");
            for (let j = -this.preload; j <= this.preload; j++) {
              this.loadItem(this.index + j);
            }
          }
        },
        {
          name: "itemshown",
          handler() {
            this.draggable = this.$props.draggable;
          }
        },
        {
          name: "itemload",
          async handler(_, item) {
            const { source: src, type, alt = "", poster, attrs = {} } = item;
            this.setItem(item, "<span uk-spinner></span>");
            if (!src) {
              return;
            }
            let matches;
            const iframeAttrs = {
              allowfullscreen: "",
              style: "max-width: 100%; box-sizing: border-box;",
              "uk-responsive": "",
              "uk-video": `${this.videoAutoplay}`
            };
            if (type === "image" || src.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i)) {
              const img = createEl("img", { src, alt, ...attrs });
              on(img, "load", () => this.setItem(item, img));
              on(img, "error", () => this.setError(item));
            } else if (type === "video" || src.match(/\.(mp4|webm|ogv)($|\?)/i)) {
              const video = createEl("video", {
                src,
                poster,
                controls: "",
                playsinline: "",
                "uk-video": `${this.videoAutoplay}`,
                ...attrs
              });
              on(video, "loadedmetadata", () => this.setItem(item, video));
              on(video, "error", () => this.setError(item));
            } else if (type === "iframe" || src.match(/\.(html|php)($|\?)/i)) {
              this.setItem(
                item,
                createEl("iframe", {
                  src,
                  allowfullscreen: "",
                  class: "uk-lightbox-iframe",
                  ...attrs
                })
              );
            } else if (matches = src.match(
              /\/\/(?:.*?youtube(-nocookie)?\..*?(?:[?&]v=|\/shorts\/)|youtu\.be\/)([\w-]{11})[&?]?(.*)?/
            )) {
              this.setItem(
                item,
                createEl("iframe", {
                  src: `https://www.youtube${matches[1] || ""}.com/embed/${matches[2]}${matches[3] ? `?${matches[3]}` : ""}`,
                  width: 1920,
                  height: 1080,
                  ...iframeAttrs,
                  ...attrs
                })
              );
            } else if (matches = src.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/)) {
              try {
                const { height, width } = await (await fetch(
                  `https://vimeo.com/api/oembed.json?maxwidth=1920&url=${encodeURI(
                src
              )}`,
                  { credentials: "omit" }
                )).json();
                this.setItem(
                  item,
                  createEl("iframe", {
                    src: `https://player.vimeo.com/video/${matches[1]}${matches[2] ? `?${matches[2]}` : ""}`,
                    width,
                    height,
                    ...iframeAttrs,
                    ...attrs
                  })
                );
              } catch (e) {
                this.setError(item);
              }
            }
          }
        }
      ],
      methods: {
        loadItem(index = this.index) {
          const item = this.getItem(index);
          if (!this.getSlide(item).childElementCount) {
            trigger(this.$el, "itemload", [item]);
          }
        },
        getItem(index = this.index) {
          return this.items[getIndex(index, this.slides)];
        },
        setItem(item, content) {
          trigger(this.$el, "itemloaded", [this, html(this.getSlide(item), content)]);
        },
        getSlide(item) {
          return this.slides[this.items.indexOf(item)];
        },
        setError(item) {
          this.setItem(item, '<span uk-icon="icon: bolt; ratio: 2"></span>');
        },
        showControls() {
          clearTimeout(this.controlsTimer);
          this.controlsTimer = setTimeout(this.hideControls, this.delayControls);
          addClass(this.$el, "uk-active", "uk-transition-active");
        },
        hideControls() {
          removeClass(this.$el, "uk-active", "uk-transition-active");
        }
      }
    };
    function createEl(tag, attrs) {
      const el = fragment(`<${tag}>`);
      attr(el, attrs);
      return el;
    }

    var lightbox = {
      install: install$3,
      props: { toggle: String },
      data: { toggle: "a" },
      computed: {
        toggles: ({ toggle }, $el) => $$(toggle, $el)
      },
      watch: {
        toggles(toggles) {
          this.hide();
          for (const toggle of toggles) {
            if (isTag(toggle, "a")) {
              attr(toggle, "role", "button");
            }
          }
        }
      },
      disconnected() {
        this.hide();
      },
      events: {
        name: "click",
        delegate: ({ toggle }) => `${toggle}:not(.uk-disabled)`,
        handler(e) {
          if (!e.defaultPrevented) {
            e.preventDefault();
            this.show(e.current);
          }
        }
      },
      methods: {
        show(index) {
          const items = uniqueBy(this.toggles.map(toItem), "source");
          if (isElement(index)) {
            const { source } = toItem(index);
            index = findIndex(items, ({ source: src }) => source === src);
          }
          this.panel = this.panel || this.$create("lightboxPanel", { ...this.$props, items });
          on(this.panel.$el, "hidden", () => this.panel = null);
          return this.panel.show(index);
        },
        hide() {
          var _a;
          return (_a = this.panel) == null ? void 0 : _a.hide();
        }
      }
    };
    function install$3(UIkit, Lightbox) {
      if (!UIkit.lightboxPanel) {
        UIkit.component("lightboxPanel", LightboxPanel);
      }
      assign(Lightbox.props, UIkit.component("lightboxPanel").options.props);
    }
    function toItem(el) {
      const item = {};
      for (const attr2 of ["href", "caption", "type", "poster", "alt", "attrs"]) {
        item[attr2 === "href" ? "source" : attr2] = data(el, attr2);
      }
      item.attrs = parseOptions(item.attrs);
      return item;
    }

    var notification = {
      mixins: [Container],
      functional: true,
      args: ["message", "status"],
      data: {
        message: "",
        status: "",
        timeout: 5e3,
        group: "",
        pos: "top-center",
        clsContainer: "uk-notification",
        clsClose: "uk-notification-close",
        clsMsg: "uk-notification-message"
      },
      install: install$2,
      computed: {
        marginProp: ({ pos }) => `margin-${pos.match(/[a-z]+(?=-)/)[0]}`,
        startProps() {
          return { opacity: 0, [this.marginProp]: -this.$el.offsetHeight };
        }
      },
      created() {
        const posClass = `${this.clsContainer}-${this.pos}`;
        const containerAttr = `data-${this.clsContainer}-container`;
        const container = $(`.${posClass}[${containerAttr}]`, this.container) || append(
          this.container,
          `<div class="${this.clsContainer} ${posClass}" ${containerAttr}></div>`
        );
        this.$mount(
          append(
            container,
            `<div class="${this.clsMsg}${this.status ? ` ${this.clsMsg}-${this.status}` : ""}" role="alert"> <a href class="${this.clsClose}" data-uk-close></a> <div>${this.message}</div> </div>`
          )
        );
      },
      async connected() {
        const margin = toFloat(css(this.$el, this.marginProp));
        await Transition.start(css(this.$el, this.startProps), {
          opacity: 1,
          [this.marginProp]: margin
        });
        if (this.timeout) {
          this.timer = setTimeout(this.close, this.timeout);
        }
      },
      events: {
        click(e) {
          if (e.target.closest('a[href="#"],a[href=""]')) {
            e.preventDefault();
          }
          this.close();
        },
        [pointerEnter]() {
          if (this.timer) {
            clearTimeout(this.timer);
          }
        },
        [pointerLeave]() {
          if (this.timeout) {
            this.timer = setTimeout(this.close, this.timeout);
          }
        }
      },
      methods: {
        async close(immediate) {
          const removeFn = (el) => {
            const container = parent(el);
            trigger(el, "close", [this]);
            remove$1(el);
            if (!(container == null ? void 0 : container.hasChildNodes())) {
              remove$1(container);
            }
          };
          if (this.timer) {
            clearTimeout(this.timer);
          }
          if (!immediate) {
            await Transition.start(this.$el, this.startProps);
          }
          removeFn(this.$el);
        }
      }
    };
    function install$2(UIkit) {
      UIkit.notification.closeAll = function(group, immediate) {
        apply(document.body, (el) => {
          const notification = UIkit.getComponent(el, "notification");
          if (notification && (!group || group === notification.group)) {
            notification.close(immediate);
          }
        });
      };
    }

    var Media = {
      props: {
        media: Boolean
      },
      data: {
        media: false
      },
      connected() {
        const media = toMedia(this.media, this.$el);
        this.matchMedia = true;
        if (media) {
          this.mediaObj = window.matchMedia(media);
          const handler = () => {
            this.matchMedia = this.mediaObj.matches;
            trigger(this.$el, createEvent("mediachange", false, true, [this.mediaObj]));
          };
          this.offMediaObj = on(this.mediaObj, "change", () => {
            handler();
            this.$emit("resize");
          });
          handler();
        }
      },
      disconnected() {
        var _a;
        (_a = this.offMediaObj) == null ? void 0 : _a.call(this);
      }
    };
    function toMedia(value, element) {
      if (isString(value)) {
        if (startsWith(value, "@")) {
          value = toFloat(css(element, `--uk-breakpoint-${value.slice(1)}`));
        } else if (isNaN(value)) {
          return value;
        }
      }
      return value && isNumeric(value) ? `(min-width: ${value}px)` : "";
    }

    function getMaxPathLength(el) {
      return isVisible(el) ? Math.ceil(
        Math.max(0, ...$$("[stroke]", el).map((stroke) => {
          var _a;
          return ((_a = stroke.getTotalLength) == null ? void 0 : _a.call(stroke)) || 0;
        }))
      ) : 0;
    }

    const props = {
      x: transformFn,
      y: transformFn,
      rotate: transformFn,
      scale: transformFn,
      color: colorFn,
      backgroundColor: colorFn,
      borderColor: colorFn,
      blur: filterFn,
      hue: filterFn,
      fopacity: filterFn,
      grayscale: filterFn,
      invert: filterFn,
      saturate: filterFn,
      sepia: filterFn,
      opacity: cssPropFn,
      stroke: strokeFn,
      bgx: backgroundFn,
      bgy: backgroundFn
    };
    const { keys } = Object;
    var Parallax = {
      mixins: [Media],
      props: fillObject(keys(props), "list"),
      data: fillObject(keys(props), void 0),
      computed: {
        props(properties, $el) {
          const stops = {};
          for (const prop in properties) {
            if (prop in props && !isUndefined(properties[prop])) {
              stops[prop] = properties[prop].slice();
            }
          }
          const result = {};
          for (const prop in stops) {
            result[prop] = props[prop](prop, $el, stops[prop], stops);
          }
          return result;
        }
      },
      events: {
        load() {
          this.$emit();
        }
      },
      methods: {
        reset() {
          for (const prop in this.getCss(0)) {
            css(this.$el, prop, "");
          }
        },
        getCss(percent) {
          const css2 = {};
          for (const prop in this.props) {
            this.props[prop](css2, clamp(percent));
          }
          css2.willChange = Object.keys(css2).map(propName).join(",");
          return css2;
        }
      }
    };
    function transformFn(prop, el, stops) {
      let unit = getUnit(stops) || { x: "px", y: "px", rotate: "deg" }[prop] || "";
      let transformFn2;
      if (prop === "x" || prop === "y") {
        prop = `translate${ucfirst(prop)}`;
        transformFn2 = (stop) => toFloat(toFloat(stop).toFixed(unit === "px" ? 0 : 6));
      } else if (prop === "scale") {
        unit = "";
        transformFn2 = (stop) => {
          var _a;
          return getUnit([stop]) ? toPx(stop, "width", el, true) / el[`offset${((_a = stop.endsWith) == null ? void 0 : _a.call(stop, "vh")) ? "Height" : "Width"}`] : toFloat(stop);
        };
      }
      if (stops.length === 1) {
        stops.unshift(prop === "scale" ? 1 : 0);
      }
      stops = parseStops(stops, transformFn2);
      return (css2, percent) => {
        css2.transform = `${css2.transform || ""} ${prop}(${getValue(stops, percent)}${unit})`;
      };
    }
    function colorFn(prop, el, stops) {
      if (stops.length === 1) {
        stops.unshift(getCssValue(el, prop, ""));
      }
      stops = parseStops(stops, (stop) => parseColor(el, stop));
      return (css2, percent) => {
        const [start, end, p] = getStop(stops, percent);
        const value = start.map((value2, i) => {
          value2 += p * (end[i] - value2);
          return i === 3 ? toFloat(value2) : parseInt(value2, 10);
        }).join(",");
        css2[prop] = `rgba(${value})`;
      };
    }
    function parseColor(el, color) {
      return getCssValue(el, "color", color).split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(toFloat);
    }
    function filterFn(prop, el, stops) {
      if (stops.length === 1) {
        stops.unshift(0);
      }
      const unit = getUnit(stops) || { blur: "px", hue: "deg" }[prop] || "%";
      prop = { fopacity: "opacity", hue: "hue-rotate" }[prop] || prop;
      stops = parseStops(stops);
      return (css2, percent) => {
        const value = getValue(stops, percent);
        css2.filter = `${css2.filter || ""} ${prop}(${value + unit})`;
      };
    }
    function cssPropFn(prop, el, stops) {
      if (stops.length === 1) {
        stops.unshift(getCssValue(el, prop, ""));
      }
      stops = parseStops(stops);
      return (css2, percent) => {
        css2[prop] = getValue(stops, percent);
      };
    }
    function strokeFn(prop, el, stops) {
      if (stops.length === 1) {
        stops.unshift(0);
      }
      const unit = getUnit(stops);
      const length = getMaxPathLength(el);
      stops = parseStops(stops.reverse(), (stop) => {
        stop = toFloat(stop);
        return unit === "%" ? stop * length / 100 : stop;
      });
      if (!stops.some(([value]) => value)) {
        return noop;
      }
      css(el, "strokeDasharray", length);
      return (css2, percent) => {
        css2.strokeDashoffset = getValue(stops, percent);
      };
    }
    function backgroundFn(prop, el, stops, props2) {
      if (stops.length === 1) {
        stops.unshift(0);
      }
      const attr = prop === "bgy" ? "height" : "width";
      props2[prop] = parseStops(stops, (stop) => toPx(stop, attr, el));
      const bgProps = ["bgx", "bgy"].filter((prop2) => prop2 in props2);
      if (bgProps.length === 2 && prop === "bgx") {
        return noop;
      }
      if (getCssValue(el, "backgroundSize", "") === "cover") {
        return backgroundCoverFn(prop, el, stops, props2);
      }
      const positions = {};
      for (const prop2 of bgProps) {
        positions[prop2] = getBackgroundPos(el, prop2);
      }
      return setBackgroundPosFn(bgProps, positions, props2);
    }
    function backgroundCoverFn(prop, el, stops, props2) {
      const dimImage = getBackgroundImageDimensions(el);
      if (!dimImage.width) {
        return noop;
      }
      const dimEl = {
        width: el.offsetWidth,
        height: el.offsetHeight
      };
      const bgProps = ["bgx", "bgy"].filter((prop2) => prop2 in props2);
      const positions = {};
      for (const prop2 of bgProps) {
        const values = props2[prop2].map(([value]) => value);
        const min = Math.min(...values);
        const max = Math.max(...values);
        const down = values.indexOf(min) < values.indexOf(max);
        const diff = max - min;
        positions[prop2] = `${(down ? -diff : 0) - (down ? min : max)}px`;
        dimEl[prop2 === "bgy" ? "height" : "width"] += diff;
      }
      const dim = Dimensions.cover(dimImage, dimEl);
      for (const prop2 of bgProps) {
        const attr = prop2 === "bgy" ? "height" : "width";
        const overflow = dim[attr] - dimEl[attr];
        positions[prop2] = `max(${getBackgroundPos(el, prop2)},-${overflow}px) + ${positions[prop2]}`;
      }
      const fn = setBackgroundPosFn(bgProps, positions, props2);
      return (css2, percent) => {
        fn(css2, percent);
        css2.backgroundSize = `${dim.width}px ${dim.height}px`;
        css2.backgroundRepeat = "no-repeat";
      };
    }
    function getBackgroundPos(el, prop) {
      return getCssValue(el, `background-position-${prop.slice(-1)}`, "");
    }
    function setBackgroundPosFn(bgProps, positions, props2) {
      return function(css2, percent) {
        for (const prop of bgProps) {
          const value = getValue(props2[prop], percent);
          css2[`background-position-${prop.slice(-1)}`] = `calc(${positions[prop]} + ${value}px)`;
        }
      };
    }
    const loading = {};
    const dimensions = {};
    function getBackgroundImageDimensions(el) {
      const src = css(el, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
      if (dimensions[src]) {
        return dimensions[src];
      }
      const image = new Image();
      if (src) {
        image.src = src;
        if (!image.naturalWidth && !loading[src]) {
          once(image, "error load", () => {
            dimensions[src] = toDimensions(image);
            trigger(el, createEvent("load", false));
          });
          loading[src] = true;
          return toDimensions(image);
        }
      }
      return dimensions[src] = toDimensions(image);
    }
    function toDimensions(image) {
      return {
        width: image.naturalWidth,
        height: image.naturalHeight
      };
    }
    function parseStops(stops, fn = toFloat) {
      const result = [];
      const { length } = stops;
      let nullIndex = 0;
      for (let i = 0; i < length; i++) {
        let [value, percent] = isString(stops[i]) ? stops[i].trim().split(/ (?![^(]*\))/) : [stops[i]];
        value = fn(value);
        percent = percent ? toFloat(percent) / 100 : null;
        if (i === 0) {
          if (percent === null) {
            percent = 0;
          } else if (percent) {
            result.push([value, 0]);
          }
        } else if (i === length - 1) {
          if (percent === null) {
            percent = 1;
          } else if (percent !== 1) {
            result.push([value, percent]);
            percent = 1;
          }
        }
        result.push([value, percent]);
        if (percent === null) {
          nullIndex++;
        } else if (nullIndex) {
          const leftPercent = result[i - nullIndex - 1][1];
          const p = (percent - leftPercent) / (nullIndex + 1);
          for (let j = nullIndex; j > 0; j--) {
            result[i - j][1] = leftPercent + p * (nullIndex - j + 1);
          }
          nullIndex = 0;
        }
      }
      return result;
    }
    function getStop(stops, percent) {
      const index = findIndex(stops.slice(1), ([, targetPercent]) => percent <= targetPercent) + 1;
      return [
        stops[index - 1][0],
        stops[index][0],
        (percent - stops[index - 1][1]) / (stops[index][1] - stops[index - 1][1])
      ];
    }
    function getValue(stops, percent) {
      const [start, end, p] = getStop(stops, percent);
      return start + Math.abs(start - end) * p * (start < end ? 1 : -1);
    }
    const unitRe = /^-?\d+(?:\.\d+)?(\S+)?/;
    function getUnit(stops, defaultUnit) {
      var _a;
      for (const stop of stops) {
        const match = (_a = stop.match) == null ? void 0 : _a.call(stop, unitRe);
        if (match) {
          return match[1];
        }
      }
      return defaultUnit;
    }
    function getCssValue(el, prop, value) {
      const prev = el.style[prop];
      const val = css(css(el, prop, value), prop);
      el.style[prop] = prev;
      return val;
    }
    function fillObject(keys2, value) {
      return keys2.reduce((data, prop) => {
        data[prop] = value;
        return data;
      }, {});
    }
    function ease(percent, easing) {
      return easing >= 0 ? Math.pow(percent, easing + 1) : 1 - Math.pow(1 - percent, 1 - easing);
    }

    var parallax = {
      mixins: [Parallax],
      props: {
        target: String,
        viewport: Number,
        // Deprecated
        easing: Number,
        start: String,
        end: String
      },
      data: {
        target: false,
        viewport: 1,
        easing: 1,
        start: 0,
        end: 0
      },
      computed: {
        target: ({ target }, $el) => getOffsetElement(target && query(target, $el) || $el),
        start({ start }) {
          return toPx(start, "height", this.target, true);
        },
        end({ end, viewport: viewport2 }) {
          return toPx(
            end || (viewport2 = (1 - viewport2) * 100) && `${viewport2}vh+${viewport2}%`,
            "height",
            this.target,
            true
          );
        }
      },
      observe: [
        viewport(),
        scroll$1({ target: ({ target }) => target }),
        resize({ target: ({ $el, target }) => [$el, target, scrollParent(target, true)] })
      ],
      update: {
        read({ percent }, types) {
          if (!types.has("scroll")) {
            percent = false;
          }
          if (!isVisible(this.$el)) {
            return false;
          }
          if (!this.matchMedia) {
            return;
          }
          const prev = percent;
          percent = ease(scrolledOver(this.target, this.start, this.end), this.easing);
          return {
            percent,
            style: prev === percent ? false : this.getCss(percent)
          };
        },
        write({ style }) {
          if (!this.matchMedia) {
            this.reset();
            return;
          }
          style && css(this.$el, style);
        },
        events: ["scroll", "resize"]
      }
    };
    function getOffsetElement(el) {
      return el ? "offsetTop" in el ? el : getOffsetElement(parent(el)) : document.documentElement;
    }

    var SliderParallax = {
      props: {
        parallax: Boolean,
        parallaxTarget: Boolean,
        parallaxStart: String,
        parallaxEnd: String,
        parallaxEasing: Number
      },
      data: {
        parallax: false,
        parallaxTarget: false,
        parallaxStart: 0,
        parallaxEnd: 0,
        parallaxEasing: 0
      },
      observe: [
        resize({
          target: ({ $el, parallaxTarget }) => [$el, parallaxTarget],
          filter: ({ parallax }) => parallax
        }),
        scroll$1({ filter: ({ parallax }) => parallax })
      ],
      computed: {
        parallaxTarget({ parallaxTarget }, $el) {
          return parallaxTarget && query(parallaxTarget, $el) || this.list;
        }
      },
      update: {
        read() {
          if (!this.parallax) {
            return false;
          }
          const target = this.parallaxTarget;
          if (!target) {
            return false;
          }
          const start = toPx(this.parallaxStart, "height", target, true);
          const end = toPx(this.parallaxEnd, "height", target, true);
          const percent = ease(scrolledOver(target, start, end), this.parallaxEasing);
          return { parallax: this.getIndexAt(percent) };
        },
        write({ parallax }) {
          const [prevIndex, slidePercent] = parallax;
          const nextIndex = this.getValidIndex(prevIndex + Math.ceil(slidePercent));
          const prev = this.slides[prevIndex];
          const next = this.slides[nextIndex];
          const { triggerShow, triggerShown, triggerHide, triggerHidden } = useTriggers(this);
          if (~this.prevIndex) {
            for (const i of /* @__PURE__ */ new Set([this.index, this.prevIndex])) {
              if (!includes([nextIndex, prevIndex], i)) {
                triggerHide(this.slides[i]);
                triggerHidden(this.slides[i]);
              }
            }
          }
          const changed = this.prevIndex !== prevIndex || this.index !== nextIndex;
          this.dir = 1;
          this.prevIndex = prevIndex;
          this.index = nextIndex;
          if (prev !== next) {
            triggerHide(prev);
          }
          triggerShow(next);
          if (changed) {
            triggerShown(prev);
          }
          this._translate(prev === next ? 1 : slidePercent, prev, next);
        },
        events: ["scroll", "resize"]
      },
      methods: {
        getIndexAt(percent) {
          const index = percent * (this.length - 1);
          return [Math.floor(index), index % 1];
        }
      }
    };
    function useTriggers(cmp) {
      const { clsSlideActive, clsEnter, clsLeave } = cmp;
      return { triggerShow, triggerShown, triggerHide, triggerHidden };
      function triggerShow(el) {
        if (hasClass(el, clsLeave)) {
          triggerHide(el);
          triggerHidden(el);
        }
        if (!hasClass(el, clsSlideActive)) {
          trigger(el, "beforeitemshow", [cmp]);
          trigger(el, "itemshow", [cmp]);
        }
      }
      function triggerShown(el) {
        if (hasClass(el, clsEnter)) {
          trigger(el, "itemshown", [cmp]);
        }
      }
      function triggerHide(el) {
        if (!hasClass(el, clsSlideActive)) {
          triggerShow(el);
        }
        if (hasClass(el, clsEnter)) {
          triggerShown(el);
        }
        if (!hasClass(el, clsLeave)) {
          trigger(el, "beforeitemhide", [cmp]);
          trigger(el, "itemhide", [cmp]);
        }
      }
      function triggerHidden(el) {
        if (hasClass(el, clsLeave)) {
          trigger(el, "itemhidden", [cmp]);
        }
      }
    }

    var SliderReactive = {
      update: {
        write() {
          if (this.stack.length || this.dragging || this.parallax) {
            return;
          }
          const index = this.getValidIndex();
          if (!~this.prevIndex || this.index !== index) {
            this.show(index);
          } else {
            this._translate(1);
          }
        },
        events: ["resize"]
      }
    };

    var SliderPreload = {
      observe: lazyload({
        target: ({ slides }) => slides,
        targets: (instance) => instance.getAdjacentSlides()
      }),
      methods: {
        getAdjacentSlides() {
          return [1, -1].map((i) => this.slides[this.getIndex(this.index + i)]);
        }
      }
    };

    function Transitioner(prev, next, dir, { center, easing, list }) {
      const from = prev ? getLeft(prev, list, center) : getLeft(next, list, center) + dimensions$1(next).width * dir;
      const to = next ? getLeft(next, list, center) : from + dimensions$1(prev).width * dir * (isRtl ? -1 : 1);
      const { promise, resolve } = withResolvers();
      return {
        dir,
        show(duration, percent = 0, linear) {
          const timing = linear ? "linear" : easing;
          duration -= Math.round(duration * clamp(percent, -1, 1));
          css(list, "transitionProperty", "none");
          this.translate(percent);
          css(list, "transitionProperty", "");
          percent = prev ? percent : clamp(percent, 0, 1);
          triggerUpdate(this.getItemIn(), "itemin", { percent, duration, timing, dir });
          prev && triggerUpdate(this.getItemIn(true), "itemout", {
            percent: 1 - percent,
            duration,
            timing,
            dir
          });
          Transition.start(
            list,
            { transform: translate(-to * (isRtl ? -1 : 1), "px") },
            duration,
            timing
          ).then(resolve, noop);
          return promise;
        },
        cancel() {
          return Transition.cancel(list);
        },
        reset() {
          css(list, "transform", "");
        },
        async forward(duration, percent = this.percent()) {
          await this.cancel();
          return this.show(duration, percent, true);
        },
        translate(percent) {
          if (percent === this.percent()) {
            return;
          }
          const distance = this.getDistance() * dir * (isRtl ? -1 : 1);
          css(
            list,
            "transform",
            translate(
              clamp(
                -to + (distance - distance * percent),
                -getWidth(list),
                dimensions$1(list).width
              ) * (isRtl ? -1 : 1),
              "px"
            )
          );
          const actives = this.getActives();
          const itemIn = this.getItemIn();
          const itemOut = this.getItemIn(true);
          percent = prev ? clamp(percent, -1, 1) : 0;
          for (const slide of children(list)) {
            const isActive = includes(actives, slide);
            const isIn = slide === itemIn;
            const isOut = slide === itemOut;
            const translateIn = isIn || !isOut && (isActive || dir * (isRtl ? -1 : 1) === -1 ^ getElLeft(slide, list) > getElLeft(prev || next));
            triggerUpdate(slide, `itemtranslate${translateIn ? "in" : "out"}`, {
              dir,
              percent: isOut ? 1 - percent : isIn ? percent : isActive ? 1 : 0
            });
          }
        },
        percent() {
          return Math.abs(
            (new DOMMatrix(css(list, "transform")).m41 * (isRtl ? -1 : 1) + from) / (to - from)
          );
        },
        getDistance() {
          return Math.abs(to - from);
        },
        getItemIn(out = false) {
          let actives = this.getActives();
          let nextActives = inView(list, getLeft(next || prev, list, center));
          if (out) {
            const temp = actives;
            actives = nextActives;
            nextActives = temp;
          }
          return nextActives[findIndex(nextActives, (el) => !includes(actives, el))];
        },
        getActives() {
          return inView(list, getLeft(prev || next, list, center));
        }
      };
    }
    function getLeft(el, list, center) {
      const left = getElLeft(el, list);
      return center ? left - centerEl(el, list) : Math.min(left, getMax(list));
    }
    function getMax(list) {
      return Math.max(0, getWidth(list) - dimensions$1(list).width);
    }
    function getWidth(list, index) {
      return sumBy(children(list).slice(0, index), (el) => dimensions$1(el).width);
    }
    function centerEl(el, list) {
      return dimensions$1(list).width / 2 - dimensions$1(el).width / 2;
    }
    function getElLeft(el, list) {
      return el && (position(el).left + (isRtl ? dimensions$1(el).width - dimensions$1(list).width : 0)) * (isRtl ? -1 : 1) || 0;
    }
    function inView(list, listLeft) {
      listLeft -= 1;
      const listWidth = dimensions$1(list).width;
      const listRight = listLeft + listWidth + 2;
      return children(list).filter((slide) => {
        const slideLeft = getElLeft(slide, list);
        const slideRight = slideLeft + Math.min(dimensions$1(slide).width, listWidth);
        return slideLeft >= listLeft && slideRight <= listRight;
      });
    }

    var slider = {
      mixins: [Class, Slider, SliderReactive, SliderParallax, SliderPreload],
      props: {
        center: Boolean,
        sets: Boolean,
        active: String
      },
      data: {
        center: false,
        sets: false,
        attrItem: "uk-slider-item",
        selList: ".uk-slider-items",
        selNav: ".uk-slider-nav",
        clsContainer: "uk-slider-container",
        active: "all",
        Transitioner
      },
      computed: {
        finite({ finite }) {
          return finite || isFinite(this.list, this.center);
        },
        maxIndex() {
          if (!this.finite || this.center && !this.sets) {
            return this.length - 1;
          }
          if (this.center) {
            return last(this.sets);
          }
          let lft = 0;
          const max = getMax(this.list);
          const index = findIndex(this.slides, (el) => {
            if (lft >= max) {
              return true;
            }
            lft += dimensions$1(el).width;
          });
          return ~index ? index : this.length - 1;
        },
        sets({ sets: enabled }) {
          if (!enabled || this.parallax) {
            return;
          }
          let left = 0;
          const sets = [];
          const width = dimensions$1(this.list).width;
          for (let i = 0; i < this.length; i++) {
            const slideWidth = dimensions$1(this.slides[i]).width;
            if (left + slideWidth > width) {
              left = 0;
            }
            if (this.center) {
              if (left < width / 2 && left + slideWidth + dimensions$1(this.slides[getIndex(i + 1, this.slides)]).width / 2 > width / 2) {
                sets.push(i);
                left = width / 2 - slideWidth / 2;
              }
            } else if (left === 0) {
              sets.push(Math.min(i, this.maxIndex));
            }
            left += slideWidth;
          }
          if (sets.length) {
            return sets;
          }
        },
        transitionOptions() {
          return {
            center: this.center,
            list: this.list
          };
        },
        slides() {
          return children(this.list).filter(isVisible);
        }
      },
      connected() {
        toggleClass(this.$el, this.clsContainer, !$(`.${this.clsContainer}`, this.$el));
      },
      observe: resize({
        target: ({ slides, $el }) => [$el, ...slides]
      }),
      update: {
        write() {
          for (const el of this.navItems) {
            const index = toNumber(data(el, this.attrItem));
            if (index !== false) {
              el.hidden = !this.maxIndex || index > this.maxIndex || this.sets && !includes(this.sets, index);
            }
          }
          this.reorder();
          if (!this.parallax) {
            this._translate(1);
          }
          this.updateActiveClasses();
        },
        events: ["resize"]
      },
      events: {
        beforeitemshow(e) {
          if (!this.dragging && this.sets && this.stack.length < 2 && !includes(this.sets, this.index)) {
            this.index = this.getValidIndex();
          }
          const diff = Math.abs(
            this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0)
          );
          if (!this.dragging && diff > 1) {
            for (let i = 0; i < diff; i++) {
              this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
            }
            e.preventDefault();
            return;
          }
          const index = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex;
          const avgWidth = getWidth(this.list) / this.length;
          this.duration = speedUp(avgWidth / this.velocity) * (dimensions$1(this.slides[index]).width / avgWidth);
          this.reorder();
        },
        itemshow() {
          if (~this.prevIndex) {
            addClass(this._getTransitioner().getItemIn(), this.clsActive);
          }
          this.updateActiveClasses(this.prevIndex);
        },
        itemshown() {
          this.updateActiveClasses();
        }
      },
      methods: {
        reorder() {
          if (this.finite) {
            css(this.slides, "order", "");
            return;
          }
          const index = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
          this.slides.forEach(
            (slide, i) => css(
              slide,
              "order",
              this.dir > 0 && i < index ? 1 : this.dir < 0 && i >= this.index ? -1 : ""
            )
          );
          if (!this.center || !this.length) {
            return;
          }
          const next = this.slides[index];
          let width = dimensions$1(this.list).width / 2 - dimensions$1(next).width / 2;
          let j = 0;
          while (width > 0) {
            const slideIndex = this.getIndex(--j + index, index);
            const slide = this.slides[slideIndex];
            css(slide, "order", slideIndex > index ? -2 : -1);
            width -= dimensions$1(slide).width;
          }
        },
        updateActiveClasses(currentIndex = this.index) {
          let actives = this._getTransitioner(currentIndex).getActives();
          if (this.active !== "all") {
            actives = [this.slides[this.getValidIndex(currentIndex)]];
          }
          const activeClasses = [
            this.clsActive,
            !this.sets || includes(this.sets, toFloat(this.index)) ? this.clsActivated : ""
          ];
          for (const slide of this.slides) {
            const active = includes(actives, slide);
            toggleClass(slide, activeClasses, active);
            attr(slide, "aria-hidden", !active);
            for (const focusable of $$(selFocusable, slide)) {
              if (!hasOwn(focusable, "_tabindex")) {
                focusable._tabindex = attr(focusable, "tabindex");
              }
              attr(focusable, "tabindex", active ? focusable._tabindex : -1);
            }
          }
        },
        getValidIndex(index = this.index, prevIndex = this.prevIndex) {
          index = this.getIndex(index, prevIndex);
          if (!this.sets) {
            return index;
          }
          let prev;
          do {
            if (includes(this.sets, index)) {
              return index;
            }
            prev = index;
            index = this.getIndex(index + this.dir, prevIndex);
          } while (index !== prev);
          return index;
        },
        getAdjacentSlides() {
          const { width } = dimensions$1(this.list);
          const left = -width;
          const right = width * 2;
          const slideWidth = dimensions$1(this.slides[this.index]).width;
          const slideLeft = this.center ? width / 2 - slideWidth / 2 : 0;
          const slides = /* @__PURE__ */ new Set();
          for (const i of [-1, 1]) {
            let currentLeft = slideLeft + (i > 0 ? slideWidth : 0);
            let j = 0;
            do {
              const slide = this.slides[this.getIndex(this.index + i + j++ * i)];
              currentLeft += dimensions$1(slide).width * i;
              slides.add(slide);
            } while (this.length > j && currentLeft > left && currentLeft < right);
          }
          return Array.from(slides);
        },
        getIndexAt(percent) {
          let index = -1;
          const scrollDist = this.center ? getWidth(this.list) - (dimensions$1(this.slides[0]).width / 2 + dimensions$1(last(this.slides)).width / 2) : getWidth(this.list, this.maxIndex);
          let dist = percent * scrollDist;
          let slidePercent = 0;
          do {
            const slideWidth = dimensions$1(this.slides[++index]).width;
            const slideDist = this.center ? slideWidth / 2 + dimensions$1(this.slides[index + 1]).width / 2 : slideWidth;
            slidePercent = dist / slideDist % 1;
            dist -= slideDist;
          } while (dist >= 0 && index < this.maxIndex);
          return [index, slidePercent];
        }
      }
    };
    function isFinite(list, center) {
      if (!list || list.length < 2) {
        return true;
      }
      const { width: listWidth } = dimensions$1(list);
      if (!center) {
        return Math.ceil(getWidth(list)) < Math.trunc(listWidth + getMaxElWidth(list));
      }
      const slides = children(list);
      const listHalf = Math.trunc(listWidth / 2);
      for (const index in slides) {
        const slide = slides[index];
        const slideWidth = dimensions$1(slide).width;
        const slidesInView = /* @__PURE__ */ new Set([slide]);
        let diff = 0;
        for (const i of [-1, 1]) {
          let left = slideWidth / 2;
          let j = 0;
          while (left < listHalf) {
            const nextSlide = slides[getIndex(+index + i + j++ * i, slides)];
            if (slidesInView.has(nextSlide)) {
              return true;
            }
            left += dimensions$1(nextSlide).width;
            slidesInView.add(nextSlide);
          }
          diff = Math.max(
            diff,
            slideWidth / 2 + dimensions$1(slides[getIndex(+index + i, slides)]).width / 2 - (left - listHalf)
          );
        }
        if (Math.trunc(diff) > sumBy(
          slides.filter((slide2) => !slidesInView.has(slide2)),
          (slide2) => dimensions$1(slide2).width
        )) {
          return true;
        }
      }
      return false;
    }
    function getMaxElWidth(list) {
      return Math.max(0, ...children(list).map((el) => dimensions$1(el).width));
    }

    var sliderParallax = {
      mixins: [Parallax],
      beforeConnect() {
        this.item = this.$el.closest(`.${this.$options.id.replace("parallax", "items")} > *`);
      },
      disconnected() {
        this.item = null;
      },
      events: [
        {
          name: "itemin itemout",
          self: true,
          el: ({ item }) => item,
          handler({ type, detail: { percent, duration, timing, dir } }) {
            fastdom.read(() => {
              if (!this.matchMedia) {
                return;
              }
              const propsFrom = this.getCss(getCurrentPercent(type, dir, percent));
              const propsTo = this.getCss(isIn(type) ? 0.5 : dir > 0 ? 1 : 0);
              fastdom.write(() => {
                css(this.$el, propsFrom);
                Transition.start(this.$el, propsTo, duration, timing).catch(noop);
              });
            });
          }
        },
        {
          name: "transitioncanceled transitionend",
          self: true,
          el: ({ item }) => item,
          handler() {
            Transition.cancel(this.$el);
          }
        },
        {
          name: "itemtranslatein itemtranslateout",
          self: true,
          el: ({ item }) => item,
          handler({ type, detail: { percent, dir } }) {
            fastdom.read(() => {
              if (!this.matchMedia) {
                this.reset();
                return;
              }
              const props = this.getCss(getCurrentPercent(type, dir, percent));
              fastdom.write(() => css(this.$el, props));
            });
          }
        }
      ]
    };
    function isIn(type) {
      return endsWith(type, "in");
    }
    function getCurrentPercent(type, dir, percent) {
      percent /= 2;
      return isIn(type) ^ dir < 0 ? percent : 1 - percent;
    }

    var Animations = {
      ...Animations$2,
      fade: {
        show() {
          return [{ opacity: 0, zIndex: 0 }, { zIndex: -1 }];
        },
        percent(current) {
          return 1 - css(current, "opacity");
        },
        translate(percent) {
          return [{ opacity: 1 - percent, zIndex: 0 }, { zIndex: -1 }];
        }
      },
      scale: {
        show() {
          return [{ opacity: 0, transform: scale3d(1 + 0.5), zIndex: 0 }, { zIndex: -1 }];
        },
        percent(current) {
          return 1 - css(current, "opacity");
        },
        translate(percent) {
          return [
            { opacity: 1 - percent, transform: scale3d(1 + 0.5 * percent), zIndex: 0 },
            { zIndex: -1 }
          ];
        }
      },
      pull: {
        show(dir) {
          return dir < 0 ? [
            { transform: translate(30), zIndex: -1 },
            { transform: translate(), zIndex: 0 }
          ] : [
            { transform: translate(-100), zIndex: 0 },
            { transform: translate(), zIndex: -1 }
          ];
        },
        percent(current, next, dir) {
          return dir < 0 ? 1 - translated(next) : translated(current);
        },
        translate(percent, dir) {
          return dir < 0 ? [
            { transform: translate(30 * percent), zIndex: -1 },
            { transform: translate(-100 * (1 - percent)), zIndex: 0 }
          ] : [
            { transform: translate(-percent * 100), zIndex: 0 },
            { transform: translate(30 * (1 - percent)), zIndex: -1 }
          ];
        }
      },
      push: {
        show(dir) {
          return dir < 0 ? [
            { transform: translate(100), zIndex: 0 },
            { transform: translate(), zIndex: -1 }
          ] : [
            { transform: translate(-30), zIndex: -1 },
            { transform: translate(), zIndex: 0 }
          ];
        },
        percent(current, next, dir) {
          return dir > 0 ? 1 - translated(next) : translated(current);
        },
        translate(percent, dir) {
          return dir < 0 ? [
            { transform: translate(percent * 100), zIndex: 0 },
            { transform: translate(-30 * (1 - percent)), zIndex: -1 }
          ] : [
            { transform: translate(-30 * percent), zIndex: -1 },
            { transform: translate(100 * (1 - percent)), zIndex: 0 }
          ];
        }
      }
    };

    var slideshow = {
      mixins: [Class, Slideshow, SliderReactive, SliderParallax, SliderPreload],
      props: {
        ratio: String,
        minHeight: String,
        maxHeight: String
      },
      data: {
        ratio: "16:9",
        minHeight: void 0,
        maxHeight: void 0,
        selList: ".uk-slideshow-items",
        attrItem: "uk-slideshow-item",
        selNav: ".uk-slideshow-nav",
        Animations
      },
      watch: {
        list(list) {
          css(list, {
            aspectRatio: this.ratio ? this.ratio.replace(":", "/") : void 0,
            minHeight: this.minHeight,
            maxHeight: this.maxHeight,
            minWidth: "100%",
            maxWidth: "100%"
          });
        }
      },
      methods: {
        getAdjacentSlides() {
          return [1, -1].map((i) => this.slides[this.getIndex(this.index + i)]);
        }
      }
    };

    var sortable = {
      mixins: [Class, Animate],
      props: {
        group: String,
        threshold: Number,
        clsItem: String,
        clsPlaceholder: String,
        clsDrag: String,
        clsDragState: String,
        clsBase: String,
        clsNoDrag: String,
        clsEmpty: String,
        clsCustom: String,
        handle: String
      },
      data: {
        group: false,
        threshold: 5,
        clsItem: "uk-sortable-item",
        clsPlaceholder: "uk-sortable-placeholder",
        clsDrag: "uk-sortable-drag",
        clsDragState: "uk-drag",
        clsBase: "uk-sortable",
        clsNoDrag: "uk-sortable-nodrag",
        clsEmpty: "uk-sortable-empty",
        clsCustom: "",
        handle: false,
        pos: {}
      },
      events: {
        name: pointerDown$1,
        passive: false,
        handler: "init"
      },
      computed: {
        target: (_, $el) => ($el.tBodies || [$el])[0],
        items() {
          return children(this.target);
        },
        isEmpty() {
          return !this.items.length;
        },
        handles({ handle }, $el) {
          return handle ? $$(handle, $el) : this.items;
        }
      },
      watch: {
        isEmpty(empty) {
          toggleClass(this.target, this.clsEmpty, empty);
        },
        handles(handles, prev) {
          css(prev, { touchAction: "", userSelect: "" });
          css(handles, { touchAction: "none", userSelect: "none" });
        }
      },
      update: {
        write(data) {
          if (!this.drag || !parent(this.placeholder)) {
            return;
          }
          const {
            pos: { x, y },
            origin: { offsetTop, offsetLeft },
            placeholder
          } = this;
          css(this.drag, {
            top: y - offsetTop,
            left: x - offsetLeft
          });
          const sortable = this.getSortable(document.elementFromPoint(x, y));
          if (!sortable) {
            return;
          }
          const { items } = sortable;
          if (items.some(Transition.inProgress)) {
            return;
          }
          const target = findTarget(items, { x, y });
          if (items.length && (!target || target === placeholder)) {
            return;
          }
          const previous = this.getSortable(placeholder);
          const insertTarget = findInsertTarget(
            sortable.target,
            target,
            placeholder,
            x,
            y,
            sortable === previous && data.moved !== target
          );
          if (insertTarget === false) {
            return;
          }
          if (insertTarget && placeholder === insertTarget) {
            return;
          }
          if (sortable !== previous) {
            previous.remove(placeholder);
            data.moved = target;
          } else {
            delete data.moved;
          }
          sortable.insert(placeholder, insertTarget);
          this.touched.add(sortable);
        },
        events: ["move"]
      },
      methods: {
        init(e) {
          const { target, button, defaultPrevented } = e;
          const [placeholder] = this.items.filter((el) => el.contains(target));
          if (!placeholder || defaultPrevented || button > 0 || isInput(target) || target.closest(`.${this.clsNoDrag}`) || this.handle && !target.closest(this.handle)) {
            return;
          }
          e.preventDefault();
          this.pos = getEventPos(e);
          this.touched = /* @__PURE__ */ new Set([this]);
          this.placeholder = placeholder;
          this.origin = { target, index: index(placeholder), ...this.pos };
          on(document, pointerMove$1, this.move);
          on(document, pointerUp$1, this.end);
          if (!this.threshold) {
            this.start(e);
          }
        },
        start(e) {
          this.drag = appendDrag(this.$container, this.placeholder);
          const { left, top } = dimensions$1(this.placeholder);
          assign(this.origin, { offsetLeft: this.pos.x - left, offsetTop: this.pos.y - top });
          addClass(this.drag, this.clsDrag, this.clsCustom);
          addClass(this.placeholder, this.clsPlaceholder);
          addClass(this.items, this.clsItem);
          addClass(document.documentElement, this.clsDragState);
          trigger(this.$el, "start", [this, this.placeholder]);
          trackScroll(this.pos);
          this.move(e);
        },
        move: throttle(function(e) {
          assign(this.pos, getEventPos(e));
          if (!this.drag && (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold)) {
            this.start(e);
          }
          this.$emit("move");
        }),
        end() {
          off(document, pointerMove$1, this.move);
          off(document, pointerUp$1, this.end);
          if (!this.drag) {
            return;
          }
          untrackScroll();
          const sortable = this.getSortable(this.placeholder);
          if (this === sortable) {
            if (this.origin.index !== index(this.placeholder)) {
              trigger(this.$el, "moved", [this, this.placeholder]);
            }
          } else {
            trigger(sortable.$el, "added", [sortable, this.placeholder]);
            trigger(this.$el, "removed", [this, this.placeholder]);
          }
          trigger(this.$el, "stop", [this, this.placeholder]);
          remove$1(this.drag);
          this.drag = null;
          for (const { clsPlaceholder, clsItem } of this.touched) {
            for (const sortable2 of this.touched) {
              removeClass(sortable2.items, clsPlaceholder, clsItem);
            }
          }
          this.touched = null;
          removeClass(document.documentElement, this.clsDragState);
        },
        insert(element, target) {
          addClass(this.items, this.clsItem);
          if (target && target.previousElementSibling !== element) {
            this.animate(() => before(target, element));
          } else if (!target && this.target.lastElementChild !== element) {
            this.animate(() => append(this.target, element));
          }
        },
        remove(element) {
          if (this.target.contains(element)) {
            this.animate(() => remove$1(element));
          }
        },
        getSortable(element) {
          do {
            const sortable = this.$getComponent(element, "sortable");
            if (sortable && (sortable === this || this.group !== false && sortable.group === this.group)) {
              return sortable;
            }
          } while (element = parent(element));
        }
      }
    };
    let trackTimer;
    function trackScroll(pos) {
      let last = Date.now();
      trackTimer = setInterval(() => {
        let { x, y } = pos;
        y += document.scrollingElement.scrollTop;
        const dist = (Date.now() - last) * 0.3;
        last = Date.now();
        scrollParents(document.elementFromPoint(x, pos.y)).reverse().some((scrollEl) => {
          let { scrollTop: scroll, scrollHeight } = scrollEl;
          const { top, bottom, height: height2 } = offsetViewport(scrollEl);
          if (top < y && top + 35 > y) {
            scroll -= dist;
          } else if (bottom > y && bottom - 35 < y) {
            scroll += dist;
          } else {
            return;
          }
          if (scroll > 0 && scroll < scrollHeight - height2) {
            scrollEl.scrollTop = scroll;
            return true;
          }
        });
      }, 15);
    }
    function untrackScroll() {
      clearInterval(trackTimer);
    }
    function appendDrag(container, element) {
      let clone;
      if (isTag(element, "li", "tr")) {
        clone = $("<div>");
        append(clone, element.cloneNode(true).children);
        for (const attribute of element.getAttributeNames()) {
          attr(clone, attribute, element.getAttribute(attribute));
        }
      } else {
        clone = element.cloneNode(true);
      }
      append(container, clone);
      css(clone, "margin", "0", "important");
      css(clone, {
        boxSizing: "border-box",
        width: element.offsetWidth,
        height: element.offsetHeight,
        padding: css(element, "padding")
      });
      height(clone.firstElementChild, height(element.firstElementChild));
      return clone;
    }
    function findTarget(items, point) {
      return items[findIndex(items, (item) => pointInRect(point, dimensions$1(item)))];
    }
    function findInsertTarget(list, target, placeholder, x, y, sameList) {
      if (!children(list).length) {
        return;
      }
      const rect = dimensions$1(target);
      if (!sameList) {
        if (!isHorizontal(list, placeholder)) {
          return y < rect.top + rect.height / 2 ? target : target.nextElementSibling;
        }
        return target;
      }
      const placeholderRect = dimensions$1(placeholder);
      const sameRow = linesIntersect(
        [rect.top, rect.bottom],
        [placeholderRect.top, placeholderRect.bottom]
      );
      const [pointerPos, lengthProp, startProp, endProp] = sameRow ? [x, "width", "left", "right"] : [y, "height", "top", "bottom"];
      const diff = placeholderRect[lengthProp] < rect[lengthProp] ? rect[lengthProp] - placeholderRect[lengthProp] : 0;
      if (placeholderRect[startProp] < rect[startProp]) {
        if (diff && pointerPos < rect[startProp] + diff) {
          return false;
        }
        return target.nextElementSibling;
      }
      if (diff && pointerPos > rect[endProp] - diff) {
        return false;
      }
      return target;
    }
    function isHorizontal(list, placeholder) {
      const single = children(list).length === 1;
      if (single) {
        append(list, placeholder);
      }
      const items = children(list);
      const isHorizontal2 = items.some((el, i) => {
        const rectA = dimensions$1(el);
        return items.slice(i + 1).some((el2) => {
          const rectB = dimensions$1(el2);
          return !linesIntersect([rectA.left, rectA.right], [rectB.left, rectB.right]);
        });
      });
      if (single) {
        remove$1(placeholder);
      }
      return isHorizontal2;
    }
    function linesIntersect(lineA, lineB) {
      return lineA[1] > lineB[0] && lineB[1] > lineA[0];
    }
    function throttle(fn) {
      let throttled;
      return function(...args) {
        if (!throttled) {
          throttled = true;
          fn.call(this, ...args);
          requestAnimationFrame(() => throttled = false);
        }
      };
    }

    var Position = {
      props: {
        pos: String,
        offset: Boolean,
        flip: Boolean,
        shift: Boolean,
        inset: Boolean
      },
      data: {
        pos: `bottom-${isRtl ? "right" : "left"}`,
        offset: false,
        flip: true,
        shift: true,
        inset: false
      },
      connected() {
        this.pos = this.$props.pos.split("-").concat("center").slice(0, 2);
        [this.dir, this.align] = this.pos;
        this.axis = includes(["top", "bottom"], this.dir) ? "y" : "x";
      },
      methods: {
        positionAt(element, target, boundary) {
          let offset = [this.getPositionOffset(element), this.getShiftOffset(element)];
          const placement = [this.flip && "flip", this.shift && "shift"];
          const attach = {
            element: [this.inset ? this.dir : flipPosition(this.dir), this.align],
            target: [this.dir, this.align]
          };
          if (this.axis === "y") {
            for (const prop in attach) {
              attach[prop].reverse();
            }
            offset.reverse();
            placement.reverse();
          }
          const restoreScrollPosition = storeScrollPosition(element);
          const elDim = dimensions$1(element);
          css(element, { top: -elDim.height, left: -elDim.width });
          positionAt(element, target, {
            attach,
            offset,
            boundary,
            placement,
            viewportOffset: this.getViewportOffset(element)
          });
          restoreScrollPosition();
        },
        getPositionOffset(element = this.$el) {
          return toPx(
            this.offset === false ? css(element, "--uk-position-offset") : this.offset,
            this.axis === "x" ? "width" : "height",
            element
          ) * (includes(["left", "top"], this.dir) ? -1 : 1) * (this.inset ? -1 : 1);
        },
        getShiftOffset(element = this.$el) {
          return this.align === "center" ? 0 : toPx(
            css(element, "--uk-position-shift-offset"),
            this.axis === "y" ? "width" : "height",
            element
          ) * (includes(["left", "top"], this.align) ? 1 : -1);
        },
        getViewportOffset(element) {
          return toPx(css(element, "--uk-position-viewport-offset"));
        }
      }
    };
    function storeScrollPosition(element) {
      const scrollElement = scrollParent(element);
      const { scrollTop } = scrollElement;
      return () => {
        if (scrollTop !== scrollElement.scrollTop) {
          scrollElement.scrollTop = scrollTop;
        }
      };
    }

    var tooltip = {
      mixins: [Container, Togglable, Position],
      data: {
        pos: "top",
        animation: ["uk-animation-scale-up"],
        duration: 100,
        cls: "uk-active"
      },
      connected() {
        makeFocusable(this.$el);
      },
      disconnected() {
        this.hide();
      },
      methods: {
        show() {
          if (this.isToggled(this.tooltip || null)) {
            return;
          }
          const { delay = 0, title } = parseProps(this.$options);
          if (!title) {
            return;
          }
          const titleAttr = attr(this.$el, "title");
          const off = on(this.$el, ["blur", pointerLeave], (e) => !isTouch(e) && this.hide());
          this.reset = () => {
            attr(this.$el, { title: titleAttr, "aria-describedby": null });
            off();
          };
          const id = generateId(this);
          attr(this.$el, { title: null, "aria-describedby": id });
          clearTimeout(this.showTimer);
          this.showTimer = setTimeout(() => this._show(title, id), delay);
        },
        async hide() {
          var _a;
          if (matches(this.$el, "input:focus")) {
            return;
          }
          clearTimeout(this.showTimer);
          if (this.isToggled(this.tooltip || null)) {
            await this.toggleElement(this.tooltip, false, false);
          }
          (_a = this.reset) == null ? void 0 : _a.call(this);
          remove$1(this.tooltip);
          this.tooltip = null;
        },
        async _show(title, id) {
          this.tooltip = append(
            this.container,
            `<div id="${id}" class="uk-${this.$options.name}" role="tooltip"> <div class="uk-${this.$options.name}-inner">${title}</div> </div>`
          );
          on(this.tooltip, "toggled", (e, toggled) => {
            if (!toggled) {
              return;
            }
            const update = () => this.positionAt(this.tooltip, this.$el);
            update();
            const [dir, align] = getAlignment(this.tooltip, this.$el, this.pos);
            this.origin = this.axis === "y" ? `${flipPosition(dir)}-${align}` : `${align}-${flipPosition(dir)}`;
            const handlers = [
              once(
                document,
                `keydown ${pointerDown$1}`,
                this.hide,
                false,
                (e2) => e2.type === pointerDown$1 && !this.$el.contains(e2.target) || e2.type === "keydown" && e2.keyCode === keyMap.ESC
              ),
              on([document, ...overflowParents(this.$el)], "scroll", update, {
                passive: true
              })
            ];
            once(this.tooltip, "hide", () => handlers.forEach((handler) => handler()), {
              self: true
            });
          });
          if (!await this.toggleElement(this.tooltip, true)) {
            this.hide();
          }
        }
      },
      events: {
        // Clicking a button does not give it focus on all browsers and platforms
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#clicking_and_focus
        [`focus ${pointerEnter} ${pointerDown$1}`](e) {
          if (!isTouch(e) || e.type === pointerDown$1) {
            this.show();
          }
        }
      }
    };
    function makeFocusable(el) {
      if (!isFocusable(el)) {
        attr(el, "tabindex", "0");
      }
    }
    function getAlignment(el, target, [dir, align]) {
      const elOffset = offset(el);
      const targetOffset = offset(target);
      const properties = [
        ["left", "right"],
        ["top", "bottom"]
      ];
      for (const props2 of properties) {
        if (elOffset[props2[0]] >= targetOffset[props2[1]]) {
          dir = props2[1];
          break;
        }
        if (elOffset[props2[1]] <= targetOffset[props2[0]]) {
          dir = props2[0];
          break;
        }
      }
      const props = includes(properties[0], dir) ? properties[1] : properties[0];
      align = props.find((prop) => elOffset[prop] === targetOffset[prop]) || "center";
      return [dir, align];
    }
    function parseProps(options) {
      const { el, id, data: data$1 } = options;
      return ["delay", "title"].reduce((obj, key) => ({ [key]: data(el, key), ...obj }), {
        ...parseOptions(data(el, id), ["title"]),
        ...data$1
      });
    }

    var upload = {
      mixins: [I18n],
      i18n: {
        invalidMime: "Invalid File Type: %s",
        invalidName: "Invalid File Name: %s",
        invalidSize: "Invalid File Size: %s Kilobytes Max"
      },
      props: {
        allow: String,
        clsDragover: String,
        concurrent: Number,
        maxSize: Number,
        method: String,
        mime: String,
        multiple: Boolean,
        name: String,
        params: Object,
        type: String,
        url: String
      },
      data: {
        allow: false,
        clsDragover: "uk-dragover",
        concurrent: 1,
        maxSize: 0,
        method: "POST",
        mime: false,
        multiple: false,
        name: "files[]",
        params: {},
        type: "",
        url: "",
        abort: noop,
        beforeAll: noop,
        beforeSend: noop,
        complete: noop,
        completeAll: noop,
        error: noop,
        fail: noop,
        load: noop,
        loadEnd: noop,
        loadStart: noop,
        progress: noop
      },
      events: {
        change(e) {
          if (!matches(e.target, 'input[type="file"]')) {
            return;
          }
          e.preventDefault();
          if (e.target.files) {
            this.upload(e.target.files);
          }
          e.target.value = "";
        },
        drop(e) {
          stop(e);
          const transfer = e.dataTransfer;
          if (!(transfer == null ? void 0 : transfer.files)) {
            return;
          }
          removeClass(this.$el, this.clsDragover);
          this.upload(transfer.files);
        },
        dragenter(e) {
          stop(e);
        },
        dragover(e) {
          stop(e);
          addClass(this.$el, this.clsDragover);
        },
        dragleave(e) {
          stop(e);
          removeClass(this.$el, this.clsDragover);
        }
      },
      methods: {
        async upload(files) {
          files = toArray(files);
          if (!files.length) {
            return;
          }
          trigger(this.$el, "upload", [files]);
          for (const file of files) {
            if (this.maxSize && this.maxSize * 1e3 < file.size) {
              this.fail(this.t("invalidSize", this.maxSize));
              return;
            }
            if (this.allow && !match$1(this.allow, file.name)) {
              this.fail(this.t("invalidName", this.allow));
              return;
            }
            if (this.mime && !match$1(this.mime, file.type)) {
              this.fail(this.t("invalidMime", this.mime));
              return;
            }
          }
          if (!this.multiple) {
            files = files.slice(0, 1);
          }
          this.beforeAll(this, files);
          const chunks = chunk(files, this.concurrent);
          const upload = async (files2) => {
            const data = new FormData();
            files2.forEach((file) => data.append(this.name, file));
            for (const key in this.params) {
              data.append(key, this.params[key]);
            }
            try {
              const xhr = await ajax(this.url, {
                data,
                method: this.method,
                responseType: this.type,
                beforeSend: (env) => {
                  const { xhr: xhr2 } = env;
                  on(xhr2.upload, "progress", this.progress);
                  for (const type of ["loadStart", "load", "loadEnd", "abort"]) {
                    on(xhr2, type.toLowerCase(), this[type]);
                  }
                  return this.beforeSend(env);
                }
              });
              this.complete(xhr);
              if (chunks.length) {
                await upload(chunks.shift());
              } else {
                this.completeAll(xhr);
              }
            } catch (e) {
              this.error(e);
            }
          };
          await upload(chunks.shift());
        }
      }
    };
    function match$1(pattern, path) {
      return path.match(
        new RegExp(
          `^${pattern.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.")}$`,
          "i"
        )
      );
    }
    function chunk(files, size) {
      const chunks = [];
      for (let i = 0; i < files.length; i += size) {
        chunks.push(files.slice(i, i + size));
      }
      return chunks;
    }
    function stop(e) {
      e.preventDefault();
      e.stopPropagation();
    }
    async function ajax(url, options) {
      const env = {
        data: null,
        method: "GET",
        headers: {},
        xhr: new XMLHttpRequest(),
        beforeSend: noop,
        responseType: "",
        ...options
      };
      await env.beforeSend(env);
      return send(url, env);
    }
    function send(url, env) {
      return new Promise((resolve, reject) => {
        const { xhr } = env;
        for (const prop in env) {
          if (prop in xhr) {
            try {
              xhr[prop] = env[prop];
            } catch (e) {
            }
          }
        }
        xhr.open(env.method.toUpperCase(), url);
        for (const header in env.headers) {
          xhr.setRequestHeader(header, env.headers[header]);
        }
        on(xhr, "load", () => {
          if (xhr.status === 0 || xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
            resolve(xhr);
          } else {
            reject(
              assign(Error(xhr.statusText), {
                xhr,
                status: xhr.status
              })
            );
          }
        });
        on(xhr, "error", () => reject(assign(Error("Network Error"), { xhr })));
        on(xhr, "timeout", () => reject(assign(Error("Network Timeout"), { xhr })));
        xhr.send(env.data);
      });
    }

    var components$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Countdown: countdown,
        Filter: filter,
        Lightbox: lightbox,
        LightboxPanel: LightboxPanel,
        Notification: notification,
        Parallax: parallax,
        Slider: slider,
        SliderParallax: sliderParallax,
        Slideshow: slideshow,
        SlideshowParallax: sliderParallax,
        Sortable: sortable,
        Tooltip: tooltip,
        Upload: upload
    });

    function boot(App) {
      if (inBrowser && window.MutationObserver) {
        if (document.body) {
          requestAnimationFrame(() => init(App));
        } else {
          new MutationObserver((records, observer) => {
            if (document.body) {
              init(App);
              observer.disconnect();
            }
          }).observe(document.documentElement, { childList: true });
        }
      }
    }
    function init(App) {
      trigger(document, "uikit:init", App);
      if (document.body) {
        apply(document.body, connect);
      }
      new MutationObserver((records) => records.forEach(applyChildListMutation)).observe(document, {
        subtree: true,
        childList: true
      });
      new MutationObserver((records) => records.forEach(applyAttributeMutation)).observe(document, {
        subtree: true,
        attributes: true
      });
      App._initialized = true;
    }
    function applyChildListMutation({ addedNodes, removedNodes }) {
      for (const node of addedNodes) {
        apply(node, connect);
      }
      for (const node of removedNodes) {
        apply(node, disconnect);
      }
    }
    function applyAttributeMutation({ target, attributeName }) {
      var _a;
      const name = getComponentName(attributeName);
      if (name) {
        if (hasAttr(target, attributeName)) {
          createComponent(name, target);
        } else {
          (_a = getComponent(target, name)) == null ? void 0 : _a.$destroy();
        }
      }
    }
    function connect(node) {
      const components2 = getComponents(node);
      for (const name in components2) {
        callConnected(components2[name]);
      }
      for (const attributeName of node.getAttributeNames()) {
        const name = getComponentName(attributeName);
        name && createComponent(name, node);
      }
    }
    function disconnect(node) {
      const components2 = getComponents(node);
      for (const name in components2) {
        callDisconnected(components2[name]);
      }
    }
    function getComponentName(attribute) {
      if (startsWith(attribute, "data-")) {
        attribute = attribute.slice(5);
      }
      const cmp = components$2[attribute];
      return cmp && (cmp.options || cmp).name;
    }

    globalApi(App);
    instanceApi(App);

    var Accordion = {
      mixins: [Class, Togglable],
      props: {
        animation: Boolean,
        targets: String,
        active: null,
        collapsible: Boolean,
        multiple: Boolean,
        toggle: String,
        content: String,
        offset: Number
      },
      data: {
        targets: "> *",
        active: false,
        animation: true,
        collapsible: true,
        multiple: false,
        clsOpen: "uk-open",
        toggle: "> .uk-accordion-title",
        content: "> .uk-accordion-content",
        offset: 0
      },
      computed: {
        items: ({ targets }, $el) => $$(targets, $el),
        toggles({ toggle }) {
          return this.items.map((item) => $(toggle, item));
        },
        contents({ content }) {
          return this.items.map((item) => {
            var _a;
            return ((_a = item._wrapper) == null ? void 0 : _a.firstElementChild) || $(content, item);
          });
        }
      },
      watch: {
        items(items, prev) {
          if (prev || hasClass(items, this.clsOpen)) {
            return;
          }
          const active = this.active !== false && items[Number(this.active)] || !this.collapsible && items[0];
          if (active) {
            this.toggle(active, false);
          }
        },
        toggles() {
          this.$emit();
        },
        contents(items) {
          for (const el of items) {
            const isOpen = hasClass(
              this.items.find((item) => item.contains(el)),
              this.clsOpen
            );
            hide(el, !isOpen);
          }
          this.$emit();
        }
      },
      observe: lazyload(),
      events: [
        {
          name: "click keydown",
          delegate: ({ targets, $props }) => `${targets} ${$props.toggle}`,
          async handler(e) {
            var _a;
            if (e.type === "keydown" && e.keyCode !== keyMap.SPACE) {
              return;
            }
            e.preventDefault();
            (_a = this._off) == null ? void 0 : _a.call(this);
            this._off = keepScrollPosition(e.target);
            await this.toggle(index(this.toggles, e.current));
            this._off();
          }
        },
        {
          name: "shown hidden",
          self: true,
          delegate: ({ targets }) => targets,
          handler() {
            this.$emit();
          }
        }
      ],
      update() {
        const activeItems = filter$1(this.items, `.${this.clsOpen}`);
        for (const index2 in this.items) {
          const toggle = this.toggles[index2];
          const content = this.contents[index2];
          if (!toggle || !content) {
            continue;
          }
          toggle.id = generateId(this, toggle);
          content.id = generateId(this, content);
          const active = includes(activeItems, this.items[index2]);
          attr(toggle, {
            role: isTag(toggle, "a") ? "button" : null,
            "aria-controls": content.id,
            "aria-expanded": active,
            "aria-disabled": !this.collapsible && activeItems.length < 2 && active
          });
          attr(content, { role: "region", "aria-labelledby": toggle.id });
          if (isTag(content, "ul")) {
            attr(children(content), "role", "presentation");
          }
        }
      },
      methods: {
        toggle(item, animate) {
          item = this.items[getIndex(item, this.items)];
          let items = [item];
          const activeItems = filter$1(this.items, `.${this.clsOpen}`);
          if (!this.multiple && !includes(activeItems, items[0])) {
            items = items.concat(activeItems);
          }
          if (!this.collapsible && activeItems.length < 2 && includes(activeItems, item)) {
            return;
          }
          return Promise.all(
            items.map(
              (el) => this.toggleElement(el, !includes(activeItems, el), (el2, show) => {
                toggleClass(el2, this.clsOpen, show);
                if (animate === false || !this.animation) {
                  hide($(this.content, el2), !show);
                  return;
                }
                return transition(el2, show, this);
              })
            )
          );
        }
      }
    };
    function hide(el, hide2) {
      el && (el.hidden = hide2);
    }
    async function transition(el, show, { content, duration, velocity, transition: transition2 }) {
      var _a;
      content = ((_a = el._wrapper) == null ? void 0 : _a.firstElementChild) || $(content, el);
      if (!el._wrapper) {
        el._wrapper = wrapAll(content, "<div>");
      }
      const wrapper = el._wrapper;
      css(wrapper, "overflow", "hidden");
      const currentHeight = toFloat(css(wrapper, "height"));
      await Transition.cancel(wrapper);
      hide(content, false);
      const endHeight = sumBy(["marginTop", "marginBottom"], (prop) => css(content, prop)) + dimensions$1(content).height;
      const percent = currentHeight / endHeight;
      duration = (velocity * endHeight + duration) * (show ? 1 - percent : percent);
      css(wrapper, "height", currentHeight);
      await Transition.start(wrapper, { height: show ? endHeight : 0 }, duration, transition2);
      unwrap(content);
      delete el._wrapper;
      if (!show) {
        hide(content, true);
      }
    }
    function keepScrollPosition(el) {
      const scrollElement = scrollParent(el, true);
      let frame;
      (function scroll() {
        frame = requestAnimationFrame(() => {
          const { top } = dimensions$1(el);
          if (top < 0) {
            scrollElement.scrollTop += top;
          }
          scroll();
        });
      })();
      return () => requestAnimationFrame(() => cancelAnimationFrame(frame));
    }

    var alert = {
      mixins: [Class, Togglable],
      args: "animation",
      props: {
        animation: Boolean,
        close: String
      },
      data: {
        animation: true,
        selClose: ".uk-alert-close",
        duration: 150
      },
      events: {
        name: "click",
        delegate: ({ selClose }) => selClose,
        handler(e) {
          e.preventDefault();
          this.close();
        }
      },
      methods: {
        async close() {
          await this.toggleElement(this.$el, false, animate);
          this.$destroy(true);
        }
      }
    };
    function animate(el, show, { duration, transition, velocity }) {
      const height = toFloat(css(el, "height"));
      css(el, "height", height);
      return Transition.start(
        el,
        {
          height: 0,
          marginTop: 0,
          marginBottom: 0,
          paddingTop: 0,
          paddingBottom: 0,
          borderTop: 0,
          borderBottom: 0,
          opacity: 0
        },
        velocity * height + duration,
        transition
      );
    }

    var Video = {
      args: "autoplay",
      props: {
        automute: Boolean,
        autoplay: Boolean
      },
      data: {
        automute: false,
        autoplay: true
      },
      beforeConnect() {
        if (this.autoplay === "inview" && !hasAttr(this.$el, "preload")) {
          this.$el.preload = "none";
        }
        if (isTag(this.$el, "iframe") && !hasAttr(this.$el, "allow")) {
          this.$el.allow = "autoplay";
        }
        if (this.autoplay === "hover") {
          if (isTag(this.$el, "video")) {
            this.$el.tabindex = 0;
          } else {
            this.autoplay = true;
          }
        }
        if (this.automute) {
          mute(this.$el);
        }
      },
      events: [
        {
          name: `${pointerEnter} focusin`,
          filter: ({ autoplay }) => includes(autoplay, "hover"),
          handler(e) {
            if (!isTouch(e) || !isPlaying(this.$el)) {
              play(this.$el);
            } else {
              pause(this.$el);
            }
          }
        },
        {
          name: `${pointerLeave} focusout`,
          filter: ({ autoplay }) => includes(autoplay, "hover"),
          handler(e) {
            if (!isTouch(e)) {
              pause(this.$el);
            }
          }
        }
      ],
      observe: [
        intersection({
          filter: ({ $el, autoplay }) => autoplay && autoplay !== "hover" && isVideo($el),
          handler([{ isIntersecting }]) {
            if (!document.fullscreenElement) {
              if (isIntersecting) {
                play(this.$el);
              } else {
                pause(this.$el);
              }
            }
          },
          args: { intersecting: false },
          options: ({ $el, autoplay }) => ({ root: autoplay === "inview" ? null : parent($el) })
        })
      ]
    };
    function isPlaying(videoEl) {
      return !videoEl.paused && !videoEl.ended;
    }

    var cover = {
      mixins: [Video],
      props: {
        width: Number,
        height: Number
      },
      data: {
        automute: true
      },
      created() {
        this.useObjectFit = isTag(this.$el, "img", "video");
      },
      observe: resize({
        target: ({ $el }) => getPositionedParent($el) || parent($el),
        filter: ({ useObjectFit }) => !useObjectFit
      }),
      update: {
        read() {
          if (this.useObjectFit) {
            return false;
          }
          const { ratio, cover } = Dimensions;
          const { $el, width, height } = this;
          let dim = { width, height };
          if (!width || !height) {
            const intrinsic = {
              width: $el.naturalWidth || $el.videoWidth || $el.clientWidth,
              height: $el.naturalHeight || $el.videoHeight || $el.clientHeight
            };
            if (width) {
              dim = ratio(intrinsic, "width", width);
            } else if (height) {
              dim = ratio(intrinsic, "height", height);
            } else {
              dim = intrinsic;
            }
          }
          const { offsetHeight: coverHeight, offsetWidth: coverWidth } = getPositionedParent($el) || parent($el);
          const coverDim = cover(dim, { width: coverWidth, height: coverHeight });
          if (!coverDim.width || !coverDim.height) {
            return false;
          }
          return coverDim;
        },
        write({ height, width }) {
          css(this.$el, { height, width });
        },
        events: ["resize"]
      }
    };
    function getPositionedParent(el) {
      while (el = parent(el)) {
        if (css(el, "position") !== "static") {
          return el;
        }
      }
    }

    let active;
    var drop = {
      mixins: [Container, Position, Togglable],
      args: "pos",
      props: {
        mode: "list",
        toggle: Boolean,
        boundary: Boolean,
        boundaryX: Boolean,
        boundaryY: Boolean,
        target: Boolean,
        targetX: Boolean,
        targetY: Boolean,
        stretch: Boolean,
        delayShow: Number,
        delayHide: Number,
        autoUpdate: Boolean,
        clsDrop: String,
        animateOut: Boolean,
        bgScroll: Boolean,
        closeOnScroll: Boolean
      },
      data: {
        mode: ["click", "hover"],
        toggle: "- *",
        boundary: false,
        boundaryX: false,
        boundaryY: false,
        target: false,
        targetX: false,
        targetY: false,
        stretch: false,
        delayShow: 0,
        delayHide: 800,
        autoUpdate: true,
        clsDrop: false,
        animateOut: false,
        bgScroll: true,
        animation: ["uk-animation-fade"],
        cls: "uk-open",
        container: false,
        closeOnScroll: false
      },
      computed: {
        boundary({ boundary, boundaryX, boundaryY }, $el) {
          return [
            query(boundaryX || boundary, $el) || window,
            query(boundaryY || boundary, $el) || window
          ];
        },
        target({ target, targetX, targetY }, $el) {
          targetX || (targetX = target || this.targetEl);
          targetY || (targetY = target || this.targetEl);
          return [
            targetX === true ? window : query(targetX, $el),
            targetY === true ? window : query(targetY, $el)
          ];
        }
      },
      created() {
        this.tracker = new MouseTracker();
      },
      beforeConnect() {
        this.clsDrop = this.$props.clsDrop || this.$options.id;
      },
      connected() {
        addClass(this.$el, "uk-drop", this.clsDrop);
        if (this.toggle && !this.targetEl) {
          this.targetEl = createToggleComponent(this);
        }
        this._style = pick(this.$el.style, ["width", "height"]);
      },
      disconnected() {
        if (this.isActive()) {
          this.hide(false);
          active = null;
        }
        css(this.$el, this._style);
      },
      events: [
        {
          name: "click",
          delegate: () => ".uk-drop-close",
          handler(e) {
            e.preventDefault();
            this.hide(false);
          }
        },
        {
          name: "click",
          delegate: () => 'a[href*="#"]',
          handler({ defaultPrevented, current }) {
            const { hash } = current;
            if (!defaultPrevented && hash && isSameSiteAnchor(current) && !this.$el.contains($(hash))) {
              this.hide(false);
            }
          }
        },
        {
          name: "beforescroll",
          handler() {
            this.hide(false);
          }
        },
        {
          name: "toggle",
          self: true,
          handler(e, toggle) {
            e.preventDefault();
            if (this.isToggled()) {
              this.hide(false);
            } else {
              this.show(toggle == null ? void 0 : toggle.$el, false);
            }
          }
        },
        {
          name: "toggleshow",
          self: true,
          handler(e, toggle) {
            e.preventDefault();
            this.show(toggle == null ? void 0 : toggle.$el);
          }
        },
        {
          name: "togglehide",
          self: true,
          handler(e) {
            e.preventDefault();
            if (!matches(this.$el, ":focus,:hover")) {
              this.hide();
            }
          }
        },
        {
          name: `${pointerEnter} focusin`,
          filter: ({ mode }) => includes(mode, "hover"),
          handler(e) {
            if (!isTouch(e)) {
              this.clearTimers();
            }
          }
        },
        {
          name: `${pointerLeave} focusout`,
          filter: ({ mode }) => includes(mode, "hover"),
          handler(e) {
            if (!isTouch(e) && e.relatedTarget) {
              this.hide();
            }
          }
        },
        {
          name: "toggled",
          self: true,
          handler(e, toggled) {
            if (toggled) {
              this.clearTimers();
              this.position();
            }
          }
        },
        {
          name: "show",
          self: true,
          handler() {
            active = this;
            this.tracker.init();
            attr(this.targetEl, "aria-expanded", true);
            const handlers = [
              listenForResize(this),
              listenForEscClose(this),
              listenForBackgroundClose(this),
              this.autoUpdate && listenForScroll(this),
              this.closeOnScroll && listenForScrollClose(this)
            ];
            once(this.$el, "hide", () => handlers.forEach((handler) => handler && handler()), {
              self: true
            });
            if (!this.bgScroll) {
              once(this.$el, "hidden", preventBackgroundScroll(this.$el), { self: true });
            }
          }
        },
        {
          name: "beforehide",
          self: true,
          handler: "clearTimers"
        },
        {
          name: "hide",
          handler({ target }) {
            if (this.$el !== target) {
              active = active === null && this.$el.contains(target) && this.isToggled() ? this : active;
              return;
            }
            active = this.isActive() ? null : active;
            this.tracker.cancel();
            attr(this.targetEl, "aria-expanded", null);
          }
        }
      ],
      update: {
        write() {
          if (this.isToggled() && !hasClass(this.$el, this.clsEnter)) {
            this.position();
          }
        }
      },
      methods: {
        show(target = this.targetEl, delay = true) {
          if (this.isToggled() && target && this.targetEl && target !== this.targetEl) {
            this.hide(false, false);
          }
          this.targetEl = target;
          this.clearTimers();
          if (this.isActive()) {
            return;
          }
          if (active) {
            if (delay && active.isDelaying()) {
              this.showTimer = setTimeout(() => matches(target, ":hover") && this.show(), 10);
              return;
            }
            let prev;
            while (active && prev !== active && !active.$el.contains(this.$el)) {
              prev = active;
              active.hide(false, false);
            }
          }
          if (this.container && parent(this.$el) !== this.container) {
            append(this.container, this.$el);
          }
          this.showTimer = setTimeout(
            () => this.toggleElement(this.$el, true),
            delay && this.delayShow || 0
          );
        },
        hide(delay = true, animate = true) {
          const hide = () => this.toggleElement(this.$el, false, this.animateOut && animate);
          this.clearTimers();
          this.isDelayedHide = delay;
          if (delay && this.isDelaying()) {
            this.hideTimer = setTimeout(this.hide, 50);
          } else if (delay && this.delayHide) {
            this.hideTimer = setTimeout(hide, this.delayHide);
          } else {
            hide();
          }
        },
        clearTimers() {
          clearTimeout(this.showTimer);
          clearTimeout(this.hideTimer);
          this.showTimer = null;
          this.hideTimer = null;
        },
        isActive() {
          return active === this;
        },
        isDelaying() {
          return [this.$el, ...$$(".uk-drop", this.$el)].some((el) => this.tracker.movesTo(el));
        },
        position() {
          const restoreScrollPosition = storeScrollPosition(this.$el);
          removeClass(this.$el, "uk-drop-stack");
          css(this.$el, this._style);
          this.$el.hidden = true;
          const viewports = this.target.map((target) => getViewport$1(this.$el, target));
          const viewportOffset = this.getViewportOffset(this.$el);
          const dirs = [
            [0, ["x", "width", "left", "right"]],
            [1, ["y", "height", "top", "bottom"]]
          ];
          for (const [i, [axis, prop]] of dirs) {
            if (this.axis !== axis && includes([axis, true], this.stretch)) {
              css(this.$el, {
                [prop]: Math.min(
                  offset(this.boundary[i])[prop],
                  viewports[i][prop] - 2 * viewportOffset
                ),
                [`overflow-${axis}`]: "auto"
              });
            }
          }
          const maxWidth = viewports[0].width - 2 * viewportOffset;
          this.$el.hidden = false;
          css(this.$el, "maxWidth", "");
          if (this.$el.offsetWidth > maxWidth) {
            addClass(this.$el, "uk-drop-stack");
          }
          css(this.$el, "maxWidth", maxWidth);
          this.positionAt(this.$el, this.target, this.boundary);
          for (const [i, [axis, prop, start, end]] of dirs) {
            if (this.axis === axis && includes([axis, true], this.stretch)) {
              const positionOffset = Math.abs(this.getPositionOffset());
              const targetOffset = offset(this.target[i]);
              const elOffset = offset(this.$el);
              css(this.$el, {
                [prop]: (targetOffset[start] > elOffset[start] ? targetOffset[this.inset ? end : start] - Math.max(
                  offset(this.boundary[i])[start],
                  viewports[i][start] + viewportOffset
                ) : Math.min(
                  offset(this.boundary[i])[end],
                  viewports[i][end] - viewportOffset
                ) - targetOffset[this.inset ? start : end]) - positionOffset,
                [`overflow-${axis}`]: "auto"
              });
              this.positionAt(this.$el, this.target, this.boundary);
            }
          }
          restoreScrollPosition();
        }
      }
    };
    function getViewport$1(el, target) {
      return offsetViewport(overflowParents(target).find((parent2) => parent2.contains(el)));
    }
    function createToggleComponent(drop) {
      const { $el } = drop.$create("toggle", query(drop.toggle, drop.$el), {
        target: drop.$el,
        mode: drop.mode
      });
      attr($el, "aria-haspopup", true);
      return $el;
    }
    function listenForResize(drop) {
      const update = () => drop.$emit();
      const off = [
        observeViewportResize(update),
        observeResize(overflowParents(drop.$el).concat(drop.target), update)
      ];
      return () => off.map((observer) => observer.disconnect());
    }
    function listenForScroll(drop, fn = () => drop.$emit()) {
      return on([document, ...overflowParents(drop.$el)], "scroll", fn, {
        passive: true
      });
    }
    function listenForEscClose(drop) {
      return on(document, "keydown", (e) => {
        if (e.keyCode === keyMap.ESC) {
          drop.hide(false);
        }
      });
    }
    function listenForScrollClose(drop) {
      return listenForScroll(drop, () => drop.hide(false));
    }
    function listenForBackgroundClose(drop) {
      return on(document, pointerDown$1, ({ target }) => {
        if (drop.$el.contains(target)) {
          return;
        }
        once(
          document,
          `${pointerUp$1} ${pointerCancel} scroll`,
          ({ defaultPrevented, type, target: newTarget }) => {
            var _a;
            if (!defaultPrevented && type === pointerUp$1 && target === newTarget && !((_a = drop.targetEl) == null ? void 0 : _a.contains(target))) {
              drop.hide(false);
            }
          },
          true
        );
      });
    }

    var Dropnav = {
      mixins: [Class, Container],
      props: {
        align: String,
        clsDrop: String,
        boundary: Boolean,
        dropbar: Boolean,
        dropbarAnchor: Boolean,
        duration: Number,
        mode: Boolean,
        offset: Boolean,
        stretch: Boolean,
        delayShow: Boolean,
        delayHide: Boolean,
        target: Boolean,
        targetX: Boolean,
        targetY: Boolean,
        animation: Boolean,
        animateOut: Boolean,
        closeOnScroll: Boolean
      },
      data: {
        align: isRtl ? "right" : "left",
        clsDrop: "uk-dropdown",
        clsDropbar: "uk-dropnav-dropbar",
        boundary: true,
        dropbar: false,
        dropbarAnchor: false,
        duration: 200,
        container: false,
        selNavItem: "> li > a, > ul > li > a"
      },
      computed: {
        dropbarAnchor: ({ dropbarAnchor }, $el) => query(dropbarAnchor, $el) || $el,
        dropbar({ dropbar }) {
          if (!dropbar) {
            return null;
          }
          dropbar = this._dropbar || query(dropbar, this.$el) || $(`+ .${this.clsDropbar}`, this.$el);
          return dropbar ? dropbar : this._dropbar = $("<div></div>");
        },
        dropContainer(_, $el) {
          return this.container || $el;
        },
        dropdowns({ clsDrop }, $el) {
          var _a;
          const dropdowns = $$(`.${clsDrop}`, $el);
          if (this.dropContainer !== $el) {
            for (const el of $$(`.${clsDrop}`, this.dropContainer)) {
              const target = (_a = this.getDropdown(el)) == null ? void 0 : _a.targetEl;
              if (!includes(dropdowns, el) && target && this.$el.contains(target)) {
                dropdowns.push(el);
              }
            }
          }
          return dropdowns;
        },
        items({ selNavItem }, $el) {
          return $$(selNavItem, $el);
        }
      },
      watch: {
        dropbar(dropbar) {
          addClass(
            dropbar,
            "uk-dropbar",
            "uk-dropbar-top",
            this.clsDropbar,
            `uk-${this.$options.name}-dropbar`
          );
        },
        dropdowns() {
          this.initializeDropdowns();
        }
      },
      connected() {
        this.initializeDropdowns();
      },
      disconnected() {
        remove$1(this._dropbar);
        delete this._dropbar;
      },
      events: [
        {
          name: "mouseover focusin",
          delegate: ({ selNavItem }) => selNavItem,
          handler({ current }) {
            const active2 = this.getActive();
            if (active2 && includes(active2.mode, "hover") && active2.targetEl && !current.contains(active2.targetEl) && !active2.isDelaying()) {
              active2.hide(false);
            }
          }
        },
        {
          name: "keydown",
          self: true,
          delegate: ({ selNavItem }) => selNavItem,
          handler(e) {
            var _a;
            const { current, keyCode } = e;
            const active2 = this.getActive();
            if (keyCode === keyMap.DOWN && (active2 == null ? void 0 : active2.targetEl) === current) {
              e.preventDefault();
              (_a = $(selFocusable, active2.$el)) == null ? void 0 : _a.focus();
            }
            handleNavItemNavigation(e, this.items, active2);
          }
        },
        {
          name: "keydown",
          el: ({ dropContainer }) => dropContainer,
          delegate: ({ clsDrop }) => `.${clsDrop}`,
          handler(e) {
            var _a;
            const { current, keyCode, target } = e;
            if (isInput(target) || !includes(this.dropdowns, current)) {
              return;
            }
            const active2 = this.getActive();
            let next = -1;
            if (keyCode === keyMap.HOME) {
              next = 0;
            } else if (keyCode === keyMap.END) {
              next = "last";
            } else if (keyCode === keyMap.UP) {
              next = "previous";
            } else if (keyCode === keyMap.DOWN) {
              next = "next";
            } else if (keyCode === keyMap.ESC) {
              (_a = active2.targetEl) == null ? void 0 : _a.focus();
            }
            if (~next) {
              e.preventDefault();
              const elements = $$(selFocusable, current);
              elements[getIndex(
                next,
                elements,
                findIndex(elements, (el) => matches(el, ":focus"))
              )].focus();
            }
            handleNavItemNavigation(e, this.items, active2);
          }
        },
        {
          name: "mouseleave",
          el: ({ dropbar }) => dropbar,
          filter: ({ dropbar }) => dropbar,
          handler() {
            const active2 = this.getActive();
            if (active2 && includes(active2.mode, "hover") && !this.dropdowns.some((el) => matches(el, ":hover"))) {
              active2.hide();
            }
          }
        },
        {
          name: "beforeshow",
          el: ({ dropContainer }) => dropContainer,
          filter: ({ dropbar }) => dropbar,
          handler({ target }) {
            if (!this.isDropbarDrop(target)) {
              return;
            }
            if (this.dropbar.previousElementSibling !== this.dropbarAnchor) {
              after(this.dropbarAnchor, this.dropbar);
            }
            addClass(target, `${this.clsDrop}-dropbar`);
          }
        },
        {
          name: "show",
          el: ({ dropContainer }) => dropContainer,
          filter: ({ dropbar }) => dropbar,
          handler({ target }) {
            if (!this.isDropbarDrop(target)) {
              return;
            }
            const drop = this.getDropdown(target);
            const adjustHeight = () => {
              const maxBottom = Math.max(
                ...parents(target, `.${this.clsDrop}`).concat(target).map((el) => offset(el).bottom)
              );
              offset(this.dropbar, {
                left: offset(this.dropbar).left,
                top: this.getDropbarOffset(drop.getPositionOffset())
              });
              this.transitionTo(
                maxBottom - offset(this.dropbar).top + toFloat(css(target, "marginBottom")),
                target
              );
            };
            this._observer = observeResize([drop.$el, ...drop.target], adjustHeight);
            adjustHeight();
          }
        },
        {
          name: "beforehide",
          el: ({ dropContainer }) => dropContainer,
          filter: ({ dropbar }) => dropbar,
          handler(e) {
            const active2 = this.getActive();
            if (matches(this.dropbar, ":hover") && active2.$el === e.target && this.isDropbarDrop(active2.$el) && includes(active2.mode, "hover") && active2.isDelayedHide && !this.items.some((el) => active2.targetEl !== el && matches(el, ":focus"))) {
              e.preventDefault();
            }
          }
        },
        {
          name: "hide",
          el: ({ dropContainer }) => dropContainer,
          filter: ({ dropbar }) => dropbar,
          handler({ target }) {
            var _a;
            if (!this.isDropbarDrop(target)) {
              return;
            }
            (_a = this._observer) == null ? void 0 : _a.disconnect();
            const active2 = this.getActive();
            if (!active2 || active2.$el === target) {
              this.transitionTo(0);
            }
          }
        }
      ],
      methods: {
        getActive() {
          var _a;
          return includes(this.dropdowns, (_a = active) == null ? void 0 : _a.$el) && active;
        },
        async transitionTo(newHeight, el) {
          const { dropbar } = this;
          const oldHeight = height(dropbar);
          el = oldHeight < newHeight && el;
          await Transition.cancel([el, dropbar]);
          if (el) {
            const diff = offset(el).top - offset(dropbar).top - oldHeight;
            if (diff > 0) {
              css(el, "transitionDelay", `${diff / newHeight * this.duration}ms`);
            }
          }
          css(el, "clipPath", `polygon(0 0,100% 0,100% ${oldHeight}px,0 ${oldHeight}px)`);
          height(dropbar, oldHeight);
          await Promise.all([
            Transition.start(dropbar, { height: newHeight }, this.duration),
            Transition.start(
              el,
              { clipPath: `polygon(0 0,100% 0,100% ${newHeight}px,0 ${newHeight}px)` },
              this.duration
            ).finally(() => css(el, { clipPath: "", transitionDelay: "" }))
          ]).catch(noop);
        },
        getDropdown(el) {
          return this.$getComponent(el, "drop") || this.$getComponent(el, "dropdown");
        },
        isDropbarDrop(el) {
          return includes(this.dropdowns, el) && hasClass(el, this.clsDrop);
        },
        getDropbarOffset(offsetTop) {
          const { $el, target, targetY } = this;
          const { top, height: height2 } = offset(query(targetY || target || $el, $el));
          return top + height2 + offsetTop;
        },
        initializeDropdowns() {
          this.$create(
            "drop",
            this.dropdowns.filter((el) => !this.getDropdown(el)),
            {
              ...this.$props,
              flip: false,
              shift: true,
              pos: `bottom-${this.align}`,
              boundary: this.boundary === true ? this.$el : this.boundary
            }
          );
        }
      }
    };
    function handleNavItemNavigation(e, toggles, active2) {
      var _a, _b, _c;
      const { current, keyCode } = e;
      let next = -1;
      if (keyCode === keyMap.HOME) {
        next = 0;
      } else if (keyCode === keyMap.END) {
        next = "last";
      } else if (keyCode === keyMap.LEFT) {
        next = "previous";
      } else if (keyCode === keyMap.RIGHT) {
        next = "next";
      } else if (keyCode === keyMap.TAB) {
        (_a = active2.targetEl) == null ? void 0 : _a.focus();
        (_b = active2.hide) == null ? void 0 : _b.call(active2, false);
      }
      if (~next) {
        e.preventDefault();
        (_c = active2.hide) == null ? void 0 : _c.call(active2, false);
        toggles[getIndex(next, toggles, toggles.indexOf(active2.targetEl || current))].focus();
      }
    }

    var formCustom = {
      mixins: [Class],
      args: "target",
      props: {
        target: Boolean
      },
      data: {
        target: false
      },
      computed: {
        input: (_, $el) => $(selInput, $el),
        state() {
          return this.input.nextElementSibling;
        },
        target({ target }, $el) {
          return target && (target === true && parent(this.input) === $el && this.input.nextElementSibling || $(target, $el));
        }
      },
      update() {
        var _a;
        const { target, input } = this;
        if (!target) {
          return;
        }
        let option;
        const prop = isInput(target) ? "value" : "textContent";
        const prev = target[prop];
        const value = ((_a = input.files) == null ? void 0 : _a[0]) ? input.files[0].name : matches(input, "select") && (option = $$("option", input).filter((el) => el.selected)[0]) ? option.textContent : input.value;
        if (prev !== value) {
          target[prop] = value;
        }
      },
      events: [
        {
          name: "change",
          handler() {
            this.$emit();
          }
        },
        {
          name: "reset",
          el: ({ $el }) => $el.closest("form"),
          handler() {
            this.$emit();
          }
        }
      ]
    };

    var grid = {
      extends: Margin,
      mixins: [Class],
      name: "grid",
      props: {
        masonry: Boolean,
        parallax: String,
        parallaxStart: String,
        parallaxEnd: String,
        parallaxJustify: Boolean
      },
      data: {
        margin: "uk-grid-margin",
        clsStack: "uk-grid-stack",
        masonry: false,
        parallax: 0,
        parallaxStart: 0,
        parallaxEnd: 0,
        parallaxJustify: false
      },
      connected() {
        this.masonry && addClass(this.$el, "uk-flex-top", "uk-flex-wrap-top");
      },
      observe: scroll$1({ filter: ({ parallax, parallaxJustify }) => parallax || parallaxJustify }),
      update: [
        {
          write({ rows }) {
            toggleClass(this.$el, this.clsStack, !rows.some((row) => row.length > 1));
          },
          events: ["resize"]
        },
        {
          read(data) {
            const { rows } = data;
            let { masonry, parallax, parallaxJustify, margin } = this;
            parallax = Math.max(0, toPx(parallax));
            if (!(masonry || parallax || parallaxJustify) || positionedAbsolute(rows) || rows[0].some(
              (el, i) => rows.some((row) => row[i] && row[i].offsetWidth !== el.offsetWidth)
            )) {
              return data.translates = data.scrollColumns = false;
            }
            let gutter = getGutter(rows, margin);
            let columns;
            let translates;
            if (masonry) {
              [columns, translates] = applyMasonry(rows, gutter, masonry === "next");
            } else {
              columns = transpose(rows);
            }
            const columnHeights = columns.map(
              (column) => sumBy(column, "offsetHeight") + gutter * (column.length - 1)
            );
            const height = Math.max(0, ...columnHeights);
            let scrollColumns;
            let parallaxStart;
            let parallaxEnd;
            if (parallax || parallaxJustify) {
              scrollColumns = columnHeights.map(
                (hgt, i) => parallaxJustify ? height - hgt + parallax : parallax / (i % 2 || 8)
              );
              if (!parallaxJustify) {
                parallax = Math.max(
                  ...columnHeights.map((hgt, i) => hgt + scrollColumns[i] - height)
                );
              }
              parallaxStart = toPx(this.parallaxStart, "height", this.$el, true);
              parallaxEnd = toPx(this.parallaxEnd, "height", this.$el, true);
            }
            return {
              columns,
              translates,
              scrollColumns,
              parallaxStart,
              parallaxEnd,
              padding: parallax,
              height: translates ? height : ""
            };
          },
          write({ height, padding }) {
            css(this.$el, "paddingBottom", padding || "");
            height !== false && css(this.$el, "height", height);
          },
          events: ["resize"]
        },
        {
          read({ rows, scrollColumns, parallaxStart, parallaxEnd }) {
            return {
              scrolled: scrollColumns && !positionedAbsolute(rows) ? scrolledOver(this.$el, parallaxStart, parallaxEnd) : false
            };
          },
          write({ columns, scrolled, scrollColumns, translates }) {
            if (!scrolled && !translates) {
              return;
            }
            columns.forEach(
              (column, i) => column.forEach((el, j) => {
                let [x, y] = translates && translates[i][j] || [0, 0];
                if (scrolled) {
                  y += scrolled * scrollColumns[i];
                }
                css(el, "transform", `translate(${x}px, ${y}px)`);
              })
            );
          },
          events: ["scroll", "resize"]
        }
      ]
    };
    function positionedAbsolute(rows) {
      return rows.flat().some((el) => css(el, "position") === "absolute");
    }
    function applyMasonry(rows, gutter, next) {
      const columns = [];
      const translates = [];
      const columnHeights = Array(rows[0].length).fill(0);
      let rowHeights = 0;
      for (let row of rows) {
        if (isRtl) {
          row = row.reverse();
        }
        let height = 0;
        for (const j in row) {
          const { offsetWidth, offsetHeight } = row[j];
          const index = next ? j : columnHeights.indexOf(Math.min(...columnHeights));
          push(columns, index, row[j]);
          push(translates, index, [
            (index - j) * offsetWidth * (isRtl ? -1 : 1),
            columnHeights[index] - rowHeights
          ]);
          columnHeights[index] += offsetHeight + gutter;
          height = Math.max(height, offsetHeight);
        }
        rowHeights += height + gutter;
      }
      return [columns, translates];
    }
    function getGutter(rows, cls) {
      const node = rows.flat().find((el) => hasClass(el, cls));
      return toFloat(node ? css(node, "marginTop") : css(rows[0][0], "paddingLeft"));
    }
    function transpose(rows) {
      const columns = [];
      for (const row of rows) {
        for (const i in row) {
          push(columns, i, row[i]);
        }
      }
      return columns;
    }
    function push(array, index, value) {
      if (!array[index]) {
        array[index] = [];
      }
      array[index].push(value);
    }

    var heightMatch = {
      args: "target",
      props: {
        target: String,
        row: Boolean
      },
      data: {
        target: "> *",
        row: true
      },
      computed: {
        elements: ({ target }, $el) => $$(target, $el)
      },
      observe: resize({
        target: ({ $el, elements }) => elements.reduce((elements2, el) => elements2.concat(el, ...el.children), [$el])
      }),
      events: {
        // Hidden elements may change height when fonts load
        name: "loadingdone",
        el: () => document.fonts,
        handler() {
          this.$emit("resize");
        }
      },
      update: {
        read() {
          return {
            rows: (this.row ? getRows(this.elements) : [this.elements]).map(match)
          };
        },
        write({ rows }) {
          for (const { heights, elements } of rows) {
            elements.forEach((el, i) => css(el, "minHeight", heights[i]));
          }
        },
        events: ["resize"]
      }
    };
    function match(elements) {
      if (elements.length < 2) {
        return { heights: [""], elements };
      }
      let heights = elements.map(getHeight);
      const max = Math.max(...heights);
      return {
        heights: elements.map((el, i) => heights[i].toFixed(2) === max.toFixed(2) ? "" : max),
        elements
      };
    }
    function getHeight(element) {
      const style = pick(element.style, ["display", "minHeight"]);
      if (!isVisible(element)) {
        css(element, "display", "block", "important");
      }
      css(element, "minHeight", "");
      const height = dimensions$1(element).height - boxModelAdjust(element, "height", "content-box");
      css(element, style);
      return height;
    }

    var heightPlaceholder = {
      args: "target",
      props: {
        target: String
      },
      data: {
        target: ""
      },
      computed: {
        target: {
          get: ({ target }, $el) => query(target, $el),
          observe: ({ target }) => target
        }
      },
      observe: resize({ target: ({ target }) => target }),
      update: {
        read() {
          return this.target ? { height: this.target.offsetHeight } : false;
        },
        write({ height }) {
          css(this.$el, { minHeight: height });
        },
        events: ["resize"]
      }
    };

    var heightViewport = {
      props: {
        expand: Boolean,
        offsetTop: Boolean,
        offsetBottom: Boolean,
        minHeight: Number
      },
      data: {
        expand: false,
        offsetTop: false,
        offsetBottom: false,
        minHeight: 0
      },
      // check for offsetTop change
      observe: [
        viewport({ filter: ({ expand }) => expand }),
        resize({ target: ({ $el }) => scrollParents($el) })
      ],
      update: {
        read() {
          if (!isVisible(this.$el)) {
            return false;
          }
          let minHeight = "";
          const box = boxModelAdjust(this.$el, "height", "content-box");
          const { body, scrollingElement } = document;
          const scrollElement = scrollParent(this.$el);
          const { height: viewportHeight } = offsetViewport(
            scrollElement === body ? scrollingElement : scrollElement
          );
          const isScrollingElement = scrollingElement === scrollElement || body === scrollElement;
          minHeight = `calc(${isScrollingElement ? "100vh" : `${viewportHeight}px`}`;
          if (this.expand) {
            const diff = dimensions$1(scrollElement).height - dimensions$1(this.$el).height;
            minHeight += ` - ${diff}px`;
          } else {
            if (this.offsetTop) {
              if (isScrollingElement) {
                const offsetTopEl = this.offsetTop === true ? this.$el : query(this.offsetTop, this.$el);
                const { top } = offset(offsetTopEl);
                minHeight += top > 0 && top < viewportHeight / 2 ? ` - ${top}px` : "";
              } else {
                minHeight += ` - ${boxModelAdjust(scrollElement, "height", css(scrollElement, "boxSizing"))}px`;
              }
            }
            if (this.offsetBottom === true) {
              minHeight += ` - ${dimensions$1(this.$el.nextElementSibling).height}px`;
            } else if (isNumeric(this.offsetBottom)) {
              minHeight += ` - ${this.offsetBottom}vh`;
            } else if (this.offsetBottom && endsWith(this.offsetBottom, "px")) {
              minHeight += ` - ${toFloat(this.offsetBottom)}px`;
            } else if (isString(this.offsetBottom)) {
              minHeight += ` - ${dimensions$1(query(this.offsetBottom, this.$el)).height}px`;
            }
          }
          minHeight += `${box ? ` - ${box}px` : ""})`;
          return { minHeight };
        },
        write({ minHeight }) {
          css(this.$el, "minHeight", `max(${this.minHeight || 0}px, ${minHeight})`);
        },
        events: ["resize"]
      }
    };

    var closeIcon = "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"1\" y1=\"1\" x2=\"13\" y2=\"13\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13\" y1=\"1\" x2=\"1\" y2=\"13\"/></svg>";

    var closeLarge = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" x1=\"1\" y1=\"1\" x2=\"19\" y2=\"19\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" x1=\"19\" y1=\"1\" x2=\"1\" y2=\"19\"/></svg>";

    var dropParentIcon = "<svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" points=\"1 3.5 6 8.5 11 3.5\"/></svg>";

    var marker = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"><rect width=\"1\" height=\"11\" x=\"9\" y=\"4\"/><rect width=\"11\" height=\"1\" x=\"4\" y=\"9\"/></svg>";

    var navParentIconLarge = "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" points=\"1 4 7 10 13 4\"/></svg>";

    var navParentIcon = "<svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" points=\"1 3.5 6 8.5 11 3.5\"/></svg>";

    var navbarParentIcon = "<svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" points=\"1 3.5 6 8.5 11 3.5\"/></svg>";

    var navbarToggleIcon = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"><style>.uk-navbar-toggle-icon svg&gt;[class*=&quot;line-&quot;]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.uk-navbar-toggle-icon svg&gt;.line-3{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{opacity:1}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-2{transform:rotate(45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{transform:rotate(-45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1,.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1{transform:translateY(6px) scaleX(0)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{transform:translateY(-6px) scaleX(0)}</style><rect width=\"20\" height=\"2\" y=\"3\" class=\"line-1\"/><rect width=\"20\" height=\"2\" y=\"9\" class=\"line-2\"/><rect width=\"20\" height=\"2\" y=\"9\" class=\"line-3\"/><rect width=\"20\" height=\"2\" y=\"15\" class=\"line-4\"/></svg>";

    var overlayIcon = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\"><rect width=\"1\" height=\"40\" x=\"19\" y=\"0\"/><rect width=\"40\" height=\"1\" x=\"0\" y=\"19\"/></svg>";

    var paginationNext = "<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 1 6 6 1 11\"/></svg>";

    var paginationPrevious = "<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"6 1 1 6 6 11\"/></svg>";

    var searchIcon = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9\" cy=\"9\" r=\"7\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M14,14 L18,18 L14,14 Z\"/></svg>";

    var searchLarge = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.8\" cx=\"17.5\" cy=\"17.5\" r=\"16.5\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.8\" x1=\"38\" y1=\"39\" x2=\"29\" y2=\"30\"/></svg>";

    var searchMedium = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10.5\" cy=\"10.5\" r=\"9.5\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"23\" y1=\"23\" x2=\"17\" y2=\"17\"/></svg>";

    var slidenavNextLarge = "<svg width=\"25\" height=\"40\" viewBox=\"0 0 25 40\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"2\" points=\"4.002,38.547 22.527,20.024 4,1.5\"/></svg>";

    var slidenavNext = "<svg width=\"14\" height=\"24\" viewBox=\"0 0 14 24\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" points=\"1.225,23 12.775,12 1.225,1\"/></svg>";

    var slidenavPreviousLarge = "<svg width=\"25\" height=\"40\" viewBox=\"0 0 25 40\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"2\" points=\"20.527,1.5 2,20.024 20.525,38.547\"/></svg>";

    var slidenavPrevious = "<svg width=\"14\" height=\"24\" viewBox=\"0 0 14 24\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" points=\"12.775,1 1.225,12 12.775,23\"/></svg>";

    var spinner = "<svg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\"><circle fill=\"none\" stroke=\"#000\" cx=\"15\" cy=\"15\" r=\"14\"/></svg>";

    var totop = "<svg width=\"18\" height=\"10\" viewBox=\"0 0 18 10\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 9 9 1 17 9\"/></svg>";

    var Svg = {
      args: "src",
      props: {
        width: Number,
        height: Number,
        ratio: Number
      },
      data: {
        ratio: 1
      },
      connected() {
        this.svg = this.getSvg().then((el) => {
          if (!this._connected) {
            return;
          }
          const svg = insertSVG(el, this.$el);
          if (this.svgEl && svg !== this.svgEl) {
            remove$1(this.svgEl);
          }
          applyWidthAndHeight.call(this, svg, el);
          return this.svgEl = svg;
        }, noop);
      },
      disconnected() {
        this.svg.then((svg) => {
          if (this._connected) {
            return;
          }
          if (isVoidElement(this.$el)) {
            this.$el.hidden = false;
          }
          remove$1(svg);
          this.svgEl = null;
        });
        this.svg = null;
      },
      methods: {
        async getSvg() {
        }
      }
    };
    function insertSVG(el, root) {
      if (isVoidElement(root) || isTag(root, "canvas")) {
        root.hidden = true;
        const next = root.nextElementSibling;
        return equals(el, next) ? next : after(root, el);
      }
      const last = root.lastElementChild;
      return equals(el, last) ? last : append(root, el);
    }
    function equals(el, other) {
      return isTag(el, "svg") && isTag(other, "svg") && el.innerHTML === other.innerHTML;
    }
    function applyWidthAndHeight(el, ref) {
      const props = ["width", "height"];
      let dimensions = props.map((prop) => this[prop]);
      if (!dimensions.some((val) => val)) {
        dimensions = props.map((prop) => attr(ref, prop));
      }
      const viewBox = attr(ref, "viewBox");
      if (viewBox && !dimensions.some((val) => val)) {
        dimensions = viewBox.split(" ").slice(2);
      }
      dimensions.forEach((val, i) => attr(el, props[i], toFloat(val) * this.ratio || null));
    }

    var svg = {
      mixins: [Svg],
      args: "src",
      props: {
        src: String,
        icon: String,
        attributes: "list",
        strokeAnimation: Boolean
      },
      data: {
        strokeAnimation: false
      },
      observe: [
        mutation({
          async handler() {
            const svg = await this.svg;
            if (svg) {
              applyAttributes.call(this, svg);
            }
          },
          options: {
            attributes: true,
            attributeFilter: ["id", "class", "style"]
          }
        })
      ],
      async connected() {
        if (includes(this.src, "#")) {
          [this.src, this.icon] = this.src.split("#");
        }
        const svg = await this.svg;
        if (svg) {
          applyAttributes.call(this, svg);
          if (this.strokeAnimation) {
            applyAnimation(svg);
          }
        }
      },
      methods: {
        async getSvg() {
          if (isTag(this.$el, "img") && !this.$el.complete && this.$el.loading === "lazy") {
            await new Promise((resolve) => once(this.$el, "load", resolve));
          }
          return parseSVG(await loadSVG(this.src), this.icon) || Promise.reject("SVG not found.");
        }
      }
    };
    function applyAttributes(el) {
      const { $el } = this;
      addClass(el, attr($el, "class"), "uk-svg");
      for (let i = 0; i < $el.style.length; i++) {
        const prop = $el.style[i];
        css(el, prop, css($el, prop));
      }
      for (const attribute in this.attributes) {
        const [prop, value] = this.attributes[attribute].split(":", 2);
        attr(el, prop, value);
      }
      if (!this.$el.id) {
        removeAttr(el, "id");
      }
    }
    const loadSVG = memoize(async (src) => {
      if (src) {
        if (startsWith(src, "data:")) {
          return decodeURIComponent(src.split(",")[1]);
        } else {
          return (await fetch(src)).text();
        }
      } else {
        return Promise.reject();
      }
    });
    function parseSVG(svg, icon) {
      if (icon && includes(svg, "<symbol")) {
        svg = parseSymbols(svg)[icon] || svg;
      }
      return stringToSvg(svg);
    }
    const symbolRe = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g;
    const parseSymbols = memoize(function(svg) {
      const symbols = {};
      symbolRe.lastIndex = 0;
      let match;
      while (match = symbolRe.exec(svg)) {
        symbols[match[3]] = `<svg ${match[1]}svg>`;
      }
      return symbols;
    });
    function applyAnimation(el) {
      const length = getMaxPathLength(el);
      if (length) {
        css(el, "--uk-animation-stroke", length);
      }
    }
    function stringToSvg(string) {
      const container = document.createElement("template");
      container.innerHTML = string;
      return container.content.firstElementChild;
    }

    const icons = {
      spinner,
      totop,
      marker,
      "close-icon": closeIcon,
      "close-large": closeLarge,
      "drop-parent-icon": dropParentIcon,
      "nav-parent-icon": navParentIcon,
      "nav-parent-icon-large": navParentIconLarge,
      "navbar-parent-icon": navbarParentIcon,
      "navbar-toggle-icon": navbarToggleIcon,
      "overlay-icon": overlayIcon,
      "pagination-next": paginationNext,
      "pagination-previous": paginationPrevious,
      "search-icon": searchIcon,
      "search-medium": searchMedium,
      "search-large": searchLarge,
      "search-toggle-icon": searchIcon,
      "slidenav-next": slidenavNext,
      "slidenav-next-large": slidenavNextLarge,
      "slidenav-previous": slidenavPrevious,
      "slidenav-previous-large": slidenavPreviousLarge
    };
    const Icon = {
      install: install$1,
      mixins: [Svg],
      args: "icon",
      props: { icon: String },
      isIcon: true,
      beforeConnect() {
        addClass(this.$el, "uk-icon");
      },
      methods: {
        async getSvg() {
          const icon = getIcon(this.icon);
          if (!icon) {
            throw "Icon not found.";
          }
          return icon;
        }
      }
    };
    const IconComponent = {
      args: false,
      extends: Icon,
      data: (vm) => ({
        icon: hyphenate(vm.constructor.options.name)
      }),
      beforeConnect() {
        addClass(this.$el, this.$options.id);
      }
    };
    const NavParentIcon = {
      extends: IconComponent,
      beforeConnect() {
        const icon = this.$props.icon;
        this.icon = this.$el.closest(".uk-nav-primary") ? `${icon}-large` : icon;
      }
    };
    const Search = {
      extends: IconComponent,
      mixins: [I18n],
      i18n: { toggle: "Open Search", submit: "Submit Search" },
      beforeConnect() {
        const isToggle = hasClass(this.$el, "uk-search-toggle") || hasClass(this.$el, "uk-navbar-toggle");
        this.icon = isToggle ? "search-toggle-icon" : hasClass(this.$el, "uk-search-icon") && this.$el.closest(".uk-search-large") ? "search-large" : this.$el.closest(".uk-search-medium") ? "search-medium" : this.$props.icon;
        if (hasAttr(this.$el, "aria-label")) {
          return;
        }
        if (isToggle) {
          const label = this.t("toggle");
          attr(this.$el, "aria-label", label);
        } else {
          const button = this.$el.closest("a,button");
          if (button) {
            const label = this.t("submit");
            attr(button, "aria-label", label);
          }
        }
      }
    };
    const Spinner = {
      extends: IconComponent,
      beforeConnect() {
        attr(this.$el, "role", "status");
      },
      methods: {
        async getSvg() {
          const icon = await Icon.methods.getSvg.call(this);
          if (this.ratio !== 1) {
            css($("circle", icon), "strokeWidth", 1 / this.ratio);
          }
          return icon;
        }
      }
    };
    const ButtonComponent = {
      extends: IconComponent,
      mixins: [I18n],
      beforeConnect() {
        const button = this.$el.closest("a,button");
        attr(button, "role", this.role !== null && isTag(button, "a") ? "button" : this.role);
        const label = this.t("label");
        if (label && !hasAttr(button, "aria-label")) {
          attr(button, "aria-label", label);
        }
      }
    };
    const Slidenav = {
      extends: ButtonComponent,
      beforeConnect() {
        addClass(this.$el, "uk-slidenav");
        const icon = this.$props.icon;
        this.icon = hasClass(this.$el, "uk-slidenav-large") ? `${icon}-large` : icon;
      }
    };
    const NavbarToggleIcon = {
      extends: ButtonComponent,
      i18n: { label: "Open menu" }
    };
    const Close = {
      extends: ButtonComponent,
      i18n: { label: "Close" },
      beforeConnect() {
        this.icon = `close-${hasClass(this.$el, "uk-close-large") ? "large" : "icon"}`;
      }
    };
    const Marker = {
      extends: ButtonComponent,
      i18n: { label: "Open" }
    };
    const Totop = {
      extends: ButtonComponent,
      i18n: { label: "Back to top" }
    };
    const PaginationNext = {
      extends: ButtonComponent,
      i18n: { label: "Next page" },
      data: { role: null }
    };
    const PaginationPrevious = {
      extends: ButtonComponent,
      i18n: { label: "Previous page" },
      data: { role: null }
    };
    const parsed = {};
    function install$1(UIkit) {
      UIkit.icon.add = (name, svg) => {
        const added = isString(name) ? { [name]: svg } : name;
        each(added, (svg2, name2) => {
          icons[name2] = svg2;
          delete parsed[name2];
        });
        if (UIkit._initialized) {
          apply(
            document.body,
            (el) => each(UIkit.getComponents(el), (cmp) => {
              cmp.$options.isIcon && cmp.icon in added && cmp.$reset();
            })
          );
        }
      };
    }
    const aliases = { twitter: "x" };
    function getIcon(icon) {
      icon = aliases[icon] || icon;
      if (!icons[icon]) {
        return null;
      }
      if (!parsed[icon]) {
        parsed[icon] = stringToSvg(icons[applyRtl(icon)] || icons[icon]);
      }
      return parsed[icon].cloneNode(true);
    }
    function applyRtl(icon) {
      return isRtl ? swap(swap(icon, "left", "right"), "previous", "next") : icon;
    }

    var img = {
      args: "dataSrc",
      props: {
        dataSrc: String,
        sources: String,
        margin: String,
        target: String,
        loading: String
      },
      data: {
        dataSrc: "",
        sources: false,
        margin: "50%",
        target: false,
        loading: "lazy"
      },
      connected() {
        if (this.loading !== "lazy") {
          this.load();
        } else if (isImg(this.$el)) {
          this.$el.loading = "lazy";
          setSrcAttrs(this.$el);
        }
      },
      disconnected() {
        if (this.img) {
          this.img.onload = "";
        }
        delete this.img;
      },
      observe: intersection({
        handler(entries, observer) {
          this.load();
          observer.disconnect();
        },
        options: ({ margin }) => ({ rootMargin: margin }),
        filter: ({ loading }) => loading === "lazy",
        target: ({ $el, $props }) => $props.target ? [$el, ...queryAll($props.target, $el)] : $el
      }),
      methods: {
        load() {
          if (this.img) {
            return this.img;
          }
          const image = isImg(this.$el) ? this.$el : getImageFromElement(this.$el, this.dataSrc, this.sources);
          removeAttr(image, "loading");
          setSrcAttrs(this.$el, image.currentSrc);
          return this.img = image;
        }
      }
    };
    function setSrcAttrs(el, src) {
      if (isImg(el)) {
        const parentNode = parent(el);
        const elements = isTag(parentNode, "picture") ? children(parentNode) : [el];
        elements.forEach((el2) => setSourceProps(el2, el2));
      } else if (src) {
        const change = !includes(el.style.backgroundImage, src);
        if (change) {
          css(el, "backgroundImage", `url(${escape(src)})`);
          trigger(el, createEvent("load", false));
        }
      }
    }
    const srcProps = ["data-src", "data-srcset", "sizes"];
    function setSourceProps(sourceEl, targetEl) {
      for (const prop of srcProps) {
        const value = data(sourceEl, prop);
        if (value) {
          attr(targetEl, prop.replace(/^(data-)+/, ""), value);
        }
      }
    }
    function getImageFromElement(el, src, sources) {
      const img = new Image();
      wrapInPicture(img, sources);
      setSourceProps(el, img);
      img.onload = () => {
        setSrcAttrs(el, img.currentSrc);
      };
      attr(img, "src", src);
      return img;
    }
    function wrapInPicture(img, sources) {
      sources = parseSources(sources);
      if (sources.length) {
        const picture = fragment("<picture>");
        for (const attrs of sources) {
          const source = fragment("<source>");
          attr(source, attrs);
          append(picture, source);
        }
        append(picture, img);
      }
    }
    function parseSources(sources) {
      if (!sources) {
        return [];
      }
      if (startsWith(sources, "[")) {
        try {
          sources = JSON.parse(sources);
        } catch (e) {
          sources = [];
        }
      } else {
        sources = parseOptions(sources);
      }
      if (!isArray(sources)) {
        sources = [sources];
      }
      return sources.filter((source) => !isEmpty(source));
    }
    function isImg(el) {
      return isTag(el, "img");
    }

    var inverse = {
      props: {
        target: String,
        selActive: String
      },
      data: {
        target: false,
        selActive: false
      },
      computed: {
        target: ({ target }, $el) => target ? $$(target, $el) : $el
      },
      observe: [
        intersection({
          handler(entries) {
            this.isIntersecting = entries.some(({ isIntersecting }) => isIntersecting);
            this.$emit();
          },
          target: ({ target }) => target,
          args: { intersecting: false }
        }),
        mutation({
          target: ({ target }) => target,
          options: { attributes: true, attributeFilter: ["class"], attributeOldValue: true }
        }),
        {
          target: ({ target }) => target,
          observe: (target, handler) => {
            const observer = observeResize(
              [...toNodes(target), document.documentElement],
              handler
            );
            const listener = [
              on(document, "scroll itemshown itemhidden", handler, {
                passive: true,
                capture: true
              }),
              on(document, "show hide transitionstart", (e) => {
                handler();
                return observer.observe(e.target);
              }),
              on(document, "shown hidden transitionend transitioncancel", (e) => {
                handler();
                return observer.unobserve(e.target);
              })
            ];
            return {
              observe: observer.observe.bind(observer),
              unobserve: observer.unobserve.bind(observer),
              disconnect() {
                observer.disconnect();
                listener.map((off) => off());
              }
            };
          },
          handler() {
            this.$emit();
          }
        }
      ],
      update: {
        read() {
          if (!this.isIntersecting) {
            return false;
          }
          for (const target of toNodes(this.target)) {
            let color = !this.selActive || matches(target, this.selActive) ? findTargetColor(target) : "";
            if (color !== false) {
              replaceClass(target, "uk-light uk-dark", color);
            }
          }
        }
      }
    };
    function findTargetColor(target) {
      const dim = dimensions$1(target);
      const viewport = dimensions$1(window);
      if (!intersectRect(dim, viewport)) {
        return false;
      }
      const { left, top, height, width } = dim;
      let last;
      for (const percent of [0.25, 0.5, 0.75]) {
        const elements = target.ownerDocument.elementsFromPoint(
          Math.max(0, Math.min(left + width * percent, viewport.width - 1)),
          Math.max(0, Math.min(top + height / 2, viewport.height - 1))
        );
        for (const element of elements) {
          if (target.contains(element) || !checkVisibility(element) || element.closest('[class*="-leave"]') && elements.some((el) => element !== el && matches(el, '[class*="-enter"]'))) {
            continue;
          }
          const color = css(element, "--uk-inverse");
          if (color) {
            if (color === last) {
              return `uk-${color}`;
            }
            last = color;
            break;
          }
        }
      }
      return last ? `uk-${last}` : "";
    }
    function checkVisibility(element) {
      if (css(element, "visibility") !== "visible") {
        return false;
      }
      while (element) {
        if (css(element, "opacity") === "0") {
          return false;
        }
        element = parent(element);
      }
      return true;
    }

    var leader = {
      mixins: [Class, Media],
      props: {
        fill: String
      },
      data: {
        fill: "",
        clsWrapper: "uk-leader-fill",
        clsHide: "uk-leader-hide",
        attrFill: "data-fill"
      },
      computed: {
        fill: ({ fill }, $el) => fill || css($el, "--uk-leader-fill-content")
      },
      connected() {
        [this.wrapper] = wrapInner(this.$el, `<span class="${this.clsWrapper}">`);
      },
      disconnected() {
        unwrap(this.wrapper.childNodes);
      },
      observe: resize(),
      update: {
        read() {
          const width = Math.trunc(this.$el.offsetWidth / 2);
          return {
            width,
            fill: this.fill,
            hide: !this.matchMedia
          };
        },
        write({ width, fill, hide }) {
          toggleClass(this.wrapper, this.clsHide, hide);
          attr(this.wrapper, this.attrFill, new Array(width).join(fill));
        },
        events: ["resize"]
      }
    };

    var modal = {
      install,
      mixins: [Modal],
      data: {
        clsPage: "uk-modal-page",
        selPanel: ".uk-modal-dialog",
        selClose: '[class*="uk-modal-close"]'
      },
      events: [
        {
          name: "fullscreenchange webkitendfullscreen",
          capture: true,
          handler(e) {
            if (isTag(e.target, "video") && this.isToggled() && !document.fullscreenElement) {
              this.hide();
            }
          }
        },
        {
          name: "show",
          self: true,
          handler() {
            if (hasClass(this.panel, "uk-margin-auto-vertical")) {
              addClass(this.$el, "uk-flex");
            } else {
              css(this.$el, "display", "block");
            }
            height(this.$el);
          }
        },
        {
          name: "hidden",
          self: true,
          handler() {
            css(this.$el, "display", "");
            removeClass(this.$el, "uk-flex");
          }
        }
      ]
    };
    function install({ modal }) {
      modal.dialog = function(content, options) {
        const dialog = modal($(`<div><div class="uk-modal-dialog">${content}</div></div>`), {
          stack: true,
          role: "alertdialog",
          ...options
        });
        dialog.show();
        on(
          dialog.$el,
          "hidden",
          async () => {
            await Promise.resolve();
            dialog.$destroy(true);
          },
          { self: true }
        );
        return dialog;
      };
      modal.alert = function(message, options) {
        return openDialog(
          ({ i18n }) => `<div class="uk-modal-body">${isString(message) ? message : html(message)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>${i18n.ok}</button> </div>`,
          options
        );
      };
      modal.confirm = function(message, options) {
        return openDialog(
          ({ i18n }) => `<form> <div class="uk-modal-body">${isString(message) ? message : html(message)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${i18n.cancel}</button> <button class="uk-button uk-button-primary" autofocus>${i18n.ok}</button> </div> </form>`,
          options,
          () => Promise.reject()
        );
      };
      modal.prompt = function(message, value, options) {
        const promise = openDialog(
          ({ i18n }) => `<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>${isString(message) ? message : html(message)}</label> <input class="uk-input" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${i18n.cancel}</button> <button class="uk-button uk-button-primary">${i18n.ok}</button> </div> </form>`,
          options,
          () => null,
          () => input.value
        );
        const { $el } = promise.dialog;
        const input = $("input", $el);
        input.value = value || "";
        on($el, "show", () => input.select());
        return promise;
      };
      modal.i18n = {
        ok: "Ok",
        cancel: "Cancel"
      };
      function openDialog(tmpl, options, hideFn = noop, submitFn = noop) {
        options = {
          bgClose: false,
          escClose: true,
          ...options,
          i18n: { ...modal.i18n, ...options == null ? void 0 : options.i18n }
        };
        const dialog = modal.dialog(tmpl(options), options);
        return assign(
          new Promise((resolve) => {
            const off = on(dialog.$el, "hide", () => resolve(hideFn()));
            on(dialog.$el, "submit", "form", (e) => {
              e.preventDefault();
              resolve(submitFn(dialog));
              off();
              dialog.hide();
            });
          }),
          { dialog }
        );
      }
    }

    var nav = {
      extends: Accordion,
      data: {
        targets: "> .uk-parent",
        toggle: "> a",
        content: "> ul"
      }
    };

    const clsNavbarTransparent = "uk-navbar-transparent";
    var navbar = {
      extends: Dropnav,
      props: {
        dropbarTransparentMode: Boolean
      },
      data: {
        clsDrop: "uk-navbar-dropdown",
        selNavItem: ".uk-navbar-nav > li > a,a.uk-navbar-item,button.uk-navbar-item,.uk-navbar-item a,.uk-navbar-item button,.uk-navbar-toggle",
        // Simplify with :where() selector once browser target is Safari 14+
        dropbarTransparentMode: false
      },
      computed: {
        navbarContainer: (_, $el) => $el.closest(".uk-navbar-container")
      },
      watch: {
        items() {
          const justify = hasClass(this.$el, "uk-navbar-justify");
          const containers = $$(".uk-navbar-nav, .uk-navbar-left, .uk-navbar-right", this.$el);
          for (const container of containers) {
            const items = justify ? $$(".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle", container).length : "";
            css(container, "flexGrow", items);
          }
        }
      },
      events: [
        {
          name: "show",
          el: ({ dropContainer }) => dropContainer,
          handler({ target }) {
            if (this.getTransparentMode(target) === "remove" && hasClass(this.navbarContainer, clsNavbarTransparent)) {
              removeClass(this.navbarContainer, clsNavbarTransparent);
              this._transparent = true;
            }
          }
        },
        {
          name: "hide",
          el: ({ dropContainer }) => dropContainer,
          async handler() {
            await awaitMacroTask();
            if (!this.getActive() && this._transparent) {
              addClass(this.navbarContainer, clsNavbarTransparent);
              this._transparent = null;
            }
          }
        }
      ],
      methods: {
        getTransparentMode(el) {
          if (!this.navbarContainer) {
            return;
          }
          if (this.dropbar && this.isDropbarDrop(el)) {
            return this.dropbarTransparentMode;
          }
          const drop = this.getDropdown(el);
          if (drop && hasClass(el, "uk-dropbar")) {
            return drop.inset ? "behind" : "remove";
          }
        },
        getDropbarOffset(offsetTop) {
          const { top, height } = offset(this.navbarContainer);
          return top + (this.dropbarTransparentMode === "behind" ? 0 : height + offsetTop);
        }
      }
    };
    function awaitMacroTask() {
      return new Promise((resolve) => setTimeout(resolve));
    }

    var offcanvas = {
      mixins: [Modal],
      args: "mode",
      props: {
        mode: String,
        flip: Boolean,
        overlay: Boolean,
        swiping: Boolean
      },
      data: {
        mode: "slide",
        flip: false,
        overlay: false,
        clsPage: "uk-offcanvas-page",
        clsContainer: "uk-offcanvas-container",
        selPanel: ".uk-offcanvas-bar",
        clsFlip: "uk-offcanvas-flip",
        clsContainerAnimation: "uk-offcanvas-container-animation",
        clsSidebarAnimation: "uk-offcanvas-bar-animation",
        clsMode: "uk-offcanvas",
        clsOverlay: "uk-offcanvas-overlay",
        selClose: ".uk-offcanvas-close",
        container: false,
        swiping: true
      },
      computed: {
        clsFlip: ({ flip, clsFlip }) => flip ? clsFlip : "",
        clsOverlay: ({ overlay, clsOverlay }) => overlay ? clsOverlay : "",
        clsMode: ({ mode, clsMode }) => `${clsMode}-${mode}`,
        clsSidebarAnimation: ({ mode, clsSidebarAnimation }) => mode === "none" || mode === "reveal" ? "" : clsSidebarAnimation,
        clsContainerAnimation: ({ mode, clsContainerAnimation }) => mode !== "push" && mode !== "reveal" ? "" : clsContainerAnimation,
        transitionElement({ mode }) {
          return mode === "reveal" ? parent(this.panel) : this.panel;
        }
      },
      observe: swipe({ filter: ({ swiping }) => swiping }),
      update: {
        read() {
          if (this.isToggled() && !isVisible(this.$el)) {
            this.hide();
          }
        },
        events: ["resize"]
      },
      events: [
        {
          name: "touchmove",
          self: true,
          passive: false,
          filter: ({ overlay }) => overlay,
          handler(e) {
            e.cancelable && e.preventDefault();
          }
        },
        {
          name: "show",
          self: true,
          handler() {
            if (this.mode === "reveal" && !hasClass(parent(this.panel), this.clsMode)) {
              wrapAll(this.panel, "<div>");
              addClass(parent(this.panel), this.clsMode);
            }
            const { body, scrollingElement } = document;
            addClass(body, this.clsContainer, this.clsFlip);
            css(body, "touch-action", "pan-y pinch-zoom");
            css(this.$el, "display", "block");
            css(this.panel, "maxWidth", scrollingElement.clientWidth);
            addClass(this.$el, this.clsOverlay);
            addClass(
              this.panel,
              this.clsSidebarAnimation,
              this.mode === "reveal" ? "" : this.clsMode
            );
            height(body);
            addClass(body, this.clsContainerAnimation);
            this.clsContainerAnimation && suppressUserScale();
          }
        },
        {
          name: "hide",
          self: true,
          handler() {
            removeClass(document.body, this.clsContainerAnimation);
            css(document.body, "touch-action", "");
          }
        },
        {
          name: "hidden",
          self: true,
          handler() {
            this.clsContainerAnimation && resumeUserScale();
            if (this.mode === "reveal") {
              unwrap(this.panel);
            }
            removeClass(this.panel, this.clsSidebarAnimation, this.clsMode);
            removeClass(this.$el, this.clsOverlay);
            css(this.$el, "display", "");
            css(this.panel, "maxWidth", "");
            removeClass(document.body, this.clsContainer, this.clsFlip);
          }
        },
        {
          name: "swipeLeft swipeRight",
          handler(e) {
            if (this.isToggled() && endsWith(e.type, "Left") ^ this.flip) {
              this.hide();
            }
          }
        }
      ]
    };
    function suppressUserScale() {
      getViewport().content += ",user-scalable=0";
    }
    function resumeUserScale() {
      const viewport = getViewport();
      viewport.content = viewport.content.replace(/,user-scalable=0$/, "");
    }
    function getViewport() {
      return $('meta[name="viewport"]', document.head) || append(document.head, '<meta name="viewport">');
    }

    var overflowAuto = {
      mixins: [Class],
      props: {
        selContainer: String,
        selContent: String,
        minHeight: Number
      },
      data: {
        selContainer: ".uk-modal",
        selContent: ".uk-modal-dialog",
        minHeight: 150
      },
      computed: {
        container: ({ selContainer }, $el) => $el.closest(selContainer),
        content: ({ selContent }, $el) => $el.closest(selContent)
      },
      observe: resize({
        target: ({ container, content }) => [container, content]
      }),
      update: {
        read() {
          if (!this.content || !this.container || !isVisible(this.$el)) {
            return false;
          }
          return {
            max: Math.max(
              this.minHeight,
              height(this.container) - (dimensions$1(this.content).height - height(this.$el))
            )
          };
        },
        write({ max }) {
          css(this.$el, { minHeight: this.minHeight, maxHeight: max });
        },
        events: ["resize"]
      }
    };

    var responsive = {
      props: ["width", "height"],
      connected() {
        addClass(this.$el, "uk-responsive-width");
        css(this.$el, "aspectRatio", `${this.width}/${this.height}`);
      }
    };

    var scroll = {
      props: {
        offset: Number
      },
      data: {
        offset: 0
      },
      connected() {
        registerClick(this);
      },
      disconnected() {
        unregisterClick(this);
      },
      methods: {
        async scrollTo(el) {
          el = el && $(el) || document.body;
          if (trigger(this.$el, "beforescroll", [this, el])) {
            await scrollIntoView(el, { offset: this.offset });
            trigger(this.$el, "scrolled", [this, el]);
          }
        }
      }
    };
    const instances = /* @__PURE__ */ new Set();
    function registerClick(cmp) {
      if (!instances.size) {
        on(document, "click", clickHandler);
      }
      instances.add(cmp);
    }
    function unregisterClick(cmp) {
      instances.delete(cmp);
      if (!instances.size) {
        off(document, "click", clickHandler);
      }
    }
    function clickHandler(e) {
      if (e.defaultPrevented) {
        return;
      }
      for (const instance of instances) {
        if (instance.$el.contains(e.target) && isSameSiteAnchor(instance.$el)) {
          e.preventDefault();
          if (window.location.href !== instance.$el.href) {
            window.history.pushState({}, "", instance.$el.href);
          }
          instance.scrollTo(getTargetedElement(instance.$el));
        }
      }
    }

    const clsInView = "uk-scrollspy-inview";
    var scrollspy = {
      args: "cls",
      props: {
        cls: String,
        target: String,
        hidden: Boolean,
        margin: String,
        repeat: Boolean,
        delay: Number
      },
      data: () => ({
        cls: "",
        target: false,
        hidden: true,
        margin: "-1px",
        repeat: false,
        delay: 0
      }),
      computed: {
        elements: ({ target }, $el) => target ? $$(target, $el) : [$el]
      },
      watch: {
        elements(elements) {
          if (this.hidden) {
            css(filter$1(elements, `:not(.${clsInView})`), "opacity", 0);
          }
        }
      },
      connected() {
        this.elementData = /* @__PURE__ */ new Map();
      },
      disconnected() {
        for (const [el, state] of this.elementData.entries()) {
          removeClass(el, clsInView, (state == null ? void 0 : state.cls) || "");
        }
        delete this.elementData;
      },
      observe: intersection({
        target: ({ elements }) => elements,
        handler(records) {
          const elements = this.elementData;
          for (const { target: el, isIntersecting } of records) {
            if (!elements.has(el)) {
              elements.set(el, {
                cls: data(el, "uk-scrollspy-class") || this.cls
              });
            }
            const state = elements.get(el);
            if (!this.repeat && state.show) {
              continue;
            }
            state.show = isIntersecting;
          }
          this.$emit();
        },
        options: ({ margin }) => ({ rootMargin: margin }),
        args: { intersecting: false }
      }),
      update: [
        {
          write(data) {
            for (const [el, state] of this.elementData.entries()) {
              if (state.show && !state.inview && !state.queued) {
                state.queued = true;
                data.promise = (data.promise || Promise.resolve()).then(() => new Promise((resolve) => setTimeout(resolve, this.delay))).then(() => {
                  this.toggle(el, true);
                  setTimeout(() => {
                    state.queued = false;
                    this.$emit();
                  }, 300);
                });
              } else if (!state.show && state.inview && !state.queued && this.repeat) {
                this.toggle(el, false);
              }
            }
          }
        }
      ],
      methods: {
        toggle(el, inview) {
          var _a, _b;
          const state = (_a = this.elementData) == null ? void 0 : _a.get(el);
          if (!state) {
            return;
          }
          (_b = state.off) == null ? void 0 : _b.call(state);
          css(el, "opacity", !inview && this.hidden ? 0 : "");
          toggleClass(el, clsInView, inview);
          toggleClass(el, state.cls);
          let match;
          if (match = state.cls.match(/\buk-animation-[\w-]+/g)) {
            const removeAnimationClasses = () => removeClass(el, match);
            if (inview) {
              state.off = once(el, "animationcancel animationend", removeAnimationClasses, {
                self: true
              });
            } else {
              removeAnimationClasses();
            }
          }
          trigger(el, inview ? "inview" : "outview");
          state.inview = inview;
        }
      }
    };

    var scrollspyNav = {
      props: {
        cls: String,
        closest: Boolean,
        scroll: Boolean,
        target: String,
        offset: Number
      },
      data: {
        cls: "uk-active",
        closest: false,
        scroll: false,
        target: 'a[href]:not([role="button"])',
        offset: 0
      },
      computed: {
        links: ({ target }, $el) => $$(target, $el).filter((el) => isSameSiteAnchor(el)),
        elements({ closest }) {
          return this.links.map((el) => el.closest(closest || "*"));
        }
      },
      watch: {
        links(links) {
          if (this.scroll) {
            this.$create("scroll", links, { offset: this.offset });
          }
        }
      },
      observe: [intersection(), scroll$1()],
      update: [
        {
          read() {
            const targets = this.links.map((el) => getTargetedElement(el) || el.ownerDocument);
            const { length } = targets;
            if (!length || !isVisible(this.$el)) {
              return false;
            }
            const scrollElement = scrollParent(targets, true);
            const { scrollTop, scrollHeight } = scrollElement;
            const viewport = offsetViewport(scrollElement);
            const max = scrollHeight - viewport.height;
            let active = false;
            if (scrollTop >= max) {
              active = length - 1;
            } else {
              const offsetBy = this.offset + dimensions$1(getCoveringElement()).height + viewport.height * 0.1;
              for (let i = 0; i < targets.length; i++) {
                if (offset(targets[i]).top - viewport.top - offsetBy > 0) {
                  break;
                }
                active = +i;
              }
            }
            return { active };
          },
          write({ active }) {
            const changed = active !== false && !hasClass(this.elements[active], this.cls);
            this.links.forEach((el) => el.blur());
            for (let i = 0; i < this.elements.length; i++) {
              toggleClass(this.elements[i], this.cls, +i === active);
            }
            if (changed) {
              trigger(this.$el, "active", [active, this.elements[active]]);
            }
          },
          events: ["scroll", "resize"]
        }
      ]
    };

    var sticky = {
      mixins: [Class, Media],
      props: {
        position: String,
        top: null,
        bottom: null,
        start: null,
        end: null,
        offset: String,
        overflowFlip: Boolean,
        animation: String,
        clsActive: String,
        clsInactive: String,
        clsFixed: String,
        clsBelow: String,
        selTarget: String,
        showOnUp: Boolean,
        targetOffset: Number
      },
      data: {
        position: "top",
        top: false,
        bottom: false,
        start: false,
        end: false,
        offset: 0,
        overflowFlip: false,
        animation: "",
        clsActive: "uk-active",
        clsInactive: "",
        clsFixed: "uk-sticky-fixed",
        clsBelow: "uk-sticky-below",
        selTarget: "",
        showOnUp: false,
        targetOffset: false
      },
      computed: {
        target: ({ selTarget }, $el) => selTarget && $(selTarget, $el) || $el
      },
      connected() {
        this.start = coerce(this.start || this.top);
        this.end = coerce(this.end || this.bottom);
        this.placeholder = $("+ .uk-sticky-placeholder", this.$el) || $('<div class="uk-sticky-placeholder"></div>');
        this.isFixed = false;
        this.setActive(false);
      },
      beforeDisconnect() {
        if (this.isFixed) {
          this.hide();
          removeClass(this.target, this.clsInactive);
        }
        reset(this.$el);
        remove$1(this.placeholder);
        this.placeholder = null;
      },
      observe: [
        viewport(),
        scroll$1({ target: () => document.scrollingElement }),
        resize({
          target: ({ $el }) => [$el, getVisibleParent($el), document.scrollingElement],
          handler(entries) {
            this.$emit(
              this._data.resized && entries.some(({ target }) => target === getVisibleParent(this.$el)) ? "update" : "resize"
            );
            this._data.resized = true;
          }
        })
      ],
      events: [
        {
          name: "load hashchange popstate",
          el: () => window,
          filter: ({ targetOffset }) => targetOffset !== false,
          handler() {
            const { scrollingElement } = document;
            if (!location.hash || scrollingElement.scrollTop === 0) {
              return;
            }
            setTimeout(() => {
              const targetOffset = offset($(location.hash));
              const elOffset = offset(this.$el);
              if (this.isFixed && intersectRect(targetOffset, elOffset)) {
                scrollingElement.scrollTop = Math.ceil(
                  targetOffset.top - elOffset.height - toPx(this.targetOffset, "height", this.placeholder) - toPx(this.offset, "height", this.placeholder)
                );
              }
            });
          }
        }
      ],
      update: [
        {
          read({ height: height$1, width, margin, sticky }, types) {
            this.inactive = !this.matchMedia || !isVisible(this.$el) || !this.$el.offsetHeight;
            if (this.inactive) {
              return;
            }
            const hide = this.isFixed && types.has("update");
            if (hide) {
              preventTransition(this.target);
              this.hide();
            }
            if (!this.active) {
              ({ height: height$1, width } = dimensions$1(this.$el));
              margin = css(this.$el, "margin");
            }
            if (hide) {
              this.show();
            }
            const viewport2 = toPx("100vh", "height");
            const dynamicViewport = height(window);
            const maxScrollHeight = Math.max(
              0,
              document.scrollingElement.scrollHeight - viewport2
            );
            let position = this.position;
            if (this.overflowFlip && height$1 > viewport2) {
              position = position === "top" ? "bottom" : "top";
            }
            const referenceElement = this.isFixed ? this.placeholder : this.$el;
            let offset$1 = toPx(this.offset, "height", sticky ? this.$el : referenceElement);
            if (position === "bottom" && (height$1 < dynamicViewport || this.overflowFlip)) {
              offset$1 += dynamicViewport - height$1;
            }
            const overflow = this.overflowFlip ? 0 : Math.max(0, height$1 + offset$1 - viewport2);
            const topOffset = offset(referenceElement).top;
            const elHeight = dimensions$1(this.$el).height;
            const start = (this.start === false ? topOffset : parseProp(this.start, this.$el, topOffset)) - offset$1;
            const end = this.end === false ? maxScrollHeight : Math.min(
              maxScrollHeight,
              parseProp(this.end, this.$el, topOffset + height$1, true) - elHeight - offset$1 + overflow
            );
            sticky = maxScrollHeight && !this.showOnUp && start + offset$1 === topOffset && end === Math.min(
              maxScrollHeight,
              parseProp(true, this.$el, 0, true) - elHeight - offset$1 + overflow
            ) && css(getVisibleParent(this.$el), "overflowY") === "visible";
            return {
              start,
              end,
              offset: offset$1,
              overflow,
              height: height$1,
              elHeight,
              width,
              margin,
              top: offsetPosition(referenceElement)[0],
              sticky,
              viewport: viewport2,
              maxScrollHeight
            };
          },
          write({ height, width, margin, offset, sticky }) {
            if (this.inactive || sticky || !this.isFixed) {
              reset(this.$el);
            }
            if (this.inactive) {
              return;
            }
            if (sticky) {
              height = width = margin = 0;
              css(this.$el, { position: "sticky", top: offset });
            }
            const { placeholder } = this;
            css(placeholder, { height, width, margin });
            if (parent(placeholder) !== parent(this.$el) || sticky ^ index(placeholder) < index(this.$el)) {
              (sticky ? before : after)(this.$el, placeholder);
              placeholder.hidden = true;
            }
          },
          events: ["resize"]
        },
        {
          read({
            scroll: prevScroll = 0,
            dir: prevDir = "down",
            overflow,
            overflowScroll = 0,
            start,
            end,
            elHeight,
            height,
            sticky,
            maxScrollHeight
          }) {
            const scroll2 = Math.min(document.scrollingElement.scrollTop, maxScrollHeight);
            const dir = prevScroll <= scroll2 ? "down" : "up";
            const referenceElement = this.isFixed ? this.placeholder : this.$el;
            return {
              dir,
              prevDir,
              scroll: scroll2,
              prevScroll,
              below: scroll2 > offset(referenceElement).top + (sticky ? Math.min(height, elHeight) : height),
              offsetParentTop: offset(referenceElement.offsetParent).top,
              overflowScroll: clamp(
                overflowScroll + clamp(scroll2, start, end) - clamp(prevScroll, start, end),
                0,
                overflow
              )
            };
          },
          write(data, types) {
            const isScrollUpdate = types.has("scroll");
            const {
              initTimestamp = 0,
              dir,
              prevDir,
              scroll: scroll2,
              prevScroll = 0,
              top,
              start,
              below
            } = data;
            if (scroll2 < 0 || scroll2 === prevScroll && isScrollUpdate || this.showOnUp && !isScrollUpdate && !this.isFixed) {
              return;
            }
            const now = Date.now();
            if (now - initTimestamp > 300 || dir !== prevDir) {
              data.initScroll = scroll2;
              data.initTimestamp = now;
            }
            if (this.showOnUp && !this.isFixed && Math.abs(data.initScroll - scroll2) <= 30 && Math.abs(prevScroll - scroll2) <= 10) {
              return;
            }
            if (this.inactive || scroll2 < start || this.showOnUp && (scroll2 <= start || dir === "down" && isScrollUpdate || dir === "up" && !this.isFixed && !below)) {
              if (!this.isFixed) {
                if (Animation.inProgress(this.$el) && top > scroll2) {
                  Animation.cancel(this.$el);
                  this.hide();
                }
                return;
              }
              if (this.animation && below) {
                if (hasClass(this.$el, "uk-animation-leave")) {
                  return;
                }
                Animation.out(this.$el, this.animation).then(() => this.hide(), noop);
              } else {
                this.hide();
              }
            } else if (this.isFixed) {
              this.update();
            } else if (this.animation && below) {
              this.show();
              Animation.in(this.$el, this.animation).catch(noop);
            } else {
              preventTransition(this.target);
              this.show();
            }
          },
          events: ["resize", "resizeViewport", "scroll"]
        }
      ],
      methods: {
        show() {
          this.isFixed = true;
          this.update();
          this.placeholder.hidden = false;
        },
        hide() {
          const { offset, sticky } = this._data;
          this.setActive(false);
          removeClass(this.$el, this.clsFixed, this.clsBelow);
          if (sticky) {
            css(this.$el, "top", offset);
          } else {
            css(this.$el, {
              position: "",
              top: "",
              width: "",
              marginTop: ""
            });
          }
          this.placeholder.hidden = true;
          this.isFixed = false;
        },
        update() {
          let {
            width,
            scroll: scroll2 = 0,
            overflow,
            overflowScroll = 0,
            start,
            end,
            offset,
            offsetParentTop,
            sticky,
            below
          } = this._data;
          const active = start !== 0 || scroll2 > start;
          if (!sticky) {
            let position = "fixed";
            if (scroll2 > end) {
              offset += end - offsetParentTop + overflowScroll - overflow;
              position = "absolute";
            }
            css(this.$el, { position, width, marginTop: 0 }, "important");
          }
          css(this.$el, "top", offset - overflowScroll);
          this.setActive(active);
          toggleClass(this.$el, this.clsBelow, below);
          addClass(this.$el, this.clsFixed);
        },
        setActive(active) {
          const prev = this.active;
          this.active = active;
          if (active) {
            replaceClass(this.target, this.clsInactive, this.clsActive);
            prev !== active && trigger(this.$el, "active");
          } else {
            replaceClass(this.target, this.clsActive, this.clsInactive);
            if (prev !== active) {
              preventTransition(this.target);
              trigger(this.$el, "inactive");
            }
          }
        }
      }
    };
    function parseProp(value, el, propOffset, padding) {
      if (!value) {
        return 0;
      }
      if (isNumeric(value) || isString(value) && value.match(/^-?\d/)) {
        return propOffset + toPx(value, "height", el, true);
      } else {
        const refElement = value === true ? getVisibleParent(el) : query(value, el);
        return offset(refElement).bottom - (padding && (refElement == null ? void 0 : refElement.contains(el)) ? toFloat(css(refElement, "paddingBottom")) + toFloat(css(refElement, "borderBottomWidth")) : 0);
      }
    }
    function coerce(value) {
      if (value === "true") {
        return true;
      } else if (value === "false") {
        return false;
      }
      return value;
    }
    function reset(el) {
      css(el, { position: "", top: "", marginTop: "", width: "" });
    }
    const clsTransitionDisable = "uk-transition-disable";
    function preventTransition(element) {
      if (!hasClass(element, clsTransitionDisable)) {
        addClass(element, clsTransitionDisable);
        requestAnimationFrame(() => removeClass(element, clsTransitionDisable));
      }
    }
    function getVisibleParent(element) {
      while (element = parent(element)) {
        if (isVisible(element)) {
          return element;
        }
      }
    }

    const selDisabled = ".uk-disabled *, .uk-disabled, [disabled]";
    var Switcher = {
      mixins: [Togglable],
      args: "connect",
      props: {
        connect: String,
        toggle: String,
        itemNav: String,
        active: Number,
        followFocus: Boolean,
        swiping: Boolean
      },
      data: {
        connect: "~.uk-switcher",
        toggle: "> * > :first-child",
        itemNav: false,
        active: 0,
        cls: "uk-active",
        attrItem: "uk-switcher-item",
        selVertical: ".uk-nav",
        followFocus: false,
        swiping: true
      },
      computed: {
        connects: {
          get: ({ connect }, $el) => queryAll(connect, $el),
          observe: ({ connect }) => connect
        },
        connectChildren() {
          return this.connects.map((el) => children(el)).flat();
        },
        toggles: ({ toggle }, $el) => $$(toggle, $el),
        children(_, $el) {
          return children($el).filter(
            (child) => this.toggles.some((toggle) => child.contains(toggle))
          );
        }
      },
      watch: {
        connects(connects) {
          if (this.swiping) {
            css(connects, "touchAction", "pan-y pinch-zoom");
          }
          this.$emit();
        },
        connectChildren() {
          let index = Math.max(0, this.index());
          for (const el of this.connects) {
            children(el).forEach((child, i) => toggleClass(child, this.cls, i === index));
          }
          this.$emit();
        },
        toggles(toggles) {
          this.$emit();
          const active = this.index();
          this.show(~active ? active : toggles[this.active] || toggles[0]);
        }
      },
      connected() {
        attr(this.$el, "role", "tablist");
      },
      observe: [
        lazyload({ targets: ({ connectChildren }) => connectChildren }),
        swipe({ target: ({ connects }) => connects, filter: ({ swiping }) => swiping })
      ],
      events: [
        {
          name: "click keydown",
          delegate: ({ toggle }) => toggle,
          handler(e) {
            if (!matches(e.current, selDisabled) && (e.type === "click" || e.keyCode === keyMap.SPACE)) {
              e.preventDefault();
              this.show(e.current);
            }
          }
        },
        {
          name: "keydown",
          delegate: ({ toggle }) => toggle,
          handler(e) {
            const { current, keyCode } = e;
            const isVertical = matches(this.$el, this.selVertical);
            let i = keyCode === keyMap.HOME ? 0 : keyCode === keyMap.END ? "last" : keyCode === keyMap.LEFT && !isVertical || keyCode === keyMap.UP && isVertical ? "previous" : keyCode === keyMap.RIGHT && !isVertical || keyCode === keyMap.DOWN && isVertical ? "next" : -1;
            if (~i) {
              e.preventDefault();
              const toggles = this.toggles.filter((el) => !matches(el, selDisabled));
              const next = toggles[getIndex(i, toggles, toggles.indexOf(current))];
              next.focus();
              if (this.followFocus) {
                this.show(next);
              }
            }
          }
        },
        {
          name: "click",
          el: ({ $el, connects, itemNav }) => connects.concat(itemNav ? queryAll(itemNav, $el) : []),
          delegate: ({ attrItem }) => `[${attrItem}],[data-${attrItem}]`,
          handler(e) {
            if (e.target.closest("a,button")) {
              e.preventDefault();
              this.show(data(e.current, this.attrItem));
            }
          }
        },
        {
          name: "swipeRight swipeLeft",
          filter: ({ swiping }) => swiping,
          el: ({ connects }) => connects,
          handler({ type }) {
            this.show(endsWith(type, "Left") ? "next" : "previous");
          }
        }
      ],
      update() {
        var _a;
        for (const el of this.connects) {
          if (isTag(el, "ul")) {
            attr(el, "role", "presentation");
          }
        }
        attr(children(this.$el), "role", "presentation");
        for (const index in this.toggles) {
          const toggle = this.toggles[index];
          const item = (_a = this.connects[0]) == null ? void 0 : _a.children[index];
          attr(toggle, "role", "tab");
          if (!item) {
            continue;
          }
          toggle.id = generateId(this, toggle);
          item.id = generateId(this, item);
          attr(toggle, "aria-controls", item.id);
          attr(item, { role: "tabpanel", "aria-labelledby": toggle.id });
        }
        attr(this.$el, "aria-orientation", matches(this.$el, this.selVertical) ? "vertical" : null);
      },
      methods: {
        index() {
          return findIndex(this.children, (el) => hasClass(el, this.cls));
        },
        show(item) {
          const toggles = this.toggles.filter((el) => !matches(el, selDisabled));
          const prev = this.index();
          const next = getIndex(
            !isNode(item) || includes(toggles, item) ? item : 0,
            toggles,
            getIndex(this.toggles[prev], toggles)
          );
          const active = getIndex(toggles[next], this.toggles);
          this.children.forEach((child, i) => {
            toggleClass(child, this.cls, active === i);
            attr(this.toggles[i], {
              "aria-selected": active === i,
              tabindex: active === i ? null : -1
            });
          });
          const animate = prev >= 0 && prev !== next;
          this.connects.forEach(async ({ children: children2 }) => {
            const actives = toArray(children2).filter(
              (child, i) => i !== active && hasClass(child, this.cls)
            );
            if (await this.toggleElement(actives, false, animate)) {
              await this.toggleElement(children2[active], true, animate);
            }
          });
        }
      }
    };

    var tab = {
      mixins: [Class],
      extends: Switcher,
      props: {
        media: Boolean
      },
      data: {
        media: 960,
        attrItem: "uk-tab-item",
        selVertical: ".uk-tab-left,.uk-tab-right"
      },
      connected() {
        const cls = hasClass(this.$el, "uk-tab-left") ? "uk-tab-left" : hasClass(this.$el, "uk-tab-right") ? "uk-tab-right" : false;
        if (cls) {
          this.$create("toggle", this.$el, { cls, mode: "media", media: this.media });
        }
      }
    };

    const KEY_SPACE = 32;
    var toggle = {
      mixins: [Media, Togglable],
      args: "target",
      props: {
        href: String,
        target: null,
        mode: "list",
        queued: Boolean
      },
      data: {
        href: false,
        target: false,
        mode: "click",
        queued: true
      },
      computed: {
        target: {
          get: ({ target }, $el) => {
            target = queryAll(target || $el.hash, $el);
            return target.length ? target : [$el];
          },
          observe: ({ target }) => target
        }
      },
      connected() {
        if (!includes(this.mode, "media")) {
          if (!isFocusable(this.$el)) {
            attr(this.$el, "tabindex", "0");
          }
          if (!this.cls && isTag(this.$el, "a")) {
            attr(this.$el, "role", "button");
          }
        }
      },
      observe: lazyload({ targets: ({ target }) => target }),
      events: [
        {
          name: pointerDown$1,
          filter: ({ mode }) => includes(mode, "hover"),
          handler(e) {
            this._preventClick = null;
            if (!isTouch(e) || isBoolean(this._showState) || this.$el.disabled) {
              return;
            }
            trigger(this.$el, "focus");
            once(
              document,
              pointerDown$1,
              () => trigger(this.$el, "blur"),
              true,
              (e2) => !this.$el.contains(e2.target)
            );
            if (includes(this.mode, "click")) {
              this._preventClick = true;
            }
          }
        },
        {
          // mouseenter mouseleave are added because of Firefox bug,
          // where pointerleave is triggered immediately after pointerenter on scroll
          name: `mouseenter mouseleave ${pointerEnter} ${pointerLeave} focus blur`,
          filter: ({ mode }) => includes(mode, "hover"),
          handler(e) {
            if (isTouch(e) || this.$el.disabled) {
              return;
            }
            const show = includes(["mouseenter", pointerEnter, "focus"], e.type);
            const expanded = this.isToggled(this.target);
            if (!show && (!isBoolean(this._showState) || e.type !== "blur" && matches(this.$el, ":focus") || e.type === "blur" && matches(this.$el, ":hover"))) {
              if (expanded === this._showState) {
                this._showState = null;
              }
              return;
            }
            if (show && isBoolean(this._showState) && expanded !== this._showState) {
              return;
            }
            this._showState = show ? expanded : null;
            this.toggle(`toggle${show ? "show" : "hide"}`);
          }
        },
        {
          name: "keydown",
          filter: ({ $el, mode }) => includes(mode, "click") && !isTag($el, "input"),
          handler(e) {
            if (e.keyCode === KEY_SPACE) {
              e.preventDefault();
              this.$el.click();
            }
          }
        },
        {
          name: "click",
          filter: ({ mode }) => ["click", "hover"].some((m) => includes(mode, m)),
          handler(e) {
            let link;
            if (this._preventClick || e.target.closest('a[href="#"], a[href=""]') || (link = e.target.closest("a[href]")) && (!this.isToggled(this.target) || link.hash && matches(this.target, link.hash))) {
              e.preventDefault();
            }
            if (!this._preventClick && includes(this.mode, "click")) {
              this.toggle();
            }
          }
        },
        {
          name: "mediachange",
          filter: ({ mode }) => includes(mode, "media"),
          el: ({ target }) => target,
          handler(e, mediaObj) {
            if (mediaObj.matches ^ this.isToggled(this.target)) {
              this.toggle();
            }
          }
        }
      ],
      methods: {
        async toggle(type) {
          if (!trigger(this.target, type || "toggle", [this])) {
            return;
          }
          if (hasAttr(this.$el, "aria-expanded")) {
            attr(this.$el, "aria-expanded", !this.isToggled(this.target));
          }
          if (!this.queued) {
            return this.toggleElement(this.target);
          }
          const leaving = this.target.filter((el) => hasClass(el, this.clsLeave));
          if (leaving.length) {
            for (const el of this.target) {
              const isLeaving = includes(leaving, el);
              this.toggleElement(el, isLeaving, isLeaving);
            }
            return;
          }
          const toggled = this.target.filter(this.isToggled);
          if (await this.toggleElement(toggled, false)) {
            await this.toggleElement(
              this.target.filter((el) => !includes(toggled, el)),
              true
            );
          }
        }
      }
    };

    var components = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Accordion: Accordion,
        Alert: alert,
        Close: Close,
        Cover: cover,
        Drop: drop,
        DropParentIcon: IconComponent,
        Dropdown: drop,
        Dropnav: Dropnav,
        FormCustom: formCustom,
        Grid: grid,
        HeightMatch: heightMatch,
        HeightPlaceholder: heightPlaceholder,
        HeightViewport: heightViewport,
        Icon: Icon,
        Img: img,
        Inverse: inverse,
        Leader: leader,
        Margin: Margin,
        Marker: Marker,
        Modal: modal,
        Nav: nav,
        NavParentIcon: NavParentIcon,
        Navbar: navbar,
        NavbarParentIcon: IconComponent,
        NavbarToggleIcon: NavbarToggleIcon,
        Offcanvas: offcanvas,
        OverflowAuto: overflowAuto,
        OverlayIcon: IconComponent,
        PaginationNext: PaginationNext,
        PaginationPrevious: PaginationPrevious,
        Responsive: responsive,
        Scroll: scroll,
        Scrollspy: scrollspy,
        ScrollspyNav: scrollspyNav,
        SearchIcon: Search,
        SlidenavNext: Slidenav,
        SlidenavPrevious: Slidenav,
        Spinner: Spinner,
        Sticky: sticky,
        Svg: svg,
        Switcher: Switcher,
        Tab: tab,
        Toggle: toggle,
        Totop: Totop,
        Video: Video
    });

    each(components, (component, name) => App.component(name, component));
    boot(App);

    each(components$1, (component, name) => App.component(name, component));

    return App;

}));


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-style.css */ "./src/index-style.css");
/* harmony import */ var _node_modules_uikit_dist_css_uikit_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/uikit/dist/css/uikit.min.css */ "./node_modules/uikit/dist/css/uikit.min.css");
/* harmony import */ var uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uikit */ "./node_modules/uikit/dist/js/uikit.js");
/* eslint-disable import/no-extraneous-dependencies */






/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"styles": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["styles"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxpQkFBaUI7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyw0QkFBNEI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0EsU0FBUztBQUNULHVCQUF1QixVQUFVLFNBQVMsU0FBUyxVQUFVLFNBQVM7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixZQUFZO0FBQ25DLHFCQUFxQixVQUFVO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHVCQUF1QixZQUFZO0FBQ25DLHFCQUFxQixVQUFVO0FBQy9CO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFNBQVM7QUFDN0M7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsS0FBSztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnREFBZ0Q7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxp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QWM7QUFDdkUscUJBQXFCLE1BQU07QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsdUJBQXVCO0FBQ3hEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxxQkFBcUIsV0FBVztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHFCQUFxQixNQUFNO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EscUJBQXFCLE1BQU07QUFDM0IsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RqVEQ7QUFDMkI7QUFDMEI7QUFDM0I7Ozs7Ozs7O1VDSDFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSwrQkFBK0Isd0NBQXdDO1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWpEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3Vpa2l0L2Rpc3QvY3NzL3Vpa2l0Lm1pbi5jc3M/ZWM1NSIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvaW5kZXgtc3R5bGUuY3NzP2VhZWQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3Vpa2l0L2Rpc3QvanMvdWlraXQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qISBVSWtpdCAzLjIxLjktZGV2Ljk2NjhhYzNjOSB8IGh0dHBzOi8vd3d3LmdldHVpa2l0LmNvbSB8IChjKSAyMDE0IC0gMjAyNCBZT090aGVtZSB8IE1JVCBMaWNlbnNlICovXG5cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZSgndWlraXQnLCBmYWN0b3J5KSA6XG4gICAgKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLlVJa2l0ID0gZmFjdG9yeSgpKTtcbn0pKHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICAgIGNvbnN0IHsgaGFzT3duUHJvcGVydHksIHRvU3RyaW5nIH0gPSBPYmplY3QucHJvdG90eXBlO1xuICAgIGZ1bmN0aW9uIGhhc093bihvYmosIGtleSkge1xuICAgICAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xuICAgIH1cbiAgICBjb25zdCBoeXBoZW5hdGVSZSA9IC9cXEIoW0EtWl0pL2c7XG4gICAgY29uc3QgaHlwaGVuYXRlID0gbWVtb2l6ZSgoc3RyKSA9PiBzdHIucmVwbGFjZShoeXBoZW5hdGVSZSwgXCItJDFcIikudG9Mb3dlckNhc2UoKSk7XG4gICAgY29uc3QgY2FtZWxpemVSZSA9IC8tKFxcdykvZztcbiAgICBjb25zdCBjYW1lbGl6ZSA9IG1lbW9pemUoXG4gICAgICAoc3RyKSA9PiAoc3RyLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgc3RyLnNsaWNlKDEpKS5yZXBsYWNlKGNhbWVsaXplUmUsIChfLCBjKSA9PiBjLnRvVXBwZXJDYXNlKCkpXG4gICAgKTtcbiAgICBjb25zdCB1Y2ZpcnN0ID0gbWVtb2l6ZSgoc3RyKSA9PiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSkpO1xuICAgIGZ1bmN0aW9uIHN0YXJ0c1dpdGgoc3RyLCBzZWFyY2gpIHtcbiAgICAgIHZhciBfYTtcbiAgICAgIHJldHVybiAoX2EgPSBzdHIgPT0gbnVsbCA/IHZvaWQgMCA6IHN0ci5zdGFydHNXaXRoKSA9PSBudWxsID8gdm9pZCAwIDogX2EuY2FsbChzdHIsIHNlYXJjaCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGVuZHNXaXRoKHN0ciwgc2VhcmNoKSB7XG4gICAgICB2YXIgX2E7XG4gICAgICByZXR1cm4gKF9hID0gc3RyID09IG51bGwgPyB2b2lkIDAgOiBzdHIuZW5kc1dpdGgpID09IG51bGwgPyB2b2lkIDAgOiBfYS5jYWxsKHN0ciwgc2VhcmNoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaW5jbHVkZXMob2JqLCBzZWFyY2gpIHtcbiAgICAgIHZhciBfYTtcbiAgICAgIHJldHVybiAoX2EgPSBvYmogPT0gbnVsbCA/IHZvaWQgMCA6IG9iai5pbmNsdWRlcykgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmNhbGwob2JqLCBzZWFyY2gpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICAgICAgdmFyIF9hO1xuICAgICAgcmV0dXJuIChfYSA9IGFycmF5ID09IG51bGwgPyB2b2lkIDAgOiBhcnJheS5maW5kSW5kZXgpID09IG51bGwgPyB2b2lkIDAgOiBfYS5jYWxsKGFycmF5LCBwcmVkaWNhdGUpO1xuICAgIH1cbiAgICBjb25zdCB7IGlzQXJyYXksIGZyb206IHRvQXJyYXkgfSA9IEFycmF5O1xuICAgIGNvbnN0IHsgYXNzaWduIH0gPSBPYmplY3Q7XG4gICAgZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIjtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNXaW5kb3cob2JqKSB7XG4gICAgICByZXR1cm4gaXNPYmplY3Qob2JqKSAmJiBvYmogPT09IG9iai53aW5kb3c7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzRG9jdW1lbnQob2JqKSB7XG4gICAgICByZXR1cm4gbm9kZVR5cGUob2JqKSA9PT0gOTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNOb2RlKG9iaikge1xuICAgICAgcmV0dXJuIG5vZGVUeXBlKG9iaikgPj0gMTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNFbGVtZW50KG9iaikge1xuICAgICAgcmV0dXJuIG5vZGVUeXBlKG9iaikgPT09IDE7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG5vZGVUeXBlKG9iaikge1xuICAgICAgcmV0dXJuICFpc1dpbmRvdyhvYmopICYmIGlzT2JqZWN0KG9iaikgJiYgb2JqLm5vZGVUeXBlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0Jvb2xlYW4odmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIjtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzTnVtZXJpYyh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGlzTnVtYmVyKHZhbHVlKSB8fCBpc1N0cmluZyh2YWx1ZSkgJiYgIWlzTmFOKHZhbHVlIC0gcGFyc2VGbG9hdCh2YWx1ZSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0VtcHR5KG9iaikge1xuICAgICAgcmV0dXJuICEoaXNBcnJheShvYmopID8gb2JqLmxlbmd0aCA6IGlzT2JqZWN0KG9iaikgPyBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA6IGZhbHNlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gdm9pZCAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0b0Jvb2xlYW4odmFsdWUpIHtcbiAgICAgIHJldHVybiBpc0Jvb2xlYW4odmFsdWUpID8gdmFsdWUgOiB2YWx1ZSA9PT0gXCJ0cnVlXCIgfHwgdmFsdWUgPT09IFwiMVwiIHx8IHZhbHVlID09PSBcIlwiID8gdHJ1ZSA6IHZhbHVlID09PSBcImZhbHNlXCIgfHwgdmFsdWUgPT09IFwiMFwiID8gZmFsc2UgOiB2YWx1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgICAgIGNvbnN0IG51bWJlciA9IE51bWJlcih2YWx1ZSk7XG4gICAgICByZXR1cm4gaXNOYU4obnVtYmVyKSA/IGZhbHNlIDogbnVtYmVyO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0b0Zsb2F0KHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSkgfHwgMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gdG9Ob2RlKGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50ICYmIHRvTm9kZXMoZWxlbWVudClbMF07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvTm9kZXMoZWxlbWVudCkge1xuICAgICAgcmV0dXJuIGlzTm9kZShlbGVtZW50KSA/IFtlbGVtZW50XSA6IEFycmF5LmZyb20oZWxlbWVudCB8fCBbXSkuZmlsdGVyKGlzTm9kZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvV2luZG93KGVsZW1lbnQpIHtcbiAgICAgIGlmIChpc1dpbmRvdyhlbGVtZW50KSkge1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQgPSB0b05vZGUoZWxlbWVudCk7XG4gICAgICBjb25zdCBkb2N1bWVudCA9IGlzRG9jdW1lbnQoZWxlbWVudCkgPyBlbGVtZW50IDogZWxlbWVudCA9PSBudWxsID8gdm9pZCAwIDogZWxlbWVudC5vd25lckRvY3VtZW50O1xuICAgICAgcmV0dXJuIChkb2N1bWVudCA9PSBudWxsID8gdm9pZCAwIDogZG9jdW1lbnQuZGVmYXVsdFZpZXcpIHx8IHdpbmRvdztcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNFcXVhbCh2YWx1ZSwgb3RoZXIpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgaXNPYmplY3QodmFsdWUpICYmIGlzT2JqZWN0KG90aGVyKSAmJiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSBPYmplY3Qua2V5cyhvdGhlcikubGVuZ3RoICYmIGVhY2godmFsdWUsICh2YWwsIGtleSkgPT4gdmFsID09PSBvdGhlcltrZXldKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3dhcCh2YWx1ZSwgYSwgYikge1xuICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChgJHthfXwke2J9YCwgXCJnXCIpLCAobWF0Y2gpID0+IG1hdGNoID09PSBhID8gYiA6IGEpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBsYXN0KGFycmF5KSB7XG4gICAgICByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGVhY2gob2JqLCBjYikge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChmYWxzZSA9PT0gY2Iob2JqW2tleV0sIGtleSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzb3J0QnkoYXJyYXksIHByb3ApIHtcbiAgICAgIHJldHVybiBhcnJheS5zbGljZSgpLnNvcnQoXG4gICAgICAgICh7IFtwcm9wXTogcHJvcEEgPSAwIH0sIHsgW3Byb3BdOiBwcm9wQiA9IDAgfSkgPT4gcHJvcEEgPiBwcm9wQiA/IDEgOiBwcm9wQiA+IHByb3BBID8gLTEgOiAwXG4gICAgICApO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdW1CeShhcnJheSwgaXRlcmF0ZWUpIHtcbiAgICAgIHJldHVybiBhcnJheS5yZWR1Y2UoXG4gICAgICAgIChzdW0sIGl0ZW0pID0+IHN1bSArIHRvRmxvYXQoaXNGdW5jdGlvbihpdGVyYXRlZSkgPyBpdGVyYXRlZShpdGVtKSA6IGl0ZW1baXRlcmF0ZWVdKSxcbiAgICAgICAgMFxuICAgICAgKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdW5pcXVlQnkoYXJyYXksIHByb3ApIHtcbiAgICAgIGNvbnN0IHNlZW4gPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICAgICAgcmV0dXJuIGFycmF5LmZpbHRlcigoeyBbcHJvcF06IGNoZWNrIH0pID0+IHNlZW4uaGFzKGNoZWNrKSA/IGZhbHNlIDogc2Vlbi5hZGQoY2hlY2spKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcGljayhvYmosIHByb3BzKSB7XG4gICAgICByZXR1cm4gcHJvcHMucmVkdWNlKChyZXMsIHByb3ApID0+ICh7IC4uLnJlcywgW3Byb3BdOiBvYmpbcHJvcF0gfSksIHt9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xhbXAobnVtYmVyLCBtaW4gPSAwLCBtYXggPSAxKSB7XG4gICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodG9OdW1iZXIobnVtYmVyKSB8fCAwLCBtaW4pLCBtYXgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBub29wKCkge1xuICAgIH1cbiAgICBmdW5jdGlvbiBpbnRlcnNlY3RSZWN0KC4uLnJlY3RzKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBbXCJib3R0b21cIiwgXCJ0b3BcIl0sXG4gICAgICAgIFtcInJpZ2h0XCIsIFwibGVmdFwiXVxuICAgICAgXS5ldmVyeShcbiAgICAgICAgKFttaW5Qcm9wLCBtYXhQcm9wXSkgPT4gTWF0aC5taW4oLi4ucmVjdHMubWFwKCh7IFttaW5Qcm9wXTogbWluIH0pID0+IG1pbikpIC0gTWF0aC5tYXgoLi4ucmVjdHMubWFwKCh7IFttYXhQcm9wXTogbWF4IH0pID0+IG1heCkpID4gMFxuICAgICAgKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcG9pbnRJblJlY3QocG9pbnQsIHJlY3QpIHtcbiAgICAgIHJldHVybiBwb2ludC54IDw9IHJlY3QucmlnaHQgJiYgcG9pbnQueCA+PSByZWN0LmxlZnQgJiYgcG9pbnQueSA8PSByZWN0LmJvdHRvbSAmJiBwb2ludC55ID49IHJlY3QudG9wO1xuICAgIH1cbiAgICBmdW5jdGlvbiByYXRpbyhkaW1lbnNpb25zLCBwcm9wLCB2YWx1ZSkge1xuICAgICAgY29uc3QgYVByb3AgPSBwcm9wID09PSBcIndpZHRoXCIgPyBcImhlaWdodFwiIDogXCJ3aWR0aFwiO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgW2FQcm9wXTogZGltZW5zaW9uc1twcm9wXSA/IE1hdGgucm91bmQodmFsdWUgKiBkaW1lbnNpb25zW2FQcm9wXSAvIGRpbWVuc2lvbnNbcHJvcF0pIDogZGltZW5zaW9uc1thUHJvcF0sXG4gICAgICAgIFtwcm9wXTogdmFsdWVcbiAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvbnRhaW4oZGltZW5zaW9ucywgbWF4RGltZW5zaW9ucykge1xuICAgICAgZGltZW5zaW9ucyA9IHsgLi4uZGltZW5zaW9ucyB9O1xuICAgICAgZm9yIChjb25zdCBwcm9wIGluIGRpbWVuc2lvbnMpIHtcbiAgICAgICAgZGltZW5zaW9ucyA9IGRpbWVuc2lvbnNbcHJvcF0gPiBtYXhEaW1lbnNpb25zW3Byb3BdID8gcmF0aW8oZGltZW5zaW9ucywgcHJvcCwgbWF4RGltZW5zaW9uc1twcm9wXSkgOiBkaW1lbnNpb25zO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRpbWVuc2lvbnM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvdmVyJDEoZGltZW5zaW9ucywgbWF4RGltZW5zaW9ucykge1xuICAgICAgZGltZW5zaW9ucyA9IGNvbnRhaW4oZGltZW5zaW9ucywgbWF4RGltZW5zaW9ucyk7XG4gICAgICBmb3IgKGNvbnN0IHByb3AgaW4gZGltZW5zaW9ucykge1xuICAgICAgICBkaW1lbnNpb25zID0gZGltZW5zaW9uc1twcm9wXSA8IG1heERpbWVuc2lvbnNbcHJvcF0gPyByYXRpbyhkaW1lbnNpb25zLCBwcm9wLCBtYXhEaW1lbnNpb25zW3Byb3BdKSA6IGRpbWVuc2lvbnM7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGltZW5zaW9ucztcbiAgICB9XG4gICAgY29uc3QgRGltZW5zaW9ucyA9IHsgcmF0aW8sIGNvbnRhaW4sIGNvdmVyOiBjb3ZlciQxIH07XG4gICAgZnVuY3Rpb24gZ2V0SW5kZXgoaSwgZWxlbWVudHMsIGN1cnJlbnQgPSAwLCBmaW5pdGUgPSBmYWxzZSkge1xuICAgICAgZWxlbWVudHMgPSB0b05vZGVzKGVsZW1lbnRzKTtcbiAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBlbGVtZW50cztcbiAgICAgIGlmICghbGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIGkgPSBpc051bWVyaWMoaSkgPyB0b051bWJlcihpKSA6IGkgPT09IFwibmV4dFwiID8gY3VycmVudCArIDEgOiBpID09PSBcInByZXZpb3VzXCIgPyBjdXJyZW50IC0gMSA6IGkgPT09IFwibGFzdFwiID8gbGVuZ3RoIC0gMSA6IGVsZW1lbnRzLmluZGV4T2YodG9Ob2RlKGkpKTtcbiAgICAgIGlmIChmaW5pdGUpIHtcbiAgICAgICAgcmV0dXJuIGNsYW1wKGksIDAsIGxlbmd0aCAtIDEpO1xuICAgICAgfVxuICAgICAgaSAlPSBsZW5ndGg7XG4gICAgICByZXR1cm4gaSA8IDAgPyBpICsgbGVuZ3RoIDogaTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbWVtb2l6ZShmbikge1xuICAgICAgY29uc3QgY2FjaGUgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIHJldHVybiAoa2V5LCAuLi5hcmdzKSA9PiBjYWNoZVtrZXldIHx8IChjYWNoZVtrZXldID0gZm4oa2V5LCAuLi5hcmdzKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgLi4uY2xhc3Nlcykge1xuICAgICAgZm9yIChjb25zdCBub2RlIG9mIHRvTm9kZXMoZWxlbWVudCkpIHtcbiAgICAgICAgY29uc3QgYWRkID0gdG9DbGFzc2VzKGNsYXNzZXMpLmZpbHRlcigoY2xzKSA9PiAhaGFzQ2xhc3Mobm9kZSwgY2xzKSk7XG4gICAgICAgIGlmIChhZGQubGVuZ3RoKSB7XG4gICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKC4uLmFkZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgLi4uY2xhc3Nlcykge1xuICAgICAgZm9yIChjb25zdCBub2RlIG9mIHRvTm9kZXMoZWxlbWVudCkpIHtcbiAgICAgICAgY29uc3QgcmVtb3ZlID0gdG9DbGFzc2VzKGNsYXNzZXMpLmZpbHRlcigoY2xzKSA9PiBoYXNDbGFzcyhub2RlLCBjbHMpKTtcbiAgICAgICAgaWYgKHJlbW92ZS5sZW5ndGgpIHtcbiAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoLi4ucmVtb3ZlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiByZXBsYWNlQ2xhc3MoZWxlbWVudCwgb2xkQ2xhc3MsIG5ld0NsYXNzKSB7XG4gICAgICBuZXdDbGFzcyA9IHRvQ2xhc3NlcyhuZXdDbGFzcyk7XG4gICAgICBvbGRDbGFzcyA9IHRvQ2xhc3NlcyhvbGRDbGFzcykuZmlsdGVyKChjbHMpID0+ICFpbmNsdWRlcyhuZXdDbGFzcywgY2xzKSk7XG4gICAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBvbGRDbGFzcyk7XG4gICAgICBhZGRDbGFzcyhlbGVtZW50LCBuZXdDbGFzcyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGNscykge1xuICAgICAgW2Nsc10gPSB0b0NsYXNzZXMoY2xzKTtcbiAgICAgIHJldHVybiB0b05vZGVzKGVsZW1lbnQpLnNvbWUoKG5vZGUpID0+IG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKGNscykpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbHMsIGZvcmNlKSB7XG4gICAgICBjb25zdCBjbGFzc2VzID0gdG9DbGFzc2VzKGNscyk7XG4gICAgICBpZiAoIWlzVW5kZWZpbmVkKGZvcmNlKSkge1xuICAgICAgICBmb3JjZSA9ICEhZm9yY2U7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgdG9Ob2RlcyhlbGVtZW50KSkge1xuICAgICAgICBmb3IgKGNvbnN0IGNsczIgb2YgY2xhc3Nlcykge1xuICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LnRvZ2dsZShjbHMyLCBmb3JjZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdG9DbGFzc2VzKHN0cikge1xuICAgICAgcmV0dXJuIHN0ciA/IGlzQXJyYXkoc3RyKSA/IHN0ci5tYXAodG9DbGFzc2VzKS5mbGF0KCkgOiBTdHJpbmcoc3RyKS5zcGxpdChcIiBcIikuZmlsdGVyKEJvb2xlYW4pIDogW107XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXR0cihlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICAgICAgdmFyIF9hO1xuICAgICAgaWYgKGlzT2JqZWN0KG5hbWUpKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIG5hbWUpIHtcbiAgICAgICAgICBhdHRyKGVsZW1lbnQsIGtleSwgbmFtZVtrZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoaXNVbmRlZmluZWQodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiAoX2EgPSB0b05vZGUoZWxlbWVudCkpID09IG51bGwgPyB2b2lkIDAgOiBfYS5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGNvbnN0IGVsIG9mIHRvTm9kZXMoZWxlbWVudCkpIHtcbiAgICAgICAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuY2FsbChlbCwgYXR0cihlbCwgbmFtZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJlbW92ZUF0dHIoZWwsIG5hbWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBoYXNBdHRyKGVsZW1lbnQsIG5hbWUpIHtcbiAgICAgIHJldHVybiB0b05vZGVzKGVsZW1lbnQpLnNvbWUoKGVsZW1lbnQyKSA9PiBlbGVtZW50Mi5oYXNBdHRyaWJ1dGUobmFtZSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVBdHRyKGVsZW1lbnQsIG5hbWUpIHtcbiAgICAgIHRvTm9kZXMoZWxlbWVudCkuZm9yRWFjaCgoZWxlbWVudDIpID0+IGVsZW1lbnQyLnJlbW92ZUF0dHJpYnV0ZShuYW1lKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRhdGEoZWxlbWVudCwgYXR0cmlidXRlKSB7XG4gICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgW2F0dHJpYnV0ZSwgYGRhdGEtJHthdHRyaWJ1dGV9YF0pIHtcbiAgICAgICAgaWYgKGhhc0F0dHIoZWxlbWVudCwgbmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gYXR0cihlbGVtZW50LCBuYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGluQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCI7XG4gICAgY29uc3QgaXNSdGwgPSBpbkJyb3dzZXIgJiYgZG9jdW1lbnQuZGlyID09PSBcInJ0bFwiO1xuICAgIGNvbnN0IGhhc1RvdWNoID0gaW5Ccm93c2VyICYmIFwib250b3VjaHN0YXJ0XCIgaW4gd2luZG93O1xuICAgIGNvbnN0IGhhc1BvaW50ZXJFdmVudHMgPSBpbkJyb3dzZXIgJiYgd2luZG93LlBvaW50ZXJFdmVudDtcbiAgICBjb25zdCBwb2ludGVyRG93biQxID0gaGFzUG9pbnRlckV2ZW50cyA/IFwicG9pbnRlcmRvd25cIiA6IGhhc1RvdWNoID8gXCJ0b3VjaHN0YXJ0XCIgOiBcIm1vdXNlZG93blwiO1xuICAgIGNvbnN0IHBvaW50ZXJNb3ZlJDEgPSBoYXNQb2ludGVyRXZlbnRzID8gXCJwb2ludGVybW92ZVwiIDogaGFzVG91Y2ggPyBcInRvdWNobW92ZVwiIDogXCJtb3VzZW1vdmVcIjtcbiAgICBjb25zdCBwb2ludGVyVXAkMSA9IGhhc1BvaW50ZXJFdmVudHMgPyBcInBvaW50ZXJ1cFwiIDogaGFzVG91Y2ggPyBcInRvdWNoZW5kXCIgOiBcIm1vdXNldXBcIjtcbiAgICBjb25zdCBwb2ludGVyRW50ZXIgPSBoYXNQb2ludGVyRXZlbnRzID8gXCJwb2ludGVyZW50ZXJcIiA6IGhhc1RvdWNoID8gXCJcIiA6IFwibW91c2VlbnRlclwiO1xuICAgIGNvbnN0IHBvaW50ZXJMZWF2ZSA9IGhhc1BvaW50ZXJFdmVudHMgPyBcInBvaW50ZXJsZWF2ZVwiIDogaGFzVG91Y2ggPyBcIlwiIDogXCJtb3VzZWxlYXZlXCI7XG4gICAgY29uc3QgcG9pbnRlckNhbmNlbCA9IGhhc1BvaW50ZXJFdmVudHMgPyBcInBvaW50ZXJjYW5jZWxcIiA6IFwidG91Y2hjYW5jZWxcIjtcblxuICAgIGNvbnN0IHZvaWRFbGVtZW50cyA9IHtcbiAgICAgIGFyZWE6IHRydWUsXG4gICAgICBiYXNlOiB0cnVlLFxuICAgICAgYnI6IHRydWUsXG4gICAgICBjb2w6IHRydWUsXG4gICAgICBlbWJlZDogdHJ1ZSxcbiAgICAgIGhyOiB0cnVlLFxuICAgICAgaW1nOiB0cnVlLFxuICAgICAgaW5wdXQ6IHRydWUsXG4gICAgICBrZXlnZW46IHRydWUsXG4gICAgICBsaW5rOiB0cnVlLFxuICAgICAgbWV0YTogdHJ1ZSxcbiAgICAgIHBhcmFtOiB0cnVlLFxuICAgICAgc291cmNlOiB0cnVlLFxuICAgICAgdHJhY2s6IHRydWUsXG4gICAgICB3YnI6IHRydWVcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGlzVm9pZEVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgcmV0dXJuIHRvTm9kZXMoZWxlbWVudCkuc29tZSgoZWxlbWVudDIpID0+IHZvaWRFbGVtZW50c1tlbGVtZW50Mi50YWdOYW1lLnRvTG93ZXJDYXNlKCldKTtcbiAgICB9XG4gICAgY29uc3QgaXNWaXNpYmxlRm4gPSBpbkJyb3dzZXIgJiYgRWxlbWVudC5wcm90b3R5cGUuY2hlY2tWaXNpYmlsaXR5IHx8IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0V2lkdGggfHwgdGhpcy5vZmZzZXRIZWlnaHQgfHwgdGhpcy5nZXRDbGllbnRSZWN0cygpLmxlbmd0aDtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGlzVmlzaWJsZShlbGVtZW50KSB7XG4gICAgICByZXR1cm4gdG9Ob2RlcyhlbGVtZW50KS5zb21lKChlbGVtZW50MikgPT4gaXNWaXNpYmxlRm4uY2FsbChlbGVtZW50MikpO1xuICAgIH1cbiAgICBjb25zdCBzZWxJbnB1dCA9IFwiaW5wdXQsc2VsZWN0LHRleHRhcmVhLGJ1dHRvblwiO1xuICAgIGZ1bmN0aW9uIGlzSW5wdXQoZWxlbWVudCkge1xuICAgICAgcmV0dXJuIHRvTm9kZXMoZWxlbWVudCkuc29tZSgoZWxlbWVudDIpID0+IG1hdGNoZXMoZWxlbWVudDIsIHNlbElucHV0KSk7XG4gICAgfVxuICAgIGNvbnN0IHNlbEZvY3VzYWJsZSA9IGAke3NlbElucHV0fSxhW2hyZWZdLFt0YWJpbmRleF1gO1xuICAgIGZ1bmN0aW9uIGlzRm9jdXNhYmxlKGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBtYXRjaGVzKGVsZW1lbnQsIHNlbEZvY3VzYWJsZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBhcmVudChlbGVtZW50KSB7XG4gICAgICB2YXIgX2E7XG4gICAgICByZXR1cm4gKF9hID0gdG9Ob2RlKGVsZW1lbnQpKSA9PSBudWxsID8gdm9pZCAwIDogX2EucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmlsdGVyJDEoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICAgIHJldHVybiB0b05vZGVzKGVsZW1lbnQpLmZpbHRlcigoZWxlbWVudDIpID0+IG1hdGNoZXMoZWxlbWVudDIsIHNlbGVjdG9yKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1hdGNoZXMoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICAgIHJldHVybiB0b05vZGVzKGVsZW1lbnQpLnNvbWUoKGVsZW1lbnQyKSA9PiBlbGVtZW50Mi5tYXRjaGVzKHNlbGVjdG9yKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBhcmVudHMoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gW107XG4gICAgICB3aGlsZSAoZWxlbWVudCA9IHBhcmVudChlbGVtZW50KSkge1xuICAgICAgICBpZiAoIXNlbGVjdG9yIHx8IG1hdGNoZXMoZWxlbWVudCwgc2VsZWN0b3IpKSB7XG4gICAgICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVsZW1lbnRzO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGlsZHJlbihlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgICAgZWxlbWVudCA9IHRvTm9kZShlbGVtZW50KTtcbiAgICAgIGNvbnN0IGNoaWxkcmVuMiA9IGVsZW1lbnQgPyB0b0FycmF5KGVsZW1lbnQuY2hpbGRyZW4pIDogW107XG4gICAgICByZXR1cm4gc2VsZWN0b3IgPyBmaWx0ZXIkMShjaGlsZHJlbjIsIHNlbGVjdG9yKSA6IGNoaWxkcmVuMjtcbiAgICB9XG4gICAgZnVuY3Rpb24gaW5kZXgoZWxlbWVudCwgcmVmKSB7XG4gICAgICByZXR1cm4gcmVmID8gdG9Ob2RlcyhlbGVtZW50KS5pbmRleE9mKHRvTm9kZShyZWYpKSA6IGNoaWxkcmVuKHBhcmVudChlbGVtZW50KSkuaW5kZXhPZihlbGVtZW50KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNTYW1lU2l0ZUFuY2hvcihlbCkge1xuICAgICAgZWwgPSB0b05vZGUoZWwpO1xuICAgICAgcmV0dXJuIGVsICYmIFtcIm9yaWdpblwiLCBcInBhdGhuYW1lXCIsIFwic2VhcmNoXCJdLmV2ZXJ5KChwYXJ0KSA9PiBlbFtwYXJ0XSA9PT0gbG9jYXRpb25bcGFydF0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRUYXJnZXRlZEVsZW1lbnQoZWwpIHtcbiAgICAgIGlmIChpc1NhbWVTaXRlQW5jaG9yKGVsKSkge1xuICAgICAgICBjb25zdCB7IGhhc2gsIG93bmVyRG9jdW1lbnQgfSA9IHRvTm9kZShlbCk7XG4gICAgICAgIGNvbnN0IGlkID0gZGVjb2RlVVJJQ29tcG9uZW50KGhhc2gpLnNsaWNlKDEpO1xuICAgICAgICByZXR1cm4gb3duZXJEb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkgfHwgb3duZXJEb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShpZClbMF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcXVlcnkoc2VsZWN0b3IsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiBmaW5kKHNlbGVjdG9yLCBnZXRDb250ZXh0KHNlbGVjdG9yLCBjb250ZXh0KSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHF1ZXJ5QWxsKHNlbGVjdG9yLCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gZmluZEFsbChzZWxlY3RvciwgZ2V0Q29udGV4dChzZWxlY3RvciwgY29udGV4dCkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmaW5kKHNlbGVjdG9yLCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gdG9Ob2RlKF9xdWVyeShzZWxlY3RvciwgdG9Ob2RlKGNvbnRleHQpLCBcInF1ZXJ5U2VsZWN0b3JcIikpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmaW5kQWxsKHNlbGVjdG9yLCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gdG9Ob2RlcyhfcXVlcnkoc2VsZWN0b3IsIHRvTm9kZShjb250ZXh0KSwgXCJxdWVyeVNlbGVjdG9yQWxsXCIpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Q29udGV4dChzZWxlY3RvciwgY29udGV4dCA9IGRvY3VtZW50KSB7XG4gICAgICByZXR1cm4gaXNTdHJpbmcoc2VsZWN0b3IpICYmIHBhcnNlU2VsZWN0b3Ioc2VsZWN0b3IpLmlzQ29udGV4dFNlbGVjdG9yIHx8IGlzRG9jdW1lbnQoY29udGV4dCkgPyBjb250ZXh0IDogY29udGV4dC5vd25lckRvY3VtZW50O1xuICAgIH1cbiAgICBjb25zdCBhZGRTdGFyUmUgPSAvKFshPit+LV0pKD89XFxzK1shPit+LV18XFxzKiQpL2c7XG4gICAgY29uc3Qgc3BsaXRTZWxlY3RvclJlID0gLyhcXChbXildKlxcKXxbXixdKSsvZztcbiAgICBjb25zdCBwYXJzZVNlbGVjdG9yID0gbWVtb2l6ZSgoc2VsZWN0b3IpID0+IHtcbiAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3IucmVwbGFjZShhZGRTdGFyUmUsIFwiJDEgKlwiKTtcbiAgICAgIGxldCBpc0NvbnRleHRTZWxlY3RvciA9IGZhbHNlO1xuICAgICAgY29uc3Qgc2VsZWN0b3JzID0gW107XG4gICAgICBmb3IgKGxldCBzZWwgb2Ygc2VsZWN0b3IubWF0Y2goc3BsaXRTZWxlY3RvclJlKSkge1xuICAgICAgICBzZWwgPSBzZWwudHJpbSgpO1xuICAgICAgICBpc0NvbnRleHRTZWxlY3RvciB8fCAoaXNDb250ZXh0U2VsZWN0b3IgPSBbXCIhXCIsIFwiK1wiLCBcIn5cIiwgXCItXCIsIFwiPlwiXS5pbmNsdWRlcyhzZWxbMF0pKTtcbiAgICAgICAgc2VsZWN0b3JzLnB1c2goc2VsKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvcnMuam9pbihcIixcIiksXG4gICAgICAgIHNlbGVjdG9ycyxcbiAgICAgICAgaXNDb250ZXh0U2VsZWN0b3JcbiAgICAgIH07XG4gICAgfSk7XG4gICAgY29uc3QgcG9zaXRpb25SZSA9IC8oXFwoW14pXSpcXCl8XFxTKSovO1xuICAgIGNvbnN0IHBhcnNlUG9zaXRpb25TZWxlY3RvciA9IG1lbW9pemUoKHNlbGVjdG9yKSA9PiB7XG4gICAgICBzZWxlY3RvciA9IHNlbGVjdG9yLnNsaWNlKDEpLnRyaW0oKTtcbiAgICAgIGNvbnN0IFtwb3NpdGlvbl0gPSBzZWxlY3Rvci5tYXRjaChwb3NpdGlvblJlKTtcbiAgICAgIHJldHVybiBbcG9zaXRpb24sIHNlbGVjdG9yLnNsaWNlKHBvc2l0aW9uLmxlbmd0aCArIDEpXTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBfcXVlcnkoc2VsZWN0b3IsIGNvbnRleHQgPSBkb2N1bWVudCwgcXVlcnlGbikge1xuICAgICAgaWYgKCFzZWxlY3RvciB8fCAhaXNTdHJpbmcoc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgaWYgKCFwYXJzZWQuaXNDb250ZXh0U2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIF9kb1F1ZXJ5KGNvbnRleHQsIHF1ZXJ5Rm4sIHBhcnNlZC5zZWxlY3Rvcik7XG4gICAgICB9XG4gICAgICBzZWxlY3RvciA9IFwiXCI7XG4gICAgICBjb25zdCBpc1NpbmdsZSA9IHBhcnNlZC5zZWxlY3RvcnMubGVuZ3RoID09PSAxO1xuICAgICAgZm9yIChsZXQgc2VsIG9mIHBhcnNlZC5zZWxlY3RvcnMpIHtcbiAgICAgICAgbGV0IHBvc2l0aW9uU2VsO1xuICAgICAgICBsZXQgY3R4ID0gY29udGV4dDtcbiAgICAgICAgaWYgKHNlbFswXSA9PT0gXCIhXCIpIHtcbiAgICAgICAgICBbcG9zaXRpb25TZWwsIHNlbF0gPSBwYXJzZVBvc2l0aW9uU2VsZWN0b3Ioc2VsKTtcbiAgICAgICAgICBjdHggPSBjb250ZXh0LnBhcmVudEVsZW1lbnQuY2xvc2VzdChwb3NpdGlvblNlbCk7XG4gICAgICAgICAgaWYgKCFzZWwgJiYgaXNTaW5nbGUpIHtcbiAgICAgICAgICAgIHJldHVybiBjdHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjdHggJiYgc2VsWzBdID09PSBcIi1cIikge1xuICAgICAgICAgIFtwb3NpdGlvblNlbCwgc2VsXSA9IHBhcnNlUG9zaXRpb25TZWxlY3RvcihzZWwpO1xuICAgICAgICAgIGN0eCA9IGN0eC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgIGN0eCA9IG1hdGNoZXMoY3R4LCBwb3NpdGlvblNlbCkgPyBjdHggOiBudWxsO1xuICAgICAgICAgIGlmICghc2VsICYmIGlzU2luZ2xlKSB7XG4gICAgICAgICAgICByZXR1cm4gY3R4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWN0eCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1NpbmdsZSkge1xuICAgICAgICAgIGlmIChzZWxbMF0gPT09IFwiflwiIHx8IHNlbFswXSA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgIHNlbCA9IGA6c2NvcGUgPiA6bnRoLWNoaWxkKCR7aW5kZXgoY3R4KSArIDF9KSAke3NlbH1gO1xuICAgICAgICAgICAgY3R4ID0gY3R4LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgfSBlbHNlIGlmIChzZWxbMF0gPT09IFwiPlwiKSB7XG4gICAgICAgICAgICBzZWwgPSBgOnNjb3BlICR7c2VsfWA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBfZG9RdWVyeShjdHgsIHF1ZXJ5Rm4sIHNlbCk7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0b3IgKz0gYCR7c2VsZWN0b3IgPyBcIixcIiA6IFwiXCJ9JHtkb21QYXRoKGN0eCl9ICR7c2VsfWA7XG4gICAgICB9XG4gICAgICBpZiAoIWlzRG9jdW1lbnQoY29udGV4dCkpIHtcbiAgICAgICAgY29udGV4dCA9IGNvbnRleHQub3duZXJEb2N1bWVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfZG9RdWVyeShjb250ZXh0LCBxdWVyeUZuLCBzZWxlY3Rvcik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9kb1F1ZXJ5KGNvbnRleHQsIHF1ZXJ5Rm4sIHNlbGVjdG9yKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gY29udGV4dFtxdWVyeUZuXShzZWxlY3Rvcik7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBkb21QYXRoKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IG5hbWVzID0gW107XG4gICAgICB3aGlsZSAoZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgIGNvbnN0IGlkID0gYXR0cihlbGVtZW50LCBcImlkXCIpO1xuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICBuYW1lcy51bnNoaWZ0KGAjJHtlc2NhcGUoaWQpfWApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCB7IHRhZ05hbWUgfSA9IGVsZW1lbnQ7XG4gICAgICAgICAgaWYgKHRhZ05hbWUgIT09IFwiSFRNTFwiKSB7XG4gICAgICAgICAgICB0YWdOYW1lICs9IGA6bnRoLWNoaWxkKCR7aW5kZXgoZWxlbWVudCkgKyAxfSlgO1xuICAgICAgICAgIH1cbiAgICAgICAgICBuYW1lcy51bnNoaWZ0KHRhZ05hbWUpO1xuICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBuYW1lcy5qb2luKFwiID4gXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBlc2NhcGUoY3NzKSB7XG4gICAgICByZXR1cm4gaXNTdHJpbmcoY3NzKSA/IENTUy5lc2NhcGUoY3NzKSA6IFwiXCI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb24oLi4uYXJncykge1xuICAgICAgbGV0IFt0YXJnZXRzLCB0eXBlcywgc2VsZWN0b3IsIGxpc3RlbmVyLCB1c2VDYXB0dXJlID0gZmFsc2VdID0gZ2V0QXJncyhhcmdzKTtcbiAgICAgIGlmIChsaXN0ZW5lci5sZW5ndGggPiAxKSB7XG4gICAgICAgIGxpc3RlbmVyID0gZGV0YWlsKGxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIGlmICh1c2VDYXB0dXJlID09IG51bGwgPyB2b2lkIDAgOiB1c2VDYXB0dXJlLnNlbGYpIHtcbiAgICAgICAgbGlzdGVuZXIgPSBzZWxmRmlsdGVyKGxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICBsaXN0ZW5lciA9IGRlbGVnYXRlKHNlbGVjdG9yLCBsaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IHR5cGUgb2YgdHlwZXMpIHtcbiAgICAgICAgZm9yIChjb25zdCB0YXJnZXQgb2YgdGFyZ2V0cykge1xuICAgICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICgpID0+IG9mZih0YXJnZXRzLCB0eXBlcywgbGlzdGVuZXIsIHVzZUNhcHR1cmUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvZmYoLi4uYXJncykge1xuICAgICAgbGV0IFt0YXJnZXRzLCB0eXBlcywgLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSA9IGZhbHNlXSA9IGdldEFyZ3MoYXJncyk7XG4gICAgICBmb3IgKGNvbnN0IHR5cGUgb2YgdHlwZXMpIHtcbiAgICAgICAgZm9yIChjb25zdCB0YXJnZXQgb2YgdGFyZ2V0cykge1xuICAgICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBvbmNlKC4uLmFyZ3MpIHtcbiAgICAgIGNvbnN0IFtlbGVtZW50LCB0eXBlcywgc2VsZWN0b3IsIGxpc3RlbmVyLCB1c2VDYXB0dXJlID0gZmFsc2UsIGNvbmRpdGlvbl0gPSBnZXRBcmdzKGFyZ3MpO1xuICAgICAgY29uc3Qgb2ZmMiA9IG9uKFxuICAgICAgICBlbGVtZW50LFxuICAgICAgICB0eXBlcyxcbiAgICAgICAgc2VsZWN0b3IsXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gIWNvbmRpdGlvbiB8fCBjb25kaXRpb24oZSk7XG4gICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgb2ZmMigpO1xuICAgICAgICAgICAgbGlzdGVuZXIoZSwgcmVzdWx0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHVzZUNhcHR1cmVcbiAgICAgICk7XG4gICAgICByZXR1cm4gb2ZmMjtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHJpZ2dlcih0YXJnZXRzLCBldmVudCwgZGV0YWlsMikge1xuICAgICAgcmV0dXJuIHRvRXZlbnRUYXJnZXRzKHRhcmdldHMpLmV2ZXJ5KFxuICAgICAgICAodGFyZ2V0KSA9PiB0YXJnZXQuZGlzcGF0Y2hFdmVudChjcmVhdGVFdmVudChldmVudCwgdHJ1ZSwgdHJ1ZSwgZGV0YWlsMikpXG4gICAgICApO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVFdmVudChlLCBidWJibGVzID0gdHJ1ZSwgY2FuY2VsYWJsZSA9IGZhbHNlLCBkZXRhaWwyKSB7XG4gICAgICBpZiAoaXNTdHJpbmcoZSkpIHtcbiAgICAgICAgZSA9IG5ldyBDdXN0b21FdmVudChlLCB7IGJ1YmJsZXMsIGNhbmNlbGFibGUsIGRldGFpbDogZGV0YWlsMiB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRBcmdzKGFyZ3MpIHtcbiAgICAgIGFyZ3NbMF0gPSB0b0V2ZW50VGFyZ2V0cyhhcmdzWzBdKTtcbiAgICAgIGlmIChpc1N0cmluZyhhcmdzWzFdKSkge1xuICAgICAgICBhcmdzWzFdID0gYXJnc1sxXS5zcGxpdChcIiBcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXNGdW5jdGlvbihhcmdzWzJdKSkge1xuICAgICAgICBhcmdzLnNwbGljZSgyLCAwLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYXJncztcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVsZWdhdGUoc2VsZWN0b3IsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gKGUpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHNlbGVjdG9yWzBdID09PSBcIj5cIiA/IGZpbmRBbGwoc2VsZWN0b3IsIGUuY3VycmVudFRhcmdldCkucmV2ZXJzZSgpLmZpbmQoKGVsZW1lbnQpID0+IGVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpKSA6IGUudGFyZ2V0LmNsb3Nlc3Qoc2VsZWN0b3IpO1xuICAgICAgICBpZiAoY3VycmVudCkge1xuICAgICAgICAgIGUuY3VycmVudCA9IGN1cnJlbnQ7XG4gICAgICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBlKTtcbiAgICAgICAgICBkZWxldGUgZS5jdXJyZW50O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBkZXRhaWwobGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiAoZSkgPT4gaXNBcnJheShlLmRldGFpbCkgPyBsaXN0ZW5lcihlLCAuLi5lLmRldGFpbCkgOiBsaXN0ZW5lcihlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2VsZkZpbHRlcihsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBlLmN1cnJlbnRUYXJnZXQgfHwgZS50YXJnZXQgPT09IGUuY3VycmVudCkge1xuICAgICAgICAgIHJldHVybiBsaXN0ZW5lci5jYWxsKG51bGwsIGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0V2ZW50VGFyZ2V0KHRhcmdldCkge1xuICAgICAgcmV0dXJuIHRhcmdldCAmJiBcImFkZEV2ZW50TGlzdGVuZXJcIiBpbiB0YXJnZXQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvRXZlbnRUYXJnZXQodGFyZ2V0KSB7XG4gICAgICByZXR1cm4gaXNFdmVudFRhcmdldCh0YXJnZXQpID8gdGFyZ2V0IDogdG9Ob2RlKHRhcmdldCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvRXZlbnRUYXJnZXRzKHRhcmdldCkge1xuICAgICAgcmV0dXJuIGlzQXJyYXkodGFyZ2V0KSA/IHRhcmdldC5tYXAodG9FdmVudFRhcmdldCkuZmlsdGVyKEJvb2xlYW4pIDogaXNTdHJpbmcodGFyZ2V0KSA/IGZpbmRBbGwodGFyZ2V0KSA6IGlzRXZlbnRUYXJnZXQodGFyZ2V0KSA/IFt0YXJnZXRdIDogdG9Ob2Rlcyh0YXJnZXQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1RvdWNoKGUpIHtcbiAgICAgIHJldHVybiBlLnBvaW50ZXJUeXBlID09PSBcInRvdWNoXCIgfHwgISFlLnRvdWNoZXM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEV2ZW50UG9zKGUpIHtcbiAgICAgIHZhciBfYSwgX2I7XG4gICAgICBjb25zdCB7IGNsaWVudFg6IHgsIGNsaWVudFk6IHkgfSA9ICgoX2EgPSBlLnRvdWNoZXMpID09IG51bGwgPyB2b2lkIDAgOiBfYVswXSkgfHwgKChfYiA9IGUuY2hhbmdlZFRvdWNoZXMpID09IG51bGwgPyB2b2lkIDAgOiBfYlswXSkgfHwgZTtcbiAgICAgIHJldHVybiB7IHgsIHkgfTtcbiAgICB9XG5cbiAgICBjb25zdCBjc3NOdW1iZXIgPSB7XG4gICAgICBcImFuaW1hdGlvbi1pdGVyYXRpb24tY291bnRcIjogdHJ1ZSxcbiAgICAgIFwiY29sdW1uLWNvdW50XCI6IHRydWUsXG4gICAgICBcImZpbGwtb3BhY2l0eVwiOiB0cnVlLFxuICAgICAgXCJmbGV4LWdyb3dcIjogdHJ1ZSxcbiAgICAgIFwiZmxleC1zaHJpbmtcIjogdHJ1ZSxcbiAgICAgIFwiZm9udC13ZWlnaHRcIjogdHJ1ZSxcbiAgICAgIFwibGluZS1oZWlnaHRcIjogdHJ1ZSxcbiAgICAgIG9wYWNpdHk6IHRydWUsXG4gICAgICBvcmRlcjogdHJ1ZSxcbiAgICAgIG9ycGhhbnM6IHRydWUsXG4gICAgICBcInN0cm9rZS1kYXNoYXJyYXlcIjogdHJ1ZSxcbiAgICAgIFwic3Ryb2tlLWRhc2hvZmZzZXRcIjogdHJ1ZSxcbiAgICAgIHdpZG93czogdHJ1ZSxcbiAgICAgIFwiei1pbmRleFwiOiB0cnVlLFxuICAgICAgem9vbTogdHJ1ZVxuICAgIH07XG4gICAgZnVuY3Rpb24gY3NzKGVsZW1lbnQsIHByb3BlcnR5LCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gdG9Ob2RlcyhlbGVtZW50KTtcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudDIgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgaWYgKGlzU3RyaW5nKHByb3BlcnR5KSkge1xuICAgICAgICAgIHByb3BlcnR5ID0gcHJvcE5hbWUocHJvcGVydHkpO1xuICAgICAgICAgIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQyKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudDIuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICAgICAgIHByb3BlcnR5LFxuICAgICAgICAgICAgICBpc051bWVyaWModmFsdWUpICYmICFjc3NOdW1iZXJbcHJvcGVydHldID8gYCR7dmFsdWV9cHhgIDogdmFsdWUgfHwgaXNOdW1iZXIodmFsdWUpID8gdmFsdWUgOiBcIlwiLFxuICAgICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICBjb25zdCBwcm9wcyA9IHt9O1xuICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBvZiBwcm9wZXJ0eSkge1xuICAgICAgICAgICAgcHJvcHNbcHJvcF0gPSBjc3MoZWxlbWVudDIsIHByb3ApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QocHJvcGVydHkpKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIHByb3BlcnR5KSB7XG4gICAgICAgICAgICBjc3MoZWxlbWVudDIsIHByb3AsIHByb3BlcnR5W3Byb3BdLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZWxlbWVudHNbMF07XG4gICAgfVxuICAgIGNvbnN0IHByb3BOYW1lID0gbWVtb2l6ZSgobmFtZSkgPT4ge1xuICAgICAgaWYgKHN0YXJ0c1dpdGgobmFtZSwgXCItLVwiKSkge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgIH1cbiAgICAgIG5hbWUgPSBoeXBoZW5hdGUobmFtZSk7XG4gICAgICBjb25zdCB7IHN0eWxlIH0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICBpZiAobmFtZSBpbiBzdHlsZSkge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgcHJlZml4IG9mIFtcIndlYmtpdFwiLCBcIm1velwiXSkge1xuICAgICAgICBjb25zdCBwcmVmaXhlZE5hbWUgPSBgLSR7cHJlZml4fS0ke25hbWV9YDtcbiAgICAgICAgaWYgKHByZWZpeGVkTmFtZSBpbiBzdHlsZSkge1xuICAgICAgICAgIHJldHVybiBwcmVmaXhlZE5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGNsc1RyYW5zaXRpb24gPSBcInVrLXRyYW5zaXRpb25cIjtcbiAgICBjb25zdCB0cmFuc2l0aW9uRW5kID0gXCJ0cmFuc2l0aW9uZW5kXCI7XG4gICAgY29uc3QgdHJhbnNpdGlvbkNhbmNlbGVkID0gXCJ0cmFuc2l0aW9uY2FuY2VsZWRcIjtcbiAgICBmdW5jdGlvbiB0cmFuc2l0aW9uJDEoZWxlbWVudCwgcHJvcHMsIGR1cmF0aW9uID0gNDAwLCB0aW1pbmcgPSBcImxpbmVhclwiKSB7XG4gICAgICBkdXJhdGlvbiA9IE1hdGgucm91bmQoZHVyYXRpb24pO1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFxuICAgICAgICB0b05vZGVzKGVsZW1lbnQpLm1hcChcbiAgICAgICAgICAoZWxlbWVudDIpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBpbiBwcm9wcykge1xuICAgICAgICAgICAgICBjc3MoZWxlbWVudDIsIG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHRyaWdnZXIoZWxlbWVudDIsIHRyYW5zaXRpb25FbmQpLCBkdXJhdGlvbik7XG4gICAgICAgICAgICBvbmNlKFxuICAgICAgICAgICAgICBlbGVtZW50MixcbiAgICAgICAgICAgICAgW3RyYW5zaXRpb25FbmQsIHRyYW5zaXRpb25DYW5jZWxlZF0sXG4gICAgICAgICAgICAgICh7IHR5cGUgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoZWxlbWVudDIsIGNsc1RyYW5zaXRpb24pO1xuICAgICAgICAgICAgICAgIGNzcyhlbGVtZW50Miwge1xuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvblByb3BlcnR5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiBcIlwiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdHlwZSA9PT0gdHJhbnNpdGlvbkNhbmNlbGVkID8gcmVqZWN0KCkgOiByZXNvbHZlKGVsZW1lbnQyKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgeyBzZWxmOiB0cnVlIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBhZGRDbGFzcyhlbGVtZW50MiwgY2xzVHJhbnNpdGlvbik7XG4gICAgICAgICAgICBjc3MoZWxlbWVudDIsIHtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvblByb3BlcnR5OiBPYmplY3Qua2V5cyhwcm9wcykubWFwKHByb3BOYW1lKS5qb2luKFwiLFwiKSxcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBgJHtkdXJhdGlvbn1tc2AsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogdGltaW5nLFxuICAgICAgICAgICAgICAuLi5wcm9wc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgVHJhbnNpdGlvbiA9IHtcbiAgICAgIHN0YXJ0OiB0cmFuc2l0aW9uJDEsXG4gICAgICBhc3luYyBzdG9wKGVsZW1lbnQpIHtcbiAgICAgICAgdHJpZ2dlcihlbGVtZW50LCB0cmFuc2l0aW9uRW5kKTtcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICB9LFxuICAgICAgYXN5bmMgY2FuY2VsKGVsZW1lbnQpIHtcbiAgICAgICAgdHJpZ2dlcihlbGVtZW50LCB0cmFuc2l0aW9uQ2FuY2VsZWQpO1xuICAgICAgICBhd2FpdCBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIH0sXG4gICAgICBpblByb2dyZXNzKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGhhc0NsYXNzKGVsZW1lbnQsIGNsc1RyYW5zaXRpb24pO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgY2xzQW5pbWF0aW9uID0gXCJ1ay1hbmltYXRpb25cIjtcbiAgICBjb25zdCBhbmltYXRpb25FbmQgPSBcImFuaW1hdGlvbmVuZFwiO1xuICAgIGNvbnN0IGFuaW1hdGlvbkNhbmNlbGVkID0gXCJhbmltYXRpb25jYW5jZWxlZFwiO1xuICAgIGZ1bmN0aW9uIGFuaW1hdGUkMihlbGVtZW50LCBhbmltYXRpb24sIGR1cmF0aW9uID0gMjAwLCBvcmlnaW4sIG91dCkge1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFxuICAgICAgICB0b05vZGVzKGVsZW1lbnQpLm1hcChcbiAgICAgICAgICAoZWxlbWVudDIpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChoYXNDbGFzcyhlbGVtZW50MiwgY2xzQW5pbWF0aW9uKSkge1xuICAgICAgICAgICAgICB0cmlnZ2VyKGVsZW1lbnQyLCBhbmltYXRpb25DYW5jZWxlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICAgICAgICBhbmltYXRpb24sXG4gICAgICAgICAgICAgIGNsc0FuaW1hdGlvbixcbiAgICAgICAgICAgICAgYCR7Y2xzQW5pbWF0aW9ufS0ke291dCA/IFwibGVhdmVcIiA6IFwiZW50ZXJcIn1gLFxuICAgICAgICAgICAgICBvcmlnaW4gJiYgYHVrLXRyYW5zZm9ybS1vcmlnaW4tJHtvcmlnaW59YCxcbiAgICAgICAgICAgICAgb3V0ICYmIGAke2Nsc0FuaW1hdGlvbn0tcmV2ZXJzZWBcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4gdHJpZ2dlcihlbGVtZW50MiwgYW5pbWF0aW9uRW5kKSwgZHVyYXRpb24pO1xuICAgICAgICAgICAgb25jZShcbiAgICAgICAgICAgICAgZWxlbWVudDIsXG4gICAgICAgICAgICAgIFthbmltYXRpb25FbmQsIGFuaW1hdGlvbkNhbmNlbGVkXSxcbiAgICAgICAgICAgICAgKHsgdHlwZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgICAgICB0eXBlID09PSBhbmltYXRpb25DYW5jZWxlZCA/IHJlamVjdCgpIDogcmVzb2x2ZShlbGVtZW50Mik7XG4gICAgICAgICAgICAgICAgY3NzKGVsZW1lbnQyLCBcImFuaW1hdGlvbkR1cmF0aW9uXCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQyLCBjbGFzc2VzKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgeyBzZWxmOiB0cnVlIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjc3MoZWxlbWVudDIsIFwiYW5pbWF0aW9uRHVyYXRpb25cIiwgYCR7ZHVyYXRpb259bXNgKTtcbiAgICAgICAgICAgIGFkZENsYXNzKGVsZW1lbnQyLCBjbGFzc2VzKTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCBBbmltYXRpb24gPSB7XG4gICAgICBpbjogYW5pbWF0ZSQyLFxuICAgICAgb3V0KGVsZW1lbnQsIGFuaW1hdGlvbiwgZHVyYXRpb24sIG9yaWdpbikge1xuICAgICAgICByZXR1cm4gYW5pbWF0ZSQyKGVsZW1lbnQsIGFuaW1hdGlvbiwgZHVyYXRpb24sIG9yaWdpbiwgdHJ1ZSk7XG4gICAgICB9LFxuICAgICAgaW5Qcm9ncmVzcyhlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBoYXNDbGFzcyhlbGVtZW50LCBjbHNBbmltYXRpb24pO1xuICAgICAgfSxcbiAgICAgIGNhbmNlbChlbGVtZW50KSB7XG4gICAgICAgIHRyaWdnZXIoZWxlbWVudCwgYW5pbWF0aW9uQ2FuY2VsZWQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZWFkeShmbikge1xuICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKSB7XG4gICAgICAgIGZuKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG9uY2UoZG9jdW1lbnQsIFwiRE9NQ29udGVudExvYWRlZFwiLCBmbik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzVGFnKGVsZW1lbnQsIC4uLnRhZ05hbWVzKSB7XG4gICAgICByZXR1cm4gdGFnTmFtZXMuc29tZSgodGFnTmFtZSkgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiAoKF9hID0gZWxlbWVudCA9PSBudWxsID8gdm9pZCAwIDogZWxlbWVudC50YWdOYW1lKSA9PSBudWxsID8gdm9pZCAwIDogX2EudG9Mb3dlckNhc2UoKSkgPT09IHRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBlbXB0eShlbGVtZW50KSB7XG4gICAgICBlbGVtZW50ID0gJChlbGVtZW50KTtcbiAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBmdW5jdGlvbiBodG1sKHBhcmVudDIsIGh0bWwyKSB7XG4gICAgICByZXR1cm4gaXNVbmRlZmluZWQoaHRtbDIpID8gJChwYXJlbnQyKS5pbm5lckhUTUwgOiBhcHBlbmQoZW1wdHkocGFyZW50MiksIGh0bWwyKTtcbiAgICB9XG4gICAgY29uc3QgcHJlcGVuZCA9IGFwcGx5Rm4oXCJwcmVwZW5kXCIpO1xuICAgIGNvbnN0IGFwcGVuZCA9IGFwcGx5Rm4oXCJhcHBlbmRcIik7XG4gICAgY29uc3QgYmVmb3JlID0gYXBwbHlGbihcImJlZm9yZVwiKTtcbiAgICBjb25zdCBhZnRlciA9IGFwcGx5Rm4oXCJhZnRlclwiKTtcbiAgICBmdW5jdGlvbiBhcHBseUZuKGZuKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVmLCBlbGVtZW50KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3Qgbm9kZXMgPSB0b05vZGVzKGlzU3RyaW5nKGVsZW1lbnQpID8gZnJhZ21lbnQoZWxlbWVudCkgOiBlbGVtZW50KTtcbiAgICAgICAgKF9hID0gJChyZWYpKSA9PSBudWxsID8gdm9pZCAwIDogX2FbZm5dKC4uLm5vZGVzKTtcbiAgICAgICAgcmV0dXJuIHVud3JhcFNpbmdsZShub2Rlcyk7XG4gICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmUkMShlbGVtZW50KSB7XG4gICAgICB0b05vZGVzKGVsZW1lbnQpLmZvckVhY2goKGVsZW1lbnQyKSA9PiBlbGVtZW50Mi5yZW1vdmUoKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHdyYXBBbGwoZWxlbWVudCwgc3RydWN0dXJlKSB7XG4gICAgICBzdHJ1Y3R1cmUgPSB0b05vZGUoYmVmb3JlKGVsZW1lbnQsIHN0cnVjdHVyZSkpO1xuICAgICAgd2hpbGUgKHN0cnVjdHVyZS5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICBzdHJ1Y3R1cmUgPSBzdHJ1Y3R1cmUuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICB9XG4gICAgICBhcHBlbmQoc3RydWN0dXJlLCBlbGVtZW50KTtcbiAgICAgIHJldHVybiBzdHJ1Y3R1cmU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHdyYXBJbm5lcihlbGVtZW50LCBzdHJ1Y3R1cmUpIHtcbiAgICAgIHJldHVybiB0b05vZGVzKFxuICAgICAgICB0b05vZGVzKGVsZW1lbnQpLm1hcChcbiAgICAgICAgICAoZWxlbWVudDIpID0+IGVsZW1lbnQyLmhhc0NoaWxkTm9kZXMoKSA/IHdyYXBBbGwodG9BcnJheShlbGVtZW50Mi5jaGlsZE5vZGVzKSwgc3RydWN0dXJlKSA6IGFwcGVuZChlbGVtZW50Miwgc3RydWN0dXJlKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1bndyYXAoZWxlbWVudCkge1xuICAgICAgdG9Ob2RlcyhlbGVtZW50KS5tYXAocGFyZW50KS5maWx0ZXIoKHZhbHVlLCBpbmRleCwgc2VsZikgPT4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXgpLmZvckVhY2goKHBhcmVudDIpID0+IHBhcmVudDIucmVwbGFjZVdpdGgoLi4ucGFyZW50Mi5jaGlsZE5vZGVzKSk7XG4gICAgfVxuICAgIGNvbnN0IHNpbmdsZVRhZ1JlID0gL148KFxcdyspXFxzKlxcLz8+KD86PFxcL1xcMT4pPyQvO1xuICAgIGZ1bmN0aW9uIGZyYWdtZW50KGh0bWwyKSB7XG4gICAgICBjb25zdCBtYXRjaGVzID0gc2luZ2xlVGFnUmUuZXhlYyhodG1sMik7XG4gICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChtYXRjaGVzWzFdKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBodG1sMi50cmltKCk7XG4gICAgICByZXR1cm4gdW53cmFwU2luZ2xlKGNvbnRhaW5lci5jb250ZW50LmNoaWxkTm9kZXMpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1bndyYXBTaW5nbGUobm9kZXMpIHtcbiAgICAgIHJldHVybiBub2Rlcy5sZW5ndGggPiAxID8gbm9kZXMgOiBub2Rlc1swXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXBwbHkobm9kZSwgZm4pIHtcbiAgICAgIGlmICghaXNFbGVtZW50KG5vZGUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGZuKG5vZGUpO1xuICAgICAgbm9kZSA9IG5vZGUuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICBhcHBseShub2RlLCBmbik7XG4gICAgICAgIG5vZGUgPSBub2RlLm5leHRFbGVtZW50U2libGluZztcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gJChzZWxlY3RvciwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIGlzSHRtbChzZWxlY3RvcikgPyB0b05vZGUoZnJhZ21lbnQoc2VsZWN0b3IpKSA6IGZpbmQoc2VsZWN0b3IsIGNvbnRleHQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiAkJChzZWxlY3RvciwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIGlzSHRtbChzZWxlY3RvcikgPyB0b05vZGVzKGZyYWdtZW50KHNlbGVjdG9yKSkgOiBmaW5kQWxsKHNlbGVjdG9yLCBjb250ZXh0KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNIdG1sKHN0cikge1xuICAgICAgcmV0dXJuIGlzU3RyaW5nKHN0cikgJiYgc3RhcnRzV2l0aChzdHIudHJpbSgpLCBcIjxcIik7XG4gICAgfVxuXG4gICAgY29uc3QgZGlycyQxID0ge1xuICAgICAgd2lkdGg6IFtcImxlZnRcIiwgXCJyaWdodFwiXSxcbiAgICAgIGhlaWdodDogW1widG9wXCIsIFwiYm90dG9tXCJdXG4gICAgfTtcbiAgICBmdW5jdGlvbiBkaW1lbnNpb25zJDEoZWxlbWVudCkge1xuICAgICAgY29uc3QgcmVjdCA9IGlzRWxlbWVudChlbGVtZW50KSA/IHRvTm9kZShlbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IHsgaGVpZ2h0OiBoZWlnaHQoZWxlbWVudCksIHdpZHRoOiB3aWR0aChlbGVtZW50KSwgdG9wOiAwLCBsZWZ0OiAwIH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0LFxuICAgICAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICAgICAgdG9wOiByZWN0LnRvcCxcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgICAgICBib3R0b206IHJlY3QudG9wICsgcmVjdC5oZWlnaHQsXG4gICAgICAgIHJpZ2h0OiByZWN0LmxlZnQgKyByZWN0LndpZHRoXG4gICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBvZmZzZXQoZWxlbWVudCwgY29vcmRpbmF0ZXMpIHtcbiAgICAgIGlmIChjb29yZGluYXRlcykge1xuICAgICAgICBjc3MoZWxlbWVudCwgeyBsZWZ0OiAwLCB0b3A6IDAgfSk7XG4gICAgICB9XG4gICAgICBjb25zdCBjdXJyZW50T2Zmc2V0ID0gZGltZW5zaW9ucyQxKGVsZW1lbnQpO1xuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgeyBzY3JvbGxZLCBzY3JvbGxYIH0gPSB0b1dpbmRvdyhlbGVtZW50KTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0QnkgPSB7IGhlaWdodDogc2Nyb2xsWSwgd2lkdGg6IHNjcm9sbFggfTtcbiAgICAgICAgZm9yIChjb25zdCBkaXIgaW4gZGlycyQxKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBwcm9wIG9mIGRpcnMkMVtkaXJdKSB7XG4gICAgICAgICAgICBjdXJyZW50T2Zmc2V0W3Byb3BdICs9IG9mZnNldEJ5W2Rpcl07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWNvb3JkaW5hdGVzKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50T2Zmc2V0O1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBwcm9wIG9mIFtcImxlZnRcIiwgXCJ0b3BcIl0pIHtcbiAgICAgICAgY3NzKGVsZW1lbnQsIHByb3AsIGNvb3JkaW5hdGVzW3Byb3BdIC0gY3VycmVudE9mZnNldFtwcm9wXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBvc2l0aW9uKGVsZW1lbnQpIHtcbiAgICAgIGxldCB7IHRvcCwgbGVmdCB9ID0gb2Zmc2V0KGVsZW1lbnQpO1xuICAgICAgY29uc3Qge1xuICAgICAgICBvd25lckRvY3VtZW50OiB7IGJvZHksIGRvY3VtZW50RWxlbWVudCB9LFxuICAgICAgICBvZmZzZXRQYXJlbnRcbiAgICAgIH0gPSB0b05vZGUoZWxlbWVudCk7XG4gICAgICBsZXQgcGFyZW50ID0gb2Zmc2V0UGFyZW50IHx8IGRvY3VtZW50RWxlbWVudDtcbiAgICAgIHdoaWxlIChwYXJlbnQgJiYgKHBhcmVudCA9PT0gYm9keSB8fCBwYXJlbnQgPT09IGRvY3VtZW50RWxlbWVudCkgJiYgY3NzKHBhcmVudCwgXCJwb3NpdGlvblwiKSA9PT0gXCJzdGF0aWNcIikge1xuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0VsZW1lbnQocGFyZW50KSkge1xuICAgICAgICBjb25zdCBwYXJlbnRPZmZzZXQgPSBvZmZzZXQocGFyZW50KTtcbiAgICAgICAgdG9wIC09IHBhcmVudE9mZnNldC50b3AgKyB0b0Zsb2F0KGNzcyhwYXJlbnQsIFwiYm9yZGVyVG9wV2lkdGhcIikpO1xuICAgICAgICBsZWZ0IC09IHBhcmVudE9mZnNldC5sZWZ0ICsgdG9GbG9hdChjc3MocGFyZW50LCBcImJvcmRlckxlZnRXaWR0aFwiKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b3A6IHRvcCAtIHRvRmxvYXQoY3NzKGVsZW1lbnQsIFwibWFyZ2luVG9wXCIpKSxcbiAgICAgICAgbGVmdDogbGVmdCAtIHRvRmxvYXQoY3NzKGVsZW1lbnQsIFwibWFyZ2luTGVmdFwiKSlcbiAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9mZnNldFBvc2l0aW9uKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQgPSB0b05vZGUoZWxlbWVudCk7XG4gICAgICBjb25zdCBvZmZzZXQyID0gW2VsZW1lbnQub2Zmc2V0VG9wLCBlbGVtZW50Lm9mZnNldExlZnRdO1xuICAgICAgd2hpbGUgKGVsZW1lbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudCkge1xuICAgICAgICBvZmZzZXQyWzBdICs9IGVsZW1lbnQub2Zmc2V0VG9wICsgdG9GbG9hdChjc3MoZWxlbWVudCwgYGJvcmRlclRvcFdpZHRoYCkpO1xuICAgICAgICBvZmZzZXQyWzFdICs9IGVsZW1lbnQub2Zmc2V0TGVmdCArIHRvRmxvYXQoY3NzKGVsZW1lbnQsIGBib3JkZXJMZWZ0V2lkdGhgKSk7XG4gICAgICAgIGlmIChjc3MoZWxlbWVudCwgXCJwb3NpdGlvblwiKSA9PT0gXCJmaXhlZFwiKSB7XG4gICAgICAgICAgY29uc3Qgd2luID0gdG9XaW5kb3coZWxlbWVudCk7XG4gICAgICAgICAgb2Zmc2V0MlswXSArPSB3aW4uc2Nyb2xsWTtcbiAgICAgICAgICBvZmZzZXQyWzFdICs9IHdpbi5zY3JvbGxYO1xuICAgICAgICAgIHJldHVybiBvZmZzZXQyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb2Zmc2V0MjtcbiAgICB9XG4gICAgY29uc3QgaGVpZ2h0ID0gZGltZW5zaW9uKFwiaGVpZ2h0XCIpO1xuICAgIGNvbnN0IHdpZHRoID0gZGltZW5zaW9uKFwid2lkdGhcIik7XG4gICAgZnVuY3Rpb24gZGltZW5zaW9uKHByb3ApIHtcbiAgICAgIGNvbnN0IHByb3BOYW1lID0gdWNmaXJzdChwcm9wKTtcbiAgICAgIHJldHVybiAoZWxlbWVudCwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICAgIGlmIChpc1dpbmRvdyhlbGVtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRbYGlubmVyJHtwcm9wTmFtZX1gXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGlzRG9jdW1lbnQoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRvYyA9IGVsZW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KGRvY1tgb2Zmc2V0JHtwcm9wTmFtZX1gXSwgZG9jW2BzY3JvbGwke3Byb3BOYW1lfWBdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxlbWVudCA9IHRvTm9kZShlbGVtZW50KTtcbiAgICAgICAgICB2YWx1ZSA9IGNzcyhlbGVtZW50LCBwcm9wKTtcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlID09PSBcImF1dG9cIiA/IGVsZW1lbnRbYG9mZnNldCR7cHJvcE5hbWV9YF0gOiB0b0Zsb2F0KHZhbHVlKSB8fCAwO1xuICAgICAgICAgIHJldHVybiB2YWx1ZSAtIGJveE1vZGVsQWRqdXN0KGVsZW1lbnQsIHByb3ApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBjc3MoXG4gICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgcHJvcCxcbiAgICAgICAgICAgICF2YWx1ZSAmJiB2YWx1ZSAhPT0gMCA/IFwiXCIgOiArdmFsdWUgKyBib3hNb2RlbEFkanVzdChlbGVtZW50LCBwcm9wKSArIFwicHhcIlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJveE1vZGVsQWRqdXN0KGVsZW1lbnQsIHByb3AsIHNpemluZyA9IFwiYm9yZGVyLWJveFwiKSB7XG4gICAgICByZXR1cm4gY3NzKGVsZW1lbnQsIFwiYm94U2l6aW5nXCIpID09PSBzaXppbmcgPyBzdW1CeShcbiAgICAgICAgZGlycyQxW3Byb3BdLm1hcCh1Y2ZpcnN0KSxcbiAgICAgICAgKHByb3AyKSA9PiB0b0Zsb2F0KGNzcyhlbGVtZW50LCBgcGFkZGluZyR7cHJvcDJ9YCkpICsgdG9GbG9hdChjc3MoZWxlbWVudCwgYGJvcmRlciR7cHJvcDJ9V2lkdGhgKSlcbiAgICAgICkgOiAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmbGlwUG9zaXRpb24ocG9zKSB7XG4gICAgICBmb3IgKGNvbnN0IGRpciBpbiBkaXJzJDEpIHtcbiAgICAgICAgZm9yIChjb25zdCBpIGluIGRpcnMkMVtkaXJdKSB7XG4gICAgICAgICAgaWYgKGRpcnMkMVtkaXJdW2ldID09PSBwb3MpIHtcbiAgICAgICAgICAgIHJldHVybiBkaXJzJDFbZGlyXVsxIC0gaV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcG9zO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0b1B4KHZhbHVlLCBwcm9wZXJ0eSA9IFwid2lkdGhcIiwgZWxlbWVudCA9IHdpbmRvdywgb2Zmc2V0RGltID0gZmFsc2UpIHtcbiAgICAgIGlmICghaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB0b0Zsb2F0KHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdW1CeShwYXJzZUNhbGModmFsdWUpLCAodmFsdWUyKSA9PiB7XG4gICAgICAgIGNvbnN0IHVuaXQgPSBwYXJzZVVuaXQodmFsdWUyKTtcbiAgICAgICAgcmV0dXJuIHVuaXQgPyBwZXJjZW50KFxuICAgICAgICAgIHVuaXQgPT09IFwidmhcIiA/IGdldFZpZXdwb3J0SGVpZ2h0KCkgOiB1bml0ID09PSBcInZ3XCIgPyB3aWR0aCh0b1dpbmRvdyhlbGVtZW50KSkgOiBvZmZzZXREaW0gPyBlbGVtZW50W2BvZmZzZXQke3VjZmlyc3QocHJvcGVydHkpfWBdIDogZGltZW5zaW9ucyQxKGVsZW1lbnQpW3Byb3BlcnR5XSxcbiAgICAgICAgICB2YWx1ZTJcbiAgICAgICAgKSA6IHZhbHVlMjtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBjYWxjUmUgPSAvLT9cXGQrKD86XFwuXFxkKyk/KD86dlt3aF18JXxweCk/L2c7XG4gICAgY29uc3QgcGFyc2VDYWxjID0gbWVtb2l6ZSgoY2FsYykgPT4gY2FsYy50b1N0cmluZygpLnJlcGxhY2UoL1xccy9nLCBcIlwiKS5tYXRjaChjYWxjUmUpIHx8IFtdKTtcbiAgICBjb25zdCB1bml0UmUkMSA9IC8oPzp2W2h3XXwlKSQvO1xuICAgIGNvbnN0IHBhcnNlVW5pdCA9IG1lbW9pemUoKHN0cikgPT4gKHN0ci5tYXRjaCh1bml0UmUkMSkgfHwgW10pWzBdKTtcbiAgICBmdW5jdGlvbiBwZXJjZW50KGJhc2UsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gYmFzZSAqIHRvRmxvYXQodmFsdWUpIC8gMTAwO1xuICAgIH1cbiAgICBsZXQgdmg7XG4gICAgbGV0IHZoRWw7XG4gICAgZnVuY3Rpb24gZ2V0Vmlld3BvcnRIZWlnaHQoKSB7XG4gICAgICBpZiAodmgpIHtcbiAgICAgICAgcmV0dXJuIHZoO1xuICAgICAgfVxuICAgICAgaWYgKCF2aEVsKSB7XG4gICAgICAgIHZoRWwgPSAkKFwiPGRpdj5cIik7XG4gICAgICAgIGNzcyh2aEVsLCB7XG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIlxuICAgICAgICB9KTtcbiAgICAgICAgb24od2luZG93LCBcInJlc2l6ZVwiLCAoKSA9PiB2aCA9IG51bGwpO1xuICAgICAgfVxuICAgICAgYXBwZW5kKGRvY3VtZW50LmJvZHksIHZoRWwpO1xuICAgICAgdmggPSB2aEVsLmNsaWVudEhlaWdodDtcbiAgICAgIHJlbW92ZSQxKHZoRWwpO1xuICAgICAgcmV0dXJuIHZoO1xuICAgIH1cblxuICAgIGNvbnN0IGZhc3Rkb20gPSB7IHJlYWQsIHdyaXRlLCBjbGVhciwgZmx1c2ggfTtcbiAgICBjb25zdCByZWFkcyA9IFtdO1xuICAgIGNvbnN0IHdyaXRlcyA9IFtdO1xuICAgIGZ1bmN0aW9uIHJlYWQodGFzaykge1xuICAgICAgcmVhZHMucHVzaCh0YXNrKTtcbiAgICAgIHNjaGVkdWxlRmx1c2goKTtcbiAgICAgIHJldHVybiB0YXNrO1xuICAgIH1cbiAgICBmdW5jdGlvbiB3cml0ZSh0YXNrKSB7XG4gICAgICB3cml0ZXMucHVzaCh0YXNrKTtcbiAgICAgIHNjaGVkdWxlRmx1c2goKTtcbiAgICAgIHJldHVybiB0YXNrO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjbGVhcih0YXNrKSB7XG4gICAgICByZW1vdmUocmVhZHMsIHRhc2spO1xuICAgICAgcmVtb3ZlKHdyaXRlcywgdGFzayk7XG4gICAgfVxuICAgIGxldCBzY2hlZHVsZWQgPSBmYWxzZTtcbiAgICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICAgIHJ1blRhc2tzKHJlYWRzKTtcbiAgICAgIHJ1blRhc2tzKHdyaXRlcy5zcGxpY2UoMCkpO1xuICAgICAgc2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICBpZiAocmVhZHMubGVuZ3RoIHx8IHdyaXRlcy5sZW5ndGgpIHtcbiAgICAgICAgc2NoZWR1bGVGbHVzaCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBzY2hlZHVsZUZsdXNoKCkge1xuICAgICAgaWYgKCFzY2hlZHVsZWQpIHtcbiAgICAgICAgc2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgICAgcXVldWVNaWNyb3Rhc2soZmx1c2gpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBydW5UYXNrcyh0YXNrcykge1xuICAgICAgbGV0IHRhc2s7XG4gICAgICB3aGlsZSAodGFzayA9IHRhc2tzLnNoaWZ0KCkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0YXNrKCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZShhcnJheSwgaXRlbSkge1xuICAgICAgY29uc3QgaW5kZXggPSBhcnJheS5pbmRleE9mKGl0ZW0pO1xuICAgICAgcmV0dXJuIH5pbmRleCAmJiBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIGNsYXNzIE1vdXNlVHJhY2tlciB7XG4gICAgICBpbml0KCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9ucyA9IFtdO1xuICAgICAgICBsZXQgcG9zaXRpb247XG4gICAgICAgIHRoaXMudW5iaW5kID0gb24oZG9jdW1lbnQsIFwibW91c2Vtb3ZlXCIsIChlKSA9PiBwb3NpdGlvbiA9IGdldEV2ZW50UG9zKGUpKTtcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICBpZiAoIXBvc2l0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucG9zaXRpb25zLnB1c2gocG9zaXRpb24pO1xuICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9ucy5sZW5ndGggPiA1KSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9ucy5zaGlmdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgNTApO1xuICAgICAgfVxuICAgICAgY2FuY2VsKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IHRoaXMudW5iaW5kKSA9PSBudWxsID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICAgIH1cbiAgICAgIG1vdmVzVG8odGFyZ2V0KSB7XG4gICAgICAgIGlmICghdGhpcy5wb3NpdGlvbnMgfHwgdGhpcy5wb3NpdGlvbnMubGVuZ3RoIDwgMikge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwID0gZGltZW5zaW9ucyQxKHRhcmdldCk7XG4gICAgICAgIGNvbnN0IHsgbGVmdCwgcmlnaHQsIHRvcCwgYm90dG9tIH0gPSBwO1xuICAgICAgICBjb25zdCBbcHJldlBvc2l0aW9uXSA9IHRoaXMucG9zaXRpb25zO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGxhc3QodGhpcy5wb3NpdGlvbnMpO1xuICAgICAgICBjb25zdCBwYXRoID0gW3ByZXZQb3NpdGlvbiwgcG9zaXRpb25dO1xuICAgICAgICBpZiAocG9pbnRJblJlY3QocG9zaXRpb24sIHApKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRpYWdvbmFscyA9IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7IHg6IGxlZnQsIHk6IHRvcCB9LFxuICAgICAgICAgICAgeyB4OiByaWdodCwgeTogYm90dG9tIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIHsgeDogbGVmdCwgeTogYm90dG9tIH0sXG4gICAgICAgICAgICB7IHg6IHJpZ2h0LCB5OiB0b3AgfVxuICAgICAgICAgIF1cbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIGRpYWdvbmFscy5zb21lKChkaWFnb25hbCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGludGVyc2VjdChwYXRoLCBkaWFnb25hbCk7XG4gICAgICAgICAgcmV0dXJuIGludGVyc2VjdGlvbiAmJiBwb2ludEluUmVjdChpbnRlcnNlY3Rpb24sIHApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gaW50ZXJzZWN0KFt7IHg6IHgxLCB5OiB5MSB9LCB7IHg6IHgyLCB5OiB5MiB9XSwgW3sgeDogeDMsIHk6IHkzIH0sIHsgeDogeDQsIHk6IHk0IH1dKSB7XG4gICAgICBjb25zdCBkZW5vbWluYXRvciA9ICh5NCAtIHkzKSAqICh4MiAtIHgxKSAtICh4NCAtIHgzKSAqICh5MiAtIHkxKTtcbiAgICAgIGlmIChkZW5vbWluYXRvciA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zdCB1YSA9ICgoeDQgLSB4MykgKiAoeTEgLSB5MykgLSAoeTQgLSB5MykgKiAoeDEgLSB4MykpIC8gZGVub21pbmF0b3I7XG4gICAgICBpZiAodWEgPCAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IHg6IHgxICsgdWEgKiAoeDIgLSB4MSksIHk6IHkxICsgdWEgKiAoeTIgLSB5MSkgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvYnNlcnZlSW50ZXJzZWN0aW9uKHRhcmdldHMsIGNiLCBvcHRpb25zID0ge30sIHsgaW50ZXJzZWN0aW5nID0gdHJ1ZSB9ID0ge30pIHtcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgICAgICBpbnRlcnNlY3RpbmcgPyAoZW50cmllcywgb2JzZXJ2ZXIyKSA9PiB7XG4gICAgICAgICAgaWYgKGVudHJpZXMuc29tZSgoZW50cnkpID0+IGVudHJ5LmlzSW50ZXJzZWN0aW5nKSkge1xuICAgICAgICAgICAgY2IoZW50cmllcywgb2JzZXJ2ZXIyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gOiBjYixcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKTtcbiAgICAgIGZvciAoY29uc3QgZWwgb2YgdG9Ob2Rlcyh0YXJnZXRzKSkge1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvYnNlcnZlcjtcbiAgICB9XG4gICAgY29uc3QgaGFzUmVzaXplT2JzZXJ2ZXIgPSBpbkJyb3dzZXIgJiYgd2luZG93LlJlc2l6ZU9ic2VydmVyO1xuICAgIGZ1bmN0aW9uIG9ic2VydmVSZXNpemUodGFyZ2V0cywgY2IsIG9wdGlvbnMgPSB7IGJveDogXCJib3JkZXItYm94XCIgfSkge1xuICAgICAgaWYgKGhhc1Jlc2l6ZU9ic2VydmVyKSB7XG4gICAgICAgIHJldHVybiBvYnNlcnZlJDEoUmVzaXplT2JzZXJ2ZXIsIHRhcmdldHMsIGNiLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9mZiA9IFtvbih3aW5kb3csIFwibG9hZCByZXNpemVcIiwgY2IpLCBvbihkb2N1bWVudCwgXCJsb2FkZWRtZXRhZGF0YSBsb2FkXCIsIGNiLCB0cnVlKV07XG4gICAgICByZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiBvZmYubWFwKChjYjIpID0+IGNiMigpKSB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBvYnNlcnZlVmlld3BvcnRSZXNpemUoY2IpIHtcbiAgICAgIHJldHVybiB7IGRpc2Nvbm5lY3Q6IG9uKFt3aW5kb3csIHdpbmRvdy52aXN1YWxWaWV3cG9ydF0sIFwicmVzaXplXCIsIGNiKSB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBvYnNlcnZlTXV0YXRpb24odGFyZ2V0cywgY2IsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBvYnNlcnZlJDEoTXV0YXRpb25PYnNlcnZlciwgdGFyZ2V0cywgY2IsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvYnNlcnZlJDEoT2JzZXJ2ZXIsIHRhcmdldHMsIGNiLCBvcHRpb25zKSB7XG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBPYnNlcnZlcihjYik7XG4gICAgICBmb3IgKGNvbnN0IGVsIG9mIHRvTm9kZXModGFyZ2V0cykpIHtcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JzZXJ2ZXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxheShlbCkge1xuICAgICAgaWYgKGlzSUZyYW1lKGVsKSkge1xuICAgICAgICBjYWxsKGVsLCB7IGZ1bmM6IFwicGxheVZpZGVvXCIsIG1ldGhvZDogXCJwbGF5XCIgfSk7XG4gICAgICB9XG4gICAgICBpZiAoaXNIVE1MNShlbCkpIHtcbiAgICAgICAgZWwucGxheSgpLmNhdGNoKG5vb3ApO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBwYXVzZShlbCkge1xuICAgICAgaWYgKGlzSUZyYW1lKGVsKSkge1xuICAgICAgICBjYWxsKGVsLCB7IGZ1bmM6IFwicGF1c2VWaWRlb1wiLCBtZXRob2Q6IFwicGF1c2VcIiB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0hUTUw1KGVsKSkge1xuICAgICAgICBlbC5wYXVzZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBtdXRlKGVsKSB7XG4gICAgICBpZiAoaXNJRnJhbWUoZWwpKSB7XG4gICAgICAgIGNhbGwoZWwsIHsgZnVuYzogXCJtdXRlXCIsIG1ldGhvZDogXCJzZXRWb2x1bWVcIiwgdmFsdWU6IDAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoaXNIVE1MNShlbCkpIHtcbiAgICAgICAgZWwubXV0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBpc1ZpZGVvKGVsKSB7XG4gICAgICByZXR1cm4gaXNIVE1MNShlbCkgfHwgaXNJRnJhbWUoZWwpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0hUTUw1KGVsKSB7XG4gICAgICByZXR1cm4gaXNUYWcoZWwsIFwidmlkZW9cIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzSUZyYW1lKGVsKSB7XG4gICAgICByZXR1cm4gaXNUYWcoZWwsIFwiaWZyYW1lXCIpICYmIChpc1lvdXR1YmUoZWwpIHx8IGlzVmltZW8oZWwpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNZb3V0dWJlKGVsKSB7XG4gICAgICByZXR1cm4gISFlbC5zcmMubWF0Y2goXG4gICAgICAgIC9cXC9cXC8uKj95b3V0dWJlKC1ub2Nvb2tpZSk/XFwuW2Etel0rXFwvKHdhdGNoXFw/dj1bXiZcXHNdK3xlbWJlZCl8eW91dHVcXC5iZVxcLy4qL1xuICAgICAgKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNWaW1lbyhlbCkge1xuICAgICAgcmV0dXJuICEhZWwuc3JjLm1hdGNoKC92aW1lb1xcLmNvbVxcL3ZpZGVvXFwvLiovKTtcbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gY2FsbChlbCwgY21kKSB7XG4gICAgICBhd2FpdCBlbmFibGVBcGkoZWwpO1xuICAgICAgcG9zdChlbCwgY21kKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcG9zdChlbCwgY21kKSB7XG4gICAgICBlbC5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHsgZXZlbnQ6IFwiY29tbWFuZFwiLCAuLi5jbWQgfSksIFwiKlwiKTtcbiAgICB9XG4gICAgY29uc3Qgc3RhdGVLZXkgPSBcIl91a1BsYXllclwiO1xuICAgIGxldCBjb3VudGVyID0gMDtcbiAgICBmdW5jdGlvbiBlbmFibGVBcGkoZWwpIHtcbiAgICAgIGlmIChlbFtzdGF0ZUtleV0pIHtcbiAgICAgICAgcmV0dXJuIGVsW3N0YXRlS2V5XTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHlvdXR1YmUgPSBpc1lvdXR1YmUoZWwpO1xuICAgICAgY29uc3QgdmltZW8gPSBpc1ZpbWVvKGVsKTtcbiAgICAgIGNvbnN0IGlkID0gKytjb3VudGVyO1xuICAgICAgbGV0IHBvbGxlcjtcbiAgICAgIHJldHVybiBlbFtzdGF0ZUtleV0gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICB5b3V0dWJlICYmIG9uY2UoZWwsIFwibG9hZFwiLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgbGlzdGVuZXIgPSAoKSA9PiBwb3N0KGVsLCB7IGV2ZW50OiBcImxpc3RlbmluZ1wiLCBpZCB9KTtcbiAgICAgICAgICBwb2xsZXIgPSBzZXRJbnRlcnZhbChsaXN0ZW5lciwgMTAwKTtcbiAgICAgICAgICBsaXN0ZW5lcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgb25jZSh3aW5kb3csIFwibWVzc2FnZVwiLCByZXNvbHZlLCBmYWxzZSwgKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIHlvdXR1YmUgJiYgKGRhdGEgPT0gbnVsbCA/IHZvaWQgMCA6IGRhdGEuaWQpID09PSBpZCAmJiBkYXRhLmV2ZW50ID09PSBcIm9uUmVhZHlcIiB8fCB2aW1lbyAmJiBOdW1iZXIoZGF0YSA9PSBudWxsID8gdm9pZCAwIDogZGF0YS5wbGF5ZXJfaWQpID09PSBpZDtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZWwuc3JjID0gYCR7ZWwuc3JjfSR7aW5jbHVkZXMoZWwuc3JjLCBcIj9cIikgPyBcIiZcIiA6IFwiP1wifSR7eW91dHViZSA/IFwiZW5hYmxlanNhcGk9MVwiIDogYGFwaT0xJnBsYXllcl9pZD0ke2lkfWB9YDtcbiAgICAgIH0pLnRoZW4oKCkgPT4gY2xlYXJJbnRlcnZhbChwb2xsZXIpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0luVmlldyhlbGVtZW50LCBvZmZzZXRUb3AgPSAwLCBvZmZzZXRMZWZ0ID0gMCkge1xuICAgICAgaWYgKCFpc1Zpc2libGUoZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGludGVyc2VjdFJlY3QoXG4gICAgICAgIC4uLm92ZXJmbG93UGFyZW50cyhlbGVtZW50KS5tYXAoKHBhcmVudDIpID0+IHtcbiAgICAgICAgICBjb25zdCB7IHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCB9ID0gb2Zmc2V0Vmlld3BvcnQocGFyZW50Mik7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcDogdG9wIC0gb2Zmc2V0VG9wLFxuICAgICAgICAgICAgbGVmdDogbGVmdCAtIG9mZnNldExlZnQsXG4gICAgICAgICAgICBib3R0b206IGJvdHRvbSArIG9mZnNldFRvcCxcbiAgICAgICAgICAgIHJpZ2h0OiByaWdodCArIG9mZnNldExlZnRcbiAgICAgICAgICB9O1xuICAgICAgICB9KS5jb25jYXQob2Zmc2V0KGVsZW1lbnQpKVxuICAgICAgKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2Nyb2xsSW50b1ZpZXcoZWxlbWVudCwgeyBvZmZzZXQ6IG9mZnNldEJ5ID0gMCB9ID0ge30pIHtcbiAgICAgIGNvbnN0IHBhcmVudHMyID0gaXNWaXNpYmxlKGVsZW1lbnQpID8gc2Nyb2xsUGFyZW50cyhlbGVtZW50LCBmYWxzZSwgW1wiaGlkZGVuXCJdKSA6IFtdO1xuICAgICAgcmV0dXJuIHBhcmVudHMyLnJlZHVjZShcbiAgICAgICAgKGZuLCBzY3JvbGxFbGVtZW50LCBpKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgb2Zmc2V0SGVpZ2h0IH0gPSBzY3JvbGxFbGVtZW50O1xuICAgICAgICAgIGNvbnN0IHZpZXdwb3J0ID0gb2Zmc2V0Vmlld3BvcnQoc2Nyb2xsRWxlbWVudCk7XG4gICAgICAgICAgY29uc3QgbWF4U2Nyb2xsID0gc2Nyb2xsSGVpZ2h0IC0gdmlld3BvcnQuaGVpZ2h0O1xuICAgICAgICAgIGNvbnN0IHsgaGVpZ2h0OiBlbEhlaWdodCwgdG9wOiBlbFRvcCB9ID0gcGFyZW50czJbaSAtIDFdID8gb2Zmc2V0Vmlld3BvcnQocGFyZW50czJbaSAtIDFdKSA6IG9mZnNldChlbGVtZW50KTtcbiAgICAgICAgICBsZXQgdG9wID0gTWF0aC5jZWlsKGVsVG9wIC0gdmlld3BvcnQudG9wIC0gb2Zmc2V0QnkgKyBzY3JvbGxUb3ApO1xuICAgICAgICAgIGlmIChvZmZzZXRCeSA+IDAgJiYgb2Zmc2V0SGVpZ2h0IDwgZWxIZWlnaHQgKyBvZmZzZXRCeSkge1xuICAgICAgICAgICAgdG9wICs9IG9mZnNldEJ5O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvZmZzZXRCeSA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0b3AgPiBtYXhTY3JvbGwpIHtcbiAgICAgICAgICAgIG9mZnNldEJ5IC09IHRvcCAtIG1heFNjcm9sbDtcbiAgICAgICAgICAgIHRvcCA9IG1heFNjcm9sbDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRvcCA8IDApIHtcbiAgICAgICAgICAgIG9mZnNldEJ5IC09IHRvcDtcbiAgICAgICAgICAgIHRvcCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAoKSA9PiBzY3JvbGxUbyhzY3JvbGxFbGVtZW50LCB0b3AgLSBzY3JvbGxUb3AsIGVsZW1lbnQsIG1heFNjcm9sbCkudGhlbihmbik7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IFByb21pc2UucmVzb2x2ZSgpXG4gICAgICApKCk7XG4gICAgICBmdW5jdGlvbiBzY3JvbGxUbyhlbGVtZW50MiwgdG9wLCB0YXJnZXRFbCwgbWF4U2Nyb2xsKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHNjcm9sbCA9IGVsZW1lbnQyLnNjcm9sbFRvcDtcbiAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IGdldER1cmF0aW9uKE1hdGguYWJzKHRvcCkpO1xuICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICBjb25zdCBpc1Njcm9sbGluZ0VsZW1lbnQgPSBzY3JvbGxpbmdFbGVtZW50KGVsZW1lbnQyKSA9PT0gZWxlbWVudDI7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0VG9wID0gb2Zmc2V0KHRhcmdldEVsKS50b3AgKyAoaXNTY3JvbGxpbmdFbGVtZW50ID8gMCA6IHNjcm9sbCk7XG4gICAgICAgICAgbGV0IHByZXYgPSAwO1xuICAgICAgICAgIGxldCBmcmFtZXMgPSAxNTtcbiAgICAgICAgICAoZnVuY3Rpb24gc3RlcCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnQgPSBlYXNlKGNsYW1wKChEYXRlLm5vdygpIC0gc3RhcnQpIC8gZHVyYXRpb24pKTtcbiAgICAgICAgICAgIGxldCBkaWZmID0gMDtcbiAgICAgICAgICAgIGlmIChwYXJlbnRzMlswXSA9PT0gZWxlbWVudDIgJiYgc2Nyb2xsICsgdG9wIDwgbWF4U2Nyb2xsKSB7XG4gICAgICAgICAgICAgIGRpZmYgPSBvZmZzZXQodGFyZ2V0RWwpLnRvcCArIChpc1Njcm9sbGluZ0VsZW1lbnQgPyAwIDogZWxlbWVudDIuc2Nyb2xsVG9wKSAtIHRhcmdldFRvcCAtIGRpbWVuc2lvbnMkMShnZXRDb3ZlcmluZ0VsZW1lbnQodGFyZ2V0RWwpKS5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGVtZW50Mi5zY3JvbGxUb3AgPSBzY3JvbGwgKyAodG9wICsgZGlmZikgKiBwZXJjZW50O1xuICAgICAgICAgICAgaWYgKHBlcmNlbnQgPT09IDEgJiYgKHByZXYgPT09IGRpZmYgfHwgIWZyYW1lcy0tKSkge1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwcmV2ID0gZGlmZjtcbiAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gZ2V0RHVyYXRpb24oZGlzdCkge1xuICAgICAgICByZXR1cm4gNDAgKiBNYXRoLnBvdyhkaXN0LCAwLjM3NSk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBlYXNlKGspIHtcbiAgICAgICAgcmV0dXJuIDAuNSAqICgxIC0gTWF0aC5jb3MoTWF0aC5QSSAqIGspKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc2Nyb2xsZWRPdmVyKGVsZW1lbnQsIHN0YXJ0T2Zmc2V0ID0gMCwgZW5kT2Zmc2V0ID0gMCkge1xuICAgICAgaWYgKCFpc1Zpc2libGUoZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgICBjb25zdCBzY3JvbGxFbGVtZW50ID0gc2Nyb2xsUGFyZW50KGVsZW1lbnQsIHRydWUpO1xuICAgICAgY29uc3QgeyBzY3JvbGxIZWlnaHQsIHNjcm9sbFRvcCB9ID0gc2Nyb2xsRWxlbWVudDtcbiAgICAgIGNvbnN0IHsgaGVpZ2h0OiB2aWV3cG9ydEhlaWdodCB9ID0gb2Zmc2V0Vmlld3BvcnQoc2Nyb2xsRWxlbWVudCk7XG4gICAgICBjb25zdCBtYXhTY3JvbGwgPSBzY3JvbGxIZWlnaHQgLSB2aWV3cG9ydEhlaWdodDtcbiAgICAgIGNvbnN0IGVsZW1lbnRPZmZzZXRUb3AgPSBvZmZzZXRQb3NpdGlvbihlbGVtZW50KVswXSAtIG9mZnNldFBvc2l0aW9uKHNjcm9sbEVsZW1lbnQpWzBdO1xuICAgICAgY29uc3Qgc3RhcnQgPSBNYXRoLm1heCgwLCBlbGVtZW50T2Zmc2V0VG9wIC0gdmlld3BvcnRIZWlnaHQgKyBzdGFydE9mZnNldCk7XG4gICAgICBjb25zdCBlbmQgPSBNYXRoLm1pbihtYXhTY3JvbGwsIGVsZW1lbnRPZmZzZXRUb3AgKyBlbGVtZW50Lm9mZnNldEhlaWdodCAtIGVuZE9mZnNldCk7XG4gICAgICByZXR1cm4gc3RhcnQgPCBlbmQgPyBjbGFtcCgoc2Nyb2xsVG9wIC0gc3RhcnQpIC8gKGVuZCAtIHN0YXJ0KSkgOiAxO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzY3JvbGxQYXJlbnRzKGVsZW1lbnQsIHNjcm9sbGFibGUgPSBmYWxzZSwgcHJvcHMgPSBbXSkge1xuICAgICAgY29uc3Qgc2Nyb2xsRWwgPSBzY3JvbGxpbmdFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgbGV0IGFuY2VzdG9ycyA9IHBhcmVudHMoZWxlbWVudCkucmV2ZXJzZSgpO1xuICAgICAgYW5jZXN0b3JzID0gYW5jZXN0b3JzLnNsaWNlKGFuY2VzdG9ycy5pbmRleE9mKHNjcm9sbEVsKSArIDEpO1xuICAgICAgY29uc3QgZml4ZWRJbmRleCA9IGZpbmRJbmRleChhbmNlc3RvcnMsIChlbCkgPT4gY3NzKGVsLCBcInBvc2l0aW9uXCIpID09PSBcImZpeGVkXCIpO1xuICAgICAgaWYgKH5maXhlZEluZGV4KSB7XG4gICAgICAgIGFuY2VzdG9ycyA9IGFuY2VzdG9ycy5zbGljZShmaXhlZEluZGV4KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbc2Nyb2xsRWxdLmNvbmNhdChcbiAgICAgICAgYW5jZXN0b3JzLmZpbHRlcihcbiAgICAgICAgICAocGFyZW50MikgPT4gY3NzKHBhcmVudDIsIFwib3ZlcmZsb3dcIikuc3BsaXQoXCIgXCIpLnNvbWUoKHByb3ApID0+IGluY2x1ZGVzKFtcImF1dG9cIiwgXCJzY3JvbGxcIiwgLi4ucHJvcHNdLCBwcm9wKSkgJiYgKCFzY3JvbGxhYmxlIHx8IHBhcmVudDIuc2Nyb2xsSGVpZ2h0ID4gb2Zmc2V0Vmlld3BvcnQocGFyZW50MikuaGVpZ2h0KVxuICAgICAgICApXG4gICAgICApLnJldmVyc2UoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2Nyb2xsUGFyZW50KC4uLmFyZ3MpIHtcbiAgICAgIHJldHVybiBzY3JvbGxQYXJlbnRzKC4uLmFyZ3MpWzBdO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvdmVyZmxvd1BhcmVudHMoZWxlbWVudCkge1xuICAgICAgcmV0dXJuIHNjcm9sbFBhcmVudHMoZWxlbWVudCwgZmFsc2UsIFtcImhpZGRlblwiLCBcImNsaXBcIl0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvZmZzZXRWaWV3cG9ydChzY3JvbGxFbGVtZW50KSB7XG4gICAgICBjb25zdCB3aW5kb3cgPSB0b1dpbmRvdyhzY3JvbGxFbGVtZW50KTtcbiAgICAgIGNvbnN0IGRvY3VtZW50U2Nyb2xsaW5nRWxlbWVudCA9IHNjcm9sbGluZ0VsZW1lbnQoc2Nyb2xsRWxlbWVudCk7XG4gICAgICBjb25zdCB1c2VXaW5kb3cgPSAhaXNOb2RlKHNjcm9sbEVsZW1lbnQpIHx8IHNjcm9sbEVsZW1lbnQuY29udGFpbnMoZG9jdW1lbnRTY3JvbGxpbmdFbGVtZW50KTtcbiAgICAgIGlmICh1c2VXaW5kb3cgJiYgd2luZG93LnZpc3VhbFZpZXdwb3J0KSB7XG4gICAgICAgIGxldCB7IGhlaWdodCwgd2lkdGgsIHNjYWxlLCBwYWdlVG9wOiB0b3AsIHBhZ2VMZWZ0OiBsZWZ0IH0gPSB3aW5kb3cudmlzdWFsVmlld3BvcnQ7XG4gICAgICAgIGhlaWdodCA9IE1hdGgucm91bmQoaGVpZ2h0ICogc2NhbGUpO1xuICAgICAgICB3aWR0aCA9IE1hdGgucm91bmQod2lkdGggKiBzY2FsZSk7XG4gICAgICAgIHJldHVybiB7IGhlaWdodCwgd2lkdGgsIHRvcCwgbGVmdCwgYm90dG9tOiB0b3AgKyBoZWlnaHQsIHJpZ2h0OiBsZWZ0ICsgd2lkdGggfTtcbiAgICAgIH1cbiAgICAgIGxldCByZWN0ID0gb2Zmc2V0KHVzZVdpbmRvdyA/IHdpbmRvdyA6IHNjcm9sbEVsZW1lbnQpO1xuICAgICAgaWYgKGNzcyhzY3JvbGxFbGVtZW50LCBcImRpc3BsYXlcIikgPT09IFwiaW5saW5lXCIpIHtcbiAgICAgICAgcmV0dXJuIHJlY3Q7XG4gICAgICB9XG4gICAgICBjb25zdCB7IGJvZHksIGRvY3VtZW50RWxlbWVudCB9ID0gd2luZG93LmRvY3VtZW50O1xuICAgICAgY29uc3Qgdmlld3BvcnRFbGVtZW50ID0gdXNlV2luZG93ID8gZG9jdW1lbnRTY3JvbGxpbmdFbGVtZW50ID09PSBkb2N1bWVudEVsZW1lbnQgfHwgLy8gSW4gcXVpcmtzIG1vZGUgdGhlIHNjcm9sbGluZyBlbGVtZW50IGlzIGJvZHksIGV2ZW4gdGhvdWdoIHRoZSB2aWV3cG9ydCBpcyBodG1sXG4gICAgICBkb2N1bWVudFNjcm9sbGluZ0VsZW1lbnQuY2xpZW50SGVpZ2h0IDwgYm9keS5jbGllbnRIZWlnaHQgPyBkb2N1bWVudFNjcm9sbGluZ0VsZW1lbnQgOiBib2R5IDogc2Nyb2xsRWxlbWVudDtcbiAgICAgIGZvciAobGV0IFtwcm9wLCBkaXIsIHN0YXJ0LCBlbmRdIG9mIFtcbiAgICAgICAgW1wid2lkdGhcIiwgXCJ4XCIsIFwibGVmdFwiLCBcInJpZ2h0XCJdLFxuICAgICAgICBbXCJoZWlnaHRcIiwgXCJ5XCIsIFwidG9wXCIsIFwiYm90dG9tXCJdXG4gICAgICBdKSB7XG4gICAgICAgIGNvbnN0IHN1YnBpeGVsID0gcmVjdFtwcm9wXSAlIDE7XG4gICAgICAgIHJlY3Rbc3RhcnRdICs9IHRvRmxvYXQoY3NzKHZpZXdwb3J0RWxlbWVudCwgYGJvcmRlci0ke3N0YXJ0fS13aWR0aGApKTtcbiAgICAgICAgcmVjdFtwcm9wXSA9IHJlY3RbZGlyXSA9IHZpZXdwb3J0RWxlbWVudFtgY2xpZW50JHt1Y2ZpcnN0KHByb3ApfWBdIC0gKHN1YnBpeGVsID8gc3VicGl4ZWwgPCAwLjUgPyAtc3VicGl4ZWwgOiAxIC0gc3VicGl4ZWwgOiAwKTtcbiAgICAgICAgcmVjdFtlbmRdID0gcmVjdFtwcm9wXSArIHJlY3Rbc3RhcnRdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlY3Q7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldENvdmVyaW5nRWxlbWVudCh0YXJnZXQpIHtcbiAgICAgIGNvbnN0IHsgbGVmdCwgd2lkdGgsIHRvcCB9ID0gZGltZW5zaW9ucyQxKHRhcmdldCk7XG4gICAgICBmb3IgKGNvbnN0IHBvc2l0aW9uIG9mIHRvcCA/IFswLCB0b3BdIDogWzBdKSB7XG4gICAgICAgIGxldCBjb3ZlckVsO1xuICAgICAgICBmb3IgKGNvbnN0IGVsIG9mIHRvV2luZG93KHRhcmdldCkuZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQobGVmdCArIHdpZHRoIC8gMiwgcG9zaXRpb24pKSB7XG4gICAgICAgICAgaWYgKCFlbC5jb250YWlucyh0YXJnZXQpICYmIC8vIElmIGUuZy4gT2ZmY2FudmFzIGlzIG5vdCB5ZXQgY2xvc2VkXG4gICAgICAgICAgIWhhc0NsYXNzKGVsLCBcInVrLXRvZ2dsYWJsZS1sZWF2ZVwiKSAmJiAoaGFzUG9zaXRpb24oZWwsIFwiZml4ZWRcIikgJiYgekluZGV4KFxuICAgICAgICAgICAgcGFyZW50cyh0YXJnZXQpLnJldmVyc2UoKS5maW5kKFxuICAgICAgICAgICAgICAocGFyZW50MikgPT4gIXBhcmVudDIuY29udGFpbnMoZWwpICYmICFoYXNQb3NpdGlvbihwYXJlbnQyLCBcInN0YXRpY1wiKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICkgPCB6SW5kZXgoZWwpIHx8IGhhc1Bvc2l0aW9uKGVsLCBcInN0aWNreVwiKSAmJiBwYXJlbnQoZWwpLmNvbnRhaW5zKHRhcmdldCkpICYmICghY292ZXJFbCB8fCBkaW1lbnNpb25zJDEoY292ZXJFbCkuaGVpZ2h0IDwgZGltZW5zaW9ucyQxKGVsKS5oZWlnaHQpKSB7XG4gICAgICAgICAgICBjb3ZlckVsID0gZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb3ZlckVsKSB7XG4gICAgICAgICAgcmV0dXJuIGNvdmVyRWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gekluZGV4KGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiB0b0Zsb2F0KGNzcyhlbGVtZW50LCBcInpJbmRleFwiKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhc1Bvc2l0aW9uKGVsZW1lbnQsIHBvc2l0aW9uKSB7XG4gICAgICByZXR1cm4gY3NzKGVsZW1lbnQsIFwicG9zaXRpb25cIikgPT09IHBvc2l0aW9uO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzY3JvbGxpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiB0b1dpbmRvdyhlbGVtZW50KS5kb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGRpcnMgPSBbXG4gICAgICBbXCJ3aWR0aFwiLCBcInhcIiwgXCJsZWZ0XCIsIFwicmlnaHRcIl0sXG4gICAgICBbXCJoZWlnaHRcIiwgXCJ5XCIsIFwidG9wXCIsIFwiYm90dG9tXCJdXG4gICAgXTtcbiAgICBmdW5jdGlvbiBwb3NpdGlvbkF0KGVsZW1lbnQsIHRhcmdldCwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgYXR0YWNoOiB7XG4gICAgICAgICAgZWxlbWVudDogW1wibGVmdFwiLCBcInRvcFwiXSxcbiAgICAgICAgICB0YXJnZXQ6IFtcImxlZnRcIiwgXCJ0b3BcIl0sXG4gICAgICAgICAgLi4ub3B0aW9ucy5hdHRhY2hcbiAgICAgICAgfSxcbiAgICAgICAgb2Zmc2V0OiBbMCwgMF0sXG4gICAgICAgIHBsYWNlbWVudDogW10sXG4gICAgICAgIC4uLm9wdGlvbnNcbiAgICAgIH07XG4gICAgICBpZiAoIWlzQXJyYXkodGFyZ2V0KSkge1xuICAgICAgICB0YXJnZXQgPSBbdGFyZ2V0LCB0YXJnZXRdO1xuICAgICAgfVxuICAgICAgb2Zmc2V0KGVsZW1lbnQsIGdldFBvc2l0aW9uKGVsZW1lbnQsIHRhcmdldCwgb3B0aW9ucykpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRQb3NpdGlvbihlbGVtZW50LCB0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gYXR0YWNoVG8oZWxlbWVudCwgdGFyZ2V0LCBvcHRpb25zKTtcbiAgICAgIGNvbnN0IHsgYm91bmRhcnksIHZpZXdwb3J0T2Zmc2V0ID0gMCwgcGxhY2VtZW50IH0gPSBvcHRpb25zO1xuICAgICAgbGV0IG9mZnNldFBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICBmb3IgKGNvbnN0IFtpLCBbcHJvcCwgLCBzdGFydCwgZW5kXV0gb2YgT2JqZWN0LmVudHJpZXMoZGlycykpIHtcbiAgICAgICAgY29uc3Qgdmlld3BvcnQgPSBnZXRWaWV3cG9ydCQyKGVsZW1lbnQsIHRhcmdldFtpXSwgdmlld3BvcnRPZmZzZXQsIGJvdW5kYXJ5LCBpKTtcbiAgICAgICAgaWYgKGlzV2l0aGluKHBvc2l0aW9uLCB2aWV3cG9ydCwgaSkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgb2Zmc2V0QnkgPSAwO1xuICAgICAgICBpZiAocGxhY2VtZW50W2ldID09PSBcImZsaXBcIikge1xuICAgICAgICAgIGNvbnN0IGF0dGFjaCA9IG9wdGlvbnMuYXR0YWNoLnRhcmdldFtpXTtcbiAgICAgICAgICBpZiAoYXR0YWNoID09PSBlbmQgJiYgcG9zaXRpb25bZW5kXSA8PSB2aWV3cG9ydFtlbmRdIHx8IGF0dGFjaCA9PT0gc3RhcnQgJiYgcG9zaXRpb25bc3RhcnRdID49IHZpZXdwb3J0W3N0YXJ0XSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9mZnNldEJ5ID0gZmxpcChlbGVtZW50LCB0YXJnZXQsIG9wdGlvbnMsIGkpW3N0YXJ0XSAtIHBvc2l0aW9uW3N0YXJ0XTtcbiAgICAgICAgICBjb25zdCBzY3JvbGxBcmVhID0gZ2V0U2Nyb2xsQXJlYShlbGVtZW50LCB0YXJnZXRbaV0sIHZpZXdwb3J0T2Zmc2V0LCBpKTtcbiAgICAgICAgICBpZiAoIWlzV2l0aGluKGFwcGx5T2Zmc2V0KHBvc2l0aW9uLCBvZmZzZXRCeSwgaSksIHNjcm9sbEFyZWEsIGkpKSB7XG4gICAgICAgICAgICBpZiAoaXNXaXRoaW4ocG9zaXRpb24sIHNjcm9sbEFyZWEsIGkpKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMucmVjdXJzaW9uKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5ld1BvcyA9IGZsaXBBeGlzKGVsZW1lbnQsIHRhcmdldCwgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAobmV3UG9zICYmIGlzV2l0aGluKG5ld1Bvcywgc2Nyb2xsQXJlYSwgMSAtIGkpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXdQb3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2VtZW50W2ldID09PSBcInNoaWZ0XCIpIHtcbiAgICAgICAgICBjb25zdCB0YXJnZXREaW0gPSBvZmZzZXQodGFyZ2V0W2ldKTtcbiAgICAgICAgICBjb25zdCB7IG9mZnNldDogZWxPZmZzZXQgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgb2Zmc2V0QnkgPSBjbGFtcChcbiAgICAgICAgICAgIGNsYW1wKHBvc2l0aW9uW3N0YXJ0XSwgdmlld3BvcnRbc3RhcnRdLCB2aWV3cG9ydFtlbmRdIC0gcG9zaXRpb25bcHJvcF0pLFxuICAgICAgICAgICAgdGFyZ2V0RGltW3N0YXJ0XSAtIHBvc2l0aW9uW3Byb3BdICsgZWxPZmZzZXRbaV0sXG4gICAgICAgICAgICB0YXJnZXREaW1bZW5kXSAtIGVsT2Zmc2V0W2ldXG4gICAgICAgICAgKSAtIHBvc2l0aW9uW3N0YXJ0XTtcbiAgICAgICAgfVxuICAgICAgICBvZmZzZXRQb3NpdGlvbiA9IGFwcGx5T2Zmc2V0KG9mZnNldFBvc2l0aW9uLCBvZmZzZXRCeSwgaSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2Zmc2V0UG9zaXRpb247XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0dGFjaFRvKGVsZW1lbnQsIHRhcmdldCwgb3B0aW9ucykge1xuICAgICAgbGV0IHsgYXR0YWNoLCBvZmZzZXQ6IG9mZnNldEJ5IH0gPSB7XG4gICAgICAgIGF0dGFjaDoge1xuICAgICAgICAgIGVsZW1lbnQ6IFtcImxlZnRcIiwgXCJ0b3BcIl0sXG4gICAgICAgICAgdGFyZ2V0OiBbXCJsZWZ0XCIsIFwidG9wXCJdLFxuICAgICAgICAgIC4uLm9wdGlvbnMuYXR0YWNoXG4gICAgICAgIH0sXG4gICAgICAgIG9mZnNldDogWzAsIDBdLFxuICAgICAgICAuLi5vcHRpb25zXG4gICAgICB9O1xuICAgICAgbGV0IGVsT2Zmc2V0ID0gb2Zmc2V0KGVsZW1lbnQpO1xuICAgICAgZm9yIChjb25zdCBbaSwgW3Byb3AsICwgc3RhcnQsIGVuZF1dIG9mIE9iamVjdC5lbnRyaWVzKGRpcnMpKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldE9mZnNldCA9IGF0dGFjaC50YXJnZXRbaV0gPT09IGF0dGFjaC5lbGVtZW50W2ldID8gb2Zmc2V0Vmlld3BvcnQodGFyZ2V0W2ldKSA6IG9mZnNldCh0YXJnZXRbaV0pO1xuICAgICAgICBlbE9mZnNldCA9IGFwcGx5T2Zmc2V0KFxuICAgICAgICAgIGVsT2Zmc2V0LFxuICAgICAgICAgIHRhcmdldE9mZnNldFtzdGFydF0gLSBlbE9mZnNldFtzdGFydF0gKyBtb3ZlQnkoYXR0YWNoLnRhcmdldFtpXSwgZW5kLCB0YXJnZXRPZmZzZXRbcHJvcF0pIC0gbW92ZUJ5KGF0dGFjaC5lbGVtZW50W2ldLCBlbmQsIGVsT2Zmc2V0W3Byb3BdKSArICtvZmZzZXRCeVtpXSxcbiAgICAgICAgICBpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZWxPZmZzZXQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFwcGx5T2Zmc2V0KHBvc2l0aW9uLCBvZmZzZXQyLCBpKSB7XG4gICAgICBjb25zdCBbLCBkaXIsIHN0YXJ0LCBlbmRdID0gZGlyc1tpXTtcbiAgICAgIGNvbnN0IG5ld1BvcyA9IHsgLi4ucG9zaXRpb24gfTtcbiAgICAgIG5ld1Bvc1tzdGFydF0gPSBwb3NpdGlvbltkaXJdID0gcG9zaXRpb25bc3RhcnRdICsgb2Zmc2V0MjtcbiAgICAgIG5ld1Bvc1tlbmRdICs9IG9mZnNldDI7XG4gICAgICByZXR1cm4gbmV3UG9zO1xuICAgIH1cbiAgICBmdW5jdGlvbiBtb3ZlQnkoYXR0YWNoLCBlbmQsIGRpbSkge1xuICAgICAgcmV0dXJuIGF0dGFjaCA9PT0gXCJjZW50ZXJcIiA/IGRpbSAvIDIgOiBhdHRhY2ggPT09IGVuZCA/IGRpbSA6IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFZpZXdwb3J0JDIoZWxlbWVudCwgdGFyZ2V0LCB2aWV3cG9ydE9mZnNldCwgYm91bmRhcnksIGkpIHtcbiAgICAgIGxldCB2aWV3cG9ydCA9IGdldEludGVyc2VjdGlvbkFyZWEoLi4uY29tbW9uU2Nyb2xsUGFyZW50cyhlbGVtZW50LCB0YXJnZXQpLm1hcChvZmZzZXRWaWV3cG9ydCkpO1xuICAgICAgaWYgKHZpZXdwb3J0T2Zmc2V0KSB7XG4gICAgICAgIHZpZXdwb3J0W2RpcnNbaV1bMl1dICs9IHZpZXdwb3J0T2Zmc2V0O1xuICAgICAgICB2aWV3cG9ydFtkaXJzW2ldWzNdXSAtPSB2aWV3cG9ydE9mZnNldDtcbiAgICAgIH1cbiAgICAgIGlmIChib3VuZGFyeSkge1xuICAgICAgICB2aWV3cG9ydCA9IGdldEludGVyc2VjdGlvbkFyZWEoXG4gICAgICAgICAgdmlld3BvcnQsXG4gICAgICAgICAgb2Zmc2V0KGlzQXJyYXkoYm91bmRhcnkpID8gYm91bmRhcnlbaV0gOiBib3VuZGFyeSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2aWV3cG9ydDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0U2Nyb2xsQXJlYShlbGVtZW50LCB0YXJnZXQsIHZpZXdwb3J0T2Zmc2V0LCBpKSB7XG4gICAgICBjb25zdCBbcHJvcCwgYXhpcywgc3RhcnQsIGVuZF0gPSBkaXJzW2ldO1xuICAgICAgY29uc3QgW3Njcm9sbEVsZW1lbnRdID0gY29tbW9uU2Nyb2xsUGFyZW50cyhlbGVtZW50LCB0YXJnZXQpO1xuICAgICAgY29uc3Qgdmlld3BvcnQgPSBvZmZzZXRWaWV3cG9ydChzY3JvbGxFbGVtZW50KTtcbiAgICAgIGlmIChbXCJhdXRvXCIsIFwic2Nyb2xsXCJdLmluY2x1ZGVzKGNzcyhzY3JvbGxFbGVtZW50LCBgb3ZlcmZsb3ctJHtheGlzfWApKSkge1xuICAgICAgICB2aWV3cG9ydFtzdGFydF0gLT0gc2Nyb2xsRWxlbWVudFtgc2Nyb2xsJHt1Y2ZpcnN0KHN0YXJ0KX1gXTtcbiAgICAgICAgdmlld3BvcnRbZW5kXSA9IHZpZXdwb3J0W3N0YXJ0XSArIHNjcm9sbEVsZW1lbnRbYHNjcm9sbCR7dWNmaXJzdChwcm9wKX1gXTtcbiAgICAgIH1cbiAgICAgIHZpZXdwb3J0W3N0YXJ0XSArPSB2aWV3cG9ydE9mZnNldDtcbiAgICAgIHZpZXdwb3J0W2VuZF0gLT0gdmlld3BvcnRPZmZzZXQ7XG4gICAgICByZXR1cm4gdmlld3BvcnQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvbW1vblNjcm9sbFBhcmVudHMoZWxlbWVudCwgdGFyZ2V0KSB7XG4gICAgICByZXR1cm4gb3ZlcmZsb3dQYXJlbnRzKHRhcmdldCkuZmlsdGVyKChwYXJlbnQpID0+IHBhcmVudC5jb250YWlucyhlbGVtZW50KSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEludGVyc2VjdGlvbkFyZWEoLi4ucmVjdHMpIHtcbiAgICAgIGxldCBhcmVhID0ge307XG4gICAgICBmb3IgKGNvbnN0IHJlY3Qgb2YgcmVjdHMpIHtcbiAgICAgICAgZm9yIChjb25zdCBbLCAsIHN0YXJ0LCBlbmRdIG9mIGRpcnMpIHtcbiAgICAgICAgICBhcmVhW3N0YXJ0XSA9IE1hdGgubWF4KGFyZWFbc3RhcnRdIHx8IDAsIHJlY3Rbc3RhcnRdKTtcbiAgICAgICAgICBhcmVhW2VuZF0gPSBNYXRoLm1pbiguLi5bYXJlYVtlbmRdLCByZWN0W2VuZF1dLmZpbHRlcihCb29sZWFuKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBhcmVhO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1dpdGhpbihwb3NpdGlvbkEsIHBvc2l0aW9uQiwgaSkge1xuICAgICAgY29uc3QgWywgLCBzdGFydCwgZW5kXSA9IGRpcnNbaV07XG4gICAgICByZXR1cm4gcG9zaXRpb25BW3N0YXJ0XSA+PSBwb3NpdGlvbkJbc3RhcnRdICYmIHBvc2l0aW9uQVtlbmRdIDw9IHBvc2l0aW9uQltlbmRdO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmbGlwKGVsZW1lbnQsIHRhcmdldCwgeyBvZmZzZXQ6IG9mZnNldDIsIGF0dGFjaCB9LCBpKSB7XG4gICAgICByZXR1cm4gYXR0YWNoVG8oZWxlbWVudCwgdGFyZ2V0LCB7XG4gICAgICAgIGF0dGFjaDoge1xuICAgICAgICAgIGVsZW1lbnQ6IGZsaXBBdHRhY2goYXR0YWNoLmVsZW1lbnQsIGkpLFxuICAgICAgICAgIHRhcmdldDogZmxpcEF0dGFjaChhdHRhY2gudGFyZ2V0LCBpKVxuICAgICAgICB9LFxuICAgICAgICBvZmZzZXQ6IGZsaXBPZmZzZXQob2Zmc2V0MiwgaSlcbiAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmbGlwQXhpcyhlbGVtZW50LCB0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBnZXRQb3NpdGlvbihlbGVtZW50LCB0YXJnZXQsIHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgYXR0YWNoOiB7XG4gICAgICAgICAgZWxlbWVudDogb3B0aW9ucy5hdHRhY2guZWxlbWVudC5tYXAoZmxpcEF0dGFjaEF4aXMpLnJldmVyc2UoKSxcbiAgICAgICAgICB0YXJnZXQ6IG9wdGlvbnMuYXR0YWNoLnRhcmdldC5tYXAoZmxpcEF0dGFjaEF4aXMpLnJldmVyc2UoKVxuICAgICAgICB9LFxuICAgICAgICBvZmZzZXQ6IG9wdGlvbnMub2Zmc2V0LnJldmVyc2UoKSxcbiAgICAgICAgcGxhY2VtZW50OiBvcHRpb25zLnBsYWNlbWVudC5yZXZlcnNlKCksXG4gICAgICAgIHJlY3Vyc2lvbjogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZsaXBBdHRhY2goYXR0YWNoLCBpKSB7XG4gICAgICBjb25zdCBuZXdBdHRhY2ggPSBbLi4uYXR0YWNoXTtcbiAgICAgIGNvbnN0IGluZGV4ID0gZGlyc1tpXS5pbmRleE9mKGF0dGFjaFtpXSk7XG4gICAgICBpZiAofmluZGV4KSB7XG4gICAgICAgIG5ld0F0dGFjaFtpXSA9IGRpcnNbaV1bMSAtIGluZGV4ICUgMiArIDJdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ld0F0dGFjaDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmxpcEF0dGFjaEF4aXMocHJvcCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZGlyc1tpXS5pbmRleE9mKHByb3ApO1xuICAgICAgICBpZiAofmluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIGRpcnNbMSAtIGldW2luZGV4ICUgMiArIDJdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZsaXBPZmZzZXQob2Zmc2V0MiwgaSkge1xuICAgICAgb2Zmc2V0MiA9IFsuLi5vZmZzZXQyXTtcbiAgICAgIG9mZnNldDJbaV0gKj0gLTE7XG4gICAgICByZXR1cm4gb2Zmc2V0MjtcbiAgICB9XG5cbiAgICB2YXIgdXRpbCA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgICAgICAgX19wcm90b19fOiBudWxsLFxuICAgICAgICAkOiAkLFxuICAgICAgICAkJDogJCQsXG4gICAgICAgIEFuaW1hdGlvbjogQW5pbWF0aW9uLFxuICAgICAgICBEaW1lbnNpb25zOiBEaW1lbnNpb25zLFxuICAgICAgICBNb3VzZVRyYWNrZXI6IE1vdXNlVHJhY2tlcixcbiAgICAgICAgVHJhbnNpdGlvbjogVHJhbnNpdGlvbixcbiAgICAgICAgYWRkQ2xhc3M6IGFkZENsYXNzLFxuICAgICAgICBhZnRlcjogYWZ0ZXIsXG4gICAgICAgIGFwcGVuZDogYXBwZW5kLFxuICAgICAgICBhcHBseTogYXBwbHksXG4gICAgICAgIGFzc2lnbjogYXNzaWduLFxuICAgICAgICBhdHRyOiBhdHRyLFxuICAgICAgICBiZWZvcmU6IGJlZm9yZSxcbiAgICAgICAgYm94TW9kZWxBZGp1c3Q6IGJveE1vZGVsQWRqdXN0LFxuICAgICAgICBjYW1lbGl6ZTogY2FtZWxpemUsXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICAgICAgY2xhbXA6IGNsYW1wLFxuICAgICAgICBjcmVhdGVFdmVudDogY3JlYXRlRXZlbnQsXG4gICAgICAgIGNzczogY3NzLFxuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBkaW1lbnNpb25zOiBkaW1lbnNpb25zJDEsXG4gICAgICAgIGVhY2g6IGVhY2gsXG4gICAgICAgIGVtcHR5OiBlbXB0eSxcbiAgICAgICAgZW5kc1dpdGg6IGVuZHNXaXRoLFxuICAgICAgICBlc2NhcGU6IGVzY2FwZSxcbiAgICAgICAgZmFzdGRvbTogZmFzdGRvbSxcbiAgICAgICAgZmlsdGVyOiBmaWx0ZXIkMSxcbiAgICAgICAgZmluZDogZmluZCxcbiAgICAgICAgZmluZEFsbDogZmluZEFsbCxcbiAgICAgICAgZmluZEluZGV4OiBmaW5kSW5kZXgsXG4gICAgICAgIGZsaXBQb3NpdGlvbjogZmxpcFBvc2l0aW9uLFxuICAgICAgICBmcmFnbWVudDogZnJhZ21lbnQsXG4gICAgICAgIGdldENvdmVyaW5nRWxlbWVudDogZ2V0Q292ZXJpbmdFbGVtZW50LFxuICAgICAgICBnZXRFdmVudFBvczogZ2V0RXZlbnRQb3MsXG4gICAgICAgIGdldEluZGV4OiBnZXRJbmRleCxcbiAgICAgICAgZ2V0VGFyZ2V0ZWRFbGVtZW50OiBnZXRUYXJnZXRlZEVsZW1lbnQsXG4gICAgICAgIGhhc0F0dHI6IGhhc0F0dHIsXG4gICAgICAgIGhhc0NsYXNzOiBoYXNDbGFzcyxcbiAgICAgICAgaGFzT3duOiBoYXNPd24sXG4gICAgICAgIGhhc1RvdWNoOiBoYXNUb3VjaCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgIGh0bWw6IGh0bWwsXG4gICAgICAgIGh5cGhlbmF0ZTogaHlwaGVuYXRlLFxuICAgICAgICBpbkJyb3dzZXI6IGluQnJvd3NlcixcbiAgICAgICAgaW5jbHVkZXM6IGluY2x1ZGVzLFxuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIGludGVyc2VjdFJlY3Q6IGludGVyc2VjdFJlY3QsXG4gICAgICAgIGlzQXJyYXk6IGlzQXJyYXksXG4gICAgICAgIGlzQm9vbGVhbjogaXNCb29sZWFuLFxuICAgICAgICBpc0RvY3VtZW50OiBpc0RvY3VtZW50LFxuICAgICAgICBpc0VsZW1lbnQ6IGlzRWxlbWVudCxcbiAgICAgICAgaXNFbXB0eTogaXNFbXB0eSxcbiAgICAgICAgaXNFcXVhbDogaXNFcXVhbCxcbiAgICAgICAgaXNGb2N1c2FibGU6IGlzRm9jdXNhYmxlLFxuICAgICAgICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICAgICAgICBpc0luVmlldzogaXNJblZpZXcsXG4gICAgICAgIGlzSW5wdXQ6IGlzSW5wdXQsXG4gICAgICAgIGlzTm9kZTogaXNOb2RlLFxuICAgICAgICBpc051bWJlcjogaXNOdW1iZXIsXG4gICAgICAgIGlzTnVtZXJpYzogaXNOdW1lcmljLFxuICAgICAgICBpc09iamVjdDogaXNPYmplY3QsXG4gICAgICAgIGlzUGxhaW5PYmplY3Q6IGlzUGxhaW5PYmplY3QsXG4gICAgICAgIGlzUnRsOiBpc1J0bCxcbiAgICAgICAgaXNTYW1lU2l0ZUFuY2hvcjogaXNTYW1lU2l0ZUFuY2hvcixcbiAgICAgICAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICAgICAgICBpc1RhZzogaXNUYWcsXG4gICAgICAgIGlzVG91Y2g6IGlzVG91Y2gsXG4gICAgICAgIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgICAgICAgaXNWaWRlbzogaXNWaWRlbyxcbiAgICAgICAgaXNWaXNpYmxlOiBpc1Zpc2libGUsXG4gICAgICAgIGlzVm9pZEVsZW1lbnQ6IGlzVm9pZEVsZW1lbnQsXG4gICAgICAgIGlzV2luZG93OiBpc1dpbmRvdyxcbiAgICAgICAgbGFzdDogbGFzdCxcbiAgICAgICAgbWF0Y2hlczogbWF0Y2hlcyxcbiAgICAgICAgbWVtb2l6ZTogbWVtb2l6ZSxcbiAgICAgICAgbXV0ZTogbXV0ZSxcbiAgICAgICAgbm9vcDogbm9vcCxcbiAgICAgICAgb2JzZXJ2ZUludGVyc2VjdGlvbjogb2JzZXJ2ZUludGVyc2VjdGlvbixcbiAgICAgICAgb2JzZXJ2ZU11dGF0aW9uOiBvYnNlcnZlTXV0YXRpb24sXG4gICAgICAgIG9ic2VydmVSZXNpemU6IG9ic2VydmVSZXNpemUsXG4gICAgICAgIG9ic2VydmVWaWV3cG9ydFJlc2l6ZTogb2JzZXJ2ZVZpZXdwb3J0UmVzaXplLFxuICAgICAgICBvZmY6IG9mZixcbiAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgIG9mZnNldFBvc2l0aW9uOiBvZmZzZXRQb3NpdGlvbixcbiAgICAgICAgb2Zmc2V0Vmlld3BvcnQ6IG9mZnNldFZpZXdwb3J0LFxuICAgICAgICBvbjogb24sXG4gICAgICAgIG9uY2U6IG9uY2UsXG4gICAgICAgIG92ZXJmbG93UGFyZW50czogb3ZlcmZsb3dQYXJlbnRzLFxuICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgcGFyZW50czogcGFyZW50cyxcbiAgICAgICAgcGF1c2U6IHBhdXNlLFxuICAgICAgICBwaWNrOiBwaWNrLFxuICAgICAgICBwbGF5OiBwbGF5LFxuICAgICAgICBwb2ludEluUmVjdDogcG9pbnRJblJlY3QsXG4gICAgICAgIHBvaW50ZXJDYW5jZWw6IHBvaW50ZXJDYW5jZWwsXG4gICAgICAgIHBvaW50ZXJEb3duOiBwb2ludGVyRG93biQxLFxuICAgICAgICBwb2ludGVyRW50ZXI6IHBvaW50ZXJFbnRlcixcbiAgICAgICAgcG9pbnRlckxlYXZlOiBwb2ludGVyTGVhdmUsXG4gICAgICAgIHBvaW50ZXJNb3ZlOiBwb2ludGVyTW92ZSQxLFxuICAgICAgICBwb2ludGVyVXA6IHBvaW50ZXJVcCQxLFxuICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICAgIHBvc2l0aW9uQXQ6IHBvc2l0aW9uQXQsXG4gICAgICAgIHByZXBlbmQ6IHByZXBlbmQsXG4gICAgICAgIHByb3BOYW1lOiBwcm9wTmFtZSxcbiAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgICBxdWVyeUFsbDogcXVlcnlBbGwsXG4gICAgICAgIHJlYWR5OiByZWFkeSxcbiAgICAgICAgcmVtb3ZlOiByZW1vdmUkMSxcbiAgICAgICAgcmVtb3ZlQXR0cjogcmVtb3ZlQXR0cixcbiAgICAgICAgcmVtb3ZlQ2xhc3M6IHJlbW92ZUNsYXNzLFxuICAgICAgICByZXBsYWNlQ2xhc3M6IHJlcGxhY2VDbGFzcyxcbiAgICAgICAgc2Nyb2xsSW50b1ZpZXc6IHNjcm9sbEludG9WaWV3LFxuICAgICAgICBzY3JvbGxQYXJlbnQ6IHNjcm9sbFBhcmVudCxcbiAgICAgICAgc2Nyb2xsUGFyZW50czogc2Nyb2xsUGFyZW50cyxcbiAgICAgICAgc2Nyb2xsZWRPdmVyOiBzY3JvbGxlZE92ZXIsXG4gICAgICAgIHNlbEZvY3VzYWJsZTogc2VsRm9jdXNhYmxlLFxuICAgICAgICBzZWxJbnB1dDogc2VsSW5wdXQsXG4gICAgICAgIHNvcnRCeTogc29ydEJ5LFxuICAgICAgICBzdGFydHNXaXRoOiBzdGFydHNXaXRoLFxuICAgICAgICBzdW1CeTogc3VtQnksXG4gICAgICAgIHN3YXA6IHN3YXAsXG4gICAgICAgIHRvQXJyYXk6IHRvQXJyYXksXG4gICAgICAgIHRvQm9vbGVhbjogdG9Cb29sZWFuLFxuICAgICAgICB0b0V2ZW50VGFyZ2V0czogdG9FdmVudFRhcmdldHMsXG4gICAgICAgIHRvRmxvYXQ6IHRvRmxvYXQsXG4gICAgICAgIHRvTm9kZTogdG9Ob2RlLFxuICAgICAgICB0b05vZGVzOiB0b05vZGVzLFxuICAgICAgICB0b051bWJlcjogdG9OdW1iZXIsXG4gICAgICAgIHRvUHg6IHRvUHgsXG4gICAgICAgIHRvV2luZG93OiB0b1dpbmRvdyxcbiAgICAgICAgdG9nZ2xlQ2xhc3M6IHRvZ2dsZUNsYXNzLFxuICAgICAgICB0cmlnZ2VyOiB0cmlnZ2VyLFxuICAgICAgICB1Y2ZpcnN0OiB1Y2ZpcnN0LFxuICAgICAgICB1bmlxdWVCeTogdW5pcXVlQnksXG4gICAgICAgIHVud3JhcDogdW53cmFwLFxuICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgIHdyYXBBbGw6IHdyYXBBbGwsXG4gICAgICAgIHdyYXBJbm5lcjogd3JhcElubmVyXG4gICAgfSk7XG5cbiAgICB2YXIgQ2xhc3MgPSB7XG4gICAgICBjb25uZWN0ZWQoKSB7XG4gICAgICAgIGFkZENsYXNzKHRoaXMuJGVsLCB0aGlzLiRvcHRpb25zLmlkKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdW5pdHMgPSBbXCJkYXlzXCIsIFwiaG91cnNcIiwgXCJtaW51dGVzXCIsIFwic2Vjb25kc1wiXTtcbiAgICB2YXIgY291bnRkb3duID0ge1xuICAgICAgbWl4aW5zOiBbQ2xhc3NdLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgZGF0ZTogU3RyaW5nLFxuICAgICAgICBjbHNXcmFwcGVyOiBTdHJpbmcsXG4gICAgICAgIHJvbGU6IFN0cmluZ1xuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZGF0ZTogXCJcIixcbiAgICAgICAgY2xzV3JhcHBlcjogXCIudWstY291bnRkb3duLSV1bml0JVwiLFxuICAgICAgICByb2xlOiBcInRpbWVyXCJcbiAgICAgIH0sXG4gICAgICBjb25uZWN0ZWQoKSB7XG4gICAgICAgIGF0dHIodGhpcy4kZWwsIFwicm9sZVwiLCB0aGlzLnJvbGUpO1xuICAgICAgICB0aGlzLmRhdGUgPSB0b0Zsb2F0KERhdGUucGFyc2UodGhpcy4kcHJvcHMuZGF0ZSkpO1xuICAgICAgICB0aGlzLmVuZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICB9LFxuICAgICAgZGlzY29ubmVjdGVkKCkge1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIH0sXG4gICAgICBldmVudHM6IHtcbiAgICAgICAgbmFtZTogXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsXG4gICAgICAgIGVsOiAoKSA9PiBkb2N1bWVudCxcbiAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICBpZiAoZG9jdW1lbnQuaGlkZGVuKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgc3RhcnQoKSB7XG4gICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICBpZiAoIXRoaXMudGltZXIpIHtcbiAgICAgICAgICAgIHRyaWdnZXIodGhpcy4kZWwsIFwiY291bnRkb3duc3RhcnRcIik7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy51cGRhdGUsIDFlMyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzdG9wKCkge1xuICAgICAgICAgIGlmICh0aGlzLnRpbWVyKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgICAgICAgICAgdHJpZ2dlcih0aGlzLiRlbCwgXCJjb3VudGRvd25zdG9wXCIpO1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB1cGRhdGUoKSB7XG4gICAgICAgICAgY29uc3QgdGltZXNwYW4gPSBnZXRUaW1lU3Bhbih0aGlzLmRhdGUpO1xuICAgICAgICAgIGlmICghdGltZXNwYW4udG90YWwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmVuZCkge1xuICAgICAgICAgICAgICB0cmlnZ2VyKHRoaXMuJGVsLCBcImNvdW50ZG93bmVuZFwiKTtcbiAgICAgICAgICAgICAgdGhpcy5lbmQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGNvbnN0IHVuaXQgb2YgdW5pdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsID0gJCh0aGlzLmNsc1dyYXBwZXIucmVwbGFjZShcIiV1bml0JVwiLCB1bml0KSwgdGhpcy4kZWwpO1xuICAgICAgICAgICAgaWYgKCFlbCkge1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkaWdpdHMgPSBNYXRoLnRydW5jKHRpbWVzcGFuW3VuaXRdKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICAgICAgICAgIGlmIChlbC50ZXh0Q29udGVudCAhPT0gZGlnaXRzKSB7XG4gICAgICAgICAgICAgIGRpZ2l0cyA9IGRpZ2l0cy5zcGxpdChcIlwiKTtcbiAgICAgICAgICAgICAgaWYgKGRpZ2l0cy5sZW5ndGggIT09IGVsLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGh0bWwoZWwsIGRpZ2l0cy5tYXAoKCkgPT4gXCI8c3Bhbj48L3NwYW4+XCIpLmpvaW4oXCJcIikpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpZ2l0cy5mb3JFYWNoKChkaWdpdCwgaSkgPT4gZWwuY2hpbGRyZW5baV0udGV4dENvbnRlbnQgPSBkaWdpdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBmdW5jdGlvbiBnZXRUaW1lU3BhbihkYXRlKSB7XG4gICAgICBjb25zdCB0b3RhbCA9IE1hdGgubWF4KDAsIGRhdGUgLSBEYXRlLm5vdygpKSAvIDFlMztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvdGFsLFxuICAgICAgICBzZWNvbmRzOiB0b3RhbCAlIDYwLFxuICAgICAgICBtaW51dGVzOiB0b3RhbCAvIDYwICUgNjAsXG4gICAgICAgIGhvdXJzOiB0b3RhbCAvIDYwIC8gNjAgJSAyNCxcbiAgICAgICAgZGF5czogdG90YWwgLyA2MCAvIDYwIC8gMjRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3Qgc3RyYXRzID0ge307XG4gICAgc3RyYXRzLmV2ZW50cyA9IHN0cmF0cy53YXRjaCA9IHN0cmF0cy5vYnNlcnZlID0gc3RyYXRzLmNyZWF0ZWQgPSBzdHJhdHMuYmVmb3JlQ29ubmVjdCA9IHN0cmF0cy5jb25uZWN0ZWQgPSBzdHJhdHMuYmVmb3JlRGlzY29ubmVjdCA9IHN0cmF0cy5kaXNjb25uZWN0ZWQgPSBzdHJhdHMuZGVzdHJveSA9IGNvbmNhdFN0cmF0O1xuICAgIHN0cmF0cy5hcmdzID0gZnVuY3Rpb24ocGFyZW50VmFsLCBjaGlsZFZhbCkge1xuICAgICAgcmV0dXJuIGNoaWxkVmFsICE9PSBmYWxzZSAmJiBjb25jYXRTdHJhdChjaGlsZFZhbCB8fCBwYXJlbnRWYWwpO1xuICAgIH07XG4gICAgc3RyYXRzLnVwZGF0ZSA9IGZ1bmN0aW9uKHBhcmVudFZhbCwgY2hpbGRWYWwpIHtcbiAgICAgIHJldHVybiBzb3J0QnkoXG4gICAgICAgIGNvbmNhdFN0cmF0KHBhcmVudFZhbCwgaXNGdW5jdGlvbihjaGlsZFZhbCkgPyB7IHJlYWQ6IGNoaWxkVmFsIH0gOiBjaGlsZFZhbCksXG4gICAgICAgIFwib3JkZXJcIlxuICAgICAgKTtcbiAgICB9O1xuICAgIHN0cmF0cy5wcm9wcyA9IGZ1bmN0aW9uKHBhcmVudFZhbCwgY2hpbGRWYWwpIHtcbiAgICAgIGlmIChpc0FycmF5KGNoaWxkVmFsKSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBjaGlsZFZhbCkge1xuICAgICAgICAgIHZhbHVlW2tleV0gPSBTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGRWYWwgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdHJhdHMubWV0aG9kcyhwYXJlbnRWYWwsIGNoaWxkVmFsKTtcbiAgICB9O1xuICAgIHN0cmF0cy5jb21wdXRlZCA9IHN0cmF0cy5tZXRob2RzID0gZnVuY3Rpb24ocGFyZW50VmFsLCBjaGlsZFZhbCkge1xuICAgICAgcmV0dXJuIGNoaWxkVmFsID8gcGFyZW50VmFsID8geyAuLi5wYXJlbnRWYWwsIC4uLmNoaWxkVmFsIH0gOiBjaGlsZFZhbCA6IHBhcmVudFZhbDtcbiAgICB9O1xuICAgIHN0cmF0cy5pMThuID0gc3RyYXRzLmRhdGEgPSBmdW5jdGlvbihwYXJlbnRWYWwsIGNoaWxkVmFsLCB2bSkge1xuICAgICAgaWYgKCF2bSkge1xuICAgICAgICBpZiAoIWNoaWxkVmFsKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFZhbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXBhcmVudFZhbCkge1xuICAgICAgICAgIHJldHVybiBjaGlsZFZhbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24odm0yKSB7XG4gICAgICAgICAgcmV0dXJuIG1lcmdlRm5EYXRhKHBhcmVudFZhbCwgY2hpbGRWYWwsIHZtMik7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gbWVyZ2VGbkRhdGEocGFyZW50VmFsLCBjaGlsZFZhbCwgdm0pO1xuICAgIH07XG4gICAgZnVuY3Rpb24gbWVyZ2VGbkRhdGEocGFyZW50VmFsLCBjaGlsZFZhbCwgdm0pIHtcbiAgICAgIHJldHVybiBzdHJhdHMuY29tcHV0ZWQoXG4gICAgICAgIGlzRnVuY3Rpb24ocGFyZW50VmFsKSA/IHBhcmVudFZhbC5jYWxsKHZtLCB2bSkgOiBwYXJlbnRWYWwsXG4gICAgICAgIGlzRnVuY3Rpb24oY2hpbGRWYWwpID8gY2hpbGRWYWwuY2FsbCh2bSwgdm0pIDogY2hpbGRWYWxcbiAgICAgICk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvbmNhdFN0cmF0KHBhcmVudFZhbCwgY2hpbGRWYWwpIHtcbiAgICAgIHBhcmVudFZhbCA9IHBhcmVudFZhbCAmJiAhaXNBcnJheShwYXJlbnRWYWwpID8gW3BhcmVudFZhbF0gOiBwYXJlbnRWYWw7XG4gICAgICByZXR1cm4gY2hpbGRWYWwgPyBwYXJlbnRWYWwgPyBwYXJlbnRWYWwuY29uY2F0KGNoaWxkVmFsKSA6IGlzQXJyYXkoY2hpbGRWYWwpID8gY2hpbGRWYWwgOiBbY2hpbGRWYWxdIDogcGFyZW50VmFsO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkZWZhdWx0U3RyYXQocGFyZW50VmFsLCBjaGlsZFZhbCkge1xuICAgICAgcmV0dXJuIGlzVW5kZWZpbmVkKGNoaWxkVmFsKSA/IHBhcmVudFZhbCA6IGNoaWxkVmFsO1xuICAgIH1cbiAgICBmdW5jdGlvbiBtZXJnZU9wdGlvbnMocGFyZW50LCBjaGlsZCwgdm0pIHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7fTtcbiAgICAgIGlmIChpc0Z1bmN0aW9uKGNoaWxkKSkge1xuICAgICAgICBjaGlsZCA9IGNoaWxkLm9wdGlvbnM7XG4gICAgICB9XG4gICAgICBpZiAoY2hpbGQuZXh0ZW5kcykge1xuICAgICAgICBwYXJlbnQgPSBtZXJnZU9wdGlvbnMocGFyZW50LCBjaGlsZC5leHRlbmRzLCB2bSk7XG4gICAgICB9XG4gICAgICBpZiAoY2hpbGQubWl4aW5zKSB7XG4gICAgICAgIGZvciAoY29uc3QgbWl4aW4gb2YgY2hpbGQubWl4aW5zKSB7XG4gICAgICAgICAgcGFyZW50ID0gbWVyZ2VPcHRpb25zKHBhcmVudCwgbWl4aW4sIHZtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gcGFyZW50KSB7XG4gICAgICAgIG1lcmdlS2V5KGtleSk7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGlsZCkge1xuICAgICAgICBpZiAoIWhhc093bihwYXJlbnQsIGtleSkpIHtcbiAgICAgICAgICBtZXJnZUtleShrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBtZXJnZUtleShrZXkpIHtcbiAgICAgICAgb3B0aW9uc1trZXldID0gKHN0cmF0c1trZXldIHx8IGRlZmF1bHRTdHJhdCkocGFyZW50W2tleV0sIGNoaWxkW2tleV0sIHZtKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwYXJzZU9wdGlvbnMob3B0aW9ucywgYXJncyA9IFtdKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gb3B0aW9ucyA/IHN0YXJ0c1dpdGgob3B0aW9ucywgXCJ7XCIpID8gSlNPTi5wYXJzZShvcHRpb25zKSA6IGFyZ3MubGVuZ3RoICYmICFpbmNsdWRlcyhvcHRpb25zLCBcIjpcIikgPyB7IFthcmdzWzBdXTogb3B0aW9ucyB9IDogb3B0aW9ucy5zcGxpdChcIjtcIikucmVkdWNlKChvcHRpb25zMiwgb3B0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gb3B0aW9uLnNwbGl0KC86KC4qKS8pO1xuICAgICAgICAgIGlmIChrZXkgJiYgIWlzVW5kZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICAgICAgb3B0aW9uczJba2V5LnRyaW0oKV0gPSB2YWx1ZS50cmltKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvcHRpb25zMjtcbiAgICAgICAgfSwge30pIDoge307XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY29lcmNlJDEodHlwZSwgdmFsdWUpIHtcbiAgICAgIGlmICh0eXBlID09PSBCb29sZWFuKSB7XG4gICAgICAgIHJldHVybiB0b0Jvb2xlYW4odmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBOdW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRvTnVtYmVyKHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJsaXN0XCIpIHtcbiAgICAgICAgcmV0dXJuIHRvTGlzdCh2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IE9iamVjdCAmJiBpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlT3B0aW9ucyh2YWx1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHlwZSA/IHR5cGUodmFsdWUpIDogdmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IGxpc3RSZSA9IC8sKD8hW14oXSpcXCkpLztcbiAgICBmdW5jdGlvbiB0b0xpc3QodmFsdWUpIHtcbiAgICAgIHJldHVybiBpc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQobGlzdFJlKS5tYXAoKHZhbHVlMikgPT4gaXNOdW1lcmljKHZhbHVlMikgPyB0b051bWJlcih2YWx1ZTIpIDogdG9Cb29sZWFuKHZhbHVlMi50cmltKCkpKSA6IFt2YWx1ZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdFVwZGF0ZXMoaW5zdGFuY2UpIHtcbiAgICAgIGluc3RhbmNlLl9kYXRhID0ge307XG4gICAgICBpbnN0YW5jZS5fdXBkYXRlcyA9IFsuLi5pbnN0YW5jZS4kb3B0aW9ucy51cGRhdGUgfHwgW11dO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwcmVwZW5kVXBkYXRlKGluc3RhbmNlLCB1cGRhdGUpIHtcbiAgICAgIGluc3RhbmNlLl91cGRhdGVzLnVuc2hpZnQodXBkYXRlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xlYXJVcGRhdGVEYXRhKGluc3RhbmNlKSB7XG4gICAgICBpbnN0YW5jZS5fZGF0YSA9IG51bGw7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNhbGxVcGRhdGUoaW5zdGFuY2UsIGUgPSBcInVwZGF0ZVwiKSB7XG4gICAgICBpZiAoIWluc3RhbmNlLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFpbnN0YW5jZS5fdXBkYXRlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFpbnN0YW5jZS5fcXVldWVkKSB7XG4gICAgICAgIGluc3RhbmNlLl9xdWV1ZWQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICAgICAgICBmYXN0ZG9tLnJlYWQoKCkgPT4ge1xuICAgICAgICAgIGlmIChpbnN0YW5jZS5fY29ubmVjdGVkKSB7XG4gICAgICAgICAgICBydW5VcGRhdGVzKGluc3RhbmNlLCBpbnN0YW5jZS5fcXVldWVkKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW5zdGFuY2UuX3F1ZXVlZCA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaW5zdGFuY2UuX3F1ZXVlZC5hZGQoZS50eXBlIHx8IGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBydW5VcGRhdGVzKGluc3RhbmNlLCB0eXBlcykge1xuICAgICAgZm9yIChjb25zdCB7IHJlYWQsIHdyaXRlLCBldmVudHMgPSBbXSB9IG9mIGluc3RhbmNlLl91cGRhdGVzKSB7XG4gICAgICAgIGlmICghdHlwZXMuaGFzKFwidXBkYXRlXCIpICYmICFldmVudHMuc29tZSgodHlwZSkgPT4gdHlwZXMuaGFzKHR5cGUpKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIGlmIChyZWFkKSB7XG4gICAgICAgICAgcmVzdWx0ID0gcmVhZC5jYWxsKGluc3RhbmNlLCBpbnN0YW5jZS5fZGF0YSwgdHlwZXMpO1xuICAgICAgICAgIGlmIChyZXN1bHQgJiYgaXNQbGFpbk9iamVjdChyZXN1bHQpKSB7XG4gICAgICAgICAgICBhc3NpZ24oaW5zdGFuY2UuX2RhdGEsIHJlc3VsdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh3cml0ZSAmJiByZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgZmFzdGRvbS53cml0ZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5zdGFuY2UuX2Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICB3cml0ZS5jYWxsKGluc3RhbmNlLCBpbnN0YW5jZS5fZGF0YSwgdHlwZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzaXplKG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBvYnNlcnZlKG9ic2VydmVSZXNpemUsIG9wdGlvbnMsIFwicmVzaXplXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpbnRlcnNlY3Rpb24ob3B0aW9ucykge1xuICAgICAgcmV0dXJuIG9ic2VydmUob2JzZXJ2ZUludGVyc2VjdGlvbiwgb3B0aW9ucyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG11dGF0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBvYnNlcnZlKG9ic2VydmVNdXRhdGlvbiwgb3B0aW9ucyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxhenlsb2FkKG9wdGlvbnMgPSB7fSkge1xuICAgICAgcmV0dXJuIGludGVyc2VjdGlvbih7XG4gICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKGVudHJpZXMsIG9ic2VydmVyKSB7XG4gICAgICAgICAgY29uc3QgeyB0YXJnZXRzID0gdGhpcy4kZWwsIHByZWxvYWQgPSA1IH0gPSBvcHRpb25zO1xuICAgICAgICAgIGZvciAoY29uc3QgZWwgb2YgdG9Ob2Rlcyhpc0Z1bmN0aW9uKHRhcmdldHMpID8gdGFyZ2V0cyh0aGlzKSA6IHRhcmdldHMpKSB7XG4gICAgICAgICAgICAkJCgnW2xvYWRpbmc9XCJsYXp5XCJdJywgZWwpLnNsaWNlKDAsIHByZWxvYWQgLSAxKS5mb3JFYWNoKChlbDIpID0+IHJlbW92ZUF0dHIoZWwyLCBcImxvYWRpbmdcIikpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGNvbnN0IGVsIG9mIGVudHJpZXMuZmlsdGVyKCh7IGlzSW50ZXJzZWN0aW5nIH0pID0+IGlzSW50ZXJzZWN0aW5nKS5tYXAoKHsgdGFyZ2V0IH0pID0+IHRhcmdldCkpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAuLi5vcHRpb25zXG4gICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdmlld3BvcnQob3B0aW9ucykge1xuICAgICAgcmV0dXJuIG9ic2VydmUoKHRhcmdldCwgaGFuZGxlcikgPT4gb2JzZXJ2ZVZpZXdwb3J0UmVzaXplKGhhbmRsZXIpLCBvcHRpb25zLCBcInJlc2l6ZVwiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2Nyb2xsJDEob3B0aW9ucykge1xuICAgICAgcmV0dXJuIG9ic2VydmUoXG4gICAgICAgICh0YXJnZXQsIGhhbmRsZXIpID0+ICh7XG4gICAgICAgICAgZGlzY29ubmVjdDogb24odG9TY3JvbGxUYXJnZXRzKHRhcmdldCksIFwic2Nyb2xsXCIsIGhhbmRsZXIsIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICAgICAgICB9KSxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgXCJzY3JvbGxcIlxuICAgICAgKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3dpcGUob3B0aW9ucykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb2JzZXJ2ZSh0YXJnZXQsIGhhbmRsZXIpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb2JzZXJ2ZTogbm9vcCxcbiAgICAgICAgICAgIHVub2JzZXJ2ZTogbm9vcCxcbiAgICAgICAgICAgIGRpc2Nvbm5lY3Q6IG9uKHRhcmdldCwgcG9pbnRlckRvd24kMSwgaGFuZGxlciwgeyBwYXNzaXZlOiB0cnVlIH0pXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlcihlKSB7XG4gICAgICAgICAgaWYgKCFpc1RvdWNoKGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHBvcyA9IGdldEV2ZW50UG9zKGUpO1xuICAgICAgICAgIGNvbnN0IHRhcmdldCA9IFwidGFnTmFtZVwiIGluIGUudGFyZ2V0ID8gZS50YXJnZXQgOiBwYXJlbnQoZS50YXJnZXQpO1xuICAgICAgICAgIG9uY2UoZG9jdW1lbnQsIGAke3BvaW50ZXJVcCQxfSAke3BvaW50ZXJDYW5jZWx9IHNjcm9sbGAsIChlMikgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBnZXRFdmVudFBvcyhlMik7XG4gICAgICAgICAgICBpZiAoZTIudHlwZSAhPT0gXCJzY3JvbGxcIiAmJiB0YXJnZXQgJiYgeCAmJiBNYXRoLmFicyhwb3MueCAtIHgpID4gMTAwIHx8IHkgJiYgTWF0aC5hYnMocG9zLnkgLSB5KSA+IDEwMCkge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyKHRhcmdldCwgXCJzd2lwZVwiKTtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyKHRhcmdldCwgYHN3aXBlJHtzd2lwZURpcmVjdGlvbihwb3MueCwgcG9zLnksIHgsIHkpfWApO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb2JzZXJ2ZShvYnNlcnZlMiwgb3B0aW9ucywgZW1pdCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb2JzZXJ2ZTogb2JzZXJ2ZTIsXG4gICAgICAgIGhhbmRsZXIoKSB7XG4gICAgICAgICAgY2FsbFVwZGF0ZSh0aGlzLCBlbWl0KTtcbiAgICAgICAgfSxcbiAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3dpcGVEaXJlY3Rpb24oeDEsIHkxLCB4MiwgeTIpIHtcbiAgICAgIHJldHVybiBNYXRoLmFicyh4MSAtIHgyKSA+PSBNYXRoLmFicyh5MSAtIHkyKSA/IHgxIC0geDIgPiAwID8gXCJMZWZ0XCIgOiBcIlJpZ2h0XCIgOiB5MSAtIHkyID4gMCA/IFwiVXBcIiA6IFwiRG93blwiO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0b1Njcm9sbFRhcmdldHMoZWxlbWVudHMpIHtcbiAgICAgIHJldHVybiB0b05vZGVzKGVsZW1lbnRzKS5tYXAoKG5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgeyBvd25lckRvY3VtZW50IH0gPSBub2RlO1xuICAgICAgICBjb25zdCBwYXJlbnQyID0gc2Nyb2xsUGFyZW50KG5vZGUsIHRydWUpO1xuICAgICAgICByZXR1cm4gcGFyZW50MiA9PT0gb3duZXJEb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50ID8gb3duZXJEb2N1bWVudCA6IHBhcmVudDI7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgTWFyZ2luID0ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgbWFyZ2luOiBTdHJpbmcsXG4gICAgICAgIGZpcnN0Q29sdW1uOiBCb29sZWFuXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBtYXJnaW46IFwidWstbWFyZ2luLXNtYWxsLXRvcFwiLFxuICAgICAgICBmaXJzdENvbHVtbjogXCJ1ay1maXJzdC1jb2x1bW5cIlxuICAgICAgfSxcbiAgICAgIG9ic2VydmU6IFtcbiAgICAgICAgbXV0YXRpb24oe1xuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIG11dGF0aW9uKHtcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgICAgYXR0cmlidXRlRmlsdGVyOiBbXCJzdHlsZVwiXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGFyZ2V0OiAoeyAkZWwgfSkgPT4gWyRlbCwgLi4uY2hpbGRyZW4oJGVsKV1cbiAgICAgICAgfSksXG4gICAgICAgIHJlc2l6ZSh7XG4gICAgICAgICAgdGFyZ2V0OiAoeyAkZWwgfSkgPT4gWyRlbCwgLi4uY2hpbGRyZW4oJGVsKV1cbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICB1cGRhdGU6IHtcbiAgICAgICAgcmVhZCgpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcm93czogZ2V0Um93cyhjaGlsZHJlbih0aGlzLiRlbCkpXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGUoeyByb3dzIH0pIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHJvdyBvZiByb3dzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsIG9mIHJvdykge1xuICAgICAgICAgICAgICB0b2dnbGVDbGFzcyhlbCwgdGhpcy5tYXJnaW4sIHJvd3NbMF0gIT09IHJvdyk7XG4gICAgICAgICAgICAgIHRvZ2dsZUNsYXNzKGVsLCB0aGlzLmZpcnN0Q29sdW1uLCByb3dbaXNSdGwgPyByb3cubGVuZ3RoIC0gMSA6IDBdID09PSBlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBldmVudHM6IFtcInJlc2l6ZVwiXVxuICAgICAgfVxuICAgIH07XG4gICAgZnVuY3Rpb24gZ2V0Um93cyhlbGVtZW50cykge1xuICAgICAgY29uc3Qgc29ydGVkID0gW1tdXTtcbiAgICAgIGNvbnN0IHdpdGhPZmZzZXQgPSBlbGVtZW50cy5zb21lKFxuICAgICAgICAoZWwsIGkpID0+IGkgJiYgZWxlbWVudHNbaSAtIDFdLm9mZnNldFBhcmVudCAhPT0gZWwub2Zmc2V0UGFyZW50XG4gICAgICApO1xuICAgICAgZm9yIChjb25zdCBlbCBvZiBlbGVtZW50cykge1xuICAgICAgICBpZiAoIWlzVmlzaWJsZShlbCkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvZmZzZXQgPSBnZXRPZmZzZXQoZWwsIHdpdGhPZmZzZXQpO1xuICAgICAgICBmb3IgKGxldCBpID0gc29ydGVkLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgY29uc3QgY3VycmVudCA9IHNvcnRlZFtpXTtcbiAgICAgICAgICBpZiAoIWN1cnJlbnRbMF0pIHtcbiAgICAgICAgICAgIGN1cnJlbnQucHVzaChlbCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qgb2Zmc2V0Q3VycmVudCA9IGdldE9mZnNldChjdXJyZW50WzBdLCB3aXRoT2Zmc2V0KTtcbiAgICAgICAgICBpZiAob2Zmc2V0LnRvcCA+PSBvZmZzZXRDdXJyZW50LmJvdHRvbSAtIDEgJiYgb2Zmc2V0LnRvcCAhPT0gb2Zmc2V0Q3VycmVudC50b3ApIHtcbiAgICAgICAgICAgIHNvcnRlZC5wdXNoKFtlbF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChvZmZzZXQuYm90dG9tIC0gMSA+IG9mZnNldEN1cnJlbnQudG9wIHx8IG9mZnNldC50b3AgPT09IG9mZnNldEN1cnJlbnQudG9wKSB7XG4gICAgICAgICAgICBsZXQgaiA9IGN1cnJlbnQubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGZvciAoOyBqID49IDA7IGotLSkge1xuICAgICAgICAgICAgICBjb25zdCBvZmZzZXRDdXJyZW50MiA9IGdldE9mZnNldChjdXJyZW50W2pdLCB3aXRoT2Zmc2V0KTtcbiAgICAgICAgICAgICAgaWYgKG9mZnNldC5sZWZ0ID49IG9mZnNldEN1cnJlbnQyLmxlZnQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudC5zcGxpY2UoaiArIDEsIDAsIGVsKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgc29ydGVkLnVuc2hpZnQoW2VsXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzb3J0ZWQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldE9mZnNldChlbGVtZW50LCBvZmZzZXQgPSBmYWxzZSkge1xuICAgICAgbGV0IHsgb2Zmc2V0VG9wLCBvZmZzZXRMZWZ0LCBvZmZzZXRIZWlnaHQsIG9mZnNldFdpZHRoIH0gPSBlbGVtZW50O1xuICAgICAgaWYgKG9mZnNldCkge1xuICAgICAgICBbb2Zmc2V0VG9wLCBvZmZzZXRMZWZ0XSA9IG9mZnNldFBvc2l0aW9uKGVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiBvZmZzZXRUb3AsXG4gICAgICAgIGxlZnQ6IG9mZnNldExlZnQsXG4gICAgICAgIGJvdHRvbTogb2Zmc2V0VG9wICsgb2Zmc2V0SGVpZ2h0LFxuICAgICAgICByaWdodDogb2Zmc2V0TGVmdCArIG9mZnNldFdpZHRoXG4gICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIHNsaWRlKGFjdGlvbiwgdGFyZ2V0LCBkdXJhdGlvbikge1xuICAgICAgYXdhaXQgYXdhaXRGcmFtZSgpO1xuICAgICAgbGV0IG5vZGVzID0gY2hpbGRyZW4odGFyZ2V0KTtcbiAgICAgIGNvbnN0IGN1cnJlbnRQcm9wcyA9IG5vZGVzLm1hcCgoZWwpID0+IGdldFByb3BzJDEoZWwsIHRydWUpKTtcbiAgICAgIGNvbnN0IHRhcmdldFByb3BzID0geyAuLi5jc3ModGFyZ2V0LCBbXCJoZWlnaHRcIiwgXCJwYWRkaW5nXCJdKSwgZGlzcGxheTogXCJibG9ja1wiIH07XG4gICAgICBjb25zdCB0YXJnZXRzID0gbm9kZXMuY29uY2F0KHRhcmdldCk7XG4gICAgICBhd2FpdCBQcm9taXNlLmFsbCh0YXJnZXRzLm1hcChUcmFuc2l0aW9uLmNhbmNlbCkpO1xuICAgICAgY3NzKHRhcmdldHMsIFwidHJhbnNpdGlvblByb3BlcnR5XCIsIFwibm9uZVwiKTtcbiAgICAgIGF3YWl0IGFjdGlvbigpO1xuICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQoY2hpbGRyZW4odGFyZ2V0KS5maWx0ZXIoKGVsKSA9PiAhaW5jbHVkZXMobm9kZXMsIGVsKSkpO1xuICAgICAgYXdhaXQgUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICBjc3ModGFyZ2V0cywgXCJ0cmFuc2l0aW9uUHJvcGVydHlcIiwgXCJcIik7XG4gICAgICBjb25zdCB0YXJnZXRTdHlsZSA9IGF0dHIodGFyZ2V0LCBcInN0eWxlXCIpO1xuICAgICAgY29uc3QgdGFyZ2V0UHJvcHNUbyA9IGNzcyh0YXJnZXQsIFtcImhlaWdodFwiLCBcInBhZGRpbmdcIl0pO1xuICAgICAgY29uc3QgW3Byb3BzVG8sIHByb3BzRnJvbV0gPSBnZXRUcmFuc2l0aW9uUHJvcHModGFyZ2V0LCBub2RlcywgY3VycmVudFByb3BzKTtcbiAgICAgIGNvbnN0IGF0dHJzVG8gPSBub2Rlcy5tYXAoKGVsKSA9PiAoeyBzdHlsZTogYXR0cihlbCwgXCJzdHlsZVwiKSB9KSk7XG4gICAgICBub2Rlcy5mb3JFYWNoKChlbCwgaSkgPT4gcHJvcHNGcm9tW2ldICYmIGNzcyhlbCwgcHJvcHNGcm9tW2ldKSk7XG4gICAgICBjc3ModGFyZ2V0LCB0YXJnZXRQcm9wcyk7XG4gICAgICB0cmlnZ2VyKHRhcmdldCwgXCJzY3JvbGxcIik7XG4gICAgICBhd2FpdCBhd2FpdEZyYW1lKCk7XG4gICAgICBjb25zdCB0cmFuc2l0aW9ucyA9IG5vZGVzLm1hcCgoZWwsIGkpID0+IHBhcmVudChlbCkgPT09IHRhcmdldCAmJiBUcmFuc2l0aW9uLnN0YXJ0KGVsLCBwcm9wc1RvW2ldLCBkdXJhdGlvbiwgXCJlYXNlXCIpKS5jb25jYXQoVHJhbnNpdGlvbi5zdGFydCh0YXJnZXQsIHRhcmdldFByb3BzVG8sIGR1cmF0aW9uLCBcImVhc2VcIikpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwodHJhbnNpdGlvbnMpO1xuICAgICAgICBub2Rlcy5mb3JFYWNoKChlbCwgaSkgPT4ge1xuICAgICAgICAgIGF0dHIoZWwsIGF0dHJzVG9baV0pO1xuICAgICAgICAgIGlmIChwYXJlbnQoZWwpID09PSB0YXJnZXQpIHtcbiAgICAgICAgICAgIGNzcyhlbCwgXCJkaXNwbGF5XCIsIHByb3BzVG9baV0ub3BhY2l0eSA9PT0gMCA/IFwibm9uZVwiIDogXCJcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYXR0cih0YXJnZXQsIFwic3R5bGVcIiwgdGFyZ2V0U3R5bGUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBhdHRyKG5vZGVzLCBcInN0eWxlXCIsIFwiXCIpO1xuICAgICAgICByZXNldFByb3BzKHRhcmdldCwgdGFyZ2V0UHJvcHMpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRQcm9wcyQxKGVsLCBvcGFjaXR5KSB7XG4gICAgICBjb25zdCB6SW5kZXggPSBjc3MoZWwsIFwiekluZGV4XCIpO1xuICAgICAgcmV0dXJuIGlzVmlzaWJsZShlbCkgPyB7XG4gICAgICAgIGRpc3BsYXk6IFwiXCIsXG4gICAgICAgIG9wYWNpdHk6IG9wYWNpdHkgPyBjc3MoZWwsIFwib3BhY2l0eVwiKSA6IFwiMFwiLFxuICAgICAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgekluZGV4OiB6SW5kZXggPT09IFwiYXV0b1wiID8gaW5kZXgoZWwpIDogekluZGV4LFxuICAgICAgICAuLi5nZXRQb3NpdGlvbldpdGhNYXJnaW4oZWwpXG4gICAgICB9IDogZmFsc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFRyYW5zaXRpb25Qcm9wcyh0YXJnZXQsIG5vZGVzLCBjdXJyZW50UHJvcHMpIHtcbiAgICAgIGNvbnN0IHByb3BzVG8gPSBub2Rlcy5tYXAoXG4gICAgICAgIChlbCwgaSkgPT4gcGFyZW50KGVsKSAmJiBpIGluIGN1cnJlbnRQcm9wcyA/IGN1cnJlbnRQcm9wc1tpXSA/IGlzVmlzaWJsZShlbCkgPyBnZXRQb3NpdGlvbldpdGhNYXJnaW4oZWwpIDogeyBvcGFjaXR5OiAwIH0gOiB7IG9wYWNpdHk6IGlzVmlzaWJsZShlbCkgPyAxIDogMCB9IDogZmFsc2VcbiAgICAgICk7XG4gICAgICBjb25zdCBwcm9wc0Zyb20gPSBwcm9wc1RvLm1hcCgocHJvcHMsIGkpID0+IHtcbiAgICAgICAgY29uc3QgZnJvbSA9IHBhcmVudChub2Rlc1tpXSkgPT09IHRhcmdldCAmJiAoY3VycmVudFByb3BzW2ldIHx8IGdldFByb3BzJDEobm9kZXNbaV0pKTtcbiAgICAgICAgaWYgKCFmcm9tKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgICBkZWxldGUgZnJvbS5vcGFjaXR5O1xuICAgICAgICB9IGVsc2UgaWYgKCEoXCJvcGFjaXR5XCIgaW4gcHJvcHMpKSB7XG4gICAgICAgICAgY29uc3QgeyBvcGFjaXR5IH0gPSBmcm9tO1xuICAgICAgICAgIGlmIChvcGFjaXR5ICUgMSkge1xuICAgICAgICAgICAgcHJvcHMub3BhY2l0eSA9IDE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBmcm9tLm9wYWNpdHk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmcm9tO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gW3Byb3BzVG8sIHByb3BzRnJvbV07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlc2V0UHJvcHMoZWwsIHByb3BzKSB7XG4gICAgICBmb3IgKGNvbnN0IHByb3AgaW4gcHJvcHMpIHtcbiAgICAgICAgY3NzKGVsLCBwcm9wLCBcIlwiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0UG9zaXRpb25XaXRoTWFyZ2luKGVsKSB7XG4gICAgICBjb25zdCB7IGhlaWdodCwgd2lkdGggfSA9IGRpbWVuc2lvbnMkMShlbCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICB0cmFuc2Zvcm06IFwiXCIsXG4gICAgICAgIC4uLnBvc2l0aW9uKGVsKSxcbiAgICAgICAgLi4uY3NzKGVsLCBbXCJtYXJnaW5Ub3BcIiwgXCJtYXJnaW5MZWZ0XCJdKVxuICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXdhaXRGcmFtZSgpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlc29sdmUpKTtcbiAgICB9XG5cbiAgICBjb25zdCBjbHNMZWF2ZSA9IFwidWstdHJhbnNpdGlvbi1sZWF2ZVwiO1xuICAgIGNvbnN0IGNsc0VudGVyID0gXCJ1ay10cmFuc2l0aW9uLWVudGVyXCI7XG4gICAgZnVuY3Rpb24gZmFkZShhY3Rpb24sIHRhcmdldCwgZHVyYXRpb24sIHN0YWdnZXIgPSAwKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRyYW5zaXRpb25JbmRleCh0YXJnZXQsIHRydWUpO1xuICAgICAgY29uc3QgcHJvcHNJbiA9IHsgb3BhY2l0eTogMSB9O1xuICAgICAgY29uc3QgcHJvcHNPdXQgPSB7IG9wYWNpdHk6IDAgfTtcbiAgICAgIGNvbnN0IHdyYXBJbmRleEZuID0gKGZuKSA9PiAoKSA9PiBpbmRleCA9PT0gdHJhbnNpdGlvbkluZGV4KHRhcmdldCkgPyBmbigpIDogUHJvbWlzZS5yZWplY3QoKTtcbiAgICAgIGNvbnN0IGxlYXZlRm4gPSB3cmFwSW5kZXhGbihhc3luYyAoKSA9PiB7XG4gICAgICAgIGFkZENsYXNzKHRhcmdldCwgY2xzTGVhdmUpO1xuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICBnZXRUcmFuc2l0aW9uTm9kZXModGFyZ2V0KS5tYXAoXG4gICAgICAgICAgICAoY2hpbGQsIGkpID0+IG5ldyBQcm9taXNlKFxuICAgICAgICAgICAgICAocmVzb2x2ZSkgPT4gc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICAoKSA9PiBUcmFuc2l0aW9uLnN0YXJ0KGNoaWxkLCBwcm9wc091dCwgZHVyYXRpb24gLyAyLCBcImVhc2VcIikudGhlbihcbiAgICAgICAgICAgICAgICAgIHJlc29sdmVcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGkgKiBzdGFnZ2VyXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIHJlbW92ZUNsYXNzKHRhcmdldCwgY2xzTGVhdmUpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBlbnRlckZuID0gd3JhcEluZGV4Rm4oYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBvbGRIZWlnaHQgPSBoZWlnaHQodGFyZ2V0KTtcbiAgICAgICAgYWRkQ2xhc3ModGFyZ2V0LCBjbHNFbnRlcik7XG4gICAgICAgIGFjdGlvbigpO1xuICAgICAgICBjc3MoY2hpbGRyZW4odGFyZ2V0KSwgeyBvcGFjaXR5OiAwIH0pO1xuICAgICAgICBhd2FpdCBhd2FpdEZyYW1lKCk7XG4gICAgICAgIGNvbnN0IG5vZGVzID0gY2hpbGRyZW4odGFyZ2V0KTtcbiAgICAgICAgY29uc3QgbmV3SGVpZ2h0ID0gaGVpZ2h0KHRhcmdldCk7XG4gICAgICAgIGNzcyh0YXJnZXQsIFwiYWxpZ25Db250ZW50XCIsIFwiZmxleC1zdGFydFwiKTtcbiAgICAgICAgaGVpZ2h0KHRhcmdldCwgb2xkSGVpZ2h0KTtcbiAgICAgICAgY29uc3QgdHJhbnNpdGlvbk5vZGVzID0gZ2V0VHJhbnNpdGlvbk5vZGVzKHRhcmdldCk7XG4gICAgICAgIGNzcyhub2RlcywgcHJvcHNPdXQpO1xuICAgICAgICBjb25zdCB0cmFuc2l0aW9ucyA9IHRyYW5zaXRpb25Ob2Rlcy5tYXAoYXN5bmMgKGNoaWxkLCBpKSA9PiB7XG4gICAgICAgICAgYXdhaXQgYXdhaXRUaW1lb3V0KGkgKiBzdGFnZ2VyKTtcbiAgICAgICAgICBhd2FpdCBUcmFuc2l0aW9uLnN0YXJ0KGNoaWxkLCBwcm9wc0luLCBkdXJhdGlvbiAvIDIsIFwiZWFzZVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChvbGRIZWlnaHQgIT09IG5ld0hlaWdodCkge1xuICAgICAgICAgIHRyYW5zaXRpb25zLnB1c2goXG4gICAgICAgICAgICBUcmFuc2l0aW9uLnN0YXJ0KFxuICAgICAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAgICAgIHsgaGVpZ2h0OiBuZXdIZWlnaHQgfSxcbiAgICAgICAgICAgICAgZHVyYXRpb24gLyAyICsgdHJhbnNpdGlvbk5vZGVzLmxlbmd0aCAqIHN0YWdnZXIsXG4gICAgICAgICAgICAgIFwiZWFzZVwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbCh0cmFuc2l0aW9ucykudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVtb3ZlQ2xhc3ModGFyZ2V0LCBjbHNFbnRlcik7XG4gICAgICAgICAgaWYgKGluZGV4ID09PSB0cmFuc2l0aW9uSW5kZXgodGFyZ2V0KSkge1xuICAgICAgICAgICAgY3NzKHRhcmdldCwgeyBoZWlnaHQ6IFwiXCIsIGFsaWduQ29udGVudDogXCJcIiB9KTtcbiAgICAgICAgICAgIGNzcyhub2RlcywgeyBvcGFjaXR5OiBcIlwiIH0pO1xuICAgICAgICAgICAgZGVsZXRlIHRhcmdldC5kYXRhc2V0LnRyYW5zaXRpb247XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGhhc0NsYXNzKHRhcmdldCwgY2xzTGVhdmUpID8gd2FpdFRyYW5zaXRpb25lbmQodGFyZ2V0KS50aGVuKGVudGVyRm4pIDogaGFzQ2xhc3ModGFyZ2V0LCBjbHNFbnRlcikgPyB3YWl0VHJhbnNpdGlvbmVuZCh0YXJnZXQpLnRoZW4obGVhdmVGbikudGhlbihlbnRlckZuKSA6IGxlYXZlRm4oKS50aGVuKGVudGVyRm4pO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0cmFuc2l0aW9uSW5kZXgodGFyZ2V0LCBuZXh0KSB7XG4gICAgICBpZiAobmV4dCkge1xuICAgICAgICB0YXJnZXQuZGF0YXNldC50cmFuc2l0aW9uID0gMSArIHRyYW5zaXRpb25JbmRleCh0YXJnZXQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRvTnVtYmVyKHRhcmdldC5kYXRhc2V0LnRyYW5zaXRpb24pIHx8IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHdhaXRUcmFuc2l0aW9uZW5kKHRhcmdldCkge1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFxuICAgICAgICBjaGlsZHJlbih0YXJnZXQpLmZpbHRlcihUcmFuc2l0aW9uLmluUHJvZ3Jlc3MpLm1hcChcbiAgICAgICAgICAoZWwpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBvbmNlKGVsLCBcInRyYW5zaXRpb25lbmQgdHJhbnNpdGlvbmNhbmNlbGVkXCIsIHJlc29sdmUpKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRUcmFuc2l0aW9uTm9kZXModGFyZ2V0KSB7XG4gICAgICByZXR1cm4gZ2V0Um93cyhjaGlsZHJlbih0YXJnZXQpKS5mbGF0KCkuZmlsdGVyKGlzVmlzaWJsZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF3YWl0VGltZW91dCh0aW1lb3V0KSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZW91dCkpO1xuICAgIH1cblxuICAgIHZhciBBbmltYXRlID0ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgZHVyYXRpb246IE51bWJlcixcbiAgICAgICAgYW5pbWF0aW9uOiBCb29sZWFuXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBkdXJhdGlvbjogMTUwLFxuICAgICAgICBhbmltYXRpb246IFwic2xpZGVcIlxuICAgICAgfSxcbiAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgYW5pbWF0ZShhY3Rpb24sIHRhcmdldCA9IHRoaXMuJGVsKSB7XG4gICAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuYW5pbWF0aW9uO1xuICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkZuID0gbmFtZSA9PT0gXCJmYWRlXCIgPyBmYWRlIDogbmFtZSA9PT0gXCJkZWxheWVkLWZhZGVcIiA/ICguLi5hcmdzKSA9PiBmYWRlKC4uLmFyZ3MsIDQwKSA6IG5hbWUgPyBzbGlkZSA6ICgpID0+IHtcbiAgICAgICAgICAgIGFjdGlvbigpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIGFuaW1hdGlvbkZuKGFjdGlvbiwgdGFyZ2V0LCB0aGlzLmR1cmF0aW9uKS5jYXRjaChub29wKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBrZXlNYXAgPSB7XG4gICAgICBUQUI6IDksXG4gICAgICBFU0M6IDI3LFxuICAgICAgU1BBQ0U6IDMyLFxuICAgICAgRU5EOiAzNSxcbiAgICAgIEhPTUU6IDM2LFxuICAgICAgTEVGVDogMzcsXG4gICAgICBVUDogMzgsXG4gICAgICBSSUdIVDogMzksXG4gICAgICBET1dOOiA0MFxuICAgIH07XG5cbiAgICB2YXIgZmlsdGVyID0ge1xuICAgICAgbWl4aW5zOiBbQW5pbWF0ZV0sXG4gICAgICBhcmdzOiBcInRhcmdldFwiLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgdGFyZ2V0OiBTdHJpbmcsXG4gICAgICAgIHNlbEFjdGl2ZTogQm9vbGVhblxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGFyZ2V0OiBcIlwiLFxuICAgICAgICBzZWxBY3RpdmU6IGZhbHNlLFxuICAgICAgICBhdHRySXRlbTogXCJ1ay1maWx0ZXItY29udHJvbFwiLFxuICAgICAgICBjbHM6IFwidWstYWN0aXZlXCIsXG4gICAgICAgIGR1cmF0aW9uOiAyNTBcbiAgICAgIH0sXG4gICAgICBjb21wdXRlZDoge1xuICAgICAgICBjaGlsZHJlbjogKHsgdGFyZ2V0IH0sICRlbCkgPT4gJCQoYCR7dGFyZ2V0fSA+ICpgLCAkZWwpLFxuICAgICAgICB0b2dnbGVzOiAoeyBhdHRySXRlbSB9LCAkZWwpID0+ICQkKGBbJHthdHRySXRlbX1dLFtkYXRhLSR7YXR0ckl0ZW19XWAsICRlbClcbiAgICAgIH0sXG4gICAgICB3YXRjaDoge1xuICAgICAgICB0b2dnbGVzKHRvZ2dsZXMpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICAgICAgY29uc3QgYWN0aXZlcyA9ICQkKHRoaXMuc2VsQWN0aXZlLCB0aGlzLiRlbCk7XG4gICAgICAgICAgZm9yIChjb25zdCB0b2dnbGUgb2YgdG9nZ2xlcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsQWN0aXZlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICB0b2dnbGVDbGFzcyh0b2dnbGUsIHRoaXMuY2xzLCBpbmNsdWRlcyhhY3RpdmVzLCB0b2dnbGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGZpbmRCdXR0b24odG9nZ2xlKTtcbiAgICAgICAgICAgIGlmIChpc1RhZyhidXR0b24sIFwiYVwiKSkge1xuICAgICAgICAgICAgICBhdHRyKGJ1dHRvbiwgXCJyb2xlXCIsIFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW4obGlzdCwgcHJldikge1xuICAgICAgICAgIGlmIChwcmV2KSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXZlbnRzOiB7XG4gICAgICAgIG5hbWU6IFwiY2xpY2sga2V5ZG93blwiLFxuICAgICAgICBkZWxlZ2F0ZTogKHsgYXR0ckl0ZW0gfSkgPT4gYFske2F0dHJJdGVtfV0sW2RhdGEtJHthdHRySXRlbX1dYCxcbiAgICAgICAgaGFuZGxlcihlKSB7XG4gICAgICAgICAgaWYgKGUudHlwZSA9PT0gXCJrZXlkb3duXCIgJiYgZS5rZXlDb2RlICE9PSBrZXlNYXAuU1BBQ0UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCJhLGJ1dHRvblwiKSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5hcHBseShlLmN1cnJlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgYXBwbHkoZWwpIHtcbiAgICAgICAgICBjb25zdCBwcmV2U3RhdGUgPSB0aGlzLmdldFN0YXRlKCk7XG4gICAgICAgICAgY29uc3QgbmV3U3RhdGUgPSBtZXJnZVN0YXRlKGVsLCB0aGlzLmF0dHJJdGVtLCB0aGlzLmdldFN0YXRlKCkpO1xuICAgICAgICAgIGlmICghaXNFcXVhbFN0YXRlKHByZXZTdGF0ZSwgbmV3U3RhdGUpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdldFN0YXRlKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnRvZ2dsZXMuZmlsdGVyKChpdGVtKSA9PiBoYXNDbGFzcyhpdGVtLCB0aGlzLmNscykpLnJlZHVjZSgoc3RhdGUsIGVsKSA9PiBtZXJnZVN0YXRlKGVsLCB0aGlzLmF0dHJJdGVtLCBzdGF0ZSksIHtcbiAgICAgICAgICAgIGZpbHRlcjogeyBcIlwiOiBcIlwiIH0sXG4gICAgICAgICAgICBzb3J0OiBbXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyBzZXRTdGF0ZShzdGF0ZSwgYW5pbWF0ZSA9IHRydWUpIHtcbiAgICAgICAgICBzdGF0ZSA9IHsgZmlsdGVyOiB7IFwiXCI6IFwiXCIgfSwgc29ydDogW10sIC4uLnN0YXRlIH07XG4gICAgICAgICAgdHJpZ2dlcih0aGlzLiRlbCwgXCJiZWZvcmVGaWx0ZXJcIiwgW3RoaXMsIHN0YXRlXSk7XG4gICAgICAgICAgZm9yIChjb25zdCB0b2dnbGUgb2YgdGhpcy50b2dnbGVzKSB7XG4gICAgICAgICAgICB0b2dnbGVDbGFzcyh0b2dnbGUsIHRoaXMuY2xzLCBtYXRjaEZpbHRlcih0b2dnbGUsIHRoaXMuYXR0ckl0ZW0sIHN0YXRlKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICAgICAgJCQodGhpcy50YXJnZXQsIHRoaXMuJGVsKS5tYXAoKHRhcmdldCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJGbiA9ICgpID0+IGFwcGx5U3RhdGUoc3RhdGUsIHRhcmdldCwgY2hpbGRyZW4odGFyZ2V0KSk7XG4gICAgICAgICAgICAgIHJldHVybiBhbmltYXRlID8gdGhpcy5hbmltYXRlKGZpbHRlckZuLCB0YXJnZXQpIDogZmlsdGVyRm4oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0cmlnZ2VyKHRoaXMuJGVsLCBcImFmdGVyRmlsdGVyXCIsIFt0aGlzXSk7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZVN0YXRlKCkge1xuICAgICAgICAgIGZhc3Rkb20ud3JpdGUoKCkgPT4gdGhpcy5zZXRTdGF0ZSh0aGlzLmdldFN0YXRlKCksIGZhbHNlKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGZ1bmN0aW9uIGdldEZpbHRlcihlbCwgYXR0cjIpIHtcbiAgICAgIHJldHVybiBwYXJzZU9wdGlvbnMoZGF0YShlbCwgYXR0cjIpLCBbXCJmaWx0ZXJcIl0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0VxdWFsU3RhdGUoc3RhdGVBLCBzdGF0ZUIpIHtcbiAgICAgIHJldHVybiBbXCJmaWx0ZXJcIiwgXCJzb3J0XCJdLmV2ZXJ5KChwcm9wKSA9PiBpc0VxdWFsKHN0YXRlQVtwcm9wXSwgc3RhdGVCW3Byb3BdKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFwcGx5U3RhdGUoc3RhdGUsIHRhcmdldCwgY2hpbGRyZW4pIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gT2JqZWN0LnZhbHVlcyhzdGF0ZS5maWx0ZXIpLmpvaW4oXCJcIik7XG4gICAgICBmb3IgKGNvbnN0IGVsIG9mIGNoaWxkcmVuKSB7XG4gICAgICAgIGNzcyhlbCwgXCJkaXNwbGF5XCIsIHNlbGVjdG9yICYmICFtYXRjaGVzKGVsLCBzZWxlY3RvcikgPyBcIm5vbmVcIiA6IFwiXCIpO1xuICAgICAgfVxuICAgICAgY29uc3QgW3NvcnQsIG9yZGVyXSA9IHN0YXRlLnNvcnQ7XG4gICAgICBpZiAoc29ydCkge1xuICAgICAgICBjb25zdCBzb3J0ZWQgPSBzb3J0SXRlbXMoY2hpbGRyZW4sIHNvcnQsIG9yZGVyKTtcbiAgICAgICAgaWYgKCFpc0VxdWFsKHNvcnRlZCwgY2hpbGRyZW4pKSB7XG4gICAgICAgICAgYXBwZW5kKHRhcmdldCwgc29ydGVkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBtZXJnZVN0YXRlKGVsLCBhdHRyMiwgc3RhdGUpIHtcbiAgICAgIGNvbnN0IHsgZmlsdGVyLCBncm91cCwgc29ydCwgb3JkZXIgPSBcImFzY1wiIH0gPSBnZXRGaWx0ZXIoZWwsIGF0dHIyKTtcbiAgICAgIGlmIChmaWx0ZXIgfHwgaXNVbmRlZmluZWQoc29ydCkpIHtcbiAgICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgICAgaWYgKGZpbHRlcikge1xuICAgICAgICAgICAgZGVsZXRlIHN0YXRlLmZpbHRlcltcIlwiXTtcbiAgICAgICAgICAgIHN0YXRlLmZpbHRlcltncm91cF0gPSBmaWx0ZXI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzdGF0ZS5maWx0ZXJbZ3JvdXBdO1xuICAgICAgICAgICAgaWYgKGlzRW1wdHkoc3RhdGUuZmlsdGVyKSB8fCBcIlwiIGluIHN0YXRlLmZpbHRlcikge1xuICAgICAgICAgICAgICBzdGF0ZS5maWx0ZXIgPSB7IFwiXCI6IGZpbHRlciB8fCBcIlwiIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXRlLmZpbHRlciA9IHsgXCJcIjogZmlsdGVyIHx8IFwiXCIgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFpc1VuZGVmaW5lZChzb3J0KSkge1xuICAgICAgICBzdGF0ZS5zb3J0ID0gW3NvcnQsIG9yZGVyXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbWF0Y2hGaWx0ZXIoZWwsIGF0dHIyLCB7IGZpbHRlcjogc3RhdGVGaWx0ZXIgPSB7IFwiXCI6IFwiXCIgfSwgc29ydDogW3N0YXRlU29ydCwgc3RhdGVPcmRlcl0gfSkge1xuICAgICAgY29uc3QgeyBmaWx0ZXIgPSBcIlwiLCBncm91cCA9IFwiXCIsIHNvcnQsIG9yZGVyID0gXCJhc2NcIiB9ID0gZ2V0RmlsdGVyKGVsLCBhdHRyMik7XG4gICAgICByZXR1cm4gaXNVbmRlZmluZWQoc29ydCkgPyBncm91cCBpbiBzdGF0ZUZpbHRlciAmJiBmaWx0ZXIgPT09IHN0YXRlRmlsdGVyW2dyb3VwXSB8fCAhZmlsdGVyICYmIGdyb3VwICYmICEoZ3JvdXAgaW4gc3RhdGVGaWx0ZXIpICYmICFzdGF0ZUZpbHRlcltcIlwiXSA6IHN0YXRlU29ydCA9PT0gc29ydCAmJiBzdGF0ZU9yZGVyID09PSBvcmRlcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gc29ydEl0ZW1zKG5vZGVzLCBzb3J0LCBvcmRlcikge1xuICAgICAgcmV0dXJuIFsuLi5ub2Rlc10uc29ydChcbiAgICAgICAgKGEsIGIpID0+IGRhdGEoYSwgc29ydCkubG9jYWxlQ29tcGFyZShkYXRhKGIsIHNvcnQpLCB2b2lkIDAsIHsgbnVtZXJpYzogdHJ1ZSB9KSAqIChvcmRlciA9PT0gXCJhc2NcIiB8fCAtMSlcbiAgICAgICk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZpbmRCdXR0b24oZWwpIHtcbiAgICAgIHJldHVybiAkKFwiYSxidXR0b25cIiwgZWwpIHx8IGVsO1xuICAgIH1cblxuICAgIGxldCBwcmV2ZW50ZWQ7XG4gICAgZnVuY3Rpb24gcHJldmVudEJhY2tncm91bmRTY3JvbGwoZWwpIHtcbiAgICAgIGNvbnN0IG9mZiA9IG9uKFxuICAgICAgICBlbCxcbiAgICAgICAgXCJ0b3VjaHN0YXJ0XCIsXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggIT09IDEgfHwgbWF0Y2hlcyhlLnRhcmdldCwgJ2lucHV0W3R5cGU9XCJyYW5nZVwiJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHByZXYgPSBnZXRFdmVudFBvcyhlKS55O1xuICAgICAgICAgIGNvbnN0IG9mZk1vdmUgPSBvbihcbiAgICAgICAgICAgIGVsLFxuICAgICAgICAgICAgXCJ0b3VjaG1vdmVcIixcbiAgICAgICAgICAgIChlMikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwb3MgPSBnZXRFdmVudFBvcyhlMikueTtcbiAgICAgICAgICAgICAgaWYgKHBvcyA9PT0gcHJldikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBwcmV2ID0gcG9zO1xuICAgICAgICAgICAgICBpZiAoIXNjcm9sbFBhcmVudHMoZTIudGFyZ2V0KS5zb21lKChzY3JvbGxQYXJlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWVsLmNvbnRhaW5zKHNjcm9sbFBhcmVudCkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHsgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQgfSA9IHNjcm9sbFBhcmVudDtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2xpZW50SGVpZ2h0IDwgc2Nyb2xsSGVpZ2h0O1xuICAgICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICAgIGUyLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHBhc3NpdmU6IGZhbHNlIH1cbiAgICAgICAgICApO1xuICAgICAgICAgIG9uY2UoZWwsIFwic2Nyb2xsIHRvdWNoZW5kIHRvdWNoY2FuZWxcIiwgb2ZmTW92ZSwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgICAgICB9LFxuICAgICAgICB7IHBhc3NpdmU6IHRydWUgfVxuICAgICAgKTtcbiAgICAgIGlmIChwcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuIG9mZjtcbiAgICAgIH1cbiAgICAgIHByZXZlbnRlZCA9IHRydWU7XG4gICAgICBjb25zdCB7IHNjcm9sbGluZ0VsZW1lbnQgfSA9IGRvY3VtZW50O1xuICAgICAgY3NzKHNjcm9sbGluZ0VsZW1lbnQsIHtcbiAgICAgICAgb3ZlcmZsb3dZOiBDU1Muc3VwcG9ydHMoXCJvdmVyZmxvd1wiLCBcImNsaXBcIikgPyBcImNsaXBcIiA6IFwiaGlkZGVuXCIsXG4gICAgICAgIHRvdWNoQWN0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiB3aWR0aCh3aW5kb3cpIC0gc2Nyb2xsaW5nRWxlbWVudC5jbGllbnRXaWR0aCB8fCBcIlwiXG4gICAgICB9KTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHByZXZlbnRlZCA9IGZhbHNlO1xuICAgICAgICBvZmYoKTtcbiAgICAgICAgY3NzKHNjcm9sbGluZ0VsZW1lbnQsIHsgb3ZlcmZsb3dZOiBcIlwiLCB0b3VjaEFjdGlvbjogXCJcIiwgcGFkZGluZ1JpZ2h0OiBcIlwiIH0pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgQ29udGFpbmVyID0ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgY29udGFpbmVyOiBCb29sZWFuXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb250YWluZXI6IHRydWVcbiAgICAgIH0sXG4gICAgICBjb21wdXRlZDoge1xuICAgICAgICBjb250YWluZXIoeyBjb250YWluZXIgfSkge1xuICAgICAgICAgIHJldHVybiBjb250YWluZXIgPT09IHRydWUgJiYgdGhpcy4kY29udGFpbmVyIHx8IGNvbnRhaW5lciAmJiAkKGNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIFRvZ2dsYWJsZSA9IHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGNsczogQm9vbGVhbixcbiAgICAgICAgYW5pbWF0aW9uOiBcImxpc3RcIixcbiAgICAgICAgZHVyYXRpb246IE51bWJlcixcbiAgICAgICAgdmVsb2NpdHk6IE51bWJlcixcbiAgICAgICAgb3JpZ2luOiBTdHJpbmcsXG4gICAgICAgIHRyYW5zaXRpb246IFN0cmluZ1xuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY2xzOiBmYWxzZSxcbiAgICAgICAgYW5pbWF0aW9uOiBbZmFsc2VdLFxuICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICB2ZWxvY2l0eTogMC4yLFxuICAgICAgICBvcmlnaW46IGZhbHNlLFxuICAgICAgICB0cmFuc2l0aW9uOiBcImVhc2VcIixcbiAgICAgICAgY2xzRW50ZXI6IFwidWstdG9nZ2xhYmxlLWVudGVyXCIsXG4gICAgICAgIGNsc0xlYXZlOiBcInVrLXRvZ2dsYWJsZS1sZWF2ZVwiXG4gICAgICB9LFxuICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgaGFzQW5pbWF0aW9uOiAoeyBhbmltYXRpb24gfSkgPT4gISFhbmltYXRpb25bMF0sXG4gICAgICAgIGhhc1RyYW5zaXRpb246ICh7IGFuaW1hdGlvbiB9KSA9PiBbXCJzbGlkZVwiLCBcInJldmVhbFwiXS5zb21lKCh0cmFuc2l0aW9uKSA9PiBzdGFydHNXaXRoKGFuaW1hdGlvblswXSwgdHJhbnNpdGlvbikpXG4gICAgICB9LFxuICAgICAgbWV0aG9kczoge1xuICAgICAgICBhc3luYyB0b2dnbGVFbGVtZW50KHRhcmdldHMsIHRvZ2dsZSwgYW5pbWF0ZSkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICAgICAgdG9Ob2Rlcyh0YXJnZXRzKS5tYXAoKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvdyA9IGlzQm9vbGVhbih0b2dnbGUpID8gdG9nZ2xlIDogIXRoaXMuaXNUb2dnbGVkKGVsKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRyaWdnZXIoZWwsIGBiZWZvcmUke3Nob3cgPyBcInNob3dcIiA6IFwiaGlkZVwifWAsIFt0aGlzXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlID0gKGlzRnVuY3Rpb24oYW5pbWF0ZSkgPyBhbmltYXRlIDogYW5pbWF0ZSA9PT0gZmFsc2UgfHwgIXRoaXMuaGFzQW5pbWF0aW9uID8gdG9nZ2xlSW5zdGFudCA6IHRoaXMuaGFzVHJhbnNpdGlvbiA/IHRvZ2dsZVRyYW5zaXRpb24gOiB0b2dnbGVBbmltYXRpb24pKGVsLCBzaG93LCB0aGlzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjbHMgPSBzaG93ID8gdGhpcy5jbHNFbnRlciA6IHRoaXMuY2xzTGVhdmU7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoZWwsIGNscyk7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcihlbCwgc2hvdyA/IFwic2hvd1wiIDogXCJoaWRlXCIsIFt0aGlzXSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZG9uZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKGVsLCBjbHMpO1xuICAgICAgICAgICAgICAgICAgdHJpZ2dlcihlbCwgc2hvdyA/IFwic2hvd25cIiA6IFwiaGlkZGVuXCIsIFt0aGlzXSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZSA/IHByb21pc2UudGhlbihkb25lLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZW1vdmVDbGFzcyhlbCwgY2xzKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xuICAgICAgICAgICAgICAgIH0pIDogZG9uZSgpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGlzVG9nZ2xlZChlbCA9IHRoaXMuJGVsKSB7XG4gICAgICAgICAgZWwgPSB0b05vZGUoZWwpO1xuICAgICAgICAgIHJldHVybiBoYXNDbGFzcyhlbCwgdGhpcy5jbHNFbnRlcikgPyB0cnVlIDogaGFzQ2xhc3MoZWwsIHRoaXMuY2xzTGVhdmUpID8gZmFsc2UgOiB0aGlzLmNscyA/IGhhc0NsYXNzKGVsLCB0aGlzLmNscy5zcGxpdChcIiBcIilbMF0pIDogaXNWaXNpYmxlKGVsKTtcbiAgICAgICAgfSxcbiAgICAgICAgX3RvZ2dsZShlbCwgdG9nZ2xlZCkge1xuICAgICAgICAgIGlmICghZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdG9nZ2xlZCA9IEJvb2xlYW4odG9nZ2xlZCk7XG4gICAgICAgICAgbGV0IGNoYW5nZWQ7XG4gICAgICAgICAgaWYgKHRoaXMuY2xzKSB7XG4gICAgICAgICAgICBjaGFuZ2VkID0gaW5jbHVkZXModGhpcy5jbHMsIFwiIFwiKSB8fCB0b2dnbGVkICE9PSBoYXNDbGFzcyhlbCwgdGhpcy5jbHMpO1xuICAgICAgICAgICAgY2hhbmdlZCAmJiB0b2dnbGVDbGFzcyhlbCwgdGhpcy5jbHMsIGluY2x1ZGVzKHRoaXMuY2xzLCBcIiBcIikgPyB2b2lkIDAgOiB0b2dnbGVkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hhbmdlZCA9IHRvZ2dsZWQgPT09IGVsLmhpZGRlbjtcbiAgICAgICAgICAgIGNoYW5nZWQgJiYgKGVsLmhpZGRlbiA9ICF0b2dnbGVkKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJCQoXCJbYXV0b2ZvY3VzXVwiLCBlbCkuc29tZSgoZWwyKSA9PiBpc1Zpc2libGUoZWwyKSA/IGVsMi5mb2N1cygpIHx8IHRydWUgOiBlbDIuYmx1cigpKTtcbiAgICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgICAgdHJpZ2dlcihlbCwgXCJ0b2dnbGVkXCIsIFt0b2dnbGVkLCB0aGlzXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBmdW5jdGlvbiB0b2dnbGVJbnN0YW50KGVsLCBzaG93LCB7IF90b2dnbGUgfSkge1xuICAgICAgQW5pbWF0aW9uLmNhbmNlbChlbCk7XG4gICAgICBUcmFuc2l0aW9uLmNhbmNlbChlbCk7XG4gICAgICByZXR1cm4gX3RvZ2dsZShlbCwgc2hvdyk7XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIHRvZ2dsZVRyYW5zaXRpb24oZWwsIHNob3csIHsgYW5pbWF0aW9uLCBkdXJhdGlvbiwgdmVsb2NpdHksIHRyYW5zaXRpb24sIF90b2dnbGUgfSkge1xuICAgICAgdmFyIF9hO1xuICAgICAgY29uc3QgW21vZGUgPSBcInJldmVhbFwiLCBzdGFydFByb3AgPSBcInRvcFwiXSA9ICgoX2EgPSBhbmltYXRpb25bMF0pID09IG51bGwgPyB2b2lkIDAgOiBfYS5zcGxpdChcIi1cIikpIHx8IFtdO1xuICAgICAgY29uc3QgZGlycyA9IFtcbiAgICAgICAgW1wibGVmdFwiLCBcInJpZ2h0XCJdLFxuICAgICAgICBbXCJ0b3BcIiwgXCJib3R0b21cIl1cbiAgICAgIF07XG4gICAgICBjb25zdCBkaXIgPSBkaXJzW2luY2x1ZGVzKGRpcnNbMF0sIHN0YXJ0UHJvcCkgPyAwIDogMV07XG4gICAgICBjb25zdCBlbmQgPSBkaXJbMV0gPT09IHN0YXJ0UHJvcDtcbiAgICAgIGNvbnN0IHByb3BzID0gW1wid2lkdGhcIiwgXCJoZWlnaHRcIl07XG4gICAgICBjb25zdCBkaW1Qcm9wID0gcHJvcHNbZGlycy5pbmRleE9mKGRpcildO1xuICAgICAgY29uc3QgbWFyZ2luUHJvcCA9IGBtYXJnaW4tJHtkaXJbMF19YDtcbiAgICAgIGNvbnN0IG1hcmdpblN0YXJ0UHJvcCA9IGBtYXJnaW4tJHtzdGFydFByb3B9YDtcbiAgICAgIGxldCBjdXJyZW50RGltID0gZGltZW5zaW9ucyQxKGVsKVtkaW1Qcm9wXTtcbiAgICAgIGNvbnN0IGluUHJvZ3Jlc3MgPSBUcmFuc2l0aW9uLmluUHJvZ3Jlc3MoZWwpO1xuICAgICAgYXdhaXQgVHJhbnNpdGlvbi5jYW5jZWwoZWwpO1xuICAgICAgaWYgKHNob3cpIHtcbiAgICAgICAgX3RvZ2dsZShlbCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBjb25zdCBwcmV2UHJvcHMgPSBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgICAgIFtcbiAgICAgICAgICBcInBhZGRpbmdcIixcbiAgICAgICAgICBcImJvcmRlclwiLFxuICAgICAgICAgIFwid2lkdGhcIixcbiAgICAgICAgICBcImhlaWdodFwiLFxuICAgICAgICAgIFwibWluV2lkdGhcIixcbiAgICAgICAgICBcIm1pbkhlaWdodFwiLFxuICAgICAgICAgIFwib3ZlcmZsb3dZXCIsXG4gICAgICAgICAgXCJvdmVyZmxvd1hcIixcbiAgICAgICAgICBtYXJnaW5Qcm9wLFxuICAgICAgICAgIG1hcmdpblN0YXJ0UHJvcFxuICAgICAgICBdLm1hcCgoa2V5KSA9PiBba2V5LCBlbC5zdHlsZVtrZXldXSlcbiAgICAgICk7XG4gICAgICBjb25zdCBkaW0gPSBkaW1lbnNpb25zJDEoZWwpO1xuICAgICAgY29uc3QgY3VycmVudE1hcmdpbiA9IHRvRmxvYXQoY3NzKGVsLCBtYXJnaW5Qcm9wKSk7XG4gICAgICBjb25zdCBtYXJnaW5TdGFydCA9IHRvRmxvYXQoY3NzKGVsLCBtYXJnaW5TdGFydFByb3ApKTtcbiAgICAgIGNvbnN0IGVuZERpbSA9IGRpbVtkaW1Qcm9wXSArIG1hcmdpblN0YXJ0O1xuICAgICAgaWYgKCFpblByb2dyZXNzICYmICFzaG93KSB7XG4gICAgICAgIGN1cnJlbnREaW0gKz0gbWFyZ2luU3RhcnQ7XG4gICAgICB9XG4gICAgICBjb25zdCBbd3JhcHBlcl0gPSB3cmFwSW5uZXIoZWwsIFwiPGRpdj5cIik7XG4gICAgICBjc3Mod3JhcHBlciwge1xuICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxuICAgICAgICBoZWlnaHQ6IGRpbS5oZWlnaHQsXG4gICAgICAgIHdpZHRoOiBkaW0ud2lkdGgsXG4gICAgICAgIC4uLmNzcyhlbCwgW1xuICAgICAgICAgIFwib3ZlcmZsb3dcIixcbiAgICAgICAgICBcInBhZGRpbmdcIixcbiAgICAgICAgICBcImJvcmRlclRvcFwiLFxuICAgICAgICAgIFwiYm9yZGVyUmlnaHRcIixcbiAgICAgICAgICBcImJvcmRlckJvdHRvbVwiLFxuICAgICAgICAgIFwiYm9yZGVyTGVmdFwiLFxuICAgICAgICAgIFwiYm9yZGVySW1hZ2VcIixcbiAgICAgICAgICBtYXJnaW5TdGFydFByb3BcbiAgICAgICAgXSlcbiAgICAgIH0pO1xuICAgICAgY3NzKGVsLCB7XG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgbWluV2lkdGg6IDAsXG4gICAgICAgIG1pbkhlaWdodDogMCxcbiAgICAgICAgW21hcmdpblN0YXJ0UHJvcF06IDAsXG4gICAgICAgIHdpZHRoOiBkaW0ud2lkdGgsXG4gICAgICAgIGhlaWdodDogZGltLmhlaWdodCxcbiAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgIFtkaW1Qcm9wXTogY3VycmVudERpbVxuICAgICAgfSk7XG4gICAgICBjb25zdCBwZXJjZW50ID0gY3VycmVudERpbSAvIGVuZERpbTtcbiAgICAgIGR1cmF0aW9uID0gKHZlbG9jaXR5ICogZW5kRGltICsgZHVyYXRpb24pICogKHNob3cgPyAxIC0gcGVyY2VudCA6IHBlcmNlbnQpO1xuICAgICAgY29uc3QgZW5kUHJvcHMgPSB7IFtkaW1Qcm9wXTogc2hvdyA/IGVuZERpbSA6IDAgfTtcbiAgICAgIGlmIChlbmQpIHtcbiAgICAgICAgY3NzKGVsLCBtYXJnaW5Qcm9wLCBlbmREaW0gLSBjdXJyZW50RGltICsgY3VycmVudE1hcmdpbik7XG4gICAgICAgIGVuZFByb3BzW21hcmdpblByb3BdID0gc2hvdyA/IGN1cnJlbnRNYXJnaW4gOiBlbmREaW0gKyBjdXJyZW50TWFyZ2luO1xuICAgICAgfVxuICAgICAgaWYgKCFlbmQgXiBtb2RlID09PSBcInJldmVhbFwiKSB7XG4gICAgICAgIGNzcyh3cmFwcGVyLCBtYXJnaW5Qcm9wLCAtZW5kRGltICsgY3VycmVudERpbSk7XG4gICAgICAgIFRyYW5zaXRpb24uc3RhcnQod3JhcHBlciwgeyBbbWFyZ2luUHJvcF06IHNob3cgPyAwIDogLWVuZERpbSB9LCBkdXJhdGlvbiwgdHJhbnNpdGlvbik7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBUcmFuc2l0aW9uLnN0YXJ0KGVsLCBlbmRQcm9wcywgZHVyYXRpb24sIHRyYW5zaXRpb24pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgY3NzKGVsLCBwcmV2UHJvcHMpO1xuICAgICAgICB1bndyYXAod3JhcHBlci5maXJzdENoaWxkKTtcbiAgICAgICAgaWYgKCFzaG93KSB7XG4gICAgICAgICAgX3RvZ2dsZShlbCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvZ2dsZUFuaW1hdGlvbihlbCwgc2hvdywgY21wKSB7XG4gICAgICBjb25zdCB7IGFuaW1hdGlvbiwgZHVyYXRpb24sIF90b2dnbGUgfSA9IGNtcDtcbiAgICAgIGlmIChzaG93KSB7XG4gICAgICAgIF90b2dnbGUoZWwsIHRydWUpO1xuICAgICAgICByZXR1cm4gQW5pbWF0aW9uLmluKGVsLCBhbmltYXRpb25bMF0sIGR1cmF0aW9uLCBjbXAub3JpZ2luKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBBbmltYXRpb24ub3V0KGVsLCBhbmltYXRpb25bMV0gfHwgYW5pbWF0aW9uWzBdLCBkdXJhdGlvbiwgY21wLm9yaWdpbikudGhlbihcbiAgICAgICAgKCkgPT4gX3RvZ2dsZShlbCwgZmFsc2UpXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZSQxID0gW107XG4gICAgdmFyIE1vZGFsID0ge1xuICAgICAgbWl4aW5zOiBbQ2xhc3MsIENvbnRhaW5lciwgVG9nZ2xhYmxlXSxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHNlbFBhbmVsOiBTdHJpbmcsXG4gICAgICAgIHNlbENsb3NlOiBTdHJpbmcsXG4gICAgICAgIGVzY0Nsb3NlOiBCb29sZWFuLFxuICAgICAgICBiZ0Nsb3NlOiBCb29sZWFuLFxuICAgICAgICBzdGFjazogQm9vbGVhbixcbiAgICAgICAgcm9sZTogU3RyaW5nXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBjbHM6IFwidWstb3BlblwiLFxuICAgICAgICBlc2NDbG9zZTogdHJ1ZSxcbiAgICAgICAgYmdDbG9zZTogdHJ1ZSxcbiAgICAgICAgb3ZlcmxheTogdHJ1ZSxcbiAgICAgICAgc3RhY2s6IGZhbHNlLFxuICAgICAgICByb2xlOiBcImRpYWxvZ1wiXG4gICAgICB9LFxuICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgcGFuZWw6ICh7IHNlbFBhbmVsIH0sICRlbCkgPT4gJChzZWxQYW5lbCwgJGVsKSxcbiAgICAgICAgdHJhbnNpdGlvbkVsZW1lbnQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFuZWw7XG4gICAgICAgIH0sXG4gICAgICAgIGJnQ2xvc2UoeyBiZ0Nsb3NlIH0pIHtcbiAgICAgICAgICByZXR1cm4gYmdDbG9zZSAmJiB0aGlzLnBhbmVsO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY29ubmVjdGVkKCkge1xuICAgICAgICBhdHRyKHRoaXMucGFuZWwgfHwgdGhpcy4kZWwsIFwicm9sZVwiLCB0aGlzLnJvbGUpO1xuICAgICAgICBpZiAodGhpcy5vdmVybGF5KSB7XG4gICAgICAgICAgYXR0cih0aGlzLnBhbmVsIHx8IHRoaXMuJGVsLCBcImFyaWEtbW9kYWxcIiwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBiZWZvcmVEaXNjb25uZWN0KCkge1xuICAgICAgICBpZiAoaW5jbHVkZXMoYWN0aXZlJDEsIHRoaXMpKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVFbGVtZW50KHRoaXMuJGVsLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXZlbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcImNsaWNrXCIsXG4gICAgICAgICAgZGVsZWdhdGU6ICh7IHNlbENsb3NlIH0pID0+IGAke3NlbENsb3NlfSxhW2hyZWYqPVwiI1wiXWAsXG4gICAgICAgICAgaGFuZGxlcihlKSB7XG4gICAgICAgICAgICBjb25zdCB7IGN1cnJlbnQsIGRlZmF1bHRQcmV2ZW50ZWQgfSA9IGU7XG4gICAgICAgICAgICBjb25zdCB7IGhhc2ggfSA9IGN1cnJlbnQ7XG4gICAgICAgICAgICBpZiAoIWRlZmF1bHRQcmV2ZW50ZWQgJiYgaGFzaCAmJiBpc1NhbWVTaXRlQW5jaG9yKGN1cnJlbnQpICYmICF0aGlzLiRlbC5jb250YWlucygkKGhhc2gpKSkge1xuICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWF0Y2hlcyhjdXJyZW50LCB0aGlzLnNlbENsb3NlKSkge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwidG9nZ2xlXCIsXG4gICAgICAgICAgc2VsZjogdHJ1ZSxcbiAgICAgICAgICBoYW5kbGVyKGUpIHtcbiAgICAgICAgICAgIGlmIChlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNUb2dnbGVkKCkgPT09IGluY2x1ZGVzKGFjdGl2ZSQxLCB0aGlzKSkge1xuICAgICAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiYmVmb3Jlc2hvd1wiLFxuICAgICAgICAgIHNlbGY6IHRydWUsXG4gICAgICAgICAgaGFuZGxlcihlKSB7XG4gICAgICAgICAgICBpZiAoaW5jbHVkZXMoYWN0aXZlJDEsIHRoaXMpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5zdGFjayAmJiBhY3RpdmUkMS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoYWN0aXZlJDEubWFwKChtb2RhbCkgPT4gbW9kYWwuaGlkZSgpKSkudGhlbih0aGlzLnNob3cpO1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhY3RpdmUkMS5wdXNoKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgIHNlbGY6IHRydWUsXG4gICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YWNrKSB7XG4gICAgICAgICAgICAgIGNzcyh0aGlzLiRlbCwgXCJ6SW5kZXhcIiwgdG9GbG9hdChjc3ModGhpcy4kZWwsIFwiekluZGV4XCIpKSArIGFjdGl2ZSQxLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBoYW5kbGVycyA9IFtcbiAgICAgICAgICAgICAgdGhpcy5vdmVybGF5ICYmIHByZXZlbnRCYWNrZ3JvdW5kRm9jdXModGhpcyksXG4gICAgICAgICAgICAgIHRoaXMub3ZlcmxheSAmJiBwcmV2ZW50QmFja2dyb3VuZFNjcm9sbCh0aGlzLiRlbCksXG4gICAgICAgICAgICAgIHRoaXMuYmdDbG9zZSAmJiBsaXN0ZW5Gb3JCYWNrZ3JvdW5kQ2xvc2UkMSh0aGlzKSxcbiAgICAgICAgICAgICAgdGhpcy5lc2NDbG9zZSAmJiBsaXN0ZW5Gb3JFc2NDbG9zZSQxKHRoaXMpXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgb25jZShcbiAgICAgICAgICAgICAgdGhpcy4kZWwsXG4gICAgICAgICAgICAgIFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgICgpID0+IGhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIgJiYgaGFuZGxlcigpKSxcbiAgICAgICAgICAgICAgeyBzZWxmOiB0cnVlIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBhZGRDbGFzcyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHRoaXMuY2xzUGFnZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJzaG93blwiLFxuICAgICAgICAgIHNlbGY6IHRydWUsXG4gICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgIGlmICghaXNGb2N1c2FibGUodGhpcy4kZWwpKSB7XG4gICAgICAgICAgICAgIGF0dHIodGhpcy4kZWwsIFwidGFiaW5kZXhcIiwgXCItMVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbWF0Y2hlcyh0aGlzLiRlbCwgXCI6Zm9jdXMtd2l0aGluXCIpKSB7XG4gICAgICAgICAgICAgIHRoaXMuJGVsLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJoaWRkZW5cIixcbiAgICAgICAgICBzZWxmOiB0cnVlLFxuICAgICAgICAgIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICBpZiAoaW5jbHVkZXMoYWN0aXZlJDEsIHRoaXMpKSB7XG4gICAgICAgICAgICAgIGFjdGl2ZSQxLnNwbGljZShhY3RpdmUkMS5pbmRleE9mKHRoaXMpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNzcyh0aGlzLiRlbCwgXCJ6SW5kZXhcIiwgXCJcIik7XG4gICAgICAgICAgICBpZiAoIWFjdGl2ZSQxLnNvbWUoKG1vZGFsKSA9PiBtb2RhbC5jbHNQYWdlID09PSB0aGlzLmNsc1BhZ2UpKSB7XG4gICAgICAgICAgICAgIHJlbW92ZUNsYXNzKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgdGhpcy5jbHNQYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBtZXRob2RzOiB7XG4gICAgICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5pc1RvZ2dsZWQoKSA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNob3coKSB7XG4gICAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyICYmIHBhcmVudCh0aGlzLiRlbCkgIT09IHRoaXMuY29udGFpbmVyKSB7XG4gICAgICAgICAgICBhcHBlbmQodGhpcy5jb250YWluZXIsIHRoaXMuJGVsKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShcbiAgICAgICAgICAgICAgKHJlc29sdmUpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnNob3coKS50aGVuKHJlc29sdmUpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMudG9nZ2xlRWxlbWVudCh0aGlzLiRlbCwgdHJ1ZSwgYW5pbWF0ZSQxKTtcbiAgICAgICAgfSxcbiAgICAgICAgaGlkZSgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy50b2dnbGVFbGVtZW50KHRoaXMuJGVsLCBmYWxzZSwgYW5pbWF0ZSQxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgZnVuY3Rpb24gYW5pbWF0ZSQxKGVsLCBzaG93LCB7IHRyYW5zaXRpb25FbGVtZW50LCBfdG9nZ2xlIH0pIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShcbiAgICAgICAgKHJlc29sdmUsIHJlamVjdCkgPT4gb25jZShlbCwgXCJzaG93IGhpZGVcIiwgKCkgPT4ge1xuICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAoX2EgPSBlbC5fcmVqZWN0KSA9PSBudWxsID8gdm9pZCAwIDogX2EuY2FsbChlbCk7XG4gICAgICAgICAgZWwuX3JlamVjdCA9IHJlamVjdDtcbiAgICAgICAgICBfdG9nZ2xlKGVsLCBzaG93KTtcbiAgICAgICAgICBjb25zdCBvZmYgPSBvbmNlKFxuICAgICAgICAgICAgdHJhbnNpdGlvbkVsZW1lbnQsXG4gICAgICAgICAgICBcInRyYW5zaXRpb25zdGFydFwiLFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICBvbmNlKHRyYW5zaXRpb25FbGVtZW50LCBcInRyYW5zaXRpb25lbmQgdHJhbnNpdGlvbmNhbmNlbFwiLCByZXNvbHZlLCB7XG4gICAgICAgICAgICAgICAgc2VsZjogdHJ1ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHNlbGY6IHRydWUgfVxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICBvZmYoKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvTXMoY3NzKHRyYW5zaXRpb25FbGVtZW50LCBcInRyYW5zaXRpb25EdXJhdGlvblwiKSlcbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKS50aGVuKCgpID0+IGRlbGV0ZSBlbC5fcmVqZWN0KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdG9Ncyh0aW1lKSB7XG4gICAgICByZXR1cm4gdGltZSA/IGVuZHNXaXRoKHRpbWUsIFwibXNcIikgPyB0b0Zsb2F0KHRpbWUpIDogdG9GbG9hdCh0aW1lKSAqIDFlMyA6IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHByZXZlbnRCYWNrZ3JvdW5kRm9jdXMobW9kYWwpIHtcbiAgICAgIHJldHVybiBvbihkb2N1bWVudCwgXCJmb2N1c2luXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChsYXN0KGFjdGl2ZSQxKSA9PT0gbW9kYWwgJiYgIW1vZGFsLiRlbC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICBtb2RhbC4kZWwuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxpc3RlbkZvckJhY2tncm91bmRDbG9zZSQxKG1vZGFsKSB7XG4gICAgICByZXR1cm4gb24oZG9jdW1lbnQsIHBvaW50ZXJEb3duJDEsICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgIGlmIChsYXN0KGFjdGl2ZSQxKSAhPT0gbW9kYWwgfHwgbW9kYWwub3ZlcmxheSAmJiAhbW9kYWwuJGVsLmNvbnRhaW5zKHRhcmdldCkgfHwgbW9kYWwucGFuZWwuY29udGFpbnModGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBvbmNlKFxuICAgICAgICAgIGRvY3VtZW50LFxuICAgICAgICAgIGAke3BvaW50ZXJVcCQxfSAke3BvaW50ZXJDYW5jZWx9IHNjcm9sbGAsXG4gICAgICAgICAgKHsgZGVmYXVsdFByZXZlbnRlZCwgdHlwZSwgdGFyZ2V0OiBuZXdUYXJnZXQgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFkZWZhdWx0UHJldmVudGVkICYmIHR5cGUgPT09IHBvaW50ZXJVcCQxICYmIHRhcmdldCA9PT0gbmV3VGFyZ2V0KSB7XG4gICAgICAgICAgICAgIG1vZGFsLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBsaXN0ZW5Gb3JFc2NDbG9zZSQxKG1vZGFsKSB7XG4gICAgICByZXR1cm4gb24oZG9jdW1lbnQsIFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAyNyAmJiBsYXN0KGFjdGl2ZSQxKSA9PT0gbW9kYWwpIHtcbiAgICAgICAgICBtb2RhbC5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBBbmltYXRpb25zJDIgPSB7XG4gICAgICBzbGlkZToge1xuICAgICAgICBzaG93KGRpcikge1xuICAgICAgICAgIHJldHVybiBbeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZShkaXIgKiAtMTAwKSB9LCB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKCkgfV07XG4gICAgICAgIH0sXG4gICAgICAgIHBlcmNlbnQoY3VycmVudCkge1xuICAgICAgICAgIHJldHVybiB0cmFuc2xhdGVkKGN1cnJlbnQpO1xuICAgICAgICB9LFxuICAgICAgICB0cmFuc2xhdGUocGVyY2VudCwgZGlyKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoZGlyICogLTEwMCAqIHBlcmNlbnQpIH0sXG4gICAgICAgICAgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKGRpciAqIDEwMCAqICgxIC0gcGVyY2VudCkpIH1cbiAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVkKGVsKSB7XG4gICAgICByZXR1cm4gTWF0aC5hYnMobmV3IERPTU1hdHJpeChjc3MoZWwsIFwidHJhbnNmb3JtXCIpKS5tNDEgLyBlbC5vZmZzZXRXaWR0aCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSh2YWx1ZSA9IDAsIHVuaXQgPSBcIiVcIikge1xuICAgICAgdmFsdWUgKz0gdmFsdWUgPyB1bml0IDogXCJcIjtcbiAgICAgIHJldHVybiBgdHJhbnNsYXRlM2QoJHt2YWx1ZX0sIDAsIDApYDtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2NhbGUzZCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGBzY2FsZTNkKCR7dmFsdWV9LCAke3ZhbHVlfSwgMSlgO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIFRyYW5zaXRpb25lciQxKHByZXYsIG5leHQsIGRpciwgeyBhbmltYXRpb24sIGVhc2luZyB9KSB7XG4gICAgICBjb25zdCB7IHBlcmNlbnQsIHRyYW5zbGF0ZSwgc2hvdyA9IG5vb3AgfSA9IGFuaW1hdGlvbjtcbiAgICAgIGNvbnN0IHByb3BzID0gc2hvdyhkaXIpO1xuICAgICAgY29uc3QgeyBwcm9taXNlLCByZXNvbHZlIH0gPSB3aXRoUmVzb2x2ZXJzKCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkaXIsXG4gICAgICAgIHNob3coZHVyYXRpb24sIHBlcmNlbnQyID0gMCwgbGluZWFyKSB7XG4gICAgICAgICAgY29uc3QgdGltaW5nID0gbGluZWFyID8gXCJsaW5lYXJcIiA6IGVhc2luZztcbiAgICAgICAgICBkdXJhdGlvbiAtPSBNYXRoLnJvdW5kKGR1cmF0aW9uICogY2xhbXAocGVyY2VudDIsIC0xLCAxKSk7XG4gICAgICAgICAgdGhpcy50cmFuc2xhdGUocGVyY2VudDIpO1xuICAgICAgICAgIHRyaWdnZXJVcGRhdGUobmV4dCwgXCJpdGVtaW5cIiwgeyBwZXJjZW50OiBwZXJjZW50MiwgZHVyYXRpb24sIHRpbWluZywgZGlyIH0pO1xuICAgICAgICAgIHRyaWdnZXJVcGRhdGUocHJldiwgXCJpdGVtb3V0XCIsIHsgcGVyY2VudDogMSAtIHBlcmNlbnQyLCBkdXJhdGlvbiwgdGltaW5nLCBkaXIgfSk7XG4gICAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgVHJhbnNpdGlvbi5zdGFydChuZXh0LCBwcm9wc1sxXSwgZHVyYXRpb24sIHRpbWluZyksXG4gICAgICAgICAgICBUcmFuc2l0aW9uLnN0YXJ0KHByZXYsIHByb3BzWzBdLCBkdXJhdGlvbiwgdGltaW5nKVxuICAgICAgICAgIF0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0sIG5vb3ApO1xuICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICB9LFxuICAgICAgICBjYW5jZWwoKSB7XG4gICAgICAgICAgcmV0dXJuIFRyYW5zaXRpb24uY2FuY2VsKFtuZXh0LCBwcmV2XSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlc2V0KCkge1xuICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBwcm9wc1swXSkge1xuICAgICAgICAgICAgY3NzKFtuZXh0LCBwcmV2XSwgcHJvcCwgXCJcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhc3luYyBmb3J3YXJkKGR1cmF0aW9uLCBwZXJjZW50MiA9IHRoaXMucGVyY2VudCgpKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5jYW5jZWwoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zaG93KGR1cmF0aW9uLCBwZXJjZW50MiwgdHJ1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHRyYW5zbGF0ZShwZXJjZW50Mikge1xuICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICBjb25zdCBwcm9wczIgPSB0cmFuc2xhdGUocGVyY2VudDIsIGRpcik7XG4gICAgICAgICAgY3NzKG5leHQsIHByb3BzMlsxXSk7XG4gICAgICAgICAgY3NzKHByZXYsIHByb3BzMlswXSk7XG4gICAgICAgICAgdHJpZ2dlclVwZGF0ZShuZXh0LCBcIml0ZW10cmFuc2xhdGVpblwiLCB7IHBlcmNlbnQ6IHBlcmNlbnQyLCBkaXIgfSk7XG4gICAgICAgICAgdHJpZ2dlclVwZGF0ZShwcmV2LCBcIml0ZW10cmFuc2xhdGVvdXRcIiwgeyBwZXJjZW50OiAxIC0gcGVyY2VudDIsIGRpciB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcGVyY2VudCgpIHtcbiAgICAgICAgICByZXR1cm4gcGVyY2VudChwcmV2IHx8IG5leHQsIG5leHQsIGRpcik7XG4gICAgICAgIH0sXG4gICAgICAgIGdldERpc3RhbmNlKCkge1xuICAgICAgICAgIHJldHVybiBwcmV2ID09IG51bGwgPyB2b2lkIDAgOiBwcmV2Lm9mZnNldFdpZHRoO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0cmlnZ2VyVXBkYXRlKGVsLCB0eXBlLCBkYXRhKSB7XG4gICAgICB0cmlnZ2VyKGVsLCBjcmVhdGVFdmVudCh0eXBlLCBmYWxzZSwgZmFsc2UsIGRhdGEpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gd2l0aFJlc29sdmVycygpIHtcbiAgICAgIGxldCByZXNvbHZlO1xuICAgICAgcmV0dXJuIHsgcHJvbWlzZTogbmV3IFByb21pc2UoKHJlcykgPT4gcmVzb2x2ZSA9IHJlcyksIHJlc29sdmUgfTtcbiAgICB9XG5cbiAgICB2YXIgSTE4biA9IHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGkxOG46IE9iamVjdFxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaTE4bjogbnVsbFxuICAgICAgfSxcbiAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdChrZXksIC4uLnBhcmFtcykge1xuICAgICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICByZXR1cm4gKChfYyA9ICgoX2EgPSB0aGlzLmkxOG4pID09IG51bGwgPyB2b2lkIDAgOiBfYVtrZXldKSB8fCAoKF9iID0gdGhpcy4kb3B0aW9ucy5pMThuKSA9PSBudWxsID8gdm9pZCAwIDogX2Jba2V5XSkpID09IG51bGwgPyB2b2lkIDAgOiBfYy5yZXBsYWNlKFxuICAgICAgICAgICAgLyVzL2csXG4gICAgICAgICAgICAoKSA9PiBwYXJhbXNbaSsrXSB8fCBcIlwiXG4gICAgICAgICAgKSkgfHwgXCJcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgU2xpZGVyQXV0b3BsYXkgPSB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBhdXRvcGxheTogQm9vbGVhbixcbiAgICAgICAgYXV0b3BsYXlJbnRlcnZhbDogTnVtYmVyLFxuICAgICAgICBwYXVzZU9uSG92ZXI6IEJvb2xlYW5cbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgYXV0b3BsYXlJbnRlcnZhbDogN2UzLFxuICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWVcbiAgICAgIH0sXG4gICAgICBjb25uZWN0ZWQoKSB7XG4gICAgICAgIGF0dHIodGhpcy5saXN0LCBcImFyaWEtbGl2ZVwiLCB0aGlzLmF1dG9wbGF5ID8gXCJvZmZcIiA6IFwicG9saXRlXCIpO1xuICAgICAgICB0aGlzLmF1dG9wbGF5ICYmIHRoaXMuc3RhcnRBdXRvcGxheSgpO1xuICAgICAgfSxcbiAgICAgIGRpc2Nvbm5lY3RlZCgpIHtcbiAgICAgICAgdGhpcy5zdG9wQXV0b3BsYXkoKTtcbiAgICAgIH0sXG4gICAgICB1cGRhdGUoKSB7XG4gICAgICAgIGF0dHIodGhpcy5zbGlkZXMsIFwidGFiaW5kZXhcIiwgXCItMVwiKTtcbiAgICAgIH0sXG4gICAgICBldmVudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwidmlzaWJpbGl0eWNoYW5nZVwiLFxuICAgICAgICAgIGVsOiAoKSA9PiBkb2N1bWVudCxcbiAgICAgICAgICBmaWx0ZXI6ICh7IGF1dG9wbGF5IH0pID0+IGF1dG9wbGF5LFxuICAgICAgICAgIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuaGlkZGVuKSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RvcEF1dG9wbGF5KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnN0YXJ0QXV0b3BsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBtZXRob2RzOiB7XG4gICAgICAgIHN0YXJ0QXV0b3BsYXkoKSB7XG4gICAgICAgICAgdGhpcy5zdG9wQXV0b3BsYXkoKTtcbiAgICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCEodGhpcy5zdGFjay5sZW5ndGggfHwgdGhpcy5kcmFnZ2FibGUgJiYgbWF0Y2hlcyh0aGlzLiRlbCwgXCI6Zm9jdXMtd2l0aGluXCIpICYmICFtYXRjaGVzKHRoaXMuJGVsLCBcIjpmb2N1c1wiKSB8fCB0aGlzLnBhdXNlT25Ib3ZlciAmJiBtYXRjaGVzKHRoaXMuJGVsLCBcIjpob3ZlclwiKSkpIHtcbiAgICAgICAgICAgICAgdGhpcy5zaG93KFwibmV4dFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB0aGlzLmF1dG9wbGF5SW50ZXJ2YWwpO1xuICAgICAgICB9LFxuICAgICAgICBzdG9wQXV0b3BsYXkoKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBwb2ludGVyT3B0aW9ucyA9IHsgcGFzc2l2ZTogZmFsc2UsIGNhcHR1cmU6IHRydWUgfTtcbiAgICBjb25zdCBwb2ludGVyVXBPcHRpb25zID0geyBwYXNzaXZlOiB0cnVlLCBjYXB0dXJlOiB0cnVlIH07XG4gICAgY29uc3QgcG9pbnRlckRvd24gPSBcInRvdWNoc3RhcnQgbW91c2Vkb3duXCI7XG4gICAgY29uc3QgcG9pbnRlck1vdmUgPSBcInRvdWNobW92ZSBtb3VzZW1vdmVcIjtcbiAgICBjb25zdCBwb2ludGVyVXAgPSBcInRvdWNoZW5kIHRvdWNoY2FuY2VsIG1vdXNldXAgY2xpY2sgaW5wdXQgc2Nyb2xsXCI7XG4gICAgY29uc3QgcHJldmVudENsaWNrID0gKGUpID0+IGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgU2xpZGVyRHJhZyA9IHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGRyYWdnYWJsZTogQm9vbGVhblxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICB0aHJlc2hvbGQ6IDEwXG4gICAgICB9LFxuICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgW1wic3RhcnRcIiwgXCJtb3ZlXCIsIFwiZW5kXCJdKSB7XG4gICAgICAgICAgY29uc3QgZm4gPSB0aGlzW2tleV07XG4gICAgICAgICAgdGhpc1trZXldID0gKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IGdldEV2ZW50UG9zKGUpLnggKiAoaXNSdGwgPyAtMSA6IDEpO1xuICAgICAgICAgICAgdGhpcy5wcmV2UG9zID0gcG9zID09PSB0aGlzLnBvcyA/IHRoaXMucHJldlBvcyA6IHRoaXMucG9zO1xuICAgICAgICAgICAgdGhpcy5wb3MgPSBwb3M7XG4gICAgICAgICAgICBmbihlKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXZlbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBwb2ludGVyRG93bixcbiAgICAgICAgICBwYXNzaXZlOiB0cnVlLFxuICAgICAgICAgIGRlbGVnYXRlOiAoeyBzZWxMaXN0IH0pID0+IGAke3NlbExpc3R9ID4gKmAsXG4gICAgICAgICAgaGFuZGxlcihlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZHJhZ2dhYmxlIHx8IHRoaXMucGFyYWxsYXggfHwgIWlzVG91Y2goZSkgJiYgaGFzU2VsZWN0YWJsZVRleHQoZS50YXJnZXQpIHx8IGUudGFyZ2V0LmNsb3Nlc3Qoc2VsSW5wdXQpIHx8IGUuYnV0dG9uID4gMCB8fCB0aGlzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdGFydChlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcImRyYWdzdGFydFwiLFxuICAgICAgICAgIGhhbmRsZXIoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIC8vIGlPUyB3b3JrYXJvdW5kIGZvciBzbGlkZXIgc3RvcHBpbmcgaWYgc3dpcGluZyBmYXN0XG4gICAgICAgICAgbmFtZTogcG9pbnRlck1vdmUsXG4gICAgICAgICAgZWw6ICh7IGxpc3QgfSkgPT4gbGlzdCxcbiAgICAgICAgICBoYW5kbGVyOiBub29wLFxuICAgICAgICAgIC4uLnBvaW50ZXJPcHRpb25zXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBtZXRob2RzOiB7XG4gICAgICAgIHN0YXJ0KCkge1xuICAgICAgICAgIHRoaXMuZHJhZyA9IHRoaXMucG9zO1xuICAgICAgICAgIGlmICh0aGlzLl90cmFuc2l0aW9uZXIpIHtcbiAgICAgICAgICAgIHRoaXMucGVyY2VudCA9IHRoaXMuX3RyYW5zaXRpb25lci5wZXJjZW50KCk7XG4gICAgICAgICAgICB0aGlzLmRyYWcgKz0gdGhpcy5fdHJhbnNpdGlvbmVyLmdldERpc3RhbmNlKCkgKiB0aGlzLnBlcmNlbnQgKiB0aGlzLmRpcjtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25lci5jYW5jZWwoKTtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25lci50cmFuc2xhdGUodGhpcy5wZXJjZW50KTtcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zdGFjayA9IFtdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByZXZJbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9uKGRvY3VtZW50LCBwb2ludGVyTW92ZSwgdGhpcy5tb3ZlLCBwb2ludGVyT3B0aW9ucyk7XG4gICAgICAgICAgb24oZG9jdW1lbnQsIHBvaW50ZXJVcCwgdGhpcy5lbmQsIHBvaW50ZXJVcE9wdGlvbnMpO1xuICAgICAgICAgIGNzcyh0aGlzLmxpc3QsIFwidXNlclNlbGVjdFwiLCBcIm5vbmVcIik7XG4gICAgICAgIH0sXG4gICAgICAgIG1vdmUoZSkge1xuICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5wb3MgLSB0aGlzLmRyYWc7XG4gICAgICAgICAgaWYgKGRpc3RhbmNlID09PSAwIHx8IHRoaXMucHJldlBvcyA9PT0gdGhpcy5wb3MgfHwgIXRoaXMuZHJhZ2dpbmcgJiYgTWF0aC5hYnMoZGlzdGFuY2UpIDwgdGhpcy50aHJlc2hvbGQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0aGlzLmRyYWdnaW5nKSB7XG4gICAgICAgICAgICBvbih0aGlzLmxpc3QsIFwiY2xpY2tcIiwgcHJldmVudENsaWNrLCBwb2ludGVyT3B0aW9ucyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGUuY2FuY2VsYWJsZSAmJiBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XG4gICAgICAgICAgdGhpcy5kaXIgPSBkaXN0YW5jZSA8IDAgPyAxIDogLTE7XG4gICAgICAgICAgbGV0IHsgc2xpZGVzLCBwcmV2SW5kZXggfSA9IHRoaXM7XG4gICAgICAgICAgbGV0IGRpcyA9IE1hdGguYWJzKGRpc3RhbmNlKTtcbiAgICAgICAgICBsZXQgbmV4dEluZGV4ID0gdGhpcy5nZXRJbmRleChwcmV2SW5kZXggKyB0aGlzLmRpcik7XG4gICAgICAgICAgbGV0IHdpZHRoID0gZ2V0RGlzdGFuY2UuY2FsbCh0aGlzLCBwcmV2SW5kZXgsIG5leHRJbmRleCk7XG4gICAgICAgICAgd2hpbGUgKG5leHRJbmRleCAhPT0gcHJldkluZGV4ICYmIGRpcyA+IHdpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmRyYWcgLT0gd2lkdGggKiB0aGlzLmRpcjtcbiAgICAgICAgICAgIHByZXZJbmRleCA9IG5leHRJbmRleDtcbiAgICAgICAgICAgIGRpcyAtPSB3aWR0aDtcbiAgICAgICAgICAgIG5leHRJbmRleCA9IHRoaXMuZ2V0SW5kZXgocHJldkluZGV4ICsgdGhpcy5kaXIpO1xuICAgICAgICAgICAgd2lkdGggPSBnZXREaXN0YW5jZS5jYWxsKHRoaXMsIHByZXZJbmRleCwgbmV4dEluZGV4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5wZXJjZW50ID0gZGlzIC8gd2lkdGg7XG4gICAgICAgICAgY29uc3QgcHJldiA9IHNsaWRlc1twcmV2SW5kZXhdO1xuICAgICAgICAgIGNvbnN0IG5leHQgPSBzbGlkZXNbbmV4dEluZGV4XTtcbiAgICAgICAgICBjb25zdCBjaGFuZ2VkID0gdGhpcy5pbmRleCAhPT0gbmV4dEluZGV4O1xuICAgICAgICAgIGNvbnN0IGVkZ2UgPSBwcmV2SW5kZXggPT09IG5leHRJbmRleDtcbiAgICAgICAgICBsZXQgaXRlbVNob3duO1xuICAgICAgICAgIGZvciAoY29uc3QgaSBvZiBbdGhpcy5pbmRleCwgdGhpcy5wcmV2SW5kZXhdKSB7XG4gICAgICAgICAgICBpZiAoIWluY2x1ZGVzKFtuZXh0SW5kZXgsIHByZXZJbmRleF0sIGkpKSB7XG4gICAgICAgICAgICAgIHRyaWdnZXIoc2xpZGVzW2ldLCBcIml0ZW1oaWRkZW5cIiwgW3RoaXNdKTtcbiAgICAgICAgICAgICAgaWYgKGVkZ2UpIHtcbiAgICAgICAgICAgICAgICBpdGVtU2hvd24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMucHJldkluZGV4ID0gcHJldkluZGV4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLmluZGV4ID09PSBwcmV2SW5kZXggJiYgdGhpcy5wcmV2SW5kZXggIT09IHByZXZJbmRleCB8fCBpdGVtU2hvd24pIHtcbiAgICAgICAgICAgIHRyaWdnZXIoc2xpZGVzW3RoaXMuaW5kZXhdLCBcIml0ZW1zaG93blwiLCBbdGhpc10pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy5wcmV2SW5kZXggPSBwcmV2SW5kZXg7XG4gICAgICAgICAgICB0aGlzLmluZGV4ID0gbmV4dEluZGV4O1xuICAgICAgICAgICAgaWYgKCFlZGdlKSB7XG4gICAgICAgICAgICAgIHRyaWdnZXIocHJldiwgXCJiZWZvcmVpdGVtaGlkZVwiLCBbdGhpc10pO1xuICAgICAgICAgICAgICB0cmlnZ2VyKHByZXYsIFwiaXRlbWhpZGVcIiwgW3RoaXNdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyaWdnZXIobmV4dCwgXCJiZWZvcmVpdGVtc2hvd1wiLCBbdGhpc10pO1xuICAgICAgICAgICAgdHJpZ2dlcihuZXh0LCBcIml0ZW1zaG93XCIsIFt0aGlzXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25lciA9IHRoaXMuX3RyYW5zbGF0ZShNYXRoLmFicyh0aGlzLnBlcmNlbnQpLCBwcmV2LCAhZWRnZSAmJiBuZXh0KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5kKCkge1xuICAgICAgICAgIG9mZihkb2N1bWVudCwgcG9pbnRlck1vdmUsIHRoaXMubW92ZSwgcG9pbnRlck9wdGlvbnMpO1xuICAgICAgICAgIG9mZihkb2N1bWVudCwgcG9pbnRlclVwLCB0aGlzLmVuZCwgcG9pbnRlclVwT3B0aW9ucyk7XG4gICAgICAgICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dpbmcgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5kZXggPT09IHRoaXMucHJldkluZGV4KSB7XG4gICAgICAgICAgICAgIHRoaXMucGVyY2VudCA9IDEgLSB0aGlzLnBlcmNlbnQ7XG4gICAgICAgICAgICAgIHRoaXMuZGlyICo9IC0xO1xuICAgICAgICAgICAgICB0aGlzLl9zaG93KGZhbHNlLCB0aGlzLmluZGV4LCB0cnVlKTtcbiAgICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbmVyID0gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGRpckNoYW5nZSA9IChpc1J0bCA/IHRoaXMuZGlyICogKGlzUnRsID8gMSA6IC0xKSA6IHRoaXMuZGlyKSA8IDAgPT09IHRoaXMucHJldlBvcyA+IHRoaXMucG9zO1xuICAgICAgICAgICAgICB0aGlzLmluZGV4ID0gZGlyQ2hhbmdlID8gdGhpcy5pbmRleCA6IHRoaXMucHJldkluZGV4O1xuICAgICAgICAgICAgICBpZiAoZGlyQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wZXJjZW50ID0gMSAtIHRoaXMucGVyY2VudDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnNob3coXG4gICAgICAgICAgICAgICAgdGhpcy5kaXIgPiAwICYmICFkaXJDaGFuZ2UgfHwgdGhpcy5kaXIgPCAwICYmIGRpckNoYW5nZSA/IFwibmV4dFwiIDogXCJwcmV2aW91c1wiLFxuICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBvZmYodGhpcy5saXN0LCBcImNsaWNrXCIsIHByZXZlbnRDbGljaywgcG9pbnRlck9wdGlvbnMpKTtcbiAgICAgICAgICBjc3ModGhpcy5saXN0LCB7IHVzZXJTZWxlY3Q6IFwiXCIgfSk7XG4gICAgICAgICAgdGhpcy5kcmFnID0gdGhpcy5wZXJjZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgZnVuY3Rpb24gZ2V0RGlzdGFuY2UocHJldiwgbmV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2dldFRyYW5zaXRpb25lcihwcmV2LCBwcmV2ICE9PSBuZXh0ICYmIG5leHQpLmdldERpc3RhbmNlKCkgfHwgdGhpcy5zbGlkZXNbcHJldl0ub2Zmc2V0V2lkdGg7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhc1NlbGVjdGFibGVUZXh0KGVsKSB7XG4gICAgICByZXR1cm4gY3NzKGVsLCBcInVzZXJTZWxlY3RcIikgIT09IFwibm9uZVwiICYmIHRvQXJyYXkoZWwuY2hpbGROb2Rlcykuc29tZSgoZWwyKSA9PiBlbDIubm9kZVR5cGUgPT09IDMgJiYgZWwyLnRleHRDb250ZW50LnRyaW0oKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdFdhdGNoZXMoaW5zdGFuY2UpIHtcbiAgICAgIGluc3RhbmNlLl93YXRjaGVzID0gW107XG4gICAgICBmb3IgKGNvbnN0IHdhdGNoZXMgb2YgaW5zdGFuY2UuJG9wdGlvbnMud2F0Y2ggfHwgW10pIHtcbiAgICAgICAgZm9yIChjb25zdCBbbmFtZSwgd2F0Y2hdIG9mIE9iamVjdC5lbnRyaWVzKHdhdGNoZXMpKSB7XG4gICAgICAgICAgcmVnaXN0ZXJXYXRjaChpbnN0YW5jZSwgd2F0Y2gsIG5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpbnN0YW5jZS5faW5pdGlhbCA9IHRydWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyV2F0Y2goaW5zdGFuY2UsIHdhdGNoLCBuYW1lKSB7XG4gICAgICBpbnN0YW5jZS5fd2F0Y2hlcy5wdXNoKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgLi4uaXNQbGFpbk9iamVjdCh3YXRjaCkgPyB3YXRjaCA6IHsgaGFuZGxlcjogd2F0Y2ggfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJ1bldhdGNoZXMoaW5zdGFuY2UsIHZhbHVlcykge1xuICAgICAgZm9yIChjb25zdCB7IG5hbWUsIGhhbmRsZXIsIGltbWVkaWF0ZSA9IHRydWUgfSBvZiBpbnN0YW5jZS5fd2F0Y2hlcykge1xuICAgICAgICBpZiAoaW5zdGFuY2UuX2luaXRpYWwgJiYgaW1tZWRpYXRlIHx8IGhhc093bih2YWx1ZXMsIG5hbWUpICYmICFpc0VxdWFsKHZhbHVlc1tuYW1lXSwgaW5zdGFuY2VbbmFtZV0pKSB7XG4gICAgICAgICAgaGFuZGxlci5jYWxsKGluc3RhbmNlLCBpbnN0YW5jZVtuYW1lXSwgdmFsdWVzW25hbWVdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaW5zdGFuY2UuX2luaXRpYWwgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0Q29tcHV0ZWQoaW5zdGFuY2UpIHtcbiAgICAgIGNvbnN0IHsgY29tcHV0ZWQgfSA9IGluc3RhbmNlLiRvcHRpb25zO1xuICAgICAgaW5zdGFuY2UuX2NvbXB1dGVkID0ge307XG4gICAgICBpZiAoY29tcHV0ZWQpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY29tcHV0ZWQpIHtcbiAgICAgICAgICByZWdpc3RlckNvbXB1dGVkKGluc3RhbmNlLCBrZXksIGNvbXB1dGVkW2tleV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG11dGF0aW9uT3B0aW9ucyA9IHsgc3VidHJlZTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlIH07XG4gICAgZnVuY3Rpb24gcmVnaXN0ZXJDb21wdXRlZChpbnN0YW5jZSwga2V5LCBjYikge1xuICAgICAgaW5zdGFuY2UuX2hhc0NvbXB1dGVkID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpbnN0YW5jZSwga2V5LCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICBjb25zdCB7IF9jb21wdXRlZCwgJHByb3BzLCAkZWwgfSA9IGluc3RhbmNlO1xuICAgICAgICAgIGlmICghaGFzT3duKF9jb21wdXRlZCwga2V5KSkge1xuICAgICAgICAgICAgX2NvbXB1dGVkW2tleV0gPSAoY2IuZ2V0IHx8IGNiKS5jYWxsKGluc3RhbmNlLCAkcHJvcHMsICRlbCk7XG4gICAgICAgICAgICBpZiAoY2Iub2JzZXJ2ZSAmJiBpbnN0YW5jZS5fY29tcHV0ZWRPYnNlcnZlcikge1xuICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IGNiLm9ic2VydmUuY2FsbChpbnN0YW5jZSwgJHByb3BzKTtcbiAgICAgICAgICAgICAgaW5zdGFuY2UuX2NvbXB1dGVkT2JzZXJ2ZXIub2JzZXJ2ZShcbiAgICAgICAgICAgICAgICBbXCJ+XCIsIFwiK1wiLCBcIi1cIl0uaW5jbHVkZXMoc2VsZWN0b3JbMF0pID8gJGVsLnBhcmVudEVsZW1lbnQgOiAkZWwuZ2V0Um9vdE5vZGUoKSxcbiAgICAgICAgICAgICAgICBtdXRhdGlvbk9wdGlvbnNcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIF9jb21wdXRlZFtrZXldO1xuICAgICAgICB9LFxuICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICBjb25zdCB7IF9jb21wdXRlZCB9ID0gaW5zdGFuY2U7XG4gICAgICAgICAgX2NvbXB1dGVkW2tleV0gPSBjYi5zZXQgPyBjYi5zZXQuY2FsbChpbnN0YW5jZSwgdmFsdWUpIDogdmFsdWU7XG4gICAgICAgICAgaWYgKGlzVW5kZWZpbmVkKF9jb21wdXRlZFtrZXldKSkge1xuICAgICAgICAgICAgZGVsZXRlIF9jb21wdXRlZFtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGluaXRDb21wdXRlZFVwZGF0ZXMoaW5zdGFuY2UpIHtcbiAgICAgIGlmICghaW5zdGFuY2UuX2hhc0NvbXB1dGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHByZXBlbmRVcGRhdGUoaW5zdGFuY2UsIHtcbiAgICAgICAgcmVhZDogKCkgPT4gcnVuV2F0Y2hlcyhpbnN0YW5jZSwgcmVzZXRDb21wdXRlZChpbnN0YW5jZSkpLFxuICAgICAgICBldmVudHM6IFtcInJlc2l6ZVwiLCBcImNvbXB1dGVkXCJdXG4gICAgICB9KTtcbiAgICAgIGluc3RhbmNlLl9jb21wdXRlZE9ic2VydmVyID0gb2JzZXJ2ZU11dGF0aW9uKFxuICAgICAgICBpbnN0YW5jZS4kZWwsXG4gICAgICAgICgpID0+IGNhbGxVcGRhdGUoaW5zdGFuY2UsIFwiY29tcHV0ZWRcIiksXG4gICAgICAgIG11dGF0aW9uT3B0aW9uc1xuICAgICAgKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGlzY29ubmVjdENvbXB1dGVkVXBkYXRlcyhpbnN0YW5jZSkge1xuICAgICAgdmFyIF9hO1xuICAgICAgKF9hID0gaW5zdGFuY2UuX2NvbXB1dGVkT2JzZXJ2ZXIpID09IG51bGwgPyB2b2lkIDAgOiBfYS5kaXNjb25uZWN0KCk7XG4gICAgICBkZWxldGUgaW5zdGFuY2UuX2NvbXB1dGVkT2JzZXJ2ZXI7XG4gICAgICByZXNldENvbXB1dGVkKGluc3RhbmNlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVzZXRDb21wdXRlZChpbnN0YW5jZSkge1xuICAgICAgY29uc3QgdmFsdWVzID0geyAuLi5pbnN0YW5jZS5fY29tcHV0ZWQgfTtcbiAgICAgIGluc3RhbmNlLl9jb21wdXRlZCA9IHt9O1xuICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0RXZlbnRzKGluc3RhbmNlKSB7XG4gICAgICBpbnN0YW5jZS5fZXZlbnRzID0gW107XG4gICAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIGluc3RhbmNlLiRvcHRpb25zLmV2ZW50cyB8fCBbXSkge1xuICAgICAgICBpZiAoaGFzT3duKGV2ZW50LCBcImhhbmRsZXJcIikpIHtcbiAgICAgICAgICByZWdpc3RlckV2ZW50KGluc3RhbmNlLCBldmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZXZlbnQpIHtcbiAgICAgICAgICAgIHJlZ2lzdGVyRXZlbnQoaW5zdGFuY2UsIGV2ZW50W2tleV0sIGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVuYmluZEV2ZW50cyhpbnN0YW5jZSkge1xuICAgICAgaW5zdGFuY2UuX2V2ZW50cy5mb3JFYWNoKCh1bmJpbmQpID0+IHVuYmluZCgpKTtcbiAgICAgIGRlbGV0ZSBpbnN0YW5jZS5fZXZlbnRzO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZWdpc3RlckV2ZW50KGluc3RhbmNlLCBldmVudCwga2V5KSB7XG4gICAgICBsZXQgeyBuYW1lLCBlbCwgaGFuZGxlciwgY2FwdHVyZSwgcGFzc2l2ZSwgZGVsZWdhdGUsIGZpbHRlciwgc2VsZiB9ID0gaXNQbGFpbk9iamVjdChldmVudCkgPyBldmVudCA6IHsgbmFtZToga2V5LCBoYW5kbGVyOiBldmVudCB9O1xuICAgICAgZWwgPSBpc0Z1bmN0aW9uKGVsKSA/IGVsLmNhbGwoaW5zdGFuY2UsIGluc3RhbmNlKSA6IGVsIHx8IGluc3RhbmNlLiRlbDtcbiAgICAgIGlmICghZWwgfHwgaXNBcnJheShlbCkgJiYgIWVsLmxlbmd0aCB8fCBmaWx0ZXIgJiYgIWZpbHRlci5jYWxsKGluc3RhbmNlLCBpbnN0YW5jZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaW5zdGFuY2UuX2V2ZW50cy5wdXNoKFxuICAgICAgICBvbihcbiAgICAgICAgICBlbCxcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIGRlbGVnYXRlID8gaXNTdHJpbmcoZGVsZWdhdGUpID8gZGVsZWdhdGUgOiBkZWxlZ2F0ZS5jYWxsKGluc3RhbmNlLCBpbnN0YW5jZSkgOiBudWxsLFxuICAgICAgICAgIGlzU3RyaW5nKGhhbmRsZXIpID8gaW5zdGFuY2VbaGFuZGxlcl0gOiBoYW5kbGVyLmJpbmQoaW5zdGFuY2UpLFxuICAgICAgICAgIHsgcGFzc2l2ZSwgY2FwdHVyZSwgc2VsZiB9XG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdE9ic2VydmVycyhpbnN0YW5jZSkge1xuICAgICAgaW5zdGFuY2UuX29ic2VydmVycyA9IFtdO1xuICAgICAgZm9yIChjb25zdCBvYnNlcnZlciBvZiBpbnN0YW5jZS4kb3B0aW9ucy5vYnNlcnZlIHx8IFtdKSB7XG4gICAgICAgIHJlZ2lzdGVyT2JzZXJ2YWJsZShpbnN0YW5jZSwgb2JzZXJ2ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiByZWdpc3Rlck9ic2VydmVyKGluc3RhbmNlLCAuLi5vYnNlcnZlcikge1xuICAgICAgaW5zdGFuY2UuX29ic2VydmVycy5wdXNoKC4uLm9ic2VydmVyKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGlzY29ubmVjdE9ic2VydmVycyhpbnN0YW5jZSkge1xuICAgICAgZm9yIChjb25zdCBvYnNlcnZlciBvZiBpbnN0YW5jZS5fb2JzZXJ2ZXJzKSB7XG4gICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcmVnaXN0ZXJPYnNlcnZhYmxlKGluc3RhbmNlLCBvYnNlcnZhYmxlKSB7XG4gICAgICBsZXQgeyBvYnNlcnZlLCB0YXJnZXQgPSBpbnN0YW5jZS4kZWwsIGhhbmRsZXIsIG9wdGlvbnMsIGZpbHRlciwgYXJncyB9ID0gb2JzZXJ2YWJsZTtcbiAgICAgIGlmIChmaWx0ZXIgJiYgIWZpbHRlci5jYWxsKGluc3RhbmNlLCBpbnN0YW5jZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qga2V5ID0gYF9vYnNlcnZlJHtpbnN0YW5jZS5fb2JzZXJ2ZXJzLmxlbmd0aH1gO1xuICAgICAgaWYgKGlzRnVuY3Rpb24odGFyZ2V0KSAmJiAhaGFzT3duKGluc3RhbmNlLCBrZXkpKSB7XG4gICAgICAgIHJlZ2lzdGVyQ29tcHV0ZWQoaW5zdGFuY2UsIGtleSwgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRhcmdldHMyID0gdGFyZ2V0LmNhbGwoaW5zdGFuY2UsIGluc3RhbmNlKTtcbiAgICAgICAgICByZXR1cm4gaXNBcnJheSh0YXJnZXRzMikgPyB0b05vZGVzKHRhcmdldHMyKSA6IHRhcmdldHMyO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGhhbmRsZXIgPSBpc1N0cmluZyhoYW5kbGVyKSA/IGluc3RhbmNlW2hhbmRsZXJdIDogaGFuZGxlci5iaW5kKGluc3RhbmNlKTtcbiAgICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMpKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zLmNhbGwoaW5zdGFuY2UsIGluc3RhbmNlKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRhcmdldHMgPSBoYXNPd24oaW5zdGFuY2UsIGtleSkgPyBpbnN0YW5jZVtrZXldIDogdGFyZ2V0O1xuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBvYnNlcnZlKHRhcmdldHMsIGhhbmRsZXIsIG9wdGlvbnMsIGFyZ3MpO1xuICAgICAgaWYgKGlzRnVuY3Rpb24odGFyZ2V0KSAmJiBpc0FycmF5KGluc3RhbmNlW2tleV0pKSB7XG4gICAgICAgIHJlZ2lzdGVyV2F0Y2goXG4gICAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgICAgeyBoYW5kbGVyOiB1cGRhdGVUYXJnZXRzKG9ic2VydmVyLCBvcHRpb25zKSwgaW1tZWRpYXRlOiBmYWxzZSB9LFxuICAgICAgICAgIGtleVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmVnaXN0ZXJPYnNlcnZlcihpbnN0YW5jZSwgb2JzZXJ2ZXIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGVUYXJnZXRzKG9ic2VydmVyLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gKHRhcmdldHMsIHByZXYpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCB0YXJnZXQgb2YgcHJldikge1xuICAgICAgICAgIGlmICghaW5jbHVkZXModGFyZ2V0cywgdGFyZ2V0KSkge1xuICAgICAgICAgICAgaWYgKG9ic2VydmVyLnVub2JzZXJ2ZSkge1xuICAgICAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUodGFyZ2V0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob2JzZXJ2ZXIub2JzZXJ2ZSkge1xuICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgdGFyZ2V0IG9mIHRhcmdldHMpIHtcbiAgICAgICAgICBpZiAoIWluY2x1ZGVzKHByZXYsIHRhcmdldCkgfHwgIW9ic2VydmVyLnVub2JzZXJ2ZSkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQsIG9wdGlvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0UHJvcHMoaW5zdGFuY2UpIHtcbiAgICAgIGNvbnN0IHsgJG9wdGlvbnMsICRwcm9wcyB9ID0gaW5zdGFuY2U7XG4gICAgICBjb25zdCBwcm9wcyA9IGdldFByb3BzKCRvcHRpb25zKTtcbiAgICAgIGFzc2lnbigkcHJvcHMsIHByb3BzKTtcbiAgICAgIGNvbnN0IHsgY29tcHV0ZWQsIG1ldGhvZHMgfSA9ICRvcHRpb25zO1xuICAgICAgZm9yIChsZXQga2V5IGluICRwcm9wcykge1xuICAgICAgICBpZiAoa2V5IGluIHByb3BzICYmICghY29tcHV0ZWQgfHwgIWhhc093bihjb21wdXRlZCwga2V5KSkgJiYgKCFtZXRob2RzIHx8ICFoYXNPd24obWV0aG9kcywga2V5KSkpIHtcbiAgICAgICAgICBpbnN0YW5jZVtrZXldID0gJHByb3BzW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0UHJvcHMob3B0cykge1xuICAgICAgY29uc3QgZGF0YSQxID0ge307XG4gICAgICBjb25zdCB7IGFyZ3MgPSBbXSwgcHJvcHMgPSB7fSwgZWwsIGlkIH0gPSBvcHRzO1xuICAgICAgaWYgKCFwcm9wcykge1xuICAgICAgICByZXR1cm4gZGF0YSQxO1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgY29uc3QgcHJvcCA9IGh5cGhlbmF0ZShrZXkpO1xuICAgICAgICBsZXQgdmFsdWUgPSBkYXRhKGVsLCBwcm9wKTtcbiAgICAgICAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlID0gcHJvcHNba2V5XSA9PT0gQm9vbGVhbiAmJiB2YWx1ZSA9PT0gXCJcIiA/IHRydWUgOiBjb2VyY2UkMShwcm9wc1trZXldLCB2YWx1ZSk7XG4gICAgICAgIGlmIChwcm9wID09PSBcInRhcmdldFwiICYmIHN0YXJ0c1dpdGgodmFsdWUsIFwiX1wiKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEkMVtrZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBjb25zdCBvcHRpb25zID0gcGFyc2VPcHRpb25zKGRhdGEoZWwsIGlkKSwgYXJncyk7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHByb3AgPSBjYW1lbGl6ZShrZXkpO1xuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKHByb3BzW3Byb3BdKSkge1xuICAgICAgICAgIGRhdGEkMVtwcm9wXSA9IGNvZXJjZSQxKHByb3BzW3Byb3BdLCBvcHRpb25zW2tleV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZGF0YSQxO1xuICAgIH1cbiAgICBjb25zdCBnZXRBdHRyaWJ1dGVzID0gbWVtb2l6ZSgoaWQsIHByb3BzKSA9PiB7XG4gICAgICBjb25zdCBhdHRyaWJ1dGVzID0gT2JqZWN0LmtleXMocHJvcHMpO1xuICAgICAgY29uc3QgZmlsdGVyID0gYXR0cmlidXRlcy5jb25jYXQoaWQpLm1hcCgoa2V5KSA9PiBbaHlwaGVuYXRlKGtleSksIGBkYXRhLSR7aHlwaGVuYXRlKGtleSl9YF0pLmZsYXQoKTtcbiAgICAgIHJldHVybiB7IGF0dHJpYnV0ZXMsIGZpbHRlciB9O1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIGluaXRQcm9wc09ic2VydmVyKGluc3RhbmNlKSB7XG4gICAgICBjb25zdCB7ICRvcHRpb25zLCAkcHJvcHMgfSA9IGluc3RhbmNlO1xuICAgICAgY29uc3QgeyBpZCwgcHJvcHMsIGVsIH0gPSAkb3B0aW9ucztcbiAgICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgeyBhdHRyaWJ1dGVzLCBmaWx0ZXIgfSA9IGdldEF0dHJpYnV0ZXMoaWQsIHByb3BzKTtcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKHJlY29yZHMpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGdldFByb3BzKCRvcHRpb25zKTtcbiAgICAgICAgaWYgKHJlY29yZHMuc29tZSgoeyBhdHRyaWJ1dGVOYW1lIH0pID0+IHtcbiAgICAgICAgICBjb25zdCBwcm9wID0gYXR0cmlidXRlTmFtZS5yZXBsYWNlKFwiZGF0YS1cIiwgXCJcIik7XG4gICAgICAgICAgcmV0dXJuIChwcm9wID09PSBpZCA/IGF0dHJpYnV0ZXMgOiBbY2FtZWxpemUocHJvcCksIGNhbWVsaXplKGF0dHJpYnV0ZU5hbWUpXSkuc29tZShcbiAgICAgICAgICAgIChwcm9wMikgPT4gIWlzVW5kZWZpbmVkKGRhdGFbcHJvcDJdKSAmJiBkYXRhW3Byb3AyXSAhPT0gJHByb3BzW3Byb3AyXVxuICAgICAgICAgICk7XG4gICAgICAgIH0pKSB7XG4gICAgICAgICAgaW5zdGFuY2UuJHJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbCwge1xuICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IGZpbHRlclxuICAgICAgfSk7XG4gICAgICByZWdpc3Rlck9ic2VydmVyKGluc3RhbmNlLCBvYnNlcnZlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsbEhvb2soaW5zdGFuY2UsIGhvb2spIHtcbiAgICAgIHZhciBfYTtcbiAgICAgIChfYSA9IGluc3RhbmNlLiRvcHRpb25zW2hvb2tdKSA9PSBudWxsID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlci5jYWxsKGluc3RhbmNlKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNhbGxDb25uZWN0ZWQoaW5zdGFuY2UpIHtcbiAgICAgIGlmIChpbnN0YW5jZS5fY29ubmVjdGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGluaXRQcm9wcyhpbnN0YW5jZSk7XG4gICAgICBjYWxsSG9vayhpbnN0YW5jZSwgXCJiZWZvcmVDb25uZWN0XCIpO1xuICAgICAgaW5zdGFuY2UuX2Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICBpbml0RXZlbnRzKGluc3RhbmNlKTtcbiAgICAgIGluaXRVcGRhdGVzKGluc3RhbmNlKTtcbiAgICAgIGluaXRXYXRjaGVzKGluc3RhbmNlKTtcbiAgICAgIGluaXRPYnNlcnZlcnMoaW5zdGFuY2UpO1xuICAgICAgaW5pdFByb3BzT2JzZXJ2ZXIoaW5zdGFuY2UpO1xuICAgICAgaW5pdENvbXB1dGVkVXBkYXRlcyhpbnN0YW5jZSk7XG4gICAgICBjYWxsSG9vayhpbnN0YW5jZSwgXCJjb25uZWN0ZWRcIik7XG4gICAgICBjYWxsVXBkYXRlKGluc3RhbmNlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2FsbERpc2Nvbm5lY3RlZChpbnN0YW5jZSkge1xuICAgICAgaWYgKCFpbnN0YW5jZS5fY29ubmVjdGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNhbGxIb29rKGluc3RhbmNlLCBcImJlZm9yZURpc2Nvbm5lY3RcIik7XG4gICAgICB1bmJpbmRFdmVudHMoaW5zdGFuY2UpO1xuICAgICAgY2xlYXJVcGRhdGVEYXRhKGluc3RhbmNlKTtcbiAgICAgIGRpc2Nvbm5lY3RPYnNlcnZlcnMoaW5zdGFuY2UpO1xuICAgICAgZGlzY29ubmVjdENvbXB1dGVkVXBkYXRlcyhpbnN0YW5jZSk7XG4gICAgICBjYWxsSG9vayhpbnN0YW5jZSwgXCJkaXNjb25uZWN0ZWRcIik7XG4gICAgICBpbnN0YW5jZS5fY29ubmVjdGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbGV0IHVpZCA9IDA7XG4gICAgZnVuY3Rpb24gaW5pdCQxKGluc3RhbmNlLCBvcHRpb25zID0ge30pIHtcbiAgICAgIG9wdGlvbnMuZGF0YSA9IG5vcm1hbGl6ZURhdGEob3B0aW9ucywgaW5zdGFuY2UuY29uc3RydWN0b3Iub3B0aW9ucyk7XG4gICAgICBpbnN0YW5jZS4kb3B0aW9ucyA9IG1lcmdlT3B0aW9ucyhpbnN0YW5jZS5jb25zdHJ1Y3Rvci5vcHRpb25zLCBvcHRpb25zLCBpbnN0YW5jZSk7XG4gICAgICBpbnN0YW5jZS4kcHJvcHMgPSB7fTtcbiAgICAgIGluc3RhbmNlLl91aWQgPSB1aWQrKztcbiAgICAgIGluaXREYXRhKGluc3RhbmNlKTtcbiAgICAgIGluaXRNZXRob2RzKGluc3RhbmNlKTtcbiAgICAgIGluaXRDb21wdXRlZChpbnN0YW5jZSk7XG4gICAgICBjYWxsSG9vayhpbnN0YW5jZSwgXCJjcmVhdGVkXCIpO1xuICAgICAgaWYgKG9wdGlvbnMuZWwpIHtcbiAgICAgICAgaW5zdGFuY2UuJG1vdW50KG9wdGlvbnMuZWwpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBpbml0RGF0YShpbnN0YW5jZSkge1xuICAgICAgY29uc3QgeyBkYXRhID0ge30gfSA9IGluc3RhbmNlLiRvcHRpb25zO1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgICAgICBpbnN0YW5jZS4kcHJvcHNba2V5XSA9IGluc3RhbmNlW2tleV0gPSBkYXRhW2tleV07XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGluaXRNZXRob2RzKGluc3RhbmNlKSB7XG4gICAgICBjb25zdCB7IG1ldGhvZHMgfSA9IGluc3RhbmNlLiRvcHRpb25zO1xuICAgICAgaWYgKG1ldGhvZHMpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbWV0aG9kcykge1xuICAgICAgICAgIGluc3RhbmNlW2tleV0gPSBtZXRob2RzW2tleV0uYmluZChpbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gbm9ybWFsaXplRGF0YSh7IGRhdGEgPSB7fSB9LCB7IGFyZ3MgPSBbXSwgcHJvcHMgPSB7fSB9KSB7XG4gICAgICBpZiAoaXNBcnJheShkYXRhKSkge1xuICAgICAgICBkYXRhID0gZGF0YS5zbGljZSgwLCBhcmdzLmxlbmd0aCkucmVkdWNlKChkYXRhMiwgdmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKGlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICBhc3NpZ24oZGF0YTIsIHZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0YTJbYXJnc1tpbmRleF1dID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkYXRhMjtcbiAgICAgICAgfSwge30pO1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgICAgICBpZiAoaXNVbmRlZmluZWQoZGF0YVtrZXldKSkge1xuICAgICAgICAgIGRlbGV0ZSBkYXRhW2tleV07XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcHNba2V5XSkge1xuICAgICAgICAgIGRhdGFba2V5XSA9IGNvZXJjZSQxKHByb3BzW2tleV0sIGRhdGFba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGNvbnN0IEFwcCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIGluaXQkMSh0aGlzLCBvcHRpb25zKTtcbiAgICB9O1xuICAgIEFwcC51dGlsID0gdXRpbDtcbiAgICBBcHAub3B0aW9ucyA9IHt9O1xuICAgIEFwcC52ZXJzaW9uID0gXCIzLjIxLjktZGV2Ljk2NjhhYzNjOVwiO1xuXG4gICAgY29uc3QgUFJFRklYID0gXCJ1ay1cIjtcbiAgICBjb25zdCBEQVRBID0gXCJfX3Vpa2l0X19cIjtcbiAgICBjb25zdCBjb21wb25lbnRzJDIgPSB7fTtcbiAgICBmdW5jdGlvbiBjb21wb25lbnQobmFtZSwgb3B0aW9ucykge1xuICAgICAgdmFyIF9hLCBfYjtcbiAgICAgIGNvbnN0IGlkID0gUFJFRklYICsgaHlwaGVuYXRlKG5hbWUpO1xuICAgICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICAgIGlmICghY29tcG9uZW50cyQyW2lkXS5vcHRpb25zKSB7XG4gICAgICAgICAgY29tcG9uZW50cyQyW2lkXSA9IEFwcC5leHRlbmQoY29tcG9uZW50cyQyW2lkXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMkMltpZF07XG4gICAgICB9XG4gICAgICBuYW1lID0gY2FtZWxpemUobmFtZSk7XG4gICAgICBBcHBbbmFtZV0gPSAoZWxlbWVudCwgZGF0YSkgPT4gY3JlYXRlQ29tcG9uZW50KG5hbWUsIGVsZW1lbnQsIGRhdGEpO1xuICAgICAgY29uc3Qgb3B0ID0gKF9hID0gb3B0aW9ucy5vcHRpb25zKSAhPSBudWxsID8gX2EgOiB7IC4uLm9wdGlvbnMgfTtcbiAgICAgIG9wdC5pZCA9IGlkO1xuICAgICAgb3B0Lm5hbWUgPSBuYW1lO1xuICAgICAgKF9iID0gb3B0Lmluc3RhbGwpID09IG51bGwgPyB2b2lkIDAgOiBfYi5jYWxsKG9wdCwgQXBwLCBvcHQsIG5hbWUpO1xuICAgICAgaWYgKEFwcC5faW5pdGlhbGl6ZWQgJiYgIW9wdC5mdW5jdGlvbmFsKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBjcmVhdGVDb21wb25lbnQobmFtZSwgYFske2lkfV0sW2RhdGEtJHtpZH1dYCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbXBvbmVudHMkMltpZF0gPSBvcHQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudChuYW1lLCBlbGVtZW50LCBkYXRhLCAuLi5hcmdzKSB7XG4gICAgICBjb25zdCBDb21wb25lbnQgPSBjb21wb25lbnQobmFtZSk7XG4gICAgICByZXR1cm4gQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCA/IG5ldyBDb21wb25lbnQoeyBkYXRhOiBpc1BsYWluT2JqZWN0KGVsZW1lbnQpID8gZWxlbWVudCA6IFtlbGVtZW50LCBkYXRhLCAuLi5hcmdzXSB9KSA6IGVsZW1lbnQgPyAkJChlbGVtZW50KS5tYXAoaW5pdClbMF0gOiBpbml0KCk7XG4gICAgICBmdW5jdGlvbiBpbml0KGVsZW1lbnQyKSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gZ2V0Q29tcG9uZW50KGVsZW1lbnQyLCBuYW1lKTtcbiAgICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLiRkZXN0cm95KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBDb21wb25lbnQoeyBlbDogZWxlbWVudDIsIGRhdGEgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldENvbXBvbmVudHMoZWxlbWVudCkge1xuICAgICAgcmV0dXJuIChlbGVtZW50ID09IG51bGwgPyB2b2lkIDAgOiBlbGVtZW50W0RBVEFdKSB8fCB7fTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Q29tcG9uZW50KGVsZW1lbnQsIG5hbWUpIHtcbiAgICAgIHJldHVybiBnZXRDb21wb25lbnRzKGVsZW1lbnQpW25hbWVdO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhdHRhY2hUb0VsZW1lbnQoZWxlbWVudCwgaW5zdGFuY2UpIHtcbiAgICAgIGlmICghZWxlbWVudFtEQVRBXSkge1xuICAgICAgICBlbGVtZW50W0RBVEFdID0ge307XG4gICAgICB9XG4gICAgICBlbGVtZW50W0RBVEFdW2luc3RhbmNlLiRvcHRpb25zLm5hbWVdID0gaW5zdGFuY2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRldGFjaEZyb21FbGVtZW50KGVsZW1lbnQsIGluc3RhbmNlKSB7XG4gICAgICB2YXIgX2E7XG4gICAgICAoX2EgPSBlbGVtZW50W0RBVEFdKSA9PSBudWxsID8gdHJ1ZSA6IGRlbGV0ZSBfYVtpbnN0YW5jZS4kb3B0aW9ucy5uYW1lXTtcbiAgICAgIGlmIChpc0VtcHR5KGVsZW1lbnRbREFUQV0pKSB7XG4gICAgICAgIGRlbGV0ZSBlbGVtZW50W0RBVEFdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdsb2JhbEFwaShBcHApIHtcbiAgICAgIEFwcC5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICBBcHAuZ2V0Q29tcG9uZW50cyA9IGdldENvbXBvbmVudHM7XG4gICAgICBBcHAuZ2V0Q29tcG9uZW50ID0gZ2V0Q29tcG9uZW50O1xuICAgICAgQXBwLnVwZGF0ZSA9IHVwZGF0ZTtcbiAgICAgIEFwcC51c2UgPSBmdW5jdGlvbihwbHVnaW4pIHtcbiAgICAgICAgaWYgKHBsdWdpbi5pbnN0YWxsZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcGx1Z2luLmNhbGwobnVsbCwgdGhpcyk7XG4gICAgICAgIHBsdWdpbi5pbnN0YWxsZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH07XG4gICAgICBBcHAubWl4aW4gPSBmdW5jdGlvbihtaXhpbiwgY29tcG9uZW50Mikge1xuICAgICAgICBjb21wb25lbnQyID0gKGlzU3RyaW5nKGNvbXBvbmVudDIpID8gdGhpcy5jb21wb25lbnQoY29tcG9uZW50MikgOiBjb21wb25lbnQyKSB8fCB0aGlzO1xuICAgICAgICBjb21wb25lbnQyLm9wdGlvbnMgPSBtZXJnZU9wdGlvbnMoY29tcG9uZW50Mi5vcHRpb25zLCBtaXhpbik7XG4gICAgICB9O1xuICAgICAgQXBwLmV4dGVuZCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyB8fCAob3B0aW9ucyA9IHt9KTtcbiAgICAgICAgY29uc3QgU3VwZXIgPSB0aGlzO1xuICAgICAgICBjb25zdCBTdWIgPSBmdW5jdGlvbiBVSWtpdENvbXBvbmVudChvcHRpb25zMikge1xuICAgICAgICAgIGluaXQkMSh0aGlzLCBvcHRpb25zMik7XG4gICAgICAgIH07XG4gICAgICAgIFN1Yi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFN1cGVyLnByb3RvdHlwZSk7XG4gICAgICAgIFN1Yi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTdWI7XG4gICAgICAgIFN1Yi5vcHRpb25zID0gbWVyZ2VPcHRpb25zKFN1cGVyLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICBTdWIuc3VwZXIgPSBTdXBlcjtcbiAgICAgICAgU3ViLmV4dGVuZCA9IFN1cGVyLmV4dGVuZDtcbiAgICAgICAgcmV0dXJuIFN1YjtcbiAgICAgIH07XG4gICAgICBsZXQgY29udGFpbmVyO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFwcCwgXCJjb250YWluZXJcIiwge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRhaW5lciB8fCBkb2N1bWVudC5ib2R5O1xuICAgICAgICB9LFxuICAgICAgICBzZXQoZWxlbWVudCkge1xuICAgICAgICAgIGNvbnRhaW5lciA9ICQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGUoZWxlbWVudCwgZSkge1xuICAgICAgZWxlbWVudCA9IGVsZW1lbnQgPyB0b05vZGUoZWxlbWVudCkgOiBkb2N1bWVudC5ib2R5O1xuICAgICAgZm9yIChjb25zdCBwYXJlbnRFbCBvZiBwYXJlbnRzKGVsZW1lbnQpLnJldmVyc2UoKSkge1xuICAgICAgICB1cGRhdGVFbGVtZW50KHBhcmVudEVsLCBlKTtcbiAgICAgIH1cbiAgICAgIGFwcGx5KGVsZW1lbnQsIChlbGVtZW50MikgPT4gdXBkYXRlRWxlbWVudChlbGVtZW50MiwgZSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGVFbGVtZW50KGVsZW1lbnQsIGUpIHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBnZXRDb21wb25lbnRzKGVsZW1lbnQpO1xuICAgICAgZm9yIChjb25zdCBuYW1lIGluIGNvbXBvbmVudHMpIHtcbiAgICAgICAgY2FsbFVwZGF0ZShjb21wb25lbnRzW25hbWVdLCBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YW5jZUFwaShBcHApIHtcbiAgICAgIEFwcC5wcm90b3R5cGUuJG1vdW50ID0gZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICBhdHRhY2hUb0VsZW1lbnQoZWwsIGluc3RhbmNlKTtcbiAgICAgICAgaW5zdGFuY2UuJG9wdGlvbnMuZWwgPSBlbDtcbiAgICAgICAgaWYgKGRvY3VtZW50LmNvbnRhaW5zKGVsKSkge1xuICAgICAgICAgIGNhbGxDb25uZWN0ZWQoaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgQXBwLnByb3RvdHlwZS4kZGVzdHJveSA9IGZ1bmN0aW9uKHJlbW92ZUVsID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICBjb25zdCB7IGVsIH0gPSBpbnN0YW5jZS4kb3B0aW9ucztcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgY2FsbERpc2Nvbm5lY3RlZChpbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2FsbEhvb2soaW5zdGFuY2UsIFwiZGVzdHJveVwiKTtcbiAgICAgICAgZGV0YWNoRnJvbUVsZW1lbnQoZWwsIGluc3RhbmNlKTtcbiAgICAgICAgaWYgKHJlbW92ZUVsKSB7XG4gICAgICAgICAgcmVtb3ZlJDEoaW5zdGFuY2UuJGVsKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIEFwcC5wcm90b3R5cGUuJGNyZWF0ZSA9IGNyZWF0ZUNvbXBvbmVudDtcbiAgICAgIEFwcC5wcm90b3R5cGUuJGVtaXQgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIGNhbGxVcGRhdGUodGhpcywgZSk7XG4gICAgICB9O1xuICAgICAgQXBwLnByb3RvdHlwZS4kdXBkYXRlID0gZnVuY3Rpb24oZWxlbWVudCA9IHRoaXMuJGVsLCBlKSB7XG4gICAgICAgIHVwZGF0ZShlbGVtZW50LCBlKTtcbiAgICAgIH07XG4gICAgICBBcHAucHJvdG90eXBlLiRyZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjYWxsRGlzY29ubmVjdGVkKHRoaXMpO1xuICAgICAgICBjYWxsQ29ubmVjdGVkKHRoaXMpO1xuICAgICAgfTtcbiAgICAgIEFwcC5wcm90b3R5cGUuJGdldENvbXBvbmVudCA9IGdldENvbXBvbmVudDtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEFwcC5wcm90b3R5cGUsIHtcbiAgICAgICAgJGVsOiB7XG4gICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJG9wdGlvbnMuZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAkY29udGFpbmVyOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEFwcCwgXCJjb250YWluZXJcIilcbiAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgaWQgPSAxO1xuICAgIGZ1bmN0aW9uIGdlbmVyYXRlSWQoaW5zdGFuY2UsIGVsID0gbnVsbCkge1xuICAgICAgcmV0dXJuIChlbCA9PSBudWxsID8gdm9pZCAwIDogZWwuaWQpIHx8IGAke2luc3RhbmNlLiRvcHRpb25zLmlkfS0ke2lkKyt9YDtcbiAgICB9XG5cbiAgICB2YXIgU2xpZGVyTmF2ID0ge1xuICAgICAgaTE4bjoge1xuICAgICAgICBuZXh0OiBcIk5leHQgc2xpZGVcIixcbiAgICAgICAgcHJldmlvdXM6IFwiUHJldmlvdXMgc2xpZGVcIixcbiAgICAgICAgc2xpZGVYOiBcIlNsaWRlICVzXCIsXG4gICAgICAgIHNsaWRlTGFiZWw6IFwiJXMgb2YgJXNcIixcbiAgICAgICAgcm9sZTogXCJTdHJpbmdcIlxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgc2VsTmF2OiBmYWxzZSxcbiAgICAgICAgcm9sZTogXCJyZWdpb25cIlxuICAgICAgfSxcbiAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIG5hdjogKHsgc2VsTmF2IH0sICRlbCkgPT4gJChzZWxOYXYsICRlbCksXG4gICAgICAgIG5hdkNoaWxkcmVuKCkge1xuICAgICAgICAgIHJldHVybiBjaGlsZHJlbih0aGlzLm5hdik7XG4gICAgICAgIH0sXG4gICAgICAgIHNlbE5hdkl0ZW06ICh7IGF0dHJJdGVtIH0pID0+IGBbJHthdHRySXRlbX1dLFtkYXRhLSR7YXR0ckl0ZW19XWAsXG4gICAgICAgIG5hdkl0ZW1zKF8sICRlbCkge1xuICAgICAgICAgIHJldHVybiAkJCh0aGlzLnNlbE5hdkl0ZW0sICRlbCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB3YXRjaDoge1xuICAgICAgICBuYXYobmF2LCBwcmV2KSB7XG4gICAgICAgICAgYXR0cihuYXYsIFwicm9sZVwiLCBcInRhYmxpc3RcIik7XG4gICAgICAgICAgdGhpcy5wYWROYXZpdGVtcygpO1xuICAgICAgICAgIGlmIChwcmV2KSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBsaXN0KGxpc3QpIHtcbiAgICAgICAgICBpZiAoaXNUYWcobGlzdCwgXCJ1bFwiKSkge1xuICAgICAgICAgICAgYXR0cihsaXN0LCBcInJvbGVcIiwgXCJwcmVzZW50YXRpb25cIik7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBuYXZDaGlsZHJlbihjaGlsZHJlbjIpIHtcbiAgICAgICAgICBhdHRyKGNoaWxkcmVuMiwgXCJyb2xlXCIsIFwicHJlc2VudGF0aW9uXCIpO1xuICAgICAgICAgIHRoaXMucGFkTmF2aXRlbXMoKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZU5hdigpO1xuICAgICAgICB9LFxuICAgICAgICBuYXZJdGVtcyhpdGVtcykge1xuICAgICAgICAgIGZvciAoY29uc3QgZWwgb2YgaXRlbXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNtZCA9IGRhdGEoZWwsIHRoaXMuYXR0ckl0ZW0pO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gJChcImEsYnV0dG9uXCIsIGVsKSB8fCBlbDtcbiAgICAgICAgICAgIGxldCBhcmlhTGFiZWw7XG4gICAgICAgICAgICBsZXQgYXJpYUNvbnRyb2xzID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChpc051bWVyaWMoY21kKSkge1xuICAgICAgICAgICAgICBjb25zdCBpdGVtID0gdG9OdW1iZXIoY21kKTtcbiAgICAgICAgICAgICAgY29uc3Qgc2xpZGUgPSB0aGlzLnNsaWRlc1tpdGVtXTtcbiAgICAgICAgICAgICAgaWYgKHNsaWRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzbGlkZS5pZCkge1xuICAgICAgICAgICAgICAgICAgc2xpZGUuaWQgPSBnZW5lcmF0ZUlkKHRoaXMsIHNsaWRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXJpYUNvbnRyb2xzID0gc2xpZGUuaWQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYXJpYUxhYmVsID0gdGhpcy50KFwic2xpZGVYXCIsIHRvRmxvYXQoY21kKSArIDEpO1xuICAgICAgICAgICAgICBhdHRyKGJ1dHRvbiwgXCJyb2xlXCIsIFwidGFiXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5saXN0LmlkKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmxpc3QuaWQgPSBnZW5lcmF0ZUlkKHRoaXMsIHRoaXMubGlzdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFyaWFDb250cm9scyA9IHRoaXMubGlzdC5pZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBhcmlhTGFiZWwgPSB0aGlzLnQoY21kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF0dHIoYnV0dG9uLCB7XG4gICAgICAgICAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBhcmlhQ29udHJvbHMsXG4gICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBhdHRyKGJ1dHRvbiwgXCJhcmlhLWxhYmVsXCIpIHx8IGFyaWFMYWJlbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzbGlkZXMoc2xpZGVzKSB7XG4gICAgICAgICAgc2xpZGVzLmZvckVhY2goXG4gICAgICAgICAgICAoc2xpZGUsIGkpID0+IGF0dHIoc2xpZGUsIHtcbiAgICAgICAgICAgICAgcm9sZTogdGhpcy5uYXYgPyBcInRhYnBhbmVsXCIgOiBcImdyb3VwXCIsXG4gICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiB0aGlzLnQoXCJzbGlkZUxhYmVsXCIsIGkgKyAxLCB0aGlzLmxlbmd0aCksXG4gICAgICAgICAgICAgIFwiYXJpYS1yb2xlZGVzY3JpcHRpb25cIjogdGhpcy5uYXYgPyBudWxsIDogXCJzbGlkZVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5wYWROYXZpdGVtcygpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY29ubmVjdGVkKCkge1xuICAgICAgICBhdHRyKHRoaXMuJGVsLCB7XG4gICAgICAgICAgcm9sZTogdGhpcy5yb2xlLFxuICAgICAgICAgIFwiYXJpYS1yb2xlZGVzY3JpcHRpb25cIjogXCJjYXJvdXNlbFwiXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHVwZGF0ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgd3JpdGUoKSB7XG4gICAgICAgICAgICB0aGlzLm5hdkl0ZW1zLmNvbmNhdCh0aGlzLm5hdikuZm9yRWFjaCgoZWwpID0+IGVsICYmIChlbC5oaWRkZW4gPSAhdGhpcy5tYXhJbmRleCkpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVOYXYoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV2ZW50czogW1wicmVzaXplXCJdXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBldmVudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiY2xpY2sga2V5ZG93blwiLFxuICAgICAgICAgIGRlbGVnYXRlOiAoeyBzZWxOYXZJdGVtIH0pID0+IHNlbE5hdkl0ZW0sXG4gICAgICAgICAgZmlsdGVyOiAoeyBwYXJhbGxheCB9KSA9PiAhcGFyYWxsYXgsXG4gICAgICAgICAgaGFuZGxlcihlKSB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdChcImEsYnV0dG9uXCIpICYmIChlLnR5cGUgPT09IFwiY2xpY2tcIiB8fCBlLmtleUNvZGUgPT09IGtleU1hcC5TUEFDRSkpIHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICB0aGlzLnNob3coZGF0YShlLmN1cnJlbnQsIHRoaXMuYXR0ckl0ZW0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIml0ZW1zaG93XCIsXG4gICAgICAgICAgaGFuZGxlcjogXCJ1cGRhdGVOYXZcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJrZXlkb3duXCIsXG4gICAgICAgICAgZGVsZWdhdGU6ICh7IHNlbE5hdkl0ZW0gfSkgPT4gc2VsTmF2SXRlbSxcbiAgICAgICAgICBmaWx0ZXI6ICh7IHBhcmFsbGF4IH0pID0+ICFwYXJhbGxheCxcbiAgICAgICAgICBoYW5kbGVyKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgY3VycmVudCwga2V5Q29kZSB9ID0gZTtcbiAgICAgICAgICAgIGNvbnN0IGNtZCA9IGRhdGEoY3VycmVudCwgdGhpcy5hdHRySXRlbSk7XG4gICAgICAgICAgICBpZiAoIWlzTnVtZXJpYyhjbWQpKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpID0ga2V5Q29kZSA9PT0ga2V5TWFwLkhPTUUgPyAwIDoga2V5Q29kZSA9PT0ga2V5TWFwLkVORCA/IFwibGFzdFwiIDoga2V5Q29kZSA9PT0ga2V5TWFwLkxFRlQgPyBcInByZXZpb3VzXCIgOiBrZXlDb2RlID09PSBrZXlNYXAuUklHSFQgPyBcIm5leHRcIiA6IC0xO1xuICAgICAgICAgICAgaWYgKH5pKSB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgdGhpcy5zaG93KGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdXBkYXRlTmF2KCkge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRWYWxpZEluZGV4KCk7XG4gICAgICAgICAgZm9yIChjb25zdCBlbCBvZiB0aGlzLm5hdkl0ZW1zKSB7XG4gICAgICAgICAgICBjb25zdCBjbWQgPSBkYXRhKGVsLCB0aGlzLmF0dHJJdGVtKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9ICQoXCJhLGJ1dHRvblwiLCBlbCkgfHwgZWw7XG4gICAgICAgICAgICBpZiAoaXNOdW1lcmljKGNtZCkpIHtcbiAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRvTnVtYmVyKGNtZCk7XG4gICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZSA9IGl0ZW0gPT09IGluZGV4O1xuICAgICAgICAgICAgICB0b2dnbGVDbGFzcyhlbCwgdGhpcy5jbHNBY3RpdmUsIGFjdGl2ZSk7XG4gICAgICAgICAgICAgIHRvZ2dsZUNsYXNzKGJ1dHRvbiwgXCJ1ay1kaXNhYmxlZFwiLCB0aGlzLnBhcmFsbGF4KTtcbiAgICAgICAgICAgICAgYXR0cihidXR0b24sIHtcbiAgICAgICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjogYWN0aXZlLFxuICAgICAgICAgICAgICAgIHRhYmluZGV4OiBhY3RpdmUgJiYgIXRoaXMucGFyYWxsYXggPyBudWxsIDogLTFcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGlmIChhY3RpdmUgJiYgYnV0dG9uICYmIG1hdGNoZXMocGFyZW50KGVsKSwgXCI6Zm9jdXMtd2l0aGluXCIpKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmZvY3VzKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRvZ2dsZUNsYXNzKFxuICAgICAgICAgICAgICAgIGVsLFxuICAgICAgICAgICAgICAgIFwidWstaW52aXNpYmxlXCIsXG4gICAgICAgICAgICAgICAgdGhpcy5maW5pdGUgJiYgKGNtZCA9PT0gXCJwcmV2aW91c1wiICYmIGluZGV4ID09PSAwIHx8IGNtZCA9PT0gXCJuZXh0XCIgJiYgaW5kZXggPj0gdGhpcy5tYXhJbmRleClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHBhZE5hdml0ZW1zKCkge1xuICAgICAgICAgIGlmICghdGhpcy5uYXYpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgY2hpbGRyZW4yID0gW107XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRyMiA9IGAke3RoaXMuYXR0ckl0ZW19PVwiJHtpfVwiYDtcbiAgICAgICAgICAgIGNoaWxkcmVuMltpXSA9IHRoaXMubmF2Q2hpbGRyZW4uZmluZExhc3QoKGVsKSA9PiBlbC5tYXRjaGVzKGBbJHthdHRyMn1dYCkpIHx8ICQoYDxsaSAke2F0dHIyfT48YSBocmVmPjwvYT48L2xpPmApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzRXF1YWwoY2hpbGRyZW4yLCB0aGlzLm5hdkNoaWxkcmVuKSkge1xuICAgICAgICAgICAgaHRtbCh0aGlzLm5hdiwgY2hpbGRyZW4yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZWFzZU91dFF1YWQgPSBcImN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KVwiO1xuICAgIGNvbnN0IGVhc2VPdXRRdWFydCA9IFwiY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKVwiO1xuICAgIHZhciBTbGlkZXIgPSB7XG4gICAgICBtaXhpbnM6IFtTbGlkZXJBdXRvcGxheSwgU2xpZGVyRHJhZywgU2xpZGVyTmF2LCBJMThuXSxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGNsc0FjdGl2YXRlZDogU3RyaW5nLFxuICAgICAgICBlYXNpbmc6IFN0cmluZyxcbiAgICAgICAgaW5kZXg6IE51bWJlcixcbiAgICAgICAgZmluaXRlOiBCb29sZWFuLFxuICAgICAgICB2ZWxvY2l0eTogTnVtYmVyXG4gICAgICB9LFxuICAgICAgZGF0YTogKCkgPT4gKHtcbiAgICAgICAgZWFzaW5nOiBcImVhc2VcIixcbiAgICAgICAgZmluaXRlOiBmYWxzZSxcbiAgICAgICAgdmVsb2NpdHk6IDEsXG4gICAgICAgIGluZGV4OiAwLFxuICAgICAgICBwcmV2SW5kZXg6IC0xLFxuICAgICAgICBzdGFjazogW10sXG4gICAgICAgIHBlcmNlbnQ6IDAsXG4gICAgICAgIGNsc0FjdGl2ZTogXCJ1ay1hY3RpdmVcIixcbiAgICAgICAgY2xzQWN0aXZhdGVkOiBcIlwiLFxuICAgICAgICBjbHNFbnRlcjogXCJ1ay1zbGlkZS1lbnRlclwiLFxuICAgICAgICBjbHNMZWF2ZTogXCJ1ay1zbGlkZS1sZWF2ZVwiLFxuICAgICAgICBjbHNTbGlkZUFjdGl2ZTogXCJ1ay1zbGlkZS1hY3RpdmVcIixcbiAgICAgICAgVHJhbnNpdGlvbmVyOiBmYWxzZSxcbiAgICAgICAgdHJhbnNpdGlvbk9wdGlvbnM6IHt9XG4gICAgICB9KSxcbiAgICAgIGNvbm5lY3RlZCgpIHtcbiAgICAgICAgdGhpcy5wcmV2SW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5pbmRleCA9IHRoaXMuZ2V0VmFsaWRJbmRleCh0aGlzLiRwcm9wcy5pbmRleCk7XG4gICAgICAgIHRoaXMuc3RhY2sgPSBbXTtcbiAgICAgIH0sXG4gICAgICBkaXNjb25uZWN0ZWQoKSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKHRoaXMuc2xpZGVzLCB0aGlzLmNsc0FjdGl2ZSk7XG4gICAgICB9LFxuICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgZHVyYXRpb246ICh7IHZlbG9jaXR5IH0sICRlbCkgPT4gc3BlZWRVcCgkZWwub2Zmc2V0V2lkdGggLyB2ZWxvY2l0eSksXG4gICAgICAgIGxpc3Q6ICh7IHNlbExpc3QgfSwgJGVsKSA9PiAkKHNlbExpc3QsICRlbCksXG4gICAgICAgIG1heEluZGV4KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmxlbmd0aCAtIDE7XG4gICAgICAgIH0sXG4gICAgICAgIHNsaWRlcygpIHtcbiAgICAgICAgICByZXR1cm4gY2hpbGRyZW4odGhpcy5saXN0KTtcbiAgICAgICAgfSxcbiAgICAgICAgbGVuZ3RoKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnNsaWRlcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB3YXRjaDoge1xuICAgICAgICBzbGlkZXMoc2xpZGVzLCBwcmV2KSB7XG4gICAgICAgICAgaWYgKHByZXYpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBldmVudHM6IHtcbiAgICAgICAgaXRlbXNob3coeyB0YXJnZXQgfSkge1xuICAgICAgICAgIGFkZENsYXNzKHRhcmdldCwgdGhpcy5jbHNFbnRlciwgdGhpcy5jbHNTbGlkZUFjdGl2ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGl0ZW1zaG93bih7IHRhcmdldCB9KSB7XG4gICAgICAgICAgcmVtb3ZlQ2xhc3ModGFyZ2V0LCB0aGlzLmNsc0VudGVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgaXRlbWhpZGUoeyB0YXJnZXQgfSkge1xuICAgICAgICAgIGFkZENsYXNzKHRhcmdldCwgdGhpcy5jbHNMZWF2ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGl0ZW1oaWRkZW4oeyB0YXJnZXQgfSkge1xuICAgICAgICAgIHJlbW92ZUNsYXNzKHRhcmdldCwgdGhpcy5jbHNMZWF2ZSwgdGhpcy5jbHNTbGlkZUFjdGl2ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBtZXRob2RzOiB7XG4gICAgICAgIHNob3coaW5kZXgsIGZvcmNlID0gZmFsc2UpIHtcbiAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgaWYgKHRoaXMuZHJhZ2dpbmcgfHwgIXRoaXMubGVuZ3RoIHx8IHRoaXMucGFyYWxsYXgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgeyBzdGFjayB9ID0gdGhpcztcbiAgICAgICAgICBjb25zdCBxdWV1ZUluZGV4ID0gZm9yY2UgPyAwIDogc3RhY2subGVuZ3RoO1xuICAgICAgICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgICAgICAgICAgc3RhY2suc3BsaWNlKHF1ZXVlSW5kZXgsIDEpO1xuICAgICAgICAgICAgaWYgKHN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgICB0aGlzLnNob3coc3RhY2suc2hpZnQoKSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgICBzdGFja1tmb3JjZSA/IFwidW5zaGlmdFwiIDogXCJwdXNoXCJdKGluZGV4KTtcbiAgICAgICAgICBpZiAoIWZvcmNlICYmIHN0YWNrLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGlmIChzdGFjay5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgKF9hID0gdGhpcy5fdHJhbnNpdGlvbmVyKSA9PSBudWxsID8gdm9pZCAwIDogX2EuZm9yd2FyZChNYXRoLm1pbih0aGlzLmR1cmF0aW9uLCAyMDApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgcHJldkluZGV4ID0gdGhpcy5nZXRJbmRleCh0aGlzLmluZGV4KTtcbiAgICAgICAgICBjb25zdCBwcmV2ID0gaGFzQ2xhc3ModGhpcy5zbGlkZXMsIHRoaXMuY2xzQWN0aXZlKSAmJiB0aGlzLnNsaWRlc1twcmV2SW5kZXhdO1xuICAgICAgICAgIGNvbnN0IG5leHRJbmRleCA9IHRoaXMuZ2V0SW5kZXgoaW5kZXgsIHRoaXMuaW5kZXgpO1xuICAgICAgICAgIGNvbnN0IG5leHQgPSB0aGlzLnNsaWRlc1tuZXh0SW5kZXhdO1xuICAgICAgICAgIGlmIChwcmV2ID09PSBuZXh0KSB7XG4gICAgICAgICAgICByZXNldCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmRpciA9IGdldERpcmVjdGlvbihpbmRleCwgcHJldkluZGV4KTtcbiAgICAgICAgICB0aGlzLnByZXZJbmRleCA9IHByZXZJbmRleDtcbiAgICAgICAgICB0aGlzLmluZGV4ID0gbmV4dEluZGV4O1xuICAgICAgICAgIGlmIChwcmV2ICYmICF0cmlnZ2VyKHByZXYsIFwiYmVmb3JlaXRlbWhpZGVcIiwgW3RoaXNdKSB8fCAhdHJpZ2dlcihuZXh0LCBcImJlZm9yZWl0ZW1zaG93XCIsIFt0aGlzLCBwcmV2XSkpIHtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSB0aGlzLnByZXZJbmRleDtcbiAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLl9zaG93KHByZXYsIG5leHQsIGZvcmNlKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHByZXYgJiYgdHJpZ2dlcihwcmV2LCBcIml0ZW1oaWRkZW5cIiwgW3RoaXNdKTtcbiAgICAgICAgICAgIHRyaWdnZXIobmV4dCwgXCJpdGVtc2hvd25cIiwgW3RoaXNdKTtcbiAgICAgICAgICAgIHN0YWNrLnNoaWZ0KCk7XG4gICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uZXIgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gc3RhY2subGVuZ3RoICYmIHRoaXMuc2hvdyhzdGFjay5zaGlmdCgpLCB0cnVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcHJldiAmJiB0cmlnZ2VyKHByZXYsIFwiaXRlbWhpZGVcIiwgW3RoaXNdKTtcbiAgICAgICAgICB0cmlnZ2VyKG5leHQsIFwiaXRlbXNob3dcIiwgW3RoaXNdKTtcbiAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0SW5kZXgoaW5kZXggPSB0aGlzLmluZGV4LCBwcmV2ID0gdGhpcy5pbmRleCkge1xuICAgICAgICAgIHJldHVybiBjbGFtcChcbiAgICAgICAgICAgIGdldEluZGV4KGluZGV4LCB0aGlzLnNsaWRlcywgcHJldiwgdGhpcy5maW5pdGUpLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIE1hdGgubWF4KDAsIHRoaXMubWF4SW5kZXgpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0VmFsaWRJbmRleChpbmRleCA9IHRoaXMuaW5kZXgsIHByZXZJbmRleCA9IHRoaXMucHJldkluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5kZXgoaW5kZXgsIHByZXZJbmRleCk7XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIF9zaG93KHByZXYsIG5leHQsIGZvcmNlKSB7XG4gICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbmVyID0gdGhpcy5fZ2V0VHJhbnNpdGlvbmVyKHByZXYsIG5leHQsIHRoaXMuZGlyLCB7XG4gICAgICAgICAgICBlYXNpbmc6IGZvcmNlID8gbmV4dC5vZmZzZXRXaWR0aCA8IDYwMCA/IGVhc2VPdXRRdWFkIDogZWFzZU91dFF1YXJ0IDogdGhpcy5lYXNpbmcsXG4gICAgICAgICAgICAuLi50aGlzLnRyYW5zaXRpb25PcHRpb25zXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKCFmb3JjZSAmJiAhcHJldikge1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNsYXRlKDEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCB7IGxlbmd0aCB9ID0gdGhpcy5zdGFjaztcbiAgICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNpdGlvbmVyW2xlbmd0aCA+IDEgPyBcImZvcndhcmRcIiA6IFwic2hvd1wiXShcbiAgICAgICAgICAgIGxlbmd0aCA+IDEgPyBNYXRoLm1pbih0aGlzLmR1cmF0aW9uLCA3NSArIDc1IC8gKGxlbmd0aCAtIDEpKSA6IHRoaXMuZHVyYXRpb24sXG4gICAgICAgICAgICB0aGlzLnBlcmNlbnRcbiAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgICBfdHJhbnNsYXRlKHBlcmNlbnQsIHByZXYgPSB0aGlzLnByZXZJbmRleCwgbmV4dCA9IHRoaXMuaW5kZXgpIHtcbiAgICAgICAgICBjb25zdCB0cmFuc2l0aW9uZXIgPSB0aGlzLl9nZXRUcmFuc2l0aW9uZXIocHJldiA9PT0gbmV4dCA/IGZhbHNlIDogcHJldiwgbmV4dCk7XG4gICAgICAgICAgdHJhbnNpdGlvbmVyLnRyYW5zbGF0ZShwZXJjZW50KTtcbiAgICAgICAgICByZXR1cm4gdHJhbnNpdGlvbmVyO1xuICAgICAgICB9LFxuICAgICAgICBfZ2V0VHJhbnNpdGlvbmVyKHByZXYgPSB0aGlzLnByZXZJbmRleCwgbmV4dCA9IHRoaXMuaW5kZXgsIGRpciA9IHRoaXMuZGlyIHx8IDEsIG9wdGlvbnMgPSB0aGlzLnRyYW5zaXRpb25PcHRpb25zKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyB0aGlzLlRyYW5zaXRpb25lcihcbiAgICAgICAgICAgIGlzTnVtYmVyKHByZXYpID8gdGhpcy5zbGlkZXNbcHJldl0gOiBwcmV2LFxuICAgICAgICAgICAgaXNOdW1iZXIobmV4dCkgPyB0aGlzLnNsaWRlc1tuZXh0XSA6IG5leHQsXG4gICAgICAgICAgICBkaXIgKiAoaXNSdGwgPyAtMSA6IDEpLFxuICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGZ1bmN0aW9uIGdldERpcmVjdGlvbihpbmRleCwgcHJldkluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggPT09IFwibmV4dFwiID8gMSA6IGluZGV4ID09PSBcInByZXZpb3VzXCIgPyAtMSA6IGluZGV4IDwgcHJldkluZGV4ID8gLTEgOiAxO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzcGVlZFVwKHgpIHtcbiAgICAgIHJldHVybiAwLjUgKiB4ICsgMzAwO1xuICAgIH1cblxuICAgIHZhciBTbGlkZXNob3cgPSB7XG4gICAgICBtaXhpbnM6IFtTbGlkZXJdLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgYW5pbWF0aW9uOiBTdHJpbmdcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGFuaW1hdGlvbjogXCJzbGlkZVwiLFxuICAgICAgICBjbHNBY3RpdmF0ZWQ6IFwidWstdHJhbnNpdGlvbi1hY3RpdmVcIixcbiAgICAgICAgQW5pbWF0aW9uczogQW5pbWF0aW9ucyQyLFxuICAgICAgICBUcmFuc2l0aW9uZXI6IFRyYW5zaXRpb25lciQxXG4gICAgICB9LFxuICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgYW5pbWF0aW9uKHsgYW5pbWF0aW9uLCBBbmltYXRpb25zOiBBbmltYXRpb25zMiB9KSB7XG4gICAgICAgICAgcmV0dXJuIHsgLi4uQW5pbWF0aW9uczJbYW5pbWF0aW9uXSB8fCBBbmltYXRpb25zMi5zbGlkZSwgbmFtZTogYW5pbWF0aW9uIH07XG4gICAgICAgIH0sXG4gICAgICAgIHRyYW5zaXRpb25PcHRpb25zKCkge1xuICAgICAgICAgIHJldHVybiB7IGFuaW1hdGlvbjogdGhpcy5hbmltYXRpb24gfTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9ic2VydmU6IHJlc2l6ZSgpLFxuICAgICAgZXZlbnRzOiB7XG4gICAgICAgIGJlZm9yZWl0ZW1zaG93KHsgdGFyZ2V0IH0pIHtcbiAgICAgICAgICBhZGRDbGFzcyh0YXJnZXQsIHRoaXMuY2xzQWN0aXZlKTtcbiAgICAgICAgfSxcbiAgICAgICAgaXRlbXNob3duKHsgdGFyZ2V0IH0pIHtcbiAgICAgICAgICBhZGRDbGFzcyh0YXJnZXQsIHRoaXMuY2xzQWN0aXZhdGVkKTtcbiAgICAgICAgfSxcbiAgICAgICAgaXRlbWhpZGRlbih7IHRhcmdldCB9KSB7XG4gICAgICAgICAgcmVtb3ZlQ2xhc3ModGFyZ2V0LCB0aGlzLmNsc0FjdGl2ZSwgdGhpcy5jbHNBY3RpdmF0ZWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBBbmltYXRpb25zJDEgPSB7XG4gICAgICAuLi5BbmltYXRpb25zJDIsXG4gICAgICBmYWRlOiB7XG4gICAgICAgIHNob3coKSB7XG4gICAgICAgICAgcmV0dXJuIFt7IG9wYWNpdHk6IDAgfSwgeyBvcGFjaXR5OiAxIH1dO1xuICAgICAgICB9LFxuICAgICAgICBwZXJjZW50KGN1cnJlbnQpIHtcbiAgICAgICAgICByZXR1cm4gMSAtIGNzcyhjdXJyZW50LCBcIm9wYWNpdHlcIik7XG4gICAgICAgIH0sXG4gICAgICAgIHRyYW5zbGF0ZShwZXJjZW50KSB7XG4gICAgICAgICAgcmV0dXJuIFt7IG9wYWNpdHk6IDEgLSBwZXJjZW50IH0sIHsgb3BhY2l0eTogcGVyY2VudCB9XTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNjYWxlOiB7XG4gICAgICAgIHNob3coKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiBzY2FsZTNkKDEgLSAwLjIpIH0sXG4gICAgICAgICAgICB7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogc2NhbGUzZCgxKSB9XG4gICAgICAgICAgXTtcbiAgICAgICAgfSxcbiAgICAgICAgcGVyY2VudChjdXJyZW50KSB7XG4gICAgICAgICAgcmV0dXJuIDEgLSBjc3MoY3VycmVudCwgXCJvcGFjaXR5XCIpO1xuICAgICAgICB9LFxuICAgICAgICB0cmFuc2xhdGUocGVyY2VudCkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB7IG9wYWNpdHk6IDEgLSBwZXJjZW50LCB0cmFuc2Zvcm06IHNjYWxlM2QoMSAtIDAuMiAqIHBlcmNlbnQpIH0sXG4gICAgICAgICAgICB7IG9wYWNpdHk6IHBlcmNlbnQsIHRyYW5zZm9ybTogc2NhbGUzZCgxIC0gMC4yICsgMC4yICogcGVyY2VudCkgfVxuICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIExpZ2h0Ym94UGFuZWwgPSB7XG4gICAgICBtaXhpbnM6IFtNb2RhbCwgU2xpZGVzaG93XSxcbiAgICAgIGZ1bmN0aW9uYWw6IHRydWUsXG4gICAgICBwcm9wczoge1xuICAgICAgICBkZWxheUNvbnRyb2xzOiBOdW1iZXIsXG4gICAgICAgIHByZWxvYWQ6IE51bWJlcixcbiAgICAgICAgdmlkZW9BdXRvcGxheTogQm9vbGVhbixcbiAgICAgICAgdGVtcGxhdGU6IFN0cmluZ1xuICAgICAgfSxcbiAgICAgIGRhdGE6ICgpID0+ICh7XG4gICAgICAgIHByZWxvYWQ6IDEsXG4gICAgICAgIHZpZGVvQXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICBkZWxheUNvbnRyb2xzOiAzZTMsXG4gICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgY2xzOiBcInVrLW9wZW5cIixcbiAgICAgICAgY2xzUGFnZTogXCJ1ay1saWdodGJveC1wYWdlXCIsXG4gICAgICAgIHNlbExpc3Q6IFwiLnVrLWxpZ2h0Ym94LWl0ZW1zXCIsXG4gICAgICAgIGF0dHJJdGVtOiBcInVrLWxpZ2h0Ym94LWl0ZW1cIixcbiAgICAgICAgc2VsQ2xvc2U6IFwiLnVrLWNsb3NlLWxhcmdlXCIsXG4gICAgICAgIHNlbENhcHRpb246IFwiLnVrLWxpZ2h0Ym94LWNhcHRpb25cIixcbiAgICAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZSxcbiAgICAgICAgdmVsb2NpdHk6IDIsXG4gICAgICAgIEFuaW1hdGlvbnM6IEFuaW1hdGlvbnMkMSxcbiAgICAgICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwidWstbGlnaHRib3ggdWstb3ZlcmZsb3ctaGlkZGVuXCI+IDxkaXYgY2xhc3M9XCJ1ay1saWdodGJveC1pdGVtc1wiPjwvZGl2PiA8ZGl2IGNsYXNzPVwidWstbGlnaHRib3gtdG9vbGJhciB1ay1wb3NpdGlvbi10b3AgdWstdGV4dC1yaWdodCB1ay10cmFuc2l0aW9uLXNsaWRlLXRvcCB1ay10cmFuc2l0aW9uLW9wYXF1ZVwiPiA8YnV0dG9uIGNsYXNzPVwidWstbGlnaHRib3gtdG9vbGJhci1pY29uIHVrLWNsb3NlLWxhcmdlXCIgdHlwZT1cImJ1dHRvblwiIHVrLWNsb3NlPjwvYnV0dG9uPiA8L2Rpdj4gPGEgY2xhc3M9XCJ1ay1saWdodGJveC1idXR0b24gdWstcG9zaXRpb24tY2VudGVyLWxlZnQgdWstcG9zaXRpb24tbWVkaXVtIHVrLXRyYW5zaXRpb24tZmFkZVwiIGhyZWYgdWstc2xpZGVuYXYtcHJldmlvdXMgdWstbGlnaHRib3gtaXRlbT1cInByZXZpb3VzXCI+PC9hPiA8YSBjbGFzcz1cInVrLWxpZ2h0Ym94LWJ1dHRvbiB1ay1wb3NpdGlvbi1jZW50ZXItcmlnaHQgdWstcG9zaXRpb24tbWVkaXVtIHVrLXRyYW5zaXRpb24tZmFkZVwiIGhyZWYgdWstc2xpZGVuYXYtbmV4dCB1ay1saWdodGJveC1pdGVtPVwibmV4dFwiPjwvYT4gPGRpdiBjbGFzcz1cInVrLWxpZ2h0Ym94LXRvb2xiYXIgdWstbGlnaHRib3gtY2FwdGlvbiB1ay1wb3NpdGlvbi1ib3R0b20gdWstdGV4dC1jZW50ZXIgdWstdHJhbnNpdGlvbi1zbGlkZS1ib3R0b20gdWstdHJhbnNpdGlvbi1vcGFxdWVcIj48L2Rpdj4gPC9kaXY+YFxuICAgICAgfSksXG4gICAgICBjcmVhdGVkKCkge1xuICAgICAgICBjb25zdCAkZWwgPSAkKHRoaXMudGVtcGxhdGUpO1xuICAgICAgICBjb25zdCBsaXN0ID0gJCh0aGlzLnNlbExpc3QsICRlbCk7XG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoKSA9PiBhcHBlbmQobGlzdCwgXCI8ZGl2PlwiKSk7XG4gICAgICAgIGNvbnN0IGNsb3NlID0gJChcIlt1ay1jbG9zZV1cIiwgJGVsKTtcbiAgICAgICAgY29uc3QgY2xvc2VMYWJlbCA9IHRoaXMudChcImNsb3NlXCIpO1xuICAgICAgICBpZiAoY2xvc2UgJiYgY2xvc2VMYWJlbCkge1xuICAgICAgICAgIGNsb3NlLmRhdGFzZXQuaTE4biA9IEpTT04uc3RyaW5naWZ5KHsgbGFiZWw6IGNsb3NlTGFiZWwgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kbW91bnQoYXBwZW5kKHRoaXMuY29udGFpbmVyLCAkZWwpKTtcbiAgICAgIH0sXG4gICAgICBldmVudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGAke3BvaW50ZXJNb3ZlJDF9ICR7cG9pbnRlckRvd24kMX0ga2V5ZG93bmAsXG4gICAgICAgICAgaGFuZGxlcjogXCJzaG93Q29udHJvbHNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJjbGlja1wiLFxuICAgICAgICAgIHNlbGY6IHRydWUsXG4gICAgICAgICAgZGVsZWdhdGU6ICh7IHNlbExpc3QgfSkgPT4gYCR7c2VsTGlzdH0gPiAqYCxcbiAgICAgICAgICBoYW5kbGVyKGUpIHtcbiAgICAgICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwic2hvd25cIixcbiAgICAgICAgICBzZWxmOiB0cnVlLFxuICAgICAgICAgIGhhbmRsZXI6IFwic2hvd0NvbnRyb2xzXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiaGlkZVwiLFxuICAgICAgICAgIHNlbGY6IHRydWUsXG4gICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZUNvbnRyb2xzKCk7XG4gICAgICAgICAgICByZW1vdmVDbGFzcyh0aGlzLnNsaWRlcywgdGhpcy5jbHNBY3RpdmUpO1xuICAgICAgICAgICAgVHJhbnNpdGlvbi5zdG9wKHRoaXMuc2xpZGVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcImhpZGRlblwiLFxuICAgICAgICAgIHNlbGY6IHRydWUsXG4gICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgIHRoaXMuJGRlc3Ryb3kodHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJrZXl1cFwiLFxuICAgICAgICAgIGVsOiAoKSA9PiBkb2N1bWVudCxcbiAgICAgICAgICBoYW5kbGVyKHsga2V5Q29kZSB9KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNUb2dnbGVkKHRoaXMuJGVsKSB8fCAhdGhpcy5kcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGkgPSAtMTtcbiAgICAgICAgICAgIGlmIChrZXlDb2RlID09PSBrZXlNYXAuTEVGVCkge1xuICAgICAgICAgICAgICBpID0gXCJwcmV2aW91c1wiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBrZXlNYXAuUklHSFQpIHtcbiAgICAgICAgICAgICAgaSA9IFwibmV4dFwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBrZXlNYXAuSE9NRSkge1xuICAgICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0ga2V5TWFwLkVORCkge1xuICAgICAgICAgICAgICBpID0gXCJsYXN0XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAofmkpIHtcbiAgICAgICAgICAgICAgdGhpcy5zaG93KGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiYmVmb3JlaXRlbXNob3dcIixcbiAgICAgICAgICBoYW5kbGVyKGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVG9nZ2xlZCgpKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUVsZW1lbnQodGhpcy4kZWwsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gQW5pbWF0aW9ucyQxW1wic2NhbGVcIl07XG4gICAgICAgICAgICByZW1vdmVDbGFzcyhlLnRhcmdldCwgdGhpcy5jbHNBY3RpdmUpO1xuICAgICAgICAgICAgdGhpcy5zdGFjay5zcGxpY2UoMSwgMCwgdGhpcy5pbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJpdGVtc2hvd1wiLFxuICAgICAgICAgIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICBodG1sKCQodGhpcy5zZWxDYXB0aW9uLCB0aGlzLiRlbCksIHRoaXMuZ2V0SXRlbSgpLmNhcHRpb24gfHwgXCJcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gLXRoaXMucHJlbG9hZDsgaiA8PSB0aGlzLnByZWxvYWQ7IGorKykge1xuICAgICAgICAgICAgICB0aGlzLmxvYWRJdGVtKHRoaXMuaW5kZXggKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIml0ZW1zaG93blwiLFxuICAgICAgICAgIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICB0aGlzLmRyYWdnYWJsZSA9IHRoaXMuJHByb3BzLmRyYWdnYWJsZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIml0ZW1sb2FkXCIsXG4gICAgICAgICAgYXN5bmMgaGFuZGxlcihfLCBpdGVtKSB7XG4gICAgICAgICAgICBjb25zdCB7IHNvdXJjZTogc3JjLCB0eXBlLCBhbHQgPSBcIlwiLCBwb3N0ZXIsIGF0dHJzID0ge30gfSA9IGl0ZW07XG4gICAgICAgICAgICB0aGlzLnNldEl0ZW0oaXRlbSwgXCI8c3BhbiB1ay1zcGlubmVyPjwvc3Bhbj5cIik7XG4gICAgICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbWF0Y2hlcztcbiAgICAgICAgICAgIGNvbnN0IGlmcmFtZUF0dHJzID0ge1xuICAgICAgICAgICAgICBhbGxvd2Z1bGxzY3JlZW46IFwiXCIsXG4gICAgICAgICAgICAgIHN0eWxlOiBcIm1heC13aWR0aDogMTAwJTsgYm94LXNpemluZzogYm9yZGVyLWJveDtcIixcbiAgICAgICAgICAgICAgXCJ1ay1yZXNwb25zaXZlXCI6IFwiXCIsXG4gICAgICAgICAgICAgIFwidWstdmlkZW9cIjogYCR7dGhpcy52aWRlb0F1dG9wbGF5fWBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJpbWFnZVwiIHx8IHNyYy5tYXRjaCgvXFwuKGF2aWZ8anBlP2d8amZpZnxhP3BuZ3xnaWZ8c3ZnfHdlYnApKCR8XFw/KS9pKSkge1xuICAgICAgICAgICAgICBjb25zdCBpbWcgPSBjcmVhdGVFbChcImltZ1wiLCB7IHNyYywgYWx0LCAuLi5hdHRycyB9KTtcbiAgICAgICAgICAgICAgb24oaW1nLCBcImxvYWRcIiwgKCkgPT4gdGhpcy5zZXRJdGVtKGl0ZW0sIGltZykpO1xuICAgICAgICAgICAgICBvbihpbWcsIFwiZXJyb3JcIiwgKCkgPT4gdGhpcy5zZXRFcnJvcihpdGVtKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwidmlkZW9cIiB8fCBzcmMubWF0Y2goL1xcLihtcDR8d2VibXxvZ3YpKCR8XFw/KS9pKSkge1xuICAgICAgICAgICAgICBjb25zdCB2aWRlbyA9IGNyZWF0ZUVsKFwidmlkZW9cIiwge1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICBwb3N0ZXIsXG4gICAgICAgICAgICAgICAgY29udHJvbHM6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGxheXNpbmxpbmU6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJ1ay12aWRlb1wiOiBgJHt0aGlzLnZpZGVvQXV0b3BsYXl9YCxcbiAgICAgICAgICAgICAgICAuLi5hdHRyc1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgb24odmlkZW8sIFwibG9hZGVkbWV0YWRhdGFcIiwgKCkgPT4gdGhpcy5zZXRJdGVtKGl0ZW0sIHZpZGVvKSk7XG4gICAgICAgICAgICAgIG9uKHZpZGVvLCBcImVycm9yXCIsICgpID0+IHRoaXMuc2V0RXJyb3IoaXRlbSkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcImlmcmFtZVwiIHx8IHNyYy5tYXRjaCgvXFwuKGh0bWx8cGhwKSgkfFxcPykvaSkpIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRJdGVtKFxuICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgY3JlYXRlRWwoXCJpZnJhbWVcIiwge1xuICAgICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgICAgYWxsb3dmdWxsc2NyZWVuOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IFwidWstbGlnaHRib3gtaWZyYW1lXCIsXG4gICAgICAgICAgICAgICAgICAuLi5hdHRyc1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoZXMgPSBzcmMubWF0Y2goXG4gICAgICAgICAgICAgIC9cXC9cXC8oPzouKj95b3V0dWJlKC1ub2Nvb2tpZSk/XFwuLio/KD86Wz8mXXY9fFxcL3Nob3J0c1xcLyl8eW91dHVcXC5iZVxcLykoW1xcdy1dezExfSlbJj9dPyguKik/L1xuICAgICAgICAgICAgKSkge1xuICAgICAgICAgICAgICB0aGlzLnNldEl0ZW0oXG4gICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICBjcmVhdGVFbChcImlmcmFtZVwiLCB7XG4gICAgICAgICAgICAgICAgICBzcmM6IGBodHRwczovL3d3dy55b3V0dWJlJHttYXRjaGVzWzFdIHx8IFwiXCJ9LmNvbS9lbWJlZC8ke21hdGNoZXNbMl19JHttYXRjaGVzWzNdID8gYD8ke21hdGNoZXNbM119YCA6IFwiXCJ9YCxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxOTIwLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDgwLFxuICAgICAgICAgICAgICAgICAgLi4uaWZyYW1lQXR0cnMsXG4gICAgICAgICAgICAgICAgICAuLi5hdHRyc1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoZXMgPSBzcmMubWF0Y2goL1xcL1xcLy4qP3ZpbWVvXFwuW2Etel0rXFwvKFxcZCspWyY/XT8oLiopPy8pKSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBoZWlnaHQsIHdpZHRoIH0gPSBhd2FpdCAoYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICAgICAgICBgaHR0cHM6Ly92aW1lby5jb20vYXBpL29lbWJlZC5qc29uP21heHdpZHRoPTE5MjAmdXJsPSR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgICAgIHNyY1xuICAgICAgICAgICAgICApfWAsXG4gICAgICAgICAgICAgICAgICB7IGNyZWRlbnRpYWxzOiBcIm9taXRcIiB9XG4gICAgICAgICAgICAgICAgKSkuanNvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0SXRlbShcbiAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICBjcmVhdGVFbChcImlmcmFtZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHNyYzogYGh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8ke21hdGNoZXNbMV19JHttYXRjaGVzWzJdID8gYD8ke21hdGNoZXNbMl19YCA6IFwiXCJ9YCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgLi4uaWZyYW1lQXR0cnMsXG4gICAgICAgICAgICAgICAgICAgIC4uLmF0dHJzXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yKGl0ZW0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgbWV0aG9kczoge1xuICAgICAgICBsb2FkSXRlbShpbmRleCA9IHRoaXMuaW5kZXgpIHtcbiAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRJdGVtKGluZGV4KTtcbiAgICAgICAgICBpZiAoIXRoaXMuZ2V0U2xpZGUoaXRlbSkuY2hpbGRFbGVtZW50Q291bnQpIHtcbiAgICAgICAgICAgIHRyaWdnZXIodGhpcy4kZWwsIFwiaXRlbWxvYWRcIiwgW2l0ZW1dKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdldEl0ZW0oaW5kZXggPSB0aGlzLmluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNbZ2V0SW5kZXgoaW5kZXgsIHRoaXMuc2xpZGVzKV07XG4gICAgICAgIH0sXG4gICAgICAgIHNldEl0ZW0oaXRlbSwgY29udGVudCkge1xuICAgICAgICAgIHRyaWdnZXIodGhpcy4kZWwsIFwiaXRlbWxvYWRlZFwiLCBbdGhpcywgaHRtbCh0aGlzLmdldFNsaWRlKGl0ZW0pLCBjb250ZW50KV0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXRTbGlkZShpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2xpZGVzW3RoaXMuaXRlbXMuaW5kZXhPZihpdGVtKV07XG4gICAgICAgIH0sXG4gICAgICAgIHNldEVycm9yKGl0ZW0pIHtcbiAgICAgICAgICB0aGlzLnNldEl0ZW0oaXRlbSwgJzxzcGFuIHVrLWljb249XCJpY29uOiBib2x0OyByYXRpbzogMlwiPjwvc3Bhbj4nKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd0NvbnRyb2xzKCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNvbnRyb2xzVGltZXIpO1xuICAgICAgICAgIHRoaXMuY29udHJvbHNUaW1lciA9IHNldFRpbWVvdXQodGhpcy5oaWRlQ29udHJvbHMsIHRoaXMuZGVsYXlDb250cm9scyk7XG4gICAgICAgICAgYWRkQ2xhc3ModGhpcy4kZWwsIFwidWstYWN0aXZlXCIsIFwidWstdHJhbnNpdGlvbi1hY3RpdmVcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGhpZGVDb250cm9scygpIHtcbiAgICAgICAgICByZW1vdmVDbGFzcyh0aGlzLiRlbCwgXCJ1ay1hY3RpdmVcIiwgXCJ1ay10cmFuc2l0aW9uLWFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgZnVuY3Rpb24gY3JlYXRlRWwodGFnLCBhdHRycykge1xuICAgICAgY29uc3QgZWwgPSBmcmFnbWVudChgPCR7dGFnfT5gKTtcbiAgICAgIGF0dHIoZWwsIGF0dHJzKTtcbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG5cbiAgICB2YXIgbGlnaHRib3ggPSB7XG4gICAgICBpbnN0YWxsOiBpbnN0YWxsJDMsXG4gICAgICBwcm9wczogeyB0b2dnbGU6IFN0cmluZyB9LFxuICAgICAgZGF0YTogeyB0b2dnbGU6IFwiYVwiIH0sXG4gICAgICBjb21wdXRlZDoge1xuICAgICAgICB0b2dnbGVzOiAoeyB0b2dnbGUgfSwgJGVsKSA9PiAkJCh0b2dnbGUsICRlbClcbiAgICAgIH0sXG4gICAgICB3YXRjaDoge1xuICAgICAgICB0b2dnbGVzKHRvZ2dsZXMpIHtcbiAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICBmb3IgKGNvbnN0IHRvZ2dsZSBvZiB0b2dnbGVzKSB7XG4gICAgICAgICAgICBpZiAoaXNUYWcodG9nZ2xlLCBcImFcIikpIHtcbiAgICAgICAgICAgICAgYXR0cih0b2dnbGUsIFwicm9sZVwiLCBcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkaXNjb25uZWN0ZWQoKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgfSxcbiAgICAgIGV2ZW50czoge1xuICAgICAgICBuYW1lOiBcImNsaWNrXCIsXG4gICAgICAgIGRlbGVnYXRlOiAoeyB0b2dnbGUgfSkgPT4gYCR7dG9nZ2xlfTpub3QoLnVrLWRpc2FibGVkKWAsXG4gICAgICAgIGhhbmRsZXIoZSkge1xuICAgICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnNob3coZS5jdXJyZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBtZXRob2RzOiB7XG4gICAgICAgIHNob3coaW5kZXgpIHtcbiAgICAgICAgICBjb25zdCBpdGVtcyA9IHVuaXF1ZUJ5KHRoaXMudG9nZ2xlcy5tYXAodG9JdGVtKSwgXCJzb3VyY2VcIik7XG4gICAgICAgICAgaWYgKGlzRWxlbWVudChpbmRleCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgc291cmNlIH0gPSB0b0l0ZW0oaW5kZXgpO1xuICAgICAgICAgICAgaW5kZXggPSBmaW5kSW5kZXgoaXRlbXMsICh7IHNvdXJjZTogc3JjIH0pID0+IHNvdXJjZSA9PT0gc3JjKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5wYW5lbCA9IHRoaXMucGFuZWwgfHwgdGhpcy4kY3JlYXRlKFwibGlnaHRib3hQYW5lbFwiLCB7IC4uLnRoaXMuJHByb3BzLCBpdGVtcyB9KTtcbiAgICAgICAgICBvbih0aGlzLnBhbmVsLiRlbCwgXCJoaWRkZW5cIiwgKCkgPT4gdGhpcy5wYW5lbCA9IG51bGwpO1xuICAgICAgICAgIHJldHVybiB0aGlzLnBhbmVsLnNob3coaW5kZXgpO1xuICAgICAgICB9LFxuICAgICAgICBoaWRlKCkge1xuICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICByZXR1cm4gKF9hID0gdGhpcy5wYW5lbCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgZnVuY3Rpb24gaW5zdGFsbCQzKFVJa2l0LCBMaWdodGJveCkge1xuICAgICAgaWYgKCFVSWtpdC5saWdodGJveFBhbmVsKSB7XG4gICAgICAgIFVJa2l0LmNvbXBvbmVudChcImxpZ2h0Ym94UGFuZWxcIiwgTGlnaHRib3hQYW5lbCk7XG4gICAgICB9XG4gICAgICBhc3NpZ24oTGlnaHRib3gucHJvcHMsIFVJa2l0LmNvbXBvbmVudChcImxpZ2h0Ym94UGFuZWxcIikub3B0aW9ucy5wcm9wcyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvSXRlbShlbCkge1xuICAgICAgY29uc3QgaXRlbSA9IHt9O1xuICAgICAgZm9yIChjb25zdCBhdHRyMiBvZiBbXCJocmVmXCIsIFwiY2FwdGlvblwiLCBcInR5cGVcIiwgXCJwb3N0ZXJcIiwgXCJhbHRcIiwgXCJhdHRyc1wiXSkge1xuICAgICAgICBpdGVtW2F0dHIyID09PSBcImhyZWZcIiA/IFwic291cmNlXCIgOiBhdHRyMl0gPSBkYXRhKGVsLCBhdHRyMik7XG4gICAgICB9XG4gICAgICBpdGVtLmF0dHJzID0gcGFyc2VPcHRpb25zKGl0ZW0uYXR0cnMpO1xuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuXG4gICAgdmFyIG5vdGlmaWNhdGlvbiA9IHtcbiAgICAgIG1peGluczogW0NvbnRhaW5lcl0sXG4gICAgICBmdW5jdGlvbmFsOiB0cnVlLFxuICAgICAgYXJnczogW1wibWVzc2FnZVwiLCBcInN0YXR1c1wiXSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbWVzc2FnZTogXCJcIixcbiAgICAgICAgc3RhdHVzOiBcIlwiLFxuICAgICAgICB0aW1lb3V0OiA1ZTMsXG4gICAgICAgIGdyb3VwOiBcIlwiLFxuICAgICAgICBwb3M6IFwidG9wLWNlbnRlclwiLFxuICAgICAgICBjbHNDb250YWluZXI6IFwidWstbm90aWZpY2F0aW9uXCIsXG4gICAgICAgIGNsc0Nsb3NlOiBcInVrLW5vdGlmaWNhdGlvbi1jbG9zZVwiLFxuICAgICAgICBjbHNNc2c6IFwidWstbm90aWZpY2F0aW9uLW1lc3NhZ2VcIlxuICAgICAgfSxcbiAgICAgIGluc3RhbGw6IGluc3RhbGwkMixcbiAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIG1hcmdpblByb3A6ICh7IHBvcyB9KSA9PiBgbWFyZ2luLSR7cG9zLm1hdGNoKC9bYS16XSsoPz0tKS8pWzBdfWAsXG4gICAgICAgIHN0YXJ0UHJvcHMoKSB7XG4gICAgICAgICAgcmV0dXJuIHsgb3BhY2l0eTogMCwgW3RoaXMubWFyZ2luUHJvcF06IC10aGlzLiRlbC5vZmZzZXRIZWlnaHQgfTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIGNvbnN0IHBvc0NsYXNzID0gYCR7dGhpcy5jbHNDb250YWluZXJ9LSR7dGhpcy5wb3N9YDtcbiAgICAgICAgY29uc3QgY29udGFpbmVyQXR0ciA9IGBkYXRhLSR7dGhpcy5jbHNDb250YWluZXJ9LWNvbnRhaW5lcmA7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9ICQoYC4ke3Bvc0NsYXNzfVske2NvbnRhaW5lckF0dHJ9XWAsIHRoaXMuY29udGFpbmVyKSB8fCBhcHBlbmQoXG4gICAgICAgICAgdGhpcy5jb250YWluZXIsXG4gICAgICAgICAgYDxkaXYgY2xhc3M9XCIke3RoaXMuY2xzQ29udGFpbmVyfSAke3Bvc0NsYXNzfVwiICR7Y29udGFpbmVyQXR0cn0+PC9kaXY+YFxuICAgICAgICApO1xuICAgICAgICB0aGlzLiRtb3VudChcbiAgICAgICAgICBhcHBlbmQoXG4gICAgICAgICAgICBjb250YWluZXIsXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cIiR7dGhpcy5jbHNNc2d9JHt0aGlzLnN0YXR1cyA/IGAgJHt0aGlzLmNsc01zZ30tJHt0aGlzLnN0YXR1c31gIDogXCJcIn1cIiByb2xlPVwiYWxlcnRcIj4gPGEgaHJlZiBjbGFzcz1cIiR7dGhpcy5jbHNDbG9zZX1cIiBkYXRhLXVrLWNsb3NlPjwvYT4gPGRpdj4ke3RoaXMubWVzc2FnZX08L2Rpdj4gPC9kaXY+YFxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBhc3luYyBjb25uZWN0ZWQoKSB7XG4gICAgICAgIGNvbnN0IG1hcmdpbiA9IHRvRmxvYXQoY3NzKHRoaXMuJGVsLCB0aGlzLm1hcmdpblByb3ApKTtcbiAgICAgICAgYXdhaXQgVHJhbnNpdGlvbi5zdGFydChjc3ModGhpcy4kZWwsIHRoaXMuc3RhcnRQcm9wcyksIHtcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIFt0aGlzLm1hcmdpblByb3BdOiBtYXJnaW5cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLnRpbWVvdXQpIHtcbiAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCh0aGlzLmNsb3NlLCB0aGlzLnRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXZlbnRzOiB7XG4gICAgICAgIGNsaWNrKGUpIHtcbiAgICAgICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnYVtocmVmPVwiI1wiXSxhW2hyZWY9XCJcIl0nKSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIFtwb2ludGVyRW50ZXJdKCkge1xuICAgICAgICAgIGlmICh0aGlzLnRpbWVyKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbcG9pbnRlckxlYXZlXSgpIHtcbiAgICAgICAgICBpZiAodGhpcy50aW1lb3V0KSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCh0aGlzLmNsb3NlLCB0aGlzLnRpbWVvdXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgYXN5bmMgY2xvc2UoaW1tZWRpYXRlKSB7XG4gICAgICAgICAgY29uc3QgcmVtb3ZlRm4gPSAoZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHBhcmVudChlbCk7XG4gICAgICAgICAgICB0cmlnZ2VyKGVsLCBcImNsb3NlXCIsIFt0aGlzXSk7XG4gICAgICAgICAgICByZW1vdmUkMShlbCk7XG4gICAgICAgICAgICBpZiAoIShjb250YWluZXIgPT0gbnVsbCA/IHZvaWQgMCA6IGNvbnRhaW5lci5oYXNDaGlsZE5vZGVzKCkpKSB7XG4gICAgICAgICAgICAgIHJlbW92ZSQxKGNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAodGhpcy50aW1lcikge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICAgICAgYXdhaXQgVHJhbnNpdGlvbi5zdGFydCh0aGlzLiRlbCwgdGhpcy5zdGFydFByb3BzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVtb3ZlRm4odGhpcy4kZWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBmdW5jdGlvbiBpbnN0YWxsJDIoVUlraXQpIHtcbiAgICAgIFVJa2l0Lm5vdGlmaWNhdGlvbi5jbG9zZUFsbCA9IGZ1bmN0aW9uKGdyb3VwLCBpbW1lZGlhdGUpIHtcbiAgICAgICAgYXBwbHkoZG9jdW1lbnQuYm9keSwgKGVsKSA9PiB7XG4gICAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uID0gVUlraXQuZ2V0Q29tcG9uZW50KGVsLCBcIm5vdGlmaWNhdGlvblwiKTtcbiAgICAgICAgICBpZiAobm90aWZpY2F0aW9uICYmICghZ3JvdXAgfHwgZ3JvdXAgPT09IG5vdGlmaWNhdGlvbi5ncm91cCkpIHtcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5jbG9zZShpbW1lZGlhdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHZhciBNZWRpYSA9IHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIG1lZGlhOiBCb29sZWFuXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBtZWRpYTogZmFsc2VcbiAgICAgIH0sXG4gICAgICBjb25uZWN0ZWQoKSB7XG4gICAgICAgIGNvbnN0IG1lZGlhID0gdG9NZWRpYSh0aGlzLm1lZGlhLCB0aGlzLiRlbCk7XG4gICAgICAgIHRoaXMubWF0Y2hNZWRpYSA9IHRydWU7XG4gICAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICAgIHRoaXMubWVkaWFPYmogPSB3aW5kb3cubWF0Y2hNZWRpYShtZWRpYSk7XG4gICAgICAgICAgY29uc3QgaGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubWF0Y2hNZWRpYSA9IHRoaXMubWVkaWFPYmoubWF0Y2hlcztcbiAgICAgICAgICAgIHRyaWdnZXIodGhpcy4kZWwsIGNyZWF0ZUV2ZW50KFwibWVkaWFjaGFuZ2VcIiwgZmFsc2UsIHRydWUsIFt0aGlzLm1lZGlhT2JqXSkpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy5vZmZNZWRpYU9iaiA9IG9uKHRoaXMubWVkaWFPYmosIFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgICAgIGhhbmRsZXIoKTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJyZXNpemVcIik7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaGFuZGxlcigpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGlzY29ubmVjdGVkKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IHRoaXMub2ZmTWVkaWFPYmopID09IG51bGwgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgIH07XG4gICAgZnVuY3Rpb24gdG9NZWRpYSh2YWx1ZSwgZWxlbWVudCkge1xuICAgICAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgICBpZiAoc3RhcnRzV2l0aCh2YWx1ZSwgXCJAXCIpKSB7XG4gICAgICAgICAgdmFsdWUgPSB0b0Zsb2F0KGNzcyhlbGVtZW50LCBgLS11ay1icmVha3BvaW50LSR7dmFsdWUuc2xpY2UoMSl9YCkpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzTmFOKHZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlICYmIGlzTnVtZXJpYyh2YWx1ZSkgPyBgKG1pbi13aWR0aDogJHt2YWx1ZX1weClgIDogXCJcIjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRNYXhQYXRoTGVuZ3RoKGVsKSB7XG4gICAgICByZXR1cm4gaXNWaXNpYmxlKGVsKSA/IE1hdGguY2VpbChcbiAgICAgICAgTWF0aC5tYXgoMCwgLi4uJCQoXCJbc3Ryb2tlXVwiLCBlbCkubWFwKChzdHJva2UpID0+IHtcbiAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgcmV0dXJuICgoX2EgPSBzdHJva2UuZ2V0VG90YWxMZW5ndGgpID09IG51bGwgPyB2b2lkIDAgOiBfYS5jYWxsKHN0cm9rZSkpIHx8IDA7XG4gICAgICAgIH0pKVxuICAgICAgKSA6IDA7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICB4OiB0cmFuc2Zvcm1GbixcbiAgICAgIHk6IHRyYW5zZm9ybUZuLFxuICAgICAgcm90YXRlOiB0cmFuc2Zvcm1GbixcbiAgICAgIHNjYWxlOiB0cmFuc2Zvcm1GbixcbiAgICAgIGNvbG9yOiBjb2xvckZuLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvckZuLFxuICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yRm4sXG4gICAgICBibHVyOiBmaWx0ZXJGbixcbiAgICAgIGh1ZTogZmlsdGVyRm4sXG4gICAgICBmb3BhY2l0eTogZmlsdGVyRm4sXG4gICAgICBncmF5c2NhbGU6IGZpbHRlckZuLFxuICAgICAgaW52ZXJ0OiBmaWx0ZXJGbixcbiAgICAgIHNhdHVyYXRlOiBmaWx0ZXJGbixcbiAgICAgIHNlcGlhOiBmaWx0ZXJGbixcbiAgICAgIG9wYWNpdHk6IGNzc1Byb3BGbixcbiAgICAgIHN0cm9rZTogc3Ryb2tlRm4sXG4gICAgICBiZ3g6IGJhY2tncm91bmRGbixcbiAgICAgIGJneTogYmFja2dyb3VuZEZuXG4gICAgfTtcbiAgICBjb25zdCB7IGtleXMgfSA9IE9iamVjdDtcbiAgICB2YXIgUGFyYWxsYXggPSB7XG4gICAgICBtaXhpbnM6IFtNZWRpYV0sXG4gICAgICBwcm9wczogZmlsbE9iamVjdChrZXlzKHByb3BzKSwgXCJsaXN0XCIpLFxuICAgICAgZGF0YTogZmlsbE9iamVjdChrZXlzKHByb3BzKSwgdm9pZCAwKSxcbiAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHByb3BzKHByb3BlcnRpZXMsICRlbCkge1xuICAgICAgICAgIGNvbnN0IHN0b3BzID0ge307XG4gICAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIHByb3BzICYmICFpc1VuZGVmaW5lZChwcm9wZXJ0aWVzW3Byb3BdKSkge1xuICAgICAgICAgICAgICBzdG9wc1twcm9wXSA9IHByb3BlcnRpZXNbcHJvcF0uc2xpY2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIHN0b3BzKSB7XG4gICAgICAgICAgICByZXN1bHRbcHJvcF0gPSBwcm9wc1twcm9wXShwcm9wLCAkZWwsIHN0b3BzW3Byb3BdLCBzdG9wcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBldmVudHM6IHtcbiAgICAgICAgbG9hZCgpIHtcbiAgICAgICAgICB0aGlzLiRlbWl0KCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBtZXRob2RzOiB7XG4gICAgICAgIHJlc2V0KCkge1xuICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiB0aGlzLmdldENzcygwKSkge1xuICAgICAgICAgICAgY3NzKHRoaXMuJGVsLCBwcm9wLCBcIlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdldENzcyhwZXJjZW50KSB7XG4gICAgICAgICAgY29uc3QgY3NzMiA9IHt9O1xuICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiB0aGlzLnByb3BzKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzW3Byb3BdKGNzczIsIGNsYW1wKHBlcmNlbnQpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY3NzMi53aWxsQ2hhbmdlID0gT2JqZWN0LmtleXMoY3NzMikubWFwKHByb3BOYW1lKS5qb2luKFwiLFwiKTtcbiAgICAgICAgICByZXR1cm4gY3NzMjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtRm4ocHJvcCwgZWwsIHN0b3BzKSB7XG4gICAgICBsZXQgdW5pdCA9IGdldFVuaXQoc3RvcHMpIHx8IHsgeDogXCJweFwiLCB5OiBcInB4XCIsIHJvdGF0ZTogXCJkZWdcIiB9W3Byb3BdIHx8IFwiXCI7XG4gICAgICBsZXQgdHJhbnNmb3JtRm4yO1xuICAgICAgaWYgKHByb3AgPT09IFwieFwiIHx8IHByb3AgPT09IFwieVwiKSB7XG4gICAgICAgIHByb3AgPSBgdHJhbnNsYXRlJHt1Y2ZpcnN0KHByb3ApfWA7XG4gICAgICAgIHRyYW5zZm9ybUZuMiA9IChzdG9wKSA9PiB0b0Zsb2F0KHRvRmxvYXQoc3RvcCkudG9GaXhlZCh1bml0ID09PSBcInB4XCIgPyAwIDogNikpO1xuICAgICAgfSBlbHNlIGlmIChwcm9wID09PSBcInNjYWxlXCIpIHtcbiAgICAgICAgdW5pdCA9IFwiXCI7XG4gICAgICAgIHRyYW5zZm9ybUZuMiA9IChzdG9wKSA9PiB7XG4gICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgIHJldHVybiBnZXRVbml0KFtzdG9wXSkgPyB0b1B4KHN0b3AsIFwid2lkdGhcIiwgZWwsIHRydWUpIC8gZWxbYG9mZnNldCR7KChfYSA9IHN0b3AuZW5kc1dpdGgpID09IG51bGwgPyB2b2lkIDAgOiBfYS5jYWxsKHN0b3AsIFwidmhcIikpID8gXCJIZWlnaHRcIiA6IFwiV2lkdGhcIn1gXSA6IHRvRmxvYXQoc3RvcCk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAoc3RvcHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHN0b3BzLnVuc2hpZnQocHJvcCA9PT0gXCJzY2FsZVwiID8gMSA6IDApO1xuICAgICAgfVxuICAgICAgc3RvcHMgPSBwYXJzZVN0b3BzKHN0b3BzLCB0cmFuc2Zvcm1GbjIpO1xuICAgICAgcmV0dXJuIChjc3MyLCBwZXJjZW50KSA9PiB7XG4gICAgICAgIGNzczIudHJhbnNmb3JtID0gYCR7Y3NzMi50cmFuc2Zvcm0gfHwgXCJcIn0gJHtwcm9wfSgke2dldFZhbHVlKHN0b3BzLCBwZXJjZW50KX0ke3VuaXR9KWA7XG4gICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjb2xvckZuKHByb3AsIGVsLCBzdG9wcykge1xuICAgICAgaWYgKHN0b3BzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBzdG9wcy51bnNoaWZ0KGdldENzc1ZhbHVlKGVsLCBwcm9wLCBcIlwiKSk7XG4gICAgICB9XG4gICAgICBzdG9wcyA9IHBhcnNlU3RvcHMoc3RvcHMsIChzdG9wKSA9PiBwYXJzZUNvbG9yKGVsLCBzdG9wKSk7XG4gICAgICByZXR1cm4gKGNzczIsIHBlcmNlbnQpID0+IHtcbiAgICAgICAgY29uc3QgW3N0YXJ0LCBlbmQsIHBdID0gZ2V0U3RvcChzdG9wcywgcGVyY2VudCk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gc3RhcnQubWFwKCh2YWx1ZTIsIGkpID0+IHtcbiAgICAgICAgICB2YWx1ZTIgKz0gcCAqIChlbmRbaV0gLSB2YWx1ZTIpO1xuICAgICAgICAgIHJldHVybiBpID09PSAzID8gdG9GbG9hdCh2YWx1ZTIpIDogcGFyc2VJbnQodmFsdWUyLCAxMCk7XG4gICAgICAgIH0pLmpvaW4oXCIsXCIpO1xuICAgICAgICBjc3MyW3Byb3BdID0gYHJnYmEoJHt2YWx1ZX0pYDtcbiAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBhcnNlQ29sb3IoZWwsIGNvbG9yKSB7XG4gICAgICByZXR1cm4gZ2V0Q3NzVmFsdWUoZWwsIFwiY29sb3JcIiwgY29sb3IpLnNwbGl0KC9bKCksXS9nKS5zbGljZSgxLCAtMSkuY29uY2F0KDEpLnNsaWNlKDAsIDQpLm1hcCh0b0Zsb2F0KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmlsdGVyRm4ocHJvcCwgZWwsIHN0b3BzKSB7XG4gICAgICBpZiAoc3RvcHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHN0b3BzLnVuc2hpZnQoMCk7XG4gICAgICB9XG4gICAgICBjb25zdCB1bml0ID0gZ2V0VW5pdChzdG9wcykgfHwgeyBibHVyOiBcInB4XCIsIGh1ZTogXCJkZWdcIiB9W3Byb3BdIHx8IFwiJVwiO1xuICAgICAgcHJvcCA9IHsgZm9wYWNpdHk6IFwib3BhY2l0eVwiLCBodWU6IFwiaHVlLXJvdGF0ZVwiIH1bcHJvcF0gfHwgcHJvcDtcbiAgICAgIHN0b3BzID0gcGFyc2VTdG9wcyhzdG9wcyk7XG4gICAgICByZXR1cm4gKGNzczIsIHBlcmNlbnQpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBnZXRWYWx1ZShzdG9wcywgcGVyY2VudCk7XG4gICAgICAgIGNzczIuZmlsdGVyID0gYCR7Y3NzMi5maWx0ZXIgfHwgXCJcIn0gJHtwcm9wfSgke3ZhbHVlICsgdW5pdH0pYDtcbiAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNzc1Byb3BGbihwcm9wLCBlbCwgc3RvcHMpIHtcbiAgICAgIGlmIChzdG9wcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgc3RvcHMudW5zaGlmdChnZXRDc3NWYWx1ZShlbCwgcHJvcCwgXCJcIikpO1xuICAgICAgfVxuICAgICAgc3RvcHMgPSBwYXJzZVN0b3BzKHN0b3BzKTtcbiAgICAgIHJldHVybiAoY3NzMiwgcGVyY2VudCkgPT4ge1xuICAgICAgICBjc3MyW3Byb3BdID0gZ2V0VmFsdWUoc3RvcHMsIHBlcmNlbnQpO1xuICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3Ryb2tlRm4ocHJvcCwgZWwsIHN0b3BzKSB7XG4gICAgICBpZiAoc3RvcHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHN0b3BzLnVuc2hpZnQoMCk7XG4gICAgICB9XG4gICAgICBjb25zdCB1bml0ID0gZ2V0VW5pdChzdG9wcyk7XG4gICAgICBjb25zdCBsZW5ndGggPSBnZXRNYXhQYXRoTGVuZ3RoKGVsKTtcbiAgICAgIHN0b3BzID0gcGFyc2VTdG9wcyhzdG9wcy5yZXZlcnNlKCksIChzdG9wKSA9PiB7XG4gICAgICAgIHN0b3AgPSB0b0Zsb2F0KHN0b3ApO1xuICAgICAgICByZXR1cm4gdW5pdCA9PT0gXCIlXCIgPyBzdG9wICogbGVuZ3RoIC8gMTAwIDogc3RvcDtcbiAgICAgIH0pO1xuICAgICAgaWYgKCFzdG9wcy5zb21lKChbdmFsdWVdKSA9PiB2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIG5vb3A7XG4gICAgICB9XG4gICAgICBjc3MoZWwsIFwic3Ryb2tlRGFzaGFycmF5XCIsIGxlbmd0aCk7XG4gICAgICByZXR1cm4gKGNzczIsIHBlcmNlbnQpID0+IHtcbiAgICAgICAgY3NzMi5zdHJva2VEYXNob2Zmc2V0ID0gZ2V0VmFsdWUoc3RvcHMsIHBlcmNlbnQpO1xuICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYmFja2dyb3VuZEZuKHByb3AsIGVsLCBzdG9wcywgcHJvcHMyKSB7XG4gICAgICBpZiAoc3RvcHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHN0b3BzLnVuc2hpZnQoMCk7XG4gICAgICB9XG4gICAgICBjb25zdCBhdHRyID0gcHJvcCA9PT0gXCJiZ3lcIiA/IFwiaGVpZ2h0XCIgOiBcIndpZHRoXCI7XG4gICAgICBwcm9wczJbcHJvcF0gPSBwYXJzZVN0b3BzKHN0b3BzLCAoc3RvcCkgPT4gdG9QeChzdG9wLCBhdHRyLCBlbCkpO1xuICAgICAgY29uc3QgYmdQcm9wcyA9IFtcImJneFwiLCBcImJneVwiXS5maWx0ZXIoKHByb3AyKSA9PiBwcm9wMiBpbiBwcm9wczIpO1xuICAgICAgaWYgKGJnUHJvcHMubGVuZ3RoID09PSAyICYmIHByb3AgPT09IFwiYmd4XCIpIHtcbiAgICAgICAgcmV0dXJuIG5vb3A7XG4gICAgICB9XG4gICAgICBpZiAoZ2V0Q3NzVmFsdWUoZWwsIFwiYmFja2dyb3VuZFNpemVcIiwgXCJcIikgPT09IFwiY292ZXJcIikge1xuICAgICAgICByZXR1cm4gYmFja2dyb3VuZENvdmVyRm4ocHJvcCwgZWwsIHN0b3BzLCBwcm9wczIpO1xuICAgICAgfVxuICAgICAgY29uc3QgcG9zaXRpb25zID0ge307XG4gICAgICBmb3IgKGNvbnN0IHByb3AyIG9mIGJnUHJvcHMpIHtcbiAgICAgICAgcG9zaXRpb25zW3Byb3AyXSA9IGdldEJhY2tncm91bmRQb3MoZWwsIHByb3AyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXRCYWNrZ3JvdW5kUG9zRm4oYmdQcm9wcywgcG9zaXRpb25zLCBwcm9wczIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBiYWNrZ3JvdW5kQ292ZXJGbihwcm9wLCBlbCwgc3RvcHMsIHByb3BzMikge1xuICAgICAgY29uc3QgZGltSW1hZ2UgPSBnZXRCYWNrZ3JvdW5kSW1hZ2VEaW1lbnNpb25zKGVsKTtcbiAgICAgIGlmICghZGltSW1hZ2Uud2lkdGgpIHtcbiAgICAgICAgcmV0dXJuIG5vb3A7XG4gICAgICB9XG4gICAgICBjb25zdCBkaW1FbCA9IHtcbiAgICAgICAgd2lkdGg6IGVsLm9mZnNldFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGVsLm9mZnNldEhlaWdodFxuICAgICAgfTtcbiAgICAgIGNvbnN0IGJnUHJvcHMgPSBbXCJiZ3hcIiwgXCJiZ3lcIl0uZmlsdGVyKChwcm9wMikgPT4gcHJvcDIgaW4gcHJvcHMyKTtcbiAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IHt9O1xuICAgICAgZm9yIChjb25zdCBwcm9wMiBvZiBiZ1Byb3BzKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHByb3BzMltwcm9wMl0ubWFwKChbdmFsdWVdKSA9PiB2YWx1ZSk7XG4gICAgICAgIGNvbnN0IG1pbiA9IE1hdGgubWluKC4uLnZhbHVlcyk7XG4gICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KC4uLnZhbHVlcyk7XG4gICAgICAgIGNvbnN0IGRvd24gPSB2YWx1ZXMuaW5kZXhPZihtaW4pIDwgdmFsdWVzLmluZGV4T2YobWF4KTtcbiAgICAgICAgY29uc3QgZGlmZiA9IG1heCAtIG1pbjtcbiAgICAgICAgcG9zaXRpb25zW3Byb3AyXSA9IGAkeyhkb3duID8gLWRpZmYgOiAwKSAtIChkb3duID8gbWluIDogbWF4KX1weGA7XG4gICAgICAgIGRpbUVsW3Byb3AyID09PSBcImJneVwiID8gXCJoZWlnaHRcIiA6IFwid2lkdGhcIl0gKz0gZGlmZjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRpbSA9IERpbWVuc2lvbnMuY292ZXIoZGltSW1hZ2UsIGRpbUVsKTtcbiAgICAgIGZvciAoY29uc3QgcHJvcDIgb2YgYmdQcm9wcykge1xuICAgICAgICBjb25zdCBhdHRyID0gcHJvcDIgPT09IFwiYmd5XCIgPyBcImhlaWdodFwiIDogXCJ3aWR0aFwiO1xuICAgICAgICBjb25zdCBvdmVyZmxvdyA9IGRpbVthdHRyXSAtIGRpbUVsW2F0dHJdO1xuICAgICAgICBwb3NpdGlvbnNbcHJvcDJdID0gYG1heCgke2dldEJhY2tncm91bmRQb3MoZWwsIHByb3AyKX0sLSR7b3ZlcmZsb3d9cHgpICsgJHtwb3NpdGlvbnNbcHJvcDJdfWA7XG4gICAgICB9XG4gICAgICBjb25zdCBmbiA9IHNldEJhY2tncm91bmRQb3NGbihiZ1Byb3BzLCBwb3NpdGlvbnMsIHByb3BzMik7XG4gICAgICByZXR1cm4gKGNzczIsIHBlcmNlbnQpID0+IHtcbiAgICAgICAgZm4oY3NzMiwgcGVyY2VudCk7XG4gICAgICAgIGNzczIuYmFja2dyb3VuZFNpemUgPSBgJHtkaW0ud2lkdGh9cHggJHtkaW0uaGVpZ2h0fXB4YDtcbiAgICAgICAgY3NzMi5iYWNrZ3JvdW5kUmVwZWF0ID0gXCJuby1yZXBlYXRcIjtcbiAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEJhY2tncm91bmRQb3MoZWwsIHByb3ApIHtcbiAgICAgIHJldHVybiBnZXRDc3NWYWx1ZShlbCwgYGJhY2tncm91bmQtcG9zaXRpb24tJHtwcm9wLnNsaWNlKC0xKX1gLCBcIlwiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0QmFja2dyb3VuZFBvc0ZuKGJnUHJvcHMsIHBvc2l0aW9ucywgcHJvcHMyKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oY3NzMiwgcGVyY2VudCkge1xuICAgICAgICBmb3IgKGNvbnN0IHByb3Agb2YgYmdQcm9wcykge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gZ2V0VmFsdWUocHJvcHMyW3Byb3BdLCBwZXJjZW50KTtcbiAgICAgICAgICBjc3MyW2BiYWNrZ3JvdW5kLXBvc2l0aW9uLSR7cHJvcC5zbGljZSgtMSl9YF0gPSBgY2FsYygke3Bvc2l0aW9uc1twcm9wXX0gKyAke3ZhbHVlfXB4KWA7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGxvYWRpbmcgPSB7fTtcbiAgICBjb25zdCBkaW1lbnNpb25zID0ge307XG4gICAgZnVuY3Rpb24gZ2V0QmFja2dyb3VuZEltYWdlRGltZW5zaW9ucyhlbCkge1xuICAgICAgY29uc3Qgc3JjID0gY3NzKGVsLCBcImJhY2tncm91bmRJbWFnZVwiKS5yZXBsYWNlKC9ebm9uZXx1cmxcXChbXCInXT8oLis/KVtcIiddP1xcKSQvLCBcIiQxXCIpO1xuICAgICAgaWYgKGRpbWVuc2lvbnNbc3JjXSkge1xuICAgICAgICByZXR1cm4gZGltZW5zaW9uc1tzcmNdO1xuICAgICAgfVxuICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGlmIChzcmMpIHtcbiAgICAgICAgaW1hZ2Uuc3JjID0gc3JjO1xuICAgICAgICBpZiAoIWltYWdlLm5hdHVyYWxXaWR0aCAmJiAhbG9hZGluZ1tzcmNdKSB7XG4gICAgICAgICAgb25jZShpbWFnZSwgXCJlcnJvciBsb2FkXCIsICgpID0+IHtcbiAgICAgICAgICAgIGRpbWVuc2lvbnNbc3JjXSA9IHRvRGltZW5zaW9ucyhpbWFnZSk7XG4gICAgICAgICAgICB0cmlnZ2VyKGVsLCBjcmVhdGVFdmVudChcImxvYWRcIiwgZmFsc2UpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsb2FkaW5nW3NyY10gPSB0cnVlO1xuICAgICAgICAgIHJldHVybiB0b0RpbWVuc2lvbnMoaW1hZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZGltZW5zaW9uc1tzcmNdID0gdG9EaW1lbnNpb25zKGltYWdlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdG9EaW1lbnNpb25zKGltYWdlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogaW1hZ2UubmF0dXJhbFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGltYWdlLm5hdHVyYWxIZWlnaHRcbiAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBhcnNlU3RvcHMoc3RvcHMsIGZuID0gdG9GbG9hdCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICBjb25zdCB7IGxlbmd0aCB9ID0gc3RvcHM7XG4gICAgICBsZXQgbnVsbEluZGV4ID0gMDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IFt2YWx1ZSwgcGVyY2VudF0gPSBpc1N0cmluZyhzdG9wc1tpXSkgPyBzdG9wc1tpXS50cmltKCkuc3BsaXQoLyAoPyFbXihdKlxcKSkvKSA6IFtzdG9wc1tpXV07XG4gICAgICAgIHZhbHVlID0gZm4odmFsdWUpO1xuICAgICAgICBwZXJjZW50ID0gcGVyY2VudCA/IHRvRmxvYXQocGVyY2VudCkgLyAxMDAgOiBudWxsO1xuICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgIGlmIChwZXJjZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICBwZXJjZW50ID0gMDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHBlcmNlbnQpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKFt2YWx1ZSwgMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChpID09PSBsZW5ndGggLSAxKSB7XG4gICAgICAgICAgaWYgKHBlcmNlbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHBlcmNlbnQgPSAxO1xuICAgICAgICAgIH0gZWxzZSBpZiAocGVyY2VudCAhPT0gMSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goW3ZhbHVlLCBwZXJjZW50XSk7XG4gICAgICAgICAgICBwZXJjZW50ID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnB1c2goW3ZhbHVlLCBwZXJjZW50XSk7XG4gICAgICAgIGlmIChwZXJjZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgbnVsbEluZGV4Kys7XG4gICAgICAgIH0gZWxzZSBpZiAobnVsbEluZGV4KSB7XG4gICAgICAgICAgY29uc3QgbGVmdFBlcmNlbnQgPSByZXN1bHRbaSAtIG51bGxJbmRleCAtIDFdWzFdO1xuICAgICAgICAgIGNvbnN0IHAgPSAocGVyY2VudCAtIGxlZnRQZXJjZW50KSAvIChudWxsSW5kZXggKyAxKTtcbiAgICAgICAgICBmb3IgKGxldCBqID0gbnVsbEluZGV4OyBqID4gMDsgai0tKSB7XG4gICAgICAgICAgICByZXN1bHRbaSAtIGpdWzFdID0gbGVmdFBlcmNlbnQgKyBwICogKG51bGxJbmRleCAtIGogKyAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbnVsbEluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0U3RvcChzdG9wcywgcGVyY2VudCkge1xuICAgICAgY29uc3QgaW5kZXggPSBmaW5kSW5kZXgoc3RvcHMuc2xpY2UoMSksIChbLCB0YXJnZXRQZXJjZW50XSkgPT4gcGVyY2VudCA8PSB0YXJnZXRQZXJjZW50KSArIDE7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBzdG9wc1tpbmRleCAtIDFdWzBdLFxuICAgICAgICBzdG9wc1tpbmRleF1bMF0sXG4gICAgICAgIChwZXJjZW50IC0gc3RvcHNbaW5kZXggLSAxXVsxXSkgLyAoc3RvcHNbaW5kZXhdWzFdIC0gc3RvcHNbaW5kZXggLSAxXVsxXSlcbiAgICAgIF07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFZhbHVlKHN0b3BzLCBwZXJjZW50KSB7XG4gICAgICBjb25zdCBbc3RhcnQsIGVuZCwgcF0gPSBnZXRTdG9wKHN0b3BzLCBwZXJjZW50KTtcbiAgICAgIHJldHVybiBzdGFydCArIE1hdGguYWJzKHN0YXJ0IC0gZW5kKSAqIHAgKiAoc3RhcnQgPCBlbmQgPyAxIDogLTEpO1xuICAgIH1cbiAgICBjb25zdCB1bml0UmUgPSAvXi0/XFxkKyg/OlxcLlxcZCspPyhcXFMrKT8vO1xuICAgIGZ1bmN0aW9uIGdldFVuaXQoc3RvcHMsIGRlZmF1bHRVbml0KSB7XG4gICAgICB2YXIgX2E7XG4gICAgICBmb3IgKGNvbnN0IHN0b3Agb2Ygc3RvcHMpIHtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSAoX2EgPSBzdG9wLm1hdGNoKSA9PSBudWxsID8gdm9pZCAwIDogX2EuY2FsbChzdG9wLCB1bml0UmUpO1xuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICByZXR1cm4gbWF0Y2hbMV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBkZWZhdWx0VW5pdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Q3NzVmFsdWUoZWwsIHByb3AsIHZhbHVlKSB7XG4gICAgICBjb25zdCBwcmV2ID0gZWwuc3R5bGVbcHJvcF07XG4gICAgICBjb25zdCB2YWwgPSBjc3MoY3NzKGVsLCBwcm9wLCB2YWx1ZSksIHByb3ApO1xuICAgICAgZWwuc3R5bGVbcHJvcF0gPSBwcmV2O1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmlsbE9iamVjdChrZXlzMiwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBrZXlzMi5yZWR1Y2UoKGRhdGEsIHByb3ApID0+IHtcbiAgICAgICAgZGF0YVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0sIHt9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZWFzZShwZXJjZW50LCBlYXNpbmcpIHtcbiAgICAgIHJldHVybiBlYXNpbmcgPj0gMCA/IE1hdGgucG93KHBlcmNlbnQsIGVhc2luZyArIDEpIDogMSAtIE1hdGgucG93KDEgLSBwZXJjZW50LCAxIC0gZWFzaW5nKTtcbiAgICB9XG5cbiAgICB2YXIgcGFyYWxsYXggPSB7XG4gICAgICBtaXhpbnM6IFtQYXJhbGxheF0sXG4gICAgICBwcm9wczoge1xuICAgICAgICB0YXJnZXQ6IFN0cmluZyxcbiAgICAgICAgdmlld3BvcnQ6IE51bWJlcixcbiAgICAgICAgLy8gRGVwcmVjYXRlZFxuICAgICAgICBlYXNpbmc6IE51bWJlcixcbiAgICAgICAgc3RhcnQ6IFN0cmluZyxcbiAgICAgICAgZW5kOiBTdHJpbmdcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHRhcmdldDogZmFsc2UsXG4gICAgICAgIHZpZXdwb3J0OiAxLFxuICAgICAgICBlYXNpbmc6IDEsXG4gICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICBlbmQ6IDBcbiAgICAgIH0sXG4gICAgICBjb21wdXRlZDoge1xuICAgICAgICB0YXJnZXQ6ICh7IHRhcmdldCB9LCAkZWwpID0+IGdldE9mZnNldEVsZW1lbnQodGFyZ2V0ICYmIHF1ZXJ5KHRhcmdldCwgJGVsKSB8fCAkZWwpLFxuICAgICAgICBzdGFydCh7IHN0YXJ0IH0pIHtcbiAgICAgICAgICByZXR1cm4gdG9QeChzdGFydCwgXCJoZWlnaHRcIiwgdGhpcy50YXJnZXQsIHRydWUpO1xuICAgICAgICB9LFxuICAgICAgICBlbmQoeyBlbmQsIHZpZXdwb3J0OiB2aWV3cG9ydDIgfSkge1xuICAgICAgICAgIHJldHVybiB0b1B4KFxuICAgICAgICAgICAgZW5kIHx8ICh2aWV3cG9ydDIgPSAoMSAtIHZpZXdwb3J0MikgKiAxMDApICYmIGAke3ZpZXdwb3J0Mn12aCske3ZpZXdwb3J0Mn0lYCxcbiAgICAgICAgICAgIFwiaGVpZ2h0XCIsXG4gICAgICAgICAgICB0aGlzLnRhcmdldCxcbiAgICAgICAgICAgIHRydWVcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb2JzZXJ2ZTogW1xuICAgICAgICB2aWV3cG9ydCgpLFxuICAgICAgICBzY3JvbGwkMSh7IHRhcmdldDogKHsgdGFyZ2V0IH0pID0+IHRhcmdldCB9KSxcbiAgICAgICAgcmVzaXplKHsgdGFyZ2V0OiAoeyAkZWwsIHRhcmdldCB9KSA9PiBbJGVsLCB0YXJnZXQsIHNjcm9sbFBhcmVudCh0YXJnZXQsIHRydWUpXSB9KVxuICAgICAgXSxcbiAgICAgIHVwZGF0ZToge1xuICAgICAgICByZWFkKHsgcGVyY2VudCB9LCB0eXBlcykge1xuICAgICAgICAgIGlmICghdHlwZXMuaGFzKFwic2Nyb2xsXCIpKSB7XG4gICAgICAgICAgICBwZXJjZW50ID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNWaXNpYmxlKHRoaXMuJGVsKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXRoaXMubWF0Y2hNZWRpYSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBwcmV2ID0gcGVyY2VudDtcbiAgICAgICAgICBwZXJjZW50ID0gZWFzZShzY3JvbGxlZE92ZXIodGhpcy50YXJnZXQsIHRoaXMuc3RhcnQsIHRoaXMuZW5kKSwgdGhpcy5lYXNpbmcpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwZXJjZW50LFxuICAgICAgICAgICAgc3R5bGU6IHByZXYgPT09IHBlcmNlbnQgPyBmYWxzZSA6IHRoaXMuZ2V0Q3NzKHBlcmNlbnQpXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGUoeyBzdHlsZSB9KSB7XG4gICAgICAgICAgaWYgKCF0aGlzLm1hdGNoTWVkaWEpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3R5bGUgJiYgY3NzKHRoaXMuJGVsLCBzdHlsZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGV2ZW50czogW1wic2Nyb2xsXCIsIFwicmVzaXplXCJdXG4gICAgICB9XG4gICAgfTtcbiAgICBmdW5jdGlvbiBnZXRPZmZzZXRFbGVtZW50KGVsKSB7XG4gICAgICByZXR1cm4gZWwgPyBcIm9mZnNldFRvcFwiIGluIGVsID8gZWwgOiBnZXRPZmZzZXRFbGVtZW50KHBhcmVudChlbCkpIDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIH1cblxuICAgIHZhciBTbGlkZXJQYXJhbGxheCA9IHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHBhcmFsbGF4OiBCb29sZWFuLFxuICAgICAgICBwYXJhbGxheFRhcmdldDogQm9vbGVhbixcbiAgICAgICAgcGFyYWxsYXhTdGFydDogU3RyaW5nLFxuICAgICAgICBwYXJhbGxheEVuZDogU3RyaW5nLFxuICAgICAgICBwYXJhbGxheEVhc2luZzogTnVtYmVyXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBwYXJhbGxheDogZmFsc2UsXG4gICAgICAgIHBhcmFsbGF4VGFyZ2V0OiBmYWxzZSxcbiAgICAgICAgcGFyYWxsYXhTdGFydDogMCxcbiAgICAgICAgcGFyYWxsYXhFbmQ6IDAsXG4gICAgICAgIHBhcmFsbGF4RWFzaW5nOiAwXG4gICAgICB9LFxuICAgICAgb2JzZXJ2ZTogW1xuICAgICAgICByZXNpemUoe1xuICAgICAgICAgIHRhcmdldDogKHsgJGVsLCBwYXJhbGxheFRhcmdldCB9KSA9PiBbJGVsLCBwYXJhbGxheFRhcmdldF0sXG4gICAgICAgICAgZmlsdGVyOiAoeyBwYXJhbGxheCB9KSA9PiBwYXJhbGxheFxuICAgICAgICB9KSxcbiAgICAgICAgc2Nyb2xsJDEoeyBmaWx0ZXI6ICh7IHBhcmFsbGF4IH0pID0+IHBhcmFsbGF4IH0pXG4gICAgICBdLFxuICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgcGFyYWxsYXhUYXJnZXQoeyBwYXJhbGxheFRhcmdldCB9LCAkZWwpIHtcbiAgICAgICAgICByZXR1cm4gcGFyYWxsYXhUYXJnZXQgJiYgcXVlcnkocGFyYWxsYXhUYXJnZXQsICRlbCkgfHwgdGhpcy5saXN0O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdXBkYXRlOiB7XG4gICAgICAgIHJlYWQoKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLnBhcmFsbGF4KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMucGFyYWxsYXhUYXJnZXQ7XG4gICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qgc3RhcnQgPSB0b1B4KHRoaXMucGFyYWxsYXhTdGFydCwgXCJoZWlnaHRcIiwgdGFyZ2V0LCB0cnVlKTtcbiAgICAgICAgICBjb25zdCBlbmQgPSB0b1B4KHRoaXMucGFyYWxsYXhFbmQsIFwiaGVpZ2h0XCIsIHRhcmdldCwgdHJ1ZSk7XG4gICAgICAgICAgY29uc3QgcGVyY2VudCA9IGVhc2Uoc2Nyb2xsZWRPdmVyKHRhcmdldCwgc3RhcnQsIGVuZCksIHRoaXMucGFyYWxsYXhFYXNpbmcpO1xuICAgICAgICAgIHJldHVybiB7IHBhcmFsbGF4OiB0aGlzLmdldEluZGV4QXQocGVyY2VudCkgfTtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGUoeyBwYXJhbGxheCB9KSB7XG4gICAgICAgICAgY29uc3QgW3ByZXZJbmRleCwgc2xpZGVQZXJjZW50XSA9IHBhcmFsbGF4O1xuICAgICAgICAgIGNvbnN0IG5leHRJbmRleCA9IHRoaXMuZ2V0VmFsaWRJbmRleChwcmV2SW5kZXggKyBNYXRoLmNlaWwoc2xpZGVQZXJjZW50KSk7XG4gICAgICAgICAgY29uc3QgcHJldiA9IHRoaXMuc2xpZGVzW3ByZXZJbmRleF07XG4gICAgICAgICAgY29uc3QgbmV4dCA9IHRoaXMuc2xpZGVzW25leHRJbmRleF07XG4gICAgICAgICAgY29uc3QgeyB0cmlnZ2VyU2hvdywgdHJpZ2dlclNob3duLCB0cmlnZ2VySGlkZSwgdHJpZ2dlckhpZGRlbiB9ID0gdXNlVHJpZ2dlcnModGhpcyk7XG4gICAgICAgICAgaWYgKH50aGlzLnByZXZJbmRleCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIG9mIC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFt0aGlzLmluZGV4LCB0aGlzLnByZXZJbmRleF0pKSB7XG4gICAgICAgICAgICAgIGlmICghaW5jbHVkZXMoW25leHRJbmRleCwgcHJldkluZGV4XSwgaSkpIHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VySGlkZSh0aGlzLnNsaWRlc1tpXSk7XG4gICAgICAgICAgICAgICAgdHJpZ2dlckhpZGRlbih0aGlzLnNsaWRlc1tpXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgY2hhbmdlZCA9IHRoaXMucHJldkluZGV4ICE9PSBwcmV2SW5kZXggfHwgdGhpcy5pbmRleCAhPT0gbmV4dEluZGV4O1xuICAgICAgICAgIHRoaXMuZGlyID0gMTtcbiAgICAgICAgICB0aGlzLnByZXZJbmRleCA9IHByZXZJbmRleDtcbiAgICAgICAgICB0aGlzLmluZGV4ID0gbmV4dEluZGV4O1xuICAgICAgICAgIGlmIChwcmV2ICE9PSBuZXh0KSB7XG4gICAgICAgICAgICB0cmlnZ2VySGlkZShwcmV2KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdHJpZ2dlclNob3cobmV4dCk7XG4gICAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICAgIHRyaWdnZXJTaG93bihwcmV2KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fdHJhbnNsYXRlKHByZXYgPT09IG5leHQgPyAxIDogc2xpZGVQZXJjZW50LCBwcmV2LCBuZXh0KTtcbiAgICAgICAgfSxcbiAgICAgICAgZXZlbnRzOiBbXCJzY3JvbGxcIiwgXCJyZXNpemVcIl1cbiAgICAgIH0sXG4gICAgICBtZXRob2RzOiB7XG4gICAgICAgIGdldEluZGV4QXQocGVyY2VudCkge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGVyY2VudCAqICh0aGlzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgIHJldHVybiBbTWF0aC5mbG9vcihpbmRleCksIGluZGV4ICUgMV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGZ1bmN0aW9uIHVzZVRyaWdnZXJzKGNtcCkge1xuICAgICAgY29uc3QgeyBjbHNTbGlkZUFjdGl2ZSwgY2xzRW50ZXIsIGNsc0xlYXZlIH0gPSBjbXA7XG4gICAgICByZXR1cm4geyB0cmlnZ2VyU2hvdywgdHJpZ2dlclNob3duLCB0cmlnZ2VySGlkZSwgdHJpZ2dlckhpZGRlbiB9O1xuICAgICAgZnVuY3Rpb24gdHJpZ2dlclNob3coZWwpIHtcbiAgICAgICAgaWYgKGhhc0NsYXNzKGVsLCBjbHNMZWF2ZSkpIHtcbiAgICAgICAgICB0cmlnZ2VySGlkZShlbCk7XG4gICAgICAgICAgdHJpZ2dlckhpZGRlbihlbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFoYXNDbGFzcyhlbCwgY2xzU2xpZGVBY3RpdmUpKSB7XG4gICAgICAgICAgdHJpZ2dlcihlbCwgXCJiZWZvcmVpdGVtc2hvd1wiLCBbY21wXSk7XG4gICAgICAgICAgdHJpZ2dlcihlbCwgXCJpdGVtc2hvd1wiLCBbY21wXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIHRyaWdnZXJTaG93bihlbCkge1xuICAgICAgICBpZiAoaGFzQ2xhc3MoZWwsIGNsc0VudGVyKSkge1xuICAgICAgICAgIHRyaWdnZXIoZWwsIFwiaXRlbXNob3duXCIsIFtjbXBdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZnVuY3Rpb24gdHJpZ2dlckhpZGUoZWwpIHtcbiAgICAgICAgaWYgKCFoYXNDbGFzcyhlbCwgY2xzU2xpZGVBY3RpdmUpKSB7XG4gICAgICAgICAgdHJpZ2dlclNob3coZWwpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNDbGFzcyhlbCwgY2xzRW50ZXIpKSB7XG4gICAgICAgICAgdHJpZ2dlclNob3duKGVsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWhhc0NsYXNzKGVsLCBjbHNMZWF2ZSkpIHtcbiAgICAgICAgICB0cmlnZ2VyKGVsLCBcImJlZm9yZWl0ZW1oaWRlXCIsIFtjbXBdKTtcbiAgICAgICAgICB0cmlnZ2VyKGVsLCBcIml0ZW1oaWRlXCIsIFtjbXBdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZnVuY3Rpb24gdHJpZ2dlckhpZGRlbihlbCkge1xuICAgICAgICBpZiAoaGFzQ2xhc3MoZWwsIGNsc0xlYXZlKSkge1xuICAgICAgICAgIHRyaWdnZXIoZWwsIFwiaXRlbWhpZGRlblwiLCBbY21wXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgU2xpZGVyUmVhY3RpdmUgPSB7XG4gICAgICB1cGRhdGU6IHtcbiAgICAgICAgd3JpdGUoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3RhY2subGVuZ3RoIHx8IHRoaXMuZHJhZ2dpbmcgfHwgdGhpcy5wYXJhbGxheCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0VmFsaWRJbmRleCgpO1xuICAgICAgICAgIGlmICghfnRoaXMucHJldkluZGV4IHx8IHRoaXMuaW5kZXggIT09IGluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLnNob3coaW5kZXgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl90cmFuc2xhdGUoMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBldmVudHM6IFtcInJlc2l6ZVwiXVxuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgU2xpZGVyUHJlbG9hZCA9IHtcbiAgICAgIG9ic2VydmU6IGxhenlsb2FkKHtcbiAgICAgICAgdGFyZ2V0OiAoeyBzbGlkZXMgfSkgPT4gc2xpZGVzLFxuICAgICAgICB0YXJnZXRzOiAoaW5zdGFuY2UpID0+IGluc3RhbmNlLmdldEFkamFjZW50U2xpZGVzKClcbiAgICAgIH0pLFxuICAgICAgbWV0aG9kczoge1xuICAgICAgICBnZXRBZGphY2VudFNsaWRlcygpIHtcbiAgICAgICAgICByZXR1cm4gWzEsIC0xXS5tYXAoKGkpID0+IHRoaXMuc2xpZGVzW3RoaXMuZ2V0SW5kZXgodGhpcy5pbmRleCArIGkpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gVHJhbnNpdGlvbmVyKHByZXYsIG5leHQsIGRpciwgeyBjZW50ZXIsIGVhc2luZywgbGlzdCB9KSB7XG4gICAgICBjb25zdCBmcm9tID0gcHJldiA/IGdldExlZnQocHJldiwgbGlzdCwgY2VudGVyKSA6IGdldExlZnQobmV4dCwgbGlzdCwgY2VudGVyKSArIGRpbWVuc2lvbnMkMShuZXh0KS53aWR0aCAqIGRpcjtcbiAgICAgIGNvbnN0IHRvID0gbmV4dCA/IGdldExlZnQobmV4dCwgbGlzdCwgY2VudGVyKSA6IGZyb20gKyBkaW1lbnNpb25zJDEocHJldikud2lkdGggKiBkaXIgKiAoaXNSdGwgPyAtMSA6IDEpO1xuICAgICAgY29uc3QgeyBwcm9taXNlLCByZXNvbHZlIH0gPSB3aXRoUmVzb2x2ZXJzKCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkaXIsXG4gICAgICAgIHNob3coZHVyYXRpb24sIHBlcmNlbnQgPSAwLCBsaW5lYXIpIHtcbiAgICAgICAgICBjb25zdCB0aW1pbmcgPSBsaW5lYXIgPyBcImxpbmVhclwiIDogZWFzaW5nO1xuICAgICAgICAgIGR1cmF0aW9uIC09IE1hdGgucm91bmQoZHVyYXRpb24gKiBjbGFtcChwZXJjZW50LCAtMSwgMSkpO1xuICAgICAgICAgIGNzcyhsaXN0LCBcInRyYW5zaXRpb25Qcm9wZXJ0eVwiLCBcIm5vbmVcIik7XG4gICAgICAgICAgdGhpcy50cmFuc2xhdGUocGVyY2VudCk7XG4gICAgICAgICAgY3NzKGxpc3QsIFwidHJhbnNpdGlvblByb3BlcnR5XCIsIFwiXCIpO1xuICAgICAgICAgIHBlcmNlbnQgPSBwcmV2ID8gcGVyY2VudCA6IGNsYW1wKHBlcmNlbnQsIDAsIDEpO1xuICAgICAgICAgIHRyaWdnZXJVcGRhdGUodGhpcy5nZXRJdGVtSW4oKSwgXCJpdGVtaW5cIiwgeyBwZXJjZW50LCBkdXJhdGlvbiwgdGltaW5nLCBkaXIgfSk7XG4gICAgICAgICAgcHJldiAmJiB0cmlnZ2VyVXBkYXRlKHRoaXMuZ2V0SXRlbUluKHRydWUpLCBcIml0ZW1vdXRcIiwge1xuICAgICAgICAgICAgcGVyY2VudDogMSAtIHBlcmNlbnQsXG4gICAgICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgICAgIHRpbWluZyxcbiAgICAgICAgICAgIGRpclxuICAgICAgICAgIH0pO1xuICAgICAgICAgIFRyYW5zaXRpb24uc3RhcnQoXG4gICAgICAgICAgICBsaXN0LFxuICAgICAgICAgICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtdG8gKiAoaXNSdGwgPyAtMSA6IDEpLCBcInB4XCIpIH0sXG4gICAgICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgICAgIHRpbWluZ1xuICAgICAgICAgICkudGhlbihyZXNvbHZlLCBub29wKTtcbiAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgfSxcbiAgICAgICAgY2FuY2VsKCkge1xuICAgICAgICAgIHJldHVybiBUcmFuc2l0aW9uLmNhbmNlbChsaXN0KTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVzZXQoKSB7XG4gICAgICAgICAgY3NzKGxpc3QsIFwidHJhbnNmb3JtXCIsIFwiXCIpO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyBmb3J3YXJkKGR1cmF0aW9uLCBwZXJjZW50ID0gdGhpcy5wZXJjZW50KCkpIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLmNhbmNlbCgpO1xuICAgICAgICAgIHJldHVybiB0aGlzLnNob3coZHVyYXRpb24sIHBlcmNlbnQsIHRydWUpO1xuICAgICAgICB9LFxuICAgICAgICB0cmFuc2xhdGUocGVyY2VudCkge1xuICAgICAgICAgIGlmIChwZXJjZW50ID09PSB0aGlzLnBlcmNlbnQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMuZ2V0RGlzdGFuY2UoKSAqIGRpciAqIChpc1J0bCA/IC0xIDogMSk7XG4gICAgICAgICAgY3NzKFxuICAgICAgICAgICAgbGlzdCxcbiAgICAgICAgICAgIFwidHJhbnNmb3JtXCIsXG4gICAgICAgICAgICB0cmFuc2xhdGUoXG4gICAgICAgICAgICAgIGNsYW1wKFxuICAgICAgICAgICAgICAgIC10byArIChkaXN0YW5jZSAtIGRpc3RhbmNlICogcGVyY2VudCksXG4gICAgICAgICAgICAgICAgLWdldFdpZHRoKGxpc3QpLFxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnMkMShsaXN0KS53aWR0aFxuICAgICAgICAgICAgICApICogKGlzUnRsID8gLTEgOiAxKSxcbiAgICAgICAgICAgICAgXCJweFwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBhY3RpdmVzID0gdGhpcy5nZXRBY3RpdmVzKCk7XG4gICAgICAgICAgY29uc3QgaXRlbUluID0gdGhpcy5nZXRJdGVtSW4oKTtcbiAgICAgICAgICBjb25zdCBpdGVtT3V0ID0gdGhpcy5nZXRJdGVtSW4odHJ1ZSk7XG4gICAgICAgICAgcGVyY2VudCA9IHByZXYgPyBjbGFtcChwZXJjZW50LCAtMSwgMSkgOiAwO1xuICAgICAgICAgIGZvciAoY29uc3Qgc2xpZGUgb2YgY2hpbGRyZW4obGlzdCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gaW5jbHVkZXMoYWN0aXZlcywgc2xpZGUpO1xuICAgICAgICAgICAgY29uc3QgaXNJbiA9IHNsaWRlID09PSBpdGVtSW47XG4gICAgICAgICAgICBjb25zdCBpc091dCA9IHNsaWRlID09PSBpdGVtT3V0O1xuICAgICAgICAgICAgY29uc3QgdHJhbnNsYXRlSW4gPSBpc0luIHx8ICFpc091dCAmJiAoaXNBY3RpdmUgfHwgZGlyICogKGlzUnRsID8gLTEgOiAxKSA9PT0gLTEgXiBnZXRFbExlZnQoc2xpZGUsIGxpc3QpID4gZ2V0RWxMZWZ0KHByZXYgfHwgbmV4dCkpO1xuICAgICAgICAgICAgdHJpZ2dlclVwZGF0ZShzbGlkZSwgYGl0ZW10cmFuc2xhdGUke3RyYW5zbGF0ZUluID8gXCJpblwiIDogXCJvdXRcIn1gLCB7XG4gICAgICAgICAgICAgIGRpcixcbiAgICAgICAgICAgICAgcGVyY2VudDogaXNPdXQgPyAxIC0gcGVyY2VudCA6IGlzSW4gPyBwZXJjZW50IDogaXNBY3RpdmUgPyAxIDogMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwZXJjZW50KCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLmFicyhcbiAgICAgICAgICAgIChuZXcgRE9NTWF0cml4KGNzcyhsaXN0LCBcInRyYW5zZm9ybVwiKSkubTQxICogKGlzUnRsID8gLTEgOiAxKSArIGZyb20pIC8gKHRvIC0gZnJvbSlcbiAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgICBnZXREaXN0YW5jZSgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5hYnModG8gLSBmcm9tKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0SXRlbUluKG91dCA9IGZhbHNlKSB7XG4gICAgICAgICAgbGV0IGFjdGl2ZXMgPSB0aGlzLmdldEFjdGl2ZXMoKTtcbiAgICAgICAgICBsZXQgbmV4dEFjdGl2ZXMgPSBpblZpZXcobGlzdCwgZ2V0TGVmdChuZXh0IHx8IHByZXYsIGxpc3QsIGNlbnRlcikpO1xuICAgICAgICAgIGlmIChvdXQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBhY3RpdmVzO1xuICAgICAgICAgICAgYWN0aXZlcyA9IG5leHRBY3RpdmVzO1xuICAgICAgICAgICAgbmV4dEFjdGl2ZXMgPSB0ZW1wO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV4dEFjdGl2ZXNbZmluZEluZGV4KG5leHRBY3RpdmVzLCAoZWwpID0+ICFpbmNsdWRlcyhhY3RpdmVzLCBlbCkpXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0QWN0aXZlcygpIHtcbiAgICAgICAgICByZXR1cm4gaW5WaWV3KGxpc3QsIGdldExlZnQocHJldiB8fCBuZXh0LCBsaXN0LCBjZW50ZXIpKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0TGVmdChlbCwgbGlzdCwgY2VudGVyKSB7XG4gICAgICBjb25zdCBsZWZ0ID0gZ2V0RWxMZWZ0KGVsLCBsaXN0KTtcbiAgICAgIHJldHVybiBjZW50ZXIgPyBsZWZ0IC0gY2VudGVyRWwoZWwsIGxpc3QpIDogTWF0aC5taW4obGVmdCwgZ2V0TWF4KGxpc3QpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0TWF4KGxpc3QpIHtcbiAgICAgIHJldHVybiBNYXRoLm1heCgwLCBnZXRXaWR0aChsaXN0KSAtIGRpbWVuc2lvbnMkMShsaXN0KS53aWR0aCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFdpZHRoKGxpc3QsIGluZGV4KSB7XG4gICAgICByZXR1cm4gc3VtQnkoY2hpbGRyZW4obGlzdCkuc2xpY2UoMCwgaW5kZXgpLCAoZWwpID0+IGRpbWVuc2lvbnMkMShlbCkud2lkdGgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjZW50ZXJFbChlbCwgbGlzdCkge1xuICAgICAgcmV0dXJuIGRpbWVuc2lvbnMkMShsaXN0KS53aWR0aCAvIDIgLSBkaW1lbnNpb25zJDEoZWwpLndpZHRoIC8gMjtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0RWxMZWZ0KGVsLCBsaXN0KSB7XG4gICAgICByZXR1cm4gZWwgJiYgKHBvc2l0aW9uKGVsKS5sZWZ0ICsgKGlzUnRsID8gZGltZW5zaW9ucyQxKGVsKS53aWR0aCAtIGRpbWVuc2lvbnMkMShsaXN0KS53aWR0aCA6IDApKSAqIChpc1J0bCA/IC0xIDogMSkgfHwgMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gaW5WaWV3KGxpc3QsIGxpc3RMZWZ0KSB7XG4gICAgICBsaXN0TGVmdCAtPSAxO1xuICAgICAgY29uc3QgbGlzdFdpZHRoID0gZGltZW5zaW9ucyQxKGxpc3QpLndpZHRoO1xuICAgICAgY29uc3QgbGlzdFJpZ2h0ID0gbGlzdExlZnQgKyBsaXN0V2lkdGggKyAyO1xuICAgICAgcmV0dXJuIGNoaWxkcmVuKGxpc3QpLmZpbHRlcigoc2xpZGUpID0+IHtcbiAgICAgICAgY29uc3Qgc2xpZGVMZWZ0ID0gZ2V0RWxMZWZ0KHNsaWRlLCBsaXN0KTtcbiAgICAgICAgY29uc3Qgc2xpZGVSaWdodCA9IHNsaWRlTGVmdCArIE1hdGgubWluKGRpbWVuc2lvbnMkMShzbGlkZSkud2lkdGgsIGxpc3RXaWR0aCk7XG4gICAgICAgIHJldHVybiBzbGlkZUxlZnQgPj0gbGlzdExlZnQgJiYgc2xpZGVSaWdodCA8PSBsaXN0UmlnaHQ7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgc2xpZGVyID0ge1xuICAgICAgbWl4aW5zOiBbQ2xhc3MsIFNsaWRlciwgU2xpZGVyUmVhY3RpdmUsIFNsaWRlclBhcmFsbGF4LCBTbGlkZXJQcmVsb2FkXSxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGNlbnRlcjogQm9vbGVhbixcbiAgICAgICAgc2V0czogQm9vbGVhbixcbiAgICAgICAgYWN0aXZlOiBTdHJpbmdcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNlbnRlcjogZmFsc2UsXG4gICAgICAgIHNldHM6IGZhbHNlLFxuICAgICAgICBhdHRySXRlbTogXCJ1ay1zbGlkZXItaXRlbVwiLFxuICAgICAgICBzZWxMaXN0OiBcIi51ay1zbGlkZXItaXRlbXNcIixcbiAgICAgICAgc2VsTmF2OiBcIi51ay1zbGlkZXItbmF2XCIsXG4gICAgICAgIGNsc0NvbnRhaW5lcjogXCJ1ay1zbGlkZXItY29udGFpbmVyXCIsXG4gICAgICAgIGFjdGl2ZTogXCJhbGxcIixcbiAgICAgICAgVHJhbnNpdGlvbmVyXG4gICAgICB9LFxuICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgZmluaXRlKHsgZmluaXRlIH0pIHtcbiAgICAgICAgICByZXR1cm4gZmluaXRlIHx8IGlzRmluaXRlKHRoaXMubGlzdCwgdGhpcy5jZW50ZXIpO1xuICAgICAgICB9LFxuICAgICAgICBtYXhJbmRleCgpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuZmluaXRlIHx8IHRoaXMuY2VudGVyICYmICF0aGlzLnNldHMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLmNlbnRlcikge1xuICAgICAgICAgICAgcmV0dXJuIGxhc3QodGhpcy5zZXRzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IGxmdCA9IDA7XG4gICAgICAgICAgY29uc3QgbWF4ID0gZ2V0TWF4KHRoaXMubGlzdCk7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSBmaW5kSW5kZXgodGhpcy5zbGlkZXMsIChlbCkgPT4ge1xuICAgICAgICAgICAgaWYgKGxmdCA+PSBtYXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZnQgKz0gZGltZW5zaW9ucyQxKGVsKS53aWR0aDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gfmluZGV4ID8gaW5kZXggOiB0aGlzLmxlbmd0aCAtIDE7XG4gICAgICAgIH0sXG4gICAgICAgIHNldHMoeyBzZXRzOiBlbmFibGVkIH0pIHtcbiAgICAgICAgICBpZiAoIWVuYWJsZWQgfHwgdGhpcy5wYXJhbGxheCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgbGVmdCA9IDA7XG4gICAgICAgICAgY29uc3Qgc2V0cyA9IFtdO1xuICAgICAgICAgIGNvbnN0IHdpZHRoID0gZGltZW5zaW9ucyQxKHRoaXMubGlzdCkud2lkdGg7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzbGlkZVdpZHRoID0gZGltZW5zaW9ucyQxKHRoaXMuc2xpZGVzW2ldKS53aWR0aDtcbiAgICAgICAgICAgIGlmIChsZWZ0ICsgc2xpZGVXaWR0aCA+IHdpZHRoKSB7XG4gICAgICAgICAgICAgIGxlZnQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY2VudGVyKSB7XG4gICAgICAgICAgICAgIGlmIChsZWZ0IDwgd2lkdGggLyAyICYmIGxlZnQgKyBzbGlkZVdpZHRoICsgZGltZW5zaW9ucyQxKHRoaXMuc2xpZGVzW2dldEluZGV4KGkgKyAxLCB0aGlzLnNsaWRlcyldKS53aWR0aCAvIDIgPiB3aWR0aCAvIDIpIHtcbiAgICAgICAgICAgICAgICBzZXRzLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgbGVmdCA9IHdpZHRoIC8gMiAtIHNsaWRlV2lkdGggLyAyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxlZnQgPT09IDApIHtcbiAgICAgICAgICAgICAgc2V0cy5wdXNoKE1hdGgubWluKGksIHRoaXMubWF4SW5kZXgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxlZnQgKz0gc2xpZGVXaWR0aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNldHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2V0cztcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRyYW5zaXRpb25PcHRpb25zKCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjZW50ZXI6IHRoaXMuY2VudGVyLFxuICAgICAgICAgICAgbGlzdDogdGhpcy5saXN0XG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgc2xpZGVzKCkge1xuICAgICAgICAgIHJldHVybiBjaGlsZHJlbih0aGlzLmxpc3QpLmZpbHRlcihpc1Zpc2libGUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY29ubmVjdGVkKCkge1xuICAgICAgICB0b2dnbGVDbGFzcyh0aGlzLiRlbCwgdGhpcy5jbHNDb250YWluZXIsICEkKGAuJHt0aGlzLmNsc0NvbnRhaW5lcn1gLCB0aGlzLiRlbCkpO1xuICAgICAgfSxcbiAgICAgIG9ic2VydmU6IHJlc2l6ZSh7XG4gICAgICAgIHRhcmdldDogKHsgc2xpZGVzLCAkZWwgfSkgPT4gWyRlbCwgLi4uc2xpZGVzXVxuICAgICAgfSksXG4gICAgICB1cGRhdGU6IHtcbiAgICAgICAgd3JpdGUoKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBlbCBvZiB0aGlzLm5hdkl0ZW1zKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRvTnVtYmVyKGRhdGEoZWwsIHRoaXMuYXR0ckl0ZW0pKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgZWwuaGlkZGVuID0gIXRoaXMubWF4SW5kZXggfHwgaW5kZXggPiB0aGlzLm1heEluZGV4IHx8IHRoaXMuc2V0cyAmJiAhaW5jbHVkZXModGhpcy5zZXRzLCBpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucmVvcmRlcigpO1xuICAgICAgICAgIGlmICghdGhpcy5wYXJhbGxheCkge1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNsYXRlKDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZUNsYXNzZXMoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXZlbnRzOiBbXCJyZXNpemVcIl1cbiAgICAgIH0sXG4gICAgICBldmVudHM6IHtcbiAgICAgICAgYmVmb3JlaXRlbXNob3coZSkge1xuICAgICAgICAgIGlmICghdGhpcy5kcmFnZ2luZyAmJiB0aGlzLnNldHMgJiYgdGhpcy5zdGFjay5sZW5ndGggPCAyICYmICFpbmNsdWRlcyh0aGlzLnNldHMsIHRoaXMuaW5kZXgpKSB7XG4gICAgICAgICAgICB0aGlzLmluZGV4ID0gdGhpcy5nZXRWYWxpZEluZGV4KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGRpZmYgPSBNYXRoLmFicyhcbiAgICAgICAgICAgIHRoaXMuaW5kZXggLSB0aGlzLnByZXZJbmRleCArICh0aGlzLmRpciA+IDAgJiYgdGhpcy5pbmRleCA8IHRoaXMucHJldkluZGV4IHx8IHRoaXMuZGlyIDwgMCAmJiB0aGlzLmluZGV4ID4gdGhpcy5wcmV2SW5kZXggPyAodGhpcy5tYXhJbmRleCArIDEpICogdGhpcy5kaXIgOiAwKVxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKCF0aGlzLmRyYWdnaW5nICYmIGRpZmYgPiAxKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpZmY7IGkrKykge1xuICAgICAgICAgICAgICB0aGlzLnN0YWNrLnNwbGljZSgxLCAwLCB0aGlzLmRpciA+IDAgPyBcIm5leHRcIiA6IFwicHJldmlvdXNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kaXIgPCAwIHx8ICF0aGlzLnNsaWRlc1t0aGlzLnByZXZJbmRleF0gPyB0aGlzLmluZGV4IDogdGhpcy5wcmV2SW5kZXg7XG4gICAgICAgICAgY29uc3QgYXZnV2lkdGggPSBnZXRXaWR0aCh0aGlzLmxpc3QpIC8gdGhpcy5sZW5ndGg7XG4gICAgICAgICAgdGhpcy5kdXJhdGlvbiA9IHNwZWVkVXAoYXZnV2lkdGggLyB0aGlzLnZlbG9jaXR5KSAqIChkaW1lbnNpb25zJDEodGhpcy5zbGlkZXNbaW5kZXhdKS53aWR0aCAvIGF2Z1dpZHRoKTtcbiAgICAgICAgICB0aGlzLnJlb3JkZXIoKTtcbiAgICAgICAgfSxcbiAgICAgICAgaXRlbXNob3coKSB7XG4gICAgICAgICAgaWYgKH50aGlzLnByZXZJbmRleCkge1xuICAgICAgICAgICAgYWRkQ2xhc3ModGhpcy5fZ2V0VHJhbnNpdGlvbmVyKCkuZ2V0SXRlbUluKCksIHRoaXMuY2xzQWN0aXZlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy51cGRhdGVBY3RpdmVDbGFzc2VzKHRoaXMucHJldkluZGV4KTtcbiAgICAgICAgfSxcbiAgICAgICAgaXRlbXNob3duKCkge1xuICAgICAgICAgIHRoaXMudXBkYXRlQWN0aXZlQ2xhc3NlcygpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbWV0aG9kczoge1xuICAgICAgICByZW9yZGVyKCkge1xuICAgICAgICAgIGlmICh0aGlzLmZpbml0ZSkge1xuICAgICAgICAgICAgY3NzKHRoaXMuc2xpZGVzLCBcIm9yZGVyXCIsIFwiXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZGlyID4gMCAmJiB0aGlzLnNsaWRlc1t0aGlzLnByZXZJbmRleF0gPyB0aGlzLnByZXZJbmRleCA6IHRoaXMuaW5kZXg7XG4gICAgICAgICAgdGhpcy5zbGlkZXMuZm9yRWFjaChcbiAgICAgICAgICAgIChzbGlkZSwgaSkgPT4gY3NzKFxuICAgICAgICAgICAgICBzbGlkZSxcbiAgICAgICAgICAgICAgXCJvcmRlclwiLFxuICAgICAgICAgICAgICB0aGlzLmRpciA+IDAgJiYgaSA8IGluZGV4ID8gMSA6IHRoaXMuZGlyIDwgMCAmJiBpID49IHRoaXMuaW5kZXggPyAtMSA6IFwiXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmICghdGhpcy5jZW50ZXIgfHwgIXRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG5leHQgPSB0aGlzLnNsaWRlc1tpbmRleF07XG4gICAgICAgICAgbGV0IHdpZHRoID0gZGltZW5zaW9ucyQxKHRoaXMubGlzdCkud2lkdGggLyAyIC0gZGltZW5zaW9ucyQxKG5leHQpLndpZHRoIC8gMjtcbiAgICAgICAgICBsZXQgaiA9IDA7XG4gICAgICAgICAgd2hpbGUgKHdpZHRoID4gMCkge1xuICAgICAgICAgICAgY29uc3Qgc2xpZGVJbmRleCA9IHRoaXMuZ2V0SW5kZXgoLS1qICsgaW5kZXgsIGluZGV4KTtcbiAgICAgICAgICAgIGNvbnN0IHNsaWRlID0gdGhpcy5zbGlkZXNbc2xpZGVJbmRleF07XG4gICAgICAgICAgICBjc3Moc2xpZGUsIFwib3JkZXJcIiwgc2xpZGVJbmRleCA+IGluZGV4ID8gLTIgOiAtMSk7XG4gICAgICAgICAgICB3aWR0aCAtPSBkaW1lbnNpb25zJDEoc2xpZGUpLndpZHRoO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlQWN0aXZlQ2xhc3NlcyhjdXJyZW50SW5kZXggPSB0aGlzLmluZGV4KSB7XG4gICAgICAgICAgbGV0IGFjdGl2ZXMgPSB0aGlzLl9nZXRUcmFuc2l0aW9uZXIoY3VycmVudEluZGV4KS5nZXRBY3RpdmVzKCk7XG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZlICE9PSBcImFsbFwiKSB7XG4gICAgICAgICAgICBhY3RpdmVzID0gW3RoaXMuc2xpZGVzW3RoaXMuZ2V0VmFsaWRJbmRleChjdXJyZW50SW5kZXgpXV07XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGFjdGl2ZUNsYXNzZXMgPSBbXG4gICAgICAgICAgICB0aGlzLmNsc0FjdGl2ZSxcbiAgICAgICAgICAgICF0aGlzLnNldHMgfHwgaW5jbHVkZXModGhpcy5zZXRzLCB0b0Zsb2F0KHRoaXMuaW5kZXgpKSA/IHRoaXMuY2xzQWN0aXZhdGVkIDogXCJcIlxuICAgICAgICAgIF07XG4gICAgICAgICAgZm9yIChjb25zdCBzbGlkZSBvZiB0aGlzLnNsaWRlcykge1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlID0gaW5jbHVkZXMoYWN0aXZlcywgc2xpZGUpO1xuICAgICAgICAgICAgdG9nZ2xlQ2xhc3Moc2xpZGUsIGFjdGl2ZUNsYXNzZXMsIGFjdGl2ZSk7XG4gICAgICAgICAgICBhdHRyKHNsaWRlLCBcImFyaWEtaGlkZGVuXCIsICFhY3RpdmUpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBmb2N1c2FibGUgb2YgJCQoc2VsRm9jdXNhYmxlLCBzbGlkZSkpIHtcbiAgICAgICAgICAgICAgaWYgKCFoYXNPd24oZm9jdXNhYmxlLCBcIl90YWJpbmRleFwiKSkge1xuICAgICAgICAgICAgICAgIGZvY3VzYWJsZS5fdGFiaW5kZXggPSBhdHRyKGZvY3VzYWJsZSwgXCJ0YWJpbmRleFwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBhdHRyKGZvY3VzYWJsZSwgXCJ0YWJpbmRleFwiLCBhY3RpdmUgPyBmb2N1c2FibGUuX3RhYmluZGV4IDogLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0VmFsaWRJbmRleChpbmRleCA9IHRoaXMuaW5kZXgsIHByZXZJbmRleCA9IHRoaXMucHJldkluZGV4KSB7XG4gICAgICAgICAgaW5kZXggPSB0aGlzLmdldEluZGV4KGluZGV4LCBwcmV2SW5kZXgpO1xuICAgICAgICAgIGlmICghdGhpcy5zZXRzKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBwcmV2O1xuICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgIGlmIChpbmNsdWRlcyh0aGlzLnNldHMsIGluZGV4KSkge1xuICAgICAgICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmV2ID0gaW5kZXg7XG4gICAgICAgICAgICBpbmRleCA9IHRoaXMuZ2V0SW5kZXgoaW5kZXggKyB0aGlzLmRpciwgcHJldkluZGV4KTtcbiAgICAgICAgICB9IHdoaWxlIChpbmRleCAhPT0gcHJldik7XG4gICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICB9LFxuICAgICAgICBnZXRBZGphY2VudFNsaWRlcygpIHtcbiAgICAgICAgICBjb25zdCB7IHdpZHRoIH0gPSBkaW1lbnNpb25zJDEodGhpcy5saXN0KTtcbiAgICAgICAgICBjb25zdCBsZWZ0ID0gLXdpZHRoO1xuICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gd2lkdGggKiAyO1xuICAgICAgICAgIGNvbnN0IHNsaWRlV2lkdGggPSBkaW1lbnNpb25zJDEodGhpcy5zbGlkZXNbdGhpcy5pbmRleF0pLndpZHRoO1xuICAgICAgICAgIGNvbnN0IHNsaWRlTGVmdCA9IHRoaXMuY2VudGVyID8gd2lkdGggLyAyIC0gc2xpZGVXaWR0aCAvIDIgOiAwO1xuICAgICAgICAgIGNvbnN0IHNsaWRlcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gICAgICAgICAgZm9yIChjb25zdCBpIG9mIFstMSwgMV0pIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50TGVmdCA9IHNsaWRlTGVmdCArIChpID4gMCA/IHNsaWRlV2lkdGggOiAwKTtcbiAgICAgICAgICAgIGxldCBqID0gMDtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgY29uc3Qgc2xpZGUgPSB0aGlzLnNsaWRlc1t0aGlzLmdldEluZGV4KHRoaXMuaW5kZXggKyBpICsgaisrICogaSldO1xuICAgICAgICAgICAgICBjdXJyZW50TGVmdCArPSBkaW1lbnNpb25zJDEoc2xpZGUpLndpZHRoICogaTtcbiAgICAgICAgICAgICAgc2xpZGVzLmFkZChzbGlkZSk7XG4gICAgICAgICAgICB9IHdoaWxlICh0aGlzLmxlbmd0aCA+IGogJiYgY3VycmVudExlZnQgPiBsZWZ0ICYmIGN1cnJlbnRMZWZ0IDwgcmlnaHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShzbGlkZXMpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRJbmRleEF0KHBlcmNlbnQpIHtcbiAgICAgICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgICAgICBjb25zdCBzY3JvbGxEaXN0ID0gdGhpcy5jZW50ZXIgPyBnZXRXaWR0aCh0aGlzLmxpc3QpIC0gKGRpbWVuc2lvbnMkMSh0aGlzLnNsaWRlc1swXSkud2lkdGggLyAyICsgZGltZW5zaW9ucyQxKGxhc3QodGhpcy5zbGlkZXMpKS53aWR0aCAvIDIpIDogZ2V0V2lkdGgodGhpcy5saXN0LCB0aGlzLm1heEluZGV4KTtcbiAgICAgICAgICBsZXQgZGlzdCA9IHBlcmNlbnQgKiBzY3JvbGxEaXN0O1xuICAgICAgICAgIGxldCBzbGlkZVBlcmNlbnQgPSAwO1xuICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgIGNvbnN0IHNsaWRlV2lkdGggPSBkaW1lbnNpb25zJDEodGhpcy5zbGlkZXNbKytpbmRleF0pLndpZHRoO1xuICAgICAgICAgICAgY29uc3Qgc2xpZGVEaXN0ID0gdGhpcy5jZW50ZXIgPyBzbGlkZVdpZHRoIC8gMiArIGRpbWVuc2lvbnMkMSh0aGlzLnNsaWRlc1tpbmRleCArIDFdKS53aWR0aCAvIDIgOiBzbGlkZVdpZHRoO1xuICAgICAgICAgICAgc2xpZGVQZXJjZW50ID0gZGlzdCAvIHNsaWRlRGlzdCAlIDE7XG4gICAgICAgICAgICBkaXN0IC09IHNsaWRlRGlzdDtcbiAgICAgICAgICB9IHdoaWxlIChkaXN0ID49IDAgJiYgaW5kZXggPCB0aGlzLm1heEluZGV4KTtcbiAgICAgICAgICByZXR1cm4gW2luZGV4LCBzbGlkZVBlcmNlbnRdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBmdW5jdGlvbiBpc0Zpbml0ZShsaXN0LCBjZW50ZXIpIHtcbiAgICAgIGlmICghbGlzdCB8fCBsaXN0Lmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBjb25zdCB7IHdpZHRoOiBsaXN0V2lkdGggfSA9IGRpbWVuc2lvbnMkMShsaXN0KTtcbiAgICAgIGlmICghY2VudGVyKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwoZ2V0V2lkdGgobGlzdCkpIDwgTWF0aC50cnVuYyhsaXN0V2lkdGggKyBnZXRNYXhFbFdpZHRoKGxpc3QpKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNsaWRlcyA9IGNoaWxkcmVuKGxpc3QpO1xuICAgICAgY29uc3QgbGlzdEhhbGYgPSBNYXRoLnRydW5jKGxpc3RXaWR0aCAvIDIpO1xuICAgICAgZm9yIChjb25zdCBpbmRleCBpbiBzbGlkZXMpIHtcbiAgICAgICAgY29uc3Qgc2xpZGUgPSBzbGlkZXNbaW5kZXhdO1xuICAgICAgICBjb25zdCBzbGlkZVdpZHRoID0gZGltZW5zaW9ucyQxKHNsaWRlKS53aWR0aDtcbiAgICAgICAgY29uc3Qgc2xpZGVzSW5WaWV3ID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoW3NsaWRlXSk7XG4gICAgICAgIGxldCBkaWZmID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBpIG9mIFstMSwgMV0pIHtcbiAgICAgICAgICBsZXQgbGVmdCA9IHNsaWRlV2lkdGggLyAyO1xuICAgICAgICAgIGxldCBqID0gMDtcbiAgICAgICAgICB3aGlsZSAobGVmdCA8IGxpc3RIYWxmKSB7XG4gICAgICAgICAgICBjb25zdCBuZXh0U2xpZGUgPSBzbGlkZXNbZ2V0SW5kZXgoK2luZGV4ICsgaSArIGorKyAqIGksIHNsaWRlcyldO1xuICAgICAgICAgICAgaWYgKHNsaWRlc0luVmlldy5oYXMobmV4dFNsaWRlKSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxlZnQgKz0gZGltZW5zaW9ucyQxKG5leHRTbGlkZSkud2lkdGg7XG4gICAgICAgICAgICBzbGlkZXNJblZpZXcuYWRkKG5leHRTbGlkZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpZmYgPSBNYXRoLm1heChcbiAgICAgICAgICAgIGRpZmYsXG4gICAgICAgICAgICBzbGlkZVdpZHRoIC8gMiArIGRpbWVuc2lvbnMkMShzbGlkZXNbZ2V0SW5kZXgoK2luZGV4ICsgaSwgc2xpZGVzKV0pLndpZHRoIC8gMiAtIChsZWZ0IC0gbGlzdEhhbGYpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoTWF0aC50cnVuYyhkaWZmKSA+IHN1bUJ5KFxuICAgICAgICAgIHNsaWRlcy5maWx0ZXIoKHNsaWRlMikgPT4gIXNsaWRlc0luVmlldy5oYXMoc2xpZGUyKSksXG4gICAgICAgICAgKHNsaWRlMikgPT4gZGltZW5zaW9ucyQxKHNsaWRlMikud2lkdGhcbiAgICAgICAgKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldE1heEVsV2lkdGgobGlzdCkge1xuICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIC4uLmNoaWxkcmVuKGxpc3QpLm1hcCgoZWwpID0+IGRpbWVuc2lvbnMkMShlbCkud2lkdGgpKTtcbiAgICB9XG5cbiAgICB2YXIgc2xpZGVyUGFyYWxsYXggPSB7XG4gICAgICBtaXhpbnM6IFtQYXJhbGxheF0sXG4gICAgICBiZWZvcmVDb25uZWN0KCkge1xuICAgICAgICB0aGlzLml0ZW0gPSB0aGlzLiRlbC5jbG9zZXN0KGAuJHt0aGlzLiRvcHRpb25zLmlkLnJlcGxhY2UoXCJwYXJhbGxheFwiLCBcIml0ZW1zXCIpfSA+ICpgKTtcbiAgICAgIH0sXG4gICAgICBkaXNjb25uZWN0ZWQoKSB7XG4gICAgICAgIHRoaXMuaXRlbSA9IG51bGw7XG4gICAgICB9LFxuICAgICAgZXZlbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIml0ZW1pbiBpdGVtb3V0XCIsXG4gICAgICAgICAgc2VsZjogdHJ1ZSxcbiAgICAgICAgICBlbDogKHsgaXRlbSB9KSA9PiBpdGVtLFxuICAgICAgICAgIGhhbmRsZXIoeyB0eXBlLCBkZXRhaWw6IHsgcGVyY2VudCwgZHVyYXRpb24sIHRpbWluZywgZGlyIH0gfSkge1xuICAgICAgICAgICAgZmFzdGRvbS5yZWFkKCgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCF0aGlzLm1hdGNoTWVkaWEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29uc3QgcHJvcHNGcm9tID0gdGhpcy5nZXRDc3MoZ2V0Q3VycmVudFBlcmNlbnQodHlwZSwgZGlyLCBwZXJjZW50KSk7XG4gICAgICAgICAgICAgIGNvbnN0IHByb3BzVG8gPSB0aGlzLmdldENzcyhpc0luKHR5cGUpID8gMC41IDogZGlyID4gMCA/IDEgOiAwKTtcbiAgICAgICAgICAgICAgZmFzdGRvbS53cml0ZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY3NzKHRoaXMuJGVsLCBwcm9wc0Zyb20pO1xuICAgICAgICAgICAgICAgIFRyYW5zaXRpb24uc3RhcnQodGhpcy4kZWwsIHByb3BzVG8sIGR1cmF0aW9uLCB0aW1pbmcpLmNhdGNoKG5vb3ApO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwidHJhbnNpdGlvbmNhbmNlbGVkIHRyYW5zaXRpb25lbmRcIixcbiAgICAgICAgICBzZWxmOiB0cnVlLFxuICAgICAgICAgIGVsOiAoeyBpdGVtIH0pID0+IGl0ZW0sXG4gICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgIFRyYW5zaXRpb24uY2FuY2VsKHRoaXMuJGVsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIml0ZW10cmFuc2xhdGVpbiBpdGVtdHJhbnNsYXRlb3V0XCIsXG4gICAgICAgICAgc2VsZjogdHJ1ZSxcbiAgICAgICAgICBlbDogKHsgaXRlbSB9KSA9PiBpdGVtLFxuICAgICAgICAgIGhhbmRsZXIoeyB0eXBlLCBkZXRhaWw6IHsgcGVyY2VudCwgZGlyIH0gfSkge1xuICAgICAgICAgICAgZmFzdGRvbS5yZWFkKCgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCF0aGlzLm1hdGNoTWVkaWEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5nZXRDc3MoZ2V0Q3VycmVudFBlcmNlbnQodHlwZSwgZGlyLCBwZXJjZW50KSk7XG4gICAgICAgICAgICAgIGZhc3Rkb20ud3JpdGUoKCkgPT4gY3NzKHRoaXMuJGVsLCBwcm9wcykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgICBmdW5jdGlvbiBpc0luKHR5cGUpIHtcbiAgICAgIHJldHVybiBlbmRzV2l0aCh0eXBlLCBcImluXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50UGVyY2VudCh0eXBlLCBkaXIsIHBlcmNlbnQpIHtcbiAgICAgIHBlcmNlbnQgLz0gMjtcbiAgICAgIHJldHVybiBpc0luKHR5cGUpIF4gZGlyIDwgMCA/IHBlcmNlbnQgOiAxIC0gcGVyY2VudDtcbiAgICB9XG5cbiAgICB2YXIgQW5pbWF0aW9ucyA9IHtcbiAgICAgIC4uLkFuaW1hdGlvbnMkMixcbiAgICAgIGZhZGU6IHtcbiAgICAgICAgc2hvdygpIHtcbiAgICAgICAgICByZXR1cm4gW3sgb3BhY2l0eTogMCwgekluZGV4OiAwIH0sIHsgekluZGV4OiAtMSB9XTtcbiAgICAgICAgfSxcbiAgICAgICAgcGVyY2VudChjdXJyZW50KSB7XG4gICAgICAgICAgcmV0dXJuIDEgLSBjc3MoY3VycmVudCwgXCJvcGFjaXR5XCIpO1xuICAgICAgICB9LFxuICAgICAgICB0cmFuc2xhdGUocGVyY2VudCkge1xuICAgICAgICAgIHJldHVybiBbeyBvcGFjaXR5OiAxIC0gcGVyY2VudCwgekluZGV4OiAwIH0sIHsgekluZGV4OiAtMSB9XTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNjYWxlOiB7XG4gICAgICAgIHNob3coKSB7XG4gICAgICAgICAgcmV0dXJuIFt7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogc2NhbGUzZCgxICsgMC41KSwgekluZGV4OiAwIH0sIHsgekluZGV4OiAtMSB9XTtcbiAgICAgICAgfSxcbiAgICAgICAgcGVyY2VudChjdXJyZW50KSB7XG4gICAgICAgICAgcmV0dXJuIDEgLSBjc3MoY3VycmVudCwgXCJvcGFjaXR5XCIpO1xuICAgICAgICB9LFxuICAgICAgICB0cmFuc2xhdGUocGVyY2VudCkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB7IG9wYWNpdHk6IDEgLSBwZXJjZW50LCB0cmFuc2Zvcm06IHNjYWxlM2QoMSArIDAuNSAqIHBlcmNlbnQpLCB6SW5kZXg6IDAgfSxcbiAgICAgICAgICAgIHsgekluZGV4OiAtMSB9XG4gICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHB1bGw6IHtcbiAgICAgICAgc2hvdyhkaXIpIHtcbiAgICAgICAgICByZXR1cm4gZGlyIDwgMCA/IFtcbiAgICAgICAgICAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzApLCB6SW5kZXg6IC0xIH0sXG4gICAgICAgICAgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKCksIHpJbmRleDogMCB9XG4gICAgICAgICAgXSA6IFtcbiAgICAgICAgICAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCksIHpJbmRleDogMCB9LFxuICAgICAgICAgICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgpLCB6SW5kZXg6IC0xIH1cbiAgICAgICAgICBdO1xuICAgICAgICB9LFxuICAgICAgICBwZXJjZW50KGN1cnJlbnQsIG5leHQsIGRpcikge1xuICAgICAgICAgIHJldHVybiBkaXIgPCAwID8gMSAtIHRyYW5zbGF0ZWQobmV4dCkgOiB0cmFuc2xhdGVkKGN1cnJlbnQpO1xuICAgICAgICB9LFxuICAgICAgICB0cmFuc2xhdGUocGVyY2VudCwgZGlyKSB7XG4gICAgICAgICAgcmV0dXJuIGRpciA8IDAgPyBbXG4gICAgICAgICAgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwICogcGVyY2VudCksIHpJbmRleDogLTEgfSxcbiAgICAgICAgICAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCAqICgxIC0gcGVyY2VudCkpLCB6SW5kZXg6IDAgfVxuICAgICAgICAgIF0gOiBbXG4gICAgICAgICAgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC1wZXJjZW50ICogMTAwKSwgekluZGV4OiAwIH0sXG4gICAgICAgICAgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwICogKDEgLSBwZXJjZW50KSksIHpJbmRleDogLTEgfVxuICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwdXNoOiB7XG4gICAgICAgIHNob3coZGlyKSB7XG4gICAgICAgICAgcmV0dXJuIGRpciA8IDAgPyBbXG4gICAgICAgICAgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCksIHpJbmRleDogMCB9LFxuICAgICAgICAgICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgpLCB6SW5kZXg6IC0xIH1cbiAgICAgICAgICBdIDogW1xuICAgICAgICAgICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzApLCB6SW5kZXg6IC0xIH0sXG4gICAgICAgICAgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKCksIHpJbmRleDogMCB9XG4gICAgICAgICAgXTtcbiAgICAgICAgfSxcbiAgICAgICAgcGVyY2VudChjdXJyZW50LCBuZXh0LCBkaXIpIHtcbiAgICAgICAgICByZXR1cm4gZGlyID4gMCA/IDEgLSB0cmFuc2xhdGVkKG5leHQpIDogdHJhbnNsYXRlZChjdXJyZW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgdHJhbnNsYXRlKHBlcmNlbnQsIGRpcikge1xuICAgICAgICAgIHJldHVybiBkaXIgPCAwID8gW1xuICAgICAgICAgICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZShwZXJjZW50ICogMTAwKSwgekluZGV4OiAwIH0sXG4gICAgICAgICAgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zMCAqICgxIC0gcGVyY2VudCkpLCB6SW5kZXg6IC0xIH1cbiAgICAgICAgICBdIDogW1xuICAgICAgICAgICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzAgKiBwZXJjZW50KSwgekluZGV4OiAtMSB9LFxuICAgICAgICAgICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAgKiAoMSAtIHBlcmNlbnQpKSwgekluZGV4OiAwIH1cbiAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBzbGlkZXNob3cgPSB7XG4gICAgICBtaXhpbnM6IFtDbGFzcywgU2xpZGVzaG93LCBTbGlkZXJSZWFjdGl2ZSwgU2xpZGVyUGFyYWxsYXgsIFNsaWRlclByZWxvYWRdLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgcmF0aW86IFN0cmluZyxcbiAgICAgICAgbWluSGVpZ2h0OiBTdHJpbmcsXG4gICAgICAgIG1heEhlaWdodDogU3RyaW5nXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICByYXRpbzogXCIxNjo5XCIsXG4gICAgICAgIG1pbkhlaWdodDogdm9pZCAwLFxuICAgICAgICBtYXhIZWlnaHQ6IHZvaWQgMCxcbiAgICAgICAgc2VsTGlzdDogXCIudWstc2xpZGVzaG93LWl0ZW1zXCIsXG4gICAgICAgIGF0dHJJdGVtOiBcInVrLXNsaWRlc2hvdy1pdGVtXCIsXG4gICAgICAgIHNlbE5hdjogXCIudWstc2xpZGVzaG93LW5hdlwiLFxuICAgICAgICBBbmltYXRpb25zXG4gICAgICB9LFxuICAgICAgd2F0Y2g6IHtcbiAgICAgICAgbGlzdChsaXN0KSB7XG4gICAgICAgICAgY3NzKGxpc3QsIHtcbiAgICAgICAgICAgIGFzcGVjdFJhdGlvOiB0aGlzLnJhdGlvID8gdGhpcy5yYXRpby5yZXBsYWNlKFwiOlwiLCBcIi9cIikgOiB2b2lkIDAsXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IHRoaXMubWluSGVpZ2h0LFxuICAgICAgICAgICAgbWF4SGVpZ2h0OiB0aGlzLm1heEhlaWdodCxcbiAgICAgICAgICAgIG1pbldpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIG1heFdpZHRoOiBcIjEwMCVcIlxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbWV0aG9kczoge1xuICAgICAgICBnZXRBZGphY2VudFNsaWRlcygpIHtcbiAgICAgICAgICByZXR1cm4gWzEsIC0xXS5tYXAoKGkpID0+IHRoaXMuc2xpZGVzW3RoaXMuZ2V0SW5kZXgodGhpcy5pbmRleCArIGkpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHNvcnRhYmxlID0ge1xuICAgICAgbWl4aW5zOiBbQ2xhc3MsIEFuaW1hdGVdLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgZ3JvdXA6IFN0cmluZyxcbiAgICAgICAgdGhyZXNob2xkOiBOdW1iZXIsXG4gICAgICAgIGNsc0l0ZW06IFN0cmluZyxcbiAgICAgICAgY2xzUGxhY2Vob2xkZXI6IFN0cmluZyxcbiAgICAgICAgY2xzRHJhZzogU3RyaW5nLFxuICAgICAgICBjbHNEcmFnU3RhdGU6IFN0cmluZyxcbiAgICAgICAgY2xzQmFzZTogU3RyaW5nLFxuICAgICAgICBjbHNOb0RyYWc6IFN0cmluZyxcbiAgICAgICAgY2xzRW1wdHk6IFN0cmluZyxcbiAgICAgICAgY2xzQ3VzdG9tOiBTdHJpbmcsXG4gICAgICAgIGhhbmRsZTogU3RyaW5nXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBncm91cDogZmFsc2UsXG4gICAgICAgIHRocmVzaG9sZDogNSxcbiAgICAgICAgY2xzSXRlbTogXCJ1ay1zb3J0YWJsZS1pdGVtXCIsXG4gICAgICAgIGNsc1BsYWNlaG9sZGVyOiBcInVrLXNvcnRhYmxlLXBsYWNlaG9sZGVyXCIsXG4gICAgICAgIGNsc0RyYWc6IFwidWstc29ydGFibGUtZHJhZ1wiLFxuICAgICAgICBjbHNEcmFnU3RhdGU6IFwidWstZHJhZ1wiLFxuICAgICAgICBjbHNCYXNlOiBcInVrLXNvcnRhYmxlXCIsXG4gICAgICAgIGNsc05vRHJhZzogXCJ1ay1zb3J0YWJsZS1ub2RyYWdcIixcbiAgICAgICAgY2xzRW1wdHk6IFwidWstc29ydGFibGUtZW1wdHlcIixcbiAgICAgICAgY2xzQ3VzdG9tOiBcIlwiLFxuICAgICAgICBoYW5kbGU6IGZhbHNlLFxuICAgICAgICBwb3M6IHt9XG4gICAgICB9LFxuICAgICAgZXZlbnRzOiB7XG4gICAgICAgIG5hbWU6IHBvaW50ZXJEb3duJDEsXG4gICAgICAgIHBhc3NpdmU6IGZhbHNlLFxuICAgICAgICBoYW5kbGVyOiBcImluaXRcIlxuICAgICAgfSxcbiAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHRhcmdldDogKF8sICRlbCkgPT4gKCRlbC50Qm9kaWVzIHx8IFskZWxdKVswXSxcbiAgICAgICAgaXRlbXMoKSB7XG4gICAgICAgICAgcmV0dXJuIGNoaWxkcmVuKHRoaXMudGFyZ2V0KTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNFbXB0eSgpIHtcbiAgICAgICAgICByZXR1cm4gIXRoaXMuaXRlbXMubGVuZ3RoO1xuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVzKHsgaGFuZGxlIH0sICRlbCkge1xuICAgICAgICAgIHJldHVybiBoYW5kbGUgPyAkJChoYW5kbGUsICRlbCkgOiB0aGlzLml0ZW1zO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgd2F0Y2g6IHtcbiAgICAgICAgaXNFbXB0eShlbXB0eSkge1xuICAgICAgICAgIHRvZ2dsZUNsYXNzKHRoaXMudGFyZ2V0LCB0aGlzLmNsc0VtcHR5LCBlbXB0eSk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZXMoaGFuZGxlcywgcHJldikge1xuICAgICAgICAgIGNzcyhwcmV2LCB7IHRvdWNoQWN0aW9uOiBcIlwiLCB1c2VyU2VsZWN0OiBcIlwiIH0pO1xuICAgICAgICAgIGNzcyhoYW5kbGVzLCB7IHRvdWNoQWN0aW9uOiBcIm5vbmVcIiwgdXNlclNlbGVjdDogXCJub25lXCIgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB1cGRhdGU6IHtcbiAgICAgICAgd3JpdGUoZGF0YSkge1xuICAgICAgICAgIGlmICghdGhpcy5kcmFnIHx8ICFwYXJlbnQodGhpcy5wbGFjZWhvbGRlcikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgcG9zOiB7IHgsIHkgfSxcbiAgICAgICAgICAgIG9yaWdpbjogeyBvZmZzZXRUb3AsIG9mZnNldExlZnQgfSxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyXG4gICAgICAgICAgfSA9IHRoaXM7XG4gICAgICAgICAgY3NzKHRoaXMuZHJhZywge1xuICAgICAgICAgICAgdG9wOiB5IC0gb2Zmc2V0VG9wLFxuICAgICAgICAgICAgbGVmdDogeCAtIG9mZnNldExlZnRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCBzb3J0YWJsZSA9IHRoaXMuZ2V0U29ydGFibGUoZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh4LCB5KSk7XG4gICAgICAgICAgaWYgKCFzb3J0YWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCB7IGl0ZW1zIH0gPSBzb3J0YWJsZTtcbiAgICAgICAgICBpZiAoaXRlbXMuc29tZShUcmFuc2l0aW9uLmluUHJvZ3Jlc3MpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGZpbmRUYXJnZXQoaXRlbXMsIHsgeCwgeSB9KTtcbiAgICAgICAgICBpZiAoaXRlbXMubGVuZ3RoICYmICghdGFyZ2V0IHx8IHRhcmdldCA9PT0gcGxhY2Vob2xkZXIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHByZXZpb3VzID0gdGhpcy5nZXRTb3J0YWJsZShwbGFjZWhvbGRlcik7XG4gICAgICAgICAgY29uc3QgaW5zZXJ0VGFyZ2V0ID0gZmluZEluc2VydFRhcmdldChcbiAgICAgICAgICAgIHNvcnRhYmxlLnRhcmdldCxcbiAgICAgICAgICAgIHRhcmdldCxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHksXG4gICAgICAgICAgICBzb3J0YWJsZSA9PT0gcHJldmlvdXMgJiYgZGF0YS5tb3ZlZCAhPT0gdGFyZ2V0XG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoaW5zZXJ0VGFyZ2V0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaW5zZXJ0VGFyZ2V0ICYmIHBsYWNlaG9sZGVyID09PSBpbnNlcnRUYXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNvcnRhYmxlICE9PSBwcmV2aW91cykge1xuICAgICAgICAgICAgcHJldmlvdXMucmVtb3ZlKHBsYWNlaG9sZGVyKTtcbiAgICAgICAgICAgIGRhdGEubW92ZWQgPSB0YXJnZXQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBkYXRhLm1vdmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzb3J0YWJsZS5pbnNlcnQocGxhY2Vob2xkZXIsIGluc2VydFRhcmdldCk7XG4gICAgICAgICAgdGhpcy50b3VjaGVkLmFkZChzb3J0YWJsZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGV2ZW50czogW1wibW92ZVwiXVxuICAgICAgfSxcbiAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgaW5pdChlKSB7XG4gICAgICAgICAgY29uc3QgeyB0YXJnZXQsIGJ1dHRvbiwgZGVmYXVsdFByZXZlbnRlZCB9ID0gZTtcbiAgICAgICAgICBjb25zdCBbcGxhY2Vob2xkZXJdID0gdGhpcy5pdGVtcy5maWx0ZXIoKGVsKSA9PiBlbC5jb250YWlucyh0YXJnZXQpKTtcbiAgICAgICAgICBpZiAoIXBsYWNlaG9sZGVyIHx8IGRlZmF1bHRQcmV2ZW50ZWQgfHwgYnV0dG9uID4gMCB8fCBpc0lucHV0KHRhcmdldCkgfHwgdGFyZ2V0LmNsb3Nlc3QoYC4ke3RoaXMuY2xzTm9EcmFnfWApIHx8IHRoaXMuaGFuZGxlICYmICF0YXJnZXQuY2xvc2VzdCh0aGlzLmhhbmRsZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMucG9zID0gZ2V0RXZlbnRQb3MoZSk7XG4gICAgICAgICAgdGhpcy50b3VjaGVkID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoW3RoaXNdKTtcbiAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgICAgICAgdGhpcy5vcmlnaW4gPSB7IHRhcmdldCwgaW5kZXg6IGluZGV4KHBsYWNlaG9sZGVyKSwgLi4udGhpcy5wb3MgfTtcbiAgICAgICAgICBvbihkb2N1bWVudCwgcG9pbnRlck1vdmUkMSwgdGhpcy5tb3ZlKTtcbiAgICAgICAgICBvbihkb2N1bWVudCwgcG9pbnRlclVwJDEsIHRoaXMuZW5kKTtcbiAgICAgICAgICBpZiAoIXRoaXMudGhyZXNob2xkKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0KGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc3RhcnQoZSkge1xuICAgICAgICAgIHRoaXMuZHJhZyA9IGFwcGVuZERyYWcodGhpcy4kY29udGFpbmVyLCB0aGlzLnBsYWNlaG9sZGVyKTtcbiAgICAgICAgICBjb25zdCB7IGxlZnQsIHRvcCB9ID0gZGltZW5zaW9ucyQxKHRoaXMucGxhY2Vob2xkZXIpO1xuICAgICAgICAgIGFzc2lnbih0aGlzLm9yaWdpbiwgeyBvZmZzZXRMZWZ0OiB0aGlzLnBvcy54IC0gbGVmdCwgb2Zmc2V0VG9wOiB0aGlzLnBvcy55IC0gdG9wIH0pO1xuICAgICAgICAgIGFkZENsYXNzKHRoaXMuZHJhZywgdGhpcy5jbHNEcmFnLCB0aGlzLmNsc0N1c3RvbSk7XG4gICAgICAgICAgYWRkQ2xhc3ModGhpcy5wbGFjZWhvbGRlciwgdGhpcy5jbHNQbGFjZWhvbGRlcik7XG4gICAgICAgICAgYWRkQ2xhc3ModGhpcy5pdGVtcywgdGhpcy5jbHNJdGVtKTtcbiAgICAgICAgICBhZGRDbGFzcyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHRoaXMuY2xzRHJhZ1N0YXRlKTtcbiAgICAgICAgICB0cmlnZ2VyKHRoaXMuJGVsLCBcInN0YXJ0XCIsIFt0aGlzLCB0aGlzLnBsYWNlaG9sZGVyXSk7XG4gICAgICAgICAgdHJhY2tTY3JvbGwodGhpcy5wb3MpO1xuICAgICAgICAgIHRoaXMubW92ZShlKTtcbiAgICAgICAgfSxcbiAgICAgICAgbW92ZTogdGhyb3R0bGUoZnVuY3Rpb24oZSkge1xuICAgICAgICAgIGFzc2lnbih0aGlzLnBvcywgZ2V0RXZlbnRQb3MoZSkpO1xuICAgICAgICAgIGlmICghdGhpcy5kcmFnICYmIChNYXRoLmFicyh0aGlzLnBvcy54IC0gdGhpcy5vcmlnaW4ueCkgPiB0aGlzLnRocmVzaG9sZCB8fCBNYXRoLmFicyh0aGlzLnBvcy55IC0gdGhpcy5vcmlnaW4ueSkgPiB0aGlzLnRocmVzaG9sZCkpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuJGVtaXQoXCJtb3ZlXCIpO1xuICAgICAgICB9KSxcbiAgICAgICAgZW5kKCkge1xuICAgICAgICAgIG9mZihkb2N1bWVudCwgcG9pbnRlck1vdmUkMSwgdGhpcy5tb3ZlKTtcbiAgICAgICAgICBvZmYoZG9jdW1lbnQsIHBvaW50ZXJVcCQxLCB0aGlzLmVuZCk7XG4gICAgICAgICAgaWYgKCF0aGlzLmRyYWcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdW50cmFja1Njcm9sbCgpO1xuICAgICAgICAgIGNvbnN0IHNvcnRhYmxlID0gdGhpcy5nZXRTb3J0YWJsZSh0aGlzLnBsYWNlaG9sZGVyKTtcbiAgICAgICAgICBpZiAodGhpcyA9PT0gc29ydGFibGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9yaWdpbi5pbmRleCAhPT0gaW5kZXgodGhpcy5wbGFjZWhvbGRlcikpIHtcbiAgICAgICAgICAgICAgdHJpZ2dlcih0aGlzLiRlbCwgXCJtb3ZlZFwiLCBbdGhpcywgdGhpcy5wbGFjZWhvbGRlcl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cmlnZ2VyKHNvcnRhYmxlLiRlbCwgXCJhZGRlZFwiLCBbc29ydGFibGUsIHRoaXMucGxhY2Vob2xkZXJdKTtcbiAgICAgICAgICAgIHRyaWdnZXIodGhpcy4kZWwsIFwicmVtb3ZlZFwiLCBbdGhpcywgdGhpcy5wbGFjZWhvbGRlcl0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0cmlnZ2VyKHRoaXMuJGVsLCBcInN0b3BcIiwgW3RoaXMsIHRoaXMucGxhY2Vob2xkZXJdKTtcbiAgICAgICAgICByZW1vdmUkMSh0aGlzLmRyYWcpO1xuICAgICAgICAgIHRoaXMuZHJhZyA9IG51bGw7XG4gICAgICAgICAgZm9yIChjb25zdCB7IGNsc1BsYWNlaG9sZGVyLCBjbHNJdGVtIH0gb2YgdGhpcy50b3VjaGVkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNvcnRhYmxlMiBvZiB0aGlzLnRvdWNoZWQpIHtcbiAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3Moc29ydGFibGUyLml0ZW1zLCBjbHNQbGFjZWhvbGRlciwgY2xzSXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMudG91Y2hlZCA9IG51bGw7XG4gICAgICAgICAgcmVtb3ZlQ2xhc3MoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB0aGlzLmNsc0RyYWdTdGF0ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGluc2VydChlbGVtZW50LCB0YXJnZXQpIHtcbiAgICAgICAgICBhZGRDbGFzcyh0aGlzLml0ZW1zLCB0aGlzLmNsc0l0ZW0pO1xuICAgICAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcgIT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSgoKSA9PiBiZWZvcmUodGFyZ2V0LCBlbGVtZW50KSk7XG4gICAgICAgICAgfSBlbHNlIGlmICghdGFyZ2V0ICYmIHRoaXMudGFyZ2V0Lmxhc3RFbGVtZW50Q2hpbGQgIT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSgoKSA9PiBhcHBlbmQodGhpcy50YXJnZXQsIGVsZW1lbnQpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZShlbGVtZW50KSB7XG4gICAgICAgICAgaWYgKHRoaXMudGFyZ2V0LmNvbnRhaW5zKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUoKCkgPT4gcmVtb3ZlJDEoZWxlbWVudCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0U29ydGFibGUoZWxlbWVudCkge1xuICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgIGNvbnN0IHNvcnRhYmxlID0gdGhpcy4kZ2V0Q29tcG9uZW50KGVsZW1lbnQsIFwic29ydGFibGVcIik7XG4gICAgICAgICAgICBpZiAoc29ydGFibGUgJiYgKHNvcnRhYmxlID09PSB0aGlzIHx8IHRoaXMuZ3JvdXAgIT09IGZhbHNlICYmIHNvcnRhYmxlLmdyb3VwID09PSB0aGlzLmdyb3VwKSkge1xuICAgICAgICAgICAgICByZXR1cm4gc29ydGFibGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSB3aGlsZSAoZWxlbWVudCA9IHBhcmVudChlbGVtZW50KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGxldCB0cmFja1RpbWVyO1xuICAgIGZ1bmN0aW9uIHRyYWNrU2Nyb2xsKHBvcykge1xuICAgICAgbGV0IGxhc3QgPSBEYXRlLm5vdygpO1xuICAgICAgdHJhY2tUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgbGV0IHsgeCwgeSB9ID0gcG9zO1xuICAgICAgICB5ICs9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICBjb25zdCBkaXN0ID0gKERhdGUubm93KCkgLSBsYXN0KSAqIDAuMztcbiAgICAgICAgbGFzdCA9IERhdGUubm93KCk7XG4gICAgICAgIHNjcm9sbFBhcmVudHMoZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh4LCBwb3MueSkpLnJldmVyc2UoKS5zb21lKChzY3JvbGxFbCkgPT4ge1xuICAgICAgICAgIGxldCB7IHNjcm9sbFRvcDogc2Nyb2xsLCBzY3JvbGxIZWlnaHQgfSA9IHNjcm9sbEVsO1xuICAgICAgICAgIGNvbnN0IHsgdG9wLCBib3R0b20sIGhlaWdodDogaGVpZ2h0MiB9ID0gb2Zmc2V0Vmlld3BvcnQoc2Nyb2xsRWwpO1xuICAgICAgICAgIGlmICh0b3AgPCB5ICYmIHRvcCArIDM1ID4geSkge1xuICAgICAgICAgICAgc2Nyb2xsIC09IGRpc3Q7XG4gICAgICAgICAgfSBlbHNlIGlmIChib3R0b20gPiB5ICYmIGJvdHRvbSAtIDM1IDwgeSkge1xuICAgICAgICAgICAgc2Nyb2xsICs9IGRpc3Q7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNjcm9sbCA+IDAgJiYgc2Nyb2xsIDwgc2Nyb2xsSGVpZ2h0IC0gaGVpZ2h0Mikge1xuICAgICAgICAgICAgc2Nyb2xsRWwuc2Nyb2xsVG9wID0gc2Nyb2xsO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sIDE1KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdW50cmFja1Njcm9sbCgpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodHJhY2tUaW1lcik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFwcGVuZERyYWcoY29udGFpbmVyLCBlbGVtZW50KSB7XG4gICAgICBsZXQgY2xvbmU7XG4gICAgICBpZiAoaXNUYWcoZWxlbWVudCwgXCJsaVwiLCBcInRyXCIpKSB7XG4gICAgICAgIGNsb25lID0gJChcIjxkaXY+XCIpO1xuICAgICAgICBhcHBlbmQoY2xvbmUsIGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpLmNoaWxkcmVuKTtcbiAgICAgICAgZm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgZWxlbWVudC5nZXRBdHRyaWJ1dGVOYW1lcygpKSB7XG4gICAgICAgICAgYXR0cihjbG9uZSwgYXR0cmlidXRlLCBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xvbmUgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIH1cbiAgICAgIGFwcGVuZChjb250YWluZXIsIGNsb25lKTtcbiAgICAgIGNzcyhjbG9uZSwgXCJtYXJnaW5cIiwgXCIwXCIsIFwiaW1wb3J0YW50XCIpO1xuICAgICAgY3NzKGNsb25lLCB7XG4gICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXG4gICAgICAgIHdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuICAgICAgICBwYWRkaW5nOiBjc3MoZWxlbWVudCwgXCJwYWRkaW5nXCIpXG4gICAgICB9KTtcbiAgICAgIGhlaWdodChjbG9uZS5maXJzdEVsZW1lbnRDaGlsZCwgaGVpZ2h0KGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpKTtcbiAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmluZFRhcmdldChpdGVtcywgcG9pbnQpIHtcbiAgICAgIHJldHVybiBpdGVtc1tmaW5kSW5kZXgoaXRlbXMsIChpdGVtKSA9PiBwb2ludEluUmVjdChwb2ludCwgZGltZW5zaW9ucyQxKGl0ZW0pKSldO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmaW5kSW5zZXJ0VGFyZ2V0KGxpc3QsIHRhcmdldCwgcGxhY2Vob2xkZXIsIHgsIHksIHNhbWVMaXN0KSB7XG4gICAgICBpZiAoIWNoaWxkcmVuKGxpc3QpLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCByZWN0ID0gZGltZW5zaW9ucyQxKHRhcmdldCk7XG4gICAgICBpZiAoIXNhbWVMaXN0KSB7XG4gICAgICAgIGlmICghaXNIb3Jpem9udGFsKGxpc3QsIHBsYWNlaG9sZGVyKSkge1xuICAgICAgICAgIHJldHVybiB5IDwgcmVjdC50b3AgKyByZWN0LmhlaWdodCAvIDIgPyB0YXJnZXQgOiB0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICB9XG4gICAgICBjb25zdCBwbGFjZWhvbGRlclJlY3QgPSBkaW1lbnNpb25zJDEocGxhY2Vob2xkZXIpO1xuICAgICAgY29uc3Qgc2FtZVJvdyA9IGxpbmVzSW50ZXJzZWN0KFxuICAgICAgICBbcmVjdC50b3AsIHJlY3QuYm90dG9tXSxcbiAgICAgICAgW3BsYWNlaG9sZGVyUmVjdC50b3AsIHBsYWNlaG9sZGVyUmVjdC5ib3R0b21dXG4gICAgICApO1xuICAgICAgY29uc3QgW3BvaW50ZXJQb3MsIGxlbmd0aFByb3AsIHN0YXJ0UHJvcCwgZW5kUHJvcF0gPSBzYW1lUm93ID8gW3gsIFwid2lkdGhcIiwgXCJsZWZ0XCIsIFwicmlnaHRcIl0gOiBbeSwgXCJoZWlnaHRcIiwgXCJ0b3BcIiwgXCJib3R0b21cIl07XG4gICAgICBjb25zdCBkaWZmID0gcGxhY2Vob2xkZXJSZWN0W2xlbmd0aFByb3BdIDwgcmVjdFtsZW5ndGhQcm9wXSA/IHJlY3RbbGVuZ3RoUHJvcF0gLSBwbGFjZWhvbGRlclJlY3RbbGVuZ3RoUHJvcF0gOiAwO1xuICAgICAgaWYgKHBsYWNlaG9sZGVyUmVjdFtzdGFydFByb3BdIDwgcmVjdFtzdGFydFByb3BdKSB7XG4gICAgICAgIGlmIChkaWZmICYmIHBvaW50ZXJQb3MgPCByZWN0W3N0YXJ0UHJvcF0gKyBkaWZmKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgfVxuICAgICAgaWYgKGRpZmYgJiYgcG9pbnRlclBvcyA+IHJlY3RbZW5kUHJvcF0gLSBkaWZmKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzSG9yaXpvbnRhbChsaXN0LCBwbGFjZWhvbGRlcikge1xuICAgICAgY29uc3Qgc2luZ2xlID0gY2hpbGRyZW4obGlzdCkubGVuZ3RoID09PSAxO1xuICAgICAgaWYgKHNpbmdsZSkge1xuICAgICAgICBhcHBlbmQobGlzdCwgcGxhY2Vob2xkZXIpO1xuICAgICAgfVxuICAgICAgY29uc3QgaXRlbXMgPSBjaGlsZHJlbihsaXN0KTtcbiAgICAgIGNvbnN0IGlzSG9yaXpvbnRhbDIgPSBpdGVtcy5zb21lKChlbCwgaSkgPT4ge1xuICAgICAgICBjb25zdCByZWN0QSA9IGRpbWVuc2lvbnMkMShlbCk7XG4gICAgICAgIHJldHVybiBpdGVtcy5zbGljZShpICsgMSkuc29tZSgoZWwyKSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVjdEIgPSBkaW1lbnNpb25zJDEoZWwyKTtcbiAgICAgICAgICByZXR1cm4gIWxpbmVzSW50ZXJzZWN0KFtyZWN0QS5sZWZ0LCByZWN0QS5yaWdodF0sIFtyZWN0Qi5sZWZ0LCByZWN0Qi5yaWdodF0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHNpbmdsZSkge1xuICAgICAgICByZW1vdmUkMShwbGFjZWhvbGRlcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gaXNIb3Jpem9udGFsMjtcbiAgICB9XG4gICAgZnVuY3Rpb24gbGluZXNJbnRlcnNlY3QobGluZUEsIGxpbmVCKSB7XG4gICAgICByZXR1cm4gbGluZUFbMV0gPiBsaW5lQlswXSAmJiBsaW5lQlsxXSA+IGxpbmVBWzBdO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0aHJvdHRsZShmbikge1xuICAgICAgbGV0IHRocm90dGxlZDtcbiAgICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgICAgIGlmICghdGhyb3R0bGVkKSB7XG4gICAgICAgICAgdGhyb3R0bGVkID0gdHJ1ZTtcbiAgICAgICAgICBmbi5jYWxsKHRoaXMsIC4uLmFyZ3MpO1xuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aHJvdHRsZWQgPSBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIFBvc2l0aW9uID0ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgcG9zOiBTdHJpbmcsXG4gICAgICAgIG9mZnNldDogQm9vbGVhbixcbiAgICAgICAgZmxpcDogQm9vbGVhbixcbiAgICAgICAgc2hpZnQ6IEJvb2xlYW4sXG4gICAgICAgIGluc2V0OiBCb29sZWFuXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBwb3M6IGBib3R0b20tJHtpc1J0bCA/IFwicmlnaHRcIiA6IFwibGVmdFwifWAsXG4gICAgICAgIG9mZnNldDogZmFsc2UsXG4gICAgICAgIGZsaXA6IHRydWUsXG4gICAgICAgIHNoaWZ0OiB0cnVlLFxuICAgICAgICBpbnNldDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBjb25uZWN0ZWQoKSB7XG4gICAgICAgIHRoaXMucG9zID0gdGhpcy4kcHJvcHMucG9zLnNwbGl0KFwiLVwiKS5jb25jYXQoXCJjZW50ZXJcIikuc2xpY2UoMCwgMik7XG4gICAgICAgIFt0aGlzLmRpciwgdGhpcy5hbGlnbl0gPSB0aGlzLnBvcztcbiAgICAgICAgdGhpcy5heGlzID0gaW5jbHVkZXMoW1widG9wXCIsIFwiYm90dG9tXCJdLCB0aGlzLmRpcikgPyBcInlcIiA6IFwieFwiO1xuICAgICAgfSxcbiAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgcG9zaXRpb25BdChlbGVtZW50LCB0YXJnZXQsIGJvdW5kYXJ5KSB7XG4gICAgICAgICAgbGV0IG9mZnNldCA9IFt0aGlzLmdldFBvc2l0aW9uT2Zmc2V0KGVsZW1lbnQpLCB0aGlzLmdldFNoaWZ0T2Zmc2V0KGVsZW1lbnQpXTtcbiAgICAgICAgICBjb25zdCBwbGFjZW1lbnQgPSBbdGhpcy5mbGlwICYmIFwiZmxpcFwiLCB0aGlzLnNoaWZ0ICYmIFwic2hpZnRcIl07XG4gICAgICAgICAgY29uc3QgYXR0YWNoID0ge1xuICAgICAgICAgICAgZWxlbWVudDogW3RoaXMuaW5zZXQgPyB0aGlzLmRpciA6IGZsaXBQb3NpdGlvbih0aGlzLmRpciksIHRoaXMuYWxpZ25dLFxuICAgICAgICAgICAgdGFyZ2V0OiBbdGhpcy5kaXIsIHRoaXMuYWxpZ25dXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAodGhpcy5heGlzID09PSBcInlcIikge1xuICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIGF0dGFjaCkge1xuICAgICAgICAgICAgICBhdHRhY2hbcHJvcF0ucmV2ZXJzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2Zmc2V0LnJldmVyc2UoKTtcbiAgICAgICAgICAgIHBsYWNlbWVudC5yZXZlcnNlKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHJlc3RvcmVTY3JvbGxQb3NpdGlvbiA9IHN0b3JlU2Nyb2xsUG9zaXRpb24oZWxlbWVudCk7XG4gICAgICAgICAgY29uc3QgZWxEaW0gPSBkaW1lbnNpb25zJDEoZWxlbWVudCk7XG4gICAgICAgICAgY3NzKGVsZW1lbnQsIHsgdG9wOiAtZWxEaW0uaGVpZ2h0LCBsZWZ0OiAtZWxEaW0ud2lkdGggfSk7XG4gICAgICAgICAgcG9zaXRpb25BdChlbGVtZW50LCB0YXJnZXQsIHtcbiAgICAgICAgICAgIGF0dGFjaCxcbiAgICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgICAgIGJvdW5kYXJ5LFxuICAgICAgICAgICAgcGxhY2VtZW50LFxuICAgICAgICAgICAgdmlld3BvcnRPZmZzZXQ6IHRoaXMuZ2V0Vmlld3BvcnRPZmZzZXQoZWxlbWVudClcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXN0b3JlU2Nyb2xsUG9zaXRpb24oKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UG9zaXRpb25PZmZzZXQoZWxlbWVudCA9IHRoaXMuJGVsKSB7XG4gICAgICAgICAgcmV0dXJuIHRvUHgoXG4gICAgICAgICAgICB0aGlzLm9mZnNldCA9PT0gZmFsc2UgPyBjc3MoZWxlbWVudCwgXCItLXVrLXBvc2l0aW9uLW9mZnNldFwiKSA6IHRoaXMub2Zmc2V0LFxuICAgICAgICAgICAgdGhpcy5heGlzID09PSBcInhcIiA/IFwid2lkdGhcIiA6IFwiaGVpZ2h0XCIsXG4gICAgICAgICAgICBlbGVtZW50XG4gICAgICAgICAgKSAqIChpbmNsdWRlcyhbXCJsZWZ0XCIsIFwidG9wXCJdLCB0aGlzLmRpcikgPyAtMSA6IDEpICogKHRoaXMuaW5zZXQgPyAtMSA6IDEpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRTaGlmdE9mZnNldChlbGVtZW50ID0gdGhpcy4kZWwpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5hbGlnbiA9PT0gXCJjZW50ZXJcIiA/IDAgOiB0b1B4KFxuICAgICAgICAgICAgY3NzKGVsZW1lbnQsIFwiLS11ay1wb3NpdGlvbi1zaGlmdC1vZmZzZXRcIiksXG4gICAgICAgICAgICB0aGlzLmF4aXMgPT09IFwieVwiID8gXCJ3aWR0aFwiIDogXCJoZWlnaHRcIixcbiAgICAgICAgICAgIGVsZW1lbnRcbiAgICAgICAgICApICogKGluY2x1ZGVzKFtcImxlZnRcIiwgXCJ0b3BcIl0sIHRoaXMuYWxpZ24pID8gMSA6IC0xKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Vmlld3BvcnRPZmZzZXQoZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0b1B4KGNzcyhlbGVtZW50LCBcIi0tdWstcG9zaXRpb24tdmlld3BvcnQtb2Zmc2V0XCIpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgZnVuY3Rpb24gc3RvcmVTY3JvbGxQb3NpdGlvbihlbGVtZW50KSB7XG4gICAgICBjb25zdCBzY3JvbGxFbGVtZW50ID0gc2Nyb2xsUGFyZW50KGVsZW1lbnQpO1xuICAgICAgY29uc3QgeyBzY3JvbGxUb3AgfSA9IHNjcm9sbEVsZW1lbnQ7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoc2Nyb2xsVG9wICE9PSBzY3JvbGxFbGVtZW50LnNjcm9sbFRvcCkge1xuICAgICAgICAgIHNjcm9sbEVsZW1lbnQuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIHZhciB0b29sdGlwID0ge1xuICAgICAgbWl4aW5zOiBbQ29udGFpbmVyLCBUb2dnbGFibGUsIFBvc2l0aW9uXSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgcG9zOiBcInRvcFwiLFxuICAgICAgICBhbmltYXRpb246IFtcInVrLWFuaW1hdGlvbi1zY2FsZS11cFwiXSxcbiAgICAgICAgZHVyYXRpb246IDEwMCxcbiAgICAgICAgY2xzOiBcInVrLWFjdGl2ZVwiXG4gICAgICB9LFxuICAgICAgY29ubmVjdGVkKCkge1xuICAgICAgICBtYWtlRm9jdXNhYmxlKHRoaXMuJGVsKTtcbiAgICAgIH0sXG4gICAgICBkaXNjb25uZWN0ZWQoKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgfSxcbiAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgc2hvdygpIHtcbiAgICAgICAgICBpZiAodGhpcy5pc1RvZ2dsZWQodGhpcy50b29sdGlwIHx8IG51bGwpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHsgZGVsYXkgPSAwLCB0aXRsZSB9ID0gcGFyc2VQcm9wcyh0aGlzLiRvcHRpb25zKTtcbiAgICAgICAgICBpZiAoIXRpdGxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHRpdGxlQXR0ciA9IGF0dHIodGhpcy4kZWwsIFwidGl0bGVcIik7XG4gICAgICAgICAgY29uc3Qgb2ZmID0gb24odGhpcy4kZWwsIFtcImJsdXJcIiwgcG9pbnRlckxlYXZlXSwgKGUpID0+ICFpc1RvdWNoKGUpICYmIHRoaXMuaGlkZSgpKTtcbiAgICAgICAgICB0aGlzLnJlc2V0ID0gKCkgPT4ge1xuICAgICAgICAgICAgYXR0cih0aGlzLiRlbCwgeyB0aXRsZTogdGl0bGVBdHRyLCBcImFyaWEtZGVzY3JpYmVkYnlcIjogbnVsbCB9KTtcbiAgICAgICAgICAgIG9mZigpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgY29uc3QgaWQgPSBnZW5lcmF0ZUlkKHRoaXMpO1xuICAgICAgICAgIGF0dHIodGhpcy4kZWwsIHsgdGl0bGU6IG51bGwsIFwiYXJpYS1kZXNjcmliZWRieVwiOiBpZCB9KTtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zaG93VGltZXIpO1xuICAgICAgICAgIHRoaXMuc2hvd1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLl9zaG93KHRpdGxlLCBpZCksIGRlbGF5KTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgaGlkZSgpIHtcbiAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgaWYgKG1hdGNoZXModGhpcy4kZWwsIFwiaW5wdXQ6Zm9jdXNcIikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc2hvd1RpbWVyKTtcbiAgICAgICAgICBpZiAodGhpcy5pc1RvZ2dsZWQodGhpcy50b29sdGlwIHx8IG51bGwpKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnRvZ2dsZUVsZW1lbnQodGhpcy50b29sdGlwLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAoX2EgPSB0aGlzLnJlc2V0KSA9PSBudWxsID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzKTtcbiAgICAgICAgICByZW1vdmUkMSh0aGlzLnRvb2x0aXApO1xuICAgICAgICAgIHRoaXMudG9vbHRpcCA9IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIF9zaG93KHRpdGxlLCBpZCkge1xuICAgICAgICAgIHRoaXMudG9vbHRpcCA9IGFwcGVuZChcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLFxuICAgICAgICAgICAgYDxkaXYgaWQ9XCIke2lkfVwiIGNsYXNzPVwidWstJHt0aGlzLiRvcHRpb25zLm5hbWV9XCIgcm9sZT1cInRvb2x0aXBcIj4gPGRpdiBjbGFzcz1cInVrLSR7dGhpcy4kb3B0aW9ucy5uYW1lfS1pbm5lclwiPiR7dGl0bGV9PC9kaXY+IDwvZGl2PmBcbiAgICAgICAgICApO1xuICAgICAgICAgIG9uKHRoaXMudG9vbHRpcCwgXCJ0b2dnbGVkXCIsIChlLCB0b2dnbGVkKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRvZ2dsZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdXBkYXRlID0gKCkgPT4gdGhpcy5wb3NpdGlvbkF0KHRoaXMudG9vbHRpcCwgdGhpcy4kZWwpO1xuICAgICAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgICAgICBjb25zdCBbZGlyLCBhbGlnbl0gPSBnZXRBbGlnbm1lbnQodGhpcy50b29sdGlwLCB0aGlzLiRlbCwgdGhpcy5wb3MpO1xuICAgICAgICAgICAgdGhpcy5vcmlnaW4gPSB0aGlzLmF4aXMgPT09IFwieVwiID8gYCR7ZmxpcFBvc2l0aW9uKGRpcil9LSR7YWxpZ259YCA6IGAke2FsaWdufS0ke2ZsaXBQb3NpdGlvbihkaXIpfWA7XG4gICAgICAgICAgICBjb25zdCBoYW5kbGVycyA9IFtcbiAgICAgICAgICAgICAgb25jZShcbiAgICAgICAgICAgICAgICBkb2N1bWVudCxcbiAgICAgICAgICAgICAgICBga2V5ZG93biAke3BvaW50ZXJEb3duJDF9YCxcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUsXG4gICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgKGUyKSA9PiBlMi50eXBlID09PSBwb2ludGVyRG93biQxICYmICF0aGlzLiRlbC5jb250YWlucyhlMi50YXJnZXQpIHx8IGUyLnR5cGUgPT09IFwia2V5ZG93blwiICYmIGUyLmtleUNvZGUgPT09IGtleU1hcC5FU0NcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgb24oW2RvY3VtZW50LCAuLi5vdmVyZmxvd1BhcmVudHModGhpcy4kZWwpXSwgXCJzY3JvbGxcIiwgdXBkYXRlLCB7XG4gICAgICAgICAgICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIG9uY2UodGhpcy50b29sdGlwLCBcImhpZGVcIiwgKCkgPT4gaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcigpKSwge1xuICAgICAgICAgICAgICBzZWxmOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoIWF3YWl0IHRoaXMudG9nZ2xlRWxlbWVudCh0aGlzLnRvb2x0aXAsIHRydWUpKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBldmVudHM6IHtcbiAgICAgICAgLy8gQ2xpY2tpbmcgYSBidXR0b24gZG9lcyBub3QgZ2l2ZSBpdCBmb2N1cyBvbiBhbGwgYnJvd3NlcnMgYW5kIHBsYXRmb3Jtc1xuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvYnV0dG9uI2NsaWNraW5nX2FuZF9mb2N1c1xuICAgICAgICBbYGZvY3VzICR7cG9pbnRlckVudGVyfSAke3BvaW50ZXJEb3duJDF9YF0oZSkge1xuICAgICAgICAgIGlmICghaXNUb3VjaChlKSB8fCBlLnR5cGUgPT09IHBvaW50ZXJEb3duJDEpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgZnVuY3Rpb24gbWFrZUZvY3VzYWJsZShlbCkge1xuICAgICAgaWYgKCFpc0ZvY3VzYWJsZShlbCkpIHtcbiAgICAgICAgYXR0cihlbCwgXCJ0YWJpbmRleFwiLCBcIjBcIik7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEFsaWdubWVudChlbCwgdGFyZ2V0LCBbZGlyLCBhbGlnbl0pIHtcbiAgICAgIGNvbnN0IGVsT2Zmc2V0ID0gb2Zmc2V0KGVsKTtcbiAgICAgIGNvbnN0IHRhcmdldE9mZnNldCA9IG9mZnNldCh0YXJnZXQpO1xuICAgICAgY29uc3QgcHJvcGVydGllcyA9IFtcbiAgICAgICAgW1wibGVmdFwiLCBcInJpZ2h0XCJdLFxuICAgICAgICBbXCJ0b3BcIiwgXCJib3R0b21cIl1cbiAgICAgIF07XG4gICAgICBmb3IgKGNvbnN0IHByb3BzMiBvZiBwcm9wZXJ0aWVzKSB7XG4gICAgICAgIGlmIChlbE9mZnNldFtwcm9wczJbMF1dID49IHRhcmdldE9mZnNldFtwcm9wczJbMV1dKSB7XG4gICAgICAgICAgZGlyID0gcHJvcHMyWzFdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbE9mZnNldFtwcm9wczJbMV1dIDw9IHRhcmdldE9mZnNldFtwcm9wczJbMF1dKSB7XG4gICAgICAgICAgZGlyID0gcHJvcHMyWzBdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBwcm9wcyA9IGluY2x1ZGVzKHByb3BlcnRpZXNbMF0sIGRpcikgPyBwcm9wZXJ0aWVzWzFdIDogcHJvcGVydGllc1swXTtcbiAgICAgIGFsaWduID0gcHJvcHMuZmluZCgocHJvcCkgPT4gZWxPZmZzZXRbcHJvcF0gPT09IHRhcmdldE9mZnNldFtwcm9wXSkgfHwgXCJjZW50ZXJcIjtcbiAgICAgIHJldHVybiBbZGlyLCBhbGlnbl07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBhcnNlUHJvcHMob3B0aW9ucykge1xuICAgICAgY29uc3QgeyBlbCwgaWQsIGRhdGE6IGRhdGEkMSB9ID0gb3B0aW9ucztcbiAgICAgIHJldHVybiBbXCJkZWxheVwiLCBcInRpdGxlXCJdLnJlZHVjZSgob2JqLCBrZXkpID0+ICh7IFtrZXldOiBkYXRhKGVsLCBrZXkpLCAuLi5vYmogfSksIHtcbiAgICAgICAgLi4ucGFyc2VPcHRpb25zKGRhdGEoZWwsIGlkKSwgW1widGl0bGVcIl0pLFxuICAgICAgICAuLi5kYXRhJDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciB1cGxvYWQgPSB7XG4gICAgICBtaXhpbnM6IFtJMThuXSxcbiAgICAgIGkxOG46IHtcbiAgICAgICAgaW52YWxpZE1pbWU6IFwiSW52YWxpZCBGaWxlIFR5cGU6ICVzXCIsXG4gICAgICAgIGludmFsaWROYW1lOiBcIkludmFsaWQgRmlsZSBOYW1lOiAlc1wiLFxuICAgICAgICBpbnZhbGlkU2l6ZTogXCJJbnZhbGlkIEZpbGUgU2l6ZTogJXMgS2lsb2J5dGVzIE1heFwiXG4gICAgICB9LFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgYWxsb3c6IFN0cmluZyxcbiAgICAgICAgY2xzRHJhZ292ZXI6IFN0cmluZyxcbiAgICAgICAgY29uY3VycmVudDogTnVtYmVyLFxuICAgICAgICBtYXhTaXplOiBOdW1iZXIsXG4gICAgICAgIG1ldGhvZDogU3RyaW5nLFxuICAgICAgICBtaW1lOiBTdHJpbmcsXG4gICAgICAgIG11bHRpcGxlOiBCb29sZWFuLFxuICAgICAgICBuYW1lOiBTdHJpbmcsXG4gICAgICAgIHBhcmFtczogT2JqZWN0LFxuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHVybDogU3RyaW5nXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBhbGxvdzogZmFsc2UsXG4gICAgICAgIGNsc0RyYWdvdmVyOiBcInVrLWRyYWdvdmVyXCIsXG4gICAgICAgIGNvbmN1cnJlbnQ6IDEsXG4gICAgICAgIG1heFNpemU6IDAsXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIG1pbWU6IGZhbHNlLFxuICAgICAgICBtdWx0aXBsZTogZmFsc2UsXG4gICAgICAgIG5hbWU6IFwiZmlsZXNbXVwiLFxuICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICB0eXBlOiBcIlwiLFxuICAgICAgICB1cmw6IFwiXCIsXG4gICAgICAgIGFib3J0OiBub29wLFxuICAgICAgICBiZWZvcmVBbGw6IG5vb3AsXG4gICAgICAgIGJlZm9yZVNlbmQ6IG5vb3AsXG4gICAgICAgIGNvbXBsZXRlOiBub29wLFxuICAgICAgICBjb21wbGV0ZUFsbDogbm9vcCxcbiAgICAgICAgZXJyb3I6IG5vb3AsXG4gICAgICAgIGZhaWw6IG5vb3AsXG4gICAgICAgIGxvYWQ6IG5vb3AsXG4gICAgICAgIGxvYWRFbmQ6IG5vb3AsXG4gICAgICAgIGxvYWRTdGFydDogbm9vcCxcbiAgICAgICAgcHJvZ3Jlc3M6IG5vb3BcbiAgICAgIH0sXG4gICAgICBldmVudHM6IHtcbiAgICAgICAgY2hhbmdlKGUpIHtcbiAgICAgICAgICBpZiAoIW1hdGNoZXMoZS50YXJnZXQsICdpbnB1dFt0eXBlPVwiZmlsZVwiXScpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBpZiAoZS50YXJnZXQuZmlsZXMpIHtcbiAgICAgICAgICAgIHRoaXMudXBsb2FkKGUudGFyZ2V0LmZpbGVzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZS50YXJnZXQudmFsdWUgPSBcIlwiO1xuICAgICAgICB9LFxuICAgICAgICBkcm9wKGUpIHtcbiAgICAgICAgICBzdG9wKGUpO1xuICAgICAgICAgIGNvbnN0IHRyYW5zZmVyID0gZS5kYXRhVHJhbnNmZXI7XG4gICAgICAgICAgaWYgKCEodHJhbnNmZXIgPT0gbnVsbCA/IHZvaWQgMCA6IHRyYW5zZmVyLmZpbGVzKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZW1vdmVDbGFzcyh0aGlzLiRlbCwgdGhpcy5jbHNEcmFnb3Zlcik7XG4gICAgICAgICAgdGhpcy51cGxvYWQodHJhbnNmZXIuZmlsZXMpO1xuICAgICAgICB9LFxuICAgICAgICBkcmFnZW50ZXIoZSkge1xuICAgICAgICAgIHN0b3AoZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGRyYWdvdmVyKGUpIHtcbiAgICAgICAgICBzdG9wKGUpO1xuICAgICAgICAgIGFkZENsYXNzKHRoaXMuJGVsLCB0aGlzLmNsc0RyYWdvdmVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgZHJhZ2xlYXZlKGUpIHtcbiAgICAgICAgICBzdG9wKGUpO1xuICAgICAgICAgIHJlbW92ZUNsYXNzKHRoaXMuJGVsLCB0aGlzLmNsc0RyYWdvdmVyKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgYXN5bmMgdXBsb2FkKGZpbGVzKSB7XG4gICAgICAgICAgZmlsZXMgPSB0b0FycmF5KGZpbGVzKTtcbiAgICAgICAgICBpZiAoIWZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0cmlnZ2VyKHRoaXMuJGVsLCBcInVwbG9hZFwiLCBbZmlsZXNdKTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1heFNpemUgJiYgdGhpcy5tYXhTaXplICogMWUzIDwgZmlsZS5zaXplKSB7XG4gICAgICAgICAgICAgIHRoaXMuZmFpbCh0aGlzLnQoXCJpbnZhbGlkU2l6ZVwiLCB0aGlzLm1heFNpemUpKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuYWxsb3cgJiYgIW1hdGNoJDEodGhpcy5hbGxvdywgZmlsZS5uYW1lKSkge1xuICAgICAgICAgICAgICB0aGlzLmZhaWwodGhpcy50KFwiaW52YWxpZE5hbWVcIiwgdGhpcy5hbGxvdykpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5taW1lICYmICFtYXRjaCQxKHRoaXMubWltZSwgZmlsZS50eXBlKSkge1xuICAgICAgICAgICAgICB0aGlzLmZhaWwodGhpcy50KFwiaW52YWxpZE1pbWVcIiwgdGhpcy5taW1lKSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICBmaWxlcyA9IGZpbGVzLnNsaWNlKDAsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmJlZm9yZUFsbCh0aGlzLCBmaWxlcyk7XG4gICAgICAgICAgY29uc3QgY2h1bmtzID0gY2h1bmsoZmlsZXMsIHRoaXMuY29uY3VycmVudCk7XG4gICAgICAgICAgY29uc3QgdXBsb2FkID0gYXN5bmMgKGZpbGVzMikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgZmlsZXMyLmZvckVhY2goKGZpbGUpID0+IGRhdGEuYXBwZW5kKHRoaXMubmFtZSwgZmlsZSkpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5wYXJhbXMpIHtcbiAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoa2V5LCB0aGlzLnBhcmFtc1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGNvbnN0IHhociA9IGF3YWl0IGFqYXgodGhpcy51cmwsIHtcbiAgICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogdGhpcy5tZXRob2QsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiB0aGlzLnR5cGUsXG4gICAgICAgICAgICAgICAgYmVmb3JlU2VuZDogKGVudikgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgeyB4aHI6IHhocjIgfSA9IGVudjtcbiAgICAgICAgICAgICAgICAgIG9uKHhocjIudXBsb2FkLCBcInByb2dyZXNzXCIsIHRoaXMucHJvZ3Jlc3MpO1xuICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB0eXBlIG9mIFtcImxvYWRTdGFydFwiLCBcImxvYWRcIiwgXCJsb2FkRW5kXCIsIFwiYWJvcnRcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgb24oeGhyMiwgdHlwZS50b0xvd2VyQ2FzZSgpLCB0aGlzW3R5cGVdKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJlZm9yZVNlbmQoZW52KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlKHhocik7XG4gICAgICAgICAgICAgIGlmIChjaHVua3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdXBsb2FkKGNodW5rcy5zaGlmdCgpKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlQWxsKHhocik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgdGhpcy5lcnJvcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICAgIGF3YWl0IHVwbG9hZChjaHVua3Muc2hpZnQoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGZ1bmN0aW9uIG1hdGNoJDEocGF0dGVybiwgcGF0aCkge1xuICAgICAgcmV0dXJuIHBhdGgubWF0Y2goXG4gICAgICAgIG5ldyBSZWdFeHAoXG4gICAgICAgICAgYF4ke3BhdHRlcm4ucmVwbGFjZSgvXFwvL2csIFwiXFxcXC9cIikucmVwbGFjZSgvXFwqXFwqL2csIFwiKFxcXFwvW15cXFxcL10rKSpcIikucmVwbGFjZSgvXFwqL2csIFwiW15cXFxcL10rXCIpLnJlcGxhY2UoLygoPyFcXFxcKSlcXD8vZywgXCIkMS5cIil9JGAsXG4gICAgICAgICAgXCJpXCJcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2h1bmsoZmlsZXMsIHNpemUpIHtcbiAgICAgIGNvbnN0IGNodW5rcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkgKz0gc2l6ZSkge1xuICAgICAgICBjaHVua3MucHVzaChmaWxlcy5zbGljZShpLCBpICsgc2l6ZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNodW5rcztcbiAgICB9XG4gICAgZnVuY3Rpb24gc3RvcChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBhamF4KHVybCwgb3B0aW9ucykge1xuICAgICAgY29uc3QgZW52ID0ge1xuICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICB4aHI6IG5ldyBYTUxIdHRwUmVxdWVzdCgpLFxuICAgICAgICBiZWZvcmVTZW5kOiBub29wLFxuICAgICAgICByZXNwb25zZVR5cGU6IFwiXCIsXG4gICAgICAgIC4uLm9wdGlvbnNcbiAgICAgIH07XG4gICAgICBhd2FpdCBlbnYuYmVmb3JlU2VuZChlbnYpO1xuICAgICAgcmV0dXJuIHNlbmQodXJsLCBlbnYpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZW5kKHVybCwgZW52KSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB7IHhociB9ID0gZW52O1xuICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gZW52KSB7XG4gICAgICAgICAgaWYgKHByb3AgaW4geGhyKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB4aHJbcHJvcF0gPSBlbnZbcHJvcF07XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHhoci5vcGVuKGVudi5tZXRob2QudG9VcHBlckNhc2UoKSwgdXJsKTtcbiAgICAgICAgZm9yIChjb25zdCBoZWFkZXIgaW4gZW52LmhlYWRlcnMpIHtcbiAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihoZWFkZXIsIGVudi5oZWFkZXJzW2hlYWRlcl0pO1xuICAgICAgICB9XG4gICAgICAgIG9uKHhociwgXCJsb2FkXCIsICgpID0+IHtcbiAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMCB8fCB4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwIHx8IHhoci5zdGF0dXMgPT09IDMwNCkge1xuICAgICAgICAgICAgcmVzb2x2ZSh4aHIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoXG4gICAgICAgICAgICAgIGFzc2lnbihFcnJvcih4aHIuc3RhdHVzVGV4dCksIHtcbiAgICAgICAgICAgICAgICB4aHIsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG9uKHhociwgXCJlcnJvclwiLCAoKSA9PiByZWplY3QoYXNzaWduKEVycm9yKFwiTmV0d29yayBFcnJvclwiKSwgeyB4aHIgfSkpKTtcbiAgICAgICAgb24oeGhyLCBcInRpbWVvdXRcIiwgKCkgPT4gcmVqZWN0KGFzc2lnbihFcnJvcihcIk5ldHdvcmsgVGltZW91dFwiKSwgeyB4aHIgfSkpKTtcbiAgICAgICAgeGhyLnNlbmQoZW52LmRhdGEpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGNvbXBvbmVudHMkMSA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgICAgICAgX19wcm90b19fOiBudWxsLFxuICAgICAgICBDb3VudGRvd246IGNvdW50ZG93bixcbiAgICAgICAgRmlsdGVyOiBmaWx0ZXIsXG4gICAgICAgIExpZ2h0Ym94OiBsaWdodGJveCxcbiAgICAgICAgTGlnaHRib3hQYW5lbDogTGlnaHRib3hQYW5lbCxcbiAgICAgICAgTm90aWZpY2F0aW9uOiBub3RpZmljYXRpb24sXG4gICAgICAgIFBhcmFsbGF4OiBwYXJhbGxheCxcbiAgICAgICAgU2xpZGVyOiBzbGlkZXIsXG4gICAgICAgIFNsaWRlclBhcmFsbGF4OiBzbGlkZXJQYXJhbGxheCxcbiAgICAgICAgU2xpZGVzaG93OiBzbGlkZXNob3csXG4gICAgICAgIFNsaWRlc2hvd1BhcmFsbGF4OiBzbGlkZXJQYXJhbGxheCxcbiAgICAgICAgU29ydGFibGU6IHNvcnRhYmxlLFxuICAgICAgICBUb29sdGlwOiB0b29sdGlwLFxuICAgICAgICBVcGxvYWQ6IHVwbG9hZFxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gYm9vdChBcHApIHtcbiAgICAgIGlmIChpbkJyb3dzZXIgJiYgd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gaW5pdChBcHApKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXcgTXV0YXRpb25PYnNlcnZlcigocmVjb3Jkcywgb2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICAgIGluaXQoQXBwKTtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLm9ic2VydmUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7IGNoaWxkTGlzdDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBpbml0KEFwcCkge1xuICAgICAgdHJpZ2dlcihkb2N1bWVudCwgXCJ1aWtpdDppbml0XCIsIEFwcCk7XG4gICAgICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgICAgICBhcHBseShkb2N1bWVudC5ib2R5LCBjb25uZWN0KTtcbiAgICAgIH1cbiAgICAgIG5ldyBNdXRhdGlvbk9ic2VydmVyKChyZWNvcmRzKSA9PiByZWNvcmRzLmZvckVhY2goYXBwbHlDaGlsZExpc3RNdXRhdGlvbikpLm9ic2VydmUoZG9jdW1lbnQsIHtcbiAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlXG4gICAgICB9KTtcbiAgICAgIG5ldyBNdXRhdGlvbk9ic2VydmVyKChyZWNvcmRzKSA9PiByZWNvcmRzLmZvckVhY2goYXBwbHlBdHRyaWJ1dGVNdXRhdGlvbikpLm9ic2VydmUoZG9jdW1lbnQsIHtcbiAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgYXR0cmlidXRlczogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBBcHAuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXBwbHlDaGlsZExpc3RNdXRhdGlvbih7IGFkZGVkTm9kZXMsIHJlbW92ZWROb2RlcyB9KSB7XG4gICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgYWRkZWROb2Rlcykge1xuICAgICAgICBhcHBseShub2RlLCBjb25uZWN0KTtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiByZW1vdmVkTm9kZXMpIHtcbiAgICAgICAgYXBwbHkobm9kZSwgZGlzY29ubmVjdCk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFwcGx5QXR0cmlidXRlTXV0YXRpb24oeyB0YXJnZXQsIGF0dHJpYnV0ZU5hbWUgfSkge1xuICAgICAgdmFyIF9hO1xuICAgICAgY29uc3QgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoYXR0cmlidXRlTmFtZSk7XG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICBpZiAoaGFzQXR0cih0YXJnZXQsIGF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgICAgICAgY3JlYXRlQ29tcG9uZW50KG5hbWUsIHRhcmdldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgKF9hID0gZ2V0Q29tcG9uZW50KHRhcmdldCwgbmFtZSkpID09IG51bGwgPyB2b2lkIDAgOiBfYS4kZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvbm5lY3Qobm9kZSkge1xuICAgICAgY29uc3QgY29tcG9uZW50czIgPSBnZXRDb21wb25lbnRzKG5vZGUpO1xuICAgICAgZm9yIChjb25zdCBuYW1lIGluIGNvbXBvbmVudHMyKSB7XG4gICAgICAgIGNhbGxDb25uZWN0ZWQoY29tcG9uZW50czJbbmFtZV0pO1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBhdHRyaWJ1dGVOYW1lIG9mIG5vZGUuZ2V0QXR0cmlidXRlTmFtZXMoKSkge1xuICAgICAgICBjb25zdCBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgbmFtZSAmJiBjcmVhdGVDb21wb25lbnQobmFtZSwgbm9kZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRpc2Nvbm5lY3Qobm9kZSkge1xuICAgICAgY29uc3QgY29tcG9uZW50czIgPSBnZXRDb21wb25lbnRzKG5vZGUpO1xuICAgICAgZm9yIChjb25zdCBuYW1lIGluIGNvbXBvbmVudHMyKSB7XG4gICAgICAgIGNhbGxEaXNjb25uZWN0ZWQoY29tcG9uZW50czJbbmFtZV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKGF0dHJpYnV0ZSkge1xuICAgICAgaWYgKHN0YXJ0c1dpdGgoYXR0cmlidXRlLCBcImRhdGEtXCIpKSB7XG4gICAgICAgIGF0dHJpYnV0ZSA9IGF0dHJpYnV0ZS5zbGljZSg1KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNtcCA9IGNvbXBvbmVudHMkMlthdHRyaWJ1dGVdO1xuICAgICAgcmV0dXJuIGNtcCAmJiAoY21wLm9wdGlvbnMgfHwgY21wKS5uYW1lO1xuICAgIH1cblxuICAgIGdsb2JhbEFwaShBcHApO1xuICAgIGluc3RhbmNlQXBpKEFwcCk7XG5cbiAgICB2YXIgQWNjb3JkaW9uID0ge1xuICAgICAgbWl4aW5zOiBbQ2xhc3MsIFRvZ2dsYWJsZV0sXG4gICAgICBwcm9wczoge1xuICAgICAgICBhbmltYXRpb246IEJvb2xlYW4sXG4gICAgICAgIHRhcmdldHM6IFN0cmluZyxcbiAgICAgICAgYWN0aXZlOiBudWxsLFxuICAgICAgICBjb2xsYXBzaWJsZTogQm9vbGVhbixcbiAgICAgICAgbXVsdGlwbGU6IEJvb2xlYW4sXG4gICAgICAgIHRvZ2dsZTogU3RyaW5nLFxuICAgICAgICBjb250ZW50OiBTdHJpbmcsXG4gICAgICAgIG9mZnNldDogTnVtYmVyXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICB0YXJnZXRzOiBcIj4gKlwiLFxuICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICBhbmltYXRpb246IHRydWUsXG4gICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxuICAgICAgICBtdWx0aXBsZTogZmFsc2UsXG4gICAgICAgIGNsc09wZW46IFwidWstb3BlblwiLFxuICAgICAgICB0b2dnbGU6IFwiPiAudWstYWNjb3JkaW9uLXRpdGxlXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiPiAudWstYWNjb3JkaW9uLWNvbnRlbnRcIixcbiAgICAgICAgb2Zmc2V0OiAwXG4gICAgICB9LFxuICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgaXRlbXM6ICh7IHRhcmdldHMgfSwgJGVsKSA9PiAkJCh0YXJnZXRzLCAkZWwpLFxuICAgICAgICB0b2dnbGVzKHsgdG9nZ2xlIH0pIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5tYXAoKGl0ZW0pID0+ICQodG9nZ2xlLCBpdGVtKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnRzKHsgY29udGVudCB9KSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICByZXR1cm4gKChfYSA9IGl0ZW0uX3dyYXBwZXIpID09IG51bGwgPyB2b2lkIDAgOiBfYS5maXJzdEVsZW1lbnRDaGlsZCkgfHwgJChjb250ZW50LCBpdGVtKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHdhdGNoOiB7XG4gICAgICAgIGl0ZW1zKGl0ZW1zLCBwcmV2KSB7XG4gICAgICAgICAgaWYgKHByZXYgfHwgaGFzQ2xhc3MoaXRlbXMsIHRoaXMuY2xzT3BlbikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgYWN0aXZlID0gdGhpcy5hY3RpdmUgIT09IGZhbHNlICYmIGl0ZW1zW051bWJlcih0aGlzLmFjdGl2ZSldIHx8ICF0aGlzLmNvbGxhcHNpYmxlICYmIGl0ZW1zWzBdO1xuICAgICAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlKGFjdGl2ZSwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdG9nZ2xlcygpIHtcbiAgICAgICAgICB0aGlzLiRlbWl0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnRzKGl0ZW1zKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBlbCBvZiBpdGVtcykge1xuICAgICAgICAgICAgY29uc3QgaXNPcGVuID0gaGFzQ2xhc3MoXG4gICAgICAgICAgICAgIHRoaXMuaXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5jb250YWlucyhlbCkpLFxuICAgICAgICAgICAgICB0aGlzLmNsc09wZW5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBoaWRlKGVsLCAhaXNPcGVuKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy4kZW1pdCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb2JzZXJ2ZTogbGF6eWxvYWQoKSxcbiAgICAgIGV2ZW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJjbGljayBrZXlkb3duXCIsXG4gICAgICAgICAgZGVsZWdhdGU6ICh7IHRhcmdldHMsICRwcm9wcyB9KSA9PiBgJHt0YXJnZXRzfSAkeyRwcm9wcy50b2dnbGV9YCxcbiAgICAgICAgICBhc3luYyBoYW5kbGVyKGUpIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT09IFwia2V5ZG93blwiICYmIGUua2V5Q29kZSAhPT0ga2V5TWFwLlNQQUNFKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIChfYSA9IHRoaXMuX29mZikgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLl9vZmYgPSBrZWVwU2Nyb2xsUG9zaXRpb24oZS50YXJnZXQpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy50b2dnbGUoaW5kZXgodGhpcy50b2dnbGVzLCBlLmN1cnJlbnQpKTtcbiAgICAgICAgICAgIHRoaXMuX29mZigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwic2hvd24gaGlkZGVuXCIsXG4gICAgICAgICAgc2VsZjogdHJ1ZSxcbiAgICAgICAgICBkZWxlZ2F0ZTogKHsgdGFyZ2V0cyB9KSA9PiB0YXJnZXRzLFxuICAgICAgICAgIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgdXBkYXRlKCkge1xuICAgICAgICBjb25zdCBhY3RpdmVJdGVtcyA9IGZpbHRlciQxKHRoaXMuaXRlbXMsIGAuJHt0aGlzLmNsc09wZW59YCk7XG4gICAgICAgIGZvciAoY29uc3QgaW5kZXgyIGluIHRoaXMuaXRlbXMpIHtcbiAgICAgICAgICBjb25zdCB0b2dnbGUgPSB0aGlzLnRvZ2dsZXNbaW5kZXgyXTtcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50c1tpbmRleDJdO1xuICAgICAgICAgIGlmICghdG9nZ2xlIHx8ICFjb250ZW50KSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdG9nZ2xlLmlkID0gZ2VuZXJhdGVJZCh0aGlzLCB0b2dnbGUpO1xuICAgICAgICAgIGNvbnRlbnQuaWQgPSBnZW5lcmF0ZUlkKHRoaXMsIGNvbnRlbnQpO1xuICAgICAgICAgIGNvbnN0IGFjdGl2ZSA9IGluY2x1ZGVzKGFjdGl2ZUl0ZW1zLCB0aGlzLml0ZW1zW2luZGV4Ml0pO1xuICAgICAgICAgIGF0dHIodG9nZ2xlLCB7XG4gICAgICAgICAgICByb2xlOiBpc1RhZyh0b2dnbGUsIFwiYVwiKSA/IFwiYnV0dG9uXCIgOiBudWxsLFxuICAgICAgICAgICAgXCJhcmlhLWNvbnRyb2xzXCI6IGNvbnRlbnQuaWQsXG4gICAgICAgICAgICBcImFyaWEtZXhwYW5kZWRcIjogYWN0aXZlLFxuICAgICAgICAgICAgXCJhcmlhLWRpc2FibGVkXCI6ICF0aGlzLmNvbGxhcHNpYmxlICYmIGFjdGl2ZUl0ZW1zLmxlbmd0aCA8IDIgJiYgYWN0aXZlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYXR0cihjb250ZW50LCB7IHJvbGU6IFwicmVnaW9uXCIsIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IHRvZ2dsZS5pZCB9KTtcbiAgICAgICAgICBpZiAoaXNUYWcoY29udGVudCwgXCJ1bFwiKSkge1xuICAgICAgICAgICAgYXR0cihjaGlsZHJlbihjb250ZW50KSwgXCJyb2xlXCIsIFwicHJlc2VudGF0aW9uXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdG9nZ2xlKGl0ZW0sIGFuaW1hdGUpIHtcbiAgICAgICAgICBpdGVtID0gdGhpcy5pdGVtc1tnZXRJbmRleChpdGVtLCB0aGlzLml0ZW1zKV07XG4gICAgICAgICAgbGV0IGl0ZW1zID0gW2l0ZW1dO1xuICAgICAgICAgIGNvbnN0IGFjdGl2ZUl0ZW1zID0gZmlsdGVyJDEodGhpcy5pdGVtcywgYC4ke3RoaXMuY2xzT3Blbn1gKTtcbiAgICAgICAgICBpZiAoIXRoaXMubXVsdGlwbGUgJiYgIWluY2x1ZGVzKGFjdGl2ZUl0ZW1zLCBpdGVtc1swXSkpIHtcbiAgICAgICAgICAgIGl0ZW1zID0gaXRlbXMuY29uY2F0KGFjdGl2ZUl0ZW1zKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0aGlzLmNvbGxhcHNpYmxlICYmIGFjdGl2ZUl0ZW1zLmxlbmd0aCA8IDIgJiYgaW5jbHVkZXMoYWN0aXZlSXRlbXMsIGl0ZW0pKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIGl0ZW1zLm1hcChcbiAgICAgICAgICAgICAgKGVsKSA9PiB0aGlzLnRvZ2dsZUVsZW1lbnQoZWwsICFpbmNsdWRlcyhhY3RpdmVJdGVtcywgZWwpLCAoZWwyLCBzaG93KSA9PiB7XG4gICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3MoZWwyLCB0aGlzLmNsc09wZW4sIHNob3cpO1xuICAgICAgICAgICAgICAgIGlmIChhbmltYXRlID09PSBmYWxzZSB8fCAhdGhpcy5hbmltYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgIGhpZGUoJCh0aGlzLmNvbnRlbnQsIGVsMiksICFzaG93KTtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zaXRpb24oZWwyLCBzaG93LCB0aGlzKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBmdW5jdGlvbiBoaWRlKGVsLCBoaWRlMikge1xuICAgICAgZWwgJiYgKGVsLmhpZGRlbiA9IGhpZGUyKTtcbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gdHJhbnNpdGlvbihlbCwgc2hvdywgeyBjb250ZW50LCBkdXJhdGlvbiwgdmVsb2NpdHksIHRyYW5zaXRpb246IHRyYW5zaXRpb24yIH0pIHtcbiAgICAgIHZhciBfYTtcbiAgICAgIGNvbnRlbnQgPSAoKF9hID0gZWwuX3dyYXBwZXIpID09IG51bGwgPyB2b2lkIDAgOiBfYS5maXJzdEVsZW1lbnRDaGlsZCkgfHwgJChjb250ZW50LCBlbCk7XG4gICAgICBpZiAoIWVsLl93cmFwcGVyKSB7XG4gICAgICAgIGVsLl93cmFwcGVyID0gd3JhcEFsbChjb250ZW50LCBcIjxkaXY+XCIpO1xuICAgICAgfVxuICAgICAgY29uc3Qgd3JhcHBlciA9IGVsLl93cmFwcGVyO1xuICAgICAgY3NzKHdyYXBwZXIsIFwib3ZlcmZsb3dcIiwgXCJoaWRkZW5cIik7XG4gICAgICBjb25zdCBjdXJyZW50SGVpZ2h0ID0gdG9GbG9hdChjc3Mod3JhcHBlciwgXCJoZWlnaHRcIikpO1xuICAgICAgYXdhaXQgVHJhbnNpdGlvbi5jYW5jZWwod3JhcHBlcik7XG4gICAgICBoaWRlKGNvbnRlbnQsIGZhbHNlKTtcbiAgICAgIGNvbnN0IGVuZEhlaWdodCA9IHN1bUJ5KFtcIm1hcmdpblRvcFwiLCBcIm1hcmdpbkJvdHRvbVwiXSwgKHByb3ApID0+IGNzcyhjb250ZW50LCBwcm9wKSkgKyBkaW1lbnNpb25zJDEoY29udGVudCkuaGVpZ2h0O1xuICAgICAgY29uc3QgcGVyY2VudCA9IGN1cnJlbnRIZWlnaHQgLyBlbmRIZWlnaHQ7XG4gICAgICBkdXJhdGlvbiA9ICh2ZWxvY2l0eSAqIGVuZEhlaWdodCArIGR1cmF0aW9uKSAqIChzaG93ID8gMSAtIHBlcmNlbnQgOiBwZXJjZW50KTtcbiAgICAgIGNzcyh3cmFwcGVyLCBcImhlaWdodFwiLCBjdXJyZW50SGVpZ2h0KTtcbiAgICAgIGF3YWl0IFRyYW5zaXRpb24uc3RhcnQod3JhcHBlciwgeyBoZWlnaHQ6IHNob3cgPyBlbmRIZWlnaHQgOiAwIH0sIGR1cmF0aW9uLCB0cmFuc2l0aW9uMik7XG4gICAgICB1bndyYXAoY29udGVudCk7XG4gICAgICBkZWxldGUgZWwuX3dyYXBwZXI7XG4gICAgICBpZiAoIXNob3cpIHtcbiAgICAgICAgaGlkZShjb250ZW50LCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24ga2VlcFNjcm9sbFBvc2l0aW9uKGVsKSB7XG4gICAgICBjb25zdCBzY3JvbGxFbGVtZW50ID0gc2Nyb2xsUGFyZW50KGVsLCB0cnVlKTtcbiAgICAgIGxldCBmcmFtZTtcbiAgICAgIChmdW5jdGlvbiBzY3JvbGwoKSB7XG4gICAgICAgIGZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICBjb25zdCB7IHRvcCB9ID0gZGltZW5zaW9ucyQxKGVsKTtcbiAgICAgICAgICBpZiAodG9wIDwgMCkge1xuICAgICAgICAgICAgc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3AgKz0gdG9wO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzY3JvbGwoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSgpO1xuICAgICAgcmV0dXJuICgpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBjYW5jZWxBbmltYXRpb25GcmFtZShmcmFtZSkpO1xuICAgIH1cblxuICAgIHZhciBhbGVydCA9IHtcbiAgICAgIG1peGluczogW0NsYXNzLCBUb2dnbGFibGVdLFxuICAgICAgYXJnczogXCJhbmltYXRpb25cIixcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGFuaW1hdGlvbjogQm9vbGVhbixcbiAgICAgICAgY2xvc2U6IFN0cmluZ1xuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgYW5pbWF0aW9uOiB0cnVlLFxuICAgICAgICBzZWxDbG9zZTogXCIudWstYWxlcnQtY2xvc2VcIixcbiAgICAgICAgZHVyYXRpb246IDE1MFxuICAgICAgfSxcbiAgICAgIGV2ZW50czoge1xuICAgICAgICBuYW1lOiBcImNsaWNrXCIsXG4gICAgICAgIGRlbGVnYXRlOiAoeyBzZWxDbG9zZSB9KSA9PiBzZWxDbG9zZSxcbiAgICAgICAgaGFuZGxlcihlKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgYXN5bmMgY2xvc2UoKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy50b2dnbGVFbGVtZW50KHRoaXMuJGVsLCBmYWxzZSwgYW5pbWF0ZSk7XG4gICAgICAgICAgdGhpcy4kZGVzdHJveSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgZnVuY3Rpb24gYW5pbWF0ZShlbCwgc2hvdywgeyBkdXJhdGlvbiwgdHJhbnNpdGlvbiwgdmVsb2NpdHkgfSkge1xuICAgICAgY29uc3QgaGVpZ2h0ID0gdG9GbG9hdChjc3MoZWwsIFwiaGVpZ2h0XCIpKTtcbiAgICAgIGNzcyhlbCwgXCJoZWlnaHRcIiwgaGVpZ2h0KTtcbiAgICAgIHJldHVybiBUcmFuc2l0aW9uLnN0YXJ0KFxuICAgICAgICBlbCxcbiAgICAgICAge1xuICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICBtYXJnaW5Ub3A6IDAsXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiAwLFxuICAgICAgICAgIHBhZGRpbmdUb3A6IDAsXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogMCxcbiAgICAgICAgICBib3JkZXJUb3A6IDAsXG4gICAgICAgICAgYm9yZGVyQm90dG9tOiAwLFxuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSxcbiAgICAgICAgdmVsb2NpdHkgKiBoZWlnaHQgKyBkdXJhdGlvbixcbiAgICAgICAgdHJhbnNpdGlvblxuICAgICAgKTtcbiAgICB9XG5cbiAgICB2YXIgVmlkZW8gPSB7XG4gICAgICBhcmdzOiBcImF1dG9wbGF5XCIsXG4gICAgICBwcm9wczoge1xuICAgICAgICBhdXRvbXV0ZTogQm9vbGVhbixcbiAgICAgICAgYXV0b3BsYXk6IEJvb2xlYW5cbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGF1dG9tdXRlOiBmYWxzZSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWVcbiAgICAgIH0sXG4gICAgICBiZWZvcmVDb25uZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5hdXRvcGxheSA9PT0gXCJpbnZpZXdcIiAmJiAhaGFzQXR0cih0aGlzLiRlbCwgXCJwcmVsb2FkXCIpKSB7XG4gICAgICAgICAgdGhpcy4kZWwucHJlbG9hZCA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1RhZyh0aGlzLiRlbCwgXCJpZnJhbWVcIikgJiYgIWhhc0F0dHIodGhpcy4kZWwsIFwiYWxsb3dcIikpIHtcbiAgICAgICAgICB0aGlzLiRlbC5hbGxvdyA9IFwiYXV0b3BsYXlcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hdXRvcGxheSA9PT0gXCJob3ZlclwiKSB7XG4gICAgICAgICAgaWYgKGlzVGFnKHRoaXMuJGVsLCBcInZpZGVvXCIpKSB7XG4gICAgICAgICAgICB0aGlzLiRlbC50YWJpbmRleCA9IDA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXV0b3BsYXkgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hdXRvbXV0ZSkge1xuICAgICAgICAgIG11dGUodGhpcy4kZWwpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXZlbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBgJHtwb2ludGVyRW50ZXJ9IGZvY3VzaW5gLFxuICAgICAgICAgIGZpbHRlcjogKHsgYXV0b3BsYXkgfSkgPT4gaW5jbHVkZXMoYXV0b3BsYXksIFwiaG92ZXJcIiksXG4gICAgICAgICAgaGFuZGxlcihlKSB7XG4gICAgICAgICAgICBpZiAoIWlzVG91Y2goZSkgfHwgIWlzUGxheWluZyh0aGlzLiRlbCkpIHtcbiAgICAgICAgICAgICAgcGxheSh0aGlzLiRlbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXVzZSh0aGlzLiRlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogYCR7cG9pbnRlckxlYXZlfSBmb2N1c291dGAsXG4gICAgICAgICAgZmlsdGVyOiAoeyBhdXRvcGxheSB9KSA9PiBpbmNsdWRlcyhhdXRvcGxheSwgXCJob3ZlclwiKSxcbiAgICAgICAgICBoYW5kbGVyKGUpIHtcbiAgICAgICAgICAgIGlmICghaXNUb3VjaChlKSkge1xuICAgICAgICAgICAgICBwYXVzZSh0aGlzLiRlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgb2JzZXJ2ZTogW1xuICAgICAgICBpbnRlcnNlY3Rpb24oe1xuICAgICAgICAgIGZpbHRlcjogKHsgJGVsLCBhdXRvcGxheSB9KSA9PiBhdXRvcGxheSAmJiBhdXRvcGxheSAhPT0gXCJob3ZlclwiICYmIGlzVmlkZW8oJGVsKSxcbiAgICAgICAgICBoYW5kbGVyKFt7IGlzSW50ZXJzZWN0aW5nIH1dKSB7XG4gICAgICAgICAgICBpZiAoIWRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50KSB7XG4gICAgICAgICAgICAgIGlmIChpc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgIHBsYXkodGhpcy4kZWwpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhdXNlKHRoaXMuJGVsKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXJnczogeyBpbnRlcnNlY3Rpbmc6IGZhbHNlIH0sXG4gICAgICAgICAgb3B0aW9uczogKHsgJGVsLCBhdXRvcGxheSB9KSA9PiAoeyByb290OiBhdXRvcGxheSA9PT0gXCJpbnZpZXdcIiA/IG51bGwgOiBwYXJlbnQoJGVsKSB9KVxuICAgICAgICB9KVxuICAgICAgXVxuICAgIH07XG4gICAgZnVuY3Rpb24gaXNQbGF5aW5nKHZpZGVvRWwpIHtcbiAgICAgIHJldHVybiAhdmlkZW9FbC5wYXVzZWQgJiYgIXZpZGVvRWwuZW5kZWQ7XG4gICAgfVxuXG4gICAgdmFyIGNvdmVyID0ge1xuICAgICAgbWl4aW5zOiBbVmlkZW9dLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgd2lkdGg6IE51bWJlcixcbiAgICAgICAgaGVpZ2h0OiBOdW1iZXJcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGF1dG9tdXRlOiB0cnVlXG4gICAgICB9LFxuICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy51c2VPYmplY3RGaXQgPSBpc1RhZyh0aGlzLiRlbCwgXCJpbWdcIiwgXCJ2aWRlb1wiKTtcbiAgICAgIH0sXG4gICAgICBvYnNlcnZlOiByZXNpemUoe1xuICAgICAgICB0YXJnZXQ6ICh7ICRlbCB9KSA9PiBnZXRQb3NpdGlvbmVkUGFyZW50KCRlbCkgfHwgcGFyZW50KCRlbCksXG4gICAgICAgIGZpbHRlcjogKHsgdXNlT2JqZWN0Rml0IH0pID0+ICF1c2VPYmplY3RGaXRcbiAgICAgIH0pLFxuICAgICAgdXBkYXRlOiB7XG4gICAgICAgIHJlYWQoKSB7XG4gICAgICAgICAgaWYgKHRoaXMudXNlT2JqZWN0Rml0KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHsgcmF0aW8sIGNvdmVyIH0gPSBEaW1lbnNpb25zO1xuICAgICAgICAgIGNvbnN0IHsgJGVsLCB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzO1xuICAgICAgICAgIGxldCBkaW0gPSB7IHdpZHRoLCBoZWlnaHQgfTtcbiAgICAgICAgICBpZiAoIXdpZHRoIHx8ICFoZWlnaHQpIHtcbiAgICAgICAgICAgIGNvbnN0IGludHJpbnNpYyA9IHtcbiAgICAgICAgICAgICAgd2lkdGg6ICRlbC5uYXR1cmFsV2lkdGggfHwgJGVsLnZpZGVvV2lkdGggfHwgJGVsLmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgICBoZWlnaHQ6ICRlbC5uYXR1cmFsSGVpZ2h0IHx8ICRlbC52aWRlb0hlaWdodCB8fCAkZWwuY2xpZW50SGVpZ2h0XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHdpZHRoKSB7XG4gICAgICAgICAgICAgIGRpbSA9IHJhdGlvKGludHJpbnNpYywgXCJ3aWR0aFwiLCB3aWR0aCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhlaWdodCkge1xuICAgICAgICAgICAgICBkaW0gPSByYXRpbyhpbnRyaW5zaWMsIFwiaGVpZ2h0XCIsIGhlaWdodCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkaW0gPSBpbnRyaW5zaWM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHsgb2Zmc2V0SGVpZ2h0OiBjb3ZlckhlaWdodCwgb2Zmc2V0V2lkdGg6IGNvdmVyV2lkdGggfSA9IGdldFBvc2l0aW9uZWRQYXJlbnQoJGVsKSB8fCBwYXJlbnQoJGVsKTtcbiAgICAgICAgICBjb25zdCBjb3ZlckRpbSA9IGNvdmVyKGRpbSwgeyB3aWR0aDogY292ZXJXaWR0aCwgaGVpZ2h0OiBjb3ZlckhlaWdodCB9KTtcbiAgICAgICAgICBpZiAoIWNvdmVyRGltLndpZHRoIHx8ICFjb3ZlckRpbS5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNvdmVyRGltO1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZSh7IGhlaWdodCwgd2lkdGggfSkge1xuICAgICAgICAgIGNzcyh0aGlzLiRlbCwgeyBoZWlnaHQsIHdpZHRoIH0pO1xuICAgICAgICB9LFxuICAgICAgICBldmVudHM6IFtcInJlc2l6ZVwiXVxuICAgICAgfVxuICAgIH07XG4gICAgZnVuY3Rpb24gZ2V0UG9zaXRpb25lZFBhcmVudChlbCkge1xuICAgICAgd2hpbGUgKGVsID0gcGFyZW50KGVsKSkge1xuICAgICAgICBpZiAoY3NzKGVsLCBcInBvc2l0aW9uXCIpICE9PSBcInN0YXRpY1wiKSB7XG4gICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGFjdGl2ZTtcbiAgICB2YXIgZHJvcCA9IHtcbiAgICAgIG1peGluczogW0NvbnRhaW5lciwgUG9zaXRpb24sIFRvZ2dsYWJsZV0sXG4gICAgICBhcmdzOiBcInBvc1wiLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgbW9kZTogXCJsaXN0XCIsXG4gICAgICAgIHRvZ2dsZTogQm9vbGVhbixcbiAgICAgICAgYm91bmRhcnk6IEJvb2xlYW4sXG4gICAgICAgIGJvdW5kYXJ5WDogQm9vbGVhbixcbiAgICAgICAgYm91bmRhcnlZOiBCb29sZWFuLFxuICAgICAgICB0YXJnZXQ6IEJvb2xlYW4sXG4gICAgICAgIHRhcmdldFg6IEJvb2xlYW4sXG4gICAgICAgIHRhcmdldFk6IEJvb2xlYW4sXG4gICAgICAgIHN0cmV0Y2g6IEJvb2xlYW4sXG4gICAgICAgIGRlbGF5U2hvdzogTnVtYmVyLFxuICAgICAgICBkZWxheUhpZGU6IE51bWJlcixcbiAgICAgICAgYXV0b1VwZGF0ZTogQm9vbGVhbixcbiAgICAgICAgY2xzRHJvcDogU3RyaW5nLFxuICAgICAgICBhbmltYXRlT3V0OiBCb29sZWFuLFxuICAgICAgICBiZ1Njcm9sbDogQm9vbGVhbixcbiAgICAgICAgY2xvc2VPblNjcm9sbDogQm9vbGVhblxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbW9kZTogW1wiY2xpY2tcIiwgXCJob3ZlclwiXSxcbiAgICAgICAgdG9nZ2xlOiBcIi0gKlwiLFxuICAgICAgICBib3VuZGFyeTogZmFsc2UsXG4gICAgICAgIGJvdW5kYXJ5WDogZmFsc2UsXG4gICAgICAgIGJvdW5kYXJ5WTogZmFsc2UsXG4gICAgICAgIHRhcmdldDogZmFsc2UsXG4gICAgICAgIHRhcmdldFg6IGZhbHNlLFxuICAgICAgICB0YXJnZXRZOiBmYWxzZSxcbiAgICAgICAgc3RyZXRjaDogZmFsc2UsXG4gICAgICAgIGRlbGF5U2hvdzogMCxcbiAgICAgICAgZGVsYXlIaWRlOiA4MDAsXG4gICAgICAgIGF1dG9VcGRhdGU6IHRydWUsXG4gICAgICAgIGNsc0Ryb3A6IGZhbHNlLFxuICAgICAgICBhbmltYXRlT3V0OiBmYWxzZSxcbiAgICAgICAgYmdTY3JvbGw6IHRydWUsXG4gICAgICAgIGFuaW1hdGlvbjogW1widWstYW5pbWF0aW9uLWZhZGVcIl0sXG4gICAgICAgIGNsczogXCJ1ay1vcGVuXCIsXG4gICAgICAgIGNvbnRhaW5lcjogZmFsc2UsXG4gICAgICAgIGNsb3NlT25TY3JvbGw6IGZhbHNlXG4gICAgICB9LFxuICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgYm91bmRhcnkoeyBib3VuZGFyeSwgYm91bmRhcnlYLCBib3VuZGFyeVkgfSwgJGVsKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHF1ZXJ5KGJvdW5kYXJ5WCB8fCBib3VuZGFyeSwgJGVsKSB8fCB3aW5kb3csXG4gICAgICAgICAgICBxdWVyeShib3VuZGFyeVkgfHwgYm91bmRhcnksICRlbCkgfHwgd2luZG93XG4gICAgICAgICAgXTtcbiAgICAgICAgfSxcbiAgICAgICAgdGFyZ2V0KHsgdGFyZ2V0LCB0YXJnZXRYLCB0YXJnZXRZIH0sICRlbCkge1xuICAgICAgICAgIHRhcmdldFggfHwgKHRhcmdldFggPSB0YXJnZXQgfHwgdGhpcy50YXJnZXRFbCk7XG4gICAgICAgICAgdGFyZ2V0WSB8fCAodGFyZ2V0WSA9IHRhcmdldCB8fCB0aGlzLnRhcmdldEVsKTtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgdGFyZ2V0WCA9PT0gdHJ1ZSA/IHdpbmRvdyA6IHF1ZXJ5KHRhcmdldFgsICRlbCksXG4gICAgICAgICAgICB0YXJnZXRZID09PSB0cnVlID8gd2luZG93IDogcXVlcnkodGFyZ2V0WSwgJGVsKVxuICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLnRyYWNrZXIgPSBuZXcgTW91c2VUcmFja2VyKCk7XG4gICAgICB9LFxuICAgICAgYmVmb3JlQ29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5jbHNEcm9wID0gdGhpcy4kcHJvcHMuY2xzRHJvcCB8fCB0aGlzLiRvcHRpb25zLmlkO1xuICAgICAgfSxcbiAgICAgIGNvbm5lY3RlZCgpIHtcbiAgICAgICAgYWRkQ2xhc3ModGhpcy4kZWwsIFwidWstZHJvcFwiLCB0aGlzLmNsc0Ryb3ApO1xuICAgICAgICBpZiAodGhpcy50b2dnbGUgJiYgIXRoaXMudGFyZ2V0RWwpIHtcbiAgICAgICAgICB0aGlzLnRhcmdldEVsID0gY3JlYXRlVG9nZ2xlQ29tcG9uZW50KHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3N0eWxlID0gcGljayh0aGlzLiRlbC5zdHlsZSwgW1wid2lkdGhcIiwgXCJoZWlnaHRcIl0pO1xuICAgICAgfSxcbiAgICAgIGRpc2Nvbm5lY3RlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBY3RpdmUoKSkge1xuICAgICAgICAgIHRoaXMuaGlkZShmYWxzZSk7XG4gICAgICAgICAgYWN0aXZlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjc3ModGhpcy4kZWwsIHRoaXMuX3N0eWxlKTtcbiAgICAgIH0sXG4gICAgICBldmVudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiY2xpY2tcIixcbiAgICAgICAgICBkZWxlZ2F0ZTogKCkgPT4gXCIudWstZHJvcC1jbG9zZVwiLFxuICAgICAgICAgIGhhbmRsZXIoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5oaWRlKGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcImNsaWNrXCIsXG4gICAgICAgICAgZGVsZWdhdGU6ICgpID0+ICdhW2hyZWYqPVwiI1wiXScsXG4gICAgICAgICAgaGFuZGxlcih7IGRlZmF1bHRQcmV2ZW50ZWQsIGN1cnJlbnQgfSkge1xuICAgICAgICAgICAgY29uc3QgeyBoYXNoIH0gPSBjdXJyZW50O1xuICAgICAgICAgICAgaWYgKCFkZWZhdWx0UHJldmVudGVkICYmIGhhc2ggJiYgaXNTYW1lU2l0ZUFuY2hvcihjdXJyZW50KSAmJiAhdGhpcy4kZWwuY29udGFpbnMoJChoYXNoKSkpIHtcbiAgICAgICAgICAgICAgdGhpcy5oaWRlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcImJlZm9yZXNjcm9sbFwiLFxuICAgICAgICAgIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwidG9nZ2xlXCIsXG4gICAgICAgICAgc2VsZjogdHJ1ZSxcbiAgICAgICAgICBoYW5kbGVyKGUsIHRvZ2dsZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNUb2dnbGVkKCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5oaWRlKGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuc2hvdyh0b2dnbGUgPT0gbnVsbCA/IHZvaWQgMCA6IHRvZ2dsZS4kZWwsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInRvZ2dsZXNob3dcIixcbiAgICAgICAgICBzZWxmOiB0cnVlLFxuICAgICAgICAgIGhhbmRsZXIoZSwgdG9nZ2xlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnNob3codG9nZ2xlID09IG51bGwgPyB2b2lkIDAgOiB0b2dnbGUuJGVsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInRvZ2dsZWhpZGVcIixcbiAgICAgICAgICBzZWxmOiB0cnVlLFxuICAgICAgICAgIGhhbmRsZXIoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKCFtYXRjaGVzKHRoaXMuJGVsLCBcIjpmb2N1cyw6aG92ZXJcIikpIHtcbiAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogYCR7cG9pbnRlckVudGVyfSBmb2N1c2luYCxcbiAgICAgICAgICBmaWx0ZXI6ICh7IG1vZGUgfSkgPT4gaW5jbHVkZXMobW9kZSwgXCJob3ZlclwiKSxcbiAgICAgICAgICBoYW5kbGVyKGUpIHtcbiAgICAgICAgICAgIGlmICghaXNUb3VjaChlKSkge1xuICAgICAgICAgICAgICB0aGlzLmNsZWFyVGltZXJzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogYCR7cG9pbnRlckxlYXZlfSBmb2N1c291dGAsXG4gICAgICAgICAgZmlsdGVyOiAoeyBtb2RlIH0pID0+IGluY2x1ZGVzKG1vZGUsIFwiaG92ZXJcIiksXG4gICAgICAgICAgaGFuZGxlcihlKSB7XG4gICAgICAgICAgICBpZiAoIWlzVG91Y2goZSkgJiYgZS5yZWxhdGVkVGFyZ2V0KSB7XG4gICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwidG9nZ2xlZFwiLFxuICAgICAgICAgIHNlbGY6IHRydWUsXG4gICAgICAgICAgaGFuZGxlcihlLCB0b2dnbGVkKSB7XG4gICAgICAgICAgICBpZiAodG9nZ2xlZCkge1xuICAgICAgICAgICAgICB0aGlzLmNsZWFyVGltZXJzKCk7XG4gICAgICAgICAgICAgIHRoaXMucG9zaXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICBzZWxmOiB0cnVlLFxuICAgICAgICAgIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICBhY3RpdmUgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy50cmFja2VyLmluaXQoKTtcbiAgICAgICAgICAgIGF0dHIodGhpcy50YXJnZXRFbCwgXCJhcmlhLWV4cGFuZGVkXCIsIHRydWUpO1xuICAgICAgICAgICAgY29uc3QgaGFuZGxlcnMgPSBbXG4gICAgICAgICAgICAgIGxpc3RlbkZvclJlc2l6ZSh0aGlzKSxcbiAgICAgICAgICAgICAgbGlzdGVuRm9yRXNjQ2xvc2UodGhpcyksXG4gICAgICAgICAgICAgIGxpc3RlbkZvckJhY2tncm91bmRDbG9zZSh0aGlzKSxcbiAgICAgICAgICAgICAgdGhpcy5hdXRvVXBkYXRlICYmIGxpc3RlbkZvclNjcm9sbCh0aGlzKSxcbiAgICAgICAgICAgICAgdGhpcy5jbG9zZU9uU2Nyb2xsICYmIGxpc3RlbkZvclNjcm9sbENsb3NlKHRoaXMpXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgb25jZSh0aGlzLiRlbCwgXCJoaWRlXCIsICgpID0+IGhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIgJiYgaGFuZGxlcigpKSwge1xuICAgICAgICAgICAgICBzZWxmOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghdGhpcy5iZ1Njcm9sbCkge1xuICAgICAgICAgICAgICBvbmNlKHRoaXMuJGVsLCBcImhpZGRlblwiLCBwcmV2ZW50QmFja2dyb3VuZFNjcm9sbCh0aGlzLiRlbCksIHsgc2VsZjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcImJlZm9yZWhpZGVcIixcbiAgICAgICAgICBzZWxmOiB0cnVlLFxuICAgICAgICAgIGhhbmRsZXI6IFwiY2xlYXJUaW1lcnNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJoaWRlXCIsXG4gICAgICAgICAgaGFuZGxlcih7IHRhcmdldCB9KSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kZWwgIT09IHRhcmdldCkge1xuICAgICAgICAgICAgICBhY3RpdmUgPSBhY3RpdmUgPT09IG51bGwgJiYgdGhpcy4kZWwuY29udGFpbnModGFyZ2V0KSAmJiB0aGlzLmlzVG9nZ2xlZCgpID8gdGhpcyA6IGFjdGl2ZTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWN0aXZlID0gdGhpcy5pc0FjdGl2ZSgpID8gbnVsbCA6IGFjdGl2ZTtcbiAgICAgICAgICAgIHRoaXMudHJhY2tlci5jYW5jZWwoKTtcbiAgICAgICAgICAgIGF0dHIodGhpcy50YXJnZXRFbCwgXCJhcmlhLWV4cGFuZGVkXCIsIG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHVwZGF0ZToge1xuICAgICAgICB3cml0ZSgpIHtcbiAgICAgICAgICBpZiAodGhpcy5pc1RvZ2dsZWQoKSAmJiAhaGFzQ2xhc3ModGhpcy4kZWwsIHRoaXMuY2xzRW50ZXIpKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbWV0aG9kczoge1xuICAgICAgICBzaG93KHRhcmdldCA9IHRoaXMudGFyZ2V0RWwsIGRlbGF5ID0gdHJ1ZSkge1xuICAgICAgICAgIGlmICh0aGlzLmlzVG9nZ2xlZCgpICYmIHRhcmdldCAmJiB0aGlzLnRhcmdldEVsICYmIHRhcmdldCAhPT0gdGhpcy50YXJnZXRFbCkge1xuICAgICAgICAgICAgdGhpcy5oaWRlKGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMudGFyZ2V0RWwgPSB0YXJnZXQ7XG4gICAgICAgICAgdGhpcy5jbGVhclRpbWVycygpO1xuICAgICAgICAgIGlmICh0aGlzLmlzQWN0aXZlKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICAgICAgaWYgKGRlbGF5ICYmIGFjdGl2ZS5pc0RlbGF5aW5nKCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5zaG93VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IG1hdGNoZXModGFyZ2V0LCBcIjpob3ZlclwiKSAmJiB0aGlzLnNob3coKSwgMTApO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcHJldjtcbiAgICAgICAgICAgIHdoaWxlIChhY3RpdmUgJiYgcHJldiAhPT0gYWN0aXZlICYmICFhY3RpdmUuJGVsLmNvbnRhaW5zKHRoaXMuJGVsKSkge1xuICAgICAgICAgICAgICBwcmV2ID0gYWN0aXZlO1xuICAgICAgICAgICAgICBhY3RpdmUuaGlkZShmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5jb250YWluZXIgJiYgcGFyZW50KHRoaXMuJGVsKSAhPT0gdGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgICAgIGFwcGVuZCh0aGlzLmNvbnRhaW5lciwgdGhpcy4kZWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnNob3dUaW1lciA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAoKSA9PiB0aGlzLnRvZ2dsZUVsZW1lbnQodGhpcy4kZWwsIHRydWUpLFxuICAgICAgICAgICAgZGVsYXkgJiYgdGhpcy5kZWxheVNob3cgfHwgMFxuICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgIGhpZGUoZGVsYXkgPSB0cnVlLCBhbmltYXRlID0gdHJ1ZSkge1xuICAgICAgICAgIGNvbnN0IGhpZGUgPSAoKSA9PiB0aGlzLnRvZ2dsZUVsZW1lbnQodGhpcy4kZWwsIGZhbHNlLCB0aGlzLmFuaW1hdGVPdXQgJiYgYW5pbWF0ZSk7XG4gICAgICAgICAgdGhpcy5jbGVhclRpbWVycygpO1xuICAgICAgICAgIHRoaXMuaXNEZWxheWVkSGlkZSA9IGRlbGF5O1xuICAgICAgICAgIGlmIChkZWxheSAmJiB0aGlzLmlzRGVsYXlpbmcoKSkge1xuICAgICAgICAgICAgdGhpcy5oaWRlVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMuaGlkZSwgNTApO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZGVsYXkgJiYgdGhpcy5kZWxheUhpZGUpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZVRpbWVyID0gc2V0VGltZW91dChoaWRlLCB0aGlzLmRlbGF5SGlkZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhpZGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNsZWFyVGltZXJzKCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnNob3dUaW1lcik7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaGlkZVRpbWVyKTtcbiAgICAgICAgICB0aGlzLnNob3dUaW1lciA9IG51bGw7XG4gICAgICAgICAgdGhpcy5oaWRlVGltZXIgPSBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBpc0FjdGl2ZSgpIHtcbiAgICAgICAgICByZXR1cm4gYWN0aXZlID09PSB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICBpc0RlbGF5aW5nKCkge1xuICAgICAgICAgIHJldHVybiBbdGhpcy4kZWwsIC4uLiQkKFwiLnVrLWRyb3BcIiwgdGhpcy4kZWwpXS5zb21lKChlbCkgPT4gdGhpcy50cmFja2VyLm1vdmVzVG8oZWwpKTtcbiAgICAgICAgfSxcbiAgICAgICAgcG9zaXRpb24oKSB7XG4gICAgICAgICAgY29uc3QgcmVzdG9yZVNjcm9sbFBvc2l0aW9uID0gc3RvcmVTY3JvbGxQb3NpdGlvbih0aGlzLiRlbCk7XG4gICAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy4kZWwsIFwidWstZHJvcC1zdGFja1wiKTtcbiAgICAgICAgICBjc3ModGhpcy4kZWwsIHRoaXMuX3N0eWxlKTtcbiAgICAgICAgICB0aGlzLiRlbC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgIGNvbnN0IHZpZXdwb3J0cyA9IHRoaXMudGFyZ2V0Lm1hcCgodGFyZ2V0KSA9PiBnZXRWaWV3cG9ydCQxKHRoaXMuJGVsLCB0YXJnZXQpKTtcbiAgICAgICAgICBjb25zdCB2aWV3cG9ydE9mZnNldCA9IHRoaXMuZ2V0Vmlld3BvcnRPZmZzZXQodGhpcy4kZWwpO1xuICAgICAgICAgIGNvbnN0IGRpcnMgPSBbXG4gICAgICAgICAgICBbMCwgW1wieFwiLCBcIndpZHRoXCIsIFwibGVmdFwiLCBcInJpZ2h0XCJdXSxcbiAgICAgICAgICAgIFsxLCBbXCJ5XCIsIFwiaGVpZ2h0XCIsIFwidG9wXCIsIFwiYm90dG9tXCJdXVxuICAgICAgICAgIF07XG4gICAgICAgICAgZm9yIChjb25zdCBbaSwgW2F4aXMsIHByb3BdXSBvZiBkaXJzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5heGlzICE9PSBheGlzICYmIGluY2x1ZGVzKFtheGlzLCB0cnVlXSwgdGhpcy5zdHJldGNoKSkge1xuICAgICAgICAgICAgICBjc3ModGhpcy4kZWwsIHtcbiAgICAgICAgICAgICAgICBbcHJvcF06IE1hdGgubWluKFxuICAgICAgICAgICAgICAgICAgb2Zmc2V0KHRoaXMuYm91bmRhcnlbaV0pW3Byb3BdLFxuICAgICAgICAgICAgICAgICAgdmlld3BvcnRzW2ldW3Byb3BdIC0gMiAqIHZpZXdwb3J0T2Zmc2V0XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBbYG92ZXJmbG93LSR7YXhpc31gXTogXCJhdXRvXCJcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG1heFdpZHRoID0gdmlld3BvcnRzWzBdLndpZHRoIC0gMiAqIHZpZXdwb3J0T2Zmc2V0O1xuICAgICAgICAgIHRoaXMuJGVsLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgIGNzcyh0aGlzLiRlbCwgXCJtYXhXaWR0aFwiLCBcIlwiKTtcbiAgICAgICAgICBpZiAodGhpcy4kZWwub2Zmc2V0V2lkdGggPiBtYXhXaWR0aCkge1xuICAgICAgICAgICAgYWRkQ2xhc3ModGhpcy4kZWwsIFwidWstZHJvcC1zdGFja1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY3NzKHRoaXMuJGVsLCBcIm1heFdpZHRoXCIsIG1heFdpZHRoKTtcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uQXQodGhpcy4kZWwsIHRoaXMudGFyZ2V0LCB0aGlzLmJvdW5kYXJ5KTtcbiAgICAgICAgICBmb3IgKGNvbnN0IFtpLCBbYXhpcywgcHJvcCwgc3RhcnQsIGVuZF1dIG9mIGRpcnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmF4aXMgPT09IGF4aXMgJiYgaW5jbHVkZXMoW2F4aXMsIHRydWVdLCB0aGlzLnN0cmV0Y2gpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uT2Zmc2V0ID0gTWF0aC5hYnModGhpcy5nZXRQb3NpdGlvbk9mZnNldCgpKTtcbiAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0T2Zmc2V0ID0gb2Zmc2V0KHRoaXMudGFyZ2V0W2ldKTtcbiAgICAgICAgICAgICAgY29uc3QgZWxPZmZzZXQgPSBvZmZzZXQodGhpcy4kZWwpO1xuICAgICAgICAgICAgICBjc3ModGhpcy4kZWwsIHtcbiAgICAgICAgICAgICAgICBbcHJvcF06ICh0YXJnZXRPZmZzZXRbc3RhcnRdID4gZWxPZmZzZXRbc3RhcnRdID8gdGFyZ2V0T2Zmc2V0W3RoaXMuaW5zZXQgPyBlbmQgOiBzdGFydF0gLSBNYXRoLm1heChcbiAgICAgICAgICAgICAgICAgIG9mZnNldCh0aGlzLmJvdW5kYXJ5W2ldKVtzdGFydF0sXG4gICAgICAgICAgICAgICAgICB2aWV3cG9ydHNbaV1bc3RhcnRdICsgdmlld3BvcnRPZmZzZXRcbiAgICAgICAgICAgICAgICApIDogTWF0aC5taW4oXG4gICAgICAgICAgICAgICAgICBvZmZzZXQodGhpcy5ib3VuZGFyeVtpXSlbZW5kXSxcbiAgICAgICAgICAgICAgICAgIHZpZXdwb3J0c1tpXVtlbmRdIC0gdmlld3BvcnRPZmZzZXRcbiAgICAgICAgICAgICAgICApIC0gdGFyZ2V0T2Zmc2V0W3RoaXMuaW5zZXQgPyBzdGFydCA6IGVuZF0pIC0gcG9zaXRpb25PZmZzZXQsXG4gICAgICAgICAgICAgICAgW2BvdmVyZmxvdy0ke2F4aXN9YF06IFwiYXV0b1wiXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uQXQodGhpcy4kZWwsIHRoaXMudGFyZ2V0LCB0aGlzLmJvdW5kYXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzdG9yZVNjcm9sbFBvc2l0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGZ1bmN0aW9uIGdldFZpZXdwb3J0JDEoZWwsIHRhcmdldCkge1xuICAgICAgcmV0dXJuIG9mZnNldFZpZXdwb3J0KG92ZXJmbG93UGFyZW50cyh0YXJnZXQpLmZpbmQoKHBhcmVudDIpID0+IHBhcmVudDIuY29udGFpbnMoZWwpKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRvZ2dsZUNvbXBvbmVudChkcm9wKSB7XG4gICAgICBjb25zdCB7ICRlbCB9ID0gZHJvcC4kY3JlYXRlKFwidG9nZ2xlXCIsIHF1ZXJ5KGRyb3AudG9nZ2xlLCBkcm9wLiRlbCksIHtcbiAgICAgICAgdGFyZ2V0OiBkcm9wLiRlbCxcbiAgICAgICAgbW9kZTogZHJvcC5tb2RlXG4gICAgICB9KTtcbiAgICAgIGF0dHIoJGVsLCBcImFyaWEtaGFzcG9wdXBcIiwgdHJ1ZSk7XG4gICAgICByZXR1cm4gJGVsO1xuICAgIH1cbiAgICBmdW5jdGlvbiBsaXN0ZW5Gb3JSZXNpemUoZHJvcCkge1xuICAgICAgY29uc3QgdXBkYXRlID0gKCkgPT4gZHJvcC4kZW1pdCgpO1xuICAgICAgY29uc3Qgb2ZmID0gW1xuICAgICAgICBvYnNlcnZlVmlld3BvcnRSZXNpemUodXBkYXRlKSxcbiAgICAgICAgb2JzZXJ2ZVJlc2l6ZShvdmVyZmxvd1BhcmVudHMoZHJvcC4kZWwpLmNvbmNhdChkcm9wLnRhcmdldCksIHVwZGF0ZSlcbiAgICAgIF07XG4gICAgICByZXR1cm4gKCkgPT4gb2ZmLm1hcCgob2JzZXJ2ZXIpID0+IG9ic2VydmVyLmRpc2Nvbm5lY3QoKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxpc3RlbkZvclNjcm9sbChkcm9wLCBmbiA9ICgpID0+IGRyb3AuJGVtaXQoKSkge1xuICAgICAgcmV0dXJuIG9uKFtkb2N1bWVudCwgLi4ub3ZlcmZsb3dQYXJlbnRzKGRyb3AuJGVsKV0sIFwic2Nyb2xsXCIsIGZuLCB7XG4gICAgICAgIHBhc3NpdmU6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBsaXN0ZW5Gb3JFc2NDbG9zZShkcm9wKSB7XG4gICAgICByZXR1cm4gb24oZG9jdW1lbnQsIFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBrZXlNYXAuRVNDKSB7XG4gICAgICAgICAgZHJvcC5oaWRlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxpc3RlbkZvclNjcm9sbENsb3NlKGRyb3ApIHtcbiAgICAgIHJldHVybiBsaXN0ZW5Gb3JTY3JvbGwoZHJvcCwgKCkgPT4gZHJvcC5oaWRlKGZhbHNlKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxpc3RlbkZvckJhY2tncm91bmRDbG9zZShkcm9wKSB7XG4gICAgICByZXR1cm4gb24oZG9jdW1lbnQsIHBvaW50ZXJEb3duJDEsICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgIGlmIChkcm9wLiRlbC5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG9uY2UoXG4gICAgICAgICAgZG9jdW1lbnQsXG4gICAgICAgICAgYCR7cG9pbnRlclVwJDF9ICR7cG9pbnRlckNhbmNlbH0gc2Nyb2xsYCxcbiAgICAgICAgICAoeyBkZWZhdWx0UHJldmVudGVkLCB0eXBlLCB0YXJnZXQ6IG5ld1RhcmdldCB9KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAoIWRlZmF1bHRQcmV2ZW50ZWQgJiYgdHlwZSA9PT0gcG9pbnRlclVwJDEgJiYgdGFyZ2V0ID09PSBuZXdUYXJnZXQgJiYgISgoX2EgPSBkcm9wLnRhcmdldEVsKSA9PSBudWxsID8gdm9pZCAwIDogX2EuY29udGFpbnModGFyZ2V0KSkpIHtcbiAgICAgICAgICAgICAgZHJvcC5oaWRlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBEcm9wbmF2ID0ge1xuICAgICAgbWl4aW5zOiBbQ2xhc3MsIENvbnRhaW5lcl0sXG4gICAgICBwcm9wczoge1xuICAgICAgICBhbGlnbjogU3RyaW5nLFxuICAgICAgICBjbHNEcm9wOiBTdHJpbmcsXG4gICAgICAgIGJvdW5kYXJ5OiBCb29sZWFuLFxuICAgICAgICBkcm9wYmFyOiBCb29sZWFuLFxuICAgICAgICBkcm9wYmFyQW5jaG9yOiBCb29sZWFuLFxuICAgICAgICBkdXJhdGlvbjogTnVtYmVyLFxuICAgICAgICBtb2RlOiBCb29sZWFuLFxuICAgICAgICBvZmZzZXQ6IEJvb2xlYW4sXG4gICAgICAgIHN0cmV0Y2g6IEJvb2xlYW4sXG4gICAgICAgIGRlbGF5U2hvdzogQm9vbGVhbixcbiAgICAgICAgZGVsYXlIaWRlOiBCb29sZWFuLFxuICAgICAgICB0YXJnZXQ6IEJvb2xlYW4sXG4gICAgICAgIHRhcmdldFg6IEJvb2xlYW4sXG4gICAgICAgIHRhcmdldFk6IEJvb2xlYW4sXG4gICAgICAgIGFuaW1hdGlvbjogQm9vbGVhbixcbiAgICAgICAgYW5pbWF0ZU91dDogQm9vbGVhbixcbiAgICAgICAgY2xvc2VPblNjcm9sbDogQm9vbGVhblxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgYWxpZ246IGlzUnRsID8gXCJyaWdodFwiIDogXCJsZWZ0XCIsXG4gICAgICAgIGNsc0Ryb3A6IFwidWstZHJvcGRvd25cIixcbiAgICAgICAgY2xzRHJvcGJhcjogXCJ1ay1kcm9wbmF2LWRyb3BiYXJcIixcbiAgICAgICAgYm91bmRhcnk6IHRydWUsXG4gICAgICAgIGRyb3BiYXI6IGZhbHNlLFxuICAgICAgICBkcm9wYmFyQW5jaG9yOiBmYWxzZSxcbiAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgY29udGFpbmVyOiBmYWxzZSxcbiAgICAgICAgc2VsTmF2SXRlbTogXCI+IGxpID4gYSwgPiB1bCA+IGxpID4gYVwiXG4gICAgICB9LFxuICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgZHJvcGJhckFuY2hvcjogKHsgZHJvcGJhckFuY2hvciB9LCAkZWwpID0+IHF1ZXJ5KGRyb3BiYXJBbmNob3IsICRlbCkgfHwgJGVsLFxuICAgICAgICBkcm9wYmFyKHsgZHJvcGJhciB9KSB7XG4gICAgICAgICAgaWYgKCFkcm9wYmFyKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZHJvcGJhciA9IHRoaXMuX2Ryb3BiYXIgfHwgcXVlcnkoZHJvcGJhciwgdGhpcy4kZWwpIHx8ICQoYCsgLiR7dGhpcy5jbHNEcm9wYmFyfWAsIHRoaXMuJGVsKTtcbiAgICAgICAgICByZXR1cm4gZHJvcGJhciA/IGRyb3BiYXIgOiB0aGlzLl9kcm9wYmFyID0gJChcIjxkaXY+PC9kaXY+XCIpO1xuICAgICAgICB9LFxuICAgICAgICBkcm9wQ29udGFpbmVyKF8sICRlbCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lciB8fCAkZWw7XG4gICAgICAgIH0sXG4gICAgICAgIGRyb3Bkb3ducyh7IGNsc0Ryb3AgfSwgJGVsKSB7XG4gICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgIGNvbnN0IGRyb3Bkb3ducyA9ICQkKGAuJHtjbHNEcm9wfWAsICRlbCk7XG4gICAgICAgICAgaWYgKHRoaXMuZHJvcENvbnRhaW5lciAhPT0gJGVsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsIG9mICQkKGAuJHtjbHNEcm9wfWAsIHRoaXMuZHJvcENvbnRhaW5lcikpIHtcbiAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gKF9hID0gdGhpcy5nZXREcm9wZG93bihlbCkpID09IG51bGwgPyB2b2lkIDAgOiBfYS50YXJnZXRFbDtcbiAgICAgICAgICAgICAgaWYgKCFpbmNsdWRlcyhkcm9wZG93bnMsIGVsKSAmJiB0YXJnZXQgJiYgdGhpcy4kZWwuY29udGFpbnModGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIGRyb3Bkb3ducy5wdXNoKGVsKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZHJvcGRvd25zO1xuICAgICAgICB9LFxuICAgICAgICBpdGVtcyh7IHNlbE5hdkl0ZW0gfSwgJGVsKSB7XG4gICAgICAgICAgcmV0dXJuICQkKHNlbE5hdkl0ZW0sICRlbCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB3YXRjaDoge1xuICAgICAgICBkcm9wYmFyKGRyb3BiYXIpIHtcbiAgICAgICAgICBhZGRDbGFzcyhcbiAgICAgICAgICAgIGRyb3BiYXIsXG4gICAgICAgICAgICBcInVrLWRyb3BiYXJcIixcbiAgICAgICAgICAgIFwidWstZHJvcGJhci10b3BcIixcbiAgICAgICAgICAgIHRoaXMuY2xzRHJvcGJhcixcbiAgICAgICAgICAgIGB1ay0ke3RoaXMuJG9wdGlvbnMubmFtZX0tZHJvcGJhcmBcbiAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgICBkcm9wZG93bnMoKSB7XG4gICAgICAgICAgdGhpcy5pbml0aWFsaXplRHJvcGRvd25zKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjb25uZWN0ZWQoKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZURyb3Bkb3ducygpO1xuICAgICAgfSxcbiAgICAgIGRpc2Nvbm5lY3RlZCgpIHtcbiAgICAgICAgcmVtb3ZlJDEodGhpcy5fZHJvcGJhcik7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9kcm9wYmFyO1xuICAgICAgfSxcbiAgICAgIGV2ZW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJtb3VzZW92ZXIgZm9jdXNpblwiLFxuICAgICAgICAgIGRlbGVnYXRlOiAoeyBzZWxOYXZJdGVtIH0pID0+IHNlbE5hdkl0ZW0sXG4gICAgICAgICAgaGFuZGxlcih7IGN1cnJlbnQgfSkge1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlMiA9IHRoaXMuZ2V0QWN0aXZlKCk7XG4gICAgICAgICAgICBpZiAoYWN0aXZlMiAmJiBpbmNsdWRlcyhhY3RpdmUyLm1vZGUsIFwiaG92ZXJcIikgJiYgYWN0aXZlMi50YXJnZXRFbCAmJiAhY3VycmVudC5jb250YWlucyhhY3RpdmUyLnRhcmdldEVsKSAmJiAhYWN0aXZlMi5pc0RlbGF5aW5nKCkpIHtcbiAgICAgICAgICAgICAgYWN0aXZlMi5oaWRlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcImtleWRvd25cIixcbiAgICAgICAgICBzZWxmOiB0cnVlLFxuICAgICAgICAgIGRlbGVnYXRlOiAoeyBzZWxOYXZJdGVtIH0pID0+IHNlbE5hdkl0ZW0sXG4gICAgICAgICAgaGFuZGxlcihlKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBjb25zdCB7IGN1cnJlbnQsIGtleUNvZGUgfSA9IGU7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmUyID0gdGhpcy5nZXRBY3RpdmUoKTtcbiAgICAgICAgICAgIGlmIChrZXlDb2RlID09PSBrZXlNYXAuRE9XTiAmJiAoYWN0aXZlMiA9PSBudWxsID8gdm9pZCAwIDogYWN0aXZlMi50YXJnZXRFbCkgPT09IGN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAoX2EgPSAkKHNlbEZvY3VzYWJsZSwgYWN0aXZlMi4kZWwpKSA9PSBudWxsID8gdm9pZCAwIDogX2EuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhbmRsZU5hdkl0ZW1OYXZpZ2F0aW9uKGUsIHRoaXMuaXRlbXMsIGFjdGl2ZTIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwia2V5ZG93blwiLFxuICAgICAgICAgIGVsOiAoeyBkcm9wQ29udGFpbmVyIH0pID0+IGRyb3BDb250YWluZXIsXG4gICAgICAgICAgZGVsZWdhdGU6ICh7IGNsc0Ryb3AgfSkgPT4gYC4ke2Nsc0Ryb3B9YCxcbiAgICAgICAgICBoYW5kbGVyKGUpIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGNvbnN0IHsgY3VycmVudCwga2V5Q29kZSwgdGFyZ2V0IH0gPSBlO1xuICAgICAgICAgICAgaWYgKGlzSW5wdXQodGFyZ2V0KSB8fCAhaW5jbHVkZXModGhpcy5kcm9wZG93bnMsIGN1cnJlbnQpKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZTIgPSB0aGlzLmdldEFjdGl2ZSgpO1xuICAgICAgICAgICAgbGV0IG5leHQgPSAtMTtcbiAgICAgICAgICAgIGlmIChrZXlDb2RlID09PSBrZXlNYXAuSE9NRSkge1xuICAgICAgICAgICAgICBuZXh0ID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0ga2V5TWFwLkVORCkge1xuICAgICAgICAgICAgICBuZXh0ID0gXCJsYXN0XCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IGtleU1hcC5VUCkge1xuICAgICAgICAgICAgICBuZXh0ID0gXCJwcmV2aW91c1wiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBrZXlNYXAuRE9XTikge1xuICAgICAgICAgICAgICBuZXh0ID0gXCJuZXh0XCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IGtleU1hcC5FU0MpIHtcbiAgICAgICAgICAgICAgKF9hID0gYWN0aXZlMi50YXJnZXRFbCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAofm5leHQpIHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9ICQkKHNlbEZvY3VzYWJsZSwgY3VycmVudCk7XG4gICAgICAgICAgICAgIGVsZW1lbnRzW2dldEluZGV4KFxuICAgICAgICAgICAgICAgIG5leHQsXG4gICAgICAgICAgICAgICAgZWxlbWVudHMsXG4gICAgICAgICAgICAgICAgZmluZEluZGV4KGVsZW1lbnRzLCAoZWwpID0+IG1hdGNoZXMoZWwsIFwiOmZvY3VzXCIpKVxuICAgICAgICAgICAgICApXS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGFuZGxlTmF2SXRlbU5hdmlnYXRpb24oZSwgdGhpcy5pdGVtcywgYWN0aXZlMik7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJtb3VzZWxlYXZlXCIsXG4gICAgICAgICAgZWw6ICh7IGRyb3BiYXIgfSkgPT4gZHJvcGJhcixcbiAgICAgICAgICBmaWx0ZXI6ICh7IGRyb3BiYXIgfSkgPT4gZHJvcGJhcixcbiAgICAgICAgICBoYW5kbGVyKCkge1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlMiA9IHRoaXMuZ2V0QWN0aXZlKCk7XG4gICAgICAgICAgICBpZiAoYWN0aXZlMiAmJiBpbmNsdWRlcyhhY3RpdmUyLm1vZGUsIFwiaG92ZXJcIikgJiYgIXRoaXMuZHJvcGRvd25zLnNvbWUoKGVsKSA9PiBtYXRjaGVzKGVsLCBcIjpob3ZlclwiKSkpIHtcbiAgICAgICAgICAgICAgYWN0aXZlMi5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJiZWZvcmVzaG93XCIsXG4gICAgICAgICAgZWw6ICh7IGRyb3BDb250YWluZXIgfSkgPT4gZHJvcENvbnRhaW5lcixcbiAgICAgICAgICBmaWx0ZXI6ICh7IGRyb3BiYXIgfSkgPT4gZHJvcGJhcixcbiAgICAgICAgICBoYW5kbGVyKHsgdGFyZ2V0IH0pIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0Ryb3BiYXJEcm9wKHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZHJvcGJhci5wcmV2aW91c0VsZW1lbnRTaWJsaW5nICE9PSB0aGlzLmRyb3BiYXJBbmNob3IpIHtcbiAgICAgICAgICAgICAgYWZ0ZXIodGhpcy5kcm9wYmFyQW5jaG9yLCB0aGlzLmRyb3BiYXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWRkQ2xhc3ModGFyZ2V0LCBgJHt0aGlzLmNsc0Ryb3B9LWRyb3BiYXJgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICBlbDogKHsgZHJvcENvbnRhaW5lciB9KSA9PiBkcm9wQ29udGFpbmVyLFxuICAgICAgICAgIGZpbHRlcjogKHsgZHJvcGJhciB9KSA9PiBkcm9wYmFyLFxuICAgICAgICAgIGhhbmRsZXIoeyB0YXJnZXQgfSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzRHJvcGJhckRyb3AodGFyZ2V0KSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkcm9wID0gdGhpcy5nZXREcm9wZG93bih0YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgYWRqdXN0SGVpZ2h0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBtYXhCb3R0b20gPSBNYXRoLm1heChcbiAgICAgICAgICAgICAgICAuLi5wYXJlbnRzKHRhcmdldCwgYC4ke3RoaXMuY2xzRHJvcH1gKS5jb25jYXQodGFyZ2V0KS5tYXAoKGVsKSA9PiBvZmZzZXQoZWwpLmJvdHRvbSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgb2Zmc2V0KHRoaXMuZHJvcGJhciwge1xuICAgICAgICAgICAgICAgIGxlZnQ6IG9mZnNldCh0aGlzLmRyb3BiYXIpLmxlZnQsXG4gICAgICAgICAgICAgICAgdG9wOiB0aGlzLmdldERyb3BiYXJPZmZzZXQoZHJvcC5nZXRQb3NpdGlvbk9mZnNldCgpKVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uVG8oXG4gICAgICAgICAgICAgICAgbWF4Qm90dG9tIC0gb2Zmc2V0KHRoaXMuZHJvcGJhcikudG9wICsgdG9GbG9hdChjc3ModGFyZ2V0LCBcIm1hcmdpbkJvdHRvbVwiKSksXG4gICAgICAgICAgICAgICAgdGFyZ2V0XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBvYnNlcnZlUmVzaXplKFtkcm9wLiRlbCwgLi4uZHJvcC50YXJnZXRdLCBhZGp1c3RIZWlnaHQpO1xuICAgICAgICAgICAgYWRqdXN0SGVpZ2h0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJiZWZvcmVoaWRlXCIsXG4gICAgICAgICAgZWw6ICh7IGRyb3BDb250YWluZXIgfSkgPT4gZHJvcENvbnRhaW5lcixcbiAgICAgICAgICBmaWx0ZXI6ICh7IGRyb3BiYXIgfSkgPT4gZHJvcGJhcixcbiAgICAgICAgICBoYW5kbGVyKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZTIgPSB0aGlzLmdldEFjdGl2ZSgpO1xuICAgICAgICAgICAgaWYgKG1hdGNoZXModGhpcy5kcm9wYmFyLCBcIjpob3ZlclwiKSAmJiBhY3RpdmUyLiRlbCA9PT0gZS50YXJnZXQgJiYgdGhpcy5pc0Ryb3BiYXJEcm9wKGFjdGl2ZTIuJGVsKSAmJiBpbmNsdWRlcyhhY3RpdmUyLm1vZGUsIFwiaG92ZXJcIikgJiYgYWN0aXZlMi5pc0RlbGF5ZWRIaWRlICYmICF0aGlzLml0ZW1zLnNvbWUoKGVsKSA9PiBhY3RpdmUyLnRhcmdldEVsICE9PSBlbCAmJiBtYXRjaGVzKGVsLCBcIjpmb2N1c1wiKSkpIHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiaGlkZVwiLFxuICAgICAgICAgIGVsOiAoeyBkcm9wQ29udGFpbmVyIH0pID0+IGRyb3BDb250YWluZXIsXG4gICAgICAgICAgZmlsdGVyOiAoeyBkcm9wYmFyIH0pID0+IGRyb3BiYXIsXG4gICAgICAgICAgaGFuZGxlcih7IHRhcmdldCB9KSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNEcm9wYmFyRHJvcCh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIChfYSA9IHRoaXMuX29ic2VydmVyKSA9PSBudWxsID8gdm9pZCAwIDogX2EuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlMiA9IHRoaXMuZ2V0QWN0aXZlKCk7XG4gICAgICAgICAgICBpZiAoIWFjdGl2ZTIgfHwgYWN0aXZlMi4kZWwgPT09IHRhcmdldCkge1xuICAgICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25UbygwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBtZXRob2RzOiB7XG4gICAgICAgIGdldEFjdGl2ZSgpIHtcbiAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgcmV0dXJuIGluY2x1ZGVzKHRoaXMuZHJvcGRvd25zLCAoX2EgPSBhY3RpdmUpID09IG51bGwgPyB2b2lkIDAgOiBfYS4kZWwpICYmIGFjdGl2ZTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgdHJhbnNpdGlvblRvKG5ld0hlaWdodCwgZWwpIHtcbiAgICAgICAgICBjb25zdCB7IGRyb3BiYXIgfSA9IHRoaXM7XG4gICAgICAgICAgY29uc3Qgb2xkSGVpZ2h0ID0gaGVpZ2h0KGRyb3BiYXIpO1xuICAgICAgICAgIGVsID0gb2xkSGVpZ2h0IDwgbmV3SGVpZ2h0ICYmIGVsO1xuICAgICAgICAgIGF3YWl0IFRyYW5zaXRpb24uY2FuY2VsKFtlbCwgZHJvcGJhcl0pO1xuICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgY29uc3QgZGlmZiA9IG9mZnNldChlbCkudG9wIC0gb2Zmc2V0KGRyb3BiYXIpLnRvcCAtIG9sZEhlaWdodDtcbiAgICAgICAgICAgIGlmIChkaWZmID4gMCkge1xuICAgICAgICAgICAgICBjc3MoZWwsIFwidHJhbnNpdGlvbkRlbGF5XCIsIGAke2RpZmYgLyBuZXdIZWlnaHQgKiB0aGlzLmR1cmF0aW9ufW1zYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNzcyhlbCwgXCJjbGlwUGF0aFwiLCBgcG9seWdvbigwIDAsMTAwJSAwLDEwMCUgJHtvbGRIZWlnaHR9cHgsMCAke29sZEhlaWdodH1weClgKTtcbiAgICAgICAgICBoZWlnaHQoZHJvcGJhciwgb2xkSGVpZ2h0KTtcbiAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBUcmFuc2l0aW9uLnN0YXJ0KGRyb3BiYXIsIHsgaGVpZ2h0OiBuZXdIZWlnaHQgfSwgdGhpcy5kdXJhdGlvbiksXG4gICAgICAgICAgICBUcmFuc2l0aW9uLnN0YXJ0KFxuICAgICAgICAgICAgICBlbCxcbiAgICAgICAgICAgICAgeyBjbGlwUGF0aDogYHBvbHlnb24oMCAwLDEwMCUgMCwxMDAlICR7bmV3SGVpZ2h0fXB4LDAgJHtuZXdIZWlnaHR9cHgpYCB9LFxuICAgICAgICAgICAgICB0aGlzLmR1cmF0aW9uXG4gICAgICAgICAgICApLmZpbmFsbHkoKCkgPT4gY3NzKGVsLCB7IGNsaXBQYXRoOiBcIlwiLCB0cmFuc2l0aW9uRGVsYXk6IFwiXCIgfSkpXG4gICAgICAgICAgXSkuY2F0Y2gobm9vcCk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldERyb3Bkb3duKGVsKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuJGdldENvbXBvbmVudChlbCwgXCJkcm9wXCIpIHx8IHRoaXMuJGdldENvbXBvbmVudChlbCwgXCJkcm9wZG93blwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNEcm9wYmFyRHJvcChlbCkge1xuICAgICAgICAgIHJldHVybiBpbmNsdWRlcyh0aGlzLmRyb3Bkb3ducywgZWwpICYmIGhhc0NsYXNzKGVsLCB0aGlzLmNsc0Ryb3ApO1xuICAgICAgICB9LFxuICAgICAgICBnZXREcm9wYmFyT2Zmc2V0KG9mZnNldFRvcCkge1xuICAgICAgICAgIGNvbnN0IHsgJGVsLCB0YXJnZXQsIHRhcmdldFkgfSA9IHRoaXM7XG4gICAgICAgICAgY29uc3QgeyB0b3AsIGhlaWdodDogaGVpZ2h0MiB9ID0gb2Zmc2V0KHF1ZXJ5KHRhcmdldFkgfHwgdGFyZ2V0IHx8ICRlbCwgJGVsKSk7XG4gICAgICAgICAgcmV0dXJuIHRvcCArIGhlaWdodDIgKyBvZmZzZXRUb3A7XG4gICAgICAgIH0sXG4gICAgICAgIGluaXRpYWxpemVEcm9wZG93bnMoKSB7XG4gICAgICAgICAgdGhpcy4kY3JlYXRlKFxuICAgICAgICAgICAgXCJkcm9wXCIsXG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3ducy5maWx0ZXIoKGVsKSA9PiAhdGhpcy5nZXREcm9wZG93bihlbCkpLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAuLi50aGlzLiRwcm9wcyxcbiAgICAgICAgICAgICAgZmxpcDogZmFsc2UsXG4gICAgICAgICAgICAgIHNoaWZ0OiB0cnVlLFxuICAgICAgICAgICAgICBwb3M6IGBib3R0b20tJHt0aGlzLmFsaWdufWAsXG4gICAgICAgICAgICAgIGJvdW5kYXJ5OiB0aGlzLmJvdW5kYXJ5ID09PSB0cnVlID8gdGhpcy4kZWwgOiB0aGlzLmJvdW5kYXJ5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgZnVuY3Rpb24gaGFuZGxlTmF2SXRlbU5hdmlnYXRpb24oZSwgdG9nZ2xlcywgYWN0aXZlMikge1xuICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICBjb25zdCB7IGN1cnJlbnQsIGtleUNvZGUgfSA9IGU7XG4gICAgICBsZXQgbmV4dCA9IC0xO1xuICAgICAgaWYgKGtleUNvZGUgPT09IGtleU1hcC5IT01FKSB7XG4gICAgICAgIG5leHQgPSAwO1xuICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBrZXlNYXAuRU5EKSB7XG4gICAgICAgIG5leHQgPSBcImxhc3RcIjtcbiAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0ga2V5TWFwLkxFRlQpIHtcbiAgICAgICAgbmV4dCA9IFwicHJldmlvdXNcIjtcbiAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0ga2V5TWFwLlJJR0hUKSB7XG4gICAgICAgIG5leHQgPSBcIm5leHRcIjtcbiAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0ga2V5TWFwLlRBQikge1xuICAgICAgICAoX2EgPSBhY3RpdmUyLnRhcmdldEVsKSA9PSBudWxsID8gdm9pZCAwIDogX2EuZm9jdXMoKTtcbiAgICAgICAgKF9iID0gYWN0aXZlMi5oaWRlKSA9PSBudWxsID8gdm9pZCAwIDogX2IuY2FsbChhY3RpdmUyLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICBpZiAofm5leHQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAoX2MgPSBhY3RpdmUyLmhpZGUpID09IG51bGwgPyB2b2lkIDAgOiBfYy5jYWxsKGFjdGl2ZTIsIGZhbHNlKTtcbiAgICAgICAgdG9nZ2xlc1tnZXRJbmRleChuZXh0LCB0b2dnbGVzLCB0b2dnbGVzLmluZGV4T2YoYWN0aXZlMi50YXJnZXRFbCB8fCBjdXJyZW50KSldLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGZvcm1DdXN0b20gPSB7XG4gICAgICBtaXhpbnM6IFtDbGFzc10sXG4gICAgICBhcmdzOiBcInRhcmdldFwiLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgdGFyZ2V0OiBCb29sZWFuXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICB0YXJnZXQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgaW5wdXQ6IChfLCAkZWwpID0+ICQoc2VsSW5wdXQsICRlbCksXG4gICAgICAgIHN0YXRlKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmlucHV0Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgfSxcbiAgICAgICAgdGFyZ2V0KHsgdGFyZ2V0IH0sICRlbCkge1xuICAgICAgICAgIHJldHVybiB0YXJnZXQgJiYgKHRhcmdldCA9PT0gdHJ1ZSAmJiBwYXJlbnQodGhpcy5pbnB1dCkgPT09ICRlbCAmJiB0aGlzLmlucHV0Lm5leHRFbGVtZW50U2libGluZyB8fCAkKHRhcmdldCwgJGVsKSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB1cGRhdGUoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgeyB0YXJnZXQsIGlucHV0IH0gPSB0aGlzO1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgb3B0aW9uO1xuICAgICAgICBjb25zdCBwcm9wID0gaXNJbnB1dCh0YXJnZXQpID8gXCJ2YWx1ZVwiIDogXCJ0ZXh0Q29udGVudFwiO1xuICAgICAgICBjb25zdCBwcmV2ID0gdGFyZ2V0W3Byb3BdO1xuICAgICAgICBjb25zdCB2YWx1ZSA9ICgoX2EgPSBpbnB1dC5maWxlcykgPT0gbnVsbCA/IHZvaWQgMCA6IF9hWzBdKSA/IGlucHV0LmZpbGVzWzBdLm5hbWUgOiBtYXRjaGVzKGlucHV0LCBcInNlbGVjdFwiKSAmJiAob3B0aW9uID0gJCQoXCJvcHRpb25cIiwgaW5wdXQpLmZpbHRlcigoZWwpID0+IGVsLnNlbGVjdGVkKVswXSkgPyBvcHRpb24udGV4dENvbnRlbnQgOiBpbnB1dC52YWx1ZTtcbiAgICAgICAgaWYgKHByZXYgIT09IHZhbHVlKSB7XG4gICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBldmVudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiY2hhbmdlXCIsXG4gICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInJlc2V0XCIsXG4gICAgICAgICAgZWw6ICh7ICRlbCB9KSA9PiAkZWwuY2xvc2VzdChcImZvcm1cIiksXG4gICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuXG4gICAgdmFyIGdyaWQgPSB7XG4gICAgICBleHRlbmRzOiBNYXJnaW4sXG4gICAgICBtaXhpbnM6IFtDbGFzc10sXG4gICAgICBuYW1lOiBcImdyaWRcIixcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIG1hc29ucnk6IEJvb2xlYW4sXG4gICAgICAgIHBhcmFsbGF4OiBTdHJpbmcsXG4gICAgICAgIHBhcmFsbGF4U3RhcnQ6IFN0cmluZyxcbiAgICAgICAgcGFyYWxsYXhFbmQ6IFN0cmluZyxcbiAgICAgICAgcGFyYWxsYXhKdXN0aWZ5OiBCb29sZWFuXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBtYXJnaW46IFwidWstZ3JpZC1tYXJnaW5cIixcbiAgICAgICAgY2xzU3RhY2s6IFwidWstZ3JpZC1zdGFja1wiLFxuICAgICAgICBtYXNvbnJ5OiBmYWxzZSxcbiAgICAgICAgcGFyYWxsYXg6IDAsXG4gICAgICAgIHBhcmFsbGF4U3RhcnQ6IDAsXG4gICAgICAgIHBhcmFsbGF4RW5kOiAwLFxuICAgICAgICBwYXJhbGxheEp1c3RpZnk6IGZhbHNlXG4gICAgICB9LFxuICAgICAgY29ubmVjdGVkKCkge1xuICAgICAgICB0aGlzLm1hc29ucnkgJiYgYWRkQ2xhc3ModGhpcy4kZWwsIFwidWstZmxleC10b3BcIiwgXCJ1ay1mbGV4LXdyYXAtdG9wXCIpO1xuICAgICAgfSxcbiAgICAgIG9ic2VydmU6IHNjcm9sbCQxKHsgZmlsdGVyOiAoeyBwYXJhbGxheCwgcGFyYWxsYXhKdXN0aWZ5IH0pID0+IHBhcmFsbGF4IHx8IHBhcmFsbGF4SnVzdGlmeSB9KSxcbiAgICAgIHVwZGF0ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgd3JpdGUoeyByb3dzIH0pIHtcbiAgICAgICAgICAgIHRvZ2dsZUNsYXNzKHRoaXMuJGVsLCB0aGlzLmNsc1N0YWNrLCAhcm93cy5zb21lKChyb3cpID0+IHJvdy5sZW5ndGggPiAxKSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBldmVudHM6IFtcInJlc2l6ZVwiXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcmVhZChkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCB7IHJvd3MgfSA9IGRhdGE7XG4gICAgICAgICAgICBsZXQgeyBtYXNvbnJ5LCBwYXJhbGxheCwgcGFyYWxsYXhKdXN0aWZ5LCBtYXJnaW4gfSA9IHRoaXM7XG4gICAgICAgICAgICBwYXJhbGxheCA9IE1hdGgubWF4KDAsIHRvUHgocGFyYWxsYXgpKTtcbiAgICAgICAgICAgIGlmICghKG1hc29ucnkgfHwgcGFyYWxsYXggfHwgcGFyYWxsYXhKdXN0aWZ5KSB8fCBwb3NpdGlvbmVkQWJzb2x1dGUocm93cykgfHwgcm93c1swXS5zb21lKFxuICAgICAgICAgICAgICAoZWwsIGkpID0+IHJvd3Muc29tZSgocm93KSA9PiByb3dbaV0gJiYgcm93W2ldLm9mZnNldFdpZHRoICE9PSBlbC5vZmZzZXRXaWR0aClcbiAgICAgICAgICAgICkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGRhdGEudHJhbnNsYXRlcyA9IGRhdGEuc2Nyb2xsQ29sdW1ucyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGd1dHRlciA9IGdldEd1dHRlcihyb3dzLCBtYXJnaW4pO1xuICAgICAgICAgICAgbGV0IGNvbHVtbnM7XG4gICAgICAgICAgICBsZXQgdHJhbnNsYXRlcztcbiAgICAgICAgICAgIGlmIChtYXNvbnJ5KSB7XG4gICAgICAgICAgICAgIFtjb2x1bW5zLCB0cmFuc2xhdGVzXSA9IGFwcGx5TWFzb25yeShyb3dzLCBndXR0ZXIsIG1hc29ucnkgPT09IFwibmV4dFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbHVtbnMgPSB0cmFuc3Bvc2Uocm93cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjb2x1bW5IZWlnaHRzID0gY29sdW1ucy5tYXAoXG4gICAgICAgICAgICAgIChjb2x1bW4pID0+IHN1bUJ5KGNvbHVtbiwgXCJvZmZzZXRIZWlnaHRcIikgKyBndXR0ZXIgKiAoY29sdW1uLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5tYXgoMCwgLi4uY29sdW1uSGVpZ2h0cyk7XG4gICAgICAgICAgICBsZXQgc2Nyb2xsQ29sdW1ucztcbiAgICAgICAgICAgIGxldCBwYXJhbGxheFN0YXJ0O1xuICAgICAgICAgICAgbGV0IHBhcmFsbGF4RW5kO1xuICAgICAgICAgICAgaWYgKHBhcmFsbGF4IHx8IHBhcmFsbGF4SnVzdGlmeSkge1xuICAgICAgICAgICAgICBzY3JvbGxDb2x1bW5zID0gY29sdW1uSGVpZ2h0cy5tYXAoXG4gICAgICAgICAgICAgICAgKGhndCwgaSkgPT4gcGFyYWxsYXhKdXN0aWZ5ID8gaGVpZ2h0IC0gaGd0ICsgcGFyYWxsYXggOiBwYXJhbGxheCAvIChpICUgMiB8fCA4KVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBpZiAoIXBhcmFsbGF4SnVzdGlmeSkge1xuICAgICAgICAgICAgICAgIHBhcmFsbGF4ID0gTWF0aC5tYXgoXG4gICAgICAgICAgICAgICAgICAuLi5jb2x1bW5IZWlnaHRzLm1hcCgoaGd0LCBpKSA9PiBoZ3QgKyBzY3JvbGxDb2x1bW5zW2ldIC0gaGVpZ2h0KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcGFyYWxsYXhTdGFydCA9IHRvUHgodGhpcy5wYXJhbGxheFN0YXJ0LCBcImhlaWdodFwiLCB0aGlzLiRlbCwgdHJ1ZSk7XG4gICAgICAgICAgICAgIHBhcmFsbGF4RW5kID0gdG9QeCh0aGlzLnBhcmFsbGF4RW5kLCBcImhlaWdodFwiLCB0aGlzLiRlbCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBjb2x1bW5zLFxuICAgICAgICAgICAgICB0cmFuc2xhdGVzLFxuICAgICAgICAgICAgICBzY3JvbGxDb2x1bW5zLFxuICAgICAgICAgICAgICBwYXJhbGxheFN0YXJ0LFxuICAgICAgICAgICAgICBwYXJhbGxheEVuZCxcbiAgICAgICAgICAgICAgcGFkZGluZzogcGFyYWxsYXgsXG4gICAgICAgICAgICAgIGhlaWdodDogdHJhbnNsYXRlcyA/IGhlaWdodCA6IFwiXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICB3cml0ZSh7IGhlaWdodCwgcGFkZGluZyB9KSB7XG4gICAgICAgICAgICBjc3ModGhpcy4kZWwsIFwicGFkZGluZ0JvdHRvbVwiLCBwYWRkaW5nIHx8IFwiXCIpO1xuICAgICAgICAgICAgaGVpZ2h0ICE9PSBmYWxzZSAmJiBjc3ModGhpcy4kZWwsIFwiaGVpZ2h0XCIsIGhlaWdodCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBldmVudHM6IFtcInJlc2l6ZVwiXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcmVhZCh7IHJvd3MsIHNjcm9sbENvbHVtbnMsIHBhcmFsbGF4U3RhcnQsIHBhcmFsbGF4RW5kIH0pIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHNjcm9sbGVkOiBzY3JvbGxDb2x1bW5zICYmICFwb3NpdGlvbmVkQWJzb2x1dGUocm93cykgPyBzY3JvbGxlZE92ZXIodGhpcy4kZWwsIHBhcmFsbGF4U3RhcnQsIHBhcmFsbGF4RW5kKSA6IGZhbHNlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgd3JpdGUoeyBjb2x1bW5zLCBzY3JvbGxlZCwgc2Nyb2xsQ29sdW1ucywgdHJhbnNsYXRlcyB9KSB7XG4gICAgICAgICAgICBpZiAoIXNjcm9sbGVkICYmICF0cmFuc2xhdGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbHVtbnMuZm9yRWFjaChcbiAgICAgICAgICAgICAgKGNvbHVtbiwgaSkgPT4gY29sdW1uLmZvckVhY2goKGVsLCBqKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IFt4LCB5XSA9IHRyYW5zbGF0ZXMgJiYgdHJhbnNsYXRlc1tpXVtqXSB8fCBbMCwgMF07XG4gICAgICAgICAgICAgICAgaWYgKHNjcm9sbGVkKSB7XG4gICAgICAgICAgICAgICAgICB5ICs9IHNjcm9sbGVkICogc2Nyb2xsQ29sdW1uc1tpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3NzKGVsLCBcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7eH1weCwgJHt5fXB4KWApO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV2ZW50czogW1wic2Nyb2xsXCIsIFwicmVzaXplXCJdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICAgIGZ1bmN0aW9uIHBvc2l0aW9uZWRBYnNvbHV0ZShyb3dzKSB7XG4gICAgICByZXR1cm4gcm93cy5mbGF0KCkuc29tZSgoZWwpID0+IGNzcyhlbCwgXCJwb3NpdGlvblwiKSA9PT0gXCJhYnNvbHV0ZVwiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXBwbHlNYXNvbnJ5KHJvd3MsIGd1dHRlciwgbmV4dCkge1xuICAgICAgY29uc3QgY29sdW1ucyA9IFtdO1xuICAgICAgY29uc3QgdHJhbnNsYXRlcyA9IFtdO1xuICAgICAgY29uc3QgY29sdW1uSGVpZ2h0cyA9IEFycmF5KHJvd3NbMF0ubGVuZ3RoKS5maWxsKDApO1xuICAgICAgbGV0IHJvd0hlaWdodHMgPSAwO1xuICAgICAgZm9yIChsZXQgcm93IG9mIHJvd3MpIHtcbiAgICAgICAgaWYgKGlzUnRsKSB7XG4gICAgICAgICAgcm93ID0gcm93LnJldmVyc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaGVpZ2h0ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBqIGluIHJvdykge1xuICAgICAgICAgIGNvbnN0IHsgb2Zmc2V0V2lkdGgsIG9mZnNldEhlaWdodCB9ID0gcm93W2pdO1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gbmV4dCA/IGogOiBjb2x1bW5IZWlnaHRzLmluZGV4T2YoTWF0aC5taW4oLi4uY29sdW1uSGVpZ2h0cykpO1xuICAgICAgICAgIHB1c2goY29sdW1ucywgaW5kZXgsIHJvd1tqXSk7XG4gICAgICAgICAgcHVzaCh0cmFuc2xhdGVzLCBpbmRleCwgW1xuICAgICAgICAgICAgKGluZGV4IC0gaikgKiBvZmZzZXRXaWR0aCAqIChpc1J0bCA/IC0xIDogMSksXG4gICAgICAgICAgICBjb2x1bW5IZWlnaHRzW2luZGV4XSAtIHJvd0hlaWdodHNcbiAgICAgICAgICBdKTtcbiAgICAgICAgICBjb2x1bW5IZWlnaHRzW2luZGV4XSArPSBvZmZzZXRIZWlnaHQgKyBndXR0ZXI7XG4gICAgICAgICAgaGVpZ2h0ID0gTWF0aC5tYXgoaGVpZ2h0LCBvZmZzZXRIZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIHJvd0hlaWdodHMgKz0gaGVpZ2h0ICsgZ3V0dGVyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtjb2x1bW5zLCB0cmFuc2xhdGVzXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0R3V0dGVyKHJvd3MsIGNscykge1xuICAgICAgY29uc3Qgbm9kZSA9IHJvd3MuZmxhdCgpLmZpbmQoKGVsKSA9PiBoYXNDbGFzcyhlbCwgY2xzKSk7XG4gICAgICByZXR1cm4gdG9GbG9hdChub2RlID8gY3NzKG5vZGUsIFwibWFyZ2luVG9wXCIpIDogY3NzKHJvd3NbMF1bMF0sIFwicGFkZGluZ0xlZnRcIikpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0cmFuc3Bvc2Uocm93cykge1xuICAgICAgY29uc3QgY29sdW1ucyA9IFtdO1xuICAgICAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gcm93KSB7XG4gICAgICAgICAgcHVzaChjb2x1bW5zLCBpLCByb3dbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gY29sdW1ucztcbiAgICB9XG4gICAgZnVuY3Rpb24gcHVzaChhcnJheSwgaW5kZXgsIHZhbHVlKSB7XG4gICAgICBpZiAoIWFycmF5W2luZGV4XSkge1xuICAgICAgICBhcnJheVtpbmRleF0gPSBbXTtcbiAgICAgIH1cbiAgICAgIGFycmF5W2luZGV4XS5wdXNoKHZhbHVlKTtcbiAgICB9XG5cbiAgICB2YXIgaGVpZ2h0TWF0Y2ggPSB7XG4gICAgICBhcmdzOiBcInRhcmdldFwiLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgdGFyZ2V0OiBTdHJpbmcsXG4gICAgICAgIHJvdzogQm9vbGVhblxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGFyZ2V0OiBcIj4gKlwiLFxuICAgICAgICByb3c6IHRydWVcbiAgICAgIH0sXG4gICAgICBjb21wdXRlZDoge1xuICAgICAgICBlbGVtZW50czogKHsgdGFyZ2V0IH0sICRlbCkgPT4gJCQodGFyZ2V0LCAkZWwpXG4gICAgICB9LFxuICAgICAgb2JzZXJ2ZTogcmVzaXplKHtcbiAgICAgICAgdGFyZ2V0OiAoeyAkZWwsIGVsZW1lbnRzIH0pID0+IGVsZW1lbnRzLnJlZHVjZSgoZWxlbWVudHMyLCBlbCkgPT4gZWxlbWVudHMyLmNvbmNhdChlbCwgLi4uZWwuY2hpbGRyZW4pLCBbJGVsXSlcbiAgICAgIH0pLFxuICAgICAgZXZlbnRzOiB7XG4gICAgICAgIC8vIEhpZGRlbiBlbGVtZW50cyBtYXkgY2hhbmdlIGhlaWdodCB3aGVuIGZvbnRzIGxvYWRcbiAgICAgICAgbmFtZTogXCJsb2FkaW5nZG9uZVwiLFxuICAgICAgICBlbDogKCkgPT4gZG9jdW1lbnQuZm9udHMsXG4gICAgICAgIGhhbmRsZXIoKSB7XG4gICAgICAgICAgdGhpcy4kZW1pdChcInJlc2l6ZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHVwZGF0ZToge1xuICAgICAgICByZWFkKCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByb3dzOiAodGhpcy5yb3cgPyBnZXRSb3dzKHRoaXMuZWxlbWVudHMpIDogW3RoaXMuZWxlbWVudHNdKS5tYXAobWF0Y2gpXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGUoeyByb3dzIH0pIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHsgaGVpZ2h0cywgZWxlbWVudHMgfSBvZiByb3dzKSB7XG4gICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChlbCwgaSkgPT4gY3NzKGVsLCBcIm1pbkhlaWdodFwiLCBoZWlnaHRzW2ldKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBldmVudHM6IFtcInJlc2l6ZVwiXVxuICAgICAgfVxuICAgIH07XG4gICAgZnVuY3Rpb24gbWF0Y2goZWxlbWVudHMpIHtcbiAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiB7IGhlaWdodHM6IFtcIlwiXSwgZWxlbWVudHMgfTtcbiAgICAgIH1cbiAgICAgIGxldCBoZWlnaHRzID0gZWxlbWVudHMubWFwKGdldEhlaWdodCk7XG4gICAgICBjb25zdCBtYXggPSBNYXRoLm1heCguLi5oZWlnaHRzKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlaWdodHM6IGVsZW1lbnRzLm1hcCgoZWwsIGkpID0+IGhlaWdodHNbaV0udG9GaXhlZCgyKSA9PT0gbWF4LnRvRml4ZWQoMikgPyBcIlwiIDogbWF4KSxcbiAgICAgICAgZWxlbWVudHNcbiAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEhlaWdodChlbGVtZW50KSB7XG4gICAgICBjb25zdCBzdHlsZSA9IHBpY2soZWxlbWVudC5zdHlsZSwgW1wiZGlzcGxheVwiLCBcIm1pbkhlaWdodFwiXSk7XG4gICAgICBpZiAoIWlzVmlzaWJsZShlbGVtZW50KSkge1xuICAgICAgICBjc3MoZWxlbWVudCwgXCJkaXNwbGF5XCIsIFwiYmxvY2tcIiwgXCJpbXBvcnRhbnRcIik7XG4gICAgICB9XG4gICAgICBjc3MoZWxlbWVudCwgXCJtaW5IZWlnaHRcIiwgXCJcIik7XG4gICAgICBjb25zdCBoZWlnaHQgPSBkaW1lbnNpb25zJDEoZWxlbWVudCkuaGVpZ2h0IC0gYm94TW9kZWxBZGp1c3QoZWxlbWVudCwgXCJoZWlnaHRcIiwgXCJjb250ZW50LWJveFwiKTtcbiAgICAgIGNzcyhlbGVtZW50LCBzdHlsZSk7XG4gICAgICByZXR1cm4gaGVpZ2h0O1xuICAgIH1cblxuICAgIHZhciBoZWlnaHRQbGFjZWhvbGRlciA9IHtcbiAgICAgIGFyZ3M6IFwidGFyZ2V0XCIsXG4gICAgICBwcm9wczoge1xuICAgICAgICB0YXJnZXQ6IFN0cmluZ1xuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGFyZ2V0OiBcIlwiXG4gICAgICB9LFxuICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgZ2V0OiAoeyB0YXJnZXQgfSwgJGVsKSA9PiBxdWVyeSh0YXJnZXQsICRlbCksXG4gICAgICAgICAgb2JzZXJ2ZTogKHsgdGFyZ2V0IH0pID0+IHRhcmdldFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb2JzZXJ2ZTogcmVzaXplKHsgdGFyZ2V0OiAoeyB0YXJnZXQgfSkgPT4gdGFyZ2V0IH0pLFxuICAgICAgdXBkYXRlOiB7XG4gICAgICAgIHJlYWQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0ID8geyBoZWlnaHQ6IHRoaXMudGFyZ2V0Lm9mZnNldEhlaWdodCB9IDogZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlKHsgaGVpZ2h0IH0pIHtcbiAgICAgICAgICBjc3ModGhpcy4kZWwsIHsgbWluSGVpZ2h0OiBoZWlnaHQgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGV2ZW50czogW1wicmVzaXplXCJdXG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBoZWlnaHRWaWV3cG9ydCA9IHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGV4cGFuZDogQm9vbGVhbixcbiAgICAgICAgb2Zmc2V0VG9wOiBCb29sZWFuLFxuICAgICAgICBvZmZzZXRCb3R0b206IEJvb2xlYW4sXG4gICAgICAgIG1pbkhlaWdodDogTnVtYmVyXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBleHBhbmQ6IGZhbHNlLFxuICAgICAgICBvZmZzZXRUb3A6IGZhbHNlLFxuICAgICAgICBvZmZzZXRCb3R0b206IGZhbHNlLFxuICAgICAgICBtaW5IZWlnaHQ6IDBcbiAgICAgIH0sXG4gICAgICAvLyBjaGVjayBmb3Igb2Zmc2V0VG9wIGNoYW5nZVxuICAgICAgb2JzZXJ2ZTogW1xuICAgICAgICB2aWV3cG9ydCh7IGZpbHRlcjogKHsgZXhwYW5kIH0pID0+IGV4cGFuZCB9KSxcbiAgICAgICAgcmVzaXplKHsgdGFyZ2V0OiAoeyAkZWwgfSkgPT4gc2Nyb2xsUGFyZW50cygkZWwpIH0pXG4gICAgICBdLFxuICAgICAgdXBkYXRlOiB7XG4gICAgICAgIHJlYWQoKSB7XG4gICAgICAgICAgaWYgKCFpc1Zpc2libGUodGhpcy4kZWwpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBtaW5IZWlnaHQgPSBcIlwiO1xuICAgICAgICAgIGNvbnN0IGJveCA9IGJveE1vZGVsQWRqdXN0KHRoaXMuJGVsLCBcImhlaWdodFwiLCBcImNvbnRlbnQtYm94XCIpO1xuICAgICAgICAgIGNvbnN0IHsgYm9keSwgc2Nyb2xsaW5nRWxlbWVudCB9ID0gZG9jdW1lbnQ7XG4gICAgICAgICAgY29uc3Qgc2Nyb2xsRWxlbWVudCA9IHNjcm9sbFBhcmVudCh0aGlzLiRlbCk7XG4gICAgICAgICAgY29uc3QgeyBoZWlnaHQ6IHZpZXdwb3J0SGVpZ2h0IH0gPSBvZmZzZXRWaWV3cG9ydChcbiAgICAgICAgICAgIHNjcm9sbEVsZW1lbnQgPT09IGJvZHkgPyBzY3JvbGxpbmdFbGVtZW50IDogc2Nyb2xsRWxlbWVudFxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3QgaXNTY3JvbGxpbmdFbGVtZW50ID0gc2Nyb2xsaW5nRWxlbWVudCA9PT0gc2Nyb2xsRWxlbWVudCB8fCBib2R5ID09PSBzY3JvbGxFbGVtZW50O1xuICAgICAgICAgIG1pbkhlaWdodCA9IGBjYWxjKCR7aXNTY3JvbGxpbmdFbGVtZW50ID8gXCIxMDB2aFwiIDogYCR7dmlld3BvcnRIZWlnaHR9cHhgfWA7XG4gICAgICAgICAgaWYgKHRoaXMuZXhwYW5kKSB7XG4gICAgICAgICAgICBjb25zdCBkaWZmID0gZGltZW5zaW9ucyQxKHNjcm9sbEVsZW1lbnQpLmhlaWdodCAtIGRpbWVuc2lvbnMkMSh0aGlzLiRlbCkuaGVpZ2h0O1xuICAgICAgICAgICAgbWluSGVpZ2h0ICs9IGAgLSAke2RpZmZ9cHhgO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vZmZzZXRUb3ApIHtcbiAgICAgICAgICAgICAgaWYgKGlzU2Nyb2xsaW5nRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldFRvcEVsID0gdGhpcy5vZmZzZXRUb3AgPT09IHRydWUgPyB0aGlzLiRlbCA6IHF1ZXJ5KHRoaXMub2Zmc2V0VG9wLCB0aGlzLiRlbCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB0b3AgfSA9IG9mZnNldChvZmZzZXRUb3BFbCk7XG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0ICs9IHRvcCA+IDAgJiYgdG9wIDwgdmlld3BvcnRIZWlnaHQgLyAyID8gYCAtICR7dG9wfXB4YCA6IFwiXCI7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0ICs9IGAgLSAke2JveE1vZGVsQWRqdXN0KHNjcm9sbEVsZW1lbnQsIFwiaGVpZ2h0XCIsIGNzcyhzY3JvbGxFbGVtZW50LCBcImJveFNpemluZ1wiKSl9cHhgO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5vZmZzZXRCb3R0b20gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgbWluSGVpZ2h0ICs9IGAgLSAke2RpbWVuc2lvbnMkMSh0aGlzLiRlbC5uZXh0RWxlbWVudFNpYmxpbmcpLmhlaWdodH1weGA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzTnVtZXJpYyh0aGlzLm9mZnNldEJvdHRvbSkpIHtcbiAgICAgICAgICAgICAgbWluSGVpZ2h0ICs9IGAgLSAke3RoaXMub2Zmc2V0Qm90dG9tfXZoYDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vZmZzZXRCb3R0b20gJiYgZW5kc1dpdGgodGhpcy5vZmZzZXRCb3R0b20sIFwicHhcIikpIHtcbiAgICAgICAgICAgICAgbWluSGVpZ2h0ICs9IGAgLSAke3RvRmxvYXQodGhpcy5vZmZzZXRCb3R0b20pfXB4YDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNTdHJpbmcodGhpcy5vZmZzZXRCb3R0b20pKSB7XG4gICAgICAgICAgICAgIG1pbkhlaWdodCArPSBgIC0gJHtkaW1lbnNpb25zJDEocXVlcnkodGhpcy5vZmZzZXRCb3R0b20sIHRoaXMuJGVsKSkuaGVpZ2h0fXB4YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgbWluSGVpZ2h0ICs9IGAke2JveCA/IGAgLSAke2JveH1weGAgOiBcIlwifSlgO1xuICAgICAgICAgIHJldHVybiB7IG1pbkhlaWdodCB9O1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZSh7IG1pbkhlaWdodCB9KSB7XG4gICAgICAgICAgY3NzKHRoaXMuJGVsLCBcIm1pbkhlaWdodFwiLCBgbWF4KCR7dGhpcy5taW5IZWlnaHQgfHwgMH1weCwgJHttaW5IZWlnaHR9KWApO1xuICAgICAgICB9LFxuICAgICAgICBldmVudHM6IFtcInJlc2l6ZVwiXVxuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgY2xvc2VJY29uID0gXCI8c3ZnIHdpZHRoPVxcXCIxNFxcXCIgaGVpZ2h0PVxcXCIxNFxcXCIgdmlld0JveD1cXFwiMCAwIDE0IDE0XFxcIj48bGluZSBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMwMDBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMS4xXFxcIiB4MT1cXFwiMVxcXCIgeTE9XFxcIjFcXFwiIHgyPVxcXCIxM1xcXCIgeTI9XFxcIjEzXFxcIi8+PGxpbmUgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjMDAwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjEuMVxcXCIgeDE9XFxcIjEzXFxcIiB5MT1cXFwiMVxcXCIgeDI9XFxcIjFcXFwiIHkyPVxcXCIxM1xcXCIvPjwvc3ZnPlwiO1xuXG4gICAgdmFyIGNsb3NlTGFyZ2UgPSBcIjxzdmcgd2lkdGg9XFxcIjIwXFxcIiBoZWlnaHQ9XFxcIjIwXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjAgMjBcXFwiPjxsaW5lIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiIzAwMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIxLjRcXFwiIHgxPVxcXCIxXFxcIiB5MT1cXFwiMVxcXCIgeDI9XFxcIjE5XFxcIiB5Mj1cXFwiMTlcXFwiLz48bGluZSBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMwMDBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMS40XFxcIiB4MT1cXFwiMTlcXFwiIHkxPVxcXCIxXFxcIiB4Mj1cXFwiMVxcXCIgeTI9XFxcIjE5XFxcIi8+PC9zdmc+XCI7XG5cbiAgICB2YXIgZHJvcFBhcmVudEljb24gPSBcIjxzdmcgd2lkdGg9XFxcIjEyXFxcIiBoZWlnaHQ9XFxcIjEyXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTIgMTJcXFwiPjxwb2x5bGluZSBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMwMDBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMS4xXFxcIiBwb2ludHM9XFxcIjEgMy41IDYgOC41IDExIDMuNVxcXCIvPjwvc3ZnPlwiO1xuXG4gICAgdmFyIG1hcmtlciA9IFwiPHN2ZyB3aWR0aD1cXFwiMjBcXFwiIGhlaWdodD1cXFwiMjBcXFwiIHZpZXdCb3g9XFxcIjAgMCAyMCAyMFxcXCI+PHJlY3Qgd2lkdGg9XFxcIjFcXFwiIGhlaWdodD1cXFwiMTFcXFwiIHg9XFxcIjlcXFwiIHk9XFxcIjRcXFwiLz48cmVjdCB3aWR0aD1cXFwiMTFcXFwiIGhlaWdodD1cXFwiMVxcXCIgeD1cXFwiNFxcXCIgeT1cXFwiOVxcXCIvPjwvc3ZnPlwiO1xuXG4gICAgdmFyIG5hdlBhcmVudEljb25MYXJnZSA9IFwiPHN2ZyB3aWR0aD1cXFwiMTRcXFwiIGhlaWdodD1cXFwiMTRcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNCAxNFxcXCI+PHBvbHlsaW5lIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiIzAwMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIxLjFcXFwiIHBvaW50cz1cXFwiMSA0IDcgMTAgMTMgNFxcXCIvPjwvc3ZnPlwiO1xuXG4gICAgdmFyIG5hdlBhcmVudEljb24gPSBcIjxzdmcgd2lkdGg9XFxcIjEyXFxcIiBoZWlnaHQ9XFxcIjEyXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTIgMTJcXFwiPjxwb2x5bGluZSBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMwMDBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMS4xXFxcIiBwb2ludHM9XFxcIjEgMy41IDYgOC41IDExIDMuNVxcXCIvPjwvc3ZnPlwiO1xuXG4gICAgdmFyIG5hdmJhclBhcmVudEljb24gPSBcIjxzdmcgd2lkdGg9XFxcIjEyXFxcIiBoZWlnaHQ9XFxcIjEyXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTIgMTJcXFwiPjxwb2x5bGluZSBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMwMDBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMS4xXFxcIiBwb2ludHM9XFxcIjEgMy41IDYgOC41IDExIDMuNVxcXCIvPjwvc3ZnPlwiO1xuXG4gICAgdmFyIG5hdmJhclRvZ2dsZUljb24gPSBcIjxzdmcgd2lkdGg9XFxcIjIwXFxcIiBoZWlnaHQ9XFxcIjIwXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjAgMjBcXFwiPjxzdHlsZT4udWstbmF2YmFyLXRvZ2dsZS1pY29uIHN2ZyZndDtbY2xhc3MqPSZxdW90O2xpbmUtJnF1b3Q7XXt0cmFuc2l0aW9uOjAuMnMgZWFzZS1pbi1vdXQ7dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm0sIG9wYWNpdHk7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7b3BhY2l0eToxfS51ay1uYXZiYXItdG9nZ2xlLWljb24gc3ZnJmd0Oy5saW5lLTN7b3BhY2l0eTowfS51ay1uYXZiYXItdG9nZ2xlLWFuaW1hdGVbYXJpYS1leHBhbmRlZD0mcXVvdDt0cnVlJnF1b3Q7XSBzdmcmZ3Q7LmxpbmUtM3tvcGFjaXR5OjF9LnVrLW5hdmJhci10b2dnbGUtYW5pbWF0ZVthcmlhLWV4cGFuZGVkPSZxdW90O3RydWUmcXVvdDtdIHN2ZyZndDsubGluZS0ye3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfS51ay1uYXZiYXItdG9nZ2xlLWFuaW1hdGVbYXJpYS1leHBhbmRlZD0mcXVvdDt0cnVlJnF1b3Q7XSBzdmcmZ3Q7LmxpbmUtM3t0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9LnVrLW5hdmJhci10b2dnbGUtYW5pbWF0ZVthcmlhLWV4cGFuZGVkPSZxdW90O3RydWUmcXVvdDtdIHN2ZyZndDsubGluZS0xLC51ay1uYXZiYXItdG9nZ2xlLWFuaW1hdGVbYXJpYS1leHBhbmRlZD0mcXVvdDt0cnVlJnF1b3Q7XSBzdmcmZ3Q7LmxpbmUtNHtvcGFjaXR5OjB9LnVrLW5hdmJhci10b2dnbGUtYW5pbWF0ZVthcmlhLWV4cGFuZGVkPSZxdW90O3RydWUmcXVvdDtdIHN2ZyZndDsubGluZS0xe3RyYW5zZm9ybTp0cmFuc2xhdGVZKDZweCkgc2NhbGVYKDApfS51ay1uYXZiYXItdG9nZ2xlLWFuaW1hdGVbYXJpYS1leHBhbmRlZD0mcXVvdDt0cnVlJnF1b3Q7XSBzdmcmZ3Q7LmxpbmUtNHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNnB4KSBzY2FsZVgoMCl9PC9zdHlsZT48cmVjdCB3aWR0aD1cXFwiMjBcXFwiIGhlaWdodD1cXFwiMlxcXCIgeT1cXFwiM1xcXCIgY2xhc3M9XFxcImxpbmUtMVxcXCIvPjxyZWN0IHdpZHRoPVxcXCIyMFxcXCIgaGVpZ2h0PVxcXCIyXFxcIiB5PVxcXCI5XFxcIiBjbGFzcz1cXFwibGluZS0yXFxcIi8+PHJlY3Qgd2lkdGg9XFxcIjIwXFxcIiBoZWlnaHQ9XFxcIjJcXFwiIHk9XFxcIjlcXFwiIGNsYXNzPVxcXCJsaW5lLTNcXFwiLz48cmVjdCB3aWR0aD1cXFwiMjBcXFwiIGhlaWdodD1cXFwiMlxcXCIgeT1cXFwiMTVcXFwiIGNsYXNzPVxcXCJsaW5lLTRcXFwiLz48L3N2Zz5cIjtcblxuICAgIHZhciBvdmVybGF5SWNvbiA9IFwiPHN2ZyB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDBcXFwiIHZpZXdCb3g9XFxcIjAgMCA0MCA0MFxcXCI+PHJlY3Qgd2lkdGg9XFxcIjFcXFwiIGhlaWdodD1cXFwiNDBcXFwiIHg9XFxcIjE5XFxcIiB5PVxcXCIwXFxcIi8+PHJlY3Qgd2lkdGg9XFxcIjQwXFxcIiBoZWlnaHQ9XFxcIjFcXFwiIHg9XFxcIjBcXFwiIHk9XFxcIjE5XFxcIi8+PC9zdmc+XCI7XG5cbiAgICB2YXIgcGFnaW5hdGlvbk5leHQgPSBcIjxzdmcgd2lkdGg9XFxcIjdcXFwiIGhlaWdodD1cXFwiMTJcXFwiIHZpZXdCb3g9XFxcIjAgMCA3IDEyXFxcIj48cG9seWxpbmUgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjMDAwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjEuMlxcXCIgcG9pbnRzPVxcXCIxIDEgNiA2IDEgMTFcXFwiLz48L3N2Zz5cIjtcblxuICAgIHZhciBwYWdpbmF0aW9uUHJldmlvdXMgPSBcIjxzdmcgd2lkdGg9XFxcIjdcXFwiIGhlaWdodD1cXFwiMTJcXFwiIHZpZXdCb3g9XFxcIjAgMCA3IDEyXFxcIj48cG9seWxpbmUgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjMDAwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjEuMlxcXCIgcG9pbnRzPVxcXCI2IDEgMSA2IDYgMTFcXFwiLz48L3N2Zz5cIjtcblxuICAgIHZhciBzZWFyY2hJY29uID0gXCI8c3ZnIHdpZHRoPVxcXCIyMFxcXCIgaGVpZ2h0PVxcXCIyMFxcXCIgdmlld0JveD1cXFwiMCAwIDIwIDIwXFxcIj48Y2lyY2xlIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiIzAwMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIxLjFcXFwiIGN4PVxcXCI5XFxcIiBjeT1cXFwiOVxcXCIgcj1cXFwiN1xcXCIvPjxwYXRoIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiIzAwMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIxLjFcXFwiIGQ9XFxcIk0xNCwxNCBMMTgsMTggTDE0LDE0IFpcXFwiLz48L3N2Zz5cIjtcblxuICAgIHZhciBzZWFyY2hMYXJnZSA9IFwiPHN2ZyB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDBcXFwiIHZpZXdCb3g9XFxcIjAgMCA0MCA0MFxcXCI+PGNpcmNsZSBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMwMDBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMS44XFxcIiBjeD1cXFwiMTcuNVxcXCIgY3k9XFxcIjE3LjVcXFwiIHI9XFxcIjE2LjVcXFwiLz48bGluZSBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMwMDBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMS44XFxcIiB4MT1cXFwiMzhcXFwiIHkxPVxcXCIzOVxcXCIgeDI9XFxcIjI5XFxcIiB5Mj1cXFwiMzBcXFwiLz48L3N2Zz5cIjtcblxuICAgIHZhciBzZWFyY2hNZWRpdW0gPSBcIjxzdmcgd2lkdGg9XFxcIjI0XFxcIiBoZWlnaHQ9XFxcIjI0XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxjaXJjbGUgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjMDAwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjEuMVxcXCIgY3g9XFxcIjEwLjVcXFwiIGN5PVxcXCIxMC41XFxcIiByPVxcXCI5LjVcXFwiLz48bGluZSBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMwMDBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMS4xXFxcIiB4MT1cXFwiMjNcXFwiIHkxPVxcXCIyM1xcXCIgeDI9XFxcIjE3XFxcIiB5Mj1cXFwiMTdcXFwiLz48L3N2Zz5cIjtcblxuICAgIHZhciBzbGlkZW5hdk5leHRMYXJnZSA9IFwiPHN2ZyB3aWR0aD1cXFwiMjVcXFwiIGhlaWdodD1cXFwiNDBcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNSA0MFxcXCI+PHBvbHlsaW5lIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiIzAwMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIiBwb2ludHM9XFxcIjQuMDAyLDM4LjU0NyAyMi41MjcsMjAuMDI0IDQsMS41XFxcIi8+PC9zdmc+XCI7XG5cbiAgICB2YXIgc2xpZGVuYXZOZXh0ID0gXCI8c3ZnIHdpZHRoPVxcXCIxNFxcXCIgaGVpZ2h0PVxcXCIyNFxcXCIgdmlld0JveD1cXFwiMCAwIDE0IDI0XFxcIj48cG9seWxpbmUgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjMDAwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjEuNFxcXCIgcG9pbnRzPVxcXCIxLjIyNSwyMyAxMi43NzUsMTIgMS4yMjUsMVxcXCIvPjwvc3ZnPlwiO1xuXG4gICAgdmFyIHNsaWRlbmF2UHJldmlvdXNMYXJnZSA9IFwiPHN2ZyB3aWR0aD1cXFwiMjVcXFwiIGhlaWdodD1cXFwiNDBcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNSA0MFxcXCI+PHBvbHlsaW5lIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiIzAwMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIiBwb2ludHM9XFxcIjIwLjUyNywxLjUgMiwyMC4wMjQgMjAuNTI1LDM4LjU0N1xcXCIvPjwvc3ZnPlwiO1xuXG4gICAgdmFyIHNsaWRlbmF2UHJldmlvdXMgPSBcIjxzdmcgd2lkdGg9XFxcIjE0XFxcIiBoZWlnaHQ9XFxcIjI0XFxcIiB2aWV3Qm94PVxcXCIwIDAgMTQgMjRcXFwiPjxwb2x5bGluZSBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMwMDBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMS40XFxcIiBwb2ludHM9XFxcIjEyLjc3NSwxIDEuMjI1LDEyIDEyLjc3NSwyM1xcXCIvPjwvc3ZnPlwiO1xuXG4gICAgdmFyIHNwaW5uZXIgPSBcIjxzdmcgd2lkdGg9XFxcIjMwXFxcIiBoZWlnaHQ9XFxcIjMwXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzAgMzBcXFwiPjxjaXJjbGUgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjMDAwXFxcIiBjeD1cXFwiMTVcXFwiIGN5PVxcXCIxNVxcXCIgcj1cXFwiMTRcXFwiLz48L3N2Zz5cIjtcblxuICAgIHZhciB0b3RvcCA9IFwiPHN2ZyB3aWR0aD1cXFwiMThcXFwiIGhlaWdodD1cXFwiMTBcXFwiIHZpZXdCb3g9XFxcIjAgMCAxOCAxMFxcXCI+PHBvbHlsaW5lIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiIzAwMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIxLjJcXFwiIHBvaW50cz1cXFwiMSA5IDkgMSAxNyA5XFxcIi8+PC9zdmc+XCI7XG5cbiAgICB2YXIgU3ZnID0ge1xuICAgICAgYXJnczogXCJzcmNcIixcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHdpZHRoOiBOdW1iZXIsXG4gICAgICAgIGhlaWdodDogTnVtYmVyLFxuICAgICAgICByYXRpbzogTnVtYmVyXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICByYXRpbzogMVxuICAgICAgfSxcbiAgICAgIGNvbm5lY3RlZCgpIHtcbiAgICAgICAgdGhpcy5zdmcgPSB0aGlzLmdldFN2ZygpLnRoZW4oKGVsKSA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qgc3ZnID0gaW5zZXJ0U1ZHKGVsLCB0aGlzLiRlbCk7XG4gICAgICAgICAgaWYgKHRoaXMuc3ZnRWwgJiYgc3ZnICE9PSB0aGlzLnN2Z0VsKSB7XG4gICAgICAgICAgICByZW1vdmUkMSh0aGlzLnN2Z0VsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYXBwbHlXaWR0aEFuZEhlaWdodC5jYWxsKHRoaXMsIHN2ZywgZWwpO1xuICAgICAgICAgIHJldHVybiB0aGlzLnN2Z0VsID0gc3ZnO1xuICAgICAgICB9LCBub29wKTtcbiAgICAgIH0sXG4gICAgICBkaXNjb25uZWN0ZWQoKSB7XG4gICAgICAgIHRoaXMuc3ZnLnRoZW4oKHN2ZykgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGlzVm9pZEVsZW1lbnQodGhpcy4kZWwpKSB7XG4gICAgICAgICAgICB0aGlzLiRlbC5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVtb3ZlJDEoc3ZnKTtcbiAgICAgICAgICB0aGlzLnN2Z0VsID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3ZnID0gbnVsbDtcbiAgICAgIH0sXG4gICAgICBtZXRob2RzOiB7XG4gICAgICAgIGFzeW5jIGdldFN2ZygpIHtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgZnVuY3Rpb24gaW5zZXJ0U1ZHKGVsLCByb290KSB7XG4gICAgICBpZiAoaXNWb2lkRWxlbWVudChyb290KSB8fCBpc1RhZyhyb290LCBcImNhbnZhc1wiKSkge1xuICAgICAgICByb290LmhpZGRlbiA9IHRydWU7XG4gICAgICAgIGNvbnN0IG5leHQgPSByb290Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgcmV0dXJuIGVxdWFscyhlbCwgbmV4dCkgPyBuZXh0IDogYWZ0ZXIocm9vdCwgZWwpO1xuICAgICAgfVxuICAgICAgY29uc3QgbGFzdCA9IHJvb3QubGFzdEVsZW1lbnRDaGlsZDtcbiAgICAgIHJldHVybiBlcXVhbHMoZWwsIGxhc3QpID8gbGFzdCA6IGFwcGVuZChyb290LCBlbCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGVxdWFscyhlbCwgb3RoZXIpIHtcbiAgICAgIHJldHVybiBpc1RhZyhlbCwgXCJzdmdcIikgJiYgaXNUYWcob3RoZXIsIFwic3ZnXCIpICYmIGVsLmlubmVySFRNTCA9PT0gb3RoZXIuaW5uZXJIVE1MO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhcHBseVdpZHRoQW5kSGVpZ2h0KGVsLCByZWYpIHtcbiAgICAgIGNvbnN0IHByb3BzID0gW1wid2lkdGhcIiwgXCJoZWlnaHRcIl07XG4gICAgICBsZXQgZGltZW5zaW9ucyA9IHByb3BzLm1hcCgocHJvcCkgPT4gdGhpc1twcm9wXSk7XG4gICAgICBpZiAoIWRpbWVuc2lvbnMuc29tZSgodmFsKSA9PiB2YWwpKSB7XG4gICAgICAgIGRpbWVuc2lvbnMgPSBwcm9wcy5tYXAoKHByb3ApID0+IGF0dHIocmVmLCBwcm9wKSk7XG4gICAgICB9XG4gICAgICBjb25zdCB2aWV3Qm94ID0gYXR0cihyZWYsIFwidmlld0JveFwiKTtcbiAgICAgIGlmICh2aWV3Qm94ICYmICFkaW1lbnNpb25zLnNvbWUoKHZhbCkgPT4gdmFsKSkge1xuICAgICAgICBkaW1lbnNpb25zID0gdmlld0JveC5zcGxpdChcIiBcIikuc2xpY2UoMik7XG4gICAgICB9XG4gICAgICBkaW1lbnNpb25zLmZvckVhY2goKHZhbCwgaSkgPT4gYXR0cihlbCwgcHJvcHNbaV0sIHRvRmxvYXQodmFsKSAqIHRoaXMucmF0aW8gfHwgbnVsbCkpO1xuICAgIH1cblxuICAgIHZhciBzdmcgPSB7XG4gICAgICBtaXhpbnM6IFtTdmddLFxuICAgICAgYXJnczogXCJzcmNcIixcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHNyYzogU3RyaW5nLFxuICAgICAgICBpY29uOiBTdHJpbmcsXG4gICAgICAgIGF0dHJpYnV0ZXM6IFwibGlzdFwiLFxuICAgICAgICBzdHJva2VBbmltYXRpb246IEJvb2xlYW5cbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHN0cm9rZUFuaW1hdGlvbjogZmFsc2VcbiAgICAgIH0sXG4gICAgICBvYnNlcnZlOiBbXG4gICAgICAgIG11dGF0aW9uKHtcbiAgICAgICAgICBhc3luYyBoYW5kbGVyKCkge1xuICAgICAgICAgICAgY29uc3Qgc3ZnID0gYXdhaXQgdGhpcy5zdmc7XG4gICAgICAgICAgICBpZiAoc3ZnKSB7XG4gICAgICAgICAgICAgIGFwcGx5QXR0cmlidXRlcy5jYWxsKHRoaXMsIHN2Zyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgICAgYXR0cmlidXRlRmlsdGVyOiBbXCJpZFwiLCBcImNsYXNzXCIsIFwic3R5bGVcIl1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgYXN5bmMgY29ubmVjdGVkKCkge1xuICAgICAgICBpZiAoaW5jbHVkZXModGhpcy5zcmMsIFwiI1wiKSkge1xuICAgICAgICAgIFt0aGlzLnNyYywgdGhpcy5pY29uXSA9IHRoaXMuc3JjLnNwbGl0KFwiI1wiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdmcgPSBhd2FpdCB0aGlzLnN2ZztcbiAgICAgICAgaWYgKHN2Zykge1xuICAgICAgICAgIGFwcGx5QXR0cmlidXRlcy5jYWxsKHRoaXMsIHN2Zyk7XG4gICAgICAgICAgaWYgKHRoaXMuc3Ryb2tlQW5pbWF0aW9uKSB7XG4gICAgICAgICAgICBhcHBseUFuaW1hdGlvbihzdmcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgYXN5bmMgZ2V0U3ZnKCkge1xuICAgICAgICAgIGlmIChpc1RhZyh0aGlzLiRlbCwgXCJpbWdcIikgJiYgIXRoaXMuJGVsLmNvbXBsZXRlICYmIHRoaXMuJGVsLmxvYWRpbmcgPT09IFwibGF6eVwiKSB7XG4gICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gb25jZSh0aGlzLiRlbCwgXCJsb2FkXCIsIHJlc29sdmUpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHBhcnNlU1ZHKGF3YWl0IGxvYWRTVkcodGhpcy5zcmMpLCB0aGlzLmljb24pIHx8IFByb21pc2UucmVqZWN0KFwiU1ZHIG5vdCBmb3VuZC5cIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGZ1bmN0aW9uIGFwcGx5QXR0cmlidXRlcyhlbCkge1xuICAgICAgY29uc3QgeyAkZWwgfSA9IHRoaXM7XG4gICAgICBhZGRDbGFzcyhlbCwgYXR0cigkZWwsIFwiY2xhc3NcIiksIFwidWstc3ZnXCIpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAkZWwuc3R5bGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcHJvcCA9ICRlbC5zdHlsZVtpXTtcbiAgICAgICAgY3NzKGVsLCBwcm9wLCBjc3MoJGVsLCBwcm9wKSk7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBpbiB0aGlzLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgY29uc3QgW3Byb3AsIHZhbHVlXSA9IHRoaXMuYXR0cmlidXRlc1thdHRyaWJ1dGVdLnNwbGl0KFwiOlwiLCAyKTtcbiAgICAgICAgYXR0cihlbCwgcHJvcCwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLiRlbC5pZCkge1xuICAgICAgICByZW1vdmVBdHRyKGVsLCBcImlkXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBsb2FkU1ZHID0gbWVtb2l6ZShhc3luYyAoc3JjKSA9PiB7XG4gICAgICBpZiAoc3JjKSB7XG4gICAgICAgIGlmIChzdGFydHNXaXRoKHNyYywgXCJkYXRhOlwiKSkge1xuICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3JjLnNwbGl0KFwiLFwiKVsxXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIChhd2FpdCBmZXRjaChzcmMpKS50ZXh0KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGZ1bmN0aW9uIHBhcnNlU1ZHKHN2ZywgaWNvbikge1xuICAgICAgaWYgKGljb24gJiYgaW5jbHVkZXMoc3ZnLCBcIjxzeW1ib2xcIikpIHtcbiAgICAgICAgc3ZnID0gcGFyc2VTeW1ib2xzKHN2ZylbaWNvbl0gfHwgc3ZnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0cmluZ1RvU3ZnKHN2Zyk7XG4gICAgfVxuICAgIGNvbnN0IHN5bWJvbFJlID0gLzxzeW1ib2woW15dKj9pZD0oWydcIl0pKC4rPylcXDJbXl0qPzxcXC8pc3ltYm9sPi9nO1xuICAgIGNvbnN0IHBhcnNlU3ltYm9scyA9IG1lbW9pemUoZnVuY3Rpb24oc3ZnKSB7XG4gICAgICBjb25zdCBzeW1ib2xzID0ge307XG4gICAgICBzeW1ib2xSZS5sYXN0SW5kZXggPSAwO1xuICAgICAgbGV0IG1hdGNoO1xuICAgICAgd2hpbGUgKG1hdGNoID0gc3ltYm9sUmUuZXhlYyhzdmcpKSB7XG4gICAgICAgIHN5bWJvbHNbbWF0Y2hbM11dID0gYDxzdmcgJHttYXRjaFsxXX1zdmc+YDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzeW1ib2xzO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIGFwcGx5QW5pbWF0aW9uKGVsKSB7XG4gICAgICBjb25zdCBsZW5ndGggPSBnZXRNYXhQYXRoTGVuZ3RoKGVsKTtcbiAgICAgIGlmIChsZW5ndGgpIHtcbiAgICAgICAgY3NzKGVsLCBcIi0tdWstYW5pbWF0aW9uLXN0cm9rZVwiLCBsZW5ndGgpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBzdHJpbmdUb1N2ZyhzdHJpbmcpIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBzdHJpbmc7XG4gICAgICByZXR1cm4gY29udGFpbmVyLmNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgfVxuXG4gICAgY29uc3QgaWNvbnMgPSB7XG4gICAgICBzcGlubmVyLFxuICAgICAgdG90b3AsXG4gICAgICBtYXJrZXIsXG4gICAgICBcImNsb3NlLWljb25cIjogY2xvc2VJY29uLFxuICAgICAgXCJjbG9zZS1sYXJnZVwiOiBjbG9zZUxhcmdlLFxuICAgICAgXCJkcm9wLXBhcmVudC1pY29uXCI6IGRyb3BQYXJlbnRJY29uLFxuICAgICAgXCJuYXYtcGFyZW50LWljb25cIjogbmF2UGFyZW50SWNvbixcbiAgICAgIFwibmF2LXBhcmVudC1pY29uLWxhcmdlXCI6IG5hdlBhcmVudEljb25MYXJnZSxcbiAgICAgIFwibmF2YmFyLXBhcmVudC1pY29uXCI6IG5hdmJhclBhcmVudEljb24sXG4gICAgICBcIm5hdmJhci10b2dnbGUtaWNvblwiOiBuYXZiYXJUb2dnbGVJY29uLFxuICAgICAgXCJvdmVybGF5LWljb25cIjogb3ZlcmxheUljb24sXG4gICAgICBcInBhZ2luYXRpb24tbmV4dFwiOiBwYWdpbmF0aW9uTmV4dCxcbiAgICAgIFwicGFnaW5hdGlvbi1wcmV2aW91c1wiOiBwYWdpbmF0aW9uUHJldmlvdXMsXG4gICAgICBcInNlYXJjaC1pY29uXCI6IHNlYXJjaEljb24sXG4gICAgICBcInNlYXJjaC1tZWRpdW1cIjogc2VhcmNoTWVkaXVtLFxuICAgICAgXCJzZWFyY2gtbGFyZ2VcIjogc2VhcmNoTGFyZ2UsXG4gICAgICBcInNlYXJjaC10b2dnbGUtaWNvblwiOiBzZWFyY2hJY29uLFxuICAgICAgXCJzbGlkZW5hdi1uZXh0XCI6IHNsaWRlbmF2TmV4dCxcbiAgICAgIFwic2xpZGVuYXYtbmV4dC1sYXJnZVwiOiBzbGlkZW5hdk5leHRMYXJnZSxcbiAgICAgIFwic2xpZGVuYXYtcHJldmlvdXNcIjogc2xpZGVuYXZQcmV2aW91cyxcbiAgICAgIFwic2xpZGVuYXYtcHJldmlvdXMtbGFyZ2VcIjogc2xpZGVuYXZQcmV2aW91c0xhcmdlXG4gICAgfTtcbiAgICBjb25zdCBJY29uID0ge1xuICAgICAgaW5zdGFsbDogaW5zdGFsbCQxLFxuICAgICAgbWl4aW5zOiBbU3ZnXSxcbiAgICAgIGFyZ3M6IFwiaWNvblwiLFxuICAgICAgcHJvcHM6IHsgaWNvbjogU3RyaW5nIH0sXG4gICAgICBpc0ljb246IHRydWUsXG4gICAgICBiZWZvcmVDb25uZWN0KCkge1xuICAgICAgICBhZGRDbGFzcyh0aGlzLiRlbCwgXCJ1ay1pY29uXCIpO1xuICAgICAgfSxcbiAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgYXN5bmMgZ2V0U3ZnKCkge1xuICAgICAgICAgIGNvbnN0IGljb24gPSBnZXRJY29uKHRoaXMuaWNvbik7XG4gICAgICAgICAgaWYgKCFpY29uKSB7XG4gICAgICAgICAgICB0aHJvdyBcIkljb24gbm90IGZvdW5kLlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gaWNvbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgSWNvbkNvbXBvbmVudCA9IHtcbiAgICAgIGFyZ3M6IGZhbHNlLFxuICAgICAgZXh0ZW5kczogSWNvbixcbiAgICAgIGRhdGE6ICh2bSkgPT4gKHtcbiAgICAgICAgaWNvbjogaHlwaGVuYXRlKHZtLmNvbnN0cnVjdG9yLm9wdGlvbnMubmFtZSlcbiAgICAgIH0pLFxuICAgICAgYmVmb3JlQ29ubmVjdCgpIHtcbiAgICAgICAgYWRkQ2xhc3ModGhpcy4kZWwsIHRoaXMuJG9wdGlvbnMuaWQpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgTmF2UGFyZW50SWNvbiA9IHtcbiAgICAgIGV4dGVuZHM6IEljb25Db21wb25lbnQsXG4gICAgICBiZWZvcmVDb25uZWN0KCkge1xuICAgICAgICBjb25zdCBpY29uID0gdGhpcy4kcHJvcHMuaWNvbjtcbiAgICAgICAgdGhpcy5pY29uID0gdGhpcy4kZWwuY2xvc2VzdChcIi51ay1uYXYtcHJpbWFyeVwiKSA/IGAke2ljb259LWxhcmdlYCA6IGljb247XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBTZWFyY2ggPSB7XG4gICAgICBleHRlbmRzOiBJY29uQ29tcG9uZW50LFxuICAgICAgbWl4aW5zOiBbSTE4bl0sXG4gICAgICBpMThuOiB7IHRvZ2dsZTogXCJPcGVuIFNlYXJjaFwiLCBzdWJtaXQ6IFwiU3VibWl0IFNlYXJjaFwiIH0sXG4gICAgICBiZWZvcmVDb25uZWN0KCkge1xuICAgICAgICBjb25zdCBpc1RvZ2dsZSA9IGhhc0NsYXNzKHRoaXMuJGVsLCBcInVrLXNlYXJjaC10b2dnbGVcIikgfHwgaGFzQ2xhc3ModGhpcy4kZWwsIFwidWstbmF2YmFyLXRvZ2dsZVwiKTtcbiAgICAgICAgdGhpcy5pY29uID0gaXNUb2dnbGUgPyBcInNlYXJjaC10b2dnbGUtaWNvblwiIDogaGFzQ2xhc3ModGhpcy4kZWwsIFwidWstc2VhcmNoLWljb25cIikgJiYgdGhpcy4kZWwuY2xvc2VzdChcIi51ay1zZWFyY2gtbGFyZ2VcIikgPyBcInNlYXJjaC1sYXJnZVwiIDogdGhpcy4kZWwuY2xvc2VzdChcIi51ay1zZWFyY2gtbWVkaXVtXCIpID8gXCJzZWFyY2gtbWVkaXVtXCIgOiB0aGlzLiRwcm9wcy5pY29uO1xuICAgICAgICBpZiAoaGFzQXR0cih0aGlzLiRlbCwgXCJhcmlhLWxhYmVsXCIpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1RvZ2dsZSkge1xuICAgICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy50KFwidG9nZ2xlXCIpO1xuICAgICAgICAgIGF0dHIodGhpcy4kZWwsIFwiYXJpYS1sYWJlbFwiLCBsYWJlbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy4kZWwuY2xvc2VzdChcImEsYnV0dG9uXCIpO1xuICAgICAgICAgIGlmIChidXR0b24pIHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy50KFwic3VibWl0XCIpO1xuICAgICAgICAgICAgYXR0cihidXR0b24sIFwiYXJpYS1sYWJlbFwiLCBsYWJlbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBTcGlubmVyID0ge1xuICAgICAgZXh0ZW5kczogSWNvbkNvbXBvbmVudCxcbiAgICAgIGJlZm9yZUNvbm5lY3QoKSB7XG4gICAgICAgIGF0dHIodGhpcy4kZWwsIFwicm9sZVwiLCBcInN0YXR1c1wiKTtcbiAgICAgIH0sXG4gICAgICBtZXRob2RzOiB7XG4gICAgICAgIGFzeW5jIGdldFN2ZygpIHtcbiAgICAgICAgICBjb25zdCBpY29uID0gYXdhaXQgSWNvbi5tZXRob2RzLmdldFN2Zy5jYWxsKHRoaXMpO1xuICAgICAgICAgIGlmICh0aGlzLnJhdGlvICE9PSAxKSB7XG4gICAgICAgICAgICBjc3MoJChcImNpcmNsZVwiLCBpY29uKSwgXCJzdHJva2VXaWR0aFwiLCAxIC8gdGhpcy5yYXRpbyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBpY29uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBCdXR0b25Db21wb25lbnQgPSB7XG4gICAgICBleHRlbmRzOiBJY29uQ29tcG9uZW50LFxuICAgICAgbWl4aW5zOiBbSTE4bl0sXG4gICAgICBiZWZvcmVDb25uZWN0KCkge1xuICAgICAgICBjb25zdCBidXR0b24gPSB0aGlzLiRlbC5jbG9zZXN0KFwiYSxidXR0b25cIik7XG4gICAgICAgIGF0dHIoYnV0dG9uLCBcInJvbGVcIiwgdGhpcy5yb2xlICE9PSBudWxsICYmIGlzVGFnKGJ1dHRvbiwgXCJhXCIpID8gXCJidXR0b25cIiA6IHRoaXMucm9sZSk7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy50KFwibGFiZWxcIik7XG4gICAgICAgIGlmIChsYWJlbCAmJiAhaGFzQXR0cihidXR0b24sIFwiYXJpYS1sYWJlbFwiKSkge1xuICAgICAgICAgIGF0dHIoYnV0dG9uLCBcImFyaWEtbGFiZWxcIiwgbGFiZWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBTbGlkZW5hdiA9IHtcbiAgICAgIGV4dGVuZHM6IEJ1dHRvbkNvbXBvbmVudCxcbiAgICAgIGJlZm9yZUNvbm5lY3QoKSB7XG4gICAgICAgIGFkZENsYXNzKHRoaXMuJGVsLCBcInVrLXNsaWRlbmF2XCIpO1xuICAgICAgICBjb25zdCBpY29uID0gdGhpcy4kcHJvcHMuaWNvbjtcbiAgICAgICAgdGhpcy5pY29uID0gaGFzQ2xhc3ModGhpcy4kZWwsIFwidWstc2xpZGVuYXYtbGFyZ2VcIikgPyBgJHtpY29ufS1sYXJnZWAgOiBpY29uO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgTmF2YmFyVG9nZ2xlSWNvbiA9IHtcbiAgICAgIGV4dGVuZHM6IEJ1dHRvbkNvbXBvbmVudCxcbiAgICAgIGkxOG46IHsgbGFiZWw6IFwiT3BlbiBtZW51XCIgfVxuICAgIH07XG4gICAgY29uc3QgQ2xvc2UgPSB7XG4gICAgICBleHRlbmRzOiBCdXR0b25Db21wb25lbnQsXG4gICAgICBpMThuOiB7IGxhYmVsOiBcIkNsb3NlXCIgfSxcbiAgICAgIGJlZm9yZUNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuaWNvbiA9IGBjbG9zZS0ke2hhc0NsYXNzKHRoaXMuJGVsLCBcInVrLWNsb3NlLWxhcmdlXCIpID8gXCJsYXJnZVwiIDogXCJpY29uXCJ9YDtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IE1hcmtlciA9IHtcbiAgICAgIGV4dGVuZHM6IEJ1dHRvbkNvbXBvbmVudCxcbiAgICAgIGkxOG46IHsgbGFiZWw6IFwiT3BlblwiIH1cbiAgICB9O1xuICAgIGNvbnN0IFRvdG9wID0ge1xuICAgICAgZXh0ZW5kczogQnV0dG9uQ29tcG9uZW50LFxuICAgICAgaTE4bjogeyBsYWJlbDogXCJCYWNrIHRvIHRvcFwiIH1cbiAgICB9O1xuICAgIGNvbnN0IFBhZ2luYXRpb25OZXh0ID0ge1xuICAgICAgZXh0ZW5kczogQnV0dG9uQ29tcG9uZW50LFxuICAgICAgaTE4bjogeyBsYWJlbDogXCJOZXh0IHBhZ2VcIiB9LFxuICAgICAgZGF0YTogeyByb2xlOiBudWxsIH1cbiAgICB9O1xuICAgIGNvbnN0IFBhZ2luYXRpb25QcmV2aW91cyA9IHtcbiAgICAgIGV4dGVuZHM6IEJ1dHRvbkNvbXBvbmVudCxcbiAgICAgIGkxOG46IHsgbGFiZWw6IFwiUHJldmlvdXMgcGFnZVwiIH0sXG4gICAgICBkYXRhOiB7IHJvbGU6IG51bGwgfVxuICAgIH07XG4gICAgY29uc3QgcGFyc2VkID0ge307XG4gICAgZnVuY3Rpb24gaW5zdGFsbCQxKFVJa2l0KSB7XG4gICAgICBVSWtpdC5pY29uLmFkZCA9IChuYW1lLCBzdmcpID0+IHtcbiAgICAgICAgY29uc3QgYWRkZWQgPSBpc1N0cmluZyhuYW1lKSA/IHsgW25hbWVdOiBzdmcgfSA6IG5hbWU7XG4gICAgICAgIGVhY2goYWRkZWQsIChzdmcyLCBuYW1lMikgPT4ge1xuICAgICAgICAgIGljb25zW25hbWUyXSA9IHN2ZzI7XG4gICAgICAgICAgZGVsZXRlIHBhcnNlZFtuYW1lMl07XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoVUlraXQuX2luaXRpYWxpemVkKSB7XG4gICAgICAgICAgYXBwbHkoXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LFxuICAgICAgICAgICAgKGVsKSA9PiBlYWNoKFVJa2l0LmdldENvbXBvbmVudHMoZWwpLCAoY21wKSA9PiB7XG4gICAgICAgICAgICAgIGNtcC4kb3B0aW9ucy5pc0ljb24gJiYgY21wLmljb24gaW4gYWRkZWQgJiYgY21wLiRyZXNldCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBhbGlhc2VzID0geyB0d2l0dGVyOiBcInhcIiB9O1xuICAgIGZ1bmN0aW9uIGdldEljb24oaWNvbikge1xuICAgICAgaWNvbiA9IGFsaWFzZXNbaWNvbl0gfHwgaWNvbjtcbiAgICAgIGlmICghaWNvbnNbaWNvbl0pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBpZiAoIXBhcnNlZFtpY29uXSkge1xuICAgICAgICBwYXJzZWRbaWNvbl0gPSBzdHJpbmdUb1N2ZyhpY29uc1thcHBseVJ0bChpY29uKV0gfHwgaWNvbnNbaWNvbl0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBhcnNlZFtpY29uXS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFwcGx5UnRsKGljb24pIHtcbiAgICAgIHJldHVybiBpc1J0bCA/IHN3YXAoc3dhcChpY29uLCBcImxlZnRcIiwgXCJyaWdodFwiKSwgXCJwcmV2aW91c1wiLCBcIm5leHRcIikgOiBpY29uO1xuICAgIH1cblxuICAgIHZhciBpbWcgPSB7XG4gICAgICBhcmdzOiBcImRhdGFTcmNcIixcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGRhdGFTcmM6IFN0cmluZyxcbiAgICAgICAgc291cmNlczogU3RyaW5nLFxuICAgICAgICBtYXJnaW46IFN0cmluZyxcbiAgICAgICAgdGFyZ2V0OiBTdHJpbmcsXG4gICAgICAgIGxvYWRpbmc6IFN0cmluZ1xuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZGF0YVNyYzogXCJcIixcbiAgICAgICAgc291cmNlczogZmFsc2UsXG4gICAgICAgIG1hcmdpbjogXCI1MCVcIixcbiAgICAgICAgdGFyZ2V0OiBmYWxzZSxcbiAgICAgICAgbG9hZGluZzogXCJsYXp5XCJcbiAgICAgIH0sXG4gICAgICBjb25uZWN0ZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmcgIT09IFwibGF6eVwiKSB7XG4gICAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNJbWcodGhpcy4kZWwpKSB7XG4gICAgICAgICAgdGhpcy4kZWwubG9hZGluZyA9IFwibGF6eVwiO1xuICAgICAgICAgIHNldFNyY0F0dHJzKHRoaXMuJGVsKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRpc2Nvbm5lY3RlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW1nKSB7XG4gICAgICAgICAgdGhpcy5pbWcub25sb2FkID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgdGhpcy5pbWc7XG4gICAgICB9LFxuICAgICAgb2JzZXJ2ZTogaW50ZXJzZWN0aW9uKHtcbiAgICAgICAgaGFuZGxlcihlbnRyaWVzLCBvYnNlcnZlcikge1xuICAgICAgICAgIHRoaXMubG9hZCgpO1xuICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczogKHsgbWFyZ2luIH0pID0+ICh7IHJvb3RNYXJnaW46IG1hcmdpbiB9KSxcbiAgICAgICAgZmlsdGVyOiAoeyBsb2FkaW5nIH0pID0+IGxvYWRpbmcgPT09IFwibGF6eVwiLFxuICAgICAgICB0YXJnZXQ6ICh7ICRlbCwgJHByb3BzIH0pID0+ICRwcm9wcy50YXJnZXQgPyBbJGVsLCAuLi5xdWVyeUFsbCgkcHJvcHMudGFyZ2V0LCAkZWwpXSA6ICRlbFxuICAgICAgfSksXG4gICAgICBtZXRob2RzOiB7XG4gICAgICAgIGxvYWQoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaW1nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbWc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGltYWdlID0gaXNJbWcodGhpcy4kZWwpID8gdGhpcy4kZWwgOiBnZXRJbWFnZUZyb21FbGVtZW50KHRoaXMuJGVsLCB0aGlzLmRhdGFTcmMsIHRoaXMuc291cmNlcyk7XG4gICAgICAgICAgcmVtb3ZlQXR0cihpbWFnZSwgXCJsb2FkaW5nXCIpO1xuICAgICAgICAgIHNldFNyY0F0dHJzKHRoaXMuJGVsLCBpbWFnZS5jdXJyZW50U3JjKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5pbWcgPSBpbWFnZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgZnVuY3Rpb24gc2V0U3JjQXR0cnMoZWwsIHNyYykge1xuICAgICAgaWYgKGlzSW1nKGVsKSkge1xuICAgICAgICBjb25zdCBwYXJlbnROb2RlID0gcGFyZW50KGVsKTtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBpc1RhZyhwYXJlbnROb2RlLCBcInBpY3R1cmVcIikgPyBjaGlsZHJlbihwYXJlbnROb2RlKSA6IFtlbF07XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsMikgPT4gc2V0U291cmNlUHJvcHMoZWwyLCBlbDIpKTtcbiAgICAgIH0gZWxzZSBpZiAoc3JjKSB7XG4gICAgICAgIGNvbnN0IGNoYW5nZSA9ICFpbmNsdWRlcyhlbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UsIHNyYyk7XG4gICAgICAgIGlmIChjaGFuZ2UpIHtcbiAgICAgICAgICBjc3MoZWwsIFwiYmFja2dyb3VuZEltYWdlXCIsIGB1cmwoJHtlc2NhcGUoc3JjKX0pYCk7XG4gICAgICAgICAgdHJpZ2dlcihlbCwgY3JlYXRlRXZlbnQoXCJsb2FkXCIsIGZhbHNlKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgc3JjUHJvcHMgPSBbXCJkYXRhLXNyY1wiLCBcImRhdGEtc3Jjc2V0XCIsIFwic2l6ZXNcIl07XG4gICAgZnVuY3Rpb24gc2V0U291cmNlUHJvcHMoc291cmNlRWwsIHRhcmdldEVsKSB7XG4gICAgICBmb3IgKGNvbnN0IHByb3Agb2Ygc3JjUHJvcHMpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBkYXRhKHNvdXJjZUVsLCBwcm9wKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgYXR0cih0YXJnZXRFbCwgcHJvcC5yZXBsYWNlKC9eKGRhdGEtKSsvLCBcIlwiKSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEltYWdlRnJvbUVsZW1lbnQoZWwsIHNyYywgc291cmNlcykge1xuICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICB3cmFwSW5QaWN0dXJlKGltZywgc291cmNlcyk7XG4gICAgICBzZXRTb3VyY2VQcm9wcyhlbCwgaW1nKTtcbiAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHNldFNyY0F0dHJzKGVsLCBpbWcuY3VycmVudFNyYyk7XG4gICAgICB9O1xuICAgICAgYXR0cihpbWcsIFwic3JjXCIsIHNyYyk7XG4gICAgICByZXR1cm4gaW1nO1xuICAgIH1cbiAgICBmdW5jdGlvbiB3cmFwSW5QaWN0dXJlKGltZywgc291cmNlcykge1xuICAgICAgc291cmNlcyA9IHBhcnNlU291cmNlcyhzb3VyY2VzKTtcbiAgICAgIGlmIChzb3VyY2VzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBwaWN0dXJlID0gZnJhZ21lbnQoXCI8cGljdHVyZT5cIik7XG4gICAgICAgIGZvciAoY29uc3QgYXR0cnMgb2Ygc291cmNlcykge1xuICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IGZyYWdtZW50KFwiPHNvdXJjZT5cIik7XG4gICAgICAgICAgYXR0cihzb3VyY2UsIGF0dHJzKTtcbiAgICAgICAgICBhcHBlbmQocGljdHVyZSwgc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICBhcHBlbmQocGljdHVyZSwgaW1nKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcGFyc2VTb3VyY2VzKHNvdXJjZXMpIHtcbiAgICAgIGlmICghc291cmNlcykge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgICBpZiAoc3RhcnRzV2l0aChzb3VyY2VzLCBcIltcIikpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBzb3VyY2VzID0gSlNPTi5wYXJzZShzb3VyY2VzKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHNvdXJjZXMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc291cmNlcyA9IHBhcnNlT3B0aW9ucyhzb3VyY2VzKTtcbiAgICAgIH1cbiAgICAgIGlmICghaXNBcnJheShzb3VyY2VzKSkge1xuICAgICAgICBzb3VyY2VzID0gW3NvdXJjZXNdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNvdXJjZXMuZmlsdGVyKChzb3VyY2UpID0+ICFpc0VtcHR5KHNvdXJjZSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0ltZyhlbCkge1xuICAgICAgcmV0dXJuIGlzVGFnKGVsLCBcImltZ1wiKTtcbiAgICB9XG5cbiAgICB2YXIgaW52ZXJzZSA9IHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHRhcmdldDogU3RyaW5nLFxuICAgICAgICBzZWxBY3RpdmU6IFN0cmluZ1xuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGFyZ2V0OiBmYWxzZSxcbiAgICAgICAgc2VsQWN0aXZlOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHRhcmdldDogKHsgdGFyZ2V0IH0sICRlbCkgPT4gdGFyZ2V0ID8gJCQodGFyZ2V0LCAkZWwpIDogJGVsXG4gICAgICB9LFxuICAgICAgb2JzZXJ2ZTogW1xuICAgICAgICBpbnRlcnNlY3Rpb24oe1xuICAgICAgICAgIGhhbmRsZXIoZW50cmllcykge1xuICAgICAgICAgICAgdGhpcy5pc0ludGVyc2VjdGluZyA9IGVudHJpZXMuc29tZSgoeyBpc0ludGVyc2VjdGluZyB9KSA9PiBpc0ludGVyc2VjdGluZyk7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB0YXJnZXQ6ICh7IHRhcmdldCB9KSA9PiB0YXJnZXQsXG4gICAgICAgICAgYXJnczogeyBpbnRlcnNlY3Rpbmc6IGZhbHNlIH1cbiAgICAgICAgfSksXG4gICAgICAgIG11dGF0aW9uKHtcbiAgICAgICAgICB0YXJnZXQ6ICh7IHRhcmdldCB9KSA9PiB0YXJnZXQsXG4gICAgICAgICAgb3B0aW9uczogeyBhdHRyaWJ1dGVzOiB0cnVlLCBhdHRyaWJ1dGVGaWx0ZXI6IFtcImNsYXNzXCJdLCBhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSB9XG4gICAgICAgIH0pLFxuICAgICAgICB7XG4gICAgICAgICAgdGFyZ2V0OiAoeyB0YXJnZXQgfSkgPT4gdGFyZ2V0LFxuICAgICAgICAgIG9ic2VydmU6ICh0YXJnZXQsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9ic2VydmVyID0gb2JzZXJ2ZVJlc2l6ZShcbiAgICAgICAgICAgICAgWy4uLnRvTm9kZXModGFyZ2V0KSwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XSxcbiAgICAgICAgICAgICAgaGFuZGxlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVyID0gW1xuICAgICAgICAgICAgICBvbihkb2N1bWVudCwgXCJzY3JvbGwgaXRlbXNob3duIGl0ZW1oaWRkZW5cIiwgaGFuZGxlciwge1xuICAgICAgICAgICAgICAgIHBhc3NpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgY2FwdHVyZTogdHJ1ZVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgb24oZG9jdW1lbnQsIFwic2hvdyBoaWRlIHRyYW5zaXRpb25zdGFydFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JzZXJ2ZXIub2JzZXJ2ZShlLnRhcmdldCk7XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBvbihkb2N1bWVudCwgXCJzaG93biBoaWRkZW4gdHJhbnNpdGlvbmVuZCB0cmFuc2l0aW9uY2FuY2VsXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvYnNlcnZlci51bm9ic2VydmUoZS50YXJnZXQpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG9ic2VydmU6IG9ic2VydmVyLm9ic2VydmUuYmluZChvYnNlcnZlciksXG4gICAgICAgICAgICAgIHVub2JzZXJ2ZTogb2JzZXJ2ZXIudW5vYnNlcnZlLmJpbmQob2JzZXJ2ZXIpLFxuICAgICAgICAgICAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5tYXAoKG9mZikgPT4gb2ZmKCkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICB1cGRhdGU6IHtcbiAgICAgICAgcmVhZCgpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChjb25zdCB0YXJnZXQgb2YgdG9Ob2Rlcyh0aGlzLnRhcmdldCkpIHtcbiAgICAgICAgICAgIGxldCBjb2xvciA9ICF0aGlzLnNlbEFjdGl2ZSB8fCBtYXRjaGVzKHRhcmdldCwgdGhpcy5zZWxBY3RpdmUpID8gZmluZFRhcmdldENvbG9yKHRhcmdldCkgOiBcIlwiO1xuICAgICAgICAgICAgaWYgKGNvbG9yICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICByZXBsYWNlQ2xhc3ModGFyZ2V0LCBcInVrLWxpZ2h0IHVrLWRhcmtcIiwgY29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgZnVuY3Rpb24gZmluZFRhcmdldENvbG9yKHRhcmdldCkge1xuICAgICAgY29uc3QgZGltID0gZGltZW5zaW9ucyQxKHRhcmdldCk7XG4gICAgICBjb25zdCB2aWV3cG9ydCA9IGRpbWVuc2lvbnMkMSh3aW5kb3cpO1xuICAgICAgaWYgKCFpbnRlcnNlY3RSZWN0KGRpbSwgdmlld3BvcnQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgbGVmdCwgdG9wLCBoZWlnaHQsIHdpZHRoIH0gPSBkaW07XG4gICAgICBsZXQgbGFzdDtcbiAgICAgIGZvciAoY29uc3QgcGVyY2VudCBvZiBbMC4yNSwgMC41LCAwLjc1XSkge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IHRhcmdldC5vd25lckRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KFxuICAgICAgICAgIE1hdGgubWF4KDAsIE1hdGgubWluKGxlZnQgKyB3aWR0aCAqIHBlcmNlbnQsIHZpZXdwb3J0LndpZHRoIC0gMSkpLFxuICAgICAgICAgIE1hdGgubWF4KDAsIE1hdGgubWluKHRvcCArIGhlaWdodCAvIDIsIHZpZXdwb3J0LmhlaWdodCAtIDEpKVxuICAgICAgICApO1xuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgICBpZiAodGFyZ2V0LmNvbnRhaW5zKGVsZW1lbnQpIHx8ICFjaGVja1Zpc2liaWxpdHkoZWxlbWVudCkgfHwgZWxlbWVudC5jbG9zZXN0KCdbY2xhc3MqPVwiLWxlYXZlXCJdJykgJiYgZWxlbWVudHMuc29tZSgoZWwpID0+IGVsZW1lbnQgIT09IGVsICYmIG1hdGNoZXMoZWwsICdbY2xhc3MqPVwiLWVudGVyXCJdJykpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgY29sb3IgPSBjc3MoZWxlbWVudCwgXCItLXVrLWludmVyc2VcIik7XG4gICAgICAgICAgaWYgKGNvbG9yKSB7XG4gICAgICAgICAgICBpZiAoY29sb3IgPT09IGxhc3QpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGB1ay0ke2NvbG9yfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYXN0ID0gY29sb3I7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBsYXN0ID8gYHVrLSR7bGFzdH1gIDogXCJcIjtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tWaXNpYmlsaXR5KGVsZW1lbnQpIHtcbiAgICAgIGlmIChjc3MoZWxlbWVudCwgXCJ2aXNpYmlsaXR5XCIpICE9PSBcInZpc2libGVcIikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgICBpZiAoY3NzKGVsZW1lbnQsIFwib3BhY2l0eVwiKSA9PT0gXCIwXCIpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IHBhcmVudChlbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBsZWFkZXIgPSB7XG4gICAgICBtaXhpbnM6IFtDbGFzcywgTWVkaWFdLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgZmlsbDogU3RyaW5nXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBmaWxsOiBcIlwiLFxuICAgICAgICBjbHNXcmFwcGVyOiBcInVrLWxlYWRlci1maWxsXCIsXG4gICAgICAgIGNsc0hpZGU6IFwidWstbGVhZGVyLWhpZGVcIixcbiAgICAgICAgYXR0ckZpbGw6IFwiZGF0YS1maWxsXCJcbiAgICAgIH0sXG4gICAgICBjb21wdXRlZDoge1xuICAgICAgICBmaWxsOiAoeyBmaWxsIH0sICRlbCkgPT4gZmlsbCB8fCBjc3MoJGVsLCBcIi0tdWstbGVhZGVyLWZpbGwtY29udGVudFwiKVxuICAgICAgfSxcbiAgICAgIGNvbm5lY3RlZCgpIHtcbiAgICAgICAgW3RoaXMud3JhcHBlcl0gPSB3cmFwSW5uZXIodGhpcy4kZWwsIGA8c3BhbiBjbGFzcz1cIiR7dGhpcy5jbHNXcmFwcGVyfVwiPmApO1xuICAgICAgfSxcbiAgICAgIGRpc2Nvbm5lY3RlZCgpIHtcbiAgICAgICAgdW53cmFwKHRoaXMud3JhcHBlci5jaGlsZE5vZGVzKTtcbiAgICAgIH0sXG4gICAgICBvYnNlcnZlOiByZXNpemUoKSxcbiAgICAgIHVwZGF0ZToge1xuICAgICAgICByZWFkKCkge1xuICAgICAgICAgIGNvbnN0IHdpZHRoID0gTWF0aC50cnVuYyh0aGlzLiRlbC5vZmZzZXRXaWR0aCAvIDIpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGZpbGw6IHRoaXMuZmlsbCxcbiAgICAgICAgICAgIGhpZGU6ICF0aGlzLm1hdGNoTWVkaWFcbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICB3cml0ZSh7IHdpZHRoLCBmaWxsLCBoaWRlIH0pIHtcbiAgICAgICAgICB0b2dnbGVDbGFzcyh0aGlzLndyYXBwZXIsIHRoaXMuY2xzSGlkZSwgaGlkZSk7XG4gICAgICAgICAgYXR0cih0aGlzLndyYXBwZXIsIHRoaXMuYXR0ckZpbGwsIG5ldyBBcnJheSh3aWR0aCkuam9pbihmaWxsKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGV2ZW50czogW1wicmVzaXplXCJdXG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBtb2RhbCA9IHtcbiAgICAgIGluc3RhbGwsXG4gICAgICBtaXhpbnM6IFtNb2RhbF0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNsc1BhZ2U6IFwidWstbW9kYWwtcGFnZVwiLFxuICAgICAgICBzZWxQYW5lbDogXCIudWstbW9kYWwtZGlhbG9nXCIsXG4gICAgICAgIHNlbENsb3NlOiAnW2NsYXNzKj1cInVrLW1vZGFsLWNsb3NlXCJdJ1xuICAgICAgfSxcbiAgICAgIGV2ZW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJmdWxsc2NyZWVuY2hhbmdlIHdlYmtpdGVuZGZ1bGxzY3JlZW5cIixcbiAgICAgICAgICBjYXB0dXJlOiB0cnVlLFxuICAgICAgICAgIGhhbmRsZXIoZSkge1xuICAgICAgICAgICAgaWYgKGlzVGFnKGUudGFyZ2V0LCBcInZpZGVvXCIpICYmIHRoaXMuaXNUb2dnbGVkKCkgJiYgIWRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50KSB7XG4gICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgIHNlbGY6IHRydWUsXG4gICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgIGlmIChoYXNDbGFzcyh0aGlzLnBhbmVsLCBcInVrLW1hcmdpbi1hdXRvLXZlcnRpY2FsXCIpKSB7XG4gICAgICAgICAgICAgIGFkZENsYXNzKHRoaXMuJGVsLCBcInVrLWZsZXhcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjc3ModGhpcy4kZWwsIFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGVpZ2h0KHRoaXMuJGVsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcImhpZGRlblwiLFxuICAgICAgICAgIHNlbGY6IHRydWUsXG4gICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgIGNzcyh0aGlzLiRlbCwgXCJkaXNwbGF5XCIsIFwiXCIpO1xuICAgICAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy4kZWwsIFwidWstZmxleFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICAgIGZ1bmN0aW9uIGluc3RhbGwoeyBtb2RhbCB9KSB7XG4gICAgICBtb2RhbC5kaWFsb2cgPSBmdW5jdGlvbihjb250ZW50LCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGRpYWxvZyA9IG1vZGFsKCQoYDxkaXY+PGRpdiBjbGFzcz1cInVrLW1vZGFsLWRpYWxvZ1wiPiR7Y29udGVudH08L2Rpdj48L2Rpdj5gKSwge1xuICAgICAgICAgIHN0YWNrOiB0cnVlLFxuICAgICAgICAgIHJvbGU6IFwiYWxlcnRkaWFsb2dcIixcbiAgICAgICAgICAuLi5vcHRpb25zXG4gICAgICAgIH0pO1xuICAgICAgICBkaWFsb2cuc2hvdygpO1xuICAgICAgICBvbihcbiAgICAgICAgICBkaWFsb2cuJGVsLFxuICAgICAgICAgIFwiaGlkZGVuXCIsXG4gICAgICAgICAgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICBkaWFsb2cuJGRlc3Ryb3kodHJ1ZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IHNlbGY6IHRydWUgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZGlhbG9nO1xuICAgICAgfTtcbiAgICAgIG1vZGFsLmFsZXJ0ID0gZnVuY3Rpb24obWVzc2FnZSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gb3BlbkRpYWxvZyhcbiAgICAgICAgICAoeyBpMThuIH0pID0+IGA8ZGl2IGNsYXNzPVwidWstbW9kYWwtYm9keVwiPiR7aXNTdHJpbmcobWVzc2FnZSkgPyBtZXNzYWdlIDogaHRtbChtZXNzYWdlKX08L2Rpdj4gPGRpdiBjbGFzcz1cInVrLW1vZGFsLWZvb3RlciB1ay10ZXh0LXJpZ2h0XCI+IDxidXR0b24gY2xhc3M9XCJ1ay1idXR0b24gdWstYnV0dG9uLXByaW1hcnkgdWstbW9kYWwtY2xvc2VcIiBhdXRvZm9jdXM+JHtpMThuLm9rfTwvYnV0dG9uPiA8L2Rpdj5gLFxuICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgKTtcbiAgICAgIH07XG4gICAgICBtb2RhbC5jb25maXJtID0gZnVuY3Rpb24obWVzc2FnZSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gb3BlbkRpYWxvZyhcbiAgICAgICAgICAoeyBpMThuIH0pID0+IGA8Zm9ybT4gPGRpdiBjbGFzcz1cInVrLW1vZGFsLWJvZHlcIj4ke2lzU3RyaW5nKG1lc3NhZ2UpID8gbWVzc2FnZSA6IGh0bWwobWVzc2FnZSl9PC9kaXY+IDxkaXYgY2xhc3M9XCJ1ay1tb2RhbC1mb290ZXIgdWstdGV4dC1yaWdodFwiPiA8YnV0dG9uIGNsYXNzPVwidWstYnV0dG9uIHVrLWJ1dHRvbi1kZWZhdWx0IHVrLW1vZGFsLWNsb3NlXCIgdHlwZT1cImJ1dHRvblwiPiR7aTE4bi5jYW5jZWx9PC9idXR0b24+IDxidXR0b24gY2xhc3M9XCJ1ay1idXR0b24gdWstYnV0dG9uLXByaW1hcnlcIiBhdXRvZm9jdXM+JHtpMThuLm9rfTwvYnV0dG9uPiA8L2Rpdj4gPC9mb3JtPmAsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAoKSA9PiBQcm9taXNlLnJlamVjdCgpXG4gICAgICAgICk7XG4gICAgICB9O1xuICAgICAgbW9kYWwucHJvbXB0ID0gZnVuY3Rpb24obWVzc2FnZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IG9wZW5EaWFsb2coXG4gICAgICAgICAgKHsgaTE4biB9KSA9PiBgPGZvcm0gY2xhc3M9XCJ1ay1mb3JtLXN0YWNrZWRcIj4gPGRpdiBjbGFzcz1cInVrLW1vZGFsLWJvZHlcIj4gPGxhYmVsPiR7aXNTdHJpbmcobWVzc2FnZSkgPyBtZXNzYWdlIDogaHRtbChtZXNzYWdlKX08L2xhYmVsPiA8aW5wdXQgY2xhc3M9XCJ1ay1pbnB1dFwiIGF1dG9mb2N1cz4gPC9kaXY+IDxkaXYgY2xhc3M9XCJ1ay1tb2RhbC1mb290ZXIgdWstdGV4dC1yaWdodFwiPiA8YnV0dG9uIGNsYXNzPVwidWstYnV0dG9uIHVrLWJ1dHRvbi1kZWZhdWx0IHVrLW1vZGFsLWNsb3NlXCIgdHlwZT1cImJ1dHRvblwiPiR7aTE4bi5jYW5jZWx9PC9idXR0b24+IDxidXR0b24gY2xhc3M9XCJ1ay1idXR0b24gdWstYnV0dG9uLXByaW1hcnlcIj4ke2kxOG4ub2t9PC9idXR0b24+IDwvZGl2PiA8L2Zvcm0+YCxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICgpID0+IG51bGwsXG4gICAgICAgICAgKCkgPT4gaW5wdXQudmFsdWVcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgeyAkZWwgfSA9IHByb21pc2UuZGlhbG9nO1xuICAgICAgICBjb25zdCBpbnB1dCA9ICQoXCJpbnB1dFwiLCAkZWwpO1xuICAgICAgICBpbnB1dC52YWx1ZSA9IHZhbHVlIHx8IFwiXCI7XG4gICAgICAgIG9uKCRlbCwgXCJzaG93XCIsICgpID0+IGlucHV0LnNlbGVjdCgpKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9O1xuICAgICAgbW9kYWwuaTE4biA9IHtcbiAgICAgICAgb2s6IFwiT2tcIixcbiAgICAgICAgY2FuY2VsOiBcIkNhbmNlbFwiXG4gICAgICB9O1xuICAgICAgZnVuY3Rpb24gb3BlbkRpYWxvZyh0bXBsLCBvcHRpb25zLCBoaWRlRm4gPSBub29wLCBzdWJtaXRGbiA9IG5vb3ApIHtcbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICBiZ0Nsb3NlOiBmYWxzZSxcbiAgICAgICAgICBlc2NDbG9zZTogdHJ1ZSxcbiAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgIGkxOG46IHsgLi4ubW9kYWwuaTE4biwgLi4ub3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5pMThuIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZGlhbG9nID0gbW9kYWwuZGlhbG9nKHRtcGwob3B0aW9ucyksIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gYXNzaWduKFxuICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvZmYgPSBvbihkaWFsb2cuJGVsLCBcImhpZGVcIiwgKCkgPT4gcmVzb2x2ZShoaWRlRm4oKSkpO1xuICAgICAgICAgICAgb24oZGlhbG9nLiRlbCwgXCJzdWJtaXRcIiwgXCJmb3JtXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZShzdWJtaXRGbihkaWFsb2cpKTtcbiAgICAgICAgICAgICAgb2ZmKCk7XG4gICAgICAgICAgICAgIGRpYWxvZy5oaWRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB7IGRpYWxvZyB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIG5hdiA9IHtcbiAgICAgIGV4dGVuZHM6IEFjY29yZGlvbixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGFyZ2V0czogXCI+IC51ay1wYXJlbnRcIixcbiAgICAgICAgdG9nZ2xlOiBcIj4gYVwiLFxuICAgICAgICBjb250ZW50OiBcIj4gdWxcIlxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBjbHNOYXZiYXJUcmFuc3BhcmVudCA9IFwidWstbmF2YmFyLXRyYW5zcGFyZW50XCI7XG4gICAgdmFyIG5hdmJhciA9IHtcbiAgICAgIGV4dGVuZHM6IERyb3BuYXYsXG4gICAgICBwcm9wczoge1xuICAgICAgICBkcm9wYmFyVHJhbnNwYXJlbnRNb2RlOiBCb29sZWFuXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBjbHNEcm9wOiBcInVrLW5hdmJhci1kcm9wZG93blwiLFxuICAgICAgICBzZWxOYXZJdGVtOiBcIi51ay1uYXZiYXItbmF2ID4gbGkgPiBhLGEudWstbmF2YmFyLWl0ZW0sYnV0dG9uLnVrLW5hdmJhci1pdGVtLC51ay1uYXZiYXItaXRlbSBhLC51ay1uYXZiYXItaXRlbSBidXR0b24sLnVrLW5hdmJhci10b2dnbGVcIixcbiAgICAgICAgLy8gU2ltcGxpZnkgd2l0aCA6d2hlcmUoKSBzZWxlY3RvciBvbmNlIGJyb3dzZXIgdGFyZ2V0IGlzIFNhZmFyaSAxNCtcbiAgICAgICAgZHJvcGJhclRyYW5zcGFyZW50TW9kZTogZmFsc2VcbiAgICAgIH0sXG4gICAgICBjb21wdXRlZDoge1xuICAgICAgICBuYXZiYXJDb250YWluZXI6IChfLCAkZWwpID0+ICRlbC5jbG9zZXN0KFwiLnVrLW5hdmJhci1jb250YWluZXJcIilcbiAgICAgIH0sXG4gICAgICB3YXRjaDoge1xuICAgICAgICBpdGVtcygpIHtcbiAgICAgICAgICBjb25zdCBqdXN0aWZ5ID0gaGFzQ2xhc3ModGhpcy4kZWwsIFwidWstbmF2YmFyLWp1c3RpZnlcIik7XG4gICAgICAgICAgY29uc3QgY29udGFpbmVycyA9ICQkKFwiLnVrLW5hdmJhci1uYXYsIC51ay1uYXZiYXItbGVmdCwgLnVrLW5hdmJhci1yaWdodFwiLCB0aGlzLiRlbCk7XG4gICAgICAgICAgZm9yIChjb25zdCBjb250YWluZXIgb2YgY29udGFpbmVycykge1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBqdXN0aWZ5ID8gJCQoXCIudWstbmF2YmFyLW5hdiA+IGxpID4gYSwgLnVrLW5hdmJhci1pdGVtLCAudWstbmF2YmFyLXRvZ2dsZVwiLCBjb250YWluZXIpLmxlbmd0aCA6IFwiXCI7XG4gICAgICAgICAgICBjc3MoY29udGFpbmVyLCBcImZsZXhHcm93XCIsIGl0ZW1zKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBldmVudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgIGVsOiAoeyBkcm9wQ29udGFpbmVyIH0pID0+IGRyb3BDb250YWluZXIsXG4gICAgICAgICAgaGFuZGxlcih7IHRhcmdldCB9KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXRUcmFuc3BhcmVudE1vZGUodGFyZ2V0KSA9PT0gXCJyZW1vdmVcIiAmJiBoYXNDbGFzcyh0aGlzLm5hdmJhckNvbnRhaW5lciwgY2xzTmF2YmFyVHJhbnNwYXJlbnQpKSB7XG4gICAgICAgICAgICAgIHJlbW92ZUNsYXNzKHRoaXMubmF2YmFyQ29udGFpbmVyLCBjbHNOYXZiYXJUcmFuc3BhcmVudCk7XG4gICAgICAgICAgICAgIHRoaXMuX3RyYW5zcGFyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcImhpZGVcIixcbiAgICAgICAgICBlbDogKHsgZHJvcENvbnRhaW5lciB9KSA9PiBkcm9wQ29udGFpbmVyLFxuICAgICAgICAgIGFzeW5jIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICBhd2FpdCBhd2FpdE1hY3JvVGFzaygpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmdldEFjdGl2ZSgpICYmIHRoaXMuX3RyYW5zcGFyZW50KSB7XG4gICAgICAgICAgICAgIGFkZENsYXNzKHRoaXMubmF2YmFyQ29udGFpbmVyLCBjbHNOYXZiYXJUcmFuc3BhcmVudCk7XG4gICAgICAgICAgICAgIHRoaXMuX3RyYW5zcGFyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBtZXRob2RzOiB7XG4gICAgICAgIGdldFRyYW5zcGFyZW50TW9kZShlbCkge1xuICAgICAgICAgIGlmICghdGhpcy5uYXZiYXJDb250YWluZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuZHJvcGJhciAmJiB0aGlzLmlzRHJvcGJhckRyb3AoZWwpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kcm9wYmFyVHJhbnNwYXJlbnRNb2RlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBkcm9wID0gdGhpcy5nZXREcm9wZG93bihlbCk7XG4gICAgICAgICAgaWYgKGRyb3AgJiYgaGFzQ2xhc3MoZWwsIFwidWstZHJvcGJhclwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIGRyb3AuaW5zZXQgPyBcImJlaGluZFwiIDogXCJyZW1vdmVcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdldERyb3BiYXJPZmZzZXQob2Zmc2V0VG9wKSB7XG4gICAgICAgICAgY29uc3QgeyB0b3AsIGhlaWdodCB9ID0gb2Zmc2V0KHRoaXMubmF2YmFyQ29udGFpbmVyKTtcbiAgICAgICAgICByZXR1cm4gdG9wICsgKHRoaXMuZHJvcGJhclRyYW5zcGFyZW50TW9kZSA9PT0gXCJiZWhpbmRcIiA/IDAgOiBoZWlnaHQgKyBvZmZzZXRUb3ApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBmdW5jdGlvbiBhd2FpdE1hY3JvVGFzaygpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlKSk7XG4gICAgfVxuXG4gICAgdmFyIG9mZmNhbnZhcyA9IHtcbiAgICAgIG1peGluczogW01vZGFsXSxcbiAgICAgIGFyZ3M6IFwibW9kZVwiLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgbW9kZTogU3RyaW5nLFxuICAgICAgICBmbGlwOiBCb29sZWFuLFxuICAgICAgICBvdmVybGF5OiBCb29sZWFuLFxuICAgICAgICBzd2lwaW5nOiBCb29sZWFuXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBtb2RlOiBcInNsaWRlXCIsXG4gICAgICAgIGZsaXA6IGZhbHNlLFxuICAgICAgICBvdmVybGF5OiBmYWxzZSxcbiAgICAgICAgY2xzUGFnZTogXCJ1ay1vZmZjYW52YXMtcGFnZVwiLFxuICAgICAgICBjbHNDb250YWluZXI6IFwidWstb2ZmY2FudmFzLWNvbnRhaW5lclwiLFxuICAgICAgICBzZWxQYW5lbDogXCIudWstb2ZmY2FudmFzLWJhclwiLFxuICAgICAgICBjbHNGbGlwOiBcInVrLW9mZmNhbnZhcy1mbGlwXCIsXG4gICAgICAgIGNsc0NvbnRhaW5lckFuaW1hdGlvbjogXCJ1ay1vZmZjYW52YXMtY29udGFpbmVyLWFuaW1hdGlvblwiLFxuICAgICAgICBjbHNTaWRlYmFyQW5pbWF0aW9uOiBcInVrLW9mZmNhbnZhcy1iYXItYW5pbWF0aW9uXCIsXG4gICAgICAgIGNsc01vZGU6IFwidWstb2ZmY2FudmFzXCIsXG4gICAgICAgIGNsc092ZXJsYXk6IFwidWstb2ZmY2FudmFzLW92ZXJsYXlcIixcbiAgICAgICAgc2VsQ2xvc2U6IFwiLnVrLW9mZmNhbnZhcy1jbG9zZVwiLFxuICAgICAgICBjb250YWluZXI6IGZhbHNlLFxuICAgICAgICBzd2lwaW5nOiB0cnVlXG4gICAgICB9LFxuICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgY2xzRmxpcDogKHsgZmxpcCwgY2xzRmxpcCB9KSA9PiBmbGlwID8gY2xzRmxpcCA6IFwiXCIsXG4gICAgICAgIGNsc092ZXJsYXk6ICh7IG92ZXJsYXksIGNsc092ZXJsYXkgfSkgPT4gb3ZlcmxheSA/IGNsc092ZXJsYXkgOiBcIlwiLFxuICAgICAgICBjbHNNb2RlOiAoeyBtb2RlLCBjbHNNb2RlIH0pID0+IGAke2Nsc01vZGV9LSR7bW9kZX1gLFxuICAgICAgICBjbHNTaWRlYmFyQW5pbWF0aW9uOiAoeyBtb2RlLCBjbHNTaWRlYmFyQW5pbWF0aW9uIH0pID0+IG1vZGUgPT09IFwibm9uZVwiIHx8IG1vZGUgPT09IFwicmV2ZWFsXCIgPyBcIlwiIDogY2xzU2lkZWJhckFuaW1hdGlvbixcbiAgICAgICAgY2xzQ29udGFpbmVyQW5pbWF0aW9uOiAoeyBtb2RlLCBjbHNDb250YWluZXJBbmltYXRpb24gfSkgPT4gbW9kZSAhPT0gXCJwdXNoXCIgJiYgbW9kZSAhPT0gXCJyZXZlYWxcIiA/IFwiXCIgOiBjbHNDb250YWluZXJBbmltYXRpb24sXG4gICAgICAgIHRyYW5zaXRpb25FbGVtZW50KHsgbW9kZSB9KSB7XG4gICAgICAgICAgcmV0dXJuIG1vZGUgPT09IFwicmV2ZWFsXCIgPyBwYXJlbnQodGhpcy5wYW5lbCkgOiB0aGlzLnBhbmVsO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb2JzZXJ2ZTogc3dpcGUoeyBmaWx0ZXI6ICh7IHN3aXBpbmcgfSkgPT4gc3dpcGluZyB9KSxcbiAgICAgIHVwZGF0ZToge1xuICAgICAgICByZWFkKCkge1xuICAgICAgICAgIGlmICh0aGlzLmlzVG9nZ2xlZCgpICYmICFpc1Zpc2libGUodGhpcy4kZWwpKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGV2ZW50czogW1wicmVzaXplXCJdXG4gICAgICB9LFxuICAgICAgZXZlbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInRvdWNobW92ZVwiLFxuICAgICAgICAgIHNlbGY6IHRydWUsXG4gICAgICAgICAgcGFzc2l2ZTogZmFsc2UsXG4gICAgICAgICAgZmlsdGVyOiAoeyBvdmVybGF5IH0pID0+IG92ZXJsYXksXG4gICAgICAgICAgaGFuZGxlcihlKSB7XG4gICAgICAgICAgICBlLmNhbmNlbGFibGUgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgIHNlbGY6IHRydWUsXG4gICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1vZGUgPT09IFwicmV2ZWFsXCIgJiYgIWhhc0NsYXNzKHBhcmVudCh0aGlzLnBhbmVsKSwgdGhpcy5jbHNNb2RlKSkge1xuICAgICAgICAgICAgICB3cmFwQWxsKHRoaXMucGFuZWwsIFwiPGRpdj5cIik7XG4gICAgICAgICAgICAgIGFkZENsYXNzKHBhcmVudCh0aGlzLnBhbmVsKSwgdGhpcy5jbHNNb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgYm9keSwgc2Nyb2xsaW5nRWxlbWVudCB9ID0gZG9jdW1lbnQ7XG4gICAgICAgICAgICBhZGRDbGFzcyhib2R5LCB0aGlzLmNsc0NvbnRhaW5lciwgdGhpcy5jbHNGbGlwKTtcbiAgICAgICAgICAgIGNzcyhib2R5LCBcInRvdWNoLWFjdGlvblwiLCBcInBhbi15IHBpbmNoLXpvb21cIik7XG4gICAgICAgICAgICBjc3ModGhpcy4kZWwsIFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgICAgICAgICAgY3NzKHRoaXMucGFuZWwsIFwibWF4V2lkdGhcIiwgc2Nyb2xsaW5nRWxlbWVudC5jbGllbnRXaWR0aCk7XG4gICAgICAgICAgICBhZGRDbGFzcyh0aGlzLiRlbCwgdGhpcy5jbHNPdmVybGF5KTtcbiAgICAgICAgICAgIGFkZENsYXNzKFxuICAgICAgICAgICAgICB0aGlzLnBhbmVsLFxuICAgICAgICAgICAgICB0aGlzLmNsc1NpZGViYXJBbmltYXRpb24sXG4gICAgICAgICAgICAgIHRoaXMubW9kZSA9PT0gXCJyZXZlYWxcIiA/IFwiXCIgOiB0aGlzLmNsc01vZGVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBoZWlnaHQoYm9keSk7XG4gICAgICAgICAgICBhZGRDbGFzcyhib2R5LCB0aGlzLmNsc0NvbnRhaW5lckFuaW1hdGlvbik7XG4gICAgICAgICAgICB0aGlzLmNsc0NvbnRhaW5lckFuaW1hdGlvbiAmJiBzdXBwcmVzc1VzZXJTY2FsZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiaGlkZVwiLFxuICAgICAgICAgIHNlbGY6IHRydWUsXG4gICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksIHRoaXMuY2xzQ29udGFpbmVyQW5pbWF0aW9uKTtcbiAgICAgICAgICAgIGNzcyhkb2N1bWVudC5ib2R5LCBcInRvdWNoLWFjdGlvblwiLCBcIlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcImhpZGRlblwiLFxuICAgICAgICAgIHNlbGY6IHRydWUsXG4gICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgIHRoaXMuY2xzQ29udGFpbmVyQW5pbWF0aW9uICYmIHJlc3VtZVVzZXJTY2FsZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gXCJyZXZlYWxcIikge1xuICAgICAgICAgICAgICB1bndyYXAodGhpcy5wYW5lbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW1vdmVDbGFzcyh0aGlzLnBhbmVsLCB0aGlzLmNsc1NpZGViYXJBbmltYXRpb24sIHRoaXMuY2xzTW9kZSk7XG4gICAgICAgICAgICByZW1vdmVDbGFzcyh0aGlzLiRlbCwgdGhpcy5jbHNPdmVybGF5KTtcbiAgICAgICAgICAgIGNzcyh0aGlzLiRlbCwgXCJkaXNwbGF5XCIsIFwiXCIpO1xuICAgICAgICAgICAgY3NzKHRoaXMucGFuZWwsIFwibWF4V2lkdGhcIiwgXCJcIik7XG4gICAgICAgICAgICByZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCB0aGlzLmNsc0NvbnRhaW5lciwgdGhpcy5jbHNGbGlwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInN3aXBlTGVmdCBzd2lwZVJpZ2h0XCIsXG4gICAgICAgICAgaGFuZGxlcihlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1RvZ2dsZWQoKSAmJiBlbmRzV2l0aChlLnR5cGUsIFwiTGVmdFwiKSBeIHRoaXMuZmxpcCkge1xuICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICAgIGZ1bmN0aW9uIHN1cHByZXNzVXNlclNjYWxlKCkge1xuICAgICAgZ2V0Vmlld3BvcnQoKS5jb250ZW50ICs9IFwiLHVzZXItc2NhbGFibGU9MFwiO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXN1bWVVc2VyU2NhbGUoKSB7XG4gICAgICBjb25zdCB2aWV3cG9ydCA9IGdldFZpZXdwb3J0KCk7XG4gICAgICB2aWV3cG9ydC5jb250ZW50ID0gdmlld3BvcnQuY29udGVudC5yZXBsYWNlKC8sdXNlci1zY2FsYWJsZT0wJC8sIFwiXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRWaWV3cG9ydCgpIHtcbiAgICAgIHJldHVybiAkKCdtZXRhW25hbWU9XCJ2aWV3cG9ydFwiXScsIGRvY3VtZW50LmhlYWQpIHx8IGFwcGVuZChkb2N1bWVudC5oZWFkLCAnPG1ldGEgbmFtZT1cInZpZXdwb3J0XCI+Jyk7XG4gICAgfVxuXG4gICAgdmFyIG92ZXJmbG93QXV0byA9IHtcbiAgICAgIG1peGluczogW0NsYXNzXSxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHNlbENvbnRhaW5lcjogU3RyaW5nLFxuICAgICAgICBzZWxDb250ZW50OiBTdHJpbmcsXG4gICAgICAgIG1pbkhlaWdodDogTnVtYmVyXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBzZWxDb250YWluZXI6IFwiLnVrLW1vZGFsXCIsXG4gICAgICAgIHNlbENvbnRlbnQ6IFwiLnVrLW1vZGFsLWRpYWxvZ1wiLFxuICAgICAgICBtaW5IZWlnaHQ6IDE1MFxuICAgICAgfSxcbiAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGNvbnRhaW5lcjogKHsgc2VsQ29udGFpbmVyIH0sICRlbCkgPT4gJGVsLmNsb3Nlc3Qoc2VsQ29udGFpbmVyKSxcbiAgICAgICAgY29udGVudDogKHsgc2VsQ29udGVudCB9LCAkZWwpID0+ICRlbC5jbG9zZXN0KHNlbENvbnRlbnQpXG4gICAgICB9LFxuICAgICAgb2JzZXJ2ZTogcmVzaXplKHtcbiAgICAgICAgdGFyZ2V0OiAoeyBjb250YWluZXIsIGNvbnRlbnQgfSkgPT4gW2NvbnRhaW5lciwgY29udGVudF1cbiAgICAgIH0pLFxuICAgICAgdXBkYXRlOiB7XG4gICAgICAgIHJlYWQoKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmNvbnRlbnQgfHwgIXRoaXMuY29udGFpbmVyIHx8ICFpc1Zpc2libGUodGhpcy4kZWwpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtYXg6IE1hdGgubWF4KFxuICAgICAgICAgICAgICB0aGlzLm1pbkhlaWdodCxcbiAgICAgICAgICAgICAgaGVpZ2h0KHRoaXMuY29udGFpbmVyKSAtIChkaW1lbnNpb25zJDEodGhpcy5jb250ZW50KS5oZWlnaHQgLSBoZWlnaHQodGhpcy4kZWwpKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlKHsgbWF4IH0pIHtcbiAgICAgICAgICBjc3ModGhpcy4kZWwsIHsgbWluSGVpZ2h0OiB0aGlzLm1pbkhlaWdodCwgbWF4SGVpZ2h0OiBtYXggfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGV2ZW50czogW1wicmVzaXplXCJdXG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciByZXNwb25zaXZlID0ge1xuICAgICAgcHJvcHM6IFtcIndpZHRoXCIsIFwiaGVpZ2h0XCJdLFxuICAgICAgY29ubmVjdGVkKCkge1xuICAgICAgICBhZGRDbGFzcyh0aGlzLiRlbCwgXCJ1ay1yZXNwb25zaXZlLXdpZHRoXCIpO1xuICAgICAgICBjc3ModGhpcy4kZWwsIFwiYXNwZWN0UmF0aW9cIiwgYCR7dGhpcy53aWR0aH0vJHt0aGlzLmhlaWdodH1gKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHNjcm9sbCA9IHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIG9mZnNldDogTnVtYmVyXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBvZmZzZXQ6IDBcbiAgICAgIH0sXG4gICAgICBjb25uZWN0ZWQoKSB7XG4gICAgICAgIHJlZ2lzdGVyQ2xpY2sodGhpcyk7XG4gICAgICB9LFxuICAgICAgZGlzY29ubmVjdGVkKCkge1xuICAgICAgICB1bnJlZ2lzdGVyQ2xpY2sodGhpcyk7XG4gICAgICB9LFxuICAgICAgbWV0aG9kczoge1xuICAgICAgICBhc3luYyBzY3JvbGxUbyhlbCkge1xuICAgICAgICAgIGVsID0gZWwgJiYgJChlbCkgfHwgZG9jdW1lbnQuYm9keTtcbiAgICAgICAgICBpZiAodHJpZ2dlcih0aGlzLiRlbCwgXCJiZWZvcmVzY3JvbGxcIiwgW3RoaXMsIGVsXSkpIHtcbiAgICAgICAgICAgIGF3YWl0IHNjcm9sbEludG9WaWV3KGVsLCB7IG9mZnNldDogdGhpcy5vZmZzZXQgfSk7XG4gICAgICAgICAgICB0cmlnZ2VyKHRoaXMuJGVsLCBcInNjcm9sbGVkXCIsIFt0aGlzLCBlbF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgaW5zdGFuY2VzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgICBmdW5jdGlvbiByZWdpc3RlckNsaWNrKGNtcCkge1xuICAgICAgaWYgKCFpbnN0YW5jZXMuc2l6ZSkge1xuICAgICAgICBvbihkb2N1bWVudCwgXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xuICAgICAgfVxuICAgICAgaW5zdGFuY2VzLmFkZChjbXApO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1bnJlZ2lzdGVyQ2xpY2soY21wKSB7XG4gICAgICBpbnN0YW5jZXMuZGVsZXRlKGNtcCk7XG4gICAgICBpZiAoIWluc3RhbmNlcy5zaXplKSB7XG4gICAgICAgIG9mZihkb2N1bWVudCwgXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBjbGlja0hhbmRsZXIoZSkge1xuICAgICAgaWYgKGUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGluc3RhbmNlIG9mIGluc3RhbmNlcykge1xuICAgICAgICBpZiAoaW5zdGFuY2UuJGVsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiBpc1NhbWVTaXRlQW5jaG9yKGluc3RhbmNlLiRlbCkpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmICE9PSBpbnN0YW5jZS4kZWwuaHJlZikge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCBcIlwiLCBpbnN0YW5jZS4kZWwuaHJlZik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGluc3RhbmNlLnNjcm9sbFRvKGdldFRhcmdldGVkRWxlbWVudChpbnN0YW5jZS4kZWwpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNsc0luVmlldyA9IFwidWstc2Nyb2xsc3B5LWludmlld1wiO1xuICAgIHZhciBzY3JvbGxzcHkgPSB7XG4gICAgICBhcmdzOiBcImNsc1wiLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgY2xzOiBTdHJpbmcsXG4gICAgICAgIHRhcmdldDogU3RyaW5nLFxuICAgICAgICBoaWRkZW46IEJvb2xlYW4sXG4gICAgICAgIG1hcmdpbjogU3RyaW5nLFxuICAgICAgICByZXBlYXQ6IEJvb2xlYW4sXG4gICAgICAgIGRlbGF5OiBOdW1iZXJcbiAgICAgIH0sXG4gICAgICBkYXRhOiAoKSA9PiAoe1xuICAgICAgICBjbHM6IFwiXCIsXG4gICAgICAgIHRhcmdldDogZmFsc2UsXG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgbWFyZ2luOiBcIi0xcHhcIixcbiAgICAgICAgcmVwZWF0OiBmYWxzZSxcbiAgICAgICAgZGVsYXk6IDBcbiAgICAgIH0pLFxuICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgZWxlbWVudHM6ICh7IHRhcmdldCB9LCAkZWwpID0+IHRhcmdldCA/ICQkKHRhcmdldCwgJGVsKSA6IFskZWxdXG4gICAgICB9LFxuICAgICAgd2F0Y2g6IHtcbiAgICAgICAgZWxlbWVudHMoZWxlbWVudHMpIHtcbiAgICAgICAgICBpZiAodGhpcy5oaWRkZW4pIHtcbiAgICAgICAgICAgIGNzcyhmaWx0ZXIkMShlbGVtZW50cywgYDpub3QoLiR7Y2xzSW5WaWV3fSlgKSwgXCJvcGFjaXR5XCIsIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvbm5lY3RlZCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50RGF0YSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gICAgICB9LFxuICAgICAgZGlzY29ubmVjdGVkKCkge1xuICAgICAgICBmb3IgKGNvbnN0IFtlbCwgc3RhdGVdIG9mIHRoaXMuZWxlbWVudERhdGEuZW50cmllcygpKSB7XG4gICAgICAgICAgcmVtb3ZlQ2xhc3MoZWwsIGNsc0luVmlldywgKHN0YXRlID09IG51bGwgPyB2b2lkIDAgOiBzdGF0ZS5jbHMpIHx8IFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSB0aGlzLmVsZW1lbnREYXRhO1xuICAgICAgfSxcbiAgICAgIG9ic2VydmU6IGludGVyc2VjdGlvbih7XG4gICAgICAgIHRhcmdldDogKHsgZWxlbWVudHMgfSkgPT4gZWxlbWVudHMsXG4gICAgICAgIGhhbmRsZXIocmVjb3Jkcykge1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5lbGVtZW50RGF0YTtcbiAgICAgICAgICBmb3IgKGNvbnN0IHsgdGFyZ2V0OiBlbCwgaXNJbnRlcnNlY3RpbmcgfSBvZiByZWNvcmRzKSB7XG4gICAgICAgICAgICBpZiAoIWVsZW1lbnRzLmhhcyhlbCkpIHtcbiAgICAgICAgICAgICAgZWxlbWVudHMuc2V0KGVsLCB7XG4gICAgICAgICAgICAgICAgY2xzOiBkYXRhKGVsLCBcInVrLXNjcm9sbHNweS1jbGFzc1wiKSB8fCB0aGlzLmNsc1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZWxlbWVudHMuZ2V0KGVsKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5yZXBlYXQgJiYgc3RhdGUuc2hvdykge1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXRlLnNob3cgPSBpc0ludGVyc2VjdGluZztcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy4kZW1pdCgpO1xuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiAoeyBtYXJnaW4gfSkgPT4gKHsgcm9vdE1hcmdpbjogbWFyZ2luIH0pLFxuICAgICAgICBhcmdzOiB7IGludGVyc2VjdGluZzogZmFsc2UgfVxuICAgICAgfSksXG4gICAgICB1cGRhdGU6IFtcbiAgICAgICAge1xuICAgICAgICAgIHdyaXRlKGRhdGEpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2VsLCBzdGF0ZV0gb2YgdGhpcy5lbGVtZW50RGF0YS5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgICAgaWYgKHN0YXRlLnNob3cgJiYgIXN0YXRlLmludmlldyAmJiAhc3RhdGUucXVldWVkKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUucXVldWVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBkYXRhLnByb21pc2UgPSAoZGF0YS5wcm9taXNlIHx8IFByb21pc2UucmVzb2x2ZSgpKS50aGVuKCgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRoaXMuZGVsYXkpKSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZShlbCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUucXVldWVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoKTtcbiAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXN0YXRlLnNob3cgJiYgc3RhdGUuaW52aWV3ICYmICFzdGF0ZS5xdWV1ZWQgJiYgdGhpcy5yZXBlYXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZShlbCwgZmFsc2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgbWV0aG9kczoge1xuICAgICAgICB0b2dnbGUoZWwsIGludmlldykge1xuICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgY29uc3Qgc3RhdGUgPSAoX2EgPSB0aGlzLmVsZW1lbnREYXRhKSA9PSBudWxsID8gdm9pZCAwIDogX2EuZ2V0KGVsKTtcbiAgICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIChfYiA9IHN0YXRlLm9mZikgPT0gbnVsbCA/IHZvaWQgMCA6IF9iLmNhbGwoc3RhdGUpO1xuICAgICAgICAgIGNzcyhlbCwgXCJvcGFjaXR5XCIsICFpbnZpZXcgJiYgdGhpcy5oaWRkZW4gPyAwIDogXCJcIik7XG4gICAgICAgICAgdG9nZ2xlQ2xhc3MoZWwsIGNsc0luVmlldywgaW52aWV3KTtcbiAgICAgICAgICB0b2dnbGVDbGFzcyhlbCwgc3RhdGUuY2xzKTtcbiAgICAgICAgICBsZXQgbWF0Y2g7XG4gICAgICAgICAgaWYgKG1hdGNoID0gc3RhdGUuY2xzLm1hdGNoKC9cXGJ1ay1hbmltYXRpb24tW1xcdy1dKy9nKSkge1xuICAgICAgICAgICAgY29uc3QgcmVtb3ZlQW5pbWF0aW9uQ2xhc3NlcyA9ICgpID0+IHJlbW92ZUNsYXNzKGVsLCBtYXRjaCk7XG4gICAgICAgICAgICBpZiAoaW52aWV3KSB7XG4gICAgICAgICAgICAgIHN0YXRlLm9mZiA9IG9uY2UoZWwsIFwiYW5pbWF0aW9uY2FuY2VsIGFuaW1hdGlvbmVuZFwiLCByZW1vdmVBbmltYXRpb25DbGFzc2VzLCB7XG4gICAgICAgICAgICAgICAgc2VsZjogdHJ1ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlbW92ZUFuaW1hdGlvbkNsYXNzZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdHJpZ2dlcihlbCwgaW52aWV3ID8gXCJpbnZpZXdcIiA6IFwib3V0dmlld1wiKTtcbiAgICAgICAgICBzdGF0ZS5pbnZpZXcgPSBpbnZpZXc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHNjcm9sbHNweU5hdiA9IHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGNsczogU3RyaW5nLFxuICAgICAgICBjbG9zZXN0OiBCb29sZWFuLFxuICAgICAgICBzY3JvbGw6IEJvb2xlYW4sXG4gICAgICAgIHRhcmdldDogU3RyaW5nLFxuICAgICAgICBvZmZzZXQ6IE51bWJlclxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY2xzOiBcInVrLWFjdGl2ZVwiLFxuICAgICAgICBjbG9zZXN0OiBmYWxzZSxcbiAgICAgICAgc2Nyb2xsOiBmYWxzZSxcbiAgICAgICAgdGFyZ2V0OiAnYVtocmVmXTpub3QoW3JvbGU9XCJidXR0b25cIl0pJyxcbiAgICAgICAgb2Zmc2V0OiAwXG4gICAgICB9LFxuICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgbGlua3M6ICh7IHRhcmdldCB9LCAkZWwpID0+ICQkKHRhcmdldCwgJGVsKS5maWx0ZXIoKGVsKSA9PiBpc1NhbWVTaXRlQW5jaG9yKGVsKSksXG4gICAgICAgIGVsZW1lbnRzKHsgY2xvc2VzdCB9KSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubGlua3MubWFwKChlbCkgPT4gZWwuY2xvc2VzdChjbG9zZXN0IHx8IFwiKlwiKSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB3YXRjaDoge1xuICAgICAgICBsaW5rcyhsaW5rcykge1xuICAgICAgICAgIGlmICh0aGlzLnNjcm9sbCkge1xuICAgICAgICAgICAgdGhpcy4kY3JlYXRlKFwic2Nyb2xsXCIsIGxpbmtzLCB7IG9mZnNldDogdGhpcy5vZmZzZXQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb2JzZXJ2ZTogW2ludGVyc2VjdGlvbigpLCBzY3JvbGwkMSgpXSxcbiAgICAgIHVwZGF0ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgcmVhZCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldHMgPSB0aGlzLmxpbmtzLm1hcCgoZWwpID0+IGdldFRhcmdldGVkRWxlbWVudChlbCkgfHwgZWwub3duZXJEb2N1bWVudCk7XG4gICAgICAgICAgICBjb25zdCB7IGxlbmd0aCB9ID0gdGFyZ2V0cztcbiAgICAgICAgICAgIGlmICghbGVuZ3RoIHx8ICFpc1Zpc2libGUodGhpcy4kZWwpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbEVsZW1lbnQgPSBzY3JvbGxQYXJlbnQodGFyZ2V0cywgdHJ1ZSk7XG4gICAgICAgICAgICBjb25zdCB7IHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0IH0gPSBzY3JvbGxFbGVtZW50O1xuICAgICAgICAgICAgY29uc3Qgdmlld3BvcnQgPSBvZmZzZXRWaWV3cG9ydChzY3JvbGxFbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IG1heCA9IHNjcm9sbEhlaWdodCAtIHZpZXdwb3J0LmhlaWdodDtcbiAgICAgICAgICAgIGxldCBhY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgPj0gbWF4KSB7XG4gICAgICAgICAgICAgIGFjdGl2ZSA9IGxlbmd0aCAtIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBvZmZzZXRCeSA9IHRoaXMub2Zmc2V0ICsgZGltZW5zaW9ucyQxKGdldENvdmVyaW5nRWxlbWVudCgpKS5oZWlnaHQgKyB2aWV3cG9ydC5oZWlnaHQgKiAwLjE7XG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFyZ2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChvZmZzZXQodGFyZ2V0c1tpXSkudG9wIC0gdmlld3BvcnQudG9wIC0gb2Zmc2V0QnkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWN0aXZlID0gK2k7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IGFjdGl2ZSB9O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgd3JpdGUoeyBhY3RpdmUgfSkge1xuICAgICAgICAgICAgY29uc3QgY2hhbmdlZCA9IGFjdGl2ZSAhPT0gZmFsc2UgJiYgIWhhc0NsYXNzKHRoaXMuZWxlbWVudHNbYWN0aXZlXSwgdGhpcy5jbHMpO1xuICAgICAgICAgICAgdGhpcy5saW5rcy5mb3JFYWNoKChlbCkgPT4gZWwuYmx1cigpKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB0b2dnbGVDbGFzcyh0aGlzLmVsZW1lbnRzW2ldLCB0aGlzLmNscywgK2kgPT09IGFjdGl2ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgICAgICB0cmlnZ2VyKHRoaXMuJGVsLCBcImFjdGl2ZVwiLCBbYWN0aXZlLCB0aGlzLmVsZW1lbnRzW2FjdGl2ZV1dKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGV2ZW50czogW1wic2Nyb2xsXCIsIFwicmVzaXplXCJdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuXG4gICAgdmFyIHN0aWNreSA9IHtcbiAgICAgIG1peGluczogW0NsYXNzLCBNZWRpYV0sXG4gICAgICBwcm9wczoge1xuICAgICAgICBwb3NpdGlvbjogU3RyaW5nLFxuICAgICAgICB0b3A6IG51bGwsXG4gICAgICAgIGJvdHRvbTogbnVsbCxcbiAgICAgICAgc3RhcnQ6IG51bGwsXG4gICAgICAgIGVuZDogbnVsbCxcbiAgICAgICAgb2Zmc2V0OiBTdHJpbmcsXG4gICAgICAgIG92ZXJmbG93RmxpcDogQm9vbGVhbixcbiAgICAgICAgYW5pbWF0aW9uOiBTdHJpbmcsXG4gICAgICAgIGNsc0FjdGl2ZTogU3RyaW5nLFxuICAgICAgICBjbHNJbmFjdGl2ZTogU3RyaW5nLFxuICAgICAgICBjbHNGaXhlZDogU3RyaW5nLFxuICAgICAgICBjbHNCZWxvdzogU3RyaW5nLFxuICAgICAgICBzZWxUYXJnZXQ6IFN0cmluZyxcbiAgICAgICAgc2hvd09uVXA6IEJvb2xlYW4sXG4gICAgICAgIHRhcmdldE9mZnNldDogTnVtYmVyXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcbiAgICAgICAgdG9wOiBmYWxzZSxcbiAgICAgICAgYm90dG9tOiBmYWxzZSxcbiAgICAgICAgc3RhcnQ6IGZhbHNlLFxuICAgICAgICBlbmQ6IGZhbHNlLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIG92ZXJmbG93RmxpcDogZmFsc2UsXG4gICAgICAgIGFuaW1hdGlvbjogXCJcIixcbiAgICAgICAgY2xzQWN0aXZlOiBcInVrLWFjdGl2ZVwiLFxuICAgICAgICBjbHNJbmFjdGl2ZTogXCJcIixcbiAgICAgICAgY2xzRml4ZWQ6IFwidWstc3RpY2t5LWZpeGVkXCIsXG4gICAgICAgIGNsc0JlbG93OiBcInVrLXN0aWNreS1iZWxvd1wiLFxuICAgICAgICBzZWxUYXJnZXQ6IFwiXCIsXG4gICAgICAgIHNob3dPblVwOiBmYWxzZSxcbiAgICAgICAgdGFyZ2V0T2Zmc2V0OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHRhcmdldDogKHsgc2VsVGFyZ2V0IH0sICRlbCkgPT4gc2VsVGFyZ2V0ICYmICQoc2VsVGFyZ2V0LCAkZWwpIHx8ICRlbFxuICAgICAgfSxcbiAgICAgIGNvbm5lY3RlZCgpIHtcbiAgICAgICAgdGhpcy5zdGFydCA9IGNvZXJjZSh0aGlzLnN0YXJ0IHx8IHRoaXMudG9wKTtcbiAgICAgICAgdGhpcy5lbmQgPSBjb2VyY2UodGhpcy5lbmQgfHwgdGhpcy5ib3R0b20pO1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gJChcIisgLnVrLXN0aWNreS1wbGFjZWhvbGRlclwiLCB0aGlzLiRlbCkgfHwgJCgnPGRpdiBjbGFzcz1cInVrLXN0aWNreS1wbGFjZWhvbGRlclwiPjwvZGl2PicpO1xuICAgICAgICB0aGlzLmlzRml4ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgfSxcbiAgICAgIGJlZm9yZURpc2Nvbm5lY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRml4ZWQpIHtcbiAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICByZW1vdmVDbGFzcyh0aGlzLnRhcmdldCwgdGhpcy5jbHNJbmFjdGl2ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzZXQodGhpcy4kZWwpO1xuICAgICAgICByZW1vdmUkMSh0aGlzLnBsYWNlaG9sZGVyKTtcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IG51bGw7XG4gICAgICB9LFxuICAgICAgb2JzZXJ2ZTogW1xuICAgICAgICB2aWV3cG9ydCgpLFxuICAgICAgICBzY3JvbGwkMSh7IHRhcmdldDogKCkgPT4gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB9KSxcbiAgICAgICAgcmVzaXplKHtcbiAgICAgICAgICB0YXJnZXQ6ICh7ICRlbCB9KSA9PiBbJGVsLCBnZXRWaXNpYmxlUGFyZW50KCRlbCksIGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnRdLFxuICAgICAgICAgIGhhbmRsZXIoZW50cmllcykge1xuICAgICAgICAgICAgdGhpcy4kZW1pdChcbiAgICAgICAgICAgICAgdGhpcy5fZGF0YS5yZXNpemVkICYmIGVudHJpZXMuc29tZSgoeyB0YXJnZXQgfSkgPT4gdGFyZ2V0ID09PSBnZXRWaXNpYmxlUGFyZW50KHRoaXMuJGVsKSkgPyBcInVwZGF0ZVwiIDogXCJyZXNpemVcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuX2RhdGEucmVzaXplZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIGV2ZW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJsb2FkIGhhc2hjaGFuZ2UgcG9wc3RhdGVcIixcbiAgICAgICAgICBlbDogKCkgPT4gd2luZG93LFxuICAgICAgICAgIGZpbHRlcjogKHsgdGFyZ2V0T2Zmc2V0IH0pID0+IHRhcmdldE9mZnNldCAhPT0gZmFsc2UsXG4gICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgc2Nyb2xsaW5nRWxlbWVudCB9ID0gZG9jdW1lbnQ7XG4gICAgICAgICAgICBpZiAoIWxvY2F0aW9uLmhhc2ggfHwgc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3AgPT09IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHRhcmdldE9mZnNldCA9IG9mZnNldCgkKGxvY2F0aW9uLmhhc2gpKTtcbiAgICAgICAgICAgICAgY29uc3QgZWxPZmZzZXQgPSBvZmZzZXQodGhpcy4kZWwpO1xuICAgICAgICAgICAgICBpZiAodGhpcy5pc0ZpeGVkICYmIGludGVyc2VjdFJlY3QodGFyZ2V0T2Zmc2V0LCBlbE9mZnNldCkpIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxpbmdFbGVtZW50LnNjcm9sbFRvcCA9IE1hdGguY2VpbChcbiAgICAgICAgICAgICAgICAgIHRhcmdldE9mZnNldC50b3AgLSBlbE9mZnNldC5oZWlnaHQgLSB0b1B4KHRoaXMudGFyZ2V0T2Zmc2V0LCBcImhlaWdodFwiLCB0aGlzLnBsYWNlaG9sZGVyKSAtIHRvUHgodGhpcy5vZmZzZXQsIFwiaGVpZ2h0XCIsIHRoaXMucGxhY2Vob2xkZXIpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgdXBkYXRlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICByZWFkKHsgaGVpZ2h0OiBoZWlnaHQkMSwgd2lkdGgsIG1hcmdpbiwgc3RpY2t5IH0sIHR5cGVzKSB7XG4gICAgICAgICAgICB0aGlzLmluYWN0aXZlID0gIXRoaXMubWF0Y2hNZWRpYSB8fCAhaXNWaXNpYmxlKHRoaXMuJGVsKSB8fCAhdGhpcy4kZWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaGlkZSA9IHRoaXMuaXNGaXhlZCAmJiB0eXBlcy5oYXMoXCJ1cGRhdGVcIik7XG4gICAgICAgICAgICBpZiAoaGlkZSkge1xuICAgICAgICAgICAgICBwcmV2ZW50VHJhbnNpdGlvbih0aGlzLnRhcmdldCk7XG4gICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAoeyBoZWlnaHQ6IGhlaWdodCQxLCB3aWR0aCB9ID0gZGltZW5zaW9ucyQxKHRoaXMuJGVsKSk7XG4gICAgICAgICAgICAgIG1hcmdpbiA9IGNzcyh0aGlzLiRlbCwgXCJtYXJnaW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaGlkZSkge1xuICAgICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHZpZXdwb3J0MiA9IHRvUHgoXCIxMDB2aFwiLCBcImhlaWdodFwiKTtcbiAgICAgICAgICAgIGNvbnN0IGR5bmFtaWNWaWV3cG9ydCA9IGhlaWdodCh3aW5kb3cpO1xuICAgICAgICAgICAgY29uc3QgbWF4U2Nyb2xsSGVpZ2h0ID0gTWF0aC5tYXgoXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gdmlld3BvcnQyXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbjtcbiAgICAgICAgICAgIGlmICh0aGlzLm92ZXJmbG93RmxpcCAmJiBoZWlnaHQkMSA+IHZpZXdwb3J0Mikge1xuICAgICAgICAgICAgICBwb3NpdGlvbiA9IHBvc2l0aW9uID09PSBcInRvcFwiID8gXCJib3R0b21cIiA6IFwidG9wXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5pc0ZpeGVkID8gdGhpcy5wbGFjZWhvbGRlciA6IHRoaXMuJGVsO1xuICAgICAgICAgICAgbGV0IG9mZnNldCQxID0gdG9QeCh0aGlzLm9mZnNldCwgXCJoZWlnaHRcIiwgc3RpY2t5ID8gdGhpcy4kZWwgOiByZWZlcmVuY2VFbGVtZW50KTtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA9PT0gXCJib3R0b21cIiAmJiAoaGVpZ2h0JDEgPCBkeW5hbWljVmlld3BvcnQgfHwgdGhpcy5vdmVyZmxvd0ZsaXApKSB7XG4gICAgICAgICAgICAgIG9mZnNldCQxICs9IGR5bmFtaWNWaWV3cG9ydCAtIGhlaWdodCQxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgb3ZlcmZsb3cgPSB0aGlzLm92ZXJmbG93RmxpcCA/IDAgOiBNYXRoLm1heCgwLCBoZWlnaHQkMSArIG9mZnNldCQxIC0gdmlld3BvcnQyKTtcbiAgICAgICAgICAgIGNvbnN0IHRvcE9mZnNldCA9IG9mZnNldChyZWZlcmVuY2VFbGVtZW50KS50b3A7XG4gICAgICAgICAgICBjb25zdCBlbEhlaWdodCA9IGRpbWVuc2lvbnMkMSh0aGlzLiRlbCkuaGVpZ2h0O1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSAodGhpcy5zdGFydCA9PT0gZmFsc2UgPyB0b3BPZmZzZXQgOiBwYXJzZVByb3AodGhpcy5zdGFydCwgdGhpcy4kZWwsIHRvcE9mZnNldCkpIC0gb2Zmc2V0JDE7XG4gICAgICAgICAgICBjb25zdCBlbmQgPSB0aGlzLmVuZCA9PT0gZmFsc2UgPyBtYXhTY3JvbGxIZWlnaHQgOiBNYXRoLm1pbihcbiAgICAgICAgICAgICAgbWF4U2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgICAgICBwYXJzZVByb3AodGhpcy5lbmQsIHRoaXMuJGVsLCB0b3BPZmZzZXQgKyBoZWlnaHQkMSwgdHJ1ZSkgLSBlbEhlaWdodCAtIG9mZnNldCQxICsgb3ZlcmZsb3dcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzdGlja3kgPSBtYXhTY3JvbGxIZWlnaHQgJiYgIXRoaXMuc2hvd09uVXAgJiYgc3RhcnQgKyBvZmZzZXQkMSA9PT0gdG9wT2Zmc2V0ICYmIGVuZCA9PT0gTWF0aC5taW4oXG4gICAgICAgICAgICAgIG1heFNjcm9sbEhlaWdodCxcbiAgICAgICAgICAgICAgcGFyc2VQcm9wKHRydWUsIHRoaXMuJGVsLCAwLCB0cnVlKSAtIGVsSGVpZ2h0IC0gb2Zmc2V0JDEgKyBvdmVyZmxvd1xuICAgICAgICAgICAgKSAmJiBjc3MoZ2V0VmlzaWJsZVBhcmVudCh0aGlzLiRlbCksIFwib3ZlcmZsb3dZXCIpID09PSBcInZpc2libGVcIjtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgICAgICBlbmQsXG4gICAgICAgICAgICAgIG9mZnNldDogb2Zmc2V0JDEsXG4gICAgICAgICAgICAgIG92ZXJmbG93LFxuICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCQxLFxuICAgICAgICAgICAgICBlbEhlaWdodCxcbiAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgIG1hcmdpbixcbiAgICAgICAgICAgICAgdG9wOiBvZmZzZXRQb3NpdGlvbihyZWZlcmVuY2VFbGVtZW50KVswXSxcbiAgICAgICAgICAgICAgc3RpY2t5LFxuICAgICAgICAgICAgICB2aWV3cG9ydDogdmlld3BvcnQyLFxuICAgICAgICAgICAgICBtYXhTY3JvbGxIZWlnaHRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICB3cml0ZSh7IGhlaWdodCwgd2lkdGgsIG1hcmdpbiwgb2Zmc2V0LCBzdGlja3kgfSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5hY3RpdmUgfHwgc3RpY2t5IHx8ICF0aGlzLmlzRml4ZWQpIHtcbiAgICAgICAgICAgICAgcmVzZXQodGhpcy4kZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaW5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0aWNreSkge1xuICAgICAgICAgICAgICBoZWlnaHQgPSB3aWR0aCA9IG1hcmdpbiA9IDA7XG4gICAgICAgICAgICAgIGNzcyh0aGlzLiRlbCwgeyBwb3NpdGlvbjogXCJzdGlja3lcIiwgdG9wOiBvZmZzZXQgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHBsYWNlaG9sZGVyIH0gPSB0aGlzO1xuICAgICAgICAgICAgY3NzKHBsYWNlaG9sZGVyLCB7IGhlaWdodCwgd2lkdGgsIG1hcmdpbiB9KTtcbiAgICAgICAgICAgIGlmIChwYXJlbnQocGxhY2Vob2xkZXIpICE9PSBwYXJlbnQodGhpcy4kZWwpIHx8IHN0aWNreSBeIGluZGV4KHBsYWNlaG9sZGVyKSA8IGluZGV4KHRoaXMuJGVsKSkge1xuICAgICAgICAgICAgICAoc3RpY2t5ID8gYmVmb3JlIDogYWZ0ZXIpKHRoaXMuJGVsLCBwbGFjZWhvbGRlcik7XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyLmhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBldmVudHM6IFtcInJlc2l6ZVwiXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcmVhZCh7XG4gICAgICAgICAgICBzY3JvbGw6IHByZXZTY3JvbGwgPSAwLFxuICAgICAgICAgICAgZGlyOiBwcmV2RGlyID0gXCJkb3duXCIsXG4gICAgICAgICAgICBvdmVyZmxvdyxcbiAgICAgICAgICAgIG92ZXJmbG93U2Nyb2xsID0gMCxcbiAgICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgICAgZW5kLFxuICAgICAgICAgICAgZWxIZWlnaHQsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBzdGlja3ksXG4gICAgICAgICAgICBtYXhTY3JvbGxIZWlnaHRcbiAgICAgICAgICB9KSB7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGwyID0gTWF0aC5taW4oZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3AsIG1heFNjcm9sbEhlaWdodCk7XG4gICAgICAgICAgICBjb25zdCBkaXIgPSBwcmV2U2Nyb2xsIDw9IHNjcm9sbDIgPyBcImRvd25cIiA6IFwidXBcIjtcbiAgICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLmlzRml4ZWQgPyB0aGlzLnBsYWNlaG9sZGVyIDogdGhpcy4kZWw7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBkaXIsXG4gICAgICAgICAgICAgIHByZXZEaXIsXG4gICAgICAgICAgICAgIHNjcm9sbDogc2Nyb2xsMixcbiAgICAgICAgICAgICAgcHJldlNjcm9sbCxcbiAgICAgICAgICAgICAgYmVsb3c6IHNjcm9sbDIgPiBvZmZzZXQocmVmZXJlbmNlRWxlbWVudCkudG9wICsgKHN0aWNreSA/IE1hdGgubWluKGhlaWdodCwgZWxIZWlnaHQpIDogaGVpZ2h0KSxcbiAgICAgICAgICAgICAgb2Zmc2V0UGFyZW50VG9wOiBvZmZzZXQocmVmZXJlbmNlRWxlbWVudC5vZmZzZXRQYXJlbnQpLnRvcCxcbiAgICAgICAgICAgICAgb3ZlcmZsb3dTY3JvbGw6IGNsYW1wKFxuICAgICAgICAgICAgICAgIG92ZXJmbG93U2Nyb2xsICsgY2xhbXAoc2Nyb2xsMiwgc3RhcnQsIGVuZCkgLSBjbGFtcChwcmV2U2Nyb2xsLCBzdGFydCwgZW5kKSxcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICB3cml0ZShkYXRhLCB0eXBlcykge1xuICAgICAgICAgICAgY29uc3QgaXNTY3JvbGxVcGRhdGUgPSB0eXBlcy5oYXMoXCJzY3JvbGxcIik7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgIGluaXRUaW1lc3RhbXAgPSAwLFxuICAgICAgICAgICAgICBkaXIsXG4gICAgICAgICAgICAgIHByZXZEaXIsXG4gICAgICAgICAgICAgIHNjcm9sbDogc2Nyb2xsMixcbiAgICAgICAgICAgICAgcHJldlNjcm9sbCA9IDAsXG4gICAgICAgICAgICAgIHRvcCxcbiAgICAgICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgICAgIGJlbG93XG4gICAgICAgICAgICB9ID0gZGF0YTtcbiAgICAgICAgICAgIGlmIChzY3JvbGwyIDwgMCB8fCBzY3JvbGwyID09PSBwcmV2U2Nyb2xsICYmIGlzU2Nyb2xsVXBkYXRlIHx8IHRoaXMuc2hvd09uVXAgJiYgIWlzU2Nyb2xsVXBkYXRlICYmICF0aGlzLmlzRml4ZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIGlmIChub3cgLSBpbml0VGltZXN0YW1wID4gMzAwIHx8IGRpciAhPT0gcHJldkRpcikge1xuICAgICAgICAgICAgICBkYXRhLmluaXRTY3JvbGwgPSBzY3JvbGwyO1xuICAgICAgICAgICAgICBkYXRhLmluaXRUaW1lc3RhbXAgPSBub3c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5zaG93T25VcCAmJiAhdGhpcy5pc0ZpeGVkICYmIE1hdGguYWJzKGRhdGEuaW5pdFNjcm9sbCAtIHNjcm9sbDIpIDw9IDMwICYmIE1hdGguYWJzKHByZXZTY3JvbGwgLSBzY3JvbGwyKSA8PSAxMCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pbmFjdGl2ZSB8fCBzY3JvbGwyIDwgc3RhcnQgfHwgdGhpcy5zaG93T25VcCAmJiAoc2Nyb2xsMiA8PSBzdGFydCB8fCBkaXIgPT09IFwiZG93blwiICYmIGlzU2Nyb2xsVXBkYXRlIHx8IGRpciA9PT0gXCJ1cFwiICYmICF0aGlzLmlzRml4ZWQgJiYgIWJlbG93KSkge1xuICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNGaXhlZCkge1xuICAgICAgICAgICAgICAgIGlmIChBbmltYXRpb24uaW5Qcm9ncmVzcyh0aGlzLiRlbCkgJiYgdG9wID4gc2Nyb2xsMikge1xuICAgICAgICAgICAgICAgICAgQW5pbWF0aW9uLmNhbmNlbCh0aGlzLiRlbCk7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbiAmJiBiZWxvdykge1xuICAgICAgICAgICAgICAgIGlmIChoYXNDbGFzcyh0aGlzLiRlbCwgXCJ1ay1hbmltYXRpb24tbGVhdmVcIikpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQW5pbWF0aW9uLm91dCh0aGlzLiRlbCwgdGhpcy5hbmltYXRpb24pLnRoZW4oKCkgPT4gdGhpcy5oaWRlKCksIG5vb3ApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNGaXhlZCkge1xuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFuaW1hdGlvbiAmJiBiZWxvdykge1xuICAgICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgICAgICAgQW5pbWF0aW9uLmluKHRoaXMuJGVsLCB0aGlzLmFuaW1hdGlvbikuY2F0Y2gobm9vcCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwcmV2ZW50VHJhbnNpdGlvbih0aGlzLnRhcmdldCk7XG4gICAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXZlbnRzOiBbXCJyZXNpemVcIiwgXCJyZXNpemVWaWV3cG9ydFwiLCBcInNjcm9sbFwiXVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgbWV0aG9kczoge1xuICAgICAgICBzaG93KCkge1xuICAgICAgICAgIHRoaXMuaXNGaXhlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBoaWRlKCkge1xuICAgICAgICAgIGNvbnN0IHsgb2Zmc2V0LCBzdGlja3kgfSA9IHRoaXMuX2RhdGE7XG4gICAgICAgICAgdGhpcy5zZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgICAgIHJlbW92ZUNsYXNzKHRoaXMuJGVsLCB0aGlzLmNsc0ZpeGVkLCB0aGlzLmNsc0JlbG93KTtcbiAgICAgICAgICBpZiAoc3RpY2t5KSB7XG4gICAgICAgICAgICBjc3ModGhpcy4kZWwsIFwidG9wXCIsIG9mZnNldCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNzcyh0aGlzLiRlbCwge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJcIixcbiAgICAgICAgICAgICAgdG9wOiBcIlwiLFxuICAgICAgICAgICAgICB3aWR0aDogXCJcIixcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5wbGFjZWhvbGRlci5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgIHRoaXMuaXNGaXhlZCA9IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGUoKSB7XG4gICAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgc2Nyb2xsOiBzY3JvbGwyID0gMCxcbiAgICAgICAgICAgIG92ZXJmbG93LFxuICAgICAgICAgICAgb3ZlcmZsb3dTY3JvbGwgPSAwLFxuICAgICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgICBlbmQsXG4gICAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgICBvZmZzZXRQYXJlbnRUb3AsXG4gICAgICAgICAgICBzdGlja3ksXG4gICAgICAgICAgICBiZWxvd1xuICAgICAgICAgIH0gPSB0aGlzLl9kYXRhO1xuICAgICAgICAgIGNvbnN0IGFjdGl2ZSA9IHN0YXJ0ICE9PSAwIHx8IHNjcm9sbDIgPiBzdGFydDtcbiAgICAgICAgICBpZiAoIXN0aWNreSkge1xuICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgICAgICAgICAgaWYgKHNjcm9sbDIgPiBlbmQpIHtcbiAgICAgICAgICAgICAgb2Zmc2V0ICs9IGVuZCAtIG9mZnNldFBhcmVudFRvcCArIG92ZXJmbG93U2Nyb2xsIC0gb3ZlcmZsb3c7XG4gICAgICAgICAgICAgIHBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3NzKHRoaXMuJGVsLCB7IHBvc2l0aW9uLCB3aWR0aCwgbWFyZ2luVG9wOiAwIH0sIFwiaW1wb3J0YW50XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjc3ModGhpcy4kZWwsIFwidG9wXCIsIG9mZnNldCAtIG92ZXJmbG93U2Nyb2xsKTtcbiAgICAgICAgICB0aGlzLnNldEFjdGl2ZShhY3RpdmUpO1xuICAgICAgICAgIHRvZ2dsZUNsYXNzKHRoaXMuJGVsLCB0aGlzLmNsc0JlbG93LCBiZWxvdyk7XG4gICAgICAgICAgYWRkQ2xhc3ModGhpcy4kZWwsIHRoaXMuY2xzRml4ZWQpO1xuICAgICAgICB9LFxuICAgICAgICBzZXRBY3RpdmUoYWN0aXZlKSB7XG4gICAgICAgICAgY29uc3QgcHJldiA9IHRoaXMuYWN0aXZlO1xuICAgICAgICAgIHRoaXMuYWN0aXZlID0gYWN0aXZlO1xuICAgICAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgICAgIHJlcGxhY2VDbGFzcyh0aGlzLnRhcmdldCwgdGhpcy5jbHNJbmFjdGl2ZSwgdGhpcy5jbHNBY3RpdmUpO1xuICAgICAgICAgICAgcHJldiAhPT0gYWN0aXZlICYmIHRyaWdnZXIodGhpcy4kZWwsIFwiYWN0aXZlXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXBsYWNlQ2xhc3ModGhpcy50YXJnZXQsIHRoaXMuY2xzQWN0aXZlLCB0aGlzLmNsc0luYWN0aXZlKTtcbiAgICAgICAgICAgIGlmIChwcmV2ICE9PSBhY3RpdmUpIHtcbiAgICAgICAgICAgICAgcHJldmVudFRyYW5zaXRpb24odGhpcy50YXJnZXQpO1xuICAgICAgICAgICAgICB0cmlnZ2VyKHRoaXMuJGVsLCBcImluYWN0aXZlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgZnVuY3Rpb24gcGFyc2VQcm9wKHZhbHVlLCBlbCwgcHJvcE9mZnNldCwgcGFkZGluZykge1xuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICAgIGlmIChpc051bWVyaWModmFsdWUpIHx8IGlzU3RyaW5nKHZhbHVlKSAmJiB2YWx1ZS5tYXRjaCgvXi0/XFxkLykpIHtcbiAgICAgICAgcmV0dXJuIHByb3BPZmZzZXQgKyB0b1B4KHZhbHVlLCBcImhlaWdodFwiLCBlbCwgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZWZFbGVtZW50ID0gdmFsdWUgPT09IHRydWUgPyBnZXRWaXNpYmxlUGFyZW50KGVsKSA6IHF1ZXJ5KHZhbHVlLCBlbCk7XG4gICAgICAgIHJldHVybiBvZmZzZXQocmVmRWxlbWVudCkuYm90dG9tIC0gKHBhZGRpbmcgJiYgKHJlZkVsZW1lbnQgPT0gbnVsbCA/IHZvaWQgMCA6IHJlZkVsZW1lbnQuY29udGFpbnMoZWwpKSA/IHRvRmxvYXQoY3NzKHJlZkVsZW1lbnQsIFwicGFkZGluZ0JvdHRvbVwiKSkgKyB0b0Zsb2F0KGNzcyhyZWZFbGVtZW50LCBcImJvcmRlckJvdHRvbVdpZHRoXCIpKSA6IDApO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBjb2VyY2UodmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcImZhbHNlXCIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXNldChlbCkge1xuICAgICAgY3NzKGVsLCB7IHBvc2l0aW9uOiBcIlwiLCB0b3A6IFwiXCIsIG1hcmdpblRvcDogXCJcIiwgd2lkdGg6IFwiXCIgfSk7XG4gICAgfVxuICAgIGNvbnN0IGNsc1RyYW5zaXRpb25EaXNhYmxlID0gXCJ1ay10cmFuc2l0aW9uLWRpc2FibGVcIjtcbiAgICBmdW5jdGlvbiBwcmV2ZW50VHJhbnNpdGlvbihlbGVtZW50KSB7XG4gICAgICBpZiAoIWhhc0NsYXNzKGVsZW1lbnQsIGNsc1RyYW5zaXRpb25EaXNhYmxlKSkge1xuICAgICAgICBhZGRDbGFzcyhlbGVtZW50LCBjbHNUcmFuc2l0aW9uRGlzYWJsZSk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiByZW1vdmVDbGFzcyhlbGVtZW50LCBjbHNUcmFuc2l0aW9uRGlzYWJsZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRWaXNpYmxlUGFyZW50KGVsZW1lbnQpIHtcbiAgICAgIHdoaWxlIChlbGVtZW50ID0gcGFyZW50KGVsZW1lbnQpKSB7XG4gICAgICAgIGlmIChpc1Zpc2libGUoZWxlbWVudCkpIHtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNlbERpc2FibGVkID0gXCIudWstZGlzYWJsZWQgKiwgLnVrLWRpc2FibGVkLCBbZGlzYWJsZWRdXCI7XG4gICAgdmFyIFN3aXRjaGVyID0ge1xuICAgICAgbWl4aW5zOiBbVG9nZ2xhYmxlXSxcbiAgICAgIGFyZ3M6IFwiY29ubmVjdFwiLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgY29ubmVjdDogU3RyaW5nLFxuICAgICAgICB0b2dnbGU6IFN0cmluZyxcbiAgICAgICAgaXRlbU5hdjogU3RyaW5nLFxuICAgICAgICBhY3RpdmU6IE51bWJlcixcbiAgICAgICAgZm9sbG93Rm9jdXM6IEJvb2xlYW4sXG4gICAgICAgIHN3aXBpbmc6IEJvb2xlYW5cbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvbm5lY3Q6IFwifi51ay1zd2l0Y2hlclwiLFxuICAgICAgICB0b2dnbGU6IFwiPiAqID4gOmZpcnN0LWNoaWxkXCIsXG4gICAgICAgIGl0ZW1OYXY6IGZhbHNlLFxuICAgICAgICBhY3RpdmU6IDAsXG4gICAgICAgIGNsczogXCJ1ay1hY3RpdmVcIixcbiAgICAgICAgYXR0ckl0ZW06IFwidWstc3dpdGNoZXItaXRlbVwiLFxuICAgICAgICBzZWxWZXJ0aWNhbDogXCIudWstbmF2XCIsXG4gICAgICAgIGZvbGxvd0ZvY3VzOiBmYWxzZSxcbiAgICAgICAgc3dpcGluZzogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGNvbm5lY3RzOiB7XG4gICAgICAgICAgZ2V0OiAoeyBjb25uZWN0IH0sICRlbCkgPT4gcXVlcnlBbGwoY29ubmVjdCwgJGVsKSxcbiAgICAgICAgICBvYnNlcnZlOiAoeyBjb25uZWN0IH0pID0+IGNvbm5lY3RcbiAgICAgICAgfSxcbiAgICAgICAgY29ubmVjdENoaWxkcmVuKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3RzLm1hcCgoZWwpID0+IGNoaWxkcmVuKGVsKSkuZmxhdCgpO1xuICAgICAgICB9LFxuICAgICAgICB0b2dnbGVzOiAoeyB0b2dnbGUgfSwgJGVsKSA9PiAkJCh0b2dnbGUsICRlbCksXG4gICAgICAgIGNoaWxkcmVuKF8sICRlbCkge1xuICAgICAgICAgIHJldHVybiBjaGlsZHJlbigkZWwpLmZpbHRlcihcbiAgICAgICAgICAgIChjaGlsZCkgPT4gdGhpcy50b2dnbGVzLnNvbWUoKHRvZ2dsZSkgPT4gY2hpbGQuY29udGFpbnModG9nZ2xlKSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgd2F0Y2g6IHtcbiAgICAgICAgY29ubmVjdHMoY29ubmVjdHMpIHtcbiAgICAgICAgICBpZiAodGhpcy5zd2lwaW5nKSB7XG4gICAgICAgICAgICBjc3MoY29ubmVjdHMsIFwidG91Y2hBY3Rpb25cIiwgXCJwYW4teSBwaW5jaC16b29tXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLiRlbWl0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbm5lY3RDaGlsZHJlbigpIHtcbiAgICAgICAgICBsZXQgaW5kZXggPSBNYXRoLm1heCgwLCB0aGlzLmluZGV4KCkpO1xuICAgICAgICAgIGZvciAoY29uc3QgZWwgb2YgdGhpcy5jb25uZWN0cykge1xuICAgICAgICAgICAgY2hpbGRyZW4oZWwpLmZvckVhY2goKGNoaWxkLCBpKSA9PiB0b2dnbGVDbGFzcyhjaGlsZCwgdGhpcy5jbHMsIGkgPT09IGluZGV4KSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuJGVtaXQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgdG9nZ2xlcyh0b2dnbGVzKSB7XG4gICAgICAgICAgdGhpcy4kZW1pdCgpO1xuICAgICAgICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuaW5kZXgoKTtcbiAgICAgICAgICB0aGlzLnNob3cofmFjdGl2ZSA/IGFjdGl2ZSA6IHRvZ2dsZXNbdGhpcy5hY3RpdmVdIHx8IHRvZ2dsZXNbMF0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY29ubmVjdGVkKCkge1xuICAgICAgICBhdHRyKHRoaXMuJGVsLCBcInJvbGVcIiwgXCJ0YWJsaXN0XCIpO1xuICAgICAgfSxcbiAgICAgIG9ic2VydmU6IFtcbiAgICAgICAgbGF6eWxvYWQoeyB0YXJnZXRzOiAoeyBjb25uZWN0Q2hpbGRyZW4gfSkgPT4gY29ubmVjdENoaWxkcmVuIH0pLFxuICAgICAgICBzd2lwZSh7IHRhcmdldDogKHsgY29ubmVjdHMgfSkgPT4gY29ubmVjdHMsIGZpbHRlcjogKHsgc3dpcGluZyB9KSA9PiBzd2lwaW5nIH0pXG4gICAgICBdLFxuICAgICAgZXZlbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcImNsaWNrIGtleWRvd25cIixcbiAgICAgICAgICBkZWxlZ2F0ZTogKHsgdG9nZ2xlIH0pID0+IHRvZ2dsZSxcbiAgICAgICAgICBoYW5kbGVyKGUpIHtcbiAgICAgICAgICAgIGlmICghbWF0Y2hlcyhlLmN1cnJlbnQsIHNlbERpc2FibGVkKSAmJiAoZS50eXBlID09PSBcImNsaWNrXCIgfHwgZS5rZXlDb2RlID09PSBrZXlNYXAuU1BBQ0UpKSB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgdGhpcy5zaG93KGUuY3VycmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJrZXlkb3duXCIsXG4gICAgICAgICAgZGVsZWdhdGU6ICh7IHRvZ2dsZSB9KSA9PiB0b2dnbGUsXG4gICAgICAgICAgaGFuZGxlcihlKSB7XG4gICAgICAgICAgICBjb25zdCB7IGN1cnJlbnQsIGtleUNvZGUgfSA9IGU7XG4gICAgICAgICAgICBjb25zdCBpc1ZlcnRpY2FsID0gbWF0Y2hlcyh0aGlzLiRlbCwgdGhpcy5zZWxWZXJ0aWNhbCk7XG4gICAgICAgICAgICBsZXQgaSA9IGtleUNvZGUgPT09IGtleU1hcC5IT01FID8gMCA6IGtleUNvZGUgPT09IGtleU1hcC5FTkQgPyBcImxhc3RcIiA6IGtleUNvZGUgPT09IGtleU1hcC5MRUZUICYmICFpc1ZlcnRpY2FsIHx8IGtleUNvZGUgPT09IGtleU1hcC5VUCAmJiBpc1ZlcnRpY2FsID8gXCJwcmV2aW91c1wiIDoga2V5Q29kZSA9PT0ga2V5TWFwLlJJR0hUICYmICFpc1ZlcnRpY2FsIHx8IGtleUNvZGUgPT09IGtleU1hcC5ET1dOICYmIGlzVmVydGljYWwgPyBcIm5leHRcIiA6IC0xO1xuICAgICAgICAgICAgaWYgKH5pKSB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgY29uc3QgdG9nZ2xlcyA9IHRoaXMudG9nZ2xlcy5maWx0ZXIoKGVsKSA9PiAhbWF0Y2hlcyhlbCwgc2VsRGlzYWJsZWQpKTtcbiAgICAgICAgICAgICAgY29uc3QgbmV4dCA9IHRvZ2dsZXNbZ2V0SW5kZXgoaSwgdG9nZ2xlcywgdG9nZ2xlcy5pbmRleE9mKGN1cnJlbnQpKV07XG4gICAgICAgICAgICAgIG5leHQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZm9sbG93Rm9jdXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3cobmV4dCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcImNsaWNrXCIsXG4gICAgICAgICAgZWw6ICh7ICRlbCwgY29ubmVjdHMsIGl0ZW1OYXYgfSkgPT4gY29ubmVjdHMuY29uY2F0KGl0ZW1OYXYgPyBxdWVyeUFsbChpdGVtTmF2LCAkZWwpIDogW10pLFxuICAgICAgICAgIGRlbGVnYXRlOiAoeyBhdHRySXRlbSB9KSA9PiBgWyR7YXR0ckl0ZW19XSxbZGF0YS0ke2F0dHJJdGVtfV1gLFxuICAgICAgICAgIGhhbmRsZXIoZSkge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCJhLGJ1dHRvblwiKSkge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIHRoaXMuc2hvdyhkYXRhKGUuY3VycmVudCwgdGhpcy5hdHRySXRlbSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwic3dpcGVSaWdodCBzd2lwZUxlZnRcIixcbiAgICAgICAgICBmaWx0ZXI6ICh7IHN3aXBpbmcgfSkgPT4gc3dpcGluZyxcbiAgICAgICAgICBlbDogKHsgY29ubmVjdHMgfSkgPT4gY29ubmVjdHMsXG4gICAgICAgICAgaGFuZGxlcih7IHR5cGUgfSkge1xuICAgICAgICAgICAgdGhpcy5zaG93KGVuZHNXaXRoKHR5cGUsIFwiTGVmdFwiKSA/IFwibmV4dFwiIDogXCJwcmV2aW91c1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICB1cGRhdGUoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgZm9yIChjb25zdCBlbCBvZiB0aGlzLmNvbm5lY3RzKSB7XG4gICAgICAgICAgaWYgKGlzVGFnKGVsLCBcInVsXCIpKSB7XG4gICAgICAgICAgICBhdHRyKGVsLCBcInJvbGVcIiwgXCJwcmVzZW50YXRpb25cIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGF0dHIoY2hpbGRyZW4odGhpcy4kZWwpLCBcInJvbGVcIiwgXCJwcmVzZW50YXRpb25cIik7XG4gICAgICAgIGZvciAoY29uc3QgaW5kZXggaW4gdGhpcy50b2dnbGVzKSB7XG4gICAgICAgICAgY29uc3QgdG9nZ2xlID0gdGhpcy50b2dnbGVzW2luZGV4XTtcbiAgICAgICAgICBjb25zdCBpdGVtID0gKF9hID0gdGhpcy5jb25uZWN0c1swXSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmNoaWxkcmVuW2luZGV4XTtcbiAgICAgICAgICBhdHRyKHRvZ2dsZSwgXCJyb2xlXCIsIFwidGFiXCIpO1xuICAgICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRvZ2dsZS5pZCA9IGdlbmVyYXRlSWQodGhpcywgdG9nZ2xlKTtcbiAgICAgICAgICBpdGVtLmlkID0gZ2VuZXJhdGVJZCh0aGlzLCBpdGVtKTtcbiAgICAgICAgICBhdHRyKHRvZ2dsZSwgXCJhcmlhLWNvbnRyb2xzXCIsIGl0ZW0uaWQpO1xuICAgICAgICAgIGF0dHIoaXRlbSwgeyByb2xlOiBcInRhYnBhbmVsXCIsIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IHRvZ2dsZS5pZCB9KTtcbiAgICAgICAgfVxuICAgICAgICBhdHRyKHRoaXMuJGVsLCBcImFyaWEtb3JpZW50YXRpb25cIiwgbWF0Y2hlcyh0aGlzLiRlbCwgdGhpcy5zZWxWZXJ0aWNhbCkgPyBcInZlcnRpY2FsXCIgOiBudWxsKTtcbiAgICAgIH0sXG4gICAgICBtZXRob2RzOiB7XG4gICAgICAgIGluZGV4KCkge1xuICAgICAgICAgIHJldHVybiBmaW5kSW5kZXgodGhpcy5jaGlsZHJlbiwgKGVsKSA9PiBoYXNDbGFzcyhlbCwgdGhpcy5jbHMpKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2hvdyhpdGVtKSB7XG4gICAgICAgICAgY29uc3QgdG9nZ2xlcyA9IHRoaXMudG9nZ2xlcy5maWx0ZXIoKGVsKSA9PiAhbWF0Y2hlcyhlbCwgc2VsRGlzYWJsZWQpKTtcbiAgICAgICAgICBjb25zdCBwcmV2ID0gdGhpcy5pbmRleCgpO1xuICAgICAgICAgIGNvbnN0IG5leHQgPSBnZXRJbmRleChcbiAgICAgICAgICAgICFpc05vZGUoaXRlbSkgfHwgaW5jbHVkZXModG9nZ2xlcywgaXRlbSkgPyBpdGVtIDogMCxcbiAgICAgICAgICAgIHRvZ2dsZXMsXG4gICAgICAgICAgICBnZXRJbmRleCh0aGlzLnRvZ2dsZXNbcHJldl0sIHRvZ2dsZXMpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBhY3RpdmUgPSBnZXRJbmRleCh0b2dnbGVzW25leHRdLCB0aGlzLnRvZ2dsZXMpO1xuICAgICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIGkpID0+IHtcbiAgICAgICAgICAgIHRvZ2dsZUNsYXNzKGNoaWxkLCB0aGlzLmNscywgYWN0aXZlID09PSBpKTtcbiAgICAgICAgICAgIGF0dHIodGhpcy50b2dnbGVzW2ldLCB7XG4gICAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBhY3RpdmUgPT09IGksXG4gICAgICAgICAgICAgIHRhYmluZGV4OiBhY3RpdmUgPT09IGkgPyBudWxsIDogLTFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IGFuaW1hdGUgPSBwcmV2ID49IDAgJiYgcHJldiAhPT0gbmV4dDtcbiAgICAgICAgICB0aGlzLmNvbm5lY3RzLmZvckVhY2goYXN5bmMgKHsgY2hpbGRyZW46IGNoaWxkcmVuMiB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVzID0gdG9BcnJheShjaGlsZHJlbjIpLmZpbHRlcihcbiAgICAgICAgICAgICAgKGNoaWxkLCBpKSA9PiBpICE9PSBhY3RpdmUgJiYgaGFzQ2xhc3MoY2hpbGQsIHRoaXMuY2xzKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChhd2FpdCB0aGlzLnRvZ2dsZUVsZW1lbnQoYWN0aXZlcywgZmFsc2UsIGFuaW1hdGUpKSB7XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMudG9nZ2xlRWxlbWVudChjaGlsZHJlbjJbYWN0aXZlXSwgdHJ1ZSwgYW5pbWF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHRhYiA9IHtcbiAgICAgIG1peGluczogW0NsYXNzXSxcbiAgICAgIGV4dGVuZHM6IFN3aXRjaGVyLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgbWVkaWE6IEJvb2xlYW5cbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG1lZGlhOiA5NjAsXG4gICAgICAgIGF0dHJJdGVtOiBcInVrLXRhYi1pdGVtXCIsXG4gICAgICAgIHNlbFZlcnRpY2FsOiBcIi51ay10YWItbGVmdCwudWstdGFiLXJpZ2h0XCJcbiAgICAgIH0sXG4gICAgICBjb25uZWN0ZWQoKSB7XG4gICAgICAgIGNvbnN0IGNscyA9IGhhc0NsYXNzKHRoaXMuJGVsLCBcInVrLXRhYi1sZWZ0XCIpID8gXCJ1ay10YWItbGVmdFwiIDogaGFzQ2xhc3ModGhpcy4kZWwsIFwidWstdGFiLXJpZ2h0XCIpID8gXCJ1ay10YWItcmlnaHRcIiA6IGZhbHNlO1xuICAgICAgICBpZiAoY2xzKSB7XG4gICAgICAgICAgdGhpcy4kY3JlYXRlKFwidG9nZ2xlXCIsIHRoaXMuJGVsLCB7IGNscywgbW9kZTogXCJtZWRpYVwiLCBtZWRpYTogdGhpcy5tZWRpYSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBLRVlfU1BBQ0UgPSAzMjtcbiAgICB2YXIgdG9nZ2xlID0ge1xuICAgICAgbWl4aW5zOiBbTWVkaWEsIFRvZ2dsYWJsZV0sXG4gICAgICBhcmdzOiBcInRhcmdldFwiLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgaHJlZjogU3RyaW5nLFxuICAgICAgICB0YXJnZXQ6IG51bGwsXG4gICAgICAgIG1vZGU6IFwibGlzdFwiLFxuICAgICAgICBxdWV1ZWQ6IEJvb2xlYW5cbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGhyZWY6IGZhbHNlLFxuICAgICAgICB0YXJnZXQ6IGZhbHNlLFxuICAgICAgICBtb2RlOiBcImNsaWNrXCIsXG4gICAgICAgIHF1ZXVlZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHRhcmdldDoge1xuICAgICAgICAgIGdldDogKHsgdGFyZ2V0IH0sICRlbCkgPT4ge1xuICAgICAgICAgICAgdGFyZ2V0ID0gcXVlcnlBbGwodGFyZ2V0IHx8ICRlbC5oYXNoLCAkZWwpO1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiBbJGVsXTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9ic2VydmU6ICh7IHRhcmdldCB9KSA9PiB0YXJnZXRcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvbm5lY3RlZCgpIHtcbiAgICAgICAgaWYgKCFpbmNsdWRlcyh0aGlzLm1vZGUsIFwibWVkaWFcIikpIHtcbiAgICAgICAgICBpZiAoIWlzRm9jdXNhYmxlKHRoaXMuJGVsKSkge1xuICAgICAgICAgICAgYXR0cih0aGlzLiRlbCwgXCJ0YWJpbmRleFwiLCBcIjBcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghdGhpcy5jbHMgJiYgaXNUYWcodGhpcy4kZWwsIFwiYVwiKSkge1xuICAgICAgICAgICAgYXR0cih0aGlzLiRlbCwgXCJyb2xlXCIsIFwiYnV0dG9uXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9ic2VydmU6IGxhenlsb2FkKHsgdGFyZ2V0czogKHsgdGFyZ2V0IH0pID0+IHRhcmdldCB9KSxcbiAgICAgIGV2ZW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogcG9pbnRlckRvd24kMSxcbiAgICAgICAgICBmaWx0ZXI6ICh7IG1vZGUgfSkgPT4gaW5jbHVkZXMobW9kZSwgXCJob3ZlclwiKSxcbiAgICAgICAgICBoYW5kbGVyKGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3ByZXZlbnRDbGljayA9IG51bGw7XG4gICAgICAgICAgICBpZiAoIWlzVG91Y2goZSkgfHwgaXNCb29sZWFuKHRoaXMuX3Nob3dTdGF0ZSkgfHwgdGhpcy4kZWwuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJpZ2dlcih0aGlzLiRlbCwgXCJmb2N1c1wiKTtcbiAgICAgICAgICAgIG9uY2UoXG4gICAgICAgICAgICAgIGRvY3VtZW50LFxuICAgICAgICAgICAgICBwb2ludGVyRG93biQxLFxuICAgICAgICAgICAgICAoKSA9PiB0cmlnZ2VyKHRoaXMuJGVsLCBcImJsdXJcIiksXG4gICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgIChlMikgPT4gIXRoaXMuJGVsLmNvbnRhaW5zKGUyLnRhcmdldClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoaW5jbHVkZXModGhpcy5tb2RlLCBcImNsaWNrXCIpKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3ByZXZlbnRDbGljayA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgLy8gbW91c2VlbnRlciBtb3VzZWxlYXZlIGFyZSBhZGRlZCBiZWNhdXNlIG9mIEZpcmVmb3ggYnVnLFxuICAgICAgICAgIC8vIHdoZXJlIHBvaW50ZXJsZWF2ZSBpcyB0cmlnZ2VyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgcG9pbnRlcmVudGVyIG9uIHNjcm9sbFxuICAgICAgICAgIG5hbWU6IGBtb3VzZWVudGVyIG1vdXNlbGVhdmUgJHtwb2ludGVyRW50ZXJ9ICR7cG9pbnRlckxlYXZlfSBmb2N1cyBibHVyYCxcbiAgICAgICAgICBmaWx0ZXI6ICh7IG1vZGUgfSkgPT4gaW5jbHVkZXMobW9kZSwgXCJob3ZlclwiKSxcbiAgICAgICAgICBoYW5kbGVyKGUpIHtcbiAgICAgICAgICAgIGlmIChpc1RvdWNoKGUpIHx8IHRoaXMuJGVsLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHNob3cgPSBpbmNsdWRlcyhbXCJtb3VzZWVudGVyXCIsIHBvaW50ZXJFbnRlciwgXCJmb2N1c1wiXSwgZS50eXBlKTtcbiAgICAgICAgICAgIGNvbnN0IGV4cGFuZGVkID0gdGhpcy5pc1RvZ2dsZWQodGhpcy50YXJnZXQpO1xuICAgICAgICAgICAgaWYgKCFzaG93ICYmICghaXNCb29sZWFuKHRoaXMuX3Nob3dTdGF0ZSkgfHwgZS50eXBlICE9PSBcImJsdXJcIiAmJiBtYXRjaGVzKHRoaXMuJGVsLCBcIjpmb2N1c1wiKSB8fCBlLnR5cGUgPT09IFwiYmx1clwiICYmIG1hdGNoZXModGhpcy4kZWwsIFwiOmhvdmVyXCIpKSkge1xuICAgICAgICAgICAgICBpZiAoZXhwYW5kZWQgPT09IHRoaXMuX3Nob3dTdGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dTdGF0ZSA9IG51bGw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNob3cgJiYgaXNCb29sZWFuKHRoaXMuX3Nob3dTdGF0ZSkgJiYgZXhwYW5kZWQgIT09IHRoaXMuX3Nob3dTdGF0ZSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9zaG93U3RhdGUgPSBzaG93ID8gZXhwYW5kZWQgOiBudWxsO1xuICAgICAgICAgICAgdGhpcy50b2dnbGUoYHRvZ2dsZSR7c2hvdyA/IFwic2hvd1wiIDogXCJoaWRlXCJ9YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJrZXlkb3duXCIsXG4gICAgICAgICAgZmlsdGVyOiAoeyAkZWwsIG1vZGUgfSkgPT4gaW5jbHVkZXMobW9kZSwgXCJjbGlja1wiKSAmJiAhaXNUYWcoJGVsLCBcImlucHV0XCIpLFxuICAgICAgICAgIGhhbmRsZXIoZSkge1xuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gS0VZX1NQQUNFKSB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgdGhpcy4kZWwuY2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcImNsaWNrXCIsXG4gICAgICAgICAgZmlsdGVyOiAoeyBtb2RlIH0pID0+IFtcImNsaWNrXCIsIFwiaG92ZXJcIl0uc29tZSgobSkgPT4gaW5jbHVkZXMobW9kZSwgbSkpLFxuICAgICAgICAgIGhhbmRsZXIoZSkge1xuICAgICAgICAgICAgbGV0IGxpbms7XG4gICAgICAgICAgICBpZiAodGhpcy5fcHJldmVudENsaWNrIHx8IGUudGFyZ2V0LmNsb3Nlc3QoJ2FbaHJlZj1cIiNcIl0sIGFbaHJlZj1cIlwiXScpIHx8IChsaW5rID0gZS50YXJnZXQuY2xvc2VzdChcImFbaHJlZl1cIikpICYmICghdGhpcy5pc1RvZ2dsZWQodGhpcy50YXJnZXQpIHx8IGxpbmsuaGFzaCAmJiBtYXRjaGVzKHRoaXMudGFyZ2V0LCBsaW5rLmhhc2gpKSkge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuX3ByZXZlbnRDbGljayAmJiBpbmNsdWRlcyh0aGlzLm1vZGUsIFwiY2xpY2tcIikpIHtcbiAgICAgICAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIm1lZGlhY2hhbmdlXCIsXG4gICAgICAgICAgZmlsdGVyOiAoeyBtb2RlIH0pID0+IGluY2x1ZGVzKG1vZGUsIFwibWVkaWFcIiksXG4gICAgICAgICAgZWw6ICh7IHRhcmdldCB9KSA9PiB0YXJnZXQsXG4gICAgICAgICAgaGFuZGxlcihlLCBtZWRpYU9iaikge1xuICAgICAgICAgICAgaWYgKG1lZGlhT2JqLm1hdGNoZXMgXiB0aGlzLmlzVG9nZ2xlZCh0aGlzLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBtZXRob2RzOiB7XG4gICAgICAgIGFzeW5jIHRvZ2dsZSh0eXBlKSB7XG4gICAgICAgICAgaWYgKCF0cmlnZ2VyKHRoaXMudGFyZ2V0LCB0eXBlIHx8IFwidG9nZ2xlXCIsIFt0aGlzXSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhc0F0dHIodGhpcy4kZWwsIFwiYXJpYS1leHBhbmRlZFwiKSkge1xuICAgICAgICAgICAgYXR0cih0aGlzLiRlbCwgXCJhcmlhLWV4cGFuZGVkXCIsICF0aGlzLmlzVG9nZ2xlZCh0aGlzLnRhcmdldCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXRoaXMucXVldWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b2dnbGVFbGVtZW50KHRoaXMudGFyZ2V0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgbGVhdmluZyA9IHRoaXMudGFyZ2V0LmZpbHRlcigoZWwpID0+IGhhc0NsYXNzKGVsLCB0aGlzLmNsc0xlYXZlKSk7XG4gICAgICAgICAgaWYgKGxlYXZpbmcubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsIG9mIHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICAgIGNvbnN0IGlzTGVhdmluZyA9IGluY2x1ZGVzKGxlYXZpbmcsIGVsKTtcbiAgICAgICAgICAgICAgdGhpcy50b2dnbGVFbGVtZW50KGVsLCBpc0xlYXZpbmcsIGlzTGVhdmluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHRvZ2dsZWQgPSB0aGlzLnRhcmdldC5maWx0ZXIodGhpcy5pc1RvZ2dsZWQpO1xuICAgICAgICAgIGlmIChhd2FpdCB0aGlzLnRvZ2dsZUVsZW1lbnQodG9nZ2xlZCwgZmFsc2UpKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnRvZ2dsZUVsZW1lbnQoXG4gICAgICAgICAgICAgIHRoaXMudGFyZ2V0LmZpbHRlcigoZWwpID0+ICFpbmNsdWRlcyh0b2dnbGVkLCBlbCkpLFxuICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgY29tcG9uZW50cyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgICAgICAgX19wcm90b19fOiBudWxsLFxuICAgICAgICBBY2NvcmRpb246IEFjY29yZGlvbixcbiAgICAgICAgQWxlcnQ6IGFsZXJ0LFxuICAgICAgICBDbG9zZTogQ2xvc2UsXG4gICAgICAgIENvdmVyOiBjb3ZlcixcbiAgICAgICAgRHJvcDogZHJvcCxcbiAgICAgICAgRHJvcFBhcmVudEljb246IEljb25Db21wb25lbnQsXG4gICAgICAgIERyb3Bkb3duOiBkcm9wLFxuICAgICAgICBEcm9wbmF2OiBEcm9wbmF2LFxuICAgICAgICBGb3JtQ3VzdG9tOiBmb3JtQ3VzdG9tLFxuICAgICAgICBHcmlkOiBncmlkLFxuICAgICAgICBIZWlnaHRNYXRjaDogaGVpZ2h0TWF0Y2gsXG4gICAgICAgIEhlaWdodFBsYWNlaG9sZGVyOiBoZWlnaHRQbGFjZWhvbGRlcixcbiAgICAgICAgSGVpZ2h0Vmlld3BvcnQ6IGhlaWdodFZpZXdwb3J0LFxuICAgICAgICBJY29uOiBJY29uLFxuICAgICAgICBJbWc6IGltZyxcbiAgICAgICAgSW52ZXJzZTogaW52ZXJzZSxcbiAgICAgICAgTGVhZGVyOiBsZWFkZXIsXG4gICAgICAgIE1hcmdpbjogTWFyZ2luLFxuICAgICAgICBNYXJrZXI6IE1hcmtlcixcbiAgICAgICAgTW9kYWw6IG1vZGFsLFxuICAgICAgICBOYXY6IG5hdixcbiAgICAgICAgTmF2UGFyZW50SWNvbjogTmF2UGFyZW50SWNvbixcbiAgICAgICAgTmF2YmFyOiBuYXZiYXIsXG4gICAgICAgIE5hdmJhclBhcmVudEljb246IEljb25Db21wb25lbnQsXG4gICAgICAgIE5hdmJhclRvZ2dsZUljb246IE5hdmJhclRvZ2dsZUljb24sXG4gICAgICAgIE9mZmNhbnZhczogb2ZmY2FudmFzLFxuICAgICAgICBPdmVyZmxvd0F1dG86IG92ZXJmbG93QXV0byxcbiAgICAgICAgT3ZlcmxheUljb246IEljb25Db21wb25lbnQsXG4gICAgICAgIFBhZ2luYXRpb25OZXh0OiBQYWdpbmF0aW9uTmV4dCxcbiAgICAgICAgUGFnaW5hdGlvblByZXZpb3VzOiBQYWdpbmF0aW9uUHJldmlvdXMsXG4gICAgICAgIFJlc3BvbnNpdmU6IHJlc3BvbnNpdmUsXG4gICAgICAgIFNjcm9sbDogc2Nyb2xsLFxuICAgICAgICBTY3JvbGxzcHk6IHNjcm9sbHNweSxcbiAgICAgICAgU2Nyb2xsc3B5TmF2OiBzY3JvbGxzcHlOYXYsXG4gICAgICAgIFNlYXJjaEljb246IFNlYXJjaCxcbiAgICAgICAgU2xpZGVuYXZOZXh0OiBTbGlkZW5hdixcbiAgICAgICAgU2xpZGVuYXZQcmV2aW91czogU2xpZGVuYXYsXG4gICAgICAgIFNwaW5uZXI6IFNwaW5uZXIsXG4gICAgICAgIFN0aWNreTogc3RpY2t5LFxuICAgICAgICBTdmc6IHN2ZyxcbiAgICAgICAgU3dpdGNoZXI6IFN3aXRjaGVyLFxuICAgICAgICBUYWI6IHRhYixcbiAgICAgICAgVG9nZ2xlOiB0b2dnbGUsXG4gICAgICAgIFRvdG9wOiBUb3RvcCxcbiAgICAgICAgVmlkZW86IFZpZGVvXG4gICAgfSk7XG5cbiAgICBlYWNoKGNvbXBvbmVudHMsIChjb21wb25lbnQsIG5hbWUpID0+IEFwcC5jb21wb25lbnQobmFtZSwgY29tcG9uZW50KSk7XG4gICAgYm9vdChBcHApO1xuXG4gICAgZWFjaChjb21wb25lbnRzJDEsIChjb21wb25lbnQsIG5hbWUpID0+IEFwcC5jb21wb25lbnQobmFtZSwgY29tcG9uZW50KSk7XG5cbiAgICByZXR1cm4gQXBwO1xuXG59KSk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cbmltcG9ydCAnLi9pbmRleC1zdHlsZS5jc3MnO1xuaW1wb3J0ICcuLi9ub2RlX21vZHVsZXMvdWlraXQvZGlzdC9jc3MvdWlraXQubWluLmNzcydcbmltcG9ydCBVSWtpdCBmcm9tICd1aWtpdCc7XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDAsXG5cdFwic3R5bGVzXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3BvcnRmb2xpb1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtwb3J0Zm9saW9cIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInN0eWxlc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9