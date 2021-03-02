const TurnOn = (lights) => {
  for (let i = 0; i < lights.length - 2; i++) {
    if (lights[i]) {
      lights[i] = 0;
      lights[i + 1] = lights[i + 1] === 0 ? 1 : 0;
      lights[i + 2] = lights[i + 2] === 0 ? 1 : 0;
    }
  }
  let arr = lights.filter((item) => item === 1);
  if (arr.length === 0) {
    for (let i = 0; i < lights.length; i++) {
      if (i === 0) {
        lights[i] = 1;
        lights[lights.length - 1] = 1;
        lights[i + 1] = 1;
      } else if (i === lights.length - 1) {
        lights[0] = 1;
        lights[i] = 1;
        lights[i - 1] = 1;
      } else {
        lights[i] = lights[i] === 1 ? 0 : 1;
        lights[i - 1] = lights[i - 1] === 1 ? 0 : 1;
        lights[i + 1] = lights[i] === 1 ? 0 : 1;
      }
    }
    return lights;
  }
  const turnOne = (data, i) => {
    let index = data.indexOf(1);
    let num = index + 2 < data.length ? index + 2 : index + 2 - data.length;
    if (num === data.length - 1) {
      data[num] = data[num] === 0 ? 1 : 0;
      data[num - 1] = data[num - 1] === 0 ? 1 : 0;
      data[0] = data[0] === 0 ? 1 : 0;
      num = -1;
    } else if (num === 0) {
      data[num] = data[num] === 0 ? 1 : 0;
      data[num + 1] = data[num + 1] === 0 ? 1 : 0;
      data[data.length - 1] = data[data.length - 1] === 0 ? 1 : 0;
    } else {
      data[num] = data[num] === 0 ? 1 : 0;
      data[num - 1] = data[num - 1] === 0 ? 1 : 0;
      data[num + 1] = data[num + 1] === 0 ? 1 : 0;
    }
    for (let i = num + 3; i < index; ) {
      data[i] = data[i] === 0 ? 1 : 0;
      data[i - 1] = data[i - 1] === 0 ? 1 : 0;
      data[i + 1] = data[i + 1] === 0 ? 1 : 0;
      i = i + 3;
    }
    return data;
  };
  if (arr.length === 2) {
    lights[lights.length - 2] = 0;
    lights[lights.length - 3] = 1;
    lights[lights.length - 1] = 0;
    return turnOne(lights);
  }
  if (arr.length === 1) {
    return turnOne(lights);
  }
};
export default TurnOn;
