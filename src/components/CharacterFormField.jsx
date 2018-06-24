import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    cardContent: {
        display: 'flex',
        flexDirection: 'column'
    },
    textField: {
        width: 200,
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    }
});

class CharacterFormField extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            hp: '',
            str: '',
            int: '',
            dex: '',
            exp: '',
            gold: ''
        };
    }

    handleChange = (event) => {
        const id = event.target.id;
        const value = event.target.value;
        this.props.onUpdate(this.props.charId, { [id]: value });
        this.setState({
            [id]: value
        });
    }

    render() {
        const { classes } = this.props;
        const { name, hp, str, dex, int, exp, gold } = this.state;
        return (
            <CardContent className={classes.cardContent}>
                <Typography variant="title">
                    {this.props.charName}
                </Typography>
                <Grid container>
                    <TextField
                        id="name"
                        label="Name"
                        className={classes.textField}
                        value={name}
                        onChange={this.handleChange}
                    />
                    <TextField
                        id="hp"
                        label="Max HP"
                        type="number"
                        className={classes.textField}
                        value={hp}
                        onChange={this.handleChange}
                    />
                    <TextField
                        id="str"
                        label="STR"
                        type="number"
                        className={classes.textField}
                        value={str}
                        onChange={this.handleChange}
                    />
                    <TextField
                        id="int"
                        label="INT"
                        type="number"
                        className={classes.textField}
                        value={int}
                        onChange={this.handleChange}
                    />
                    <TextField
                        id="dex"
                        label="DEX"
                        type="number"
                        className={classes.textField}
                        value={dex}
                        onChange={this.handleChange}
                    />
                    <TextField
                        id="exp"
                        label="EXP"
                        type="number"
                        className={classes.textField}
                        value={exp}
                        onChange={this.handleChange}
                    />
                    <TextField
                        id="gold"
                        label="GOLD"
                        type="number"
                        className={classes.textField}
                        value={gold}
                        onChange={this.handleChange}
                    />
                </Grid>
            </CardContent>
        );
    }
}

export default withStyles(styles)(CharacterFormField);
