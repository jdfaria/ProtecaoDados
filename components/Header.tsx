
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-[#FEFBF0] p-4 flex justify-between items-center shadow-sm">
      <h1 className="text-lg font-semibold text-gray-700">Guia de Proteção de Dados</h1>
      <div className="flex items-center space-x-4">
        <span className="hidden md:inline text-sm text-gray-600">Device</span>
        <div className="flex items-center space-x-1 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v16h16V4H4zm0 0l8 8 8-8" /></svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
