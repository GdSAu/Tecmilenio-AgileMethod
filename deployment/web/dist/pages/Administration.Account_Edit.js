import { reactExports, asPluginWidgets, selectTranslation } from '../index-B8bUhI8E.js';
import { Div, PageFragment, ExpressionProperty } from '../ScrollContainer-CdywZc9i.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-D_YBiLZ6.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-Dt9vgjwI.js';
import { ComboboxWidgetModule, AssociationProperty } from '../Combobox-C3wUTaxU.js';
import { FormGroup, DerivedUniqueIdProperty, ValidationProperty } from '../FormGroup-LPgVky1u.js';
import { DatabaseObjectListProperty } from '../CESNSUMX-CEo4dwQO.js';
import { ListAttributeProperty } from '../ListAttributeProperty-gX5GX4rF.js';
import { ListExpressionProperty } from '../ListExpressionProperty-CWG0RJeD.js';
import { CheckBox } from '../CheckBox-C-_qZukF.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-KPRTruOk.js';
import { DataView } from '../DataView-DWF0wJdH.js';
import { Label } from '../Label-BxJFYjG_.js';
import { TextBox } from '../TextBox-4JyWwafe.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-DxMFZUPu.js';
import { AttributeProperty } from '../BI1aYen2-B3U-e8vs.js';
import '../1OX6EehJ-ChqR_l5F.js';
import '../BVrU3Npi-C4DtFzfp.js';
import '../InlineText-caQaZXpr.js';

const React = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const { $Div, $DataView, $ConditionalVisibilityWrapper, $Label, $FormGroup, $TextBox, $Combobox, $CheckBox, $ActionButton } = asPluginWidgets({ Div, DataView, ConditionalVisibilityWrapper, Label, FormGroup, TextBox, Combobox, CheckBox, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p16.Administration.Account_Edit.layoutGrid1",
      $widgetId: "p16.Administration.Account_Edit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p16.Administration.Account_Edit.layoutGrid1$row0",
            $widgetId: "p16.Administration.Account_Edit.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p16.Administration.Account_Edit.layoutGrid1$row0$column0",
                  $widgetId: "p16.Administration.Account_Edit.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p16.Administration.Account_Edit.dataView1",
                        $widgetId: "p16.Administration.Account_Edit.dataView1",
                        class: "mx-name-dataView1 form-horizontal",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p16.17",
                          "scope": "$Account",
                          "editable": true
                        }),
                        emptyMessage: TextProperty({
                          "value": selectTranslation([
                            ""
                          ])
                        }),
                        body: [
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p16.Administration.Account_Edit.label4$visibility",
                              $widgetId: "p16.Administration.Account_Edit.label4$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "not", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "IsLocalUser" }] }, "args": { "currentObject": { "widget": "p16.Administration.Account_Edit.dataView1", "source": "object" } } }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $Label,
                                  {
                                    key: "p16.Administration.Account_Edit.label4",
                                    $widgetId: "p16.Administration.Account_Edit.label4",
                                    class: "mx-name-label4 alert alert-warning",
                                    style: {
                                      "width": "100%"
                                    },
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p16.Administration.Account_Edit.label4"
                                    }),
                                    caption: TextProperty({
                                      "value": selectTranslation([
                                        "Mendix AppCloud users are provisioned by the AppCloudServices module, any changes made in this form might get overwritten. "
                                      ])
                                    })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p16.Administration.Account_Edit.textBox6$formGroup",
                              $widgetId: "p16.Administration.Account_Edit.textBox6$formGroup",
                              class: "mx-name-textBox6 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p16.Administration.Account_Edit.textBox6",
                                    $widgetId: "p16.Administration.Account_Edit.textBox6",
                                    inputValue: AttributeProperty({
                                      "scope": "p16.Administration.Account_Edit.dataView1",
                                      "path": "",
                                      "entity": "Administration.Account",
                                      "attribute": "FullName",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null,
                                      "formatting": {}
                                    }),
                                    isPassword: false,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    mask: "",
                                    readOnlyStyle: "text",
                                    maxLength: 200,
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    onEnterKeyPress: void 0,
                                    ariaLabel: void 0,
                                    autocomplete: "on",
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    ariaRequired: void 0,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p16.Administration.Account_Edit.textBox6"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Full name" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p16.Administration.Account_Edit.textBox6"
                              }),
                              width: 3,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p16.Administration.Account_Edit.textBox6"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p16.Administration.Account_Edit.textBox9$formGroup$visibility",
                              $widgetId: "p16.Administration.Account_Edit.textBox9$formGroup$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "IsLocalUser" }, "args": { "currentObject": { "widget": "p16.Administration.Account_Edit.dataView1", "source": "object" } } }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p16.Administration.Account_Edit.textBox9$formGroup",
                                    $widgetId: "p16.Administration.Account_Edit.textBox9$formGroup",
                                    class: "mx-name-textBox9 mx-textbox",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $TextBox,
                                        {
                                          key: "p16.Administration.Account_Edit.textBox9",
                                          $widgetId: "p16.Administration.Account_Edit.textBox9",
                                          inputValue: AttributeProperty({
                                            "scope": "p16.Administration.Account_Edit.dataView1",
                                            "path": "",
                                            "entity": "Administration.Account",
                                            "attribute": "Name",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                            "isList": false,
                                            "validation": null,
                                            "formatting": {}
                                          }),
                                          isPassword: false,
                                          placeholder: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          mask: "",
                                          readOnlyStyle: "text",
                                          maxLength: 100,
                                          onEnter: void 0,
                                          onLeave: void 0,
                                          onEnterKeyPress: void 0,
                                          ariaLabel: void 0,
                                          autocomplete: "on",
                                          submitWhileEditing: false,
                                          submitDelay: 300,
                                          ariaRequired: void 0,
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p16.Administration.Account_Edit.textBox9"
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "User name" }, "args": {} }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p16.Administration.Account_Edit.textBox9"
                                    }),
                                    width: 3,
                                    orientation: "horizontal",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p16.Administration.Account_Edit.textBox9"
                                    })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p16.Administration.Account_Edit.textBox92$formGroup$visibility",
                              $widgetId: "p16.Administration.Account_Edit.textBox92$formGroup$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "IsLocalUser" }, "args": { "currentObject": { "widget": "p16.Administration.Account_Edit.dataView1", "source": "object" } } }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p16.Administration.Account_Edit.textBox92$formGroup",
                                    $widgetId: "p16.Administration.Account_Edit.textBox92$formGroup",
                                    class: "mx-name-textBox92 mx-textbox",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $TextBox,
                                        {
                                          key: "p16.Administration.Account_Edit.textBox92",
                                          $widgetId: "p16.Administration.Account_Edit.textBox92",
                                          inputValue: AttributeProperty({
                                            "scope": "p16.Administration.Account_Edit.dataView1",
                                            "path": "",
                                            "entity": "Administration.Account",
                                            "attribute": "Name",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                            "isList": false,
                                            "isEditable": { "expr": { "type": "literal", "value": false }, "args": {} },
                                            "validation": null,
                                            "formatting": {}
                                          }),
                                          isPassword: false,
                                          placeholder: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          mask: "",
                                          readOnlyStyle: "text",
                                          maxLength: 100,
                                          onEnter: void 0,
                                          onLeave: void 0,
                                          onEnterKeyPress: void 0,
                                          ariaLabel: void 0,
                                          autocomplete: "on",
                                          submitWhileEditing: false,
                                          submitDelay: 300,
                                          ariaRequired: void 0,
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p16.Administration.Account_Edit.textBox92"
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "OpenID" }, "args": {} }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p16.Administration.Account_Edit.textBox92"
                                    }),
                                    width: 3,
                                    orientation: "horizontal",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p16.Administration.Account_Edit.textBox92"
                                    })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p16.Administration.Account_Edit.comboBox2$formGroup",
                              $widgetId: "p16.Administration.Account_Edit.comboBox2$formGroup",
                              class: "mx-name-comboBox2",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $Combobox,
                                  {
                                    key: "p16.Administration.Account_Edit.comboBox2",
                                    $widgetId: "p16.Administration.Account_Edit.comboBox2",
                                    optionsSourceType: "association",
                                    attributeAssociation: AssociationProperty({
                                      "type": "ReferenceSet",
                                      "entity": "Administration.Account",
                                      "path": "",
                                      "attribute": "System.UserRoles",
                                      "endpointEntity": "System.UserRole",
                                      "selectableObjectsId": "p16.0",
                                      "scope": "p16.Administration.Account_Edit.dataView1",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                    }),
                                    optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                      "dataSourceId": "p16.0",
                                      "entity": "System.UserRole",
                                      "scope": "p16.Administration.Account_Edit.dataView1",
                                      "operationId": "YRgrqXVIBFSj2U5fdvy8Xw",
                                      "sort": [
                                        [
                                          "Name",
                                          "asc"
                                        ]
                                      ],
                                      "constraints": { "type": "relatedEntity", "left": { "type": "attribute", "attribute": "id", "context": "System.UserRole", "attributeType": "ObjectReference" }, "rightEntity": "System.UserRole", "rightEntityAlias": "System.UserRole1", "right": { "type": "attribute", "attribute": "System.grantableRoles", "context": "System.UserRole1", "attributeType": "ObjectReference" }, "next": { "type": "relatedEntity", "left": { "type": "attribute", "attribute": "id", "context": "System.UserRole1", "attributeType": "ObjectReference" }, "rightEntity": "System.User", "rightEntityAlias": "System.User", "right": { "type": "attribute", "attribute": "System.UserRoles", "context": "System.User", "attributeType": "ObjectReference" }, "next": { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "id", "context": "System.User", "attributeType": "ObjectReference" }, { "type": "token", "name": "currentUser" }] } } }
                                    }),
                                    optionsSourceAssociationCaptionType: "attribute",
                                    optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                                      "path": "",
                                      "entity": "System.UserRole",
                                      "attribute": "Name",
                                      "attributeType": "String",
                                      "sortable": true,
                                      "filterable": true,
                                      "dataSourceId": "p16.0",
                                      "isList": false
                                    }),
                                    optionsSourceAssociationCaptionExpression: void 0,
                                    emptyOptionText: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    filterType: "contains",
                                    noOptionsText: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    clearable: true,
                                    optionsSourceAssociationCustomContentType: "no",
                                    optionsSourceAssociationCustomContent: void 0,
                                    showFooter: false,
                                    menuFooterContent: void 0,
                                    selectionMethod: "checkbox",
                                    selectedItemsStyle: "text",
                                    selectAllButton: false,
                                    selectAllButtonCaption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                      })
                                    ]),
                                    onChangeEvent: void 0,
                                    onEnterEvent: void 0,
                                    onLeaveEvent: void 0,
                                    ariaRequired: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                    }),
                                    clearButtonAriaLabel: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                      })
                                    ]),
                                    removeValueAriaLabel: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                      })
                                    ]),
                                    a11ySelectedValue: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                      })
                                    ]),
                                    a11yOptionsAvailable: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                      })
                                    ]),
                                    a11yInstructions: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                      })
                                    ]),
                                    source: "context",
                                    optionsSourceDatabaseDataSource: void 0,
                                    optionsSourceDatabaseCaptionType: "attribute",
                                    optionsSourceStaticDataSource: [],
                                    optionsSourceDatabaseCustomContentType: "no",
                                    staticDataSourceCustomContentType: "no",
                                    readOnlyStyle: "text",
                                    lazyLoading: true,
                                    loadingType: "spinner",
                                    selectedItemsSorting: "none",
                                    customEditability: "default",
                                    customEditabilityExpression: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                    }),
                                    onChangeFilterInputEvent: void 0,
                                    filterInputDebounceInterval: 200,
                                    ariaLabel: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Combo box" }, "args": {} }
                                      })
                                    ]),
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p16.Administration.Account_Edit.comboBox2"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "User role(s)" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p16.Administration.Account_Edit.comboBox2"
                              }),
                              width: 3,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p16.Administration.Account_Edit.comboBox2"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p16.Administration.Account_Edit.checkBox1$formGroup",
                              $widgetId: "p16.Administration.Account_Edit.checkBox1$formGroup",
                              class: "mx-name-checkBox1 mx-checkbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $CheckBox,
                                  {
                                    key: "p16.Administration.Account_Edit.checkBox1",
                                    $widgetId: "p16.Administration.Account_Edit.checkBox1",
                                    value: AttributeProperty({
                                      "scope": "p16.Administration.Account_Edit.dataView1",
                                      "path": "",
                                      "entity": "Administration.Account",
                                      "attribute": "Blocked",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null
                                    }),
                                    readOnlyStyle: "text",
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    caption: void 0,
                                    ariaLabel: void 0,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p16.Administration.Account_Edit.checkBox1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Blocked" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p16.Administration.Account_Edit.checkBox1"
                              }),
                              width: 3,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p16.Administration.Account_Edit.checkBox1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p16.Administration.Account_Edit.checkBox2$formGroup",
                              $widgetId: "p16.Administration.Account_Edit.checkBox2$formGroup",
                              class: "mx-name-checkBox2 mx-checkbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $CheckBox,
                                  {
                                    key: "p16.Administration.Account_Edit.checkBox2",
                                    $widgetId: "p16.Administration.Account_Edit.checkBox2",
                                    value: AttributeProperty({
                                      "scope": "p16.Administration.Account_Edit.dataView1",
                                      "path": "",
                                      "entity": "Administration.Account",
                                      "attribute": "Active",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null
                                    }),
                                    readOnlyStyle: "text",
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    caption: void 0,
                                    ariaLabel: void 0,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p16.Administration.Account_Edit.checkBox2"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Active" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p16.Administration.Account_Edit.checkBox2"
                              }),
                              width: 3,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p16.Administration.Account_Edit.checkBox2"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p16.Administration.Account_Edit.comboBox3$formGroup",
                              $widgetId: "p16.Administration.Account_Edit.comboBox3$formGroup",
                              class: "mx-name-comboBox3",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $Combobox,
                                  {
                                    key: "p16.Administration.Account_Edit.comboBox3",
                                    $widgetId: "p16.Administration.Account_Edit.comboBox3",
                                    optionsSourceType: "association",
                                    attributeAssociation: AssociationProperty({
                                      "type": "Reference",
                                      "entity": "Administration.Account",
                                      "path": "",
                                      "attribute": "System.User_Language",
                                      "endpointEntity": "System.Language",
                                      "selectableObjectsId": "p16.1",
                                      "scope": "p16.Administration.Account_Edit.dataView1",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                    }),
                                    optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                      "dataSourceId": "p16.1",
                                      "entity": "System.Language",
                                      "scope": "p16.Administration.Account_Edit.dataView1",
                                      "operationId": "QoUh7yLG5V+s54EcvSERRA",
                                      "sort": []
                                    }),
                                    optionsSourceAssociationCaptionType: "attribute",
                                    optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                                      "path": "",
                                      "entity": "System.Language",
                                      "attribute": "Description",
                                      "attributeType": "String",
                                      "sortable": true,
                                      "filterable": true,
                                      "dataSourceId": "p16.1",
                                      "isList": false
                                    }),
                                    optionsSourceAssociationCaptionExpression: void 0,
                                    emptyOptionText: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    filterType: "contains",
                                    noOptionsText: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    clearable: true,
                                    optionsSourceAssociationCustomContentType: "no",
                                    optionsSourceAssociationCustomContent: void 0,
                                    showFooter: false,
                                    menuFooterContent: void 0,
                                    selectionMethod: "checkbox",
                                    selectedItemsStyle: "text",
                                    selectAllButton: false,
                                    selectAllButtonCaption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                      })
                                    ]),
                                    onChangeEvent: void 0,
                                    onEnterEvent: void 0,
                                    onLeaveEvent: void 0,
                                    ariaRequired: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                    }),
                                    clearButtonAriaLabel: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                      })
                                    ]),
                                    removeValueAriaLabel: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                      })
                                    ]),
                                    a11ySelectedValue: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                      })
                                    ]),
                                    a11yOptionsAvailable: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                      })
                                    ]),
                                    a11yInstructions: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                      })
                                    ]),
                                    source: "context",
                                    optionsSourceDatabaseDataSource: void 0,
                                    optionsSourceDatabaseCaptionType: "attribute",
                                    optionsSourceStaticDataSource: [],
                                    optionsSourceDatabaseCustomContentType: "no",
                                    staticDataSourceCustomContentType: "no",
                                    readOnlyStyle: "text",
                                    lazyLoading: true,
                                    loadingType: "spinner",
                                    selectedItemsSorting: "none",
                                    customEditability: "default",
                                    customEditabilityExpression: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                    }),
                                    onChangeFilterInputEvent: void 0,
                                    filterInputDebounceInterval: 200,
                                    ariaLabel: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Combo box" }, "args": {} }
                                      })
                                    ]),
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p16.Administration.Account_Edit.comboBox3"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Language" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p16.Administration.Account_Edit.comboBox3"
                              }),
                              width: 3,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p16.Administration.Account_Edit.comboBox3"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p16.Administration.Account_Edit.comboBox4$formGroup",
                              $widgetId: "p16.Administration.Account_Edit.comboBox4$formGroup",
                              class: "mx-name-comboBox4",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $Combobox,
                                  {
                                    key: "p16.Administration.Account_Edit.comboBox4",
                                    $widgetId: "p16.Administration.Account_Edit.comboBox4",
                                    optionsSourceType: "association",
                                    attributeAssociation: AssociationProperty({
                                      "type": "Reference",
                                      "entity": "Administration.Account",
                                      "path": "",
                                      "attribute": "System.User_TimeZone",
                                      "endpointEntity": "System.TimeZone",
                                      "selectableObjectsId": "p16.2",
                                      "scope": "p16.Administration.Account_Edit.dataView1",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                    }),
                                    optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                      "dataSourceId": "p16.2",
                                      "entity": "System.TimeZone",
                                      "scope": "p16.Administration.Account_Edit.dataView1",
                                      "operationId": "GBHugr0/9lmJbXjyon+iMw",
                                      "sort": [
                                        [
                                          "RawOffset",
                                          "asc"
                                        ],
                                        [
                                          "Description",
                                          "asc"
                                        ]
                                      ]
                                    }),
                                    optionsSourceAssociationCaptionType: "expression",
                                    optionsSourceAssociationCaptionExpression: ListExpressionProperty({
                                      "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Description" }, "args": { "currentObject": { "widget": "p16.Administration.Account_Edit.comboBox4", "source": "object" } } },
                                      "dataSourceId": "p16.2"
                                    }),
                                    emptyOptionText: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    filterType: "contains",
                                    noOptionsText: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    clearable: true,
                                    optionsSourceAssociationCustomContentType: "no",
                                    optionsSourceAssociationCustomContent: void 0,
                                    showFooter: false,
                                    menuFooterContent: void 0,
                                    selectionMethod: "checkbox",
                                    selectedItemsStyle: "text",
                                    selectAllButton: false,
                                    selectAllButtonCaption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                      })
                                    ]),
                                    onChangeEvent: void 0,
                                    onEnterEvent: void 0,
                                    onLeaveEvent: void 0,
                                    ariaRequired: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                    }),
                                    clearButtonAriaLabel: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                      })
                                    ]),
                                    removeValueAriaLabel: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                      })
                                    ]),
                                    a11ySelectedValue: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                      })
                                    ]),
                                    a11yOptionsAvailable: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                      })
                                    ]),
                                    a11yInstructions: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                      })
                                    ]),
                                    source: "context",
                                    optionsSourceDatabaseDataSource: void 0,
                                    optionsSourceDatabaseCaptionType: "attribute",
                                    optionsSourceStaticDataSource: [],
                                    optionsSourceDatabaseCustomContentType: "no",
                                    staticDataSourceCustomContentType: "no",
                                    readOnlyStyle: "text",
                                    lazyLoading: true,
                                    loadingType: "spinner",
                                    selectedItemsSorting: "none",
                                    customEditability: "default",
                                    customEditabilityExpression: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                    }),
                                    onChangeFilterInputEvent: void 0,
                                    filterInputDebounceInterval: 200,
                                    ariaLabel: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Combo box" }, "args": {} }
                                      })
                                    ]),
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p16.Administration.Account_Edit.comboBox4"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Time zone" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p16.Administration.Account_Edit.comboBox4"
                              }),
                              width: 3,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p16.Administration.Account_Edit.comboBox4"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p16.Administration.Account_Edit.microflowTrigger1$visibility",
                              $widgetId: "p16.Administration.Account_Edit.microflowTrigger1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "conditional", "condition": { "type": "variable", "variable": "currentObject", "path": "IsLocalUser" }, "then": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p16.Administration.Account_Edit.dataView1", "source": "object" } } }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p16.Administration.Account_Edit.microflowTrigger1",
                                    $widgetId: "p16.Administration.Account_Edit.microflowTrigger1",
                                    buttonId: "p16.Administration.Account_Edit.microflowTrigger1",
                                    class: "mx-name-microflowTrigger1 spacing-outer-bottom-medium",
                                    style: void 0,
                                    tabIndex: void 0,
                                    renderType: "button",
                                    role: void 0,
                                    buttonClass: "btn-default",
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Change password" }, "args": {} }
                                      })
                                    ]),
                                    tooltip: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    icon: void 0,
                                    action: ActionProperty({
                                      "action": { "type": "callMicroflow", "argMap": { "Account": { "widget": "$Account", "source": "object" } }, "config": { "operationId": "SsFjUV8ykVCo5QGcU8Rzjg", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                      "abortOnServerValidation": true
                                    })
                                  }
                                )
                              ]
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p16.Administration.Account_Edit.saveButton1",
                              $widgetId: "p16.Administration.Account_Edit.saveButton1",
                              buttonId: "p16.Administration.Account_Edit.saveButton1",
                              class: "mx-name-saveButton1",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "button",
                              role: void 0,
                              buttonClass: "btn-success",
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Save" }, "args": {} }
                                })
                              ]),
                              tooltip: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              icon: void 0,
                              action: ActionProperty({
                                "action": { "type": "saveChanges", "argMap": { "$object": { "widget": "p16.Administration.Account_Edit.dataView1", "source": "object" } }, "config": { "operationId": "j352uvl+Zlm7K+/ZbTQndQ", "closePage": true }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p16.Administration.Account_Edit.cancelButton1",
                              $widgetId: "p16.Administration.Account_Edit.cancelButton1",
                              buttonId: "p16.Administration.Account_Edit.cancelButton1",
                              class: "mx-name-cancelButton1",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "button",
                              role: void 0,
                              buttonClass: "btn-default",
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Cancel" }, "args": {} }
                                })
                              ]),
                              tooltip: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              icon: void 0,
                              action: ActionProperty({
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "GQUPkYDVFlufzPbdnJtxbQ", "closePage": true }, "disabledDuringExecution": true },
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
]);
const title = selectTranslation([
  "Edit Account"
]);
const classes = "";
const cancelChangesOperationId = "qRo24i/sxVq1V44G1oy7qw";
const closeButton = "p16.Administration.Account_Edit.cancelButton1";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
