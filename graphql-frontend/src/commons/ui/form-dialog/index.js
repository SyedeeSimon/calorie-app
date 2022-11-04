// @flow

import React, {useState, type Node} from "react";

import {useMutation} from 'react-relay';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';


import SaveFoodEntryMutation, {type appMutations_saveFoodEntryMutation} from 'graphql-query/__generated__/appMutations_saveFoodEntryMutation.graphql'
import {formatDateTimeISOToLocal} from "../../utils";
import {FormInputs} from "./styled";

const isEmpty = (value: string | number | void): boolean => {
    if (!value) return true;
    if ('string' != typeof value) return false;
    return value.length == 0;
};


export type FormMode = 'create' | 'update';

export type FormData = {
    id?: number,
    foodName?: string,
    calories?: number,
    createdAt?: string,
    price?: number,
    ...
}

export type Props = {
    formMode: FormMode,
    initialData: FormData,
    refetch: () => void
}

const FormDialog = ({formMode, initialData, refetch}: Props): Node => {

    const [commitMutation, isMutationInFlight] = useMutation<appMutations_saveFoodEntryMutation>(SaveFoodEntryMutation);

    const [formData, setFormData] = useState(initialData);
    const [formChanged, setFormChanged] = useState(false);
    const [open, setOpen] = useState(false);

    const foodNameValid = !isEmpty(formData.foodName);
    const caloriesValid = !isEmpty(formData.calories);
    const createdAtValid = !isEmpty(formData.createdAt);

    const formValid = formChanged && (foodNameValid && caloriesValid && createdAtValid);

    const titleText = formMode === 'create' ? 'Create a new food entry' : 'Update this existing entry';
    const contextText = formMode === 'create' ? 'You need to fill in all the required fields. Only price is an optional field.'
        : 'You can edit all the fields except Food Name.';

    const handleClickOpen = () => {
        setOpen(true);
        setFormData(initialData);
        setFormChanged(false);
    };

    const openButton = formMode == 'create' ? (<Button variant="contained" onClick={handleClickOpen}>Create</Button>) :
        (<IconButton onClick={handleClickOpen}><EditIcon/></IconButton>);

    const handleClickCancel = () => {
        setOpen(false);
        setFormData(initialData);
        setFormChanged(false);
    };

    const handleClickSave = () => {
        commitMutation({
            variables: {
                // $FlowFixMe
                param: formData,
            },
            onCompleted: refetch,
        });
        setOpen(false);
        setFormData(initialData);
        setFormChanged(false);
    };

    return (
        <div>
            {openButton}
            <Dialog open={open} onClose={handleClickSave}>
                <DialogTitle>{titleText}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{contextText}</DialogContentText>
                    <FormInputs>
                        <FormControl>
                            <TextField
                                id="food-entry-food-name"
                                label="Food name"
                                defaultValue={formData.foodName}
                                helperText="What did you eat, e.g. Banana."
                                variant="outlined"
                                size="small"
                                required
                                onChange={(event: any) => {
                                    setFormData((prevData) => ({
                                        ...prevData,
                                        foodName: event.target.value

                                    }));
                                    setFormChanged(true);
                                }}
                            >
                                {formData.foodName}
                            </TextField>
                        </FormControl>
                        <FormControl>
                            <TextField
                                id="food-entry-calorie"
                                label="Calories"
                                defaultValue={formData.calories}
                                helperText="Calories per serving."
                                variant="outlined"
                                type="number"
                                size="small"
                                required
                                onChange={(event: any) => {
                                    setFormData((prevData) => ({
                                        ...prevData,
                                        calories: parseInt(event.target.value | 0),
                                    }));
                                    setFormChanged(true);
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                                id="food-entry-calorie"
                                label="Price"
                                defaultValue={formData.price}
                                helperText="Price per serving."
                                variant="outlined"
                                type="number"
                                size="small"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                onChange={(event: any) => {
                                    console.log('event.target.value', parseFloat(parseFloat(event.target.value)));
                                    setFormData((prevData) => ({
                                        ...prevData,
                                        price: parseFloat(event.target.value),
                                    }));
                                    setFormChanged(true);
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                                id="food-entry-created-at"
                                defaultValue={formData.createdAt ? formatDateTimeISOToLocal(formData.createdAt) : ''}
                                helperText="When was the food taken?"
                                variant="outlined"
                                type="datetime-local"
                                required
                                size="small"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">
                                        <AccessTimeIcon/>
                                    </InputAdornment>,
                                }}
                                onChange={(event: any) => {
                                    setFormData((prevData) => ({
                                        ...prevData,
                                        createdAt: new Date(event.target.value).toISOString(),
                                    }));
                                    setFormChanged(true);
                                }}
                            />
                        </FormControl>
                    </FormInputs>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickCancel} size="small">Cancel</Button>
                    <Button onClick={handleClickSave} disabled={!formValid} size="small">Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default FormDialog;