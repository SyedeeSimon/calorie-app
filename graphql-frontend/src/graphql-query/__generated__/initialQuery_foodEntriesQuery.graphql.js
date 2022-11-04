/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type initialQuery_foodEntriesConnectionFragment$ref = any;
export type initialQuery_foodEntriesQueryVariables = {|
  limit: number,
  cursor?: ?string,
  startDate: string,
  endDate: string,
  foodIds: $ReadOnlyArray<string>,
|};
export type initialQuery_foodEntriesQueryResponse = {|
  +$fragmentRefs: initialQuery_foodEntriesConnectionFragment$ref
|};
export type initialQuery_foodEntriesQuery = {|
  variables: initialQuery_foodEntriesQueryVariables,
  response: initialQuery_foodEntriesQueryResponse,
|};
*/


/*
query initialQuery_foodEntriesQuery(
  $limit: Int!
  $cursor: String
  $startDate: String!
  $endDate: String!
  $foodIds: [String!]!
) {
  ...initialQuery_foodEntriesConnectionFragment_AYbW4
}

fragment initialQuery_foodEntriesConnectionFragment_AYbW4 on Query {
  foodEntries(first: $limit, after: $cursor, filter: {startDate: $startDate, endDate: $endDate, foodIds: $foodIds}) {
    totalCount
    pageInfo {
      endCursor
      startCursor
      hasNextPage
      hasPreviousPage
    }
    edges {
      cursor
      node {
        id
        foodName
        calories
        price
        createdAt
        owner {
          id
          name
        }
        __typename
      }
    }
    __typename
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
  "name": "endDate"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "foodIds"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "limit"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "startDate"
},
v5 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "cursor"
},
v6 = {
  "kind": "Variable",
  "name": "endDate",
  "variableName": "endDate"
},
v7 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "limit"
},
v8 = {
  "kind": "Variable",
  "name": "foodIds",
  "variableName": "foodIds"
},
v9 = {
  "kind": "Variable",
  "name": "startDate",
  "variableName": "startDate"
},
v10 = [
  (v5/*: any*/),
  {
    "fields": [
      (v6/*: any*/),
      (v8/*: any*/),
      (v9/*: any*/)
    ],
    "kind": "ObjectValue",
    "name": "filter"
  },
  (v7/*: any*/)
],
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "initialQuery_foodEntriesQuery",
    "selections": [
      {
        "args": [
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "initialQuery_foodEntriesConnectionFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v3/*: any*/),
      (v0/*: any*/),
      (v4/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "initialQuery_foodEntriesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v10/*: any*/),
        "concreteType": "FoodEntryConnection",
        "kind": "LinkedField",
        "name": "foodEntries",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalCount",
            "storageKey": null
          },
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
                "name": "endCursor",
                "storageKey": null
              },
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
            "concreteType": "FoodEntryEdge",
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
                "concreteType": "FoodEntry",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v11/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "foodName",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "calories",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "price",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "createdAt",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "owner",
                    "plural": false,
                    "selections": [
                      (v11/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "name",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v12/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v12/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v10/*: any*/),
        "filters": [
          "filter"
        ],
        "handle": "connection",
        "key": "initialQuery_foodEntries",
        "kind": "LinkedHandle",
        "name": "foodEntries"
      }
    ]
  },
  "params": {
    "cacheID": "fa91d48ccef2aed894415492a08f6b4b",
    "id": null,
    "metadata": {},
    "name": "initialQuery_foodEntriesQuery",
    "operationKind": "query",
    "text": "query initialQuery_foodEntriesQuery(\n  $limit: Int!\n  $cursor: String\n  $startDate: String!\n  $endDate: String!\n  $foodIds: [String!]!\n) {\n  ...initialQuery_foodEntriesConnectionFragment_AYbW4\n}\n\nfragment initialQuery_foodEntriesConnectionFragment_AYbW4 on Query {\n  foodEntries(first: $limit, after: $cursor, filter: {startDate: $startDate, endDate: $endDate, foodIds: $foodIds}) {\n    totalCount\n    pageInfo {\n      endCursor\n      startCursor\n      hasNextPage\n      hasPreviousPage\n    }\n    edges {\n      cursor\n      node {\n        id\n        foodName\n        calories\n        price\n        createdAt\n        owner {\n          id\n          name\n        }\n        __typename\n      }\n    }\n    __typename\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '782cb865c5817816b2f1ec709989de1c';

module.exports = node;
