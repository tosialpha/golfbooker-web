import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Privacy: React.FC = () => {
  const { t, language } = useLanguage();
  const isEnglish = language === 'en';

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-brand-green-600 hover:text-brand-green-700 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          {t('contact.backToHome')}
        </Link>

        {/* Privacy Policy Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-gray-500 mb-3">GolfBooker by Funect</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              {isEnglish ? 'Privacy Policy' : 'Tietosuojaseloste'}
            </h1>
            <p className="text-sm text-gray-500 mb-8 pb-6 border-b border-gray-200">
              {isEnglish ? 'Last updated: October 29, 2025' : 'Päivitetty: 29.10.2025'}
            </p>

            <div className="space-y-8 text-gray-700">

              {/* Introduction */}
              <p className="text-gray-700">
                {isEnglish
                  ? 'This privacy policy explains how GolfBooker collects and processes personal data. The processing of personal data complies with applicable legislation and follows the data protection principles of the EU General Data Protection Regulation.'
                  : 'Tämä tietosuojaseloste kertoo, kuinka GolfBooker kerää ja käsittelee henkilötietoja. Henkilötietojen käsittelyssä huomioidaan voimassa oleva lainsäädäntö ja henkilötietojen käsittelyssä noudatetaan EU:n yleisen tietosuoja-asetuksen tietosuojaperiaatteita.'}
              </p>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? '1. Data Controller' : '1. Rekisterinpitäjä'}
                </h2>
                <p className="mb-2">
                  <strong>Funect Oy</strong><br/>
                  {isEnglish ? 'Business ID:' : 'Y-tunnus:'} 3571724-7<br/>
                  {isEnglish ? 'Address:' : 'Osoite:'} Kivelänkatu 1 B, 00260 Helsinki<br/>
                  {isEnglish ? 'Phone:' : 'Puhelin:'} +358 44 058 2663<br/>
                  {isEnglish ? 'Email:' : 'Sähköposti:'} privacy@funect.com
                </p>
                <p>
                  {isEnglish
                    ? 'GolfBooker is a platform operated by Funect Oy that provides golf clubs and businesses with tournament management and operational systems.'
                    : 'GolfBooker on Funect Oy:n ylläpitämä alusta, joka tarjoaa golfklubeille ja yrityksille toiminnanohjaus- ja kilpailujärjestelmiä.'}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? '2. How We Use Your Data' : '2. Mihin tietojasi käytetään?'}
                </h2>
                <p className="mb-4 text-gray-700">
                  {isEnglish
                    ? 'We process personal data only for purposes necessary for business operations, customer relationship management and other appropriate uses.'
                    : 'Keräämme ja käsittelemme vain henkilötietoja, jotka ovat tarpeen liiketoiminnan harjoittamiseen, asiakassuhteiden hoitoon ja muihin asianmukaisiin tarkoituksiin.'}
                </p>

                <div className="space-y-3 mb-6">
                  <div>
                    <p className="font-semibold text-gray-900">{isEnglish ? 'Membership and operations' : 'Jäsenyyden ja toiminnan hallinta'}</p>
                    <p className="text-gray-700 text-sm">
                      {isEnglish
                        ? 'Managing membership relationships, tee time scheduling, tournament organization, billing and mobile app functionality.'
                        : 'Jäsensuhteiden ylläpito, tiiaikojen aikataulutus, kilpailujen järjestäminen, laskutus ja mobiilisovelluksen toiminnallisuudet.'}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">{isEnglish ? 'Communications' : 'Viestintä'}</p>
                    <p className="text-gray-700 text-sm">
                      {isEnglish
                        ? 'Service notifications, booking confirmations, tournament updates and payment reminders.'
                        : 'Palveluilmoitukset, varausvahvistukset, kilpailupäivitykset ja maksumuistutukset.'}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">{isEnglish ? 'Service development and security' : 'Palvelun kehittäminen ja tietoturva'}</p>
                    <p className="text-gray-700 text-sm">
                      {isEnglish
                        ? 'Quality improvement, system development, security monitoring, analytics and preventing misuse.'
                        : 'Laadun parantaminen, järjestelmän kehittäminen, tietoturvan valvonta, analytiikka ja väärinkäytösten ehkäisy.'}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">{isEnglish ? 'Legal compliance' : 'Lakien noudattaminen'}</p>
                    <p className="text-gray-700 text-sm">
                      {isEnglish
                        ? 'Fulfilling legal obligations regarding accounting, taxation, consumer protection and responding to lawful authority requests.'
                        : 'Lakisääteisten velvoitteiden täyttäminen kirjanpidon, verotuksen ja kuluttajansuojan osalta sekä viranomaisten lakiin perustuviin tietopyyntöihin vastaaminen.'}
                    </p>
                  </div>
                </div>

                <p className="font-semibold text-gray-900 mb-2">
                  {isEnglish
                    ? 'Legal basis for data processing:'
                    : 'Henkilötietojen käsittelyn oikeusperuste:'}
                </p>
                <p className="text-gray-700 text-sm">
                  {isEnglish
                    ? 'We process personal data based on: Contract (fulfilling membership or service agreement), Legitimate interest (service development, security and operational improvements), Legal obligation (accounting, taxation and legal requirements), Consent (when you have given explicit permission for specific processing).'
                    : 'Käsittelemme henkilötietoja seuraavilla perusteilla: Sopimus (jäsenyyden tai palvelusopimuksen täyttäminen), Oikeutettu etu (palvelun kehittäminen, turvallisuus ja toiminnan parantaminen), Lakisääteinen velvoite (kirjanpito, verotus ja lakisääteiset vaatimukset), Suostumus (kun olet antanut nimenomaisen luvan tiettyyn käsittelyyn).'}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? '3. What Data We Collect' : '3. Mitä tietoja keräämme?'}
                </h2>
                <p className="mb-3">
                  {isEnglish
                    ? 'Personal data is collected in different ways depending on the situation. We collect and process data that:'
                    : 'Henkilötietojasi kerätään eri tavoin tapauskohtaisesti. Keräämme ja käsittelemme henkilötietoja, joita:'}
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-4 text-gray-700">
                  <li>{isEnglish ? 'You provide when using our services or contacting us' : 'Olet antanut käyttäessäsi palveluitamme tai ollessasi yhteydessä meihin'}</li>
                  <li>{isEnglish ? 'Golf club administrators enter into the system' : 'Golfklubin ylläpitäjä lisää järjestelmään'}</li>
                  <li>{isEnglish ? 'Are generated when you visit our website' : 'Syntyvät verkkosivulla vierailun yhteydessä'}</li>
                  <li>{isEnglish ? 'Are collected through system use and maintenance' : 'Kertyvät järjestelmien käytön tai ylläpidon yhteydessä'}</li>
                  <li>{isEnglish ? 'Are transferred through integrations with third-party services (e.g., eBirdie)' : 'Välittyvät integraatioiden kautta kolmansien osapuolten palveluista (esim. eBirdie)'}</li>
                  <li>{isEnglish ? 'We receive from our service partners' : 'Saamme yhteistyökumppaneiltamme'}</li>
                  <li>{isEnglish ? 'Are obtained through automated updates' : 'Saamme automaattisten päivitysten yhteydessä'}</li>
                </ul>
                <p className="mb-3">
                  {isEnglish
                    ? 'We collect and process the following categories of personal data:'
                    : 'Keräämme ja käsittelemme seuraavia henkilötietoryhmiä:'}
                </p>
                <p className="text-gray-700">
                  <strong>{isEnglish ? 'Basic information and contact details:' : 'Perustiedot ja yhteystiedot:'}</strong>{' '}
                  {isEnglish
                    ? 'Name, address, email address, phone number.'
                    : 'Nimi, osoite, sähköpostiosoite, puhelinnumero.'}
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>{isEnglish ? 'Membership and golf-specific data:' : 'Jäsenyys- ja golf-tiedot:'}</strong>{' '}
                  {isEnglish
                    ? 'Membership information, handicap, login credentials, tournament results, scorecards and round statistics.'
                    : 'Jäsentiedot, tasoitus, kirjautumistiedot, kilpailutulokset, tuloskortit ja kierrostilastot.'}
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>{isEnglish ? 'Customer relationship data:' : 'Asiakassuhdetiedot:'}</strong>{' '}
                  {isEnglish
                    ? 'Billing information, payment records, reservations and cancellations, tournament registrations, equipment rentals, customer inquiries and communications.'
                    : 'Laskutustiedot, maksutapahtumat, varaukset ja peruutukset, kilpailuilmoittautumiset, välinevuokraukset, asiakasyhteydenotot ja viestintä.'}
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>{isEnglish ? 'Technical and system data:' : 'Tekniset ja järjestelmätiedot:'}</strong>{' '}
                  {isEnglish
                    ? 'Data generated during website visits, such as information collected through cookies or similar technologies (device ID and type, operating system, application settings), IP addresses, session tokens, login timestamps, error logs and performance metrics.'
                    : 'Verkkosivulla vierailun yhteydessä syntyneet tiedot, kuten evästeiden tai samankaltaisten teknologioiden avulla kerätyt tiedot (laitetunnus ja -tyyppi, käyttöjärjestelmä, sovellusasetukset), IP-osoitteet, istuntotunnukset, kirjautumisten aikaleimat, virhelokit ja suorituskykymittarit.'}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? '4. Data Retention Period' : '4. Tietojen säilytysaika'}
                </h2>
                <p className="text-gray-700">
                  {isEnglish
                    ? 'Personal data is retained as long as necessary for service delivery, legal compliance, or protecting legitimate interests. Retention periods for member data and tournament history follow club and federation policies as well as applicable legislation. Data is anonymized or deleted when the retention period ends.'
                    : 'Henkilötietoja säilytetään niin kauan kuin se on tarpeen palvelun toimittamiseksi, lakien noudattamiseksi tai oikeutettujen etujen suojaamiseksi. Jäsentietojen ja kilpailuhistorian säilytysajat noudattavat seuran ja liiton käytäntöjä sekä voimassa olevaa lainsäädäntöä. Tiedot anonymisoidaan tai poistetaan säilytysajan päättymisen jälkeen.'}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? '5. Data Disclosure and Access' : '5. Tietojen luovutus ja pääsy'}
                </h2>
                <p className="mb-3">
                  {isEnglish
                    ? 'Personal data may be accessed by or disclosed to the following parties:'
                    : 'Henkilötietoja voivat käsitellä tai niihin voivat päästä seuraavat tahot:'}
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>{isEnglish ? 'Golf club administrators: Have access to member and operational data necessary for club management' : 'Golfklubin ylläpitäjät: Pääsy jäsen- ja toimintatietoihin, jotka ovat tarpeen klubin toiminnan kannalta'}</li>
                  <li>{isEnglish ? 'Service providers: Cloud hosting, payment processing, and technical support providers (under data processing agreements)' : 'Palveluntarjoajat: Pilvipalvelut, maksunkäsittely ja tekninen tuki (tietojenkäsittelysopimusten mukaisesti)'}</li>
                  <li>{isEnglish ? 'Legal obligations: When required by law or by authorities' : 'Lakisääteiset velvoitteet: Kun laki tai viranomaiset sitä edellyttävät'}</li>
                  <li>{isEnglish ? 'Security and misuse prevention: When necessary to protect rights, ensure safety, or investigate misuse' : 'Turvallisuus ja väärinkäytösten ehkäisy: Kun se on tarpeellista oikeuksien toteuttamiseksi, turvallisuuden suojelemiseksi tai väärinkäytösten tutkimiseksi'}</li>
                  <li>{isEnglish ? 'With your consent: When you have explicitly agreed to data sharing' : 'Sinun suostumuksellasi: Kun olet nimenomaisesti hyväksynyt tietojen jakamisen'}</li>
                </ul>
                <p className="mt-3 text-sm">
                  {isEnglish
                    ? 'We do not sell your personal data.'
                    : 'Emme myy henkilötietojasi.'}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? '6. Your Rights' : '6. Rekisteröidyn oikeudet'}
                </h2>
                <p className="mb-3">
                  {isEnglish ? 'You have the right to:' : 'Sinulla on oikeus:'}
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>{isEnglish ? 'Access your stored data' : 'Tarkastaa sinusta tallennetut tiedot'}</li>
                  <li>{isEnglish ? 'Request correction of inaccurate data' : 'Vaatia virheellisten tietojen oikaisua'}</li>
                  <li>{isEnglish ? 'Request deletion of your data' : 'Vaatia tietojesi poistamista'}</li>
                  <li>{isEnglish ? 'Object to data processing' : 'Vastustaa tietojesi käsittelyä'}</li>
                  <li>{isEnglish ? 'Transfer your data to another system' : 'Siirtää tietosi toiseen järjestelmään'}</li>
                  <li>{isEnglish ? 'Lodge a complaint with a supervisory authority' : 'Tehdä valitus valvontaviranomaiselle'}</li>
                </ul>
                <p className="mt-3">
                  {isEnglish
                    ? 'You can exercise your rights by contacting: privacy@funect.com'
                    : 'Voit käyttää oikeuksiasi ottamalla yhteyttä osoitteeseen: privacy@funect.com'}
                </p>
                <p className="mt-3 text-sm text-gray-600">
                  {isEnglish
                    ? 'Please note that certain data must be retained to fulfill legal obligations (e.g., invoicing records) or to maintain active membership/shareholding status. We will inform you if such limitations apply to your request.'
                    : 'Huomioithan, että tietyt tiedot on säilytettävä lakisääteisten velvoitteiden täyttämiseksi (esim. laskutustiedot) tai aktiivisen jäsenyyden/osakkuuden ylläpitämiseksi. Ilmoitamme sinulle, jos tällaiset rajoitukset koskevat pyyntöäsi.'}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? '7. Data Security' : '7. Tietoturva'}
                </h2>
                <p className="mb-3">
                  {isEnglish
                    ? 'We protect your personal data with appropriate technical and organizational security measures against unauthorized access, disclosure, destruction or other unauthorized processing.'
                    : 'Käytämme tarpeellisia teknisiä ja organisatorisia tietoturvakeinoja henkilötietojen suojaamiseksi oikeudetonta pääsyä, luovuttamista, hävittämistä tai muuta oikeudetonta käsittelyä vastaan.'}
                </p>
                <p>
                  {isEnglish
                    ? 'Security measures include encryption technologies for data transmission, controlled access management, monitoring of access rights usage, data processing minimization, staff training on data handling, and careful selection of service providers.'
                    : 'Tällaisia keinoja ovat muun muassa salaustekniikoiden käyttö tiedonsiirrossa, hallittu käyttöoikeuksien myöntäminen ja niiden käytön valvonta, käsittelyn minimointi, henkilötietojen käsittelyyn osallistuvan henkilöstön ohjeistaminen sekä palveluntarjoajien huolellinen valinta.'}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? '8. Cookies' : '8. Evästeet'}
                </h2>
                <p className="mb-3">
                  {isEnglish
                    ? 'We use cookies and similar technologies to improve user experience and analyze website usage. We use the following cookies:'
                    : 'Käytämme evästeitä ja vastaavia teknologioita parantaaksemme käyttökokemusta ja analysoidaksemme sivuston käyttöä. Käytämme seuraavia evästeitä:'}
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-3">
                  <li>
                    <strong>{isEnglish ? 'Essential cookies:' : 'Välttämättömät evästeet:'}</strong> {isEnglish ? 'Required for website functionality, such as session management and login authentication. These cookies cannot be disabled.' : 'Tarvitaan sivuston toiminnalle, kuten istunnonhallintaan ja kirjautumiseen. Näitä evästeitä ei voi estää.'}
                  </li>
                  <li>
                    <strong>{isEnglish ? 'Analytics cookies:' : 'Analytiikkaevästeet:'}</strong> {isEnglish ? 'Help understand website usage and improve service quality. Analytics data is processed in anonymized form.' : 'Auttavat ymmärtämään sivuston käyttöä ja parantamaan palvelun laatua. Analytiikkadata käsitellään anonymisoituna.'}
                  </li>
                </ul>
                <p className="text-gray-700">
                  {isEnglish
                    ? 'You can manage non-essential cookie settings in your browser settings. Disabling cookies may affect website functionality.'
                    : 'Voit hallita ei-välttämättömiä evästeasetuksia selaimesi asetuksista. Evästeiden estäminen saattaa vaikuttaa sivuston toiminnallisuuteen.'}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? '9. Contact Information' : '9. Yhteystiedot'}
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="mb-4">
                    <strong>{isEnglish ? 'Privacy matters:' : 'Tietosuoja-asiat:'}</strong><br/>
                    {isEnglish ? 'Email:' : 'Sähköposti:'} privacy@funect.com<br/>
                    {isEnglish ? 'Phone:' : 'Puhelin:'} +358 44 058 2663
                  </p>
                  <p>
                    <strong>{isEnglish ? 'Technical support:' : 'Tekninen tuki:'}</strong><br/>
                    {isEnglish ? 'Email:' : 'Sähköposti:'} support@golfbooker.fi<br/>
                    {isEnglish ? 'Phone:' : 'Puhelin:'} +358 44 058 2663
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? '10. Changes to Privacy Policy' : '10. Muutokset tietosuojaselosteeseen'}
                </h2>
                <p>
                  {isEnglish
                    ? 'We reserve the right to update this privacy policy. We will notify you of significant changes on our website or by email.'
                    : 'Pidätämme oikeuden päivittää tätä tietosuojaselostetta. Ilmoitamme merkittävistä muutoksista verkkosivustollamme tai sähköpostitse.'}
                </p>
              </section>

              <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-500">
                <p>
                  {isEnglish
                    ? 'This privacy policy has been prepared in accordance with the EU General Data Protection Regulation (GDPR).'
                    : 'Tämä tietosuojaseloste on laadittu EU:n yleisen tietosuoja-asetuksen (GDPR) mukaisesti.'}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
