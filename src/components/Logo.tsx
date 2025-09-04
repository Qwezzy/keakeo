import React from 'react';

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center font-bold text-xl font-headline ${className}`}>
      <div className="flex-shrink-0">
        <svg width="40" height="40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="95" fill="#5A5A5A"/>
            <path d="M130 50 L80 100 L130 150 L140 150 L90 100 L140 50 Z" fill="#FBBF24"/>
            <path d="M110 50 L60 100 L110 150 L120 150 L70 100 L120 50 Z" fill="#FCD34D"/>
        </svg>
      </div>
      <div className="flex flex-col ml-2 leading-tight">
        <span className="text-2xl font-bold tracking-wider text-foreground">
            <span style={{color: '#FCD34D'}}>KEA</span>
            KEO
        </span>
        <span className="text-xs font-semibold text-muted-foreground tracking-wide">TRADING AND PROJECTS (Pty) Ltd</span>
      </div>
    </div>
  );
};

export default Logo;
