import { Icon } from '@iconify/react';
import { BiBuildingHouse } from 'react-icons/bi';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { v4 as uuid } from 'uuid';
import commercialImg from 'public/images/comertial-cleaining-800-533.jpeg';
import productionLineImg from 'public/images/production-line-cleaning-800x505.jpeg';
import postRenovationImg from 'public/images/cleaning-after-renovation-800x532.jpeg';
import multiFamilyBuildingImg from 'public/images/multi-family-building-1000x563.jpg';
import officeSpaceImg from 'public/images/offices-space-cleaning-800-533.jpeg';
import hotelCleaningImg from 'public/images/hotel-cleanining-800x533.jpeg';
import cleaningToolImg from 'public/images/cleaning-tool-filtered.jpeg';

const iconSize = 40;

export const offersData = {
  title: 'Usługi',
  homeOffersShort: {
    heading: 'Czym się zajmujemy?',
  },
  ogData: {
    title: 'Pulire - oferta',
    description:
      'Firma sprzątająca z Lublina. Oferujemy usługi w zakresie sprzątania budynków przemysłowych, handlowo-usługowych, hoteli, biur oraz mieszkaniowych. W naszej ofercie znajduje się również sprzątanie poremontowe i pobudowlane.',
    url: 'www.pulire.co/oferta',
  },
  offers: [
    {
      title: 'Sprzątanie obiektów przemysłowych',
      description:
        'Specjalizujemy się w porządkowaniu przestrzeni przemysłowych i hal magazynowych. Do usług z tego zakresu należą: mycie i odkurzanie hal, czyszczenie powierzchni szklanych, czyszczenie infrastruktury przemysłowej.',
      shortDescription:
        'Specjalizujemy się w porządkowaniu przestrzeni przemysłowych i hal magazynowych. Do usług z tego zakresu należą...',
      homeOfferDescription: 'Specjalizujemy się w porządkowaniu przestrzeni przemysłowych i hal magazynowych.',
      offerChecklistTitle: 'Do czyszczonych nawierzchni należą m.in.:',
      offerChecklist: [
        'podłogi i ściany',
        'słupy i inne konstrukcje przemysłowe',
        'okna, przeszklenia i powierzchnie wystawowe',
        'taśmy i linie produkcyjne',
      ],
      icon: <Icon icon="cil:factory" width={iconSize} height={iconSize} />,
      offerUrl: productionLineImg,
      offerImageAlt: 'linia produkcyjna',
      uuid: uuid(),
    },
    {
      title: 'Sprzątanie obiektów handlowo-usługowych',
      description:
        'Specjalizujemy się w utrzymywaniu czystości we wszelkiego rodzaju obiektach handlowych i usługowych. Powierzchnie komercyjne wymagają ciągłego utrzymania w porządku w związku z permanentną ekspozycją na klientów. Dotyczy to sklepów, galerii i pasaży ale również obiektów użyteczności publicznej jak kina, szkoły czy urzędy. Dbałość o porządek w tych miejscach oznacza  dbałość o komfort i zdrowie potencjalnych klientów. To wizytówka lokalu czy instytucji.',
      shortDescription:
        'Specjalizujemy się w utrzymywaniu czystości we wszelkiego rodzaju obiektach handlowych i usługowych. Powierzchnie komercyjne wymagają ciągłego utrzymania w porządku w związku z permanentną ekspozycją na klientów...',
      homeOfferDescription:
        'Specjalizujemy się w utrzymywaniu czystości we wszelkiego rodzaju obiektach handlowych i usługowych. Powierzchnie komercyjne wymagają ciągłego utrzymania w porządku w związku z permanentną ekspozycją na klientów.',
      icon: <Icon icon="ant-design:shopping-cart-outlined" width={iconSize} height={iconSize} />,
      offerUrl: commercialImg,
      offerImageAlt: 'pracownik sprząta w obiekcie komercyjnym',
      uuid: uuid(),
    },
    {
      title: 'Sprzątanie biur',
      description:
        'Specjalizujemy się w sprzątaniu powierzchni biurowych. Porządkowanie tego typu powierzchni to nie tylko utrzymywanie czystości na małej powierzchni wypełnionej infrastrukturą biurową gromadzącą kurz i inne drobinki zanieczyszczeń ale również zwolnienie pracowników z tego fakultatywnego obowiązku. Oszczędność zasobów i czasu. Połączenie które gwarantujemy.',
      shortDescription:
        'Specjalizujemy się w sprzątaniu powierzchni biurowych. Porządkowanie tego typu powierzchni to nie tylko utrzymywanie czystości na małej powierzchni wypełnionej infrastrukturą biurową gromadzącą kurz i inne drobinki zanieczyszczeń ale również...',
      homeOfferDescription:
        'Specjalizujemy się w sprzątaniu powierzchni biurowych. Porządkowanie tego typu powierzchni to nie tylko utrzymywanie czystości na małej powierzchni wypełnionej infrastrukturą biurową gromadzącą kurz i inne drobinki zanieczyszczeń ale również zwolnienie pracowników z tego fakultatywnego obowiązku.',
      icon: <HiOutlineOfficeBuilding size={iconSize} />,
      offerUrl: officeSpaceImg,
      offerImageAlt: 'sala konferencyjna w dużej firmie',
      uuid: uuid(),
    },
    {
      title: 'Sprzątanie obiektów mieszkaniowych',
      description:
        'Specjalizujemy się w utrzymywaniu porządku w budynkach wielorodzinnych administrowanych przez Wspólnoty Mieszkaniowe i Spółdzielnie. Jesteśmy świadomi jak ważną kwestią dla mieszkańców tych budynków są czyste powierzchnie wspólne.',
      shortDescription:
        'Specjalizujemy się w utrzymywaniu porządku w budynkach wielorodzinnych administrowanych przez Wspólnoty Mieszkaniowe i Spółdzielnie...',
      homeOfferDescription:
        'Specjalizujemy się w utrzymywaniu porządku w budynkach wielorodzinnych administrowanych przez Wspólnoty Mieszkaniowe i Spółdzielnie. Jesteśmy świadomi jak ważną kwestią dla mieszkańców tych budynków są czyste powierzchnie wspólne.',
      offerChecklistTitle: 'Oferta zawiera m.in.:',
      offerChecklist: [
        'mycie klatek schodowych i przedsionków',
        'mycie ścian i podłóg',
        'czyszczenie i dezynfekcja poręczy i klamek',
        'czyszczenie wejść do klatek, przeszkleń i szyb',
        'mycie okien',
        'czyszczenie parapetów',
        'porządkowanie wind',
      ],
      icon: <BiBuildingHouse size={iconSize} />,
      offerUrl: multiFamilyBuildingImg,
      offerImageAlt: 'widok drzwi wind na klatce schodowej',
      uuid: uuid(),
    },
    {
      title: 'Sprzątanie hoteli',
      description:
        'Specjalizujemy się w sprzątaniu hoteli i hosteli. Usługi porządkowe obejmują czyszczenie pokoi ale również lobby i wind. W zależności od charakteru pomieszczeń sprzątanie przebiega wg. modelu dostosowanego do ich powierzchni i zróżnicowania. Pozwala to na sprawne przygotowanie pomieszczeń dla gości hotelowych i szybsze ich oddanie.',
      shortDescription: 'Specjalizujemy się w sprzątaniu hoteli i hosteli. Usługi porządkowe obejmują czyszczenie...',
      homeOfferDescription:
        'Specjalizujemy się w sprzątaniu hoteli i hosteli. Usługi porządkowe obejmują czyszczenie pokoi ale również lobby i wind. W zależności od charakteru pomieszczeń sprzątanie przebiega wg. modelu dostosowanego do ich powierzchni i zróżnicowania.',
      icon: <Icon icon="healthicons:clean-hands-outline" width={iconSize} height={iconSize} />,
      offerUrl: hotelCleaningImg,
      offerImageAlt: 'łóżko wraz z lampką w pokoju hotelowym',
      uuid: uuid(),
    },
    {
      title: 'Sprzątanie poremontowe i pobudowlane',
      description:
        'Rozwijający się rynek budownictwa w Polsce powoduje powstawanie wielu nowych obiektów wymagających sprawnego przygotowania do odbioru. Nieodłącznym elementem tego procesu jest doprowadzenie do czystości wszystkich pomieszczeń. Zapewnimy kompleksowe sprzątanie wszelkich powierzchni poremontowych i pobudowlanych. Znacząco przyspieszamy zakończenie procesu inwestycyjnego. To element, bez którego żaden budynek nie zostanie odebrany przez Inwestora pomimo wykonania innych niezbędnych czynności. Oferujemy sprzątanie poremontowe i pobudowlane we wszystkich kategoriach obiektów objętych pozostałym zakresem oferty.',
      shortDescription:
        'Rozwijający się rynek budownictwa w Polsce powoduje powstawanie wielu nowych obiektów wymagających sprawnego przygotowania do odbioru. Nieodłącznym elementem tego procesu jest doprowadzenie do...',
      homeOfferDescription:
        'Zapewnimy kompleksowe sprzątanie wszelkich powierzchni poremontowych i pobudowlanych. Znacząco przyspieszamy zakończenie procesu inwestycyjnego. Oferujemy sprzątanie poremontowe i pobudowlane we wszystkich kategoriach obiektów objętych pozostałym zakresem oferty.',
      icon: <Icon icon="carbon:clean" width={iconSize} height={iconSize} />,
      offerUrl: postRenovationImg,
      offerImageAlt: 'wnętrze w trakcie remontu',
      uuid: uuid(),
    },
  ],
};

export const faq = {
  title: 'Poznaj naszą ofertę',
  description:
    'Wiele osób zadaje pytania związane z naszą działalnością, część z nich zebraliśmy w formie krótkiego FAQ.',
  questions: [
    {
      question: 'Jakie informacje są potrzebne do uzyskania wyceny?',
      answer:
        'Specyfika usług sprzątania znajdujących się w naszej ofercie obejmująca różne kategorie obiektów nieodłącznie wiąże się z koniecznością określenia szczegółowych kryteriów do wyceny. Pozwala to w profesjonalny sposób podejść do każdego indywidualnego zlecenia. Ten etap wymaga by firma sprzątająca odpowiednio określiła narzędzia, środki, zasoby osobowe i czas wykonania. Wykonujemy wyceny bezpłatnie. Wycena uwzględnia koszty użytych środków oraz koszt użycia maszyn i urządzeń.',
      additionalList: {
        listTitle: 'Dla sporządzenia wyceny uwzględniającej potrzeby klienta potrzebujemy:',
        listConditions: [
          'Rodzaj obiektu;',
          'Całkowita powierzchnia podlegająca sprzątaniu, z podziałem na podłogi, witryny szklane, ściany itd.',
          'Ilość pomieszczeń oddzielnych (np. sanitariaty, pomieszczenia socjalne);',
          'Częstotliwość sprzątania przy sprzątaniu cyklicznym (biura, lokale usługowe itp.);',
          'Zakres do czynności do wykonania;',
          'Występowanie szklanych drzwi, okien, ścian i witryn;',
          'Lokalizacja obiektu;',
          'Określenie pilności zlecenia oraz szacowanego terminu na wykonanie.',
        ],
      },
    },
    {
      question: 'Czy możliwa jest stała współpraca?',
      answer:
        'Tak! Jak najbardziej przewidujemy taką formę współpracy, ze względu na wygodę i oszczędność czasu, a klienci za spokój i pewność, że wszystko będzie wykonane solidnie i na czas.',
    },
    {
      question: 'Gdzie można skorzystać z waszych usług?',
      answer:
        'Z racji na to, że siedzibę posiadamy w Lublinie to właśnie tam mamy największą liczbę zleceń. Jednak jesteśmy otwarci na współpracę w innych lokalizacjach.',
    },
  ],
  faqUrl: cleaningToolImg,
};
