import { addEnumerations, t } from "mendix";

export const ACT_Feedback_UploadImage = {
  "name": "FeedbackModule.ACT_Feedback_UploadImage",
  "instructions": [
    {
      "type": "setVariable",
      "label": "bf6fd4eb-9b35-4d98-9337-f4d42b4b7bf0",
      "value": {
        "type": "literal",
        "value": ".gif,.png,.jpg,.jpeg"
      },
      "outputVar": "mimeTypes",
      "outputKind": "primitive"
    },
    {
      "type": "setVariable",
      "label": "c980d48a-3d08-4529-a038-305ce8ae551f",
      "value": {
        "type": "literalNumeric",
        "value": "5"
      },
      "outputVar": "fileUploadSize",
      "outputKind": "primitive"
    },
    {
      "type": "javaScriptActionCall",
      "label": "735c4b5b-b444-434c-841c-6e1300538053",
      "action": () => require("C:/Users/P4/Mendix/APP COURSE-main/javascriptsource/feedbackmodule/actions/JS_UploadAndConvertToFileBlobURL").JS_UploadAndConvertToFileBlobURL,
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
      "label": "1e42a3de-5775-4d6b-a1fa-3269cf3ac738",
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
        "true": "d44e443a-12e2-4e5c-9900-3262eb306cca",
        "false": "70cc90ff-fdcd-4cc1-bd47-e7e774499825"
      }
    },
    {
      "type": "return",
      "label": "70cc90ff-fdcd-4cc1-bd47-e7e774499825",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "switch",
      "label": "d44e443a-12e2-4e5c-9900-3262eb306cca",
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
        "false": "89d1cfd7-82c5-4a24-80e8-237aaf295fde",
        "true": "22670ab2-68e8-4237-ba89-88fd4ededf22"
      }
    },
    {
      "type": "switch",
      "label": "22670ab2-68e8-4237-ba89-88fd4ededf22",
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
        "true": "973da8ab-3acf-45d8-b04b-de97ae7721a6",
        "false": "66d57ef4-97b4-4ab4-9bde-0903cacb1388"
      }
    },
    {
      "type": "showMessage",
      "label": "66d57ef4-97b4-4ab4-9bde-0903cacb1388",
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
      "label": "d660e389-bfdd-4d9d-9d3c-98527f0cee91",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "switch",
      "label": "973da8ab-3acf-45d8-b04b-de97ae7721a6",
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
        "false": "a9fd14e0-6802-46b8-8668-1a9026f96d7b",
        "true": "90b045e4-2fbb-496f-89a1-ed949f038ccc"
      }
    },
    {
      "type": "closeForm",
      "label": "90b045e4-2fbb-496f-89a1-ed949f038ccc"
    },
    {
      "type": "javaScriptActionCall",
      "label": "f59c4688-2068-4d15-95ad-4efca4b5fdb4",
      "action": () => require("C:/Users/P4/Mendix/APP COURSE-main/javascriptsource/feedbackmodule/actions/JS_ToggleFeedbackAnnotateWidget").JS_ToggleFeedbackAnnotateWidget,
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
      "label": "538cc8d4-a436-422b-b8ba-8995d1892997",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "variable",
        "variable": "base64ImageFromWidget"
      }
    },
    {
      "type": "commitObjects",
      "operationId": "yZqISSRXFlGcwtW49cEQ/A",
      "inputVar": "Feedback"
    },
    {
      "type": "openForm",
      "label": "e703e335-aadf-4ca9-be1e-6b9cc47ba9a6",
      "path": "FeedbackModule/ShareFeedback.page.xml",
      "params": {
        "name": "FeedbackModule/ShareFeedback.page.xml",
        "location": "modal",
        "resizable": true
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "39d106e0-aaa2-498e-8b60-e04489787125",
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
      "type": "javaScriptActionCall",
      "label": "e80d54cb-6e9d-482e-85b1-73c047bb123d",
      "action": () => require("C:/Users/P4/Mendix/APP COURSE-main/javascriptsource/feedbackmodule/actions/JS_RevokeUploadedFileFromMemory").JS_RevokeUploadedFileFromMemory,
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
      "label": "0ba885fd-c671-482e-a355-b782faadba8f",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "showMessage",
      "label": "a9fd14e0-6802-46b8-8668-1a9026f96d7b",
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
      "label": "2018dd68-bc7a-4aea-852e-9ee4dc1a6bc7",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "showMessage",
      "label": "89d1cfd7-82c5-4a24-80e8-237aaf295fde",
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
      "label": "1b5af639-bf44-46b0-a121-58af99e02a23",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
