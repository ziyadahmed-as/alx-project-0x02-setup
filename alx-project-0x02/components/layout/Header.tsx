// components/layout/Header.tsx
import React from 'react';
import Link from 'next/link';
import { HeaderProps } from '../../interfaces';

const Header: React.FC<HeaderProps> = ({ title = 'ALX Project' }) => {
  return (
    <header className="bg-white border-b">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <img src="/assets/images/logo.png" alt="ALX logo" className="h-8 w-8 object-contain" />
          <span className="font-semibold text-lg">{title}</span>
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
