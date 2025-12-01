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

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $FormGroup, $TextBox, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p10.MyFirstModule.Trainee_NewEdit.layoutGrid1"
        $widgetId="p10.MyFirstModule.Trainee_NewEdit.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p10.MyFirstModule.Trainee_NewEdit.layoutGrid1$row0"
                $widgetId="p10.MyFirstModule.Trainee_NewEdit.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p10.MyFirstModule.Trainee_NewEdit.layoutGrid1$row0$column0"
                        $widgetId="p10.MyFirstModule.Trainee_NewEdit.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$DataView key="p10.MyFirstModule.Trainee_NewEdit.dataView6"
                                $widgetId="p10.MyFirstModule.Trainee_NewEdit.dataView6"
                                class={"mx-name-dataView6 form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p10.12",
                                    "scope": "$Trainee",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$FormGroup key="p10.MyFirstModule.Trainee_NewEdit.textBox1$formGroup"
                                        $widgetId="p10.MyFirstModule.Trainee_NewEdit.textBox1$formGroup"
                                        class={"mx-name-textBox1 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p10.MyFirstModule.Trainee_NewEdit.textBox1"
                                                $widgetId="p10.MyFirstModule.Trainee_NewEdit.textBox1"
                                                inputValue={AttributeProperty({
                                                    "scope": "p10.MyFirstModule.Trainee_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "MyFirstModule.Trainee",
                                                    "attribute": "Name",
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
                                                    "widgetId": "p10.MyFirstModule.Trainee_NewEdit.textBox1"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Name" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p10.MyFirstModule.Trainee_NewEdit.textBox1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p10.MyFirstModule.Trainee_NewEdit.textBox1"
                                        })} />,
                                    <$FormGroup key="p10.MyFirstModule.Trainee_NewEdit.textBox2$formGroup"
                                        $widgetId="p10.MyFirstModule.Trainee_NewEdit.textBox2$formGroup"
                                        class={"mx-name-textBox2 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p10.MyFirstModule.Trainee_NewEdit.textBox2"
                                                $widgetId="p10.MyFirstModule.Trainee_NewEdit.textBox2"
                                                inputValue={AttributeProperty({
                                                    "scope": "p10.MyFirstModule.Trainee_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "MyFirstModule.Trainee",
                                                    "attribute": "Address",
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
                                                    "widgetId": "p10.MyFirstModule.Trainee_NewEdit.textBox2"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Address" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p10.MyFirstModule.Trainee_NewEdit.textBox2"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p10.MyFirstModule.Trainee_NewEdit.textBox2"
                                        })} />,
                                    <$FormGroup key="p10.MyFirstModule.Trainee_NewEdit.textBox3$formGroup"
                                        $widgetId="p10.MyFirstModule.Trainee_NewEdit.textBox3$formGroup"
                                        class={"mx-name-textBox3 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p10.MyFirstModule.Trainee_NewEdit.textBox3"
                                                $widgetId="p10.MyFirstModule.Trainee_NewEdit.textBox3"
                                                inputValue={AttributeProperty({
                                                    "scope": "p10.MyFirstModule.Trainee_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "MyFirstModule.Trainee",
                                                    "attribute": "EmailAddress",
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
                                                    "widgetId": "p10.MyFirstModule.Trainee_NewEdit.textBox3"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Email address" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p10.MyFirstModule.Trainee_NewEdit.textBox3"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p10.MyFirstModule.Trainee_NewEdit.textBox3"
                                        })} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$ActionButton key="p10.MyFirstModule.Trainee_NewEdit.actionButton1"
                                        $widgetId="p10.MyFirstModule.Trainee_NewEdit.actionButton1"
                                        buttonId={"p10.MyFirstModule.Trainee_NewEdit.actionButton1"}
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
                                            "action": { "type": "saveChanges", "argMap": { "$object": { "widget": "p10.MyFirstModule.Trainee_NewEdit.dataView6", "source": "object" } }, "config": { "operationId": "lTZSvjA8i1WqE/b6jkQFcg", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />,
                                    <$ActionButton key="p10.MyFirstModule.Trainee_NewEdit.actionButton2"
                                        $widgetId="p10.MyFirstModule.Trainee_NewEdit.actionButton2"
                                        buttonId={"p10.MyFirstModule.Trainee_NewEdit.actionButton2"}
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
                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "X3zKmMGfH1m/uDgtrLAeSw", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Edit Trainee"
]);

export const classes = "";

export const cancelChangesOperationId = "gYC3FuRTmVCOEA/9xzo/EA";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
