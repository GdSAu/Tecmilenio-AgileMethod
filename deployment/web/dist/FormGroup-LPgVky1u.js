import { asProperty, fromComputation$, readUntracked, newId, dynAvailable, jsxRuntimeExports, classNames } from './index-B8bUhI8E.js';
import './ActionButton-D_YBiLZ6.js';
import { runActionInComputed } from './1OX6EehJ-ChqR_l5F.js';
import './BI1aYen2-B3U-e8vs.js';

const DerivedUniqueIdProperty = asProperty((config, store) => {
  const [uniqueId$, setUniqueId] = store.useSlot(config.widgetId, "uniqueId");
  return fromComputation$(`Derived unique id for ${config.widgetId}`, () => {
    const existingId = readUntracked(uniqueId$);
    if (existingId)
      return existingId;
    const value = newId(config.widgetId);
    return runActionInComputed(() => setUniqueId(value)), value;
  });
});

const ValidationProperty = asProperty(({ inputWidgetId }, store, widgetId) => {
  const [isInvalid$] = store.useSlot(inputWidgetId, "isInvalid");
  return fromComputation$(`Validity of ${inputWidgetId} (used by ${widgetId})`, () => dynAvailable(Boolean(isInvalid$.dependOn())));
});

const Alert = (props) => props.validation ? jsxRuntimeExports.jsx("div", { id: props.id, className: "alert alert-danger mx-validation-message", role: "alert", children: props.validation }) : null;

const getValidationAriaProps = (validation, id) => validation ? { "aria-invalid": true, "aria-describedby": `${id}-error` } : void 0, getAriaLabelProps = (value) => value ? { "aria-label": value } : {};

const hasCaption = (props) => void 0 !== props.caption, FormGroup = (props) => jsxRuntimeExports.jsxs("div", { className: classNames(props.class, "form-group", { "has-error": props.hasError.value, "no-columns": "vertical" === props.orientation }), style: props.style, children: [hasCaption(props) && jsxRuntimeExports.jsx("label", { className: classNames("control-label", { [`col-sm-${props.width}`]: "horizontal" === props.orientation }), htmlFor: props.labelFor, id: props.labelFor && props.labelFor + "-label", children: props.caption.value }), "horizontal" === props.orientation ? jsxRuntimeExports.jsx("div", { className: classNames("col-sm-" + (12 - props.width), { [`col-sm-offset-${props.width}`]: !hasCaption(props) }), children: props.control }) : props.control] });

export { Alert, DerivedUniqueIdProperty, FormGroup, ValidationProperty, getAriaLabelProps, getValidationAriaProps };
