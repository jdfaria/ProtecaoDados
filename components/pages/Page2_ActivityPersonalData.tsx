import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { PERSONAL_DATA_ITEMS, PERSONAL_DATA_MAX_SCORE } from '../../constants';
import { DraggableItem } from '../../types';

interface Column {
  id: string;
  title: string;
  items: DraggableItem[];
}

const Page2ActivityPersonalData: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const isCompleted = state.completedActivities['personalData'];

  const [columns, setColumns] = useState<Record<string, Column>>({
    items: { id: 'items', title: 'Itens', items: PERSONAL_DATA_ITEMS },
    personal: { id: 'personal', title: 'Dados Pessoais', items: [] },
    notPersonal: { id: 'notPersonal', title: 'Não São Dados Pessoais', items: [] },
  });
  const [draggedItem, setDraggedItem] = useState<DraggableItem | null>(null);
  const [score, setScore] = useState<number | null>(null);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, item: DraggableItem, sourceColId: string) => {
    if (isCompleted) return;
    setDraggedItem(item);
    e.dataTransfer.setData('text/plain', item.id);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetColId: string) => {
    e.preventDefault();
    if (!draggedItem || isCompleted) return;

    // Find source column and remove item
    let sourceColId = '';
    for (const colId in columns) {
        if (columns[colId].items.some(i => i.id === draggedItem.id)) {
            sourceColId = colId;
            break;
        }
    }

    if (sourceColId === targetColId) return;

    const newColumns = { ...columns };
    newColumns[sourceColId].items = newColumns[sourceColId].items.filter(i => i.id !== draggedItem.id);
    newColumns[targetColId].items = [...newColumns[targetColId].items, draggedItem];

    setColumns(newColumns);
    setDraggedItem(null);
  };
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const checkAnswers = () => {
    let correctCount = 0;
    columns.personal.items.forEach(item => {
      if (item.isPersonal) correctCount++;
    });
    columns.notPersonal.items.forEach(item => {
      if (!item.isPersonal) correctCount++;
    });
    setScore(correctCount);
    dispatch({ type: 'SET_SCORE', payload: { activity: 'personalData', score: correctCount } });
    dispatch({ type: 'COMPLETE_ACTIVITY', payload: 'personalData' });
  };
  
  return (
    <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-6 md:p-10">
      <h2 className="text-2xl font-bold text-red-500 mb-2">Atividade: O que são Dados Pessoais?</h2>
      <p className="text-gray-600 mb-6">Arrasta cada item para a caixa correta para testar os teus conhecimentos.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* FIX: Explicitly type 'col' as 'Column' to resolve type inference issues with Object.values(). */}
        {Object.values(columns).map((col: Column) => (
          <div 
            key={col.id}
            onDrop={(e) => handleDrop(e, col.id)}
            onDragOver={handleDragOver}
            className={`border-2 border-dashed rounded-lg p-4 min-h-[300px] ${isCompleted ? 'bg-gray-100' : 'bg-gray-50'}`}
          >
            <h3 className="font-bold text-center text-gray-700 mb-4">{col.title}</h3>
            <div className="space-y-2">
              {col.items.map(item => (
                <div
                  key={item.id}
                  draggable={!isCompleted}
                  onDragStart={(e) => handleDragStart(e, item, col.id)}
                  className={`p-3 bg-white border rounded-md shadow-sm text-center ${!isCompleted ? 'cursor-move' : 'cursor-not-allowed opacity-70'}`}
                >
                  {item.content}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        {!isCompleted && columns.items.items.length === 0 && (
          <button onClick={checkAnswers} className="bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
            Verificar Respostas
          </button>
        )}
        {isCompleted && score !== null && (
          <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-r-lg inline-block">
            <p className="font-bold">Atividade Concluída!</p>
            <p>A tua pontuação: {score} de {PERSONAL_DATA_MAX_SCORE} respostas certas.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page2ActivityPersonalData;