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

import VisibilitySensor from 'react-visibility-sensor';
import { motion } from 'framer-motion'

export const Services = () => {
  const items = [
    {
      title:"Help desk",
      description:"",
      icon:<img src={helpIcon} width="40px"/>
    },
    {
      title:"Doradztwo It",
      description:"",
      icon:<img src={helpDeskIcon} width="40px"/>
    },
    {
      title:"Wdrażanie nowych technologii",
      description:"",
      icon:<GrTechnology size={35}/>
    }
    ,
    {
      title:"Szkolenia",
      description:"",
      icon:<img src={informationtIcon} width="40px"/>
    },
    {
      title:"Analiza danych (SQL)",
      description:"",
      icon:<FiDatabase size={35}/>
    },
    {
      title:"Software house",
      description:"tekst jakiś ...",
      icon:<BiBuildingHouse size={35}/>
    },
    {
      title:"Cyberbezpieczeństwo ",
      description:"",
      icon:<GrShieldSecurity size={35}/>
    },
    {
      title:"marketing internetowy",
      description:"",
      icon:<GrWorkshop size={35}/>
    }
  ]

  return (
      <motion.div className='Services flex' id="Services"    
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:1.4}}
      >
          <div className='Services__content flex'>
            <h1>Nasze usługi</h1>
          <div className='Services__content-items flex disable-selection'>
              {items.map(item =>{
                return <Item icon={item.icon} title={item.title} description={item.description}/>
              })}
          </div>
        </div>
      </motion.div>
  )
}
