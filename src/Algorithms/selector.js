import insertionSort from "./insertionSort";
import bubbleSort from "./bubbleSort";
import selectionSort from "./selectionSort";
import mergeSort from "./mergeSort";
import heapSort from "./heapSort";
import quickSort from "./quickSort";

export default function sortUsingAlgorithm(alg, arr) {
    if (alg === "insertion") return insertionSort(arr);
    if (alg === "bubble") return bubbleSort(arr);
    if (alg === "selection") return selectionSort(arr);
    if (alg === "merge") return mergeSort(arr);
    if (alg === "heap") return heapSort(arr);
    if (alg === "quick") return quickSort(arr);

    return { arr: [], animations: [] };
}
