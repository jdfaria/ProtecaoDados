import React, { useContext, useState, useRef } from 'react';
import { AppContext } from '../../context/AppContext';
import { PERSONAL_DATA_MAX_SCORE, DETECT_RISK_MAX_SCORE, MATCH_PITFALLS_MAX_SCORE, QUIZ_MAX_SCORE } from '../../constants';

// Declare globals to satisfy TypeScript since they are loaded from CDN
declare const html2canvas: any;

// FIX: Removed the incorrect `React.FC` type. Components using `forwardRef` have a special type that accepts a `ref` prop, which `React.FC` does not.
const CertificateContent = React.forwardRef<HTMLDivElement, { name: string, score: number }>(({ name, score }, ref) => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('pt-PT');

    return (
        <div ref={ref} className="bg-white border-2 border-gray-300 p-8 w-[800px] h-[565px] flex flex-col items-center shadow-lg relative font-serif">
            <span className="absolute top-4 right-4 bg-white border border-gray-300 rounded-full px-4 py-1 text-sm text-yellow-500 font-bold">TIC 6</span>
            <h1 className="text-4xl font-bold text-gray-800 mt-16">Certificado de Conclusão</h1>
            <p className="mt-8 text-lg text-gray-600">Este certificado é concedido a</p>
            <div className="w-3/4 mt-4 mb-4">
                <p className="text-3xl text-center font-semibold text-teal-700 border-b-2 border-dotted border-gray-400 py-2">
                    {name || '...'}
                </p>
            </div>
            <p className="text-lg text-gray-600 text-center">
                pela conclusão com sucesso da sequência de aprendizagem<br/>
                <strong className="text-xl">Proteção de Dados Pessoais</strong>
            </p>
            <div className="mt-12 text-center">
                <p className="text-6xl font-bold text-teal-600">{score}%</p>
                <p className="text-gray-500">Pontuação Final</p>
            </div>
            <div className="absolute bottom-8 w-full flex justify-between items-end px-8">
                <div>
                    <p className="border-t-2 border-gray-400 px-4 text-center">{formattedDate}</p>
                    <p className="text-sm text-center text-gray-600">Data de Emissão</p>
                </div>
                <div>
                    <p className="border-t-2 border-gray-400 px-4 text-center">Professor José Faria</p>
                    <p className="text-sm text-center text-gray-600">Professor</p>
                </div>
            </div>
        </div>
    );
});


const Page11Certificate: React.FC = () => {
    const { state } = useContext(AppContext);
    const [name, setName] = useState('');
    const [isDownloading, setIsDownloading] = useState(false);
    const certificateRef = useRef<HTMLDivElement>(null);

    const totalMaxScore = PERSONAL_DATA_MAX_SCORE + DETECT_RISK_MAX_SCORE + MATCH_PITFALLS_MAX_SCORE + QUIZ_MAX_SCORE;
    const totalUserScore = (state.scores.personalData || 0) + (state.scores.detectRisk || 0) + (state.scores.matchPitfalls || 0) + (state.scores.quiz || 0);
    const finalPercentage = totalMaxScore > 0 ? Math.round((totalUserScore / totalMaxScore) * 100) : 0;

    const downloadCertificate = () => {
        if (!certificateRef.current || isDownloading || !name.trim()) return;

        setIsDownloading(true);
        
        html2canvas(certificateRef.current, { scale: 2 }).then((canvas: any) => {
            canvas.toBlob((blob: Blob | null) => {
                if (blob) {
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = `Certificado-${name.trim().replace(/\s/g, '_') || 'Protecao_Dados'}.jpg`;
                    document.body.appendChild(link);
                    link.click();
                    
                    // Adicionar um atraso para garantir que o download é iniciado antes de limpar
                    setTimeout(() => {
                        document.body.removeChild(link);
                        URL.revokeObjectURL(url);
                    }, 100);

                } else {
                    throw new Error("A criação do blob da imagem falhou.");
                }
            }, 'image/jpeg', 0.95);
        }).catch((error: any) => {
            console.error("Ocorreu um erro ao descarregar o certificado:", error);
            alert("Não foi possível descarregar o certificado. Por favor, tente novamente.");
        }).finally(() => {
            setIsDownloading(false);
        });
    };

    return (
        <div className="w-full max-w-4xl">
            <h2 className="text-3xl font-bold text-red-500 mb-6">Certificado de Conclusão</h2>
            <div className="flex flex-col items-center">
                <CertificateContent ref={certificateRef} name={name} score={finalPercentage} />
                
                <div className="mt-8 bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                    <h3 className="font-bold text-lg text-gray-800">Personalize e Descarregue o seu Certificado</h3>
                    <label htmlFor="name-input" className="block mt-4 mb-1 text-sm font-medium text-gray-600">Insira o seu primeiro e último nome:</label>
                    <input
                        id="name-input"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="O seu nome aqui..."
                        className="w-full p-2 border border-gray-300 rounded-md bg-white text-black"
                    />
                    <button
                        onClick={downloadCertificate}
                        disabled={isDownloading || !name.trim()}
                        className="w-full mt-4 bg-teal-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        {isDownloading ? 'A descarregar...' : 'Descarregar Certificado (.jpg)'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Page11Certificate;