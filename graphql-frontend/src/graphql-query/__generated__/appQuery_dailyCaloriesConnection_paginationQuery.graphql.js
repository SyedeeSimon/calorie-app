/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type appQuery_dailyCaloriesConnectionFragment$ref = any;
export type appQuery_dailyCaloriesConnection_paginationQueryVariables = {|
  after?: ?string,
  first: number,
|};
export type appQuery_dailyCaloriesConnection_paginationQueryResponse = {|
  +$fragmentRefs: appQuery_dailyCaloriesConnectionFragment$ref
|};
export type appQuery_dailyCaloriesConnection_paginationQuery = {|
  variables: appQuery_dailyCaloriesConnection_paginationQueryVariables,
  response: appQuery_dailyCaloriesConnection_paginationQueryResponse,
|};
*/


/*
query appQuery_dailyCaloriesConnection_paginationQuery(
  $after: String
  $first: Int!
) {
  ...appQuery_dailyCaloriesConnectionFragment_2HEEH6
}

fragment appQuery_dailyCaloriesConnectionFragment_2HEEH6 on Query {
  dailyCalories(first: $first, after: $after) {
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
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "after"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "appQuery_dailyCaloriesConnection_paginationQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "appQuery_dailyCaloriesConnectionFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "appQuery_dailyCaloriesConnection_paginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
        "args": (v1/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "appQuery_dailyCalories",
        "kind": "LinkedHandle",
        "name": "dailyCalories"
      }
    ]
  },
  "params": {
    "cacheID": "d7af70ab0c1e3649eab7e83fa971f035",
    "id": null,
    "metadata": {},
    "name": "appQuery_dailyCaloriesConnection_paginationQuery",
    "operationKind": "query",
    "text": "query appQuery_dailyCaloriesConnection_paginationQuery(\n  $after: String\n  $first: Int!\n) {\n  ...appQuery_dailyCaloriesConnectionFragment_2HEEH6\n}\n\nfragment appQuery_dailyCaloriesConnectionFragment_2HEEH6 on Query {\n  dailyCalories(first: $first, after: $after) {\n    pageInfo {\n      startCursor\n      endCursor\n      hasNextPage\n      hasPreviousPage\n    }\n    edges {\n      cursor\n      node {\n        id\n        value\n        date\n        __typename\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '11ea5857377fc0c2313018c01f129404';

module.exports = node;
