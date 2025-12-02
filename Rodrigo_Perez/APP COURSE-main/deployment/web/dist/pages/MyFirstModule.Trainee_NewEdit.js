import { reactExports, asPluginWidgets, selectTranslation } from '../index-CAr0kpKK.js';
import { Div, PageFragment, ExpressionProperty } from '../ScrollContainer-ClJHkivb.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-BhLF8XeL.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-1LJQJmcv.js';
import { FormGroup, DerivedUniqueIdProperty, ValidationProperty } from '../FormGroup-NzGxSZNx.js';
import { DataView } from '../DataView-BOhFdS09.js';
import { TextBox } from '../TextBox-Cy1339A_.js';
import { content as content$1 } from '../Atlas_Core.Atlas_SideBar-D4H2emWH.js';
import { AttributeProperty } from '../3ZSM-Jib-DaeMRSYd.js';
import '../BkqAssms-UB_bkK2K.js';
import '../DmsI6saM-DYa5cVH3.js';
import '../XQdQuDNG-DSqxqUMm.js';
import '../ListExpressionProperty-BAWskYNZ.js';
import '../WebIconProperty-B_4QSw2H.js';
import '../WebStaticImageProperty-Cmx5tQtA.js';
import '../Image-ttRkd0pN.js';
import '../FeedbackModule.ACT_Open_Feedback_Modal-Cg7QdmhI.js';

const React = { createElement: reactExports.createElement };
const { $Div, $DataView, $FormGroup, $TextBox, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.MyFirstModule.Trainee_NewEdit.layoutGrid1",
      $widgetId: "p.MyFirstModule.Trainee_NewEdit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.MyFirstModule.Trainee_NewEdit.layoutGrid1$row0",
            $widgetId: "p.MyFirstModule.Trainee_NewEdit.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstModule.Trainee_NewEdit.layoutGrid1$row0$column0",
                  $widgetId: "p.MyFirstModule.Trainee_NewEdit.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.MyFirstModule.Trainee_NewEdit.dataView6",
                        $widgetId: "p.MyFirstModule.Trainee_NewEdit.dataView6",
                        class: "mx-name-dataView6 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.12",
                          "scope": "$Trainee",
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
                              key: "p.MyFirstModule.Trainee_NewEdit.textBox1$formGroup",
                              $widgetId: "p.MyFirstModule.Trainee_NewEdit.textBox1$formGroup",
                              class: "mx-name-textBox1 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.MyFirstModule.Trainee_NewEdit.textBox1",
                                    $widgetId: "p.MyFirstModule.Trainee_NewEdit.textBox1",
                                    inputValue: AttributeProperty({
                                      "scope": "p.MyFirstModule.Trainee_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "MyFirstModule.Trainee",
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
                                      "widgetId": "p.MyFirstModule.Trainee_NewEdit.textBox1"
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
                                "widgetId": "p.MyFirstModule.Trainee_NewEdit.textBox1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.MyFirstModule.Trainee_NewEdit.textBox1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.MyFirstModule.Trainee_NewEdit.textBox2$formGroup",
                              $widgetId: "p.MyFirstModule.Trainee_NewEdit.textBox2$formGroup",
                              class: "mx-name-textBox2 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.MyFirstModule.Trainee_NewEdit.textBox2",
                                    $widgetId: "p.MyFirstModule.Trainee_NewEdit.textBox2",
                                    inputValue: AttributeProperty({
                                      "scope": "p.MyFirstModule.Trainee_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "MyFirstModule.Trainee",
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
                                      "widgetId": "p.MyFirstModule.Trainee_NewEdit.textBox2"
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
                                "widgetId": "p.MyFirstModule.Trainee_NewEdit.textBox2"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.MyFirstModule.Trainee_NewEdit.textBox2"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.MyFirstModule.Trainee_NewEdit.textBox3$formGroup",
                              $widgetId: "p.MyFirstModule.Trainee_NewEdit.textBox3$formGroup",
                              class: "mx-name-textBox3 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.MyFirstModule.Trainee_NewEdit.textBox3",
                                    $widgetId: "p.MyFirstModule.Trainee_NewEdit.textBox3",
                                    inputValue: AttributeProperty({
                                      "scope": "p.MyFirstModule.Trainee_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "MyFirstModule.Trainee",
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
                                      "widgetId": "p.MyFirstModule.Trainee_NewEdit.textBox3"
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
                                "widgetId": "p.MyFirstModule.Trainee_NewEdit.textBox3"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.MyFirstModule.Trainee_NewEdit.textBox3"
                              })
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.MyFirstModule.Trainee_NewEdit.actionButton1",
                              $widgetId: "p.MyFirstModule.Trainee_NewEdit.actionButton1",
                              buttonId: "p.MyFirstModule.Trainee_NewEdit.actionButton1",
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
                                "action": { "type": "saveChanges", "argMap": { "$object": { "widget": "p.MyFirstModule.Trainee_NewEdit.dataView6", "source": "object" } }, "config": { "operationId": "zkXLpoa3NF2wVfFbbI0vLQ", "closePage": true }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.MyFirstModule.Trainee_NewEdit.actionButton2",
                              $widgetId: "p.MyFirstModule.Trainee_NewEdit.actionButton2",
                              buttonId: "p.MyFirstModule.Trainee_NewEdit.actionButton2",
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
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "+Y2xhZw581qUQ4J5AdSaHw", "closePage": true }, "disabledDuringExecution": true },
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
  "Edit Trainee"
]);
const classes = "layout-atlas layout-atlas-responsive-sidebar";
const autofocus = "off";
const style = {};
const parameters = { "$Trainee": "object" };
const content = {
  ...content$1,
  "Atlas_Core.Atlas_SideBar.Main": region$Main
};

export { autofocus, classes, content, parameters, style, title };
