import React from 'react';
import { motion } from 'framer-motion';

interface CategoriaHabilidade {
  id: string;
  numero: string;
  nome: string;
  habilidades: string[];
  principal?: boolean;
}

const CATEGORIAS: CategoriaHabilidade[] = [
  {
    id: 'frontend',
    numero: '01',
    nome: 'Front-end',
    habilidades: ['React.js', 'Next.js', 'Vue.js', 'Vite', 'Redux', 'Tailwind CSS', 'Bootstrap', 'Material UI', 'HTML5', 'SASS/SCSS'],
    principal: true,
  },
  {
    id: 'backend',
    numero: '02',
    nome: 'Back-end',
    habilidades: ['Node.js', 'Laravel', 'Prisma ORM', 'Zod', 'REST API', 'WebSocket'],
  },
  {
    id: 'linguagens',
    numero: '03',
    nome: 'Linguagens',
    habilidades: ['TypeScript', 'JavaScript'],
  },
  {
    id: 'devops',
    numero: '04',
    nome: 'Infra & DevOps',
    habilidades: ['Docker', 'AWS', 'Azure DevOps', 'CI/CD', 'Git', 'GitHub', 'GitLab'],
  },
  {
    id: 'banco',
    numero: '05',
    nome: 'Banco de Dados',
    habilidades: ['PostgreSQL', 'MySQL'],
  },
  {
    id: 'ferramentas',
    numero: '06',
    nome: 'Ferramentas',
    habilidades: ['Jest', 'Power BI', 'Postman', 'Insomnia', 'Figma'],
  },
];

const ESTATISTICAS = [
  { valor: '32+', rotulo: 'Tecnologias' },
  { valor: '6',   rotulo: 'Categorias'  },
  { valor: 'Full', rotulo: 'Stack'      },
];

export const Habilidades = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-background dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-6"
        >
          <span className="uppercase text-primary font-bold tracking-widest text-xs mb-4 block">
            Skills
          </span>
          <h2 className="font-playfair text-5xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
            O que eu domino
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {CATEGORIAS.map((grupo, idx) => (
            <motion.div
              key={grupo.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.45 }}
              className={[
                'flex flex-col gap-5 p-8',
                'border-slate-200 dark:border-slate-700',
                'sm:[&:not(:nth-child(2n))]:border-r-2 lg:[&:not(:nth-child(2n))]:border-r-0',
                'lg:[&:nth-child(3n+1)]:border-r-2 lg:[&:nth-child(3n+2)]:border-r-2',
                'border-b-2 lg:[&:nth-last-child(-n+3)]:border-b-0',
                'sm:[&:nth-last-child(-n+2)]:border-b-0 sm:[&:nth-last-child(-n+1)]:border-b-0',
              ].join(' ')}
            >
              <span className="text-center text-[14px] font-semibold uppercase tracking-[0.2em] text-[#F0397A] dark:text-[#F0397A]">
                {grupo.nome}
              </span>

              <div className="flex flex-wrap gap-2 flex-1 items-start content-start">
                {grupo.habilidades.map((habilidade) => (
                  <span
                    key={habilidade}
                    className="px-4 py-1.5 text-sm font-medium rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 bg-transparent hover:border-[#F0397A] hover:text-[#F0397A] transition-colors cursor-default"
                  >
                    {habilidade}
                  </span>
                ))}
              </div>

              <span className="text-sm font-bold font-mono text-slate-200 dark:text-slate-700 self-end leading-none select-none">
                {grupo.numero}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-10 pt-12 border-t-2 border-slate-200 dark:border-slate-700 flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          <p className="text-slate-500 dark:text-slate-400 text-base max-w-[400] text-center lg:text-left leading-relaxed">
            Tecnologias, ferramentas e práticas que uso do front ao deploy
          </p>

          <div className="flex items-center gap-8">
            {ESTATISTICAS.map((stat, i) => (
              <React.Fragment key={stat.rotulo}>
                {i > 0 && (
                  <span className="w-px h-8 bg-slate-200 dark:bg-slate-700" />
                )}
                <div className="text-center">
                  <span className="font-playfair text-3xl font-black text-slate-900 dark:text-white block leading-none">
                    {stat.valor}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-slate-400 font-semibold mt-1 block">
                    {stat.rotulo}
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
