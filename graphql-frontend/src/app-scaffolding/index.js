import React, {ReactNode} from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import Wrapper, {Header, Body} from "app-scaffolding/styled";
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export type Props = {
    pageTitle: string,
    children: ReactNode
};

export default ({pageTitle, children}: Props) => {
    return (
        <Wrapper>
            <Header>
                <Typography variant="h2" component="div">
                    {pageTitle}
                </Typography>
            </Header>
            <Divider/>
            <Body>
                {children}
            </Body>
        </Wrapper>
    );
}