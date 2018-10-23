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

import {Button} from '@material-ui/core';
import {TextFieldFormsy} from '@fuse';
import Formsy from 'formsy-react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


const styles = theme => ({
    layoutRoot: {}
});

let id = 0;
function createData(a, b, c, d) {
  id += 1;
  return { id, a, b, c, d };
}

class Transactions extends Component {

    state = {
        canSubmit: false,
        commandResult: 'Send Result',
        sendAmount: '',
        rows: []
    };

    disableButton = () => {
        this.setState({canSubmit: false});
    };

    enableButton = () => {
        this.setState({canSubmit: true});
    };

    onSubmit = (model) => {
        console.info('submit', model);

        var date = new Date();
        var newdate= (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
        const newRow = createData(newdate, model.sendAmount, model.to, model.note);
        const newRows = this.state.rows.slice();
        newRows.push(newRow);
        this.setState({
            rows: newRows
        });

        axios.get('/api/send/' + model.to).then(res => {
            this.setState({
                    commandResult: "You sent " + model.sendAmount + " to " + model.to
            });
        });
        ;
    };

    render()
    {
        const {canSubmit} = this.state;
        const {commandResult} = this.state;
        const {rows} = this.state;

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
                                    {rows.map((row, index) => {
                                        return (
                                            <TableRow key={index}>
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

                        <br/>
                        <br/>
                        <div>
                            <Formsy
                                onValidSubmit={this.onSubmit}
                                onValid={this.enableButton}
                                onInvalid={this.disableButton}
                                ref={(form) => this.form = form}
                            >
                                <div>
                                    <span>To:</span>
                                    <TextFieldFormsy
                                        className="mb-24"
                                        type="text"
                                        name="to"
                                        label="Hash"
                                        required
                                    />
                                </div>
                                <div>
                                    <TextFieldFormsy
                                        className="mb-24"
                                        type="text"
                                        name="sendAmount"
                                        label="0.00"
                                        required
                                    />
                                </div>
                                <div>
                                    <TextFieldFormsy
                                        className="mb-24"
                                        type="text"
                                        name="note"
                                        label="Note"
                                    />
                                </div>

                                <Chip
                                    avatar={
                                        <Avatar>
                                            <NavigateNextIcon />
                                        </Avatar>
                                    }
                                    label={commandResult}
                                    className={classes.chip}
                                    color="secondary"
                                    variant="outlined"
                                />
                                <br/>

                                <Button
                                    type="submit"
                                    variant="raised"
                                    color="primary"
                                    className="mx-auto mt-16"
                                    aria-label="command"
                                    disabled={!canSubmit}
                                >
                                    Can submit
                                </Button>
                            </Formsy>

                        </div>

                    </div>

                }
            />
        )
    }
}

export default withStyles(styles, {withTheme: true})(Transactions);