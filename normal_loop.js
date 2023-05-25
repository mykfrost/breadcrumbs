const isUnique = (arr) => {
  let result = true;
  for (let i = 0; i < arr.length; i++) {
    console.log(`---Outer Loop--- i === ${i}`);
    for (let j = 0; j < arr.length; j++) {
      console.log(`---Inner Loop---j === ${j}`);
      if (i !== j && arr[i] === arr[j]) {
        result = false;
      }
    }
  }
  return result;
};

console.log(isUnique([1, 2, 3]) === true);
console.log(isUnique([1, 2, 3]) === false);
