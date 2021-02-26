export default (arr1, arr2) => {
  let len1 = arr1.length;
  let len2 = arr2.length;

  const map = new Map();
  const res = [];
  if (len1 > len2) {
    const tempArr = arr1;
    arr1 = arr2;
    arr2 = tempArr;
    len1 = arr1.length;
    len2 = arr2.length;
  }
  for (let i = 0; i < len1; i++) {
    console.log(map);
    if (map.has(arr1[i])) {
      const temp = map.get(arr1[i]) + 1;
      map.set(arr1[i], temp);
    } else {
      map.set(arr1[i], 1);
    }
  }
  // console.log(map);
  for (let i = 0; i < len2; i++) {
    if (map.has(arr2[i])) {
      res.push(arr2[i]);
      const tempCount = map.get(arr2[i]) - 1;
      if (tempCount === 0) {
        map.delete(arr2[i]);
      } else {
        map.set(arr2[i], tempCount);
      }
    }
  }
  return res;
};
