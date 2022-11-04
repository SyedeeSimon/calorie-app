// @flow

import React, {Suspense, useCallback, useReducer, useState, type Node} from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export const DeleteAction = (): Node => {
    return <div>

    </div>;
};

export const UpdateAction = (): Node => {
    return <div>
        <IconButton>
            <DeleteIcon/>
        </IconButton>
    </div>;
};