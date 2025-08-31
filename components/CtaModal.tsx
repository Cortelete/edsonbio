import React, { useState, useEffect } from 'react';

interface CtaModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CtaModal: React.FC<CtaModalProps> = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');

    useEffect(() => {
        // Reset name when modal is closed/reopened
        if (!isOpen) {
            setName('');
        }
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) return;

        const clientName = "Edson Pedroso";
        const devPhone = "5541988710303";
        const message = encodeURIComponent(`Olá, meu nome é ${name}. Vi o link de ${clientName} e quero um site incrível como esse!`);
        
        window.open(`https://wa.me/${devPhone}?text=${message}`, '_blank');
        onClose();
        setName('');
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div 
                className="relative bg-gray-900/80 border border-green-500/30 rounded-2xl shadow-xl w-full max-w-sm p-6 sm:p-8 text-white"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                <h2 className="text-xl sm:text-2xl font-bold text-center mb-2 text-gradient bg-gradient-to-r from-emerald-300 to-green-400">Fale Comigo!</h2>
                <p className="text-center text-gray-300 mb-6 text-sm sm:text-base">Deixe seu nome para uma mensagem personalizada.</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Seu nome"
                        className="w-full bg-black/30 border-2 border-green-400/30 rounded-lg px-4 py-3 mb-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all text-sm sm:text-base"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-emerald-500 to-green-600 font-bold py-3 rounded-lg shadow-lg shadow-green-500/30 transform hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-emerald-400 text-sm sm:text-base"
                    >
                        Enviar para WhatsApp 🚀
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CtaModal;
