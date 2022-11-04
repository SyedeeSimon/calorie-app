// @flow

import graphql from 'babel-plugin-relay/macro';
import type {GraphQLTaggedNode} from "relay-runtime/query/GraphQLTag";

export const SaveFoodEntryMutation: GraphQLTaggedNode = graphql`
    mutation appMutations_saveFoodEntryMutation($param: SaveFoodEntryInput) {
        saveFoodEntry(foodEntry: $param) {
            foodName
            calories
            price
            createdAt
            owner {
                id
                name
            }
        }
    }
`;


export const DeleteFoodEntryMutation: GraphQLTaggedNode = graphql`
    mutation appMutations_deleteFoodEntryMutation($id: ID!) {
        deleteFoodEntry(id: $id)
    }
`;