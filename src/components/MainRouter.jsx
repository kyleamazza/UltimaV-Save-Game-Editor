import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BottomNavigation from '@material-ui/core/BottomNavigation';

import MenuBar from './MenuBar';
import Home from './Home';
import Footer from './Footer';

import pixelCastleImg from '../images/pixelcastle.png';

const styles = theme => ({
    root: {
        position: 'relative',
        minHeight: '100%',
        backgroundImage: `url(${pixelCastleImg})`,
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
    }
});

class MainRouter extends React.Component {
    componentDidMount() {
        const jssStyles = document.getElementById('jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <MenuBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withStyles(styles)(MainRouter);
