import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
}));

export default function SimpleTable(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        {props.columns.map(e=> <TableCell key={e.key}>{e.title}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.dataSource.map(e=> (
                            <TableRow key={e.key}>
                                {
                                    Object.keys(e).filter(k=> k!= 'key').map((e2,i) => <TableCell key={i}>{e[e2]}</TableCell>)
                                }
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </Paper>
    );
}
