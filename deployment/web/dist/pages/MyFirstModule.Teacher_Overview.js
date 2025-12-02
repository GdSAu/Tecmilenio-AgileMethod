import { reactExports, asPluginWidgets, selectTranslation } from '../index-B2JBYcJC.js';
import { Div, PageFragment, ExpressionProperty } from '../ScrollContainer-s4IgqE8l.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-Dv79O5ku.js';
import { DatabaseObjectListProperty } from '../D4nQ98US-Caj07FMS.js';
import { ListActionProperty } from '../ListActionProperty-DivggqNt.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-B4ItTgxu.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-DrFNYzUf.js';
import { Container } from '../Image-4O8yuwqt.js';
import { GalleryWidgetModule } from '../Gallery-DkzGj11E.js';
import { Text } from '../Text-i84nuG4x.js';
import { content as content$1 } from '../Atlas_Core.Atlas_TopBar-f1oJ0PxP.js';
import '../DaFVLkxr-PApvqQxc.js';
import '../InlineText-xkL9W1d8.js';
import '../ListExpressionProperty-BO58xMYT.js';
import '../WebIconProperty-BjGs0HnE.js';
import '../WebStaticImageProperty-BI2oeWYi.js';
import '../FeedbackModule.ACT_Open_Feedback_Modal-DRhUKB4U.js';

const React = { createElement: reactExports.createElement };
const Gallery = Object.getOwnPropertyDescriptor(GalleryWidgetModule, "Gallery")?.value || Object.getOwnPropertyDescriptor(GalleryWidgetModule, "default")?.value;
const { $Div, $Container, $Text, $Gallery, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, Container, Text, Gallery, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.MyFirstModule.Teacher_Overview.layoutGrid2",
      $widgetId: "p.MyFirstModule.Teacher_Overview.layoutGrid2",
      class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
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
                              class: "mx-name-text40 pageheader-title spacing-outer-bottom",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Teacher Overview" }, "args": {} }
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
                    ),
                    /* @__PURE__ */ React.createElement(
                      $Gallery,
                      {
                        key: "p.MyFirstModule.Teacher_Overview.gallery1",
                        $widgetId: "p.MyFirstModule.Teacher_Overview.gallery1",
                        filtersPlaceholder: void 0,
                        datasource: DatabaseObjectListProperty({
                          "dataSourceId": "p.0",
                          "entity": "MyFirstModule.Teacher",
                          "operationId": "68Oe0YZ6KVqaiRjO7w3Nww",
                          "sort": []
                        }),
                        itemSelectionMode: "clear",
                        content: TemplatedWidgetProperty({
                          "dataSourceId": "p.0",
                          "editable": false,
                          "children": () => [
                            /* @__PURE__ */ React.createElement(
                              $Text,
                              {
                                key: "p.MyFirstModule.Teacher_Overview.text1",
                                $widgetId: "p.MyFirstModule.Teacher_Overview.text1",
                                class: "mx-name-text1",
                                style: void 0,
                                caption: selectTranslation([
                                  ExpressionProperty({
                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.MyFirstModule.Teacher_Overview.gallery1", "source": "object" } } }
                                  })
                                ]),
                                renderMode: "span"
                              }
                            ),
                            /* @__PURE__ */ React.createElement(
                              $Text,
                              {
                                key: "p.MyFirstModule.Teacher_Overview.text2",
                                $widgetId: "p.MyFirstModule.Teacher_Overview.text2",
                                class: "mx-name-text2",
                                style: void 0,
                                caption: selectTranslation([
                                  ExpressionProperty({
                                    "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Address: " }, { "type": "variable", "variable": "currentObject", "path": "Address" }] }, "args": { "currentObject": { "widget": "p.MyFirstModule.Teacher_Overview.gallery1", "source": "object" } } }
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
                          "action": { "type": "openPage", "argMap": { "param$Teacher": { "widget": "p.MyFirstModule.Teacher_Overview.gallery1", "source": "object" } }, "config": { "name": "MyFirstModule/Teacher_NewEdit.page.xml", "location": "content", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                          "abortOnServerValidation": false,
                          "dataSourceId": "p.0",
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
                  ]
                }
              ),
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstModule.Teacher_Overview.layoutGrid2$row0$column1",
                  $widgetId: "p.MyFirstModule.Teacher_Overview.layoutGrid2$row0$column1",
                  class: "col-lg-auto col-md-auto col-auto",
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
                                  "expression": { "expr": { "type": "literal", "value": "New" }, "args": {} }
                                })
                              ]),
                              tooltip: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              icon: void 0,
                              action: ActionProperty({
                                "action": { "type": "createObject", "argMap": {}, "config": { "entity": "MyFirstModule.Teacher", "operationId": "EVOXtIoLdlqY6KF4JqMRSw", "pageSettings": { "name": "MyFirstModule/Teacher_NewEdit.page.xml", "location": "content", "allowedRoles": ["Administrator"] }, "allowedRoles": ["Administrator"], "objectParameter": "param$Teacher" }, "disabledDuringExecution": true },
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
  "Page"
]);
const classes = "layout-atlas layout-atlas-responsive-topbar";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_TopBar.Main": region$Main
};

export { classes, content, style, title };
