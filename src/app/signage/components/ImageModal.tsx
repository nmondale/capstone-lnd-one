import React from "react";

interface ImageModalProps {
  imageUrl: string;
  altText: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  imageUrl,
  altText,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Semi-transparent backdrop */}
      <div
        className="fixed inset-0 z-40"
        style={{
          backgroundColor: "var(--main-color)",
          opacity: 0.85,
        }}
        onClick={onClose}
      />

      {/* Modal content */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div
          className="relative max-w-4xl w-full flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full overflow-hidden rounded-lg border border-alt bg-main">
            <img
              src={imageUrl}
              alt={altText}
              className="w-full h-auto object-contain"
            />
          </div>

          <button
            onClick={onClose}
            className="mt-4 px-6 py-2 rounded-full border border-alt text-sm hover:bg-alt hover:text-main transition-colors"
          >
            Close
          </button>

          <p className="mt-2 text-sm text-center">{altText}</p>
        </div>
      </div>
    </>
  );
};

export default ImageModal;
