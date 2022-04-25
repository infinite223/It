import './App.scss';
import { MainPage, Contact} from "./Page/index.ts"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
      <Router>  
        <Routes>      
          <Route path="/" element={ <MainPage/>} />            
        </Routes>     
       </Router>
  );
}

export default App;
