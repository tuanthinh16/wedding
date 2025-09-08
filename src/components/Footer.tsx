'use client';

import { Heart, Instagram, Facebook, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { weddingData, generateShareText } from '@/data';

export default function Footer() {
    const handleShare = async () => {
        const shareText = generateShareText(
            `${weddingData.couple.groom.name} & ${weddingData.couple.bride.name}`,
            weddingData.weddingInfo.weddingDate,
            weddingData.weddingInfo.hashtag
        );

        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Thiệp mời đám cưới',
                    text: shareText,
                    url: window.location.href
                });
            } catch (error) {
                console.log('Error sharing:', error);
            }
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(`${shareText} - ${window.location.href}`);
            alert('Đã sao chép link thiệp mời!');
        }
    };

    return (
        <footer className="bg-gradient-to-r from-teal-800 to-teal-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    {/* Main Content */}
                    <div className="mb-8">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <Heart className="w-8 h-8 text-teal-300" />
                            <h3 className="text-8xl font-name">
                                {weddingData.couple.groom.name} & {weddingData.couple.bride.name}
                            </h3>
                        </div>

                        <p className="text-teal-100 mb-4">
                            Cảm ơn bạn đã ghé thăm thiệp mời đám cưới của chúng tôi
                        </p>

                        {weddingData.weddingInfo.hashtag && (
                            <p className="text-xl font-script text-teal-300 mb-6">
                                {weddingData.weddingInfo.hashtag}
                            </p>
                        )}

                        {/* Share Button */}
                        <Button
                            onClick={handleShare}
                            variant="outline"
                            className="border-teal-300 text-teal-300 hover:bg-teal-300 hover:text-teal-800 mb-8"
                        >
                            <Share2 className="w-4 h-4 mr-2" />
                            Chia sẻ thiệp mời
                        </Button>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6 mb-8">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-teal-300 hover:text-white hover:bg-teal-700"
                            onClick={() => window.open('#', '_blank')}
                        >
                            <Instagram className="w-5 h-5" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-teal-300 hover:text-white hover:bg-teal-700"
                            onClick={() => window.open('#', '_blank')}
                        >
                            <Facebook className="w-5 h-5" />
                        </Button>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-teal-700 pt-8">
                        <div className="grid md:grid-cols-2 gap-4 text-sm text-teal-200">
                            <div>
                                <p className="mb-2">📅 {weddingData.weddingInfo.events[0].date}</p>
                                <p>📍 {weddingData.weddingInfo.events[0].venue.name}</p>
                            </div>
                            <div>
                                <p className="mb-2">💒 Lễ Vu Quy: {weddingData.weddingInfo.events[0].time}</p>
                                <p>🎉 Tiệc Cưới: {weddingData.weddingInfo.events[1].time}</p>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-8 pt-4 border-t border-teal-700 text-sm text-teal-300">
                        <p>&copy; 2025 {weddingData.couple.groom.name} & {weddingData.couple.bride.name}. Made with ❤️</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
