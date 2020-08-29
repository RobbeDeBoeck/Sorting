export default function sort(array) {
    const arr = [...array];
    const animations = [];
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            animations.push({ x: j, y: j - 1, swapped: arr[j] <= arr[j - 1] });
            if (arr[j] > arr[j - 1]) break;
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        }
    }
    return { arr, animations };
}
