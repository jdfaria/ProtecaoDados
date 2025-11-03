
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

interface FooterProps {
  currentPage: number;
  totalPages: number;
}

const Footer: React.FC<FooterProps> = ({ currentPage, totalPages }) => {
  const { dispatch } = useContext(AppContext);

  return (
    <footer className="w-full bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-center text-sm">
        <p>Tecnologias de Informação e Comunicação - 6º ano</p>
        <p>2025@José Faria</p>
      </div>
      <div className="flex items-center space-x-4">
        <span className="bg-gray-700 px-3 py-1 rounded-md text-sm">
          {currentPage}/{totalPages}
        </span>
        <button
          onClick={() => dispatch({ type: 'PREV_PAGE' })}
          disabled={currentPage === 1}
          className="bg-teal-600 hover:bg-teal-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white p-2 rounded-full transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <button
          onClick={() => dispatch({ type: 'NEXT_PAGE' })}
          disabled={currentPage === totalPages}
          className="bg-teal-600 hover:bg-teal-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white p-2 rounded-full transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
