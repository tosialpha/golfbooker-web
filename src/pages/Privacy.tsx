import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Privacy: React.FC = () => {
  const { t } = useLanguage();

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
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 lg:p-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Privacy Policy</h1>
            <p className="text-sm text-gray-500 mb-12 pb-6 border-b border-gray-200">Last updated: October 24, 2025</p>

            <div className="prose prose-lg prose-gray max-w-none
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-gray-200
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-brand-green-700
              prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-3 prose-h4:text-gray-800
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
              prose-ul:my-4 prose-ul:space-y-2
              prose-li:text-gray-700
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-a:text-brand-green-600 prose-a:no-underline hover:prose-a:underline
            ">
            <h2>1. Introduction</h2>
            <p>
              Funect ("we," "our," or "us") is operated by Funect Oy, a company registered in Finland.
              We are committed to protecting your privacy. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your personal information when you use our mobile application,
              website, and related services (collectively, the "Service").
            </p>
            <p>
              <strong>Early Access Notice:</strong> Funect is currently in early access/beta phase.
              Data security measures are in place, but as with any early-stage service, you should be
              mindful of what information you share.
            </p>
            <p>
              This Privacy Policy should be read in conjunction with our Terms of Service. By using the
              Service, you consent to the data practices described in this policy.
            </p>
            <p>
              <strong>Data Controller:</strong> Funect Oy is the data controller responsible for your
              personal information.
            </p>

            <h2>2. Information We Collect</h2>

            <h3>2.1 Information You Provide Directly</h3>

            <h4>Account Information</h4>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number (optional)</li>
              <li>Password (encrypted)</li>
              <li>Date of birth</li>
              <li>Gender (optional)</li>
            </ul>

            <h4>Profile Information</h4>
            <ul>
              <li>Profile photo</li>
              <li>Activity preferences and interests</li>
              <li>Skill levels for various activities</li>
              <li>Bio or description</li>
              <li>Preferred venues and locations</li>
            </ul>

            <h4>Activity Information</h4>
            <ul>
              <li>Posts, comments, and messages</li>
              <li>Group and event participation</li>
              <li>Venue reviews and ratings</li>
              <li>Activity bookings and check-ins</li>
              <li>Loyalty points and rewards</li>
            </ul>

            <h4>Payment Information (when payment features are implemented)</h4>
            <ul>
              <li>Payment card details (processed by our payment processor; we only store last 4 digits and expiration date)</li>
              <li>Billing address</li>
              <li>Transaction history</li>
            </ul>
            <p>
              <strong>Note:</strong> Payment processing is not currently active during the early access phase.
            </p>

            <h4>Communications</h4>
            <ul>
              <li>Messages you send to other users</li>
              <li>Communications with customer support</li>
              <li>Feedback and survey responses</li>
            </ul>

            <h3>2.2 Information Collected Automatically</h3>

            <h4>Device Information</h4>
            <ul>
              <li>Device type, model, and manufacturer</li>
              <li>Operating system and version</li>
              <li>Unique device identifiers</li>
              <li>Mobile network information</li>
              <li>IP address</li>
            </ul>

            <h4>Usage Information</h4>
            <ul>
              <li>Features you use and how you use them</li>
              <li>Pages or screens viewed</li>
              <li>Time and duration of visits</li>
              <li>Search queries</li>
              <li>Button clicks and navigation paths</li>
              <li>Crash reports and performance data</li>
            </ul>

            <h4>Location Information</h4>
            <ul>
              <li>Precise location (GPS) when you use venue search or check-in features</li>
              <li>Approximate location (IP-based)</li>
            </ul>
            <p>You can control location permissions through your device settings.</p>

            <h4>Cookies and Similar Technologies</h4>
            <ul>
              <li>Session cookies (essential for functionality)</li>
              <li>Preference cookies (remember your settings)</li>
              <li>Analytics cookies (understand how you use the Service)</li>
              <li>Advertising cookies (deliver relevant ads, if applicable)</li>
            </ul>

            <h3>2.3 Information from Third Parties</h3>

            <h4>Social Media</h4>
            <p>If you connect your social media accounts:</p>
            <ul>
              <li>Public profile information</li>
              <li>Email address</li>
              <li>Friends list (with your permission)</li>
            </ul>

            <h4>Venues and Partners</h4>
            <ul>
              <li>Booking confirmations</li>
              <li>Check-in data</li>
              <li>Participation in venue events</li>
            </ul>

            <h4>Payment Providers</h4>
            <ul>
              <li>Payment confirmation</li>
              <li>Transaction status</li>
            </ul>

            <h2>3. Legal Basis for Processing (GDPR)</h2>
            <p>We process your personal information based on the following legal grounds:</p>

            <h4>Contract Performance (Article 6(1)(b) GDPR)</h4>
            <ul>
              <li>Creating and managing your account</li>
              <li>Providing the Service features</li>
              <li>Processing payments and transactions</li>
              <li>Enabling communication with other users</li>
            </ul>

            <h4>Legitimate Interests (Article 6(1)(f) GDPR)</h4>
            <ul>
              <li>Improving and developing the Service</li>
              <li>Marketing our services (with opt-out option)</li>
              <li>Detecting and preventing fraud</li>
              <li>Securing our systems</li>
              <li>Analytics and business intelligence</li>
            </ul>

            <h4>Consent (Article 6(1)(a) GDPR)</h4>
            <ul>
              <li>Marketing communications (you can withdraw anytime)</li>
              <li>Precise location tracking</li>
              <li>Non-essential cookies</li>
              <li>Processing special categories of data (if any)</li>
            </ul>

            <h4>Legal Obligation (Article 6(1)(c) GDPR)</h4>
            <ul>
              <li>Complying with tax and accounting requirements</li>
              <li>Responding to legal requests</li>
              <li>Protecting vital interests</li>
            </ul>

            <h2>4. How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>

            <h3>4.1 Service Provision</h3>
            <ul>
              <li>Create and manage your account</li>
              <li>Enable profile customization</li>
              <li>Connect you with venues and other users</li>
              <li>Facilitate group creation and event organization</li>
              <li>Process bookings and reservations</li>
              <li>Manage loyalty points and rewards</li>
              <li>Enable messaging and social features</li>
            </ul>

            <h3>4.2 Communication</h3>
            <ul>
              <li>Send transactional emails (booking confirmations, password resets)</li>
              <li>Provide customer support</li>
              <li>Send service updates and announcements</li>
              <li>Notify you of new messages or activity</li>
              <li>Respond to your inquiries</li>
            </ul>

            <h3>4.3 Personalization</h3>
            <ul>
              <li>Recommend relevant venues and activities</li>
              <li>Personalize your feed and search results</li>
              <li>Suggest connections with other users</li>
              <li>Tailor content based on your preferences</li>
            </ul>

            <h3>4.4 Analytics and Improvement</h3>
            <ul>
              <li>Understand how users interact with the Service</li>
              <li>Identify bugs and technical issues</li>
              <li>Analyze trends and usage patterns</li>
              <li>Develop new features</li>
              <li>Conduct research and testing</li>
            </ul>

            <h3>4.5 Safety and Security</h3>
            <ul>
              <li>Detect and prevent fraud</li>
              <li>Monitor for suspicious activity</li>
              <li>Enforce our Terms of Service</li>
              <li>Protect our legal rights</li>
              <li>Investigate violations</li>
            </ul>

            <h3>4.6 Marketing (with consent)</h3>
            <ul>
              <li>Send promotional emails about new features</li>
              <li>Share news and updates about Funect</li>
              <li>Conduct surveys and research</li>
              <li>Display personalized advertisements (if applicable)</li>
            </ul>
            <p>
              You can opt out of marketing communications at any time by clicking "unsubscribe" in emails
              or adjusting your account settings.
            </p>

            <h2>5. How We Share Your Information</h2>

            <h3>5.1 Public Information</h3>
            <p>The following information is visible to other Funect users:</p>
            <ul>
              <li>Profile name and photo</li>
              <li>Bio and activity preferences</li>
              <li>Posts and comments in public groups</li>
              <li>Participation in public events</li>
              <li>Reviews and ratings (may be anonymous)</li>
            </ul>
            <p>You can control visibility settings in your account preferences.</p>

            <h3>5.2 Other Users</h3>
            <p>When you interact with other users:</p>
            <ul>
              <li>Your profile information is visible to users you connect with</li>
              <li>Messages are visible to conversation participants</li>
              <li>Group organizers can see participant information</li>
            </ul>

            <h3>5.3 Venues and Partners</h3>
            <p>We share relevant information with:</p>
            <ul>
              <li>Venues where you book activities (name, contact info, booking details)</li>
              <li>Event organizers for events you join</li>
              <li>Partner organizations with your consent</li>
            </ul>

            <h3>5.4 Service Providers</h3>
            <p>We share information with trusted third-party service providers who assist us:</p>
            <ul>
              <li>Supabase - Cloud hosting, database, and authentication</li>
              <li>Expo/React Native - Mobile app infrastructure</li>
              <li>Payment processors (when payment features are implemented)</li>
              <li>Analytics providers (if/when implemented)</li>
              <li>Email delivery services (if/when implemented)</li>
            </ul>
            <p>
              These providers are contractually obligated to protect your information and may only use it
              for specified purposes. We carefully select providers that comply with GDPR and have
              appropriate security measures.
            </p>

            <h3>5.5 Legal Requirements</h3>
            <p>We may disclose information if required by law or in good faith belief that such disclosure is necessary to:</p>
            <ul>
              <li>Comply with legal obligations, court orders, or government requests</li>
              <li>Enforce our Terms of Service</li>
              <li>Protect our rights, property, or safety</li>
              <li>Protect the rights, property, or safety of our users or the public</li>
              <li>Detect, prevent, or address fraud, security, or technical issues</li>
            </ul>

            <h3>5.6 Business Transfers</h3>
            <p>
              If Funect is involved in a merger, acquisition, asset sale, or bankruptcy, your information
              may be transferred as part of that transaction. We will notify you of any such change and
              the choices you may have.
            </p>

            <h3>5.7 With Your Consent</h3>
            <p>We may share information with third parties when you give us explicit consent to do so.</p>

            <h3>5.8 Aggregated and De-identified Data</h3>
            <p>
              We may share aggregated or de-identified data that cannot reasonably be used to identify you,
              for research, marketing, or analytics purposes.
            </p>

            <h2>6. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to provide the Service and
              fulfill the purposes outlined in this Privacy Policy.
            </p>

            <h4>Specific Retention Periods:</h4>
            <ul>
              <li>Account data: Until account deletion + 30 days (for recovery)</li>
              <li>Transaction records: 7 years (legal requirement)</li>
              <li>Messages: Until deleted by users or account closure</li>
              <li>Analytics data: Aggregated after 26 months</li>
              <li>Backup copies: Up to 90 days after deletion</li>
            </ul>
            <p>
              After the retention period, we will delete or anonymize your information. Some information
              may be retained longer if required by law or for legitimate business purposes.
            </p>
            <p>
              You may request deletion of your account and data at any time through account settings or
              by contacting privacy@funect.com.
            </p>

            <h2>7. Your Rights (GDPR)</h2>
            <p>
              Under the General Data Protection Regulation (GDPR) and other applicable laws, you have
              the following rights:
            </p>

            <h3>7.1 Right to Access</h3>
            <p>
              You can request a copy of your personal information we hold. We provide much of this data
              directly in your account settings.
            </p>

            <h3>7.2 Right to Rectification</h3>
            <p>
              You can correct inaccurate or incomplete personal information through your account settings
              or by contacting us.
            </p>

            <h3>7.3 Right to Erasure ("Right to be Forgotten")</h3>
            <p>
              You can request deletion of your personal information, subject to certain exceptions
              (e.g., legal obligations, legitimate interests).
            </p>

            <h3>7.4 Right to Restriction of Processing</h3>
            <p>You can request that we limit how we use your information in certain circumstances.</p>

            <h3>7.5 Right to Data Portability</h3>
            <p>
              You can request a machine-readable copy of your personal information to transfer to
              another service.
            </p>

            <h3>7.6 Right to Object</h3>
            <p>
              You can object to processing based on legitimate interests or for direct marketing purposes.
            </p>

            <h3>7.7 Right to Withdraw Consent</h3>
            <p>Where processing is based on consent, you can withdraw consent at any time.</p>

            <h3>7.8 Right to Lodge a Complaint</h3>
            <p>
              You have the right to lodge a complaint with your local data protection authority if you
              believe we have violated your rights.
            </p>

            <h4>Finnish Data Protection Authority:</h4>
            <ul>
              <li>Website: tietosuoja.fi</li>
              <li>Email: tietosuoja@om.fi</li>
            </ul>

            <h4>How to Exercise Your Rights:</h4>
            <ul>
              <li>Through account settings for most requests</li>
              <li>Email us at privacy@funect.com</li>
              <li>We will respond within 30 days</li>
            </ul>

            <h2>8. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              information:
            </p>

            <h3>Technical Measures:</h3>
            <ul>
              <li>Encryption in transit (TLS/SSL)</li>
              <li>Encryption at rest for sensitive data (passwords, authentication tokens)</li>
              <li>Secure authentication (hashed passwords using industry-standard algorithms)</li>
              <li>Secure cloud infrastructure (Supabase with built-in security features)</li>
              <li>Access controls and authentication</li>
              <li>Regular security updates</li>
            </ul>

            <h3>Organizational Measures:</h3>
            <ul>
              <li>Access limited to authorized personnel only</li>
              <li>Data breach response procedures</li>
              <li>Regular security policy reviews</li>
              <li>Secure development practices</li>
            </ul>

            <h3>Early Access Considerations:</h3>
            <p>As Funect is in early access:</p>
            <ul>
              <li>Security measures are appropriate for the current scale but will expand as the platform grows</li>
              <li>We use established, secure third-party services (Supabase, etc.) rather than custom infrastructure</li>
              <li>Regular security audits will be implemented as the platform scales</li>
              <li>We prioritize data security and maintain robust security standards</li>
            </ul>

            <h3>Important Notice:</h3>
            <p>
              No method of transmission or electronic storage is 100% secure. While we strive to protect
              your information using industry-standard practices, we cannot guarantee absolute security.
              You are responsible for maintaining the confidentiality of your account credentials.
            </p>

            <p>During early access, we recommend:</p>
            <ul>
              <li>Not sharing highly sensitive personal information in your profile</li>
              <li>Using a unique, strong password</li>
              <li>Being mindful of what you post publicly</li>
            </ul>

            <h2>9. International Data Transfers</h2>
            <p>
              Funect is based in Finland (EU). Your information may be transferred to and processed in
              countries outside the European Economic Area (EEA), including countries that may not provide
              the same level of data protection.
            </p>

            <p>When we transfer data internationally, we ensure appropriate safeguards are in place:</p>
            <ul>
              <li>Standard Contractual Clauses (EU Commission approved)</li>
              <li>Adequacy decisions by the EU Commission</li>
              <li>Binding Corporate Rules (where applicable)</li>
              <li>Other legally approved transfer mechanisms</li>
            </ul>
            <p>
              For transfers to the United States, we work with providers that comply with relevant
              frameworks such as the EU-U.S. Data Privacy Framework.
            </p>

            <h2>10. Cookies and Tracking Technologies</h2>

            <h3>10.1 Types of Cookies We Use</h3>

            <h4>Essential Cookies (strictly necessary)</h4>
            <ul>
              <li>Authentication and session management</li>
              <li>Security features</li>
              <li>Load balancing</li>
              <li>These cannot be disabled</li>
            </ul>

            <h4>Functional Cookies (enhance user experience)</h4>
            <ul>
              <li>Remember your preferences and settings</li>
              <li>Language preferences</li>
              <li>Location preferences</li>
            </ul>

            <h4>Analytics Cookies (understand usage)</h4>
            <ul>
              <li>Google Analytics (anonymized)</li>
              <li>Usage statistics</li>
              <li>Performance monitoring</li>
            </ul>

            <h4>Advertising Cookies (if applicable)</h4>
            <ul>
              <li>Personalized advertising</li>
              <li>Measure ad effectiveness</li>
              <li>Retargeting campaigns</li>
            </ul>

            <h3>10.2 Managing Cookies</h3>
            <p>You can control cookies through:</p>
            <ul>
              <li>Browser settings: Most browsers allow you to block or delete cookies</li>
              <li>Cookie preferences: Available in our Service settings</li>
              <li>Opt-out tools: Tools like Google Analytics Opt-out Browser Add-on</li>
            </ul>
            <p>Note: Disabling certain cookies may affect functionality of the Service.</p>

            <h3>10.3 Do Not Track</h3>
            <p>
              Our Service does not currently respond to "Do Not Track" browser signals, as there is no
              industry standard for compliance.
            </p>

            <h2>11. Children's Privacy</h2>
            <p>
              Funect is not intended for children under 13 years of age. We do not knowingly collect
              personal information from children under 13.
            </p>

            <p>
              <strong>If you are between 13 and 18:</strong> You must have permission from a parent or
              guardian to use the Service.
            </p>

            <p>
              <strong>If you are a parent or guardian:</strong> If you believe your child under 13 has
              provided us with personal information, please contact us immediately at privacy@funect.com,
              and we will delete such information.
            </p>

            <h2>12. Special Categories of Data</h2>
            <p>
              We do not intentionally collect "special categories" of personal data (e.g., health data,
              racial or ethnic origin, political opinions, religious beliefs) as defined by GDPR Article 9.
            </p>

            <p>
              If you choose to share such information in your profile or posts, you explicitly consent to
              our processing of this information for the purposes outlined in this policy. You can withdraw
              this consent at any time by removing such information or contacting us.
            </p>

            <h2>13. Automated Decision-Making</h2>
            <p>We may use automated decision-making for:</p>
            <ul>
              <li>Content recommendations</li>
              <li>Venue suggestions</li>
              <li>Fraud detection</li>
            </ul>
            <p>
              These automated decisions are based on algorithms and do not produce legal or similarly
              significant effects. You have the right to request human intervention and to contest
              automated decisions by contacting us.
            </p>

            <h2>14. Third-Party Services</h2>
            <p>
              Our Service may contain links to third-party websites, applications, or services not
              operated by us. We are not responsible for the privacy practices of these third parties.
              We encourage you to review their privacy policies before providing any information.
            </p>

            <p>Third-party services we integrate with may include:</p>
            <ul>
              <li>Social media platforms (Facebook, Instagram, etc.)</li>
              <li>Payment processors (Stripe, PayPal, etc.)</li>
              <li>Map services (Google Maps, Apple Maps)</li>
              <li>Analytics providers (Google Analytics, etc.)</li>
            </ul>

            <h2>15. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or
              for legal, operational, or regulatory reasons.
            </p>

            <p>We will notify you of material changes by:</p>
            <ul>
              <li>Updating the "Last updated" date</li>
              <li>Sending an email to your registered email address</li>
              <li>Displaying a prominent notice in the Service</li>
            </ul>

            <h4>Your rights regarding changes:</h4>
            <ul>
              <li>If you disagree with changes, you may close your account</li>
              <li>Continued use after notification constitutes acceptance of the updated policy</li>
              <li>For material changes affecting your rights, we may request your explicit consent</li>
            </ul>

            <h2>16. Contact Us</h2>
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy or our data
              practices, please contact us:
            </p>

            <h4>Data Controller:</h4>
            <p>
              Funect Oy<br />
              Finland<br />
              Email: privacy@funect.com
            </p>

            <h4>General Inquiries:</h4>
            <p>Email: support@funect.com</p>

            <h4>Response Time:</h4>
            <p>We aim to respond to all inquiries within 30 days as required by GDPR.</p>

            <h2>17. Additional Information for EU Residents</h2>

            <h4>Controller Details:</h4>
            <p>
              Funect Oy is a company registered in Finland and is the data controller responsible for
              your personal information.
            </p>

            <h4>Data Protection Contact:</h4>
            <p>For EU data protection matters, contact: privacy@funect.com</p>

            <h4>Supervisory Authority:</h4>
            <p>
              You have the right to lodge a complaint with the Finnish Data Protection Ombudsman
              (Tietosuojavaltuutettu) or your local EU supervisory authority if you believe we have
              violated your rights.
            </p>

            <h4>Finnish Data Protection Authority:</h4>
            <ul>
              <li>Website: tietosuoja.fi</li>
              <li>Email: tietosuoja@om.fi</li>
            </ul>

            <h4>Compliance:</h4>
            <p>
              Despite being in early access phase, we are committed to GDPR compliance and respecting
              all EU data protection rights outlined in this policy.
            </p>

            <hr className="my-8" />

            <p className="text-sm text-gray-600">
              By using Funect, you acknowledge that you have read and understood this Privacy Policy
              and agree to the collection, use, and disclosure of your information as described herein.
            </p>
            <p className="text-sm text-gray-600 mt-12 pt-6 border-t border-gray-200">Last reviewed: October 24, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
