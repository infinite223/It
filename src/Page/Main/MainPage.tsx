import { Navbar,Header,Helps,Image,Flexible, Services, Images, About, Footer} from "./../index.ts"

export const MainPage = () => {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Helps/>
      <Image/>
      <Flexible/>
      <About/>
      <Services/>
     {// <Images/>
     }
      <Footer/>
    </div>
  );
}

