import React from 'react';
import PageContainer from '../PageContainer';

const Page5PasswordRequirements: React.FC = () => {
  return (
    <PageContainer>
      <div className="text-left max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-red-500 mb-6">Como criar palavras-passe seguras?</h2>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">O que é uma palavra-passe?</h3>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-8">
          <p className="text-lg text-gray-700">
            Uma palavra-passe, também designada por password, é uma palavra-chave que permite o acesso a áreas restritas ou a dados protegidos num sistema informático.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-center text-gray-800 mb-2">Requisitos de uma Palavra-Passe Segura</h3>
            <p className="text-center text-gray-600 mb-6">Deve ter, no mínimo, <strong className="text-red-500">9 caracteres</strong> e incluir os seguintes tipos:</p>
            <table className="w-full text-left">
                <thead className="bg-teal-600 text-white">
                    <tr>
                        <th className="p-3">TIPOS DE CARACTERES</th>
                        <th className="p-3">EXEMPLOS</th>
                    </tr>
                </thead>
                <tbody className="text-gray-800">
                    <tr className="border-b"><td className="p-3 font-medium">Letras minúsculas</td><td className="p-3 font-mono">a...z</td></tr>
                    <tr className="border-b"><td className="p-3 font-medium">Letras maiúsculas</td><td className="p-3 font-mono">A...Z</td></tr>
                    <tr className="border-b"><td className="p-3 font-medium">Números</td><td className="p-3 font-mono">0...9</td></tr>
                    <tr><td className="p-3 font-medium">Caracteres especiais</td><td className="p-3 font-mono">~!@#$%^&*()...</td></tr>
                </tbody>
            </table>
        </div>
        
        <div className="mt-6 bg-teal-50 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md">
            <p><strong className="font-bold">Dica:</strong> Uma palavra-passe também pode ser uma frase longa, sem espaços, para ser mais fácil de memorizar e mais difícil de adivinhar.</p>
        </div>
      </div>
    </PageContainer>
  );
};

export default Page5PasswordRequirements;