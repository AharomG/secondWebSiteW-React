import React from "react";
import './Modal.css';

const Modal = ({name,children,closeModal,isOpen}) => {
    const handleClickInsideModal = (e) => e.stopPropagation();

    return(
        <article className={`modal ${isOpen && "isOpen"}`}>
            <div className="modalContainer" onClick={handleClickInsideModal}>
                <button className="modalClose" onClick={closeModal}>X</button>
                <h1>{name}</h1>
                {children}
            </div>
        </article>
    );
}

export default Modal;