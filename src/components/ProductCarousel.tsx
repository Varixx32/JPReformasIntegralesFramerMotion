import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { services } from '../utils/Data';

const ProductCarousel: React.FC = () => {
    return (
        <section className="bg-[#f8f6f4] py-24 px-6 md:px-12 relative overflow-hidden" id="servicios">
            {/* Background Decorator */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[50%] rounded-full bg-[#0F3D38]/5 blur-3xl" />
                <div className="absolute top-[60%] -left-[10%] w-[30%] h-[40%] rounded-full bg-[#0F3D38]/5 blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0F3D38] mb-4">Nuestros Servicios</h2>
                    <div className="h-1 w-20 bg-[#0F3D38]" />
                </div>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 32,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                    }}
                    className="product-carousel-swiper"
                >
                    {services.map((service, i) => (
                        <SwiperSlide key={i} className="h-auto pb-12">
                            <div className="h-full group flex flex-col gap-6 p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-black/5 hover:-translate-y-1">
                                <div className="flex items-center justify-between">
                                    <span className="text-4xl font-light text-gray-200 group-hover:text-[#0F3D38]/20 transition-colors font-serif">
                                        {service.id}
                                    </span>
                                    <div className="w-10 h-10 rounded-full bg-[#0F3D38]/5 flex items-center justify-center group-hover:bg-[#0F3D38] transition-colors duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0F3D38] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-[#0F3D38] transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm md:text-base font-light">
                                        {service.description}
                                    </p>
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
