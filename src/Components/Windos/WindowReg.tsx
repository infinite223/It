import React from 'react'
import "./Window.scss"
import { motion } from 'framer-motion'
export const WindowReg = ({setToggleWindowReg}) => {
  return (
    <motion.div className='window flex'
      initial={{opacity:0}}
      animate={{opacity:1}}
    >
        <div className='button-exit' onClick={()=>setToggleWindowReg(false)}>Exit</div>
        <h1 style={{textAlign:'center'}}>Regulamin serwisu internetowego <br/> www.INTKOD.pl</h1>
        <div className='window__content'>  
            Strona Główna / Regulamin
            Przed rozpoczęciem korzystania z serwisu internetowego www.INTKOD.com Usługobiorcy są zobowiązani zapoznać się z treścią Regulaminu.
            <br /><br/>§1. POSTANOWIENIA OGÓLNE
          <ol>
            
            <li>
              Serwis internetowy działający pod adresem www.wynajmijhakera.pl prowadzony jest przez INTKOD SPÓŁKĘ 
              Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ wpisaną do Rejestru Przedsiębiorców prowadzonego przez Sąd Rejonowy
               Katowice-Wschód w Katowicach, VIII Wydział Gospodarczy Krajowego Rejestru Sądowego pod numerem KRS: 
               0000871398, NIP: 6342984273, REGON: 387616994, adres miejsca wykonywania działalności oraz adres do doręczeń:
              ul. Wincentego Janasa 4, 40-855 Katowice, adres poczty elektronicznej (e-mail): intkod@gmail.com

            </li>
            <li>
              Serwis działa na zasadach określonych w niniejszym Regulaminie.
            </li>
            <li>
              Regulamin określa rodzaje i zakres usług świadczonych drogą elektroniczną przez Serwis www.wynajmijhakera.pl, 
              zasady świadczenia tych usług, warunki zawierania i 
              rozwiązywania umów o świadczenie usług drogą elektroniczną, a także tryb postępowania reklamacyjnego.
            </li>
            <li>
              Każdy Usługobiorca z chwilą podjęcia czynności zmierzających do korzystania z Usług Elektronicznych Serwisu www.INTKOD.com,
              zobowiązany jest do przestrzegania postanowień niniejszego Regulaminu.
            </li>
            <li>
              Serwis oraz Usługodawca nie prowadzą sprzedaży usług prezentowanych w Serwisie.
              Usługodawca w ramach Serwisu świadczy jedynie usługi wskazane w § 3 Regulaminu.
            </li>
            <li>
              Serwis nie jest stroną stosunków prawnych pomiędzy Usługobiorcami, wynikających oraz 
              bezpośrednio związanych z zamieszczonymi ogłoszeniami.
            </li>
            <li>
              Usługobiorcy odpowiadają za skutki niewykonania lub nienależytego wykonania 
              zaciągniętych przez siebie ich wzajemnych zobowiązań. 
            </li>
            <li>
              Zawarcie i realizacja Umowy Sprzedaży odbywa się bezpośrednio pomiędzy samymi Usługobiorcami. 
              Usługodawca nie odpowiada tym samym za jakość, pochodzenie,
              zapłatę lub przydatność świadczonych przez Usługobiorców wzajemnie sobie usług.
            </li>
            <li>
              Usługodawca nie odpowiada za brak zainteresowania na zamieszczone ogłoszenia.
            </li>
            <li>
              Użytkownik jest zobowiązany do tego, aby treści opisowe ogłoszeń prezentowanych w 
              Serwisie oraz ich dostępność były aktualne i zgodne ze stanem faktycznym. Treść ogłoszenia powinna
              być przygotowana przez Użytkownika w sposób zgodny z rzeczywistością, rzetelny i kompletny oraz
              nie może wprowadzać w błąd innych Usługobiorców, w szczególności co do istoty lub właściwości.
            </li>
            <li>
              W Serwisie obowiązuje zakaz prezentowania oraz świadczenia usług zabronionych przez przepisy powszechnie obowiązujące.
            </li>
            <li>
              Wszystkie nazwy handlowe, nazwy produktów, firm i ich logo użyte na stronie internetowej 
              Serwisu pod adresem www.INTKOD.com należą do ich właścicieli i są używane wyłącznie w celach 
              identyfikacyjnych. Mogą być one zastrzeżonymi znakami towarowymi. Wszystkie materiały, opisy i
              zdjęcia prezentowane na stronie internetowej Serwisu pod adresem www.INTKOD.com użyte są w celach informacyjnych.
            </li>
            <li>
              W sprawach nieuregulowanych w niniejszym Regulaminie mają zastosowanie
              przepisy: <br />13.1. kodeksu cywilnego,<br />13.2. ustawy o prawach konsumenta z dnia 30 maja 2014 r.
              ,<br />13.3. ustawy o prawie autorskim i prawach pokrewnych z dnia 4 lutego 1994 r.,<br />13.4. ustawy o świadczeniu usług 
              drogą elektroniczną z dnia 18 lipca 2002 r.<br />13.5. oraz inne właściwe przepisy prawa polskiego.
            </li>  
          </ol>    
          §2. DEFINICJE 
          <ol>
            <li>
              NEWSLETTER - Usługa Elektroniczna pozwalająca Usługobiorcy na subskrybowanie i otrzymywanie na podany przez 
              Usługobiorcę adres e-mail bezpłatnych informacji pochodzących od Usługodawcy, dotyczących Serwisu.
            </li>
            <li>
              REGULAMIN - niniejszy regulamin Serwisu.
            </li>
            <li>
              SERWIS - serwis internetowy Usługodawcy działający pod adresem www.INTKOD.com
            </li>
            <li>
              USŁUGODAWCA – INTKOD SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ wpisana do Rejestru Przedsiębiorców
              prowadzonego przez Sąd Rejonowy Katowice-Wschód w Katowicach, VIII Wydział Gospodarczy Krajowego Rejestru
              Sądowego pod numerem KRS: 0000871398, NIP: 6342984273, REGON: 387616994, 
              adres miejsca wykonywania działalności oraz adres do doręczeń: ul. Wincentego Janasa 4, 40-855 Katowice.
            </li>
            <li>
              USŁUGA ELEKTRONICZNA – usługa świadczona drogą elektroniczną przez Usługodawcę na rzecz
              Usługobiorcy za pośrednictwem Serwisu.
            </li>
          </ol>  
          §3. RODZAJ I ZAKRES USŁUG ELEKTRONICZNYCH
          <ol>
            <li>
              Usługodawca umożliwia za pośrednictwem Serwisu korzystanie z Usług Elektronicznych takich jak: 1.2. Newsletter. 
            </li>
            <li>
              Świadczenie Usług na rzecz Usługobiorców w Serwisie odbywa się na warunkach określonych w Regulaminie.
            </li>
            <li>
              Usługodawca ma prawo do zamieszczania na stronie Serwisu treści reklamowych.
              Treści te stanowią integralną część Serwisu i prezentowanych w nim materiałów.
            </li>
          </ol>
          §4. WARUNKI ŚWIADCZENIIA I ZAWIERANIA UMÓW O ŚWIADCZENIE USŁUG ELEKTRONICZNYCH
          <ol>
            <li>
              Świadczenie Usług Elektronicznych określonych w § 3 pkt 1.1 oraz 1.3 Regulaminu przez Usługodawcę 
              jest nieodpłatne.
            </li>
            <li>
              Świadczenie Usługi Elektronicznej określonej w § 3 pkt 1.2 Regulaminu przez 
              Usługodawcę jest płatne w zależności od wybranej opcji zgodnie z cennikiem Serwisu
            </li>
            <li>
              Płatności, o których mowa w pkt 2 niniejszego rozdziału należy dokonywać za pośrednictwem 
              elektronicznych serwisów płatności HOTPAY - HOTPAY B2B SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ z siedzibą w
              27-Go Stycznia 9, 34-120 Andrychów, Polska KRS: 0000873149, NIP: 5512647167, Strona: www.hotpay.pl
            </li>
            <li>
              W przypadku płatności za pośrednictwem elektronicznych serwisów płatności Użytkownik dokonuje
              zapłaty przed rozpoczęciem realizacji usługi. Elektroniczne serwisy płatności 
              umożliwiają dokonanie płatności za pomocą szybkiego przelewu z wybranych polskich banków.
            </li>
            <li>
              Rozliczenia transakcji kartą kredytową i e-przelewem przeprowadzane
               są za pośrednictwem HOTPAY www.hotpay.pl.
            </li>
            <li>
              Okres na jaki umowa zostaje zawarta: 6.1. umowa o świadczenie Usługi Elektronicznej polegającej 
              na prowadzeniu Konta zawierana jest na czas nieoznaczony,6.2. umowa o świadczenie Usługi Elektronicznej
              polegającej na zamieszczeniu ogłoszenia przez Użytkownika w Serwisie zawierana jest na czas oznaczony i
              ulega rozwiązaniu z chwilą upływu terminu na jaki została zawarta:<br />a) usługa nie ulega automatycznemu
              odnowieniu,<br /> b) w przypadku zmian w Regulaminie rozpoczęta usługa dla zamieszczonego ogłoszenia będzie 
              realizowana na dotychczasowych zasadach. W przypadku, gdy ważność ogłoszenia dobiegnie końca, wówczas ich
              odnowienie przebiega zgodnie ze zmianami w Regulaminie po ich akceptacji przez Użytkownika, <br />c) Użytkownik
              zamieszczający ogłoszenie dokona wszelkich starań, aby dane zamieszczane przez niego były aktualne,6.3.
              umowa o świadczenie Usługi 
              Elektronicznej polegającej na korzystaniu z Newslettera zawierana jest na czas nieoznaczony.
            </li>
            <li>
              Wymagania techniczne niezbędne do współpracy z systemem teleinformatycznym, którym posługuje się Usługodawca: 
              7.1. komputer lub urządzenie mobilne z dostępem do Internetu, 7.2. 
              dostęp do poczty elektronicznej, 7.3. przeglądarka internetowa, 7.4. przeglądarka internetowa.
            </li>
            <li>
              Usługobiorca zobowiązany jest do korzystania z Serwisu w sposób zgodny
              z prawem i dobrymi obyczajami mając na uwadze poszanowanie dóbr osobistych i praw
              własności intelektualnej osób trzecich.
            </li>
            <li>
              Usługobiorca zobowiązany jest do wprowadzania danych zgodnych ze stanem faktycznym.
            </li>
            <li>
              Usługobiorcę obowiązuje zakaz dostarczania treści o charakterze bezprawnym.
            </li>
            <li>
              Usługodawca zastrzega prawo do odmowy publikacji, edycji lub usunięcia treści, w tym ogłoszeń i zdjęć,
              których charakter narusza postanowienia Regulaminu, przepisy powszechnie obowiązującego prawa, w szczególności, 
              gdy zawierają elementy: <br />11.1. powszechnie uznane za obraźliwe,11.2. o charakterze rasistowskim,<br />11.3. noszące znamiona przestępstw
              lub czynów nieuczciwej konkurencji,<br />11.4. naruszające prawa autorskie oraz prawa własności intelektualnej,<br />11.5. wprowadzające 
              w błąd Usługobiorców,<br />11.6. reklamujące inne serwisy, w tym serwisy konkurencyjne w stosunku do www.wynajmijhakera.pl,
              <br />11.7. będące SPAM-em lub materiałem promocyjnym,
              <br />11.8. zawierające ogłoszenia o działaniach konkursowych organizowanych bez zgody Serwisu.
            </li>
            <li>
              Usługodawca zastrzega prawo do usunięcia danego ogłoszenia z Serwisu, informując jednocześnie o tym fakcie 
              danego Użytkownika, w przypadku gdy Usługodawca powziął wiedzę, uzasadnione podejrzenie lub stosowną informację 
              urzędową, że umieszczając w Serwisie dane ogłoszenie, Użytkownik dokonał naruszenia, usiłowania naruszenia,
               obejścia lub próby obejścia powszechnie obowiązującego prawa lub postanowień niniejszego Regulaminu, 
               w szczególności działał lub usiłował działać na szkodę 
              innych Usługobiorców lub osób trzecich, w tym nie wywiązał się z umowy zawartej z innymi Użytkownikami.
            </li>
          </ol>
          §5. WARUNKI ROZWIĄZYWANIA UMÓW O ŚWIADCZENIE USŁUG ELEKTRONICZNYCH
          <ol>
            <li>
             Wypowiedzenie umowy o świadczenie Usługi Elektronicznej:<br />1.1. wypowiedzeniu może ulec umowa o świadczenie 
             Usługi Elektronicznej o charakterze ciągłym i bezterminowym (np. prowadzenie Konta, Newsletter),
             <br />1.2. Usługobiorca może wypowiedzieć umowę ze skutkiem natychmiastowym i bez wskazywania przyczyn
             poprzez przesłanie stosownego oświadczenia za pośrednictwem poczty elektronicznej na adres: 
             kontakt@wynajmijhakera.pl lub poprzez usunięcie Konta,<br />1.3. Usługodawca może wypowiedzieć umowę o świadczenie
             usługi drogą elektroniczną polegającej na zamieszczeniu ogłoszenia w Serwisie, w przypadku, gdy Usługobiorca
             narusza Regulamin, w szczególności, gdy dostarcza treści o charakterze bezprawnym po bezskutecznym wcześniejszym 
             wezwaniu do zaprzestania naruszeń z wyznaczeniem odpowiedniego terminu. Umowa w takim wypadku wygasa po upływie
             7 dni od dnia złożenia oświadczenia woli o jej wypowiedzeniu
             (okres wypowiedzenia),<br />1.4. wypowiedzenie prowadzi do ustania stosunku prawnego ze skutkiem na przyszłość.
            </li>
            <li>
              Usługodawca i Usługobiorca mogą rozwiązać umowę o świadczenie Usługi Elektronicznej w Serwisie,
              w każdym czasie w drodze porozumienia stron.
            </li>
          </ol>
          §7. TRYB POSTĘPOWANIA REKLAMACYJNEGO
          <ol>
            <li>
              Reklamacje związane ze świadczeniem Usług Elektronicznych przez Usługodawcę:<br />1.1. reklamacje związane ze
              świadczeniem Usług Elektronicznych za pośrednictwem Serwisu Usługobiorca może składać za pośrednictwem poczty 
              elektronicznej na adres: intkod@gmail.com
<br /> 1.2. w powyższej wiadomości e-mail, należy podać jak najwięcej 
              informacji i okoliczności dotyczących przedmiotu reklamacji, w szczególności rodzaj i datę wystąpienia 
              nieprawidłowości oraz dane kontaktowe. Podane informacje znacznie ułatwią i przyspieszą rozpatrzenie reklamacji
              przez Usługodawcę, <br />1.3. rozpatrzenie reklamacji przez Usługodawcę następuje niezwłocznie, nie później niż w 
              terminie 14 dni, <br />1.4. odpowiedź Usługodawcy w sprawie reklamacji jest wysyłana na adres 
              e-mail Usługobiorcy podany w zgłoszeniu reklamacyjnym lub w inny podany przez Usługobiorcę sposób.
            </li>
          </ol>
          §8. PRAWO ODSTĄPIENIA OD UMOWY
          <ol>
            <li>
              Z zastrzeżeniem pkt 3 niniejszego paragrafu, Użytkownik będący jednocześnie Konsumentem, 
              który zawarł umowę na odległość z Usługodawcą, może od niej odstąpić bez podania przyczyn, składając 
              stosowne oświadczenie na piśmie w
              terminie 14 dni. Do zachowania tego terminu wystarczy wysłanie oświadczenia o odstąpieniu od umowy.
            </li>   
            <li>
              Termin czternastodniowy, w którym Konsument może odstąpić 
              od umowy, liczy się od dnia, w którym Konsument zawarł umowę o świadczenie usług.
            </li>    
            <li>
              Prawo odstąpienia od umowy zawartej na odległość nie przysługuje Konsumentowi w przypadku umowy:<br /> 3.1.
              w której przedmiotem świadczenia jest usługa, jeżeli przedsiębiorca wykonał w pełni usługę za wyraźną 
              zgodą Konsumenta, który został poinformowany przed rozpoczęciem świadczenia, że po jego spełnieniu przez 
              przedsiębiorcę utraci prawo odstąpienia od umowy,<br /> 3.2. o dostarczanie treści cyfrowych, które nie są 
              zapisane na nośniku materialnym, jeżeli spełnianie świadczenia rozpoczęło się za wyraźną zgodą Konsumenta
              przed upływem terminu do 
              odstąpienia od umowy i po poinformowaniu go przez przedsiębiorcę o utracie prawa odstąpienia od umowy.
            </li> 
          </ol>
          §9. WŁASNOŚĆ INTELEKTUALNA
          <ol>
            <li>
              Wszystkie treści zamieszczone na stronie internetowej pod adresem www.wynajmijhakera.pl korzystają z
              ochrony prawnoautorskiej i (z wyjątkiem treści zamieszczanych przez Usługobiorców oraz elementów wykorzystywanych 
              na zasadach licencji, przeniesienia praw autorskich lub dozwolonego użytku) są własnością INTKOD SPÓŁKI Z OGRANICZONĄ 
              ODPOWIEDZIALNOŚCIĄ wpisanej do Rejestru Przedsiębiorców prowadzonego przez Sąd Rejonowy Katowice-Wschód w Katowicach,
              VIII Wydział Gospodarczy Krajowego Rejestru Sądowego pod numerem KRS: 0000871398, NIP: 6342984273, REGON: 387616994.
              Usługobiorca ponosi pełną odpowiedzialność za szkodę wyrządzoną Usługodawcy, 
              będącą następstwem użycia jakiejkolwiek zawartości strony www.INTKOD.com, bez zgody Usługodawcy.
            </li>
            <li>
              Jakiekolwiek wykorzystanie przez kogokolwiek, bez wyraźnej pisemnej zgody Usługodawcy, któregokolwiek z elementów 
              składających się na treść oraz zawartość strony www.wynajmijhakera.pl stanowi 
              naruszenie prawa autorskiego przysługującego Usługodawcy i skutkuje odpowiedzialnością cywilnoprawną oraz karną.
            </li>
            <li>
              Usługobiorca przesyłając Serwisowi treści cyfrowe ponosi wyłączną odpowiedzialność za naruszenia autorskich praw
              majątkowych i pokrewnych oraz dóbr osobistych osób trzecich z tego tytułu, a w wypadku wystąpienia przez jakąkolwiek 
              osobę z jakimikolwiek roszczeniami lub żądaniami w stosunku do Serwisu lub Usługodawcy w tym zakresie,
              zobowiązuję się zwolnić Serwis lub Usługodawcę 
              z wszelkiej odpowiedzialności oraz do całkowitego zaspokojenia roszczeń osób trzecich.
            </li>
          </ol>
          §10. ODPOWIEDZIALNOŚĆ
          <ol>
            a.i.1. Usługodawca podejmuje wszelkie dostępne mu środki, w celu ochrony danych Usługobiorców.<br/>a.i.2.
            Usługodawca zobowiązuje się nie przekazywać danych Usługobiorców osobom trzecim, jeśli nie istnieje ku 
            temu odpowiednia podstawa prawna. <br />a.i.3. Każdy Użytkownik jest zobowiązany dołoży<br/>a.i.4.
            wszelkich starań, aby dane i ogłoszenia dostępne w Serwisie były kompletne i aktualne oraz prezentowane
            z należytą starannością, z uwzględnieniem istniejących okoliczności faktycznych i prawnych, w 
            granicach dopuszczalnych przez prawo i przy pełnym poszanowaniu prawa.<br/>a.i.5. Usługobiorcy ponoszą pełną
            odpowiedzialność za złamanie prawa bądź szkodę wywołaną ich działaniami w Serwisie, w szczególności 
            podaniem nieprawdziwych danych, ujawnieniem informacji niejawnej lub innych tajemnic ustawowo chronionych, 
            naruszeniem dóbr osobistych lub praw autorskich oraz praw pokrewnych, a także przetwarzaniem danych osobowych
            Usługobiorców niezgodnie z celami Serwisu lub z naruszeniem przepisów dotyczących ochrony danych.<br/>a.i.6.
            Usługodawca zobowiązuje się w miarę możliwości informować z wyprzedzeniem Usługobiorców o możliwych 
            zakłóceniach w funkcjonowaniu Serwisu, w szczególności o przerwach w dostępie.<br/>a.i.7. Usługodawca nie 
            jest odpowiedzialny w stosunku do Usługobiorców niebędących Konsumentami:<br/>a) za jakiekolwiek szkody i 
            straty bezpośrednio lub pośrednio (łącznie ze szkodami z tytułu utraty zysków z prowadzenia przedsiębiorstwa, 
            przerw w działalności przedsiębiorstwa lub utraty informacji gospodarczej oraz innymi szkodami o charakterze 
            majątkowym), powstałe z powodu użycia, niemożliwości użycia lub błędnego działania oprogramowania Serwisu, 
            szkody powstałe w wyniku wyłączenia lub awarii systemu teleinformatycznego, awarii sieci energetycznej,<br/>b) 
            w związku z niewłaściwym korzystaniem z Serwisu przez Usługobiorcę niebędącego Konsumentem oraz nieprawidłowym 
            funkcjonowaniem sprzętu komputerowego, oprogramowania komputerowego czy też systemu łączności, za pomocą których
            Usługobiorca łączy się z systemem Serwisu,<br/>c) za ewentualne szkody powstałe w wyniku błędów, awarii i 
            przerw w funkcjonowaniu Serwisu lub spowodowane nieprawidłowym zapisem lub odczytem danych pobieranych przez
            Usługobiorców,<br/>d) za zakłócenia w prawidłowym funkcjonowaniu Serwisu, a także utratę danych Usługobiorców 
            niebędących Konsumentami powstałe w wyniku działania siły wyższej lub osób trzecich,<br/>e) za działania osób 
            trzecich polegające na niezgodnym z powszechnie obowiązującym prawem lub Regulaminem wykorzystywaniu danych
            oraz materiałów umieszczonych w Serwisie,<br/>f) za niemożność zalogowania się w systemie Serwisu 
            spowodowaną w szczególności: jakością połączenia, awarią systemu teleinformatycznego lub sieci energetycznej,
            błędną konfiguracją oprogramowania Usługobiorców niebędących Konsumentami,<br/>g) za skutki związane z utratą hasła.
          </ol>
          §11. POSTANOWIENIA KOŃCOWE
          <ol>
            <li>
              Umowy zawierane poprzez Serwis zawierane są zgodnie z prawem polskim.
            </li>
            <li>
              Zmiany dokonane w Regulaminie Serwisu przez Usługodawcę, wiążą Usługobiorcę, pod warunkiem, iż został 
              on prawidłowo poinformowany o zmianach i nie wypowiedział umowy o świadczenie 
              usług drogą elektroniczną w terminie 14 dni od dnia powiadomienia Usługobiorcy o zmianach przez Serwis.
            </li>
            <li>
              Wszelkie spory wynikłe między Usługodawcą, a Usługobiorcami będą rozstrzygane w pierwszej kolejności na drodze 
              negocjacji, z intencją polubownego zakończenia sporu. Jeśli jednak nie byłoby to możliwe, lub też byłoby 
              niesatysfakcjonujące dla którejkolwiek ze stron, 
              spory będą rozstrzygane przez właściwy sąd powszechny, zgodnie z pkt 4 niniejszego paragrafu.
            </li>
            <li>
              Sądowe rozstrzyganie sporów: <br />
              4.1. ewentualne spory powstałe pomiędzy Usługodawcą, a Usługobiorcą będącym jednocześnie Konsumentem
              zostają poddane sądom właściwym zgodnie z przepisami kodeksu postępowania cywilnego z dnia 17 listopada 1964 r
              .,<br />4.2. ewentualne spory powstałe pomiędzy Usługodawcą, a Usługobiorcą niebędącym jednocześnie Konsumentem
              zostają poddane sądowi właściwemu ze względu na miejsce siedziby Usługodawcy.
            </li>
            <li>
              Usługobiorca będący Konsumentem ma również prawo do skorzystania z pozasądowych sposobów rozstrzygania 
              sporów w szczególności poprzez złożenie po zakończeniu postępowania reklamacyjnego wniosku o wszczęcie mediacji 
              lub wniosku o rozpatrzenie sprawy przez sąd polubowny (wniosek można pobrać na stronie internetowej 
              http://www.uokik.gov.pl/download.php?plik=6223). Wykaz Stałych Polubownych Sądów Konsumenckich działających 
              przy Wojewódzkich Inspektoratach Inspekcji Handlowej dostępny jest na stronie internetowej: 
              http://www.uokik.gov.pl/wazne_adresy.php#faq596). Konsument może skorzystać także z bezpłatnej pomocy 
              powiatowego (miejskiego) rzecznika konsumentów lub organizacji społecznej, do której 
              zadań statutowych należy ochrona konsumentów. 
              Pozasądowe dochodzenie roszczeń po zakończeniu postępowania reklamacyjnego jest bezpłatne.
            </li>
            <li>
              Konsument w celu polubownego rozwiązania sporu może w szczególności złożyć skargę za pośrednictwem platformy internetowej 
              ODR (Online Dispute Resolution), dostępnej pod adresem: http://ec.europa.eu/consumers/odr/.
            </li>
          </ol>         
        </div>
    </motion.div>
  )
}
