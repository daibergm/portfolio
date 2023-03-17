import Image from 'next/image';
import React from 'react';
import { LogoProps } from './types';

function Logo({ width, height }: LogoProps) {
  return <Image src="/static/assets/navLogo.png" alt="logo" width={width} height={height} />;
}

export default Logo;
