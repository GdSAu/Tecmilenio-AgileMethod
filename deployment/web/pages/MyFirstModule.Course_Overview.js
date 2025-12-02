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
    <$Div key="p.MyFirstModule.Course_Overview.layoutGrid2"
        $widgetId="p.MyFirstModule.Course_Overview.layoutGrid2"
        class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.MyFirstModule.Course_Overview.layoutGrid2$row0"
                $widgetId="p.MyFirstModule.Course_Overview.layoutGrid2$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.MyFirstModule.Course_Overview.layoutGrid2$row0$column0"
                        $widgetId="p.MyFirstModule.Course_Overview.layoutGrid2$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$Container key="p.MyFirstModule.Course_Overview.container1"
                                $widgetId="p.MyFirstModule.Course_Overview.container1"
                                class={"mx-name-container1 pageheader spacing-outer-bottom-large"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Text key="p.MyFirstModule.Course_Overview.text40"
                                        $widgetId="p.MyFirstModule.Course_Overview.text40"
                                        class={"mx-name-text40 pageheader-title spacing-outer-bottom"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": " Course Overview" }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"h1"} />,
                                    <$Text key="p.MyFirstModule.Course_Overview.text39"
                                        $widgetId="p.MyFirstModule.Course_Overview.text39"
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
                    <$Div key="p.MyFirstModule.Course_Overview.layoutGrid2$row0$column1"
                        $widgetId="p.MyFirstModule.Course_Overview.layoutGrid2$row0$column1"
                        class={"col-lg-auto col-md-auto col-auto"}
                        style={undefined}
                        content={[
                            <$ConditionalVisibilityWrapper key="p.MyFirstModule.Course_Overview.actionButton1$visibility"
                                $widgetId="p.MyFirstModule.Course_Overview.actionButton1$visibility"
                                visible={ExpressionProperty({
                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                })}
                                contents={[
                                    <$ActionButton key="p.MyFirstModule.Course_Overview.actionButton1"
                                        $widgetId="p.MyFirstModule.Course_Overview.actionButton1"
                                        buttonId={"p.MyFirstModule.Course_Overview.actionButton1"}
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
                                            "action": { "type": "createObject", "argMap": {}, "config": { "entity": "MyFirstModule.Course", "operationId": "GDyMiw+GilKxGkkKW/Iqdw", "pageSettings": { "name": "MyFirstModule/Course_NewEdit.page.xml", "location": "content", "allowedRoles": [ "Administrator" ] }, "allowedRoles": [ "Administrator" ], "objectParameter": "param$Course" }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />
                ]} />,
            <$Div key="p.MyFirstModule.Course_Overview.layoutGrid2$row1"
                $widgetId="p.MyFirstModule.Course_Overview.layoutGrid2$row1"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.MyFirstModule.Course_Overview.layoutGrid2$row1$column0"
                        $widgetId="p.MyFirstModule.Course_Overview.layoutGrid2$row1$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$Gallery key="p.MyFirstModule.Course_Overview.gallery1"
                                $widgetId="p.MyFirstModule.Course_Overview.gallery1"
                                filtersPlaceholder={[
                                    <$Text key="p.MyFirstModule.Course_Overview.text3"
                                        $widgetId="p.MyFirstModule.Course_Overview.text3"
                                        class={"mx-name-text3"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Text" }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"span"} />
                                ]}
                                datasource={DatabaseObjectListProperty({
                                    "dataSourceId": "p.2",
                                    "entity": "MyFirstModule.Course",
                                    "operationId": "9rHh9DUJJleqaOcBoXfecg",
                                    "sort": []
                                })}
                                itemSelectionMode={"clear"}
                                content={TemplatedWidgetProperty({
                                    "dataSourceId": "p.2",
                                    "editable": false,
                                    "children": () => [
                                        <$Text key="p.MyFirstModule.Course_Overview.text1"
                                            $widgetId="p.MyFirstModule.Course_Overview.text1"
                                            class={"mx-name-text1"}
                                            style={undefined}
                                            caption={t([
                                                ExpressionProperty({
                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Title" }, "args": { "currentObject": { "widget": "p.MyFirstModule.Course_Overview.gallery1", "source": "object" } } }
                                                })
                                            ])}
                                            renderMode={"span"} />,
                                        <$Text key="p.MyFirstModule.Course_Overview.text2"
                                            $widgetId="p.MyFirstModule.Course_Overview.text2"
                                            class={"mx-name-text2"}
                                            style={undefined}
                                            caption={t([
                                                ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "literal", "value": "Duration: " }, { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Duration" }, { "type": "literal", "value": "{}" } ] } ] }, "args": { "currentObject": { "widget": "p.MyFirstModule.Course_Overview.gallery1", "source": "object" } } }
                                                })
                                            ])}
                                            renderMode={"span"} />,
                                        <$Text key="p.MyFirstModule.Course_Overview.text4"
                                            $widgetId="p.MyFirstModule.Course_Overview.text4"
                                            class={"mx-name-text4"}
                                            style={undefined}
                                            caption={t([
                                                ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "literal", "value": "Price: " }, { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Price" }, { "type": "literal", "value": "{\"decimalPrecision\":2}" } ] } ] }, "args": { "currentObject": { "widget": "p.MyFirstModule.Course_Overview.gallery1", "source": "object" } } }
                                                })
                                            ])}
                                            renderMode={"span"} />,
                                        <$ConditionalVisibilityWrapper key="p.MyFirstModule.Course_Overview.actionButton3$visibility"
                                            $widgetId="p.MyFirstModule.Course_Overview.actionButton3$visibility"
                                            visible={ExpressionProperty({
                                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                            })}
                                            contents={[
                                                <$ActionButton key="p.MyFirstModule.Course_Overview.actionButton3"
                                                    $widgetId="p.MyFirstModule.Course_Overview.actionButton3"
                                                    buttonId={"p.MyFirstModule.Course_Overview.actionButton3"}
                                                    class={"mx-name-actionButton3"}
                                                    style={undefined}
                                                    tabIndex={undefined}
                                                    renderType={"button"}
                                                    role={undefined}
                                                    buttonClass={"btn-primary"}
                                                    caption={t([
                                                        ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "Schedule" }, "args": {} }
                                                        })
                                                    ])}
                                                    tooltip={TextProperty({
                                                        "value": t([
                                                            ""
                                                        ])
                                                    })}
                                                    icon={WebIconProperty({
                                                        "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-calendar" }
                                                    })}
                                                    action={ActionProperty({
                                                        "action": { "type": "callMicroflow", "argMap": { "Course": { "widget": "p.MyFirstModule.Course_Overview.gallery1", "source": "object" } }, "config": { "operationId": "vYuT+LZsTFW/+mYY8A0z5w", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                        "abortOnServerValidation": true
                                                    })} />
                                            ]} />
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
                                    "action": { "type": "openPage", "argMap": { "param$Course": { "widget": "p.MyFirstModule.Course_Overview.gallery1", "source": "object" } }, "config": { "name": "MyFirstModule/Course_NewEdit.page.xml", "location": "content", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": false },
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
                                tabIndex={undefined} />,
                            <$Container key="p.MyFirstModule.Course_Overview.container2"
                                $widgetId="p.MyFirstModule.Course_Overview.container2"
                                class={"mx-name-container2 background-white"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={undefined}
                                ariaHidden={false} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Course Overview"
]);

export const classes = "layout-atlas layout-atlas-responsive-topbar";

export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.Atlas_TopBar.Main": region$Main,
};
