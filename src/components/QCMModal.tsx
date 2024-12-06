"use client";

import React from "react";
import ModalContent from "~/components/ModalContent";
import Radar from "~/components/Radar";

interface Props {
  question: string;
  listReponse: string[];
  reponse: string;
}

const QCMModal = (props: Props) => {
  const content = (
    <>
      <h2 className="pb-5">{props.question}</h2>
      <form>
        <ul>
          {props.listReponse.map((reponse, index) => (
            <li key={index}>
              <input type="radio" name="qcm" value={reponse} />
              <label className="p-1">{reponse}</label>
            </li>
          ))}
        </ul>
        <input
          type="submit"
          value="Valider"
          className="rounded-sm bg-blue-300 p-1"
        />
      </form>
      <p>La réponse est : {props.reponse}</p>
    </>
  );
  return (
    <Radar posX={50} posY={50}>
      <ModalContent title="QCM" content={content} />
    </Radar>
  );
};

export default QCMModal;
