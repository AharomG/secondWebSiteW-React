import React, { useContext } from "react";
import Modal from "./Modal";
import './Modal.css';
import './Modals.css';
import { useFetch } from '../hooks/useFetch.js';
import { useModal } from "../hooks/useModal.js"
import ThemeContext from "../context/ThemeContext";

const Modals = () => {
  const {theme} = useContext(ThemeContext);
  const {info, error} = useFetch("https://api.github.com/users/aharomg/repos");
  const [isOpenFirstWebSite, openModalFirstWebSite, closeModalFirstWebSite] = useModal(false);
  const [isOpenProjectCrypto, openModalProjectCrypto, closeModalProjectCrypto] = useModal(false);
  const [isOpensecondWebSiteWReact, openModalsecondWebSiteWReact, closeModalsecondWebSiteWReact] = useModal(false);
  const [isOpenSPA_Website, openModalSPA_Website, closeModalSPA_Website] = useModal(false);
  const [isOpenTetris, openModalTetris, closeModalTetris] = useModal(false);

  function openModal(el){
    if(el.name === "FirstWebSite")
      return openModalFirstWebSite();
    else if(el.name === "ProjectCrypto")
      return openModalProjectCrypto();
    else if(el.name === "secondWebSiteW-React")
      return openModalsecondWebSiteWReact();
    else if(el.name === "SPA_Website")
      return openModalSPA_Website();
    else if(el.name === "Tetris")
      return openModalTetris();
  }

  function closeModal(el){
    if(el.name === "FirstWebSite")
      return closeModalFirstWebSite();
    else if(el.name === "ProjectCrypto")
      return closeModalProjectCrypto();
    else if(el.name === "secondWebSiteW-React")
      return closeModalsecondWebSiteWReact();
    else if(el.name === "SPA_Website")
      return closeModalSPA_Website();
    else if(el.name === "Tetris")
      return closeModalTetris();
  }

  function handleModalState(el){
    if(el.name === "FirstWebSite")
      return isOpenFirstWebSite;
    else if(el.name === "ProjectCrypto")
      return isOpenProjectCrypto;
    else if(el.name === "secondWebSiteW-React")
      return isOpensecondWebSiteWReact;
    else if(el.name === "SPA_Website")
      return isOpenSPA_Website;
    else if(el.name === "Tetris")
      return isOpenTetris;
  }

  return(
    <div className={`modals ${theme}`}>
        {!error ? (
            info.map((el) => {
            return (<span className={`clickModal ${theme}`} onClick={() => openModal(el)} key={el.id}>
            <p>{el.name}</p>
            <Modal isOpen={handleModalState(el)} name={el.name} closeModal={() => closeModal(el)}>
            <img src="http://www.placeimg.com/400/100/tech" alt={el.name}/>
            <p>{el.description}<br/>
            <a 
                className='modalsLink'
                href={el.html_url}
                target="_blank"
                rel="noopener noreferrer"
            >
                Link to the project github.
            </a>
            </p>
            </Modal>
            </span>)
        })) : (
        <div className='error'>
            <p>There has been an error with github API, error code: {error.status}</p>
        </div>
        ) 
        }
    </div>
  );
}

export default Modals;