import { reactExports, asPluginWidgets, selectTranslation } from '../index-B8bUhI8E.js';
import { Div, PageFragment, ExpressionProperty } from '../ScrollContainer-CdywZc9i.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-D_YBiLZ6.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-Dt9vgjwI.js';
import { FormGroup, DerivedUniqueIdProperty, ValidationProperty } from '../FormGroup-LPgVky1u.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-KPRTruOk.js';
import { DataView } from '../DataView-DWF0wJdH.js';
import { TextBox } from '../TextBox-4JyWwafe.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-DxMFZUPu.js';
import { AttributeProperty } from '../BI1aYen2-B3U-e8vs.js';
import '../1OX6EehJ-ChqR_l5F.js';
import '../BVrU3Npi-C4DtFzfp.js';

const React = { createElement: reactExports.createElement };
const { $Div, $DataView, $FormGroup, $TextBox, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p13.Administration.ChangeMyPasswordForm.layoutGrid1",
      $widgetId: "p13.Administration.ChangeMyPasswordForm.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p13.Administration.ChangeMyPasswordForm.layoutGrid1$row0",
            $widgetId: "p13.Administration.ChangeMyPasswordForm.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p13.Administration.ChangeMyPasswordForm.layoutGrid1$row0$column0",
                  $widgetId: "p13.Administration.ChangeMyPasswordForm.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p13.Administration.ChangeMyPasswordForm.dataView2",
                        $widgetId: "p13.Administration.ChangeMyPasswordForm.dataView2",
                        class: "mx-name-dataView2 form-horizontal",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p13.12",
                          "scope": "$AccountPasswordData",
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
                              key: "p13.Administration.ChangeMyPasswordForm.textBox2$formGroup",
                              $widgetId: "p13.Administration.ChangeMyPasswordForm.textBox2$formGroup",
                              class: "mx-name-textBox2 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p13.Administration.ChangeMyPasswordForm.textBox2",
                                    $widgetId: "p13.Administration.ChangeMyPasswordForm.textBox2",
                                    inputValue: AttributeProperty({
                                      "scope": "p13.Administration.ChangeMyPasswordForm.dataView2",
                                      "path": "",
                                      "entity": "Administration.AccountPasswordData",
                                      "attribute": "OldPassword",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": { "message": selectTranslation(["The password cannot be empty."]), "expression": { "expr": { "type": "function", "name": ">", "parameters": [{ "type": "function", "name": "length", "parameters": [{ "type": "function", "name": "toString", "parameters": [{ "type": "variable", "variable": "value" }] }] }, { "type": "literalNumeric", "value": "0" }] }, "args": {} } },
                                      "formatting": {}
                                    }),
                                    isPassword: true,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    mask: "",
                                    readOnlyStyle: "text",
                                    maxLength: 200,
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    onEnterKeyPress: void 0,
                                    ariaLabel: void 0,
                                    autocomplete: "on",
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    ariaRequired: true,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p13.Administration.ChangeMyPasswordForm.textBox2"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Old password" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p13.Administration.ChangeMyPasswordForm.textBox2"
                              }),
                              width: 3,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p13.Administration.ChangeMyPasswordForm.textBox2"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p13.Administration.ChangeMyPasswordForm.textBox3$formGroup",
                              $widgetId: "p13.Administration.ChangeMyPasswordForm.textBox3$formGroup",
                              class: "mx-name-textBox3 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p13.Administration.ChangeMyPasswordForm.textBox3",
                                    $widgetId: "p13.Administration.ChangeMyPasswordForm.textBox3",
                                    inputValue: AttributeProperty({
                                      "scope": "p13.Administration.ChangeMyPasswordForm.dataView2",
                                      "path": "",
                                      "entity": "Administration.AccountPasswordData",
                                      "attribute": "NewPassword",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": { "message": selectTranslation(["The password cannot be empty."]), "expression": { "expr": { "type": "function", "name": ">", "parameters": [{ "type": "function", "name": "length", "parameters": [{ "type": "function", "name": "toString", "parameters": [{ "type": "variable", "variable": "value" }] }] }, { "type": "literalNumeric", "value": "0" }] }, "args": {} } },
                                      "formatting": {}
                                    }),
                                    isPassword: true,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    mask: "",
                                    readOnlyStyle: "text",
                                    maxLength: 200,
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    onEnterKeyPress: void 0,
                                    ariaLabel: void 0,
                                    autocomplete: "on",
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    ariaRequired: true,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p13.Administration.ChangeMyPasswordForm.textBox3"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "New password" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p13.Administration.ChangeMyPasswordForm.textBox3"
                              }),
                              width: 3,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p13.Administration.ChangeMyPasswordForm.textBox3"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p13.Administration.ChangeMyPasswordForm.textBox1$formGroup",
                              $widgetId: "p13.Administration.ChangeMyPasswordForm.textBox1$formGroup",
                              class: "mx-name-textBox1 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p13.Administration.ChangeMyPasswordForm.textBox1",
                                    $widgetId: "p13.Administration.ChangeMyPasswordForm.textBox1",
                                    inputValue: AttributeProperty({
                                      "scope": "p13.Administration.ChangeMyPasswordForm.dataView2",
                                      "path": "",
                                      "entity": "Administration.AccountPasswordData",
                                      "attribute": "ConfirmPassword",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": { "message": selectTranslation(["The password cannot be empty."]), "expression": { "expr": { "type": "function", "name": ">", "parameters": [{ "type": "function", "name": "length", "parameters": [{ "type": "function", "name": "toString", "parameters": [{ "type": "variable", "variable": "value" }] }] }, { "type": "literalNumeric", "value": "0" }] }, "args": {} } },
                                      "formatting": {}
                                    }),
                                    isPassword: true,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    mask: "",
                                    readOnlyStyle: "text",
                                    maxLength: 200,
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    onEnterKeyPress: void 0,
                                    ariaLabel: void 0,
                                    autocomplete: "on",
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    ariaRequired: true,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p13.Administration.ChangeMyPasswordForm.textBox1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Confirm password" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p13.Administration.ChangeMyPasswordForm.textBox1"
                              }),
                              width: 3,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p13.Administration.ChangeMyPasswordForm.textBox1"
                              })
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p13.Administration.ChangeMyPasswordForm.microflowButton1$visibility",
                              $widgetId: "p13.Administration.ChangeMyPasswordForm.microflowButton1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "Teacher" }, { "type": "literal", "value": "Trainee" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p13.Administration.ChangeMyPasswordForm.microflowButton1",
                                    $widgetId: "p13.Administration.ChangeMyPasswordForm.microflowButton1",
                                    buttonId: "p13.Administration.ChangeMyPasswordForm.microflowButton1",
                                    class: "mx-name-microflowButton1",
                                    style: void 0,
                                    tabIndex: void 0,
                                    renderType: "button",
                                    role: void 0,
                                    buttonClass: "btn-success",
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Change" }, "args": {} }
                                      })
                                    ]),
                                    tooltip: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    icon: void 0,
                                    action: ActionProperty({
                                      "action": { "type": "callMicroflow", "argMap": { "AccountPasswordData": { "widget": "$AccountPasswordData", "source": "object" } }, "config": { "operationId": "bviVLbAJvViXBVOk589fXw", "validate": "view", "allowedRoles": ["Administrator", "Teacher", "Trainee"] }, "disabledDuringExecution": false },
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
                              key: "p13.Administration.ChangeMyPasswordForm.cancelButton1",
                              $widgetId: "p13.Administration.ChangeMyPasswordForm.cancelButton1",
                              buttonId: "p13.Administration.ChangeMyPasswordForm.cancelButton1",
                              class: "mx-name-cancelButton1",
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
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "P9VHtUW7MF+7esJdt8/4Mg", "closePage": true }, "disabledDuringExecution": true },
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
  "Change Password"
]);
const classes = "";
const cancelChangesOperationId = "JlHCMtBzslSRXDHTLkquqA";
const closeButton = "p13.Administration.ChangeMyPasswordForm.cancelButton1";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
