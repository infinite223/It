import { Navbar,Header,Helps,Image,Flexible, Services, Images, Footer} from "./../index.ts"

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
      <Footer/>
    </div>
  );
}

export default MainPage;
