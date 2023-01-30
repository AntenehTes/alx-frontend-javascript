export default function hasValuesFromArray(st, arr) {
  for (let arrayIndex = 0; arrayIndex < arr.length; arrayIndex += 1) {
    const ret = st.has(arr[arrayIndex]);
    if (ret === false) {
      return false;
    }
  }
  return true;
}
