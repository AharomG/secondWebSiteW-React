import linkedin from "./assets/linkdin.png"
import Octocat from './assets/Octocat.png';
import cv from "./assets/CV_icon.png"
import './App.css';
import Welcome from './components/Welcome.js';
import Modal from './components/Modal.js';
import { useFetch } from './hooks/useFetch.js';
import { useModal } from "./hooks/useModal.js"
import Box from "./components/Box.js"

function App() {
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

  console.log(info);

  return (
    <div className="container">
      <div className="information">
        <Welcome/>
        <div className='modals' >
          {!error ? (
            info.map((el) => {
              return (<span className="clickModal" onClick={() => openModal(el)} key={el.id}>
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
      </div>
      <div className='boxes'>
        <Box link="https://github.com/AharomG" name="GitHub" imgURL={Octocat} varStyle="1"/>
        <Box link="https://www.linkedin.com/in/aharom-gonzalez-anaure/" name="LinkedIn" imgURL={linkedin} varStyle="2"/>
        <Box link="https://drive.google.com/file/d/1sjFKlQaiXjihU1mOBKqfWAg3-33xPJjQ/view?usp=sharing" name="Resumee" imgURL={cv} varStyle="3"/>
      </div>
    </div>
    );
}

export default App;