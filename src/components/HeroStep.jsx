import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function HeroStep({ onNext }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ textAlign: 'center', width: '100%', maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <div style={{ marginBottom: '2rem', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '200%', height: '200%', background: 'var(--color-accent-glow)', filter: 'blur(50px)', borderRadius: '50%', zIndex: '-1' }}></div>
        {/* Placeholder for ORDO Wolf Shield Logo -> if missing, fallback to shield icon */}
        <img 
          src="/logo.png" 
          alt="ORDO Logo" 
          style={{ width: '120px', height: '120px', objectFit: 'contain', filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.2))' }} 
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <Shield size={100} color="#c0c0c0" style={{ display: 'none', filter: 'drop-shadow(0 0 10px rgba(192,192,192,0.5))' }} />
      </div>

      <h1 className="heading-gradient" style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
        Você presta serviços mas tem dificuldade em fechar clientes em reunião?
      </h1>
      
      <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '3rem', fontWeight: '400', maxWidth: '80%' }}>
        Descubra em 60 segundos o seu nível real de fechamento.
      </p>

      <button 
        className="btn-metallic animate-pulse-glow" 
        onClick={onNext}
        style={{ padding: '1.2rem 3rem', fontSize: '1.3rem', width: '100%', maxWidth: '400px' }}
      >
        👉 Quero Descobrir Meu Nível
      </button>

      <div style={{ marginTop: '3rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
        <span>Avaliação Premium</span> &bull; <span>1 Minuto</span> &bull; <span>Resultados Imediatos</span>
      </div>
    </motion.div>
  );
}
