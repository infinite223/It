import './App.scss';
import { Navbar,Header,Helps,Image,Flexible, Services, Footer} from "./Page/index.ts"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Helps/>
      <Image/>
      <Flexible/>
      <Services/>
    </div>
  );
}

export default App;
