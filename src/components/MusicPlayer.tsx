'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, Music } from 'lucide-react';

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const audioRef = useRef<HTMLAudioElement>(null);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(console.error);
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <>
            {/* Background Music */}
            <audio
                ref={audioRef}
                loop
                preload="auto"
                onEnded={() => setIsPlaying(false)}
                onError={() => setIsPlaying(false)}
            >
                <source src="/music/wedding-song.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            {/* Floating Music Button */}
            {isVisible && (
                <div className="fixed bottom-6 right-6 z-50">
                    <Button
                        onClick={togglePlay}
                        size="lg"
                        className={`rounded-full w-14 h-14 shadow-lg transition-all duration-300 hover:scale-110 ${isPlaying
                                ? 'bg-teal-500 hover:bg-teal-600 animate-pulse'
                                : 'bg-white hover:bg-gray-50 text-teal-600 border border-teal-200'
                            }`}
                    >
                        {isPlaying ? (
                            <Pause className="w-6 h-6" />
                        ) : (
                            <Play className="w-6 h-6 ml-1" />
                        )}
                    </Button>

                    {/* Music Note Animation */}
                    {isPlaying && (
                        <div className="absolute -top-2 -right-2">
                            <Music className="w-4 h-4 text-teal-500 animate-bounce" />
                        </div>
                    )}
                </div>
            )}
        </>
    );
}
