import { reactExports, asPluginWidgets, selectTranslation } from '../index-CAr0kpKK.js';
import { Div, PageFragment, ExpressionProperty } from '../ScrollContainer-ClJHkivb.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-BhLF8XeL.js';
import { DatabaseObjectListProperty } from '../XQdQuDNG-DSqxqUMm.js';
import { ListActionProperty } from '../ListActionProperty-CCfw0mXv.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-kWEqX0z9.js';
import { WebIconProperty } from '../WebIconProperty-B_4QSw2H.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-D3VnlN1I.js';
import { Container } from '../Image-ttRkd0pN.js';
import { GalleryWidgetModule } from '../Gallery-Br7hZzBi.js';
import { Text } from '../Text-DNEB1YEo.js';
import { content as content$1 } from '../Atlas_Core.Atlas_SideBar-D4H2emWH.js';
import '../BkqAssms-UB_bkK2K.js';
import '../InlineText-wnyvwc3J.js';
import '../ListExpressionProperty-BAWskYNZ.js';
import '../WebStaticImageProperty-Cmx5tQtA.js';
import '../FeedbackModule.ACT_Open_Feedback_Modal-Cg7QdmhI.js';

const React = { createElement: reactExports.createElement };
const Gallery = Object.getOwnPropertyDescriptor(GalleryWidgetModule, "Gallery")?.value || Object.getOwnPropertyDescriptor(GalleryWidgetModule, "default")?.value;
const { $Div, $Container, $Text, $ConditionalVisibilityWrapper, $ActionButton, $Gallery } = asPluginWidgets({ Div, Container, Text, ConditionalVisibilityWrapper, ActionButton, Gallery });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.MyFirstModule.Teacher_Overview.layoutGrid2",
      $widgetId: "p.MyFirstModule.Teacher_Overview.layoutGrid2",
      class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fixed container",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.MyFirstModule.Teacher_Overview.layoutGrid2$row0",
            $widgetId: "p.MyFirstModule.Teacher_Overview.layoutGrid2$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstModule.Teacher_Overview.layoutGrid2$row0$column0",
                  $widgetId: "p.MyFirstModule.Teacher_Overview.layoutGrid2$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.MyFirstModule.Teacher_Overview.container1",
                        $widgetId: "p.MyFirstModule.Teacher_Overview.container1",
                        class: "mx-name-container1 pageheader spacing-outer-bottom-large",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.MyFirstModule.Teacher_Overview.text40",
                              $widgetId: "p.MyFirstModule.Teacher_Overview.text40",
                              class: "mx-name-text40 spacing-outer-bottom",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Teachers" }, "args": {} }
                                })
                              ]),
                              renderMode: "h1"
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.MyFirstModule.Teacher_Overview.text39",
                              $widgetId: "p.MyFirstModule.Teacher_Overview.text39",
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
                  key: "p.MyFirstModule.Teacher_Overview.layoutGrid2$row0$column1",
                  $widgetId: "p.MyFirstModule.Teacher_Overview.layoutGrid2$row0$column1",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ConditionalVisibilityWrapper,
                      {
                        key: "p.MyFirstModule.Teacher_Overview.actionButton1$visibility",
                        $widgetId: "p.MyFirstModule.Teacher_Overview.actionButton1$visibility",
                        visible: ExpressionProperty({
                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                        }),
                        contents: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.MyFirstModule.Teacher_Overview.actionButton1",
                              $widgetId: "p.MyFirstModule.Teacher_Overview.actionButton1",
                              buttonId: "p.MyFirstModule.Teacher_Overview.actionButton1",
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
                                "action": { "type": "createObject", "argMap": {}, "config": { "entity": "MyFirstModule.Teacher", "operationId": "V6Fpy+fzjVmK9qQe3T8K5w", "pageSettings": { "name": "MyFirstModule/Teacher_NewEdit.page.xml", "location": "content", "allowedRoles": ["Administrator"] }, "allowedRoles": ["Administrator"], "objectParameter": "param$Teacher" }, "disabledDuringExecution": true },
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
            key: "p.MyFirstModule.Teacher_Overview.layoutGrid2$row1",
            $widgetId: "p.MyFirstModule.Teacher_Overview.layoutGrid2$row1",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstModule.Teacher_Overview.layoutGrid2$row1$column0",
                  $widgetId: "p.MyFirstModule.Teacher_Overview.layoutGrid2$row1$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.MyFirstModule.Teacher_Overview.container2",
                        $widgetId: "p.MyFirstModule.Teacher_Overview.container2",
                        class: "mx-name-container2 background-white card",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Gallery,
                            {
                              key: "p.MyFirstModule.Teacher_Overview.gallery1",
                              $widgetId: "p.MyFirstModule.Teacher_Overview.gallery1",
                              datasource: DatabaseObjectListProperty({
                                "dataSourceId": "p.2",
                                "entity": "MyFirstModule.Teacher",
                                "operationId": "eyjseHHgd1qVRzzYVKf3Nw",
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
                                      key: "p.MyFirstModule.Teacher_Overview.container4",
                                      $widgetId: "p.MyFirstModule.Teacher_Overview.container4",
                                      class: "mx-name-container4 flex-row spacing-inner-top-medium spacing-inner-right-medium spacing-inner-bottom-medium spacing-inner-left-medium align-y-center card shadow-none",
                                      style: void 0,
                                      renderMode: "div",
                                      onClick: void 0,
                                      content: [
                                        /* @__PURE__ */ React.createElement(
                                          $Container,
                                          {
                                            key: "p.MyFirstModule.Teacher_Overview.container5",
                                            $widgetId: "p.MyFirstModule.Teacher_Overview.container5",
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
                                                  key: "p.MyFirstModule.Teacher_Overview.text11",
                                                  $widgetId: "p.MyFirstModule.Teacher_Overview.text11",
                                                  class: "mx-name-text11 spacing-outer-bottom-none",
                                                  style: void 0,
                                                  caption: selectTranslation([
                                                    ExpressionProperty({
                                                      "expression": { "expr": { "type": "literal", "value": "Name" }, "args": {} }
                                                    })
                                                  ]),
                                                  renderMode: "h4"
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $Text,
                                                {
                                                  key: "p.MyFirstModule.Teacher_Overview.text42",
                                                  $widgetId: "p.MyFirstModule.Teacher_Overview.text42",
                                                  class: "mx-name-text42 spacing-outer-bottom-none",
                                                  style: void 0,
                                                  caption: selectTranslation([
                                                    ExpressionProperty({
                                                      "expression": { "expr": { "type": "literal", "value": "Address" }, "args": {} }
                                                    })
                                                  ]),
                                                  renderMode: "p"
                                                }
                                              )
                                            ],
                                            ariaHidden: false
                                          }
                                        ),
                                        /* @__PURE__ */ React.createElement(
                                          $ActionButton,
                                          {
                                            key: "p.MyFirstModule.Teacher_Overview.actionButton5",
                                            $widgetId: "p.MyFirstModule.Teacher_Overview.actionButton5",
                                            buttonId: "p.MyFirstModule.Teacher_Overview.actionButton5",
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
                                "action": { "type": "openPage", "argMap": { "param$Teacher": { "widget": "p.MyFirstModule.Teacher_Overview.gallery1", "source": "object" } }, "config": { "name": "MyFirstModule/Teacher_NewEdit.page.xml", "location": "content", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
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
  "Teacher Overview"
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
