import React from "react";
import { useState } from "react";

function SignupForm() {
	// 이메일
	const [email, setEmail] = useState("");
	const [emailMsg, setEmailMsg] = useState("");
	const [isEmailOk, setIsEmailOk] = useState(false);

	// 패스워드
	const [pw, setPw] = useState("");
	const [pw2, setPw2] = useState("");
	const [pwMsg, setPwMsg] = useState("");

	// 이용약관
	const [agree, setAgree] = useState(false);
	const [agreeMsg, setAgreeMsg] = useState("");

	const onChangeEmail = (e) => {
		setEmail(e.target.value);
		setIsEmailOk(false);
		setEmailMsg("");
	};

	const onCheckEmail = () => {
		const temp = email.trim();

		if (!temp.includes("@")) {
			setIsEmailOk(false);
			setEmailMsg(
				"이메일 형식이 올바르지 않습니다. (@를 포함해서 다시 작성하세요)",
			);
			return;
		}

		if (temp.toLowerCase() === "user@test.com") {
			setIsEmailOk(false);
			setEmailMsg("이미 사용 중인 이메일입니다.");
			return;
		}

		setIsEmailOk(true);
		setEmailMsg("사용할 수 있는 이메일입니다.");
	};

	// 비밀번호 일치 여부
	const onChangePw = (e) => {
		const next = e.target.value;
		setPw(next);

		if (pw2 && next !== pw2) setPwMsg("비밀번호가 일치하지 않습니다.");
		else setPwMsg("");
	};

	const onChangePw2 = (e) => {
		const next = e.target.value;
		setPw2(next);

		if (pw && pw !== next) setPwMsg("비밀번호가 일치하지 않습니다.");
		else setPwMsg("");
	};

	// 폼 유효성 검사
	const onSubmit = (e) => {
		e.preventDefault();

		setAgreeMsg("");

		if (!isEmailOk) {
			setEmailMsg(emailMsg || "중복 확인을 먼저 해주세요.");
			return;
		}

		if (!pw || !pw2) {
			setPwMsg("비밀번호와 비밀번호 확인을 입력해 주세요.");
			return;
		}
		if (pw !== pw2) {
			setPwMsg("비밀번호가 일치하지 않습니다.");
			return;
		}

		if (!agree) {
			setAgreeMsg("약관 동의는 필수입니다.");
			return;
		}

		alert("가입 성공");
	};

	return (
		<form className="card" onSubmit={onSubmit}>
			<h2 className="title">회원가입</h2>

			<div className="row">
				<input
					className="input"
					placeholder="test@example.com"
					value={email}
					onChange={onChangeEmail}
				/>
				<button type="button" className="btn" onClick={onCheckEmail}>
					중복 확인
				</button>
			</div>
			{emailMsg && (
				<p className={`msg ${isEmailOk ? "ok" : "err"}`}>{emailMsg}</p>
			)}

			<input
				className="input"
				type="password"
				placeholder="비밀번호"
				value={pw}
				onChange={onChangePw}
			/>

			<input
				className="input"
				type="password"
				placeholder="비밀번호 확인"
				value={pw2}
				onChange={onChangePw2}
			/>
			{pwMsg && <p className="msg err">{pwMsg}</p>}

			{/* 이용약관 */}
			<label className="check">
				<input
					type="checkbox"
					checked={agree}
					onChange={(e) => {
						setAgree(e.target.checked);
						setAgreeMsg("");
					}}
				/>
				이용약관에 동의합니다
			</label>
			{agreeMsg && <p className="msg err">{agreeMsg}</p>}

			<button className="btn primary" type="submit">
				가입하기
			</button>
		</form>
	);
}

export default SignupForm;
