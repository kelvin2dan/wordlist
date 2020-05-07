import React from 'react';
import PropTypes from 'prop-types';

class CircleImage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <img className="circle-img" src={this.props.imgSrc} />
        )
    }
}

CircleImage.propTypes = {
    imgSrc: PropTypes.string
}
export default CircleImage;