import React from 'react'
import { motion } from 'framer-motion'
import "./Window.scss"

export const WindowPp = ({setToggleWindowPp}) => {
  return (
    <motion.div className='window flex'
      style={{zIndex:10}}
      initial={{opacity:0}}
      animate={{opacity:1}}
    >
        <div className='button-exit' onClick={()=>setToggleWindowPp(false)}>Exit</div>
        <h1>Polityka prywatności</h1>
        <div className='window__content'>         
            <p>
              Naszym celem jest zapewnienie Państwu poczucia bezpieczeństwa na naszym Portalu, dlatego 
              też Państwa prywatność i ochrona danych osobowych są dla nas bardzo ważne. Prosimy o staranne 
              zapoznanie się z poniższym podsumowaniem, z którego dowiedzą się Państwo w jaki sposób działa nasz
              Portal. Zapewniamy, że Państwa dane będą przetwarzane w sposób przejrzysty
              i uczciwy, oraz że dołożymy wszelkich starań, aby były traktowane z zachowaniem ostrożności i odpowiedzialnie.
            </p>
            <p>
              Poniższa Polityka prywatności ma na celu poinformowanie o sposobie wykorzystywania przez nas Państwa danych osobowych, względem których spełniamy wszystkie wymogi
              Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 UE z dnia 27 kwietnia 2016 r. (dalej jako: „RODO”).
            </p>
  
              <ol>
                <li>
                  Dane Administratora
                  Administratorem Państwa danych osobowych w rozumieniu RODO, jest Kacper Mordal – 
                  prowadząca działalność gospodarczą pod firmą INTKOD sp. z o.o z siedzibą w Wrocław 50-031, przy ul. 
                  Lubińska 4/62, adres do korespondencji: Lubińska 4/62, 53-624 Wrocław. W sprawach dotyczących ochrony danych 
                  osobowych można się skontaktować z Administratorem także za pośrednictwem adresu email intkod@gmail.com.
                </li>
                <li>
                  Cele i podstawy prawne przetwarzania danych
                  Państwa dane osobowe mogą być przetwarzane przez Administratora na podstawie:
                  
                  <ul>
                    <li>niezbędności do wykonania umowy lub do podjęcia działań przed jej 
                      zawarciem (art. 6 ust. 1 lit. b RODO), odrębnie dla celu:
                      <ul>
                        <li>
                          świadczenia usługi newsletter,
                        </li>
                        <li>
                          korzystania z formularzy zgłoszenia na szkolenie,
                        </li>
                      </ul>
                    </li>
                    <li>
                      zgody (art. 6 ust. 1 lit. a RODO), w celu prowadzenia marketingu podmiotów współpracujących z Administratorem,
                    </li>
                    <li>
                      prawnie uzasadnionego interesu Administratora (art. 6 ust. 1 lit. f RODO), odrębnie dla celu:
                      <ul>
                        <li>
                          marketingu produktów i usług własnych Administratora, w tym w celach analitycznych i
                          profilowania, gdzie uzasadnionym interesem Administratora jest prowadzenie marketingu bezpośredniego
                            własnych produktów i usług. Profilowanie danych ma na celu przygotowanie 
                          oferty produktów informatycznych uwzględniającej preferencje użytkowników Portalu,
                        </li>
                        <li>
                          korzystania z formularzy kontaktowych udostępnionych przez Administratora na Portalu, 
                          gdzie uzasadnionym interesem 
                          administratora jest opieka nad użytkownikami Portalu oraz udzielanie odpowiedzi na zadane pytania,
                        </li>
                        <li>
                          obrony przed ewentualnymi roszczeniami, gdzie uzasadnionym interesem Administratora jest dochodzenie
                           lub obrona roszczeń.
                        </li>
                      </ul>
                    </li>
                  </ul>      
                </li>
                <li>
                  Przekazywanie danych osobowych
                  Dane mogą być przekazane podmiotom przetwarzającym je na nasze zlecenie na podstawie umów zawartych z Administratorem,
                   ale tylko w celu i zakresie niezbędnym dla realizacji ww. celów, w tym m.in. podmiotom świadczącym na naszą rzecz usługi IT lub inne usługi zapewniające prawidłowe funkcjonowanie
                  Portalu, przy czym takie podmioty przetwarzają dane wyłącznie zgodnie z poleceniami Administratora.
                  <br/><br />
                  Przekazujemy Państwa dane wyłącznie podmiotom umiejscowionym w ramach Europejskiego Obszaru Gospodarczego i przez to podlegającym surowym przepisom unijnym o ochronie danych,
                   lub takim, które wiąże odpowiedni standard bezpieczeństwa. Przekazywanie danych do krajów trzecich nie jest aktualnie przez nas praktykowane lub planowane.
                </li>
                <li>
                  Okres przechowywania danych osobowych
                  Przetwarzamy Państwa dane osobowe jedynie przez okres niezbędny do spełnienia celu ich przechowywania lub dopóki 
                  jest to od nas wymagane zgodnie z prawem, w szczególności do momentu przedawnienia ewentualnych roszczeń lub wygaśnięcia obowiązku archiwizacji 
                  wynikającego z przepisów prawa, w tym obowiązku dotyczącego przechowywania dokumentów księgowych.
                  <br/><br />
                  W przypadku przetwarzania danych osobowych w celu świadczenia usługi newsletter, Państwa dane osobowe będą przetwarzane przez okres niezbędny do 
                  świadczenia tej usługi, do czasu rezygnacji z niej przez Państwa.
                  <br/><br />
                  W razie przetwarzania danych osobowych w oparciu o wyrażoną przez Państwa zgodę, Państwa dane będą przechowywane
                   do momentu jej wycofania. W każdej chwili istnieje możliwość wycofania zgód wyrażonych w serwisie, w tym zgody na
                    przetwarzanie danych w celach marketingowych podmiotów współpracujących z Administratorem. Odwołanie zgody na
                     przetwarzanie nie będzie miało 
                  wpływu na zgodność z prawem przetwarzania, którego dokonano przed jej wycofaniem.
                  <br/><br />
                  W przypadku przetwarzania Państwa danych na podstawie prawnie uzasadnionego interesu administratora, 
                  Administrator przestanie wcześniej przetwarzać
                   dane jeżeli zgłosi Pani/Pan sprzeciw wobec przetwarzania danych.
                </li>
                <li>
                  Przysługujące prawa:
                  <ul>
                    <li> Prawo dostępu do danych</li>
                    <li> Mają Państwo prawo uzyskać informację odnośnie przechowywanych przez nas danych
                     osobowych na Państwa temat, w tym kopię tych danych.</li>
                     <li>
                      Prawo do sprostowania danych<br />
                      Mają Państwo prawo żądania sprostowania Państwa danych osobowych, które są nieprawidłowe. 
                      Z uwzględnieniem celów przetwarzania mają Państwo prawo żądania uzupełnienia niekompletnych danych osobowych, 
                      w tym poprzez przedstawienie dodatkowego oświadczenia.
                     </li>
                     <li>
                      Prawo do usunięcia danych<br />  
                      Mają Państwo prawo domagać się usunięcia Państwa danych osobowych przechowywanych przez nas w następujących przypadkach:
                     </li>
                     <br />
                    Państwa dane osobowe nie są już niezbędne do celów, w których zostały zebrane,
                    cofnęliście Państwo zgodę , na której opiera się przetwarzanie i nie ma innej podstawy prawnej przetwarzania,
                    wnieśliście Państwo sprzeciw wobec przetwarzania i nie występują nadrzędne prawnie uzasadnione podstawy przetwarzania 
                    lub sprzeciw dotyczy przetwarzania danych w celach marketingu bezpośredniego,
                    dane osobowe były przetwarzane niezgodnie z prawem,
                    dane osobowe muszą zostać usunięte w celu wywiązania się z obowiązku prawnego przewidzianego w prawie Unii lub prawie
                    krajowym,
                    dane osobowe zostały zebrane w związku z oferowaniem usług społeczeństwa informacyjnego, o których mowa w art. 8 ust. 1 RODO.
                    Prawo do przenoszenia danych
                    Mają Państwo prawo otrzymać w ustrukturyzowanym, powszechnie używanym formacie nadającym się do odczytu maszynowego 
                    dane osobowe dotyczące Państwa, które nam dostarczyliście, jeżeli przetwarzanie tych danych odbywa się na podstawie 
                    zgody lub umowy oraz w sposób zautomatyzowany.
                    Jeżeli domagają się Państwo przesłania tych danych do innego administratora danych, zostanie to zrealizowane, o ile 
                    istnieje taka możliwość techniczna.
                    <li>Prawo ograniczenia przetwarzania danych<br />
                    Mają Państwo prawo zażądać, aby przetwarzanie Państwa danych osobowych zostało ograniczone, 
                    w następujących przypadkach:<br />
                    kwestionują Państwo prawidłowość danych osobowych – na okres pozwalający nam sprawdzić prawidłowość tych danych,
                    przetwarzanie jest niezgodne z prawem, a Państwo sprzeciwiacie się usunięciu danych osobowych, żądając w zamian ograniczenia ich wykorzystywania,
                    nie potrzebujemy już danych osobowych do celów przetwarzania, ale są one Państwu potrzebne do ustalenia, dochodzenia lub obrony roszczeń,
                    wnieśliście Państwo sprzeciw na mocy art. 21 ust. 1 wobec przetwarzania – do czasu stwierdzenia, czy prawnie uzasadnione podstawy po stronie administratora są nadrzędne wobec podstaw sprzeciwu.
                    Prawo do wniesienia sprzeciwu wobec przetwarzania
                    Jeżeli Państwa dane osobowe są przetwarzane na podstawie prawnie uzasadnionego interesu administratora, mają Państwo prawo do sprzeciwu w dowolnym czasie wobec przetwarzania, zgodnie z art. 21 RODO.</li>
                    <li>
                      Prawo do wycofania zgody<br />
                      Mają Państwo prawo do wycofania wyrażonej zgody na przetwarzanie danych osobowych w dowolnej chwili. Odwołanie zgody 
                      na przetwarzanie nie będzie miało
                      wpływu na zgodność z prawem przetwarzania, którego dokonano przed jej wycofaniem.
                      <br /><br/>
                      Jeśli chcą Państwo skorzystać z przysługujących Państwu praw prosimy o przesłanie do nas wiadomości na adres:
                      intkod@gmail.com
, lub pocztą tradycyjną na adres: Lubińska 4/62, 53-624 Wrocław.
                      <br /><br/>
                       Bezpieczeństwo danych osobowych jest dla nas priorytetem, jeśli jednak uznają Państwo, że przetwarzając Państwu dane osobowe naruszamy przepisy RODO, 
                       mają Państwo prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.
                    </li>
                  </ul>                 
                </li>
                <li>
                  Zmiany w Polityce prywatności
                  W celu zapewnienia, iż Polityka prywatności Portalu spełnia przez cały czas aktualne wymogi nałożone w przepisach prawa, zastrzegamy sobie prawo do wnoszenia do niej zmian w dowolnym czasie. Powyższe ma również zastosowanie w przypadkach, gdy 
                  Polityka prywatności wymaga zmian w celu objęcia nią nowych lub zmienionych produktów lub usług Portalu.
                </li>
              </ol>      
        </div>
    </motion.div>
  )
}
