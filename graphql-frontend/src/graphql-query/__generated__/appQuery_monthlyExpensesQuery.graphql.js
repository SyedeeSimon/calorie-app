/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type appQuery_monthlyExpensesConnectionFragment$ref = any;
export type appQuery_monthlyExpensesQueryVariables = {|
  limit: number,
  cursor?: ?string,
|};
export type appQuery_monthlyExpensesQueryResponse = {|
  +$fragmentRefs: appQuery_monthlyExpensesConnectionFragment$ref
|};
export type appQuery_monthlyExpensesQuery = {|
  variables: appQuery_monthlyExpensesQueryVariables,
  response: appQuery_monthlyExpensesQueryResponse,
|};
*/


/*
query appQuery_monthlyExpensesQuery(
  $limit: Int!
  $cursor: String
) {
  ...appQuery_monthlyExpensesConnectionFragment_443xSQ
}

fragment appQuery_monthlyExpensesConnectionFragment_443xSQ on Query {
  monthlyExpenses(first: $limit, after: $cursor) {
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
    "name": "appQuery_monthlyExpensesQuery",
    "selections": [
      {
        "args": (v2/*: any*/),
        "kind": "FragmentSpread",
        "name": "appQuery_monthlyExpensesConnectionFragment"
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
    "name": "appQuery_monthlyExpensesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
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
        "args": (v2/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "appQuery_monthlyExpenses",
        "kind": "LinkedHandle",
        "name": "monthlyExpenses"
      }
    ]
  },
  "params": {
    "cacheID": "c39cac6617a66a3f46e25fb40a9e9d55",
    "id": null,
    "metadata": {},
    "name": "appQuery_monthlyExpensesQuery",
    "operationKind": "query",
    "text": "query appQuery_monthlyExpensesQuery(\n  $limit: Int!\n  $cursor: String\n) {\n  ...appQuery_monthlyExpensesConnectionFragment_443xSQ\n}\n\nfragment appQuery_monthlyExpensesConnectionFragment_443xSQ on Query {\n  monthlyExpenses(first: $limit, after: $cursor) {\n    pageInfo {\n      startCursor\n      endCursor\n      hasNextPage\n      hasPreviousPage\n    }\n    edges {\n      cursor\n      node {\n        id\n        value\n        monthAndYear\n        __typename\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b00842d8924b9cf2d49786ebd349b6de';

module.exports = node;
