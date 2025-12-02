import { addEnumerations, t } from "mendix";

export const ACT_Open_Feedback_Modal = {
  "name": "FeedbackModule.ACT_Open_Feedback_Modal",
  "instructions": [
    {
      "type": "openForm",
      "label": "036520f3-732d-4146-af76-d67ecd60914f",
      "path": "FeedbackModule/ShareFeedback.page.xml",
      "params": {
        "name": "FeedbackModule/ShareFeedback.page.xml",
        "location": "modal",
        "resizable": true
      }
    },
    {
      "type": "return",
      "label": "b2ab26a2-ee7c-4e3d-b146-23a4567f720d",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
