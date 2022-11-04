// @flow

import React, {type Node} from "react";
import TextField from "@mui/material/TextField";
import {formatDateISOToLocal, formatDateTimeLocalToISO} from "commons/utils";
import {DateFilterWrapper} from "./styled";

export type DateFilterProps = {
    defaultStartDateISO: string,
    defaultEndDateISO: string,
    onChangeStartDate: (date: string) => void,
    onChangeEndDate: (date: string) => void,
}

const DateFilter = ({
                        defaultStartDateISO,
                        defaultEndDateISO,
                        onChangeStartDate,
                        onChangeEndDate
                    }: DateFilterProps): Node => {

    console.log('formatDateISOToLocal', formatDateISOToLocal(defaultStartDateISO));

    return <DateFilterWrapper>
        <TextField
            id="food-entries-search-end-date"
            defaultValue={formatDateISOToLocal(defaultEndDateISO)}
            helperText="Start Date"
            variant="outlined"
            type="date"
            size="small"
            onChange={(event: any) => {
                onChangeEndDate(formatDateTimeLocalToISO(event.target.value));
            }}
        />
        <div>~</div>
        <TextField
            id="food-entries-search-start-date"
            defaultValue={formatDateISOToLocal(defaultStartDateISO)}
            helperText="End Date"
            variant="outlined"
            type="date"
            size="small"
            onChange={(event: any) => {
                onChangeStartDate(formatDateTimeLocalToISO(event.target.value));
            }}
        />
    </DateFilterWrapper>;
}

export default DateFilter;