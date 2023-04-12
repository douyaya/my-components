
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const MyTableMeta: ComponentMetadata = {
  "componentName": "MyTable",
  "title": "MyTable",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "my-components-new",
    "version": "0.1.2",
    "exportName": "MyTable",
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
            "en-US": "rowKey",
            "zh-CN": "rowKey"
          }
        },
        "name": "rowKey",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "string",
                "value": "string"
              }
            ],
            "options": [
              {
                "label": "string",
                "value": "string"
              }
            ]
          },
          "isRequired": true,
          "initialValue": "string"
        }
      },
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
            "en-US": "request",
            "zh-CN": "request"
          }
        },
        "name": "request",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "api",
                      "zh-CN": "api"
                    }
                  },
                  "name": "api",
                  "setter": {
                    "componentName": "StringSetter",
                    "isRequired": true,
                    "initialValue": ""
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "method",
                      "zh-CN": "method"
                    }
                  },
                  "name": "method",
                  "setter": {
                    "componentName": "SelectSetter",
                    "props": {
                      "dataSource": [
                        {
                          "label": "get",
                          "value": "get"
                        },
                        {
                          "label": "del",
                          "value": "del"
                        },
                        {
                          "label": "post",
                          "value": "post"
                        },
                        {
                          "label": "put",
                          "value": "put"
                        },
                        {
                          "label": "patch",
                          "value": "patch"
                        }
                      ],
                      "options": [
                        {
                          "label": "get",
                          "value": "get"
                        },
                        {
                          "label": "del",
                          "value": "del"
                        },
                        {
                          "label": "post",
                          "value": "post"
                        },
                        {
                          "label": "put",
                          "value": "put"
                        },
                        {
                          "label": "patch",
                          "value": "patch"
                        }
                      ]
                    },
                    "isRequired": true,
                    "initialValue": "get"
                  }
                }
              ],
              "extraSetter": {
                "componentName": "MixedSetter",
                "isRequired": false,
                "props": {}
              }
            }
          },
          "isRequired": true
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
    "title": "MyTable",
    "screenshot": "",
    "schema": {
      "componentName": "MyTable",
      "props": {}
    }
  }
];

export default {
  ...MyTableMeta,
  snippets
};
