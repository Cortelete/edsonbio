import React, { useState, useEffect } from 'react';
import { BIBLE_VERSES } from '../constants';

const ProfileSection: React.FC = () => {
    const [verseIndex, setVerseIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setVerseIndex(prevIndex => (prevIndex + 1) % BIBLE_VERSES.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center mb-6 sm:mb-8">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mb-4 bg-black/30 border-2 border-green-400/50 shadow-lg shadow-green-500/20 overflow-hidden flex items-center justify-center">
                <img
                    src="/profile.png"
                    alt="Foto de perfil de Edson Pedroso"
                    className="w-full h-full object-cover"
                />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gradient bg-gradient-to-r from-slate-100 via-emerald-200 to-slate-100 animate-gradient-xy px-2">
                Edson Pedroso
            </h1>
            <div className="min-h-[3.5rem] sm:min-h-[4rem] mt-2 sm:mt-3 flex items-center justify-center w-full">
               <p key={verseIndex} className="text-sm sm:text-base text-slate-300 italic fade-in-out px-4">
                  "{BIBLE_VERSES[verseIndex]}"
               </p>
            </div>
        </div>
    );
};

export default ProfileSection;