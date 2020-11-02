export default (str) => {
  str = str.trim();
  if (!str) return 0;
  let sign = 1;
  let i = 0;
  let answer = 0;

  if (str[i] == "+") {
    sign = 1;
    i++;
  } else if (str[i] == "-") {
    sign = -1;
    i++;
  }

  for (; i < str.length; i++) {
    const temp = str.charCodeAt(i) - 48;
    // 如果少于0或者9就是在不是数字范围之内
    if (temp > 9 || temp < 0) break;
    // 判断最大值和最小值
    if (answer > 2147483647 / 10 || answer > (2147483647 - temp) / 10) {
      return sign == 1 ? 2147483647 : -2147483648;
    } else {
      answer = answer * 10 + temp;
    }
  }

  return answer * sign;
};


1 

