"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";

const REFERENCE_TEXT = "The quick brown fox jumps over the lazy dog.";

export default function TypingHighlight() {
	const [userInput, setUserInput] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const input = e.target.value;
		if (input.length <= REFERENCE_TEXT.length) {
			setUserInput(input);

			if (input === REFERENCE_TEXT) {
				setUserInput("");
			}
		}
	};

	const renderReferenceText = () => {
		return REFERENCE_TEXT.split("").map((char, index) => {
			let color = "text-gray-500"; // Default color
			if (index < userInput.length) {
				color =
					userInput[index] === char ? "text-white" : "text-red-500";
			}
			return (
				<span key={index} className={`text-sm ${color}`}>
					{char}
				</span>
			);
		});
	};

	return (
      <div className="w-full mt-4 max-w-2xl rounded-lg shadow-lg p-7 border border-zinc-700 relative">
        <div className="overflow-hidden pr-24">
          <p className="text-sm  break-words">
        {renderReferenceText()}
          </p>
        </div>
        <input
          ref={inputRef}
          type="text"
          value={userInput}
          onChange={handleInputChange}
          className="w-full py-5 px-3 mt-2 text-sm  bg-zinc-800 text-white rounded border-2 border-zinc-500 border-zinc-350 focus:outline-none relative"
          placeholder="Start typing here"
          aria-label="Type the sentence"
          maxLength={REFERENCE_TEXT.length}
        />
        <Image src="/bongoCat.png" width={90} height={90} alt="Bongo Cat" className="absolute top-7 right-8 sm:top-3 sm:right-8 -z-10 mt-2 mr-2 -rotate-12"/>
      </div>
	);
}
