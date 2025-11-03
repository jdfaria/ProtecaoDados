
import React, { useState, useMemo } from 'react';
import PageContainer from '../PageContainer';

const Page6PasswordTechniques: React.FC = () => {
    const [word, setWord] = useState('Informatica');
    const [phrase, setPhrase] = useState('Gosto de Minecraft');

    const substitutedWord = useMemo(() => {
        return word
            .replace(/a/gi, '@')
            .replace(/e/gi, '3')
            .replace(/i/gi, '!')
            .replace(/o/gi, '0')
            .replace(/s/gi, '5')
            .replace(/t/gi, '7');
    }, [word]);

    const acronym = useMemo(() => {
        return phrase
            .replace(/[aeiou\s]/gi, '');
    }, [phrase]);

    return (
        <PageContainer>
            <div className="text-left max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-red-500 mb-8">Técnicas para criar palavras-passe</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Substituir Vogais */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Substituir vogais</h3>
                        <p className="text-gray-600 mb-4">Substitui vogais por números e/ou caracteres especiais.</p>
                        <label className="font-semibold text-gray-700">Escreve uma palavra:</label>
                        <input
                            type="text"
                            value={word}
                            onChange={(e) => setWord(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md mt-1 mb-4"
                        />
                        <div className="bg-white p-4 rounded-lg flex items-center justify-center text-xl md:text-2xl font-mono space-x-4">
                            <span>{word || "Palavra"}</span>
                            <span>&rarr;</span>
                            <span className="text-teal-600 font-bold">{substitutedWord || "P@l@vr@"}</span>
                        </div>
                    </div>

                    {/* Criar Acrónimo */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Criar um acrónimo</h3>
                        <p className="text-gray-600 mb-4">Escreve uma frase e remove as vogais e os espaços.</p>
                        <label className="font-semibold text-gray-700">Escreve uma frase:</label>
                        <input
                            type="text"
                            value={phrase}
                            onChange={(e) => setPhrase(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md mt-1 mb-4"
                        />
                        <div className="bg-white p-4 rounded-lg flex items-center justify-center text-xl md:text-2xl font-mono space-x-4">
                            <span>{phrase || "Frase Exemplo"}</span>
                            <span>&rarr;</span>
                            <span className="text-teal-600 font-bold">{acronym || "FrsXmpl"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
};

export default Page6PasswordTechniques;
