import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListActionProperty } from "mendix/ListActionProperty";
import { TemplatedWidgetProperty } from "mendix/TemplatedWidgetProperty";
import { TextProperty } from "mendix/TextProperty";
import { WebIconProperty } from "mendix/WebIconProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { ListView } from "mendix/widgets/web/ListView";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.Atlas_Default.js";

const { $Div, $DataView, $Container, $ActionButton, $Text, $ConditionalVisibilityWrapper, $ListView } = asPluginWidgets({ Div, DataView, Container, ActionButton, Text, ConditionalVisibilityWrapper, ListView });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid1"
        $widgetId="p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid1$row0"
                $widgetId="p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid1$row0$column0"
                        $widgetId="p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid1$row0$column0"
                        class={"col-lg-12 col-md-12 col-12"}
                        style={undefined}
                        content={[
                            <$DataView key="p.MyFirstModule.TrainingEvent_Registration_Overview.dataView1"
                                $widgetId="p.MyFirstModule.TrainingEvent_Registration_Overview.dataView1"
                                class={"mx-name-dataView1 form-horizontal"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.13",
                                    "scope": "$TrainingEvent_3",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$Container key="p.MyFirstModule.TrainingEvent_Registration_Overview.container1"
                                        $widgetId="p.MyFirstModule.TrainingEvent_Registration_Overview.container1"
                                        class={"mx-name-container1 pageheader spacing-outer-bottom-large"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$ActionButton key="p.MyFirstModule.TrainingEvent_Registration_Overview.actionButton4"
                                                $widgetId="p.MyFirstModule.TrainingEvent_Registration_Overview.actionButton4"
                                                buttonId={"p.MyFirstModule.TrainingEvent_Registration_Overview.actionButton4"}
                                                class={"mx-name-actionButton4 link-back spacing-outer-bottom-medium"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                renderType={"link"}
                                                role={"link"}
                                                buttonClass={"btn-default"}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Back" }, "args": {} }
                                                    })
                                                ])}
                                                tooltip={TextProperty({
                                                    "value": t([
                                                        ""
                                                    ])
                                                })}
                                                icon={WebIconProperty({
                                                    "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-chevron-left" }
                                                })}
                                                action={ActionProperty({
                                                    "action": { "type": "closePage", "argMap": {}, "config": {}, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />,
                                            <$Div key="p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid2"
                                                $widgetId="p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid2"
                                                class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid pageheader"}
                                                style={undefined}
                                                content={[
                                                    <$Div key="p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid2$row0"
                                                        $widgetId="p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid2$row0"
                                                        class={"row"}
                                                        style={undefined}
                                                        content={[
                                                            <$Div key="p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid2$row0$column0"
                                                                $widgetId="p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid2$row0$column0"
                                                                class={"col-lg col-md col"}
                                                                style={undefined}
                                                                content={[
                                                                    <$Text key="p.MyFirstModule.TrainingEvent_Registration_Overview.text40"
                                                                        $widgetId="p.MyFirstModule.TrainingEvent_Registration_Overview.text40"
                                                                        class={"mx-name-text40 pageheader-title"}
                                                                        style={undefined}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "+", "parameters": [ { "type": "literal", "value": "Registrations for the " }, { "type": "variable", "variable": "currentObject", "path": "MyFirstModule.TrainingEvent_Course/MyFirstModule.Course/Title" } ] }, { "type": "literal", "value": " on " } ] }, { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "StartDate" }, { "type": "literal", "value": "{\"type\":\"date\"}" } ] } ] }, "args": { "currentObject": { "widget": "p.MyFirstModule.TrainingEvent_Registration_Overview.dataView1", "source": "object" } } }
                                                                            })
                                                                        ])}
                                                                        renderMode={"h1"} />,
                                                                    <$Text key="p.MyFirstModule.TrainingEvent_Registration_Overview.text39"
                                                                        $widgetId="p.MyFirstModule.TrainingEvent_Registration_Overview.text39"
                                                                        class={"mx-name-text39 pageheader-subtitle text-detail spacing-outer-bottom-none"}
                                                                        style={undefined}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Supporting text" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        renderMode={"p"} />
                                                                ]} />,
                                                            <$Div key="p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid2$row0$column1"
                                                                $widgetId="p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid2$row0$column1"
                                                                class={"col-lg-auto col-md-auto col-auto"}
                                                                style={undefined}
                                                                content={[
                                                                    <$ConditionalVisibilityWrapper key="p.MyFirstModule.TrainingEvent_Registration_Overview.actionButton2$visibility"
                                                                        $widgetId="p.MyFirstModule.TrainingEvent_Registration_Overview.actionButton2$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                        })}
                                                                        contents={[
                                                                            <$ActionButton key="p.MyFirstModule.TrainingEvent_Registration_Overview.actionButton2"
                                                                                $widgetId="p.MyFirstModule.TrainingEvent_Registration_Overview.actionButton2"
                                                                                buttonId={"p.MyFirstModule.TrainingEvent_Registration_Overview.actionButton2"}
                                                                                class={"mx-name-actionButton2"}
                                                                                style={undefined}
                                                                                tabIndex={undefined}
                                                                                renderType={"button"}
                                                                                role={undefined}
                                                                                buttonClass={"btn-primary"}
                                                                                caption={t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "New" }, "args": {} }
                                                                                    })
                                                                                ])}
                                                                                tooltip={TextProperty({
                                                                                    "value": t([
                                                                                        ""
                                                                                    ])
                                                                                })}
                                                                                icon={undefined}
                                                                                action={ActionProperty({
                                                                                    "action": { "type": "createObject", "argMap": { "$object": { "widget": "$TrainingEvent_3", "source": "object" } }, "config": { "association": "MyFirstModule.Registration_TrainingEvent", "entity": "MyFirstModule.Registration", "operationId": "C1RThn3/xV2ycaFMlntzzg", "pageSettings": { "name": "MyFirstModule/Registration_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": [ "Administrator" ] }, "allowedRoles": [ "Administrator" ], "objectParameter": "param$Registration" }, "disabledDuringExecution": true },
                                                                                    "abortOnServerValidation": true
                                                                                })} />
                                                                        ]} />
                                                                ]} />
                                                        ]} />,
                                                    <$Div key="p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid2$row1"
                                                        $widgetId="p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid2$row1"
                                                        class={"row"}
                                                        style={undefined}
                                                        content={[
                                                            <$Div key="p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid2$row1$column0"
                                                                $widgetId="p.MyFirstModule.TrainingEvent_Registration_Overview.layoutGrid2$row1$column0"
                                                                class={"col-lg col-md col"}
                                                                style={undefined}
                                                                content={[
                                                                    <$ListView key="p.MyFirstModule.TrainingEvent_Registration_Overview.listView1"
                                                                        $widgetId="p.MyFirstModule.TrainingEvent_Registration_Overview.listView1"
                                                                        class={"mx-name-listView1"}
                                                                        style={undefined}
                                                                        listValue={DatabaseObjectListProperty({
                                                                            "dataSourceId": "p.4",
                                                                            "entity": "MyFirstModule.Registration",
                                                                            "scope": "p.MyFirstModule.TrainingEvent_Registration_Overview.dataView1",
                                                                            "operationId": "Ftwbn5j7q1qZi01v/nhpuA",
                                                                            "sort": [],
                                                                            "arguments": {
                                                                                "currentObject": [
                                                                                    "$TrainingEvent_3"
                                                                                ],
                                                                                "CurrentObject": [
                                                                                    "$TrainingEvent_3"
                                                                                ]
                                                                            },
                                                                            "constraints": { "type": "function", "name": "=", "parameters": [ { "type": "attribute", "attribute": "MyFirstModule.Registration_TrainingEvent", "context": "MyFirstModule.Registration", "attributeType": "ObjectReference" }, { "type": "variable", "name": "currentObject" } ] }
                                                                        })}
                                                                        itemTemplate={TemplatedWidgetProperty({
                                                                            "dataSourceId": "p.4",
                                                                            "editable": false,
                                                                            "children": () => [
                                                                                <$Text key="p.MyFirstModule.TrainingEvent_Registration_Overview.text1"
                                                                                    $widgetId="p.MyFirstModule.TrainingEvent_Registration_Overview.text1"
                                                                                    class={"mx-name-text1"}
                                                                                    style={undefined}
                                                                                    caption={t([
                                                                                        ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "+", "parameters": [ { "type": "literal", "value": "Name: " }, { "type": "variable", "variable": "currentObject", "path": "MyFirstModule.Registration_Trainee/MyFirstModule.Trainee/Name" } ] }, { "type": "literal", "value": "\r\nRegistration number: " } ] }, { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Number" }, { "type": "literal", "value": "{}" } ] } ] }, { "type": "literal", "value": "\r\nDate registered: " } ] }, { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Date" }, { "type": "literal", "value": "{\"type\":\"date\"}" } ] } ] }, "args": { "currentObject": { "widget": "p.MyFirstModule.TrainingEvent_Registration_Overview.listView1", "source": "object" } } }
                                                                                        })
                                                                                    ])}
                                                                                    renderMode={"span"} />
                                                                            ]
                                                                        })}
                                                                        onClick={ListActionProperty({
                                                                            "action": { "type": "openPage", "argMap": { "param$Registration": { "widget": "p.MyFirstModule.TrainingEvent_Registration_Overview.listView1", "source": "object" } }, "config": { "name": "MyFirstModule/Registration_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                            "abortOnServerValidation": false,
                                                                            "dataSourceId": "p.4"
                                                                        })}
                                                                        pageSize={10} />
                                                                ]} />
                                                        ]} />
                                                ]} />
                                        ]}
                                        ariaHidden={false} />
                                ]}
                                hideFooter={true}
                                footer={undefined} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Training event Registration Overview"
]);

export const classes = "layout-atlas layout-atlas-responsive-default";

export const autofocus = "off";
export const style = {};
export const parameters = {"$TrainingEvent":"object","$TrainingEvent_2":"object","$TrainingEvent_3":"object"};
export const content = { ...parentContent,
    "Atlas_Core.Atlas_Default.Main": region$Main,
};
