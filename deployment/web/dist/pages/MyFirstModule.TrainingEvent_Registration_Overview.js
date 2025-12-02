import { reactExports, asPluginWidgets, selectTranslation } from '../index-B2JBYcJC.js';
import { Div, PageFragment, ExpressionProperty } from '../ScrollContainer-s4IgqE8l.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-Dv79O5ku.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-Dyh5nfV1.js';
import { DatabaseObjectListProperty } from '../D4nQ98US-Caj07FMS.js';
import { ListActionProperty } from '../ListActionProperty-DivggqNt.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-B4ItTgxu.js';
import { WebIconProperty } from '../WebIconProperty-BjGs0HnE.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-DrFNYzUf.js';
import { Container } from '../Image-4O8yuwqt.js';
import { DataView } from '../DataView-RXiE0Ldy.js';
import { GalleryWidgetModule } from '../Gallery-DkzGj11E.js';
import { Text } from '../Text-i84nuG4x.js';
import { content as content$1 } from '../Atlas_Core.Atlas_Default-9A1b6TX6.js';
import '../DaFVLkxr-PApvqQxc.js';
import '../bdxqAC6d-BP4WTE9p.js';
import '../InlineText-xkL9W1d8.js';
import '../ListExpressionProperty-BO58xMYT.js';
import '../WebStaticImageProperty-BI2oeWYi.js';
import '../FeedbackModule.ACT_Open_Feedback_Modal-DRhUKB4U.js';

const React = { createElement: reactExports.createElement };
const Gallery = Object.getOwnPropertyDescriptor(GalleryWidgetModule, "Gallery")?.value || Object.getOwnPropertyDescriptor(GalleryWidgetModule, "default")?.value;
const { $Div, $Container, $ActionButton, $Text, $ConditionalVisibilityWrapper, $Gallery, $DataView } = asPluginWidgets({ Div, Container, ActionButton, Text, ConditionalVisibilityWrapper, Gallery, DataView });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid1",
      $widgetId: "p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid1$row0",
            $widgetId: "p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid1$row0$column0",
                  $widgetId: "p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid1$row0$column0",
                  class: "col-lg-12 col-md-12 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.MyFirstModule.TrainingEvent_Registration_Overview.container1",
                        $widgetId: "p.MyFirstModule.TrainingEvent_Registration_Overview.container1",
                        class: "mx-name-container1 pageheader spacing-outer-bottom-large",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.MyFirstModule.TrainingEvent_Registration_Overview.actionButton4",
                              $widgetId: "p.MyFirstModule.TrainingEvent_Registration_Overview.actionButton4",
                              buttonId: "p.MyFirstModule.TrainingEvent_Registration_Overview.actionButton4",
                              class: "mx-name-actionButton4 link-back spacing-outer-bottom-medium",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "link",
                              role: "link",
                              buttonClass: "btn-default",
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Back" }, "args": {} }
                                })
                              ]),
                              tooltip: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              icon: WebIconProperty({
                                "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-chevron-left" }
                              }),
                              action: ActionProperty({
                                "action": { "type": "closePage", "argMap": {}, "config": {}, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Div,
                            {
                              key: "p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid2",
                              $widgetId: "p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid2",
                              class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid pageheader",
                              style: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Div,
                                  {
                                    key: "p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid2$row0",
                                    $widgetId: "p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid2$row0",
                                    class: "row",
                                    style: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Div,
                                        {
                                          key: "p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid2$row0$column0",
                                          $widgetId: "p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid2$row0$column0",
                                          class: "col-lg col-md col",
                                          style: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p.MyFirstModule.TrainingEvent_Registration_Overview.text40",
                                                $widgetId: "p.MyFirstModule.TrainingEvent_Registration_Overview.text40",
                                                class: "mx-name-text40 pageheader-title spacing-outer-bottom",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Registrations for the course " }, "args": {} }
                                                  })
                                                ]),
                                                renderMode: "h1"
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p.MyFirstModule.TrainingEvent_Registration_Overview.text39",
                                                $widgetId: "p.MyFirstModule.TrainingEvent_Registration_Overview.text39",
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
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Div,
                                        {
                                          key: "p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid2$row0$column1",
                                          $widgetId: "p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid2$row0$column1",
                                          class: "col-lg-auto col-md-auto col-auto",
                                          style: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $ConditionalVisibilityWrapper,
                                              {
                                                key: "p.MyFirstModule.TrainingEvent_Registration_Overview.actionButton2$visibility",
                                                $widgetId: "p.MyFirstModule.TrainingEvent_Registration_Overview.actionButton2$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ActionButton,
                                                    {
                                                      key: "p.MyFirstModule.TrainingEvent_Registration_Overview.actionButton2",
                                                      $widgetId: "p.MyFirstModule.TrainingEvent_Registration_Overview.actionButton2",
                                                      buttonId: "p.MyFirstModule.TrainingEvent_Registration_Overview.actionButton2",
                                                      class: "mx-name-actionButton2",
                                                      style: void 0,
                                                      tabIndex: void 0,
                                                      renderType: "button",
                                                      role: void 0,
                                                      buttonClass: "btn-primary",
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
                                                        "action": { "type": "createObject", "argMap": {}, "config": { "entity": "MyFirstModule.Registration", "operationId": "r+ipPQnKgVm96S0qvuPi5g", "pageSettings": { "name": "MyFirstModule/Registration_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator"] }, "allowedRoles": ["Administrator"], "objectParameter": "param$Registration" }, "disabledDuringExecution": true },
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
                                    key: "p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid2$row1",
                                    $widgetId: "p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid2$row1",
                                    class: "row",
                                    style: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Div,
                                        {
                                          key: "p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid2$row1$column0",
                                          $widgetId: "p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid2$row1$column0",
                                          class: "col-lg col-md col",
                                          style: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Gallery,
                                              {
                                                key: "p.MyFirstModule.TrainingEvent_Registration_Overview.gallery1",
                                                $widgetId: "p.MyFirstModule.TrainingEvent_Registration_Overview.gallery1",
                                                filtersPlaceholder: void 0,
                                                datasource: DatabaseObjectListProperty({
                                                  "dataSourceId": "p.4",
                                                  "entity": "MyFirstModule.Registration",
                                                  "scope": "$TrainingEvent",
                                                  "operationId": "mSmulZTCqVegmzxNVYryFw",
                                                  "sort": [],
                                                  "arguments": {
                                                    "TrainingEvent": [
                                                      "$TrainingEvent"
                                                    ],
                                                    "CurrentObject": [
                                                      "$TrainingEvent"
                                                    ]
                                                  },
                                                  "constraints": { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "MyFirstModule.Registration_TrainingEvent", "context": "MyFirstModule.Registration", "attributeType": "ObjectReference" }, { "type": "variable", "name": "TrainingEvent" }] }
                                                }),
                                                itemSelectionMode: "clear",
                                                content: TemplatedWidgetProperty({
                                                  "dataSourceId": "p.4",
                                                  "editable": false,
                                                  "children": () => [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Text,
                                                      {
                                                        key: "p.MyFirstModule.TrainingEvent_Registration_Overview.text1",
                                                        $widgetId: "p.MyFirstModule.TrainingEvent_Registration_Overview.text1",
                                                        class: "mx-name-text1",
                                                        style: void 0,
                                                        caption: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Name: " }, { "type": "variable", "variable": "currentObject", "path": "MyFirstModule.Registration_Trainee/MyFirstModule.Trainee/Name" }] }, { "type": "literal", "value": "\r\nRegistration Number: " }] }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Number" }, { "type": "literal", "value": "{}" }] }] }, { "type": "literal", "value": "\r\nRegistration date: " }] }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Date" }, { "type": "literal", "value": '{"type":"date"}' }] }] }, "args": { "currentObject": { "widget": "p.MyFirstModule.TrainingEvent_Registration_Overview.gallery1", "source": "object" } } }
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
                                                  "action": { "type": "openPage", "argMap": { "param$Registration": { "widget": "p.MyFirstModule.TrainingEvent_Registration_Overview.gallery1", "source": "object" } }, "config": { "name": "MyFirstModule/Registration_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                                  "abortOnServerValidation": false,
                                                  "dataSourceId": "p.4",
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
                                          key: "p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid2$row1$column1",
                                          $widgetId: "p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid2$row1$column1",
                                          class: "col-lg-auto col-md-auto col-auto",
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
                        ],
                        ariaHidden: false
                      }
                    ),
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.MyFirstModule.TrainingEvent_Registration_Overview.dataView1",
                        $widgetId: "p.MyFirstModule.TrainingEvent_Registration_Overview.dataView1",
                        class: "mx-name-dataView1 form-horizontal",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.38",
                          "scope": "$TrainingEvent",
                          "editable": true
                        }),
                        emptyMessage: TextProperty({
                          "value": selectTranslation([
                            ""
                          ])
                        }),
                        body: void 0,
                        hideFooter: true,
                        footer: void 0
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
  "Training event Registration Overview"
]);
const classes = "layout-atlas layout-atlas-responsive-default";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_Default.Main": region$Main
};

export { classes, content, style, title };
