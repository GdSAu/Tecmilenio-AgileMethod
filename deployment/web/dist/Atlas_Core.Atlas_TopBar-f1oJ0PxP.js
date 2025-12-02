import { reactExports, jsxRuntimeExports, classNames, asPluginWidgets, Fragment, selectTranslation, PlaceholderProperty } from './index-B2JBYcJC.js';
import { ActionProperty, TextProperty } from './ActionButton-Dv79O5ku.js';
import { DatabaseObjectListProperty } from './D4nQ98US-Caj07FMS.js';
import { ScrollContainer, Div, Placeholder, ExpressionProperty } from './ScrollContainer-s4IgqE8l.js';
import { ListExpressionProperty } from './ListExpressionProperty-BO58xMYT.js';
import { WebIconProperty } from './WebIconProperty-BjGs0HnE.js';
import { WebStaticImageProperty } from './WebStaticImageProperty-BI2oeWYi.js';
import { ImageWidgetModule, Container } from './Image-4O8yuwqt.js';
import { useMenuActiveItem, preProcessMenus, createAnchor, LanguageSelectorWidgetModule, SprintrFeedbackWidgetModule, SidebarToggle, NavigationTree, ACT_Open_Feedback_Modal } from './FeedbackModule.ACT_Open_Feedback_Modal-DRhUKB4U.js';

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

const React = { createElement: reactExports.createElement };
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const LanguageSelector = Object.getOwnPropertyDescriptor(LanguageSelectorWidgetModule, "LanguageSelector")?.value || Object.getOwnPropertyDescriptor(LanguageSelectorWidgetModule, "default")?.value;
const SprintrFeedback = Object.getOwnPropertyDescriptor(SprintrFeedbackWidgetModule, "SprintrFeedback")?.value || Object.getOwnPropertyDescriptor(SprintrFeedbackWidgetModule, "default")?.value;
const { $ScrollContainer, $Fragment, $SprintrFeedback, $Div, $Container, $SidebarToggle, $Image, $MenuBar, $LanguageSelector, $NavigationTree, $Placeholder } = asPluginWidgets({ ScrollContainer, Fragment, SprintrFeedback, Div, Container, SidebarToggle, Image, MenuBar, LanguageSelector, NavigationTree, Placeholder });
const region$Main = [
  /* @__PURE__ */ React.createElement(
    $ScrollContainer,
    {
      key: "l.Atlas_Core.Atlas_TopBar.layoutContainer",
      $widgetId: "l.Atlas_Core.Atlas_TopBar.layoutContainer",
      class: "mx-name-layoutContainer",
      style: void 0,
      scrollPerRegion: true,
      layoutMode: "sidebar",
      top: {
        "enabled": true,
        "content": [
          /* @__PURE__ */ React.createElement(
            $Fragment,
            {
              key: "l.Atlas_Core.Atlas_TopBar.snippetCall1",
              $widgetId: "l.Atlas_Core.Atlas_TopBar.snippetCall1",
              content: [
                /* @__PURE__ */ React.createElement(
                  $SprintrFeedback,
                  {
                    key: "l.Atlas_Core.FeedbackWidget.feedback1",
                    $widgetId: "l.Atlas_Core.FeedbackWidget.feedback1",
                    sprintrapp: "7f97851e-bcb6-4904-8e32-1c21b2ce1004",
                    foreignObjectRendering: false,
                    scrollableAreaSelector: ".mx-scrollcontainer-fixed > .mx-scrollcontainer-middle > .mx-scrollcontainer-wrapper",
                    feedbackButtonAction: ActionProperty({
                      "action": { "type": "callNanoflow", "argMap": {}, "config": { "nanoflow": () => ACT_Open_Feedback_Modal, "allowedRoles": ["User"] }, "disabledDuringExecution": false },
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
          /* @__PURE__ */ React.createElement(
            $Div,
            {
              key: "l.Atlas_Core.Atlas_TopBar.layoutGrid1",
              $widgetId: "l.Atlas_Core.Atlas_TopBar.layoutGrid1",
              class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
              style: void 0,
              content: [
                /* @__PURE__ */ React.createElement(
                  $Div,
                  {
                    key: "l.Atlas_Core.Atlas_TopBar.layoutGrid1$row0",
                    $widgetId: "l.Atlas_Core.Atlas_TopBar.layoutGrid1$row0",
                    class: "row",
                    style: void 0,
                    content: [
                      /* @__PURE__ */ React.createElement(
                        $Div,
                        {
                          key: "l.Atlas_Core.Atlas_TopBar.layoutGrid1$row0$column0",
                          $widgetId: "l.Atlas_Core.Atlas_TopBar.layoutGrid1$row0$column0",
                          class: "col-lg-12 col-md-12 col-12",
                          style: void 0,
                          content: [
                            /* @__PURE__ */ React.createElement(
                              $Container,
                              {
                                key: "l.Atlas_Core.Atlas_TopBar.container2",
                                $widgetId: "l.Atlas_Core.Atlas_TopBar.container2",
                                class: "mx-name-container2 topbar-content",
                                style: void 0,
                                renderMode: "div",
                                onClick: void 0,
                                content: [
                                  /* @__PURE__ */ React.createElement(
                                    $SidebarToggle,
                                    {
                                      key: "l.Atlas_Core.Atlas_TopBar.sidebarToggle3",
                                      $widgetId: "l.Atlas_Core.Atlas_TopBar.sidebarToggle3",
                                      buttonId: "l.Atlas_Core.Atlas_TopBar.sidebarToggle3",
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
                                      class: "mx-name-sidebarToggle3 toggle-btn",
                                      style: void 0,
                                      tabIndex: void 0
                                    }
                                  ),
                                  /* @__PURE__ */ React.createElement(
                                    $Div,
                                    {
                                      key: "l.Atlas_Core.Atlas_TopBar.layoutGrid2",
                                      $widgetId: "l.Atlas_Core.Atlas_TopBar.layoutGrid2",
                                      class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid navbar-brand",
                                      style: void 0,
                                      content: [
                                        /* @__PURE__ */ React.createElement(
                                          $Div,
                                          {
                                            key: "l.Atlas_Core.Atlas_TopBar.layoutGrid2$row0",
                                            $widgetId: "l.Atlas_Core.Atlas_TopBar.layoutGrid2$row0",
                                            class: "row align-children-center",
                                            style: void 0,
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "l.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column0",
                                                  $widgetId: "l.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column0",
                                                  class: "col-lg-auto col-md-auto col-auto",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Image,
                                                      {
                                                        key: "l.Atlas_Core.Atlas_TopBar.staticImage1",
                                                        $widgetId: "l.Atlas_Core.Atlas_TopBar.staticImage1",
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
                                                        class: "mx-name-staticImage1",
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
                                                  key: "l.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column1",
                                                  $widgetId: "l.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column1",
                                                  class: "col-lg col-md col",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $MenuBar,
                                                      {
                                                        key: "l.Atlas_Core.Atlas_TopBar.menuBar1",
                                                        $widgetId: "l.Atlas_Core.Atlas_TopBar.menuBar1",
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
                                                              "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Home_Web.page.xml", "location": "content", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false },
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
                                                              "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-analytics-bars" }
                                                            }),
                                                            "action": ActionProperty({
                                                              "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Course_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false },
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
                                                              "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-user-neutral-group" }
                                                            }),
                                                            "action": ActionProperty({
                                                              "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Teacher_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false },
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
                                                              "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-location-pin" }
                                                            }),
                                                            "action": ActionProperty({
                                                              "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Location_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false },
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
                                                              "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-user" }
                                                            }),
                                                            "action": ActionProperty({
                                                              "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Trainee_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false },
                                                              "skipClientValidation": true
                                                            })
                                                          }
                                                        ]
                                                      }
                                                    )
                                                  ]
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "l.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column2",
                                                  $widgetId: "l.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column2",
                                                  class: "col-lg-auto col-md-auto col-auto",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Fragment,
                                                      {
                                                        key: "l.Atlas_Core.Atlas_TopBar.snippetCall2",
                                                        $widgetId: "l.Atlas_Core.Atlas_TopBar.snippetCall2",
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $LanguageSelector,
                                                            {
                                                              key: "l.Atlas_Core.LanguageSelectorWidget.languageSelector1",
                                                              $widgetId: "l.Atlas_Core.LanguageSelectorWidget.languageSelector1",
                                                              languageOptions: DatabaseObjectListProperty({
                                                                "dataSourceId": "l.2",
                                                                "entity": "System.Language",
                                                                "operationId": "qBmNRQc2yVyErB/xnEc6qQ",
                                                                "sort": [
                                                                  [
                                                                    "Description",
                                                                    "asc"
                                                                  ]
                                                                ]
                                                              }),
                                                              languageCaption: ListExpressionProperty({
                                                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Description" }, "args": { "currentObject": { "widget": "l.Atlas_Core.LanguageSelectorWidget.languageSelector1", "source": "object" } } },
                                                                "dataSourceId": "l.2"
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
          /* @__PURE__ */ React.createElement(
            $NavigationTree,
            {
              key: "l.Atlas_Core.Atlas_TopBar.navigationTree1",
              $widgetId: "l.Atlas_Core.Atlas_TopBar.navigationTree1",
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
                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Home_Web.page.xml", "location": "content", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false },
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
                    "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-analytics-bars" }
                  }),
                  "action": ActionProperty({
                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Course_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false },
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
                    "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-user-neutral-group" }
                  }),
                  "action": ActionProperty({
                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Teacher_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false },
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
                    "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-location-pin" }
                  }),
                  "action": ActionProperty({
                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Location_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false },
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
                    "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-user" }
                  }),
                  "action": ActionProperty({
                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Trainee_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false },
                    "skipClientValidation": true
                  })
                }
              ]
            }
          )
        ],
        "sizeMode": "pixels",
        "sizeValue": 320,
        "class": "region-sidebar",
        "toggleMode": "push",
        "initiallyOpen": false
      },
      right: {
        "enabled": false
      },
      center: {
        "content": [
          /* @__PURE__ */ React.createElement(
            $Placeholder,
            {
              key: "l.Atlas_Core.Atlas_TopBar.Main",
              $widgetId: "l.Atlas_Core.Atlas_TopBar.Main",
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
const content = {
  "Main": region$Main
};

export { content };
