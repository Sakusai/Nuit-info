"use client";
import React, { useState } from "react";

function EmojiSwitch() {
  const [isEmojiFont, setIsEmojiFont] = useState(false);

  const charToEmoji = (_char: string) => {
    const emojis = [
      '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
      '🙂', '🙃', '😉', '😍', '😘', '😋', '😜', '😝', '😛', '🤪',
      '😎', '🤩', '🥳', '🤗', '🤔', '🤨', '😏', '😶', '🙄', '😑'
    ];
    return emojis[Math.floor(Math.random() * emojis.length)];
  };

  const toggleFont = () => {
    const allTextElements = document.querySelectorAll<HTMLElement>("*");

    allTextElements.forEach((element) => {
      if (
        element.children.length === 0 &&
        typeof element.innerText === "string" &&
        element.innerText.trim() !== ""
      ) {
        const originalText = element.getAttribute("data-original-text");

        if (isEmojiFont) {
          if (originalText !== null) {
            element.innerText = originalText;
          }
        } else {
          if (!originalText) {
            element.setAttribute("data-original-text", element.innerText);
          }

          const currentText = element.getAttribute("data-original-text") ?? "";
          let newText = "";

          for (const char of currentText) {
            if (/\S/.test(char)) {
              newText += charToEmoji(char);
            } else {
              newText += char;
            }
          }

          element.innerText = newText;
        }
      }
    });

    setIsEmojiFont(!isEmojiFont);
  };

  return (
      <button
        onClick={toggleFont}
      >
        {isEmojiFont ? "Revenir à la police normale" : "🫡"}
      </button>
  );
}

export default EmojiSwitch;
