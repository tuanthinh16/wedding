'use client';

import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { weddingData } from '@/data';

export default function Introduction() {
    const [isVisible, setIsVisible] = useState(false);
    const introRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (introRef.current) {
            observer.observe(introRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={introRef}
            className="py-20 bg-white"
        >
            <div className="container mx-auto px-4">
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
                        Câu Chuyện Tình Yêu
                    </h2>
                    <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Groom */}
                    <Card className={`bg-gradient-to-br from-teal-50 to-white border-teal-100 shadow-lg transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                        }`}>
                        <CardContent className="p-8 text-center">
                            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                                <span className="text-4xl text-white font-bold">TT</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{weddingData.couple.groom.name}</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Một người đàn ông yêu công nghệ, đam mê lập trình và luôn tìm kiếm
                                những điều mới mẻ trong cuộc sống. Anh tin rằng tình yêu chân thành
                                sẽ làm nên những điều kỳ diệu.
                            </p>
                            <div className="text-sm text-teal-600">
                                <p>💼 Software Developer</p>
                                <p>📍 {weddingData.couple.groom.fatherName} & {weddingData.couple.groom.motherName}</p>
                                <p>❤️ Coffee & Code</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Bride */}
                    <Card className={`bg-gradient-to-br from-rose-50 to-white border-rose-100 shadow-lg transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                        }`}>
                        <CardContent className="p-8 text-center">
                            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center">
                                <span className="text-4xl text-white font-bold">CD</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{weddingData.couple.bride.name}</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Một cô gái xinh đẹp, tài năng và có trái tim nhân hậu. Cô luôn mang
                                lại ánh sáng và niềm vui cho những người xung quanh, đặc biệt là
                                cho người mà cô yêu thương.
                            </p>
                            <div className="text-sm text-rose-600">
                                <p>💼 Designer</p>
                                <p>📍 {weddingData.couple.bride.fatherName} & {weddingData.couple.bride.motherName}</p>
                                <p>❤️ Art & Music</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Love Story */}
                <div className={`mt-16 text-center max-w-4xl mx-auto transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    <Card className="bg-gradient-to-r from-teal-50 via-white to-rose-50 border-0 shadow-xl">
                        <CardContent className="p-12">
                            <h3 className="text-3xl font-serif text-gray-800 mb-8">Chúng Tôi Gặp Nhau</h3>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                {weddingData.weddingInfo.story}
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
