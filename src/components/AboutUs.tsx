import React, { useEffect, useRef, useState } from 'react';

const AboutUs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-24 md:py-32 px-6 overflow-hidden relative" id="about-us">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Imagen */}
        <div
          className={`relative transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
        >
          {/* Decorative frame */}
          <div className="absolute -inset-4 border border-[#0F3D38]/20 rounded-2xl transform translate-x-4 translate-y-4 -z-10" />

          <div className="overflow-hidden rounded-2xl shadow-xl group">
            <img
              src="/assets/Salon2.jpg"
              alt="Cocina reformada"
              className="w-full h-[500px] lg:h-[650px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

        </div>

        {/* Texto */}
        <div
          className={`transition-all duration-1000 ease-out transform delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <span className="text-[#0F3D38] uppercase tracking-[0.2em] text-xs font-semibold mb-6 block">
            Acerca de nosotros
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Creamos espacios <br />
            con <span className="font-light italic text-[#0F3D38]">alma.</span>
          </h2>

          <div className="space-y-6 text-gray-600 font-light text-base md:text-lg leading-relaxed relative">
            <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#0F3D38] to-transparent bg-opacity-20 pl-0 -ml-6 md:-ml-8 hidden md:block" />

            <p>
              Tu hogar tiene algo que decir. Nosotros te ayudamos a hablar. Transformamos cada
              espacio en un reflejo de lo que eres y lo que sueñas. No se trata solo de
              decorar, sino de crear un lugar con alma, donde cada rincón cuente una historia—<strong className="font-semibold text-gray-900">la tuya.</strong>
            </p>
            <p>
              Ofrecemos presupuestos detallados sin ningún compromiso, asegurando una total
              transparencia. Nuestra filosofía se centra en el cumplimiento estricto de plazos
              y la seriedad en cada detalle, garantizando eficiencia y acabados perfectos.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;
