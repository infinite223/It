import React from 'react'
import { Item } from "./../../../Components/Item.tsx"
import { FiDatabase } from "react-icons/fi"
import "./Services.scss"

import { GrShieldSecurity, GrWorkshop } from 'react-icons/gr'
import { BiBuildingHouse } from 'react-icons/bi'
import { GrTechnology } from 'react-icons/gr'

import helpIcon from './../../../images/icons/help.png'
import helpDeskIcon from './../../../images/icons/help-desk.png'
import informationtIcon from './../../../images/icons/information.png'

export const Services = () => {
  const items = [
    {
      title:"Help desk",
      description:"tutaj sobie wpisz tekst, sprzedaje rocco :(",
      icon:<img src={helpIcon} width="40px"/>
    },
    {
      title:"Doradztwo It",
      description:"nie no, taki żarcik byqu, robimy 400hp",
      icon:<img src={helpDeskIcon} width="40px"/>
    },
    {
      title:"Wdrażanie nowych technologii",
      description:"ale w sumie to mnie nie stać więc jebać",
      icon:<GrTechnology size={35}/>
    }
    ,
    {
      title:"Poradniki",
      description:"ale w sumie to mnie nie stać więc jebać",
      icon:<img src={informationtIcon} width="40px"/>
    },
    {
      title:"Analiza danych (SQL)",
      description:"ale w sumie to mnie nie stać więc jebać",
      icon:<FiDatabase size={35}/>
    },
    {
      title:"Software house",
      description:"tekst jakiś ...",
      icon:<BiBuildingHouse size={35}/>
    },
    {
      title:"Cyberbezpieczeństwo ",
      description:"tekst jakiś ...",
      icon:<GrShieldSecurity size={35}/>
    },
    {
      title:"marketing internetowy",
      description:"tekst jakiś ...",
      icon:<GrWorkshop size={35}/>
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
