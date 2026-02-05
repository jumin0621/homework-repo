import { useState } from "react";

function ProfileCard({ name, role, loves }) {
	const [isFlip, setIsFlip] = useState(false);
	const [likes, setLikes] = useState(loves);

	const handleFlip = () => {
		setIsFlip((prev) => !prev);
	};

	const handleLike = (e) => {
		e.stopPropagation();
		setLikes((prev) => prev + 1);
	};

	return (
		<div className="card-wrap">
			<p className="status">카드뒤집기 컴포넌트</p>

			<div
				className="card"
				role="button"
				onClick={handleFlip}
				aria-pressed={isFlip}
				aria-label="프로필 카드 뒤집기"
			>
				<div className={`card-inner ${isFlip ? "is-flipped" : ""}`}>
					{/* 앞면 */}
					<section className="card-face card-front">
						<div className="avatar" aria-hidden="true">
							<span className="avatar-dot" />
						</div>

						<div className="profile">
							<div className="name">{name}</div>
							<div className="role">{role}</div>
						</div>

						{/* 좋아요 */}
						<button
							type="button"
							className="like"
							onClick={handleLike}
							aria-label="좋아요"
						>
							<span className="heart" aria-hidden="true">
								♥
							</span>
							<span className="like-count">{likes}</span>
						</button>
					</section>

					{/* 뒷면 */}
					<section className="card-face card-back">
						<div className="back-title">Details</div>
						<ul className="back-list">
							<li>조선대학교 컴퓨터공학과 졸업</li>
							<li>Java 개발 경험이 있는 FE 지망생</li>
							<li>ISTJ</li>
						</ul>

						<div className="hint">카드를 클릭하면 다시 뒤집힘</div>
					</section>
				</div>
			</div>
		</div>
	);
}

export default ProfileCard;
