import { reactExports, asPluginWidgets, selectTranslation } from '../index-CAr0kpKK.js';
import { Div, PageFragment, ExpressionProperty } from '../ScrollContainer-ClJHkivb.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-BhLF8XeL.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-1LJQJmcv.js';
import { DatabaseObjectListProperty } from '../XQdQuDNG-DSqxqUMm.js';
import { ListActionProperty } from '../ListActionProperty-CCfw0mXv.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-kWEqX0z9.js';
import { WebIconProperty } from '../WebIconProperty-B_4QSw2H.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-D3VnlN1I.js';
import { Container } from '../Image-ttRkd0pN.js';
import { DataView } from '../DataView-BOhFdS09.js';
import { GalleryWidgetModule } from '../Gallery-Br7hZzBi.js';
import { Text } from '../Text-DNEB1YEo.js';
import { content as content$1 } from '../Atlas_Core.Atlas_Default-BdfuKSB2.js';
import '../BkqAssms-UB_bkK2K.js';
import '../DmsI6saM-DYa5cVH3.js';
import '../InlineText-wnyvwc3J.js';
import '../ListExpressionProperty-BAWskYNZ.js';
import '../WebStaticImageProperty-Cmx5tQtA.js';
import '../FeedbackModule.ACT_Open_Feedback_Modal-Cg7QdmhI.js';

const React = { createElement: reactExports.createElement };
const Gallery = Object.getOwnPropertyDescriptor(GalleryWidgetModule, "Gallery")?.value || Object.getOwnPropertyDescriptor(GalleryWidgetModule, "default")?.value;
const { $Div, $DataView, $Container, $ActionButton, $Text, $ConditionalVisibilityWrapper, $Gallery } = asPluginWidgets({ Div, DataView, Container, ActionButton, Text, ConditionalVisibilityWrapper, Gallery });
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
                      $DataView,
                      {
                        key: "p.MyFirstModule.TrainingEvent_Registration_Overview.dataView1",
                        $widgetId: "p.MyFirstModule.TrainingEvent_Registration_Overview.dataView1",
                        class: "mx-name-dataView1 form-horizontal",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.13",
                          "scope": "$TrainingEvent",
                          "editable": true
                        }),
                        emptyMessage: TextProperty({
                          "value": selectTranslation([
                            ""
                          ])
                        }),
                        body: [
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
                                                      class: "mx-name-text40 pageheader-title",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Registrations for the " }, { "type": "variable", "variable": "TrainingEvent", "path": "MyFirstModule.TrainingEvent_Course/MyFirstModule.Course/Title" }] }, { "type": "literal", "value": " on " }] }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "StartDate" }, { "type": "literal", "value": '{"type":"date"}' }] }] }, "args": { "TrainingEvent": { "widget": "$TrainingEvent", "source": "object" }, "currentObject": { "widget": "p.MyFirstModule.TrainingEvent_Registration_Overview.dataView1", "source": "object" } } }
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
                                                                "expression": { "expr": { "type": "literal", "value": "Action" }, "args": {} }
                                                              })
                                                            ]),
                                                            tooltip: TextProperty({
                                                              "value": selectTranslation([
                                                                ""
                                                              ])
                                                            }),
                                                            icon: void 0,
                                                            action: ActionProperty({
                                                              "action": { "type": "createObject", "argMap": { "$object": { "widget": "$TrainingEvent", "source": "object" } }, "config": { "association": "MyFirstModule.Registration_TrainingEvent", "entity": "MyFirstModule.Registration", "operationId": "7cnktrZAOFKqPwN1uhUObw", "pageSettings": { "name": "MyFirstModule/Registration_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator"] }, "allowedRoles": ["Administrator"], "objectParameter": "param$Registration" }, "disabledDuringExecution": true },
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
                              ],
                              ariaHidden: false
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $Gallery,
                            {
                              key: "p.MyFirstModule.TrainingEvent_Registration_Overview.gallery1",
                              $widgetId: "p.MyFirstModule.TrainingEvent_Registration_Overview.gallery1",
                              filtersPlaceholder: void 0,
                              datasource: DatabaseObjectListProperty({
                                "dataSourceId": "p.4",
                                "entity": "MyFirstModule.Registration",
                                "scope": "p.MyFirstModule.TrainingEvent_Registration_Overview.dataView1",
                                "operationId": "7E6GV6tU8V6sJW3utnYsTw",
                                "sort": [],
                                "arguments": {
                                  "currentObject": [
                                    "$TrainingEvent"
                                  ],
                                  "CurrentObject": [
                                    "$TrainingEvent"
                                  ]
                                },
                                "constraints": { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "MyFirstModule.Registration_TrainingEvent", "context": "MyFirstModule.Registration", "attributeType": "ObjectReference" }, { "type": "variable", "name": "currentObject" }] }
                              }),
                              itemSelectionMode: "clear",
                              keepSelection: false,
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
                                          "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Name: " }, { "type": "variable", "variable": "currentObject", "path": "MyFirstModule.Registration_Trainee/MyFirstModule.Trainee/Name" }] }, { "type": "literal", "value": "\r\nRegistration number: " }] }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Number" }, { "type": "literal", "value": "{}" }] }] }, { "type": "literal", "value": "\r\nRegistration date: " }] }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Date" }, { "type": "literal", "value": '{"type":"date"}' }] }] }, "args": { "currentObject": { "widget": "p.MyFirstModule.TrainingEvent_Registration_Overview.gallery1", "source": "object" } } }
                                        })
                                      ]),
                                      renderMode: "span"
                                    }
                                  )
                                ]
                              }),
                              refreshIndicator: false,
                              desktopItems: 1,
                              tabletItems: 1,
                              phoneItems: 1,
                              pageSize: 20,
                              pagination: "buttons",
                              showTotalCount: false,
                              showPagingButtons: "always",
                              pagingPosition: "bottom",
                              loadMoreButtonCaption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Load More" }, "args": {} }
                                })
                              ]),
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
                              stateStorageType: "attribute",
                              storeFilters: true,
                              storeSort: true,
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
                              class: "mx-name-gallery1",
                              style: void 0,
                              tabIndex: void 0
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
  "Training event Registration Overview"
]);
const classes = "layout-atlas layout-atlas-responsive-default";
const autofocus = "off";
const style = {};
const parameters = { "$TrainingEvent": "object" };
const content = {
  ...content$1,
  "Atlas_Core.Atlas_Default.Main": region$Main
};

export { autofocus, classes, content, parameters, style, title };
