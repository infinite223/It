import { Navbar,Header,Helps,Image,Flexible, Services, Images, About, Footer} from "./../index.ts"
import { WindowPp } from '../../Components/Windos/WindowPp.tsx';
import { useState, useEffect } from "react";
import Cookies from 'js-cookie'
export const MainPage = () => {
  const [toggleWindowPp, setToggleWindowPp] = useState(false);
  const [accept, setAccept] = useState(false)
  const readCookie = () =>{
    const user = Cookies.get("user")
    if(user){
      setAccept(true)
      setToggleWindowPp(false)
    }
    else {
      setToggleWindowPp(true)
    }
  }

  useEffect(()=>{
   readCookie() 
  },[])
  
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Helps/>
      <Image/>
      <Flexible/>
      <About/>
      <Services/>
      {toggleWindowPp&&<WindowPp setToggleWindowPp={setToggleWindowPp} accept={accept} setAccept={setAccept}/>}
      <Footer setToggleWindowPp={setToggleWindowPp} />
    </div>
  );
}

