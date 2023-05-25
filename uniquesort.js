const uniqSort = function (arr) {
  const cache = {};
  const result = [arr[0]];
  for (let i = 0; i < arr.length; arr++) {
    //start loop as 1 element. 0 can never be a dupliacte
    if (!cache[arr[i]]) {
      result.push(arr[i]);
      cache[arr[i]] = true;
    }
  }

  return result.sort((a, b) => a - b);
  uniqSort([4, 2, 2, 3, 2, 2, 2]);
};
