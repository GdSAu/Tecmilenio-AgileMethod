import { addEnumerations, t } from "mendix";
import { SUB_Feedback_ResetLocalStorage } from "./FeedbackModule.SUB_Feedback_ResetLocalStorage.js";

export const ACT_SubmitFeedback = {
  "name": "FeedbackModule.ACT_SubmitFeedback",
  "instructions": [
    {
      "type": "microflowCall",
      "label": "2fc3685e-93c0-4206-bd98-9d34218770d6",
      "operationId": "XobEyYEfn1+pY2u1NfBfKQ",
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
      "label": "76f658f9-6a46-4292-8b41-dedc6080fc0c",
      "condition": {
        "type": "variable",
        "variable": "isValid"
      },
      "targets": {
        "true": "3f1468dd-e066-4ed9-9998-21d09988fc24",
        "false": "534e2826-d722-4e75-8e8b-7022073cd704"
      }
    },
    {
      "type": "return",
      "label": "534e2826-d722-4e75-8e8b-7022073cd704",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "microflowCall",
      "label": "3f1468dd-e066-4ed9-9998-21d09988fc24",
      "operationId": "Glm6xam0DlWVq4QdgU+y2w",
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
      "label": "bf0647eb-39fe-43ad-b1bb-0227a23eba42",
      "numberOfPagesToClose": {
        "type": "literalNumeric",
        "value": "1"
      }
    },
    {
      "type": "switch",
      "label": "c7f79c1a-a54e-461d-941d-2983058cee2b",
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
        "true": "65950eff-57d0-4b4b-b3e8-3af9a977c82a",
        "false": "7c762ac6-53c1-4889-8520-cce28a7a7ec0"
      }
    },
    {
      "type": "jump",
      "label": "7c762ac6-53c1-4889-8520-cce28a7a7ec0",
      "target": "b2b1a7af-9cac-4309-96c5-c5a2f3f47aad"
    },
    {
      "type": "openForm",
      "label": "b2b1a7af-9cac-4309-96c5-c5a2f3f47aad",
      "path": "FeedbackModule/PopupFailure.page.xml",
      "params": {
        "name": "FeedbackModule/PopupFailure.page.xml",
        "location": "modal",
        "resizable": false
      }
    },
    {
      "type": "return",
      "label": "811ef0a2-a433-4bc9-8f36-3a2f480202ac",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "openForm",
      "label": "65950eff-57d0-4b4b-b3e8-3af9a977c82a",
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
      "label": "0866bf03-06e9-4088-9fc8-9fb5e8f7440e",
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
      "label": "27d0ba58-e498-429c-81cc-4736477c12e4",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
