export default (childrens, cookies) => {
  if (!childrens || childrens.length === 0) return 0;
  childrens.sort();
  cookies.sort();
  // 最多可以有多少孩子
  let res = 0;
  // 已经分配的饼干索引
  let cookiesIndex = 0;
  // 优先使用最小的饼干喂饱饥饿最下的孩子
  for (let i = 0; i < childrens.length; i++) {
    for (let j = cookiesIndex; j < cookies.length; j++) {
      if (cookies[j] >= childrens[i]) {
        res++;
        cookiesIndex = j + 1;
        break;
      }
    }
  }
  return res;
};
