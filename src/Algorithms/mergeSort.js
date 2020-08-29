let animations;

export default function sort(array) {
    const arr = [...array];
    animations = [];

    mergeSort(arr, 0, arr.length - 1);

    return { arr, animations };
}

function mergeSort(arr, left, right) {
    if (left >= right) return;

    const middle = Math.floor((left + right) / 2);

    mergeSort(arr, left, middle);
    mergeSort(arr, middle + 1, right);

    merge(arr, left, middle, right);
}

function merge(arr, left, middle, right) {
    // calculate left and right size
    const leftSize = middle - left + 1;
    const rightSize = right - middle;

    const tmpLeft = [];
    const tmpRight = [];

    // fill temp arrays
    for (let i = 0; i < leftSize; i++) {
        tmpLeft.push(arr[left + i]);
    }
    for (let i = 0; i < rightSize; i++) {
        tmpRight.push(arr[middle + i + 1]);
    }

    // merge temp arrays into main array
    let i = 0;
    let j = 0;
    let k = left;
    while (i < leftSize && j < rightSize) {
        animations.push({ x: left + i, y: middle + j + 1, swapped: false });

        if (tmpLeft[i] <= tmpRight[j]) {
            animations.push({ x: k, y: tmpLeft[i], swapped: true });
            arr[k++] = tmpLeft[i++];
        } else {
            animations.push({ x: k, y: tmpRight[j], swapped: true });
            arr[k++] = tmpRight[j++];
        }
    }

    // copy remaining
    while (i < leftSize) {
        animations.push({ x: k, y: tmpLeft[i], swapped: true });
        arr[k++] = tmpLeft[i++];
    }

    while (j < rightSize) {
        animations.push({ x: k, y: tmpRight[j], swapped: true });
        arr[k++] = tmpRight[j++];
    }
}
