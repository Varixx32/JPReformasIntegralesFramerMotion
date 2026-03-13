import React, { useEffect, useState } from 'react';

const HeroImage: React.FC = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <section className="relative w-full h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-[#0F3D38]">
            {/* Background Image with optimized scale */}
            <div
                className="absolute inset-0 z-0 transition-transform duration-[4s] ease-out"
                style={{ transform: loaded ? 'scale(1)' : 'scale(1.15)' }}
            >
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0F3D38]/60 z-10" />
                <img
                    src="/assets/HeroImage.jpg"
                    alt="Banner Reformas Integrales"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
                <div className={`transition-all duration-1000 delay-300 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <span className="text-white/80 text-xs sm:text-sm tracking-[0.4em] uppercase mb-6 block font-light">Especialistas en reformas integrales</span>
                </div>

                <h1
                    className={`text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase font-bold text-white tracking-widest leading-[0.9] transition-all duration-1000 delay-500 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                        }`}
                >
                    DISEÑO <br /> <span className="text-white/40 italic font-light">&</span> REFORMAS
                </h1>

                <div className={`mt-10 transition-all duration-1000 delay-700 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <a href="#galeria" className="px-10 py-4 border border-white/30 text-white text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-[#0F3D38] active:scale-95 transition-all duration-500 backdrop-blur-sm inline-block">
                        Explorar Proyectos
                    </a>
                </div>
            </div>

            {/* Scroll indicator - refined */}
            <div
                className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 transition-opacity duration-1000 delay-1000 ${loaded ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent opacity-50" />
            </div>
        </section>
    );
};

export default HeroImage;
