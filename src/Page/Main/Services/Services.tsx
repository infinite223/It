import React from 'react'
import { Item } from "./../../../Components/Item.tsx"
import { FiDatabase } from "react-icons/fi"
import "./Services.scss"

export const Services = () => {
  const items = [
    {
      title:"chujj",
      description:"tutaj sobie wpisz tekst, sprzedaje rocco :(",
      icon:<FiDatabase size={35}/>
    },
    {
      title:"heheszkii",
      description:"nie no, taki żarcik byqu, robimy 400hp",
      icon:<FiDatabase size={35}/>
    },
    {
      title:":(",
      description:"ale w sumie to mnie nie stać więc jebać",
      icon:<FiDatabase size={35}/>
    }
  ]

  return (
    <div className='Services flex' id="Services">
        <div className='Services__content flex'>
            <h1>Nasze usługi</h1>
            <div className='Services__content-items flex'>
                {items.map(item =>{
                  return <Item icon={item.icon} title={item.title} description={item.description}/>
                })}
            </div>
        </div>
    </div>
  )
}
