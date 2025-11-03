
import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { QUIZ_QUESTIONS, QUIZ_MAX_SCORE } from '../../constants';

const Page10Quiz: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const isCompleted = state.completedActivities['quiz'];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    if (showFeedback || isCompleted) return;
    setSelectedAnswer(optionIndex);
    if (optionIndex === QUIZ_QUESTIONS[currentQuestion].correct) {
      setScore(s => s + 1);
    }
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(q => q + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setQuizFinished(true);
      dispatch({ type: 'SET_SCORE', payload: { activity: 'quiz', score: score } });
      dispatch({ type: 'COMPLETE_ACTIVITY', payload: 'quiz' });
    }
  };

  const questionData = QUIZ_QUESTIONS[currentQuestion];

  return (
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 md:p-10">
      <h2 className="text-2xl font-bold text-red-500 mb-2">Atividade: Qual é mais segura?</h2>
      
      {isCompleted || quizFinished ? (
        <div className="text-center py-10">
            <h3 className="text-2xl font-bold text-gray-800">Quiz Terminado!</h3>
            <p className="text-lg text-gray-600 mt-2">A tua pontuação final: {state.scores.quiz || score} / {QUIZ_MAX_SCORE}</p>
            <p className="text-gray-500 mt-4">Podes avançar para o teu certificado.</p>
        </div>
      ) : (
        <>
            <p className="text-gray-600 mb-6">Pergunta {currentQuestion + 1} de {QUIZ_QUESTIONS.length}</p>
            <p className="font-semibold text-lg text-gray-700 mb-6">{questionData.question}</p>
            
            <div className="grid md:grid-cols-2 gap-4">
                {questionData.options.map((option, index) => {
                    let buttonClass = 'border-gray-300 hover:border-teal-500 hover:bg-teal-50';
                    if (showFeedback) {
                        if (index === questionData.correct) {
                            buttonClass = 'border-green-500 bg-green-100 text-green-800';
                        } else if (index === selectedAnswer) {
                            buttonClass = 'border-red-500 bg-red-100 text-red-800';
                        }
                    }
                    return (
                        <button
                            key={index}
                            onClick={() => handleAnswer(index)}
                            disabled={showFeedback}
                            className={`p-4 border-2 rounded-lg font-mono text-center transition-all ${buttonClass}`}
                        >
                            {option}
                        </button>
                    );
                })}
            </div>
            
            {showFeedback && (
                <div className="mt-6 text-center">
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg inline-block text-left max-w-xl">
                        <p className="text-gray-700">{questionData.explanation}</p>
                    </div>
                    <button onClick={handleNext} className="mt-6 bg-teal-600 text-white px-8 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                        {currentQuestion < QUIZ_QUESTIONS.length - 1 ? 'Próxima Pergunta' : 'Finalizar Quiz'}
                    </button>
                </div>
            )}
        </>
      )}
    </div>
  );
};

export default Page10Quiz;
