export default function getStudentIdsSum(arrList) {
  return arrList.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id, 0,
  );
}
