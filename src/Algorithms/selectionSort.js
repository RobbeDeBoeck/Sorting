export default function sort(array) {
    const arr = [...array];
    const animations = [];

    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            animations.push({ x: j, y: min, swapped: false });
            if (arr[min] < arr[j]) continue;
            min = j;
        }

        if (i !== min) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
            animations.push({ x: i, y: min, swapped: true });
        }
    }

    return { arr, animations };
}
