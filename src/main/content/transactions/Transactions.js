import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {FusePageSimple} from '@fuse';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
    layoutRoot: {}
});

let id = 0;
function createData(a, b, c, d) {
  id += 1;
  return { id, a, b, c, d };
}
const time = "01/01/2019";
const amount = "$100";
const from = "Account A";
const to = "Account B";
const note = "note";
const rows = [
    createData(time, amount, from, note),
    createData(time, amount, to, note),
    createData(time, amount, from, note),
    createData(time, amount, to, note),
];


class Transactions extends Component {

    render()
    {
        const {classes} = this.props;

        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <div className="p-24"><h4>Holo</h4></div>
                }
                contentToolbar={
                    <div className="px-24"><h4>Transactions</h4></div>
                }
                content={
                    <div className="p-24">
                        <p>
                            Account: Qmc7GEPmhWZJuFuDGDbx8rq1P3h7EqUZB23H2zsBJ9XtXH
                        </p>
                        <br/>
                        <h2 className="text-center">Transactions</h2>
                        <br/>

                        <Paper className={classes.root}>
                            <Table className={classes.table}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell className="font-bold">Time</TableCell>
                                        <TableCell className="font-bold">Amount</TableCell>
                                        <TableCell className="font-bold">From/To</TableCell>
                                        <TableCell className="font-bold">Notes</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map(row => {
                                        return (
                                            <TableRow key={row.id}>
                                                <TableCell>{row.a}</TableCell>
                                                <TableCell>{row.b}</TableCell>
                                                <TableCell>{row.c}</TableCell>
                                                <TableCell>{row.d}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </Paper>

                    </div>
                }
            />
        )
    }
}

export default withStyles(styles, {withTheme: true})(Transactions);