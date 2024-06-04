const getStudentIdsSum = (students) => students.reduce((val, cur) => val + cur.id, 0);

export default getStudentIdsSum;
