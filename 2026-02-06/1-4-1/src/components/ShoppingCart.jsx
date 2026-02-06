import React from "react";
import { useState } from "react";

function ShoppingCart() {
	const PRODUCTS = [
		{ id: 1, name: "노트북", price: 1200000 },
		{ id: 2, name: "모니터", price: 400000 },
		{ id: 3, name: "마우스", price: 30000 },
	];

	const [items, setItems] = useState([]);

	const total = items.reduce((sum, item) => sum + item.price, 0);

	const handleAdd = (product) => {
		setItems((prev) => [...prev, product]);
	};

	const handleDel = (id) => {
		setItems((prev) => prev.filter((item) => item.id !== id));
	};
	return (
		<div className="ui-card">
			<div className="btn-row">
				{PRODUCTS.map((p) => (
					<button key={p.id} className="pill" onClick={() => handleAdd(p)}>
						{p.name} ({Math.round(p.price / 10000)}만원) +
					</button>
				))}
			</div>

			<div className="cart-wrap">
				<div className="cart-title">장바구니 목록</div>

				<div className="cart-box">
					{items.length === 0 ? (
						<div className="empty">장바구니가 비어있습니다.</div>
					) : (
						items.map((item, idx) => (
							<div className="cart-item" key={`${item.id}-${idx}`}>
								<span className="item-name">{item.name}</span>
								<button className="remove" onClick={() => handleDel(item.id)}>
									삭제
								</button>
							</div>
						))
					)}
				</div>

				<div className="total">
					Total: <span>{Math.round(total / 10000)}만원</span>
				</div>
			</div>
		</div>
	);
}

export default ShoppingCart;
