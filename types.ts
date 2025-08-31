
import type React from 'react';

export interface SocialLink {
  id: string;
  url: string;
  text: string;
  icon: JSX.Element;
  disabled?: boolean;
}

export interface Mushroom {
  id: number;
  style: React.CSSProperties;
}
