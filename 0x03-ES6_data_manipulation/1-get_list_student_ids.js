export default function getListStudentIds(getList) {
  if (Array.isArray(getList)) {
    const theList = getList.map((lists) => {lists.id});
    return theList;
  }
  return [];
}
