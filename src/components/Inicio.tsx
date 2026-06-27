import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '../utils/cn';

export const Inicio = () => {
  const { scrollY } = useScroll();
  const formaTopoY = useTransform(scrollY, [0, 500], [0, 200]);
  const formaBaseY = useTransform(scrollY, [0, 500], [0, -150]);
  const avatarY = useTransform(scrollY, [0, 500], [0, 50]);

  const textoCompleto = "Comecei entendendo os problemas antes do código, hoje isso é o diferencial que eu entrego.";
  const [texto, setTexto] = useState("");
  const [raio, setRaio] = useState(220);

  useEffect(() => {
    const aoRedimensionar = () => setRaio(window.innerWidth < 1024 ? 120 : 220);
    aoRedimensionar();
    window.addEventListener('resize', aoRedimensionar);
    return () => window.removeEventListener('resize', aoRedimensionar);
  }, []);

  useEffect(() => {
    let indice = 0;
    const temporizador = setInterval(() => {
      setTexto(textoCompleto.slice(0, indice));
      indice++;
      if (indice > textoCompleto.length) clearInterval(temporizador);
    }, 50);
    return () => clearInterval(temporizador);
  }, []);

  const selos = [
    { nome: "React.js", cor: "bg-blue-500", atraso: 0 },
    { nome: "TypeScript", cor: "bg-yellow-500", atraso: 1 },
    { nome: "Node.js", cor: "bg-green-600", atraso: 2 },
    { nome: "Docker", cor: "bg-cyan-600", atraso: 3 },
    { nome: "Next.js", cor: "bg-emerald-500", atraso: 4 },
    { nome: "AWS", cor: "bg-orange-500", atraso: 5 }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <motion.div
        style={{ y: formaTopoY }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full mix-blend-multiply pointer-events-none"
      />
      <motion.div
        style={{ y: formaBaseY }}
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/20 blur-[100px] rounded-full mix-blend-multiply pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center z-10 relative">
        <div className="flex flex-col items-start">
          <h1 className="font-playfair font-bold text-5xl sm:text-6xl md:text-[7rem] leading-[0.9] tracking-tighter text-slate-900 dark:text-white mb-4 transition-colors">
            BIANCA <br className="hidden md:block" /> <span className="md:hidden"> </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              MUNIZ
            </span>
          </h1>

          <span className="uppercase text-[10px] sm:text-xs tracking-[0.3em] font-medium text-slate-500 dark:text-slate-400 mb-3 transition-colors">
            Desenvolvedora Full Stack
          </span>

          <div className="min-h-[80px] md:min-h-[64px] mb-6">
            <p className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 transition-colors whitespace-pre-line">
              {texto}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-6 bg-primary ml-1 align-middle"
              />
            </p>
          </div>

          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mb-7 max-w-lg font-light leading-relaxed transition-colors">
            React.js · Next.js · Node.js · TypeScript · AWS · Docker <br />
            <span className="font-medium text-slate-700 dark:text-slate-300 transition-colors">Ágil no processo, criteriosa no resultado</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#projetos"
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-[0_8px_20px_rgba(240,57,122,0.3)] hover:shadow-[0_8px_25px_rgba(240,57,122,0.5)] transition-all hover:-translate-y-1 text-center"
            >
              Ver meus projetos
            </a>
            <a
              href="#contato"
              className="px-8 py-4 bg-transparent border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white font-bold rounded-full hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all hover:-translate-y-1 text-center"
            >
              Fala comigo
            </a>
          </div>
        </div>

        <motion.div style={{ y: avatarY }} className="relative hidden md:flex h-[400px] lg:h-[600px] w-full items-center justify-center">
          <div
            className="absolute w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] bg-gradient-to-tr from-primary to-secondary opacity-20"
            style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}
          />
          <div
            className="relative w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] overflow-hidden shadow-2xl"
            style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}
          >
            <img src="/images/foto_Minha.png" alt="Bianca Muniz" className="w-full h-full object-cover" />
          </div>

          {selos.map((selo, i) => {
            const angulo = (i * 360) / selos.length;
            const x = Math.cos((angulo * Math.PI) / 180) * raio;
            const y = Math.sin((angulo * Math.PI) / 180) * raio;

            return (
              <motion.div
                key={selo.nome}
                className={cn(
                  "absolute flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/20 transition-colors text-white scale-[0.65] lg:scale-100",
                  selo.cor
                )}
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)'
                }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, i % 2 === 0 ? 3 : -3, 0]
                }}
                transition={{
                  duration: 4 + (i % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: selo.atraso
                }}
              >
                <span className="relative flex h-2 w-2 text-white">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
                </span>
                <span className="text-xs font-bold text-white">{selo.nome}</span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
};
