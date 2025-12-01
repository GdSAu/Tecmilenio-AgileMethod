import { reactExports, jsxRuntimeExports, asPluginWidgets, selectTranslation } from '../index-B8bUhI8E.js';
import { Div, PageFragment, ExpressionProperty } from '../ScrollContainer-CdywZc9i.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-D_YBiLZ6.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-Dt9vgjwI.js';
import { ComboboxWidgetModule, AssociationProperty } from '../Combobox-C3wUTaxU.js';
import { Alert, getAriaLabelProps, getValidationAriaProps, FormGroup, DerivedUniqueIdProperty, ValidationProperty } from '../FormGroup-LPgVky1u.js';
import { DatabaseObjectListProperty } from '../CESNSUMX-CEo4dwQO.js';
import { ListAttributeProperty } from '../ListAttributeProperty-gX5GX4rF.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-KPRTruOk.js';
import { DataView } from '../DataView-DWF0wJdH.js';
import { FocusContainer, DatePicker } from '../DatePicker-BtuqMzAE.js';
import { TextBox } from '../TextBox-4JyWwafe.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-DxMFZUPu.js';
import { AttributeProperty } from '../BI1aYen2-B3U-e8vs.js';
import '../1OX6EehJ-ChqR_l5F.js';
import '../BVrU3Npi-C4DtFzfp.js';
import '../DsiqzbwR-BPeOjCv1.js';

class RadioButtonGroup extends reactExports.Component {
  constructor() {
    super(...arguments), this.onChangeHandler = this.onChange.bind(this), this.onFocusHandler = this.onFocus.bind(this), this.onBlurHandler = this.onBlur.bind(this);
  }
  getCaption(value) {
    return this.props.value.formatter.format(value);
  }
  onChange(e) {
    const currentValue = this.props.value.universe.find((v) => v.toString() === e.target.value);
    this.props.value.setValue(currentValue);
  }
  onFocus() {
    this.dispatchAction("onEnter");
  }
  onBlur() {
    this.dispatchAction("onLeave");
  }
  render() {
    return jsxRuntimeExports.jsxs(reactExports.Fragment, { children: ["control" !== this.props.readOnlyStyle && this.props.value.readOnly ? this.renderAsText() : this.renderAsInput(), jsxRuntimeExports.jsx(Alert, { id: `${this.props.id}-error`, validation: this.props.value.validation })] });
  }
  renderAsInput() {
    return jsxRuntimeExports.jsx(FocusContainer, { onEnter: this.onFocusHandler, onLeave: this.onBlurHandler, children: jsxRuntimeExports.jsx("div", { id: this.props.id, className: "mx-radiogroup", ...this.props.ariaLabel ? {} : { "aria-labelledby": this.props.id + "-label" }, role: "radiogroup", ...getAriaLabelProps(this.props.ariaLabel?.value), ...getValidationAriaProps(this.props.value.validation, this.props.id), "aria-required": this.props.ariaRequired, children: this.renderRadioButtons() }) });
  }
  renderRadioButtons() {
    const universe = this.props.value.universe;
    if (!universe)
      return [];
    const currentValue = this.props.value.value, forcedOption = void 0 === currentValue || universe.includes(currentValue) ? [] : [currentValue];
    return [...universe, ...forcedOption].map((value, index) => this.renderRadioButton(value, index));
  }
  renderRadioButton(radioValue, index) {
    const { id, tabIndex: propTabIndex, value } = this.props, { value: currentValue, readOnly } = value, inputId = `${id}_${index}`, tabIndex = void 0 === currentValue && 0 === index || currentValue === radioValue ? propTabIndex : -1;
    return jsxRuntimeExports.jsxs("div", { className: "radio", children: [jsxRuntimeExports.jsx("input", { type: "radio", id: inputId, name: id, value: radioValue.toString(), checked: currentValue === radioValue, onChange: this.onChangeHandler, disabled: readOnly, tabIndex }), jsxRuntimeExports.jsx("label", { htmlFor: inputId, children: this.getCaption(radioValue) })] }, radioValue.toString());
  }
  renderAsText() {
    return jsxRuntimeExports.jsx("div", { className: "form-control-static", children: this.props.value.displayValue || "\xA0" });
  }
  dispatchAction(property) {
    const prop = this.props[property];
    "available" === this.props.value.status && prop && prop.execute();
  }
}

const React = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const { $Div, $DataView, $FormGroup, $TextBox, $Combobox, $DatePicker, $RadioButtonGroup, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, Combobox, DatePicker, RadioButtonGroup, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p20.MyFirstModule.Registration_NewEdit.layoutGrid1",
      $widgetId: "p20.MyFirstModule.Registration_NewEdit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p20.MyFirstModule.Registration_NewEdit.layoutGrid1$row0",
            $widgetId: "p20.MyFirstModule.Registration_NewEdit.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p20.MyFirstModule.Registration_NewEdit.layoutGrid1$row0$column0",
                  $widgetId: "p20.MyFirstModule.Registration_NewEdit.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p20.MyFirstModule.Registration_NewEdit.dataView6",
                        $widgetId: "p20.MyFirstModule.Registration_NewEdit.dataView6",
                        class: "mx-name-dataView6 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p20.13",
                          "scope": "$Registration",
                          "editable": true
                        }),
                        emptyMessage: TextProperty({
                          "value": selectTranslation([
                            ""
                          ])
                        }),
                        body: [
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p20.MyFirstModule.Registration_NewEdit.textBox1$formGroup",
                              $widgetId: "p20.MyFirstModule.Registration_NewEdit.textBox1$formGroup",
                              class: "mx-name-textBox1 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p20.MyFirstModule.Registration_NewEdit.textBox1",
                                    $widgetId: "p20.MyFirstModule.Registration_NewEdit.textBox1",
                                    inputValue: AttributeProperty({
                                      "scope": "p20.MyFirstModule.Registration_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "MyFirstModule.Registration",
                                      "attribute": "Number",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "isEditable": { "expr": { "type": "literal", "value": false }, "args": {} },
                                      "validation": null,
                                      "formatting": {
                                        "numberFormat": {
                                          "groupDigits": false
                                        }
                                      }
                                    }),
                                    isPassword: false,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    mask: "",
                                    readOnlyStyle: "control",
                                    maxLength: void 0,
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    onEnterKeyPress: void 0,
                                    ariaLabel: void 0,
                                    autocomplete: "on",
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    ariaRequired: void 0,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p20.MyFirstModule.Registration_NewEdit.textBox1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Number" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p20.MyFirstModule.Registration_NewEdit.textBox1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p20.MyFirstModule.Registration_NewEdit.textBox1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p20.MyFirstModule.Registration_NewEdit.comboBox1$formGroup",
                              $widgetId: "p20.MyFirstModule.Registration_NewEdit.comboBox1$formGroup",
                              class: "mx-name-comboBox1",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $Combobox,
                                  {
                                    key: "p20.MyFirstModule.Registration_NewEdit.comboBox1",
                                    $widgetId: "p20.MyFirstModule.Registration_NewEdit.comboBox1",
                                    source: "context",
                                    optionsSourceType: "association",
                                    optionsSourceDatabaseDataSource: void 0,
                                    optionsSourceAssociationCaptionType: "attribute",
                                    optionsSourceDatabaseCaptionType: "attribute",
                                    optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                                      "path": "",
                                      "entity": "MyFirstModule.Trainee",
                                      "attribute": "Name",
                                      "attributeType": "String",
                                      "sortable": true,
                                      "filterable": true,
                                      "dataSourceId": "p20.0",
                                      "isList": false
                                    }),
                                    optionsSourceAssociationCaptionExpression: void 0,
                                    attributeAssociation: AssociationProperty({
                                      "type": "Reference",
                                      "entity": "MyFirstModule.Registration",
                                      "path": "",
                                      "attribute": "MyFirstModule.Registration_Trainee",
                                      "endpointEntity": "MyFirstModule.Trainee",
                                      "selectableObjectsId": "p20.0",
                                      "scope": "p20.MyFirstModule.Registration_NewEdit.dataView6",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                    }),
                                    optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                      "dataSourceId": "p20.0",
                                      "entity": "MyFirstModule.Trainee",
                                      "scope": "p20.MyFirstModule.Registration_NewEdit.dataView6",
                                      "operationId": "+RvyqYEgoVuLSt1jWQHqoA",
                                      "sort": []
                                    }),
                                    optionsSourceStaticDataSource: [],
                                    emptyOptionText: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    noOptionsText: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    clearable: true,
                                    optionsSourceAssociationCustomContentType: "no",
                                    optionsSourceAssociationCustomContent: void 0,
                                    optionsSourceDatabaseCustomContentType: "no",
                                    staticDataSourceCustomContentType: "no",
                                    showFooter: false,
                                    menuFooterContent: void 0,
                                    selectionMethod: "checkbox",
                                    selectedItemsStyle: "text",
                                    selectAllButton: false,
                                    selectAllButtonCaption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                      })
                                    ]),
                                    customEditability: "default",
                                    customEditabilityExpression: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                    }),
                                    readOnlyStyle: "bordered",
                                    onChangeEvent: void 0,
                                    onEnterEvent: void 0,
                                    onLeaveEvent: void 0,
                                    onChangeFilterInputEvent: void 0,
                                    filterInputDebounceInterval: 200,
                                    ariaRequired: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                    }),
                                    ariaLabel: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Combo box" }, "args": {} }
                                      })
                                    ]),
                                    clearButtonAriaLabel: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                      })
                                    ]),
                                    removeValueAriaLabel: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                      })
                                    ]),
                                    a11ySelectedValue: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                      })
                                    ]),
                                    a11yOptionsAvailable: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                      })
                                    ]),
                                    a11yInstructions: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                      })
                                    ]),
                                    lazyLoading: true,
                                    loadingType: "spinner",
                                    selectedItemsSorting: "none",
                                    filterType: "contains",
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p20.MyFirstModule.Registration_NewEdit.comboBox1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Trainee" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p20.MyFirstModule.Registration_NewEdit.comboBox1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p20.MyFirstModule.Registration_NewEdit.comboBox1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p20.MyFirstModule.Registration_NewEdit.datePicker1$formGroup",
                              $widgetId: "p20.MyFirstModule.Registration_NewEdit.datePicker1$formGroup",
                              class: "mx-name-datePicker1 mx-datepicker",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $DatePicker,
                                  {
                                    key: "p20.MyFirstModule.Registration_NewEdit.datePicker1",
                                    $widgetId: "p20.MyFirstModule.Registration_NewEdit.datePicker1",
                                    mode: "date",
                                    showCalendarButton: true,
                                    inputValue: AttributeProperty({
                                      "scope": "p20.MyFirstModule.Registration_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "MyFirstModule.Registration",
                                      "attribute": "Date",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null,
                                      "formatting": {
                                        "dateFormat": selectTranslation([
                                          {
                                            "type": "date"
                                          }
                                        ])
                                      }
                                    }),
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    buttonLabel: TextProperty({
                                      "value": selectTranslation([
                                        "Show date picker"
                                      ])
                                    }),
                                    readOnlyStyle: "control",
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    ariaLabel: void 0,
                                    ariaRequired: void 0,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p20.MyFirstModule.Registration_NewEdit.datePicker1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Date" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p20.MyFirstModule.Registration_NewEdit.datePicker1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p20.MyFirstModule.Registration_NewEdit.datePicker1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p20.MyFirstModule.Registration_NewEdit.radioButtons1$formGroup",
                              $widgetId: "p20.MyFirstModule.Registration_NewEdit.radioButtons1$formGroup",
                              class: "mx-name-radioButtons1 mx-radiobuttons inline",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $RadioButtonGroup,
                                  {
                                    key: "p20.MyFirstModule.Registration_NewEdit.radioButtons1",
                                    $widgetId: "p20.MyFirstModule.Registration_NewEdit.radioButtons1",
                                    value: AttributeProperty({
                                      "scope": "p20.MyFirstModule.Registration_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "MyFirstModule.Registration",
                                      "attribute": "Attended",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null
                                    }),
                                    readOnlyStyle: "control",
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    ariaLabel: void 0,
                                    ariaRequired: void 0,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p20.MyFirstModule.Registration_NewEdit.radioButtons1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Attended" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p20.MyFirstModule.Registration_NewEdit.radioButtons1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p20.MyFirstModule.Registration_NewEdit.radioButtons1"
                              })
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p20.MyFirstModule.Registration_NewEdit.actionButton1$visibility",
                              $widgetId: "p20.MyFirstModule.Registration_NewEdit.actionButton1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p20.MyFirstModule.Registration_NewEdit.actionButton1",
                                    $widgetId: "p20.MyFirstModule.Registration_NewEdit.actionButton1",
                                    buttonId: "p20.MyFirstModule.Registration_NewEdit.actionButton1",
                                    class: "mx-name-actionButton1",
                                    style: void 0,
                                    tabIndex: void 0,
                                    renderType: "button",
                                    role: void 0,
                                    buttonClass: "btn-primary",
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Save" }, "args": {} }
                                      })
                                    ]),
                                    tooltip: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    icon: void 0,
                                    action: ActionProperty({
                                      "action": { "type": "callMicroflow", "argMap": { "Registration": { "widget": "$Registration", "source": "object" } }, "config": { "operationId": "AuZUNvKrfVSpgfHYO0hfnQ", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                      "abortOnServerValidation": true
                                    })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p20.MyFirstModule.Registration_NewEdit.actionButton2",
                              $widgetId: "p20.MyFirstModule.Registration_NewEdit.actionButton2",
                              buttonId: "p20.MyFirstModule.Registration_NewEdit.actionButton2",
                              class: "mx-name-actionButton2",
                              style: void 0,
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
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "TDjk5F/+vFidcTVDACwgTQ", "closePage": true }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
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
      ]
    }
  )
]);
const title = selectTranslation([
  "Edit Registration"
]);
const classes = "";
const cancelChangesOperationId = "lwv2r7tibFuJpp66Zimy2g";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
