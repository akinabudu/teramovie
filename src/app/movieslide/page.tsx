'use client'
import React, { useEffect, useRef } from "react";

type ModalPageProps = {
  onClose: () => void;
};

const ModalPage: React.FC<ModalPageProps> = ({ onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="modal">
      <div ref={modalRef} className="modalContent">
      {/* <div className="slide"> */}
        <button onClick={onClose}>Close</button>
       <div className="Poster">1</div>
       <div className="title">2</div>
       <div className="description">3</div>
       <div className="button">Watch</div>
      
     {/* </div> */}
      </div>
    </div>
  );
};

export default ModalPage;
