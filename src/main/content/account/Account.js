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
function createData(name, a, b, c) {
  id += 1;
  return { id, name, a, b, c };
}
const some = "1.000000";
const none = "0.000000";
const na = "N/A";
const rows = [
    createData('Balance', none, na, none),
    createData('Credit', some, na, some),
    createData('Spendable', some, na, some),
    createData('Fees', none, na, none),
];


class Intro extends Component {

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
                    <div className="px-24"><h4>Account</h4></div>
                }
                content={
                    <div className="p-24">
                        <p>
                            Account: Qmc7GEPmhWZJuFuDGDbx8rq1P3h7EqUZB23H2zsBJ9XtXH
                        </p>
                        <br/>
                        <h2 className="text-center">Balances (Net of Limits)</h2>
                        <br/>

                        <Paper className={classes.root}>
                            <Table className={classes.table}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell numeric className="text-right font-bold">Assets</TableCell>
                                        <TableCell numeric>Current</TableCell>
                                        <TableCell numeric>Limits</TableCell>
                                        <TableCell numeric>Available</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map(row => {
                                        return (
                                            <TableRow key={row.id}>
                                                <TableCell component="th" scope="row" className="text-right">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell numeric className="text-right">{row.a}</TableCell>
                                                <TableCell numeric className="text-right">{row.b}</TableCell>
                                                <TableCell numeric className="text-right">{row.c}</TableCell>
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

export default withStyles(styles, {withTheme: true})(Intro);