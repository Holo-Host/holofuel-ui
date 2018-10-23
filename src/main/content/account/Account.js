import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import axios from 'axios/index';
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

// /fn/transaction/getLedgerState

class Account extends Component {

    state = {
        maxCreditLimit: '',
        maxTransactionAmount: '',
        maxTransactionFee: '',
        selfHash: '',
    };

    componentDidMount()
    {
        axios.get('http://localhost:3141/fn/transaction/getSystemInfo').then(res => {
            console.log(res.data);
            this.setState({
                maxCreditLimit: res.data.maxCreditLimit,
                maxTransactionAmount: res.data.maxTransactionAmount,
                maxTransactionFee: res.data.maxTransactionFee,
                selfHash: res.data.selfHash,
            });
        });
        ;
    }

    /*
    {info[0].map(infoItem => {
        return (
            <li>{infoItem}</li>
        );
    })}
    */

    render()
    {
        const {maxCreditLimit} = this.state;
        const {maxTransactionAmount} = this.state;
        const {maxTransactionFee} = this.state;
        const {selfHash} = this.state;
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
                    <div className="px-24"><h4>Account: {selfHash}</h4></div>
                }
                content={
                    <div className="p-24">
                        <h2 className="text-center">Account Info</h2>
                        <br/>
                        <Paper className={classes.root}>
                            <Table className={classes.table}>
                                <TableRow>
                                    <TableCell>maxCreditLimit</TableCell>
                                    <TableCell>{maxCreditLimit.display}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>maxTransactionAmount</TableCell>
                                    <TableCell>{maxTransactionAmount.display}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>maxTransactionFee</TableCell>
                                    <TableCell>{maxTransactionFee.display}</TableCell>
                                </TableRow>
                            </Table>
                        </Paper>
                    </div>
                }
            />
        )
    }
}

export default withStyles(styles, {withTheme: true})(Account);