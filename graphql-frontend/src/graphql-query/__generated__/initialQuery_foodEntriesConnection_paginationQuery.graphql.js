/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type initialQuery_foodEntriesConnectionFragment$ref = any;
export type initialQuery_foodEntriesConnection_paginationQueryVariables = {|
  after?: ?string,
  endDate?: ?string,
  first: number,
  foodIds: $ReadOnlyArray<string>,
  startDate?: ?string,
|};
export type initialQuery_foodEntriesConnection_paginationQueryResponse = {|
  +$fragmentRefs: initialQuery_foodEntriesConnectionFragment$ref
|};
export type initialQuery_foodEntriesConnection_paginationQuery = {|
  variables: initialQuery_foodEntriesConnection_paginationQueryVariables,
  response: initialQuery_foodEntriesConnection_paginationQueryResponse,
|};
*/


/*
query initialQuery_foodEntriesConnection_paginationQuery(
  $after: String
  $endDate: String
  $first: Int!
  $foodIds: [String!]!
  $startDate: String
) {
  ...initialQuery_foodEntriesConnectionFragment_4vH2Jt
}

fragment initialQuery_foodEntriesConnectionFragment_4vH2Jt on Query {
  foodEntries(first: $first, after: $after, filter: {startDate: $startDate, endDate: $endDate, foodIds: $foodIds}) {
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
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "after"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "endDate"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "foodIds"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "startDate"
  }
],
v1 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "after"
},
v2 = {
  "kind": "Variable",
  "name": "endDate",
  "variableName": "endDate"
},
v3 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "first"
},
v4 = {
  "kind": "Variable",
  "name": "foodIds",
  "variableName": "foodIds"
},
v5 = {
  "kind": "Variable",
  "name": "startDate",
  "variableName": "startDate"
},
v6 = [
  (v1/*: any*/),
  {
    "fields": [
      (v2/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/)
    ],
    "kind": "ObjectValue",
    "name": "filter"
  },
  (v3/*: any*/)
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "initialQuery_foodEntriesConnection_paginationQuery",
    "selections": [
      {
        "args": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/)
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "initialQuery_foodEntriesConnection_paginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v6/*: any*/),
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
                  (v7/*: any*/),
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
                      (v7/*: any*/),
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
                  (v8/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v8/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v6/*: any*/),
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
    "cacheID": "00c94935dac8352fb25d5042e1de6c41",
    "id": null,
    "metadata": {},
    "name": "initialQuery_foodEntriesConnection_paginationQuery",
    "operationKind": "query",
    "text": "query initialQuery_foodEntriesConnection_paginationQuery(\n  $after: String\n  $endDate: String\n  $first: Int!\n  $foodIds: [String!]!\n  $startDate: String\n) {\n  ...initialQuery_foodEntriesConnectionFragment_4vH2Jt\n}\n\nfragment initialQuery_foodEntriesConnectionFragment_4vH2Jt on Query {\n  foodEntries(first: $first, after: $after, filter: {startDate: $startDate, endDate: $endDate, foodIds: $foodIds}) {\n    totalCount\n    pageInfo {\n      endCursor\n      startCursor\n      hasNextPage\n      hasPreviousPage\n    }\n    edges {\n      cursor\n      node {\n        id\n        foodName\n        calories\n        price\n        createdAt\n        owner {\n          id\n          name\n        }\n        __typename\n      }\n    }\n    __typename\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5abeb8c401100a15e91ac926efa3931c';

module.exports = node;
