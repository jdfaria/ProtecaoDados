
import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { PASSWORD_PITFALL_ITEMS, MATCH_PITFALLS_MAX_SCORE } from '../../constants';

interface PasswordItem { id: string; content: string; }
interface Category { id: string; title: string; correctPasswordIds: string[]; }
interface PlacedPassword extends PasswordItem { placedInCategory: string; }

const Page9ActivityMatchPitfalls: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const isCompleted = state.completedActivities['matchPitfalls'];

  const [passwords, setPasswords] = useState<PasswordItem[]>(PASSWORD_PITFALL_ITEMS.passwords);
  const [placedPasswords, setPlacedPasswords] = useState<PlacedPassword[]>([]);
  const [draggedItem, setDraggedItem] = useState<PasswordItem | null>(null);
  const [score, setScore] = useState<number | null>(null);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, item: PasswordItem) => {
    if (isCompleted) return;
    setDraggedItem(item);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, categoryId: string) => {
    e.preventDefault();
    if (!draggedItem || isCompleted) return;

    setPasswords(passwords.filter(p => p.id !== draggedItem.id));
    setPlacedPasswords([...placedPasswords, { ...draggedItem, placedInCategory: categoryId }]);
    setDraggedItem(null);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();

  const checkAnswers = () => {
    let correctCount = 0;
    placedPasswords.forEach(placed => {
      const category = PASSWORD_PITFALL_ITEMS.categories.find(c => c.id === placed.placedInCategory);
      if (category && category.correctPasswordIds.includes(placed.id)) {
        correctCount++;
      }
    });
    setScore(correctCount);
    dispatch({ type: 'SET_SCORE', payload: { activity: 'matchPitfalls', score: correctCount } });
    dispatch({ type: 'COMPLETE_ACTIVITY', payload: 'matchPitfalls' });
  };
  
  return (
    <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-6 md:p-10">
      <h2 className="text-2xl font-bold text-red-500 mb-2">Atividade: Combina as Armadilhas</h2>
      <p className="text-gray-600 mb-6">Arrasta cada password para o erro que ela representa. Depois, verifica as tuas respostas.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Passwords Column */}
        <div className={`border-2 border-dashed rounded-lg p-4 min-h-[300px] ${isCompleted ? 'bg-gray-100' : 'bg-gray-50'}`}>
          <h3 className="font-bold text-center text-gray-700 mb-4">Passwords Fracas</h3>
          <div className="space-y-2">
            {passwords.map(item => (
              <div
                key={item.id}
                draggable={!isCompleted}
                onDragStart={(e) => handleDragStart(e, item)}
                className={`p-3 bg-white border rounded-md shadow-sm text-center font-mono ${!isCompleted ? 'cursor-move' : 'cursor-not-allowed opacity-70'}`}
              >
                {item.content}
              </div>
            ))}
          </div>
        </div>
        
        {/* Categories Column */}
        <div className="space-y-4">
          {PASSWORD_PITFALL_ITEMS.categories.map(cat => (
            <div 
              key={cat.id}
              onDrop={(e) => handleDrop(e, cat.id)}
              onDragOver={handleDragOver}
              className={`border-2 border-dashed rounded-lg p-4 min-h-[100px] ${isCompleted ? 'bg-gray-100' : 'bg-gray-50'}`}
            >
              <h3 className="font-bold text-center text-gray-700 mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {placedPasswords.filter(p => p.placedInCategory === cat.id).map(item => (
                  <div key={item.id} className="p-2 bg-white border rounded-md shadow-sm font-mono">
                    {item.content}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        {!isCompleted && passwords.length === 0 ? (
          <button onClick={checkAnswers} className="bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
            Verificar Respostas
          </button>
        ) : isCompleted && score !== null && (
          <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-r-lg inline-block">
            <p className="font-bold">Atividade Concluída!</p>
            <p>A tua pontuação: {score} de {MATCH_PITFALLS_MAX_SCORE} respostas certas.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page9ActivityMatchPitfalls;
