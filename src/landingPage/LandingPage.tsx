import React, { useState, useEffect } from 'react';
import Img from '../assets/images/itahari.jpg'
import Img1 from '../assets/images/Itahari1.jpg'
import Img2 from '../assets/images/Itahari_Chowk.jpg'
import Img3 from '../assets/images/sagarmatha.jfif'
import Img4 from '../assets/images/ward1.webp'


interface ImageData {
  url: string;
  title: string;
  subtitle: string;
  fallback: string;
}

interface ServiceData {
  title: string;
  description: string;
  icon: string;
}

interface StatData {
  number: string;
  label: string;
}

interface ImageErrors {
  [key: number]: boolean;
}

const LandingPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState < number > (0);
  const [isLoaded, setIsLoaded] = useState < boolean > (false);
  const [imageErrors, setImageErrors] = useState < ImageErrors > ({});

  // Updated image URLs with fallbacks
  const images: ImageData[] = [
    {
      url: Img,
      title: 'इटहरी उपमहानगरपालिका',
      subtitle: 'प्रगतिशील शहरको नमुना',
      fallback: Img4,
    },
    {
      url: Img1,
      title: 'आधुनिक प्रशासनिक भवन',
      subtitle: 'नागरिक सेवाको केन्द्रबिन्दु',
      fallback: Img,
    },
    {
      url: Img2,
      title: 'सामुदायिक विकास',
      subtitle: 'सबै नागरिकको उन्नतिमा प्रतिबद्ध',
      fallback: Img1
    },
    {
      url: Img3,
      title: 'सामुदायिक विकास',
      subtitle: 'सबै नागरिकको उन्नतिमा प्रतिबद्ध',
      fallback: Img2,
    },
    {
      url: Img4,
      title: 'सामुदायिक विकास',
      subtitle: 'सबै नागरिकको उन्नतिमा प्रतिबद्ध',
      fallback: Img3,
    }
  ];

  const services: ServiceData[] = [
    {
      title: 'नागरिकता',
      description: 'नागरिकता प्रमाणपत्र सेवा',
      icon: '🏛️'
    },
    {
      title: 'व्यापार दर्ता',
      description: 'व्यापारिक दर्ता र लाइसेन्स',
      icon: '💼'
    },
    {
      title: 'सामाजिक सुरक्षा',
      description: 'सामाजिक सुरक्षा भत्ता',
      icon: '🤝'
    },
    {
      title: 'करपोत सेवा',
      description: 'घरजग्गा र व्यापारिक कर',
      icon: '📋'
    }
  ];

  const stats: StatData[] = [
    { number: '20', label: 'वडा संख्या' },
    { number: '2,00,000+', label: 'जनसंख्या' },
    { number: '500+', label: 'कर्मचारी' },
    { number: '50+', label: 'सेवाहरू' }
  ];

  const handleImageError = (index: number): void => {
    setImageErrors(prev => ({
      ...prev,
      [index]: true
    }));
  };

  const handleImageLoad = (index: number): void => {
    setImageErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[index];
      return newErrors;
    });
  };

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Image Slider */}
      <div className="relative h-screen overflow-hidden">
        {/* Background Images - Fixed positioning */}
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <img
                src={imageErrors[index] ? image.fallback : image.url}
                alt={image.title}
                className="w-full h-full object-cover"
                onError={() => handleImageError(index)}
                onLoad={() => handleImageLoad(index)}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-white">
          <div className={`text-center px-6 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
            <div className="mb-8">
              <div className="inline-block p-4 bg-blue-600 rounded-full mb-6 animate-pulse">
                <span className="text-4xl">🏛️</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-black-600 mb-4 font-mono tracking-wide drop-shadow-lg">
              इटहरी उपमहानगरपालिका
            </h1>
            <h1 className="text-4xl md:text-7xl font-bold mb-4 font-mono tracking-wide drop-shadow-lg">
              १ नम्वर वडा कार्यालय
            </h1>
            <p className="text-xl md:text-2xl mb-2 text-gray-200 drop-shadow-md">
              Itahari Sub-Metropolitan City
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-300 drop-shadow-md">
              सुनसरी जिल्ला, प्रदेश नं. १, नेपाल
            </p>

            {/* Dynamic Subtitle */}
            <div className="h-16 mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-yellow-300 drop-shadow-lg animate-pulse">
                {images[currentSlide].subtitle}
              </h2>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                सेवाहरू हेर्नुहोस्
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                सम्पर्क गर्नुहोस्
              </button>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-20"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-20"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-black">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 hover:scale-105 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">{stat.number}</div>
                <div className="text-lg text-black font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-mono">
              हाम्रा सेवाहरू
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              नागरिकहरूको सुविधाका लागि विभिन्न प्रकारका सेवाहरू उपलब्ध छन्
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transform transition-all duration-500 hover:-translate-y-2 cursor-pointer border-l-4 border-blue-500 group ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-700 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-mono">
                हाम्रो बारेमा
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                इटहरी उपमहानगरपालिका सुनसरी जिल्लाको प्रमुख व्यापारिक केन्द्र हो। यहाँ विभिन्न
                जातजातिका मानिसहरू मिलेर बसिरहेका छन्। यो शहर आर्थिक विकासको मुख्य केन्द्र
                भएको छ।
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                हामी सबै नागरिकहरूलाई गुणस्तरीय सेवा प्रदान गर्न प्रतिबद्ध छौं। आधुनिक
                प्रविधिको प्रयोग गरेर सेवा प्रवाहलाई सहज बनाउने काम गरिरहेका छौं।
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg">
                थप जान्नुहोस्
              </button>
            </div>

            <div className={`transform transition-all duration-700 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}>
              <div className="relative group">
                <img
                  src="https://itaharimun.gov.np/sites/itaharimun.gov.np/files/gallery/itahari_parisar.jpg"
                  alt="Itahari Office"
                  className="w-full h-80 object-cover rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-blue-200">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-mono">
            नागरिक सेवामा सधैं तत्पर
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            हाम्रो उद्देश्य सबै नागरिकहरूलाई सहज र छिटो सेवा प्रदान गर्नु हो।
            तपाईंको कुनै समस्या छ भने हामीलाई सम्पर्क गर्नुहोस्।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg">
              अनलाइन सेवा
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transform hover:scale-105 transition-all duration-300">
              कार्यालय भ्रमण
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;