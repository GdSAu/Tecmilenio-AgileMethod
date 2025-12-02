import { addEnumerations, t } from "mendix";
import { Get_And_Set_Feedback_NPE } from "./FeedbackModule.Get_And_Set_Feedback_NPE.js";

export const SUB_Feedback_GetOrCreate = {
  "name": "FeedbackModule.SUB_Feedback_GetOrCreate",
  "instructions": [
    {
      "type": "javaScriptActionCall",
      "label": "d7c62b27-e6f3-4249-b2b4-82645a99f040",
      "action": () => require("C:/Users/acuen/Mendix/LearnNow Training Management 1-main/javascriptsource/feedbackmodule/actions/JS_isStrictMode").JS_isStrictMode,
      "outputVar": "isStrictMode",
      "parameters": []
    },
    {
      "type": "switch",
      "label": "df22697e-3181-45ee-8530-060801ac3338",
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
        "false": "298e050a-3cc1-432f-bcb1-c9ec052c1c0e",
        "true": "921b843b-665d-4683-bbf5-fec31ee2a7f6"
      }
    },
    {
      "type": "tryCatch",
      "label": "921b843b-665d-4683-bbf5-fec31ee2a7f6",
      "catchTarget": "735c12cd-f92b-4b98-9932-c26e16298552",
      "body": [
        {
          "type": "javaScriptActionCall",
          "action": () => require("C:/Users/acuen/Mendix/LearnNow Training Management 1-main/javascriptsource/feedbackmodule/actions/JS_GetFeedbackStorageObject").JS_GetFeedbackStorageObject,
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
      "label": "5d8eda39-92d2-48fa-8bd0-8edccbff3ef4",
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
        "false": "268dd5db-7fba-4539-a689-ccd10c9c149e",
        "true": "40f67b3f-f538-442b-b63b-ff5776bbe318"
      }
    },
    {
      "type": "return",
      "label": "40f67b3f-f538-442b-b63b-ff5776bbe318",
      "result": {
        "type": "variable",
        "variable": "LocalFeedback"
      },
      "resultKind": "object"
    },
    {
      "type": "jump",
      "label": "268dd5db-7fba-4539-a689-ccd10c9c149e",
      "target": "40552b58-8a16-48a5-9d48-15fb09a94878"
    },
    {
      "type": "createObject",
      "label": "40552b58-8a16-48a5-9d48-15fb09a94878",
      "objectType": "FeedbackModule.Feedback",
      "outputVar": "NewFeedback"
    },
    {
      "type": "return",
      "label": "c43f1a0f-47a1-463c-a0d0-4db0101693d2",
      "result": {
        "type": "variable",
        "variable": "NewFeedback"
      },
      "resultKind": "object"
    },
    {
      "type": "jump",
      "label": "735c12cd-f92b-4b98-9932-c26e16298552",
      "target": "268dd5db-7fba-4539-a689-ccd10c9c149e"
    },
    {
      "type": "jump",
      "label": "268dd5db-7fba-4539-a689-ccd10c9c149e",
      "target": "40552b58-8a16-48a5-9d48-15fb09a94878"
    },
    {
      "type": "jump",
      "label": "298e050a-3cc1-432f-bcb1-c9ec052c1c0e",
      "target": "c103451d-b7bf-4c9b-a99f-6d313284f54b"
    },
    {
      "type": "nanoflowCall",
      "label": "c103451d-b7bf-4c9b-a99f-6d313284f54b",
      "flow": () => Get_And_Set_Feedback_NPE,
      "parameters": [],
      "outputVar": "StrictModeFeedback"
    },
    {
      "type": "return",
      "label": "48b95a1a-09f4-4d9e-ace0-66b22bb53a95",
      "result": {
        "type": "variable",
        "variable": "StrictModeFeedback"
      },
      "resultKind": "object"
    }
  ]
};
