import React, { useState } from "react";

interface PopupProps {
  title: string;
  description: string;
  position: {
    top: number;
    left: number;
  };
  onDismiss: () => void;
}

const Popup: React.FC<PopupProps> = ({
  title,
  description,
  position,
  onDismiss,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(onDismiss, 300);
  };

  return (
    <div
      className={`absolute transition-opacity duration-300 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } group cursor-pointer`}
      style={{
        top: `${position.top}%`,
        left: `${position.left}%`,
        transform: "translate(-50%, -50%)",
        zIndex: 50,
      }}
      onClick={handleDismiss}
    >
      {/* Signpost pole */}
      <div
        className="absolute bg-alt w-[10%] -translate-x-1/2 left-1/2 
                   transition-colors duration-300 ease-in-out
                   group-hover:bg-main border border-alt"
        style={{
          top: "-1rem",
          height: "100vh",
          zIndex: 40,
        }}
      />
      {/* Popup content */}
      <div
        className="relative bg-main border border-alt rounded-xl p-4 shadow-lg 
                   transition-colors duration-300 ease-in-out
                   group-hover:bg-alt group-hover:text-main"
        style={{
          width: "300px",
          maxWidth: "90vw",
          zIndex: 50,
        }}
      >
        <h3 className="font-bold text-2xl mb-2">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Popup;
