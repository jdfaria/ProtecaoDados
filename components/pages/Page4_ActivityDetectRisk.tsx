
import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { RISK_POSTS, DETECT_RISK_MAX_SCORE } from '../../constants';

const Page4ActivityDetectRisk: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const isCompleted = state.completedActivities['detectRisk'];
  const [selectedPosts, setSelectedPosts] = useState<number[]>([]);
  const [score, setScore] = useState<number | null>(null);

  const togglePost = (id: number) => {
    if (isCompleted) return;
    setSelectedPosts(prev =>
      prev.includes(id) ? prev.filter(pId => pId !== id) : [...prev, id]
    );
  };

  const checkAnswers = () => {
    let correctCount = 0;
    const riskyPosts = RISK_POSTS.filter(p => p.isRisk).map(p => p.id);
    selectedPosts.forEach(id => {
      if (riskyPosts.includes(id)) {
        correctCount++;
      }
    });
    // This simple scoring only counts correct selections, not omissions.
    // A more complex scoring could penalize incorrect selections.
    setScore(correctCount);
    dispatch({ type: 'SET_SCORE', payload: { activity: 'detectRisk', score: correctCount } });
    dispatch({ type: 'COMPLETE_ACTIVITY', payload: 'detectRisk' });
  };

  return (
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 md:p-10">
      <h2 className="text-2xl font-bold text-red-500 mb-2">Atividade: Deteta o Risco</h2>
      <p className="text-gray-600 mb-6">Clica nas publicações que achas que partilham demasiada informação. Depois, clica em verificar.</p>
      
      <div className="space-y-4">
        {RISK_POSTS.map(post => {
          const isSelected = selectedPosts.includes(post.id);
          let borderColor = 'border-gray-200';
          if (isCompleted) {
            if (post.isRisk) borderColor = 'border-red-500';
            if (isSelected && !post.isRisk) borderColor = 'border-yellow-500';
          } else if (isSelected) {
            borderColor = 'border-blue-500';
          }

          return (
            <div
              key={post.id}
              onClick={() => togglePost(post.id)}
              className={`p-4 border-2 ${borderColor} rounded-lg ${!isCompleted ? 'cursor-pointer hover:bg-gray-50' : 'cursor-default opacity-80'} transition-all`}
            >
              <p className="font-bold text-gray-800">{post.author}</p>
              <p className="text-gray-600">{post.text}</p>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-8">
        {!isCompleted ? (
          <button onClick={checkAnswers} className="bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
            Verificar Respostas
          </button>
        ) : score !== null && (
          <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-r-lg inline-block">
            <p className="font-bold">Atividade Concluída!</p>
            <p>A tua pontuação: {score} de {DETECT_RISK_MAX_SCORE} respostas certas.</p>
            <p className="text-sm mt-1">As publicações de risco estão destacadas a vermelho.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page4ActivityDetectRisk;
