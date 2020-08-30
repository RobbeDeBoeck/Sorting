import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ArrayContainer.css";

export default class ArrayContainer extends Component {
    render() {
        return (
            <div className="array-container">
                {this.props.array.map((val, id) => (
                    <div className="array-bar" key={id} style={{ height: val }}></div>
                ))}
            </div>
        );
    }
}

ArrayContainer.propTypes = {
    array: PropTypes.arrayOf(PropTypes.number).isRequired,
};
