export default function setFromArray(arr) {
  const set = new Set();
  for (let a = 0; a < arr.length; a += 1) {
    set.add(arr[a]);
  }
  return set;
}
