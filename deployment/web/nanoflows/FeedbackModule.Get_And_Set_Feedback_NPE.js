import { addEnumerations, t } from "mendix";

export const Get_And_Set_Feedback_NPE = {
  "name": "FeedbackModule.Get_And_Set_Feedback_NPE",
  "instructions": [
    {
      "type": "javaScriptActionCall",
      "label": "e328842f-3dc0-494d-8219-ffa89efc0582",
      "action": () => require("C:/Users/acuen/Mendix/LearnNow Training Management 1-main/javascriptsource/feedbackmodule/actions/JS_GetSingleLocalStorageObjectItem").JS_GetSingleLocalStorageObjectItem,
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
      "label": "5183b841-bc70-4091-9424-06c0b29021cc",
      "action": () => require("C:/Users/acuen/Mendix/LearnNow Training Management 1-main/javascriptsource/feedbackmodule/actions/JS_GetSingleLocalStorageObjectItem").JS_GetSingleLocalStorageObjectItem,
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
      "label": "962542c7-6884-4bd0-8e03-91938eb1ad60",
      "action": () => require("C:/Users/acuen/Mendix/LearnNow Training Management 1-main/javascriptsource/feedbackmodule/actions/JS_GetSingleLocalStorageObjectItem").JS_GetSingleLocalStorageObjectItem,
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
      "label": "0bf0d839-da2a-46f5-8c93-8334c2e2f2da",
      "action": () => require("C:/Users/acuen/Mendix/LearnNow Training Management 1-main/javascriptsource/feedbackmodule/actions/JS_GetSingleLocalStorageObjectItem").JS_GetSingleLocalStorageObjectItem,
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
      "label": "a58b92b3-3ec9-4022-891c-f070c346a701",
      "action": () => require("C:/Users/acuen/Mendix/LearnNow Training Management 1-main/javascriptsource/feedbackmodule/actions/JS_GetSingleLocalStorageObjectItem").JS_GetSingleLocalStorageObjectItem,
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
      "label": "0efe433a-449d-4487-aad1-5cf8e6d884ae",
      "action": () => require("C:/Users/acuen/Mendix/LearnNow Training Management 1-main/javascriptsource/feedbackmodule/actions/JS_GetSingleLocalStorageObjectItem").JS_GetSingleLocalStorageObjectItem,
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
      "label": "838e1b11-c1a9-4306-b39a-e241c5425e09",
      "action": () => require("C:/Users/acuen/Mendix/LearnNow Training Management 1-main/javascriptsource/feedbackmodule/actions/JS_GetSingleLocalStorageObjectItem").JS_GetSingleLocalStorageObjectItem,
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
      "label": "734e6f04-45bd-4a35-958a-964239b9ab0e",
      "action": () => require("C:/Users/acuen/Mendix/LearnNow Training Management 1-main/javascriptsource/feedbackmodule/actions/JS_GetSingleLocalStorageObjectItem").JS_GetSingleLocalStorageObjectItem,
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
      "label": "0ce68afe-5852-45cb-8818-53ac9d1029d3",
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
      "label": "641418fc-a6eb-4663-ba1c-c24a2a3750ad",
      "result": {
        "type": "variable",
        "variable": "NewFeedback"
      },
      "resultKind": "object"
    }
  ]
};
