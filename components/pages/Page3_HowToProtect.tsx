
import React from 'react';
import PageContainer from '../PageContainer';
import { LockIcon, EyeOffIcon, LogOutIcon } from '../icons';

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-gray-50 rounded-lg shadow p-6 text-center flex flex-col items-center">
        <div className="bg-teal-100 text-teal-600 rounded-full p-3 mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{children}</p>
    </div>
);


const Page3HowToProtect: React.FC = () => {
  return (
    <PageContainer>
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-red-500 mb-10">Como proteger as informações pessoais online?</h2>
        <div className="grid md:grid-cols-3 gap-8">
            <InfoCard icon={<LockIcon />} title="Usa a Privacidade">
                Usa as opções de configuração de privacidade nos teus perfis online para limitar, o mais possível, os teus dados pessoais.
            </InfoCard>
            <InfoCard icon={<EyeOffIcon />} title="Não Publiques Tudo">
                Não publiques as tuas atividades e rotinas pessoais do dia a dia nas redes sociais. Pensa duas vezes antes de partilhar.
            </InfoCard>
            <InfoCard icon={<LogOutIcon />} title="Termina a Sessão">
                Termina sempre a sessão no email e em websites se estiveres num computador partilhado com outras pessoas.
            </InfoCard>
        </div>
      </div>
    </PageContainer>
  );
};

export default Page3HowToProtect;
