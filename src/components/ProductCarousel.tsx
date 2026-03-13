import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { services } from '../utils/Data';

const chunkArray = (arr: any[], size: number) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
    );

const ProductCarousel: React.FC = () => {
    const groupedServices = chunkArray(services, 4);

    return (
        <section className="bg-[#f8f6f4] py-24 px-6 md:px-12 relative overflow-hidden" id="servicios">
            {/* Background Decorator */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[50%] rounded-full bg-[#0F3D38]/5 blur-3xl" />
                <div className="absolute top-[60%] -left-[10%] w-[30%] h-[40%] rounded-full bg-[#0F3D38]/5 blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <Swiper
                    modules={[Pagination, Autoplay, EffectFade]}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={40}
                    className="product-carousel-swiper"
                >
                    {groupedServices.map((group, index) => (
                        <SwiperSlide key={index}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {group.map((service, i) => (
                                    <div
                                        key={i}
                                        className="group flex gap-4 sm:gap-6 items-start p-5 sm:p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-black/5 hover:-translate-y-1"
                                    >
                                        <span className="text-3xl font-light text-gray-300 group-hover:text-[#0F3D38] transition-colors font-serif">
                                            {service.id}
                                        </span>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-[#0F3D38] transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed text-sm md:text-base font-light">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ProductCarousel;
