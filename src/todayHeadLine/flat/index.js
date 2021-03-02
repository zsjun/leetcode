function flat(res, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flat(res, arr[i]);
    } else {
      res.push(arr[i]);
    }
  }
}
export default (arr) => {
  const res = [];
  flat(res, arr);
  return Array.from(new Set(res));
};
