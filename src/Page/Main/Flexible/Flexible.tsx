import React from 'react'
import "./Flexible.scss"
import { motion } from 'framer-motion'

export const Flexible = () => {
  return (
    <motion.div className='Flexible flex'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.4}}
    >
        <div className='Flexible__content'>
            <h1>Wyprzedzamy konkurencje o dwa kroki</h1>
            <div className='text'>
            INTKOD sp. z o.o. umożliwia wszystkim partnerom dostarczanie kompleksowych rozwiązań IT na całym świecie, skupiając się na doractwie, wsparciu i rozwiązywaniu problemów infromatycznych,cyberbezpieczeńswie, wdrożeniach, szkoleniach, analizie bazy danych,  i technologiach nowej generacji.
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
                    <text>Zatrudniamy tylko wyspecializowanych pracowników z najlepszymi kompetencjami do świadczenia najlepszych usług.
                    </text>
                </div>
            </div>
        </div>
    </motion.div>
  )
}
