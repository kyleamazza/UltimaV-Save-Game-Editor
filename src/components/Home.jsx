import React from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import CharacterFormField from './CharacterFormField';
import ItemCheckboxes from './ItemCheckboxes';

import downloadHackedBinary from '../hackTheSystem';

import pixelCastleImg from '../images/pixelcastle.png';
import pixelwall from '../images/pixelwall.png';

const styles = theme => ({
    root: {
        width: '100%',
        margin: '0 auto',
        padding: `50px 0 ${(theme.spacing.unit * 15) + 50}px 0`,
        fontFamily: 'Roboto sans-serif'
    },
    formContainer: {
        borderWidth: 15,
        borderStyle: 'solid',
        borderImage: `url(${pixelwall}) 100 repeat`,
        width: '50%',
    },
    card: {
        padding: 25,
        backgroundImage: `url(https://i.imgur.com/chN4Uhy.png)`
    },
    button: {
        display: 'block',
        margin: '0 auto'
    }
});

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: [],
            items: {}
        };
    }

    handleClick = () => {
        let data = { characters: this.state.characters, items: this.state.items };
        downloadHackedBinary(data);
    }

    onUpdate = (idx, val) => {
        let key = Object.keys(val)[0];
        if (!this.state.characters[idx]) {
            this.state.characters[idx] = {};
        }
        this.state.characters[idx][key] = val[key];
    };

    onUpdateCheckbox = (value, isChecked) => {
        this.state.items[value] = isChecked;
        console.log(this.state);
    };

    render() {
        const { classes } = this.props;
        const { characters } = this.state;
        return (
            <Grid className={classes.root} 
                container
                justify="space-around"
                direction="row"
            >
                <form className={classes.formContainer} noValidate autoComplete="off">
                    <Card className={classes.card}>
                        <Typography variant="headline">
                            Ranges:
                        </Typography>
                        <Typography variant="headline">
                            Name: 10 char max
                        </Typography>
                        <Typography variant="headline">
                            STR/INT/DEX: (0-99)
                        </Typography>
                        <Typography variant="headline">
                            HP: (0-999)
                        </Typography>
                        <Typography variant="headline">
                            EXP/GOLD: (0-9999)
                        </Typography>
                        <CharacterFormField charId={0} onUpdate={this.onUpdate} charName="Main Character" />
                        <CharacterFormField charId={1} onUpdate={this.onUpdate} charName="Shamino" />
                        <CharacterFormField charId={2} onUpdate={this.onUpdate} charName="Iolo" />
                        <CharacterFormField charId={3} onUpdate={this.onUpdate} charName="Mariah" />
                        <CharacterFormField charId={4} onUpdate={this.onUpdate} charName="Geoffrey" />
                        <CharacterFormField charId={5} onUpdate={this.onUpdate} charName="Jaana" />
                        <CharacterFormField charId={6} onUpdate={this.onUpdate} charName="Julia" />
                        <CharacterFormField charId={7} onUpdate={this.onUpdate} charName="Dupre" />
                        <CharacterFormField charId={8} onUpdate={this.onUpdate} charName="Katrina" />
                        <CharacterFormField charId={9} onUpdate={this.onUpdate} charName="Sentri" />
                        <CharacterFormField charId={10} onUpdate={this.onUpdate} charName="Gwenno" />
                        <CharacterFormField charId={11} onUpdate={this.onUpdate} charName="Johne" />
                        <CharacterFormField charId={12} onUpdate={this.onUpdate} charName="Gorn" />
                        <CharacterFormField charId={13} onUpdate={this.onUpdate} charName="Maxwell" />
                        <CharacterFormField charId={14} onUpdate={this.onUpdate} charName="Toshi" />
                        <CharacterFormField charId={15} onUpdate={this.onUpdate} charName="Saduj" />
                        <ItemCheckboxes onUpdateCheckbox={this.onUpdateCheckbox} />
                        <Button className={classes.button} variant="raised" color="primary" onClick={this.handleClick}>
                            Submit
                        </Button>
                    </Card>
                </form>
            </Grid>
        );
    }
}

export default withStyles(styles)(Home);
