import { Navbar,Header,Helps,Image,Flexible, Services, Images, About, Footer} from "./../index.ts"
import { WindowPp } from '../../Components/Windos/WindowPp.tsx';
import { WindowInfo } from "../../Components/Windos/WindowInfo.tsx";
import { useState, useEffect } from "react";
import Cookies from 'js-cookie'
export const MainPage = () => {
  const [toggleWindowPp, setToggleWindowPp] = useState(false);
  const [toggleWindowInfo, setToggleWindowInfo] = useState(false);
  const [accept, setAccept] = useState(false)
  const readCookie = () =>{
    const user = Cookies.get("user")
    if(user){
      setAccept(true)
      setToggleWindowInfo(false)
    }
    else {
      setToggleWindowInfo(true)
    }
  }

  useEffect(()=>{
   readCookie() 
  },[])
  
  return (
    <>
      <div className="App">
        <Navbar/>
        <Header/>
        <Helps/>
        <Image/>
        <Flexible/>
        <About/>
        <Services/>
        {toggleWindowPp&&<WindowPp setToggleWindowPp={setToggleWindowPp} />}
        {toggleWindowInfo&&<WindowInfo setToggleWindowPp={setToggleWindowPp} setToggleWindowInfo={setToggleWindowInfo} accept={accept} setAccept={setAccept}/>}
        
      </div>
      <Footer setToggleWindowPp={setToggleWindowPp} />
    </>
  );
}

