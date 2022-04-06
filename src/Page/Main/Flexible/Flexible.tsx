import React from 'react'
import "./Flexible.scss"
import { Numbers } from './Numbers/Numbers.tsx'

export const Flexible = () => {
  return (
    <div className='Flexible flex'>
        <div className='Flexible__content'>
            <h1>Wyprzedzamy konkurencje o dwa kroki</h1>
            <div className='text'>
INT sp. z o.o. umożliwia wszystkim partnerom dostarczanie kompleksowych rozwiązań IT na całym świecie, skupiając się na doractwie, wsparciu i rozwiązywaniu problemów infromatycznych,cyberbezpieczeńswie, wdrożeniach, szkoleniach, analizie bazy danych,  i technologiach nowej generacji.
            </div>

            <div className='Flexible__content__main'>
                <div className='Flexible__content__main-box'>
                    <h2>Nasze zasady</h2>
                    <text>W naszej firmie panuję tajemna misja która pozwala wyprzedzać wszystkie inne konkurencyjne firmy w Polsce i Europie.
                    </text>
                </div>
                <div className='Flexible__content__main-box'>
                <h2>Nasza misja</h2>
                    <text>Naszą misją jest świadczenie najlepszych i najnowszych technologii w Państwa przedsiębiorstwach do osiągania najlepszych wyników na rynku.
                    </text>
                </div>
                <div className='Flexible__content__main-box'>
                <h2>Nasze umiejętności</h2>
                    <text>Zatrudniamy tylko wyspecializowanych pracowników z najlepszymi kompetencjami do świadczenia najlpszych usług.
                    </text>
                </div>
            </div>
        </div>

        <div className='Flexible__baner flex'>
            <h1>O INT</h1>
            <div className='Flexible__baner-wrap flex'>
                <Numbers number="120" text="Zadowolonych firm"/>
                <Numbers number="1500" text="Wykonanych projektów"/>
                <Numbers number="100%" text="Satysfakcji"/>
                
            </div>      
         </div>
    </div>
  )
}
