import React from 'react';

export class LogoProps {
  src: string;
  alt: string;
}

const Logo = ({ src, alt }: LogoProps) => {
  return (
    <div className='enterprise-logo'>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Logo;
