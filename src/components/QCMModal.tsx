"use client";

import React, { useState } from "react";
import useQuizStore from "~/app/state/useQuizStore";
import ModalContent from "~/components/ModalContent";
import Radar from "~/components/Radar";

interface Props {
  questionId: number;
  posX: number;
  posY: number;
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
                value={reponse.letter}
                onClick={() => setSelected(reponse.letter)}
                checked={reponse.letter === selectedAnswer}
              />
              <label className="p-1">{reponse.entire}</label>
            </li>
          ))}
        </ul>
        <div className="pt-5">
          <button className="btn btn-primary w-full" onClick={validResponse}>
            Valider
          </button>
        </div>
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
      <Radar posX={props.posX} posY={props.posY}>
        <ModalContent title="QCM" content={content} />
      </Radar>
    );
  }
  return "";
};

export default QCMModal;
