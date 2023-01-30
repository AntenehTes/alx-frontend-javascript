export default function updateStudentGradeByCity(studList, city, newGrades) {
  return studList.filter((stud) => stud.location === city).map((stud) => ({
    ...stud,
    grade: newGrades.filter((gr) => gr.studentId === stud.id).map((gr) => gr.grade)[0] || 'N/A',
  }));
}
