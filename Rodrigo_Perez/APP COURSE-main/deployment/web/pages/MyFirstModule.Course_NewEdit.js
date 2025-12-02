import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { TextProperty } from "mendix/TextProperty";
import { ValidationProperty } from "mendix/ValidationProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.Atlas_SideBar.js";

const { $Div, $DataView, $FormGroup, $TextBox, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.MyFirstModule.Course_NewEdit.layoutGrid1"
        $widgetId="p.MyFirstModule.Course_NewEdit.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.MyFirstModule.Course_NewEdit.layoutGrid1$row0"
                $widgetId="p.MyFirstModule.Course_NewEdit.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.MyFirstModule.Course_NewEdit.layoutGrid1$row0$column0"
                        $widgetId="p.MyFirstModule.Course_NewEdit.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$DataView key="p.MyFirstModule.Course_NewEdit.dataView6"
                                $widgetId="p.MyFirstModule.Course_NewEdit.dataView6"
                                class={"mx-name-dataView6 form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.12",
                                    "scope": "$Course",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$FormGroup key="p.MyFirstModule.Course_NewEdit.textBox1$formGroup"
                                        $widgetId="p.MyFirstModule.Course_NewEdit.textBox1$formGroup"
                                        class={"mx-name-textBox1 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p.MyFirstModule.Course_NewEdit.textBox1"
                                                $widgetId="p.MyFirstModule.Course_NewEdit.textBox1"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.MyFirstModule.Course_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "MyFirstModule.Course",
                                                    "attribute": "Title",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null,
                                                    "formatting": { }
                                                })}
                                                isPassword={false}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                mask={""}
                                                readOnlyStyle={"control"}
                                                maxLength={200}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                onEnterKeyPress={undefined}
                                                ariaLabel={undefined}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                ariaRequired={undefined}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.MyFirstModule.Course_NewEdit.textBox1"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Title" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.MyFirstModule.Course_NewEdit.textBox1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.MyFirstModule.Course_NewEdit.textBox1"
                                        })} />,
                                    <$FormGroup key="p.MyFirstModule.Course_NewEdit.textBox2$formGroup"
                                        $widgetId="p.MyFirstModule.Course_NewEdit.textBox2$formGroup"
                                        class={"mx-name-textBox2 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p.MyFirstModule.Course_NewEdit.textBox2"
                                                $widgetId="p.MyFirstModule.Course_NewEdit.textBox2"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.MyFirstModule.Course_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "MyFirstModule.Course",
                                                    "attribute": "Description",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null,
                                                    "formatting": { }
                                                })}
                                                isPassword={false}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                mask={""}
                                                readOnlyStyle={"control"}
                                                maxLength={200}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                onEnterKeyPress={undefined}
                                                ariaLabel={undefined}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                ariaRequired={undefined}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.MyFirstModule.Course_NewEdit.textBox2"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Description" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.MyFirstModule.Course_NewEdit.textBox2"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.MyFirstModule.Course_NewEdit.textBox2"
                                        })} />,
                                    <$FormGroup key="p.MyFirstModule.Course_NewEdit.textBox3$formGroup"
                                        $widgetId="p.MyFirstModule.Course_NewEdit.textBox3$formGroup"
                                        class={"mx-name-textBox3 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p.MyFirstModule.Course_NewEdit.textBox3"
                                                $widgetId="p.MyFirstModule.Course_NewEdit.textBox3"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.MyFirstModule.Course_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "MyFirstModule.Course",
                                                    "attribute": "Price",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null,
                                                    "formatting": {
                                                        "numberFormat": {
                                                            "groupDigits": false,
                                                            "decimalPrecision": 2
                                                        }
                                                    }
                                                })}
                                                isPassword={false}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                mask={""}
                                                readOnlyStyle={"control"}
                                                maxLength={undefined}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                onEnterKeyPress={undefined}
                                                ariaLabel={undefined}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                ariaRequired={undefined}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.MyFirstModule.Course_NewEdit.textBox3"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Price" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.MyFirstModule.Course_NewEdit.textBox3"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.MyFirstModule.Course_NewEdit.textBox3"
                                        })} />,
                                    <$FormGroup key="p.MyFirstModule.Course_NewEdit.textBox4$formGroup"
                                        $widgetId="p.MyFirstModule.Course_NewEdit.textBox4$formGroup"
                                        class={"mx-name-textBox4 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p.MyFirstModule.Course_NewEdit.textBox4"
                                                $widgetId="p.MyFirstModule.Course_NewEdit.textBox4"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.MyFirstModule.Course_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "MyFirstModule.Course",
                                                    "attribute": "Duration",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null,
                                                    "formatting": {
                                                        "numberFormat": {
                                                            "groupDigits": false
                                                        }
                                                    }
                                                })}
                                                isPassword={false}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                mask={""}
                                                readOnlyStyle={"control"}
                                                maxLength={undefined}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                onEnterKeyPress={undefined}
                                                ariaLabel={undefined}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                ariaRequired={undefined}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.MyFirstModule.Course_NewEdit.textBox4"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Duration" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.MyFirstModule.Course_NewEdit.textBox4"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.MyFirstModule.Course_NewEdit.textBox4"
                                        })} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$ActionButton key="p.MyFirstModule.Course_NewEdit.actionButton1"
                                        $widgetId="p.MyFirstModule.Course_NewEdit.actionButton1"
                                        buttonId={"p.MyFirstModule.Course_NewEdit.actionButton1"}
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
                                            "action": { "type": "saveChanges", "argMap": { "$object": { "widget": "p.MyFirstModule.Course_NewEdit.dataView6", "source": "object" } }, "config": { "operationId": "q7fxAiL9gFmx/CsHH8n53Q", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />,
                                    <$ActionButton key="p.MyFirstModule.Course_NewEdit.actionButton2"
                                        $widgetId="p.MyFirstModule.Course_NewEdit.actionButton2"
                                        buttonId={"p.MyFirstModule.Course_NewEdit.actionButton2"}
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
                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "ke7X0bZhCVCArMZAH+Cy1Q", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Edit Course"
]);

export const classes = "layout-atlas layout-atlas-responsive-sidebar";

export const autofocus = "off";
export const style = {};
export const parameters = {"$Course":"object"};
export const content = { ...parentContent,
    "Atlas_Core.Atlas_SideBar.Main": region$Main,
};
