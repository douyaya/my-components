
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const SampleTableMeta: ComponentMetadata = {
  "componentName": "SampleTable",
  "title": "SampleTable",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "my-components-new",
    "version": "0.1.2",
    "exportName": "SampleTable",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "columns",
            "zh-CN": "columns"
          }
        },
        "name": "columns",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
              "componentName": "MixedSetter",
              "isRequired": false,
              "props": {}
            }
          },
          "initialValue": []
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "dataSource",
            "zh-CN": "dataSource"
          }
        },
        "name": "dataSource",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
              "componentName": "MixedSetter",
              "isRequired": false,
              "props": {}
            }
          },
          "initialValue": []
        }
      }
    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "SampleTable",
    "screenshot": "",
    "schema": {
      "componentName": "SampleTable",
      "props": {}
    }
  }
];

export default {
  ...SampleTableMeta,
  snippets
};
