
import React from 'react';
import PageContainer from '../PageContainer';
import { AlertTriangleIcon, UserMinusIcon, RefreshCwIcon, HeartCrackIcon } from '../icons';

const CautionCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-gray-50 rounded-lg shadow p-6 flex items-start space-x-4">
        <div className="text-red-500 flex-shrink-0 mt-1">{icon}</div>
        <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{children}</p>
        </div>
    </div>
);

const Page8PasswordCautions: React.FC = () => {
    return (
        <PageContainer>
            <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-red-500 mb-10">Cuidados a ter com palavras-passe</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <CautionCard icon={<AlertTriangleIcon />} title="Não uses sequências">
                        Evita caracteres sequenciais óbvios, por exemplo: "1234567" ou "abcdef".
                    </CautionCard>
                    <CautionCard icon={<UserMinusIcon />} title="Não uses dados pessoais">
                        Não utilizes o teu nome, data de nascimento, número de telemóvel, etc.
                    </CautionCard>
                    <CautionCard icon={<RefreshCwIcon />} title="Evita reutilizar">
                        Evita utilizar a mesma palavra-passe em todas as redes sociais, plataformas, e-mails, etc.
                    </CautionCard>
                    <CautionCard icon={<HeartCrackIcon />} title="Altera regularmente">
                        Altera a tua palavra-passe regularmente, especialmente se suspeitares que foi comprometida.
                    </CautionCard>
                </div>
            </div>
        </PageContainer>
    );
};

export default Page8PasswordCautions;
