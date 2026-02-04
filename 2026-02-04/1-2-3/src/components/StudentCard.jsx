export default function StudentCard({ name, studentId, major }) {
  const majorText = major?.trim() ? major.trim() : "전공없음";
  return (
    <div className="student-card">
      <h2>StudentCard</h2>
      <p>이름: {name}</p>
      <p>학번: {studentId}</p>
      <p>전공: {majorText}</p>
    </div>
  );
}
