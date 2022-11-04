// @flow

import graphql from 'babel-plugin-relay/macro';
import type {GraphQLTaggedNode} from "relay-runtime/query/GraphQLTag";

export const DailyCaloriesQuery: GraphQLTaggedNode = graphql`
    query appQuery_DailyCaloriesQuery($limit: Int!, $cursor: String) {
        ...appQuery_dailyCaloriesConnectionFragment @arguments(
            first: $limit,
            after: $cursor,
        )
    }
`;

export const DailyCaloriesConnectionFragment: GraphQLTaggedNode = graphql`
    fragment appQuery_dailyCaloriesConnectionFragment on Query
    @refetchable(queryName: "appQuery_dailyCaloriesConnection_paginationQuery")
    @argumentDefinitions(
        first: {type: "Int!"},
        after: {type: "String"}
    ) {
        dailyCalories(
            first: $first,
            after: $after
        ) @connection(key: "appQuery_dailyCalories") {
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
                    date
                }
            }
        }
    }
`;

export const MonthlyExpensesQuery: GraphQLTaggedNode = graphql`
    query appQuery_monthlyExpensesQuery($limit: Int!, $cursor: String) {
        ...appQuery_monthlyExpensesConnectionFragment @arguments(
            first: $limit,
            after: $cursor,
        )
    }
`;

export const MonthlyExpensesConnectionFragment: GraphQLTaggedNode = graphql`
    fragment appQuery_monthlyExpensesConnectionFragment on Query
    @refetchable(queryName: "appQuery_monthlyExpensesConnection_paginationQuery")
    @argumentDefinitions(
        first: {type: "Int!"},
        after: {type: "String"}
    ) {
        monthlyExpenses(
            first: $first,
            after: $after
        ) @connection(key: "appQuery_monthlyExpenses") {
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
                }
            }
        }
    }
`;