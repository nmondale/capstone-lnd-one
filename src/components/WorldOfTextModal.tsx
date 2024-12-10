import React from "react";

interface WorldOfTextModalProps {
  worldUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

const WorldOfTextModal: React.FC<WorldOfTextModalProps> = ({
  worldUrl,
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
          className="relative max-w-[90%] w-full flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-[80vh] w-full overflow-hidden rounded-xl border border-brightest">
            <iframe
              src={worldUrl}
              className="w-full h-full"
              style={{ pointerEvents: "auto" }}
            />
          </div>

          <div className="mt-4 flex items-center gap-4">
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-full font-bold border border-brightest text-xl hover:bg-brightest hover:text-main"
            >
              Close Discussion Space
            </button>
            <span className="text-xl text-brightest italic">
              Type Whatever, Wherever.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorldOfTextModal;
