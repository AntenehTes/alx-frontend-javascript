export default function getStudentsByLocation(getList, city) {
  return getList.filter((cty) => cty.location === city);
}
