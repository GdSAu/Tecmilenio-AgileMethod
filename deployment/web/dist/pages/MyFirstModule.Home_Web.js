import { reactExports, asPluginWidgets, selectTranslation } from '../index-B2JBYcJC.js';
import { Div, PageFragment, ExpressionProperty } from '../ScrollContainer-s4IgqE8l.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-Dv79O5ku.js';
import { WebIconProperty } from '../WebIconProperty-BjGs0HnE.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-DrFNYzUf.js';
import { Container } from '../Image-4O8yuwqt.js';
import { Text } from '../Text-i84nuG4x.js';
import { content as content$1 } from '../Atlas_Core.Atlas_Default-9A1b6TX6.js';
import '../InlineText-xkL9W1d8.js';
import '../D4nQ98US-Caj07FMS.js';
import '../DaFVLkxr-PApvqQxc.js';
import '../ListExpressionProperty-BO58xMYT.js';
import '../WebStaticImageProperty-BI2oeWYi.js';
import '../FeedbackModule.ACT_Open_Feedback_Modal-DRhUKB4U.js';

const React = { createElement: reactExports.createElement };
const { $Container, $Div, $Text, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Container, Div, Text, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Container,
    {
      key: "p.MyFirstModule.Home_Web.container1",
      $widgetId: "p.MyFirstModule.Home_Web.container1",
      class: "mx-name-container1 pageheader",
      style: void 0,
      renderMode: "div",
      onClick: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.MyFirstModule.Home_Web.layoutGrid2",
            $widgetId: "p.MyFirstModule.Home_Web.layoutGrid2",
            class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstModule.Home_Web.layoutGrid2$row0",
                  $widgetId: "p.MyFirstModule.Home_Web.layoutGrid2$row0",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.MyFirstModule.Home_Web.layoutGrid2$row0$column0",
                        $widgetId: "p.MyFirstModule.Home_Web.layoutGrid2$row0$column0",
                        class: "col-lg col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.MyFirstModule.Home_Web.text1",
                              $widgetId: "p.MyFirstModule.Home_Web.text1",
                              class: "mx-name-text1 pageheader-title spacing-outer-bottom",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "LearnNow Training Management" }, "args": {} }
                                })
                              ]),
                              renderMode: "h3"
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
      ],
      ariaHidden: false
    }
  ),
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.MyFirstModule.Home_Web.layoutGrid1",
      $widgetId: "p.MyFirstModule.Home_Web.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.MyFirstModule.Home_Web.layoutGrid1$row0",
            $widgetId: "p.MyFirstModule.Home_Web.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstModule.Home_Web.layoutGrid1$row0$column0",
                  $widgetId: "p.MyFirstModule.Home_Web.layoutGrid1$row0$column0",
                  class: "col-lg col-md-6 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ConditionalVisibilityWrapper,
                      {
                        key: "p.MyFirstModule.Home_Web.actionButton1$visibility",
                        $widgetId: "p.MyFirstModule.Home_Web.actionButton1$visibility",
                        visible: ExpressionProperty({
                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                        }),
                        contents: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.MyFirstModule.Home_Web.actionButton1",
                              $widgetId: "p.MyFirstModule.Home_Web.actionButton1",
                              buttonId: "p.MyFirstModule.Home_Web.actionButton1",
                              class: "mx-name-actionButton1 btn-block",
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
                                "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Course_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
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
                  key: "p.MyFirstModule.Home_Web.layoutGrid1$row0$column1",
                  $widgetId: "p.MyFirstModule.Home_Web.layoutGrid1$row0$column1",
                  class: "col-lg col-md-6 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ConditionalVisibilityWrapper,
                      {
                        key: "p.MyFirstModule.Home_Web.actionButton2$visibility",
                        $widgetId: "p.MyFirstModule.Home_Web.actionButton2$visibility",
                        visible: ExpressionProperty({
                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                        }),
                        contents: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.MyFirstModule.Home_Web.actionButton2",
                              $widgetId: "p.MyFirstModule.Home_Web.actionButton2",
                              buttonId: "p.MyFirstModule.Home_Web.actionButton2",
                              class: "mx-name-actionButton2 btn-block",
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
                                "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-tablet" }
                              }),
                              action: ActionProperty({
                                "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Location_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
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
                  key: "p.MyFirstModule.Home_Web.layoutGrid1$row0$column2",
                  $widgetId: "p.MyFirstModule.Home_Web.layoutGrid1$row0$column2",
                  class: "col-lg col-md-6 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ConditionalVisibilityWrapper,
                      {
                        key: "p.MyFirstModule.Home_Web.actionButton3$visibility",
                        $widgetId: "p.MyFirstModule.Home_Web.actionButton3$visibility",
                        visible: ExpressionProperty({
                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                        }),
                        contents: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.MyFirstModule.Home_Web.actionButton3",
                              $widgetId: "p.MyFirstModule.Home_Web.actionButton3",
                              buttonId: "p.MyFirstModule.Home_Web.actionButton3",
                              class: "mx-name-actionButton3 btn-block",
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
                                "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-user-neutral-group" }
                              }),
                              action: ActionProperty({
                                "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Teacher_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
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
                  key: "p.MyFirstModule.Home_Web.layoutGrid1$row0$column3",
                  $widgetId: "p.MyFirstModule.Home_Web.layoutGrid1$row0$column3",
                  class: "col-lg col-md-6 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ConditionalVisibilityWrapper,
                      {
                        key: "p.MyFirstModule.Home_Web.actionButton4$visibility",
                        $widgetId: "p.MyFirstModule.Home_Web.actionButton4$visibility",
                        visible: ExpressionProperty({
                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                        }),
                        contents: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.MyFirstModule.Home_Web.actionButton4",
                              $widgetId: "p.MyFirstModule.Home_Web.actionButton4",
                              buttonId: "p.MyFirstModule.Home_Web.actionButton4",
                              class: "mx-name-actionButton4 btn-block",
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
                                "icon": { "type": "glyph", "iconClass": "glyphicon-bullhorn" }
                              }),
                              action: ActionProperty({
                                "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Trainee_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
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
            key: "p.MyFirstModule.Home_Web.layoutGrid1$row1",
            $widgetId: "p.MyFirstModule.Home_Web.layoutGrid1$row1",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstModule.Home_Web.layoutGrid1$row1$column0",
                  $widgetId: "p.MyFirstModule.Home_Web.layoutGrid1$row1$column0",
                  class: "col-lg col-md-6 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ConditionalVisibilityWrapper,
                      {
                        key: "p.MyFirstModule.Home_Web.actionButton5$visibility",
                        $widgetId: "p.MyFirstModule.Home_Web.actionButton5$visibility",
                        visible: ExpressionProperty({
                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }, { "type": "literal", "value": "Trainee" }] }, "args": {} }
                        }),
                        contents: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.MyFirstModule.Home_Web.actionButton5",
                              $widgetId: "p.MyFirstModule.Home_Web.actionButton5",
                              buttonId: "p.MyFirstModule.Home_Web.actionButton5",
                              class: "mx-name-actionButton5 btn-block btn-lg",
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
                              icon: void 0,
                              action: ActionProperty({
                                "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/TrainingEvent_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "User", "Trainee"] }, "disabledDuringExecution": true },
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
                  key: "p.MyFirstModule.Home_Web.layoutGrid1$row1$column1",
                  $widgetId: "p.MyFirstModule.Home_Web.layoutGrid1$row1$column1",
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
                              class: "mx-name-actionButton6",
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
                                "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-add" }
                              }),
                              action: ActionProperty({
                                "action": { "type": "createObject", "argMap": {}, "config": { "entity": "MyFirstModule.TrainingEvent", "operationId": "WcUjohu/MlCnIYm7QVxEUw", "pageSettings": { "name": "MyFirstModule/TrainingEvent_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator"] }, "allowedRoles": ["Administrator"], "objectParameter": "param$TrainingEvent" }, "disabledDuringExecution": true },
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
                  key: "p.MyFirstModule.Home_Web.layoutGrid1$row1$column2",
                  $widgetId: "p.MyFirstModule.Home_Web.layoutGrid1$row1$column2",
                  class: "col-lg col-md-6 col-12",
                  style: void 0,
                  content: void 0
                }
              ),
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstModule.Home_Web.layoutGrid1$row1$column3",
                  $widgetId: "p.MyFirstModule.Home_Web.layoutGrid1$row1$column3",
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
const classes = "layout-atlas layout-atlas-responsive-default";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_Default.Main": region$Main
};

export { classes, content, style, title };
