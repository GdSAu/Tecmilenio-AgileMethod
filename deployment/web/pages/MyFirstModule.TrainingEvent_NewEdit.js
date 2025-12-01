import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { AssociationProperty } from "mendix/AssociationProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListAttributeProperty } from "mendix/ListAttributeProperty";
import { TextProperty } from "mendix/TextProperty";
import { ValidationProperty } from "mendix/ValidationProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import * as ComboboxWidgetModule from "C:/Users/Vic/Mendix/LearnNow Training Management-main/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.mjs";
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;   
import "C:/Users/Vic/Mendix/LearnNow Training Management-main/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.css";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { DataView } from "mendix/widgets/web/DataView";
import { DatePicker } from "mendix/widgets/web/DatePicker";
import { Div } from "mendix/widgets/web/Div";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $FormGroup, $DatePicker, $Combobox, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, DatePicker, Combobox, ConditionalVisibilityWrapper, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p0.MyFirstModule.TrainingEvent_NewEdit.layoutGrid1"
        $widgetId="p0.MyFirstModule.TrainingEvent_NewEdit.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p0.MyFirstModule.TrainingEvent_NewEdit.layoutGrid1$row0"
                $widgetId="p0.MyFirstModule.TrainingEvent_NewEdit.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p0.MyFirstModule.TrainingEvent_NewEdit.layoutGrid1$row0$column0"
                        $widgetId="p0.MyFirstModule.TrainingEvent_NewEdit.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$DataView key="p0.MyFirstModule.TrainingEvent_NewEdit.dataView6"
                                $widgetId="p0.MyFirstModule.TrainingEvent_NewEdit.dataView6"
                                class={"mx-name-dataView6 form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p0.15",
                                    "scope": "$TrainingEvent",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$FormGroup key="p0.MyFirstModule.TrainingEvent_NewEdit.datePicker1$formGroup"
                                        $widgetId="p0.MyFirstModule.TrainingEvent_NewEdit.datePicker1$formGroup"
                                        class={"mx-name-datePicker1 mx-datepicker"}
                                        style={undefined}
                                        control={[
                                            <$DatePicker key="p0.MyFirstModule.TrainingEvent_NewEdit.datePicker1"
                                                $widgetId="p0.MyFirstModule.TrainingEvent_NewEdit.datePicker1"
                                                mode={"date"}
                                                showCalendarButton={true}
                                                inputValue={AttributeProperty({
                                                    "scope": "p0.MyFirstModule.TrainingEvent_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "MyFirstModule.TrainingEvent",
                                                    "attribute": "StartDate",
                                                    "onChange": { "type": "callMicroflow", "argMap": { "TrainingEvent": { "widget": "$TrainingEvent", "source": "object" } }, "config": { "operationId": "wSzIINoLSFyynbP3NOCPHw", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null,
                                                    "formatting": {
                                                        "dateFormat": t([
                                                            {
                                                                "type": "date"
                                                            }
                                                        ])
                                                    }
                                                })}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                buttonLabel={TextProperty({
                                                    "value": t([
                                                        "Show date picker"
                                                    ])
                                                })}
                                                readOnlyStyle={"control"}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                ariaLabel={undefined}
                                                ariaRequired={undefined}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p0.MyFirstModule.TrainingEvent_NewEdit.datePicker1"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Start date" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p0.MyFirstModule.TrainingEvent_NewEdit.datePicker1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p0.MyFirstModule.TrainingEvent_NewEdit.datePicker1"
                                        })} />,
                                    <$FormGroup key="p0.MyFirstModule.TrainingEvent_NewEdit.datePicker2$formGroup"
                                        $widgetId="p0.MyFirstModule.TrainingEvent_NewEdit.datePicker2$formGroup"
                                        class={"mx-name-datePicker2 mx-datepicker"}
                                        style={undefined}
                                        control={[
                                            <$DatePicker key="p0.MyFirstModule.TrainingEvent_NewEdit.datePicker2"
                                                $widgetId="p0.MyFirstModule.TrainingEvent_NewEdit.datePicker2"
                                                mode={"date"}
                                                showCalendarButton={true}
                                                inputValue={AttributeProperty({
                                                    "scope": "p0.MyFirstModule.TrainingEvent_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "MyFirstModule.TrainingEvent",
                                                    "attribute": "EndDate",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null,
                                                    "formatting": {
                                                        "dateFormat": t([
                                                            {
                                                                "type": "date"
                                                            }
                                                        ])
                                                    }
                                                })}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                buttonLabel={TextProperty({
                                                    "value": t([
                                                        "Show date picker"
                                                    ])
                                                })}
                                                readOnlyStyle={"control"}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                ariaLabel={undefined}
                                                ariaRequired={undefined}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p0.MyFirstModule.TrainingEvent_NewEdit.datePicker2"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "End date" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p0.MyFirstModule.TrainingEvent_NewEdit.datePicker2"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p0.MyFirstModule.TrainingEvent_NewEdit.datePicker2"
                                        })} />,
                                    <$FormGroup key="p0.MyFirstModule.TrainingEvent_NewEdit.comboBox1$formGroup"
                                        $widgetId="p0.MyFirstModule.TrainingEvent_NewEdit.comboBox1$formGroup"
                                        class={"mx-name-comboBox1"}
                                        style={undefined}
                                        control={[
                                            <$Combobox key="p0.MyFirstModule.TrainingEvent_NewEdit.comboBox1"
                                                $widgetId="p0.MyFirstModule.TrainingEvent_NewEdit.comboBox1"
                                                source={"context"}
                                                optionsSourceType={"association"}
                                                optionsSourceDatabaseDataSource={undefined}
                                                optionsSourceAssociationCaptionType={"attribute"}
                                                optionsSourceDatabaseCaptionType={"attribute"}
                                                optionsSourceAssociationCaptionAttribute={ListAttributeProperty({
                                                    "path": "",
                                                    "entity": "MyFirstModule.Course",
                                                    "attribute": "Title",
                                                    "attributeType": "String",
                                                    "sortable": true,
                                                    "filterable": true,
                                                    "dataSourceId": "p0.0",
                                                    "isList": false
                                                })}
                                                optionsSourceAssociationCaptionExpression={undefined}
                                                attributeAssociation={AssociationProperty({
                                                    "type": "Reference",
                                                    "entity": "MyFirstModule.TrainingEvent",
                                                    "path": "",
                                                    "attribute": "MyFirstModule.TrainingEvent_Course",
                                                    "endpointEntity": "MyFirstModule.Course",
                                                    "selectableObjectsId": "p0.0",
                                                    "scope": "p0.MyFirstModule.TrainingEvent_NewEdit.dataView6",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                })}
                                                optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                                    "dataSourceId": "p0.0",
                                                    "entity": "MyFirstModule.Course",
                                                    "scope": "p0.MyFirstModule.TrainingEvent_NewEdit.dataView6",
                                                    "operationId": "TCLyBprb1ViSnvjVDCa6vA",
                                                    "sort": []
                                                })}
                                                optionsSourceStaticDataSource={[]}
                                                emptyOptionText={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                noOptionsText={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                clearable={true}
                                                optionsSourceAssociationCustomContentType={"no"}
                                                optionsSourceAssociationCustomContent={undefined}
                                                optionsSourceDatabaseCustomContentType={"no"}
                                                staticDataSourceCustomContentType={"no"}
                                                showFooter={false}
                                                menuFooterContent={undefined}
                                                selectionMethod={"checkbox"}
                                                selectedItemsStyle={"text"}
                                                selectAllButton={false}
                                                selectAllButtonCaption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                                    })
                                                ])}
                                                customEditability={"default"}
                                                customEditabilityExpression={ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                                })}
                                                readOnlyStyle={"bordered"}
                                                onChangeEvent={undefined}
                                                onEnterEvent={undefined}
                                                onLeaveEvent={undefined}
                                                onChangeFilterInputEvent={undefined}
                                                filterInputDebounceInterval={200}
                                                ariaRequired={ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                                })}
                                                ariaLabel={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Combo box" }, "args": {} }
                                                    })
                                                ])}
                                                clearButtonAriaLabel={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                                    })
                                                ])}
                                                removeValueAriaLabel={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                                    })
                                                ])}
                                                a11ySelectedValue={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                                    })
                                                ])}
                                                a11yOptionsAvailable={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                                    })
                                                ])}
                                                a11yInstructions={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                                    })
                                                ])}
                                                lazyLoading={true}
                                                loadingType={"spinner"}
                                                selectedItemsSorting={"none"}
                                                filterType={"contains"}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p0.MyFirstModule.TrainingEvent_NewEdit.comboBox1"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Course" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p0.MyFirstModule.TrainingEvent_NewEdit.comboBox1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p0.MyFirstModule.TrainingEvent_NewEdit.comboBox1"
                                        })} />,
                                    <$FormGroup key="p0.MyFirstModule.TrainingEvent_NewEdit.comboBox2$formGroup"
                                        $widgetId="p0.MyFirstModule.TrainingEvent_NewEdit.comboBox2$formGroup"
                                        class={"mx-name-comboBox2"}
                                        style={undefined}
                                        control={[
                                            <$Combobox key="p0.MyFirstModule.TrainingEvent_NewEdit.comboBox2"
                                                $widgetId="p0.MyFirstModule.TrainingEvent_NewEdit.comboBox2"
                                                source={"context"}
                                                optionsSourceType={"association"}
                                                optionsSourceDatabaseDataSource={undefined}
                                                optionsSourceAssociationCaptionType={"attribute"}
                                                optionsSourceDatabaseCaptionType={"attribute"}
                                                optionsSourceAssociationCaptionAttribute={ListAttributeProperty({
                                                    "path": "",
                                                    "entity": "MyFirstModule.Location",
                                                    "attribute": "Name",
                                                    "attributeType": "String",
                                                    "sortable": true,
                                                    "filterable": true,
                                                    "dataSourceId": "p0.1",
                                                    "isList": false
                                                })}
                                                optionsSourceAssociationCaptionExpression={undefined}
                                                attributeAssociation={AssociationProperty({
                                                    "type": "Reference",
                                                    "entity": "MyFirstModule.TrainingEvent",
                                                    "path": "",
                                                    "attribute": "MyFirstModule.TrainingEvent_Location",
                                                    "endpointEntity": "MyFirstModule.Location",
                                                    "selectableObjectsId": "p0.1",
                                                    "scope": "p0.MyFirstModule.TrainingEvent_NewEdit.dataView6",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                })}
                                                optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                                    "dataSourceId": "p0.1",
                                                    "entity": "MyFirstModule.Location",
                                                    "scope": "p0.MyFirstModule.TrainingEvent_NewEdit.dataView6",
                                                    "operationId": "BDXM8sW4M1GXv2pM3DT7Rw",
                                                    "sort": []
                                                })}
                                                optionsSourceStaticDataSource={[]}
                                                emptyOptionText={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                noOptionsText={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                clearable={true}
                                                optionsSourceAssociationCustomContentType={"no"}
                                                optionsSourceAssociationCustomContent={undefined}
                                                optionsSourceDatabaseCustomContentType={"no"}
                                                staticDataSourceCustomContentType={"no"}
                                                showFooter={false}
                                                menuFooterContent={undefined}
                                                selectionMethod={"checkbox"}
                                                selectedItemsStyle={"text"}
                                                selectAllButton={false}
                                                selectAllButtonCaption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                                    })
                                                ])}
                                                customEditability={"default"}
                                                customEditabilityExpression={ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                                })}
                                                readOnlyStyle={"bordered"}
                                                onChangeEvent={undefined}
                                                onEnterEvent={undefined}
                                                onLeaveEvent={undefined}
                                                onChangeFilterInputEvent={undefined}
                                                filterInputDebounceInterval={200}
                                                ariaRequired={ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                                })}
                                                ariaLabel={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Combo box" }, "args": {} }
                                                    })
                                                ])}
                                                clearButtonAriaLabel={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                                    })
                                                ])}
                                                removeValueAriaLabel={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                                    })
                                                ])}
                                                a11ySelectedValue={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                                    })
                                                ])}
                                                a11yOptionsAvailable={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                                    })
                                                ])}
                                                a11yInstructions={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                                    })
                                                ])}
                                                lazyLoading={true}
                                                loadingType={"spinner"}
                                                selectedItemsSorting={"none"}
                                                filterType={"contains"}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p0.MyFirstModule.TrainingEvent_NewEdit.comboBox2"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Location" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p0.MyFirstModule.TrainingEvent_NewEdit.comboBox2"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p0.MyFirstModule.TrainingEvent_NewEdit.comboBox2"
                                        })} />,
                                    <$FormGroup key="p0.MyFirstModule.TrainingEvent_NewEdit.comboBox3$formGroup"
                                        $widgetId="p0.MyFirstModule.TrainingEvent_NewEdit.comboBox3$formGroup"
                                        class={"mx-name-comboBox3"}
                                        style={undefined}
                                        control={[
                                            <$Combobox key="p0.MyFirstModule.TrainingEvent_NewEdit.comboBox3"
                                                $widgetId="p0.MyFirstModule.TrainingEvent_NewEdit.comboBox3"
                                                source={"context"}
                                                optionsSourceType={"association"}
                                                optionsSourceDatabaseDataSource={undefined}
                                                optionsSourceAssociationCaptionType={"attribute"}
                                                optionsSourceDatabaseCaptionType={"attribute"}
                                                optionsSourceAssociationCaptionAttribute={ListAttributeProperty({
                                                    "path": "",
                                                    "entity": "MyFirstModule.Teacher",
                                                    "attribute": "Name",
                                                    "attributeType": "String",
                                                    "sortable": true,
                                                    "filterable": true,
                                                    "dataSourceId": "p0.2",
                                                    "isList": false
                                                })}
                                                optionsSourceAssociationCaptionExpression={undefined}
                                                attributeAssociation={AssociationProperty({
                                                    "type": "Reference",
                                                    "entity": "MyFirstModule.TrainingEvent",
                                                    "path": "",
                                                    "attribute": "MyFirstModule.TrainingEvent_Teacher",
                                                    "endpointEntity": "MyFirstModule.Teacher",
                                                    "selectableObjectsId": "p0.2",
                                                    "scope": "p0.MyFirstModule.TrainingEvent_NewEdit.dataView6",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                })}
                                                optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                                    "dataSourceId": "p0.2",
                                                    "entity": "MyFirstModule.Teacher",
                                                    "scope": "p0.MyFirstModule.TrainingEvent_NewEdit.dataView6",
                                                    "operationId": "l47QfXubwVq9w++UCdg+qw",
                                                    "sort": []
                                                })}
                                                optionsSourceStaticDataSource={[]}
                                                emptyOptionText={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                noOptionsText={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                clearable={true}
                                                optionsSourceAssociationCustomContentType={"no"}
                                                optionsSourceAssociationCustomContent={undefined}
                                                optionsSourceDatabaseCustomContentType={"no"}
                                                staticDataSourceCustomContentType={"no"}
                                                showFooter={false}
                                                menuFooterContent={undefined}
                                                selectionMethod={"checkbox"}
                                                selectedItemsStyle={"text"}
                                                selectAllButton={false}
                                                selectAllButtonCaption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                                    })
                                                ])}
                                                customEditability={"default"}
                                                customEditabilityExpression={ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                                })}
                                                readOnlyStyle={"bordered"}
                                                onChangeEvent={undefined}
                                                onEnterEvent={undefined}
                                                onLeaveEvent={undefined}
                                                onChangeFilterInputEvent={undefined}
                                                filterInputDebounceInterval={200}
                                                ariaRequired={ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                                })}
                                                ariaLabel={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Combo box" }, "args": {} }
                                                    })
                                                ])}
                                                clearButtonAriaLabel={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                                    })
                                                ])}
                                                removeValueAriaLabel={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                                    })
                                                ])}
                                                a11ySelectedValue={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                                    })
                                                ])}
                                                a11yOptionsAvailable={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                                    })
                                                ])}
                                                a11yInstructions={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                                    })
                                                ])}
                                                lazyLoading={true}
                                                loadingType={"spinner"}
                                                selectedItemsSorting={"none"}
                                                filterType={"contains"}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p0.MyFirstModule.TrainingEvent_NewEdit.comboBox3"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Teacher" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p0.MyFirstModule.TrainingEvent_NewEdit.comboBox3"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p0.MyFirstModule.TrainingEvent_NewEdit.comboBox3"
                                        })} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$ConditionalVisibilityWrapper key="p0.MyFirstModule.TrainingEvent_NewEdit.actionButton1$visibility"
                                        $widgetId="p0.MyFirstModule.TrainingEvent_NewEdit.actionButton1$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p0.MyFirstModule.TrainingEvent_NewEdit.actionButton1"
                                                $widgetId="p0.MyFirstModule.TrainingEvent_NewEdit.actionButton1"
                                                buttonId={"p0.MyFirstModule.TrainingEvent_NewEdit.actionButton1"}
                                                class={"mx-name-actionButton1"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                renderType={"button"}
                                                role={undefined}
                                                buttonClass={"btn-primary"}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Save" }, "args": {} }
                                                    })
                                                ])}
                                                tooltip={TextProperty({
                                                    "value": t([
                                                        ""
                                                    ])
                                                })}
                                                icon={undefined}
                                                action={ActionProperty({
                                                    "action": { "type": "callMicroflow", "argMap": { "TrainingEvent": { "widget": "$TrainingEvent", "source": "object" } }, "config": { "operationId": "QP4NLU0l4lyUIu4Zoz+/4A", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />,
                                    <$ActionButton key="p0.MyFirstModule.TrainingEvent_NewEdit.actionButton2"
                                        $widgetId="p0.MyFirstModule.TrainingEvent_NewEdit.actionButton2"
                                        buttonId={"p0.MyFirstModule.TrainingEvent_NewEdit.actionButton2"}
                                        class={"mx-name-actionButton2"}
                                        style={undefined}
                                        tabIndex={undefined}
                                        renderType={"button"}
                                        role={undefined}
                                        buttonClass={"btn-default"}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Cancel" }, "args": {} }
                                            })
                                        ])}
                                        tooltip={TextProperty({
                                            "value": t([
                                                ""
                                            ])
                                        })}
                                        icon={undefined}
                                        action={ActionProperty({
                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "LAdU4h3g0lWT7EG8Dq+Qdw", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Edit Training Event"
]);

export const classes = "";

export const cancelChangesOperationId = "MbSI4UzNQ1C0hLc91VQ7Vg";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
