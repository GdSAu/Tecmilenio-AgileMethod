import { reactExports, asPluginWidgets, selectTranslation } from '../index-B8bUhI8E.js';
import { Div, PageFragment, ExpressionProperty } from '../ScrollContainer-CdywZc9i.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-D_YBiLZ6.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-Dt9vgjwI.js';
import { ComboboxWidgetModule, AssociationProperty } from '../Combobox-C3wUTaxU.js';
import { FormGroup, DerivedUniqueIdProperty, ValidationProperty } from '../FormGroup-LPgVky1u.js';
import { DatabaseObjectListProperty } from '../CESNSUMX-CEo4dwQO.js';
import { ListAttributeProperty } from '../ListAttributeProperty-gX5GX4rF.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-KPRTruOk.js';
import { DataView } from '../DataView-DWF0wJdH.js';
import { DatePicker } from '../DatePicker-BtuqMzAE.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-DxMFZUPu.js';
import { AttributeProperty } from '../BI1aYen2-B3U-e8vs.js';
import '../1OX6EehJ-ChqR_l5F.js';
import '../BVrU3Npi-C4DtFzfp.js';
import '../DsiqzbwR-BPeOjCv1.js';

const React = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const { $Div, $DataView, $FormGroup, $DatePicker, $Combobox, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, DatePicker, Combobox, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p0.MyFirstModule.TrainingEvent_NewEdit.layoutGrid1",
      $widgetId: "p0.MyFirstModule.TrainingEvent_NewEdit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p0.MyFirstModule.TrainingEvent_NewEdit.layoutGrid1$row0",
            $widgetId: "p0.MyFirstModule.TrainingEvent_NewEdit.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p0.MyFirstModule.TrainingEvent_NewEdit.layoutGrid1$row0$column0",
                  $widgetId: "p0.MyFirstModule.TrainingEvent_NewEdit.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p0.MyFirstModule.TrainingEvent_NewEdit.dataView6",
                        $widgetId: "p0.MyFirstModule.TrainingEvent_NewEdit.dataView6",
                        class: "mx-name-dataView6 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p0.15",
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
                              key: "p0.MyFirstModule.TrainingEvent_NewEdit.datePicker1$formGroup",
                              $widgetId: "p0.MyFirstModule.TrainingEvent_NewEdit.datePicker1$formGroup",
                              class: "mx-name-datePicker1 mx-datepicker",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $DatePicker,
                                  {
                                    key: "p0.MyFirstModule.TrainingEvent_NewEdit.datePicker1",
                                    $widgetId: "p0.MyFirstModule.TrainingEvent_NewEdit.datePicker1",
                                    mode: "date",
                                    showCalendarButton: true,
                                    inputValue: AttributeProperty({
                                      "scope": "p0.MyFirstModule.TrainingEvent_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "MyFirstModule.TrainingEvent",
                                      "attribute": "StartDate",
                                      "onChange": { "type": "callMicroflow", "argMap": { "TrainingEvent": { "widget": "$TrainingEvent", "source": "object" } }, "config": { "operationId": "wSzIINoLSFyynbP3NOCPHw", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
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
                                      "widgetId": "p0.MyFirstModule.TrainingEvent_NewEdit.datePicker1"
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
                                "widgetId": "p0.MyFirstModule.TrainingEvent_NewEdit.datePicker1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p0.MyFirstModule.TrainingEvent_NewEdit.datePicker1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p0.MyFirstModule.TrainingEvent_NewEdit.datePicker2$formGroup",
                              $widgetId: "p0.MyFirstModule.TrainingEvent_NewEdit.datePicker2$formGroup",
                              class: "mx-name-datePicker2 mx-datepicker",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $DatePicker,
                                  {
                                    key: "p0.MyFirstModule.TrainingEvent_NewEdit.datePicker2",
                                    $widgetId: "p0.MyFirstModule.TrainingEvent_NewEdit.datePicker2",
                                    mode: "date",
                                    showCalendarButton: true,
                                    inputValue: AttributeProperty({
                                      "scope": "p0.MyFirstModule.TrainingEvent_NewEdit.dataView6",
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
                                      "widgetId": "p0.MyFirstModule.TrainingEvent_NewEdit.datePicker2"
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
                                "widgetId": "p0.MyFirstModule.TrainingEvent_NewEdit.datePicker2"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p0.MyFirstModule.TrainingEvent_NewEdit.datePicker2"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p0.MyFirstModule.TrainingEvent_NewEdit.comboBox1$formGroup",
                              $widgetId: "p0.MyFirstModule.TrainingEvent_NewEdit.comboBox1$formGroup",
                              class: "mx-name-comboBox1",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $Combobox,
                                  {
                                    key: "p0.MyFirstModule.TrainingEvent_NewEdit.comboBox1",
                                    $widgetId: "p0.MyFirstModule.TrainingEvent_NewEdit.comboBox1",
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
                                      "dataSourceId": "p0.0",
                                      "isList": false
                                    }),
                                    optionsSourceAssociationCaptionExpression: void 0,
                                    attributeAssociation: AssociationProperty({
                                      "type": "Reference",
                                      "entity": "MyFirstModule.TrainingEvent",
                                      "path": "",
                                      "attribute": "MyFirstModule.TrainingEvent_Course",
                                      "endpointEntity": "MyFirstModule.Course",
                                      "selectableObjectsId": "p0.0",
                                      "scope": "p0.MyFirstModule.TrainingEvent_NewEdit.dataView6",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                    }),
                                    optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                      "dataSourceId": "p0.0",
                                      "entity": "MyFirstModule.Course",
                                      "scope": "p0.MyFirstModule.TrainingEvent_NewEdit.dataView6",
                                      "operationId": "TCLyBprb1ViSnvjVDCa6vA",
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
                                      "widgetId": "p0.MyFirstModule.TrainingEvent_NewEdit.comboBox1"
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
                                "widgetId": "p0.MyFirstModule.TrainingEvent_NewEdit.comboBox1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p0.MyFirstModule.TrainingEvent_NewEdit.comboBox1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p0.MyFirstModule.TrainingEvent_NewEdit.comboBox2$formGroup",
                              $widgetId: "p0.MyFirstModule.TrainingEvent_NewEdit.comboBox2$formGroup",
                              class: "mx-name-comboBox2",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $Combobox,
                                  {
                                    key: "p0.MyFirstModule.TrainingEvent_NewEdit.comboBox2",
                                    $widgetId: "p0.MyFirstModule.TrainingEvent_NewEdit.comboBox2",
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
                                      "dataSourceId": "p0.1",
                                      "isList": false
                                    }),
                                    optionsSourceAssociationCaptionExpression: void 0,
                                    attributeAssociation: AssociationProperty({
                                      "type": "Reference",
                                      "entity": "MyFirstModule.TrainingEvent",
                                      "path": "",
                                      "attribute": "MyFirstModule.TrainingEvent_Location",
                                      "endpointEntity": "MyFirstModule.Location",
                                      "selectableObjectsId": "p0.1",
                                      "scope": "p0.MyFirstModule.TrainingEvent_NewEdit.dataView6",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                    }),
                                    optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                      "dataSourceId": "p0.1",
                                      "entity": "MyFirstModule.Location",
                                      "scope": "p0.MyFirstModule.TrainingEvent_NewEdit.dataView6",
                                      "operationId": "BDXM8sW4M1GXv2pM3DT7Rw",
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
                                      "widgetId": "p0.MyFirstModule.TrainingEvent_NewEdit.comboBox2"
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
                                "widgetId": "p0.MyFirstModule.TrainingEvent_NewEdit.comboBox2"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p0.MyFirstModule.TrainingEvent_NewEdit.comboBox2"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p0.MyFirstModule.TrainingEvent_NewEdit.comboBox3$formGroup",
                              $widgetId: "p0.MyFirstModule.TrainingEvent_NewEdit.comboBox3$formGroup",
                              class: "mx-name-comboBox3",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $Combobox,
                                  {
                                    key: "p0.MyFirstModule.TrainingEvent_NewEdit.comboBox3",
                                    $widgetId: "p0.MyFirstModule.TrainingEvent_NewEdit.comboBox3",
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
                                      "dataSourceId": "p0.2",
                                      "isList": false
                                    }),
                                    optionsSourceAssociationCaptionExpression: void 0,
                                    attributeAssociation: AssociationProperty({
                                      "type": "Reference",
                                      "entity": "MyFirstModule.TrainingEvent",
                                      "path": "",
                                      "attribute": "MyFirstModule.TrainingEvent_Teacher",
                                      "endpointEntity": "MyFirstModule.Teacher",
                                      "selectableObjectsId": "p0.2",
                                      "scope": "p0.MyFirstModule.TrainingEvent_NewEdit.dataView6",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                    }),
                                    optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                      "dataSourceId": "p0.2",
                                      "entity": "MyFirstModule.Teacher",
                                      "scope": "p0.MyFirstModule.TrainingEvent_NewEdit.dataView6",
                                      "operationId": "l47QfXubwVq9w++UCdg+qw",
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
                                      "widgetId": "p0.MyFirstModule.TrainingEvent_NewEdit.comboBox3"
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
                                "widgetId": "p0.MyFirstModule.TrainingEvent_NewEdit.comboBox3"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p0.MyFirstModule.TrainingEvent_NewEdit.comboBox3"
                              })
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p0.MyFirstModule.TrainingEvent_NewEdit.actionButton1$visibility",
                              $widgetId: "p0.MyFirstModule.TrainingEvent_NewEdit.actionButton1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p0.MyFirstModule.TrainingEvent_NewEdit.actionButton1",
                                    $widgetId: "p0.MyFirstModule.TrainingEvent_NewEdit.actionButton1",
                                    buttonId: "p0.MyFirstModule.TrainingEvent_NewEdit.actionButton1",
                                    class: "mx-name-actionButton1",
                                    style: void 0,
                                    tabIndex: void 0,
                                    renderType: "button",
                                    role: void 0,
                                    buttonClass: "btn-primary",
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
                                      "action": { "type": "callMicroflow", "argMap": { "TrainingEvent": { "widget": "$TrainingEvent", "source": "object" } }, "config": { "operationId": "QP4NLU0l4lyUIu4Zoz+/4A", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                              key: "p0.MyFirstModule.TrainingEvent_NewEdit.actionButton2",
                              $widgetId: "p0.MyFirstModule.TrainingEvent_NewEdit.actionButton2",
                              buttonId: "p0.MyFirstModule.TrainingEvent_NewEdit.actionButton2",
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
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "LAdU4h3g0lWT7EG8Dq+Qdw", "closePage": true }, "disabledDuringExecution": true },
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
  "Edit Training Event"
]);
const classes = "";
const cancelChangesOperationId = "MbSI4UzNQ1C0hLc91VQ7Vg";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
