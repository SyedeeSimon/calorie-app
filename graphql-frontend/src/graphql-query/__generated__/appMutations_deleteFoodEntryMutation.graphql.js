/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type appMutations_deleteFoodEntryMutationVariables = {|
  id: string
|};
export type appMutations_deleteFoodEntryMutationResponse = {|
  +deleteFoodEntry: boolean
|};
export type appMutations_deleteFoodEntryMutation = {|
  variables: appMutations_deleteFoodEntryMutationVariables,
  response: appMutations_deleteFoodEntryMutationResponse,
|};
*/


/*
mutation appMutations_deleteFoodEntryMutation(
  $id: ID!
) {
  deleteFoodEntry(id: $id)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "kind": "ScalarField",
    "name": "deleteFoodEntry",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "appMutations_deleteFoodEntryMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "appMutations_deleteFoodEntryMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "60a751e157af0b28acc388e7e8e9d466",
    "id": null,
    "metadata": {},
    "name": "appMutations_deleteFoodEntryMutation",
    "operationKind": "mutation",
    "text": "mutation appMutations_deleteFoodEntryMutation(\n  $id: ID!\n) {\n  deleteFoodEntry(id: $id)\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e044161a5106843a2d15a459c7909a32';

module.exports = node;
