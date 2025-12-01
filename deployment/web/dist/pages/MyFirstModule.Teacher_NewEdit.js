import { reactExports, asPluginWidgets, selectTranslation } from '../index-B8bUhI8E.js';
import { Div, PageFragment, ExpressionProperty } from '../ScrollContainer-CdywZc9i.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-D_YBiLZ6.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-Dt9vgjwI.js';
import { FormGroup, DerivedUniqueIdProperty, ValidationProperty } from '../FormGroup-LPgVky1u.js';
import { DataView } from '../DataView-DWF0wJdH.js';
import { TextBox } from '../TextBox-4JyWwafe.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-DxMFZUPu.js';
import { AttributeProperty } from '../BI1aYen2-B3U-e8vs.js';
import '../1OX6EehJ-ChqR_l5F.js';
import '../BVrU3Npi-C4DtFzfp.js';

const React = { createElement: reactExports.createElement };
const { $Div, $DataView, $FormGroup, $TextBox, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p36.MyFirstModule.Teacher_NewEdit.layoutGrid1",
      $widgetId: "p36.MyFirstModule.Teacher_NewEdit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p36.MyFirstModule.Teacher_NewEdit.layoutGrid1$row0",
            $widgetId: "p36.MyFirstModule.Teacher_NewEdit.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p36.MyFirstModule.Teacher_NewEdit.layoutGrid1$row0$column0",
                  $widgetId: "p36.MyFirstModule.Teacher_NewEdit.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p36.MyFirstModule.Teacher_NewEdit.dataView6",
                        $widgetId: "p36.MyFirstModule.Teacher_NewEdit.dataView6",
                        class: "mx-name-dataView6 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p36.12",
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
                              key: "p36.MyFirstModule.Teacher_NewEdit.textBox1$formGroup",
                              $widgetId: "p36.MyFirstModule.Teacher_NewEdit.textBox1$formGroup",
                              class: "mx-name-textBox1 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p36.MyFirstModule.Teacher_NewEdit.textBox1",
                                    $widgetId: "p36.MyFirstModule.Teacher_NewEdit.textBox1",
                                    inputValue: AttributeProperty({
                                      "scope": "p36.MyFirstModule.Teacher_NewEdit.dataView6",
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
                                      "widgetId": "p36.MyFirstModule.Teacher_NewEdit.textBox1"
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
                                "widgetId": "p36.MyFirstModule.Teacher_NewEdit.textBox1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p36.MyFirstModule.Teacher_NewEdit.textBox1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p36.MyFirstModule.Teacher_NewEdit.textBox2$formGroup",
                              $widgetId: "p36.MyFirstModule.Teacher_NewEdit.textBox2$formGroup",
                              class: "mx-name-textBox2 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p36.MyFirstModule.Teacher_NewEdit.textBox2",
                                    $widgetId: "p36.MyFirstModule.Teacher_NewEdit.textBox2",
                                    inputValue: AttributeProperty({
                                      "scope": "p36.MyFirstModule.Teacher_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "MyFirstModule.Teacher",
                                      "attribute": "Address",
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
                                      "widgetId": "p36.MyFirstModule.Teacher_NewEdit.textBox2"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Address" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p36.MyFirstModule.Teacher_NewEdit.textBox2"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p36.MyFirstModule.Teacher_NewEdit.textBox2"
                              })
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p36.MyFirstModule.Teacher_NewEdit.actionButton1",
                              $widgetId: "p36.MyFirstModule.Teacher_NewEdit.actionButton1",
                              buttonId: "p36.MyFirstModule.Teacher_NewEdit.actionButton1",
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
                                "action": { "type": "saveChanges", "argMap": { "$object": { "widget": "p36.MyFirstModule.Teacher_NewEdit.dataView6", "source": "object" } }, "config": { "operationId": "NZ+JEeOYu1u1sCGEQtsnig", "closePage": true }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p36.MyFirstModule.Teacher_NewEdit.actionButton2",
                              $widgetId: "p36.MyFirstModule.Teacher_NewEdit.actionButton2",
                              buttonId: "p36.MyFirstModule.Teacher_NewEdit.actionButton2",
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
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "E9208equzVWaHMEb8CAxng", "closePage": true }, "disabledDuringExecution": true },
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
const cancelChangesOperationId = "E0GQb4Ci8lWypA+qACH7kQ";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
