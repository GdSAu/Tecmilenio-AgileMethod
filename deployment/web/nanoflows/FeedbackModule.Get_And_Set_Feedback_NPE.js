import { addEnumerations, t } from "mendix";

export const Get_And_Set_Feedback_NPE = {
  "name": "FeedbackModule.Get_And_Set_Feedback_NPE",
  "instructions": [
    {
      "type": "javaScriptActionCall",
      "label": "02ff4d0a-5768-4e4e-a00d-bf87cef25609",
      "action": () => require("C:/Users/Vic/Mendix/LearnNow Training Management-main/javascriptsource/feedbackmodule/actions/JS_GetSingleLocalStorageObjectItem").JS_GetSingleLocalStorageObjectItem,
      "outputVar": "AppID",
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
            "type": "literal",
            "value": "AppID"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "b8c72464-6bb8-4124-8a60-eea8ef3a9b67",
      "action": () => require("C:/Users/Vic/Mendix/LearnNow Training Management-main/javascriptsource/feedbackmodule/actions/JS_GetSingleLocalStorageObjectItem").JS_GetSingleLocalStorageObjectItem,
      "outputVar": "Subject",
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
            "type": "literal",
            "value": "Subject"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "cf1e95f8-8ad7-4649-8a39-f4e3bbd0fe65",
      "action": () => require("C:/Users/Vic/Mendix/LearnNow Training Management-main/javascriptsource/feedbackmodule/actions/JS_GetSingleLocalStorageObjectItem").JS_GetSingleLocalStorageObjectItem,
      "outputVar": "Description",
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
            "type": "literal",
            "value": "Description"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "a539e8ee-3d9f-4ca9-85ad-6fed814031ed",
      "action": () => require("C:/Users/Vic/Mendix/LearnNow Training Management-main/javascriptsource/feedbackmodule/actions/JS_GetSingleLocalStorageObjectItem").JS_GetSingleLocalStorageObjectItem,
      "outputVar": "SubmitterUUID",
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
            "type": "literal",
            "value": "SubmitterUUID"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "8e2f72a9-d65d-45b0-b7f5-05429fbe7cc2",
      "action": () => require("C:/Users/Vic/Mendix/LearnNow Training Management-main/javascriptsource/feedbackmodule/actions/JS_GetSingleLocalStorageObjectItem").JS_GetSingleLocalStorageObjectItem,
      "outputVar": "SubmitterEmail",
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
            "type": "literal",
            "value": "SubmitterEmail"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "c82f9f07-55ab-413f-a5ba-925d49197348",
      "action": () => require("C:/Users/Vic/Mendix/LearnNow Training Management-main/javascriptsource/feedbackmodule/actions/JS_GetSingleLocalStorageObjectItem").JS_GetSingleLocalStorageObjectItem,
      "outputVar": "SubmitterDisplayName",
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
            "type": "literal",
            "value": "SubmitterDisplayName"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "e800401b-afdf-4945-a184-2a7a38e5182a",
      "action": () => require("C:/Users/Vic/Mendix/LearnNow Training Management-main/javascriptsource/feedbackmodule/actions/JS_GetSingleLocalStorageObjectItem").JS_GetSingleLocalStorageObjectItem,
      "outputVar": "ImageB64",
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
            "type": "literal",
            "value": "ImageB64"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "b6dd2acc-8cc1-4be4-8426-6dbb2d16175d",
      "action": () => require("C:/Users/Vic/Mendix/LearnNow Training Management-main/javascriptsource/feedbackmodule/actions/JS_GetSingleLocalStorageObjectItem").JS_GetSingleLocalStorageObjectItem,
      "outputVar": "_showEmail",
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
            "type": "literal",
            "value": "_showEmail"
          }
        }
      ]
    },
    {
      "type": "createObject",
      "label": "470146e2-cc0f-440e-a3a4-e9b8dbdefb03",
      "objectType": "FeedbackModule.Feedback",
      "outputVar": "NewFeedback"
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "AppID",
      "value": {
        "type": "variable",
        "variable": "AppID"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "Subject",
      "value": {
        "type": "variable",
        "variable": "Subject"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "Description",
      "value": {
        "type": "variable",
        "variable": "Description"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "SubmitterUUID",
      "value": {
        "type": "variable",
        "variable": "SubmitterUUID"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "SubmitterEmail",
      "value": {
        "type": "variable",
        "variable": "SubmitterEmail"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "SubmitterDisplayName",
      "value": {
        "type": "variable",
        "variable": "SubmitterDisplayName"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "ImageB64",
      "value": {
        "type": "variable",
        "variable": "ImageB64"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "_showEmail",
      "value": {
        "type": "conditional",
        "condition": {
          "type": "function",
          "name": "=",
          "parameters": [
            {
              "type": "variable",
              "variable": "_showEmail"
            },
            {
              "type": "literal",
              "value": "true"
            }
          ]
        },
        "then": {
          "type": "literal",
          "value": true
        },
        "else": {
          "type": "literal",
          "value": false
        }
      }
    },
    {
      "type": "return",
      "label": "ba15af07-4c7c-4d3d-82f4-cc117d1e5388",
      "result": {
        "type": "variable",
        "variable": "NewFeedback"
      },
      "resultKind": "object"
    }
  ]
};
