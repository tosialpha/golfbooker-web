import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fi');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  fi: {
    nav: {
      home: 'Golfkentille',
      story: 'Meistä',
      forPlayers: 'Käyttäjille',
      tournaments: 'Kilpailut',
      simulators: 'Golfsimulaattorit',
      contact: 'Ota yhteyttä',
      startTrial: 'Aloita ilmainen kokeilu',
      tryDemo: 'Kokeile demoa',
      signIn: 'Kirjaudu'
    },
    home: {
      readMore: 'Lue lisää'
    },
    hero: {
      title: 'Moderni Golfkentän hallintajärjestelmä',
      description: 'Nykyaikainen ja helppokäyttöinen järjestelmä - GolfBooker edistää sekä kenttien, että pelaajien käyttökokemusta.',
      requestDemo: 'Esittely',
      viewFeatures: 'Katso toiminnot',
      integrationNexGolf: 'Integrointi NexGolf',
      courses: '50+ kenttää',
      support: '24/7 tuki',
      clickToView: 'Avaa hallintapaneeli suurempana'
    },
    features: {
      title: 'Kaikki mitä tarvitset kentän hallintaan',
      subtitle: 'Tehokkaat työkalut, jotka säästävät aikaa ja helpottavat arkea.',
      bookings: {
        title: 'Varaukset & Ajanhallinta',
        subtitle: 'Automatisoitu varausjärjestelmä, joka säästää aikaa',
        items: [
          'Reaaliaikainen varaustenhallinta ja kalenterinäkymä',
          'Automaattiset vahvistukset ja muistutusviestit',
          'Ryhmävaraukset ja turnaushallintatyökalut'
        ]
      },
      payments: {
        title: 'Maksut & Laskutus',
        subtitle: 'Sujuvat maksut ja automaattinen laskutus',
        items: [
          'Verkkomaksut (Stripe, Paytrail, Checkout Finland)',
          'Automaattinen laskutus ja reskontra',
          'Jäsenmaksut ja kausikorttien hallinta'
        ]
      },
      analytics: {
        title: 'Analytiikka & Raportointi',
        subtitle: 'Dataan perustuvia päätöksiä',
        items: [
          'Reaaliaikaiset raportit ja analyysit',
          'Asiakasdata ja segmentointi',
          'Käyttöaste-analyysit ja kapasiteetti',
          'Tuloennusteet ja trendianalyysit'
        ]
      }
    },
    faq: {
      title: 'Usein kysytyt kysymykset',
      subtitle: 'Löydä vastaukset yleisimpiin kysymyksiin',
      questions: {
        whatIsGolfBooker: {
          question: 'Mikä on GolfBooker?',
          answer: 'GolfBooker on suomalainen, moderni varausjärjestelmä golfkentille ja golfsimulaattoreille. Se sisältää ajanvarauskalenterin, kilpailumoduulin, asiakashallinnan ja analytiikan.'
        },
        bookingSystem: {
          question: 'Millainen järjestelmä golfkentälle sopii?',
          answer: 'Golfkentälle sopii toiminnanohjausjärjestelmä, joka tukee lähtöaikojen varausta, ryhmävarauksia, jäsenhallintaa ja verkkomaksuja. GolfBooker tarjoaa kaikki nämä ominaisuudet yhdessä helppokäyttöisessä paketissa.'
        },
        simulatorBooking: {
          question: 'Miten golfsimulaattorin ajanvaraus toimii?',
          answer: 'GolfBookerin simulaattorivarausjärjestelmässä asiakkaat voivat varata aikoja verkosta 24/7. Järjestelmä tukee erilaisia hinnoittelumalleja (ruuhka-ajat, hiljaiset ajat), sarjalippuja ja toistuvien varausten hallintaa.'
        },
        implementation: {
          question: 'Kuinka kauan käyttöönotto kestää?',
          answer: 'Käyttöönotto kestää noin 1-2 viikkoa, johon sisältyy henkilökunnan perehdytys ja integraatiot. Autamme koko prosessin ajan.'
        },
        support: {
          question: 'Millaista asiakastukea tarjoatte?',
          answer: 'Tarjoamme suomenkielistä asiakastukea. Saat nopeasti apua sähköpostitse, puhelimitse tai chat-tuen kautta.'
        },
        pricing: {
          question: 'Miten hinnoittelu toimii?',
          answer: 'Valitse tarvitsemasi toiminnot ja maksa vain niistä. Pyydä tarjous, niin räätälöimme paketin juuri sinun kenttäsi tarpeisiin. Hinnoittelu on selkeä ja järkevä ilman piilokustannuksia.'
        },
        handicap: {
          question: 'Pystyykö pelaajat palauttamaan tuloskortit niin, että tasoitus päivittyy automaattisesti?',
          answer: 'Kyllä! Pelaajat voivat palauttaa tuloskortit suoraan sovelluksessa, ja tasoitus päivittyy automaattisesti.'
        },
        tournamentModule: {
          question: 'Voiko pelkän kilpailumoduulin hankkia?',
          answer: 'Kyllä! Kilpailumoduulin voi hankkia erikseen ilman koko varausjärjestelmän käyttöönottoa. Se sopii klubeille, jotka haluavat modernisoida kilpailunhallinnan säilyttäen nykyisen varausjärjestelmän.'
        },
        finnishCompany: {
          question: 'Onko GolfBooker suomalainen yritys?',
          answer: 'Kyllä, GolfBooker on 100% suomalainen yritys. Funect Oy on perustettu Helsingissä ja palvelemme ensisijaisesti suomalaisia golfkenttiä ja simulaattoreita. Asiakaspalvelu on suomeksi.'
        }
      }
    },
    tournaments: {
      title: 'Kilpailujen hallinta',
      subtitle: 'Hallitse kilpailut helposti - ilmoittautumisista tuloslistoihin',
      management: {
        title: 'Kilpailujen hallinta',
        description: 'Helppokäyttöinen järjestelmä hoitaa koko kilpailuprosessin saumattomasti - ilmoittautumisista ja lähtölistoista aina tulosten julkaisuun saakka. Tuloslistat päivittyvät reaaliajassa ja pelaajat saavat välittömästi ajantasaiset tiedot. Tukee kaikkia yleisimpiä kilpailumuotoja kuten lyöntiä, staplefordia ja bogey-peliä. Taustalla toimivat automatisoidut prosessit säästävät aikaa, vähentävät virheitä ja pitävät tapahtuman sujuvana.'
      },
      reporting: {
        title: 'Raportointi ja analytiikka',
        description: 'Monipuoliset analyysityökalut tarjoavat ajantasaista tietoa kilpailuista. Voit tulostaa tuloslistat, seurata kilpailun etenemistä ja kerätä osallistujatietoja kätevästi. Järjestelmä tarjoaa yksityiskohtaiset raportit kilpailuhistoriasta, osallistujamääristä ja tilastoista joita voit hyödyntää toiminnan kehittämisessä.'
      },
      integrations: {
        title: 'Integraatiot',
        description: 'Saumaton yhteys olemassa oleviin järjestelmiin. Kilpailunhallinta integroituu vaivattomasti ERP-järjestelmiin, jäsenrekistereihin ja maksuratkaisuihin. GolfBookerin kilpailumoduuli voidaan ottaa käyttöön myös erikseen ilman koko varausjärjestelmän käyttöönottoa, jolloin se toimii täydellisesti nykyisten järjestelmiesi rinnalla.'
      }
    },
    simulators: {
      title: 'Golfsimulaattorit',
      subtitle: 'Moderni järjestelmä simulaattoritoiminnan hallintaan - räätälöity juuri sinun tarpeisiisi',
      features: {
        streamlined: {
          title: 'Räätälöity simulaattoreille',
          description: 'Vain ne ominaisuudet mitä tarvitset - ei turhaa monimutkaisuutta'
        },
        booking: {
          title: 'Helppo varausten hallinta',
          description: 'Yksinkertainen varausjärjestelmä simulaattoriaikojen hallintaan'
        },
        customers: {
          title: 'Asiakashallinta',
          description: 'Seuraa asiakkaita ja heidän käyntejään yhdessä paikassa'
        }
      },
      tailored: {
        title: 'Suunniteltu simulaattoreille',
        description: 'GolfBooker tarjoaa simulaattoritoimijoille saman laadukkaan järjestelmän kuin golfkentille, mutta ilman turhia ominaisuuksia. Saat käyttöösi vain ne työkalut, joita simulaattoritoiminnassa oikeasti tarvitaan.',
        points: [
          'Selkeä ja yksinkertainen käyttöliittymä',
          'Ei turhia kenttätoimintojen ominaisuuksia',
          'Nopea käyttöönotto ja helppo oppia'
        ]
      },
      bookingManagement: {
        title: 'Varausten hallinta',
        description: 'Hallitse simulaattoriaikoja vaivattomasti. Järjestelmä tukee erilaisia hinnoittelumalleja ja toistuvien varausten hallintaa.',
        points: [
          'Aikavälikohtainen hallinta',
          'Ruuhka- ja hiljaisempien aikojen hinnoittelu',
          'Toistuvat varaukset ja sarjaliput'
        ]
      },
      unified: {
        title: 'Yksi järjestelmä - kenttä ja simulaattori',
        description: 'Jos klubillasi on sekä golfkenttä että simulaattori, GolfBooker tarjoaa yhtenäisen järjestelmän molempien hallintaan. Yksi asiakastietokanta, yksi varausjärjestelmä, yksi näkymä kaikkeen.',
        points: [
          'Hallitse kenttä- ja simulaattorivaraukset samasta järjestelmästä',
          'Yhtenäinen asiakastietokanta',
          'Yhdistetty raportointi ja analytiikka',
          'Saumaton kokemus asiakkaillesi'
        ]
      },
      cta: {
        title: 'Valmis modernisoimaan simulaattoritoimintasi?',
        description: 'Ota yhteyttä ja kerromme lisää miten GolfBooker voi auttaa simulaattoritoimintaasi.',
        formNote: 'Täytä lomake, niin otamme sinuun yhteyttä pian.'
      }
    },
    footer: {
      slogan: 'Moderni hallintajärjestelmä golfin ammattilaisille',
      domestic: 'Kotimainen yritys',
      product: 'TUOTE',
      forGolfCourses: 'Golfkentille',
      forPlayers: 'Pelaajille',
      company: 'YRITYS',
      contact: 'Ota yhteyttä',
      downloadApp: 'LATAA SOVELLUS',
      comingSoon: 'Tulossa pian',
      appStore: 'App Store',
      googlePlay: 'Google Play',
      terms: 'Käyttöehdot',
      privacy: 'Tietosuojakäytäntö',
      rights: 'Kaikki oikeudet pidätetään'
    },
    demo: {
      backToHome: 'Takaisin etusivulle',
      title: 'Pelaaja',
      subtitle: 'Tutustu GolfBooker-sovellukseen ja kokeile miten helppoa varaaminen voi olla kokeilemalla sovellusta demossa, klikkaa näyttöä aloittaaksesi',
      howItWorks: 'Miten demo toimii',
      step1Title: 'Selaa golfkenttiä',
      step1Desc: 'Demo näyttää "Demo Golf Club" -näkymän, jossa näet kentän tiedot ja ajankohtaiset kilpailut.',
      step2Title: 'Varaa lähtöaika',
      step2Desc: 'Klikkaa "Varaa Nyt" -nappia nähdäksesi saatavilla olevat lähtöajat. Valitse sopiva aika listalta.',
      step3Title: 'Vahvistus',
      step3Desc: 'Demo näyttää vahvistusnäkymän, jossa näet varauksen tiedot. Oikeassa sovelluksessa pelaaja saa myös sähköpostivahvistuksen.',
      wantYourOwn: 'Haluatko oman version?',
      wantYourOwnDesc: 'Aloita ilmainen 30 päivän kokeilu ja näe miten GolfBooker voi parantaa kentän varausprosesseja.',
      startFreeTrial: 'Aloita ilmainen kokeilu',
      whyGolfBooker: 'Miksi GolfBooker?',
      easyToUse: 'Helppo käyttää',
      easyToUseDesc: 'Intuitiivinen käyttöliittymä tekee varaamisesta nopeaa ja vaivatonta',
      allCourses: 'Laaja kenttävalikoima',
      allCoursesDesc: 'Löydä ja varaa lähtöaikoja monelta golfkentältä Suomessa',
      book247: 'Varaa 24/7',
      book247Desc: 'Varaa lähtöaikasi milloin vain, missä vain - sovellus on aina auki',
      beFirstTitle: 'Ole ensimmäisten joukossa',
      beFirstDesc: 'Liity odotulistalle ja saat ilmoituksen, kun sovellus julkaistaan.',
      emailPlaceholder: 'sahkopostisi@email.com',
      joinWaitlist: 'Liity listalle',
      noSpam: 'Ei roskapostia, vain päivityksiä'
    },
    booking: {
      title: 'Varaa demo',
      subtitle: 'Valitse sopiva aika esittelylle',
      selectDate: 'Valitse päivä',
      selectTime: 'Valitse aika',
      yourDetails: 'Yhteystiedot',
      name: 'Nimi',
      email: 'Sähköposti',
      companyName: 'Yritys',
      phone: 'Puhelin',
      bookDemo: 'Varaa demo',
      booking: 'Varataan...',
      success: 'Demo varattu!',
      successMessage: 'Otamme sinuun yhteyttä vahvistaaksemme ajan.',
      error: 'Varaus epäonnistui',
      tryAgain: 'Yritä uudelleen',
      back: 'Takaisin',
      previousWeek: 'Edellinen viikko',
      nextWeek: 'Seuraava viikko',
      today: 'Tänään',
      weekdays: {
        mon: 'Ma',
        tue: 'Ti',
        wed: 'Ke',
        thu: 'To',
        fri: 'Pe'
      }
    },
    contact: {
      backToHome: 'Takaisin etusivulle',
      title: 'Kysyttävää?',
      subtitle: 'Ota yhteyttä, niin kerromme lisää',
      sendMessage: 'Lähetä viesti',
      name: 'Nimi',
      namePlaceholder: 'Koko nimesi',
      email: 'Sähköposti',
      emailPlaceholder: 'sahkopostisi@esimerkki.com',
      phone: 'Puhelin',
      phonePlaceholder: '+358 40 XXX XXXX',
      optional: 'valinnainen',
      timeframe: 'Toivottu ajanjakso',
      timeframePlaceholder: 'Esim. ke 10.11.2025 klo 15:00',
      subject: 'Aihe',
      selectSubject: 'Valitse aihe',
      subjectGeneral: 'Yleinen kysely',
      subjectDemo: 'Pyydä demo',
      subjectPricing: 'Hinnoittelu',
      subjectTechnical: 'Tekninen tuki',
      subjectOther: 'Muu kysymys',
      message: 'Viesti',
      messagePlaceholder: 'Kerro lisää...',
      send: 'Lähetä viesti',
      phoneTitle: 'Puhelin',
      emailTitle: 'Sähköposti',
      sales: 'Myynti',
      salesDescription: 'Yleiset tiedustelut ja tarjouspyynnöt',
      technicalSupport: 'Tekninen tuki',
      technicalSupportDescription: 'Käyttötuki ja tekniset ongelmat',
      businessHours: 'ma–pe klo 9–18',
      whatsapp: 'Viesti WhatsAppissa'
    },
    demoTrial: {
      title: 'Kokeile maksutta 14 päivää',
      subtitle: 'Ei luottokorttia, ei sitoutumista',
      company: 'Yritys / Hulaala',
      companyPlaceholder: 'Virtuainen nimi',
      contactPerson: 'Yhteyshenkilö',
      contactPersonPlaceholder: 'Koko nimi',
      email: 'Sähköposti',
      emailPlaceholder: 'nimi@email.fi',
      phone: 'Puhelin',
      phonePlaceholder: '+358 40 123 4567',
      message: 'Viesti',
      messagePlaceholder: 'Kerro tarpeistasi...',
      acceptUpdates: 'Haluan vastaanottaa päivityksiä ja vinkkejä',
      bySubmitting: 'Lähettämällä hyväksyt',
      privacyPolicy: 'tietosuojakäytäntömme',
      submit: 'Luo demo-ympäristö'
    },
    story: {
      title: 'Meistä',
      subtitle: 'Nuori ja kunnianhimoinen tiimi, joka haluaa tuoda golfkentille raikkaan tuulahduksen',
      background: {
        title: 'Taustamme',
        paragraph1: 'Lähdimme alun perin kehittämään mobiilisovellusta liikunta-alalle, jonka tarkoituksena oli sisältää ajanvarausjärjestelmä ja sosiaalisia ominaisuuksia käyttäjille.',
        paragraph2: 'Keskustelut liikuntapaikkojen kanssa osoittivat, että he toivovat kokonaisvaltaista järjestelmää, jolla toiminnan pyörittäminen onnistuu yhdestä paikasta. Olemme kehittäneet vastaavanlaista järjestelmää muulle liikunta-alalle, erityisesti ryhmäliikuntaan, ja GolfBookerissa hyödynnämme tätä pohjaa huomioiden golfin omat erityistarpeet.'
      },
      pivot: {
        title: 'Käännekohta',
        paragraph1: 'Tämän johdosta meillä oli jo pohja toiminnanohjaus-ratkaisuille. Teimme haastattelukierroksen useille kentille ja pelaajille, ja huomasimme, että markkinassa on tilaa ja kysyntää uudelle toimijalle.',
        paragraph2: 'Meillä yhdistyy nykyaikainen ohjelmistokehitys, markkinointi, kuluttajakokemuksen ymmärrys sekä aito into tehdä asiat uudella tavalla. Pidämme jalat tukevasti maassa, mutta katseen rohkeasti tulevassa.'
      },
      team: {
        title: 'Tiimimme',
        intro: 'Olemme nuori ja kunnianhimoinen tiimi, joka haluaa tuoda golfkentille raikkaan tuulahduksen.',
        alexandr: {
          role: 'Perustaja',
          bio: 'Alexandr on toiminut markkinoinnin ja digitaalisen sisällön parissa jo nuoresta lähtien. Asiakasprojekteista kasvanut kiinnostus teknologiaa kohtaan vei Aalto-yliopiston kauppakorkeakouluun ja koodaamisen syvään päätyyn. Freelance-kehitysprojekteista askel omaan ohjelmistotuotteeseen oli luonnollinen. Golf on kulkenut mukana pienestä pitäen, ja nyt urheilun, teknologian ja yrittäjyyden yhdistäminen tuntuu vihdoin täydelliseltä yhtälöltä.'
        },
        veeti: {
          role: 'Perustaja',
          bio: 'Veeti tuo tiimiin monipuolisen taustan pelastajan ja kriisinhallinnan tehtävistä, joissa yhdistyvät kurinalaisuus, vastuuntunto ja kyky toimia paineen alla. Kainuusta Helsinkiin kotiutuneena Aalto-yliopiston opinnot ja yrittäjyys ovat vahvistaneet osaamista liiketoiminnan kehittämisessä ja asiakaslähtöisissä ratkaisuissa. Kestävyysurheilun lisäksi golfista on tullut muutamassa vuodessa aktiivinen arjen rytmittäjä, mikä tuo tekemiseen myös pelaajan käytännön näkökulman. Veeti tunnetaan vahvasta draivistaan ja päätöksentekokyvystään.'
        },
        together: 'Yhdessä muodostamme tiimin, joka ei pelkästään puhu muutoksesta — me rakennamme sitä käytännössä, nopealla syklillä ja oikeiden käyttäjien kanssa.'
      },
      offer: {
        title: 'Mitä tarjoamme',
        paragraph1: 'Emme tarjoa pelkkää ohjelmistoa, vaan kokonaisvaltaisen ratkaisun.',
        paragraph2: 'GolfBooker tarjoaa alustan koko golfklubin pyörittämiseen: jäsen- ja osakasrekisteristä varauksiin, tapahtumiin, viestintään, kilpailuihin, analytiikkaan, laskutukseen ja kirjanpitoa tukeviin toimintoihin. Simulaattorit, kentät ja muut resurssit, kuten golfautot, ovat hallittavissa samasta paikasta. Uusimpana kehityskohteenamme testaamme tekoälyä dynaamisen hinnoittelun tukena.',
        paragraph3: 'Pelaajat voivat palauttaa tasoituskierroksia sovelluksessa ja käyttää mobiilituloskorttia kilpailuissa. Kaveritoiminnot, yhteisöllisyys ja AI-ratkaisut tekevät kokemuksesta edistyksellisen sekä kentille että pelaajille.',
        paragraph4: 'Ja mikä tärkeintä — jos klubille tai pelaajille syntyy tarve, me toteutamme.'
      },
      pricing: {
        title: 'Hinnoittelu',
        paragraph1: 'Hinnoittelemme modulaarisesti ja kenttä maksaa siitä, mitä tarvitsee. Emme sido hintoja liikevaihtoon tai menestykseen. Asiakkaan kasvu on meille ilon aihe, ei syy nostaa hintoja.',
        paragraph2: 'Pelaajille sovellus on maksuton, mukaan lukien tasoituskierrosten palautus. Tähtäämme tulevaisuudessa läpinäkyvään hinnoitteluun, jossa kenttä voi valita sopivan paketin verkkosivuiltamme tai pyytää tarpeisiinsa räätälöidyn ratkaisun.'
      },
      timeline: {
        title: 'Aikataulu',
        paragraph1: 'Aloitamme parhaillaan joulukuun aikana ensimmäisten kenttien käyttöönottoa, ja sovelluksen ensimmäinen versio julkaistaan tammikuussa 2026. Olemme aikataulussa tulevaa kautta varten.'
      },
      support: {
        title: 'Asiakastuki',
        paragraph1: 'Tarjoamme käyttöönoton yhteydessä koulutuksen ja jatkuva asiakastuki hoituu nimetyn yhteyshenkilön kautta. Lisäksi järjestelmästä löytyy ohjevideoita sekä vastauksia yleisiin kysymyksiin.'
      },
      partnerships: {
        title: 'Yhteistyö',
        paragraph1: 'Teemme aktiivisesti yhteistyötä eri golfalan toimijoiden kanssa uusien innovaatioiden rakentamiseksi ja uskomme vahvasti, että yhdessä luomme golfin tulevaisuuden. Kehitämme vaiheittain all-in-one alustaa suomalaiselle golfyhteisölle. Rakennamme vankalle pohjalle, jotta järjestelmän skaalautuessa laatu ei kärsi.'
      },
      mission: {
        title: 'Tavoitteennamme on tarjota jokaiselle kentälle heidän tarpeisiin sopiva paketti fiksuun hintaan.',
        closing: 'Kuluttajapuolelle haluamme, että pelaajille riittää jatkossa yksi sovellus, joka sisältää kaiken: varaukset, tasoituskierrosten palautukset, sosiaaliset ominaisuudet, kilpailuihin ilmoittautumiset sekä tulosten merkkaukset.'
      },
      keyPoints: {
        modernTech: {
          title: 'Moderni teknologia',
          description: 'Nykyaikainen ohjelmistokehitys ja kuluttajakokemuksen ymmärrys yhdistettynä aitoon intoon tehdä asiat uudella tavalla.'
        },
        fairPricing: {
          title: 'Järkevä hinnoittelu',
          description: 'Modulaarinen hinnoittelu — maksat vain siitä mitä tarvitset. Emme sido hintoja liikevaihtoon tai menestykseen.'
        },
        allInOne: {
          title: 'Kokonaisvaltainen ratkaisu',
          description: 'Koko golfklubin pyörittäminen yhdestä paikasta: varaukset, jäsenrekisteri, kilpailut, analytiikka ja markkinointi.'
        },
        smallTeam: {
          title: 'Pieni tiimi, iso tahto',
          description: 'Pidämme jalat tukevasti maassa, mutta katseen rohkeasti tulevassa. Liikumme nopeasti ja kuuntelemme asiakkaitamme.'
        }
      }
    }
  },
  en: {
    nav: {
      home: 'Golf Courses',
      story: 'Our Story',
      forPlayers: 'For Players',
      tournaments: 'Tournaments',
      simulators: 'Golf Simulators',
      contact: 'Contact',
      startTrial: 'Start Free Trial',
      tryDemo: 'Try Demo',
      signIn: 'Sign In'
    },
    home: {
      readMore: 'Read more'
    },
    hero: {
      title: 'Modern Booking System for Golf Clubs',
      description: 'A modern solution for managing golf course bookings. No complicated systems or unreasonable prices.',
      requestDemo: 'Book Demo',
      viewFeatures: 'View Features',
      integrationNexGolf: 'NexGolf Integration',
      courses: '50+ courses',
      support: '24/7 support',
      clickToView: 'Open dashboard in larger view'
    },
    features: {
      title: 'Everything you need to manage your course',
      subtitle: 'Powerful tools that save time and make daily operations easier.',
      bookings: {
        title: 'Bookings & Time Management',
        subtitle: 'Automated booking system that saves time',
        items: [
          'Real-time booking management and calendar view',
          'Automatic confirmations and reminders',
          'Group bookings and tournament management tools'
        ]
      },
      payments: {
        title: 'Payments & Billing',
        subtitle: 'Smooth payments and automatic billing',
        items: [
          'Online payments (Stripe, Paytrail, Checkout Finland)',
          'Automatic billing and accounting',
          'Membership fees and season ticket management'
        ]
      },
      analytics: {
        title: 'Analytics & Reporting',
        subtitle: 'Data-driven decisions',
        items: [
          'Real-time reports and analytics',
          'Customer data and segmentation',
          'Utilization rate analysis and capacity',
          'Revenue forecasts and trend analysis'
        ]
      }
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Find answers to common questions',
      questions: {
        whatIsGolfBooker: {
          question: 'What is GolfBooker?',
          answer: 'GolfBooker is a Finnish, modern booking system for golf courses and golf simulators. It includes a booking calendar, tournament module, customer management, and analytics.'
        },
        bookingSystem: {
          question: 'What kind of booking system is suitable for a golf course?',
          answer: 'A golf course needs a booking system that supports tee time reservations, group bookings, member management, and online payments. GolfBooker provides all these features in one easy-to-use package.'
        },
        simulatorBooking: {
          question: 'How does golf simulator booking work?',
          answer: 'With GolfBooker\'s simulator booking system, customers can book slots online 24/7. The system supports various pricing models (peak hours, off-peak), multi-pass cards, and recurring booking management.'
        },
        implementation: {
          question: 'How long does implementation take?',
          answer: 'Implementation takes approximately 1-2 weeks, which includes staff training and integrations. We assist you throughout the entire process.'
        },
        support: {
          question: 'What kind of customer support do you offer?',
          answer: 'We offer customer support in Finnish and English. You can quickly get help via email, phone, or chat support.'
        },
        pricing: {
          question: 'How does pricing work?',
          answer: 'Choose the features you need and pay only for those. Request a quote, and we\'ll customize a package specifically for your course\'s needs. Pricing is transparent and fair with no hidden costs.'
        },
        handicap: {
          question: 'Can players submit scorecards so that handicap updates automatically?',
          answer: 'Yes! Players can submit scorecards directly in the app, and the handicap updates automatically.'
        },
        tournamentModule: {
          question: 'Can I get just the tournament module?',
          answer: 'Yes! The tournament module can be acquired separately without implementing the full booking system. It\'s perfect for clubs that want to modernize tournament management while keeping their current booking system.'
        },
        finnishCompany: {
          question: 'Is GolfBooker a Finnish company?',
          answer: 'Yes, GolfBooker is a 100% Finnish company. Funect Oy was founded in Helsinki and we primarily serve Finnish golf courses and simulators. Customer support is available in Finnish.'
        }
      }
    },
    tournaments: {
      title: 'Tournament Management',
      subtitle: 'Manage tournaments effortlessly - from registration to leaderboards',
      management: {
        title: 'Tournament Management',
        description: 'User-friendly system that seamlessly handles the entire tournament process - from registrations and tee sheets to results publication. Leaderboards update in real-time and players receive instant, up-to-date information. Supports all common competition formats including stroke play, stableford, and bogey. Automated processes running in the background save time, reduce errors, and keep the event running smoothly.'
      },
      reporting: {
        title: 'Reporting and Analytics',
        description: 'Comprehensive analytics tools provide up-to-date information about competitions. Print result lists, track competition progress, and collect participant data effortlessly. The system delivers detailed reports on competition history, participation numbers, and statistics that you can leverage for operational development.'
      },
      integrations: {
        title: 'Integrations',
        description: 'Seamless connection to existing systems. Competition management integrates effortlessly with ERP systems, member registries, and payment solutions. GolfBooker\'s competition module can also be implemented independently without adopting the full booking system, allowing it to work perfectly alongside your current systems.'
      }
    },
    simulators: {
      title: 'Golf Simulators',
      subtitle: 'Modern system for managing simulator operations - tailored to your needs',
      features: {
        streamlined: {
          title: 'Tailored for Simulators',
          description: 'Only the features you need - no unnecessary complexity'
        },
        booking: {
          title: 'Easy Booking Management',
          description: 'Simple booking system for managing simulator time slots'
        },
        customers: {
          title: 'Customer Management',
          description: 'Track customers and their sessions in one place'
        }
      },
      tailored: {
        title: 'Designed for Simulators',
        description: 'GolfBooker offers simulator operators the same quality system as for golf courses, but without unnecessary features. You get access to only the tools that are actually needed for simulator operations.',
        points: [
          'Clear and simple user interface',
          'No unnecessary course management features',
          'Quick setup and easy to learn'
        ]
      },
      bookingManagement: {
        title: 'Booking Management',
        description: 'Manage simulator time slots effortlessly. The system supports various pricing models and recurring booking management.',
        points: [
          'Time slot management',
          'Peak and off-peak pricing',
          'Recurring bookings and multi-pass cards'
        ]
      },
      unified: {
        title: 'One System - Course and Simulator',
        description: 'If your club has both a golf course and simulator, GolfBooker provides a unified system for managing both. One customer database, one booking system, one view of everything.',
        points: [
          'Manage course and simulator bookings from the same system',
          'Unified customer database',
          'Combined reporting and analytics',
          'Seamless experience for your customers'
        ]
      },
      cta: {
        title: 'Ready to modernize your simulator operations?',
        description: 'Get in touch and we\'ll tell you more about how GolfBooker can help your simulator business.',
        formNote: 'Fill out the form and we\'ll contact you soon.'
      }
    },
    footer: {
      slogan: 'Modern booking system for golf courses',
      domestic: 'Finnish company',
      product: 'PRODUCT',
      forGolfCourses: 'For Golf Courses',
      forPlayers: 'For Players',
      company: 'COMPANY',
      contact: 'Contact',
      downloadApp: 'DOWNLOAD APP',
      comingSoon: 'Coming Soon',
      appStore: 'App Store',
      googlePlay: 'Google Play',
      terms: 'Terms of Service',
      privacy: 'Privacy Policy',
      rights: 'All rights reserved'
    },
    demo: {
      backToHome: 'Back to Home',
      title: 'Player',
      subtitle: 'Explore the GolfBooker app and see how easy booking can be by trying the app in demo mode, click the screen to start',
      howItWorks: 'How the demo works',
      step1Title: 'Browse golf courses',
      step1Desc: 'The demo shows the "Demo Golf Club" view, where you can see course information and current competitions.',
      step2Title: 'Book a tee time',
      step2Desc: 'Click the "Book Now" button to see available tee times. Select a suitable time from the list.',
      step3Title: 'Confirmation',
      step3Desc: 'The demo shows a confirmation view where you can see the booking details. In the real app, the player also receives an email confirmation.',
      wantYourOwn: 'Want your own version?',
      wantYourOwnDesc: 'Start a free 30-day trial and see how GolfBooker can improve your course booking processes.',
      startFreeTrial: 'Start Free Trial',
      whyGolfBooker: 'Why GolfBooker?',
      easyToUse: 'Easy to Use',
      easyToUseDesc: 'Intuitive interface makes booking quick and effortless',
      allCourses: 'Wide Course Selection',
      allCoursesDesc: 'Find and book tee times at many golf courses in Finland',
      book247: 'Book 24/7',
      book247Desc: 'Book your tee time anytime, anywhere - the app is always open',
      beFirstTitle: 'Be Among the First',
      beFirstDesc: 'Join the waiting list and get notified when the app launches.',
      emailPlaceholder: 'youremail@email.com',
      joinWaitlist: 'Join Waitlist',
      noSpam: 'No spam, just updates'
    },
    booking: {
      title: 'Book a Demo',
      subtitle: 'Choose a convenient time for a demo',
      selectDate: 'Select a date',
      selectTime: 'Select a time',
      yourDetails: 'Your details',
      name: 'Name',
      email: 'Email',
      companyName: 'Company',
      phone: 'Phone',
      bookDemo: 'Book Demo',
      booking: 'Booking...',
      success: 'Demo booked!',
      successMessage: 'We will contact you to confirm the time.',
      error: 'Booking failed',
      tryAgain: 'Try again',
      back: 'Back',
      previousWeek: 'Previous week',
      nextWeek: 'Next week',
      today: 'Today',
      weekdays: {
        mon: 'Mon',
        tue: 'Tue',
        wed: 'Wed',
        thu: 'Thu',
        fri: 'Fri'
      }
    },
    contact: {
      backToHome: 'Back to Home',
      title: 'Questions?',
      subtitle: 'Get in touch and we\'ll tell you more',
      sendMessage: 'Send us a message',
      name: 'Name',
      namePlaceholder: 'Your full name',
      email: 'Email',
      emailPlaceholder: 'youremail@example.com',
      phone: 'Phone',
      phonePlaceholder: '+358 40 XXX XXXX',
      optional: 'optional',
      timeframe: 'Preferred time',
      timeframePlaceholder: 'E.g. Wed Nov 10, 2025 at 3:00 PM',
      subject: 'Subject',
      selectSubject: 'Select subject',
      subjectGeneral: 'General Inquiry',
      subjectDemo: 'Request Demo',
      subjectPricing: 'Pricing',
      subjectTechnical: 'Technical Support',
      subjectOther: 'Other Question',
      message: 'Message',
      messagePlaceholder: 'Tell us more...',
      send: 'Send Message',
      phoneTitle: 'Phone',
      emailTitle: 'Email',
      sales: 'Sales',
      salesDescription: 'General inquiries and quote requests',
      technicalSupport: 'Technical Support',
      technicalSupportDescription: 'User support and technical issues',
      businessHours: 'Mon–Fri 9 AM–6 PM',
      whatsapp: 'Message on WhatsApp'
    },
    demoTrial: {
      title: 'Try Free for 14 Days',
      subtitle: 'No credit card, no commitment',
      company: 'Company / Course',
      companyPlaceholder: 'Virtual name',
      contactPerson: 'Contact Person',
      contactPersonPlaceholder: 'Full name',
      email: 'Email',
      emailPlaceholder: 'name@email.com',
      phone: 'Phone',
      phonePlaceholder: '+358 40 123 4567',
      message: 'Message',
      messagePlaceholder: 'Tell us about your needs...',
      acceptUpdates: 'I want to receive updates and tips',
      bySubmitting: 'By submitting you accept our',
      privacyPolicy: 'privacy policy',
      submit: 'Create Demo Environment'
    },
    story: {
      title: 'About Us',
      subtitle: 'A young and ambitious team bringing a fresh approach to golf course management',
      background: {
        title: 'Our Background',
        paragraph1: 'We originally set out to develop a mobile application for the sports industry, designed to include a booking system and social features for users.',
        paragraph2: 'Conversations with sports venues showed that they wanted a comprehensive system to run their operations from one place. We have developed a similar system for other sports industries, especially group fitness, and in GolfBooker we leverage this foundation while addressing golf\'s specific needs.'
      },
      pivot: {
        title: 'The Turning Point',
        paragraph1: 'This gave us a foundation for business management solutions. We conducted an interview round with several courses and players, and discovered that there is room and demand in the market for a new player.',
        paragraph2: 'We combine modern software development, marketing, consumer experience understanding, and a genuine passion for doing things in a new way. We keep our feet firmly on the ground but our eyes boldly on the future.'
      },
      team: {
        title: 'Our Team',
        intro: 'We are a young and ambitious team that wants to bring a fresh breeze to golf courses.',
        alexandr: {
          role: 'Founder',
          bio: 'Alexandr has been working in marketing and digital content since a young age. Growing interest in technology from client projects led him to Aalto University School of Business and deep into coding. The step from freelance development projects to building his own software product was natural. Golf has been part of his life since childhood, and now combining sports, technology, and entrepreneurship finally feels like the perfect equation.'
        },
        veeti: {
          role: 'Founder',
          bio: 'Veeti brings a unique background to the team, combining discipline, responsibility, and the ability to perform under pressure. His path went through peacekeeping and rescue work before the spark for business and bigger challenges drew him to Aalto University School of Business. Recent years have built a clear rhythm of goal-oriented work and fitness, and golf has quickly and passionately become part of everyday life. Entrepreneurship is now the next big step, to which Veeti brings strong drive and decision-making ability.'
        },
        together: 'Together we form a team that doesn\'t just talk about change — we build it in practice, with a fast cycle and with real users.'
      },
      offer: {
        title: 'What We Offer',
        paragraph1: 'We don\'t just offer software, but a comprehensive solution.',
        paragraph2: 'GolfBooker provides a platform for running an entire golf club: from member and shareholder registers to bookings, events, communication, tournaments, analytics, billing, and accounting support functions. Simulators, courses, and other resources like golf carts can be managed from the same place. As our latest development, we are testing AI to support dynamic pricing.',
        paragraph3: 'Players can submit handicap rounds in the app and use mobile scorecards in competitions. Friend features, community, and AI solutions make the experience progressive for both courses and players.',
        paragraph4: 'And most importantly — if a club or players have a need, we deliver.'
      },
      pricing: {
        title: 'Pricing',
        paragraph1: 'We price modularly and the course pays for what it needs. We don\'t tie prices to revenue or success. Customer growth is a source of joy for us, not a reason to raise prices.',
        paragraph2: 'The app is free for players, including handicap round submissions. In the future, we aim for transparent pricing where courses can choose a suitable package from our website or request a customized solution for their needs.'
      },
      timeline: {
        title: 'Timeline',
        paragraph1: 'We are currently starting the implementation of the first courses during December, and the first version of the app will be released in January 2026. We are on schedule for the upcoming season.'
      },
      support: {
        title: 'Customer Support',
        paragraph1: 'We provide training during implementation, and ongoing customer support is handled through a named contact person. The system also includes tutorial videos and answers to common questions.'
      },
      partnerships: {
        title: 'Partnerships',
        paragraph1: 'We actively collaborate with various golf industry players to build new innovations and strongly believe that together we create the future of golf. We are developing an all-in-one platform for the Finnish golf community in phases. We build on a solid foundation so that quality doesn\'t suffer as the system scales.'
      },
      mission: {
        title: 'Our goal is to provide every course with a package suited to their needs at a smart price.',
        closing: 'For consumers, we want players to need just one app in the future that includes everything: bookings, handicap round submissions, social features, tournament registrations, and score recording.'
      },
      keyPoints: {
        modernTech: {
          title: 'Modern Technology',
          description: 'Modern software development and consumer experience understanding combined with a genuine passion for doing things in a new way.'
        },
        fairPricing: {
          title: 'Fair Pricing',
          description: 'Modular pricing — you only pay for what you need. We don\'t tie prices to revenue or success.'
        },
        allInOne: {
          title: 'Comprehensive Solution',
          description: 'Running an entire golf club from one place: bookings, member registry, tournaments, analytics, and marketing.'
        },
        smallTeam: {
          title: 'Small Team, Big Drive',
          description: 'We keep our feet on the ground but our eyes boldly on the future. We move fast and listen to our customers.'
        }
      }
    }
  }
};
