import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { AlertCircle, Target, TrendingDown, EyeOff } from 'lucide-react';

export default function ResultStep({ answers, onNext }) {

    const metrics = [
        { label: "Estrutura de Fechamento", value: 27, icon: <Target size={18} /> },
        { label: "Controle da Call", value: 34, icon: <TrendingDown size={18} /> },
        { label: "Clareza da Oferta", value: 29, icon: <EyeOff size={18} /> },
        { label: "Lidar com Objeções", value: 31, icon: <AlertCircle size={18} /> }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ width: '100%', maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
        >
            <div style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem', lineHeight: 1.2 }} className="heading-gradient">
                    Diagnóstico da sua Estrutura de Fechamento
                </h2>
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '2rem' }} className="glass-panel">

                    <h3 style={{ color: 'var(--color-silver-light)', fontSize: '1.3rem', textAlign: 'left', fontWeight: 'bold' }}>
                        Aviso de Desempenho
                    </h3>

                    {metrics.map((metric, idx) => (
                        <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#fff', fontWeight: 600 }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-silver)' }}>
                                    {metric.icon} {metric.label}
                                </span>
                                <span style={{ color: '#ff4444', textShadow: '0 0 10px rgba(255, 68, 68, 0.5)' }}>{metric.value}%</span>
                            </div>
                            <div className="chart-bar-container">
                                <motion.div
                                    className="chart-bar-fill"
                                    initial={{ width: '0%' }}
                                    animate={{ width: `${metric.value}%` }}
                                    transition={{ duration: 2, delay: idx * 0.3, ease: 'easeInOut' }}
                                    style={{ background: 'linear-gradient(90deg, #550000, #ff1a1a)' }} // red glow gradient for "low performance"
                                />
                            </div>
                        </div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.5, duration: 1 }}
                        style={{ padding: '1.5rem', background: 'rgba(255, 68, 68, 0.05)', borderLeft: '4px solid #ff4444', borderRadius: '4px', marginTop: '1rem', fontStyle: 'italic', color: 'var(--color-silver-light)', lineHeight: '1.6' }}
                    >
                        "Pelo que você respondeu, o problema não é falta de clientes.<br /><br />
                        <strong>O verdadeiro problema está na estrutura da sua reunião.</strong><br /><br />
                        Sem um processo claro de condução, validação e fechamento, a maioria das calls termina sem decisão."
                    </motion.div>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '2rem', color: 'white' }}>
                    Para resolver isso, deixei um presente para você
                </h2>
                <button
                    onClick={onNext}
                    className="btn-metallic animate-pulse-glow"
                    style={{ margin: '0 auto', fontSize: '1.2rem', padding: '1.2rem 2.5rem' }}
                >
                    🎁 RECEBER PRESENTE
                </button>
            </div>
        </motion.div>
    );
}
