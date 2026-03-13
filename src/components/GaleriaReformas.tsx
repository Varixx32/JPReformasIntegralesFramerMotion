import React, { useEffect, useRef, useState } from 'react';

type GifCard = {
  title: string;
  description: string;
  imgUrl: string;
};

const gifCards: GifCard[] = [
  {
    title: 'SALONES',
    description: 'Renovamos salones para crear espacios amplios, Ya sea un estilo moderno, rústico o minimalista, nuestro equipo convierte tu salón en el centro acogedor y versátil que tu hogar necesita. Porque el salón no es solo un espacio más, es donde sucede la vida.',
    imgUrl: "/assets/Salon1.jpeg",
  },
  {
    title: 'BAÑOS',
    description: 'Diseñamos y renovamos baños con un enfoque integral, combinando funcionalidad, confort y diseño moderno. Porcelana, grifería en acabados mate y mamparas de vidrio para crear espacios elegantes, duraderos y lo mas importante facil de mantener. Baño renovado es mucho mas que una mejora estética, es una inversión en bienestar comfort y salud.',
    imgUrl: "/assets/Lavabo2.jpeg",
  },
  {
    title: 'COCINAS',
    description: 'Transformamos tu cocina en un espacio funcional, moderno y personalizado. Utilizamos materiales de alta calidad como la madera natural y el acero inoxidable para lograr una combinación perfecta entre calidez, resistencia y estilo contemporáneo. Porque una cocina no solo debe verse bien, también debe adaptarse a tu ritmo de vida.',
    imgUrl: "/assets/Cocina2.jpg",
  },
];

const GaleriaReformas: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCardClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div ref={sectionRef} className="w-full bg-[#0F3D38] py-24 px-6 md:px-12" id="galeria">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16 text-center">
          <h2
            className={`text-4xl text-white tracking-wide mb-2 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            LA MEJOR OPCIÓN PARA ELEGIRNOS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gifCards.map((card, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className={`group relative h-[450px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl shadow-2xl cursor-pointer transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'} ${activeIndex === index ? 'ring-2 ring-white/30' : ''}`}
              style={{ transitionDelay: `${index * 150 + 300}ms` }}
            >
              {/* Image */}
              <div className="absolute inset-0 bg-[#112f2a]">
                <img
                  src={card.imgUrl}
                  alt={card.title}
                  className={`w-full h-full object-cover transition-transform duration-700 opacity-80 ${activeIndex === index ? 'scale-110 opacity-100' : 'group-hover:scale-110 group-hover:opacity-100'}`}
                />
              </div>

              {/* Overlay Gradient for readability */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent transition-opacity duration-500 ${activeIndex === index ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'}`} />

              {/* Mobile Info Hint */}
              <div className={`absolute top-4 right-4 md:hidden w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${activeIndex === index ? 'rotate-45 opacity-0' : 'opacity-100 animate-pulse'}`}>
                <span className="text-white text-xl font-light">+</span>
              </div>

              {/* Content box that slides up */}
              <div className={`absolute inset-x-0 bottom-0 p-6 sm:p-10 pb-8 sm:pb-12 transition-transform duration-500 ease-out transform ${activeIndex === index ? 'translate-y-0' : 'translate-y-[calc(100%-80px)] sm:translate-y-[calc(100%-95px)] group-hover:translate-y-0'}`}>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 tracking-wide uppercase">{card.title}</h3>

                <div className={`transition-opacity duration-300 delay-200 ${activeIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                  <div className="h-[1px] w-full bg-white/20 mb-6" />
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed font-light drop-shadow-md">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GaleriaReformas;
