import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListActionProperty } from "mendix/ListActionProperty";
import { TemplatedWidgetProperty } from "mendix/TemplatedWidgetProperty";
import { TextProperty } from "mendix/TextProperty";
import { WebIconProperty } from "mendix/WebIconProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import { Div } from "mendix/widgets/web/Div";
import * as GalleryWidgetModule from "C:/Users/Admin/Mendix/LearnNow Training management-main/deployment/web/widgets/com/mendix/widget/web/gallery/Gallery.mjs";
const Gallery = Object.getOwnPropertyDescriptor(GalleryWidgetModule, "Gallery")?.value || Object.getOwnPropertyDescriptor(GalleryWidgetModule, "default")?.value;   
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.Atlas_TopBar.js";

const { $Div, $Container, $Text, $ConditionalVisibilityWrapper, $ActionButton, $Gallery } = asPluginWidgets({ Div, Container, Text, ConditionalVisibilityWrapper, ActionButton, Gallery });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.MyFirstModule.TrainingEvent_Overview.layoutGrid2"
        $widgetId="p.MyFirstModule.TrainingEvent_Overview.layoutGrid2"
        class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.MyFirstModule.TrainingEvent_Overview.layoutGrid2$row0"
                $widgetId="p.MyFirstModule.TrainingEvent_Overview.layoutGrid2$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.MyFirstModule.TrainingEvent_Overview.layoutGrid2$row0$column0"
                        $widgetId="p.MyFirstModule.TrainingEvent_Overview.layoutGrid2$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$Container key="p.MyFirstModule.TrainingEvent_Overview.container1"
                                $widgetId="p.MyFirstModule.TrainingEvent_Overview.container1"
                                class={"mx-name-container1 pageheader spacing-outer-bottom-large"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Text key="p.MyFirstModule.TrainingEvent_Overview.text40"
                                        $widgetId="p.MyFirstModule.TrainingEvent_Overview.text40"
                                        class={"mx-name-text40 pageheader-title spacing-outer-bottom"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Training Event Overview\r\n" }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"h1"} />,
                                    <$Text key="p.MyFirstModule.TrainingEvent_Overview.text39"
                                        $widgetId="p.MyFirstModule.TrainingEvent_Overview.text39"
                                        class={"mx-name-text39 pageheader-subtitle text-detail spacing-outer-bottom-none"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Supporting text" }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"p"} />
                                ]}
                                ariaHidden={false} />
                        ]} />,
                    <$Div key="p.MyFirstModule.TrainingEvent_Overview.layoutGrid2$row0$column1"
                        $widgetId="p.MyFirstModule.TrainingEvent_Overview.layoutGrid2$row0$column1"
                        class={"col-lg-auto col-md-auto col-auto"}
                        style={undefined}
                        content={[
                            <$ConditionalVisibilityWrapper key="p.MyFirstModule.TrainingEvent_Overview.actionButton1$visibility"
                                $widgetId="p.MyFirstModule.TrainingEvent_Overview.actionButton1$visibility"
                                visible={ExpressionProperty({
                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                })}
                                contents={[
                                    <$ActionButton key="p.MyFirstModule.TrainingEvent_Overview.actionButton1"
                                        $widgetId="p.MyFirstModule.TrainingEvent_Overview.actionButton1"
                                        buttonId={"p.MyFirstModule.TrainingEvent_Overview.actionButton1"}
                                        class={"mx-name-actionButton1"}
                                        style={undefined}
                                        tabIndex={undefined}
                                        renderType={"button"}
                                        role={undefined}
                                        buttonClass={"btn-success"}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Add" }, "args": {} }
                                            })
                                        ])}
                                        tooltip={TextProperty({
                                            "value": t([
                                                ""
                                            ])
                                        })}
                                        icon={undefined}
                                        action={ActionProperty({
                                            "action": { "type": "createObject", "argMap": {}, "config": { "entity": "MyFirstModule.TrainingEvent", "operationId": "KT7spH1VaFiQztmzby7Rcg", "pageSettings": { "name": "MyFirstModule/TrainingEvent_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": [ "Administrator" ] }, "allowedRoles": [ "Administrator" ], "objectParameter": "param$TrainingEvent" }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />
                ]} />,
            <$Div key="p.MyFirstModule.TrainingEvent_Overview.layoutGrid2$row1"
                $widgetId="p.MyFirstModule.TrainingEvent_Overview.layoutGrid2$row1"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.MyFirstModule.TrainingEvent_Overview.layoutGrid2$row1$column0"
                        $widgetId="p.MyFirstModule.TrainingEvent_Overview.layoutGrid2$row1$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$Container key="p.MyFirstModule.TrainingEvent_Overview.container2"
                                $widgetId="p.MyFirstModule.TrainingEvent_Overview.container2"
                                class={"mx-name-container2 background-white"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Gallery key="p.MyFirstModule.TrainingEvent_Overview.gallery1"
                                        $widgetId="p.MyFirstModule.TrainingEvent_Overview.gallery1"
                                        filtersPlaceholder={undefined}
                                        datasource={DatabaseObjectListProperty({
                                            "dataSourceId": "p.2",
                                            "entity": "MyFirstModule.TrainingEvent",
                                            "operationId": "nyBz0Bl5JVWuglOVCHw6OQ",
                                            "sort": []
                                        })}
                                        itemSelectionMode={"clear"}
                                        content={TemplatedWidgetProperty({
                                            "dataSourceId": "p.2",
                                            "editable": false,
                                            "children": () => [
                                                <$Text key="p.MyFirstModule.TrainingEvent_Overview.text1"
                                                    $widgetId="p.MyFirstModule.TrainingEvent_Overview.text1"
                                                    class={"mx-name-text1"}
                                                    style={undefined}
                                                    caption={t([
                                                        ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "+", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "MyFirstModule.TrainingEvent_Course/MyFirstModule.Course/Title" }, { "type": "literal", "value": "\r\nFrom : " } ] }, { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "StartDate" }, { "type": "literal", "value": "{\"type\":\"date\"}" } ] } ] }, { "type": "literal", "value": ", to: " } ] }, { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "EndDate" }, { "type": "literal", "value": "{\"type\":\"date\"}" } ] } ] }, { "type": "literal", "value": "\r\nTaught by: " } ] }, { "type": "variable", "variable": "currentObject", "path": "MyFirstModule.TrainingEvent_Teacher/MyFirstModule.Teacher/Name" } ] }, { "type": "literal", "value": "\r\nLocated at: " } ] }, { "type": "variable", "variable": "currentObject", "path": "MyFirstModule.TrainingEvent_Location/MyFirstModule.Location/Address" } ] }, { "type": "literal", "value": "\r\n" } ] }, "args": { "currentObject": { "widget": "p.MyFirstModule.TrainingEvent_Overview.gallery1", "source": "object" } } }
                                                        })
                                                    ])}
                                                    renderMode={"span"} />,
                                                <$ActionButton key="p.MyFirstModule.TrainingEvent_Overview.actionButton3"
                                                    $widgetId="p.MyFirstModule.TrainingEvent_Overview.actionButton3"
                                                    buttonId={"p.MyFirstModule.TrainingEvent_Overview.actionButton3"}
                                                    class={"mx-name-actionButton3"}
                                                    style={undefined}
                                                    tabIndex={undefined}
                                                    renderType={"button"}
                                                    role={undefined}
                                                    buttonClass={"btn-danger"}
                                                    caption={t([
                                                        ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })
                                                    ])}
                                                    tooltip={TextProperty({
                                                        "value": t([
                                                            ""
                                                        ])
                                                    })}
                                                    icon={WebIconProperty({
                                                        "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-trash-can" }
                                                    })}
                                                    action={ActionProperty({
                                                        "action": { "type": "deleteObject", "argMap": { "$object": { "widget": "p.MyFirstModule.TrainingEvent_Overview.gallery1", "source": "object" } }, "config": { "closePage": false, "operationId": "2R3NowS/+F61C+6X4z+78g" }, "disabledDuringExecution": true },
                                                        "abortOnServerValidation": true
                                                    })} />,
                                                <$ConditionalVisibilityWrapper key="p.MyFirstModule.TrainingEvent_Overview.actionButton2$visibility"
                                                    $widgetId="p.MyFirstModule.TrainingEvent_Overview.actionButton2$visibility"
                                                    visible={ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                                    })}
                                                    contents={[
                                                        <$ActionButton key="p.MyFirstModule.TrainingEvent_Overview.actionButton2"
                                                            $widgetId="p.MyFirstModule.TrainingEvent_Overview.actionButton2"
                                                            buttonId={"p.MyFirstModule.TrainingEvent_Overview.actionButton2"}
                                                            class={"mx-name-actionButton2"}
                                                            style={undefined}
                                                            tabIndex={undefined}
                                                            renderType={"button"}
                                                            role={undefined}
                                                            buttonClass={"btn-info"}
                                                            caption={t([
                                                                ExpressionProperty({
                                                                    "expression": { "expr": { "type": "literal", "value": "Registrations" }, "args": {} }
                                                                })
                                                            ])}
                                                            tooltip={TextProperty({
                                                                "value": t([
                                                                    ""
                                                                ])
                                                            })}
                                                            icon={undefined}
                                                            action={ActionProperty({
                                                                "action": { "type": "openPage", "argMap": { "param$TrainingEvent": { "widget": "p.MyFirstModule.TrainingEvent_Overview.gallery1", "source": "object" } }, "config": { "name": "MyFirstModule/TrainingEvent_Registration_Overview.page.xml", "location": "content", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                                                "abortOnServerValidation": true
                                                            })} />
                                                    ]} />,
                                                <$Text key="p.MyFirstModule.TrainingEvent_Overview.text2"
                                                    $widgetId="p.MyFirstModule.TrainingEvent_Overview.text2"
                                                    class={"mx-name-text2"}
                                                    style={undefined}
                                                    caption={t([
                                                        ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "literal", "value": "number of registrations:\r\n" }, { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "TotalNumberOfRegistrations" }, { "type": "literal", "value": "{}" } ] } ] }, "args": { "currentObject": { "widget": "p.MyFirstModule.TrainingEvent_Overview.gallery1", "source": "object" } } }
                                                        })
                                                    ])}
                                                    renderMode={"span"} />
                                            ]
                                        })}
                                        desktopItems={1}
                                        tabletItems={1}
                                        phoneItems={1}
                                        pageSize={20}
                                        pagination={"buttons"}
                                        pagingPosition={"below"}
                                        showPagingButtons={"always"}
                                        showTotalCount={false}
                                        showEmptyPlaceholder={"none"}
                                        emptyPlaceholder={undefined}
                                        itemClass={undefined}
                                        onClickTrigger={"single"}
                                        onClick={ListActionProperty({
                                            "action": { "type": "openPage", "argMap": { "param$TrainingEvent": { "widget": "p.MyFirstModule.TrainingEvent_Overview.gallery1", "source": "object" } }, "config": { "name": "MyFirstModule/TrainingEvent_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": false },
                                            "abortOnServerValidation": false,
                                            "dataSourceId": "p.2",
                                            "argumentTypes": { }
                                        })}
                                        onSelectionChange={undefined}
                                        filterSectionTitle={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                        ])}
                                        emptyMessageTitle={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                        ])}
                                        ariaLabelListBox={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                        ])}
                                        ariaLabelItem={t([
                                            undefined
                                        ])}
                                        class={"mx-name-gallery1"}
                                        style={undefined}
                                        tabIndex={undefined} />
                                ]}
                                ariaHidden={false} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Training event Overview"
]);

export const classes = "layout-atlas layout-atlas-responsive-topbar";

export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.Atlas_TopBar.Main": region$Main,
};
