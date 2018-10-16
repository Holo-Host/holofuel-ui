import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import axios from 'axios/index';
import {FusePageSimple} from '@fuse';

import {Button, Typography} from '@material-ui/core';
import {TextFieldFormsy} from '@fuse';
import Formsy from 'formsy-react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const styles = theme => ({
    layoutRoot: {}
});

export function command(command)
{
    console.log(command);
    axios.get('/api/send/' + command.command).then(res => {
        console.log(res.data);
        this.setState({commandResult: res.data});
    });

    //const request = axios.post('/api/send/command', command);
    return true;
}

class Send extends Component {

    state = {
        canSubmit: false,
        data      : [],
        commandResult: 'Send Result'
    };

    componentDidMount()
    {
        axios.get('/api/send').then(res => {
            this.setState({data: res.data});
        });
    }

    disableButton = () => {
        this.setState({canSubmit: false});
    };

    enableButton = () => {
        this.setState({canSubmit: true});
    };

    onSubmit = (model) => {
        console.info('submit', model);
        axios.get('/api/send/' + model.to).then(res => {
            console.log(res.data);
            this.setState({commandResult: res.data});
        });
        //let delay = (time) => (result) => new Promise(resolve => setTimeout(() => resolve(result), time));
        /*
        axios.post('/api/send/success').then(res => {
            console.log(res.data);
            this.setState({commandResult: res.data});
        })
        */
//        .then(delay(3000))
/*
        .then(res => {
            axios.get('/api/send/' + model.to).then(res => {
                console.log(res.data);
                this.setState({commandResult: res.data});
            });
        })
        */
        ;
    };

    render()
    {
        const {data} = this.state;
        const {canSubmit} = this.state;
        const {commandResult} = this.state;
        const {classes} = this.props;

        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <div className="p-24">
                        <Typography variant="display1">Holo</Typography>
                    </div>
                }
                contentToolbar={
                    <div className="px-24">
                        <Typography variant="display1">Send HoloFuel</Typography>
                    </div>
                }
                content={
                    <div className="p-24">
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
                                        name="amount"
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

export default withStyles(styles, {withTheme: true})(Send);