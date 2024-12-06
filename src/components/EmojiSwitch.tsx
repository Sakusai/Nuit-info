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
    const allTextElements = document.querySelectorAll<HTMLElement>('*');
    
    allTextElements.forEach((element) => {
      if (element.children.length === 0 && element.innerText.trim() !== "") {
        if (!element.hasAttribute('data-original-text')) {
          element.setAttribute('data-original-text', element.innerText);
        }

        if (isEmojiFont) {
          element.innerText = element.getAttribute('data-original-text') ?? "";
        } else {
          const originalText = element.getAttribute('data-original-text') ?? "";
          let newText = '';

          for (const char of originalText) {
            newText += charToEmoji(char);
          }
          element.innerText = newText;
        }
      }
    });

    setIsEmojiFont(!isEmojiFont);
  };

  return (
    <div>
      <div style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
        Test zizi caca
      </div>
      <button
        onClick={toggleFont}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#3b82f6",
          color: "white",
          borderRadius: "0.375rem",
          cursor: "pointer",
          transition: "background-color 0.2s",
        }}
      >
        {isEmojiFont ? "Revenir à la police normale" : "Activer le mode Emoji"}
      </button>
    </div>
  );
}

export default EmojiSwitch;
