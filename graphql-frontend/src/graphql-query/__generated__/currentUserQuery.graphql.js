/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type Role = "ADMIN" | "USER" | "%future added value";
export type currentUserQueryVariables = {||};
export type currentUserQueryResponse = {|
  +currentUser: ?{|
    +id: string,
    +name: string,
    +dailyCalorieLimit: number,
    +monthlyExpenseLimit: ?number,
    +role: Role,
  |}
|};
export type currentUserQuery = {|
  variables: currentUserQueryVariables,
  response: currentUserQueryResponse,
|};
*/


/*
query currentUserQuery {
  currentUser {
    id
    name
    dailyCalorieLimit
    monthlyExpenseLimit
    role
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "currentUser",
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
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "dailyCalorieLimit",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "monthlyExpenseLimit",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "role",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "currentUserQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "currentUserQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "0952748039ffad7a803cd369244f0889",
    "id": null,
    "metadata": {},
    "name": "currentUserQuery",
    "operationKind": "query",
    "text": "query currentUserQuery {\n  currentUser {\n    id\n    name\n    dailyCalorieLimit\n    monthlyExpenseLimit\n    role\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e99b2c247ba7baea0e548d034b49c8b1';

module.exports = node;
