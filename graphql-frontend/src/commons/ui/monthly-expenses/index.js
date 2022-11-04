// @flow

import React, {type Node} from "react";
import {type PreloadedQuery, usePaginationFragment, usePreloadedQuery} from "react-relay";

import MonthlyExpensesQuery, {type appQuery_monthlyExpensesQuery as appQuery_monthlyExpensesQueryType} from 'graphql-query/__generated__/appQuery_monthlyExpensesQuery.graphql';
import {type appQuery_dailyCaloriesConnection_paginationQuery as appQuery_dailyCaloriesConnection_paginationQueryType} from 'graphql-query/__generated__/appQuery_dailyCaloriesConnection_paginationQuery.graphql'
import MonthlyExpensesConnectionFragment
    from 'graphql-query/__generated__/appQuery_monthlyExpensesConnectionFragment.graphql';

import {type User} from 'commons/types';
import Alert from "@mui/material/Alert";
import Tooltip from "@mui/material/Tooltip";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningIcon from "@mui/icons-material/Warning";
import LoadMoreTable from "../load-more-table";
import {LoadNextSize} from 'commons/constants';

import {formatToMonthAndYear} from 'commons/utils';
import {BannerWrapper} from "./styled";

type Props = {
    currentUser: User,
    queryRef: PreloadedQuery<appQuery_monthlyExpensesQueryType>
};
const MonthlyExpenses = ({currentUser, queryRef}: Props): Node => {
    const response = usePreloadedQuery<appQuery_monthlyExpensesQueryType>(MonthlyExpensesQuery, queryRef);
    const {
        data,
        hasNext,
        loadNext
    } = usePaginationFragment<appQuery_dailyCaloriesConnection_paginationQueryType, _>(MonthlyExpensesConnectionFragment, response);

    const headers = ['Monthly', 'Expense', 'Note']
    const {monthlyExpenses} = data;
    const {edges} = monthlyExpenses;
    const {monthlyExpenseLimit} = currentUser;

    const currentNode = edges.length != 0 && new Date(edges[0].node.monthAndYear).getMonth() == new Date().getMonth() ? edges[0].node : null;

    const topBanner = currentNode === null ?
        <Alert severity="info">You have not made any entry this month.</Alert> :
        (currentNode.value <= monthlyExpenseLimit ?
                <Alert
                    severity="success">{`Well done, you've spent $ ${monthlyExpenseLimit - currentNode.value} less than the monthly limit.`}</Alert> :
                <Alert
                    severity="warning">{`Oops, you've spent $${currentNode.value - monthlyExpenseLimit} over the monthly limit.`}</Alert>
        );

    const toolTip = (expense: number) => (expense <= monthlyExpenseLimit ?
            <Tooltip arrow placement="top"
                     title={`Well done, you've spent $${monthlyExpenseLimit - expense} less than the monthly limit`}>
                <CheckCircleIcon color="success"/>
            </Tooltip> :
            <Tooltip arrow placement="top"
                     title={`Oops, you've spent $${expense - monthlyExpenseLimit} over the monthly limit`}>
                <WarningIcon color="warning"/>
            </Tooltip>
    );

    const rows = edges.map(edge => {
        return [
            formatToMonthAndYear(edge.node.monthAndYear),
            edge.node.value,
            toolTip(edge.node.value)
        ];
    });

    return <div>
        <BannerWrapper>
            {topBanner}
        </BannerWrapper>
        <LoadMoreTable
            header={headers}
            // $FlowFixMe
            rows={rows}
            hasMore={hasNext}
            onLoadMore={() => {
                loadNext(LoadNextSize);
            }}
        />
    </div>;
};

export default MonthlyExpenses;