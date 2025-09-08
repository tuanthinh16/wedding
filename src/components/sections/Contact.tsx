'use client';

import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Heart, Mail, MapPin } from 'lucide-react';
import { weddingData, formatPhoneNumber } from '@/data';

export default function Contact() {
    const [isVisible, setIsVisible] = useState(false);
    const contactRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (contactRef.current) {
            observer.observe(contactRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleCall = (phone: string) => {
        window.open(`tel:${phone.replace(/\s/g, '')}`);
    };

    return (
        <section
            ref={contactRef}
            className="py-20 bg-gradient-to-b from-teal-50 to-white"
        >
            <div className="container mx-auto px-4">
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
                        Liên Hệ
                    </h2>
                    <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi hoặc gia đình
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {weddingData.contacts.map((contact, index) => (
                        <Card
                            key={index}
                            className={`bg-white border-teal-100 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            style={{ transitionDelay: `${index * 150 + 300}ms` }}
                        >
                            <CardContent className="p-6 text-center">
                                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${contact.relationship === 'Chú rể' ? 'bg-teal-100 text-teal-600' :
                                    contact.relationship === 'Cô dâu' ? 'bg-rose-100 text-rose-600' :
                                        'bg-gray-100 text-gray-600'
                                    }`}>
                                    {contact.relationship === 'Chú rể' || contact.relationship === 'Cô dâu' ? (
                                        <Heart className="w-8 h-8" />
                                    ) : (
                                        <Phone className="w-8 h-8" />
                                    )}
                                </div>

                                <h3 className="font-semibold text-gray-800 mb-1">
                                    {contact.name}
                                </h3>
                                <p className="text-sm text-gray-500 mb-3">
                                    {contact.role}
                                </p>

                                <div className="space-y-2">
                                    <p className="text-sm text-gray-600">
                                        {formatPhoneNumber(contact.phone)}
                                    </p>
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="w-full border-teal-300 text-teal-600 hover:bg-teal-50"
                                        onClick={() => handleCall(contact.phone)}
                                    >
                                        <Phone className="w-4 h-4 mr-2" />
                                        Gọi ngay
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Additional Contact Methods */}
                <div className={`mt-16 max-w-4xl mx-auto transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    <Card className="bg-gradient-to-r from-teal-50 to-rose-50 border-0 shadow-lg">
                        <CardContent className="p-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="text-center">
                                    <Mail className="w-12 h-12 text-teal-500 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        Email
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        Gửi email cho chúng tôi
                                    </p>
                                    <Button
                                        variant="outline"
                                        className="border-teal-300 text-teal-600 hover:bg-teal-50"
                                        onClick={() => window.open('mailto:wedding@example.com')}
                                    >
                                        wedding@example.com
                                    </Button>
                                </div>

                                <div className="text-center">
                                    <MapPin className="w-12 h-12 text-rose-500 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        Địa chỉ
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        Nhà trai & Nhà gái
                                    </p>
                                    <Button
                                        variant="outline"
                                        className="border-rose-300 text-rose-600 hover:bg-rose-50"
                                        onClick={() => window.open(weddingData.weddingInfo.events[0].venue.mapUrl || '#')}
                                    >
                                        Xem bản đồ
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Thank You Message */}
                <div className={`mt-16 text-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}>
                    <Card className="bg-white border-teal-100 shadow-lg max-w-2xl mx-auto">
                        <CardContent className="p-8">
                            <Heart className="w-16 h-16 text-teal-500 mx-auto mb-6" />
                            <h3 className="text-3xl font-serif text-gray-800 mb-4">
                                Cảm Ơn Bạn
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Cảm ơn bạn đã dành thời gian xem thiệp mời của chúng tôi.
                                Sự hiện diện của bạn sẽ làm cho ngày cưới của chúng tôi trở nên
                                ý nghĩa và trọn vẹn hơn.
                            </p>
                            <div className="mt-6 text-2xl font-script text-teal-600">
                                Tuấn Thịnh & {weddingData.couple.bride.name}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
