import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-3 align-justify-center">
                    <img className="icon-img-size" src={this.props.icon} />
                </div>
                <div className="col-9 align-center-justify-left">
                    <Link to={this.props.href}>{this.props.title}</Link>
                </div>
            </div>
        )
    }
}

MenuItem.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    href: PropTypes.string
}

export default MenuItem;