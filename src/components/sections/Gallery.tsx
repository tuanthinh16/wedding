'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { weddingData } from '@/data';
import BeatingHearts from '@/components/BeatingHearts';

export default function Gallery() {
    const [isVisible, setIsVisible] = useState(false);
    const galleryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (galleryRef.current) {
            observer.observe(galleryRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={galleryRef}
            className="py-20 bg-gradient-to-b from-white to-teal-50 relative"
        >
            {/* Beating Hearts Background */}
            <BeatingHearts count={6} className="opacity-30" />

            <div className="container mx-auto px-4 relative z-10">
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6 font-title font-bold">
                        Khoảnh Khắc Đặc Biệt
                    </h2>
                    <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Những khoảnh khắc đẹp nhất trong hành trình tình yêu của chúng tôi
                    </p>
                </div>

                <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    <Carousel className="w-full">
                        <CarouselContent>
                            {weddingData.gallery.map((image, index) => (
                                <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                                    <Card className="border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                                        <CardContent className="p-0">
                                            <div className="relative aspect-[4/5] overflow-hidden">
                                                <Image
                                                    src={image.src}
                                                    alt={image.alt}
                                                    fill
                                                    className="object-cover"
                                                    loading={index < 3 ? 'eager' : 'lazy'}
                                                    placeholder="blur"
                                                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                                                    <div className="absolute bottom-4 left-4 right-4">
                                                        <p className="text-white text-sm font-medium">
                                                            {image.caption}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4 bg-white/90 border-teal-200 hover:bg-teal-50" />
                        <CarouselNext className="right-4 bg-white/90 border-teal-200 hover:bg-teal-50" />
                    </Carousel>
                </div>

                {/* Hashtag */}
                {weddingData.weddingInfo.hashtag && (
                    <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}>
                        <p className="text-2xl font-script text-teal-600">
                            {weddingData.weddingInfo.hashtag}
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
