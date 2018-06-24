import React from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import pixelWallImg from '../images/pixelwall.png';

const styles = theme => ({
    footer: {    
        backgroundColor: theme.palette.primary.main,
        backgroundImage: `url(${pixelWallImg})`,
        backgroundPosition: 'center',
        backgroundBlendMode: 'multiply',
        boxShadow: '0px -2px 4px -1px rgba(0, 0, 0, 0.2), 0px -4px 5px 0px rgba(0, 0, 0, 0.14), 0px -1px 10px 0px rgba(0, 0, 0, 0.12)',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: theme.spacing.unit * 15,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    link: {
        color: theme.palette.primary.dark,
        '&:hover': {
            textDecoration: 'underline'
        }
    }
})

class Footer extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.footer}>
                
            </div>
        );
    }
}

export default withStyles(styles)(Footer);
