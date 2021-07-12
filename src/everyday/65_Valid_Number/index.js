// 开始想使用索引来解决，感觉逻辑越来越复杂
export default (s) => {
  // 是否看见了点
  let pointSeen = false;
  // 是否看见了e
  let eSeen = false;
  // 是否看见了number
  let numberSeen = false;
  for (let i = 0; i < s.length; i++) {
    if ("0" <= s.charAt(i) && s.charAt(i) <= "9") {
      numberSeen = true;
    } else if (s.charAt(i) === ".") {
      if (eSeen || pointSeen) return false;
      pointSeen = true;
    } else if (s.charAt(i) === "e" || s.charAt(i) === "E") {
      if (eSeen || !numberSeen) return false;
      numberSeen = false;
      eSeen = true;
    } else if (s.charAt(i) === "-" || s.charAt(i) === "+") {
      if ((i !== 0 && s.charAt(i - 1) !== "e") || s.charAt(i - 1) === "E")
        return false;
    } else {
      return false;
    }
  }
  return numberSeen;
};
