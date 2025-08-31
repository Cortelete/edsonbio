import React from 'react';

interface LinkButtonProps {
    href: string;
    children: React.ReactNode;
    icon: JSX.Element;
    disabled?: boolean;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, children, icon, disabled = false }) => {
    const baseClasses = "group relative w-full max-w-xs text-center font-semibold text-sm sm:text-base py-3 px-4 sm:px-5 rounded-xl transition-all duration-300 ease-in-out flex items-center justify-center gap-3 overflow-hidden";
    const enabledClasses = "bg-black/40 border-2 border-green-400/30 text-white hover:border-green-400 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-green-400";
    const disabledClasses = "bg-gray-800/50 border-2 border-gray-600/30 text-gray-400 cursor-not-allowed";

    const content = (
        <>
            <span className="absolute left-0 top-0 h-full w-0 bg-green-500/20 transition-all duration-500 group-hover:w-full"></span>
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                {icon}
                {children}
            </span>
        </>
    );

    if (disabled) {
        return (
            <div className={`${baseClasses} ${disabledClasses}`}>
                {content}
            </div>
        );
    }

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseClasses} ${enabledClasses}`}
        >
            {content}
        </a>
    );
};

export default LinkButton;
