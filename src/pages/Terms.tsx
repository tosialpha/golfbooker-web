import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Terms: React.FC = () => {
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

        {/* Terms of Service Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-gray-500 mb-3">GolfBooker by Funect</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              {isEnglish ? 'Terms of Service' : 'Käyttöehdot'}
            </h1>
            <p className="text-sm text-gray-500 mb-8 pb-6 border-b border-gray-200">
              {isEnglish ? 'Last updated: October 29, 2025' : 'Päivitetty: 29.10.2025'}
            </p>

            <div className="space-y-8 text-gray-700">

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? '1. Service Provider' : '1. Palveluntarjoaja'}
                </h2>
                <p className="mb-2">
                  <strong>Funect Oy</strong><br/>
                  {isEnglish ? 'Business ID:' : 'Y-tunnus:'} 3571724-7<br/>
                  {isEnglish ? 'Email:' : 'Sähköposti:'} support@golfbooker.fi<br/>
                  {isEnglish ? 'Phone:' : 'Puhelin:'} +358 44 058 2663
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? '2. About the Service' : '2. Palvelun kuvaus'}
                </h2>
                <p>
                  {isEnglish
                    ? 'GolfBooker is a tournament management and operations system operated by Funect Oy for golf clubs and businesses. The service includes:'
                    : 'GolfBooker on Funect Oy:n ylläpitämä kilpailujärjestelmä ja toiminnanohjausjärjestelmä golfklubeille ja yrityksille. Palvelu sisältää:'}
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>{isEnglish ? 'Member and shareholder registry' : 'Jäsen- ja osakasrekisterin'}</li>
                  <li>{isEnglish ? 'Tee time reservations' : 'Tiiaikojen varaukset'}</li>
                  <li>{isEnglish ? 'Tournament management' : 'Kilpailujen hallinnan'}</li>
                  <li>{isEnglish ? 'Billing and payments' : 'Laskutuksen ja maksut'}</li>
                  <li>{isEnglish ? 'Mobile application' : 'Mobiilisovelluksen'}</li>
                  <li>{isEnglish ? 'Statistics and reporting' : 'Tilastot ja raportoinnin'}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? '3. Acceptance of Terms' : '3. Ehtojen hyväksyminen'}
                </h2>
                <p>
                  {isEnglish
                    ? 'By accessing and using the GolfBooker service, you accept and agree to be bound by these terms of service. If you do not agree with these terms, you must not use the service.'
                    : 'Käyttämällä GolfBooker-palvelua hyväksyt nämä käyttöehdot. Jos et hyväksy näitä ehtoja, et saa käyttää palvelua.'}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? '4. Who Can Use the Service' : '4. Kuka voi käyttää palvelua'}
                </h2>
                <p className="mb-3">
                  {isEnglish
                    ? 'The service may be used by:'
                    : 'Palvelua voivat käyttää:'}
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>{isEnglish ? 'Golf clubs (business customers)' : 'Golfklubit (yritysasiakkaat)'}</li>
                  <li>{isEnglish ? 'Club members and shareholders' : 'Klubien jäsenet ja osakkaat'}</li>
                  <li>{isEnglish ? 'Guest players (with club permission)' : 'Vieraspelaajat (klubin luvalla)'}</li>
                </ul>
                <p className="mt-3">
                  {isEnglish
                    ? 'The user must be at least 13 years old. Users under 18 must have parental or guardian consent.'
                    : 'Käyttäjän on oltava vähintään 13-vuotias. Alle 18-vuotiaat tarvitsevat huoltajan suostumuksen.'}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? '5. Registration and User Accounts' : '5. Rekisteröityminen ja käyttäjätilit'}
                </h2>
                <p className="mb-3">
                  {isEnglish
                    ? 'When creating an account, you must:'
                    : 'Tiliä luodessasi sinun on:'}
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>{isEnglish ? 'Provide accurate and truthful information' : 'Annettava tarkat ja totuudenmukaiset tiedot'}</li>
                  <li>{isEnglish ? 'Keep your login credentials secure' : 'Pidettävä kirjautumistietosi turvassa'}</li>
                  <li>{isEnglish ? 'Not share your account with others' : 'Ei saa jakaa tiliäsi muiden kanssa'}</li>
                  <li>{isEnglish ? 'Notify us immediately of any unauthorized use' : 'Ilmoitettava meille välittömästi luvattomasta käytöstä'}</li>
                </ul>
                <p className="mt-3">
                  {isEnglish
                    ? 'You are responsible for all activities that occur under your account.'
                    : 'Olet vastuussa kaikista tilisi kautta tehdyistä toimista.'}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? '6. Use License and Restrictions' : '6. Käyttölisenssi ja rajoitukset'}
                </h2>
                <p className="mb-3">
                  {isEnglish
                    ? 'We grant you a limited license to use the service. You may not:'
                    : 'Myönnämme rajoitetun käyttöoikeuden palveluun. Et saa:'}
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>{isEnglish ? 'Modify, copy, or reverse engineer the service' : 'Muokata, kopioida tai käänteismallintaa palvelua'}</li>
                  <li>{isEnglish ? 'Use automated systems (bots, scrapers) without permission' : 'Käyttää automatisoituja järjestelmiä (botteja, skraappereita) ilman lupaa'}</li>
                  <li>{isEnglish ? 'Remove copyright or proprietary notices' : 'Poistaa tekijänoikeus- tai omistusmerkintöjä'}</li>
                  <li>{isEnglish ? 'Use the service for illegal purposes' : 'Käyttää palvelua laittomiin tarkoituksiin'}</li>
                  <li>{isEnglish ? 'Interfere with or disrupt the service' : 'Häiritä tai keskeyttää palvelun toimintaa'}</li>
                  <li>{isEnglish ? 'Attempt to gain unauthorized access to systems' : 'Yrittää saada luvatonta pääsyä järjestelmiin'}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? '7. Payments and Billing' : '7. Maksut ja laskutus'}
                </h2>
                <p className="mb-3">
                  {isEnglish
                    ? 'Pricing is based on the service agreement. Invoices are due within 14 days. Late payment interest and dispute rights follow Finnish law. Consumers have a 14-day cancellation right.'
                    : 'Hinnoittelu perustuu palvelusopimukseen. Laskut erääntyvät 14 päivässä. Viivästyskorko ja reklamaatio-oikeudet noudattavat Suomen lakia. Kuluttajilla on 14 päivän peruutusoikeus.'}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? '8. Data Ownership and Usage' : '8. Datan omistajuus ja käyttö'}
                </h2>
                <p>
                  {isEnglish
                    ? 'Customer data belongs to the customer and can be exported at any time. GolfBooker may use anonymized data for service development. Personal data processing is described in our '
                    : 'Asiakkaan data kuuluu asiakkaalle ja voidaan viedä milloin tahansa. GolfBooker voi käyttää anonymisoitua dataa palvelun kehittämiseen. Henkilötietojen käsittely kuvataan '}
                  <Link to="/privacy" className="text-brand-green-600 hover:underline">
                    {isEnglish ? 'Privacy Policy' : 'tietosuojaselosteessa'}
                  </Link>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? '9. Third-Party Integrations' : '9. Kolmannen osapuolen integraatiot'}
                </h2>
                <p>
                  {isEnglish
                    ? 'GolfBooker uses third-party services (eBirdie, payment providers, cloud hosting). We are not responsible for their operation or availability. Third-party services are subject to their own terms.'
                    : 'GolfBooker käyttää kolmannen osapuolen palveluita (eBirdie, maksupalvelut, pilvipalvelut). Emme vastaa niiden toiminnasta tai saatavuudesta. Kolmannen osapuolen palveluihin sovelletaan niiden omia ehtoja.'}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? '10. Service Availability' : '10. Palvelun saatavuus'}
                </h2>
                <p>
                  {isEnglish
                    ? 'We strive to maintain the service available at all times, but we do not guarantee 100% uptime. The service may be temporarily unavailable due to maintenance, updates, or technical issues. We will notify users of planned maintenance when possible.'
                    : 'Pyrimme pitämään palvelun saatavilla koko ajan, mutta emme takaa 100% toimintavarmuutta. Palvelu voi olla tilapäisesti pois käytöstä huollon, päivitysten tai teknisten ongelmien vuoksi. Ilmoitamme suunnitelluista huoltotauoista mahdollisuuksien mukaan.'}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? '11. Disclaimer and Limitations of Liability' : '11. Vastuunrajoitukset'}
                </h2>
                <p>
                  {isEnglish
                    ? 'The service is provided "as is" without warranties. GolfBooker\'s liability is limited to the extent permitted by law. We are not liable for indirect damages, data loss, loss of profit, or business interruption. Users are responsible for backing up their own data.'
                    : 'Palvelu tarjotaan "sellaisenaan" ilman takuita. GolfBookerin vastuu rajoittuu lain sallimaan määrään. Emme vastaa välillisistä vahingoista, tietojen menetyksestä, voiton menetyksestä tai liiketoiminnan keskeytyksestä. Käyttäjät ovat vastuussa omien tietojensa varmuuskopioinnista.'}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? '12. Intellectual Property' : '12. Immateriaalioikeudet'}
                </h2>
                <p>
                  {isEnglish
                    ? 'All intellectual property rights to the GolfBooker service, including but not limited to software, design, logos, and trademarks, belong to Funect Oy. Unauthorized use, copying, or distribution of these materials is prohibited.'
                    : 'Kaikki GolfBooker-palvelun immateriaalioikeudet kuuluvat Funect Oy:lle. Tämä koskee muun muassa ohjelmistoja, suunnittelua, logoja ja tavaramerkkejä. Näiden materiaalien luvaton käyttö, kopiointi tai levittäminen on kielletty.'}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? '13. Termination' : '13. Sopimuksen päättäminen'}
                </h2>
                <p>
                  {isEnglish
                    ? 'Customers may terminate according to their service contract. GolfBooker may terminate immediately for violations, fraudulent activity, or security risks. Upon termination, data is available for export for 30 days before permanent deletion.'
                    : 'Asiakas voi irtisanoa palvelusopimuksensa sopimuksen mukaisesti. GolfBooker voi irtisanoa välittömästi ehtorikkomusten, petoksen tai turvallisuusriskien vuoksi. Sopimuksen päätyttyä data on ladattavissa 30 päivän ajan ennen pysyvää poistoa.'}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? '14. Changes to Terms of Service' : '14. Muutokset käyttöehtoihin'}
                </h2>
                <p>
                  {isEnglish
                    ? 'We reserve the right to update these Terms of Service at any time. We will notify users of significant changes via email or through the service. Continued use of the service after changes constitutes acceptance of the updated terms.'
                    : 'Pidätämme oikeuden päivittää näitä käyttöehtoja milloin tahansa. Ilmoitamme merkittävistä muutoksista sähköpostitse tai palvelun kautta. Palvelun jatkuva käyttö muutosten jälkeen merkitsee päivitettyjen ehtojen hyväksymistä.'}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? '15. Governing Law and Disputes' : '15. Sovellettava laki ja riitojen ratkaisu'}
                </h2>
                <p>
                  {isEnglish
                    ? 'These terms are governed by Finnish law. Disputes are resolved in the District Court of Helsinki. Consumers may bring disputes to the consumer disputes board or their local district court.'
                    : 'Näihin ehtoihin sovelletaan Suomen lakia. Riidat ratkaistaan Helsingin käräjäoikeudessa. Kuluttajilla on oikeus viedä riita-asiat kuluttajariitalautakuntaan tai oman asuinpaikkansa käräjäoikeuteen.'}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? '16. Contact Information' : '16. Yhteystiedot'}
                </h2>
                <p>
                  {isEnglish
                    ? 'If you have any questions about these Terms of Service, please contact us:'
                    : 'Jos sinulla on kysyttävää näistä käyttöehdoista, ota yhteyttä:'}
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mt-4">
                  <p>
                    <strong>Funect Oy</strong><br/>
                    {isEnglish ? 'Business ID:' : 'Y-tunnus:'} 3571724-7<br/>
                    {isEnglish ? 'Email:' : 'Sähköposti:'} support@golfbooker.fi<br/>
                    {isEnglish ? 'Phone:' : 'Puhelin:'} +358 44 058 2663
                  </p>
                </div>
              </section>

              <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-500">
                <p>
                  {isEnglish
                    ? 'These Terms of Service are effective as of the last updated date shown above.'
                    : 'Nämä käyttöehdot ovat voimassa yllä mainitusta päivityspäivästä alkaen.'}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
