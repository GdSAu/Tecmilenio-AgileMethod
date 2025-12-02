import { addEnumerations, t } from "mendix";

export const ACT_Feedback_ClearImage = {
  "name": "FeedbackModule.ACT_Feedback_ClearImage",
  "instructions": [
    {
      "type": "changeObject",
      "label": "7b13fa69-b2e0-4dae-9a90-ecad12bfbc35",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "f1f9c838-c530-44ec-a4a9-78ad4aa9fe08",
      "action": () => require("C:/Users/P4/Mendix/APP COURSE-main/javascriptsource/feedbackmodule/actions/JS_SetFeedbackStorageObject").JS_SetFeedbackStorageObject,
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
      "type": "return",
      "label": "2eb6a5f3-28c4-4c2c-bfee-144d99191062",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
