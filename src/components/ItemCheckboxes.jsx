import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
    formLabel: {
        color: 'inherit'
    },
    formControl: {
        padding: 25
    }
});

class ItemCheckboxes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keys: false,
            skullKeys: false,
            gems: false,
            blackBadge: false,
            magicCarpets: false,
            magicAxes: false
        };
    }

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({
            [value]: event.target.checked
        });
        this.props.onUpdateCheckbox(value, event.target.checked);
    }

    render() {
        const { classes } = this.props;
        const { keys, skullKeys, gems, blackBadge, magicCarpets, magicAxes } = this.state;
        return (
            <FormControl className={classes.formControl} component="fieldset">
                <FormLabel component="legend" className={classes.formLabel}>
                    Items
                </FormLabel>
                <FormGroup>
                    <FormControlLabel   
                        control={
                            <Checkbox
                                checked={keys}
                                onChange={this.handleChange}
                                value="keys"
                            />
                        }
                        label="Keys"
                    />
                    <FormControlLabel   
                        control={
                            <Checkbox
                                checked={skullKeys}
                                onChange={this.handleChange}
                                value="skullKeys"
                            />
                        }
                        label="Skull Keys"
                    />
                    <FormControlLabel   
                        control={
                            <Checkbox
                                checked={gems}
                                onChange={this.handleChange}
                                value="gems"
                            />
                        }
                        label="Gems"
                    />
                    <FormControlLabel   
                        control={
                            <Checkbox
                                checked={blackBadge}
                                onChange={this.handleChange}
                                value="blackBadge"
                            />
                        }
                        label="Black Badge"
                    />
                    <FormControlLabel   
                        control={
                            <Checkbox
                                checked={magicCarpets}
                                onChange={this.handleChange}
                                value="magicCarpets"
                            />
                        }
                        label="Magic Carpets"
                    />
                    <FormControlLabel   
                        control={
                            <Checkbox
                                checked={magicAxes}
                                onChange={this.handleChange}
                                value="magicAxes"
                            />
                        }
                        label="Magic Axes"
                    />
                </FormGroup>
            </FormControl>
        );
    }
}

export default withStyles(styles)(ItemCheckboxes);
