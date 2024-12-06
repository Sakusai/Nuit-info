"use client";
import React, { useState } from "react";
import useQuizStore from "~/app/state/useQuizStore";
interface TrueOrFalseProps {
  idQuestion: number;
}
const TrueOfFalse = ({ idQuestion }: TrueOrFalseProps) => {
  const [feedback, setFeedback] = useState<string | null>(null);
  const { getQuestionById, setCorrectAnswer } = useQuizStore();
  const question = getQuestionById(idQuestion);
  const answered = (a: string) => {
    if (a === question?.answer) {
      setFeedback("Bien joué ! C'est une bonne réponse !");
      setCorrectAnswer(idQuestion, true);
    } else {
      setFeedback("Mauvaise réponse.");
      setCorrectAnswer(idQuestion, false);
    }
  };

  return (
    <div className="mx-auto max-w-lg p-4">
      <p className="mb-4 text-lg">{question?.question}</p>
      <button className="btn btn-success" onClick={() => answered("true")}>
        Vrai
      </button>
      <button className="btn btn-error" onClick={() => answered("false")}>
        Faux
      </button>
      {feedback && (
        <p
          className={`mt-4 text-xl ${feedback.includes("bonne") ? "text-green-500" : "text-red-500"}`}
        >
          {feedback}
        </p>
      )}
    </div>
  );
};

export default TrueOfFalse;
