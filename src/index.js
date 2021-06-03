const all = (arr = []) => {
  if (arr.length === 0) return [];

  const res = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i]
      .then((result) => {
        res[i] = result;
        ++count;
        if (count === arr.length) {
          return Promise.resolve(res);
        }
      })
      .catch(() => {
        return [];
      });
  }
  return [];
};
