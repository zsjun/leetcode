function triggle(list, i) {
  if (i < 0 || i > list.length - 1) {
    return;
  }
  list[i] = list[i] === 1 ? 0 : 1;
  if (i === 0) {
    if (list.length > 2) {
      list[list.length - 1] = list[list.length - 1] === 1 ? 0 : 1;
    }
    list[1] = list[1] === 1 ? 0 : 1;
  } else if (i === list.length - 1) {
    if (list.length > 2) {
      list[list.length - 2] = list[list.length - 2] === 1 ? 0 : 1;
    }
    list[0] = list[0] === 1 ? 0 : 1;
  } else {
    list[i + 1] = list[i + 1] === 1 ? 0 : 1;
    list[i - 1] = list[i - 1] === 1 ? 0 : 1;
  }
}
function triggleAllLeds(lists) {
  for (let i = 0; i < lists.length - 2; i++) {
    if (lists[i] === 1) {
      triggle(lists, i + 1);
    }
  }
  if (lists[lists.length - 1] === 0 && lists[lists.length - 2] === 0) {
    for (let i = 0; i < lists.length; i++) {
      triggle(lists, i);
    }
    return lists;
  } else if (lists[lists.length - 1] === 1 && lists[lists.length - 2] === 0) {
    for (let i = 1; i < lists.length - 2; i += 3) {
      triggle(lists, i);
    }
    return lists;
  } else if (lists[lists.length - 1] === 0 && lists[lists.length - 2] === 1) {
    for (let i = 0; i < lists.length - 3; i += 3) {
      triggle(lists, i);
    }
    return lists;
  } else {
    triggle(lists, 98);
    triggle(lists, 99);
    for (let i = 2; i < lists.length - 4; i += 3) {
      triggle(lists, i);
    }
    return lists;
  }
}

export default triggleAllLeds;
