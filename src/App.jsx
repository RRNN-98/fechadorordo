import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ShieldAlert, Presentation, PenTool, SearchX, CheckSquare, StopCircle, UserX, XCircle } from 'lucide-react';

import HeroStep from './components/HeroStep';
import QuestionStep from './components/QuestionStep';
import ResultStep from './components/ResultStep';

import './index.css';

export default function App() {
  const [step, setStep] = useState(0); // 0 = Hero, 1 = Q1, 2 = Q2, 3 = Result

  // Quiz Questions Data Structure
  const questions = [
    {
      title: "Qual é o seu cenário hoje?",
      options: [
        { text: "Faço reuniões mas poucos fecham", icon: <UserX size={24} color="var(--color-silver)" /> },
        { text: "Tenho dificuldade em conduzir a call", icon: <Presentation size={24} color="var(--color-silver)" /> },
        { text: "Não sei estruturar minha oferta", icon: <PenTool size={24} color="var(--color-silver)" /> },
        { text: "Nem sei o que dizer na reunião", icon: <SearchX size={24} color="var(--color-silver)" /> }
      ]
    },
    {
      title: "Você já perdeu cliente por:",
      options: [
        { text: "Falar demais", icon: <ShieldAlert size={24} color="var(--color-silver)" /> },
        { text: "Não saber validar orçamento", icon: <XCircle size={24} color="var(--color-silver)" /> },
        { text: "Não saber lidar com objeções", icon: <StopCircle size={24} color="var(--color-silver)" /> },
        { text: "Não pedir o fechamento", icon: <CheckSquare size={24} color="var(--color-silver)" /> }
      ]
    }
  ];

  const handleNextStep = () => {
    setStep(s => s + 1);
  };

  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answerText) => {
    setAnswers([...answers, answerText]);
    setTimeout(() => {
      setStep(s => s + 1);
    }, 400); // Tiny delay to allow animation finish/feedback
  };

  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div key="hero" exit={{ opacity: 0, x: -30 }}>
            <HeroStep onNext={handleNextStep} />
          </motion.div>
        )}

        {step === 1 && (
          <motion.div key="q1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
            <QuestionStep
              question={questions[0]}
              stepIndex={1}
              totalSteps={2}
              onAnswer={handleAnswer}
            />
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="q2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
            <QuestionStep
              question={questions[1]}
              stepIndex={2}
              totalSteps={2}
              onAnswer={handleAnswer}
            />
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <ResultStep answers={answers} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
