import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';

interface SEOProps {
  titleFi: string;
  titleEn: string;
  descriptionFi: string;
  descriptionEn: string;
  path: string;
  keywordsFi?: string;
  keywordsEn?: string;
  type?: 'website' | 'article';
  image?: string;
  noindex?: boolean;
}

const SITE_URL = 'https://golfbooker.fi';
const DEFAULT_IMAGE = '/og-image.png';

export const SEO: React.FC<SEOProps> = ({
  titleFi,
  titleEn,
  descriptionFi,
  descriptionEn,
  path,
  keywordsFi = '',
  keywordsEn = '',
  type = 'website',
  image = DEFAULT_IMAGE,
  noindex = false,
}) => {
  const { language } = useLanguage();

  const title = language === 'fi' ? titleFi : titleEn;
  const description = language === 'fi' ? descriptionFi : descriptionEn;
  const keywords = language === 'fi' ? keywordsFi : keywordsEn;
  const canonicalUrl = `${SITE_URL}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  // JSON-LD structured data for organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'GolfBooker',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      description: language === 'fi'
        ? 'Ilmainen 14 päivän kokeilu'
        : 'Free 14-day trial',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '50',
    },
    provider: {
      '@type': 'Organization',
      name: 'GolfBooker',
      url: SITE_URL,
      logo: `${SITE_URL}/logo.svg`,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'FI',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'info@golfbooker.fi',
        availableLanguage: ['Finnish', 'English'],
      },
    },
  };

  // FAQ Schema for pages with FAQ sections
  const faqSchema = path === '/' ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: language === 'fi'
          ? 'Kuinka kauan käyttöönotto kestää?'
          : 'How long does implementation take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: language === 'fi'
            ? 'Käyttöönotto kestää noin 1-2 viikkoa, johon sisältyy henkilökunnan perehdytys ja integraatiot.'
            : 'Implementation takes approximately 1-2 weeks, which includes staff training and integrations.',
        },
      },
      {
        '@type': 'Question',
        name: language === 'fi'
          ? 'Miten hinnoittelu toimii?'
          : 'How does pricing work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: language === 'fi'
            ? 'Valitse tarvitsemasi toiminnot ja maksa vain niistä. Räätälöimme paketin juuri sinun kenttäsi tarpeisiin.'
            : 'Choose the features you need and pay only for those. We customize a package specifically for your needs.',
        },
      },
      {
        '@type': 'Question',
        name: language === 'fi'
          ? 'Voiko pelkän kilpailumoduulin hankkia?'
          : 'Can I get just the tournament module?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: language === 'fi'
            ? 'Kyllä! Kilpailumoduulin voi hankkia erikseen ilman koko varausjärjestelmän käyttöönottoa.'
            : 'Yes! The tournament module can be acquired separately without implementing the full booking system.',
        },
      },
    ],
  } : null;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang={language} />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang for internationalization */}
      <link rel="alternate" hrefLang="fi" href={`${SITE_URL}${path}`} />
      <link rel="alternate" hrefLang="en" href={`${SITE_URL}${path}`} />
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${path}`} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={language === 'fi' ? 'fi_FI' : 'en_US'} />
      <meta property="og:locale:alternate" content={language === 'fi' ? 'en_US' : 'fi_FI'} />
      <meta property="og:site_name" content="GolfBooker" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Additional SEO tags */}
      <meta name="author" content="GolfBooker" />
      <meta name="publisher" content="GolfBooker" />
      <meta name="geo.region" content="FI" />
      <meta name="geo.placename" content="Finland" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
};
