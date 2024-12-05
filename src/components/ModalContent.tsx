"use client";

interface ModalContentProps {
  title: string;
  content: string;
}

const ModalContent: React.FC<ModalContentProps> = ({ title, content }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-blue-300 mb-2">{title}</h2>
      <p className="text-sm text-gray-100">{content}</p>
    </div>
  );
};

export default ModalContent;
