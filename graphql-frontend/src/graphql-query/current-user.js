// @flow

import graphql from 'babel-plugin-relay/macro';
import type {GraphQLTaggedNode} from "relay-runtime/query/GraphQLTag";

export const CurrentUserQuery: GraphQLTaggedNode = graphql`
    query currentUserQuery {
        currentUser {
            id
            name
            dailyCalorieLimit
            monthlyExpenseLimit
            role
        }
    }
`;