// @flow
import {format} from "date-fns";

const LOCAL_DATE_TIME_PATTERN = "yyyy-MM-dd'T'HH:mm";
const LOCAL_DATE_PATTERN = "yyyy-MM-dd";

export const formatDateTimeISOToLocal = (isoDateStr: string): string => {
    return format(new Date(isoDateStr), LOCAL_DATE_TIME_PATTERN);
};

export const formatDateTimeLocalToISO = (localDateStr: string): string => {
    return new Date(localDateStr).toISOString();
};

export const parseDateTimeAsISO = (isoDateStr: string): string => {
    return new Date(isoDateStr).toISOString();
};

export const formatDateISOToLocal = (isoDateStr: string): string => {
    const localDateTime = new Date(isoDateStr);
    const localDateString = localDateTime.toDateString();
    return format(new Date(localDateString), LOCAL_DATE_PATTERN);
};

export const formatToMonthAndYear = (localDateString: string): string => {
    return format(new Date(localDateString), 'MMMM yyyy');
}
