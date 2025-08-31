
import React, { useState, useEffect } from 'react';
import type { Mushroom } from '../types';

const MUSHROOM_COUNT = 20;

const MushroomBackground: React.FC = () => {
    const [mushrooms, setMushrooms] = useState<Mushroom[]>([]);

    useEffect(() => {
        const generatedMushrooms: Mushroom[] = [];
        for (let i = 0; i < MUSHROOM_COUNT; i++) {
            generatedMushrooms.push({
                id: i,
                style: {
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    fontSize: `${Math.random() * 1.5 + 0.5}rem`, // 0.5rem to 2rem
                    opacity: Math.random() * 0.5 + 0.2, // 0.2 to 0.7
                    animationDuration: `${Math.random() * 20 + 15}s`, // 15s to 35s
                    animationDelay: `${Math.random() * 10}s`,
                },
            });
        }
        setMushrooms(generatedMushrooms);
    }, []);

    return (
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden" aria-hidden="true">
            {mushrooms.map(mushroom => (
                <span
                    key={mushroom.id}
                    className="absolute animate-float"
                    style={mushroom.style}
                >
                    🍄
                </span>
            ))}
        </div>
    );
};

export default MushroomBackground;
