import { reactExports, asPluginWidgets, selectTranslation } from '../index-D54rfXjv.js';
import { Div, PageFragment, ExpressionProperty } from '../ScrollContainer-BjzP0wD4.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-Cg_9OV9E.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-CVc3g1qa.js';
import { FormGroup, DerivedUniqueIdProperty, ValidationProperty } from '../FormGroup-lL1MtQZD.js';
import { DataView } from '../DataView-CxBpf6ZR.js';
import { TextBox } from '../TextBox-Co9WhSGk.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-w_4e9dfm.js';
import { AttributeProperty } from '../3ZSM-Jib-DprIUIuq.js';
import '../BkqAssms-AUPua_wR.js';
import '../DmsI6saM-CRBfA3bF.js';

const React = { createElement: reactExports.createElement };
const { $Div, $DataView, $FormGroup, $TextBox, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.MyFirstModule.Teacher_NewEdit.layoutGrid1",
      $widgetId: "p.MyFirstModule.Teacher_NewEdit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.MyFirstModule.Teacher_NewEdit.layoutGrid1$row0",
            $widgetId: "p.MyFirstModule.Teacher_NewEdit.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstModule.Teacher_NewEdit.layoutGrid1$row0$column0",
                  $widgetId: "p.MyFirstModule.Teacher_NewEdit.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.MyFirstModule.Teacher_NewEdit.dataView6",
                        $widgetId: "p.MyFirstModule.Teacher_NewEdit.dataView6",
                        class: "mx-name-dataView6 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.12",
                          "scope": "$Teacher",
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
                              key: "p.MyFirstModule.Teacher_NewEdit.textBox1$formGroup",
                              $widgetId: "p.MyFirstModule.Teacher_NewEdit.textBox1$formGroup",
                              class: "mx-name-textBox1 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.MyFirstModule.Teacher_NewEdit.textBox1",
                                    $widgetId: "p.MyFirstModule.Teacher_NewEdit.textBox1",
                                    inputValue: AttributeProperty({
                                      "scope": "p.MyFirstModule.Teacher_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "MyFirstModule.Teacher",
                                      "attribute": "Name",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null,
                                      "formatting": {}
                                    }),
                                    isPassword: false,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
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
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    ariaRequired: void 0,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.MyFirstModule.Teacher_NewEdit.textBox1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Name" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.MyFirstModule.Teacher_NewEdit.textBox1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.MyFirstModule.Teacher_NewEdit.textBox1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.MyFirstModule.Teacher_NewEdit.textBox2$formGroup",
                              $widgetId: "p.MyFirstModule.Teacher_NewEdit.textBox2$formGroup",
                              class: "mx-name-textBox2 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.MyFirstModule.Teacher_NewEdit.textBox2",
                                    $widgetId: "p.MyFirstModule.Teacher_NewEdit.textBox2",
                                    inputValue: AttributeProperty({
                                      "scope": "p.MyFirstModule.Teacher_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "MyFirstModule.Teacher",
                                      "attribute": "EmailAddress",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null,
                                      "formatting": {}
                                    }),
                                    isPassword: false,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
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
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    ariaRequired: void 0,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.MyFirstModule.Teacher_NewEdit.textBox2"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Email address" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.MyFirstModule.Teacher_NewEdit.textBox2"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.MyFirstModule.Teacher_NewEdit.textBox2"
                              })
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.MyFirstModule.Teacher_NewEdit.actionButton1",
                              $widgetId: "p.MyFirstModule.Teacher_NewEdit.actionButton1",
                              buttonId: "p.MyFirstModule.Teacher_NewEdit.actionButton1",
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
                                "action": { "type": "saveChanges", "argMap": { "$object": { "widget": "p.MyFirstModule.Teacher_NewEdit.dataView6", "source": "object" } }, "config": { "operationId": "CnS32sHXg1WeM86crQe8dw", "closePage": true }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.MyFirstModule.Teacher_NewEdit.actionButton2",
                              $widgetId: "p.MyFirstModule.Teacher_NewEdit.actionButton2",
                              buttonId: "p.MyFirstModule.Teacher_NewEdit.actionButton2",
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
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "w/LV5XVaBFCqkcWr/LgTNA", "closePage": true }, "disabledDuringExecution": true },
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
  "Edit Teacher"
]);
const classes = "";
const autofocus = "off";
const cancelChangesOperationId = "5zhqh80NqliAu8Mw9Pr7RQ";
const style = {};
const parameters = { "$Teacher": "object" };
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { autofocus, cancelChangesOperationId, classes, content, parameters, style, title };
