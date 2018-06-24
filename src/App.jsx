import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import MainRouter from './components/MainRouter';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#e54545',
            main: '#822727',
            dark: '#401313',
            contrastText: '#fff',
        },
        secondary: {
            light: '#8e00f3',
            main: '#5c6bc0',
            dark: '#26418f',
            contrastText: '#000',
        },
    },
    typography: {
        fontFamily: '"Press Start 2P"',
        fontSize: 10
    }
});

const styles = {
    root: {
        position: 'relative',
        minHeight: '100%'
    }
}

class App extends React.Component {
    render() {
        return (
            <BrowserRouter style={styles.root}>
                <MuiThemeProvider theme={theme}>
                    <MainRouter />
                </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}

export default hot(module)(App);
