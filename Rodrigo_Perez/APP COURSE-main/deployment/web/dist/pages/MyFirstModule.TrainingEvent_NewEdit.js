import { reactExports, asPluginWidgets, selectTranslation } from '../index-CAr0kpKK.js';
import { Div, PageFragment, ExpressionProperty } from '../ScrollContainer-ClJHkivb.js';
import { ActionButton, ActionProperty, TextProperty } from '../ActionButton-BhLF8XeL.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-1LJQJmcv.js';
import { ComboboxWidgetModule, AssociationProperty } from '../Combobox-wzi_MwrV.js';
import { FormGroup, DerivedUniqueIdProperty, ValidationProperty } from '../FormGroup-NzGxSZNx.js';
import { DatabaseObjectListProperty } from '../XQdQuDNG-DSqxqUMm.js';
import { ListAttributeProperty } from '../ListAttributeProperty-CXg2mNVc.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-D3VnlN1I.js';
import { DataView } from '../DataView-BOhFdS09.js';
import { DatePicker } from '../DatePicker-BMohDKHX.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-DpPsiGkC.js';
import { AttributeProperty } from '../3ZSM-Jib-DaeMRSYd.js';
import '../BkqAssms-UB_bkK2K.js';
import '../DmsI6saM-DYa5cVH3.js';
import '../EJisauA3-k7KfvnWZ.js';

const React = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const { $Div, $FormGroup, $Combobox, $DataView, $DatePicker, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, FormGroup, Combobox, DataView, DatePicker, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.MyFirstModule.TrainingEvent_NewEdit.layoutGrid1",
      $widgetId: "p.MyFirstModule.TrainingEvent_NewEdit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.MyFirstModule.TrainingEvent_NewEdit.layoutGrid1$row0",
            $widgetId: "p.MyFirstModule.TrainingEvent_NewEdit.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstModule.TrainingEvent_NewEdit.layoutGrid1$row0$column0",
                  $widgetId: "p.MyFirstModule.TrainingEvent_NewEdit.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $FormGroup,
                      {
                        key: "p.MyFirstModule.TrainingEvent_NewEdit.comboBox1$formGroup",
                        $widgetId: "p.MyFirstModule.TrainingEvent_NewEdit.comboBox1$formGroup",
                        class: "mx-name-comboBox1",
                        style: void 0,
                        control: [
                          /* @__PURE__ */ React.createElement(
                            $Combobox,
                            {
                              key: "p.MyFirstModule.TrainingEvent_NewEdit.comboBox1",
                              $widgetId: "p.MyFirstModule.TrainingEvent_NewEdit.comboBox1",
                              source: "context",
                              optionsSourceType: "association",
                              optionsSourceDatabaseDataSource: void 0,
                              optionsSourceAssociationCaptionType: "attribute",
                              optionsSourceDatabaseCaptionType: "attribute",
                              optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                                "path": "",
                                "entity": "MyFirstModule.Course",
                                "attribute": "Title",
                                "attributeType": "String",
                                "sortable": true,
                                "filterable": true,
                                "dataSourceId": "p.0",
                                "isList": false
                              }),
                              optionsSourceAssociationCaptionExpression: void 0,
                              attributeAssociation: AssociationProperty({
                                "type": "Reference",
                                "entity": void 0,
                                "path": "",
                                "attribute": "MyFirstModule.TrainingEvent_Course",
                                "endpointEntity": "MyFirstModule.Course",
                                "selectableObjectsId": "p.0",
                                "scope": "$TrainingEvent",
                                "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                              }),
                              optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                "dataSourceId": "p.0",
                                "entity": "MyFirstModule.Course",
                                "scope": "$TrainingEvent",
                                "operationId": "vIsFmcYkGl6w7e2NP2usEA",
                                "sort": []
                              }),
                              optionsSourceStaticDataSource: [],
                              emptyOptionText: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                })
                              ]),
                              noOptionsText: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                })
                              ]),
                              clearable: true,
                              optionsSourceAssociationCustomContentType: "no",
                              optionsSourceAssociationCustomContent: void 0,
                              optionsSourceDatabaseCustomContentType: "no",
                              staticDataSourceCustomContentType: "no",
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
                              customEditability: "default",
                              customEditabilityExpression: ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                              }),
                              readOnlyStyle: "bordered",
                              onChangeEvent: ActionProperty({
                                "action": { "type": "callMicroflow", "argMap": { "TrainingEvent": { "widget": "$TrainingEvent", "source": "object" } }, "config": { "operationId": "rRVSbpLE0Vebcihoj96zXg", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                "argumentTypes": {}
                              }),
                              onEnterEvent: void 0,
                              onLeaveEvent: void 0,
                              onChangeFilterInputEvent: void 0,
                              filterInputDebounceInterval: 200,
                              ariaRequired: ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                              }),
                              ariaLabel: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Combo box" }, "args": {} }
                                })
                              ]),
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
                              lazyLoading: true,
                              loadingType: "spinner",
                              selectedItemsSorting: "none",
                              filterType: "contains",
                              tabIndex: void 0,
                              id: DerivedUniqueIdProperty({
                                "widgetId": "p.MyFirstModule.TrainingEvent_NewEdit.comboBox1"
                              })
                            }
                          )
                        ],
                        caption: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Course" }, "args": {} }
                          })
                        ]),
                        labelFor: DerivedUniqueIdProperty({
                          "widgetId": "p.MyFirstModule.TrainingEvent_NewEdit.comboBox1"
                        }),
                        width: void 0,
                        orientation: "vertical",
                        hasError: ValidationProperty({
                          "inputWidgetId": "p.MyFirstModule.TrainingEvent_NewEdit.comboBox1"
                        })
                      }
                    ),
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.MyFirstModule.TrainingEvent_NewEdit.dataView6",
                        $widgetId: "p.MyFirstModule.TrainingEvent_NewEdit.dataView6",
                        class: "mx-name-dataView6 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.18",
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
                            $FormGroup,
                            {
                              key: "p.MyFirstModule.TrainingEvent_NewEdit.datePicker1$formGroup",
                              $widgetId: "p.MyFirstModule.TrainingEvent_NewEdit.datePicker1$formGroup",
                              class: "mx-name-datePicker1 mx-datepicker",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $DatePicker,
                                  {
                                    key: "p.MyFirstModule.TrainingEvent_NewEdit.datePicker1",
                                    $widgetId: "p.MyFirstModule.TrainingEvent_NewEdit.datePicker1",
                                    mode: "date",
                                    showCalendarButton: true,
                                    inputValue: AttributeProperty({
                                      "scope": "p.MyFirstModule.TrainingEvent_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "MyFirstModule.TrainingEvent",
                                      "attribute": "StartDate",
                                      "onChange": { "type": "callMicroflow", "argMap": { "TrainingEvent": { "widget": "$TrainingEvent", "source": "object" } }, "config": { "operationId": "rRVSbpLE0Vebcihoj96zXg", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null,
                                      "formatting": {
                                        "dateFormat": selectTranslation([
                                          {
                                            "type": "date"
                                          }
                                        ])
                                      }
                                    }),
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    buttonLabel: TextProperty({
                                      "value": selectTranslation([
                                        "Show date picker"
                                      ])
                                    }),
                                    readOnlyStyle: "control",
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    ariaLabel: void 0,
                                    ariaRequired: void 0,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.MyFirstModule.TrainingEvent_NewEdit.datePicker1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Start date" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.MyFirstModule.TrainingEvent_NewEdit.datePicker1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.MyFirstModule.TrainingEvent_NewEdit.datePicker1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.MyFirstModule.TrainingEvent_NewEdit.datePicker2$formGroup",
                              $widgetId: "p.MyFirstModule.TrainingEvent_NewEdit.datePicker2$formGroup",
                              class: "mx-name-datePicker2 mx-datepicker",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $DatePicker,
                                  {
                                    key: "p.MyFirstModule.TrainingEvent_NewEdit.datePicker2",
                                    $widgetId: "p.MyFirstModule.TrainingEvent_NewEdit.datePicker2",
                                    mode: "date",
                                    showCalendarButton: true,
                                    inputValue: AttributeProperty({
                                      "scope": "p.MyFirstModule.TrainingEvent_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "MyFirstModule.TrainingEvent",
                                      "attribute": "EndDate",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null,
                                      "formatting": {
                                        "dateFormat": selectTranslation([
                                          {
                                            "type": "date"
                                          }
                                        ])
                                      }
                                    }),
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    buttonLabel: TextProperty({
                                      "value": selectTranslation([
                                        "Show date picker"
                                      ])
                                    }),
                                    readOnlyStyle: "control",
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    ariaLabel: void 0,
                                    ariaRequired: void 0,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.MyFirstModule.TrainingEvent_NewEdit.datePicker2"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "End date" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.MyFirstModule.TrainingEvent_NewEdit.datePicker2"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.MyFirstModule.TrainingEvent_NewEdit.datePicker2"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.MyFirstModule.TrainingEvent_NewEdit.comboBox2$formGroup",
                              $widgetId: "p.MyFirstModule.TrainingEvent_NewEdit.comboBox2$formGroup",
                              class: "mx-name-comboBox2",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $Combobox,
                                  {
                                    key: "p.MyFirstModule.TrainingEvent_NewEdit.comboBox2",
                                    $widgetId: "p.MyFirstModule.TrainingEvent_NewEdit.comboBox2",
                                    source: "context",
                                    optionsSourceType: "association",
                                    optionsSourceDatabaseDataSource: void 0,
                                    optionsSourceAssociationCaptionType: "attribute",
                                    optionsSourceDatabaseCaptionType: "attribute",
                                    optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                                      "path": "",
                                      "entity": "MyFirstModule.Location",
                                      "attribute": "Name",
                                      "attributeType": "String",
                                      "sortable": true,
                                      "filterable": true,
                                      "dataSourceId": "p.1",
                                      "isList": false
                                    }),
                                    optionsSourceAssociationCaptionExpression: void 0,
                                    attributeAssociation: AssociationProperty({
                                      "type": "Reference",
                                      "entity": "MyFirstModule.TrainingEvent",
                                      "path": "",
                                      "attribute": "MyFirstModule.TrainingEvent_Location",
                                      "endpointEntity": "MyFirstModule.Location",
                                      "selectableObjectsId": "p.1",
                                      "scope": "p.MyFirstModule.TrainingEvent_NewEdit.dataView6",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                    }),
                                    optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                      "dataSourceId": "p.1",
                                      "entity": "MyFirstModule.Location",
                                      "scope": "p.MyFirstModule.TrainingEvent_NewEdit.dataView6",
                                      "operationId": "szEeMQVy6FuiBwKreX0Ajw",
                                      "sort": []
                                    }),
                                    optionsSourceStaticDataSource: [],
                                    emptyOptionText: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    noOptionsText: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    clearable: true,
                                    optionsSourceAssociationCustomContentType: "no",
                                    optionsSourceAssociationCustomContent: void 0,
                                    optionsSourceDatabaseCustomContentType: "no",
                                    staticDataSourceCustomContentType: "no",
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
                                    customEditability: "default",
                                    customEditabilityExpression: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                    }),
                                    readOnlyStyle: "bordered",
                                    onChangeEvent: void 0,
                                    onEnterEvent: void 0,
                                    onLeaveEvent: void 0,
                                    onChangeFilterInputEvent: void 0,
                                    filterInputDebounceInterval: 200,
                                    ariaRequired: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                    }),
                                    ariaLabel: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Combo box" }, "args": {} }
                                      })
                                    ]),
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
                                    lazyLoading: true,
                                    loadingType: "spinner",
                                    selectedItemsSorting: "none",
                                    filterType: "contains",
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.MyFirstModule.TrainingEvent_NewEdit.comboBox2"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Location" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.MyFirstModule.TrainingEvent_NewEdit.comboBox2"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.MyFirstModule.TrainingEvent_NewEdit.comboBox2"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.MyFirstModule.TrainingEvent_NewEdit.comboBox3$formGroup",
                              $widgetId: "p.MyFirstModule.TrainingEvent_NewEdit.comboBox3$formGroup",
                              class: "mx-name-comboBox3",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $Combobox,
                                  {
                                    key: "p.MyFirstModule.TrainingEvent_NewEdit.comboBox3",
                                    $widgetId: "p.MyFirstModule.TrainingEvent_NewEdit.comboBox3",
                                    source: "context",
                                    optionsSourceType: "association",
                                    optionsSourceDatabaseDataSource: void 0,
                                    optionsSourceAssociationCaptionType: "attribute",
                                    optionsSourceDatabaseCaptionType: "attribute",
                                    optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                                      "path": "",
                                      "entity": "MyFirstModule.Teacher",
                                      "attribute": "Name",
                                      "attributeType": "String",
                                      "sortable": true,
                                      "filterable": true,
                                      "dataSourceId": "p.2",
                                      "isList": false
                                    }),
                                    optionsSourceAssociationCaptionExpression: void 0,
                                    attributeAssociation: AssociationProperty({
                                      "type": "Reference",
                                      "entity": "MyFirstModule.TrainingEvent",
                                      "path": "",
                                      "attribute": "MyFirstModule.TrainingEvent_Teacher",
                                      "endpointEntity": "MyFirstModule.Teacher",
                                      "selectableObjectsId": "p.2",
                                      "scope": "p.MyFirstModule.TrainingEvent_NewEdit.dataView6",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                    }),
                                    optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                      "dataSourceId": "p.2",
                                      "entity": "MyFirstModule.Teacher",
                                      "scope": "p.MyFirstModule.TrainingEvent_NewEdit.dataView6",
                                      "operationId": "svmfNRkNrFWwtH2izgeQGw",
                                      "sort": []
                                    }),
                                    optionsSourceStaticDataSource: [],
                                    emptyOptionText: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    noOptionsText: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    clearable: true,
                                    optionsSourceAssociationCustomContentType: "no",
                                    optionsSourceAssociationCustomContent: void 0,
                                    optionsSourceDatabaseCustomContentType: "no",
                                    staticDataSourceCustomContentType: "no",
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
                                    customEditability: "default",
                                    customEditabilityExpression: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                    }),
                                    readOnlyStyle: "bordered",
                                    onChangeEvent: void 0,
                                    onEnterEvent: void 0,
                                    onLeaveEvent: void 0,
                                    onChangeFilterInputEvent: void 0,
                                    filterInputDebounceInterval: 200,
                                    ariaRequired: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                    }),
                                    ariaLabel: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Combo box" }, "args": {} }
                                      })
                                    ]),
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
                                    lazyLoading: true,
                                    loadingType: "spinner",
                                    selectedItemsSorting: "none",
                                    filterType: "contains",
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.MyFirstModule.TrainingEvent_NewEdit.comboBox3"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Teacher" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.MyFirstModule.TrainingEvent_NewEdit.comboBox3"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.MyFirstModule.TrainingEvent_NewEdit.comboBox3"
                              })
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.MyFirstModule.TrainingEvent_NewEdit.actionButton1$visibility",
                              $widgetId: "p.MyFirstModule.TrainingEvent_NewEdit.actionButton1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.MyFirstModule.TrainingEvent_NewEdit.actionButton1",
                                    $widgetId: "p.MyFirstModule.TrainingEvent_NewEdit.actionButton1",
                                    buttonId: "p.MyFirstModule.TrainingEvent_NewEdit.actionButton1",
                                    class: "mx-name-actionButton1",
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
                                      "action": { "type": "callMicroflow", "argMap": { "TrainingEvent": { "widget": "$TrainingEvent", "source": "object" } }, "config": { "operationId": "1c/Y2lHQ+FKDkidgchgGQA", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                      "abortOnServerValidation": true
                                    })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.MyFirstModule.TrainingEvent_NewEdit.actionButton2",
                              $widgetId: "p.MyFirstModule.TrainingEvent_NewEdit.actionButton2",
                              buttonId: "p.MyFirstModule.TrainingEvent_NewEdit.actionButton2",
                              class: "mx-name-actionButton2",
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
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "0A/NgHNum12XeE7zN8+WfQ", "closePage": true }, "disabledDuringExecution": true },
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
  "Training event New edit"
]);
const classes = "";
const autofocus = "off";
const cancelChangesOperationId = "8jGaKhoJlF+j3pnGl8EV6Q";
const style = {};
const parameters = { "$TrainingEvent": "object" };
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { autofocus, cancelChangesOperationId, classes, content, parameters, style, title };
