import './App.css';
import Welcome from './components/Welcome.js';
import Modals from './components/Modals.js';
import Header from "./components/Header";
import Boxes from "./components/Boxes"
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <div className="container">    
      <ThemeProvider>
        <div className={`information`}>
          <Header/>
          <Welcome/>
          <Modals />
        </div>
        <Boxes />
      </ThemeProvider>
      
    </div>
    );
}

export default App;