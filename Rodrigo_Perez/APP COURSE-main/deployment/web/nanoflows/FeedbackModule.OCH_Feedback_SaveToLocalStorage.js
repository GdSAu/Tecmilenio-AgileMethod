import { addEnumerations, t } from "mendix";

export const OCH_Feedback_SaveToLocalStorage = {
  "name": "FeedbackModule.OCH_Feedback_SaveToLocalStorage",
  "instructions": [
    {
      "type": "javaScriptActionCall",
      "label": "d5c3c8fa-ee5d-4d2e-936c-1a742fceb825",
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
      "label": "a55760e0-6466-4f79-a5d7-76e41b195ffa",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
