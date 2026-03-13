import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { services } from '../utils/Data';

const ProductCarousel: React.FC = () => {
    const [activeService, setActiveService] = useState<number | null>(null);

    return (
        <section className="bg-[#f8f6f4] py-24 px-6 md:px-12 relative overflow-hidden" id="servicios">
            {/* Background Decorator */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[50%] rounded-full bg-[#0F3D38]/5 blur-3xl" />
                <div className="absolute top-[60%] -left-[10%] w-[30%] h-[40%] rounded-full bg-[#0F3D38]/5 blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0F3D38] mb-4 uppercase tracking-tight">Servicios de Excelencia</h2>
                    <div className="h-[2px] w-24 bg-[#0F3D38]" />
                </div>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={24}
                    slidesPerView={1}
                    grabCursor={true}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 24 },
                        1024: { slidesPerView: 3, spaceBetween: 32 },
                        1280: { slidesPerView: 4, spaceBetween: 40 },
                    }}
                    className="product-carousel-swiper !pb-20"
                >
                    {services.map((service, i) => (
                        <SwiperSlide key={i} className="!h-auto flex">
                            <div
                                onClick={() => setActiveService(activeService === i ? null : i)}
                                className={`flex-1 group flex flex-col gap-8 p-10 bg-white rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 border border-black/[0.03] select-none relative overflow-hidden ${activeService === i ? 'ring-2 ring-[#0F3D38] -translate-y-2 shadow-2xl' : 'hover:-translate-y-2 hover:shadow-2xl'}`}
                            >
                                {/* Decorative circle that grows on active/hover */}
                                <div className={`absolute -right-8 -top-8 w-32 h-32 rounded-full bg-[#0F3D38]/[0.02] transition-transform duration-700 ${activeService === i ? 'scale-[3]' : 'group-hover:scale-[3]'}`} />

                                <div className="relative z-10 flex items-start justify-between">
                                    <span className={`text-6xl font-serif font-light transition-colors duration-500 ${activeService === i ? 'text-[#0F3D38]' : 'text-gray-100 group-hover:text-[#0F3D38]/20'}`}>
                                        {service.id}
                                    </span>
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 transform ${activeService === i ? 'bg-[#0F3D38] text-white rotate-12' : 'bg-[#0F3D38]/5 text-[#0F3D38] group-hover:bg-[#0F3D38] group-hover:text-white group-hover:rotate-12'}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="relative z-10 flex-1 flex flex-col">
                                    <h3 className={`text-2xl font-bold mb-5 transition-colors duration-500 leading-tight tracking-tight ${activeService === i ? 'text-[#0F3D38]' : 'text-gray-900 group-hover:text-[#0F3D38]'}`}>
                                        {service.title}
                                    </h3>
                                    {/* Minimum height for description to align cards visually */}
                                    <div className="min-h-[100px] md:min-h-[120px]">
                                        <p className="text-gray-500 leading-relaxed text-sm md:text-base font-light">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="relative z-10 mt-auto pt-6">
                                    <div className={`h-[1px] bg-black/10 transition-all duration-700 ${activeService === i ? 'w-full' : 'w-12 group-hover:w-full'}`} />
                                    <span className={`inline-block mt-4 text-[10px] tracking-[0.3em] uppercase transition-all duration-500 ${activeService === i ? 'text-[#0F3D38] opacity-100 translate-x-0' : 'text-gray-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}`}>
                                        Detalles del servicio
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ProductCarousel;
