import React, { Component } from "react";
import { sortUsingAlgorithm, randomNumberBetween, animate } from "./js/functions";

import "./App.css";
import ArrayContainer from "./ArrayContainer/ArrayContainer";
import ArrayControls from "./ArrayControls/ArrayControls";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.size = 0;
        this.speed = 0;
        this.algorithm = "";
        this.sorting = false;

        this.state = {
            array: [],
        };
    }

    initialize = (size, speed, alg) => {
        this.size = size;
        this.speed = speed;
        this.algorithm = alg;
        this.randomize();
    };

    randomize = () => {
        const arr = [];
        for (let i = 0; i < this.size; i++) {
            arr.push(randomNumberBetween(100, 800));
        }
        this.setState({ array: arr });
    };

    changeSize = e => {
        this.size = e.target.value;
        this.randomize();
    };

    changeSpeed = e => {
        this.speed = Math.abs(e.target.value);
    };

    changeAlgorithm = e => {
        this.algorithm = e.target.value;
    };

    sort = () => {
        const result = sortUsingAlgorithm(this.algorithm, this.state.array);
        console.log("sorted array:", result.arr);
        console.log("animations:", result.animations);
        animate(result.animations, this);
    };

    render() {
        const { array } = this.state;
        return (
            <div className="App">
                <ArrayControls
                    onMount={this.initialize}
                    randomize={this.randomize}
                    changeSize={this.changeSize}
                    changeSpeed={this.changeSpeed}
                    changeAlgorithm={this.changeAlgorithm}
                    sort={this.sort}
                    disabled={this.sorting}
                />
                <ArrayContainer array={array} />
            </div>
        );
    }
}
