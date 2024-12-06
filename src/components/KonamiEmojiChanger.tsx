/* eslint-disable */
"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import MovaiButton from "./MovaiButton"; // Adjust the path as necessary


const KonamiEmojiChanger: React.FC = () => {
  const [isEmojiFont, setIsEmojiFont] = useState(false);
  const modalRef = useRef<HTMLDialogElement>(null);

  // Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];
  const [inputSequence, setInputSequence] = useState<string[]>([]);

  const charToEmoji = (_char: string) => {
    const emojis = [
      "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇",
      "🙂", "🙃", "😉", "😍", "😘", "😋", "😜", "😝", "😛", "🤪",
      "😎", "🤩", "🥳", "🤗", "🤔", "🤨", "😏", "😶", "🙄", "😑",
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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setInputSequence((prev) => {
        const newSequence = [...prev, event.key].slice(-konamiCode.length);

        if (
          JSON.stringify(newSequence) === JSON.stringify(konamiCode) &&
          modalRef.current
        ) {
          modalRef.current.showModal();
          toggleFont();
        }

        return newSequence;
      });
    };

    document.body.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.removeEventListener("keydown", handleKeyDown);
    };
  }, [isEmojiFont]);

  return (
    <>
      <dialog className="modal" ref={modalRef}>
        <div className="modal-box">
          <h3 className="text-lg font-bold">Konami Code Détecté 🎉</h3>
          <p className="py-4">
            Maintenant, appelez Hugo pour décrypter cette page !
            <MovaiButton />
          </p>
          <form method="dialog" className="modal-backdrop">
            <button>Fermer</button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default KonamiEmojiChanger;
