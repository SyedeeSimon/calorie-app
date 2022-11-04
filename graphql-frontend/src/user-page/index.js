// @flow

import React, {useState} from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {type User} from 'commons/types'
import FoodEntries from 'commons/ui/food-entries';
import DailyCalories from 'commons/ui/daily-calories';
import MonthlyExpenses from 'commons/ui/monthly-expenses'
import {
    usePreloadedQuery,
    type PreloadedQuery, useQueryLoader
} from 'react-relay';

import {InitialPageSize} from 'commons/constants';

import FoodEntriesQuery, {type initialQuery_foodEntriesQuery as initialQuery_foodEntriesQueryType} from 'graphql-query/__generated__/initialQuery_foodEntriesQuery.graphql'
import DailyCaloriesQuery, {type appQuery_DailyCaloriesQuery as appQuery_DailyCaloriesQueryType} from 'graphql-query/__generated__/appQuery_DailyCaloriesQuery.graphql';
import MonthlyExpensesQuery, {type appQuery_monthlyExpensesQuery as appQuery_monthlyExpensesQueryType} from 'graphql-query/__generated__/appQuery_monthlyExpensesQuery.graphql';
import {TabContent} from "./styled";

export type UserPageProps = {
    searchStartDateISO: string,
    searchEndDateISO: string,
    currentUser: User,
    queryRef: PreloadedQuery<initialQuery_foodEntriesQueryType>,
}
const UserPage = ({searchStartDateISO, searchEndDateISO, queryRef, currentUser}: UserPageProps): any => {
    const foodEntriesResp = usePreloadedQuery<initialQuery_foodEntriesQueryType>(FoodEntriesQuery,
        queryRef
    );
    const [dailyCaloriesQueryReference, loadDailyCaloriesQuery] = useQueryLoader<appQuery_DailyCaloriesQueryType>(DailyCaloriesQuery);

    const [monthlyExpensesQueryReference, loadMonthlyExpensesQuery] = useQueryLoader<appQuery_monthlyExpensesQueryType>(MonthlyExpensesQuery);

    const [currentTab, setCurrentTab] = useState(0);
    const onTabChangeHandler = (event: any, value: number) => {
        if (value === 1) {
            loadDailyCaloriesQuery({
                limit: InitialPageSize
            })
        } else if (value == 2) {
            loadMonthlyExpensesQuery({
                limit: InitialPageSize
            });
        }
        setCurrentTab(value);
    }
    return <div>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
            <Tabs value={currentTab} onChange={onTabChangeHandler} aria-label="basic tabs example">
                <Tab label="Food Entries"/>
                <Tab label="Calories' Limit"/>
                <Tab label="Monthly Expense Limit"/>
            </Tabs>
        </Box>
        <TabContent>
            {
                currentTab == 0 &&
                <FoodEntries
                    currentUser={currentUser}
                    initialSearchStartDateISO={searchStartDateISO}
                    initialSearchEndDateISO={searchEndDateISO}
                    queryRef={foodEntriesResp}
                />
            }
            {
                currentTab == 1 && dailyCaloriesQueryReference &&
                <DailyCalories
                    currentUser={currentUser}
                    queryRef={dailyCaloriesQueryReference}
                />
            }
            {
                currentTab == 2 && monthlyExpensesQueryReference &&
                <MonthlyExpenses
                    currentUser={currentUser}
                    queryRef={monthlyExpensesQueryReference}
                />
            }
        </TabContent>
    </div>
}

export default UserPage;