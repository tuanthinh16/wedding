'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { weddingData, formatDate } from '@/data';

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={heroRef}
            className="min-h-screen flex items-center justify-center bg-gradient-to-b from-teal-50 to-white relative overflow-hidden"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-100 rounded-full opacity-30 animate-pulse"></div>
                <div className="absolute top-1/3 -right-20 w-60 h-60 bg-teal-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-teal-100 rounded-full opacity-25 animate-pulse delay-500"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <Card className={`max-w-4xl mx-auto bg-white/80 backdrop-blur-sm border-teal-100 shadow-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    <CardContent className="p-8 md:p-16 text-center">
                        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                            }`}>
                            <p className="text-teal-600 font-medium text-lg mb-4 tracking-wide">
                                We're Getting Married
                            </p>

                            <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6 leading-tight">
                                {weddingData.couple.groom.name}
                                <span className="block text-teal-500 text-3xl md:text-4xl my-4">&</span>
                                {weddingData.couple.bride.name}
                            </h1>

                            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                                Chúng tôi vui mừng thông báo về đám cưới của chúng tôi và rất mong được chia sẻ
                                niềm hạnh phúc này cùng gia đình và bạn bè thân yêu.
                            </p>

                            <div className="mb-8">
                                <p className="text-2xl font-semibold text-teal-600 mb-2">
                                    {formatDate(weddingData.weddingInfo.weddingDate)}
                                </p>
                                <p className="text-lg text-gray-500">
                                    {weddingData.weddingInfo.events[0].venue.name}
                                </p>
                            </div>

                            <Button
                                size="lg"
                                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 text-lg rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                            >
                                Xem Chi Tiết
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
