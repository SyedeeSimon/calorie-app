// @flow

import React, {useState} from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {type User} from 'commons/types'
import FoodEntries from 'commons/ui/food-entries';

import FoodEntriesQuery, {type initialQuery_foodEntriesQuery as initialQuery_foodEntriesQueryType} from 'graphql-query/__generated__/initialQuery_foodEntriesQuery.graphql'
import {
    usePreloadedQuery,
    type PreloadedQuery
} from 'react-relay';
import {TabContent} from "../user-page/styled";


export type AminPageProps = {
    searchStartDateISO: string,
    searchEndDateISO: string,
    currentUser: User,
    queryRef: PreloadedQuery<initialQuery_foodEntriesQueryType>,
}

const AdminPage = ({searchStartDateISO, searchEndDateISO, queryRef, currentUser}: AminPageProps): any => {
    const foodEntriesResp = usePreloadedQuery<initialQuery_foodEntriesQueryType>(FoodEntriesQuery,
        queryRef
    );

    const [currentTab, setCurrentTab] = useState(0);
    const onTabChangeHandler = (event: any, value: number) => {
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
            {/*{currentTab == 1 && <DailyCalorieUsage/>}*/}
            {/*{currentTab == 2 && <MonthlyExpense/>}*/}
        </TabContent>

    </div>
}

export default AdminPage;