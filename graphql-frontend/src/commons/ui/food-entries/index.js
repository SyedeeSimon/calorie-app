// @flow

import React, {type Node, useState, useEffect, useCallback} from "react";

import {useMutation, usePaginationFragment} from 'react-relay';

import LoadMoreTable from 'commons/ui/load-more-table';
import FormDialog from 'commons/ui/form-dialog';

import DateFilter from './date-filter';
import {InitialPageSize, LoadNextSize} from 'commons/constants';

import FoodEntriesConnectionFragment
    from 'graphql-query/__generated__/initialQuery_foodEntriesConnectionFragment.graphql';
import {type initialQuery_foodEntriesConnection_paginationQuery} from 'graphql-query/__generated__/initialQuery_foodEntriesConnection_paginationQuery.graphql';
import {type initialQuery_foodEntriesConnectionFragment$key} from 'graphql-query/__generated__/initialQuery_foodEntriesConnectionFragment.graphql'
import DeleteFoodEntryMutation, {type appMutations_deleteFoodEntryMutation as appMutations_deleteFoodEntryMutationType} from 'graphql-query/__generated__/appMutations_deleteFoodEntryMutation.graphql'

import {formatDateTimeISOToLocal, parseDateTimeAsISO} from "commons/utils";
import {type User} from "commons/types";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import {DateAndCreateWrapper} from "./styled";


const edgeToTableRow = (edge: any, includeActions: boolean) => {
    const rowData = {
        id: edge.node.id,
        foodName: edge?.node.foodName,
        calories: edge?.node.calories,
        price: edge?.node.price,
        createdAt: edge?.node.createdAt,
    };
    const cells = [rowData.id, rowData.foodName, rowData.calories, rowData.price, formatDateTimeISOToLocal(rowData.createdAt)];
    if (includeActions) {

    }
    return cells;
};

type FoodEntriesProps = {
    currentUser: User,
    initialSearchStartDateISO: string,
    initialSearchEndDateISO: string,
    queryRef: initialQuery_foodEntriesConnectionFragment$key,
}
const FoodEntries = (
    {
        currentUser,
        initialSearchStartDateISO,
        initialSearchEndDateISO,
        queryRef
    }: FoodEntriesProps): Node => {

    const [searchStartDateISO, setSearchStartDateISO] = useState(initialSearchStartDateISO);
    const [searchEndDateISO, setSearchEndDateISO] = useState(initialSearchEndDateISO);
    const {
        data,
        hasNext,
        loadNext,
        refetch
    } = usePaginationFragment<initialQuery_foodEntriesConnection_paginationQuery, _>(FoodEntriesConnectionFragment, queryRef);

    const [commitDeleteMutation, _] = useMutation<appMutations_deleteFoodEntryMutationType>(DeleteFoodEntryMutation);

    useEffect(() => {
        refetch({
            first: InitialPageSize,
            startDate: searchStartDateISO,
            endDate: searchEndDateISO,
            foodIds: []
        }, {fetchPolicy: 'store-or-network'});
    }, [searchStartDateISO, searchEndDateISO]);

    const refresh = useCallback(() => {
        refetch(
            {
                first: InitialPageSize,
                startDate: searchStartDateISO,
                endDate: searchEndDateISO,
                foodIds: []
            },
            {fetchPolicy: 'network-only'}
        );
    }, [searchStartDateISO, searchEndDateISO, refetch]);

    const {foodEntries} = data;
    const HEADERS = ['Food Name', 'Calories', 'Price', 'Created at'];
    if (currentUser.role == 'ADMIN') {
        HEADERS.push('Created By', '', '');
    }
    const rows = foodEntries?.edges?.map(edge => {

        const cells = [
            edge?.node.foodName,
            edge?.node.calories,
            edge?.node.price,
            // $FlowFixMe
            formatDateTimeISOToLocal(edge?.node.createdAt),
        ];
        if (currentUser.role == 'ADMIN') {
            cells.push(
                // $FlowFixMe
                edge?.node.owner.name,
                <IconButton onClick={() => {
                    commitDeleteMutation({
                        variables: {
                            // $FlowFixMe
                            id: edge.node.id,
                        },
                        onCompleted: refresh,
                    });
                }}>
                    <DeleteIcon/>
                </IconButton>,
                <FormDialog
                    refetch={refresh}
                    formMode='update'
                    initialData={{
                        // $FlowFixMe
                        id: edge?.node.id,
                        foodName: edge?.node.foodName,
                        calories: edge?.node.calories,
                        // $FlowFixMe
                        price: edge?.node.price,
                        // $FlowFixMe
                        createdAt: parseDateTimeAsISO(edge?.node.createdAt),
                    }}
                />
            );
        }
        return cells;
    });

    return <div>


        <DateAndCreateWrapper>
            <DateFilter
                defaultStartDateISO={searchStartDateISO}
                onChangeStartDate={(date: string) => (setSearchStartDateISO(date))}
                defaultEndDateISO={searchEndDateISO}
                onChangeEndDate={(date: string) => (setSearchEndDateISO(date))}
            />
            <FormDialog refetch={() => {
                refetch({
                    first: 3,
                    startDate: searchStartDateISO,
                    endDate: searchEndDateISO,
                    foodIds: []
                }, {fetchPolicy: 'network-only'});
            }} formMode='create' initialData={{}}/>
        </DateAndCreateWrapper>


        <LoadMoreTable
            header={HEADERS}
            // $FlowFixMe
            rows={rows}
            hasMore={hasNext}
            onLoadMore={() => {
                loadNext(LoadNextSize);
            }}
        />
    </div>;
}

export default FoodEntries;