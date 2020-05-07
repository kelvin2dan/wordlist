import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import './style/main.scss';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import Layout from './page/layout';

const App = (props) => {
    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    );
};

// App.defaultProps = {
//     name: 'hello'
// };

// App.propTypes = {
//     name: PropTypes.string
// };

ReactDOM.render(
    <App />,
    document.getElementById("app")
);