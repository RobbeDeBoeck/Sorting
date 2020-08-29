let animations;

export default function sort(array) {
    const arr = [...array];
    animations = [];

    const n = arr.length;
    for (let i = n / 2 - 1; i >= 0; i--) heapify(arr, n, i);

    for (let i = n - 1; i > 0; i--) {
        animations.push({ x: 0, y: i, swapped: true });
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }

    return { arr, animations };
}

function heapify(arr, n, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < n && arr[l] > arr[largest]) largest = l;

    if (r < n && arr[r] > arr[largest]) largest = r;

    if (largest !== i) {
        animations.push({ x: i, y: largest, swapped: true });
        [arr[i], arr[largest]] = [arr[largest], arr[i]];

        heapify(arr, n, largest);
    }
}
