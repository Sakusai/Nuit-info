"use client";
import React, { useState } from "react";

function EmojiSwitch() {
  const [isEmojiFont, setIsEmojiFont] = useState(false);

  // Fonction pour transformer chaque caractère en emoji
  const charToEmoji = (char: string) => {
    const emojis = [
      '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
      '🙂', '🙃', '😉', '😍', '😘', '😋', '😜', '😝', '😛', '🤪',
      '😎', '🤩', '🥳', '🤗', '🤔', '🤨', '😏', '😶', '🙄', '😑'
    ];
    return emojis[Math.floor(Math.random() * emojis.length)];
  };

  const toggleFont = () => {
    // Sélectionner tous les éléments de texte dans l'application
    const allTextElements = document.querySelectorAll('*');
    
    allTextElements.forEach((element: any) => {
      if (element.children.length === 0 && element.innerText.trim() !== "") {
        // Si l'élément contient du texte et pas d'enfants

        // Vérifier si l'élément a déjà un texte sauvegardé
        if (!element.hasAttribute('data-original-text')) {
          // Sauvegarder le texte original dans un attribut data
          element.setAttribute('data-original-text', element.innerText);
        }

        if (isEmojiFont) {
          // Revenir au texte original
          element.innerText = element.getAttribute('data-original-text');
        } else {
          // Transformer le texte en emojis
          let originalText = element.getAttribute('data-original-text');
          let newText = '';

          // Appliquer les emojis
          for (let i = 0; i < originalText.length; i++) {
            newText += charToEmoji(originalText[i]);
          }
          element.innerText = newText;
        }
      }
    });

    // Alterner l'état
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
