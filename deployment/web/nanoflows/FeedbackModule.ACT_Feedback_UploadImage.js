import { addEnumerations, t } from "mendix";

export const ACT_Feedback_UploadImage = {
  "name": "FeedbackModule.ACT_Feedback_UploadImage",
  "instructions": [
    {
      "type": "setVariable",
      "label": "54ab4671-95d6-42af-b928-13e6bd053001",
      "value": {
        "type": "literal",
        "value": ".gif,.png,.jpg,.jpeg"
      },
      "outputVar": "mimeTypes",
      "outputKind": "primitive"
    },
    {
      "type": "setVariable",
      "label": "70656f4e-cdda-4e06-9770-d619829f04f0",
      "value": {
        "type": "literalNumeric",
        "value": "5"
      },
      "outputVar": "fileUploadSize",
      "outputKind": "primitive"
    },
    {
      "type": "javaScriptActionCall",
      "label": "ff536912-dcca-4b9d-b87b-65222bcdfd98",
      "action": () => require("C:/Users/user/Mendix/LearnNow Training Management-main_3/javascriptsource/feedbackmodule/actions/JS_UploadAndConvertToFileBlobURL").JS_UploadAndConvertToFileBlobURL,
      "outputVar": "fileBlobURL",
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "mimeTypes"
          }
        },
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "fileUploadSize"
          }
        }
      ]
    },
    {
      "type": "switch",
      "label": "8b47f1a7-fc7e-42f5-a292-c3953c640fd0",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "fileBlobURL"
          },
          {
            "type": "literal",
            "value": "uploadCancelled"
          }
        ]
      },
      "targets": {
        "true": "c1366fc8-c373-4fe5-be97-15afdce6bf82",
        "false": "b5fc8f46-f7a2-4bdc-b42f-cf94918d6282"
      }
    },
    {
      "type": "return",
      "label": "b5fc8f46-f7a2-4bdc-b42f-cf94918d6282",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "switch",
      "label": "c1366fc8-c373-4fe5-be97-15afdce6bf82",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "fileBlobURL"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "false": "69e84831-9202-43c0-9190-79d20728eff7",
        "true": "b4de1f5f-0f08-4c9a-b0a0-54181eb09174"
      }
    },
    {
      "type": "switch",
      "label": "b4de1f5f-0f08-4c9a-b0a0-54181eb09174",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "fileBlobURL"
          },
          {
            "type": "literal",
            "value": "fileSizeNotAccepted"
          }
        ]
      },
      "targets": {
        "true": "0cfcfae0-d314-4697-a48a-af776c5fc2c5",
        "false": "4c2c94d1-1e46-4e68-9663-3cb0dd864b51"
      }
    },
    {
      "type": "showMessage",
      "label": "4c2c94d1-1e46-4e68-9663-3cb0dd864b51",
      "messageType": "error",
      "message": t([
        {
          "type": "literal",
          "value": "Maximum image size allowed is 5MB."
        }
      ]),
      "blocking": true
    },
    {
      "type": "return",
      "label": "9ac2fc75-68c2-4a0c-a6ee-5ff52ffb79f1",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "switch",
      "label": "0cfcfae0-d314-4697-a48a-af776c5fc2c5",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "fileBlobURL"
          },
          {
            "type": "literal",
            "value": "fileTypeNotAccepted"
          }
        ]
      },
      "targets": {
        "false": "61e27b9c-980c-466e-ac9d-bea9a888105d",
        "true": "29f2878b-12b0-49fe-b8b1-555855d0d1fd"
      }
    },
    {
      "type": "closeForm",
      "label": "29f2878b-12b0-49fe-b8b1-555855d0d1fd"
    },
    {
      "type": "javaScriptActionCall",
      "label": "24ede6b7-fd78-40b2-9f2f-aa1436b2cc7a",
      "action": () => require("C:/Users/user/Mendix/LearnNow Training Management-main_3/javascriptsource/feedbackmodule/actions/JS_ToggleFeedbackAnnotateWidget").JS_ToggleFeedbackAnnotateWidget,
      "outputVar": "base64ImageFromWidget",
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "fileBlobURL"
          }
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "76042c82-4fd9-441d-9245-472ea46b5a62",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "variable",
        "variable": "base64ImageFromWidget"
      }
    },
    {
      "type": "commitObjects",
      "operationId": "X2pfXHlvt16QPqePQZRV9g",
      "inputVar": "Feedback"
    },
    {
      "type": "openForm",
      "label": "69c95bff-7cde-4c38-9a76-610aef2706e1",
      "path": "FeedbackModule/ShareFeedback.page.xml",
      "params": {
        "name": "FeedbackModule/ShareFeedback.page.xml",
        "location": "modal",
        "resizable": true
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "b35de743-6074-4550-a869-9a1480c5ad24",
      "action": () => require("C:/Users/user/Mendix/LearnNow Training Management-main_3/javascriptsource/feedbackmodule/actions/JS_SetFeedbackStorageObject").JS_SetFeedbackStorageObject,
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
      "type": "javaScriptActionCall",
      "label": "19c7b6ff-5477-41ba-a925-2394c037eb66",
      "action": () => require("C:/Users/user/Mendix/LearnNow Training Management-main_3/javascriptsource/feedbackmodule/actions/JS_RevokeUploadedFileFromMemory").JS_RevokeUploadedFileFromMemory,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "fileBlobURL"
          }
        }
      ]
    },
    {
      "type": "return",
      "label": "76d91f28-ef31-4483-af1f-d0d0bce85daa",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "showMessage",
      "label": "61e27b9c-980c-466e-ac9d-bea9a888105d",
      "messageType": "error",
      "message": t([
        {
          "type": "literal",
          "value": "Only images with format of .gif .jpg .jpeg .png are allowed"
        }
      ]),
      "blocking": true
    },
    {
      "type": "return",
      "label": "fac62fb4-ad56-443a-8468-2dfd10b0f57c",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "showMessage",
      "label": "69e84831-9202-43c0-9190-79d20728eff7",
      "messageType": "error",
      "message": t([
        {
          "type": "literal",
          "value": "Upload failed, please try again."
        }
      ]),
      "blocking": true
    },
    {
      "type": "return",
      "label": "9785fd75-ac78-4e2b-9fa2-93a241cde99c",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
