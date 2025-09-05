// Modal.js
import React, {type ReactNode } from "react";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(24, 21, 21, 0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000, // Ensure modal is on top
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
        style={{
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 1)",
          background:"rgba(33, 69, 80, 1)",
          position: "relative",
        }}
      >
        {children}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: 'rgba(66, 35, 35, 1)',
            border: "none",
            fontSize: "1.2em",
            cursor: "pointer",
          }}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;