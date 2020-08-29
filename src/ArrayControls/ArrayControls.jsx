import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ArrayControls.css";

const maxDelay = 500;
const minDelay = 1;
const maxSize = 300;
const minSize = 10;

export default class ArrayControls extends Component {
    componentDidMount() {
        const size = document.getElementById("size").value;
        const speed = document.getElementById("speed").value;
        const alg = document.getElementById("alg").value;

        this.props.onMount(size, speed, alg);
    }

    render() {
        return (
            <div className="array-controls">
                <div className="group">
                    <label htmlFor="size">Array size:</label>
                    <input
                        type="range"
                        id="size"
                        min={minSize}
                        max={maxSize}
                        onChange={this.props.changeSize}
                        disabled={this.props.disabled}
                    />
                </div>
                <div className="group">
                    <label htmlFor="speed">Animation speed:</label>
                    <input
                        type="range"
                        id="speed"
                        min={-maxDelay}
                        max={-minDelay}
                        onChange={this.props.changeSpeed}
                        disabled={this.props.disabled}
                    />
                </div>
                <div className="group">
                    <label htmlFor="alg">Algorithm:</label>
                    <select id="alg" onChange={this.props.changeAlgorithm} disabled={this.props.disabled}>
                        <option value="merge">Merge sort</option>
                        <option value="heap">Heap sort</option>
                        <option value="quick">Quicksort</option>
                        <option value="insertion">Insertion sort</option>
                        <option value="bubble">Bubble sort</option>
                        <option value="selection">Selection sort</option>
                    </select>
                </div>
                <div className="group">
                    <button onClick={this.props.randomize} disabled={this.props.disabled}>
                        Randomize
                    </button>
                    <button onClick={this.props.sort} disabled={this.props.disabled}>
                        Sort
                    </button>
                </div>
            </div>
        );
    }
}

ArrayControls.propTypes = {
    onMount: PropTypes.func,
    disabled: PropTypes.bool,
    randomize: PropTypes.func,
    changeSpeed: PropTypes.func,
    changeAlgorithm: PropTypes.func,
    sort: PropTypes.func,
};
