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
      home: 'Etusivu',
      story: 'Meistä',
      forPlayers: 'Käyttäjille',
      tournaments: 'Kilpailut',
      simulators: 'Golfsimulaattorit',
      contact: 'Ota yhteyttä',
      startTrial: 'Aloita ilmainen kokeilu',
      tryDemo: 'Kokeile demoa'
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
          answer: 'Valitse tarvitsemasi toiminnot ja maksa vain niistä. Pyydä tarjous, niin räätälöimme paketin juuri sinun kenttäsi tarpeisiin.'
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
      slogan: 'Moderni hallintajärjestelmä golfkentille',
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
      salesDescription: 'Yleiset tiedustelut, tarjouspyynnöt ja tuotedemot',
      technicalSupport: 'Tekninen tuki',
      technicalSupportDescription: 'Käyttötuki, tekniset ongelmat ja ohjeet',
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
      subtitle: 'Kaksi Aalto-yliopiston opiskelijaa, jotka rakastavat urheilua, rakentamista ja ongelmien ratkaisemista',
      intro: {
        paragraph1: 'Tarinamme ei tarvinnut suurta alkua. Se syntyi kahdesta Aalto-yliopiston kaverista, jotka rakastivat urheilua, rakentamista ja sellaisten ongelmien korjaamista, joiden ei enää kuuluisi olla olemassa vuonna 2025.',
        paragraph2: 'Alun perin lähdimme luomaan alustaa, joka yhdistäisi koko urheilumaailman — varaukset, maksut, jäsenyydet, viestinnän, taloushallinnon — kaiken selkeäksi ja moderniksi kokonaisuudeksi. Jokainen järjestelmä, johon kosketimme, tuntui vanhentuneelta, pirstaleiselta tai siltä, ettei sitä oltu koskaan suunniteltu oikeita käyttäjiä varten.'
      },
      pivot: {
        title: 'Käännekohta',
        paragraph1: 'Matkan varrella intohimomme golfiin muutti suunnan. Kun aloimme jutella klubien, proiden, pelaajien ja operatiivisen puolen kanssa, saimme nopeasti selkeän kuvan: nykyiset järjestelmät ovat yksinkertaisesti liian vanhoja, sekavia ja täysin ylihinnoiteltuja.',
        paragraph2: 'Moni klubi joutuu maksamaan järjettömiä summia järjestelmistä, jotka eivät ole pysyneet ajan tasalla — ja vielä kaiken lisäksi käyttää useampaa alustaa yhtä aikaa vain hoitaakseen perustason arkea. Golfalalla ei ollut yhtään aidosti modernia, järkevällä hinnoittelulla toimivaa kokonaisratkaisua. Joten päätimme, että jonkun on pakko korjata tämä. Ja se joku olimme me.'
      },
      solution: {
        title: 'Ratkaisu',
        paragraph1: 'Siksi rakensimme GolfBookerin.',
        paragraph2: 'Ei pikaprojektina, vaan pitkän tähtäimen visiona tuoda golfklubeille moderni teknologia, yksinkertaisuus ja oikeasti hyvä käyttökokemus. Halusimme rakentaa järjestelmän, joka tuntuu nopealta, selkeältä ja kohtuuhintaiselta — ja joka perustuu siihen, mitä klubit oikeasti tarvitsevat. Ei turhaa tavaraa, ei vanhoja rakenteita, ei kohtuuttomia laskuja.',
        paragraph3: 'Vain moderni, tehokas alusta, jonka takana on pieni tiimi, joka välittää oikeasti, liikkuu nopeasti ja kuuntelee vielä nopeammin.'
      },
      present: {
        title: 'Tänään',
        paragraph1: 'Rakennamme GolfBookeria edelleen joka päivä läheisessä yhteistyössä klubien kanssa, heidän palautteensa ja todellisten tarpeidensa pohjalta.',
        paragraph2: 'Mutta yksi asia pysyy muuttumattomana:'
      },
      mission: {
        title: 'Halu tehdä golfklubin arjesta yksinkertaisempaa, älykkäämpää ja miellyttävämpää — modernilla teknologialla ja järkevällä hinnoittelulla.',
        closing: 'Tämä on meidän tarina. Ja rehellisesti: olemme vasta alkutaipaleella.'
      },
      keyPoints: {
        modernTech: {
          title: 'Moderni teknologia',
          description: 'Rakennettu uusimmilla työkaluilla. Nopea, selkeä ja suunniteltu vuodelle 2025 — ei 2005.'
        },
        fairPricing: {
          title: 'Järkevä hinnoittelu',
          description: 'Ei vanhoja, kohtuuttomia vuosimaksuja. Selkeä, reilu ja nykyaikainen malli.'
        },
        realCollaboration: {
          title: 'Aito yhteistyö',
          description: 'Muotoiltu oikeiden klubien ja oikeiden ongelmien perusteella. Ei toimistosta keksittyjä oletuksia.'
        },
        smallTeam: {
          title: 'Pieni tiimi, iso tahto',
          description: 'Liikumme nopeasti, välitämme oikeasti ja kuuntelemme vielä nopeammin. Ei byrokratiaa, vain tuloksia.'
        }
      }
    }
  },
  en: {
    nav: {
      home: 'Home',
      story: 'Our Story',
      forPlayers: 'For Players',
      tournaments: 'Tournaments',
      simulators: 'Golf Simulators',
      contact: 'Contact',
      startTrial: 'Start Free Trial',
      tryDemo: 'Try Demo'
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
        implementation: {
          question: 'How long does implementation take?',
          answer: 'Implementation takes approximately 1-2 weeks, which includes staff training and integrations. We assist you throughout the entire process.'
        },
        support: {
          question: 'What kind of customer support do you offer?',
          answer: 'We offer customer support in Finnish. You can quickly get help via email, phone, or chat support.'
        },
        pricing: {
          question: 'How does pricing work?',
          answer: 'Choose the features you need and pay only for those. Request a quote, and we\'ll customize a package specifically for your course\'s needs.'
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
      salesDescription: 'General inquiries, quote requests, and product demos',
      technicalSupport: 'Technical Support',
      technicalSupportDescription: 'User support, technical issues, and guidance',
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
      title: 'Our Story',
      subtitle: 'Two Aalto University students who love sports, building things, and solving problems',
      intro: {
        paragraph1: 'Our story didn\'t need a dramatic beginning. It started with two friends from Aalto University who loved sports, building things, and fixing problems that simply shouldn\'t exist anymore in 2025.',
        paragraph2: 'We originally set out to create a platform that would unify the entire sports world — bookings, payments, memberships, communication, financial management — all in one clear and modern ecosystem. Every system we touched felt outdated, fragmented, or designed without real users in mind.'
      },
      pivot: {
        title: 'The Turning Point',
        paragraph1: 'Along the way, our passion for golf shifted everything. As we began talking with clubs, pros, players, and the operational side of the sport, the picture became very clear: the existing systems are outdated, confusing, and massively overpriced.',
        paragraph2: 'Many clubs are forced to pay unreasonable amounts for software that hasn\'t kept up with the times — and even then, they often need multiple platforms just to run normal daily operations. There was no truly modern, reasonably priced, all-in-one solution for golf clubs. So we decided that someone needed to fix that. And that someone was us.'
      },
      solution: {
        title: 'The Solution',
        paragraph1: 'That\'s why we built GolfBooker.',
        paragraph2: 'Not as a quick side project, but as a long-term vision to bring modern technology, simplicity, and genuinely good user experience into golf club operations. We wanted to create a system that feels fast, clear, fairly priced — and built around what clubs actually need. No unnecessary features, no legacy structures, no ridiculous yearly fees.',
        paragraph3: 'Just a modern, efficient platform created by a small team that truly cares, moves fast, and listens even faster.'
      },
      present: {
        title: 'Today',
        paragraph1: 'We continue to build GolfBooker every day, working closely with clubs, shaped by their feedback and their real-world challenges.',
        paragraph2: 'But one thing will never change:'
      },
      mission: {
        title: 'Our mission is to make everyday golf operations simpler, smarter, and more enjoyable — with modern technology and fair pricing.',
        closing: 'This is our story. And honestly, we\'re only just getting started.'
      },
      keyPoints: {
        modernTech: {
          title: 'Modern Technology',
          description: 'Built with the latest tools. Fast, clean, and designed for 2025 — not 2005.'
        },
        fairPricing: {
          title: 'Fair Pricing',
          description: 'No old-school, unreasonable yearly fees. A clear, transparent, modern model.'
        },
        realCollaboration: {
          title: 'Real Collaboration',
          description: 'Shaped by real clubs and real problems. Not assumptions made in an office.'
        },
        smallTeam: {
          title: 'Small Team, Big Drive',
          description: 'We move fast, care deeply, and listen even faster. No bureaucracy — just results.'
        }
      }
    }
  }
};
