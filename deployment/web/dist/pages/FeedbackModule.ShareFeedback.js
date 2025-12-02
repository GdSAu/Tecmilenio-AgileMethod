import { handleError, HandledError, toFriendlyId, LogManager, asProperty, getSession, DescribedError, fromConstant$, dynUnavailable, pageScope, getNanoflowArguments$, nanoflowEngine, ensure, readUntracked, MxObject, available, unavailable, reactExports, jsxRuntimeExports, classNames, getUserRoleNames, getAugmentedNamespace, hideProgress, showProgress, selectTranslation, asPluginWidgets } from '../index-B2JBYcJC.js';
import { Div, PageFragment, ExpressionProperty } from '../ScrollContainer-s4IgqE8l.js';
import { fromObjectProperty$, ActionButton, TextProperty, ActionProperty } from '../ActionButton-Dv79O5ku.js';
import { Alert, getAriaLabelProps, getValidationAriaProps, FormGroup, DerivedUniqueIdProperty, ValidationProperty } from '../FormGroup-BDsY9dY-.js';
import { WebIconProperty } from '../WebIconProperty-BjGs0HnE.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-DrFNYzUf.js';
import { ImageWidgetModule, Container } from '../Image-4O8yuwqt.js';
import { DataView } from '../DataView-RXiE0Ldy.js';
import { Label } from '../Label-5zHz9ktY.js';
import { Text } from '../Text-i84nuG4x.js';
import { debounce, TextBox } from '../TextBox-DtcNudjX.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-gcIskFmo.js';
import { AttributeProperty } from '../DR_P8f0l-C11bGf1g.js';
import '../DaFVLkxr-PApvqQxc.js';
import '../bdxqAC6d-BP4WTE9p.js';
import '../InlineText-xkL9W1d8.js';

function handleDataSourceExecutionError(widgetId, e, dataSourceType) {
  handleError(e instanceof HandledError ? e : new Error(`An error occurred while executing ${dataSourceType} data source for widget ${toFriendlyId(widgetId)}: ${e instanceof Error ? e.message : e}`));
}

const logger = LogManager.get().getLogger(), NanoflowObjectProperty = asProperty((config, store, widgetId) => {
  const allowedRoles = config.source.allowedRoles, session = getSession();
  if (void 0 !== allowedRoles && !session.hasSomeRole(allowedRoles))
    return handleError(new DescribedError("Unable to execute action because you do not have sufficient permissions.")), fromConstant$(dynUnavailable());
  const [currentForm$] = store.useSlot(pageScope, "form");
  return fromObjectProperty$(config, store, widgetId, getNanoflowArguments$(config.argMap, store, widgetId, `data source of ${widgetId}`), async (args) => {
    !function(args2) {
      logger.debug(`Fetching object using nanoflow '${config.source.nanoflow}' for widget ${toFriendlyId(widgetId)}`, "parameter mapping:", args2);
    }(args);
    try {
      const result = await nanoflowEngine.execute(config.source.nanoflow, args, ensure(readUntracked(currentForm$))[0]), mxObject = result instanceof MxObject ? result : void 0;
      return function(mxObject2) {
        logger.debug(mxObject2 ? `Received object '${mxObject2.getGuid()}' for widget ${toFriendlyId(widgetId)}` : `Received no object for widget ${toFriendlyId(widgetId)}`);
      }(mxObject), mxObject ? available(mxObject) : unavailable();
    } catch (e) {
      return handleDataSourceExecutionError(widgetId, e, "nanoflow"), unavailable();
    }
  });
});

function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
var index$1 = reactExports.useLayoutEffect, updateRef = function(ref, value) {
  "function" != typeof ref ? ref.current = value : ref(value);
}, HIDDEN_TEXTAREA_STYLE = { "min-height": "0", "max-height": "none", height: "0", visibility: "hidden", overflow: "hidden", position: "absolute", "z-index": "-1000", top: "0", right: "0", display: "block" }, forceHiddenStyles$1 = function(node) {
  Object.keys(HIDDEN_TEXTAREA_STYLE).forEach(function(key) {
    node.style.setProperty(key, HIDDEN_TEXTAREA_STYLE[key], "important");
  });
}, hiddenTextarea = null, getHeight = function(node, sizingData) {
  var height = node.scrollHeight;
  return "border-box" === sizingData.sizingStyle.boxSizing ? height + sizingData.borderSize : height - sizingData.paddingSize;
};
var noop = function() {
}, SIZING_STYLE = ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "boxSizing", "fontFamily", "fontSize", "fontStyle", "fontWeight", "letterSpacing", "lineHeight", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "tabSize", "textIndent", "textRendering", "textTransform", "width", "wordBreak", "wordSpacing", "scrollbarGutter"], isIE = !!document.documentElement.currentStyle, getSizingData$1 = function(node) {
  var style = window.getComputedStyle(node);
  if (null === style)
    return null;
  var obj, sizingStyle = (obj = style, SIZING_STYLE.reduce(function(acc, prop) {
    return acc[prop] = obj[prop], acc;
  }, {})), boxSizing = sizingStyle.boxSizing;
  return "" === boxSizing ? null : (isIE && "border-box" === boxSizing && (sizingStyle.width = parseFloat(sizingStyle.width) + parseFloat(sizingStyle.borderRightWidth) + parseFloat(sizingStyle.borderLeftWidth) + parseFloat(sizingStyle.paddingRight) + parseFloat(sizingStyle.paddingLeft) + "px"), { sizingStyle, paddingSize: parseFloat(sizingStyle.paddingBottom) + parseFloat(sizingStyle.paddingTop), borderSize: parseFloat(sizingStyle.borderBottomWidth) + parseFloat(sizingStyle.borderTopWidth) });
};
function useListener(target, type, listener) {
  var value, ref, latestListener = (value = listener, ref = reactExports.useRef(value), index$1(function() {
    ref.current = value;
  }), ref);
  reactExports.useLayoutEffect(function() {
    var handler = function(ev) {
      return latestListener.current(ev);
    };
    if (target)
      return target.addEventListener(type, handler), function() {
        return target.removeEventListener(type, handler);
      };
  }, []);
}
var _excluded = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"], TextareaAutosize = function(_ref, userRef) {
  var cacheMeasurements = _ref.cacheMeasurements, maxRows = _ref.maxRows, minRows = _ref.minRows, _ref$onChange = _ref.onChange, onChange = void 0 === _ref$onChange ? noop : _ref$onChange, _ref$onHeightChange = _ref.onHeightChange, onHeightChange = void 0 === _ref$onHeightChange ? noop : _ref$onHeightChange, props = function(r, e) {
    if (null == r)
      return {};
    var t = {};
    for (var n in r)
      if ({}.hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n))
          continue;
        t[n] = r[n];
      }
    return t;
  }(_ref, _excluded), isControlled = void 0 !== props.value, libRef = reactExports.useRef(null), ref = function(libRef2, userRef2) {
    var prevUserRef = reactExports.useRef();
    return reactExports.useCallback(function(instance) {
      libRef2.current = instance, prevUserRef.current && updateRef(prevUserRef.current, null), prevUserRef.current = userRef2, userRef2 && updateRef(userRef2, instance);
    }, [userRef2]);
  }(libRef, userRef), heightRef = reactExports.useRef(0), measurementsCacheRef = reactExports.useRef(), resizeTextarea = function() {
    var node = libRef.current, nodeSizingData = cacheMeasurements && measurementsCacheRef.current ? measurementsCacheRef.current : getSizingData$1(node);
    if (nodeSizingData) {
      measurementsCacheRef.current = nodeSizingData;
      var _calculateNodeHeight = function(sizingData, value, minRows2, maxRows2) {
        void 0 === minRows2 && (minRows2 = 1), void 0 === maxRows2 && (maxRows2 = 1 / 0), hiddenTextarea || ((hiddenTextarea = document.createElement("textarea")).setAttribute("tabindex", "-1"), hiddenTextarea.setAttribute("aria-hidden", "true"), forceHiddenStyles$1(hiddenTextarea)), null === hiddenTextarea.parentNode && document.body.appendChild(hiddenTextarea);
        var paddingSize = sizingData.paddingSize, borderSize = sizingData.borderSize, sizingStyle = sizingData.sizingStyle, boxSizing = sizingStyle.boxSizing;
        Object.keys(sizingStyle).forEach(function(_key) {
          var key = _key;
          hiddenTextarea.style[key] = sizingStyle[key];
        }), forceHiddenStyles$1(hiddenTextarea), hiddenTextarea.value = value;
        var height2 = getHeight(hiddenTextarea, sizingData);
        hiddenTextarea.value = value, height2 = getHeight(hiddenTextarea, sizingData), hiddenTextarea.value = "x";
        var rowHeight2 = hiddenTextarea.scrollHeight - paddingSize, minHeight = rowHeight2 * minRows2;
        "border-box" === boxSizing && (minHeight = minHeight + paddingSize + borderSize), height2 = Math.max(minHeight, height2);
        var maxHeight = rowHeight2 * maxRows2;
        return "border-box" === boxSizing && (maxHeight = maxHeight + paddingSize + borderSize), [height2 = Math.min(maxHeight, height2), rowHeight2];
      }(nodeSizingData, node.value || node.placeholder || "x", minRows, maxRows), height = _calculateNodeHeight[0], rowHeight = _calculateNodeHeight[1];
      heightRef.current !== height && (heightRef.current = height, node.style.setProperty("height", height + "px", "important"), onHeightChange(height, { rowHeight }));
    }
  };
  return reactExports.useLayoutEffect(resizeTextarea), function(libRef2, listener) {
    useListener(document.body, "reset", function(ev) {
      libRef2.current.form === ev.target && listener(ev);
    });
  }(libRef, function() {
    if (!isControlled) {
      var currentValue = libRef.current.value;
      requestAnimationFrame(function() {
        var node = libRef.current;
        node && currentValue !== node.value && resizeTextarea();
      });
    }
  }), useListener(window, "resize", resizeTextarea), function(listener) {
    useListener(document.fonts, "loadingdone", listener);
  }(resizeTextarea), reactExports.createElement("textarea", _extends({}, props, { onChange: function(event) {
    isControlled || resizeTextarea(), onChange(event);
  }, ref }));
}, index = reactExports.forwardRef(TextareaAutosize);
class TextArea extends reactExports.Component {
  constructor() {
    super(...arguments), this.state = {}, this.onChangeHandler = this.onChange.bind(this), this.onFocusHandler = this.onFocus.bind(this), this.onBlurHandler = this.onBlur.bind(this), this.onChangeBehaviourHandler = this.createOnChangeBehaviour();
  }
  componentDidMount() {
    const maxLength = this.props.maxLength;
    void 0 !== maxLength && this.props.inputValue.setValidator((val) => void 0 !== val && val.length > maxLength ? this.props.textTooLongMessage.value : void 0);
  }
  componentDidUpdate(prevProps) {
    this.props.inputValue.displayValue !== prevProps.inputValue.displayValue && this.setState({ editedValue: void 0 }), "available" !== prevProps.inputValue.status && "available" === this.props.inputValue.status && this.props.autoGrow && setTimeout(() => window.dispatchEvent(new Event("resize")), 0);
  }
  createOnChangeBehaviour() {
    return this.props.submitWhileEditing ? debounce(this.submitValue.bind(this), ensure(this.props.submitDelay)) : () => {
    };
  }
  getCurrentValue() {
    return this.state.editedValue ?? this.props.inputValue.displayValue;
  }
  submitValue() {
    const inputValue = this.props.inputValue, currentValue = this.getCurrentValue();
    currentValue !== inputValue.displayValue ? inputValue.setValue(currentValue) : this.setState({ editedValue: void 0 });
  }
  onChange(e) {
    this.setState({ editedValue: e.target.value }, () => {
      !this.props.inputValue.readOnly && e.target instanceof HTMLTextAreaElement && document.activeElement !== e.target && this.submitValue();
    }), this.onChangeBehaviourHandler();
  }
  onFocus() {
    this.dispatchAction("onEnter");
  }
  onBlur() {
    this.submitValue(), this.dispatchAction("onLeave");
  }
  render() {
    return jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [this.props.inputValue.readOnly && "control" !== this.props.readOnlyStyle ? this.renderAsText() : this.renderAsInput(), this.renderCounterMessage(), jsxRuntimeExports.jsx(Alert, { id: `${this.props.id}-error`, validation: this.props.inputValue.validation })] });
  }
  renderCounterMessage() {
    return !this.props.inputValue.readOnly && this.props.maxLength && this.props.counterMessage?.value ? jsxRuntimeExports.jsx("label", { className: "mx-textarea-counter", children: this.props.counterMessage.value.replace("{1}", this.getCurrentValue().length.toString()).replace("{2}", this.props.maxLength.toString()) }) : null;
  }
  renderAsInput() {
    return jsxRuntimeExports.jsx(index, { id: this.props.id, className: classNames("form-control", "mx-textarea-input", { "mx-textarea-noresize": !this.props.autoGrow }), value: this.getCurrentValue(), tabIndex: this.props.tabIndex, maxLength: this.props.maxLength, minRows: this.props.autoGrow ? 2 : this.props.numberOfLines, maxRows: this.props.autoGrow ? void 0 : this.props.numberOfLines, placeholder: this.props.placeholder.value && this.props.placeholder.value.length > 0 ? this.props.placeholder.value : void 0, onChange: this.onChangeHandler, onFocus: this.onFocusHandler, onBlur: this.onBlurHandler, disabled: this.props.inputValue.readOnly, ...getAriaLabelProps(this.props.ariaLabel?.value), ...getValidationAriaProps(this.props.inputValue.validation, this.props.id), "aria-required": this.props.ariaRequired });
  }
  renderAsText() {
    return jsxRuntimeExports.jsx("div", { className: "form-control-static", children: this.getCurrentValue() || "\xA0" });
  }
  dispatchAction(property) {
    const prop = this.props[property];
    "available" === this.props.inputValue.status && prop && prop.execute();
  }
}

// BEGIN EXTRA CODE
const handleUserRoles = async () => {
  try {
    let userRoles;
    if (typeof mx !== "undefined" && typeof mx.session === "object" && typeof mx.session.getUserRoleNames === "function") {
      userRoles = mx.session.getUserRoleNames();
    } else if (typeof getUserRoleNames !== "function" || getUserRoleNames === undefined) {
      userRoles = getUserRoleNames();
    } else {
      console.error("Feedback module cannot access a valid user role retrieval function.");
      return undefined;
    }
    if (!Array.isArray(userRoles) || userRoles.length === 0) {
      console.error("User roles not available or empty.");
      return undefined;
    }
    return userRoles[0];
  } catch (error) {
    console.error("Feedback module failed to get the user role name.", error);
    return undefined;
  }
};
const handlePagePath = async () => {
  try {
    if (typeof mx !== "undefined" && typeof mx.ui.getContentForm === "function" && typeof mx.ui.getContentForm().path !== "undefined") {
      return mx.ui.getContentForm().path;
    } else {
      return window.history.state.pageName;
    }
  } catch (error) {
    console.error("Feedback module cannot get the Mendix App page name", error);
    return undefined;
  }
};
// END EXTRA CODE

/**
 * What does this JavaScript action do?
 * 
 * Returns meta data from the clients internet browser. 
 * 
 * This includes; 
 * 
 * ActiveUserRoles
 * PageName
 * EnvironmentURL
 * Browser
 * ScreenWidth
 * ScreenHeight
 * @param {MxObject} feedback
 * @returns {Promise.<MxObject>}
 */
async function JS_PopulateFeedbackMetadata(feedback) {
  // BEGIN USER CODE
  try {
    const userRoles = await handleUserRoles();
    const pagePath = await handlePagePath();
    feedback.set("ActiveUserRoles", userRoles || "");
    feedback.set("PageName", pagePath || "");
    feedback.set("EnvironmentURL", window.location.href || "");
    feedback.set("Browser", navigator.userAgent || "");
    feedback.set("ScreenWidth", window.screen.width || "");
    feedback.set("ScreenHeight", window.screen.height || "");
    return feedback;
  } catch (error) {
    console.error("Feedback Module cannot correctly set meta data.", error);
  }
  ;
  // END USER CODE
}

var JS_PopulateFeedbackMetadata$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    JS_PopulateFeedbackMetadata: JS_PopulateFeedbackMetadata
});

var require$$0$4 = /*@__PURE__*/getAugmentedNamespace(JS_PopulateFeedbackMetadata$1);

var AsyncStorage = {};

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @param {string} key
 * @param {MxObject} value
 * @returns {Promise.<void>}
 */
async function JS_SetFeedbackStorageObject(key, value) {
  // BEGIN USER CODE
  if (!key) {
    return Promise.reject(new Error("Input parameter 'Key' is required"));
  }
  if (!value) {
    return Promise.reject(new Error("Input parameter 'Value' is required"));
  }
  const serializedObject = serializeMxObject(value);
  return setItem(key, JSON.stringify(serializedObject));
  function setItem(key, value) {
    if (navigator && navigator.product === "ReactNative") {
      return AsyncStorage.setItem(key, value);
    }
    if (window) {
      window.localStorage.setItem(key, value);
      return Promise.resolve();
    }
    return Promise.reject(new Error("No storage API available"));
  }
  function serializeMxObject(object) {
    return object.getAttributes().reduce((accumulator, attributeName) => {
      accumulator[attributeName] = object.get(attributeName);
      return accumulator;
    }, {
      guid: object.getGuid()
    });
  }
  // END USER CODE
}

var JS_SetFeedbackStorageObject$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    JS_SetFeedbackStorageObject: JS_SetFeedbackStorageObject
});

var require$$0$3 = /*@__PURE__*/getAugmentedNamespace(JS_SetFeedbackStorageObject$1);

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @returns {Promise.<void>}
 */
async function JS_Recalculate_MendixModal_Error_PopUp_Zindex() {
  // BEGIN USER CODE

  function setModalZindex(cssSelector, zIndexValue) {
    try {
      const htmlElement = document.querySelectorAll(cssSelector);
      if (!htmlElement.length) {
        return;
      }
      htmlElement.forEach(item => item.style.zIndex = zIndexValue);
    } catch (error) {
      console.warn("Feedback Module JS Action JS_Recalculate_Modal_Zindex could not execute correctly.", error);
    }
  }
  ;
  setTimeout(() => {
    setModalZindex(".mx-dialog-info, mx-dialog-warning, .mx-dialog-error", "90");
    setModalZindex(".mx-underlay", "80");
  }, 500);
  // END USER CODE
}

var JS_Recalculate_MendixModal_Error_PopUp_Zindex$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    JS_Recalculate_MendixModal_Error_PopUp_Zindex: JS_Recalculate_MendixModal_Error_PopUp_Zindex
});

var require$$2$1 = /*@__PURE__*/getAugmentedNamespace(JS_Recalculate_MendixModal_Error_PopUp_Zindex$1);

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @returns {Promise.<boolean>}
 */
async function JS_isStrictMode() {
  // BEGIN USER CODE
  return new Promise(resolve => {
    try {
      mx.data.create({
        entity: "FeedbackModule.Feedback",
        callback: obj => {
          mx.data.remove({
            guid: obj.getGuid(),
            callback: () => resolve(false),
            error: () => resolve(false)
          });
        },
        error: () => resolve(false)
      });
    } catch (err) {
      if (err.message.includes("mx.data.create is disabled")) {
        resolve(true);
      } else {
        resolve(true);
      }
    }
  });
  // END USER CODE
}

var JS_isStrictMode$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    JS_isStrictMode: JS_isStrictMode
});

var require$$1$2 = /*@__PURE__*/getAugmentedNamespace(JS_isStrictMode$1);

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @param {string} key
 * @param {string} entity
 * @returns {Promise.<MxObject>}
 */
async function JS_GetFeedbackStorageObject(key, entity) {
  // BEGIN USER CODE
  if (!key) {
    return Promise.reject(new Error("Input parameter 'Key' is required"));
  }
  if (!entity) {
    return Promise.reject(new Error("Input parameter 'Entity' is required"));
  }
  return getItem(key).then(result => {
    if (result === null) {
      return Promise.reject(new Error(`Storage item '${key}' does not exist`));
    }
    const value = JSON.parse(result);
    return getOrCreateMxObject(entity, value).then(newObject => {
      const newValue = serializeMxObject(newObject);
      return setItem(key, JSON.stringify(newValue)).then(() => newObject);
    });
  });
  function getItem(key) {
    if (navigator && navigator.product === "ReactNative") {
      return AsyncStorage.getItem(key);
    }
    if (window) {
      const value = window.localStorage.getItem(key);
      return Promise.resolve(value);
    }
    return Promise.reject(new Error("No storage API available"));
  }
  function setItem(key, value) {
    if (navigator && navigator.product === "ReactNative") {
      return AsyncStorage.setItem(key, value);
    }
    if (window) {
      window.localStorage.setItem(key, value);
      return Promise.resolve();
    }
    return Promise.reject(new Error("No storage API available"));
  }
  function getOrCreateMxObject(entity, value) {
    return getMxObject(value.guid).then(existingObject => {
      if (existingObject) {
        return existingObject;
      } else {
        return createMxObject(entity, value);
      }
    });
  }
  function getMxObject(guid) {
    return new Promise((resolve, reject) => {
      mx.data.get({
        guid,
        callback: mxObject => resolve(mxObject),
        error: error => reject(error)
      });
    });
  }
  function createMxObject(entity, value) {
    return new Promise((resolve, reject) => {
      mx.data.create({
        entity,
        callback: mxObject => {
          Object.keys(value).filter(attribute => attribute !== "guid").forEach(attributeName => {
            const attributeValue = value[attributeName];
            mxObject.set(attributeName, attributeValue);
          });
          resolve(mxObject);
        },
        error: () => reject(new Error(`Could not create '${entity}' object`))
      });
    });
  }
  function serializeMxObject(object) {
    return object.getAttributes().reduce((accumulator, attributeName) => {
      accumulator[attributeName] = object.get(attributeName);
      return accumulator;
    }, {
      guid: object.getGuid()
    });
  }
  // END USER CODE
}

var JS_GetFeedbackStorageObject$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    JS_GetFeedbackStorageObject: JS_GetFeedbackStorageObject
});

var require$$1$1 = /*@__PURE__*/getAugmentedNamespace(JS_GetFeedbackStorageObject$1);

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @param {string} localStorageKey
 * @param {string} objectItemKey
 * @returns {Promise.<string>}
 */
async function JS_GetSingleLocalStorageObjectItem(localStorageKey, objectItemKey) {
  var _parsedObject$objectI;
  // BEGIN USER CODE
  if (!localStorageKey) {
    return Promise.reject(new Error("Input parameter 'localStorageKey' is required"));
  }
  if (!objectItemKey) {
    return Promise.reject(new Error("Input parameter 'objectItemKey' is required"));
  }
  const localObject = window.localStorage.getItem(localStorageKey);
  const parsedObject = JSON.parse(localObject);
  const singleItem = (_parsedObject$objectI = parsedObject === null || parsedObject === void 0 ? void 0 : parsedObject[objectItemKey]) !== null && _parsedObject$objectI !== void 0 ? _parsedObject$objectI : "";
  return Promise.resolve(singleItem);
  // END USER CODE
}

var JS_GetSingleLocalStorageObjectItem$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    JS_GetSingleLocalStorageObjectItem: JS_GetSingleLocalStorageObjectItem
});

var require$$0$2 = /*@__PURE__*/getAugmentedNamespace(JS_GetSingleLocalStorageObjectItem$1);

const Get_And_Set_Feedback_NPE = {
  "name": "FeedbackModule.Get_And_Set_Feedback_NPE",
  "instructions": [
    {
      "type": "javaScriptActionCall",
      "label": "3160958a-eeb2-4dd4-9073-9c015f489739",
      "action": () => require$$0$2.JS_GetSingleLocalStorageObjectItem,
      "outputVar": "AppID",
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "primitive",
          "value": {
            "type": "literal",
            "value": "AppID"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "839bb521-d59a-4748-a0eb-1ca6e100c7d4",
      "action": () => require$$0$2.JS_GetSingleLocalStorageObjectItem,
      "outputVar": "Subject",
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "primitive",
          "value": {
            "type": "literal",
            "value": "Subject"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "723da835-5013-403c-9d09-c433bd27cf96",
      "action": () => require$$0$2.JS_GetSingleLocalStorageObjectItem,
      "outputVar": "Description",
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "primitive",
          "value": {
            "type": "literal",
            "value": "Description"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "f437def6-9ed0-480c-935d-dfb0dfff94f0",
      "action": () => require$$0$2.JS_GetSingleLocalStorageObjectItem,
      "outputVar": "SubmitterUUID",
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "primitive",
          "value": {
            "type": "literal",
            "value": "SubmitterUUID"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "712740c1-c46d-47c0-8890-121d3dccab87",
      "action": () => require$$0$2.JS_GetSingleLocalStorageObjectItem,
      "outputVar": "SubmitterEmail",
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "primitive",
          "value": {
            "type": "literal",
            "value": "SubmitterEmail"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "b5eed03a-092f-48e2-a977-45725309376b",
      "action": () => require$$0$2.JS_GetSingleLocalStorageObjectItem,
      "outputVar": "SubmitterDisplayName",
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "primitive",
          "value": {
            "type": "literal",
            "value": "SubmitterDisplayName"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "b163db84-da21-41f3-9356-c0275dcdfdf5",
      "action": () => require$$0$2.JS_GetSingleLocalStorageObjectItem,
      "outputVar": "ImageB64",
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "primitive",
          "value": {
            "type": "literal",
            "value": "ImageB64"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "bea8cf72-d48f-49b4-afae-ab469ce39adb",
      "action": () => require$$0$2.JS_GetSingleLocalStorageObjectItem,
      "outputVar": "_showEmail",
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "primitive",
          "value": {
            "type": "literal",
            "value": "_showEmail"
          }
        }
      ]
    },
    {
      "type": "createObject",
      "label": "7506c690-27af-40a8-9b71-01db5690daec",
      "objectType": "FeedbackModule.Feedback",
      "outputVar": "NewFeedback"
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "AppID",
      "value": {
        "type": "variable",
        "variable": "AppID"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "Subject",
      "value": {
        "type": "variable",
        "variable": "Subject"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "Description",
      "value": {
        "type": "variable",
        "variable": "Description"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "SubmitterUUID",
      "value": {
        "type": "variable",
        "variable": "SubmitterUUID"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "SubmitterEmail",
      "value": {
        "type": "variable",
        "variable": "SubmitterEmail"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "SubmitterDisplayName",
      "value": {
        "type": "variable",
        "variable": "SubmitterDisplayName"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "ImageB64",
      "value": {
        "type": "variable",
        "variable": "ImageB64"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "_showEmail",
      "value": {
        "type": "conditional",
        "condition": {
          "type": "function",
          "name": "=",
          "parameters": [
            {
              "type": "variable",
              "variable": "_showEmail"
            },
            {
              "type": "literal",
              "value": "true"
            }
          ]
        },
        "then": {
          "type": "literal",
          "value": true
        },
        "else": {
          "type": "literal",
          "value": false
        }
      }
    },
    {
      "type": "return",
      "label": "5103dedd-f7ad-4605-a3b4-4e8fa536e365",
      "result": {
        "type": "variable",
        "variable": "NewFeedback"
      },
      "resultKind": "object"
    }
  ]
};

const SUB_Feedback_GetOrCreate = {
  "name": "FeedbackModule.SUB_Feedback_GetOrCreate",
  "instructions": [
    {
      "type": "javaScriptActionCall",
      "label": "14f94073-ab60-4a9c-a33f-490743640a04",
      "action": () => require$$1$2.JS_isStrictMode,
      "outputVar": "isStrictMode",
      "parameters": []
    },
    {
      "type": "switch",
      "label": "ed9d4752-36c3-4f02-af79-98c4f2d6872e",
      "condition": {
        "type": "function",
        "name": "=",
        "parameters": [
          {
            "type": "variable",
            "variable": "isStrictMode"
          },
          {
            "type": "literal",
            "value": false
          }
        ]
      },
      "targets": {
        "false": "377de816-4910-4ea5-a3ec-162f3908c4f9",
        "true": "82efdf51-9755-4f03-b1dc-8ef36d314661"
      }
    },
    {
      "type": "tryCatch",
      "label": "82efdf51-9755-4f03-b1dc-8ef36d314661",
      "catchTarget": "6a45f39e-5d70-48d0-b69a-f5d4b8fda12e",
      "body": [
        {
          "type": "javaScriptActionCall",
          "action": () => require$$1$1.JS_GetFeedbackStorageObject,
          "outputVar": "LocalFeedback",
          "parameters": [
            {
              "kind": "primitive",
              "value": {
                "type": "constant",
                "name": "FeedbackModule.LocalStorageKey"
              }
            },
            {
              "kind": "primitive",
              "value": {
                "type": "literal",
                "value": "FeedbackModule.Feedback"
              }
            }
          ]
        },
        {
          "type": "return",
          "result": {
            "type": "literal",
            "value": true
          },
          "resultKind": "primitive"
        }
      ]
    },
    {
      "type": "switch",
      "label": "81aa943d-2c9d-4097-83c0-18da6955c2ba",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "LocalFeedback"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "false": "476a9b52-e565-4f99-a6af-65afb06eeedb",
        "true": "d64a6f85-d77c-4493-99ba-3d038b432195"
      }
    },
    {
      "type": "return",
      "label": "d64a6f85-d77c-4493-99ba-3d038b432195",
      "result": {
        "type": "variable",
        "variable": "LocalFeedback"
      },
      "resultKind": "object"
    },
    {
      "type": "jump",
      "label": "476a9b52-e565-4f99-a6af-65afb06eeedb",
      "target": "56ff7a1e-738a-4403-9b6b-de2919999239"
    },
    {
      "type": "createObject",
      "label": "56ff7a1e-738a-4403-9b6b-de2919999239",
      "objectType": "FeedbackModule.Feedback",
      "outputVar": "NewFeedback"
    },
    {
      "type": "return",
      "label": "3e2dfb64-d55a-448e-a4b0-a7e4973e988a",
      "result": {
        "type": "variable",
        "variable": "NewFeedback"
      },
      "resultKind": "object"
    },
    {
      "type": "jump",
      "label": "6a45f39e-5d70-48d0-b69a-f5d4b8fda12e",
      "target": "476a9b52-e565-4f99-a6af-65afb06eeedb"
    },
    {
      "type": "jump",
      "label": "476a9b52-e565-4f99-a6af-65afb06eeedb",
      "target": "56ff7a1e-738a-4403-9b6b-de2919999239"
    },
    {
      "type": "jump",
      "label": "377de816-4910-4ea5-a3ec-162f3908c4f9",
      "target": "3c73f11f-9698-4f7d-bfa5-d207e6c982d7"
    },
    {
      "type": "nanoflowCall",
      "label": "3c73f11f-9698-4f7d-bfa5-d207e6c982d7",
      "flow": () => Get_And_Set_Feedback_NPE,
      "parameters": [],
      "outputVar": "StrictModeFeedback"
    },
    {
      "type": "return",
      "label": "2c32cb36-135a-464a-8feb-487aaf9ad8db",
      "result": {
        "type": "variable",
        "variable": "StrictModeFeedback"
      },
      "resultKind": "object"
    }
  ]
};

const DS_Feedback_Populate = {
  "name": "FeedbackModule.DS_Feedback_Populate",
  "instructions": [
    {
      "type": "nanoflowCall",
      "label": "ff258225-edcf-4735-81fb-6c649f864d35",
      "flow": () => SUB_Feedback_GetOrCreate,
      "parameters": [],
      "outputVar": "Feedback"
    },
    {
      "type": "microflowCall",
      "label": "d37de34c-2063-4f35-892d-8977e51e43df",
      "operationId": "KNrTxh+dpFyvi1CSCyuRnw",
      "parameters": [
        {
          "name": "Feedback",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          },
          "kind": "object"
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "8b41b676-a251-49d0-bcce-d79e2f2beab4",
      "inputVar": "Feedback",
      "member": "_showEmail",
      "value": {
        "type": "conditional",
        "condition": {
          "type": "variable",
          "variable": "Feedback",
          "path": "_showEmail"
        },
        "then": {
          "type": "literal",
          "value": true
        },
        "else": {
          "type": "conditional",
          "condition": {
            "type": "conditional",
            "condition": {
              "type": "function",
              "name": "!=",
              "parameters": [
                {
                  "type": "variable",
                  "variable": "Feedback",
                  "path": "SubmitterEmail"
                },
                {
                  "type": "literal",
                  "value": null
                }
              ]
            },
            "then": {
              "type": "function",
              "name": "!=",
              "parameters": [
                {
                  "type": "variable",
                  "variable": "Feedback",
                  "path": "SubmitterEmail"
                },
                {
                  "type": "literal",
                  "value": ""
                }
              ]
            },
            "else": {
              "type": "literal",
              "value": false
            }
          },
          "then": {
            "type": "literal",
            "value": false
          },
          "else": {
            "type": "literal",
            "value": true
          }
        }
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "bf17834a-9c06-47aa-83e9-d74a72290717",
      "action": () => require$$0$4.JS_PopulateFeedbackMetadata,
      "parameters": [
        {
          "kind": "object",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "c4444e7d-21ba-49fb-99a2-11bb4270cef1",
      "action": () => require$$0$3.JS_SetFeedbackStorageObject,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "object",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "44ed6b45-ca3a-488e-b463-2af4933d5a20",
      "action": () => require$$2$1.JS_Recalculate_MendixModal_Error_PopUp_Zindex,
      "parameters": []
    },
    {
      "type": "return",
      "label": "8a5779a2-f257-4b23-943b-0ff31fcec0ab",
      "result": {
        "type": "variable",
        "variable": "Feedback"
      },
      "resultKind": "object"
    }
  ]
};

// BEGIN EXTRA CODE
// messageActionTypes are to identify the postMessage types between the JS Action & Feedback Widget.
const messageAction_toggleAnnotateMode$1 = "mxFeedbackWidget_toggleScreenshotMode"; // The Feedback widget reads this to trigger a specific screenshot mode stage.
const messageAction_isBase64$1 = "mxFeedbackWidget_convertedToBase64"; // We expect this string from the widget when screenshot mode in enabled.
const messageAction_actionCancelled$1 = "mxFeedbackWidget_actionCancelled"; // The Feedback widget will send this back if screenshot/annotation actions are cancelled by the user.

/* 
	The widget and JS action communicate with the following postMessage object structure:
	messageObject = {messageActionType: string;messageData: string;}
*/
const messageObject = {
  "messageActionType": messageAction_toggleAnnotateMode$1 //The Feedback widget reads this to trigger a specific Mode.
};
const parseJson = event => {
  try {
    return JSON.parse(event);
  } catch {
    return undefined;
  }
};
// END EXTRA CODE

/**
 * What does this JavaScript action do?
 * 
 * Lets to take a screenshot of the current visible page
 * 
 * More detailed explanation:
 * The Mendix Feedback Widget handles annotation, screenshot and also renders a default styled button on your page. 
 * 
 * Usage:
 * You should use this JavaScript action to trigger the screenshot functionality.
 * 
 * Return Type:
 * Will return a image base64 string
 * 
 * @returns {Promise.<string>}
 */
async function JS_ToggleFeedbackScreenshotWidget() {
  // BEGIN USER CODE
  postMessage(JSON.stringify(messageObject), window.origin); // Send a message to the Feedback Wiget to trigger screenshot mode.

  return new Promise(resolve => {
    function handleEvent(event) {
      const parsedData = parseJson(event.data);
      if (parsedData && event.origin === window.origin) {
        if (parsedData.messageActionType === messageAction_isBase64$1) {
          window.removeEventListener("message", handleEvent);
          resolve(parsedData.messageData); // Resolve & return the base64 image to the nanoflow.
        }
        ;
        if (parsedData.messageActionType === messageAction_actionCancelled$1) {
          resolve("uploadCancelled");
        }
      }
    }
    ;
    window.addEventListener("message", handleEvent); // Listen and wait for the Feedback Widget to send back the edited screenshot as base64.
  });
  // END USER CODE
}

var JS_ToggleFeedbackScreenshotWidget$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    JS_ToggleFeedbackScreenshotWidget: JS_ToggleFeedbackScreenshotWidget
});

var require$$0$1 = /*@__PURE__*/getAugmentedNamespace(JS_ToggleFeedbackScreenshotWidget$1);

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @param {string} localStorageKey
 * @param {string} imageDataB64
 * @returns {Promise.<void>}
 */
async function JS_SetSingleLocalStorageObjectItem(localStorageKey, imageDataB64) {
  // BEGIN USER CODE
  if (!localStorageKey) {
    return Promise.reject(new Error("Input parameter 'localStorageKey' is required"));
  }
  const existingData = window.localStorage.getItem(localStorageKey);
  let parsedData = {};
  if (existingData) {
    try {
      parsedData = JSON.parse(existingData);
    } catch (error) {
      console.warn(`Failed to parse existing localStorage data. Overwriting.`, error);
    }
  }
  parsedData.ImageB64 = imageDataB64;
  window.localStorage.setItem(localStorageKey, JSON.stringify(parsedData));
  return Promise.resolve();
  // END USER CODE
}

var JS_SetSingleLocalStorageObjectItem$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    JS_SetSingleLocalStorageObjectItem: JS_SetSingleLocalStorageObjectItem
});

var require$$2 = /*@__PURE__*/getAugmentedNamespace(JS_SetSingleLocalStorageObjectItem$1);

const ACT_Feedback_TriggerScreenshotMode = {
  "name": "FeedbackModule.ACT_Feedback_TriggerScreenshotMode",
  "instructions": [
    {
      "type": "closeForm",
      "label": "9dddd184-f047-48b0-a7ba-87e73872e35d"
    },
    {
      "type": "javaScriptActionCall",
      "label": "92d604b1-9ae2-45fc-a3e5-9a99cfad7ed5",
      "action": () => require$$0$1.JS_ToggleFeedbackScreenshotWidget,
      "outputVar": "base64FromWidget",
      "parameters": []
    },
    {
      "type": "switch",
      "label": "6348015f-f760-424c-8008-c02a6b1b870d",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "base64FromWidget"
          },
          {
            "type": "literal",
            "value": "uploadCancelled"
          }
        ]
      },
      "targets": {
        "true": "bdc678b6-d529-4afc-b897-212b84ab0f5d",
        "false": "b3935190-9b62-4fed-ad83-b25057375a4a"
      }
    },
    {
      "type": "jump",
      "label": "b3935190-9b62-4fed-ad83-b25057375a4a",
      "target": "c877f0c7-8eab-498f-b4fb-9832a1d1c65e"
    },
    {
      "type": "jump",
      "label": "c877f0c7-8eab-498f-b4fb-9832a1d1c65e",
      "target": "cabefb3c-e657-495f-9d00-11920eff022c"
    },
    {
      "type": "jump",
      "label": "cabefb3c-e657-495f-9d00-11920eff022c",
      "target": "06de7688-21d8-4eca-8296-fb0a4e0c9a66"
    },
    {
      "type": "openForm",
      "label": "06de7688-21d8-4eca-8296-fb0a4e0c9a66",
      "path": "FeedbackModule/ShareFeedback.page.xml",
      "params": {
        "name": "FeedbackModule/ShareFeedback.page.xml",
        "location": "modal",
        "resizable": true
      }
    },
    {
      "type": "return",
      "label": "f8ef480a-ac5b-429e-9a45-83274499ebcf",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "switch",
      "label": "bdc678b6-d529-4afc-b897-212b84ab0f5d",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "base64FromWidget"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "true": "aac9b983-d86e-48f5-8736-5970e49a065e",
        "false": "53357d12-ce73-438c-9016-8cc7bec52a51"
      }
    },
    {
      "type": "return",
      "label": "53357d12-ce73-438c-9016-8cc7bec52a51",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "javaScriptActionCall",
      "label": "aac9b983-d86e-48f5-8736-5970e49a065e",
      "action": () => require$$1$2.JS_isStrictMode,
      "outputVar": "isStrictMode",
      "parameters": []
    },
    {
      "type": "switch",
      "label": "798cd39a-4c7a-4ab5-9842-4417ad8c7d6a",
      "condition": {
        "type": "function",
        "name": "=",
        "parameters": [
          {
            "type": "variable",
            "variable": "isStrictMode"
          },
          {
            "type": "literal",
            "value": false
          }
        ]
      },
      "targets": {
        "true": "2e3018e2-29fe-462f-984f-aad015659326",
        "false": "83fef770-06b3-429c-b3cc-83e1e8be43f9"
      }
    },
    {
      "type": "jump",
      "label": "83fef770-06b3-429c-b3cc-83e1e8be43f9",
      "target": "6bcdd358-e8cb-43ee-bd4e-fdfaa63c34b2"
    },
    {
      "type": "javaScriptActionCall",
      "label": "6bcdd358-e8cb-43ee-bd4e-fdfaa63c34b2",
      "action": () => require$$2.JS_SetSingleLocalStorageObjectItem,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "base64FromWidget"
          }
        }
      ]
    },
    {
      "type": "jump",
      "label": "fbbcc98f-0730-4749-8baf-4d2aca6d45d0",
      "target": "cabefb3c-e657-495f-9d00-11920eff022c"
    },
    {
      "type": "jump",
      "label": "cabefb3c-e657-495f-9d00-11920eff022c",
      "target": "06de7688-21d8-4eca-8296-fb0a4e0c9a66"
    },
    {
      "type": "changeObject",
      "label": "2e3018e2-29fe-462f-984f-aad015659326",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "variable",
        "variable": "base64FromWidget"
      }
    },
    {
      "type": "commitObjects",
      "operationId": "RI1txFZ31lKG/bDdR/HJ6Q",
      "inputVar": "Feedback"
    },
    {
      "type": "jump",
      "label": "cabefb3c-e657-495f-9d00-11920eff022c",
      "target": "06de7688-21d8-4eca-8296-fb0a4e0c9a66"
    }
  ]
};

// BEGIN EXTRA CODE
var isUploading = false;
async function storeFileAndGetResourceUrl(file) {
  return URL.createObjectURL(file); // Saves the file to locally memory and returns a URL path to the Blob object.
}
;
function removeDomElements(_ref) {
  let {
    fileInput,
    progressId
  } = _ref;
  console.log("progressId", progressId);
  if (progressId) hideProgress({
    progressId
  });
  if (fileInput) document.body.removeChild(fileInput);
  isUploading = false;
}
;
function validateFileTypes(_ref2) {
  let {
    acceptedTypes,
    fileType
  } = _ref2;
  if (!acceptedTypes && !fileType) return false;
  const accepted = acceptedTypes.split(",");
  return accepted.some(type => new RegExp(type).test(fileType));
}
;
function validateFileSize(_ref3) {
  let {
    uploadedFile,
    maxSize
  } = _ref3;
  if (!uploadedFile && !maxSize) return false;
  const uploadedSize = uploadedFile.size / 1024 / 1024; // Convert to MB
  return uploadedSize < maxSize.c[0] + 0.1; // 0.1 MB extra tolerance
}
;
// END EXTRA CODE

/**
 * What does this JavaScript Action do?
 * 
 * This is a custom build JavaScript Action that triggers the file upload dialog box to open in your internet browser. 
 * 
 * Dependency Note: 
 * This JavaScript action should be used with the JavaScript Action called 'JS_RevokeUploadedFileFromMemory' so that the image uploaded is removed from local memory :)
 * 
 * Explanation of this JavaScript Action & Memory management.
 * 
 * We use createObjectURL() to upload and store files in local memory. We can access and cosume this in memory image resource via the URL path that is returned from the createObjectURL() method. 
 * 
 * However, each time you call createObjectURL(), a new object is created in memory, even if you've already created one for the same object. 
 * So each of these must be released by calling the JS Action called 'JS_RevokeUploadedFileFromMemory' when you no longer need them.
 * 
 * Browsers will release object URLs automatically when the document is unloaded; however, for optimal performance and memory usage, if there are safe times when you can explicitly unload them, you should do so with the JavaScriptAction called 'JS_RevokeUploadedFileFromMemory'.
 * @param {string} userDefined_mimeTypes
 * @param {Big} userDefined_fileUploadSize
 * @returns {Promise.<string>}
 */
async function JS_UploadAndConvertToFileBlobURL(userDefined_mimeTypes, userDefined_fileUploadSize) {
  // BEGIN USER CODE
  return new Promise((resolve, reject) => {
    try {
      // Create and append the HTML input element to the body
      const fileInput = document.createElement("input");
      fileInput.style.position = "absolute";
      fileInput.style.left = "-9999px";
      fileInput.name = "fileupload";
      fileInput.id = "fileupload";
      fileInput.type = "file";
      if (userDefined_mimeTypes) {
        fileInput.accept = userDefined_mimeTypes;
      }
      fileInput.multiple = false;
      fileInput.onchange = handleFileUpload;
      document.body.appendChild(fileInput);
      fileInput.addEventListener("cancel", () => resolve("uploadCancelled"));
      fileInput.click();

      // A function used to validate & store the uploaded file to local memory.
      function handleFileUpload(event) {
        isUploading = true;
        const newFile = event.target.files[0];
        const progressId = showProgress();

        // Check if the uploaded file type matches the user defined accepted types.
        if (!validateFileTypes({
          acceptedTypes: fileInput.accept,
          fileType: newFile.type
        })) {
          removeDomElements({
            fileInput,
            progressId
          });
          return resolve("fileTypeNotAccepted");
        }
        // Check if the uploaded file matches the user defined upload size.
        if (!validateFileSize({
          uploadedFile: newFile,
          maxSize: userDefined_fileUploadSize
        })) {
          removeDomElements({
            fileInput,
            progressId
          });
          return resolve("fileSizeNotAccepted");
        }
        // Store file locally on users device and return path to resource.
        storeFileAndGetResourceUrl(newFile).then(fileBlobURL => {
          if (fileBlobURL && typeof fileBlobURL === "string") {
            removeDomElements({
              fileInput,
              progressId
            });
            return resolve(fileBlobURL);
          } else {
            removeDomElements({
              fileInput,
              progressId
            });
            return resolve("fileNotConverted");
          }
        });
      }
      ;
    } catch (error) {
      reject(error);
    }
    ;
  });
  // END USER CODE
}

var JS_UploadAndConvertToFileBlobURL$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    JS_UploadAndConvertToFileBlobURL: JS_UploadAndConvertToFileBlobURL
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(JS_UploadAndConvertToFileBlobURL$1);

// BEGIN EXTRA CODE
// messageActionTypes are to identify the postMessage types between the JS Action & Feedback Widget.
const messageAction_toggleAnnotateMode = "mxFeedbackWidget_toggleAnnotateMode"; // The Feedback widget reads this to trigger a specific screenshot mode stage.
const messageAction_isBase64 = "mxFeedbackWidget_convertedToBase64"; // We expect this string from the widget when screenshot mode in enabled.
const messageAction_actionCancelled = "mxFeedbackWidget_actionCancelled"; // The Feedback widget will send this back if screenshot/annotation actions are cancelled by the user.

const parseJSON = event => {
  try {
    return JSON.parse(event);
  } catch {
    return undefined;
  }
};
// END EXTRA CODE

/**
 * What does this JavaScript action do?
 * 
 * When you upload a screenshot manually the image can be annotatated. 
 * 
 * More detailed explanation:
 * The Mendix Feedback Widget handles annotation and also renders a default styled button on your page. 
 * 
 * In order to trigger the annotation mode you have to use this JavaScript action to send the widget the correct image payload.
 * 
 * Return Type:
 * Will return base 64 image string
 * @param {string} fileBlobURL
 * @returns {Promise.<string>}
 */
async function JS_ToggleFeedbackAnnotateWidget(fileBlobURL) {
  // BEGIN USER CODE
  /* 
  The widget and JS action communicate with the following postMessage object structure:
  messageObject = {messageActionType: string;messageData: string;}
  */
  const messageObject = {
    "messageActionType": messageAction_toggleAnnotateMode,
    // The widget reads this to trigger the Annotate Mode.
    "messageData": fileBlobURL // The widget uses this URL reference to get access to the locally stored image blob.
  };
  postMessage(JSON.stringify(messageObject), window.origin); // Send the serialized message object to Feedback Wiget to trigger annotate mode.

  return new Promise(resolve => {
    function handleEvent(event) {
      const parsedData = parseJSON(event.data); // Convert the received string to an object.

      if (event.origin === window.origin) {
        if (parsedData && parsedData.messageActionType === messageAction_isBase64) {
          window.removeEventListener("message", handleEvent);
          resolve(parsedData.messageData); // Resolve & return the base64 image to the nanoflow.
        }
        ;
        if (parsedData && parsedData.messageActionType === messageAction_actionCancelled) {
          resolve();
        }
      }
    }
    ;
    window.addEventListener("message", handleEvent); // Listen and wait for the Feedback Widget to send the base64 image.
  });
  // END USER CODE
}

var JS_ToggleFeedbackAnnotateWidget$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    JS_ToggleFeedbackAnnotateWidget: JS_ToggleFeedbackAnnotateWidget
});

var require$$1 = /*@__PURE__*/getAugmentedNamespace(JS_ToggleFeedbackAnnotateWidget$1);

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * What does this JavaScript action do?
 * 
 * After you have uploaded an image it removes locally stored image from memory. This is a custom build action.
 * 
 * Dependency Note: 
 * This JavaScript action should be used only when you have inserted the Image Upload JavaScript Action called 'JS_UploadAndConvertToFileBlobURL' into your nanoflow.
 * 
 * More detailed explanation:  Memory management.
 * 
 * To upload a image we use a custom build Javascript action called  'JS_UploadAndConvertToFileBlobURL'.
 * Inside this action we use a JavaScript method called createObjectURL() to upload and store files in local memory. We can access and cosume this in memory image resource via the URL path that is returned from the createObjectURL() method. 
 * 
 * However, each time you call createObjectURL(), a new object is created in memory, even if you've already created one for the same object. 
 * So each of these must be released by calling this action called 'JS_RevokeUploadedFileFromMemory' when you no longer need them.
 * 
 * Browsers will release object URLs automatically when the document is unloaded; however, for optimal performance and memory usage, if there are safe times when you can explicitly unload them, you should do so with the JavaScriptAction called 'JS_RevokeUploadedFileFromMemory'.
 * @param {string} fileBlobURL - You have to pass the fileBlobURL that was created using the URL.createObjectURL() in the JS Action called 'JS_UploadAndConvertToFileBlobURL'
 * @returns {Promise.<void>}
 */
async function JS_RevokeUploadedFileFromMemory(fileBlobURL) {
  // BEGIN USER CODE
  /* We use the URL.createObjectURL() static method which creates a string containing a URL representing the
     image uploaded. 
     The image blob is stored in the clients browser and takes up memory whilst the session is active. So here we 
     revoke the image when the user deletes the image. Note that the image is automaticlly revoked when the browser refreshes
     or closes.
  
     You have to pass the fileBlobURL that was created using the URL.createObjectURL() in the JS Action called 'JS_UploadAndConvertToFileBlobURL'
   */
  if (fileBlobURL && typeof fileBlobURL === "string") {
    URL.revokeObjectURL(fileBlobURL);
  } else {
    throw new Error("Image was not removed from browser memory");
  }
  // END USER CODE
}

var JS_RevokeUploadedFileFromMemory$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    JS_RevokeUploadedFileFromMemory: JS_RevokeUploadedFileFromMemory
});

var require$$3 = /*@__PURE__*/getAugmentedNamespace(JS_RevokeUploadedFileFromMemory$1);

const ACT_Feedback_UploadImage = {
  "name": "FeedbackModule.ACT_Feedback_UploadImage",
  "instructions": [
    {
      "type": "setVariable",
      "label": "36831bdc-f377-407f-a3bf-996db2620ac7",
      "value": {
        "type": "literal",
        "value": ".gif,.png,.jpg,.jpeg"
      },
      "outputVar": "mimeTypes",
      "outputKind": "primitive"
    },
    {
      "type": "setVariable",
      "label": "ce306032-2aae-42c3-885e-6e368f57a088",
      "value": {
        "type": "literalNumeric",
        "value": "5"
      },
      "outputVar": "fileUploadSize",
      "outputKind": "primitive"
    },
    {
      "type": "javaScriptActionCall",
      "label": "64ea4562-0d1a-484b-878f-557a761d4d1b",
      "action": () => require$$0.JS_UploadAndConvertToFileBlobURL,
      "outputVar": "fileBlobURL",
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "mimeTypes"
          }
        },
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "fileUploadSize"
          }
        }
      ]
    },
    {
      "type": "switch",
      "label": "393def4e-7bfc-4305-b613-bf897a304555",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "fileBlobURL"
          },
          {
            "type": "literal",
            "value": "uploadCancelled"
          }
        ]
      },
      "targets": {
        "true": "9d45439d-3e20-4de3-b319-27e239f165f8",
        "false": "66db9f5d-1219-4a12-bee1-2f153b051977"
      }
    },
    {
      "type": "return",
      "label": "66db9f5d-1219-4a12-bee1-2f153b051977",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "switch",
      "label": "9d45439d-3e20-4de3-b319-27e239f165f8",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "fileBlobURL"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "false": "7ca45ffe-edb5-430f-b1dd-1ff30ef4987e",
        "true": "98b70e00-4746-4105-87e8-aa1cb87bc13c"
      }
    },
    {
      "type": "switch",
      "label": "98b70e00-4746-4105-87e8-aa1cb87bc13c",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "fileBlobURL"
          },
          {
            "type": "literal",
            "value": "fileSizeNotAccepted"
          }
        ]
      },
      "targets": {
        "true": "327e87e4-1157-40e8-bbd6-176f0b491653",
        "false": "b02539d5-09a5-4461-b950-2358a0e5f4ea"
      }
    },
    {
      "type": "showMessage",
      "label": "b02539d5-09a5-4461-b950-2358a0e5f4ea",
      "messageType": "error",
      "message": selectTranslation([
        {
          "type": "literal",
          "value": "Maximum image size allowed is 5MB."
        }
      ]),
      "blocking": true
    },
    {
      "type": "return",
      "label": "35129755-2325-4321-8aa1-063fe6961554",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "switch",
      "label": "327e87e4-1157-40e8-bbd6-176f0b491653",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "fileBlobURL"
          },
          {
            "type": "literal",
            "value": "fileTypeNotAccepted"
          }
        ]
      },
      "targets": {
        "false": "86542016-556c-4ba3-853e-981a54baebb9",
        "true": "be05da77-fa06-4c7c-a8c8-1c229ae5de08"
      }
    },
    {
      "type": "closeForm",
      "label": "be05da77-fa06-4c7c-a8c8-1c229ae5de08"
    },
    {
      "type": "javaScriptActionCall",
      "label": "aefaf686-9694-4219-998c-241f884f910e",
      "action": () => require$$1.JS_ToggleFeedbackAnnotateWidget,
      "outputVar": "base64ImageFromWidget",
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "fileBlobURL"
          }
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "68ddebc3-9a15-44b5-9136-f0073c0610f9",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "variable",
        "variable": "base64ImageFromWidget"
      }
    },
    {
      "type": "commitObjects",
      "operationId": "YMxC+z16GVu/Hma9sL8QtQ",
      "inputVar": "Feedback"
    },
    {
      "type": "openForm",
      "label": "72a47953-0896-4727-9e96-3952b130fce9",
      "path": "FeedbackModule/ShareFeedback.page.xml",
      "params": {
        "name": "FeedbackModule/ShareFeedback.page.xml",
        "location": "modal",
        "resizable": true
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "1d5ef0d4-177c-4a2e-a64e-455950cbd5c2",
      "action": () => require$$0$3.JS_SetFeedbackStorageObject,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "object",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "a4ce3585-da9d-4265-8dc4-3057fa99774a",
      "action": () => require$$3.JS_RevokeUploadedFileFromMemory,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "fileBlobURL"
          }
        }
      ]
    },
    {
      "type": "return",
      "label": "a2b4b8b7-8024-4d28-868d-1b506d219771",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "showMessage",
      "label": "86542016-556c-4ba3-853e-981a54baebb9",
      "messageType": "error",
      "message": selectTranslation([
        {
          "type": "literal",
          "value": "Only images with format of .gif .jpg .jpeg .png are allowed"
        }
      ]),
      "blocking": true
    },
    {
      "type": "return",
      "label": "7589b73a-f6b2-41ab-a46b-107b4b18d5bc",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "showMessage",
      "label": "7ca45ffe-edb5-430f-b1dd-1ff30ef4987e",
      "messageType": "error",
      "message": selectTranslation([
        {
          "type": "literal",
          "value": "Upload failed, please try again."
        }
      ]),
      "blocking": true
    },
    {
      "type": "return",
      "label": "8d2a153c-6ee9-4bba-a713-71333f81187d",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

const ACT_Feedback_ClearImage = {
  "name": "FeedbackModule.ACT_Feedback_ClearImage",
  "instructions": [
    {
      "type": "changeObject",
      "label": "b1d88dae-78f8-4abf-ac2e-5c4070176620",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "3a48be4f-7493-4c3b-b0cd-d81025914aa1",
      "action": () => require$$0$3.JS_SetFeedbackStorageObject,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "object",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          }
        }
      ]
    },
    {
      "type": "return",
      "label": "8a7a4506-8516-49dd-8b15-bf92b0aabdad",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

const ACT_Feedback_ClearForm = {
  "name": "FeedbackModule.ACT_Feedback_ClearForm",
  "instructions": [
    {
      "type": "changeObject",
      "label": "d220aea5-a428-4424-986c-a79c8508342c",
      "inputVar": "Feedback",
      "member": "Subject",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "Description",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "SubmitterEmail",
      "value": {
        "type": "conditional",
        "condition": {
          "type": "function",
          "name": "=",
          "parameters": [
            {
              "type": "variable",
              "variable": "Feedback",
              "path": "_showEmail"
            },
            {
              "type": "literal",
              "value": false
            }
          ]
        },
        "then": {
          "type": "variable",
          "variable": "Feedback",
          "path": "SubmitterEmail"
        },
        "else": {
          "type": "literal",
          "value": null
        }
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "08efc3b4-5239-4ec9-b0d7-deaaeb974475",
      "action": () => require$$0$3.JS_SetFeedbackStorageObject,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "object",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          }
        }
      ]
    },
    {
      "type": "return",
      "label": "12b4a874-9fdf-4cb5-9c0c-608a4e431840",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

const SUB_Feedback_ResetLocalStorage = {
  "name": "FeedbackModule.SUB_Feedback_ResetLocalStorage",
  "instructions": [
    {
      "type": "changeObject",
      "label": "0fb7bea6-f513-4ddd-b543-89650ca57f2e",
      "inputVar": "Feedback",
      "member": "Subject",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "Description",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "SubmitterEmail",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "SubmitterUUID",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "SubmitterDisplayName",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "ActiveUserRoles",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "PageName",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "Browser",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "EnvironmentURL",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "ScreenshotName",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "Priority",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "ScreenWidth",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "ScreenHeight",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "cf094079-36ea-40df-b225-4e375df01657",
      "action": () => require$$0$3.JS_SetFeedbackStorageObject,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "object",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          }
        }
      ]
    },
    {
      "type": "return",
      "label": "7a70f648-bf71-4ac2-9975-41eacf3d59da",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

const ACT_SubmitFeedback = {
  "name": "FeedbackModule.ACT_SubmitFeedback",
  "instructions": [
    {
      "type": "microflowCall",
      "label": "7564f11c-cb0c-41d2-a4a3-ccfe7ada23e8",
      "operationId": "KV2ujFWBmFOH8MHOOeN7MA",
      "parameters": [
        {
          "name": "Feedback",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          },
          "kind": "object"
        }
      ],
      "outputVar": "isValid"
    },
    {
      "type": "switch",
      "label": "dd3cc359-178d-450c-bc2c-227740ae5d0a",
      "condition": {
        "type": "variable",
        "variable": "isValid"
      },
      "targets": {
        "true": "02714b53-6842-4cf0-b7a7-f448f39735f2",
        "false": "7d984602-1675-4806-bacd-184db96c4365"
      }
    },
    {
      "type": "return",
      "label": "7d984602-1675-4806-bacd-184db96c4365",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "microflowCall",
      "label": "02714b53-6842-4cf0-b7a7-f448f39735f2",
      "operationId": "DssQVya6w1SNfp7giIcX7w",
      "parameters": [
        {
          "name": "Feedback",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          },
          "kind": "object"
        }
      ],
      "outputVar": "ResponseHelper"
    },
    {
      "type": "closeForm",
      "label": "4965bb03-45ce-44a1-a5dc-d77800aac6de",
      "numberOfPagesToClose": {
        "type": "literalNumeric",
        "value": "1"
      }
    },
    {
      "type": "switch",
      "label": "f527651e-3ddf-4224-a0ea-460715172948",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "ResponseHelper"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "true": "b0a561dd-615b-4555-9a89-ed4125943a79",
        "false": "436e22a2-0914-4abb-b5ed-0b4e003791fd"
      }
    },
    {
      "type": "jump",
      "label": "436e22a2-0914-4abb-b5ed-0b4e003791fd",
      "target": "b2ceb294-a5ad-4f79-9c65-d4270e3cb861"
    },
    {
      "type": "openForm",
      "label": "b2ceb294-a5ad-4f79-9c65-d4270e3cb861",
      "path": "FeedbackModule/PopupFailure.page.xml",
      "params": {
        "name": "FeedbackModule/PopupFailure.page.xml",
        "location": "modal",
        "resizable": false
      }
    },
    {
      "type": "return",
      "label": "fce2589c-a010-400c-8a99-0359166a1fd8",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "openForm",
      "label": "b0a561dd-615b-4555-9a89-ed4125943a79",
      "path": "FeedbackModule/PopupSuccess.page.xml",
      "params": {
        "name": "FeedbackModule/PopupSuccess.page.xml",
        "location": "modal",
        "resizable": false
      },
      "inputArgs": {
        "$Response": {
          "type": "variable",
          "variable": "ResponseHelper"
        }
      }
    },
    {
      "type": "nanoflowCall",
      "label": "36dd775e-1ca6-48d4-9c28-387bd674bb37",
      "flow": () => SUB_Feedback_ResetLocalStorage,
      "parameters": [
        {
          "name": "Feedback",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          },
          "kind": "object"
        }
      ]
    },
    {
      "type": "return",
      "label": "675a3b07-d601-48be-9222-6307b3119dbf",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

const OCH_Feedback_SaveToLocalStorage = {
  "name": "FeedbackModule.OCH_Feedback_SaveToLocalStorage",
  "instructions": [
    {
      "type": "javaScriptActionCall",
      "label": "eff6627e-9607-4f5b-ac61-f303501036f8",
      "action": () => require$$0$3.JS_SetFeedbackStorageObject,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "object",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          }
        }
      ]
    },
    {
      "type": "return",
      "label": "c162d5ce-7680-443f-94c8-cde352303285",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

const React = { createElement: reactExports.createElement };
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const { $Div, $DataView, $Container, $Text, $FormGroup, $TextBox, $TextArea, $Label, $ConditionalVisibilityWrapper, $ActionButton, $Image } = asPluginWidgets({ Div, DataView, Container, Text, FormGroup, TextBox, TextArea, Label, ConditionalVisibilityWrapper, ActionButton, Image });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.FeedbackModule.ShareFeedback.layoutGrid1",
      $widgetId: "p.FeedbackModule.ShareFeedback.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.FeedbackModule.ShareFeedback.layoutGrid1$row0",
            $widgetId: "p.FeedbackModule.ShareFeedback.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.FeedbackModule.ShareFeedback.layoutGrid1$row0$column0",
                  $widgetId: "p.FeedbackModule.ShareFeedback.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.FeedbackModule.ShareFeedback.dataView5",
                        $widgetId: "p.FeedbackModule.ShareFeedback.dataView5",
                        class: "mx-name-dataView5 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: NanoflowObjectProperty({
                          "dataSourceId": "p.20",
                          "editable": true,
                          "source": { "nanoflow": () => DS_Feedback_Populate, "allowedRoles": ["User"] },
                          "argMap": {}
                        }),
                        emptyMessage: TextProperty({
                          "value": selectTranslation([
                            ""
                          ])
                        }),
                        body: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.FeedbackModule.ShareFeedback.container5",
                              $widgetId: "p.FeedbackModule.ShareFeedback.container5",
                              class: "mx-name-container5 spacing-outer-bottom-medium",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.FeedbackModule.ShareFeedback.text1",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.text1",
                                    class: "mx-name-text1",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Help us make your experience better and share your feedback with us!" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "p"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p.FeedbackModule.ShareFeedback.feedback_subject$formGroup",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.feedback_subject$formGroup",
                                    class: "mx-name-feedback_subject mx-textbox",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $TextBox,
                                        {
                                          key: "p.FeedbackModule.ShareFeedback.feedback_subject",
                                          $widgetId: "p.FeedbackModule.ShareFeedback.feedback_subject",
                                          inputValue: AttributeProperty({
                                            "scope": "p.FeedbackModule.ShareFeedback.dataView5",
                                            "path": "",
                                            "entity": "FeedbackModule.Feedback",
                                            "attribute": "Subject",
                                            "onChange": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => OCH_Feedback_SaveToLocalStorage, "allowedRoles": ["User"] }, "disabledDuringExecution": false },
                                            "isList": false,
                                            "validation": null,
                                            "formatting": {}
                                          }),
                                          isPassword: false,
                                          placeholder: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Summarize your feedback in a few words" }, "args": {} }
                                            })
                                          ]),
                                          mask: "",
                                          readOnlyStyle: "control",
                                          maxLength: 200,
                                          onEnter: void 0,
                                          onLeave: void 0,
                                          onEnterKeyPress: void 0,
                                          ariaLabel: void 0,
                                          autocomplete: "on",
                                          submitWhileEditing: true,
                                          submitDelay: 300,
                                          ariaRequired: void 0,
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p.FeedbackModule.ShareFeedback.feedback_subject"
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Subject" }, "args": {} }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.FeedbackModule.ShareFeedback.feedback_subject"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.FeedbackModule.ShareFeedback.feedback_subject"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p.FeedbackModule.ShareFeedback.textArea2$formGroup",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.textArea2$formGroup",
                                    class: "mx-name-textArea2 mx-textarea",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $TextArea,
                                        {
                                          key: "p.FeedbackModule.ShareFeedback.textArea2",
                                          $widgetId: "p.FeedbackModule.ShareFeedback.textArea2",
                                          inputValue: AttributeProperty({
                                            "scope": "p.FeedbackModule.ShareFeedback.dataView5",
                                            "path": "",
                                            "entity": "FeedbackModule.Feedback",
                                            "attribute": "Description",
                                            "onChange": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => OCH_Feedback_SaveToLocalStorage, "allowedRoles": ["User"] }, "disabledDuringExecution": false },
                                            "isList": false,
                                            "validation": null
                                          }),
                                          counterMessage: void 0,
                                          maxLength: void 0,
                                          numberOfLines: 5,
                                          autoGrow: false,
                                          placeholder: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Please add a detailed description, including steps you took before finding issue, or how this idea would help improve the experience for you and other users" }, "args": {} }
                                            })
                                          ]),
                                          readOnlyStyle: "control",
                                          textTooLongMessage: void 0,
                                          onEnter: void 0,
                                          onLeave: void 0,
                                          ariaLabel: void 0,
                                          ariaRequired: void 0,
                                          submitWhileEditing: true,
                                          submitDelay: 300,
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p.FeedbackModule.ShareFeedback.textArea2"
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Description" }, "args": {} }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.FeedbackModule.ShareFeedback.textArea2"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.FeedbackModule.ShareFeedback.textArea2"
                                    })
                                  }
                                )
                              ],
                              ariaHidden: false
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.FeedbackModule.ShareFeedback.container4",
                              $widgetId: "p.FeedbackModule.ShareFeedback.container4",
                              class: "mx-name-container4 col-left spacing-outer-bottom",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Label,
                                  {
                                    key: "p.FeedbackModule.ShareFeedback.label1",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.label1",
                                    class: "mx-name-label1 text-semibold spacing-outer-bottom-none",
                                    style: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.FeedbackModule.ShareFeedback.label1"
                                    }),
                                    caption: TextProperty({
                                      "value": selectTranslation([
                                        "Attachment"
                                      ])
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.FeedbackModule.ShareFeedback.text2",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.text2",
                                    class: "mx-name-text2 text-light",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Upload a jpg, jpeg, png or gif image file of max. 5MB." }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                )
                              ],
                              ariaHidden: false
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.FeedbackModule.ShareFeedback.container2",
                              $widgetId: "p.FeedbackModule.ShareFeedback.container2",
                              class: "mx-name-container2 flexcontainer justify-content-start spacing-outer-bottom-medium",
                              style: {
                                "gap": "8px"
                              },
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.FeedbackModule.ShareFeedback.actionButton4$visibility",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.actionButton4$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "User" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p.FeedbackModule.ShareFeedback.actionButton4",
                                          $widgetId: "p.FeedbackModule.ShareFeedback.actionButton4",
                                          buttonId: "p.FeedbackModule.ShareFeedback.actionButton4",
                                          class: "mx-name-actionButton4",
                                          style: void 0,
                                          tabIndex: void 0,
                                          renderType: "button",
                                          role: void 0,
                                          buttonClass: "btn-default",
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Take Screenshot" }, "args": {} }
                                            })
                                          ]),
                                          tooltip: TextProperty({
                                            "value": selectTranslation([
                                              ""
                                            ])
                                          }),
                                          icon: WebIconProperty({
                                            "icon": { "type": "glyph", "iconClass": "glyphicon-camera" }
                                          }),
                                          action: ActionProperty({
                                            "action": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => ACT_Feedback_TriggerScreenshotMode, "allowedRoles": ["User"] }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                          })
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.FeedbackModule.ShareFeedback.actionButton5$visibility",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.actionButton5$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "User" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p.FeedbackModule.ShareFeedback.actionButton5",
                                          $widgetId: "p.FeedbackModule.ShareFeedback.actionButton5",
                                          buttonId: "p.FeedbackModule.ShareFeedback.actionButton5",
                                          class: "mx-name-actionButton5",
                                          style: void 0,
                                          tabIndex: void 0,
                                          renderType: "button",
                                          role: void 0,
                                          buttonClass: "btn-default",
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Upload" }, "args": {} }
                                            })
                                          ]),
                                          tooltip: TextProperty({
                                            "value": selectTranslation([
                                              ""
                                            ])
                                          }),
                                          icon: WebIconProperty({
                                            "icon": { "type": "glyph", "iconClass": "glyphicon-open" }
                                          }),
                                          action: ActionProperty({
                                            "action": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => ACT_Feedback_UploadImage, "allowedRoles": ["User"] }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                          })
                                        }
                                      )
                                    ]
                                  }
                                )
                              ],
                              ariaHidden: false
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.FeedbackModule.ShareFeedback.container6$visibility",
                              $widgetId: "p.FeedbackModule.ShareFeedback.container6$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ImageB64" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } } }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.FeedbackModule.ShareFeedback.container6",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.container6",
                                    class: "mx-name-container6 mxfeedback-screenshot-preview spacing-outer-bottom-medium",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.FeedbackModule.ShareFeedback.container7",
                                          $widgetId: "p.FeedbackModule.ShareFeedback.container7",
                                          class: "mx-name-container7",
                                          style: {
                                            "position": "relative"
                                          },
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $ConditionalVisibilityWrapper,
                                              {
                                                key: "p.FeedbackModule.ShareFeedback.actionButton1$visibility",
                                                $widgetId: "p.FeedbackModule.ShareFeedback.actionButton1$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "User" }] }, "args": {} }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ActionButton,
                                                    {
                                                      key: "p.FeedbackModule.ShareFeedback.actionButton1",
                                                      $widgetId: "p.FeedbackModule.ShareFeedback.actionButton1",
                                                      buttonId: "p.FeedbackModule.ShareFeedback.actionButton1",
                                                      class: "mx-name-actionButton1 mxfeedback-screenshot-preview__delete-button",
                                                      style: void 0,
                                                      tabIndex: void 0,
                                                      renderType: "button",
                                                      role: void 0,
                                                      buttonClass: "btn-default",
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })
                                                      ]),
                                                      tooltip: TextProperty({
                                                        "value": selectTranslation([
                                                          ""
                                                        ])
                                                      }),
                                                      icon: WebIconProperty({
                                                        "icon": { "type": "glyph", "iconClass": "glyphicon-remove" }
                                                      }),
                                                      action: ActionProperty({
                                                        "action": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => ACT_Feedback_ClearImage, "allowedRoles": ["User"] }, "disabledDuringExecution": true },
                                                        "abortOnServerValidation": true
                                                      })
                                                    }
                                                  )
                                                ]
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Image,
                                              {
                                                key: "p.FeedbackModule.ShareFeedback.image1",
                                                $widgetId: "p.FeedbackModule.ShareFeedback.image1",
                                                datasource: "imageUrl",
                                                imageObject: void 0,
                                                defaultImageDynamic: void 0,
                                                imageUrl: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "ImageB64" }, "args": { "currentObject": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } } }
                                                  })
                                                ]),
                                                imageIcon: void 0,
                                                isBackgroundImage: false,
                                                children: void 0,
                                                onClickType: "action",
                                                onClick: void 0,
                                                alternativeText: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "A Preview of the Feedback image that was from the screenshot or upload" }, "args": {} }
                                                  })
                                                ]),
                                                widthUnit: "auto",
                                                width: 100,
                                                heightUnit: "auto",
                                                height: 100,
                                                iconSize: 14,
                                                displayAs: "fullImage",
                                                responsive: true,
                                                class: "mx-name-image1 mxfeedback-screenshot-preview__image img-center img-contain",
                                                style: {
                                                  "width": "auto"
                                                },
                                                tabIndex: void 0
                                              }
                                            )
                                          ],
                                          ariaHidden: false
                                        }
                                      )
                                    ],
                                    ariaHidden: false
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.FeedbackModule.ShareFeedback.textBox1$formGroup$visibility",
                              $widgetId: "p.FeedbackModule.ShareFeedback.textBox1$formGroup$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "_showEmail" }, "args": { "currentObject": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } } }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p.FeedbackModule.ShareFeedback.textBox1$formGroup",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.textBox1$formGroup",
                                    class: "mx-name-textBox1 mx-textbox",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $TextBox,
                                        {
                                          key: "p.FeedbackModule.ShareFeedback.textBox1",
                                          $widgetId: "p.FeedbackModule.ShareFeedback.textBox1",
                                          inputValue: AttributeProperty({
                                            "scope": "p.FeedbackModule.ShareFeedback.dataView5",
                                            "path": "",
                                            "entity": "FeedbackModule.Feedback",
                                            "attribute": "SubmitterEmail",
                                            "onChange": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => OCH_Feedback_SaveToLocalStorage, "allowedRoles": ["User"] }, "disabledDuringExecution": false },
                                            "isList": false,
                                            "validation": null,
                                            "formatting": {}
                                          }),
                                          isPassword: false,
                                          placeholder: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "name@company.com" }, "args": {} }
                                            })
                                          ]),
                                          mask: "",
                                          readOnlyStyle: "control",
                                          maxLength: 200,
                                          onEnter: void 0,
                                          onLeave: void 0,
                                          onEnterKeyPress: void 0,
                                          ariaLabel: void 0,
                                          autocomplete: "on",
                                          submitWhileEditing: true,
                                          submitDelay: 300,
                                          ariaRequired: void 0,
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p.FeedbackModule.ShareFeedback.textBox1"
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Email" }, "args": {} }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.FeedbackModule.ShareFeedback.textBox1"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.FeedbackModule.ShareFeedback.textBox1"
                                    })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.FeedbackModule.ShareFeedback.container3",
                              $widgetId: "p.FeedbackModule.ShareFeedback.container3",
                              class: "mx-name-container3 flex-row flexcontainer justify-content-end",
                              style: {
                                "gap": "8px"
                              },
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.FeedbackModule.ShareFeedback.feedback_cancel",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.feedback_cancel",
                                    buttonId: "p.FeedbackModule.ShareFeedback.feedback_cancel",
                                    class: "mx-name-feedback_cancel",
                                    style: {
                                      "border": "0"
                                    },
                                    tabIndex: void 0,
                                    renderType: "button",
                                    role: void 0,
                                    buttonClass: "btn-default",
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Cancel" }, "args": {} }
                                      })
                                    ]),
                                    tooltip: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    icon: void 0,
                                    action: ActionProperty({
                                      "action": { "type": "closePage", "argMap": {}, "config": {}, "disabledDuringExecution": true },
                                      "abortOnServerValidation": true
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.FeedbackModule.ShareFeedback.feedback_clear$visibility",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.feedback_clear$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "User" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p.FeedbackModule.ShareFeedback.feedback_clear",
                                          $widgetId: "p.FeedbackModule.ShareFeedback.feedback_clear",
                                          buttonId: "p.FeedbackModule.ShareFeedback.feedback_clear",
                                          class: "mx-name-feedback_clear btn-bordered",
                                          style: void 0,
                                          tabIndex: void 0,
                                          renderType: "button",
                                          role: void 0,
                                          buttonClass: "btn-default",
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Clear" }, "args": {} }
                                            })
                                          ]),
                                          tooltip: TextProperty({
                                            "value": selectTranslation([
                                              ""
                                            ])
                                          }),
                                          icon: void 0,
                                          action: ActionProperty({
                                            "action": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => ACT_Feedback_ClearForm, "allowedRoles": ["User"] }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                          })
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.FeedbackModule.ShareFeedback.feedback_submit$visibility",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.feedback_submit$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "User" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p.FeedbackModule.ShareFeedback.feedback_submit",
                                          $widgetId: "p.FeedbackModule.ShareFeedback.feedback_submit",
                                          buttonId: "p.FeedbackModule.ShareFeedback.feedback_submit",
                                          class: "mx-name-feedback_submit",
                                          style: void 0,
                                          tabIndex: void 0,
                                          renderType: "button",
                                          role: void 0,
                                          buttonClass: "btn-primary",
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Submit" }, "args": {} }
                                            })
                                          ]),
                                          tooltip: TextProperty({
                                            "value": selectTranslation([
                                              ""
                                            ])
                                          }),
                                          icon: void 0,
                                          action: ActionProperty({
                                            "action": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => ACT_SubmitFeedback, "allowedRoles": ["User"] }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                          })
                                        }
                                      )
                                    ]
                                  }
                                )
                              ],
                              ariaHidden: false
                            }
                          )
                        ],
                        hideFooter: true,
                        footer: void 0
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  )
]);
const title = selectTranslation([
  "Share your feedback"
]);
const classes = "";
const cancelChangesOperationId = "VKyeybmhmFaO2OGavxk14Q";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
