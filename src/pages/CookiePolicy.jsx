import { Helmet } from 'react-helmet-async'

function CookiePolicy() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - HK Aviary BD | Cookie Usage & Management</title>
        <meta name="description" content="Learn about how we use cookies on HK Aviary BD website and how you can manage your cookie preferences." />
        <meta name="keywords" content="cookie policy, cookies, tracking, website cookies, cookie management" />
      </Helmet>
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-5xl">🍪</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-4">
              Cookie Policy
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-4"></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="bg-white rounded shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="prose prose-lg max-w-none">
              
              <section className="mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4">1. What Are Cookies</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                  They are widely used to make websites work more efficiently and provide information to the owners of the site.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Cookies allow a website to recognize your device and store some information about your preferences or past actions. 
                  This helps us provide you with a better experience when you browse our website and also allows us to improve our site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-black mb-4">2. How We Use Cookies</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use cookies for various purposes, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>To enable certain functions of the website</li>
                  <li>To provide analytics and track website usage</li>
                  <li>To store your preferences and settings</li>
                  <li>To enhance security and prevent fraud</li>
                  <li>To deliver targeted advertisements (if applicable)</li>
                  <li>To remember your login information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-black mb-4">3. Types of Cookies We Use</h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-black mb-3">Essential Cookies</h3>
                  <p className="text-gray-600 leading-relaxed">
                    These cookies are necessary for the website to function properly. They enable core functionality such as 
                    security, network management, and accessibility. You may not opt-out of these cookies, but you can block 
                    them by changing your browser settings, though this may affect how the website functions.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-black mb-3">Performance Cookies</h3>
                  <p className="text-gray-600 leading-relaxed">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information 
                    anonymously. This helps us improve the way our website works, for example, by ensuring that users are finding 
                    what they are looking for easily.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-black mb-3">Functionality Cookies</h3>
                  <p className="text-gray-600 leading-relaxed">
                    These cookies allow the website to remember choices you make (such as your username, language, or region) 
                    and provide enhanced, more personal features. They may also be used to provide services you have requested.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-black mb-3">Targeting/Advertising Cookies</h3>
                  <p className="text-gray-600 leading-relaxed">
                    These cookies may be set through our site by our advertising partners. They may be used by those companies 
                    to build a profile of your interests and show you relevant adverts on other sites.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-black mb-4">4. Third-Party Cookies</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the 
                  website, deliver advertisements on and through the website, and so on. These third-party cookies are set by 
                  domains other than ours.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Some examples of third-party cookies we might use include Google Analytics, social media platforms, and 
                  advertising networks.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-black mb-4">5. Managing Cookies</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies 
                  may impact your experience using our website. Here's how you can manage cookies in popular browsers:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                  <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                  <li><strong>Edge:</strong> Settings → Privacy, search, and services → Cookies and site permissions</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  You can also delete cookies that have already been set. If you do this, you may have to manually adjust some 
                  preferences every time you visit a site and some services and functionalities may not work.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-black mb-4">6. Cookie Duration</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Cookies can be either "session" or "persistent" cookies:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li><strong>Session cookies:</strong> These are temporary cookies that expire when you close your browser. 
                  They help our website recognize you as you navigate between pages during a single browser session.</li>
                  <li><strong>Persistent cookies:</strong> These remain in your browser for a set period of time or until you 
                  delete them. They are activated each time you visit the website that created that particular cookie.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-black mb-4">7. Your Cookie Choices</h2>
                <p className="text-gray-600 leading-relaxed">
                  You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting 
                  your preferences in your browser. However, please note that if you choose to reject cookies, you may still use 
                  our website though your access to some functionality and areas of our website may be restricted.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-black mb-4">8. Updates to This Cookie Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for 
                  other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay 
                  informed about our use of cookies and related technologies.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-black mb-4">9. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about our use of cookies or other technologies, please contact us:
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

export default CookiePolicy

