// @flow

import React, {type Node} from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Button from '@mui/material/Button';


export type Props = {
    header: Array<string>,
    rows: Array<Array<any>>,
    hasMore: boolean,
    onLoadMore: (event: any) => void
};

const LoadMoreTable = ({header, rows, hasMore, onLoadMore}: Props): any => {
    return (<div>
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {header.map((cell, index) =>
                            (index ? <TableCell key={index} align="right"><b>{cell}</b></TableCell> :
                                <TableCell key={index}><b>{cell}</b></TableCell>)
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            {row.map((cell, index) => (
                                index ? <TableCell key={index} align="right">{cell}</TableCell> :
                                    <TableCell key={index} component="th" scope="row">
                                        {cell}
                                    </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <div>
            {hasMore && <Button onClick={onLoadMore} variant="text">See more</Button>}
        </div>
    </div>);
}

export default LoadMoreTable;