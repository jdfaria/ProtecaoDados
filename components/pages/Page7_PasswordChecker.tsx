
import React, { useState, useMemo } from 'react';
import PageContainer from '../PageContainer';
import { CheckIcon, XIcon } from '../icons';

const Requirement: React.FC<{ text: string; met: boolean }> = ({ text, met }) => (
    <li className={`flex items-center space-x-2 ${met ? 'text-green-600' : 'text-red-500'}`}>
        {met ? <CheckIcon /> : <XIcon />}
        <span>{text}</span>
    </li>
);

const Page7PasswordChecker: React.FC = () => {
    const [password, setPassword] = useState('');

    const checks = useMemo(() => {
        return {
            length: password.length >= 9,
            lowercase: /[a-z]/.test(password),
            uppercase: /[A-Z]/.test(password),
            number: /[0-9]/.test(password),
            special: /[^a-zA-Z0-9]/.test(password),
        };
    }, [password]);

    const strength = useMemo(() => {
        const metCount = Object.values(checks).filter(Boolean).length;
        if (metCount < 3) return { text: 'Muito Fraca', color: 'bg-red-500' };
        if (metCount === 3) return { text: 'Fraca', color: 'bg-orange-500' };
        if (metCount === 4) return { text: 'Média', color: 'bg-yellow-500' };
        return { text: 'Forte', color: 'bg-green-500' };
    }, [checks]);

    return (
        <PageContainer>
            <div className="text-left max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">Verificador de Força da Palavra-passe</h2>
                <div className="bg-gray-50 p-6 rounded-lg shadow">
                    <label htmlFor="password-input" className="font-semibold text-gray-700">Escreve uma palavra-passe para testar a sua força:</label>
                    <input
                        id="password-input"
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="A tua palavra-passe aqui..."
                        className="w-full p-3 border border-gray-300 rounded-md mt-2 mb-6"
                    />
                    <div className="grid md:grid-cols-2 gap-6">
                        <ul className="space-y-2">
                            <Requirement text="Pelo menos 9 caracteres" met={checks.length} />
                            <Requirement text="Letra minúscula (a-z)" met={checks.lowercase} />
                            <Requirement text="Letra maiúscula (A-Z)" met={checks.uppercase} />
                            <Requirement text="Número (0-9)" met={checks.number} />
                            <Requirement text="Caractere especial (!@#...)" met={checks.special} />
                        </ul>
                        <div className="flex items-center justify-center">
                            <div className={`text-white font-bold py-2 px-6 rounded-lg ${strength.color}`}>
                                Força: {strength.text}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
};

export default Page7PasswordChecker;
