import { reactExports, asPluginWidgets, selectTranslation } from '../index-B2JBYcJC.js';
import { Div, PageFragment, ExpressionProperty } from '../ScrollContainer-s4IgqE8l.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-Dv79O5ku.js';
import { DatabaseObjectListProperty } from '../D4nQ98US-Caj07FMS.js';
import { ListActionProperty } from '../ListActionProperty-DivggqNt.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-B4ItTgxu.js';
import { WebIconProperty } from '../WebIconProperty-BjGs0HnE.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-DrFNYzUf.js';
import { Container } from '../Image-4O8yuwqt.js';
import { GalleryWidgetModule } from '../Gallery-DkzGj11E.js';
import { Text } from '../Text-i84nuG4x.js';
import { content as content$1 } from '../Atlas_Core.Atlas_TopBar-f1oJ0PxP.js';
import '../DaFVLkxr-PApvqQxc.js';
import '../InlineText-xkL9W1d8.js';
import '../ListExpressionProperty-BO58xMYT.js';
import '../WebStaticImageProperty-BI2oeWYi.js';
import '../FeedbackModule.ACT_Open_Feedback_Modal-DRhUKB4U.js';

const React = { createElement: reactExports.createElement };
const Gallery = Object.getOwnPropertyDescriptor(GalleryWidgetModule, "Gallery")?.value || Object.getOwnPropertyDescriptor(GalleryWidgetModule, "default")?.value;
const { $Div, $Container, $Text, $ConditionalVisibilityWrapper, $ActionButton, $Gallery } = asPluginWidgets({ Div, Container, Text, ConditionalVisibilityWrapper, ActionButton, Gallery });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.MyFirstModule.TrainingEvent_Overview.layoutGrid2",
      $widgetId: "p.MyFirstModule.TrainingEvent_Overview.layoutGrid2",
      class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.MyFirstModule.TrainingEvent_Overview.layoutGrid2$row0",
            $widgetId: "p.MyFirstModule.TrainingEvent_Overview.layoutGrid2$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstModule.TrainingEvent_Overview.layoutGrid2$row0$column0",
                  $widgetId: "p.MyFirstModule.TrainingEvent_Overview.layoutGrid2$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.MyFirstModule.TrainingEvent_Overview.container1",
                        $widgetId: "p.MyFirstModule.TrainingEvent_Overview.container1",
                        class: "mx-name-container1 pageheader spacing-outer-bottom-large",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.MyFirstModule.TrainingEvent_Overview.text40",
                              $widgetId: "p.MyFirstModule.TrainingEvent_Overview.text40",
                              class: "mx-name-text40 pageheader-title spacing-outer-bottom",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Training Event Overview\r\n" }, "args": {} }
                                })
                              ]),
                              renderMode: "h1"
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.MyFirstModule.TrainingEvent_Overview.text39",
                              $widgetId: "p.MyFirstModule.TrainingEvent_Overview.text39",
                              class: "mx-name-text39 pageheader-subtitle text-detail spacing-outer-bottom-none",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Supporting text" }, "args": {} }
                                })
                              ]),
                              renderMode: "p"
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
                $Div,
                {
                  key: "p.MyFirstModule.TrainingEvent_Overview.layoutGrid2$row0$column1",
                  $widgetId: "p.MyFirstModule.TrainingEvent_Overview.layoutGrid2$row0$column1",
                  class: "col-lg-auto col-md-auto col-auto",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ConditionalVisibilityWrapper,
                      {
                        key: "p.MyFirstModule.TrainingEvent_Overview.actionButton1$visibility",
                        $widgetId: "p.MyFirstModule.TrainingEvent_Overview.actionButton1$visibility",
                        visible: ExpressionProperty({
                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                        }),
                        contents: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.MyFirstModule.TrainingEvent_Overview.actionButton1",
                              $widgetId: "p.MyFirstModule.TrainingEvent_Overview.actionButton1",
                              buttonId: "p.MyFirstModule.TrainingEvent_Overview.actionButton1",
                              class: "mx-name-actionButton1",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "button",
                              role: void 0,
                              buttonClass: "btn-success",
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Add" }, "args": {} }
                                })
                              ]),
                              tooltip: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              icon: void 0,
                              action: ActionProperty({
                                "action": { "type": "createObject", "argMap": {}, "config": { "entity": "MyFirstModule.TrainingEvent", "operationId": "KT7spH1VaFiQztmzby7Rcg", "pageSettings": { "name": "MyFirstModule/TrainingEvent_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator"] }, "allowedRoles": ["Administrator"], "objectParameter": "param$TrainingEvent" }, "disabledDuringExecution": true },
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
            key: "p.MyFirstModule.TrainingEvent_Overview.layoutGrid2$row1",
            $widgetId: "p.MyFirstModule.TrainingEvent_Overview.layoutGrid2$row1",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstModule.TrainingEvent_Overview.layoutGrid2$row1$column0",
                  $widgetId: "p.MyFirstModule.TrainingEvent_Overview.layoutGrid2$row1$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.MyFirstModule.TrainingEvent_Overview.container2",
                        $widgetId: "p.MyFirstModule.TrainingEvent_Overview.container2",
                        class: "mx-name-container2 background-white",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Gallery,
                            {
                              key: "p.MyFirstModule.TrainingEvent_Overview.gallery1",
                              $widgetId: "p.MyFirstModule.TrainingEvent_Overview.gallery1",
                              filtersPlaceholder: void 0,
                              datasource: DatabaseObjectListProperty({
                                "dataSourceId": "p.2",
                                "entity": "MyFirstModule.TrainingEvent",
                                "operationId": "nyBz0Bl5JVWuglOVCHw6OQ",
                                "sort": []
                              }),
                              itemSelectionMode: "clear",
                              content: TemplatedWidgetProperty({
                                "dataSourceId": "p.2",
                                "editable": false,
                                "children": () => [
                                  /* @__PURE__ */ React.createElement(
                                    $Text,
                                    {
                                      key: "p.MyFirstModule.TrainingEvent_Overview.text1",
                                      $widgetId: "p.MyFirstModule.TrainingEvent_Overview.text1",
                                      class: "mx-name-text1",
                                      style: void 0,
                                      caption: selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "MyFirstModule.TrainingEvent_Course/MyFirstModule.Course/Title" }, { "type": "literal", "value": "\r\nFrom : " }] }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "StartDate" }, { "type": "literal", "value": '{"type":"date"}' }] }] }, { "type": "literal", "value": ", to: " }] }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "EndDate" }, { "type": "literal", "value": '{"type":"date"}' }] }] }, { "type": "literal", "value": "\r\nTaught by: " }] }, { "type": "variable", "variable": "currentObject", "path": "MyFirstModule.TrainingEvent_Teacher/MyFirstModule.Teacher/Name" }] }, { "type": "literal", "value": "\r\nLocated at: " }] }, { "type": "variable", "variable": "currentObject", "path": "MyFirstModule.TrainingEvent_Location/MyFirstModule.Location/Address" }] }, { "type": "literal", "value": "\r\n" }] }, "args": { "currentObject": { "widget": "p.MyFirstModule.TrainingEvent_Overview.gallery1", "source": "object" } } }
                                        })
                                      ]),
                                      renderMode: "span"
                                    }
                                  ),
                                  /* @__PURE__ */ React.createElement(
                                    $ActionButton,
                                    {
                                      key: "p.MyFirstModule.TrainingEvent_Overview.actionButton3",
                                      $widgetId: "p.MyFirstModule.TrainingEvent_Overview.actionButton3",
                                      buttonId: "p.MyFirstModule.TrainingEvent_Overview.actionButton3",
                                      class: "mx-name-actionButton3",
                                      style: void 0,
                                      tabIndex: void 0,
                                      renderType: "button",
                                      role: void 0,
                                      buttonClass: "btn-danger",
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
                                        "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-trash-can" }
                                      }),
                                      action: ActionProperty({
                                        "action": { "type": "deleteObject", "argMap": { "$object": { "widget": "p.MyFirstModule.TrainingEvent_Overview.gallery1", "source": "object" } }, "config": { "closePage": false, "operationId": "2R3NowS/+F61C+6X4z+78g" }, "disabledDuringExecution": true },
                                        "abortOnServerValidation": true
                                      })
                                    }
                                  ),
                                  /* @__PURE__ */ React.createElement(
                                    $ConditionalVisibilityWrapper,
                                    {
                                      key: "p.MyFirstModule.TrainingEvent_Overview.actionButton2$visibility",
                                      $widgetId: "p.MyFirstModule.TrainingEvent_Overview.actionButton2$visibility",
                                      visible: ExpressionProperty({
                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                                      }),
                                      contents: [
                                        /* @__PURE__ */ React.createElement(
                                          $ActionButton,
                                          {
                                            key: "p.MyFirstModule.TrainingEvent_Overview.actionButton2",
                                            $widgetId: "p.MyFirstModule.TrainingEvent_Overview.actionButton2",
                                            buttonId: "p.MyFirstModule.TrainingEvent_Overview.actionButton2",
                                            class: "mx-name-actionButton2",
                                            style: void 0,
                                            tabIndex: void 0,
                                            renderType: "button",
                                            role: void 0,
                                            buttonClass: "btn-info",
                                            caption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Registrations" }, "args": {} }
                                              })
                                            ]),
                                            tooltip: TextProperty({
                                              "value": selectTranslation([
                                                ""
                                              ])
                                            }),
                                            icon: void 0,
                                            action: ActionProperty({
                                              "action": { "type": "openPage", "argMap": { "param$TrainingEvent": { "widget": "p.MyFirstModule.TrainingEvent_Overview.gallery1", "source": "object" } }, "config": { "name": "MyFirstModule/TrainingEvent_Registration_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
                                              "abortOnServerValidation": true
                                            })
                                          }
                                        )
                                      ]
                                    }
                                  ),
                                  /* @__PURE__ */ React.createElement(
                                    $Text,
                                    {
                                      key: "p.MyFirstModule.TrainingEvent_Overview.text2",
                                      $widgetId: "p.MyFirstModule.TrainingEvent_Overview.text2",
                                      class: "mx-name-text2",
                                      style: void 0,
                                      caption: selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "number of registrations:\r\n" }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TotalNumberOfRegistrations" }, { "type": "literal", "value": "{}" }] }] }, "args": { "currentObject": { "widget": "p.MyFirstModule.TrainingEvent_Overview.gallery1", "source": "object" } } }
                                        })
                                      ]),
                                      renderMode: "span"
                                    }
                                  )
                                ]
                              }),
                              desktopItems: 1,
                              tabletItems: 1,
                              phoneItems: 1,
                              pageSize: 20,
                              pagination: "buttons",
                              pagingPosition: "below",
                              showPagingButtons: "always",
                              showTotalCount: false,
                              showEmptyPlaceholder: "none",
                              emptyPlaceholder: void 0,
                              itemClass: void 0,
                              onClickTrigger: "single",
                              onClick: ListActionProperty({
                                "action": { "type": "openPage", "argMap": { "param$TrainingEvent": { "widget": "p.MyFirstModule.TrainingEvent_Overview.gallery1", "source": "object" } }, "config": { "name": "MyFirstModule/TrainingEvent_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                "abortOnServerValidation": false,
                                "dataSourceId": "p.2",
                                "argumentTypes": {}
                              }),
                              onSelectionChange: void 0,
                              filterSectionTitle: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                })
                              ]),
                              emptyMessageTitle: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                })
                              ]),
                              ariaLabelListBox: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                })
                              ]),
                              ariaLabelItem: selectTranslation([
                                void 0
                              ]),
                              class: "mx-name-gallery1",
                              style: void 0,
                              tabIndex: void 0
                            }
                          )
                        ],
                        ariaHidden: false
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
  "Training event Overview"
]);
const classes = "layout-atlas layout-atlas-responsive-topbar";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_TopBar.Main": region$Main
};

export { classes, content, style, title };
