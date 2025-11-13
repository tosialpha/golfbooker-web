import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'fi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.howItWorks': 'How It Works',
    'nav.faq': 'FAQ',
    'nav.forGolfCourses': 'For Golf Courses',
    'nav.forPlayers': 'For Players',
    'nav.forVenues': 'For Golf Courses',
    'nav.forBusinesses': 'For Golf Courses',
    'nav.forUsers': 'For Players',
    'nav.about': 'About Us',
    'nav.articles': 'Articles',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'Modern Booking System for Golf Courses',
    'hero.subtitle': 'Book your tee times quickly',
    'hero.cta': 'Get Started',
    'hero.launching': 'Launching Early 2026',
    'hero.waitlist': 'Request Demo',
    'hero.preview': 'See Features',
    'hero.howItWorks': 'Why Choose Golfbooker',
    'hero.howItWorksSubtitle': 'Everything your golf course needs',
    'hero.step1.title': 'Professional Booking Management',
    'hero.step1.desc': 'Complete tee time management system with real-time availability, online bookings, and automated confirmations.',
    'hero.step2.title': 'Customer Management & Analytics',
    'hero.step2.desc': 'Track customer data, booking patterns, revenue analytics, and grow your business with insights.',
    'hero.step3.title': 'Affordable & Easy to Use',
    'hero.step3.desc': 'Professional features at a fraction of the cost. No €10,000+ yearly fees. Simple setup, ongoing support.',
    
    // Testimonials
    'testimonials.title': 'What Our Community Says',
    'testimonials.subtitle': 'Real stories from real people',
    'testimonials.1.quote': "I've met 3 new padel partners through Funect! It's so easy to find people at my skill level.",
    'testimonials.1.outcome': 'Met 3 new padel partners',
    'testimonials.2.sport': 'Basketball',
    'testimonials.2.quote': 'Finally, a way to organize pickup sessions without endless group chats. Love the group system!',
    'testimonials.2.outcome': 'Organized 15+ sessions',
    'testimonials.3.quote': 'Discovered 5 amazing courts near me I didn\'t even know existed. Game changer!',
    'testimonials.3.outcome': 'Discovered 5 new venues',
    'testimonials.4.sport': 'Soccer',
    'testimonials.4.quote': 'The community tournaments are incredible. Met so many awesome people through Funect.',
    'testimonials.4.outcome': 'Joined 8 tournaments',
    'testimonials.5.sport': 'Badminton',
    'testimonials.5.quote': 'Funect helped me find regular training partners at my skill level. Now I play 3 times a week!',
    'testimonials.5.outcome': 'Regular playing schedule',
    'testimonials.6.sport': 'Squash',
    'testimonials.6.quote': 'The app made it so easy to connect with other squash enthusiasts. Love the community!',
    'testimonials.6.outcome': 'Found 5+ playing partners',
    'testimonials.7.sport': 'Table Tennis',
    'testimonials.7.quote': 'I was new to the city and Funect helped me make friends through activity. Amazing experience!',
    'testimonials.7.outcome': 'Built new friendships',
    'testimonials.8.sport': 'Basketball',
    'testimonials.8.quote': 'Great way to stay active and meet people who share the same passion for being active!',
    'testimonials.8.outcome': 'Weekly game sessions',
    
    // Mission
    'mission.title': 'Built for Finnish Golf Courses',
    'mission.text': 'After NexGolf shut down, Finnish golf courses were left without affordable booking software. We built Golfbooker to give you professional tee time management, customer analytics, and online booking—without the €10,000+ yearly fees of enterprise systems. Modern software at prices that make sense for Finnish golf courses.',
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Common questions from golf courses',
    'faq.q1': 'How much does Golfbooker cost?',
    'faq.a1': 'We offer transparent, affordable pricing designed for Finnish golf courses. Unlike legacy systems charging €10,000+ per year, our pricing is a fraction of that. Contact us for a custom quote based on your course size and needs.',
    'faq.q2': 'What features are included?',
    'faq.a2': 'Complete booking management, online tee time reservations, customer database, automated confirmations, revenue analytics, mobile app for your customers, website integration, and ongoing support.',
    'faq.q3': 'How long does setup take?',
    'faq.a3': 'Most courses are up and running within 1-2 weeks. We handle data migration, staff training, and provide full support during the transition from your old system.',
    'faq.q4': 'Can we migrate from NexGolf or another system?',
    'faq.a4': 'Yes! We specialize in helping courses migrate from NexGolf and other legacy systems. We\'ll import your customer data, booking history, and ensure a smooth transition.',
    'faq.q5': 'What support do you offer?',
    'faq.a5': 'Full Finnish-language support via phone, email, and chat. Setup assistance, staff training, and ongoing technical support are all included. We\'re here to help your course succeed.',

    // Footer
    'footer.tagline': 'Professional booking system for golf courses',
    'footer.product': 'Product',
    'footer.company': 'Company',
    'footer.downloadApp': 'Download App',
    'footer.terms': 'Terms of Service',
    'footer.privacy': 'Privacy Policy',
    'footer.rights': '2025 Golfbooker. All rights reserved.',
    
    // About
    'about.title': 'About Golfbooker',
    'about.subtitle': 'Built by golfers, for Finnish golf courses.',
    'about.p1': 'When NexGolf shut down in 2024, Finnish golf courses were left scrambling. We saw courses paying €10,000+ per year for outdated systems or struggling with manual booking processes. There had to be a better way.',
    'about.p2': 'We built Golfbooker to give Finnish golf courses a modern, affordable alternative. Professional booking management, customer analytics, and online reservations—all at a fraction of enterprise pricing. No hidden fees, no vendor lock-in, just great software that works.',
    'about.p3': 'Our team understands golf courses because we love golf. We\'re building the software we wish existed when we managed courses ourselves. Founded in Finland, for Finnish golf courses.',
    'about.vision': 'Our Mission',
    'about.visionDesc': 'Replace expensive legacy systems with affordable, modern booking software for every Finnish golf course.',
    'about.values': 'Our Values',
    'about.valuesDesc': 'Transparency, affordability, and exceptional service. We treat your course like our own.',
    'about.innovation': 'Modern Technology',
    'about.innovationDesc': 'Cloud-based, mobile-first, and constantly improving based on feedback from golf course managers.',
    'about.venues': 'Built for Golf Courses',
    'about.venuesDesc': 'Everything you need to manage bookings, grow revenue, and provide excellent service to your customers.',

    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Have questions? We\'d love to hear from you.',
    'contact.formTitle': 'Send us a message',
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Your name',
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.subject': 'Subject',
    'contact.subjectPlaceholder': 'How can we help?',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Tell us more...',
    'contact.send': 'Send Message',
    'contact.emailLabel': 'Email',
    'contact.phoneLabel': 'Phone',
    'contact.phoneHours': 'Mon-Fri 9am-6pm',
    'contact.officeLabel': 'Office',
    'contact.officeAddress': '123 Sports Avenue\nSan Francisco, CA 94102\nUnited States',
  },
  fi: {
    // Navigation
    'nav.howItWorks': 'Miten toimii',
    'nav.faq': 'UKK',
    'nav.forGolfCourses': 'Golfkentille',
    'nav.forPlayers': 'Pelaajille',
    'nav.forVenues': 'Golfkentille',
    'nav.forBusinesses': 'Golfkentille',
    'nav.forUsers': 'Pelaajille',
    'nav.about': 'Tietoa Meistä',
    'nav.articles': 'Artikkelit',
    'nav.contact': 'Ota yhteyttä',

    // Hero
    'hero.title': 'Moderni varausjärjestelmä golfkentille',
    'hero.subtitle': 'Varaa\nlähtöaikasi\nnopeasti.',
    'hero.cta': 'Aloita',
    'hero.launching': 'Lanseeraus alkuvuodesta 2026',
    'hero.waitlist': 'Lataa sovellus (coming soon)',
    'hero.preview': 'Katso ominaisuudet',
    'hero.howItWorks': 'Miksi valita Golfbooker',
    'hero.howItWorksSubtitle': 'Kaikki mitä golfkenttäsi tarvitsee',
    'hero.step1.title': 'Ammattimainen varausjärjestelmä',
    'hero.step1.desc': 'Täydellinen lähtöaikahallinta reaaliaikaisella saatavuudella, verkkovarauksilla ja automaattisilla vahvistuksilla.',
    'hero.step2.title': 'Asiakashallinta & analytiikka',
    'hero.step2.desc': 'Seuraa asiakastietoja, varausmalleja ja liikevaihtoanalytiikkaa. Kasvata liiketoimintaasi tiedon avulla.',
    'hero.step3.title': 'Edullinen & helppo käyttää',
    'hero.step3.desc': 'Ammattilaisominaisuudet murto-osalla hinnasta. Ei 10 000€+ vuosimaksuja. Yksinkertainen käyttöönotto, jatkuva tuki.',
    
    // Testimonials
    'testimonials.title': 'Mitä yhteisömme sanoo',
    'testimonials.subtitle': 'Oikeita tarinoita oikeilta ihmisiltä:',
    'testimonials.1.quote': 'Olen löytänyt kolme uutta padel-kaveria Funectin kautta! On niin helppoa löytää ihmisiä omalla tasollani.',
    'testimonials.1.outcome': 'Löysi 3 uutta pelikaveria',
    'testimonials.2.sport': 'Koripallo',
    'testimonials.2.quote': 'Vihdoin tapa järjestää pickup-sessioita ilman loputtomia ryhmäkeskusteluja. Rakastan ryhmäjärjestelmää!',
    'testimonials.2.outcome': 'Järjesti yli 15 sessiota',
    'testimonials.3.quote': 'Löysin 5 upeaa kenttää läheltäni, joista en tiennyt mitään. Todellinen pelinmuuttaja!',
    'testimonials.3.outcome': 'Löysi 5 uutta kenttää',
    'testimonials.4.sport': 'Jalkapallo',
    'testimonials.4.quote': 'Yhteisön turnaukset ovat mahtavia. Olen tavannut niin paljon upeita ihmisiä Funectin kautta.',
    'testimonials.4.outcome': 'Osallistui 8 turnaukseen',
    'testimonials.5.sport': 'Sulkapallo',
    'testimonials.5.quote': 'Funect auttoi minua löytämään säännöllisiä harjoituskavereita omalla taitotasollani. Nyt pelaan 3 kertaa viikossa!',
    'testimonials.5.outcome': 'Säännöllinen peliharjoitus',
    'testimonials.6.sport': 'Squash',
    'testimonials.6.quote': 'Sovellus teki niin helpoksi yhdistyä muiden squash-harrastajien kanssa. Rakastan yhteisöä!',
    'testimonials.6.outcome': 'Löysi yli 5 pelikaveria',
    'testimonials.7.sport': 'Pöytätennis',
    'testimonials.7.quote': 'Olin uusi kaupungissa ja Funect auttoi minua saamaan ystäviä liikunnan kautta. Upea kokemus!',
    'testimonials.7.outcome': 'Rakensi uusia ystävyyksiä',
    'testimonials.8.sport': 'Koripallo',
    'testimonials.8.quote': 'Loistava tapa pysyä aktiivisena ja tavata ihmisiä, jotka jakavat saman intohimon liikkumiseen!',
    'testimonials.8.outcome': 'Viikoittaiset sessiot',

    // Mission
    'mission.title': 'Rakennettu suomalaisille golfkentille',
    'mission.text': 'NexGolfin sulkeuduttua suomalaiset golfkentät jäivät ilman edullista varausohjelmistoa. Rakensimme Golfbookerin tarjoamaan ammattitasoista lähtöaikahallintaa, asiakasanalytiikkaa ja verkkovarausta—ilman 10 000€+ vuosimaksuja. Moderni ohjelmisto hinnoilla, jotka sopivat suomalaisille golfkentille.',

    // FAQ
    'faq.title': 'Usein kysytyt kysymykset',
    'faq.subtitle': 'Yleisiä kysymyksiä golfkentiltä',
    'faq.q1': 'Paljonko Golfbooker maksaa?',
    'faq.a1': 'Tarjoamme läpinäkyvän, edullisen hinnoittelun suomalaisille golfkentille. Toisin kuin vanhat järjestelmät, jotka veloittavat 10 000€+ vuodessa, meidän hintamme on murto-osa siitä. Ota yhteyttä saadaksesi tarjouksen kenttäsi koon ja tarpeiden mukaan.',
    'faq.q2': 'Mitä ominaisuuksia sisältyy?',
    'faq.a2': 'Täydellinen varausjärjestelmä, lähtöajat, asiakastietokanta, liikevaihtoanalytiikka, mobiilisovellus asiakkaillesi.',
    'faq.q3': 'Kuinka kauan käyttöönotto kestää?',
    'faq.a3': 'Kentät ovat valmiina muutamassa viikossa. Hoidamme tietojen siirron, henkilöstön koulutuksen ja tarjoamme täyden tuen siirtymävaiheessa vanhasta järjestelmästä.',
    'faq.q4': 'Voimmeko siirtyä NexGolfista tai muusta järjestelmästä?',
    'faq.a4': 'Kyllä! Autamme kenttiä siirtymään NexGolfista. Tuomme tarvittava tiedot ja varmistamme sujuvan siirtymän.',
    'faq.q5': 'Millaista tukea tarjoatte?',
    'faq.a5': 'Täysi suomenkielinen tuki puhelimitse, sähköpostilla ja chatilla. Asennusapu, henkilöstön koulutus ja jatkuva tekninen tuki sisältyvät. Olemme täällä auttamassa kenttäänne menestymään.',

    // Footer
    'footer.tagline': 'Moderni varausjärjestelmä golfkentille',
    'footer.product': 'Tuote',
    'footer.company': 'Yritys',
    'footer.downloadApp': 'Lataa sovellus',
    'footer.terms': 'Käyttöehdot',
    'footer.privacy': 'Tietosuojakäytäntö',
    'footer.rights': '2025 Golfbooker. Kaikki oikeudet pidätetään.',

    // About
    'about.title': 'Golfbookerista',
    'about.subtitle': 'Rakennettu golfaajien toimesta, suomalaisille golfkentille.',
    'about.p1': 'Kun NexGolf sulkeutui vuonna 2024, suomalaiset golfkentät jäivät pulaan. Näimme kenttien maksavan 10 000€+ vuodessa vanhentuneista järjestelmistä tai kamppailevan manuaalisten varausprosessien kanssa. Piti löytyä parempi tapa.',
    'about.p2': 'Rakensimme Golfbookerin tarjoamaan suomalaisille golfkentille modernin, edullisen vaihtoehdon. Ammattimainen varausjärjestelmä, asiakasanalytiikka ja verkkovaraukset—kaikki murto-osalla yrityshinnoista. Ei piilomaksuja, ei toimittajalukkoa, vain loistava ohjelmisto joka toimii.',
    'about.p3': 'Tiimimme ymmärtää golfkenttien tarpeet, koska rakastamme golfia. Rakennamme ohjelmistoa, jonka toivoimme olevan olemassa kun itse hallinnoitiin kenttiä. Perustettu Suomessa, suomalaisille golfkentille.',
    'about.vision': 'Missiomme',
    'about.visionDesc': 'Korvata kalliit vanhat järjestelmät edullisella, modernilla varausohjelmistolla jokaiselle suomalaiselle golfkentälle.',
    'about.values': 'Arvomme',
    'about.valuesDesc': 'Läpinäkyvyys, edullisuus ja poikkeuksellinen palvelu. Kohtelemme kenttäänne kuin omanamme.',
    'about.innovation': 'Moderni teknologia',
    'about.innovationDesc': 'Pilvipohjainen, mobiiliystävällinen ja jatkuvasti parantuva golfkenttien päälliköiden palautteen perusteella.',
    'about.venues': 'Rakennettu golfkentille',
    'about.venuesDesc': 'Kaikki mitä tarvitset varausten hallintaan, liikevaihdon kasvattamiseen ja erinomaisen palvelun tarjoamiseen asiakkaillesi.',

    // Contact
    'contact.title': 'Ota Yhteyttä',
    'contact.subtitle': 'Onko sinulla kysyttävää? Haluaisimme kuulla sinulta.',
    'contact.formTitle': 'Lähetä viesti',
    'contact.name': 'Nimi',
    'contact.namePlaceholder': 'Nimesi',
    'contact.email': 'Sähköposti',
    'contact.emailPlaceholder': 'sähköpostisi@esimerkki.com',
    'contact.subject': 'Aihe',
    'contact.subjectPlaceholder': 'Miten voimme auttaa?',
    'contact.message': 'Viesti',
    'contact.messagePlaceholder': 'Kerro lisää…',
    'contact.send': 'Lähetä viesti',
    'contact.emailLabel': 'Sähköposti',
    'contact.phoneLabel': 'Puhelin',
    'contact.phoneHours': 'ma–pe klo 9–18',
    'contact.officeLabel': 'Toimisto',
    'contact.officeAddress': '123 Sports Avenue\nSan Francisco, CA 94102\nYhdysvallat',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('golfbooker-language');
    // Default to Finnish
    return (saved === 'en' ? 'en' : 'fi') as Language;
  });

  useEffect(() => {
    localStorage.setItem('golfbooker-language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
