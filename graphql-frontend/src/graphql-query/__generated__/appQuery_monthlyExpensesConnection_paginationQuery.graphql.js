/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type appQuery_monthlyExpensesConnectionFragment$ref = any;
export type appQuery_monthlyExpensesConnection_paginationQueryVariables = {|
  after?: ?string,
  first: number,
|};
export type appQuery_monthlyExpensesConnection_paginationQueryResponse = {|
  +$fragmentRefs: appQuery_monthlyExpensesConnectionFragment$ref
|};
export type appQuery_monthlyExpensesConnection_paginationQuery = {|
  variables: appQuery_monthlyExpensesConnection_paginationQueryVariables,
  response: appQuery_monthlyExpensesConnection_paginationQueryResponse,
|};
*/


/*
query appQuery_monthlyExpensesConnection_paginationQuery(
  $after: String
  $first: Int!
) {
  ...appQuery_monthlyExpensesConnectionFragment_2HEEH6
}

fragment appQuery_monthlyExpensesConnectionFragment_2HEEH6 on Query {
  monthlyExpenses(first: $first, after: $after) {
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
        monthAndYear
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
    "name": "appQuery_monthlyExpensesConnection_paginationQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "appQuery_monthlyExpensesConnectionFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "appQuery_monthlyExpensesConnection_paginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "MonthlyExpenseConnection",
        "kind": "LinkedField",
        "name": "monthlyExpenses",
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
            "concreteType": "MonthlyExpenseEdge",
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
                "concreteType": "MonthlyExpense",
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
                    "name": "monthAndYear",
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
        "key": "appQuery_monthlyExpenses",
        "kind": "LinkedHandle",
        "name": "monthlyExpenses"
      }
    ]
  },
  "params": {
    "cacheID": "1d50151538be27ba3b990b7d9656e8e4",
    "id": null,
    "metadata": {},
    "name": "appQuery_monthlyExpensesConnection_paginationQuery",
    "operationKind": "query",
    "text": "query appQuery_monthlyExpensesConnection_paginationQuery(\n  $after: String\n  $first: Int!\n) {\n  ...appQuery_monthlyExpensesConnectionFragment_2HEEH6\n}\n\nfragment appQuery_monthlyExpensesConnectionFragment_2HEEH6 on Query {\n  monthlyExpenses(first: $first, after: $after) {\n    pageInfo {\n      startCursor\n      endCursor\n      hasNextPage\n      hasPreviousPage\n    }\n    edges {\n      cursor\n      node {\n        id\n        value\n        monthAndYear\n        __typename\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e9e2fdcf8f14050f484be966dc55aa50';

module.exports = node;
