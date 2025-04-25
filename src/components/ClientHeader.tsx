'use client';

import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';

const ClientHeader: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex justify-end">
      </div>
    </header>
  );
};

export default ClientHeader; 