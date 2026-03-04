import { motion } from 'framer-motion';

export default function QuestionStep({ question, stepIndex, totalSteps, onAnswer }) {
    // Use framer motion for card selection animation
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, staggerChildren: 0.1 }
        },
        exit: { opacity: 0, x: -20 }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            key={`question-${stepIndex}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-silver-dark)', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                <span>Passo {stepIndex} de {totalSteps}</span>
                <span>Avaliação ORDO</span>
            </div>

            <div className="progress-container">
                <div className="progress-fill" style={{ width: `${(stepIndex / totalSteps) * 100}%` }} />
            </div>

            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', textAlign: 'center', lineHeight: 1.3 }}>
                {question.title}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {question.options.map((option, idx) => (
                    <motion.div
                        variants={itemVariants}
                        key={idx}
                        className="glass-panel option-card"
                        style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.2rem', userSelect: 'none' }}
                        onClick={() => {
                            // Automatically proceed to next step on click, adds to the "rapid" premium feel
                            onAnswer(option.text);
                        }}
                    >
                        <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '0.8rem', fontSize: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {option.icon}
                        </div>
                        <div style={{ flex: 1, fontSize: '1.2rem', fontWeight: 500, color: 'var(--color-silver-light)' }}>
                            {option.text}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
