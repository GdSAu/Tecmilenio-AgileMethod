import { reactExports, asPluginWidgets, Fragment, selectTranslation, PlaceholderProperty } from './index-D54rfXjv.js';
import { ActionProperty, TextProperty } from './ActionButton-Cg_9OV9E.js';
import { DatabaseObjectListProperty } from './XQdQuDNG-MasuQoi0.js';
import { ScrollContainer, Div, Placeholder, ExpressionProperty } from './ScrollContainer-BjzP0wD4.js';
import { ListExpressionProperty } from './ListExpressionProperty-iDZDI-u-.js';
import { WebIconProperty } from './WebIconProperty-BMRF9qCt.js';
import { WebStaticImageProperty } from './WebStaticImageProperty-BT2Uh9-H.js';
import { ImageWidgetModule, Container } from './Image-DBqlkM53.js';
import { LanguageSelectorWidgetModule, SprintrFeedbackWidgetModule, SidebarToggle, NavigationTree, ACT_Open_Feedback_Modal } from './FeedbackModule.ACT_Open_Feedback_Modal-D3zrta9x.js';

const React = { createElement: reactExports.createElement };
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const LanguageSelector = Object.getOwnPropertyDescriptor(LanguageSelectorWidgetModule, "LanguageSelector")?.value || Object.getOwnPropertyDescriptor(LanguageSelectorWidgetModule, "default")?.value;
const SprintrFeedback = Object.getOwnPropertyDescriptor(SprintrFeedbackWidgetModule, "SprintrFeedback")?.value || Object.getOwnPropertyDescriptor(SprintrFeedbackWidgetModule, "default")?.value;
const { $ScrollContainer, $Fragment, $SprintrFeedback, $Div, $Container, $SidebarToggle, $Image, $LanguageSelector, $NavigationTree, $Placeholder } = asPluginWidgets({ ScrollContainer, Fragment, SprintrFeedback, Div, Container, SidebarToggle, Image, LanguageSelector, NavigationTree, Placeholder });
const region$Main = [
  /* @__PURE__ */ React.createElement(
    $ScrollContainer,
    {
      key: "l.Atlas_Core.Atlas_Default.layoutContainer",
      $widgetId: "l.Atlas_Core.Atlas_Default.layoutContainer",
      class: "mx-name-layoutContainer",
      style: void 0,
      scrollPerRegion: true,
      layoutMode: "headline",
      top: {
        "enabled": true,
        "content": [
          /* @__PURE__ */ React.createElement(
            $Fragment,
            {
              key: "l.Atlas_Core.Atlas_Default.snippetCall1",
              $widgetId: "l.Atlas_Core.Atlas_Default.snippetCall1",
              content: [
                /* @__PURE__ */ React.createElement(
                  $SprintrFeedback,
                  {
                    key: "l.Atlas_Core.FeedbackWidget.feedback1",
                    $widgetId: "l.Atlas_Core.FeedbackWidget.feedback1",
                    sprintrapp: "a52e6f4a-8ab7-434c-964a-c7a004b2583f",
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
          /* @__PURE__ */ React.createElement(
            $Div,
            {
              key: "l.Atlas_Core.Atlas_Default.layoutGrid1",
              $widgetId: "l.Atlas_Core.Atlas_Default.layoutGrid1",
              class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
              style: void 0,
              content: [
                /* @__PURE__ */ React.createElement(
                  $Div,
                  {
                    key: "l.Atlas_Core.Atlas_Default.layoutGrid1$row0",
                    $widgetId: "l.Atlas_Core.Atlas_Default.layoutGrid1$row0",
                    class: "row",
                    style: void 0,
                    content: [
                      /* @__PURE__ */ React.createElement(
                        $Div,
                        {
                          key: "l.Atlas_Core.Atlas_Default.layoutGrid1$row0$column0",
                          $widgetId: "l.Atlas_Core.Atlas_Default.layoutGrid1$row0$column0",
                          class: "col-lg-12 col-md-12 col-12",
                          style: void 0,
                          content: [
                            /* @__PURE__ */ React.createElement(
                              $Container,
                              {
                                key: "l.Atlas_Core.Atlas_Default.container1",
                                $widgetId: "l.Atlas_Core.Atlas_Default.container1",
                                class: "mx-name-container1 topbar-content flex-row flex-nowrap",
                                style: {
                                  "flex": "var(--flex-grow)"
                                },
                                renderMode: "div",
                                onClick: void 0,
                                content: [
                                  /* @__PURE__ */ React.createElement(
                                    $SidebarToggle,
                                    {
                                      key: "l.Atlas_Core.Atlas_Default.sidebarToggle3",
                                      $widgetId: "l.Atlas_Core.Atlas_Default.sidebarToggle3",
                                      buttonId: "l.Atlas_Core.Atlas_Default.sidebarToggle3",
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
                                      class: "mx-name-sidebarToggle3 toggle-btn btn-lg spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left",
                                      style: void 0,
                                      tabIndex: void 0
                                    }
                                  ),
                                  /* @__PURE__ */ React.createElement(
                                    $Div,
                                    {
                                      key: "l.Atlas_Core.Atlas_Default.layoutGrid2",
                                      $widgetId: "l.Atlas_Core.Atlas_Default.layoutGrid2",
                                      class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid navbar-brand",
                                      style: void 0,
                                      content: [
                                        /* @__PURE__ */ React.createElement(
                                          $Div,
                                          {
                                            key: "l.Atlas_Core.Atlas_Default.layoutGrid2$row0",
                                            $widgetId: "l.Atlas_Core.Atlas_Default.layoutGrid2$row0",
                                            class: "row align-children-center",
                                            style: void 0,
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "l.Atlas_Core.Atlas_Default.layoutGrid2$row0$column0",
                                                  $widgetId: "l.Atlas_Core.Atlas_Default.layoutGrid2$row0$column0",
                                                  class: "col-lg col-md col",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Image,
                                                      {
                                                        key: "l.Atlas_Core.Atlas_Default.staticImage1",
                                                        $widgetId: "l.Atlas_Core.Atlas_Default.staticImage1",
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
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "l.Atlas_Core.Atlas_Default.layoutGrid2$row0$column1",
                                                  $widgetId: "l.Atlas_Core.Atlas_Default.layoutGrid2$row0$column1",
                                                  class: "col-lg-auto col-md-auto col-auto align-self-center",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Fragment,
                                                      {
                                                        key: "l.Atlas_Core.Atlas_Default.snippetCall2",
                                                        $widgetId: "l.Atlas_Core.Atlas_Default.snippetCall2",
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $LanguageSelector,
                                                            {
                                                              key: "l.Atlas_Core.LanguageSelectorWidget.languageSelector1",
                                                              $widgetId: "l.Atlas_Core.LanguageSelectorWidget.languageSelector1",
                                                              languageOptions: DatabaseObjectListProperty({
                                                                "dataSourceId": "l.2",
                                                                "entity": "System.Language",
                                                                "operationId": "aFcoo6pLe1OkkeCIZDeTxg",
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
              key: "l.Atlas_Core.Atlas_Default.navigationTree3",
              $widgetId: "l.Atlas_Core.Atlas_Default.navigationTree3",
              class: "mx-name-navigationTree3",
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
                }
              ]
            }
          )
        ],
        "sizeMode": "pixels",
        "sizeValue": 232,
        "class": "region-sidebar",
        "toggleMode": "shrink",
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
              key: "l.Atlas_Core.Atlas_Default.Main",
              $widgetId: "l.Atlas_Core.Atlas_Default.Main",
              content: PlaceholderProperty({
                "id": "Atlas_Core.Atlas_Default.Main"
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
