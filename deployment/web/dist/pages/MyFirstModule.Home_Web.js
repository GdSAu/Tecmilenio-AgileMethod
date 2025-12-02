import { reactExports, asPluginWidgets, selectTranslation } from '../index-_VvUQn72.js';
import { Div, PageFragment, ExpressionProperty } from '../ScrollContainer-CWm8LcDE.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-CBeuPgPB.js';
import { WebIconProperty } from '../WebIconProperty-DXvEx6dd.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-CxUEGN7C.js';
import { Text } from '../Image-B9KvzBr7.js';
import { content as content$1 } from '../Atlas_Core.Atlas_SideBar-6n9oK_YY.js';
import '../InlineText-Cj53CyvE.js';
import '../XQdQuDNG-BZYRYnBv.js';
import '../BkqAssms-BjvYwt-y.js';
import '../ListExpressionProperty-K3KsB8n3.js';
import '../WebStaticImageProperty-C4y_A7gf.js';
import '../FeedbackModule.ACT_Open_Feedback_Modal-Cw3PKCXV.js';

const React = { createElement: reactExports.createElement };
const { $Div, $Text, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, Text, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.MyFirstModule.Home_Web.layoutGrid3",
      $widgetId: "p.MyFirstModule.Home_Web.layoutGrid3",
      class: "mx-name-layoutGrid3 mx-layoutgrid mx-layoutgrid-fixed container",
      style: {
        "--layoutgrid-row-gap": "var(--spacing-large)"
      },
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.MyFirstModule.Home_Web.layoutGrid3$row0",
            $widgetId: "p.MyFirstModule.Home_Web.layoutGrid3$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstModule.Home_Web.layoutGrid3$row0$column0",
                  $widgetId: "p.MyFirstModule.Home_Web.layoutGrid3$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Text,
                      {
                        key: "p.MyFirstModule.Home_Web.text1",
                        $widgetId: "p.MyFirstModule.Home_Web.text1",
                        class: "mx-name-text1",
                        style: void 0,
                        caption: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "LearnNow Training Management" }, "args": {} }
                          })
                        ]),
                        renderMode: "h1"
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.MyFirstModule.Home_Web.layoutGrid3$row1",
            $widgetId: "p.MyFirstModule.Home_Web.layoutGrid3$row1",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstModule.Home_Web.layoutGrid3$row1$column0",
                  $widgetId: "p.MyFirstModule.Home_Web.layoutGrid3$row1$column0",
                  class: "col-lg col-md-6 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ConditionalVisibilityWrapper,
                      {
                        key: "p.MyFirstModule.Home_Web.actionButton1$visibility",
                        $widgetId: "p.MyFirstModule.Home_Web.actionButton1$visibility",
                        visible: ExpressionProperty({
                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "Teacher" }] }, "args": {} }
                        }),
                        contents: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.MyFirstModule.Home_Web.actionButton1",
                              $widgetId: "p.MyFirstModule.Home_Web.actionButton1",
                              buttonId: "p.MyFirstModule.Home_Web.actionButton1",
                              class: "mx-name-actionButton1 btn-lg btn-block",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "button",
                              role: void 0,
                              buttonClass: "btn-default",
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Courses" }, "args": {} }
                                })
                              ]),
                              tooltip: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              icon: WebIconProperty({
                                "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-book-closed" }
                              }),
                              action: ActionProperty({
                                "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Course_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "Teacher"] }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstModule.Home_Web.layoutGrid3$row1$column1",
                  $widgetId: "p.MyFirstModule.Home_Web.layoutGrid3$row1$column1",
                  class: "col-lg col-md-6 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ConditionalVisibilityWrapper,
                      {
                        key: "p.MyFirstModule.Home_Web.actionButton2$visibility",
                        $widgetId: "p.MyFirstModule.Home_Web.actionButton2$visibility",
                        visible: ExpressionProperty({
                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "Teacher" }] }, "args": {} }
                        }),
                        contents: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.MyFirstModule.Home_Web.actionButton2",
                              $widgetId: "p.MyFirstModule.Home_Web.actionButton2",
                              buttonId: "p.MyFirstModule.Home_Web.actionButton2",
                              class: "mx-name-actionButton2 btn-lg btn-block",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "button",
                              role: void 0,
                              buttonClass: "btn-default",
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Locations" }, "args": {} }
                                })
                              ]),
                              tooltip: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              icon: WebIconProperty({
                                "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-map-location-pin" }
                              }),
                              action: ActionProperty({
                                "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Location_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "Teacher"] }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstModule.Home_Web.layoutGrid3$row1$column2",
                  $widgetId: "p.MyFirstModule.Home_Web.layoutGrid3$row1$column2",
                  class: "col-lg col-md-6 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ConditionalVisibilityWrapper,
                      {
                        key: "p.MyFirstModule.Home_Web.actionButton3$visibility",
                        $widgetId: "p.MyFirstModule.Home_Web.actionButton3$visibility",
                        visible: ExpressionProperty({
                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "Teacher" }] }, "args": {} }
                        }),
                        contents: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.MyFirstModule.Home_Web.actionButton3",
                              $widgetId: "p.MyFirstModule.Home_Web.actionButton3",
                              buttonId: "p.MyFirstModule.Home_Web.actionButton3",
                              class: "mx-name-actionButton3 btn-lg btn-block",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "button",
                              role: void 0,
                              buttonClass: "btn-default",
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Teachers" }, "args": {} }
                                })
                              ]),
                              tooltip: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              icon: WebIconProperty({
                                "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-user" }
                              }),
                              action: ActionProperty({
                                "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Teacher_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "Teacher"] }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstModule.Home_Web.layoutGrid3$row1$column3",
                  $widgetId: "p.MyFirstModule.Home_Web.layoutGrid3$row1$column3",
                  class: "col-lg col-md-6 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ConditionalVisibilityWrapper,
                      {
                        key: "p.MyFirstModule.Home_Web.actionButton4$visibility",
                        $widgetId: "p.MyFirstModule.Home_Web.actionButton4$visibility",
                        visible: ExpressionProperty({
                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "Teacher" }] }, "args": {} }
                        }),
                        contents: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.MyFirstModule.Home_Web.actionButton4",
                              $widgetId: "p.MyFirstModule.Home_Web.actionButton4",
                              buttonId: "p.MyFirstModule.Home_Web.actionButton4",
                              class: "mx-name-actionButton4 btn-lg btn-block",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "button",
                              role: void 0,
                              buttonClass: "btn-default",
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Trainees" }, "args": {} }
                                })
                              ]),
                              tooltip: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              icon: WebIconProperty({
                                "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-graduation-hat" }
                              }),
                              action: ActionProperty({
                                "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Trainee_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "Teacher"] }, "disabledDuringExecution": true },
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
        ),
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.MyFirstModule.Home_Web.layoutGrid3$row2",
            $widgetId: "p.MyFirstModule.Home_Web.layoutGrid3$row2",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstModule.Home_Web.layoutGrid3$row2$column0",
                  $widgetId: "p.MyFirstModule.Home_Web.layoutGrid3$row2$column0",
                  class: "col-lg col-md-6 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ConditionalVisibilityWrapper,
                      {
                        key: "p.MyFirstModule.Home_Web.actionButton5$visibility",
                        $widgetId: "p.MyFirstModule.Home_Web.actionButton5$visibility",
                        visible: ExpressionProperty({
                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "Teacher" }, { "type": "literal", "value": "Trainee" }] }, "args": {} }
                        }),
                        contents: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.MyFirstModule.Home_Web.actionButton5",
                              $widgetId: "p.MyFirstModule.Home_Web.actionButton5",
                              buttonId: "p.MyFirstModule.Home_Web.actionButton5",
                              class: "mx-name-actionButton5 btn-lg btn-block",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "button",
                              role: void 0,
                              buttonClass: "btn-default",
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Training Events" }, "args": {} }
                                })
                              ]),
                              tooltip: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              icon: WebIconProperty({
                                "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-calendar" }
                              }),
                              action: ActionProperty({
                                "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/TrainingEvent_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "Teacher", "Trainee"] }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstModule.Home_Web.layoutGrid3$row2$column1",
                  $widgetId: "p.MyFirstModule.Home_Web.layoutGrid3$row2$column1",
                  class: "col-lg col-md-6 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ConditionalVisibilityWrapper,
                      {
                        key: "p.MyFirstModule.Home_Web.actionButton6$visibility",
                        $widgetId: "p.MyFirstModule.Home_Web.actionButton6$visibility",
                        visible: ExpressionProperty({
                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                        }),
                        contents: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.MyFirstModule.Home_Web.actionButton6",
                              $widgetId: "p.MyFirstModule.Home_Web.actionButton6",
                              buttonId: "p.MyFirstModule.Home_Web.actionButton6",
                              class: "mx-name-actionButton6 btn-lg btn-block",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "button",
                              role: void 0,
                              buttonClass: "btn-default",
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Add a Training Event" }, "args": {} }
                                })
                              ]),
                              tooltip: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              icon: WebIconProperty({
                                "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-add" }
                              }),
                              action: ActionProperty({
                                "action": { "type": "createObject", "argMap": {}, "config": { "entity": "MyFirstModule.TrainingEvent", "operationId": "9zFxCcKiulyHSVsdVSCQEQ", "pageSettings": { "name": "MyFirstModule/TrainingEvent_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator"] }, "allowedRoles": ["Administrator"], "objectParameter": "param$TrainingEvent" }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstModule.Home_Web.layoutGrid3$row2$column2",
                  $widgetId: "p.MyFirstModule.Home_Web.layoutGrid3$row2$column2",
                  class: "col-lg col-md-6 col-12",
                  style: void 0,
                  content: void 0
                }
              ),
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstModule.Home_Web.layoutGrid3$row2$column3",
                  $widgetId: "p.MyFirstModule.Home_Web.layoutGrid3$row2$column3",
                  class: "col-lg col-md-6 col-12",
                  style: void 0,
                  content: void 0
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
  "Homepage"
]);
const classes = "layout-atlas layout-atlas-responsive-sidebar";
const autofocus = "desktopOnly";
const style = {};
const parameters = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_SideBar.Main": region$Main
};

export { autofocus, classes, content, parameters, style, title };
