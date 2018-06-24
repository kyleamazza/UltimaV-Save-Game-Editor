import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import BuildIcon from '@material-ui/icons/Build';

import pixelWallImg from '../images/pixelwall.png';

const styles = theme => ({
    root: {
        paddingTop: theme.spacing.unit * 1,
        paddingBottom: theme.spacing.unit * 1,
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 3,
        backgroundImage: `url(${pixelWallImg})`,
        backgroundPosition: 'center',
        backgroundBlendMode: 'multiply'
    },
    brand: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    icon: {
        color: '#eee',
        width: 90,
        height: 90
    },
    title: {
        padding: 20,
        color: theme.palette.primary.contrastText
    },
    secondaryLink: {
        flex: 1,
        color: theme.palette.primary.contrastText,
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    flex: {
        display: 'flex',
        alignSelf: 'stretch'
    },
    flex1: {
        flex: 1
    },
    contrastText: {
        color: theme.palette.primary.contrastText,
    }
});

// TODO: Fix style class naming i.e. contrastText, flex1, flex, for being vague and undescriptive as well as repetitive
// TODO: Add auth-based conditional rendering
class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        const { location } = this.props;
    }
    render() {
        const { classes } = this.props;
        return (
            <AppBar className={classes.root} position="static">
                <Toolbar>
                    <BuildIcon className={classes.icon}/>
                    <Typography variant="display3" className={classes.title}>
                        Ultima V Modder
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

MenuBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(MenuBar));
