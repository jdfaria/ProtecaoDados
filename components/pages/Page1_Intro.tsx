
import React from 'react';
import PageContainer from '../PageContainer';

const Page1Intro: React.FC = () => {
  return (
    <PageContainer>
      <div className="text-left max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-red-500 mb-6">O que são dados pessoais?</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
          <p className="text-lg text-gray-700 leading-relaxed">
            São informações que permitem <strong className="font-semibold">identificar uma pessoa</strong>. Podem ser informações como o nome, a morada, a data de nascimento, as informações de contacto, e até dados mais sensíveis, como os dados financeiros ou de saúde.
          </p>
        </div>
      </div>
    </PageContainer>
  );
};

export default Page1Intro;
