import { Helmet } from 'react-helmet-async'

function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - HK Aviary BD | Data Protection & Privacy</title>
        <meta name="description" content="Read our privacy policy to understand how we collect, use, and protect your personal information at HK Aviary BD." />
        <meta name="keywords" content="privacy policy, data protection, privacy, user data, personal information" />
      </Helmet>
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-5xl">🔒</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-4">
              Privacy Policy
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-4"></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="bg-white rounded shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="prose prose-lg max-w-none">
              
              <section className="mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4">1. Introduction</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                  Welcome to HK Aviary BD. We are committed to protecting your personal information and your right to privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
                  please do not access the site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-black mb-4">2. Information We Collect</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may collect information about you in a variety of ways. The information we may collect on the site includes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Personal data such as name, email address, and phone number</li>
                  <li>Derivative data such as IP address, browser type, and access times</li>
                  <li>Financial data for transactions (processed securely through third-party payment processors)</li>
                  <li>Contact information you provide when reaching out to us</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-black mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Provide, operate, and maintain our website</li>
                  <li>Improve, personalize, and expand our website</li>
                  <li>Understand and analyze how you use our website</li>
                  <li>Develop new products, services, features, and functionality</li>
                  <li>Communicate with you for customer service and updates</li>
                  <li>Send you marketing and promotional communications (with your consent)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-black mb-4">4. Data Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We use administrative, technical, and physical security measures to help protect your personal information. 
                  While we have taken reasonable steps to secure the personal information you provide to us, please be aware 
                  that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission 
                  can be guaranteed against any interception or other type of misuse.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-black mb-4">5. Your Privacy Rights</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>The right to access – You have the right to request copies of your personal data</li>
                  <li>The right to rectification – You have the right to request correction of inaccurate information</li>
                  <li>The right to erasure – You have the right to request deletion of your personal data</li>
                  <li>The right to restrict processing – You have the right to request restriction of processing</li>
                  <li>The right to object to processing – You have the right to object to our processing of your data</li>
                  <li>The right to data portability – You have the right to request transfer of your data</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-black mb-4">6. Cookies and Tracking Technologies</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may use cookies and similar tracking technologies to track activity on our website and store certain information. 
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, 
                  if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-black mb-4">7. Third-Party Services</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our website may contain links to third-party websites and services. We are not responsible for the privacy 
                  practices of these third parties. We encourage you to read their privacy policies.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-black mb-4">8. Changes to This Privacy Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
                  Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy 
                  Policy periodically for any changes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-black mb-4">9. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us:
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

export default PrivacyPolicy

