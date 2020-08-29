import insertionSort from "./insertionSort";
import bubbleSort from "./bubbleSort";
import selectionSort from "./selectionSort";
import mergeSort from "./mergeSort";
import heapSort from "./heapSort";
import quickSort from "./quickSort";

export function sortUsingAlgorithm(alg, arr) {
    if (alg === "insertion") return insertionSort(arr);
    if (alg === "bubble") return bubbleSort(arr);
    if (alg === "selection") return selectionSort(arr);
    if (alg === "merge") return mergeSort(arr);
    if (alg === "heap") return heapSort(arr);
    if (alg === "quick") return quickSort(arr);

    return { arr: [], animations: [] };
}

export function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export function animate(animations, component) {
    const nodes = document.querySelectorAll(".array-container .array-bar");
    const arr = [...component.state.array];

    component.sorting = true;

    animations.forEach((a, i) => {
        setTimeout(() => {
            document.querySelectorAll(".array-container .active").forEach(e => e.classList.remove("active"));
            nodes[a.x].classList.add("active");

            // merge animations are different because of how merge sort works
            if (component.algorithm === "merge") {
                if (a.swapped) {
                    arr[a.x] = a.y;
                    component.setState({ array: arr });
                } else nodes[a.y].classList.add("active");
                return;
            }

            nodes[a.y].classList.add("active");
            if (a.swapped) {
                [arr[a.x], arr[a.y]] = [arr[a.y], arr[a.x]];
                component.setState({ array: arr });
            }
        }, component.speed * i);

        setTimeout(() => {
            document.querySelectorAll(".array-container .active").forEach(e => e.classList.remove("active"));
            component.sorting = false;
        }, component.speed * animations.length);
    });
}
