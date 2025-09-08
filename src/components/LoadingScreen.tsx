'use client';

import { useEffect, useState } from 'react';

// Loading Progress Bar với responsive - cải thiện cho mobile
function LoadingProgress({ progress }: { progress: number }) {
    return (
        <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-1/2 transform -translate-x-1/2 w-72 sm:w-80 md:w-96 px-4 sm:px-6 md:px-8">
            <div className="bg-rose-300/30 backdrop-blur-sm rounded-full h-2 md:h-3 overflow-hidden border border-rose-400/40">
                <div
                    className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 h-full transition-all duration-500 ease-out relative"
                    style={{ width: `${progress}%` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                </div>
            </div>
            <div className="flex justify-between items-center mt-2 sm:mt-3 md:mt-4">
                <p className="text-rose-700 text-xs sm:text-sm">
                    Đang tải thiệp mời...
                </p>
                <p className="text-purple-700 text-xs sm:text-sm font-medium">
                    {Math.round(progress)}%
                </p>
            </div>

            {/* Loading dots animation */}
            <div className="flex justify-center mt-1 sm:mt-2 md:mt-3 space-x-1">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-rose-500 rounded-full animate-bounce"></div>
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-rose-500 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
            </div>
        </div>
    );
}

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 1200);
                    return 100;
                }
                return prev + Math.random() * 6 + 1;
            });
        }, 400); // Interval chậm hơn

        return () => clearInterval(interval);
    }, []);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 bg-gradient-to-br from-rose-200 via-pink-100 to-purple-200 z-50 overflow-hidden">
            {/* CSS Hearts Background - Thay thế 3D Canvas */}
            <div className="absolute inset-0">
                {/* CSS 3D Hearts */}
                <div className="css-hearts">
                    {Array.from({ length: typeof window !== 'undefined' && window.innerWidth >= 768 ? 4 : 2 }).map((_, i) => (
                        <div
                            key={i}
                            className="css-heart absolute text-4xl md:text-5xl text-rose-400/25"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 8}s`,
                                animationDuration: `${12 + Math.random() * 6}s`,
                                transform: `scale(${0.6 + Math.random() * 0.4})`
                            }}
                        >
                            💖
                        </div>
                    ))}
                </div>

                {/* Gradient Overlay cho depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-rose-100/20 to-purple-200/30" />
            </div>

            {/* Animated Background Particles - Tối ưu performance */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Falling Flowers - Giảm số lượng và tối ưu */}
                <div className="falling-flowers">
                    {Array.from({ length: typeof window !== 'undefined' && window.innerWidth < 768 ? 4 : 8 }).map((_, i) => (
                        <div
                            key={i}
                            className="flower absolute text-base md:text-lg opacity-50 will-change-transform"
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 12}s`,
                                animationDuration: `${15 + Math.random() * 10}s`,
                                '--drift': `${(Math.random() - 0.5) * 60}px`
                            } as React.CSSProperties & { '--drift': string }}
                        >
                            {['🌸', '🌺', '💐', '🌷'][Math.floor(Math.random() * 4)]}
                        </div>
                    ))}
                </div>

                {/* Floating Bubbles - Giảm số lượng */}
                <div className="bubbles">
                    {Array.from({ length: typeof window !== 'undefined' && window.innerWidth < 768 ? 3 : 6 }).map((_, i) => (
                        <div
                            key={i}
                            className="bubble absolute rounded-full bg-white/10 will-change-transform"
                            style={{
                                left: `${Math.random() * 100}%`,
                                width: `${12 + Math.random() * 16}px`,
                                height: `${12 + Math.random() * 16}px`,
                                animationDelay: `${Math.random() * 8}s`,
                                animationDuration: `${12 + Math.random() * 6}s`
                            }}
                        />
                    ))}
                </div>

                {/* Sparkle Effects - Giảm mạnh số lượng */}
                <div className="sparkles">
                    {Array.from({ length: typeof window !== 'undefined' && window.innerWidth < 768 ? 3 : 6 }).map((_, i) => (
                        <div
                            key={i}
                            className="sparkle absolute text-yellow-300 will-change-transform"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 6}s`,
                                fontSize: `${8 + Math.random() * 4}px`
                            }}
                        >
                            ✨
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4 sm:px-6">
                <div className="text-center z-10 w-full max-w-sm sm:max-w-lg md:max-w-2xl mx-auto">
                    {/* Animated Hearts - tối ưu performance */}
                    <div className="relative mb-6 sm:mb-8">
                        <div className="relative flex items-center justify-center">
                            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl heartbeat">💖</div>
                        </div>

                        {/* Floating mini hearts - chỉ desktop lớn */}
                        <div className="absolute inset-0 pointer-events-none hidden xl:block">
                            <div className="absolute top-2 left-8 text-xl animate-bounce-slow" style={{ animationDelay: '0.5s' }}>💕</div>
                            <div className="absolute top-4 right-6 text-lg animate-bounce-slow" style={{ animationDelay: '1.2s' }}>💝</div>
                            <div className="absolute bottom-6 left-12 text-base animate-bounce-slow" style={{ animationDelay: '2s' }}>💗</div>
                            <div className="absolute bottom-2 right-10 text-xl animate-bounce-slow" style={{ animationDelay: '0.8s' }}>💓</div>
                        </div>
                    </div>

                    {/* Names - Đảm bảo hiển thị rõ ràng trên mobile */}
                    <div className="space-y-3 sm:space-y-4">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-rose-800 animate-fade-in romantic-glow leading-tight px-2 font-bold">
                            Tuấn Thịnh & Gia Hân
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-700 animate-fade-in-delay leading-relaxed px-2">
                            Wedding Invitation
                        </p>

                        {/* Subtitle */}
                        <p className="text-sm sm:text-base md:text-lg text-rose-600 animate-fade-in-delay-2 leading-relaxed px-2">
                            Đang chuẩn bị khoảnh khắc đặc biệt...
                        </p>
                    </div>
                </div>
            </div>

            {/* Loading Progress */}
            <LoadingProgress progress={progress} />

            {/* Decorative Elements - giảm bớt cho mobile */}
            <div className="hidden sm:block absolute top-4 left-4 text-rose-400 text-2xl animate-pulse">
                ✨
            </div>
            <div className="hidden sm:block absolute top-4 right-4 text-pink-400 text-xl animate-pulse delay-1000">
                💕
            </div>
            <div className="hidden lg:block absolute bottom-32 left-20 text-purple-400 text-3xl animate-pulse delay-500">
                🌸
            </div>
            <div className="absolute bottom-32 right-4 text-rose-400 text-lg animate-pulse delay-1500">
                ✨
            </div>

            {/* Custom CSS Animations - Tối ưu performance với GPU acceleration */}
            <style jsx>{`
        * {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          perspective: 1000px;
        }
        
        @keyframes fade-in {
          from { 
            opacity: 0; 
            transform: translate3d(0, 20px, 0) scale3d(0.95, 0.95, 1); 
          }
          to { 
            opacity: 1; 
            transform: translate3d(0, 0, 0) scale3d(1, 1, 1); 
          }
        }
        
        @keyframes heartbeat {
          0%, 100% {
            transform: scale3d(1, 1, 1);
          }
          50% {
            transform: scale3d(1.08, 1.08, 1);
          }
        }
        
        @keyframes romantic-glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(190, 18, 60, 0.4), 0 0 20px rgba(219, 39, 119, 0.2);
          }
          50% {
            text-shadow: 0 0 20px rgba(190, 18, 60, 0.6), 0 0 40px rgba(219, 39, 119, 0.4), 0 0 60px rgba(244, 63, 94, 0.2);
          }
        }
        
        /* Enhanced CSS Heart Animation với easing mượt */
        @keyframes css-heart-float {
          0% {
            transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotate3d(0, 0, 1, 0deg);
            opacity: 0.4;
            filter: drop-shadow(0 0 8px rgba(244, 63, 94, 0.3));
          }
          25% {
            transform: translate3d(20px, -30px, 0) scale3d(1.15, 1.15, 1) rotate3d(0, 0, 1, 10deg);
            opacity: 0.7;
            filter: drop-shadow(0 0 15px rgba(244, 63, 94, 0.5));
          }
          50% {
            transform: translate3d(-10px, -50px, 0) scale3d(0.85, 0.85, 1) rotate3d(0, 0, 1, -5deg);
            opacity: 0.4;
            filter: drop-shadow(0 0 12px rgba(244, 63, 94, 0.4));
          }
          75% {
            transform: translate3d(30px, -20px, 0) scale3d(1.1, 1.1, 1) rotate3d(0, 0, 1, 8deg);
            opacity: 0.6;
            filter: drop-shadow(0 0 18px rgba(244, 63, 94, 0.6));
          }
          100% {
            transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotate3d(0, 0, 1, 0deg);
            opacity: 0.4;
            filter: drop-shadow(0 0 8px rgba(244, 63, 94, 0.3));
          }
        }
        
        /* Smoother Falling Flowers Animation với drift tự nhiên */
        @keyframes fall {
          0% {
            transform: translate3d(0, -120vh, 0) rotate3d(0, 0, 1, 0deg) scale3d(0.8, 0.8, 1);
            opacity: 0;
          }
          5% {
            opacity: 0.6;
            transform: translate3d(5px, -100vh, 0) rotate3d(0, 0, 1, 18deg) scale3d(1, 1, 1);
          }
          25% {
            transform: translate3d(var(--drift, 20px), -50vh, 0) rotate3d(0, 0, 1, 90deg) scale3d(1.1, 1.1, 1);
            opacity: 0.7;
          }
          50% {
            transform: translate3d(calc(var(--drift, 20px) * -0.5), 0vh, 0) rotate3d(0, 0, 1, 180deg) scale3d(0.9, 0.9, 1);
            opacity: 0.8;
          }
          75% {
            transform: translate3d(calc(var(--drift, 20px) * 0.3), 50vh, 0) rotate3d(0, 0, 1, 270deg) scale3d(1.05, 1.05, 1);
            opacity: 0.6;
          }
          95% {
            opacity: 0.3;
            transform: translate3d(calc(var(--drift, 20px) * -0.2), 100vh, 0) rotate3d(0, 0, 1, 340deg) scale3d(0.8, 0.8, 1);
          }
          100% {
            transform: translate3d(0, 120vh, 0) rotate3d(0, 0, 1, 360deg) scale3d(0.6, 0.6, 1);
            opacity: 0;
          }
        }
        
        /* Enhanced Floating Bubbles Animation */
        @keyframes float-up {
          0% {
            transform: translate3d(0, 120vh, 0) scale3d(0.3, 0.3, 1);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
            transform: translate3d(0, 100vh, 0) scale3d(0.6, 0.6, 1);
          }
          50% {
            opacity: 0.9;
            transform: translate3d(0, 40vh, 0) scale3d(1, 1, 1);
          }
          90% {
            opacity: 0.5;
            transform: translate3d(0, -80vh, 0) scale3d(1.2, 1.2, 1);
          }
          100% {
            transform: translate3d(0, -120vh, 0) scale3d(0.8, 0.8, 1);
            opacity: 0;
          }
        }
        
        /* Enhanced Sparkle Animation */
        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale3d(0.3, 0.3, 1) rotate3d(0, 0, 1, 0deg);
          }
          25% {
            opacity: 0.7;
            transform: scale3d(1.2, 1.2, 1) rotate3d(0, 0, 1, 90deg);
          }
          50% {
            opacity: 1;
            transform: scale3d(1.5, 1.5, 1) rotate3d(0, 0, 1, 180deg);
          }
          75% {
            opacity: 0.8;
            transform: scale3d(1.1, 1.1, 1) rotate3d(0, 0, 1, 270deg);
          }
        }
        
        /* Ultra smooth bounce animation */
        @keyframes bounce-slow {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
          }
          25% {
            transform: translate3d(0, -12px, 0) scale3d(1.05, 1.05, 1);
          }
          50% {
            transform: translate3d(0, -20px, 0) scale3d(1.1, 1.1, 1);
          }
          75% {
            transform: translate3d(0, -8px, 0) scale3d(1.02, 1.02, 1);
          }
        }
        
        /* Pulse animation for decorative elements */
        @keyframes smooth-pulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale3d(1, 1, 1);
          }
          50% {
            opacity: 0.8;
            transform: scale3d(1.1, 1.1, 1);
          }
        }
        
        .css-heart {
          animation: css-heart-float ease-in-out infinite;
          will-change: transform, opacity, filter;
          animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
        }
        
        .flower {
          animation: fall ease-out infinite;
          will-change: transform, opacity;
          animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-origin: center center;
        }
        
        .bubble {
          animation: float-up ease-in-out infinite;
          will-change: transform, opacity;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .sparkle {
          animation: sparkle ease-in-out infinite;
          will-change: transform, opacity;
          animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .animate-bounce-slow {
          animation: bounce-slow ease-in-out infinite;
          will-change: transform;
          animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
          will-change: transform, opacity;
          animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.4s both;
          will-change: transform, opacity;
          animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.8s both;
          will-change: transform, opacity;
          animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .heartbeat {
          animation: heartbeat 4s ease-in-out infinite;
          will-change: transform;
          animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
        }
        
        .romantic-glow {
          animation: romantic-glow 4s ease-in-out infinite;
          will-change: text-shadow;
          animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
        }
        
        /* Enhanced pulse for decorative elements */
        .animate-pulse {
          animation: smooth-pulse 2s ease-in-out infinite;
          will-change: opacity, transform;
          animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
        }
        
        /* Mobile optimizations với frame rate tối ưu */
        @media (max-width: 640px) {
          .heartbeat {
            animation-duration: 6s;
          }
          .romantic-glow {
            animation: none;
            text-shadow: 0 0 8px rgba(190, 18, 60, 0.4);
          }
          .css-heart {
            font-size: 2rem;
            animation-duration: 20s;
          }
          h1 {
            line-height: 1.2;
            text-shadow: 2px 2px 6px rgba(0,0,0,0.3);
          }
          p {
            line-height: 1.4;
            text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
          }
          /* Slow down animations for better performance */
          .flower, .bubble, .sparkle {
            animation-duration: 25s;
          }
          .animate-bounce-slow {
            animation-duration: 6s;
          }
        }
        
        /* Tablet optimizations */
        @media (max-width: 1024px) {
          .flower {
            animation-duration: 20s;
          }
          .bubble {
            animation-duration: 18s;
          }
          .css-heart {
            animation-duration: 16s;
          }
          .sparkle {
            animation-duration: 8s;
          }
        }
        
        /* Desktop optimizations */
        @media (min-width: 1025px) {
          .flower {
            animation-duration: 18s;
          }
          .bubble {
            animation-duration: 15s;
          }
          .css-heart {
            animation-duration: 12s;
          }
          .sparkle {
            animation-duration: 6s;
          }
        }
        
        /* Đảm bảo text contrast tốt */
        @media (max-width: 768px) {
          h1 {
            color: rgb(159 18 57) !important;
            font-weight: 700 !important;
            text-shadow: 2px 2px 8px rgba(0,0,0,0.4) !important;
          }
          p {
            text-shadow: 1px 1px 4px rgba(0,0,0,0.3) !important;
          }
        }
        
        /* Layout stability và performance */
        .text-center {
          min-height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          contain: layout style paint;
        }
        
        /* GPU acceleration cho tất cả animated elements */
        .css-heart, .flower, .bubble, .sparkle, .heartbeat, .animate-bounce-slow {
          transform: translate3d(0, 0, 0);
          transform-style: preserve-3d;
        }
        
        /* Force hardware acceleration */
        .css-heart, .flower, .bubble, .sparkle {
          -webkit-transform: translateZ(0);
          -webkit-perspective: 1000;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
        </div>
    );
}
