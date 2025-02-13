import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="m-auto relative z-50 min-h-[280px] max-w-[40%] bg-slate-100 p-4">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="text-2xl cursor-pointer" />
            </div>
            {
                children
            }
          </div>
          <div
            onClick={onClose}
            className="absolute top-0 z-40 h-screen w-screen backdrop-blur"
          />
        </>
      )}
    </>
  , document.getElementById('modal-root'));
};

export default Modal;
