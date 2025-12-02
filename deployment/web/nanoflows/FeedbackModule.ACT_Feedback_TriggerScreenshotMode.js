import { addEnumerations, t } from "mendix";

export const ACT_Feedback_TriggerScreenshotMode = {
  "name": "FeedbackModule.ACT_Feedback_TriggerScreenshotMode",
  "instructions": [
    {
      "type": "closeForm",
      "label": "25ae2c9e-8d16-4b36-81d0-8d6b8c00f4a2"
    },
    {
      "type": "javaScriptActionCall",
      "label": "04378013-a9b1-412e-8773-6208cfa7c7b6",
      "action": () => require("C:/Users/acuen/Mendix/LearnNow Training Management 1-main/javascriptsource/feedbackmodule/actions/JS_ToggleFeedbackScreenshotWidget").JS_ToggleFeedbackScreenshotWidget,
      "outputVar": "base64FromWidget",
      "parameters": []
    },
    {
      "type": "switch",
      "label": "5b68562b-e6d6-401d-a25c-06d67b9c565f",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "base64FromWidget"
          },
          {
            "type": "literal",
            "value": "uploadCancelled"
          }
        ]
      },
      "targets": {
        "true": "e272b2e6-2489-4313-bc5a-9ec9b60553f3",
        "false": "917741c7-3a68-468f-a179-673f54c27ad7"
      }
    },
    {
      "type": "jump",
      "label": "917741c7-3a68-468f-a179-673f54c27ad7",
      "target": "a05800f5-f19a-46c8-82e7-12f717f4b0b5"
    },
    {
      "type": "jump",
      "label": "a05800f5-f19a-46c8-82e7-12f717f4b0b5",
      "target": "983b258b-946e-4692-a860-0efe9cb0b49a"
    },
    {
      "type": "jump",
      "label": "983b258b-946e-4692-a860-0efe9cb0b49a",
      "target": "b5057ecb-46cc-483a-b24c-bf0982f7ef40"
    },
    {
      "type": "openForm",
      "label": "b5057ecb-46cc-483a-b24c-bf0982f7ef40",
      "path": "FeedbackModule/ShareFeedback.page.xml",
      "params": {
        "name": "FeedbackModule/ShareFeedback.page.xml",
        "location": "modal",
        "resizable": true
      }
    },
    {
      "type": "return",
      "label": "87f51475-693e-44d9-9f08-801341e54b4f",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "switch",
      "label": "e272b2e6-2489-4313-bc5a-9ec9b60553f3",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "base64FromWidget"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "true": "1cd706b3-f1cd-4ec2-b4b7-3aeb9ae2cfbb",
        "false": "d580e7f2-9283-43f1-b938-ac19aa8c2949"
      }
    },
    {
      "type": "return",
      "label": "d580e7f2-9283-43f1-b938-ac19aa8c2949",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "javaScriptActionCall",
      "label": "1cd706b3-f1cd-4ec2-b4b7-3aeb9ae2cfbb",
      "action": () => require("C:/Users/acuen/Mendix/LearnNow Training Management 1-main/javascriptsource/feedbackmodule/actions/JS_isStrictMode").JS_isStrictMode,
      "outputVar": "isStrictMode",
      "parameters": []
    },
    {
      "type": "switch",
      "label": "925e443d-fbfd-4aa2-a35c-783a7f4faf95",
      "condition": {
        "type": "function",
        "name": "=",
        "parameters": [
          {
            "type": "variable",
            "variable": "isStrictMode"
          },
          {
            "type": "literal",
            "value": false
          }
        ]
      },
      "targets": {
        "true": "cb98be29-952a-4a01-a819-dce221e401af",
        "false": "f7f91d54-123f-424f-a5a8-fa49505427e3"
      }
    },
    {
      "type": "jump",
      "label": "f7f91d54-123f-424f-a5a8-fa49505427e3",
      "target": "b8c0a498-4fc7-4ae0-94ad-b92e9d9e6328"
    },
    {
      "type": "javaScriptActionCall",
      "label": "b8c0a498-4fc7-4ae0-94ad-b92e9d9e6328",
      "action": () => require("C:/Users/acuen/Mendix/LearnNow Training Management 1-main/javascriptsource/feedbackmodule/actions/JS_SetSingleLocalStorageObjectItem").JS_SetSingleLocalStorageObjectItem,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "base64FromWidget"
          }
        }
      ]
    },
    {
      "type": "jump",
      "label": "bc3dfb2d-4965-4885-a6f0-7748ddfd5426",
      "target": "983b258b-946e-4692-a860-0efe9cb0b49a"
    },
    {
      "type": "jump",
      "label": "983b258b-946e-4692-a860-0efe9cb0b49a",
      "target": "b5057ecb-46cc-483a-b24c-bf0982f7ef40"
    },
    {
      "type": "changeObject",
      "label": "cb98be29-952a-4a01-a819-dce221e401af",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "variable",
        "variable": "base64FromWidget"
      }
    },
    {
      "type": "commitObjects",
      "operationId": "RJNFuW+RTVC8elJLgcKAXg",
      "inputVar": "Feedback"
    },
    {
      "type": "jump",
      "label": "983b258b-946e-4692-a860-0efe9cb0b49a",
      "target": "b5057ecb-46cc-483a-b24c-bf0982f7ef40"
    }
  ]
};
