import { addEnumerations, t } from "mendix";

export const OCH_Feedback_SaveToLocalStorage = {
  "name": "FeedbackModule.OCH_Feedback_SaveToLocalStorage",
  "instructions": [
    {
      "type": "javaScriptActionCall",
      "label": "270f3ea9-a8d4-4436-ac06-511567ee3efd",
      "action": () => require("C:/Users/Vic/Mendix/LearnNow Training Management-main/javascriptsource/feedbackmodule/actions/JS_SetFeedbackStorageObject").JS_SetFeedbackStorageObject,
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
      "label": "4516ca88-8a17-4a05-92f2-7331ddb48ec8",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
