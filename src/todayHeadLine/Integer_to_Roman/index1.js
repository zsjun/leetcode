export default (num) => {
  let res = "";
  if (num >= 1000) {
    const temp = Math.floor(num / 1000);
    for (let i = 0; i < temp; i++) {
      res += "M";
    }
    num -= temp * 1000;
  }
  const arr = [
    {
      size: 900,
      tag: "CM",
    },
  ];
  if (num >= 900) {
    res += "CM";
    num -= 900;
  }
  if (num >= 500) {
    res += "D";
    num -= 500;
  }
  if (num >= 400) {
    res += "CD";
    num -= 400;
  }
  if (num >= 100) {
    const temp = Math.floor(num / 100);

    for (let i = 0; i < temp; i++) {
      res += "C";
    }
    num -= temp * 100;
  }

  if (num >= 90) {
    res += "XC";
    num -= 90;
  }
  if (num >= 50) {
    res += "L";
    num -= 50;
  }
  if (num >= 40) {
    res += "XL";
    num -= 40;
  }
  if (num >= 10) {
    const temp = Math.floor(num / 10);
    for (let i = 0; i < temp; i++) {
      res += "X";
    }
    num -= temp * 10;
  }

  if (num >= 9) {
    res += "IX";
    num -= 9;
  }
  if (num >= 5) {
    res += "V";
    num -= 5;
  }
  if (num >= 4) {
    res += "IV";
    num -= 4;
  }

  if (num >= 1) {
    for (let i = 0; i < num; i++) {
      res += "I";
    }
  }
  return res;
};
