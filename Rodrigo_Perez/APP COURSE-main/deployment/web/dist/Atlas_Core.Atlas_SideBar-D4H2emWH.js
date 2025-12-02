import { reactExports, asPluginWidgets, Fragment, selectTranslation, PlaceholderProperty } from './index-CAr0kpKK.js';
import { ActionProperty, TextProperty } from './ActionButton-BhLF8XeL.js';
import { DatabaseObjectListProperty } from './XQdQuDNG-DSqxqUMm.js';
import { ScrollContainer, Placeholder, ExpressionProperty } from './ScrollContainer-ClJHkivb.js';
import { ListExpressionProperty } from './ListExpressionProperty-BAWskYNZ.js';
import { WebIconProperty } from './WebIconProperty-B_4QSw2H.js';
import { WebStaticImageProperty } from './WebStaticImageProperty-Cmx5tQtA.js';
import { ImageWidgetModule, Container } from './Image-ttRkd0pN.js';
import { LanguageSelectorWidgetModule, SprintrFeedbackWidgetModule, SidebarToggle, NavigationTree, ACT_Open_Feedback_Modal } from './FeedbackModule.ACT_Open_Feedback_Modal-Cg7QdmhI.js';

const React = { createElement: reactExports.createElement };
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const LanguageSelector = Object.getOwnPropertyDescriptor(LanguageSelectorWidgetModule, "LanguageSelector")?.value || Object.getOwnPropertyDescriptor(LanguageSelectorWidgetModule, "default")?.value;
const SprintrFeedback = Object.getOwnPropertyDescriptor(SprintrFeedbackWidgetModule, "SprintrFeedback")?.value || Object.getOwnPropertyDescriptor(SprintrFeedbackWidgetModule, "default")?.value;
const { $ScrollContainer, $Fragment, $SprintrFeedback, $Container, $SidebarToggle, $Placeholder, $LanguageSelector, $Image, $NavigationTree } = asPluginWidgets({ ScrollContainer, Fragment, SprintrFeedback, Container, SidebarToggle, Placeholder, LanguageSelector, Image, NavigationTree });
const region$Main = [
  /* @__PURE__ */ React.createElement(
    $ScrollContainer,
    {
      key: "l.Atlas_Core.Atlas_SideBar.layoutContainer",
      $widgetId: "l.Atlas_Core.Atlas_SideBar.layoutContainer",
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
              key: "l.Atlas_Core.Atlas_SideBar.snippetCall1",
              $widgetId: "l.Atlas_Core.Atlas_SideBar.snippetCall1",
              content: [
                /* @__PURE__ */ React.createElement(
                  $SprintrFeedback,
                  {
                    key: "l.Atlas_Core.FeedbackWidget.feedback1",
                    $widgetId: "l.Atlas_Core.FeedbackWidget.feedback1",
                    sprintrapp: "19a11a71-762e-4460-b259-685300b7e194",
                    foreignObjectRendering: false,
                    scrollableAreaSelector: ".mx-scrollcontainer-fixed > .mx-scrollcontainer-middle > .mx-scrollcontainer-wrapper",
                    feedbackButtonAction: ActionProperty({
                      "action": { "type": "callNanoflow", "argMap": {}, "config": { "nanoflow": () => ACT_Open_Feedback_Modal, "allowedRoles": ["Teacher"] }, "disabledDuringExecution": false },
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
            $Container,
            {
              key: "l.Atlas_Core.Atlas_SideBar.container4",
              $widgetId: "l.Atlas_Core.Atlas_SideBar.container4",
              class: "mx-name-container4 flex-row align-y-center",
              style: void 0,
              renderMode: "div",
              onClick: void 0,
              content: [
                /* @__PURE__ */ React.createElement(
                  $Container,
                  {
                    key: "l.Atlas_Core.Atlas_SideBar.container6",
                    $widgetId: "l.Atlas_Core.Atlas_SideBar.container6",
                    class: "mx-name-container6 spacing-inner-right-medium spacing-inner-left-medium flex-row align-y-center flex-nowrap",
                    style: {
                      "flex": "var(--flex-grow)"
                    },
                    renderMode: "div",
                    onClick: void 0,
                    content: [
                      /* @__PURE__ */ React.createElement(
                        $SidebarToggle,
                        {
                          key: "l.Atlas_Core.Atlas_SideBar.sidebarToggle6",
                          $widgetId: "l.Atlas_Core.Atlas_SideBar.sidebarToggle6",
                          buttonId: "l.Atlas_Core.Atlas_SideBar.sidebarToggle6",
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
                          class: "mx-name-sidebarToggle6 toggle-btn-sidebar-mobile spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left hide-desktop hide-tablet btn-lg",
                          style: void 0,
                          tabIndex: void 0
                        }
                      ),
                      /* @__PURE__ */ React.createElement(
                        $Placeholder,
                        {
                          key: "l.Atlas_Core.Atlas_SideBar.Topbar",
                          $widgetId: "l.Atlas_Core.Atlas_SideBar.Topbar",
                          content: PlaceholderProperty({
                            "id": "Atlas_Core.Atlas_SideBar.Topbar"
                          })
                        }
                      )
                    ],
                    ariaHidden: false
                  }
                ),
                /* @__PURE__ */ React.createElement(
                  $Container,
                  {
                    key: "l.Atlas_Core.Atlas_SideBar.container5",
                    $widgetId: "l.Atlas_Core.Atlas_SideBar.container5",
                    class: "mx-name-container5 spacing-inner-top-medium spacing-inner-right-medium spacing-inner-bottom-medium spacing-inner-left-medium flex-row align-y-center",
                    style: {
                      "flex": "var(--flex-fit-content)"
                    },
                    renderMode: "div",
                    onClick: void 0,
                    content: [
                      /* @__PURE__ */ React.createElement(
                        $Fragment,
                        {
                          key: "l.Atlas_Core.Atlas_SideBar.snippetCall3",
                          $widgetId: "l.Atlas_Core.Atlas_SideBar.snippetCall3",
                          content: [
                            /* @__PURE__ */ React.createElement(
                              $LanguageSelector,
                              {
                                key: "l.Atlas_Core.LanguageSelectorWidget.languageSelector1",
                                $widgetId: "l.Atlas_Core.LanguageSelectorWidget.languageSelector1",
                                languageOptions: DatabaseObjectListProperty({
                                  "dataSourceId": "l.2",
                                  "entity": "System.Language",
                                  "operationId": "KEgw6vDcPl+fZoNEthxWzw",
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
                    ],
                    ariaHidden: false
                  }
                )
              ],
              ariaHidden: false
            }
          )
        ],
        "sizeMode": "auto",
        "class": "border-bottom"
      },
      bottom: {
        "enabled": false
      },
      left: {
        "enabled": true,
        "content": [
          /* @__PURE__ */ React.createElement(
            $Container,
            {
              key: "l.Atlas_Core.Atlas_SideBar.container1",
              $widgetId: "l.Atlas_Core.Atlas_SideBar.container1",
              class: "mx-name-container1 sidebar-wrapper",
              style: void 0,
              renderMode: "div",
              onClick: void 0,
              content: [
                /* @__PURE__ */ React.createElement(
                  $Image,
                  {
                    key: "l.Atlas_Core.Atlas_SideBar.staticImage1",
                    $widgetId: "l.Atlas_Core.Atlas_SideBar.staticImage1",
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
                    widthUnit: "pixels",
                    width: 36,
                    heightUnit: "auto",
                    height: 100,
                    iconSize: 14,
                    displayAs: "fullImage",
                    responsive: false,
                    minHeightUnit: "none",
                    minHeight: 0,
                    maxHeightUnit: "none",
                    maxHeight: 0,
                    class: "mx-name-staticImage1 spacing-inner-right spacing-inner-bottom-large spacing-inner-left",
                    style: void 0,
                    tabIndex: void 0
                  }
                ),
                /* @__PURE__ */ React.createElement(
                  $SidebarToggle,
                  {
                    key: "l.Atlas_Core.Atlas_SideBar.sidebarToggle4",
                    $widgetId: "l.Atlas_Core.Atlas_SideBar.sidebarToggle4",
                    buttonId: "l.Atlas_Core.Atlas_SideBar.sidebarToggle4",
                    renderType: "button",
                    buttonClass: "btn-default",
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
                      "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-chevron-right" }
                    }),
                    class: "mx-name-sidebarToggle4 toggle-btn-sidebar hide-phone",
                    style: void 0,
                    tabIndex: void 0
                  }
                ),
                /* @__PURE__ */ React.createElement(
                  $NavigationTree,
                  {
                    key: "l.Atlas_Core.Atlas_SideBar.navigationTree3",
                    $widgetId: "l.Atlas_Core.Atlas_SideBar.navigationTree3",
                    class: "mx-name-navigationTree3 spacing-outer-top-large",
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
              ariaHidden: false
            }
          )
        ],
        "sizeMode": "pixels",
        "sizeValue": 232,
        "class": "region-sidebar",
        "toggleMode": "shrink",
        "initiallyOpen": true
      },
      right: {
        "enabled": false
      },
      center: {
        "content": [
          /* @__PURE__ */ React.createElement(
            $Placeholder,
            {
              key: "l.Atlas_Core.Atlas_SideBar.Main",
              $widgetId: "l.Atlas_Core.Atlas_SideBar.Main",
              content: PlaceholderProperty({
                "id": "Atlas_Core.Atlas_SideBar.Main"
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
