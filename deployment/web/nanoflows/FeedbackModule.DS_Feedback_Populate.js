import { addEnumerations, t } from "mendix";
import { SUB_Feedback_GetOrCreate } from "./FeedbackModule.SUB_Feedback_GetOrCreate.js";

export const DS_Feedback_Populate = {
  "name": "FeedbackModule.DS_Feedback_Populate",
  "instructions": [
    {
      "type": "nanoflowCall",
      "label": "035ab547-08bf-4857-b736-f3b8e6b800d0",
      "flow": () => SUB_Feedback_GetOrCreate,
      "parameters": [],
      "outputVar": "Feedback"
    },
    {
      "type": "microflowCall",
      "label": "e095754e-8742-44d2-8036-2c494369d4f2",
      "operationId": "YwU5h4idLVS8Y8mmuYv+7g",
      "parameters": [
        {
          "name": "Feedback",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          },
          "kind": "object"
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "99e48633-49e8-4e6d-97c8-d8ca6e01a0b8",
      "inputVar": "Feedback",
      "member": "_showEmail",
      "value": {
        "type": "conditional",
        "condition": {
          "type": "variable",
          "variable": "Feedback",
          "path": "_showEmail"
        },
        "then": {
          "type": "literal",
          "value": true
        },
        "else": {
          "type": "conditional",
          "condition": {
            "type": "conditional",
            "condition": {
              "type": "function",
              "name": "!=",
              "parameters": [
                {
                  "type": "variable",
                  "variable": "Feedback",
                  "path": "SubmitterEmail"
                },
                {
                  "type": "literal",
                  "value": null
                }
              ]
            },
            "then": {
              "type": "function",
              "name": "!=",
              "parameters": [
                {
                  "type": "variable",
                  "variable": "Feedback",
                  "path": "SubmitterEmail"
                },
                {
                  "type": "literal",
                  "value": ""
                }
              ]
            },
            "else": {
              "type": "literal",
              "value": false
            }
          },
          "then": {
            "type": "literal",
            "value": false
          },
          "else": {
            "type": "literal",
            "value": true
          }
        }
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "25406be5-81b6-4580-9359-a85b6ac97015",
      "action": () => require("C:/Users/acuen/Mendix/LearnNow Training Management 1-main/javascriptsource/feedbackmodule/actions/JS_PopulateFeedbackMetadata").JS_PopulateFeedbackMetadata,
      "parameters": [
        {
          "kind": "object",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "6ac2f21d-7c6a-4102-b93f-79f8b8337dbe",
      "action": () => require("C:/Users/acuen/Mendix/LearnNow Training Management 1-main/javascriptsource/feedbackmodule/actions/JS_SetFeedbackStorageObject").JS_SetFeedbackStorageObject,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "object",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "01ea089f-8549-4e5c-b925-f62db0d6d1e9",
      "action": () => require("C:/Users/acuen/Mendix/LearnNow Training Management 1-main/javascriptsource/feedbackmodule/actions/JS_Recalculate_MendixModal_Error_PopUp_Zindex").JS_Recalculate_MendixModal_Error_PopUp_Zindex,
      "parameters": []
    },
    {
      "type": "return",
      "label": "32d61062-28ce-46be-8eb5-db40e7b65a28",
      "result": {
        "type": "variable",
        "variable": "Feedback"
      },
      "resultKind": "object"
    }
  ]
};
