/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SaveFoodEntryInput = {|
  id?: ?string,
  foodName: string,
  calories: number,
  price?: ?number,
  createdAt: string,
|};
export type appMutations_saveFoodEntryMutationVariables = {|
  param?: ?SaveFoodEntryInput
|};
export type appMutations_saveFoodEntryMutationResponse = {|
  +saveFoodEntry: ?{|
    +foodName: string,
    +calories: number,
    +price: ?number,
    +createdAt: string,
    +owner: ?{|
      +id: string,
      +name: string,
    |},
  |}
|};
export type appMutations_saveFoodEntryMutation = {|
  variables: appMutations_saveFoodEntryMutationVariables,
  response: appMutations_saveFoodEntryMutationResponse,
|};
*/


/*
mutation appMutations_saveFoodEntryMutation(
  $param: SaveFoodEntryInput
) {
  saveFoodEntry(foodEntry: $param) {
    foodName
    calories
    price
    createdAt
    owner {
      id
      name
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "param"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "foodEntry",
    "variableName": "param"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "foodName",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "calories",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "price",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "owner",
  "plural": false,
  "selections": [
    (v6/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "appMutations_saveFoodEntryMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "FoodEntry",
        "kind": "LinkedField",
        "name": "saveFoodEntry",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v7/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "appMutations_saveFoodEntryMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "FoodEntry",
        "kind": "LinkedField",
        "name": "saveFoodEntry",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v7/*: any*/),
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4ad2163d7674cba8b882acbc3cc7d3bc",
    "id": null,
    "metadata": {},
    "name": "appMutations_saveFoodEntryMutation",
    "operationKind": "mutation",
    "text": "mutation appMutations_saveFoodEntryMutation(\n  $param: SaveFoodEntryInput\n) {\n  saveFoodEntry(foodEntry: $param) {\n    foodName\n    calories\n    price\n    createdAt\n    owner {\n      id\n      name\n    }\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'de8f1d5d303f0540e22ebbecfb8d3d2f';

module.exports = node;
