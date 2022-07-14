import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import './Modal.css';
import './Theme.css';

const Modal = ({name,children,closeModal,isOpen}) => {
    const handleClickInsideModal = (e) => e.stopPropagation();
    const {theme} = useContext(ThemeContext);

    return(
        <article className={`modal ${isOpen && "isOpen"}`}>
            <div className={`modalContainer ${theme}`} onClick={handleClickInsideModal}>
                <button className="modalClose" onClick={closeModal}>X</button>
                <h1>{name}</h1>
                {children}
            </div>
        </article>
    );
}

export default Modal;