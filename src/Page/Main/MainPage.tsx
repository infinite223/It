import { Navbar,Header,Helps,Image,Flexible, Services, Images, About, Footer} from "./../index.ts"

function MainPage() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Helps/>
      <Image/>
      <Flexible/>
      <Services/>
      <Images/>
      <About/>
      <Footer/>
    </div>
  );
}

export default MainPage;
