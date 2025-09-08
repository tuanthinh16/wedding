'use client';

import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Phone } from 'lucide-react';
import { weddingData, formatDate, getDaysUntilWedding, generateMapUrl } from '@/data';

export default function Events() {
    const [isVisible, setIsVisible] = useState(false);
    const [daysLeft, setDaysLeft] = useState(0);
    const eventsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (eventsRef.current) {
            observer.observe(eventsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        setDaysLeft(getDaysUntilWedding(weddingData.weddingInfo.weddingDate));
    }, []);

    return (
        <section
            ref={eventsRef}
            className="py-20 bg-gradient-to-b from-teal-50 to-white"
        >
            <div className="container mx-auto px-4">
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    <h2 className="text-4xl md:text-5xl font-title text-gray-800 mb-6">
                        Thông Tin Sự Kiện
                    </h2>
                    <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>

                    {/* Countdown */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto mb-8">
                        <p className="text-lg text-gray-600 mb-4">Đếm ngược đến ngày cưới</p>
                        <div className="text-4xl font-bold text-teal-600 mb-2">
                            {daysLeft > 0 ? daysLeft : 0}
                        </div>
                        <p className="text-gray-500">
                            {daysLeft > 0 ? 'ngày nữa' : 'Hôm nay là ngày cưới!'}
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {weddingData.weddingInfo.events.map((event, index) => (
                        <Card
                            key={index}
                            className={`border-teal-100 shadow-lg hover:shadow-xl transition-all duration-500 ${event.type === 'ceremony' ? 'bg-gradient-to-br from-teal-50 to-white' : 'bg-gradient-to-br from-rose-50 to-white'
                                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            style={{ transitionDelay: `${index * 200 + 300}ms` }}
                        >
                            <CardHeader className="text-center pb-4">
                                <CardTitle className={`text-2xl font-serif ${event.type === 'ceremony' ? 'text-teal-700' : 'text-rose-700'
                                    }`}>
                                    {event.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className={`p-3 rounded-full ${event.type === 'ceremony' ? 'bg-teal-100 text-teal-600' : 'bg-rose-100 text-rose-600'
                                        }`}>
                                        <Calendar className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">{event.date}</p>
                                        <p className="text-sm text-gray-600">
                                            {formatDate(weddingData.weddingInfo.weddingDate)}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className={`p-3 rounded-full ${event.type === 'ceremony' ? 'bg-teal-100 text-teal-600' : 'bg-rose-100 text-rose-600'
                                        }`}>
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">{event.time}</p>
                                        <p className="text-sm text-gray-600">Vui lòng có mặt đúng giờ</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className={`p-3 rounded-full ${event.type === 'ceremony' ? 'bg-teal-100 text-teal-600' : 'bg-rose-100 text-rose-600'
                                        }`}>
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-semibold text-gray-800 mb-1">{event.venue.name}</p>
                                        <p className="text-sm text-gray-600 mb-3">{event.venue.address}</p>
                                        {event.venue.phone && (
                                            <div className="flex items-center space-x-2 mb-3">
                                                <Phone className="w-4 h-4 text-gray-400" />
                                                <span className="text-sm text-gray-600">{event.venue.phone}</span>
                                            </div>
                                        )}
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className={`${event.type === 'ceremony'
                                                    ? 'border-teal-300 text-teal-600 hover:bg-teal-50'
                                                    : 'border-rose-300 text-rose-600 hover:bg-rose-50'
                                                }`}
                                            onClick={() => window.open(event.venue.mapUrl || generateMapUrl(event.venue.address), '_blank')}
                                        >
                                            Xem Bản Đồ
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Story Section */}
                {weddingData.weddingInfo.story && (
                    <div className={`mt-16 max-w-4xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                        <Card className="bg-white border-teal-100 shadow-lg">
                            <CardContent className="p-8 md:p-12 text-center">
                                <h3 className="text-3xl font-serif text-gray-800 mb-6">Câu Chuyện Của Chúng Tôi</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {weddingData.weddingInfo.story}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                )}
            </div>
        </section>
    );
}
