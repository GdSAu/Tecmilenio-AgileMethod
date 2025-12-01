import { addEnumerations, t } from "mendix";
import { Get_And_Set_Feedback_NPE } from "./FeedbackModule.Get_And_Set_Feedback_NPE.js";

export const SUB_Feedback_GetOrCreate = {
  "name": "FeedbackModule.SUB_Feedback_GetOrCreate",
  "instructions": [
    {
      "type": "javaScriptActionCall",
      "label": "4e9bc467-e6ba-4574-85dc-ea13cd28d2a3",
      "action": () => require("C:/Users/Vic/Mendix/LearnNow Training Management-main/javascriptsource/feedbackmodule/actions/JS_isStrictMode").JS_isStrictMode,
      "outputVar": "isStrictMode",
      "parameters": []
    },
    {
      "type": "switch",
      "label": "c5eeee4a-1ffc-489a-89d2-ef2522d138c7",
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
        "false": "0e600f38-6250-43eb-b290-f761082c105d",
        "true": "ae8e8cc6-11ce-4191-935e-fa1fe581406e"
      }
    },
    {
      "type": "tryCatch",
      "label": "ae8e8cc6-11ce-4191-935e-fa1fe581406e",
      "catchTarget": "6bc5578f-f62c-4d71-a7bd-6d20c9b76776",
      "body": [
        {
          "type": "javaScriptActionCall",
          "action": () => require("C:/Users/Vic/Mendix/LearnNow Training Management-main/javascriptsource/feedbackmodule/actions/JS_GetFeedbackStorageObject").JS_GetFeedbackStorageObject,
          "outputVar": "LocalFeedback",
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
                "value": "FeedbackModule.Feedback"
              }
            }
          ]
        },
        {
          "type": "return",
          "result": {
            "type": "literal",
            "value": true
          },
          "resultKind": "primitive"
        }
      ]
    },
    {
      "type": "switch",
      "label": "7dee2947-7e74-442b-a4fc-2253ffdd45fc",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "LocalFeedback"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "false": "7ac5a18d-e5af-467f-96c1-4d5901880bcf",
        "true": "b59bb7b7-5ce9-41e2-aa97-b337fe2510be"
      }
    },
    {
      "type": "return",
      "label": "b59bb7b7-5ce9-41e2-aa97-b337fe2510be",
      "result": {
        "type": "variable",
        "variable": "LocalFeedback"
      },
      "resultKind": "object"
    },
    {
      "type": "jump",
      "label": "7ac5a18d-e5af-467f-96c1-4d5901880bcf",
      "target": "10ddd69a-fb2d-4410-8206-7175f780bbfa"
    },
    {
      "type": "createObject",
      "label": "10ddd69a-fb2d-4410-8206-7175f780bbfa",
      "objectType": "FeedbackModule.Feedback",
      "outputVar": "NewFeedback"
    },
    {
      "type": "return",
      "label": "0ad55f98-2e7c-44b8-972d-aa33f51fd3d7",
      "result": {
        "type": "variable",
        "variable": "NewFeedback"
      },
      "resultKind": "object"
    },
    {
      "type": "jump",
      "label": "6bc5578f-f62c-4d71-a7bd-6d20c9b76776",
      "target": "7ac5a18d-e5af-467f-96c1-4d5901880bcf"
    },
    {
      "type": "jump",
      "label": "7ac5a18d-e5af-467f-96c1-4d5901880bcf",
      "target": "10ddd69a-fb2d-4410-8206-7175f780bbfa"
    },
    {
      "type": "jump",
      "label": "0e600f38-6250-43eb-b290-f761082c105d",
      "target": "68089582-f869-4f1b-ab9d-6bd739472494"
    },
    {
      "type": "nanoflowCall",
      "label": "68089582-f869-4f1b-ab9d-6bd739472494",
      "flow": () => Get_And_Set_Feedback_NPE,
      "parameters": [],
      "outputVar": "StrictModeFeedback"
    },
    {
      "type": "return",
      "label": "64fb9a3e-9543-4762-b6aa-e79d0976863f",
      "result": {
        "type": "variable",
        "variable": "StrictModeFeedback"
      },
      "resultKind": "object"
    }
  ]
};
