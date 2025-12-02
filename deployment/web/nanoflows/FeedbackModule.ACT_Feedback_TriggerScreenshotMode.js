import { addEnumerations, t } from "mendix";

export const ACT_Feedback_TriggerScreenshotMode = {
  "name": "FeedbackModule.ACT_Feedback_TriggerScreenshotMode",
  "instructions": [
    {
      "type": "closeForm",
      "label": "a1f34d91-9e6a-45e8-9eea-2e2b140a140c"
    },
    {
      "type": "javaScriptActionCall",
      "label": "0bc90c8e-166b-4643-ac33-be9dd949b14f",
      "action": () => require("C:/Users/user/Mendix/LearnNow Training Management-main_3/javascriptsource/feedbackmodule/actions/JS_ToggleFeedbackScreenshotWidget").JS_ToggleFeedbackScreenshotWidget,
      "outputVar": "base64FromWidget",
      "parameters": []
    },
    {
      "type": "switch",
      "label": "1fc12cd7-642d-49f3-9226-c995637cc347",
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
        "true": "7719f22f-c60d-4612-a0a4-bb674b6048da",
        "false": "77b9ef25-a984-4c43-83f9-91444aef9219"
      }
    },
    {
      "type": "jump",
      "label": "77b9ef25-a984-4c43-83f9-91444aef9219",
      "target": "7e5a0a43-b2fb-4913-af2e-dc31eeff971c"
    },
    {
      "type": "jump",
      "label": "7e5a0a43-b2fb-4913-af2e-dc31eeff971c",
      "target": "da8cbfe6-6d3c-41a2-b84c-6de74f24e1dc"
    },
    {
      "type": "jump",
      "label": "da8cbfe6-6d3c-41a2-b84c-6de74f24e1dc",
      "target": "28c36d3f-243c-44bb-9fb7-f3ebdf5e212f"
    },
    {
      "type": "openForm",
      "label": "28c36d3f-243c-44bb-9fb7-f3ebdf5e212f",
      "path": "FeedbackModule/ShareFeedback.page.xml",
      "params": {
        "name": "FeedbackModule/ShareFeedback.page.xml",
        "location": "modal",
        "resizable": true
      }
    },
    {
      "type": "return",
      "label": "41b10cef-0a02-46b7-93f9-116754cd5377",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "switch",
      "label": "7719f22f-c60d-4612-a0a4-bb674b6048da",
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
        "true": "2c05830d-15ff-4575-a37c-98b5c1fcc364",
        "false": "8f7f0123-1d70-4887-9cde-728557e430e4"
      }
    },
    {
      "type": "return",
      "label": "8f7f0123-1d70-4887-9cde-728557e430e4",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "javaScriptActionCall",
      "label": "2c05830d-15ff-4575-a37c-98b5c1fcc364",
      "action": () => require("C:/Users/user/Mendix/LearnNow Training Management-main_3/javascriptsource/feedbackmodule/actions/JS_isStrictMode").JS_isStrictMode,
      "outputVar": "isStrictMode",
      "parameters": []
    },
    {
      "type": "switch",
      "label": "85ffb65e-189a-4b62-ba34-16915de3278a",
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
        "true": "220cd3bd-c6a4-4e2d-ba4f-eaf22bb893a2",
        "false": "d132c25e-5749-4421-bd09-d9894e38943b"
      }
    },
    {
      "type": "jump",
      "label": "d132c25e-5749-4421-bd09-d9894e38943b",
      "target": "7b870553-6f5a-4552-9edc-d6a9caff84e7"
    },
    {
      "type": "javaScriptActionCall",
      "label": "7b870553-6f5a-4552-9edc-d6a9caff84e7",
      "action": () => require("C:/Users/user/Mendix/LearnNow Training Management-main_3/javascriptsource/feedbackmodule/actions/JS_SetSingleLocalStorageObjectItem").JS_SetSingleLocalStorageObjectItem,
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
      "label": "1e468988-83c0-4b9d-8190-78c21fbc1278",
      "target": "da8cbfe6-6d3c-41a2-b84c-6de74f24e1dc"
    },
    {
      "type": "jump",
      "label": "da8cbfe6-6d3c-41a2-b84c-6de74f24e1dc",
      "target": "28c36d3f-243c-44bb-9fb7-f3ebdf5e212f"
    },
    {
      "type": "changeObject",
      "label": "220cd3bd-c6a4-4e2d-ba4f-eaf22bb893a2",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "variable",
        "variable": "base64FromWidget"
      }
    },
    {
      "type": "commitObjects",
      "operationId": "TOPcNPR+jF2cmbf5UxkU2g",
      "inputVar": "Feedback"
    },
    {
      "type": "jump",
      "label": "da8cbfe6-6d3c-41a2-b84c-6de74f24e1dc",
      "target": "28c36d3f-243c-44bb-9fb7-f3ebdf5e212f"
    }
  ]
};
