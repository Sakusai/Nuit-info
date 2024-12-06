"use client";
import React, { useState } from 'react';
import useQuizStore from '~/app/state/useQuizStore';

interface Blank {
  id: string;
  answer: string;
}

interface TextHoleQuestionProps {
  questionId: number; // Identifiant unique de la question
  questionText: string | string[];
  blanks: Blank[];
}

const TextHoleQuestion: React.FC<TextHoleQuestionProps> = ({ questionId, questionText, blanks }) => {
  const [userAnswers, setUserAnswers] = useState<{ [key: string]: string }>({});
  const [feedback, setFeedback] = useState<string | null>(null);

  const { setCorrectAnswer } = useQuizStore();

  const handleInputChange = (id: string, value: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const checkAnswers = () => {
    let correct = true;
    blanks.forEach((blank) => {
      const userAnswer = userAnswers[blank.id]?.toLowerCase();
      if (userAnswer !== blank.answer.toLowerCase()) {
        correct = false;
      }
    });

    setFeedback(correct ? "Bien joué ! C'est une bonne réponse !" : "Les réponses ne sont pas toutes correctes.");
    setCorrectAnswer(questionId, correct);
  };

  const getFormattedQuestionText = () => {
    const textWithBlanks = [];
    let lastIndex = 0;

    blanks.forEach((blank, index) => {
      const startIdx = questionText.indexOf(`{${blank.id}}`, lastIndex);
      const beforeBlank = questionText.slice(lastIndex, startIdx);

      textWithBlanks.push(beforeBlank);

      textWithBlanks.push(
        <input
          key={blank.id}
          type="text"
          id={blank.id}
          className="input input-sm"
          value={userAnswers[blank.id] || ''}
          onChange={(e) => handleInputChange(blank.id, e.target.value)}
        />
      );

      lastIndex = startIdx + blank.id.length + 3;
    });

    textWithBlanks.push(questionText.slice(lastIndex));

    return textWithBlanks;
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <p className="text-lg mb-4">Complétez les trous suivants :</p>
      <div className="question-text mb-4">
        {getFormattedQuestionText()}
      </div>
      <div className="mt-4">
        <button
          onClick={checkAnswers}
          className="btn btn-primary"
        >
          Valider les réponses
        </button>
      </div>
      {feedback && (
        <p className={`mt-4 text-xl ${feedback.includes('bonne') ? 'text-green-500' : 'text-red-500'}`}>
          {feedback}
        </p>
      )}
    </div>
  );
};

export default TextHoleQuestion;
