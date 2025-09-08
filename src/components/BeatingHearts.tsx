'use client';

import { useEffect, useState } from 'react';

interface BeatingHeartsProps {
    count?: number;
    className?: string;
}

export default function BeatingHearts({ count = 8, className = "" }: BeatingHeartsProps) {
    const [hearts, setHearts] = useState<Array<{
        id: number;
        size: number;
        position: { x: number; y: number };
        delay: number;
        emoji: string;
    }>>([]);

    useEffect(() => {
        const heartEmojis = ['💖', '💕', '💝', '💗', '💓', '💞', '🌸', '✨'];

        const newHearts = Array.from({ length: count }, (_, i) => ({
            id: i,
            size: Math.random() * 30 + 20,
            position: {
                x: Math.random() * 100,
                y: Math.random() * 100
            },
            delay: Math.random() * 3,
            emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)]
        }));

        setHearts(newHearts);
    }, [count]);

    return (
        <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
            {hearts.map((heart) => (
                <div
                    key={heart.id}
                    className="absolute animate-bounce opacity-20 hover:opacity-40 transition-opacity duration-300"
                    style={{
                        left: `${heart.position.x}%`,
                        top: `${heart.position.y}%`,
                        fontSize: `${heart.size}px`,
                        animationDelay: `${heart.delay}s`,
                        animationDuration: `${2 + Math.random() * 2}s`
                    }}
                >
                    <div
                        className="animate-pulse"
                        style={{
                            animationDelay: `${heart.delay * 0.5}s`,
                            animationDuration: `${1.5 + Math.random()}s`
                        }}
                    >
                        {heart.emoji}
                    </div>
                </div>
            ))}

            {/* Additional floating animation */}
            <style jsx>{`
        @keyframes float-up {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
          50% {
            opacity: 0.3;
            transform: translateY(-10px) scale(1.1);
          }
          100% {
            opacity: 0;
            transform: translateY(-30px) scale(0.9);
          }
        }
        
        .animate-float-up {
          animation: float-up 4s infinite ease-in-out;
        }
      `}</style>
        </div>
    );
}
