import { Helmet } from 'react-helmet-async'

function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - HK Aviary BD | Terms & Conditions</title>
        <meta name="description" content="Read our terms of service to understand the rules and regulations for using HK Aviary BD website." />
        <meta name="keywords" content="terms of service, terms and conditions, user agreement, legal terms" />
      </Helmet>
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-5xl">📋</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4">
              Terms of <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Service</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-4"></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="prose prose-lg max-w-none">
              
              <section className="mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4">1. Agreement to Terms</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                  By accessing or using this website, you agree to be bound by these Terms of Service and all applicable 
                  laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  If you do not agree with any of these terms, you are prohibited from using or accessing this site. 
                  The materials contained in this website are protected by applicable copyright and trademark law.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Use License</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials on HK Aviary BD's website for 
                  personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
                  and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">3. User Accounts</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  When you create an account with us, you must provide information that is accurate, complete, and current 
                  at all times. You are responsible for safeguarding the password and for all activities that occur under 
                  your account.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  You agree not to disclose your password to any third party and to take sole responsibility for any activities 
                  or actions under your account, whether or not you have authorized such activities or actions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Prohibited Uses</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You may use our website only for lawful purposes and in accordance with these Terms. You agree not to use the website:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>In any way that violates any applicable national or international law or regulation</li>
                  <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
                  <li>To impersonate or attempt to impersonate the company, a company employee, another user, or any other person or entity</li>
                  <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</li>
                  <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Content</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our website allows you to post, link, store, share and otherwise make available certain information, text, 
                  graphics, or other material. You are responsible for the content that you post on or through the website, 
                  including its legality, reliability, and appropriateness.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  By posting content on or through the website, you grant us the right and license to use, modify, publicly 
                  perform, publicly display, reproduce, and distribute such content on and through the website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Disclaimer</h2>
                <p className="text-gray-600 leading-relaxed">
                  The materials on HK Aviary BD's website are provided on an 'as is' basis. HK Aviary BD makes no warranties, 
                  expressed or implied, and hereby disclaims and negates all other warranties including without limitation, 
                  implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement 
                  of intellectual property or other violation of rights.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Limitations</h2>
                <p className="text-gray-600 leading-relaxed">
                  In no event shall HK Aviary BD or its suppliers be liable for any damages (including, without limitation, 
                  damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
                  to use the materials on HK Aviary BD's website, even if HK Aviary BD or an authorized representative has 
                  been notified orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Accuracy of Materials</h2>
                <p className="text-gray-600 leading-relaxed">
                  The materials appearing on HK Aviary BD's website could include technical, typographical, or photographic 
                  errors. HK Aviary BD does not warrant that any of the materials on its website are accurate, complete, 
                  or current. HK Aviary BD may make changes to the materials contained on its website at any time without notice.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Links</h2>
                <p className="text-gray-600 leading-relaxed">
                  HK Aviary BD has not reviewed all of the sites linked to its website and is not responsible for the contents 
                  of any such linked site. The inclusion of any link does not imply endorsement by HK Aviary BD of the site. 
                  Use of any such linked website is at the user's own risk.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Modifications</h2>
                <p className="text-gray-600 leading-relaxed">
                  HK Aviary BD may revise these terms of service for its website at any time without notice. By using this 
                  website you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Governing Law</h2>
                <p className="text-gray-600 leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of Bangladesh and you 
                  irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-4 space-y-2 text-gray-600">
                  <p><strong>Email:</strong> hkaviarybd@gmail.com</p>
                  <p><strong>Phone:</strong> 01737-149420</p>
                  <p><strong>Address:</strong> Holan, Samsu Garage, Dhaka, Bangladesh</p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TermsOfService

