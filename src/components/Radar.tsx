"use client"
import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

interface PointRadarProps {
  posX: number;
  posY: number;
}

const PointRadar: React.FC<PointRadarProps> = ({ posX, posY }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalStyle, setModalStyle] = useState<{ left: number; top: number }>({
    left: 0,
    top: 0,
  });

  const pointRef = useRef<HTMLDivElement | null>(null);

  const toggleModal = () => {
    if (!showModal) {
      const point = pointRef.current?.getBoundingClientRect();
      if (point) {
        setModalStyle({
          left: point.right + 30,
          top: point.top + point.height / 2,
        });
      }
    }
    setShowModal(!showModal);
  };

  const Modal = () => (
    <div
      className="modal"
      style={{
        left: `${modalStyle.left}px`,
        top: `${modalStyle.top}px`,
        transform: "translateY(-50%)",
      }}
    >
      <h2 className="text-lg font-bold">Modale</h2>
      <p className="mt-2">Je suis à ({posX}%, {posY}%).</p>
      <button
        className="modal-button mt-2"
        onClick={toggleModal}
      >
        Fermer
      </button>
    </div>
  );

  return (
    <div className="relative w-full h-full">
      <div
        ref={pointRef}
        className="point"
        style={{
          left: `${posX}%`,
          top: `${posY}%`,
        }}
        onClick={toggleModal}
      ></div>

      <div className="radar-effect" style={{ left: `${posX}%`, top: `${posY}%` }}></div>

      {showModal && (
        <div
          className="bar"
          style={{
            left: `calc(${posX}% + 8px)`,
            top: `${posY}%`,
          }}
        ></div>
      )}

      {showModal &&
        ReactDOM.createPortal(
          <Modal />,
          document.body
        )}
    </div>
  );
};

export default PointRadar;
