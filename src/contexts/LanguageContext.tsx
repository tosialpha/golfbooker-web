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
      forPlayers: 'Käyttäjille',
      tournaments: 'Kilpailut',
      contact: 'Ota yhteyttä',
      startTrial: 'Aloita ilmainen kokeilu',
      tryDemo: 'Kokeile demoa'
    },
    hero: {
      title: 'Moderni varausjärjestelmä golfklubeille',
      description: 'Nykyaikainen ratkaisu golfkenttien varausten hallintaan. Ei monimutkaisia järjestelmiä tai kohtuuttomia hintoja.',
      requestDemo: 'Varaa demo',
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
      subtitle: 'Löydä vastaukset yleisimpiin kysymyksiin'
    },
    tournaments: {
      title: 'Kilpailujen hallinta',
      subtitle: 'Kaikki mitä golfklubin tarvitsee kilpailujen hallintaan\n- saatavilla myös erillisenä moduulina',
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
    footer: {
      slogan: 'Moderni varausjärjestelmä golfkentille',
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
      technicalSupport: 'Tekninen tuki',
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
    }
  },
  en: {
    nav: {
      home: 'Home',
      forPlayers: 'For Players',
      tournaments: 'Tournaments',
      contact: 'Contact',
      startTrial: 'Start Free Trial',
      tryDemo: 'Try Demo'
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
      subtitle: 'Find answers to common questions'
    },
    tournaments: {
      title: 'Tournament Management',
      subtitle: 'Everything a golf club needs for tournament management - also available as a separate module',
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
      technicalSupport: 'Technical Support',
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
    }
  }
};
