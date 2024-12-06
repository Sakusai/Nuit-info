"use client";

import React, { useState, useRef } from "react";

interface PointRadarProps {
  posX: number;
  posY: number;
  children: React.ReactNode;
}

const PointRadar: React.FC<PointRadarProps> = ({ posX, posY, children }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalStyle, setModalStyle] = useState<{ left: number; top: number }>({ left: 0, top: 0 });
  const pointRef = useRef<HTMLDivElement | null>(null);

  const toggleModal = () => {
    if (!showModal) {
      const point = pointRef.current?.getBoundingClientRect();
      const container = pointRef.current?.offsetParent as HTMLElement;

      if (point && container) {
        const containerRect = container.getBoundingClientRect();
        let newModalLeft = point.right - containerRect.left + 20; // Position relative au conteneur
        let newModalTop = point.top - containerRect.top;

        // Gérer les dépassements à droite et ajuster la position du modal
        if (newModalLeft + 300 > containerRect.width) {
          newModalLeft = point.left - containerRect.left - 300 - 20;
        }

        setModalStyle({
          left: newModalLeft,
          top: newModalTop,
        });
      }
    }
    setShowModal(!showModal);
  };

  return (
      <div className="relative w-full h-full">
        {/* Point cliquable */}
        <div
            ref={pointRef}
            className="point"
            style={{ left: `${posX}%`, top: `${posY}%` }}
            onClick={toggleModal}
        ></div>

        {/* Effet visuel radar */}
        <div
            className="radar-modal-effect"
            style={{
              left: `${posX}%`,
              top: `${posY}%`,
              transform: "translate(-50%, -50%)",
            }}
        ></div>

        {/* Modal affiché */}
        {showModal && (
            <div
                className="radar-modal"
                style={{
                  left: `${modalStyle.left}px`,
                  top: `${modalStyle.top}px`,
                  position: "absolute",
                  transform: "translateY(-50%)",
                }}
            >
              {children}
            </div>
        )}
      </div>
  );
};

export default PointRadar;
