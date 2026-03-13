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
              className={`group relative h-[480px] md:h-[550px] lg:h-[650px] overflow-hidden rounded-2xl shadow-2xl cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'} ${activeIndex === index ? 'translate-y-[-8px]' : 'active:scale-[0.97] hover:translate-y-[-4px]'}`}
              style={{
                transitionDelay: `${index * 100 + 300}ms`,
                willChange: 'transform, opacity'
              }}
            >
              {/* Image with overlay mask */}
              <div className="absolute inset-0 bg-[#0a2320]">
                <img
                  src={card.imgUrl}
                  alt={card.title}
                  className={`w-full h-full object-cover transition-all duration-1000 ease-out ${activeIndex === index ? 'scale-110 opacity-100' : 'opacity-60 group-hover:opacity-100 group-hover:scale-110'}`}
                />
              </div>

              {/* Sophisticated Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-700 ${activeIndex === index ? 'opacity-100' : 'opacity-70 group-hover:opacity-90'}`} />

              {/* Mobile Interaction Indicator */}
              <div className={`absolute top-6 right-6 md:hidden w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transition-all duration-500 ${activeIndex === index ? 'rotate-135 bg-[#0F3D38] border-[#0F3D38]' : 'opacity-100'}`}>
                <span className={`text-white transition-all duration-500 transform ${activeIndex === index ? 'scale-75' : 'scale-110 animate-pulse'}`}>
                  {activeIndex === index ? '✕' : '+'}
                </span>
              </div>

              {/* Content box that slides up */}
              <div className={`absolute inset-x-0 bottom-0 p-8 sm:p-12 pb-10 sm:pb-14 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform ${activeIndex === index ? 'translate-y-0' : 'translate-y-[calc(100%-110px)] group-hover:translate-y-0'}`}>
                <div className="mb-6">
                  <span className="text-[10px] tracking-[0.4em] text-white/40 uppercase mb-2 block">Categoría</span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-widest uppercase mb-4">{card.title}</h3>
                </div>

                <div className={`transition-all duration-500 delay-100 ${activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'}`}>
                  <div className="h-[1px] w-12 bg-white/40 mb-8" />
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light font-sans tracking-wide">
                    {card.description}
                  </p>

                  <div className="mt-8">
                    <button className="text-[10px] tracking-[0.3em] uppercase text-white border-b border-white/20 pb-1 hover:border-white transition-colors">
                      Saber más
                    </button>
                  </div>
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
