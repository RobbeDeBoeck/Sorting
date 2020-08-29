let animations;

export default function sort(array) {
    const arr = [...array];
    animations = [];

    quickSort(arr, 0, arr.length - 1);

    return { arr, animations };
}

function quickSort(arr, low, high) {
    if (low >= high) return;

    const pi = partition(arr, low, high);

    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
}

function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        animations.push({ x: j, y: high, swapped: false });
        if (arr[j] < pivot) {
            i++;
            animations.push({ x: j, y: i, swapped: true });
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    animations.push({ x: i + 1, y: high, swapped: true });
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

    return i + 1;
}
