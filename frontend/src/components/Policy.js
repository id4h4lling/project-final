import React from "react";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Policy = () => {
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <Background>
      <GoBackButton type="button" onClick={onBackButtonClick}>
        <h2>Tillbaka</h2>
      </GoBackButton>
      <Text>
        <p>
          Sedan den 25 maj 2018 gäller den nya dataskyddsförordningen GDPR för
          alla medborgare inom EU. Förenklat innebär det ett uppdaterat
          regelverk för hur vi hanterar personuppgifter som exempelvis
          e-postadress och telefonnummer. Vi har i linje med detta utformat vår
          Integritetspolicy för att på ett tydligt sätt förklara vilka uppgifter
          som finns sparade hos oss och vad de faktiskt används till. Har du
          ytterligare frågor kring hur vi hanterar arbetet kring GDPR? Kontakta
          oss gärna på info@idahalling.com
        </p>
        <br />
        <b>Introduktion </b>
        <p>
          Inom ramen för vår verksamhet behandlar Ida Halling AB en rad
          personuppgifter som du lämnat till dem själv eller som de inhämtat
          från någon annan (s.k. tredje part). Dina personuppgifter behandlas
          t.ex. i samband med intresseanmälningar och tillhandahållande av våra
          tjänster. Eftersom vi värnar om din personliga integritet och tar
          frågor om dataskydd på största allvar vill vi genom denna
          integritetspolicy beskriva hur Ida Halling AB behandlar dina
          personuppgifter.
        </p>
        <p>
          I Policyn kommer vi därför att redogöra för vilka kategorier av
          personuppgifter Ida Halling AB behandlar, för vilka ändamål vi
          behandlar dem och vilken laglig grundbehandlingen stödjer sig på. Vi
          redogör också för vilka som kan ha åtkomst till och behandla
          uppgifterna, principerna för gallring, vilka tredje parter Ida Halling
          AB kan komma att dela personuppgifterna med, var personuppgifterna
          behandlas samt dina rättigheter som registrerad i form av rätt till
          information, rättelse och radering m.m. Vi ber dig noggrant ta del av
          Policyn och bekanta dig med innehållet eftersom den tillämpas vid all
          behandling av personuppgifter inom Ida Halling AB.
        </p>
        <p>
          Ida Halling AB behandlar dina personuppgifter i egenskap av
          personuppgiftsansvarig och har därför en skyldighet att se till att
          behandlingen sker i enlighet med denna Policy och vid var tid gällande
          personuppgiftslagstiftning. Du som registrerad har alltid rätt att
          kontakta Ida Halling AB för att göra dina rättigheter gällande.
        </p>
        <p>
          Det kan hända att vi emellanåt behöver uppdatera eller ändra Policyn.
          Om så sker kommer vi att informera dig på ett lämpligt sätt och be dig
          att ta del av de ändringar som gjorts. Den senaste versionen av
          Policyn hittar du alltid på vår hemsida.
        </p>
        <p>
          Vi hoppas att denna Policy besvarar dina frågor kring vår insamling,
          användning och utlämning samt skyddet för dina personuppgifter.
        </p>
        <p>
          Om du har ytterligare frågor eller funderingar är du varmt välkommen
          att kontakta oss genom att skicka brev till Ida Halling AB
          Gästrikegatan 9b 112 37 Stockhlim.
        </p>
        <br />
        <b>Personuppgifter och personuppgiftsbehandling</b>
        <p>
          Med ”personuppgifter” avses all slags information som direkt eller
          indirekt kan hänföras till en fysisk person som är i livet. Det kan
          därmed röra sig om uppgifter såsom namn, e-postadresser eller
          telefonnummer men även uppgifter såsom foton eller IP-adresser kan
          omfattas om informationen kan kopplas till en fysisk person. Med
          ”personuppgiftsbehandling” avses varje åtgärd eller kombination av
          åtgärder beträffande personuppgifter, oavsett om åtgärden är
          automatiserad eller inte. Exempel på vanligt förekommande behandlingar
          är insamling, registrering, organisering, strukturering, lagring,
          utlämning genom överföring och radering.
        </p>
        <br />
        <b>Intresseanmälningar via hemsidan</b>
        <p>
          Att upprätta och bibehålla affärsrelationer med kunder och andra
          intressenter för att kunna utveckla Ida Halling ABs tjänster,
          produkter och system utgör en viktig del av Ida Halling ABs
          kärnverksamhet. I syfte att kunna kontakta dig i egenskap av
          intressent gällande Ida Halling ABs tjänster och produkter samt
          marknadsaktiviteter samlar bliaget in dina personuppgifter. Dessa
          personuppgifter samlas in från dig i samband med att du gör en
          intresseanmälan via Ida Halling ABs hemsida. Uppgifterna kommer att
          lagras i Ida Halling ABs marknadsverktyg med målet att bliaget ska
          kunna upprätta en affärsrelation med dig. Dina personuppgifter sparas
          även på Ida Halling ABs plattformar för marknadsutskick i
          kommunikations- och informationssyfte. Ida Halling AB kommer endast
          att göra sådana utskick som Ida Halling AB bedömer är relevanta för
          din yrkesrlil. För varje utskick kommer du att ges möjlighet till
          avregistrering, en så kallad opt-out.
        </p>
        <br />
        <p>
          <span>GALLRING</span>
          <br />
          Ida Halling AB kommer att behandla dina personuppgifter till dess att
          det inte längre behövs för att uppfylla ovan nämnda ändamål eller till
          dess du begär att inte längre finnas registrerad hos Ida Halling AB.
          Personuppgifterna kommer i sådant fall att raderas utan onödigt
          dröjsmål. Om en affärsrelation inte har utvecklats inom tre år från
          det att Ida Halling AB tog emot din intresseanmälan kommer dina
          personuppgifter att raderas. Ida Halling AB har vidare inrättat
          gallringsrutiner för att regelbundet kunna radera sådana
          kontaktuppgifter som inte längre uppfyller sitt syfte.
        </p>
        <br />
        <p>
          DE PERSONUPPGIFTER SOM SAMLAS IN OCH BEHANDLAS FÖR OVAN NÄMNDA ÄNDAMÅL
          ÄR:
        </p>
        <ul>
          <li>För- och Efternamn</li>
          <li>Kontaktuppgifter såsom e-postadress och telefonnummer</li>
          <li>Korrespondens mellan dig och Ida Halling AB</li>
          <li>
            Teknisk information om hur du har interagerat med Ida Halling ABs
            IP-adress och webbläsarinställningar
          </li>
        </ul>
        <p>
          Behandlingen av dessa personuppgifter stödjer sig på det samtycke du
          lämnar i samband med att du skickar in din intresseanmälan.
        </p>
        <p>
          För kund eller användare av Ida Halling ABs tjänster <br />
          Mot sina kunder och användare intar bliaget en ställning som
          personuppgiftsbiträde. Detta beror på att kund, vid utnyttjande av
          dessa tjänster, tillhandahåller bliaget med personuppgifter och
          bestämmer för vilka ändamål de får behandlas. Ida Halling ABs
          ställning som personuppgiftsbiträde medför i dessa fall att det är
          kunden som ansvarar för behandlingen av användares personuppgifter som
          tillämpas gentemot användarna.
        </p>
        <br />
        <b>Behandling av personnummer </b>
        <p>
          I den mån Ida Halling AB behandlar personnummer utan ditt samtycke
          kommer detta endast att göras när det är klart motiverat med hänsyn
          till ändamålet, vilket är säker identifiering, bakgrundskontrlil eller
          något annat beaktansvärt skäl. Detta innebär att personnummer som
          utgångspunkt endast kommer att behandlas vid bakgrundskontrlil.
        </p>
        <br />
        <b> Direktmarknadsföring </b>
        <p>
          Du har rätt att invända mot att dina personuppgifter används för
          direktmarknadsföring. Med direktmarknadsföring avses alla typer av
          uppsökande marknadsföringsåtgärder, t.ex. via post, e-post och sms. Du
          har rätt att kostnadsfritt motsätta dig att dina uppgifter används för
          sådana syften och varje utskick från Ida Halling AB i
          marknadsföringssyfte innehåller en möjlighet till avregistrering, s.k.
          opt-out. Om du väljer att avregistrera dig från fortsatta utskick
          kommer Ida Halling AB att göra en notering i sitt affärssystem om att
          upphöra med att rikta direktmarknadsföring till dig.
        </p>
        <br />
        <b> Kontaktperson hos potentiell kund </b>
        <p>
          Att upprätta affärsrelationer med kunder för att kunna utveckla Ida
          Halling ABs tjänster, produkter och system utgör en viktig del av Ida
          Halling ABs kärnverksamhet. I syfte att kunna kontakta dig i egenskap
          av potentiell kundkontakt gällande Ida Halling ABs tjänster och
          produkter samt marknadsaktiviteter samlar Ida Halling ABs in dina
          personuppgifter. Dessa samlas antingen in via interna nätverk eller
          från tredje part, såsom offentliga register eller sociala medier, och
          lagras i Ida Halling ABs system med målet att kunna upprätta en
          affärsrelation med dig samt kunna bjuda in dig till
          marknadsaktiviteter. Behandlingen av dessa personuppgifter stödjer sig
          på Ida Halling ABs berättigade intresse av att kunna upprätta och
          bibehålla affärsrelationer samt att kunna utveckla sina tjänster,
          produkter och system. Ida Halling AB har som rutin att varje
          medarbetare, som via telefon eller digital kanal inlett kontakt med
          dig och där du under samtalet visat intresse för att skapa eller
          utforska en vidare relation med Ida Halling AB, följer upp med ett
          e-postmeddelande innehållande en länk till denna Policy. I de fall Ida
          Halling AB initierat den första kontakten genom ett e-postmeddelande
          eller tryckt material inkluderas alltid en hänvisning till Policyn för
          att du som registrerad ska få nödvändig information om behandlingen av
          dina personuppgifter. Dina personuppgifter sparas på Ida Halling ABs
          plattformar för marknadsutskick i kommunikations- och
          informationssyfte. Ida Halling AB kommer endast att göra sådana
          utskick som bedöms vara relevanta. För varje utskick kommer du att ges
          möjlighet till avregistrering, en så kallad opt-out. I de fall då Ida
          Halling AB fått kontakt med dig och du avböjer att skapa eller
          utforska en vidare relation kommer personuppgifterna i Ida Halling ABs
          del av affärssystemet att markeras med en notering om att inte
          återuppta kontakten. Vi kommer även att upphöra med att delge dig
          marknadsutskick.
        </p>
        <br />
        <p>
          <span>GALLRING</span>
          <br />
          Ida Halling AB kommer att behandla dina personuppgifter till dess att
          det inte längre behövs för att uppfylla ovan nämnda ändamål eller till
          dess du begär att inte längre finnas registrerad hos Ida Halling AB.
          Personuppgifterna kommer i sådant fall att raderas utan onödigt
          dröjsmål. Om en affärsrelation inte har utvecklats inom tre år från
          det att Ida Halling AB tog emot din intresseanmälan kommer dina
          personuppgifter att raderas. Ida Halling AB har vidare inrättat
          gallringsrutiner för att regelbundet kunna radera sådana
          kontaktuppgifter som inte längre uppfyller sitt syfte.
        </p>
        <p>
          DE PERSONUPPGIFTER SOM SAMLAS IN OCH BEHANDLAS FÖR OVAN NÄMNDA ÄNDAMÅL
          ÄR:
        </p>
        <ul>
          <li>För- och Efternamn</li>
          <li>Kontaktuppgifter såsom e-postadress och telefonnummer</li>
          <li>Korrespondens mellan dig och Ida Halling AB</li>
          <li>
            Teknisk information om hur du har interagerat med Ida Halling ABs
          </li>
          <li>IP-adress och webbläsarinställningar</li>
        </ul>
        <p>
          Behandlingen av dessa personuppgifter stödjer sig på det samtycke du
          lämnar i samband med att du skickar in din intresseanmälan.
        </p>
        <br />
        <p>
          <span>GALLRING</span>
          <br />
          Ida Halling AB kommer att behandla dina personuppgifter till dess att
          det inte längre behövs för att uppfylla ovan nämnda ändamål eller till
          dess du begär att inte längre finnas registrerad hos Ida Halling AB.
          Personuppgifterna kommer i sådant fall att raderas utan onödigt
          dröjsmål. Om en affärsrelation inte har utvecklats inom tre år från
          det att Ida Halling AB tog emot din intresseanmälan kommer dina
          personuppgifter att raderas. Ida Halling AB har vidare inrättat
          gallringsrutiner för att regelbundet kunna radera sådana
          kontaktuppgifter som inte längre uppfyller sitt syfte.
        </p>
        <p>
          DE PERSONUPPGIFTER SOM SAMLAS IN OCH BEHANDLAS FÖR OVAN NÄMNDA ÄNDAMÅL
          ÄR:
        </p>
        <ul>
          <li>För- och Efternamn</li>
          <li>Kontaktuppgifter såsom e-postadress och telefonnummer</li>
          <li>Korrespondens mellan dig och Ida Halling AB</li>
          <li>
            Teknisk information om hur du har interagerat med Ida Halling ABs
          </li>
          <li>IP-adress och webbläsarinställningar</li>
        </ul>
        <p>
          Behandlingen av dessa personuppgifter stödjer sig på det samtycke du
          lämnar i samband med att du skickar in din intresseanmälan.
        </p>
        <br />
        <b>Kontaktperson hos befintlig kund</b>
        <p>
          Att upprätthålla affärsrelationer med kunder för att kunna utveckla
          Ida Halling ABs tjänster, produkter och system utgör en viktig del av
          Ida Halling ABs kärnverksamhet. I syfte att kunna bibehålla kontakt
          med dig som kund gällande Ida Halling ABs tjänster och produkter samt
          marknadsaktiviteter behandlar Ida Halling AB dina personuppgifter.
          Dessa samlas antingen in via interna nätverk eller från tredje part,
          såsom offentliga register eller sociala medier, och lagras i Ida
          Halling ABs system med målet att kunna upprätthålla en affärsrelation
          med dig samt kunna bjuda in dig till marknadsaktiviteter. Behandlingen
          av dessa personuppgifter stödjer sig på Ida Halling ABs berättigade
          intresse av att affärsrelationen till dig utvecklas och att Ida
          Halling AB ska kunna kommunicera med dig som kontaktperson. Dina
          personuppgifter sparas på Ida Halling ABs plattformar för
          marknadsutskick i kommunikations- och informations- syfte. Ida Halling
          AB kommer endast att göra sådana utskick som bedöms vara relevanta.
          För varje utskick kommer du att ges möjlighet till avregistrering, en
          så kallad opt-out.
        </p>
        <br />
        <p>GALLRING </p> <br />
        <p>
          Ida Halling AB kommer att behandla dina personuppgifter till dess att
          det inte längre behövs för att uppfylla ovan nämnda ändamål eller till
          dess du begär att inte längre finnas registrerad hos Ida Halling AB.
          Personuppgifterna kommer i sådant fall att raderas utan onödigt
          dröjsmål. Om en affärsrelation inte har utvecklats inom tre år från
          det att Ida Halling AB tog emot din intresseanmälan kommer dina
          personuppgifter att raderas. Ida Halling AB har vidare inrättat
          gallringsrutiner för att regelbundet kunna radera sådana
          kontaktuppgifter som inte längre uppfyller sitt syfte.
        </p>
        <p>
          DE PERSONUPPGIFTER SOM SAMLAS IN OCH BEHANDLAS FÖR OVAN NÄMNDA ÄNDAMÅL
          ÄR:
        </p>
        <ul>
          <li>För- och Efternamn</li>
          <li>Kontaktuppgifter såsom e-postadress och telefonnummer</li>
          <li>Korrespondens mellan dig och Ida Halling AB</li>
          <li>
            Teknisk information om hur du har interagerat med Ida Halling ABs
          </li>
          <li>IP-adress och webbläsarinställningar</li>
        </ul>
        <br />
        <b>Skyddet för dina personuppgifter </b>
        <p>
          Ida Halling AB har vidtagit en rad säkerhetsåtgärder för att tillse
          att Ida Halling ABs behandling av personuppgifter sker på ett säkert
          sätt och för att skydda de personuppgifter som behandlas mot liovlig
          tillgång, obehörig behandling och missbruk. T.ex. är tillgången till
          de system i vilka personuppgifterna lagras begränsad till Ida Halling
          ABs anställda och tjänsteleverantörer som behöver nå uppgifterna inom
          ramen för sina arbetsuppgifter. Dessa är även informerade om vikten av
          att säkerheten för personuppgifterna upprätthålls och det har
          upprättats interna rutiner som bl.a. reglerar användningen av lösenord
          och arbete som sker utanför kontoret och utomlands. Ida Halling AB
          övervakar även kontinuerligt sina system för att upptäcka sårbarheter
          och för att skydda dina personuppgifter.
        </p>
        <br />
        <b>Användning av personuppgiftsbiträden </b>
        <p>
          I de fall det är nödvändigt för att Ida Halling AB ska kunna erbjuda
          sina tjänster kommer det att överföra dina personuppgifter till
          företag som i förhållande till Ida Halling AB är så kallade
          personuppgiftsbiträden. Dessa får bara behandla de överförda
          uppgifterna för Ida Halling ABs räkning och i enlighet med Ida Halling
          ABs uttryckliga instruktioner. Ida Halling AB överför bara dina
          personuppgifter till sådana personuppgiftsbiträden för ändamål som är
          förenliga med de ändamål för vilka Ida Halling AB har samlat in
          uppgifterna. Ida Halling AB har ingått skriftliga avtal med samtliga
          personuppgiftsbiträden för att säkerställa att dessa följer Ida
          Halling ABs säkerhetskrav, begränsningar samt krav avseende
          internationell överföring av personuppgifter.
        </p>
        <br />
        <b>Platsen för behandling av personuppgifter </b>
        <p>
          Ida Halling AB har som mål att alltid behandla dina personuppgifter
          inom EU/ EES där alla Ida Halling ABs egna IT-system finns. Det kan
          dock förekomma att dina personuppgifter delas med
          personuppgiftsbiträden som antingen själva eller genom
          underleverantörer är etablerade eller lagrar information i ett land
          utanför EU/EES. I sådant fall kommer Ida Halling AB att vidta alla
          rimliga legala, organisatoriska och tekniska åtgärder som krävs för
          att säkerställa att skyddsnivån är densamma som inom EU/EES. Detta
          kommer att ske antingen genom ett beslut av EU-kommissionen om att
          landet ifråga säkerställer en adekvat skyddsnivå eller genom
          användandet av lämpliga skyddsåtgärder såsom standardavtalsklausuler
          eller godkända uppförandekoder i motIda Halling AB genom att kontakta
          oss via ABs avtal med sådana personuppgiftsbiträden.
        </p>
        <b>Dina rättigheter som registrerad </b>
        <p>
          Du som registrerad har alltid rätt att göra dina rättigheter gällande
          info@idahalling.com
        </p>
        <br />
        <b>Rätten till tillgång </b>
        <p>
          Om du vill få ökad förståelse för vilka personuppgifter vi behandlar
          om just dig kan du begära att få tillgång till uppgifterna.
          Informationen kommer att lämnas i formen av ett registerutdrag som
          anger vilka personuppgifter vi behandlar, för vilka ändamål vi
          behandlar dem, var uppgifterna har inhämtats ifrån, vilka tredje
          parter som uppgifterna har överförts till samt hur länge uppgifterna
          kommer att lagras. Om din begäran görs i elektronisk form kommer
          informationen att tillhandahållas i ett elektroniskt format som är
          allmänt använt, om du inte begär något annat.
        </p>
        <br />
        <b>Rätten till tillgång </b>
        <p>
          Du har rätt att utan dröjsmål få felaktiga uppgifter om dig rättade.
          Du har även rätt att komplettera ofullständiga uppgifter, t.ex. genom
          att tillhandahålla ett kompletterande utlåtande.
        </p>
        <br />
        <b>Rätten till radering </b>
        <p>
          Du har rätt att begära radering av dina personuppgifter som vi
          behandlar om dig ifall:
          <ul>
            <li>
              Personuppgifterna inte längre är nödvändiga för de ändamål för
              vilka de samlades in eller på annat sätt behandlas.
            </li>

            <li>
              Du återkallar ditt samtycke för en behandling som stödjer sig på
              samtycke och det finns inte någon annan rättslig grund för
              behandlingen.
            </li>
            <li>
              Du invänder mot en behandling som stödjer sig på en
              intresseavvägning och ditt skäl för invändning väger tyngre än
              vårt berättigade intresse
            </li>
            <li>Personuppgifterna behandlas på ett liagligt sätt.</li>
            <li>
              Personuppgifterna måste raderas till följd av en rättslig
              förpliktelse som vi har att uppfylla.
            </li>
          </ul>
          För det fall det finns legala skyldigheter som hindrar att vi
          omedelbart raderar vissa personuppgifter kan vi neka din begäran om
          radering. Dessa skyldigheter finns t.ex. i bokföringslagstiftningen.
          Det är också möjligt att fortsatt behandling är nödvändig för att vi
          ska kunna göra gällande, försvara eller fastställa rättsliga anspråk.
          Skulle det vara så att våra legala skyldigheter hindrar oss från att
          radera dina uppgifter kommer vi i stället att markera dem så att de
          inte längre aktivt används i våra system. Utöver ovanstående
          rättigheter har du även rätt till att begära att behandlingen av dina
          personuppgifter begränsas och att invända mot all behandling av
          personuppgifter som stödjer sig på en intresseavvägning. Om så sker
          måste vi påvisa tvingande berättigande skäl som väger tyngre än dina
          intressen, rättigheter och friheter för att få fortsätta behandlingen.
          I de fall vår behandling av personuppgifter stödjer sig på ditt
          samtycke har du även rätt att begära att få de uppgifter som berör dig
          och som du lämnat, överförs till en annan personuppgiftsansvarig (s.k.
          dataportabilitet). En förutsättning för dataportabilitet är dock att
          överföringen är tekniskt möjlig och att den kan ske automatiserat.
        </p>
        <br />
        <b>Rätten till begränsning av behandling</b>
        <p>
          Du har rätt att begära att behandlingen av dina personuppgifter
          begränsas om något av följande alternativ är tillämpligt:
        </p>
        <ol>
          <li>
            Du bestrider personuppgifternas korrekthet under en tid som ger Ida
            Hallings ABs möjlighet att kontrlilera om uppgifterna är korrekta;
          </li>
          <li>
            Behandlingen är liaglig och du motsätter dig att uppgifterna raderas
            och i stället begär en begränsning av deras användning;
          </li>
          <li>
            Ida Halling AB inte längre behöver personuppgifterna för ändamålen
            med behandlingen men du behöver dem för att kunna fastställa, göra
            gällande eller försvara rättsliga anspråk;
          </li>
          <li>
            Du har invänt mot en behandling som stödjer sig på en
            intresseavvägning och Ida Halling AB kontrlilerar om bliagets
            berättigade skäl väger tyngre än dina berättigade skäl.
          </li>
        </ol>
        <p>
          Om behandlingen har begränsats i enlighet med denna punkt får sådana
          personuppgifter som begränsning av behandling ska ske för, med
          undantag för lagring, endast behandlas för att fastställa, göra
          gällande eller försvara rättsliga anspråk eller för att skydda tredje
          parts rättigheter eller skäl som rör ett viktigt allmänintresse för EU
          eller för en EU-medlemsstat.
        </p>
        <br />
        <b>Rätten till dataportabilitet</b>
        <p>
          I de fall Ida Halling ABs behandling av personuppgifter stödjer sig på
          ditt samtycke eller fullgörande av avtal har du rätt att begära att de
          uppgifter som berör dig och som du lämnat till Ida Halling AB överförs
          till en annan personuppgiftsansvarig. En förutsättning för detta är
          dock att överföringen är tekniskt möjlig och att den kan ske
          automatiserat. Sådana personuppgifter som begränsning av behandling
          ska ske för, med undantag för lagring, endast behandlas för att
          fastställa, göra gällande eller försvara rättsliga anspråk eller för
          att skydda tredje parts rättigheter eller skäl som rör ett viktigt
          allmänintresse för EU eller för en EU-medlemsstat.
        </p>
        <br />
        <b>Återkallelse av samtycke</b>
        <p>
          I de fall då Ida Halling ABs behandling av dina personuppgifter
          grundar sig på ditt samtycke har du alltid rätt att när som helst
          återkalla ditt samtycke. Ett tillbakadragande påverkar inte
          lagligheten av behandlingen som skett utifrån ditt samtycke, innan
          detta drogs tillbaka. Om du återkallar ditt samtycke kommer Ida
          Halling AB inte längre att behandla de personuppgifter som grundas på
          ditt samtycke, såvida Ida Halling AB inte av legala skäl är
          förpliktade att fortsatt behandla dem. Skulle det vara så att Ida
          Halling ABs legala skyldigheter hindrar Ida Halling AB från att radera
          dina uppgifter kommer Ida Halling AB i stället att markera dem så att
          de inte längre aktivt används i Ida Halling ABs system. Du kan när som
          helst skicka ett e-postmeddelande till info@idahalling.com för att
          återkalla ditt samtycke. Ida Halling AB kommer att bemöta din
          förfrågan skyndsamt.
        </p>
        <br />
        <b>Inlämning av klagomål</b>
        <p>
          Integritetsmyndigheten är den myndighet som är ansvarig för att
          övervaka tillämpningen av lagstiftningen bland företag som behandlar
          personuppgifter. Om du anser att vi eller Ida Halling AB behandlar
          dina personuppgifter på ett felaktigt sätt kan du, utöver att kontakta
          oss via info@idahalling.com, lämna in ett klagomål hos
          Integritetsmyndigheten.
        </p>
        <br />
        <p>
          Hoppas vi besvarat dina frågor. Har du fler frågor om hur Ida Halling
          AB förhåller sig till GDPR, välkommen att kontakta oss på
          info@idahalling.com
        </p>
      </Text>
      {/* <Footer /> */}
    </Background>
  );
};

const Background = styled.div`
  background-color: #e3b921;
  padding: 70px;
`;

const GoBackButton = styled.button`
  all: unset;
  border: none;
  right: 40px;
  outline: 0;
  width: auto;
  position: fixed;
  top: 100px;
  background-color: #24384a;
  font-family: "WremenaLight";
  color: #edbe44;
  padding: 20px;
`;

const Text = styled.div`
  color: #7b2020;
  width: 60%;
  font-family: wremena;
  padding: 20px;
  line-height: 25px;
  font-size: 16px;

  li {
    margin: 15px;
  }
`;
