'use client';

import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 seconds loading

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 bg-gradient-to-br from-teal-50 to-white z-50 flex items-center justify-center">
            <div className="text-center">
                <div className="relative mb-8">
                    <Heart className="w-16 h-16 text-teal-500 mx-auto animate-pulse" />
                    <div className="absolute inset-0 w-16 h-16 border-4 border-teal-200 rounded-full animate-ping mx-auto"></div>
                </div>

                <h1 className="text-3xl font-serif text-gray-800 mb-4">
                    Tuấn Thịnh & Gia Hân
                </h1>

                <div className="flex items-center justify-center space-x-1 mb-4">
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>

                <p className="text-gray-600">Đang tải thiệp mời...</p>
            </div>
        </div>
    );
}
