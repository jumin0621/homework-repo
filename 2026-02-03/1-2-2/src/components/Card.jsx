import React from "react";

function Card() {
	const name = "신주민";
	const birthYear = 1986;
	const nowYear = new Date().getFullYear();
	const hobbies = ["코딩..?", "영화감상", "게임"];
	const mbti = "ISTJ";

	return (
		<main>
			<div className="card">
				<h2>자기소개 (약식)</h2>
				<p>이름 : {name}</p>
				<p>나이 : topSecret</p>
				{/* <p>나이 : {nowYear - birthYear}</p>
				<p>취미 : {hobbies.join(", ")}</p> */}
				<p>
					취미 :{" "}
					<span className="chips">
						{hobbies.map((h) => (
							<span className="chip" key={h}>
								{h}
							</span>
						))}
					</span>
				</p>
				<p>MBTI : {mbti}</p>
			</div>
		</main>
	);
}

export default Card;
