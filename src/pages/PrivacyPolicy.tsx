import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-20 px-4 overflow-visible">
        <div className="container mx-auto max-w-4xl overflow-visible">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: October 24, 2025
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none space-y-8 overflow-visible"
          >
            <section className="overflow-visible">
              <h2 className="text-3xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4 pb-2">
                Funect ("we," "our," or "us") is operated by Funect Oy, a company registered in Finland. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our mobile application, website, and related services (collectively, the "Service").
              </p>
              <p className="text-muted-foreground mb-4 pb-2">
                <strong>Early Access Notice:</strong> Funect is currently in early access/beta phase. Data security measures are in place, but as with any early-stage service, you should be mindful of what information you share.
              </p>
              <p className="text-muted-foreground mb-4 pb-2">
                This Privacy Policy should be read in conjunction with our Terms of Service. By using the Service, you consent to the data practices described in this policy.
              </p>
              <p className="text-muted-foreground pb-2">
                <strong>Data Controller:</strong> Funect Oy is the data controller responsible for your personal information.
              </p>
            </section>

            <section className="overflow-visible">
              <h2 className="text-3xl font-bold mb-4">2. Information We Collect</h2>

              <h3 className="text-2xl font-semibold mb-3 mt-6">2.1 Information You Provide Directly</h3>
              <p className="text-muted-foreground mb-2 pb-2"><strong>Account Information</strong></p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number (optional)</li>
                <li>Password (encrypted)</li>
                <li>Date of birth</li>
                <li>Gender (optional)</li>
              </ul>

              <p className="text-muted-foreground mb-2 pb-2"><strong>Profile Information</strong></p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Profile photo</li>
                <li>Activity preferences and interests</li>
                <li>Skill levels for various activities</li>
                <li>Bio or description</li>
                <li>Preferred venues and locations</li>
              </ul>

              <p className="text-muted-foreground mb-2 pb-2"><strong>Activity Information</strong></p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Posts, comments, and messages</li>
                <li>Group and event participation</li>
                <li>Venue reviews and ratings</li>
                <li>Activity bookings and check-ins</li>
                <li>Loyalty points and rewards</li>
              </ul>

              <p className="text-muted-foreground mb-2 pb-2"><strong>Payment Information (when payment features are implemented)</strong></p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Payment card details (processed by our payment processor; we only store last 4 digits and expiration date)</li>
                <li>Billing address</li>
                <li>Transaction history</li>
              </ul>
              <p className="text-muted-foreground mb-4 pb-2 italic">
                Note: Payment processing is not currently active during the early access phase.
              </p>

              <p className="text-muted-foreground mb-2 pb-2"><strong>Communications</strong></p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Messages you send to other users</li>
                <li>Communications with customer support</li>
                <li>Feedback and survey responses</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 mt-6">2.2 Information Collected Automatically</h3>
              <p className="text-muted-foreground mb-2 pb-2"><strong>Device Information</strong></p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Device type, model, and manufacturer</li>
                <li>Operating system and version</li>
                <li>Unique device identifiers</li>
                <li>Mobile network information</li>
                <li>IP address</li>
              </ul>

              <p className="text-muted-foreground mb-2 pb-2"><strong>Usage Information</strong></p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Features you use and how you use them</li>
                <li>Pages or screens viewed</li>
                <li>Time and duration of visits</li>
                <li>Search queries</li>
                <li>Button clicks and navigation paths</li>
                <li>Crash reports and performance data</li>
              </ul>

              <p className="text-muted-foreground mb-2 pb-2"><strong>Location Information</strong></p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Precise location (GPS) when you use venue search or check-in features</li>
                <li>Approximate location (IP-based)</li>
                <li>You can control location permissions through your device settings</li>
              </ul>

              <p className="text-muted-foreground mb-2 pb-2"><strong>Cookies and Similar Technologies</strong></p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Session cookies (essential for functionality)</li>
                <li>Preference cookies (remember your settings)</li>
                <li>Analytics cookies (understand how you use the Service)</li>
                <li>Advertising cookies (deliver relevant ads, if applicable)</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 mt-6">2.3 Information from Third Parties</h3>
              <p className="text-muted-foreground mb-2 pb-2"><strong>Social Media</strong></p>
              <p className="text-muted-foreground mb-2 pb-2">If you connect your social media accounts:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Public profile information</li>
                <li>Email address</li>
                <li>Friends list (with your permission)</li>
              </ul>

              <p className="text-muted-foreground mb-2 pb-2"><strong>Venues and Partners</strong></p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Booking confirmations</li>
                <li>Check-in data</li>
                <li>Participation in venue events</li>
              </ul>

              <p className="text-muted-foreground mb-2 pb-2"><strong>Payment Providers</strong></p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Payment confirmation</li>
                <li>Transaction status</li>
              </ul>
            </section>

            <section className="overflow-visible">
              <h2 className="text-3xl font-bold mb-4">3. Legal Basis for Processing (GDPR)</h2>
              <p className="text-muted-foreground mb-4 pb-2">
                We process your personal information based on the following legal grounds:
              </p>

              <p className="text-muted-foreground mb-2 pb-2"><strong>Contract Performance (Article 6(1)(b) GDPR)</strong></p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Creating and managing your account</li>
                <li>Providing the Service features</li>
                <li>Processing payments and transactions</li>
                <li>Enabling communication with other users</li>
              </ul>

              <p className="text-muted-foreground mb-2 pb-2"><strong>Legitimate Interests (Article 6(1)(f) GDPR)</strong></p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Improving and developing the Service</li>
                <li>Marketing our services (with opt-out option)</li>
                <li>Detecting and preventing fraud</li>
                <li>Securing our systems</li>
                <li>Analytics and business intelligence</li>
              </ul>

              <p className="text-muted-foreground mb-2 pb-2"><strong>Consent (Article 6(1)(a) GDPR)</strong></p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Marketing communications (you can withdraw anytime)</li>
                <li>Precise location tracking</li>
                <li>Non-essential cookies</li>
                <li>Processing special categories of data (if any)</li>
              </ul>

              <p className="text-muted-foreground mb-2 pb-2"><strong>Legal Obligation (Article 6(1)(c) GDPR)</strong></p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Complying with tax and accounting requirements</li>
                <li>Responding to legal requests</li>
                <li>Protecting vital interests</li>
              </ul>
            </section>

            <section className="overflow-visible">
              <h2 className="text-3xl font-bold mb-4">4. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4 pb-2">
                We use your information for the following purposes:
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">4.1 Service Provision</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Create and manage your account</li>
                <li>Enable profile customization</li>
                <li>Connect you with venues and other users</li>
                <li>Facilitate group creation and event organization</li>
                <li>Process bookings and reservations</li>
                <li>Manage loyalty points and rewards</li>
                <li>Enable messaging and social features</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 mt-6">4.2 Communication</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Send transactional emails (booking confirmations, password resets)</li>
                <li>Provide customer support</li>
                <li>Send service updates and announcements</li>
                <li>Notify you of new messages or activity</li>
                <li>Respond to your inquiries</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 mt-6">4.3 Personalization</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Recommend relevant venues and activities</li>
                <li>Personalize your feed and search results</li>
                <li>Suggest connections with other users</li>
                <li>Tailor content based on your preferences</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 mt-6">4.4 Analytics and Improvement</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Understand how users interact with the Service</li>
                <li>Identify bugs and technical issues</li>
                <li>Analyze trends and usage patterns</li>
                <li>Develop new features</li>
                <li>Conduct research and testing</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 mt-6">4.5 Safety and Security</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Detect and prevent fraud</li>
                <li>Monitor for suspicious activity</li>
                <li>Enforce our Terms of Service</li>
                <li>Protect our legal rights</li>
                <li>Investigate violations</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 mt-6">4.6 Marketing (with consent)</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Send promotional emails about new features</li>
                <li>Share news and updates about Funect</li>
                <li>Conduct surveys and research</li>
                <li>Display personalized advertisements (if applicable)</li>
              </ul>

              <p className="text-muted-foreground pb-2 italic">
                You can opt out of marketing communications at any time by clicking "unsubscribe" in emails or adjusting your account settings.
              </p>
            </section>

            <section className="overflow-visible">
              <h2 className="text-3xl font-bold mb-4">5. How We Share Your Information</h2>

              <h3 className="text-2xl font-semibold mb-3 mt-6">5.1 Public Information</h3>
              <p className="text-muted-foreground mb-2 pb-2">The following information is visible to other Funect users:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Profile name and photo</li>
                <li>Bio and activity preferences</li>
                <li>Posts and comments in public groups</li>
                <li>Participation in public events</li>
                <li>Reviews and ratings (may be anonymous)</li>
              </ul>
              <p className="text-muted-foreground mb-4 pb-2">You can control visibility settings in your account preferences.</p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">5.2 Other Users</h3>
              <p className="text-muted-foreground mb-2 pb-2">When you interact with other users:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Your profile information is visible to users you connect with</li>
                <li>Messages are visible to conversation participants</li>
                <li>Group organizers can see participant information</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 mt-6">5.3 Venues and Partners</h3>
              <p className="text-muted-foreground mb-2 pb-2">We share relevant information with:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Venues where you book activities (name, contact info, booking details)</li>
                <li>Event organizers for events you join</li>
                <li>Partner organizations with your consent</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 mt-6">5.4 Service Providers</h3>
              <p className="text-muted-foreground mb-2 pb-2">We share information with trusted third-party service providers who assist us:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Supabase - Cloud hosting, database, and authentication</li>
                <li>Expo/React Native - Mobile app infrastructure</li>
                <li>Payment processors (when payment features are implemented)</li>
                <li>Analytics providers (if/when implemented)</li>
                <li>Email delivery services (if/when implemented)</li>
              </ul>
              <p className="text-muted-foreground mb-4 pb-2">
                These providers are contractually obligated to protect your information and may only use it for specified purposes. We carefully select providers that comply with GDPR and have appropriate security measures.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">5.5 Legal Requirements</h3>
              <p className="text-muted-foreground mb-2 pb-2">We may disclose information if required by law or in good faith belief that such disclosure is necessary to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Comply with legal obligations, court orders, or government requests</li>
                <li>Enforce our Terms of Service</li>
                <li>Protect our rights, property, or safety</li>
                <li>Protect the rights, property, or safety of our users or the public</li>
                <li>Detect, prevent, or address fraud, security, or technical issues</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 mt-6">5.6 Business Transfers</h3>
              <p className="text-muted-foreground mb-4 pb-2">
                If Funect is involved in a merger, acquisition, asset sale, or bankruptcy, your information may be transferred as part of that transaction. We will notify you of any such change and the choices you may have.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">5.7 With Your Consent</h3>
              <p className="text-muted-foreground mb-4 pb-2">
                We may share information with third parties when you give us explicit consent to do so.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">5.8 Aggregated and De-identified Data</h3>
              <p className="text-muted-foreground pb-2">
                We may share aggregated or de-identified data that cannot reasonably be used to identify you, for research, marketing, or analytics purposes.
              </p>
            </section>

            <section className="overflow-visible">
              <h2 className="text-3xl font-bold mb-4">6. Data Retention</h2>
              <p className="text-muted-foreground mb-4 pb-2">
                We retain your personal information for as long as necessary to provide the Service and fulfill the purposes outlined in this Privacy Policy.
              </p>
              <p className="text-muted-foreground mb-2 pb-2"><strong>Specific Retention Periods:</strong></p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Account data: Until account deletion + 30 days (for recovery)</li>
                <li>Transaction records: 7 years (legal requirement)</li>
                <li>Messages: Until deleted by users or account closure</li>
                <li>Analytics data: Aggregated after 26 months</li>
                <li>Backup copies: Up to 90 days after deletion</li>
              </ul>
              <p className="text-muted-foreground mb-4 pb-2">
                After the retention period, we will delete or anonymize your information. Some information may be retained longer if required by law or for legitimate business purposes.
              </p>
              <p className="text-muted-foreground pb-2">
                You may request deletion of your account and data at any time through account settings or by contacting privacy@funect.com.
              </p>
            </section>

            <section className="overflow-visible">
              <h2 className="text-3xl font-bold mb-4">7. Your Rights (GDPR)</h2>
              <p className="text-muted-foreground mb-4 pb-2">
                Under the General Data Protection Regulation (GDPR) and other applicable laws, you have the following rights:
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">7.1 Right to Access</h3>
              <p className="text-muted-foreground mb-4 pb-2">
                You can request a copy of your personal information we hold. We provide much of this data directly in your account settings.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">7.2 Right to Rectification</h3>
              <p className="text-muted-foreground mb-4 pb-2">
                You can correct inaccurate or incomplete personal information through your account settings or by contacting us.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">7.3 Right to Erasure ("Right to be Forgotten")</h3>
              <p className="text-muted-foreground mb-4 pb-2">
                You can request deletion of your personal information, subject to certain exceptions (e.g., legal obligations, legitimate interests).
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">7.4 Right to Restriction of Processing</h3>
              <p className="text-muted-foreground mb-4 pb-2">
                You can request that we limit how we use your information in certain circumstances.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">7.5 Right to Data Portability</h3>
              <p className="text-muted-foreground mb-4 pb-2">
                You can request a machine-readable copy of your personal information to transfer to another service.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">7.6 Right to Object</h3>
              <p className="text-muted-foreground mb-4 pb-2">
                You can object to processing based on legitimate interests or for direct marketing purposes.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">7.7 Right to Withdraw Consent</h3>
              <p className="text-muted-foreground mb-4 pb-2">
                Where processing is based on consent, you can withdraw consent at any time.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">7.8 Right to Lodge a Complaint</h3>
              <p className="text-muted-foreground mb-2 pb-2">
                You have the right to lodge a complaint with your local data protection authority if you believe we have violated your rights.
              </p>
              <p className="text-muted-foreground mb-2 pb-2"><strong>Finnish Data Protection Authority:</strong></p>
              <ul className="list-none text-muted-foreground space-y-1 ml-4 mb-4">
                <li>Website: tietosuoja.fi</li>
                <li>Email: tietosuoja@om.fi</li>
              </ul>

              <p className="text-muted-foreground mb-2 pb-2"><strong>How to Exercise Your Rights:</strong></p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-2">
                <li>Through account settings for most requests</li>
                <li>Email us at privacy@funect.com</li>
                <li>We will respond within 30 days</li>
              </ul>
            </section>

            <section className="overflow-visible">
              <h2 className="text-3xl font-bold mb-4">8. Data Security</h2>
              <p className="text-muted-foreground mb-4 pb-2">
                We implement appropriate technical and organizational measures to protect your personal information:
              </p>

              <p className="text-muted-foreground mb-2 pb-2"><strong>Technical Measures:</strong></p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Encryption in transit (TLS/SSL)</li>
                <li>Encryption at rest for sensitive data (passwords, authentication tokens)</li>
                <li>Secure authentication (hashed passwords using industry-standard algorithms)</li>
                <li>Secure cloud infrastructure (Supabase with built-in security features)</li>
                <li>Access controls and authentication</li>
                <li>Regular security updates</li>
              </ul>

              <p className="text-muted-foreground mb-2 pb-2"><strong>Organizational Measures:</strong></p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Access limited to authorized personnel only</li>
                <li>Data breach response procedures</li>
                <li>Regular security policy reviews</li>
                <li>Secure development practices</li>
              </ul>

              <p className="text-muted-foreground mb-2 pb-2"><strong>Early Access Considerations:</strong></p>
              <p className="text-muted-foreground mb-2 pb-2">As Funect is in early access:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Security measures are appropriate for the current scale but will expand as the platform grows</li>
                <li>We use established, secure third-party services (Supabase, etc.) rather than custom infrastructure</li>
                <li>Regular security audits will be implemented as the platform scales</li>
                <li>We prioritize data security and maintain robust security standards</li>
              </ul>

              <p className="text-muted-foreground mb-2 pb-2"><strong>Important Notice:</strong></p>
              <p className="text-muted-foreground mb-4 pb-2">
                No method of transmission or electronic storage is 100% secure. While we strive to protect your information using industry-standard practices, we cannot guarantee absolute security. You are responsible for maintaining the confidentiality of your account credentials.
              </p>

              <p className="text-muted-foreground mb-2 pb-2">During early access, we recommend:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Not sharing highly sensitive personal information in your profile</li>
                <li>Using a unique, strong password</li>
                <li>Being mindful of what you post publicly</li>
              </ul>
            </section>

            <section className="overflow-visible">
              <h2 className="text-3xl font-bold mb-4">9. International Data Transfers</h2>
              <p className="text-muted-foreground mb-4 pb-2">
                Funect is based in Finland (EU). Your information may be transferred to and processed in countries outside the European Economic Area (EEA), including countries that may not provide the same level of data protection.
              </p>
              <p className="text-muted-foreground mb-2 pb-2">When we transfer data internationally, we ensure appropriate safeguards are in place:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Standard Contractual Clauses (EU Commission approved)</li>
                <li>Adequacy decisions by the EU Commission</li>
                <li>Binding Corporate Rules (where applicable)</li>
                <li>Other legally approved transfer mechanisms</li>
              </ul>
              <p className="text-muted-foreground pb-2">
                For transfers to the United States, we work with providers that comply with relevant frameworks such as the EU-U.S. Data Privacy Framework.
              </p>
            </section>

            <section className="overflow-visible">
              <h2 className="text-3xl font-bold mb-4">10. Cookies and Tracking Technologies</h2>

              <h3 className="text-2xl font-semibold mb-3 mt-6">10.1 Types of Cookies We Use</h3>

              <p className="text-muted-foreground mb-2 pb-2"><strong>Essential Cookies (strictly necessary)</strong></p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Authentication and session management</li>
                <li>Security features</li>
                <li>Load balancing</li>
                <li>These cannot be disabled</li>
              </ul>

              <p className="text-muted-foreground mb-2 pb-2"><strong>Functional Cookies (enhance user experience)</strong></p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Remember your preferences and settings</li>
                <li>Language preferences</li>
                <li>Location preferences</li>
              </ul>

              <p className="text-muted-foreground mb-2 pb-2"><strong>Analytics Cookies (understand usage)</strong></p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Google Analytics (anonymized)</li>
                <li>Usage statistics</li>
                <li>Performance monitoring</li>
              </ul>

              <p className="text-muted-foreground mb-2 pb-2"><strong>Advertising Cookies (if applicable)</strong></p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Personalized advertising</li>
                <li>Measure ad effectiveness</li>
                <li>Retargeting campaigns</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 mt-6">10.2 Managing Cookies</h3>
              <p className="text-muted-foreground mb-2 pb-2">You can control cookies through:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Browser settings: Most browsers allow you to block or delete cookies</li>
                <li>Cookie preferences: Available in our Service settings</li>
                <li>Opt-out tools: Tools like Google Analytics Opt-out Browser Add-on</li>
              </ul>
              <p className="text-muted-foreground mb-4 pb-2">Note: Disabling certain cookies may affect functionality of the Service.</p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">10.3 Do Not Track</h3>
              <p className="text-muted-foreground pb-2">
                Our Service does not currently respond to "Do Not Track" browser signals, as there is no industry standard for compliance.
              </p>
            </section>

            <section className="overflow-visible">
              <h2 className="text-3xl font-bold mb-4">11. Children's Privacy</h2>
              <p className="text-muted-foreground mb-4 pb-2">
                Funect is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>
              <p className="text-muted-foreground mb-4 pb-2">
                <strong>If you are between 13 and 18:</strong> You must have permission from a parent or guardian to use the Service.
              </p>
              <p className="text-muted-foreground pb-2">
                <strong>If you are a parent or guardian:</strong> If you believe your child under 13 has provided us with personal information, please contact us immediately at privacy@funect.com, and we will delete such information.
              </p>
            </section>

            <section className="overflow-visible">
              <h2 className="text-3xl font-bold mb-4">12. Special Categories of Data</h2>
              <p className="text-muted-foreground mb-4 pb-2">
                We do not intentionally collect "special categories" of personal data (e.g., health data, racial or ethnic origin, political opinions, religious beliefs) as defined by GDPR Article 9.
              </p>
              <p className="text-muted-foreground pb-2">
                If you choose to share such information in your profile or posts, you explicitly consent to our processing of this information for the purposes outlined in this policy. You can withdraw this consent at any time by removing such information or contacting us.
              </p>
            </section>

            <section className="overflow-visible">
              <h2 className="text-3xl font-bold mb-4">13. Automated Decision-Making</h2>
              <p className="text-muted-foreground mb-2 pb-2">We may use automated decision-making for:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Content recommendations</li>
                <li>Venue suggestions</li>
                <li>Fraud detection</li>
              </ul>
              <p className="text-muted-foreground pb-2">
                These automated decisions are based on algorithms and do not produce legal or similarly significant effects. You have the right to request human intervention and to contest automated decisions by contacting us.
              </p>
            </section>

            <section className="overflow-visible">
              <h2 className="text-3xl font-bold mb-4">14. Third-Party Services</h2>
              <p className="text-muted-foreground mb-4 pb-2">
                Our Service may contain links to third-party websites, applications, or services not operated by us. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any information.
              </p>
              <p className="text-muted-foreground mb-2 pb-2">Third-party services we integrate with may include:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Social media platforms (Facebook, Instagram, etc.)</li>
                <li>Payment processors (Stripe, PayPal, etc.)</li>
                <li>Map services (Google Maps, Apple Maps)</li>
                <li>Analytics providers (Google Analytics, etc.)</li>
              </ul>
            </section>

            <section className="overflow-visible">
              <h2 className="text-3xl font-bold mb-4">15. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground mb-4 pb-2">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons.
              </p>
              <p className="text-muted-foreground mb-2 pb-2">We will notify you of material changes by:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Updating the "Last updated" date</li>
                <li>Sending an email to your registered email address</li>
                <li>Displaying a prominent notice in the Service</li>
              </ul>
              <p className="text-muted-foreground mb-2 pb-2">Your rights regarding changes:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>If you disagree with changes, you may close your account</li>
                <li>Continued use after notification constitutes acceptance of the updated policy</li>
                <li>For material changes affecting your rights, we may request your explicit consent</li>
              </ul>
            </section>

            <section className="overflow-visible">
              <h2 className="text-3xl font-bold mb-4">16. Contact Us</h2>
              <p className="text-muted-foreground mb-4 pb-2">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <p className="text-muted-foreground mb-2 pb-2"><strong>Data Controller:</strong></p>
              <p className="text-muted-foreground mb-4 pb-2">
                Funect Oy<br />
                Finland<br />
                Email: privacy@funect.com
              </p>

              <p className="text-muted-foreground mb-2 pb-2"><strong>General Inquiries:</strong></p>
              <p className="text-muted-foreground mb-4 pb-2">Email: support@funect.com</p>

              <p className="text-muted-foreground mb-2 pb-2"><strong>Response Time:</strong></p>
              <p className="text-muted-foreground mb-4 pb-2">We aim to respond to all inquiries within 30 days as required by GDPR.</p>
            </section>

            <section className="overflow-visible">
              <h2 className="text-3xl font-bold mb-4">17. Additional Information for EU Residents</h2>

              <p className="text-muted-foreground mb-2 pb-2"><strong>Controller Details:</strong></p>
              <p className="text-muted-foreground mb-4 pb-2">
                Funect Oy is a company registered in Finland and is the data controller responsible for your personal information.
              </p>

              <p className="text-muted-foreground mb-2 pb-2"><strong>Data Protection Contact:</strong></p>
              <p className="text-muted-foreground mb-4 pb-2">
                For EU data protection matters, contact: privacy@funect.com
              </p>

              <p className="text-muted-foreground mb-2 pb-2"><strong>Supervisory Authority:</strong></p>
              <p className="text-muted-foreground mb-4 pb-2">
                You have the right to lodge a complaint with the Finnish Data Protection Ombudsman (Tietosuojavaltuutettu) or your local EU supervisory authority if you believe we have violated your rights.
              </p>

              <p className="text-muted-foreground mb-2 pb-2"><strong>Finnish Data Protection Authority:</strong></p>
              <ul className="list-none text-muted-foreground space-y-1 ml-4 mb-4">
                <li>Website: tietosuoja.fi</li>
                <li>Email: tietosuoja@om.fi</li>
              </ul>

              <p className="text-muted-foreground mb-2 pb-2"><strong>Compliance:</strong></p>
              <p className="text-muted-foreground mb-4 pb-2">
                Despite being in early access phase, we are committed to GDPR compliance and respecting all EU data protection rights outlined in this policy.
              </p>

              <p className="text-muted-foreground pb-2 italic mt-8">
                By using Funect, you acknowledge that you have read and understood this Privacy Policy and agree to the collection, use, and disclosure of your information as described herein.
              </p>

              <p className="text-muted-foreground pb-2 italic">
                Last reviewed: October 24, 2025
              </p>
            </section>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
