// @flow

import React, {Suspense, type Node} from "react";

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import UserPage from './user-page'
import AdminPage from './admin-page'

import {InitialPageSize} from 'commons/constants';

import './App.css';

import {
    RelayEnvironmentProvider,
    loadQuery,
    usePreloadedQuery,
} from 'react-relay';

import RelayEnvironment from 'relay-environment/RelayEnvironment';

import Scaffolding from "app-scaffolding/index";

import CurrentUserQuery, {type currentUserQuery as currentUserQueryType} from 'graphql-query/__generated__/currentUserQuery.graphql';
import FoodEntriesQuery, {type initialQuery_foodEntriesQuery as initialQuery_foodEntriesQueryType} from 'graphql-query/__generated__/initialQuery_foodEntriesQuery.graphql'
import {formatDateTimeLocalToISO} from "./commons/utils";

const preloadedCurrentUserQueryRef = loadQuery<currentUserQueryType, void>(RelayEnvironment, CurrentUserQuery, {}, null, null);

const InitialStartDate = new Date();
const InitialEndDate = new Date();
InitialEndDate.setDate(InitialStartDate.getDate() - 14);

const preloadedFoodEntriesQueryRef = loadQuery<initialQuery_foodEntriesQueryType, void>(RelayEnvironment, FoodEntriesQuery, {
    limit: InitialPageSize,
    startDate: InitialStartDate.toISOString(),
    endDate: InitialEndDate.toISOString(),
    foodIds: []
}, null, null);

const App = () => {
    const {currentUser} = usePreloadedQuery<currentUserQueryType>(CurrentUserQuery,
        preloadedCurrentUserQueryRef
    );

    return (
        <Scaffolding pageTitle='The Calorie App'>
            {
                currentUser?.role === 'ADMIN' &&
                <AdminPage
                    searchStartDateISO={formatDateTimeLocalToISO(InitialStartDate.toString())}
                    searchEndDateISO={formatDateTimeLocalToISO(InitialEndDate.toString())}
                    // $FlowFixMe
                    currentUser={currentUser}
                    queryRef={preloadedFoodEntriesQueryRef}/>
            }
            {
                currentUser?.role === 'USER' &&
                <UserPage
                    searchStartDateISO={formatDateTimeLocalToISO(InitialStartDate.toString())}
                    searchEndDateISO={formatDateTimeLocalToISO(InitialEndDate.toString())}
                    // $FlowFixMe
                    currentUser={currentUser}
                    queryRef={preloadedFoodEntriesQueryRef}/>
            }
        </Scaffolding>
    );
}

const AppRoot = (): Node => {

    return <RelayEnvironmentProvider environment={RelayEnvironment}>
        <Suspense fallback={
            <Backdrop sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                      open={open}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
        }>
            <App/>
        </Suspense>
    </RelayEnvironmentProvider>;
};

export default AppRoot;