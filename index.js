function calculate(...arr1) {
    return function (...arr2) {
        let sum = [].concat(arr1, arr2).reduce((sum, item) => sum += item, 0);
        return sum;
    }
}