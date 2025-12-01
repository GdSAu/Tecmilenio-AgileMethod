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
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $FormGroup, $TextBox, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, ConditionalVisibilityWrapper, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p19.Administration.ChangePasswordForm.layoutGrid1"
        $widgetId="p19.Administration.ChangePasswordForm.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p19.Administration.ChangePasswordForm.layoutGrid1$row0"
                $widgetId="p19.Administration.ChangePasswordForm.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p19.Administration.ChangePasswordForm.layoutGrid1$row0$column0"
                        $widgetId="p19.Administration.ChangePasswordForm.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$DataView key="p19.Administration.ChangePasswordForm.dataView2"
                                $widgetId="p19.Administration.ChangePasswordForm.dataView2"
                                class={"mx-name-dataView2 form-horizontal"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p19.12",
                                    "scope": "$AccountPasswordData",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$FormGroup key="p19.Administration.ChangePasswordForm.textBox3$formGroup"
                                        $widgetId="p19.Administration.ChangePasswordForm.textBox3$formGroup"
                                        class={"mx-name-textBox3 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p19.Administration.ChangePasswordForm.textBox3"
                                                $widgetId="p19.Administration.ChangePasswordForm.textBox3"
                                                inputValue={AttributeProperty({
                                                    "scope": "p19.Administration.ChangePasswordForm.dataView2",
                                                    "path": "",
                                                    "entity": "Administration.AccountPasswordData",
                                                    "attribute": "NewPassword",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": { "message": t([ "The password cannot be empty." ]), "expression": { "expr": { "type": "function", "name": ">", "parameters": [ { "type": "function", "name": "length", "parameters": [ { "type": "function", "name": "toString", "parameters": [ { "type": "variable", "variable": "value" } ] } ] }, { "type": "literalNumeric", "value": "0" } ] }, "args": {} } },
                                                    "formatting": { }
                                                })}
                                                isPassword={true}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                mask={""}
                                                readOnlyStyle={"text"}
                                                maxLength={200}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                onEnterKeyPress={undefined}
                                                ariaLabel={undefined}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                ariaRequired={true}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p19.Administration.ChangePasswordForm.textBox3"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "New password" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p19.Administration.ChangePasswordForm.textBox3"
                                        })}
                                        width={3}
                                        orientation={"horizontal"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p19.Administration.ChangePasswordForm.textBox3"
                                        })} />,
                                    <$FormGroup key="p19.Administration.ChangePasswordForm.textBox1$formGroup"
                                        $widgetId="p19.Administration.ChangePasswordForm.textBox1$formGroup"
                                        class={"mx-name-textBox1 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p19.Administration.ChangePasswordForm.textBox1"
                                                $widgetId="p19.Administration.ChangePasswordForm.textBox1"
                                                inputValue={AttributeProperty({
                                                    "scope": "p19.Administration.ChangePasswordForm.dataView2",
                                                    "path": "",
                                                    "entity": "Administration.AccountPasswordData",
                                                    "attribute": "ConfirmPassword",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": { "message": t([ "The password cannot be empty." ]), "expression": { "expr": { "type": "function", "name": ">", "parameters": [ { "type": "function", "name": "length", "parameters": [ { "type": "function", "name": "toString", "parameters": [ { "type": "variable", "variable": "value" } ] } ] }, { "type": "literalNumeric", "value": "0" } ] }, "args": {} } },
                                                    "formatting": { }
                                                })}
                                                isPassword={true}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                mask={""}
                                                readOnlyStyle={"text"}
                                                maxLength={200}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                onEnterKeyPress={undefined}
                                                ariaLabel={undefined}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                ariaRequired={true}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p19.Administration.ChangePasswordForm.textBox1"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Confirm password" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p19.Administration.ChangePasswordForm.textBox1"
                                        })}
                                        width={3}
                                        orientation={"horizontal"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p19.Administration.ChangePasswordForm.textBox1"
                                        })} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$ConditionalVisibilityWrapper key="p19.Administration.ChangePasswordForm.microflowButton1$visibility"
                                        $widgetId="p19.Administration.ChangePasswordForm.microflowButton1$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p19.Administration.ChangePasswordForm.microflowButton1"
                                                $widgetId="p19.Administration.ChangePasswordForm.microflowButton1"
                                                buttonId={"p19.Administration.ChangePasswordForm.microflowButton1"}
                                                class={"mx-name-microflowButton1"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                renderType={"button"}
                                                role={undefined}
                                                buttonClass={"btn-success"}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Change" }, "args": {} }
                                                    })
                                                ])}
                                                tooltip={TextProperty({
                                                    "value": t([
                                                        ""
                                                    ])
                                                })}
                                                icon={undefined}
                                                action={ActionProperty({
                                                    "action": { "type": "callMicroflow", "argMap": { "AccountPasswordData": { "widget": "$AccountPasswordData", "source": "object" } }, "config": { "operationId": "UJdJ5ayEJlWd7pOK+c++Vw", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": false },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />,
                                    <$ActionButton key="p19.Administration.ChangePasswordForm.cancelButton1"
                                        $widgetId="p19.Administration.ChangePasswordForm.cancelButton1"
                                        buttonId={"p19.Administration.ChangePasswordForm.cancelButton1"}
                                        class={"mx-name-cancelButton1"}
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
                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "Yh1C/ylu11atyIWuJXegzA", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Change Password"
]);

export const classes = "";

export const cancelChangesOperationId = "B7hEyWZxV1yims1rNpUEMg";
export const closeButton = "p19.Administration.ChangePasswordForm.cancelButton1";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
