import { useIsFirstRender, reactExports, contains, attribute, literal, or, jsxRuntimeExports, classNames, translate, getStaticResourceUrl, asPluginWidgets, selectTranslation } from '../index-D54rfXjv.js';
import { Div, PageFragment, ExpressionProperty } from '../ScrollContainer-BjzP0wD4.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-Cg_9OV9E.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-CVc3g1qa.js';
import { DatabaseObjectListProperty } from '../XQdQuDNG-MasuQoi0.js';
import { ListActionProperty } from '../ListActionProperty-DOOx3qNN.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-DDSTmm8l.js';
import { WebIconProperty } from '../WebIconProperty-BMRF9qCt.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-Hlwkz0qB.js';
import { Container } from '../Image-DBqlkM53.js';
import { DataView } from '../DataView-CxBpf6ZR.js';
import { Text } from '../Text-Dwd-U4AU.js';
import { content as content$1 } from '../Atlas_Core.Atlas_Default-Bd4fJsXP.js';
import '../BkqAssms-AUPua_wR.js';
import '../DmsI6saM-CRBfA3bF.js';
import '../InlineText-rQyIsJj9.js';
import '../ListExpressionProperty-iDZDI-u-.js';
import '../WebStaticImageProperty-BT2Uh9-H.js';
import '../FeedbackModule.ACT_Open_Feedback_Modal-D3zrta9x.js';

function ListView(props) {
  useIsFirstRender() && props.listValue.limit === Number.POSITIVE_INFINITY && 0 !== props.pageSize && props.listValue.setLimit(props.pageSize);
  const [isLoadingMore, setIsLoadingMore] = reactExports.useState(false), dataAtLastLoadMore = reactExports.useRef();
  if (!isLoadingMore || "available" === props.listValue.status && props.listValue.items === dataAtLastLoadMore.current || setIsLoadingMore(false), "available" === props.listValue.status && props.listValue.items && props.selection) {
    const currentSelection = props.selection.value?.[0], fixedSelection = props.listValue.items[0]?.id;
    currentSelection !== fixedSelection && props.listValue.items.every((i) => i.id !== currentSelection) && props.selection.setValue(fixedSelection ? [fixedSelection] : void 0);
  }
  const [searchValue, setSearchValue] = reactExports.useState(getSearchValueFromFilter);
  reactExports.useEffect(() => setSearchValue(getSearchValueFromFilter()), [props.listValue.filter]), reactExports.useEffect(function() {
    const trimmedSearchValue = searchValue.trim();
    if (trimmedSearchValue === getSearchValueFromFilter())
      return;
    clearTimeout(searchTimeout.current), searchTimeout.current = window.setTimeout(() => {
      const searchExpressions = "" !== trimmedSearchValue ? props.searchAttributes.map((s) => contains(attribute(s.id), literal(trimmedSearchValue))) : [], filter = 0 === searchExpressions.length ? void 0 : 1 === searchExpressions.length ? searchExpressions[0] : or(...searchExpressions);
      props.listValue.setFilter(filter);
    }, 500);
  }, [searchValue]);
  const searchTimeout = reactExports.useRef(), contentProps = { listValue: props.listValue, itemTemplate: props.itemTemplate, selection: props.selection, onClick: props.onClick, isLoadingMore };
  return jsxRuntimeExports.jsxs("div", { className: classNames("mx-listview", props.class, { "mx-listview-clickable": null != props.onClick }), style: props.style, children: [props.searchAttributes && jsxRuntimeExports.jsxs("div", { className: "mx-listview-searchbar", children: [jsxRuntimeExports.jsx("input", { type: "text", placeholder: translate("mxui.widget.ListView", "search"), className: "form-control", value: searchValue, onChange: (e) => setSearchValue(e.target.value), "aria-label": translate("mxui.widget.ListView", "search") }), jsxRuntimeExports.jsx("button", { className: "btn mx-button", onClick: () => {
    "" !== searchValue ? setSearchValue("") : (props.listValue.reload(), 0 !== props.pageSize && props.listValue.setLimit(props.pageSize));
  }, "aria-label": translate("mxui.widget.ListView", "refresh"), title: translate("mxui.widget.ListView", "refresh"), children: jsxRuntimeExports.jsx("span", { className: classNames("mx-icon-filled", searchValue ? "mx-icon-remove" : "mx-icon-refresh") }) })] }), reactExports.useMemo(() => jsxRuntimeExports.jsx(ListViewContent, { ...contentProps }), Object.values(contentProps)), props.listValue.hasMoreItems && !isLoadingMore && jsxRuntimeExports.jsxs("button", { type: "button", className: "btn mx-button mx-listview-loadMore", onClick: function(e) {
    e.stopPropagation(), props.listValue.setLimit(props.listValue.limit + props.pageSize), setIsLoadingMore(true), dataAtLastLoadMore.current = props.listValue.items;
  }, children: [jsxRuntimeExports.jsx("span", { className: "mx-icon-filled mx-icon-repeat" }), " ", translate("mxui.widget.ListView", "load_more")] })] });
  function getSearchValueFromFilter() {
    const filter = props.listValue.filter;
    if (void 0 !== filter) {
      const condition = "or" === filter.name ? filter.args[0] : filter;
      if ("contains" === condition.name && "string" === condition.arg2.valueType)
        return condition.arg2.value;
    }
    return "";
  }
}
function ListViewContent(props) {
  return jsxRuntimeExports.jsxs("ul", { children: [0 === props.listValue.items?.length && jsxRuntimeExports.jsx("li", { className: "mx-listview-empty", children: jsxRuntimeExports.jsx("label", { children: translate("mxui.widget.ListView", "no_items") }) }), (props.listValue.items ?? []).map((item, index) => {
    const selection = props.selection, onClick = props.onClick?.get(item), clickEventHandler = onClick ? (e) => function(e2, action) {
      e2.stopPropagation(), !action.canExecute || action.disabledDuringExecution && action.isExecuting || action.execute();
    }(e, onClick) : selection ? () => function(item2, selection2) {
      selection2.value?.includes(item2.id) || selection2.setValue([item2.id]);
    }(item, selection) : void 0;
    return jsxRuntimeExports.jsx("li", { className: classNames(`mx-name-index-${index}`, { selected: selection?.value?.includes(item.id) }), tabIndex: clickEventHandler ? 0 : -1, role: clickEventHandler ? "button" : void 0, onClick: clickEventHandler, onKeyDown: clickEventHandler ? (e) => function(e2, clickEventHandler2) {
      "Enter" !== e2.key && " " !== e2.key || (e2.preventDefault(), clickEventHandler2(e2));
    }(e, clickEventHandler) : void 0, children: jsxRuntimeExports.jsx("div", { className: "mx-dataview", "data-focusindex": "0", children: jsxRuntimeExports.jsx("div", { className: "mx-dataview-content", children: props.itemTemplate?.get(item) }) }) }, item.id);
  }), props.isLoadingMore && jsxRuntimeExports.jsx("li", { className: "mx-listview-loading", children: jsxRuntimeExports.jsx("img", { src: getStaticResourceUrl("mxclientsystem/images/loading.gif") }) })] });
}

const React = { createElement: reactExports.createElement };
const { $Div, $DataView, $Container, $ActionButton, $Text, $ConditionalVisibilityWrapper, $ListView } = asPluginWidgets({ Div, DataView, Container, ActionButton, Text, ConditionalVisibilityWrapper, ListView });
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
                          "scope": "$TrainingEvent_3",
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
                                                          "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Registrations for the " }, { "type": "variable", "variable": "currentObject", "path": "MyFirstModule.TrainingEvent_Course/MyFirstModule.Course/Title" }] }, { "type": "literal", "value": " on " }] }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "StartDate" }, { "type": "literal", "value": '{"type":"date"}' }] }] }, "args": { "currentObject": { "widget": "p.MyFirstModule.TrainingEvent_Registration_Overview.dataView1", "source": "object" } } }
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
                                                              "action": { "type": "createObject", "argMap": { "$object": { "widget": "$TrainingEvent_3", "source": "object" } }, "config": { "association": "MyFirstModule.Registration_TrainingEvent", "entity": "MyFirstModule.Registration", "operationId": "C1RThn3/xV2ycaFMlntzzg", "pageSettings": { "name": "MyFirstModule/Registration_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator"] }, "allowedRoles": ["Administrator"], "objectParameter": "param$Registration" }, "disabledDuringExecution": true },
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
                                                    $ListView,
                                                    {
                                                      key: "p.MyFirstModule.TrainingEvent_Registration_Overview.listView1",
                                                      $widgetId: "p.MyFirstModule.TrainingEvent_Registration_Overview.listView1",
                                                      class: "mx-name-listView1",
                                                      style: void 0,
                                                      listValue: DatabaseObjectListProperty({
                                                        "dataSourceId": "p.4",
                                                        "entity": "MyFirstModule.Registration",
                                                        "scope": "p.MyFirstModule.TrainingEvent_Registration_Overview.dataView1",
                                                        "operationId": "Ftwbn5j7q1qZi01v/nhpuA",
                                                        "sort": [],
                                                        "arguments": {
                                                          "currentObject": [
                                                            "$TrainingEvent_3"
                                                          ],
                                                          "CurrentObject": [
                                                            "$TrainingEvent_3"
                                                          ]
                                                        },
                                                        "constraints": { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "MyFirstModule.Registration_TrainingEvent", "context": "MyFirstModule.Registration", "attributeType": "ObjectReference" }, { "type": "variable", "name": "currentObject" }] }
                                                      }),
                                                      itemTemplate: TemplatedWidgetProperty({
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
                                                                  "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Name: " }, { "type": "variable", "variable": "currentObject", "path": "MyFirstModule.Registration_Trainee/MyFirstModule.Trainee/Name" }] }, { "type": "literal", "value": "\r\nRegistration number: " }] }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Number" }, { "type": "literal", "value": "{}" }] }] }, { "type": "literal", "value": "\r\nDate registered: " }] }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Date" }, { "type": "literal", "value": '{"type":"date"}' }] }] }, "args": { "currentObject": { "widget": "p.MyFirstModule.TrainingEvent_Registration_Overview.listView1", "source": "object" } } }
                                                                })
                                                              ]),
                                                              renderMode: "span"
                                                            }
                                                          )
                                                        ]
                                                      }),
                                                      onClick: ListActionProperty({
                                                        "action": { "type": "openPage", "argMap": { "param$Registration": { "widget": "p.MyFirstModule.TrainingEvent_Registration_Overview.listView1", "source": "object" } }, "config": { "name": "MyFirstModule/Registration_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                        "abortOnServerValidation": false,
                                                        "dataSourceId": "p.4"
                                                      }),
                                                      pageSize: 10
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
const autofocus = "off";
const style = {};
const parameters = { "$TrainingEvent": "object", "$TrainingEvent_2": "object", "$TrainingEvent_3": "object" };
const content = {
  ...content$1,
  "Atlas_Core.Atlas_Default.Main": region$Main
};

export { autofocus, classes, content, parameters, style, title };
