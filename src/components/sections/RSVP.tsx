'use client';

import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Heart, Users, Calendar, Gift } from 'lucide-react';
import { weddingData, validateRSVP } from '@/data';

export default function RSVP() {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        guests: 1,
        message: '',
        attending: true
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const rsvpRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (rsvpRef.current) {
            observer.observe(rsvpRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateRSVP(formData)) {
            setIsSubmitted(true);
            // Here you would normally send the data to your backend
            console.log('RSVP submitted:', formData);
        }
    };

    const handleInputChange = (field: string, value: string | number | boolean) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    if (!weddingData.rsvp.enabled) {
        return null;
    }

    return (
        <section
            ref={rsvpRef}
            className="py-20 bg-gradient-to-b from-white to-teal-50"
        >
            <div className="container mx-auto px-4">
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    <h2 className="text-4xl md:text-5xl font-title text-gray-800 mb-6">
                        Xác Nhận Tham Dự
                    </h2>
                    <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {weddingData.rsvp.message}
                    </p>
                    {weddingData.rsvp.deadline && (
                        <p className="text-sm text-teal-600 mt-4">
                            ⏰ Hạn cuối xác nhận: {weddingData.rsvp.deadline}
                        </p>
                    )}
                </div>

                <div className="max-w-2xl mx-auto">
                    {!isSubmitted ? (
                        <Card className={`bg-white shadow-xl border-teal-100 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}>
                            <CardHeader className="text-center">
                                <CardTitle className="text-2xl text-gray-800 flex items-center justify-center gap-2">
                                    <Heart className="w-6 h-6 text-teal-500" />
                                    Thông Tin Khách Mời
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Họ và tên *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => handleInputChange('name', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                            placeholder="Nhập họ và tên của bạn"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Số lượng khách tham dự *
                                        </label>
                                        <select
                                            value={formData.guests}
                                            onChange={(e) => handleInputChange('guests', parseInt(e.target.value))}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                        >
                                            {[1, 2, 3, 4, 5].map(num => (
                                                <option key={num} value={num}>
                                                    {num} {num === 1 ? 'người' : 'người'}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            id="attending"
                                            checked={formData.attending}
                                            onCheckedChange={(checked) => handleInputChange('attending', checked)}
                                            className="data-[state=checked]:bg-teal-500 data-[state=checked]:border-teal-500"
                                        />
                                        <label htmlFor="attending" className="text-sm font-medium text-gray-700">
                                            Tôi sẽ tham dự đám cưới
                                        </label>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Lời chúc (không bắt buộc)
                                        </label>
                                        <Textarea
                                            value={formData.message}
                                            onChange={(e) => handleInputChange('message', e.target.value)}
                                            placeholder="Gửi lời chúc tốt đẹp đến cặp đôi..."
                                            className="resize-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                            rows={4}
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 text-lg rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                                    >
                                        <Users className="w-5 h-5 mr-2" />
                                        Xác Nhận Tham Dự
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    ) : (
                        <Card className={`bg-gradient-to-br from-teal-50 to-white shadow-xl border-teal-200 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                            }`}>
                            <CardContent className="p-12 text-center">
                                <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Heart className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-3xl font-serif text-gray-800 mb-4">
                                    Cảm ơn bạn!
                                </h3>
                                <p className="text-lg text-gray-600 mb-6">
                                    Chúng tôi đã nhận được xác nhận tham dự của bạn.
                                    Rất mong được gặp bạn trong ngày trọng đại này!
                                </p>
                                <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                                    <div className="flex items-center space-x-2">
                                        <Users className="w-4 h-4" />
                                        <span>{formData.guests} khách</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>Đã xác nhận</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>

                {/* Gift Info */}
                <div className={`mt-16 max-w-xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}>
                    <Card className="bg-gradient-to-r from-rose-50 to-teal-50 border-0 shadow-lg">
                        <CardContent className="p-8 text-center">
                            <Gift className="w-12 h-12 text-teal-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                Tấm Lòng Của Bạn
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Sự hiện diện của bạn trong ngày cưới chính là món quà quý giá nhất.
                                Nếu bạn muốn gửi quà, chúng tôi rất biết ơn tấm lòng của bạn.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
