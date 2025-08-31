import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import LinkButton from './LinkButton';

const LinksSection: React.FC = () => {
    return (
        <div className="w-full flex flex-col items-center gap-3 sm:gap-4">
            {SOCIAL_LINKS.map(link => (
                <LinkButton
                    key={link.id}
                    href={link.url}
                    icon={link.icon}
                    disabled={link.disabled}
                >
                    {link.text}
                </LinkButton>
            ))}
        </div>
    );
};

export default LinksSection;
