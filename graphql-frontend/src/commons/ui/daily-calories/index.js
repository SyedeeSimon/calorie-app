// @flow

import React, {type Node} from "react";
import {type PreloadedQuery, usePaginationFragment, usePreloadedQuery} from "react-relay";

import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Tooltip from '@mui/material/Tooltip';
import Alert from '@mui/material/Alert';

import LoadMoreTable from "commons/ui/load-more-table";
import {type User} from 'commons/types'

import DailyCaloriesQuery, {type appQuery_DailyCaloriesQuery as appQuery_DailyCaloriesQueryType} from 'graphql-query/__generated__/appQuery_DailyCaloriesQuery.graphql';
import DailyCaloriesConnectionFragment
    from "graphql-query/__generated__/appQuery_dailyCaloriesConnectionFragment.graphql";

import {type appQuery_dailyCaloriesConnection_paginationQuery as appQuery_dailyCaloriesConnection_paginationQueryType} from 'graphql-query/__generated__/appQuery_dailyCaloriesConnection_paginationQuery.graphql'
import {BannerWrapper} from "./styled";

import {LoadNextSize} from 'commons/constants';

type Props = {
    currentUser: User,
    queryRef: PreloadedQuery<appQuery_DailyCaloriesQueryType>
};
const DailyCalories = ({currentUser, queryRef}: Props): Node => {
    const response = usePreloadedQuery<appQuery_DailyCaloriesQueryType>(DailyCaloriesQuery, queryRef);
    const {
        data,
        hasNext,
        loadNext
    } = usePaginationFragment<appQuery_dailyCaloriesConnection_paginationQueryType, _>(DailyCaloriesConnectionFragment, response);
    const headers = ['Date', 'Calories taken', 'Note']
    const {dailyCalories} = data;
    const {edges} = dailyCalories;
    const {dailyCalorieLimit} = currentUser;

    const currentNode = edges.length != 0 && new Date(edges[0].node.date).toLocaleDateString() == new Date().toLocaleDateString() ? edges[0].node : null;

    const topBanner = currentNode === null ?
        <Alert severity="info">You have not made any entry today.</Alert> :
        (currentNode.value <= dailyCalorieLimit ?
                <Alert
                    severity="success">{`Well done, you've consumed ${dailyCalorieLimit - currentNode.value} calories less than the limit today.`}</Alert> :
                <Alert
                    severity="warning">{`Oops, you've consumed ${currentNode.value - dailyCalorieLimit} calories over the limit today.`}</Alert>
        );

    const toolTip = (calories: number) => (calories <= dailyCalorieLimit ?
            <Tooltip arrow placement="top"
                     title={`Well done, you've consumed ${dailyCalorieLimit - calories} calories less than the limit`}>
                <CheckCircleIcon color="success"/>
            </Tooltip> :
            <Tooltip arrow placement="top"
                     title={`Oops, you've consumed ${calories - dailyCalorieLimit} calories over the limit`}>
                <WarningIcon color="warning"/>
            </Tooltip>
    );

    const rows = edges.map(edge => {
        return [
            new Date(edge.node.date).toDateString(),
            edge.node.value,
            toolTip(edge.node.value)
        ]
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
}
export default DailyCalories;