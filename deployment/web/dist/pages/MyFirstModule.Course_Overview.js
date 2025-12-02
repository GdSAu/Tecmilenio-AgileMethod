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
      key: "p.MyFirstModule.Course_Overview.layoutGrid2",
      $widgetId: "p.MyFirstModule.Course_Overview.layoutGrid2",
      class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.MyFirstModule.Course_Overview.layoutGrid2$row0",
            $widgetId: "p.MyFirstModule.Course_Overview.layoutGrid2$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstModule.Course_Overview.layoutGrid2$row0$column0",
                  $widgetId: "p.MyFirstModule.Course_Overview.layoutGrid2$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.MyFirstModule.Course_Overview.container1",
                        $widgetId: "p.MyFirstModule.Course_Overview.container1",
                        class: "mx-name-container1 pageheader spacing-outer-bottom-large",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.MyFirstModule.Course_Overview.text40",
                              $widgetId: "p.MyFirstModule.Course_Overview.text40",
                              class: "mx-name-text40 pageheader-title spacing-outer-bottom",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": " Course Overview" }, "args": {} }
                                })
                              ]),
                              renderMode: "h1"
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.MyFirstModule.Course_Overview.text39",
                              $widgetId: "p.MyFirstModule.Course_Overview.text39",
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
                  key: "p.MyFirstModule.Course_Overview.layoutGrid2$row0$column1",
                  $widgetId: "p.MyFirstModule.Course_Overview.layoutGrid2$row0$column1",
                  class: "col-lg-auto col-md-auto col-auto",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ConditionalVisibilityWrapper,
                      {
                        key: "p.MyFirstModule.Course_Overview.actionButton1$visibility",
                        $widgetId: "p.MyFirstModule.Course_Overview.actionButton1$visibility",
                        visible: ExpressionProperty({
                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                        }),
                        contents: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.MyFirstModule.Course_Overview.actionButton1",
                              $widgetId: "p.MyFirstModule.Course_Overview.actionButton1",
                              buttonId: "p.MyFirstModule.Course_Overview.actionButton1",
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
                                "action": { "type": "createObject", "argMap": {}, "config": { "entity": "MyFirstModule.Course", "operationId": "GDyMiw+GilKxGkkKW/Iqdw", "pageSettings": { "name": "MyFirstModule/Course_NewEdit.page.xml", "location": "content", "allowedRoles": ["Administrator"] }, "allowedRoles": ["Administrator"], "objectParameter": "param$Course" }, "disabledDuringExecution": true },
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
            key: "p.MyFirstModule.Course_Overview.layoutGrid2$row1",
            $widgetId: "p.MyFirstModule.Course_Overview.layoutGrid2$row1",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstModule.Course_Overview.layoutGrid2$row1$column0",
                  $widgetId: "p.MyFirstModule.Course_Overview.layoutGrid2$row1$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Gallery,
                      {
                        key: "p.MyFirstModule.Course_Overview.gallery1",
                        $widgetId: "p.MyFirstModule.Course_Overview.gallery1",
                        filtersPlaceholder: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.MyFirstModule.Course_Overview.text3",
                              $widgetId: "p.MyFirstModule.Course_Overview.text3",
                              class: "mx-name-text3",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Text" }, "args": {} }
                                })
                              ]),
                              renderMode: "span"
                            }
                          )
                        ],
                        datasource: DatabaseObjectListProperty({
                          "dataSourceId": "p.2",
                          "entity": "MyFirstModule.Course",
                          "operationId": "9rHh9DUJJleqaOcBoXfecg",
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
                                key: "p.MyFirstModule.Course_Overview.text1",
                                $widgetId: "p.MyFirstModule.Course_Overview.text1",
                                class: "mx-name-text1",
                                style: void 0,
                                caption: selectTranslation([
                                  ExpressionProperty({
                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Title" }, "args": { "currentObject": { "widget": "p.MyFirstModule.Course_Overview.gallery1", "source": "object" } } }
                                  })
                                ]),
                                renderMode: "span"
                              }
                            ),
                            /* @__PURE__ */ React.createElement(
                              $Text,
                              {
                                key: "p.MyFirstModule.Course_Overview.text2",
                                $widgetId: "p.MyFirstModule.Course_Overview.text2",
                                class: "mx-name-text2",
                                style: void 0,
                                caption: selectTranslation([
                                  ExpressionProperty({
                                    "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Duration: " }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Duration" }, { "type": "literal", "value": "{}" }] }] }, "args": { "currentObject": { "widget": "p.MyFirstModule.Course_Overview.gallery1", "source": "object" } } }
                                  })
                                ]),
                                renderMode: "span"
                              }
                            ),
                            /* @__PURE__ */ React.createElement(
                              $Text,
                              {
                                key: "p.MyFirstModule.Course_Overview.text4",
                                $widgetId: "p.MyFirstModule.Course_Overview.text4",
                                class: "mx-name-text4",
                                style: void 0,
                                caption: selectTranslation([
                                  ExpressionProperty({
                                    "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Price: " }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Price" }, { "type": "literal", "value": '{"decimalPrecision":2}' }] }] }, "args": { "currentObject": { "widget": "p.MyFirstModule.Course_Overview.gallery1", "source": "object" } } }
                                  })
                                ]),
                                renderMode: "span"
                              }
                            ),
                            /* @__PURE__ */ React.createElement(
                              $ConditionalVisibilityWrapper,
                              {
                                key: "p.MyFirstModule.Course_Overview.actionButton3$visibility",
                                $widgetId: "p.MyFirstModule.Course_Overview.actionButton3$visibility",
                                visible: ExpressionProperty({
                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                }),
                                contents: [
                                  /* @__PURE__ */ React.createElement(
                                    $ActionButton,
                                    {
                                      key: "p.MyFirstModule.Course_Overview.actionButton3",
                                      $widgetId: "p.MyFirstModule.Course_Overview.actionButton3",
                                      buttonId: "p.MyFirstModule.Course_Overview.actionButton3",
                                      class: "mx-name-actionButton3",
                                      style: void 0,
                                      tabIndex: void 0,
                                      renderType: "button",
                                      role: void 0,
                                      buttonClass: "btn-primary",
                                      caption: selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": "Schedule" }, "args": {} }
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
                                        "action": { "type": "callMicroflow", "argMap": { "Course": { "widget": "p.MyFirstModule.Course_Overview.gallery1", "source": "object" } }, "config": { "operationId": "vYuT+LZsTFW/+mYY8A0z5w", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                        "abortOnServerValidation": true
                                      })
                                    }
                                  )
                                ]
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
                          "action": { "type": "openPage", "argMap": { "param$Course": { "widget": "p.MyFirstModule.Course_Overview.gallery1", "source": "object" } }, "config": { "name": "MyFirstModule/Course_NewEdit.page.xml", "location": "content", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
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
                    ),
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.MyFirstModule.Course_Overview.container2",
                        $widgetId: "p.MyFirstModule.Course_Overview.container2",
                        class: "mx-name-container2 background-white",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: void 0,
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
  "Course Overview"
]);
const classes = "layout-atlas layout-atlas-responsive-topbar";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_TopBar.Main": region$Main
};

export { classes, content, style, title };
