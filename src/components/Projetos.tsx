import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projetosMedios = [
  {
    titulo: "The Flashcards",
    descricao: "Plataforma completa de estudos com flashcards, baseada em aprendizado ativo, controle de múltiplas tentativas e relatórios detalhados por sessão. Possui gestão de salas, acompanhamento de desempenho em tempo real.",
    imagem: "/images/projetos/theFlashcards.png",
    tags: ['React', 'TypeScript', 'Node.js', 'Prisma', 'PostgreSQL', 'Material UI'],
    link: "https://theflashcards-hml.onrender.com",
    tipo: "Full-Stack",
    atraso: 0.2,
  },
  {
    titulo: "Sistema de Feedback",
    descricao: "Plataforma para gestão organizacional segmentado por setores com análise de avaliações.",
    imagem: "/images/projetos/feedback.png",
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: null,
    tipo: "Full-Stack",
    atraso: 0.3,
  },
];

const projetosPequenos = [
  {
    subtitulo: "Alta Concorrência",
    titulo: "Sistema de Leilão",
    imagem: "/images/projetos/leilao.png",
    tags: ['Next.js', 'TypeScript', 'Material UI', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Socket.IO', 'Redis'],
    atraso: 0.4,
  },
  {
    subtitulo: "Gestão Logística",
    titulo: "Gestão de Pátio",
    imagem: "/images/projetos/gestaoPatio.png",
    tags: ['Next.js', 'TypeScript', 'MUI', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'AWS S3', 'Google Maps API'],
    atraso: 0.5,
  },
  {
    subtitulo: "Módulo ERP",
    titulo: "Gestão Financeira",
    imagem: "/images/projetos/financeiro.png",
    tags: ['React', 'Vite', 'Docker', 'Node.js', 'TypeScript', 'Express', 'MikroORM', 'PostgreSQL', 'Redis'],
    atraso: 0.6,
  },
];

export const Projetos = () => {
  return (
    <section id="projetos" className="py-20 px-6 md:px-12 lg:px-24 bg-background dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="uppercase font-sans font-bold tracking-[0.3em] text-sm text-secondary mb-4 block"
          >
            PORTFÓLIO
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-5xl md:text-6xl font-bold text-slate-900 dark:text-white transition-colors"
          >
            Meus Projetos
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -4 }}
          className="group flex flex-col md:flex-row h-auto md:h-[420px] rounded-[24px] bg-white dark:bg-slate-900 shadow-sm hover:shadow-[0_20px_50px_-12px_rgba(123,47,190,0.15)] transition-all duration-500 overflow-hidden border border-slate-100 dark:border-slate-800"
        >
          <div className="w-full md:w-[60%] h-[250px] md:h-full shrink-0 bg-slate-800 relative overflow-hidden flex items-center justify-center">
            <img
              src="/images/projetos/devInsight.png"
              alt="Dev-insight"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none" />
          </div>

          <div className="w-full md:w-[40%] p-8 md:p-10 flex flex-col justify-center bg-white dark:bg-slate-900 z-10 relative">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-gradient-to-r from-primary to-secondary text-white w-max mb-4">
              Destaque
            </span>
            <h3 className="font-playfair text-4xl font-bold text-slate-900 dark:text-white mb-4">Dev-insight</h3>
            <p className="font-sans text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Plataforma full-stack que transforma dados do GitHub em métricas e scores de performance acionáveis. Permite análise e comparação visual de desenvolvedores, facilitando decisões para recrutadores e evolução técnica.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['React', 'Next.js', 'TypeScript', 'Material UI', 'Recharts', 'Node.js', 'PostgreSQL', 'Docker', 'Git API', 'Tailwind CSS'].map((tag) => (
                <span key={tag} className="font-mono text-[10px] text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="https://dev-insight-io.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-purple-200 dark:shadow-none active:scale-95 transition-transform w-max"
            >
              Ver projeto <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projetosMedios.map((projeto) => (
            <motion.div
              key={projeto.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: projeto.atraso }}
              whileHover={{ y: -4 }}
              className="group flex flex-col h-[360px] rounded-[24px] bg-white dark:bg-slate-900 shadow-sm hover:shadow-[0_20px_50px_-12px_rgba(123,47,190,0.15)] transition-all duration-500 overflow-hidden border border-slate-100 dark:border-slate-800 relative"
            >
              <div className="absolute top-4 right-4 flex gap-1 z-20">
                <span className="px-2 py-1 rounded-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-[10px] font-bold text-secondary uppercase tracking-widest">
                  {projeto.tipo}
                </span>
              </div>
              <div className="h-1/2 bg-slate-800 relative overflow-hidden flex items-center justify-center">
                <img
                  src={projeto.imagem}
                  alt={projeto.titulo}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none" />
              </div>
              <div className="h-1/2 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-slate-900 dark:text-white mb-2">{projeto.titulo}</h3>
                  <p className="font-sans text-sm text-slate-500 dark:text-slate-400 line-clamp-3 mb-4">
                    {projeto.descricao}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-2">
                    {projeto.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[10px] text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">{tag}</span>
                    ))}
                  </div>
                  {projeto.link ? (
                    <a href={projeto.link} target="_blank" rel="noreferrer" className="p-2 rounded-full border border-slate-200 dark:border-slate-700 text-secondary hover:bg-secondary hover:text-white transition-colors shrink-0">
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest shrink-0 py-2">
                      Projeto Profissional
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projetosPequenos.map((projeto) => (
            <motion.div
              key={projeto.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: projeto.atraso }}
              whileHover={{ y: -4 }}
              className="group flex flex-col h-[280px] rounded-[24px] bg-white dark:bg-slate-900 shadow-sm hover:shadow-[0_20px_50px_-12px_rgba(123,47,190,0.15)] transition-all duration-500 overflow-hidden border border-slate-100 dark:border-slate-800"
            >
              <div className="h-24 bg-slate-800 relative overflow-hidden flex items-center justify-center">
                <img
                  src={projeto.imagem}
                  alt={projeto.titulo}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none" />
              </div>
              <div className="flex-1 p-5 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-bold text-secondary uppercase tracking-tighter block mb-1">{projeto.subtitulo}</span>
                  <h3 className="font-playfair text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2">{projeto.titulo}</h3>
                  <div className="flex flex-wrap gap-1 mt-2 mb-3">
                    {projeto.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[10px] text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">{tag}</span>
                    ))}
                  </div>
                </div>
                <span className="inline-flex items-center text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-2">
                  Projeto Profissional
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
