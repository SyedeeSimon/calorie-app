// @flow

import graphql from 'babel-plugin-relay/macro';
import type {GraphQLTaggedNode} from "relay-runtime/query/GraphQLTag";

export const FoodEntriesQuery: GraphQLTaggedNode = graphql`
    query initialQuery_foodEntriesQuery(
        $limit: Int!,
        $cursor: String,
        $startDate: String!,
        $endDate: String!,
        $foodIds: [String!]!
    ) {
        ...initialQuery_foodEntriesConnectionFragment @arguments(
            first: $limit,
            after: $cursor,
            startDate: $startDate,
            endDate: $endDate,
            foodIds: $foodIds
        )
    }
`;

export const FoodEntriesConnectionFragment: GraphQLTaggedNode = graphql`
    fragment initialQuery_foodEntriesConnectionFragment on Query
    @refetchable(queryName: "initialQuery_foodEntriesConnection_paginationQuery")
    @argumentDefinitions(
        first: {type: "Int!"},
        after: {type: "String"},
        startDate: {type: "String"},
        endDate: {type: "String"},
        foodIds: {type: "[String!]!"}
    ) {
        foodEntries(
            first: $first,
            after: $after,
            filter: {
                startDate: $startDate,
                endDate: $endDate,
                foodIds: $foodIds
            }
        )@connection(key: "initialQuery_foodEntries") {
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
                }
            }
            __typename
        }
    }
`;
