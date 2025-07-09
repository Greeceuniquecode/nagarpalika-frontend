import Logo from '../../assets/logo/logo.png';
const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t-4 border-blue-800 mt-12">
      <div className="px-12 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Logo and Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full  flex items-center justify-center">
                <img src={Logo} alt="Nepal Government website logo" />
                              </div>
              <div>
                <h3 className="text-xl font-mono font-semibold tracking-wide">इटहरी उपमहानगरपालिका</h3>
                <p className="text-sm text-gray-600">Itahari Sub-Metropolitan City</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              सुनसरी जिल्लाको प्रमुख व्यापारिक केन्द्र र प्रशासनिक मुख्यालय। 
              नागरिकहरूको सेवामा सधैं तत्पर।
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-800 border-b-2 border-blue-200 pb-2">
              सम्पर्क विवरण
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>इटहरी-१, सुनसरी, नेपाल</span>
              </div>
              
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+977-025-580204</span>
              </div>
              
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>info@itaharimun.gov.np</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-800 border-b-2 border-blue-200 pb-2">
              द्रुत लिङ्कहरू
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="/home" className="hover:text-blue-600 duration-300 py-1">
                परिचय
              </a>
              <a href="/about-us" className="hover:text-blue-600 duration-300 py-1">
                हाम्रो बारेमा
              </a>
              <a href="/contact-us" className="hover:text-blue-600 duration-300 py-1">
                संपर्क
              </a>
              <a href="/nagarikta" className="hover:text-blue-600 duration-300 py-1">
                नागरिकता
              </a>
              <a href="/services" className="hover:text-blue-600 duration-300 py-1">
                सेवाहरू
              </a>
              <a href="/notices" className="hover:text-blue-600 duration-300 py-1">
                सूचनाहरू
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-300 pt-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-600">
              <p>&copy; {new Date().getFullYear()} इटहरी उपमहानगरपालिका। सम्पूर्ण अधिकार सुरक्षित।</p>
              <p className="text-xs mt-1">
                © {new Date().getFullYear()} Itahari Sub-Metropolitan City. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4 text-xs text-gray-500">
              <a href="/privacy-policy" className="hover:text-blue-600 duration-300">
                गोपनीयता नीति
              </a>
              <span>|</span>
              <a href="/terms-of-service" className="hover:text-blue-600 duration-300">
                सेवा शर्तहरू
              </a>
              <span>|</span>
              <a href="/sitemap" className="hover:text-blue-600 duration-300">
                साइटम्याप
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;