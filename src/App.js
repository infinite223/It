import './App.scss';
import {Navbar,Header,Helps,Image,Flexible, Footer} from "./Page/index.ts"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Helps/>
      <Image/>
      <Flexible/>
    </div>
  );
}

export default App;
