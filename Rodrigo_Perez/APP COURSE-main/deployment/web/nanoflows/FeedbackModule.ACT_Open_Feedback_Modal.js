import { addEnumerations, t } from "mendix";

export const ACT_Open_Feedback_Modal = {
  "name": "FeedbackModule.ACT_Open_Feedback_Modal",
  "instructions": [
    {
      "type": "openForm",
      "label": "2bc6e551-5acd-4767-a26e-08577885b50b",
      "path": "FeedbackModule/ShareFeedback.page.xml",
      "params": {
        "name": "FeedbackModule/ShareFeedback.page.xml",
        "location": "modal",
        "resizable": true
      }
    },
    {
      "type": "return",
      "label": "3dde3b3d-4fad-4caa-92fa-f52e35c88418",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
