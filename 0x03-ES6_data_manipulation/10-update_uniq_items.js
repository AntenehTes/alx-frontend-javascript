export default function updateUniqueItems(map1) {
  if (map1 instanceof Map) {
    map1.forEach((value, key) => {
      if (value === 1) {
        map1.set(key, 100);
      }
    });
  } else {
    throw new Error('Cannot process');
  }
  return map1;
}
