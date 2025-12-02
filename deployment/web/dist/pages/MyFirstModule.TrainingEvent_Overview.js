import { reactExports, asPluginWidgets, selectTranslation } from '../index-_VvUQn72.js';
import { Div, PageFragment, ExpressionProperty } from '../ScrollContainer-CWm8LcDE.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-CBeuPgPB.js';
import { DatabaseObjectListProperty } from '../XQdQuDNG-BZYRYnBv.js';
import { ListActionProperty } from '../ListActionProperty-BOUHTGvD.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-C95xPTBp.js';
import { WebIconProperty } from '../WebIconProperty-DXvEx6dd.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-CxUEGN7C.js';
import { Container, Text } from '../Image-B9KvzBr7.js';
import { GalleryWidgetModule } from '../Gallery-BKhCMgnM.js';
import { content as content$1 } from '../Atlas_Core.Atlas_SideBar-6n9oK_YY.js';
import '../BkqAssms-BjvYwt-y.js';
import '../InlineText-Cj53CyvE.js';
import '../ListExpressionProperty-K3KsB8n3.js';
import '../WebStaticImageProperty-C4y_A7gf.js';
import '../FeedbackModule.ACT_Open_Feedback_Modal-Cw3PKCXV.js';

const React = { createElement: reactExports.createElement };
const Gallery = Object.getOwnPropertyDescriptor(GalleryWidgetModule, "Gallery")?.value || Object.getOwnPropertyDescriptor(GalleryWidgetModule, "default")?.value;
const { $Div, $Container, $Text, $ConditionalVisibilityWrapper, $ActionButton, $Gallery } = asPluginWidgets({ Div, Container, Text, ConditionalVisibilityWrapper, ActionButton, Gallery });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.MyFirstModule.TrainingEvent_Overview.layoutGrid2",
      $widgetId: "p.MyFirstModule.TrainingEvent_Overview.layoutGrid2",
      class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fixed container",
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
                              class: "mx-name-text40 spacing-outer-bottom",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Training Event Overview\r\n\r\n" }, "args": {} }
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
                                "action": { "type": "createObject", "argMap": {}, "config": { "entity": "MyFirstModule.TrainingEvent", "operationId": "a5QNjgDlrFeC1SGKitx+nw", "pageSettings": { "name": "MyFirstModule/TrainingEvent_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator"] }, "allowedRoles": ["Administrator"], "objectParameter": "param$TrainingEvent" }, "disabledDuringExecution": true },
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
                        class: "mx-name-container2 background-white card",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Gallery,
                            {
                              key: "p.MyFirstModule.TrainingEvent_Overview.gallery1",
                              $widgetId: "p.MyFirstModule.TrainingEvent_Overview.gallery1",
                              datasource: DatabaseObjectListProperty({
                                "dataSourceId": "p.2",
                                "entity": "MyFirstModule.TrainingEvent",
                                "operationId": "sNrNBNx9V16PAF82d6FUuw",
                                "sort": []
                              }),
                              itemSelectionMode: "clear",
                              content: TemplatedWidgetProperty({
                                "dataSourceId": "p.2",
                                "editable": false,
                                "children": () => [
                                  /* @__PURE__ */ React.createElement(
                                    $Container,
                                    {
                                      key: "p.MyFirstModule.TrainingEvent_Overview.container4",
                                      $widgetId: "p.MyFirstModule.TrainingEvent_Overview.container4",
                                      class: "mx-name-container4 flex-row spacing-inner-top-medium spacing-inner-right-medium spacing-inner-bottom-medium spacing-inner-left-medium align-y-center card shadow-none",
                                      style: void 0,
                                      renderMode: "div",
                                      onClick: void 0,
                                      content: [
                                        /* @__PURE__ */ React.createElement(
                                          $Container,
                                          {
                                            key: "p.MyFirstModule.TrainingEvent_Overview.container5",
                                            $widgetId: "p.MyFirstModule.TrainingEvent_Overview.container5",
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
                                                  key: "p.MyFirstModule.TrainingEvent_Overview.text11",
                                                  $widgetId: "p.MyFirstModule.TrainingEvent_Overview.text11",
                                                  class: "mx-name-text11 spacing-outer-bottom-none",
                                                  style: void 0,
                                                  caption: selectTranslation([
                                                    ExpressionProperty({
                                                      "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "MyFirstModule.TrainingEvent_Course/MyFirstModule.Course/Title" }, "args": { "currentObject": { "widget": "p.MyFirstModule.TrainingEvent_Overview.gallery1", "source": "object" } } }
                                                    })
                                                  ]),
                                                  renderMode: "h4"
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $Text,
                                                {
                                                  key: "p.MyFirstModule.TrainingEvent_Overview.text42",
                                                  $widgetId: "p.MyFirstModule.TrainingEvent_Overview.text42",
                                                  class: "mx-name-text42 spacing-outer-bottom-none",
                                                  style: void 0,
                                                  caption: selectTranslation([
                                                    ExpressionProperty({
                                                      "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "From " }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "StartDate" }, { "type": "literal", "value": '{"type":"date"}' }] }] }, { "type": "literal", "value": " To " }] }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "EndDate" }, { "type": "literal", "value": '{"type":"date"}' }] }] }, "args": { "currentObject": { "widget": "p.MyFirstModule.TrainingEvent_Overview.gallery1", "source": "object" } } }
                                                    })
                                                  ]),
                                                  renderMode: "p"
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $Text,
                                                {
                                                  key: "p.MyFirstModule.TrainingEvent_Overview.text43",
                                                  $widgetId: "p.MyFirstModule.TrainingEvent_Overview.text43",
                                                  class: "mx-name-text43 spacing-outer-bottom-none",
                                                  style: void 0,
                                                  caption: selectTranslation([
                                                    ExpressionProperty({
                                                      "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Taught by: " }, { "type": "variable", "variable": "currentObject", "path": "MyFirstModule.TrainingEvent_Teacher/MyFirstModule.Teacher/Name" }] }, "args": { "currentObject": { "widget": "p.MyFirstModule.TrainingEvent_Overview.gallery1", "source": "object" } } }
                                                    })
                                                  ]),
                                                  renderMode: "p"
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $Text,
                                                {
                                                  key: "p.MyFirstModule.TrainingEvent_Overview.text44",
                                                  $widgetId: "p.MyFirstModule.TrainingEvent_Overview.text44",
                                                  class: "mx-name-text44 spacing-outer-bottom-none",
                                                  style: void 0,
                                                  caption: selectTranslation([
                                                    ExpressionProperty({
                                                      "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Located at: " }, { "type": "variable", "variable": "currentObject", "path": "MyFirstModule.TrainingEvent_Location/MyFirstModule.Location/Address" }] }, "args": { "currentObject": { "widget": "p.MyFirstModule.TrainingEvent_Overview.gallery1", "source": "object" } } }
                                                    })
                                                  ]),
                                                  renderMode: "p"
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $Text,
                                                {
                                                  key: "p.MyFirstModule.TrainingEvent_Overview.text1",
                                                  $widgetId: "p.MyFirstModule.TrainingEvent_Overview.text1",
                                                  class: "mx-name-text1",
                                                  style: void 0,
                                                  caption: selectTranslation([
                                                    ExpressionProperty({
                                                      "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Number of registrations: " }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TotalNumberOfRegistrations" }, { "type": "literal", "value": "{}" }] }] }, "args": { "currentObject": { "widget": "p.MyFirstModule.TrainingEvent_Overview.gallery1", "source": "object" } } }
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
                                            key: "p.MyFirstModule.TrainingEvent_Overview.actionButton2$visibility",
                                            $widgetId: "p.MyFirstModule.TrainingEvent_Overview.actionButton2$visibility",
                                            visible: ExpressionProperty({
                                              "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "Teacher" }] }, "args": {} }
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
                                                    "action": { "type": "openPage", "argMap": { "param$TrainingEvent": { "widget": "p.MyFirstModule.TrainingEvent_Overview.gallery1", "source": "object" } }, "config": { "name": "MyFirstModule/TrainingEvent_Registration_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "Teacher"] }, "disabledDuringExecution": true },
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
                                            key: "p.MyFirstModule.TrainingEvent_Overview.actionButton5",
                                            $widgetId: "p.MyFirstModule.TrainingEvent_Overview.actionButton5",
                                            buttonId: "p.MyFirstModule.TrainingEvent_Overview.actionButton5",
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
                                              "action": { "type": "deleteObject", "argMap": { "$object": { "widget": "p.MyFirstModule.TrainingEvent_Overview.gallery1", "source": "object" } }, "config": { "closePage": false, "operationId": "JCbRS8nrdVyXhnQO6DwpzQ" }, "disabledDuringExecution": true },
                                              "abortOnServerValidation": true
                                            })
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
                                "action": { "type": "openPage", "argMap": { "param$TrainingEvent": { "widget": "p.MyFirstModule.TrainingEvent_Overview.gallery1", "source": "object" } }, "config": { "name": "MyFirstModule/TrainingEvent_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                "abortOnServerValidation": false,
                                "dataSourceId": "p.2",
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
  "Training event Overview"
]);
const classes = "layout-atlas layout-atlas-responsive-sidebar";
const autofocus = "off";
const style = {};
const parameters = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_SideBar.Main": region$Main
};

export { autofocus, classes, content, parameters, style, title };
