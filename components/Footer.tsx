import React, { useState } from 'react';
import CtaModal from './CtaModal';

const Footer: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <footer className="w-full text-center mt-6 sm:mt-10">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="mb-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg shadow-green-500/40 transform hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-emerald-400 text-xs sm:text-sm"
                >
                    Quer um site incrível como esse? Fale comigo! 🚀
                </button>
                <p className="text-xs sm:text-sm text-gray-400">
                    Desenvolvido por{' '}
                    <a
                        href="https://www.instagram.com/inteligenciarte.ia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-green-300 hover:text-green-200 transition-colors"
                    >
                        InteligenciArte.IA ✨
                    </a>
                </p>
            </footer>
            <CtaModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

export default Footer;