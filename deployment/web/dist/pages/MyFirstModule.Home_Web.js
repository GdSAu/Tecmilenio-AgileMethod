import { reactExports, jsxRuntimeExports, classNames, asPluginWidgets, Fragment, selectTranslation, PlaceholderProperty } from '../index-B8bUhI8E.js';
import { ScrollContainer, Div, Placeholder, ExpressionProperty, PageFragment } from '../ScrollContainer-CdywZc9i.js';
import { ActionProperty, TextProperty, ActionButton } from '../ActionButton-D_YBiLZ6.js';
import { WebIconProperty } from '../WebIconProperty-DTP8fO1w.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-KPRTruOk.js';
import { ImageWidgetModule, Container, Text } from '../Image-Bk8op5TL.js';
import { DatabaseObjectListProperty } from '../CESNSUMX-CEo4dwQO.js';
import { ListExpressionProperty } from '../ListExpressionProperty-CWG0RJeD.js';
import { WebStaticImageProperty } from '../WebStaticImageProperty-DfADbgjj.js';
import { useMenuActiveItem, preProcessMenus, createAnchor, LanguageSelectorWidgetModule, SprintrFeedbackWidgetModule, SidebarToggle, NavigationTree, ACT_Open_Feedback_Modal } from '../FeedbackModule.ACT_Open_Feedback_Modal-C1halrD4.js';
import '../InlineText-caQaZXpr.js';
import '../1OX6EehJ-ChqR_l5F.js';

function MenuBar(props) {
  const [activeItemId, setActiveItem] = useMenuActiveItem(), [expandedItemId, setExpandedItemId] = reactExports.useState();
  function onClick(menu) {
    menu.items?.length ? setExpandedItemId((oldExpanded) => oldExpanded !== menu.stableId ? menu.stableId : void 0) : (setActiveItem(menu), setExpandedItemId(void 0));
  }
  return reactExports.useEffect(() => {
    const onGlobalClick = () => setExpandedItemId(void 0);
    return document.addEventListener("click", onGlobalClick), () => document.removeEventListener("click", onGlobalClick);
  }, []), jsxRuntimeExports.jsx("div", { className: classNames("navbar", "navbar-default", "mx-navbar", props.class), style: props.style, tabIndex: -1, children: jsxRuntimeExports.jsx("ul", { className: "nav navbar-nav", role: "menu", children: preProcessMenus(props.menu).map((menu, index) => {
    const hasChildren = Boolean(menu.items?.length);
    return jsxRuntimeExports.jsxs("li", { className: classNames("mx-navbar-item", { dropdown: hasChildren, active: activeItemId === menu.stableId, open: expandedItemId === menu.stableId }), role: "none", children: [createAnchor(props.name, menu, expandedItemId === menu.stableId, onClick, hasChildren ? { children: jsxRuntimeExports.jsx("b", { className: "caret" }) } : {}), hasChildren && jsxRuntimeExports.jsx("ul", { className: "dropdown-menu mx-navbar-submenu", role: "menu", children: menu.items.map((subMenu, subIndex) => jsxRuntimeExports.jsx("li", { className: classNames("mx-navbar-subitem", { active: activeItemId === subMenu.stableId }), role: "none", children: createAnchor(props.name, subMenu, false, onClick) }, subIndex)) })] }, index);
  }) }) });
}

const React$1 = { createElement: reactExports.createElement };
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const LanguageSelector = Object.getOwnPropertyDescriptor(LanguageSelectorWidgetModule, "LanguageSelector")?.value || Object.getOwnPropertyDescriptor(LanguageSelectorWidgetModule, "default")?.value;
const SprintrFeedback = Object.getOwnPropertyDescriptor(SprintrFeedbackWidgetModule, "SprintrFeedback")?.value || Object.getOwnPropertyDescriptor(SprintrFeedbackWidgetModule, "default")?.value;
const { $ScrollContainer, $Fragment, $SprintrFeedback, $Div: $Div$1, $Container, $SidebarToggle, $Image, $MenuBar, $LanguageSelector, $NavigationTree, $Placeholder } = asPluginWidgets({ ScrollContainer, Fragment, SprintrFeedback, Div, Container, SidebarToggle, Image, MenuBar, LanguageSelector, NavigationTree, Placeholder });
const region$Main$1 = [
  /* @__PURE__ */ React$1.createElement(
    $ScrollContainer,
    {
      key: "l38.Atlas_Core.Atlas_TopBar.layoutContainer",
      $widgetId: "l38.Atlas_Core.Atlas_TopBar.layoutContainer",
      class: "mx-name-layoutContainer",
      style: void 0,
      scrollPerRegion: true,
      layoutMode: "sidebar",
      top: {
        "enabled": true,
        "content": [
          /* @__PURE__ */ React$1.createElement(
            $Fragment,
            {
              key: "l38.Atlas_Core.Atlas_TopBar.snippetCall1",
              $widgetId: "l38.Atlas_Core.Atlas_TopBar.snippetCall1",
              content: [
                /* @__PURE__ */ React$1.createElement(
                  $SprintrFeedback,
                  {
                    key: "l38.Atlas_Core.FeedbackWidget.feedback1",
                    $widgetId: "l38.Atlas_Core.FeedbackWidget.feedback1",
                    sprintrapp: "c1dda1d6-553c-4015-987b-917e272bd049",
                    foreignObjectRendering: false,
                    scrollableAreaSelector: ".mx-scrollcontainer-fixed > .mx-scrollcontainer-middle > .mx-scrollcontainer-wrapper",
                    feedbackButtonAction: ActionProperty({
                      "action": { "type": "callNanoflow", "argMap": {}, "config": { "nanoflow": () => ACT_Open_Feedback_Modal, "allowedRoles": [] }, "disabledDuringExecution": false },
                      "argumentTypes": {}
                    }),
                    showAdvancedSettings: false,
                    title_label: selectTranslation([
                      ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Feedback" }, "args": {} }
                      })
                    ]),
                    take_screenshot_label: selectTranslation([
                      ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Take screenshot" }, "args": {} }
                      })
                    ]),
                    annotate_label: selectTranslation([
                      ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Annotate" }, "args": {} }
                      })
                    ]),
                    done_label: selectTranslation([
                      ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Done" }, "args": {} }
                      })
                    ]),
                    cancel_label: selectTranslation([
                      ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Cancel" }, "args": {} }
                      })
                    ]),
                    clear_label: selectTranslation([
                      ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Clear" }, "args": {} }
                      })
                    ]),
                    userDefinedButtonStyle: "side",
                    showInDesignMode: true,
                    class: "mx-name-feedback1",
                    style: void 0,
                    tabIndex: void 0
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ React$1.createElement(
            $Div$1,
            {
              key: "l38.Atlas_Core.Atlas_TopBar.layoutGrid1",
              $widgetId: "l38.Atlas_Core.Atlas_TopBar.layoutGrid1",
              class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid spacing-inner-top-none spacing-inner-right-none spacing-inner-bottom-none spacing-inner-left-none",
              style: void 0,
              content: [
                /* @__PURE__ */ React$1.createElement(
                  $Div$1,
                  {
                    key: "l38.Atlas_Core.Atlas_TopBar.layoutGrid1$row0",
                    $widgetId: "l38.Atlas_Core.Atlas_TopBar.layoutGrid1$row0",
                    class: "row",
                    style: void 0,
                    content: [
                      /* @__PURE__ */ React$1.createElement(
                        $Div$1,
                        {
                          key: "l38.Atlas_Core.Atlas_TopBar.layoutGrid1$row0$column0",
                          $widgetId: "l38.Atlas_Core.Atlas_TopBar.layoutGrid1$row0$column0",
                          class: "col-lg-12 col-md-12 col-12",
                          style: void 0,
                          content: [
                            /* @__PURE__ */ React$1.createElement(
                              $Container,
                              {
                                key: "l38.Atlas_Core.Atlas_TopBar.container2",
                                $widgetId: "l38.Atlas_Core.Atlas_TopBar.container2",
                                class: "mx-name-container2 topbar-content flex-row flex-nowrap",
                                style: {
                                  "flex": "var(--flex-grow)"
                                },
                                renderMode: "div",
                                onClick: void 0,
                                content: [
                                  /* @__PURE__ */ React$1.createElement(
                                    $SidebarToggle,
                                    {
                                      key: "l38.Atlas_Core.Atlas_TopBar.sidebarToggle3",
                                      $widgetId: "l38.Atlas_Core.Atlas_TopBar.sidebarToggle3",
                                      buttonId: "l38.Atlas_Core.Atlas_TopBar.sidebarToggle3",
                                      renderType: "button",
                                      buttonClass: "btn-primary",
                                      caption: selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                        })
                                      ]),
                                      tooltip: TextProperty({
                                        "value": selectTranslation([
                                          "Toggle Menu"
                                        ])
                                      }),
                                      icon: WebIconProperty({
                                        "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-navigation-menu" }
                                      }),
                                      class: "mx-name-sidebarToggle3 toggle-btn spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left btn-lg",
                                      style: void 0,
                                      tabIndex: void 0
                                    }
                                  ),
                                  /* @__PURE__ */ React$1.createElement(
                                    $Div$1,
                                    {
                                      key: "l38.Atlas_Core.Atlas_TopBar.layoutGrid2",
                                      $widgetId: "l38.Atlas_Core.Atlas_TopBar.layoutGrid2",
                                      class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid navbar-brand",
                                      style: void 0,
                                      content: [
                                        /* @__PURE__ */ React$1.createElement(
                                          $Div$1,
                                          {
                                            key: "l38.Atlas_Core.Atlas_TopBar.layoutGrid2$row0",
                                            $widgetId: "l38.Atlas_Core.Atlas_TopBar.layoutGrid2$row0",
                                            class: "row align-children-center",
                                            style: void 0,
                                            content: [
                                              /* @__PURE__ */ React$1.createElement(
                                                $Div$1,
                                                {
                                                  key: "l38.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column0",
                                                  $widgetId: "l38.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column0",
                                                  class: "col-lg-auto col-md-auto col-auto",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React$1.createElement(
                                                      $Image,
                                                      {
                                                        key: "l38.Atlas_Core.Atlas_TopBar.staticImage1",
                                                        $widgetId: "l38.Atlas_Core.Atlas_TopBar.staticImage1",
                                                        datasource: "image",
                                                        imageObject: WebStaticImageProperty({
                                                          "image": { "uri": "img/Atlas_Core$Layout$logo.svg" }
                                                        }),
                                                        defaultImageDynamic: void 0,
                                                        imageUrl: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                          })
                                                        ]),
                                                        imageIcon: void 0,
                                                        isBackgroundImage: false,
                                                        children: void 0,
                                                        onClickType: "action",
                                                        onClick: void 0,
                                                        alternativeText: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                          })
                                                        ]),
                                                        widthUnit: "auto",
                                                        width: 100,
                                                        heightUnit: "auto",
                                                        height: 100,
                                                        iconSize: 14,
                                                        displayAs: "fullImage",
                                                        responsive: false,
                                                        minHeightUnit: "none",
                                                        minHeight: 0,
                                                        maxHeightUnit: "none",
                                                        maxHeight: 0,
                                                        class: "mx-name-staticImage1",
                                                        style: void 0,
                                                        tabIndex: void 0
                                                      }
                                                    )
                                                  ]
                                                }
                                              ),
                                              /* @__PURE__ */ React$1.createElement(
                                                $Div$1,
                                                {
                                                  key: "l38.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column1",
                                                  $widgetId: "l38.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column1",
                                                  class: "col-lg col-md col",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React$1.createElement(
                                                      $MenuBar,
                                                      {
                                                        key: "l38.Atlas_Core.Atlas_TopBar.menuBar1",
                                                        $widgetId: "l38.Atlas_Core.Atlas_TopBar.menuBar1",
                                                        class: "mx-name-menuBar1 hidden-xs hide-icons",
                                                        style: void 0,
                                                        menu: [
                                                          {
                                                            "caption": TextProperty({
                                                              "value": selectTranslation([
                                                                "Home"
                                                              ])
                                                            }),
                                                            "icon": WebIconProperty({
                                                              "icon": { "type": "glyph", "iconClass": "glyphicon-home" }
                                                            }),
                                                            "action": ActionProperty({
                                                              "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Home_Web.page.xml", "location": "content", "allowedRoles": ["Administrator", "Teacher"] }, "disabledDuringExecution": false },
                                                              "skipClientValidation": true
                                                            })
                                                          },
                                                          {
                                                            "caption": TextProperty({
                                                              "value": selectTranslation([
                                                                "Courses"
                                                              ])
                                                            }),
                                                            "icon": WebIconProperty({
                                                              "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-book-closed" }
                                                            }),
                                                            "action": ActionProperty({
                                                              "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Course_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "Teacher"] }, "disabledDuringExecution": false },
                                                              "skipClientValidation": true
                                                            })
                                                          },
                                                          {
                                                            "caption": TextProperty({
                                                              "value": selectTranslation([
                                                                "Locations"
                                                              ])
                                                            }),
                                                            "icon": WebIconProperty({
                                                              "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-map-location-pin" }
                                                            }),
                                                            "action": ActionProperty({
                                                              "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Location_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "Teacher"] }, "disabledDuringExecution": false },
                                                              "skipClientValidation": true
                                                            })
                                                          },
                                                          {
                                                            "caption": TextProperty({
                                                              "value": selectTranslation([
                                                                "Teachers"
                                                              ])
                                                            }),
                                                            "icon": WebIconProperty({
                                                              "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-user" }
                                                            }),
                                                            "action": ActionProperty({
                                                              "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Teacher_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "Teacher"] }, "disabledDuringExecution": false },
                                                              "skipClientValidation": true
                                                            })
                                                          },
                                                          {
                                                            "caption": TextProperty({
                                                              "value": selectTranslation([
                                                                "Trainees"
                                                              ])
                                                            }),
                                                            "icon": WebIconProperty({
                                                              "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-graduation-hat" }
                                                            }),
                                                            "action": ActionProperty({
                                                              "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Trainee_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "Teacher"] }, "disabledDuringExecution": false },
                                                              "skipClientValidation": true
                                                            })
                                                          },
                                                          {
                                                            "caption": TextProperty({
                                                              "value": selectTranslation([
                                                                "Training Events"
                                                              ])
                                                            }),
                                                            "icon": WebIconProperty({
                                                              "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-calendar" }
                                                            }),
                                                            "action": ActionProperty({
                                                              "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/TrainingEvent_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "Teacher", "Trainee"] }, "disabledDuringExecution": false },
                                                              "skipClientValidation": true
                                                            })
                                                          }
                                                        ]
                                                      }
                                                    )
                                                  ]
                                                }
                                              ),
                                              /* @__PURE__ */ React$1.createElement(
                                                $Div$1,
                                                {
                                                  key: "l38.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column2",
                                                  $widgetId: "l38.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column2",
                                                  class: "col-lg-auto col-md-auto col-auto",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React$1.createElement(
                                                      $Fragment,
                                                      {
                                                        key: "l38.Atlas_Core.Atlas_TopBar.snippetCall2",
                                                        $widgetId: "l38.Atlas_Core.Atlas_TopBar.snippetCall2",
                                                        content: [
                                                          /* @__PURE__ */ React$1.createElement(
                                                            $LanguageSelector,
                                                            {
                                                              key: "l38.Atlas_Core.LanguageSelectorWidget.languageSelector1",
                                                              $widgetId: "l38.Atlas_Core.LanguageSelectorWidget.languageSelector1",
                                                              languageOptions: DatabaseObjectListProperty({
                                                                "dataSourceId": "l38.2",
                                                                "entity": "System.Language",
                                                                "operationId": "JMhtHVVMrVKR/UMsQtJBQg",
                                                                "sort": [
                                                                  [
                                                                    "Description",
                                                                    "asc"
                                                                  ]
                                                                ]
                                                              }),
                                                              languageCaption: ListExpressionProperty({
                                                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Description" }, "args": { "currentObject": { "widget": "l38.Atlas_Core.LanguageSelectorWidget.languageSelector1", "source": "object" } } },
                                                                "dataSourceId": "l38.2"
                                                              }),
                                                              position: "bottom",
                                                              trigger: "click",
                                                              hideForSingle: false,
                                                              screenReaderLabelCaption: selectTranslation([
                                                                ExpressionProperty({
                                                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                })
                                                              ]),
                                                              class: "mx-name-languageSelector1",
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
        ],
        "sizeMode": "auto",
        "class": "region-topbar"
      },
      bottom: {
        "enabled": false
      },
      left: {
        "enabled": true,
        "content": [
          /* @__PURE__ */ React$1.createElement(
            $NavigationTree,
            {
              key: "l38.Atlas_Core.Atlas_TopBar.navigationTree1",
              $widgetId: "l38.Atlas_Core.Atlas_TopBar.navigationTree1",
              class: "mx-name-navigationTree1",
              style: void 0,
              menu: [
                {
                  "caption": TextProperty({
                    "value": selectTranslation([
                      "Home"
                    ])
                  }),
                  "icon": WebIconProperty({
                    "icon": { "type": "glyph", "iconClass": "glyphicon-home" }
                  }),
                  "action": ActionProperty({
                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Home_Web.page.xml", "location": "content", "allowedRoles": ["Administrator", "Teacher"] }, "disabledDuringExecution": false },
                    "skipClientValidation": true
                  })
                },
                {
                  "caption": TextProperty({
                    "value": selectTranslation([
                      "Courses"
                    ])
                  }),
                  "icon": WebIconProperty({
                    "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-book-closed" }
                  }),
                  "action": ActionProperty({
                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Course_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "Teacher"] }, "disabledDuringExecution": false },
                    "skipClientValidation": true
                  })
                },
                {
                  "caption": TextProperty({
                    "value": selectTranslation([
                      "Locations"
                    ])
                  }),
                  "icon": WebIconProperty({
                    "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-map-location-pin" }
                  }),
                  "action": ActionProperty({
                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Location_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "Teacher"] }, "disabledDuringExecution": false },
                    "skipClientValidation": true
                  })
                },
                {
                  "caption": TextProperty({
                    "value": selectTranslation([
                      "Teachers"
                    ])
                  }),
                  "icon": WebIconProperty({
                    "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-user" }
                  }),
                  "action": ActionProperty({
                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Teacher_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "Teacher"] }, "disabledDuringExecution": false },
                    "skipClientValidation": true
                  })
                },
                {
                  "caption": TextProperty({
                    "value": selectTranslation([
                      "Trainees"
                    ])
                  }),
                  "icon": WebIconProperty({
                    "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-graduation-hat" }
                  }),
                  "action": ActionProperty({
                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Trainee_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "Teacher"] }, "disabledDuringExecution": false },
                    "skipClientValidation": true
                  })
                },
                {
                  "caption": TextProperty({
                    "value": selectTranslation([
                      "Training Events"
                    ])
                  }),
                  "icon": WebIconProperty({
                    "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-calendar" }
                  }),
                  "action": ActionProperty({
                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/TrainingEvent_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "Teacher", "Trainee"] }, "disabledDuringExecution": false },
                    "skipClientValidation": true
                  })
                }
              ]
            }
          )
        ],
        "sizeMode": "pixels",
        "sizeValue": 232,
        "class": "region-sidebar",
        "toggleMode": "slide",
        "initiallyOpen": false
      },
      right: {
        "enabled": false
      },
      center: {
        "content": [
          /* @__PURE__ */ React$1.createElement(
            $Placeholder,
            {
              key: "l38.Atlas_Core.Atlas_TopBar.Main",
              $widgetId: "l38.Atlas_Core.Atlas_TopBar.Main",
              content: PlaceholderProperty({
                "id": "Atlas_Core.Atlas_TopBar.Main"
              })
            }
          )
        ],
        "class": "region-content"
      }
    }
  )
];
const content$1 = {
  "Main": region$Main$1
};

const React = { createElement: reactExports.createElement };
const { $Div, $Text, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, Text, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p8.MyFirstModule.Home_Web.layoutGrid3",
      $widgetId: "p8.MyFirstModule.Home_Web.layoutGrid3",
      class: "mx-name-layoutGrid3 mx-layoutgrid mx-layoutgrid-fixed container",
      style: {
        "--layoutgrid-row-gap": "var(--spacing-large)"
      },
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p8.MyFirstModule.Home_Web.layoutGrid3$row0",
            $widgetId: "p8.MyFirstModule.Home_Web.layoutGrid3$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p8.MyFirstModule.Home_Web.layoutGrid3$row0$column0",
                  $widgetId: "p8.MyFirstModule.Home_Web.layoutGrid3$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Text,
                      {
                        key: "p8.MyFirstModule.Home_Web.text1",
                        $widgetId: "p8.MyFirstModule.Home_Web.text1",
                        class: "mx-name-text1",
                        style: void 0,
                        caption: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "LearnNow Training Management" }, "args": {} }
                          })
                        ]),
                        renderMode: "h1"
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
            key: "p8.MyFirstModule.Home_Web.layoutGrid3$row1",
            $widgetId: "p8.MyFirstModule.Home_Web.layoutGrid3$row1",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p8.MyFirstModule.Home_Web.layoutGrid3$row1$column0",
                  $widgetId: "p8.MyFirstModule.Home_Web.layoutGrid3$row1$column0",
                  class: "col-lg col-md-6 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ConditionalVisibilityWrapper,
                      {
                        key: "p8.MyFirstModule.Home_Web.actionButton1$visibility",
                        $widgetId: "p8.MyFirstModule.Home_Web.actionButton1$visibility",
                        visible: ExpressionProperty({
                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "Teacher" }] }, "args": {} }
                        }),
                        contents: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p8.MyFirstModule.Home_Web.actionButton1",
                              $widgetId: "p8.MyFirstModule.Home_Web.actionButton1",
                              buttonId: "p8.MyFirstModule.Home_Web.actionButton1",
                              class: "mx-name-actionButton1 btn-lg btn-block",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "button",
                              role: void 0,
                              buttonClass: "btn-default",
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Courses" }, "args": {} }
                                })
                              ]),
                              tooltip: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              icon: WebIconProperty({
                                "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-book-closed" }
                              }),
                              action: ActionProperty({
                                "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Course_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "Teacher"] }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
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
                  key: "p8.MyFirstModule.Home_Web.layoutGrid3$row1$column1",
                  $widgetId: "p8.MyFirstModule.Home_Web.layoutGrid3$row1$column1",
                  class: "col-lg col-md-6 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ConditionalVisibilityWrapper,
                      {
                        key: "p8.MyFirstModule.Home_Web.actionButton2$visibility",
                        $widgetId: "p8.MyFirstModule.Home_Web.actionButton2$visibility",
                        visible: ExpressionProperty({
                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "Teacher" }] }, "args": {} }
                        }),
                        contents: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p8.MyFirstModule.Home_Web.actionButton2",
                              $widgetId: "p8.MyFirstModule.Home_Web.actionButton2",
                              buttonId: "p8.MyFirstModule.Home_Web.actionButton2",
                              class: "mx-name-actionButton2 btn-lg btn-block",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "button",
                              role: void 0,
                              buttonClass: "btn-default",
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Locations" }, "args": {} }
                                })
                              ]),
                              tooltip: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              icon: WebIconProperty({
                                "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-map-location-pin" }
                              }),
                              action: ActionProperty({
                                "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Location_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "Teacher"] }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
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
                  key: "p8.MyFirstModule.Home_Web.layoutGrid3$row1$column2",
                  $widgetId: "p8.MyFirstModule.Home_Web.layoutGrid3$row1$column2",
                  class: "col-lg col-md-6 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ConditionalVisibilityWrapper,
                      {
                        key: "p8.MyFirstModule.Home_Web.actionButton3$visibility",
                        $widgetId: "p8.MyFirstModule.Home_Web.actionButton3$visibility",
                        visible: ExpressionProperty({
                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "Teacher" }] }, "args": {} }
                        }),
                        contents: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p8.MyFirstModule.Home_Web.actionButton3",
                              $widgetId: "p8.MyFirstModule.Home_Web.actionButton3",
                              buttonId: "p8.MyFirstModule.Home_Web.actionButton3",
                              class: "mx-name-actionButton3 btn-lg btn-block",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "button",
                              role: void 0,
                              buttonClass: "btn-default",
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Teachers" }, "args": {} }
                                })
                              ]),
                              tooltip: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              icon: WebIconProperty({
                                "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-user" }
                              }),
                              action: ActionProperty({
                                "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Teacher_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "Teacher"] }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
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
                  key: "p8.MyFirstModule.Home_Web.layoutGrid3$row1$column3",
                  $widgetId: "p8.MyFirstModule.Home_Web.layoutGrid3$row1$column3",
                  class: "col-lg col-md-6 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ConditionalVisibilityWrapper,
                      {
                        key: "p8.MyFirstModule.Home_Web.actionButton4$visibility",
                        $widgetId: "p8.MyFirstModule.Home_Web.actionButton4$visibility",
                        visible: ExpressionProperty({
                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "Teacher" }] }, "args": {} }
                        }),
                        contents: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p8.MyFirstModule.Home_Web.actionButton4",
                              $widgetId: "p8.MyFirstModule.Home_Web.actionButton4",
                              buttonId: "p8.MyFirstModule.Home_Web.actionButton4",
                              class: "mx-name-actionButton4 btn-lg btn-block",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "button",
                              role: void 0,
                              buttonClass: "btn-default",
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Trainees" }, "args": {} }
                                })
                              ]),
                              tooltip: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              icon: WebIconProperty({
                                "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-graduation-hat" }
                              }),
                              action: ActionProperty({
                                "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Trainee_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "Teacher"] }, "disabledDuringExecution": true },
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
            key: "p8.MyFirstModule.Home_Web.layoutGrid3$row2",
            $widgetId: "p8.MyFirstModule.Home_Web.layoutGrid3$row2",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p8.MyFirstModule.Home_Web.layoutGrid3$row2$column0",
                  $widgetId: "p8.MyFirstModule.Home_Web.layoutGrid3$row2$column0",
                  class: "col-lg col-md-6 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ConditionalVisibilityWrapper,
                      {
                        key: "p8.MyFirstModule.Home_Web.actionButton5$visibility",
                        $widgetId: "p8.MyFirstModule.Home_Web.actionButton5$visibility",
                        visible: ExpressionProperty({
                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "Teacher" }, { "type": "literal", "value": "Trainee" }] }, "args": {} }
                        }),
                        contents: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p8.MyFirstModule.Home_Web.actionButton5",
                              $widgetId: "p8.MyFirstModule.Home_Web.actionButton5",
                              buttonId: "p8.MyFirstModule.Home_Web.actionButton5",
                              class: "mx-name-actionButton5 btn-lg btn-block",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "button",
                              role: void 0,
                              buttonClass: "btn-default",
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Training Events" }, "args": {} }
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
                                "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/TrainingEvent_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "Teacher", "Trainee"] }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
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
                  key: "p8.MyFirstModule.Home_Web.layoutGrid3$row2$column1",
                  $widgetId: "p8.MyFirstModule.Home_Web.layoutGrid3$row2$column1",
                  class: "col-lg col-md-6 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ConditionalVisibilityWrapper,
                      {
                        key: "p8.MyFirstModule.Home_Web.actionButton6$visibility",
                        $widgetId: "p8.MyFirstModule.Home_Web.actionButton6$visibility",
                        visible: ExpressionProperty({
                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                        }),
                        contents: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p8.MyFirstModule.Home_Web.actionButton6",
                              $widgetId: "p8.MyFirstModule.Home_Web.actionButton6",
                              buttonId: "p8.MyFirstModule.Home_Web.actionButton6",
                              class: "mx-name-actionButton6 btn-lg btn-block",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "button",
                              role: void 0,
                              buttonClass: "btn-default",
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Add a Training Event" }, "args": {} }
                                })
                              ]),
                              tooltip: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              icon: WebIconProperty({
                                "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-add" }
                              }),
                              action: ActionProperty({
                                "action": { "type": "createObject", "argMap": {}, "config": { "entity": "MyFirstModule.TrainingEvent", "operationId": "CUof0mKyWlKoPqus39cwiQ", "pageSettings": { "name": "MyFirstModule/TrainingEvent_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator"] }, "allowedRoles": ["Administrator"], "objectParameter": "param$TrainingEvent" }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
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
                  key: "p8.MyFirstModule.Home_Web.layoutGrid3$row2$column2",
                  $widgetId: "p8.MyFirstModule.Home_Web.layoutGrid3$row2$column2",
                  class: "col-lg col-md-6 col-12",
                  style: void 0,
                  content: void 0
                }
              ),
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p8.MyFirstModule.Home_Web.layoutGrid3$row2$column3",
                  $widgetId: "p8.MyFirstModule.Home_Web.layoutGrid3$row2$column3",
                  class: "col-lg col-md-6 col-12",
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
]);
const title = selectTranslation([
  "Homepage"
]);
const classes = "layout-atlas layout-atlas-responsive-topbar";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_TopBar.Main": region$Main
};

export { classes, content, style, title };
