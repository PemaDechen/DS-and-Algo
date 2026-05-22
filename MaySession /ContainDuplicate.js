const containDuplicate = (nums) => {
  const obj = {};
  for (let i of nums) {
    if (obj[i]) {
      return true;
    }
    obj[i] = true;
  }

  return false;
};
