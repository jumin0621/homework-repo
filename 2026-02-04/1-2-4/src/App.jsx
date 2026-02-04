import { useState } from "react";
import ColorBox from "./components/ColorBox";
import Counter from "./components/Counter";
import LoginCheck from "./components/LoginCheck";
import Mirror from "./components/Mirror";
import ProfileLayout from "./components/ProfileLayout";
import StudentCard from "./components/StudentCard";
import Toggle from "./components/Toggle";
import TrafficLight from "./components/TrafficLight";
import ProfileCard from "./components/ProfileCard";
import Post from "./components/Post";
import ThemeToggle from "./components/ThemeToggle";
import Profile from "./components/Profile";

function App() {
	const [isDark, setIsDark] = useState(false);

	const pageStyle = {
		minHeight: "100vh",
		padding: 24,
		backgroundColor: isDark ? "#0b1020" : "#f6f7fb",
		color: isDark ? "#f3f4f6" : "#111827",
		display: "flex",
		justifyContent: "center",
		alignItems: "flex-start",
	};

	const containerStyle = {
		width: "100%",
		maxWidth: 640,
		display: "grid",
		gap: 16,
	};

	const headerStyle = {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		gap: 12,
		padding: "10px 12px",
		borderRadius: 12,
		background: isDark ? "rgba(255,255,255,0.06)" : "#ffffff",
		border: isDark ? "1px solid rgba(255,255,255,0.12)" : "1px solid #e5e7eb",
	};

	const cardStyle = {
		borderRadius: 14,
		padding: 16,
		background: isDark ? "rgba(255,255,255,0.06)" : "#ffffff",
		border: isDark ? "1px solid rgba(255,255,255,0.12)" : "1px solid #e5e7eb",
	};

	const buttonStyle = {
		padding: "10px 14px",
		borderRadius: 10,
		border: isDark ? "1px solid rgba(255,255,255,0.18)" : "1px solid #d1d5db",
		background: isDark ? "rgba(255,255,255,0.12)" : "#111827",
		color: isDark ? "#fff" : "#fff",
		cursor: "pointer",
		fontWeight: 600,
	};

	const subButtonStyle = {
		...buttonStyle,
		background: isDark ? "transparent" : "#ffffff",
		color: isDark ? "#fff" : "#111827",
	};

	const inputStyle = {
		width: "100%",
		boxSizing: "border-box",
		padding: "10px",
		borderRadius: 10,
		border: isDark ? "1px solid rgba(255,255,255,0.18)" : "1px solid #d1d5db",
		background: isDark ? "rgba(255,255,255,0.08)" : "#ffffff",
		color: "inherit",
		outline: "none",
		marginTop: 6,
	};

	const toggleTheme = () => setIsDark((prev) => !prev);

	/*
  const student = [
    {
      name: "서다미",
      studentId: "20055271",
      major: "컴퓨터공학",
    },
    { name: "신주민", studentId: "20055272", major: "" },
  ];
  */

	return (
		<div style={pageStyle}>
			<div style={containerStyle}>
				<header style={headerStyle}>
					<h1 style={{ margin: 0, fontSize: 20 }}>테마 & 프로필 매니저</h1>

					<ThemeToggle
						isDark={isDark}
						handleToggle={toggleTheme}
						buttonStyle={buttonStyle}
					/>
				</header>

				<Profile
					isDark={isDark}
					cardStyle={cardStyle}
					buttonStyle={buttonStyle}
					subButtonStyle={subButtonStyle}
					inputStyle={inputStyle}
				/>
			</div>
		</div>
		/*
    <div>
      <h2>프로필카드</h2>
      <div>
        <ProfileCard name="서다미" age="30" job="쓰앵님" />
        <ProfileCard name="신주민" age="28" job="학생" />
      </div>
      <hr />
      <h2>SNS게시물</h2>
      <div>
        <Post author="신주민" content="즐길 수 없으면 피해라!" />
        <Post author="서다미" content="포기하지 않는 한 내가 끌고간다..." />
      </div>
    </div>
    <div>
      <ProfileLayout>
        {student.map((s) => (
          <StudentCard
            key={s.studentId}
            name={s.name}
            studentId={s.studentId}
            major={s.major}
          />
        ))}
      </ProfileLayout>
      <Counter />
      <Toggle />
      <Mirror />
      <ColorBox />
      <TrafficLight />
      <LoginCheck />
    </div>
    */
	);
}
export default App;
