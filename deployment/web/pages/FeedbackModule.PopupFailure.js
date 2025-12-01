import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { WebStaticImageProperty } from "mendix/WebStaticImageProperty";

import { Container } from "mendix/widgets/web/Container";
import { Div } from "mendix/widgets/web/Div";
import * as ImageWidgetModule from "C:/Users/Vic/Mendix/LearnNow Training Management-main/deployment/web/widgets/com/mendix/widget/web/image/Image.mjs";
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;   
import "C:/Users/Vic/Mendix/LearnNow Training Management-main/deployment/web/widgets/com/mendix/widget/web/image/Image.css";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $Container, $Image, $Text } = asPluginWidgets({ Div, Container, Image, Text });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p5.FeedbackModule.PopupFailure.layoutGrid1"
        $widgetId="p5.FeedbackModule.PopupFailure.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p5.FeedbackModule.PopupFailure.layoutGrid1$row0"
                $widgetId="p5.FeedbackModule.PopupFailure.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p5.FeedbackModule.PopupFailure.layoutGrid1$row0$column0"
                        $widgetId="p5.FeedbackModule.PopupFailure.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$Container key="p5.FeedbackModule.PopupFailure.container1"
                                $widgetId="p5.FeedbackModule.PopupFailure.container1"
                                class={"mx-name-container1"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Image key="p5.FeedbackModule.PopupFailure.image1"
                                        $widgetId="p5.FeedbackModule.PopupFailure.image1"
                                        datasource={"image"}
                                        imageObject={WebStaticImageProperty({
                                            "image": { "uri": "img/FeedbackModule$Images$Failure.png" }
                                        })}
                                        defaultImageDynamic={undefined}
                                        imageUrl={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                        ])}
                                        imageIcon={undefined}
                                        isBackgroundImage={false}
                                        children={undefined}
                                        onClickType={"action"}
                                        onClick={undefined}
                                        alternativeText={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                        ])}
                                        widthUnit={"auto"}
                                        width={100}
                                        heightUnit={"pixels"}
                                        height={240}
                                        iconSize={14}
                                        displayAs={"fullImage"}
                                        responsive={true}
                                        minHeightUnit={"none"}
                                        minHeight={0}
                                        maxHeightUnit={"none"}
                                        maxHeight={0}
                                        class={"mx-name-image1 img-center"}
                                        style={undefined}
                                        tabIndex={undefined} />,
                                    <$Text key="p5.FeedbackModule.PopupFailure.text1"
                                        $widgetId="p5.FeedbackModule.PopupFailure.text1"
                                        class={"mx-name-text1 text-center d-block spacing-outer-top-large spacing-outer-bottom"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Oops, it seems your feedback wasn't sent!" }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"h3"} />,
                                    <$Text key="p5.FeedbackModule.PopupFailure.text2"
                                        $widgetId="p5.FeedbackModule.PopupFailure.text2"
                                        class={"mx-name-text2 text-center d-block"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Please try again later, or contact support if the issue persists." }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"p"} />
                                ]}
                                ariaHidden={false} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Something went wrong"
]);

export const classes = "";

export const cancelChangesOperationId = "c1b8ECN3JVywk7dLl7x0UQ";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
