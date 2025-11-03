
import React from 'react';

const PageContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-6 md:p-10 relative">
      <div className="absolute top-[-50px] left-[-60px] w-32 h-32 bg-red-200 rounded-full -z-10 hidden md:block"></div>
      <div className="absolute top-[-40px] right-[-50px] w-48 h-48 bg-teal-200 rounded-full -z-10 hidden md:block"></div>
      <div className="text-center mb-8">
        <span className="bg-white border border-gray-300 rounded-full px-4 py-1 text-sm text-gray-500">TIC 6</span>
        <h1 className="text-4xl md:text-5xl font-bold text-red-500 mt-4">Proteção dos dados pessoais</h1>
        <p className="text-lg text-teal-600 mt-2">Tecnologias de Informação e Comunicação</p>
      </div>
      {children}
    </div>
  );
};

export default PageContainer;
