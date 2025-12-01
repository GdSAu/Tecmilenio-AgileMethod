import { reactExports, asPluginWidgets, selectTranslation } from '../index-B8bUhI8E.js';
import { Div, PageFragment, ExpressionProperty } from '../ScrollContainer-CdywZc9i.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-D_YBiLZ6.js';
import { DatabaseObjectListProperty } from '../CESNSUMX-CEo4dwQO.js';
import { ListAttributeProperty } from '../ListAttributeProperty-gX5GX4rF.js';
import { ListExpressionProperty } from '../ListExpressionProperty-CWG0RJeD.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-DBQnZxmk.js';
import { WebIconProperty } from '../WebIconProperty-DTP8fO1w.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-KPRTruOk.js';
import { Container, Text } from '../Image-Bk8op5TL.js';
import { DatagridWidgetModule, content as content$1 } from '../Atlas_Core.Atlas_Default-erxUhok4.js';
import { DatagridDateFilterWidgetModule, DatagridTextFilterWidgetModule } from '../DatagridTextFilter-DsLQjviO.js';
import '../1OX6EehJ-ChqR_l5F.js';
import '../BI1aYen2-B3U-e8vs.js';
import '../InlineText-caQaZXpr.js';
import '../WebStaticImageProperty-DfADbgjj.js';
import '../FeedbackModule.ACT_Open_Feedback_Modal-C1halrD4.js';

const React = { createElement: reactExports.createElement };
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;
const DatagridDateFilter = Object.getOwnPropertyDescriptor(DatagridDateFilterWidgetModule, "DatagridDateFilter")?.value || Object.getOwnPropertyDescriptor(DatagridDateFilterWidgetModule, "default")?.value;
const DatagridTextFilter = Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "DatagridTextFilter")?.value || Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "default")?.value;
const { $Container, $Div, $Text, $Datagrid, $DatagridTextFilter, $DatagridDateFilter, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Container, Div, Text, Datagrid, DatagridTextFilter, DatagridDateFilter, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Container,
    {
      key: "p12.Administration.ActiveSessions.container1",
      $widgetId: "p12.Administration.ActiveSessions.container1",
      class: "mx-name-container1 pageheader pageheader-fullwidth",
      style: void 0,
      renderMode: "div",
      onClick: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p12.Administration.ActiveSessions.layoutGrid1",
            $widgetId: "p12.Administration.ActiveSessions.layoutGrid1",
            class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p12.Administration.ActiveSessions.layoutGrid1$row0",
                  $widgetId: "p12.Administration.ActiveSessions.layoutGrid1$row0",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p12.Administration.ActiveSessions.layoutGrid1$row0$column0",
                        $widgetId: "p12.Administration.ActiveSessions.layoutGrid1$row0$column0",
                        class: "col-lg-12 col-md-12 col-12",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p12.Administration.ActiveSessions.label1",
                              $widgetId: "p12.Administration.ActiveSessions.label1",
                              class: "mx-name-label1 pageheader-title",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Active Sessions" }, "args": {} }
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
      key: "p12.Administration.ActiveSessions.layoutGrid2",
      $widgetId: "p12.Administration.ActiveSessions.layoutGrid2",
      class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p12.Administration.ActiveSessions.layoutGrid2$row0",
            $widgetId: "p12.Administration.ActiveSessions.layoutGrid2$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p12.Administration.ActiveSessions.layoutGrid2$row0$column0",
                  $widgetId: "p12.Administration.ActiveSessions.layoutGrid2$row0$column0",
                  class: "col-lg-12 col-md-12 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Datagrid,
                      {
                        key: "p12.Administration.ActiveSessions.dataGrid21",
                        $widgetId: "p12.Administration.ActiveSessions.dataGrid21",
                        advanced: false,
                        datasource: DatabaseObjectListProperty({
                          "dataSourceId": "p12.10",
                          "entity": "System.Session",
                          "operationId": "o2N8ntaZuFmBcWr/SW9p5w",
                          "sort": [
                            [
                              "System.Session_User/System.User/Name",
                              "asc"
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
                              "path": "System.Session_User/System.User",
                              "entity": "System.User",
                              "attribute": "Name",
                              "attributeType": "String",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p12.10",
                              "isList": false
                            }),
                            "content": void 0,
                            "dynamicText": selectTranslation([
                              void 0
                            ]),
                            "header": selectTranslation([
                              ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "User name" }, "args": {} }
                              })
                            ]),
                            "tooltip": selectTranslation([
                              void 0
                            ]),
                            "filter": [
                              /* @__PURE__ */ React.createElement(
                                $DatagridTextFilter,
                                {
                                  key: "p12.Administration.ActiveSessions.textFilter1",
                                  $widgetId: "p12.Administration.ActiveSessions.textFilter1",
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
                            "showContentAs": "dynamicText",
                            "attribute": ListAttributeProperty({
                              "path": "",
                              "entity": "System.Session",
                              "attribute": "LastActive",
                              "attributeType": "DateTime",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p12.10",
                              "isList": false
                            }),
                            "content": void 0,
                            "dynamicText": selectTranslation([
                              ListExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "LastActive" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "currentObject": { "widget": "p12.Administration.ActiveSessions.dataGrid21", "source": "object" } } },
                                "dataSourceId": "p12.10"
                              })
                            ]),
                            "header": selectTranslation([
                              ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Last active" }, "args": {} }
                              })
                            ]),
                            "tooltip": selectTranslation([
                              void 0
                            ]),
                            "filter": [
                              /* @__PURE__ */ React.createElement(
                                $DatagridDateFilter,
                                {
                                  key: "p12.Administration.ActiveSessions.dateFilter1",
                                  $widgetId: "p12.Administration.ActiveSessions.dateFilter1",
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
                              "entity": "System.Session",
                              "attribute": "LastActive",
                              "attributeType": "DateTime",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p12.10",
                              "isList": false
                            }),
                            "content": TemplatedWidgetProperty({
                              "dataSourceId": "p12.10",
                              "editable": false,
                              "children": () => [
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p12.Administration.ActiveSessions.actionButton1$visibility",
                                    $widgetId: "p12.Administration.ActiveSessions.actionButton1$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p12.Administration.ActiveSessions.actionButton1",
                                          $widgetId: "p12.Administration.ActiveSessions.actionButton1",
                                          buttonId: "p12.Administration.ActiveSessions.actionButton1",
                                          class: "mx-name-actionButton1 btn-lg",
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
                                              ""
                                            ])
                                          }),
                                          icon: WebIconProperty({
                                            "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-logout" }
                                          }),
                                          action: ActionProperty({
                                            "action": { "type": "deleteObject", "argMap": { "$object": { "widget": "p12.Administration.ActiveSessions.dataGrid21", "source": "object" } }, "config": { "closePage": false, "operationId": "bvu6z53hdl60gGhI7d0Yiw" }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                          })
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
                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                              })
                            ]),
                            "tooltip": selectTranslation([
                              void 0
                            ]),
                            "filter": void 0,
                            "visible": ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                            }),
                            "sortable": false,
                            "resizable": true,
                            "draggable": true,
                            "hidable": "no",
                            "width": "autoFit",
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
                        class: "mx-name-dataGrid21 table-hover",
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
  "Active Sessions"
]);
const classes = "layout-atlas layout-atlas-responsive-default";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_Default.Main": region$Main
};

export { classes, content, style, title };
