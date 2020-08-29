import React, { Component } from "react";
import "./ArrayContainer.css";
import sortUsingAlgorithm from "../Algorithms/selector";

export default class ArrayContainer extends Component {
    constructor(props) {
        super(props);
        this.sizeRef = React.createRef();
        this.algRef = React.createRef();
        this.speedRef = React.createRef();

        this.maxDelay = 500;
        this.minDelay = 1;
        this.maxSize = 300;
        this.minSize = 10;

        this.speed = 0;
        this.algorithm = "";

        this.state = {
            array: [],
        };
    }

    randomizeArray() {
        const arr = [];
        for (let i = 0; i < this.sizeRef.current.value; i++) {
            arr.push(this.randomNumberBetween(100, 800));
        }
        this.setState({ array: arr });
    }

    randomNumberBetween(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    handleSortClick() {
        const result = sortUsingAlgorithm(this.algorithm, this.state.array);
        console.log("sorted array:", result.arr);
        console.log("animations:", result.animations);
        this.animate(result.animations);
    }

    handleAlgChange() {
        this.algorithm = this.algRef.current.value;
    }

    handleSpeedChange() {
        this.speed = Math.abs(this.speedRef.current.value);
    }

    animate(animations) {
        const nodes = document.querySelectorAll(".array-container .array-bar");
        const arr = [...this.state.array];

        animations.forEach((a, i) => {
            setTimeout(() => {
                document.querySelectorAll(".array-container .active").forEach(e => e.classList.remove("active"));
                nodes[a.x].classList.add("active");

                // merge animations are different because of how merge sort works
                if (this.algorithm === "merge") {
                    if (a.swapped) {
                        arr[a.x] = a.y;
                        this.setState({ array: arr });
                    } else nodes[a.y].classList.add("active");
                    return;
                }

                nodes[a.y].classList.add("active");
                if (a.swapped) {
                    [arr[a.x], arr[a.y]] = [arr[a.y], arr[a.x]];
                    this.setState({ array: arr });
                }
            }, this.speed * i);

            // clear active bars at the end
            setTimeout(() => {
                document.querySelectorAll(".array-container .active").forEach(e => e.classList.remove("active"));
            }, this.speed * animations.length);
        });
    }

    componentDidMount() {
        this.randomizeArray();
        this.algorithm = this.algRef.current.value;
        this.speed = Math.abs(this.speedRef.current.value);
    }

    render() {
        const { array } = this.state;
        return (
            <>
                <div className="array-controls">
                    <div className="group">
                        <label htmlFor="size">Array size:</label>
                        <input
                            type="range"
                            id="size"
                            min={this.minSize}
                            max={this.maxSize}
                            ref={this.sizeRef}
                            onChange={() => this.randomizeArray()}
                        />
                    </div>
                    <div className="group">
                        <label htmlFor="speed">Animation speed:</label>
                        <input
                            type="range"
                            id="speed"
                            min={-this.maxDelay}
                            max={-this.minDelay}
                            ref={this.speedRef}
                            onChange={() => this.handleSpeedChange()}
                        />
                    </div>
                    <div className="group">
                        <label htmlFor="alg">Algorithm:</label>
                        <select id="alg" ref={this.algRef} onChange={() => this.handleAlgChange()}>
                            <option value="merge">Merge sort</option>
                            <option value="heap">Heap sort</option>
                            <option value="quick">Quicksort</option>
                            <option value="insertion">Insertion sort</option>
                            <option value="bubble">Bubble sort</option>
                            <option value="selection">Selection sort</option>
                        </select>
                    </div>
                    <div className="group">
                        <button onClick={() => this.randomizeArray()}>Randomize</button>
                        <button onClick={() => this.handleSortClick()}>Sort</button>
                    </div>
                </div>
                <div className="array-container">
                    {array.map((val, id) => (
                        <div className="array-bar" key={id} style={{ height: val }}></div>
                    ))}
                </div>
            </>
        );
    }
}
