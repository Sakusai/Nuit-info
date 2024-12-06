"use client";

import React, { useState } from "react";
import useQuizStore from "~/app/state/useQuizStore";
import ModalContent from "~/components/ModalContent";
import Radar from "~/components/Radar";

interface Props {
  questionId: number;
}

const QCMModal = (props: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>(undefined);

  const { getQuestionById, setCorrectAnswer } = useQuizStore();

  const question = getQuestionById(props.questionId);

  const setSelected = (r: string) => {
    setIsCorrect(undefined);
    setSelectedAnswer(r);
  };

  const validResponse = () => {
    if (question) {
      if (selectedAnswer === question?.answer) {
        setIsCorrect(true);
        setCorrectAnswer(question.id, true);
      } else {
        setIsCorrect(false);
        setCorrectAnswer(question.id, false);
      }
    }
  };

  if (question) {
    const content = (
      <>
        <h2 className="pb-5">{question?.question}</h2>
        <ul>
          {question.multipleAnswers?.map((reponse, index) => (
            <li key={index}>
              <input
                type="radio"
                name="qcm"
                value={reponse}
                onClick={() => setSelected(reponse)}
                checked={reponse === selectedAnswer}
              />
              <label className="p-1">{reponse}</label>
            </li>
          ))}
        </ul>
        <button className="rounded-sm bg-blue-300 p-1" onClick={validResponse}>
          Valider
        </button>
        {isCorrect ? (
          <p>
            La réponse est en effet : {question.answer}
            <br />
            {question.explanation}
          </p>
        ) : isCorrect == false ? (
          <p>Mauvaise réponse !</p>
        ) : (
          ""
        )}
      </>
    );
    return (
      <Radar posX={50} posY={50}>
        <ModalContent title="QCM" content={content} />
      </Radar>
    );
  }
  return "";
};

export default QCMModal;
