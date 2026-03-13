import React, { useEffect, useState } from 'react';

const HeroImage: React.FC = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-900">
            {/* Background Image with Parallax effect CSS */}
            <div
                className="absolute inset-0 z-0 transition-transform duration-[10s] ease-out"
                style={{ transform: loaded ? 'scale(1)' : 'scale(1.1)' }}
            >
                <div className="absolute inset-0 bg-black/40 z-10" />
                <img
                    src="/assets/HeroImage.jpg"
                    alt="Banner Reformas Integrales"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
                <h1
                    className={`text-4xl sm:text-5xl md:text-[70px] uppercase font-bold text-white tracking-widest drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all duration-1000 delay-200 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    Diseño & <br className="sm:hidden" /> Reformas <br className="sm:hidden" /> Exclusivas
                </h1>
            </div>

            {/* Scroll indicator */}
            <div
                className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 transition-opacity duration-1000 delay-1000 ${loaded ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                <span className="text-white/60 text-xs tracking-widest uppercase">Descubrir</span>
                <div className="w-[1px] h-10 bg-white/50 animate-pulse" />
            </div>
        </section>
    );
};

export default HeroImage;
