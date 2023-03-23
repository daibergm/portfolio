import { HTMLAttributes } from 'react';

export interface SocialIconProps extends HTMLAttributes<HTMLDivElement> {
  size: number;
  extraClass?: string;
  tailwindPadding?: string;
  color?: string;
}
