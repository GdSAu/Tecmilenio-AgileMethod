import { reactExports, asPluginWidgets, addEnumerations, selectTranslation } from '../index-B8bUhI8E.js';
import { Div, PageFragment, ExpressionProperty } from '../ScrollContainer-CdywZc9i.js';
import { DatabaseObjectListProperty } from '../CESNSUMX-CEo4dwQO.js';
import { ListAttributeProperty } from '../ListAttributeProperty-gX5GX4rF.js';
import { ListExpressionProperty } from '../ListExpressionProperty-CWG0RJeD.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-DBQnZxmk.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-KPRTruOk.js';
import { Container, Text } from '../Image-Bk8op5TL.js';
import { DatagridWidgetModule, content as content$1 } from '../Atlas_Core.Atlas_Default-erxUhok4.js';
import { DatagridDateFilterWidgetModule, DatagridTextFilterWidgetModule } from '../DatagridTextFilter-DsLQjviO.js';
import { DatagridDropdownFilterWidgetModule } from '../DatagridDropdownFilter-zQtM4ZEA.js';
import '../1OX6EehJ-ChqR_l5F.js';
import '../ActionButton-D_YBiLZ6.js';
import '../BI1aYen2-B3U-e8vs.js';
import '../InlineText-caQaZXpr.js';
import '../WebIconProperty-DTP8fO1w.js';
import '../WebStaticImageProperty-DfADbgjj.js';
import '../FeedbackModule.ACT_Open_Feedback_Modal-C1halrD4.js';

const React = { createElement: reactExports.createElement };
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;
const DatagridDateFilter = Object.getOwnPropertyDescriptor(DatagridDateFilterWidgetModule, "DatagridDateFilter")?.value || Object.getOwnPropertyDescriptor(DatagridDateFilterWidgetModule, "default")?.value;
const DatagridDropdownFilter = Object.getOwnPropertyDescriptor(DatagridDropdownFilterWidgetModule, "DatagridDropdownFilter")?.value || Object.getOwnPropertyDescriptor(DatagridDropdownFilterWidgetModule, "default")?.value;
const DatagridTextFilter = Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "DatagridTextFilter")?.value || Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "default")?.value;
const { $Container, $Div, $Text, $Datagrid, $DatagridTextFilter, $DatagridDateFilter, $ConditionalVisibilityWrapper, $DatagridDropdownFilter } = asPluginWidgets({ Container, Div, Text, Datagrid, DatagridTextFilter, DatagridDateFilter, ConditionalVisibilityWrapper, DatagridDropdownFilter });
addEnumerations({
  "System.EventStatus": [
    [
      "Running",
      selectTranslation([
        "Running"
      ])
    ],
    [
      "Completed",
      selectTranslation([
        "Completed"
      ])
    ],
    [
      "Error",
      selectTranslation([
        "Error"
      ])
    ],
    [
      "Stopped",
      selectTranslation([
        "Stopped"
      ])
    ]
  ]
});
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Container,
    {
      key: "p9.Administration.ScheduledEvents.container1",
      $widgetId: "p9.Administration.ScheduledEvents.container1",
      class: "mx-name-container1 pageheader pageheader-fullwidth",
      style: void 0,
      renderMode: "div",
      onClick: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p9.Administration.ScheduledEvents.layoutGrid1",
            $widgetId: "p9.Administration.ScheduledEvents.layoutGrid1",
            class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p9.Administration.ScheduledEvents.layoutGrid1$row0",
                  $widgetId: "p9.Administration.ScheduledEvents.layoutGrid1$row0",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p9.Administration.ScheduledEvents.layoutGrid1$row0$column0",
                        $widgetId: "p9.Administration.ScheduledEvents.layoutGrid1$row0$column0",
                        class: "col-lg-12 col-md-12 col-12",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p9.Administration.ScheduledEvents.label1",
                              $widgetId: "p9.Administration.ScheduledEvents.label1",
                              class: "mx-name-label1 pageheader-title",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Scheduled Events" }, "args": {} }
                                })
                              ]),
                              renderMode: "h2"
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
      key: "p9.Administration.ScheduledEvents.layoutGrid2",
      $widgetId: "p9.Administration.ScheduledEvents.layoutGrid2",
      class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p9.Administration.ScheduledEvents.layoutGrid2$row0",
            $widgetId: "p9.Administration.ScheduledEvents.layoutGrid2$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p9.Administration.ScheduledEvents.layoutGrid2$row0$column0",
                  $widgetId: "p9.Administration.ScheduledEvents.layoutGrid2$row0$column0",
                  class: "col-lg-12 col-md-12 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Datagrid,
                      {
                        key: "p9.Administration.ScheduledEvents.dataGrid21",
                        $widgetId: "p9.Administration.ScheduledEvents.dataGrid21",
                        advanced: false,
                        datasource: DatabaseObjectListProperty({
                          "dataSourceId": "p9.10",
                          "entity": "System.ScheduledEventInformation",
                          "operationId": "QZEDbpb5kVOHvYX1Qd5+wQ",
                          "sort": [
                            [
                              "StartTime",
                              "desc"
                            ]
                          ]
                        }),
                        refreshInterval: 0,
                        itemSelectionMethod: "checkbox",
                        showSelectAllToggle: true,
                        columns: [
                          {
                            "showContentAs": "attribute",
                            "attribute": ListAttributeProperty({
                              "path": "",
                              "entity": "System.ScheduledEventInformation",
                              "attribute": "Name",
                              "attributeType": "String",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p9.10",
                              "isList": false
                            }),
                            "content": void 0,
                            "dynamicText": selectTranslation([
                              void 0
                            ]),
                            "header": selectTranslation([
                              ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Name" }, "args": {} }
                              })
                            ]),
                            "tooltip": selectTranslation([
                              void 0
                            ]),
                            "filter": [
                              /* @__PURE__ */ React.createElement(
                                $DatagridTextFilter,
                                {
                                  key: "p9.Administration.ScheduledEvents.textFilter1",
                                  $widgetId: "p9.Administration.ScheduledEvents.textFilter1",
                                  defaultValue: void 0,
                                  defaultFilter: "contains",
                                  placeholder: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                  ]),
                                  adjustable: true,
                                  delay: 500,
                                  onChange: void 0,
                                  screenReaderButtonCaption: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                  ]),
                                  screenReaderInputCaption: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                  ]),
                                  attrChoice: "auto",
                                  linkedDs: void 0,
                                  attributes: [],
                                  class: "mx-name-textFilter1",
                                  style: void 0,
                                  tabIndex: void 0
                                }
                              )
                            ],
                            "visible": ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                            }),
                            "sortable": true,
                            "resizable": true,
                            "draggable": true,
                            "hidable": "yes",
                            "width": "autoFill",
                            "size": 1,
                            "alignment": "left",
                            "wrapText": false,
                            "minWidth": "auto",
                            "minWidthLimit": 100,
                            "exportValue": selectTranslation([
                              void 0
                            ]),
                            "allowEventPropagation": true
                          },
                          {
                            "showContentAs": "attribute",
                            "attribute": ListAttributeProperty({
                              "path": "",
                              "entity": "System.ScheduledEventInformation",
                              "attribute": "Description",
                              "attributeType": "String",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p9.10",
                              "isList": false
                            }),
                            "content": void 0,
                            "dynamicText": selectTranslation([
                              void 0
                            ]),
                            "header": selectTranslation([
                              ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Description" }, "args": {} }
                              })
                            ]),
                            "tooltip": selectTranslation([
                              void 0
                            ]),
                            "filter": [
                              /* @__PURE__ */ React.createElement(
                                $DatagridTextFilter,
                                {
                                  key: "p9.Administration.ScheduledEvents.textFilter2",
                                  $widgetId: "p9.Administration.ScheduledEvents.textFilter2",
                                  defaultValue: void 0,
                                  defaultFilter: "contains",
                                  placeholder: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                  ]),
                                  adjustable: true,
                                  delay: 500,
                                  onChange: void 0,
                                  screenReaderButtonCaption: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                  ]),
                                  screenReaderInputCaption: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                  ]),
                                  attrChoice: "auto",
                                  linkedDs: void 0,
                                  attributes: [],
                                  class: "mx-name-textFilter2",
                                  style: void 0,
                                  tabIndex: void 0
                                }
                              )
                            ],
                            "visible": ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                            }),
                            "sortable": true,
                            "resizable": true,
                            "draggable": true,
                            "hidable": "yes",
                            "width": "autoFill",
                            "size": 1,
                            "alignment": "left",
                            "wrapText": false,
                            "minWidth": "auto",
                            "minWidthLimit": 100,
                            "exportValue": selectTranslation([
                              void 0
                            ]),
                            "allowEventPropagation": true
                          },
                          {
                            "showContentAs": "dynamicText",
                            "attribute": ListAttributeProperty({
                              "path": "",
                              "entity": "System.ScheduledEventInformation",
                              "attribute": "StartTime",
                              "attributeType": "DateTime",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p9.10",
                              "isList": false
                            }),
                            "content": void 0,
                            "dynamicText": selectTranslation([
                              ListExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "StartTime" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "currentObject": { "widget": "p9.Administration.ScheduledEvents.dataGrid21", "source": "object" } } },
                                "dataSourceId": "p9.10"
                              })
                            ]),
                            "header": selectTranslation([
                              ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Start time" }, "args": {} }
                              })
                            ]),
                            "tooltip": selectTranslation([
                              void 0
                            ]),
                            "filter": [
                              /* @__PURE__ */ React.createElement(
                                $DatagridDateFilter,
                                {
                                  key: "p9.Administration.ScheduledEvents.dateFilter1",
                                  $widgetId: "p9.Administration.ScheduledEvents.dateFilter1",
                                  defaultValue: void 0,
                                  defaultStartDate: void 0,
                                  defaultEndDate: void 0,
                                  defaultFilter: "equal",
                                  placeholder: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                  ]),
                                  adjustable: true,
                                  onChange: void 0,
                                  screenReaderButtonCaption: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                  ]),
                                  screenReaderCalendarCaption: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                  ]),
                                  screenReaderInputCaption: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                  ]),
                                  attrChoice: "auto",
                                  linkedDs: void 0,
                                  attributes: [],
                                  class: "mx-name-dateFilter1",
                                  style: void 0,
                                  tabIndex: void 0
                                }
                              )
                            ],
                            "visible": ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                            }),
                            "sortable": true,
                            "resizable": true,
                            "draggable": true,
                            "hidable": "yes",
                            "width": "autoFill",
                            "size": 1,
                            "alignment": "left",
                            "wrapText": false,
                            "minWidth": "auto",
                            "minWidthLimit": 100,
                            "exportValue": selectTranslation([
                              void 0
                            ]),
                            "allowEventPropagation": true
                          },
                          {
                            "showContentAs": "customContent",
                            "attribute": ListAttributeProperty({
                              "path": "",
                              "entity": "System.ScheduledEventInformation",
                              "attribute": "Status",
                              "attributeType": "Enum",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p9.10",
                              "isList": false
                            }),
                            "content": TemplatedWidgetProperty({
                              "dataSourceId": "p9.10",
                              "editable": false,
                              "children": () => [
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p9.Administration.ScheduledEvents.text2$visibility",
                                    $widgetId: "p9.Administration.ScheduledEvents.text2$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Status" }, { "type": "literal", "value": "Running" }] }, "args": { "currentObject": { "widget": "p9.Administration.ScheduledEvents.dataGrid21", "source": "object" } } }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p9.Administration.ScheduledEvents.text2",
                                          $widgetId: "p9.Administration.ScheduledEvents.text2",
                                          class: "mx-name-text2 badge label-primary",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Running" }, "args": {} }
                                            })
                                          ]),
                                          renderMode: "span"
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p9.Administration.ScheduledEvents.text1$visibility",
                                    $widgetId: "p9.Administration.ScheduledEvents.text1$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Status" }, { "type": "literal", "value": "Completed" }] }, "args": { "currentObject": { "widget": "p9.Administration.ScheduledEvents.dataGrid21", "source": "object" } } }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p9.Administration.ScheduledEvents.text1",
                                          $widgetId: "p9.Administration.ScheduledEvents.text1",
                                          class: "mx-name-text1 badge label-success",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Completed" }, "args": {} }
                                            })
                                          ]),
                                          renderMode: "span"
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p9.Administration.ScheduledEvents.text3$visibility",
                                    $widgetId: "p9.Administration.ScheduledEvents.text3$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Status" }, { "type": "literal", "value": "Error" }] }, "args": { "currentObject": { "widget": "p9.Administration.ScheduledEvents.dataGrid21", "source": "object" } } }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p9.Administration.ScheduledEvents.text3",
                                          $widgetId: "p9.Administration.ScheduledEvents.text3",
                                          class: "mx-name-text3 badge label-danger",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Error" }, "args": {} }
                                            })
                                          ]),
                                          renderMode: "span"
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p9.Administration.ScheduledEvents.text4$visibility",
                                    $widgetId: "p9.Administration.ScheduledEvents.text4$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Status" }, { "type": "literal", "value": "Stopped" }] }, "args": { "currentObject": { "widget": "p9.Administration.ScheduledEvents.dataGrid21", "source": "object" } } }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p9.Administration.ScheduledEvents.text4",
                                          $widgetId: "p9.Administration.ScheduledEvents.text4",
                                          class: "mx-name-text4 badge label-secondary",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Stopped" }, "args": {} }
                                            })
                                          ]),
                                          renderMode: "span"
                                        }
                                      )
                                    ]
                                  }
                                )
                              ]
                            }),
                            "dynamicText": selectTranslation([
                              void 0
                            ]),
                            "header": selectTranslation([
                              ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Status" }, "args": {} }
                              })
                            ]),
                            "tooltip": selectTranslation([
                              void 0
                            ]),
                            "filter": [
                              /* @__PURE__ */ React.createElement(
                                $DatagridDropdownFilter,
                                {
                                  key: "p9.Administration.ScheduledEvents.drop_downFilter1",
                                  $widgetId: "p9.Administration.ScheduledEvents.drop_downFilter1",
                                  auto: true,
                                  defaultValue: void 0,
                                  filterOptions: [],
                                  emptyOptionCaption: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                  ]),
                                  multiSelect: false,
                                  onChange: void 0,
                                  ariaLabel: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                  ]),
                                  filterable: false,
                                  clearable: true,
                                  selectedItemsStyle: "text",
                                  selectionMethod: "checkbox",
                                  baseType: "attr",
                                  linkedDs: void 0,
                                  attrChoice: "auto",
                                  refOptions: void 0,
                                  refCaptionSource: "attr",
                                  fetchOptionsLazy: false,
                                  emptySelectionCaption: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Select" }, "args": {} }
                                    })
                                  ]),
                                  filterInputPlaceholderCaption: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                                    })
                                  ]),
                                  class: "mx-name-drop_downFilter1",
                                  style: void 0,
                                  tabIndex: void 0
                                }
                              )
                            ],
                            "visible": ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                            }),
                            "sortable": true,
                            "resizable": true,
                            "draggable": true,
                            "hidable": "yes",
                            "width": "autoFill",
                            "size": 1,
                            "alignment": "left",
                            "wrapText": false,
                            "minWidth": "auto",
                            "minWidthLimit": 100,
                            "exportValue": selectTranslation([
                              void 0
                            ]),
                            "allowEventPropagation": true
                          },
                          {
                            "showContentAs": "dynamicText",
                            "attribute": ListAttributeProperty({
                              "path": "",
                              "entity": "System.ScheduledEventInformation",
                              "attribute": "EndTime",
                              "attributeType": "DateTime",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p9.10",
                              "isList": false
                            }),
                            "content": void 0,
                            "dynamicText": selectTranslation([
                              ListExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "EndTime" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "currentObject": { "widget": "p9.Administration.ScheduledEvents.dataGrid21", "source": "object" } } },
                                "dataSourceId": "p9.10"
                              })
                            ]),
                            "header": selectTranslation([
                              ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "End time" }, "args": {} }
                              })
                            ]),
                            "tooltip": selectTranslation([
                              void 0
                            ]),
                            "filter": [
                              /* @__PURE__ */ React.createElement(
                                $DatagridDateFilter,
                                {
                                  key: "p9.Administration.ScheduledEvents.dateFilter2",
                                  $widgetId: "p9.Administration.ScheduledEvents.dateFilter2",
                                  defaultValue: void 0,
                                  defaultStartDate: void 0,
                                  defaultEndDate: void 0,
                                  defaultFilter: "equal",
                                  placeholder: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                  ]),
                                  adjustable: true,
                                  onChange: void 0,
                                  screenReaderButtonCaption: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                  ]),
                                  screenReaderCalendarCaption: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                  ]),
                                  screenReaderInputCaption: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                  ]),
                                  attrChoice: "auto",
                                  linkedDs: void 0,
                                  attributes: [],
                                  class: "mx-name-dateFilter2",
                                  style: void 0,
                                  tabIndex: void 0
                                }
                              )
                            ],
                            "visible": ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                            }),
                            "sortable": true,
                            "resizable": true,
                            "draggable": true,
                            "hidable": "yes",
                            "width": "autoFill",
                            "size": 1,
                            "alignment": "left",
                            "wrapText": false,
                            "minWidth": "auto",
                            "minWidthLimit": 100,
                            "exportValue": selectTranslation([
                              void 0
                            ]),
                            "allowEventPropagation": true
                          }
                        ],
                        columnsFilterable: true,
                        pageSize: 20,
                        pagination: "buttons",
                        pagingPosition: "bottom",
                        showPagingButtons: "always",
                        showEmptyPlaceholder: "none",
                        emptyPlaceholder: void 0,
                        rowClass: void 0,
                        onClick: void 0,
                        onSelectionChange: void 0,
                        columnsSortable: true,
                        columnsResizable: true,
                        columnsDraggable: true,
                        columnsHidable: true,
                        filtersPlaceholder: void 0,
                        filterSectionTitle: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                          })
                        ]),
                        exportDialogLabel: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Export progress" }, "args": {} }
                          })
                        ]),
                        cancelExportLabel: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Cancel data export" }, "args": {} }
                          })
                        ]),
                        selectRowLabel: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Select row" }, "args": {} }
                          })
                        ]),
                        onClickTrigger: "single",
                        itemSelectionMode: "clear",
                        loadingType: "spinner",
                        showNumberOfRows: false,
                        loadMoreButtonCaption: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Load More" }, "args": {} }
                          })
                        ]),
                        configurationStorageType: "attribute",
                        storeFiltersInPersonalization: true,
                        keepSelection: false,
                        refreshIndicator: false,
                        selectAllRowsLabel: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Select all rows" }, "args": {} }
                          })
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
                        class: "mx-name-dataGrid21",
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
]);
const title = selectTranslation([
  "Scheduled Events"
]);
const classes = "layout-atlas layout-atlas-responsive-default";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_Default.Main": region$Main
};

export { classes, content, style, title };
