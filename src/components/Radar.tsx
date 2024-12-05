"use client";
import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";

interface PointRadarProps {
  posX: number;
  posY: number;
  children: any;
}

const PointRadar: React.FC<PointRadarProps> = ({ posX, posY, children }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalStyle, setModalStyle] = useState<{ left: number; top: number }>({ left: 0, top: 0 });
  const [barLeft, setBarLeft] = useState<number>(0);
  const pointRef = useRef<HTMLDivElement | null>(null);

  const toggleModal = () => {
    if (!showModal) {
      const point = pointRef.current?.getBoundingClientRect();
      if (point) {
        const windowWidth = window.innerWidth;
        let newModalLeft = point.right + 30;
        let newBarLeft = point.right;

        if (newModalLeft + 300 > windowWidth) {
          newModalLeft = point.left - 300 - 30;
          newBarLeft = point.left - 35;
        }

        setModalStyle({ left: newModalLeft, top: point.top + point.height / 2 });
        setBarLeft(newBarLeft);
      }
    }
    setShowModal(!showModal);
  };

  const Modal = () => (
    <div
      className="modal"
      style={{ left: `${modalStyle.left}px`, top: `${modalStyle.top}px`, transform: "translateY(-50%)" }}
    >
      {children}
    </div>
  );

  return (
    <div className="relative w-full h-full">
      <div
        ref={pointRef}
        className="point"
        style={{ left: `${posX}%`, top: `${posY}%` }}
        onClick={toggleModal}
      ></div>
      <div className="radar-effect" style={{ left: `${posX}%`, top: `${posY}%` }}></div>
      {showModal && (
        <div className="bar" style={{ left: `${barLeft}px`, top: `${posY}%`, width: `35px` }}></div>
      )}
      {showModal && ReactDOM.createPortal(<Modal />, document.body)}
    </div>
  );
};

export default PointRadar;
