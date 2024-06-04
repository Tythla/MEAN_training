//Yangbo Liu
function myFilter(arr, cb) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

function myMap(arr, cb) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let tmp = cb(arr[i], i, arr);
    result.push(tmp);
  }
  return result;
}

function myIncludes(arr, value) {
  for (ele of arr) {
    if (ele === value) return true;
  }
  return false;
}

function myIndexOf(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

function myReduce(arr, cb, init) {
  let acc = init;
  for (let i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i], i, arr);
  }
  return acc;
}

function mySlice(arr, start, end) {
  let result = [];
  start = start || 0;
  end = end || arr.length;
  for (let i = start; i < end; i++) {
    result.push(arr[i]);
  }
  return result;
}

function mySplice(arr, start, count, ...items) {
  let removed = [];
  let len = arr.length;

  for (let i = 0; i < count; i++) {
    if (start + i < len) {
      removed.push(arr[start + i]);
    }
  }

  let newArr = [];
  for (let i = 0; i < start; i++) {
    newArr.push(arr[i]);
  }
  for (let item of items) {
    newArr.push(item);
  }
  for (let i = start + count; i < len; i++) {
    newArr.push(arr[i]);
  }

  arr.length = newArr.length;
  for (let i = 0; i < newArr.length; i++) {
    arr[i] = newArr[i];
  }

  return removed;
}

//Tests
const arr1 = [1, 2, 3, 4, 5];
const filterResult = myFilter(arr1, (x) => x % 2 === 0);
console.log("filter:");
console.log(filterResult);

const arr2 = [1, 2, 3, 4, 5];
const mapResult = myMap(arr2, (x) => x * 2);
console.log("map:");
console.log(mapResult);

const arr3 = [1, 2, 3, 4, 5];
const includesResult1 = myIncludes(arr3, 3);
const includesResult2 = myIncludes(arr3, 6);
console.log("includes:");
console.log(includesResult1);
console.log(includesResult2);

const arr4 = [1, 2, 3, 4, 5];
const indexOfResult1 = myIndexOf(arr4, 3);
const indexOfResult2 = myIndexOf(arr4, 6);
console.log("index of:");
console.log(indexOfResult1);
console.log(indexOfResult2);

const arr5 = [1, 2, 3, 4, 5];
const reduceResult = myReduce(arr5, (acc, x) => acc + x, 0);
console.log("reduce:");
console.log(reduceResult);

const arr6 = [1, 2, 3, 4, 5];
const sliceResult1 = mySlice(arr6, 1, 3);
const sliceResult2 = mySlice(arr6, 2);
console.log("slice:");
console.log(sliceResult1);
console.log(sliceResult2);

const arr7 = [1, 2, 3, 4, 5];
const spliceRemoved = mySplice(arr7, 1, 2, 6, 7);
console.log("splice:");
console.log(arr7);
console.log(spliceRemoved);
