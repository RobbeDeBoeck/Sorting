export default function sort(array) {
    const arr = [...array];
    const animations = [];

    for (let i = 1; i < arr.length; i++) {
        let swapped = false;

        for (let j = 0; j < arr.length - i; j++) {
            animations.push({ x: j, y: j + 1, swapped: arr[j] > arr[j + 1] });
            if (arr[j] <= arr[j + 1]) continue;
            swapped = true;
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }

        // break loop if no swaps have occured
        if (!swapped) break;
    }
    return { arr, animations };
}
