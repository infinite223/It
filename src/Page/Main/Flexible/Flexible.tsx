import React from 'react'
import "./Flexible.scss"
import { Numbers } from './Numbers/Numbers.tsx'

export const Flexible = () => {
  return (
    <div className='Flexible flex'>
        <div className='Flexible__content'>
            <h1>Flexible Distance Learning</h1>
            <div className='text'>We provide flexible and 24/7 online learning that fits around You. Become an industry 
                leader with accredited undergraduate and postgraduate courses online. Fully Online.
            </div>

            <div className='Flexible__content__main'>
                <div className='Flexible__content__main-box'>
                    <h2>OUR VALUES</h2>
                    <text>Duis aute irure dolor in reprehenderit in voluptate velit esse 
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </text>
                </div>
                <div className='Flexible__content__main-box'>
                <h2>O​UR MISSION</h2>
                    <text>Duis aute irure dolor in reprehenderit in voluptate velit esse 
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </text>
                </div>
                <div className='Flexible__content__main-box'>
                <h2>OUR SKILLS</h2>
                    <text>Duis aute irure dolor in reprehenderit in voluptate velit esse 
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </text>
                </div>
            </div>
        </div>

        <div className='Flexible__baner flex'>
            <div className='Flexible__baner-wrap flex'>
                <Numbers number="8 650" text="Satisfied Customers"/>
                <Numbers number="4 650" text="Satisfied Customers"/>
                <Numbers number="9 650" text="Satisfied Customers"/>
                <Numbers number="5 650" text="Satisfied Customers"/>
            </div>
         </div>
    </div>
  )
}
