"use client";

import { useRive } from '@rive-app/react-canvas';
import Link from 'next/link';

export default function RiveLogo() {
  const { rive, RiveComponent } = useRive({
    src: '../public/animations/logo.riv', // Your Rive file path
    autoplay: false,
  });

  return (
    <Link href='/' className='w-12'>
      <div 
        style={{ width: 48, height: 48 }}
        onMouseEnter={() => rive?.play()}
        onMouseLeave={() => rive?.pause()}
      >
        <RiveComponent />
      </div>
    </Link>
  );
}