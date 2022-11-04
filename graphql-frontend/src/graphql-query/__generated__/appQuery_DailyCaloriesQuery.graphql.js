/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type appQuery_dailyCaloriesConnectionFragment$ref = any;
export type appQuery_DailyCaloriesQueryVariables = {|
  limit: number,
  cursor?: ?string,
|};
export type appQuery_DailyCaloriesQueryResponse = {|
  +$fragmentRefs: appQuery_dailyCaloriesConnectionFragment$ref
|};
export type appQuery_DailyCaloriesQuery = {|
  variables: appQuery_DailyCaloriesQueryVariables,
  response: appQuery_DailyCaloriesQueryResponse,
|};
*/


/*
query appQuery_DailyCaloriesQuery(
  $limit: Int!
  $cursor: String
) {
  ...appQuery_dailyCaloriesConnectionFragment_443xSQ
}

fragment appQuery_dailyCaloriesConnectionFragment_443xSQ on Query {
  dailyCalories(first: $limit, after: $cursor) {
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    edges {
      cursor
      node {
        id
        value
        date
        __typename
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "cursor"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "limit"
},
v2 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "limit"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "appQuery_DailyCaloriesQuery",
    "selections": [
      {
        "args": (v2/*: any*/),
        "kind": "FragmentSpread",
        "name": "appQuery_dailyCaloriesConnectionFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "appQuery_DailyCaloriesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DailyCalorieConnection",
        "kind": "LinkedField",
        "name": "dailyCalories",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasPreviousPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "DailyCalorieEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "DailyCalorie",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "value",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "date",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "appQuery_dailyCalories",
        "kind": "LinkedHandle",
        "name": "dailyCalories"
      }
    ]
  },
  "params": {
    "cacheID": "e86aada20510176da4d5a2d96d425271",
    "id": null,
    "metadata": {},
    "name": "appQuery_DailyCaloriesQuery",
    "operationKind": "query",
    "text": "query appQuery_DailyCaloriesQuery(\n  $limit: Int!\n  $cursor: String\n) {\n  ...appQuery_dailyCaloriesConnectionFragment_443xSQ\n}\n\nfragment appQuery_dailyCaloriesConnectionFragment_443xSQ on Query {\n  dailyCalories(first: $limit, after: $cursor) {\n    pageInfo {\n      startCursor\n      endCursor\n      hasNextPage\n      hasPreviousPage\n    }\n    edges {\n      cursor\n      node {\n        id\n        value\n        date\n        __typename\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1f7f4539b82d484580f1c67c0ab79465';

module.exports = node;
