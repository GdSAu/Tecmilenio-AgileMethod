import { addEnumerations, t } from "mendix";
import { SUB_Feedback_ResetLocalStorage } from "./FeedbackModule.SUB_Feedback_ResetLocalStorage.js";

export const ACT_SubmitFeedback = {
  "name": "FeedbackModule.ACT_SubmitFeedback",
  "instructions": [
    {
      "type": "microflowCall",
      "label": "e20f0f26-e83c-44e1-bba2-377cacc1bb85",
      "operationId": "n8DU+htl7VKQ9Nf8dmYmNg",
      "parameters": [
        {
          "name": "Feedback",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          },
          "kind": "object"
        }
      ],
      "outputVar": "isValid"
    },
    {
      "type": "switch",
      "label": "e44ecf79-ed70-4192-9538-1fd2e139508b",
      "condition": {
        "type": "variable",
        "variable": "isValid"
      },
      "targets": {
        "true": "ed7c4887-d183-4b5c-bef0-7188f25f860c",
        "false": "1f8208f4-df60-41a6-85b0-4730f8512c37"
      }
    },
    {
      "type": "return",
      "label": "1f8208f4-df60-41a6-85b0-4730f8512c37",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "microflowCall",
      "label": "ed7c4887-d183-4b5c-bef0-7188f25f860c",
      "operationId": "sd4euSf5hFu/Uz5J9EUCFA",
      "parameters": [
        {
          "name": "Feedback",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          },
          "kind": "object"
        }
      ],
      "outputVar": "ResponseHelper"
    },
    {
      "type": "closeForm",
      "label": "7b37e539-ef54-4cde-9650-039cb48e1ccf",
      "numberOfPagesToClose": {
        "type": "literalNumeric",
        "value": "1"
      }
    },
    {
      "type": "switch",
      "label": "54e52372-f65d-4ad8-829d-af6287ddf064",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "ResponseHelper"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "true": "2ff3325e-1f24-49a8-8826-86ed77082b9b",
        "false": "d73efa4b-e51f-47ab-a55c-125a0e568200"
      }
    },
    {
      "type": "jump",
      "label": "d73efa4b-e51f-47ab-a55c-125a0e568200",
      "target": "38d75785-147a-49e2-99de-7b24012931b5"
    },
    {
      "type": "openForm",
      "label": "38d75785-147a-49e2-99de-7b24012931b5",
      "path": "FeedbackModule/PopupFailure.page.xml",
      "params": {
        "name": "FeedbackModule/PopupFailure.page.xml",
        "location": "modal",
        "resizable": false
      }
    },
    {
      "type": "return",
      "label": "2085987f-b6a0-4691-855a-9fa7ae390a68",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "openForm",
      "label": "2ff3325e-1f24-49a8-8826-86ed77082b9b",
      "path": "FeedbackModule/PopupSuccess.page.xml",
      "params": {
        "name": "FeedbackModule/PopupSuccess.page.xml",
        "location": "modal",
        "resizable": false
      },
      "inputArgs": {
        "$Response": {
          "type": "variable",
          "variable": "ResponseHelper"
        }
      }
    },
    {
      "type": "nanoflowCall",
      "label": "be4b8602-91f0-4a04-9939-d8f859139a24",
      "flow": () => SUB_Feedback_ResetLocalStorage,
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
      "type": "return",
      "label": "620b976e-c286-4cd2-a4fc-beb2d828f2cb",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
