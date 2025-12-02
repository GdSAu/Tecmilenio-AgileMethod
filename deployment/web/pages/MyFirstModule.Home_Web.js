import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { TextProperty } from "mendix/TextProperty";
import { WebIconProperty } from "mendix/WebIconProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import { Div } from "mendix/widgets/web/Div";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.Atlas_Default.js";

const { $Container, $Div, $Text, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Container, Div, Text, ConditionalVisibilityWrapper, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Container key="p.MyFirstModule.Home_Web.container1"
        $widgetId="p.MyFirstModule.Home_Web.container1"
        class={"mx-name-container1 pageheader"}
        style={undefined}
        renderMode={"div"}
        onClick={undefined}
        content={[
            <$Div key="p.MyFirstModule.Home_Web.layoutGrid2"
                $widgetId="p.MyFirstModule.Home_Web.layoutGrid2"
                class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
                style={undefined}
                content={[
                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid2$row0"
                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid2$row0"
                        class={"row"}
                        style={undefined}
                        content={[
                            <$Div key="p.MyFirstModule.Home_Web.layoutGrid2$row0$column0"
                                $widgetId="p.MyFirstModule.Home_Web.layoutGrid2$row0$column0"
                                class={"col-lg col-md col"}
                                style={undefined}
                                content={[
                                    <$Text key="p.MyFirstModule.Home_Web.text1"
                                        $widgetId="p.MyFirstModule.Home_Web.text1"
                                        class={"mx-name-text1 pageheader-title spacing-outer-bottom"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "LearnNow Training Management" }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"h3"} />
                                ]} />
                        ]} />
                ]} />
        ]}
        ariaHidden={false} />,
    <$Div key="p.MyFirstModule.Home_Web.layoutGrid1"
        $widgetId="p.MyFirstModule.Home_Web.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.MyFirstModule.Home_Web.layoutGrid1$row0"
                $widgetId="p.MyFirstModule.Home_Web.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid1$row0$column0"
                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid1$row0$column0"
                        class={"col-lg col-md-6 col-12"}
                        style={undefined}
                        content={[
                            <$ConditionalVisibilityWrapper key="p.MyFirstModule.Home_Web.actionButton1$visibility"
                                $widgetId="p.MyFirstModule.Home_Web.actionButton1$visibility"
                                visible={ExpressionProperty({
                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                })}
                                contents={[
                                    <$ActionButton key="p.MyFirstModule.Home_Web.actionButton1"
                                        $widgetId="p.MyFirstModule.Home_Web.actionButton1"
                                        buttonId={"p.MyFirstModule.Home_Web.actionButton1"}
                                        class={"mx-name-actionButton1 btn-block"}
                                        style={undefined}
                                        tabIndex={undefined}
                                        renderType={"button"}
                                        role={undefined}
                                        buttonClass={"btn-default"}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Courses" }, "args": {} }
                                            })
                                        ])}
                                        tooltip={TextProperty({
                                            "value": t([
                                                ""
                                            ])
                                        })}
                                        icon={WebIconProperty({
                                            "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-book-closed" }
                                        })}
                                        action={ActionProperty({
                                            "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Course_Overview.page.xml", "location": "content", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />,
                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid1$row0$column1"
                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid1$row0$column1"
                        class={"col-lg col-md-6 col-12"}
                        style={undefined}
                        content={[
                            <$ConditionalVisibilityWrapper key="p.MyFirstModule.Home_Web.actionButton2$visibility"
                                $widgetId="p.MyFirstModule.Home_Web.actionButton2$visibility"
                                visible={ExpressionProperty({
                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                })}
                                contents={[
                                    <$ActionButton key="p.MyFirstModule.Home_Web.actionButton2"
                                        $widgetId="p.MyFirstModule.Home_Web.actionButton2"
                                        buttonId={"p.MyFirstModule.Home_Web.actionButton2"}
                                        class={"mx-name-actionButton2 btn-block"}
                                        style={undefined}
                                        tabIndex={undefined}
                                        renderType={"button"}
                                        role={undefined}
                                        buttonClass={"btn-default"}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Locations" }, "args": {} }
                                            })
                                        ])}
                                        tooltip={TextProperty({
                                            "value": t([
                                                ""
                                            ])
                                        })}
                                        icon={WebIconProperty({
                                            "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-tablet" }
                                        })}
                                        action={ActionProperty({
                                            "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Location_Overview.page.xml", "location": "content", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />,
                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid1$row0$column2"
                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid1$row0$column2"
                        class={"col-lg col-md-6 col-12"}
                        style={undefined}
                        content={[
                            <$ConditionalVisibilityWrapper key="p.MyFirstModule.Home_Web.actionButton3$visibility"
                                $widgetId="p.MyFirstModule.Home_Web.actionButton3$visibility"
                                visible={ExpressionProperty({
                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                })}
                                contents={[
                                    <$ActionButton key="p.MyFirstModule.Home_Web.actionButton3"
                                        $widgetId="p.MyFirstModule.Home_Web.actionButton3"
                                        buttonId={"p.MyFirstModule.Home_Web.actionButton3"}
                                        class={"mx-name-actionButton3 btn-block"}
                                        style={undefined}
                                        tabIndex={undefined}
                                        renderType={"button"}
                                        role={undefined}
                                        buttonClass={"btn-default"}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Teachers" }, "args": {} }
                                            })
                                        ])}
                                        tooltip={TextProperty({
                                            "value": t([
                                                ""
                                            ])
                                        })}
                                        icon={WebIconProperty({
                                            "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-user-neutral-group" }
                                        })}
                                        action={ActionProperty({
                                            "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Teacher_Overview.page.xml", "location": "content", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />,
                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid1$row0$column3"
                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid1$row0$column3"
                        class={"col-lg col-md-6 col-12"}
                        style={undefined}
                        content={[
                            <$ConditionalVisibilityWrapper key="p.MyFirstModule.Home_Web.actionButton4$visibility"
                                $widgetId="p.MyFirstModule.Home_Web.actionButton4$visibility"
                                visible={ExpressionProperty({
                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                })}
                                contents={[
                                    <$ActionButton key="p.MyFirstModule.Home_Web.actionButton4"
                                        $widgetId="p.MyFirstModule.Home_Web.actionButton4"
                                        buttonId={"p.MyFirstModule.Home_Web.actionButton4"}
                                        class={"mx-name-actionButton4 btn-block"}
                                        style={undefined}
                                        tabIndex={undefined}
                                        renderType={"button"}
                                        role={undefined}
                                        buttonClass={"btn-default"}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Trainees" }, "args": {} }
                                            })
                                        ])}
                                        tooltip={TextProperty({
                                            "value": t([
                                                ""
                                            ])
                                        })}
                                        icon={WebIconProperty({
                                            "icon": { "type": "glyph", "iconClass": "glyphicon-bullhorn" }
                                        })}
                                        action={ActionProperty({
                                            "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Trainee_Overview.page.xml", "location": "content", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />
                ]} />,
            <$Div key="p.MyFirstModule.Home_Web.layoutGrid1$row1"
                $widgetId="p.MyFirstModule.Home_Web.layoutGrid1$row1"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid1$row1$column0"
                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid1$row1$column0"
                        class={"col-lg col-md-6 col-12"}
                        style={undefined}
                        content={[
                            <$ConditionalVisibilityWrapper key="p.MyFirstModule.Home_Web.actionButton5$visibility"
                                $widgetId="p.MyFirstModule.Home_Web.actionButton5$visibility"
                                visible={ExpressionProperty({
                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }, { "type": "literal", "value": "Trainee" } ] }, "args": {} }
                                })}
                                contents={[
                                    <$ActionButton key="p.MyFirstModule.Home_Web.actionButton5"
                                        $widgetId="p.MyFirstModule.Home_Web.actionButton5"
                                        buttonId={"p.MyFirstModule.Home_Web.actionButton5"}
                                        class={"mx-name-actionButton5 btn-block btn-lg"}
                                        style={undefined}
                                        tabIndex={undefined}
                                        renderType={"button"}
                                        role={undefined}
                                        buttonClass={"btn-default"}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Training Events" }, "args": {} }
                                            })
                                        ])}
                                        tooltip={TextProperty({
                                            "value": t([
                                                ""
                                            ])
                                        })}
                                        icon={undefined}
                                        action={ActionProperty({
                                            "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/TrainingEvent_Overview.page.xml", "location": "content", "allowedRoles": [ "Administrator", "User", "Trainee" ] }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />,
                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid1$row1$column1"
                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid1$row1$column1"
                        class={"col-lg col-md-6 col-12"}
                        style={undefined}
                        content={[
                            <$ConditionalVisibilityWrapper key="p.MyFirstModule.Home_Web.actionButton6$visibility"
                                $widgetId="p.MyFirstModule.Home_Web.actionButton6$visibility"
                                visible={ExpressionProperty({
                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                })}
                                contents={[
                                    <$ActionButton key="p.MyFirstModule.Home_Web.actionButton6"
                                        $widgetId="p.MyFirstModule.Home_Web.actionButton6"
                                        buttonId={"p.MyFirstModule.Home_Web.actionButton6"}
                                        class={"mx-name-actionButton6"}
                                        style={undefined}
                                        tabIndex={undefined}
                                        renderType={"button"}
                                        role={undefined}
                                        buttonClass={"btn-default"}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Add a Training Event" }, "args": {} }
                                            })
                                        ])}
                                        tooltip={TextProperty({
                                            "value": t([
                                                ""
                                            ])
                                        })}
                                        icon={WebIconProperty({
                                            "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-add" }
                                        })}
                                        action={ActionProperty({
                                            "action": { "type": "createObject", "argMap": {}, "config": { "entity": "MyFirstModule.TrainingEvent", "operationId": "WcUjohu/MlCnIYm7QVxEUw", "pageSettings": { "name": "MyFirstModule/TrainingEvent_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": [ "Administrator" ] }, "allowedRoles": [ "Administrator" ], "objectParameter": "param$TrainingEvent" }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />,
                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid1$row1$column2"
                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid1$row1$column2"
                        class={"col-lg col-md-6 col-12"}
                        style={undefined}
                        content={undefined} />,
                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid1$row1$column3"
                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid1$row1$column3"
                        class={"col-lg col-md-6 col-12"}
                        style={undefined}
                        content={undefined} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Homepage"
]);

export const classes = "layout-atlas layout-atlas-responsive-default";

export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.Atlas_Default.Main": region$Main,
};
