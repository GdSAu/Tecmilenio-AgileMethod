import { reactExports, asPluginWidgets, selectTranslation } from '../index-B8bUhI8E.js';
import { Div, PageFragment, ExpressionProperty } from '../ScrollContainer-CdywZc9i.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-D_YBiLZ6.js';
import { DatabaseObjectListProperty } from '../CESNSUMX-CEo4dwQO.js';
import { ListActionProperty } from '../ListActionProperty-0FSYFQs5.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-DBQnZxmk.js';
import { WebIconProperty } from '../WebIconProperty-DTP8fO1w.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-KPRTruOk.js';
import { Container, Text } from '../Image-Bk8op5TL.js';
import { GalleryWidgetModule, content as content$1 } from '../Atlas_Core.Atlas_SideBar-DO_CImQD.js';
import '../1OX6EehJ-ChqR_l5F.js';
import '../InlineText-caQaZXpr.js';
import '../ListExpressionProperty-CWG0RJeD.js';
import '../WebStaticImageProperty-DfADbgjj.js';
import '../FeedbackModule.ACT_Open_Feedback_Modal-C1halrD4.js';

const React = { createElement: reactExports.createElement };
const Gallery = Object.getOwnPropertyDescriptor(GalleryWidgetModule, "Gallery")?.value || Object.getOwnPropertyDescriptor(GalleryWidgetModule, "default")?.value;
const { $Div, $Container, $Text, $ConditionalVisibilityWrapper, $ActionButton, $Gallery } = asPluginWidgets({ Div, Container, Text, ConditionalVisibilityWrapper, ActionButton, Gallery });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p25.MyFirstModule.Course_Overview.layoutGrid2",
      $widgetId: "p25.MyFirstModule.Course_Overview.layoutGrid2",
      class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fixed container",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p25.MyFirstModule.Course_Overview.layoutGrid2$row0",
            $widgetId: "p25.MyFirstModule.Course_Overview.layoutGrid2$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p25.MyFirstModule.Course_Overview.layoutGrid2$row0$column0",
                  $widgetId: "p25.MyFirstModule.Course_Overview.layoutGrid2$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p25.MyFirstModule.Course_Overview.container1",
                        $widgetId: "p25.MyFirstModule.Course_Overview.container1",
                        class: "mx-name-container1 pageheader spacing-outer-bottom-large",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p25.MyFirstModule.Course_Overview.text40",
                              $widgetId: "p25.MyFirstModule.Course_Overview.text40",
                              class: "mx-name-text40 spacing-outer-bottom",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Course Overview" }, "args": {} }
                                })
                              ]),
                              renderMode: "h1"
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p25.MyFirstModule.Course_Overview.text39",
                              $widgetId: "p25.MyFirstModule.Course_Overview.text39",
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
                  key: "p25.MyFirstModule.Course_Overview.layoutGrid2$row0$column1",
                  $widgetId: "p25.MyFirstModule.Course_Overview.layoutGrid2$row0$column1",
                  class: "col-lg-auto col-md-auto col-auto",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ConditionalVisibilityWrapper,
                      {
                        key: "p25.MyFirstModule.Course_Overview.actionButton1$visibility",
                        $widgetId: "p25.MyFirstModule.Course_Overview.actionButton1$visibility",
                        visible: ExpressionProperty({
                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                        }),
                        contents: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p25.MyFirstModule.Course_Overview.actionButton1",
                              $widgetId: "p25.MyFirstModule.Course_Overview.actionButton1",
                              buttonId: "p25.MyFirstModule.Course_Overview.actionButton1",
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
                                "action": { "type": "createObject", "argMap": {}, "config": { "entity": "MyFirstModule.Course", "operationId": "LzwY8Rq+YVuWS5UxwE2+Fw", "pageSettings": { "name": "MyFirstModule/Course_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator"] }, "allowedRoles": ["Administrator"], "objectParameter": "param$Course" }, "disabledDuringExecution": true },
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
            key: "p25.MyFirstModule.Course_Overview.layoutGrid2$row1",
            $widgetId: "p25.MyFirstModule.Course_Overview.layoutGrid2$row1",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p25.MyFirstModule.Course_Overview.layoutGrid2$row1$column0",
                  $widgetId: "p25.MyFirstModule.Course_Overview.layoutGrid2$row1$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p25.MyFirstModule.Course_Overview.container2",
                        $widgetId: "p25.MyFirstModule.Course_Overview.container2",
                        class: "mx-name-container2 background-white card",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Gallery,
                            {
                              key: "p25.MyFirstModule.Course_Overview.gallery1",
                              $widgetId: "p25.MyFirstModule.Course_Overview.gallery1",
                              datasource: DatabaseObjectListProperty({
                                "dataSourceId": "p25.2",
                                "entity": "MyFirstModule.Course",
                                "operationId": "uoAEu0wVRFul62Wi+LJEMw",
                                "sort": []
                              }),
                              itemSelectionMode: "clear",
                              content: TemplatedWidgetProperty({
                                "dataSourceId": "p25.2",
                                "editable": false,
                                "children": () => [
                                  /* @__PURE__ */ React.createElement(
                                    $Container,
                                    {
                                      key: "p25.MyFirstModule.Course_Overview.container4",
                                      $widgetId: "p25.MyFirstModule.Course_Overview.container4",
                                      class: "mx-name-container4 flex-row spacing-inner-top-medium spacing-inner-right-medium spacing-inner-bottom-medium spacing-inner-left-medium align-y-center card shadow-none",
                                      style: void 0,
                                      renderMode: "div",
                                      onClick: void 0,
                                      content: [
                                        /* @__PURE__ */ React.createElement(
                                          $Container,
                                          {
                                            key: "p25.MyFirstModule.Course_Overview.container5",
                                            $widgetId: "p25.MyFirstModule.Course_Overview.container5",
                                            class: "mx-name-container5 flex-column",
                                            style: {
                                              "flex": "var(--flex-grow)",
                                              "--flex-gap": "var(--spacing-small)"
                                            },
                                            renderMode: "div",
                                            onClick: void 0,
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $Text,
                                                {
                                                  key: "p25.MyFirstModule.Course_Overview.text11",
                                                  $widgetId: "p25.MyFirstModule.Course_Overview.text11",
                                                  class: "mx-name-text11 spacing-outer-bottom-none",
                                                  style: void 0,
                                                  caption: selectTranslation([
                                                    ExpressionProperty({
                                                      "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Title" }, "args": { "currentObject": { "widget": "p25.MyFirstModule.Course_Overview.gallery1", "source": "object" } } }
                                                    })
                                                  ]),
                                                  renderMode: "h4"
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $Text,
                                                {
                                                  key: "p25.MyFirstModule.Course_Overview.text42",
                                                  $widgetId: "p25.MyFirstModule.Course_Overview.text42",
                                                  class: "mx-name-text42 spacing-outer-bottom-none",
                                                  style: void 0,
                                                  caption: selectTranslation([
                                                    ExpressionProperty({
                                                      "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Price: " }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Price" }, { "type": "literal", "value": '{"decimalPrecision":2}' }] }] }, "args": { "currentObject": { "widget": "p25.MyFirstModule.Course_Overview.gallery1", "source": "object" } } }
                                                    })
                                                  ]),
                                                  renderMode: "p"
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $Text,
                                                {
                                                  key: "p25.MyFirstModule.Course_Overview.text1",
                                                  $widgetId: "p25.MyFirstModule.Course_Overview.text1",
                                                  class: "mx-name-text1",
                                                  style: void 0,
                                                  caption: selectTranslation([
                                                    ExpressionProperty({
                                                      "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Duration" }, { "type": "literal", "value": "{}" }] }, { "type": "literal", "value": " day(s)" }] }, "args": { "currentObject": { "widget": "p25.MyFirstModule.Course_Overview.gallery1", "source": "object" } } }
                                                    })
                                                  ]),
                                                  renderMode: "span"
                                                }
                                              )
                                            ],
                                            ariaHidden: false
                                          }
                                        ),
                                        /* @__PURE__ */ React.createElement(
                                          $ConditionalVisibilityWrapper,
                                          {
                                            key: "p25.MyFirstModule.Course_Overview.actionButton2$visibility",
                                            $widgetId: "p25.MyFirstModule.Course_Overview.actionButton2$visibility",
                                            visible: ExpressionProperty({
                                              "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                            }),
                                            contents: [
                                              /* @__PURE__ */ React.createElement(
                                                $ActionButton,
                                                {
                                                  key: "p25.MyFirstModule.Course_Overview.actionButton2",
                                                  $widgetId: "p25.MyFirstModule.Course_Overview.actionButton2",
                                                  buttonId: "p25.MyFirstModule.Course_Overview.actionButton2",
                                                  class: "mx-name-actionButton2",
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
                                                    "action": { "type": "callMicroflow", "argMap": { "Course": { "widget": "p25.MyFirstModule.Course_Overview.gallery1", "source": "object" } }, "config": { "operationId": "jEE4jvg+61+N7PoMz+No1Q", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                            key: "p25.MyFirstModule.Course_Overview.actionButton5",
                                            $widgetId: "p25.MyFirstModule.Course_Overview.actionButton5",
                                            buttonId: "p25.MyFirstModule.Course_Overview.actionButton5",
                                            class: "mx-name-actionButton5",
                                            style: void 0,
                                            tabIndex: void 0,
                                            renderType: "link",
                                            role: "button",
                                            buttonClass: "btn-default",
                                            caption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            tooltip: TextProperty({
                                              "value": selectTranslation([
                                                "Menu Right Icon"
                                              ])
                                            }),
                                            icon: WebIconProperty({
                                              "icon": { "type": "glyph", "iconClass": "glyphicon-menu-right" }
                                            }),
                                            action: void 0
                                          }
                                        )
                                      ],
                                      ariaHidden: false
                                    }
                                  )
                                ]
                              }),
                              desktopItems: 1,
                              tabletItems: 1,
                              phoneItems: 1,
                              pageSize: 8,
                              pagination: "virtualScrolling",
                              pagingPosition: "bottom",
                              showEmptyPlaceholder: "none",
                              emptyPlaceholder: void 0,
                              itemClass: void 0,
                              onClickTrigger: "single",
                              onClick: ListActionProperty({
                                "action": { "type": "openPage", "argMap": { "param$Course": { "widget": "p25.MyFirstModule.Course_Overview.gallery1", "source": "object" } }, "config": { "name": "MyFirstModule/Course_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                "abortOnServerValidation": false,
                                "dataSourceId": "p25.2",
                                "argumentTypes": {}
                              }),
                              onSelectionChange: void 0,
                              filtersPlaceholder: void 0,
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
                              showTotalCount: false,
                              showPagingButtons: "always",
                              loadMoreButtonCaption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Load More" }, "args": {} }
                                })
                              ]),
                              stateStorageType: "attribute",
                              storeFilters: true,
                              storeSort: true,
                              ariaLabelItem: selectTranslation([
                                void 0
                              ]),
                              keepSelection: false,
                              refreshIndicator: false,
                              selectedCountTemplateSingular: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                })
                              ]),
                              selectedCountTemplatePlural: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                })
                              ]),
                              class: "mx-name-gallery1 widget-gallery-hover widget-gallery-pagination-center",
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
  "Course Overview"
]);
const classes = "layout-atlas layout-atlas-responsive-sidebar";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_SideBar.Main": region$Main
};

export { classes, content, style, title };
