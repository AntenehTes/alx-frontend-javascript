export default function createInt8TypedArray(length, position, value) {
  const buf = new ArrayBuffer(length);
  const dataView = new DataView(buf);
  if (position >= length) {
    throw new Error('Position outside range');
  }
  dataView.setInt8(position, value);
  return dataView;
}
