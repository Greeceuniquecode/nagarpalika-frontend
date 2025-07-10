import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Users, Building, Phone, Mail, Award, FileText, Heart } from 'lucide-react';

const AboutUsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Monument_at_Itahari_Chowk.jpg/1536px-Monument_at_Itahari_Chowk.jpg',
      caption: 'इटहरी चोकको स्मारक'
    },
    {
      url: 'https://www.holidify.com/images/cmsuploads/compressed/ItahariNepal_20191003131902_20191003132000.jpg',
      caption: 'इटहरी शहरको दृश्य'
    },
    {
        url: 'data:image/jpeg;base64,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',
    caption: 'wardphoto'
    }

  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "सिफारिस सेवा",
      description: "जन्म दर्ता, मृत्यु दर्ता, बसाइँसराइ, नागरिकता सिफारिस"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "पूर्वाधार विकास",
      description: "सडक, पुल, भवन निर्माण र मर्मत सम्भार"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "स्वास्थ्य सेवा",
      description: "स्वास्थ्य शिविर, खोप कार्यक्रम, स्वास्थ्य जाँच"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "शिक्षा र युवा",
      description: "शिक्षा कार्यक्रम, युवा सीप विकास, छात्रवृत्ति"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "सामाजिक सेवा",
      description: "महिला, बालबालिका र जेष्ठ नागरिक कल्याण"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "वातावरण संरक्षण",
      description: "वृक्षारोपण, फोहोर व्यवस्थापन, वातावरण संरक्षण"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-100 to-gray-300 text-blue py-8">
        <div className="container mx-auto px-3">
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">हाम्रो बारेमा</h1>
            <p className="text-xl md:text-2xl text-blue">इटहरी उपमहानगरपालिका वडा नं. १</p>
          </div>
        </div>
      </header>

      {/* Image Slider */}
      <section className="relative bg-white shadow-lg">
        <div className="relative h-69 md:h-[500px] overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-xl md:text-2xl font-semibold">{image.caption}</h3>
              </div>
            </div>
          ))}
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
              इटहरी उपमहानगरपालिका वडा नं. १
            </h2>
            <div className="prose max-w-none text-gray-700 text-lg leading-relaxed">
              <p className="mb-6">
                इटहरी उपमहानगरपालिका वडा नं. १ सुनसरी जिल्लाको एक महत्वपूर्ण प्रशासनिक इकाई हो। यो वडा इटहरी शहरको मुख्य केन्द्र मानिन्छ र यहाँ विभिन्न सरकारी कार्यालयहरू, व्यापारिक केन्द्रहरू र शैक्षणिक संस्थानहरू अवस्थित छन्।
              </p>
              <p className="mb-6">
                हाम्रो वडाले स्थानीय जनताको जीवनयात्रालाई सहज र सुविधाजनक बनाउने उद्देश्यले विभिन्न सेवाहरू प्रदान गर्दै आएको छ। हामी पारदर्शिता, जवाफदेहिता र जनसहभागितामा आधारित शासन व्यवस्थामा प्रतिबद्ध छौं।
              </p>
              <p>
                वडा नं. १ मा बसोबास गर्ने सबै नागरिकहरूको समान अधिकार र अवसर सुनिश्चित गर्न हामी निरन्तर प्रयासरत छौं। स्थानीय विकास, सामाजिक न्याय र वातावरण संरक्षण हाम्रा मुख्य प्राथमिकताहरू हुन्।
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            हाम्रा सेवाहरू
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="text-blue-600 mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Vision and Mission */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">हाम्रो दृष्टिकोण</h3>
              <p className="text-gray-700 leading-relaxed">
                आधुनिक, व्यवस्थित र समृद्ध वडा निर्माण गरी स्थानीय जनताको जीवनस्तर उन्नयन गर्नु हाम्रो मुख्य दृष्टिकोण हो। हामी एक न्यायपूर्ण, समावेशी र दिगो समाजको निर्माणमा प्रतिबद्ध छौं।
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">हाम्रो मिशन</h3>
              <p className="text-gray-700 leading-relaxed">
                गुणस्तरीय सेवा प्रदान गर्दै स्थानीय जनताको आवश्यकता पूरा गर्नु, पूर्वाधार विकास गर्नु, र सामाजिक न्याय सुनिश्चित गर्नु हाम्रो मिशन हो। हामी पारदर्शी र उत्तरदायी शासन व्यवस्थाको माध्यमबाट जनताको सेवा गर्छौं।
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">सम्पर्क विवरण</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">ठेगाना</h3>
              <p className="text-gray-600">
                इटहरी उपमहानगरपालिका<br />
                वडा नं. १, इटहरी<br />
                सुनसरी, नेपाल
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">फोन</h3>
              <p className="text-gray-600">
                कार्यालय: +977-25-XXXXXX<br />
                मोबाइल: +977-98XXXXXXXX
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">इमेल</h3>
              <p className="text-gray-600">
                info@itahariward1.gov.np<br />
                ward1@itahari.gov.np
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-300">
              © २०८१ इटहरी उपमहानगरपालिका वडा नं. १ | सबै अधिकार सुरक्षित
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsPage;