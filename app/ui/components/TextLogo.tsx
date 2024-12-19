"use client";

import { useState, useEffect } from "react";

export default function TextLogo(){
	const [hovering, setHovering] = useState(false);
	const [textM, setTextM] = useState("M");
	const [textP, setTextP] = useState("P");

	const getRandomChar = () => {
		const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		return characters.charAt(Math.floor(Math.random() * characters.length));
	};

	useEffect(() => {
		if (hovering) {
			const intervalIdM = setInterval(() => {
				setTextM(getRandomChar());
			}, 30); 

			const intervalIdP = setInterval(() => {
				setTextP(getRandomChar());
			}, 30); 

			const timeoutIdM = setTimeout(() => {
				clearInterval(intervalIdM);
				setTextM("M");
			}, 350);

			const timeoutIdP = setTimeout(() => {
				clearInterval(intervalIdP);
				setTextP("P");
			}, 600);

			return () => {
				clearInterval(intervalIdM);
				clearInterval(intervalIdP);
				clearTimeout(timeoutIdM);
				clearTimeout(timeoutIdP);
			};
		}
	}, [hovering]);

	return (
			<div
				className="text-2xl font-bold cursor-pointer select-none"
				onMouseEnter={() => setHovering(true)}
				onMouseLeave={() => {
					setHovering(false);
					setTextM("M");
					setTextP("P");
				}}
			>
				<span>B</span>
				<span className="inline-block transition-all duration-100">
					{textM}
				</span>
				<span className="inline-block transition-all duration-100">
					{textP}
				</span>
			</div>
	);
};


