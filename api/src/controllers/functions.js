function verifyInputsToUpdate(obj, arr) {
  let res = true;
  for (key in obj) {
    if (!arr.includes(key)) res = false;
  }
  return res;
}

module.exports = {
  verifyInputsToUpdate,
};
