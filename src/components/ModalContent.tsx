/* eslint-disable */
"use client";

import { ReactElement } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */

interface ModalContentProps {
  title: string;
  content: any;
}

const ModalContent: React.FC<ModalContentProps> = ({ title, content }) => {
  return (
    <div>
      <h2 className="mb-2 text-xl font-semibold text-blue-300">{title}</h2>
      <div className="text-sm text-gray-100">{content}</div>
    </div>
  );
};

export default ModalContent;
