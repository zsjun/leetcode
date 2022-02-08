var compareVersion = function (version1, version2) {
  version1 = version1.split(".");
  version2 = version2.split(".");
  let i = 0;
  for (; i < Math.min(version1.length, version2.length); i++) {
    if (+version1[i] > +version2[i]) return 1;
    if (+version1[i] < +version2[i]) return -1;
  }

  if (version1[i] === undefined) {
    for (; i < version2.length; i++) {
      if (+version2[i] > 0) {
        return -1;
      }
    }
  }
  if (version2[i] === undefined) {
    for (; i < version1.length; i++) {
      if (+version1[i] > 0) {
        return 1;
      }
    }
  }
  return 0;
};
