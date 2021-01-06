export default (arr) => {
  const len = arr.length;
  let step = len;
  while (step > 2) {
    step = Math.floor(step / 3);
    for (let i = 0; i < step; i++) {
      for (let j = i + step; j < len; j = j + step) {
        let max = j;
        while (max >= step) {
          if (arr[max] < arr[max - step]) {
            let temp = arr[max];
            arr[max] = arr[max - step];
            arr[max - step] = temp;
          }
          max -= step;
        }
      }
    }
  }
  // console.log(arr);
  return arr;
};
