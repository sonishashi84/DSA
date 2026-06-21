const input = [2, 5, 8, 12, 16, 23, 38, 56, 72];

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    console.log(`left ${left} < ${right} right`)
    
    let mid = Math.floor((left + right) / 2);
    console.log('mid', mid)

    if (target == arr[mid]) {
      return mid;
    }

    if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
console.log(binarySearch(input, 56));
