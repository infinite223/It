import './App.scss';
import { MainPage, Contact} from "./Page/index.ts"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>  
        <Routes>      
          <Route path="/" element={ <MainPage/>} />   
          <Route path="/Contact" element={<Contact/>}/>           
        </Routes>     
       </Router>
    </div>
  );
}

export default App;
