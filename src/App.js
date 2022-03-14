import './App.scss';
import { Navbar,Header,Helps,Image,Flexible, Services, Images, Footer} from "./Page/index.ts"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Helps/>
      <Image/>
      <Flexible/>
      <Services/>
      <Images/>
      <Footer/>
    </div>
  );
}

export default App;
