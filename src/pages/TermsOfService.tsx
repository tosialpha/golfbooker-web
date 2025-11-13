import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const TermsOfService = () => {
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
              Terms of Service
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
              <h2 className="text-3xl font-bold mb-4">1. Introduction and Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4 pb-2">
                Welcome to Funect ("we," "our," or "us"). Funect is operated by Funect Oy, a company registered in Finland. These Terms of Service ("Terms") govern your access to and use of the Funect mobile application, website, and related services (collectively, the "Service").
              </p>
              <p className="text-muted-foreground mb-4 pb-2">
                <strong>Beta/Early Access Notice:</strong> Funect is currently in early access. The Service may contain bugs, incomplete features, or interruptions. By using the Service during this phase, you acknowledge and accept these limitations.
              </p>
              <p className="text-muted-foreground pb-2">
                By creating an account or using the Service, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use the Service.
              </p>
            </section>

            <section className="overflow-visible">
              <h2 className="text-3xl font-bold mb-4">2. Eligibility and Account Registration</h2>
              <h3 className="text-2xl font-semibold mb-3 mt-6">2.1 Age Requirements</h3>
              <p className="text-muted-foreground mb-4 pb-2">
                You must be at least 13 years of age to use Funect. If you are between 13 and 18 years old, you must have permission from a parent or legal guardian to use the Service. By using Funect, you represent and warrant that you meet these age requirements.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">2.2 Account Creation</h3>
              <p className="text-muted-foreground mb-4 pb-2">
                When you create an account, you must provide accurate, complete, and current information. You are responsible for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Immediately notifying us of any unauthorized use or security breach</li>
              </ul>
              <p className="text-muted-foreground mb-2 pb-2">You may not:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Create multiple accounts</li>
                <li>Share your account with others</li>
                <li>Use another person's account without permission</li>
                <li>Create an account using false or misleading information</li>
              </ul>
            </section>

            <section className="overflow-visible">
              <h2 className="text-3xl font-bold mb-4">3. License and Restrictions</h2>
              <h3 className="text-2xl font-semibold mb-3 mt-6">3.1 Limited License</h3>
              <p className="text-muted-foreground mb-4 pb-2">
                Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Service for your personal, non-commercial use.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">3.2 Restrictions</h3>
              <p className="text-muted-foreground mb-2 pb-2">You agree not to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Modify, copy, distribute, or create derivative works based on the Service</li>
                <li>Reverse engineer, decompile, or disassemble any aspect of the Service</li>
                <li>Use automated systems (bots, scrapers, etc.) to access the Service</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Remove, alter, or obscure any copyright, trademark, or proprietary notices</li>
                <li>Use the Service for any illegal purpose or in violation of any laws</li>
                <li>Interfere with or disrupt the integrity or performance of the Service</li>
                <li>Collect or harvest information about other users without their consent</li>
                <li>Use the Service for commercial purposes without our written permission</li>
              </ul>
            </section>

            <section className="overflow-visible">
              <h2 className="text-3xl font-bold mb-4">4. User Content and Conduct</h2>
              <h3 className="text-2xl font-semibold mb-3 mt-6">4.1 Your Content</h3>
              <p className="text-muted-foreground mb-4 pb-2">
                You retain ownership of any content you submit, post, or display on the Service ("User Content"). By posting User Content, you grant Funect a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform your User Content in connection with operating and providing the Service.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">4.2 Content Standards</h3>
              <p className="text-muted-foreground mb-2 pb-2">You agree that your User Content and conduct will not:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Violate any applicable law or regulation</li>
                <li>Infringe upon the intellectual property rights of others</li>
                <li>Be defamatory, obscene, pornographic, vulgar, or offensive</li>
                <li>Contain threats, harassment, hate speech, or incite violence</li>
                <li>Contain viruses, malware, or any harmful code</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                <li>Include spam, unsolicited promotions, or commercial solicitations</li>
                <li>Violate the privacy rights of others</li>
                <li>Be false, misleading, or deceptive</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 mt-6">4.3 Content Monitoring</h3>
              <p className="text-muted-foreground mb-4 pb-2">
                We reserve the right, but have no obligation, to monitor, review, or remove User Content at our sole discretion. We may remove content that violates these Terms or is otherwise objectionable.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">4.4 User Interactions</h3>
              <p className="text-muted-foreground pb-2">
                You are solely responsible for your interactions with other users. We do not conduct background checks on users. You should exercise caution and good judgment when interacting with other users, especially when meeting in person.
              </p>
            </section>

            <section className="overflow-visible">
              <h2 className="text-3xl font-bold mb-4">5. Venues and Third-Party Services</h2>
              <h3 className="text-2xl font-semibold mb-3 mt-6">5.1 Venue Disclaimer</h3>
              <p className="text-muted-foreground mb-4 pb-2">
                Funect provides a platform to discover and connect with activity venues. We do not own, operate, or control these venues. All bookings, transactions, and interactions with venues are between you and the venue directly.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">5.2 Assumption of Risk</h3>
              <p className="text-muted-foreground mb-4 pb-2">
                Physical activities carry inherent risks. By using Funect to participate in physical activities, you acknowledge and assume all risks associated with such activities, including but not limited to injuries, accidents, or property damage. Funect is not responsible for any injuries or damages that occur at third-party venues or during activities organized through the Service.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">5.3 Third-Party Links</h3>
              <p className="text-muted-foreground pb-2">
                The Service may contain links to third-party websites or services. We are not responsible for the content, accuracy, or practices of these third parties. Your use of third-party services is at your own risk and subject to their terms and policies.
              </p>
            </section>

            <section className="overflow-visible">
              <h2 className="text-3xl font-bold mb-4">6. Subscriptions and Payments</h2>
              <h3 className="text-2xl font-semibold mb-3 mt-6">6.1 Current Status</h3>
              <p className="text-muted-foreground mb-4 pb-2">
                During the early access phase, Funect is offered free of charge. Premium features and subscriptions will be introduced in the future with advance notice.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">6.2 Future Subscription Plans</h3>
              <p className="text-muted-foreground mb-2 pb-2">When subscriptions are introduced, the following terms will apply:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Subscriptions will be billed in advance on a recurring basis (monthly or as specified)</li>
                <li>Payment will be due at the start of each billing cycle</li>
                <li>Subscriptions will automatically renew unless cancelled before the renewal date</li>
                <li>We will provide 30 days' advance notice before implementing paid subscriptions for existing users</li>
                <li>Pricing changes will require 30 days' advance notice</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 mt-6">6.3 Cancellation and Refunds (When Applicable)</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>You may cancel your subscription at any time through your account settings</li>
                <li>Cancellation takes effect at the end of the current billing period</li>
                <li>You will retain access to paid features until the end of the paid period</li>
                <li>Refunds will be handled in accordance with EU consumer protection laws</li>
                <li>Promotional subscriptions will be subject to additional terms</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 mt-6">6.4 Payment Processing (When Applicable)</h3>
              <p className="text-muted-foreground pb-2">
                Payments will be processed by secure third-party payment providers. You will be required to provide accurate payment information and authorize charges. We will not store your complete payment card information.
              </p>
            </section>

            <section className="overflow-visible">
              <h2 className="text-3xl font-bold mb-4">7. Intellectual Property Rights</h2>
              <h3 className="text-2xl font-semibold mb-3 mt-6">7.1 Our Property</h3>
              <p className="text-muted-foreground mb-4 pb-2">
                The Service, including its design, features, functionality, text, graphics, logos, and software, is owned by Funect and protected by copyright, trademark, and other intellectual property laws. Our trademarks may not be used without our prior written permission.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">7.2 Feedback</h3>
              <p className="text-muted-foreground pb-2">
                If you provide feedback, suggestions, or ideas about the Service, you grant us the right to use such feedback without compensation or attribution.
              </p>
            </section>

            <section className="overflow-visible">
              <h2 className="text-3xl font-bold mb-4">8. Privacy and Data Protection</h2>
              <p className="text-muted-foreground pb-2">
                Your privacy is important to us. Our collection and use of personal information is described in our Privacy Policy, which is incorporated into these Terms by reference. By using the Service, you consent to our data practices as described in the Privacy Policy.
              </p>
            </section>

            <section className="overflow-visible">
              <h2 className="text-3xl font-bold mb-4">9. Account Termination</h2>
              <h3 className="text-2xl font-semibold mb-3 mt-6">9.1 Termination by You</h3>
              <p className="text-muted-foreground mb-4 pb-2">
                You may terminate your account at any time through your account settings or by contacting us at support@funect.com.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">9.2 Termination by Us</h3>
              <p className="text-muted-foreground mb-2 pb-2">
                We reserve the right to suspend or terminate your account and access to the Service at any time, with or without notice, for any reason, including if:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>You violate these Terms or our policies</li>
                <li>Your account has been inactive for an extended period</li>
                <li>We are required to do so by law</li>
                <li>We decide to discontinue the Service</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 mt-6">9.3 Effect of Termination</h3>
              <p className="text-muted-foreground mb-2 pb-2">Upon termination:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Your right to use the Service immediately ceases</li>
                <li>We may delete your account and User Content</li>
                <li>You remain liable for all obligations incurred prior to termination</li>
                <li>Sections that by their nature should survive will remain in effect</li>
              </ul>
            </section>

            <section className="overflow-visible">
              <h2 className="text-3xl font-bold mb-4">10. Disclaimers and Limitations of Liability</h2>

              <h3 className="text-2xl font-semibold mb-3 mt-6">10.1 Early Access Disclaimer</h3>
              <p className="text-muted-foreground mb-2 pb-2">
                FUNECT IS CURRENTLY IN EARLY ACCESS/BETA PHASE. THE SERVICE MAY:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Contain bugs, errors, or incomplete features</li>
                <li>Experience downtime or interruptions</li>
                <li>Undergo significant changes without notice</li>
                <li>Have data loss or corruption (though we take reasonable precautions)</li>
              </ul>
              <p className="text-muted-foreground mb-4 pb-2">
                YOU USE THE SERVICE DURING THIS PHASE AT YOUR OWN RISK.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">10.2 Disclaimer of Warranties</h3>
              <p className="text-muted-foreground mb-2 pb-2">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Merchantability, fitness for a particular purpose, and non-infringement</li>
                <li>That the Service will be uninterrupted, secure, or error-free</li>
                <li>That defects will be corrected</li>
                <li>That the Service is free from viruses or harmful components</li>
                <li>The accuracy, reliability, or completeness of any content</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 mt-6">10.3 Limitation of Liability</h3>
              <p className="text-muted-foreground mb-2 pb-2">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, USE, OR GOODWILL</li>
                <li>AS FUNECT IS CURRENTLY FREE TO USE, OUR TOTAL LIABILITY SHALL NOT EXCEED €100</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 mt-6">10.4 Exceptions</h3>
              <p className="text-muted-foreground mb-2 pb-2">Nothing in these Terms excludes or limits our liability for:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Death or personal injury caused by our negligence</li>
                <li>Fraud or fraudulent misrepresentation</li>
                <li>Gross negligence or willful misconduct</li>
                <li>Any liability that cannot be excluded or limited under applicable law</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 mt-6">10.5 Basis of the Bargain</h3>
              <p className="text-muted-foreground pb-2">
                You acknowledge that these limitations of liability are fundamental elements of the agreement between you and Funect, and that we would not provide the Service without these limitations. Given that the Service is currently free, these limitations are reasonable and proportionate.
              </p>
            </section>

            <section className="overflow-visible">
              <h2 className="text-3xl font-bold mb-4">11. Indemnification</h2>
              <p className="text-muted-foreground mb-2 pb-2">
                You agree to indemnify, defend, and hold harmless Funect, its affiliates, officers, directors, employees, agents, and licensors from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising from:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Your use of the Service</li>
                <li>Your User Content</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another person or entity</li>
                <li>Your violation of any applicable laws</li>
              </ul>
            </section>

            <section className="overflow-visible">
              <h2 className="text-3xl font-bold mb-4">12. Dispute Resolution and Governing Law</h2>
              <h3 className="text-2xl font-semibold mb-3 mt-6">12.1 Governing Law</h3>
              <p className="text-muted-foreground mb-4 pb-2">
                These Terms are governed by the laws of Finland, without regard to its conflict of law provisions.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">12.2 Jurisdiction</h3>
              <p className="text-muted-foreground mb-4 pb-2">
                Any disputes arising from these Terms or the Service shall be resolved exclusively in the courts of Helsinki, Finland. You consent to the personal jurisdiction of these courts.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">12.3 Informal Resolution</h3>
              <p className="text-muted-foreground mb-4 pb-2">
                Before filing a claim, you agree to contact us at legal@funect.com to attempt to resolve the dispute informally. We will attempt to resolve the dispute through good faith negotiations for at least 30 days.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">12.4 EU Consumer Rights</h3>
              <p className="text-muted-foreground pb-2">
                If you are a consumer resident in the European Union, nothing in these Terms affects your statutory rights, including the right to take legal action in the courts of your country of residence.
              </p>
            </section>

            <section className="overflow-visible">
              <h2 className="text-3xl font-bold mb-4">13. General Provisions</h2>
              <h3 className="text-2xl font-semibold mb-3 mt-6">13.1 Changes to Terms</h3>
              <p className="text-muted-foreground mb-2 pb-2">
                We reserve the right to modify these Terms at any time. We will notify you of material changes by:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Posting the updated Terms with a new "Last updated" date</li>
                <li>Sending an email notification to your registered email address</li>
                <li>Displaying a prominent notice in the Service</li>
              </ul>
              <p className="text-muted-foreground mb-4 pb-2">
                Your continued use of the Service after such changes constitutes acceptance of the updated Terms. If you do not agree to the modified Terms, you must stop using the Service.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">13.2 Entire Agreement</h3>
              <p className="text-muted-foreground mb-4 pb-2">
                These Terms, together with our Privacy Policy and any other policies referenced herein, constitute the entire agreement between you and Funect regarding the Service.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">13.3 Severability</h3>
              <p className="text-muted-foreground mb-4 pb-2">
                If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will remain in full force and effect. The invalid provision will be modified to the minimum extent necessary to make it valid and enforceable.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">13.4 Waiver</h3>
              <p className="text-muted-foreground mb-4 pb-2">
                Our failure to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision. Any waiver must be in writing and signed by an authorized representative.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">13.5 Assignment</h3>
              <p className="text-muted-foreground mb-4 pb-2">
                You may not assign or transfer these Terms or your rights under them without our prior written consent. We may assign these Terms without restriction. Any attempted assignment in violation of this section is void.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">13.6 No Agency</h3>
              <p className="text-muted-foreground mb-4 pb-2">
                No agency, partnership, joint venture, or employment relationship is created between you and Funect as a result of these Terms or your use of the Service.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">13.7 Force Majeure</h3>
              <p className="text-muted-foreground mb-4 pb-2">
                We are not liable for any failure to perform our obligations due to circumstances beyond our reasonable control, including natural disasters, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, pandemics, strikes, or shortages of transportation, facilities, fuel, energy, labor, or materials.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">13.8 Language</h3>
              <p className="text-muted-foreground pb-2">
                These Terms are written in English. Any translations are provided for convenience only. In case of conflict, the English version prevails.
              </p>
            </section>

            <section className="overflow-visible">
              <h2 className="text-3xl font-bold mb-4">14. Contact Information</h2>
              <p className="text-muted-foreground mb-4 pb-2">
                If you have any questions, concerns, or complaints regarding these Terms, please contact us:
              </p>
              <p className="text-muted-foreground mb-2 pb-2 font-semibold">
                Funect Oy
              </p>
              <p className="text-muted-foreground mb-4 pb-2">
                Finland
              </p>
              <ul className="list-none text-muted-foreground space-y-1 ml-0 mb-4">
                <li>Email: legal@funect.com</li>
                <li>Support: support@funect.com</li>
                <li>For data protection inquiries: privacy@funect.com</li>
              </ul>
              <p className="text-muted-foreground pb-2 italic mt-6">
                By using Funect, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </section>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
