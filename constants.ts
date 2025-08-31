import React from 'react';
import type { SocialLink } from './types';

export const BIBLE_VERSES: string[] = [
    "O Senhor é o meu pastor; de nada terei falta. (Salmos 23:1)",
    "Tudo posso naquele que me fortalece. (Filipenses 4:13)",
    "O coração do homem planeja o seu caminho, mas o Senhor lhe dirige os passos. (Provérbios 16:9)",
    "Porque para Deus nada é impossível. (Lucas 1:37)",
    "O Senhor é a minha luz e a minha salvação; de quem terei medo? (Salmos 27:1)",
    "Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento. (Provérbios 3:5)",
    "Deleite-se no Senhor, e ele atenderá aos desejos do seu coração. (Salmos 37:4)",
    "Pois o Senhor, o seu Deus, os abençoará... em todo o trabalho das suas mãos. (Deuteronômio 15:10)",
    "Lancem sobre ele toda a sua ansiedade, porque ele tem cuidado de vocês. (1 Pedro 5:7)",
    "O temor do Senhor é o princípio da sabedoria. (Provérbios 9:10)"
];

// FIX: Replaced JSX syntax with React.createElement to avoid compilation errors in a .ts file.
const InstagramIcon: React.FC<{className?: string}> = ({className}) => (
    React.createElement('svg', {
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    },
        React.createElement('rect', { x: "2", y: "2", width: "20", height: "20", rx: "5", ry: "5" }),
        React.createElement('path', { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
        React.createElement('line', { x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" })
    )
);

// FIX: Replaced JSX syntax with React.createElement to avoid compilation errors in a .ts file.
const TikTokIcon: React.FC<{className?: string}> = ({className}) => (
    React.createElement('svg', {
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        viewBox: "0 0 24 24",
        fill: "currentColor"
    },
        React.createElement('path', { d: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.84-.95-6.43-2.8-1.59-1.87-2.32-4.28-2.1-6.7.21-2.36 1.3-4.57 2.89-6.31 1.94-2.16 4.75-3.42 7.6-3.44.76-.01 1.53-.01 2.29.01V8.43c-.81-.01-1.62.02-2.43.01-2.02 0-3.95 1.05-4.83 2.7-1.13 2.11-.63 4.67 1.04 6.22 1.67 1.55 4.14 1.9 6.01.75 1.04-.63 1.7-1.74 1.86-2.99.02-1.09.03-2.18.02-3.27a4.34 4.34 0 0 1-1.79-1.6c-.3-.43-.58-.89-.81-1.39-.23-.5-.4-.1-.58-.15-1.25-.38-2.5-.76-3.75-1.15Z" })
    )
);


export const SOCIAL_LINKS: SocialLink[] = [
    {
        id: 'instagram',
        url: 'https://www.instagram.com/edsonskievicz',
        text: 'Instagram',
        // FIX: Replaced JSX syntax with React.createElement to avoid compilation errors in a .ts file.
        icon: React.createElement(InstagramIcon, { className: "w-6 h-6" })
    },
    {
        id: 'tiktok',
        url: '#',
        text: 'TikTok (Em breve)',
        // FIX: Replaced JSX syntax with React.createElement to avoid compilation errors in a .ts file.
        icon: React.createElement(TikTokIcon, { className: "w-6 h-6" }),
        disabled: true
    }
];
