import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Terms: React.FC = () => {
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

        {/* Terms of Service Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 lg:p-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Terms of Service</h1>
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
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the GolfBooker service, you accept and agree to be bound by the
              terms and provision of this agreement.
            </p>

            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily use GolfBooker for personal, non-commercial
              transitory viewing only. This is the grant of a license, not a transfer of title, and
              under this license you may not:
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial)</li>
              <li>Attempt to decompile or reverse engineer any software contained on GolfBooker</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>

            <h2>3. Disclaimer</h2>
            <p>
              The materials on GolfBooker are provided on an 'as is' basis. GolfBooker makes no
              warranties, expressed or implied, and hereby disclaims and negates all other warranties
              including, without limitation, implied warranties or conditions of merchantability,
              fitness for a particular purpose, or non-infringement of intellectual property or other
              violation of rights.
            </p>

            <h2>4. Limitations</h2>
            <p>
              In no event shall GolfBooker or its suppliers be liable for any damages (including,
              without limitation, damages for loss of data or profit, or due to business interruption)
              arising out of the use or inability to use the materials on GolfBooker, even if GolfBooker
              or a GolfBooker authorized representative has been notified orally or in writing of the
              possibility of such damage.
            </p>

            <h2>5. Accuracy of Materials</h2>
            <p>
              The materials appearing on GolfBooker could include technical, typographical, or
              photographic errors. GolfBooker does not warrant that any of the materials on its website
              are accurate, complete or current. GolfBooker may make changes to the materials contained
              on its website at any time without notice.
            </p>

            <h2>6. Links</h2>
            <p>
              GolfBooker has not reviewed all of the sites linked to its website and is not responsible
              for the contents of any such linked site. The inclusion of any link does not imply
              endorsement by GolfBooker of the site. Use of any such linked website is at the user's
              own risk.
            </p>

            <h2>7. Modifications</h2>
            <p>
              GolfBooker may revise these terms of service for its website at any time without notice.
              By using this website you are agreeing to be bound by the then current version of these
              terms of service.
            </p>

            <h2>8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of
              Finland and you irrevocably submit to the exclusive jurisdiction of the courts in that
              location.
            </p>

            <h2>9. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p>
              Email: support@golfbooker.fi
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
