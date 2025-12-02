import { handleError, HandledError, toFriendlyId, LogManager, asProperty, getSession, DescribedError, fromConstant$, dynUnavailable, pageScope, getNanoflowArguments$, nanoflowEngine, ensure, readUntracked, MxObject, available, unavailable, reactExports, jsxRuntimeExports, classNames, getUserRoleNames, getAugmentedNamespace, hideProgress, showProgress, selectTranslation, asPluginWidgets } from '../index-D54rfXjv.js';
import { Div, PageFragment, ExpressionProperty } from '../ScrollContainer-BjzP0wD4.js';
import { fromObjectProperty$, ActionButton, TextProperty, ActionProperty } from '../ActionButton-Cg_9OV9E.js';
import { Alert, getAriaLabelProps, getValidationAriaProps, FormGroup, DerivedUniqueIdProperty, ValidationProperty } from '../FormGroup-lL1MtQZD.js';
import { WebIconProperty } from '../WebIconProperty-BMRF9qCt.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-Hlwkz0qB.js';
import { ImageWidgetModule, Container } from '../Image-DBqlkM53.js';
import { DataView } from '../DataView-CxBpf6ZR.js';
import { Label } from '../Label-BwvKykP6.js';
import { Text } from '../Text-Dwd-U4AU.js';
import { debounce, TextBox } from '../TextBox-Co9WhSGk.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-w_4e9dfm.js';
import { AttributeProperty } from '../3ZSM-Jib-DprIUIuq.js';
import '../BkqAssms-AUPua_wR.js';
import '../DmsI6saM-CRBfA3bF.js';
import '../InlineText-rQyIsJj9.js';

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
      "label": "02ff4d0a-5768-4e4e-a00d-bf87cef25609",
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
      "label": "b8c72464-6bb8-4124-8a60-eea8ef3a9b67",
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
      "label": "cf1e95f8-8ad7-4649-8a39-f4e3bbd0fe65",
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
      "label": "a539e8ee-3d9f-4ca9-85ad-6fed814031ed",
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
      "label": "8e2f72a9-d65d-45b0-b7f5-05429fbe7cc2",
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
      "label": "c82f9f07-55ab-413f-a5ba-925d49197348",
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
      "label": "e800401b-afdf-4945-a184-2a7a38e5182a",
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
      "label": "b6dd2acc-8cc1-4be4-8426-6dbb2d16175d",
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
      "label": "470146e2-cc0f-440e-a3a4-e9b8dbdefb03",
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
      "label": "ba15af07-4c7c-4d3d-82f4-cc117d1e5388",
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
      "label": "4e9bc467-e6ba-4574-85dc-ea13cd28d2a3",
      "action": () => require$$1$2.JS_isStrictMode,
      "outputVar": "isStrictMode",
      "parameters": []
    },
    {
      "type": "switch",
      "label": "c5eeee4a-1ffc-489a-89d2-ef2522d138c7",
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
        "false": "0e600f38-6250-43eb-b290-f761082c105d",
        "true": "ae8e8cc6-11ce-4191-935e-fa1fe581406e"
      }
    },
    {
      "type": "tryCatch",
      "label": "ae8e8cc6-11ce-4191-935e-fa1fe581406e",
      "catchTarget": "6bc5578f-f62c-4d71-a7bd-6d20c9b76776",
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
      "label": "7dee2947-7e74-442b-a4fc-2253ffdd45fc",
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
        "false": "7ac5a18d-e5af-467f-96c1-4d5901880bcf",
        "true": "b59bb7b7-5ce9-41e2-aa97-b337fe2510be"
      }
    },
    {
      "type": "return",
      "label": "b59bb7b7-5ce9-41e2-aa97-b337fe2510be",
      "result": {
        "type": "variable",
        "variable": "LocalFeedback"
      },
      "resultKind": "object"
    },
    {
      "type": "jump",
      "label": "7ac5a18d-e5af-467f-96c1-4d5901880bcf",
      "target": "10ddd69a-fb2d-4410-8206-7175f780bbfa"
    },
    {
      "type": "createObject",
      "label": "10ddd69a-fb2d-4410-8206-7175f780bbfa",
      "objectType": "FeedbackModule.Feedback",
      "outputVar": "NewFeedback"
    },
    {
      "type": "return",
      "label": "0ad55f98-2e7c-44b8-972d-aa33f51fd3d7",
      "result": {
        "type": "variable",
        "variable": "NewFeedback"
      },
      "resultKind": "object"
    },
    {
      "type": "jump",
      "label": "6bc5578f-f62c-4d71-a7bd-6d20c9b76776",
      "target": "7ac5a18d-e5af-467f-96c1-4d5901880bcf"
    },
    {
      "type": "jump",
      "label": "7ac5a18d-e5af-467f-96c1-4d5901880bcf",
      "target": "10ddd69a-fb2d-4410-8206-7175f780bbfa"
    },
    {
      "type": "jump",
      "label": "0e600f38-6250-43eb-b290-f761082c105d",
      "target": "68089582-f869-4f1b-ab9d-6bd739472494"
    },
    {
      "type": "nanoflowCall",
      "label": "68089582-f869-4f1b-ab9d-6bd739472494",
      "flow": () => Get_And_Set_Feedback_NPE,
      "parameters": [],
      "outputVar": "StrictModeFeedback"
    },
    {
      "type": "return",
      "label": "64fb9a3e-9543-4762-b6aa-e79d0976863f",
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
      "label": "67fa1d85-a30b-4a7e-8a10-7be47083adfe",
      "flow": () => SUB_Feedback_GetOrCreate,
      "parameters": [],
      "outputVar": "Feedback"
    },
    {
      "type": "microflowCall",
      "label": "54c136cd-6177-44e7-ae6d-c0b706f12876",
      "operationId": "Z4hzx4Uj2VaTg3k/02WHug",
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
      "label": "3576a53c-a45a-4ea8-8818-89eea7ef57c8",
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
      "label": "4d0686e6-279e-4fd4-84ea-b5909246ace8",
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
      "label": "aecb16b5-ce3a-464b-a2ae-678bf1c7f8fb",
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
      "label": "b4b0a9d9-dffc-4e31-9411-c560657c3abd",
      "action": () => require$$2$1.JS_Recalculate_MendixModal_Error_PopUp_Zindex,
      "parameters": []
    },
    {
      "type": "return",
      "label": "7ae6d5e6-9de3-4918-bacb-dd5a849ffce0",
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
      "label": "a1f34d91-9e6a-45e8-9eea-2e2b140a140c"
    },
    {
      "type": "javaScriptActionCall",
      "label": "0bc90c8e-166b-4643-ac33-be9dd949b14f",
      "action": () => require$$0$1.JS_ToggleFeedbackScreenshotWidget,
      "outputVar": "base64FromWidget",
      "parameters": []
    },
    {
      "type": "switch",
      "label": "1fc12cd7-642d-49f3-9226-c995637cc347",
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
        "true": "7719f22f-c60d-4612-a0a4-bb674b6048da",
        "false": "77b9ef25-a984-4c43-83f9-91444aef9219"
      }
    },
    {
      "type": "jump",
      "label": "77b9ef25-a984-4c43-83f9-91444aef9219",
      "target": "7e5a0a43-b2fb-4913-af2e-dc31eeff971c"
    },
    {
      "type": "jump",
      "label": "7e5a0a43-b2fb-4913-af2e-dc31eeff971c",
      "target": "da8cbfe6-6d3c-41a2-b84c-6de74f24e1dc"
    },
    {
      "type": "jump",
      "label": "da8cbfe6-6d3c-41a2-b84c-6de74f24e1dc",
      "target": "28c36d3f-243c-44bb-9fb7-f3ebdf5e212f"
    },
    {
      "type": "openForm",
      "label": "28c36d3f-243c-44bb-9fb7-f3ebdf5e212f",
      "path": "FeedbackModule/ShareFeedback.page.xml",
      "params": {
        "name": "FeedbackModule/ShareFeedback.page.xml",
        "location": "modal",
        "resizable": true
      }
    },
    {
      "type": "return",
      "label": "41b10cef-0a02-46b7-93f9-116754cd5377",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "switch",
      "label": "7719f22f-c60d-4612-a0a4-bb674b6048da",
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
        "true": "2c05830d-15ff-4575-a37c-98b5c1fcc364",
        "false": "8f7f0123-1d70-4887-9cde-728557e430e4"
      }
    },
    {
      "type": "return",
      "label": "8f7f0123-1d70-4887-9cde-728557e430e4",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "javaScriptActionCall",
      "label": "2c05830d-15ff-4575-a37c-98b5c1fcc364",
      "action": () => require$$1$2.JS_isStrictMode,
      "outputVar": "isStrictMode",
      "parameters": []
    },
    {
      "type": "switch",
      "label": "85ffb65e-189a-4b62-ba34-16915de3278a",
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
        "true": "220cd3bd-c6a4-4e2d-ba4f-eaf22bb893a2",
        "false": "d132c25e-5749-4421-bd09-d9894e38943b"
      }
    },
    {
      "type": "jump",
      "label": "d132c25e-5749-4421-bd09-d9894e38943b",
      "target": "7b870553-6f5a-4552-9edc-d6a9caff84e7"
    },
    {
      "type": "javaScriptActionCall",
      "label": "7b870553-6f5a-4552-9edc-d6a9caff84e7",
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
      "label": "1e468988-83c0-4b9d-8190-78c21fbc1278",
      "target": "da8cbfe6-6d3c-41a2-b84c-6de74f24e1dc"
    },
    {
      "type": "jump",
      "label": "da8cbfe6-6d3c-41a2-b84c-6de74f24e1dc",
      "target": "28c36d3f-243c-44bb-9fb7-f3ebdf5e212f"
    },
    {
      "type": "changeObject",
      "label": "220cd3bd-c6a4-4e2d-ba4f-eaf22bb893a2",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "variable",
        "variable": "base64FromWidget"
      }
    },
    {
      "type": "commitObjects",
      "operationId": "TOPcNPR+jF2cmbf5UxkU2g",
      "inputVar": "Feedback"
    },
    {
      "type": "jump",
      "label": "da8cbfe6-6d3c-41a2-b84c-6de74f24e1dc",
      "target": "28c36d3f-243c-44bb-9fb7-f3ebdf5e212f"
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
      "label": "54ab4671-95d6-42af-b928-13e6bd053001",
      "value": {
        "type": "literal",
        "value": ".gif,.png,.jpg,.jpeg"
      },
      "outputVar": "mimeTypes",
      "outputKind": "primitive"
    },
    {
      "type": "setVariable",
      "label": "70656f4e-cdda-4e06-9770-d619829f04f0",
      "value": {
        "type": "literalNumeric",
        "value": "5"
      },
      "outputVar": "fileUploadSize",
      "outputKind": "primitive"
    },
    {
      "type": "javaScriptActionCall",
      "label": "ff536912-dcca-4b9d-b87b-65222bcdfd98",
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
      "label": "8b47f1a7-fc7e-42f5-a292-c3953c640fd0",
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
        "true": "c1366fc8-c373-4fe5-be97-15afdce6bf82",
        "false": "b5fc8f46-f7a2-4bdc-b42f-cf94918d6282"
      }
    },
    {
      "type": "return",
      "label": "b5fc8f46-f7a2-4bdc-b42f-cf94918d6282",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "switch",
      "label": "c1366fc8-c373-4fe5-be97-15afdce6bf82",
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
        "false": "69e84831-9202-43c0-9190-79d20728eff7",
        "true": "b4de1f5f-0f08-4c9a-b0a0-54181eb09174"
      }
    },
    {
      "type": "switch",
      "label": "b4de1f5f-0f08-4c9a-b0a0-54181eb09174",
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
        "true": "0cfcfae0-d314-4697-a48a-af776c5fc2c5",
        "false": "4c2c94d1-1e46-4e68-9663-3cb0dd864b51"
      }
    },
    {
      "type": "showMessage",
      "label": "4c2c94d1-1e46-4e68-9663-3cb0dd864b51",
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
      "label": "9ac2fc75-68c2-4a0c-a6ee-5ff52ffb79f1",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "switch",
      "label": "0cfcfae0-d314-4697-a48a-af776c5fc2c5",
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
        "false": "61e27b9c-980c-466e-ac9d-bea9a888105d",
        "true": "29f2878b-12b0-49fe-b8b1-555855d0d1fd"
      }
    },
    {
      "type": "closeForm",
      "label": "29f2878b-12b0-49fe-b8b1-555855d0d1fd"
    },
    {
      "type": "javaScriptActionCall",
      "label": "24ede6b7-fd78-40b2-9f2f-aa1436b2cc7a",
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
      "label": "76042c82-4fd9-441d-9245-472ea46b5a62",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "variable",
        "variable": "base64ImageFromWidget"
      }
    },
    {
      "type": "commitObjects",
      "operationId": "X2pfXHlvt16QPqePQZRV9g",
      "inputVar": "Feedback"
    },
    {
      "type": "openForm",
      "label": "69c95bff-7cde-4c38-9a76-610aef2706e1",
      "path": "FeedbackModule/ShareFeedback.page.xml",
      "params": {
        "name": "FeedbackModule/ShareFeedback.page.xml",
        "location": "modal",
        "resizable": true
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "b35de743-6074-4550-a869-9a1480c5ad24",
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
      "label": "19c7b6ff-5477-41ba-a925-2394c037eb66",
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
      "label": "76d91f28-ef31-4483-af1f-d0d0bce85daa",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "showMessage",
      "label": "61e27b9c-980c-466e-ac9d-bea9a888105d",
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
      "label": "fac62fb4-ad56-443a-8468-2dfd10b0f57c",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "showMessage",
      "label": "69e84831-9202-43c0-9190-79d20728eff7",
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
      "label": "9785fd75-ac78-4e2b-9fa2-93a241cde99c",
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
      "label": "be722cba-7715-4de1-998a-77b5b2517680",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "c80385e1-279f-4763-bf87-cd99157c683a",
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
      "label": "611a547b-2563-49e3-b10e-4c4890de240d",
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
      "label": "c8735f4b-5038-477c-963b-f8f701f2376d",
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
      "label": "4162df17-6f70-4544-afe2-e22acd14f967",
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
      "label": "d8ec54df-563d-43e9-babc-24b570752a70",
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
      "label": "db750cee-f183-4f12-ad96-1ac876377ab9",
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
      "label": "3c5eb2e0-375f-4199-b785-5a767d9f9e77",
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
      "label": "2f52d1a3-4c22-4abd-a928-8f0fe66fca84",
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
      "label": "2fc3685e-93c0-4206-bd98-9d34218770d6",
      "operationId": "XobEyYEfn1+pY2u1NfBfKQ",
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
      "label": "76f658f9-6a46-4292-8b41-dedc6080fc0c",
      "condition": {
        "type": "variable",
        "variable": "isValid"
      },
      "targets": {
        "true": "3f1468dd-e066-4ed9-9998-21d09988fc24",
        "false": "534e2826-d722-4e75-8e8b-7022073cd704"
      }
    },
    {
      "type": "return",
      "label": "534e2826-d722-4e75-8e8b-7022073cd704",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "microflowCall",
      "label": "3f1468dd-e066-4ed9-9998-21d09988fc24",
      "operationId": "Glm6xam0DlWVq4QdgU+y2w",
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
      "label": "bf0647eb-39fe-43ad-b1bb-0227a23eba42",
      "numberOfPagesToClose": {
        "type": "literalNumeric",
        "value": "1"
      }
    },
    {
      "type": "switch",
      "label": "c7f79c1a-a54e-461d-941d-2983058cee2b",
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
        "true": "65950eff-57d0-4b4b-b3e8-3af9a977c82a",
        "false": "7c762ac6-53c1-4889-8520-cce28a7a7ec0"
      }
    },
    {
      "type": "jump",
      "label": "7c762ac6-53c1-4889-8520-cce28a7a7ec0",
      "target": "b2b1a7af-9cac-4309-96c5-c5a2f3f47aad"
    },
    {
      "type": "openForm",
      "label": "b2b1a7af-9cac-4309-96c5-c5a2f3f47aad",
      "path": "FeedbackModule/PopupFailure.page.xml",
      "params": {
        "name": "FeedbackModule/PopupFailure.page.xml",
        "location": "modal",
        "resizable": false
      }
    },
    {
      "type": "return",
      "label": "811ef0a2-a433-4bc9-8f36-3a2f480202ac",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "openForm",
      "label": "65950eff-57d0-4b4b-b3e8-3af9a977c82a",
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
      "label": "0866bf03-06e9-4088-9fc8-9fb5e8f7440e",
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
      "label": "27d0ba58-e498-429c-81cc-4736477c12e4",
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
      "label": "270f3ea9-a8d4-4436-ac06-511567ee3efd",
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
      "label": "4516ca88-8a17-4a05-92f2-7331ddb48ec8",
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
                          "source": { "nanoflow": () => DS_Feedback_Populate, "allowedRoles": [] },
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
                                            "onChange": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => OCH_Feedback_SaveToLocalStorage, "allowedRoles": [] }, "disabledDuringExecution": false },
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
                                            "onChange": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => OCH_Feedback_SaveToLocalStorage, "allowedRoles": [] }, "disabledDuringExecution": false },
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
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [] }, "args": {} }
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
                                            "action": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => ACT_Feedback_TriggerScreenshotMode, "allowedRoles": [] }, "disabledDuringExecution": true },
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
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [] }, "args": {} }
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
                                            "action": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => ACT_Feedback_UploadImage, "allowedRoles": [] }, "disabledDuringExecution": true },
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
                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [] }, "args": {} }
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
                                                        "action": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => ACT_Feedback_ClearImage, "allowedRoles": [] }, "disabledDuringExecution": true },
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
                                                minHeightUnit: "none",
                                                minHeight: 0,
                                                maxHeightUnit: "none",
                                                maxHeight: 0,
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
                                            "onChange": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => OCH_Feedback_SaveToLocalStorage, "allowedRoles": [] }, "disabledDuringExecution": false },
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
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [] }, "args": {} }
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
                                            "action": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => ACT_Feedback_ClearForm, "allowedRoles": [] }, "disabledDuringExecution": true },
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
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [] }, "args": {} }
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
                                            "action": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => ACT_SubmitFeedback, "allowedRoles": [] }, "disabledDuringExecution": true },
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
const autofocus = "desktopOnly";
const cancelChangesOperationId = "2/keSCp8hl25P9QeN3ue+Q";
const style = {};
const parameters = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { autofocus, cancelChangesOperationId, classes, content, parameters, style, title };
