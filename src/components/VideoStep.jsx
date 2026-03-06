import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function VideoStep() {
    const [showDelayedCta, setShowDelayedCta] = useState(false);

    useEffect(() => {
        // 5 minutes delay for the final button (300 seconds = 300000 ms)
        const timer = setTimeout(() => {
            setShowDelayedCta(true);
        }, 300000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ width: '100%', maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
            <div style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '2rem', color: 'white', lineHeight: 1.3 }}>
                    VEJA ATÉ O FINAL PARA RECEBER O PRESENTE 🎁⬇️
                </h2>

                <div className="video-container glass-panel">
                    <iframe
                        src="https://drive.google.com/file/d/1B5WvAEFtYLFchYmrlrIjbL79IKv3fZSA/preview"
                        allowFullScreen
                        title="Video Presentation"
                    ></iframe>
                    <div className="video-overlay"></div>
                </div>

                {showDelayedCta && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ textAlign: 'center', marginTop: '2.5rem', marginBottom: '4rem' }}
                    >
                        <a
                            href="https://checkout.escalepay.com/6585715"
                            className="btn-neon-silver animate-pulse-neon"
                            onClick={() => {
                                if (window.fbq) {
                                    window.fbq('track', 'InitiateCheckout');
                                }
                            }}
                        >
                            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                👉 Quero Acesso ao Fechador ORDO + Comunidade + Aulas
                            </span>
                        </a>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}
