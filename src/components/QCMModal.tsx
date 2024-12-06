"use client";

import React, { useState } from "react";
import useQuizStore from "~/app/state/useQuizStore";
import ModalContent from "~/components/ModalContent";
import Radar from "~/components/Radar";

interface Props {
  questionId: number;
  question: string;
  listReponse: string[];
  reponse: string;
  explenation: string;
}

const QCMModal = (props: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>(undefined);

  const { setCorrectAnswer } = useQuizStore();

  const setSelected = (r: string) => {
    setIsCorrect(undefined);
    setSelectedAnswer(r);
  };

  const validResponse = () => {
    if (selectedAnswer === props.reponse) {
      setIsCorrect(true);
      setCorrectAnswer(props.questionId, true);
    } else {
      setIsCorrect(false);
      setCorrectAnswer(props.questionId, false);
    }
  };

  const content = (
    <>
      <h2 className="pb-5">{props.question}</h2>
      <ul>
        {props.listReponse.map((reponse, index) => (
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
          La réponse est en effet : {props.reponse}
          <br />
          {props.explenation}
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
};

export default QCMModal;
