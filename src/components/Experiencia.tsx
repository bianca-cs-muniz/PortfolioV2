import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Briefcase } from 'lucide-react';
import { cn } from '../utils/cn';

export const Experiencia = () => {
  const experiencias = [
    {
      cargo: "Desenvolvedora Full Stack",
      empresa: "Grupo Carvalho",
      periodo: "Jan 2024 – Jun 2026",
      icone: <Code2 className="w-6 h-6 text-white" />,
      tipo: "dev",
      destaques: [
        "Desenvolvi aplicações web internas com React.js, Next.js e TypeScript, ajudando as equipes a deixarem de fazer na mão o que dava pra automatizar",
        "Construí e mantive APIs RESTful com Node.js, usando Zod pra validação e Prisma ORM pra integrar com PostgreSQL e MySQL",
        "Implementei Docker e configurei pipelines de CI/CD no Azure DevOps, do build ao deploy",
        "Participei de code reviews com frequência, o que me ajudou a crescer muito tecnicamente e contribuir com o time",
        "Entreguei sistemas que as pessoas usam de verdade: plataforma de leilão para o DETRAN/DER, gestão de pátios, módulo financeiro e sistema de feedback organizacional",
        "Trabalhei com Scrum e Kanban, sempre em contato com as áreas de negócio e stakeholders"
      ]
    },
    {
      cargo: "Analista de Suporte de TI",
      empresa: "Grupo Carvalho",
      periodo: "Fev 2023 – Dez 2023",
      icone: <Cpu className="w-6 h-6 text-white" />,
      tipo: "suporte",
      destaques: [
        "Resolvi problemas de hardware, software e redes no dia a dia",
        "Instalei e configurei sistemas e equipamentos",
        "Treinei usuários internos, o que me ensinou a explicar tecnologia de um jeito que todo mundo entende"
      ]
    },
    {
      cargo: "Assistente Administrativo",
      empresa: "Grupo Carvalho",
      periodo: "Jan 2022 – Jan 2023",
      icone: <Briefcase className="w-6 h-6 text-white" />,
      tipo: "admin",
      destaques: [
        "Cuidei de processos administrativos e operacionais",
        "Trabalhei diretamente com processos de leilão do DETRAN/DER, sem imaginar que um dia ia desenvolver o sistema por trás disso"
      ]
    }
  ];

  const obterCorPorTipo = (tipo: string) => {
    switch (tipo) {
      case 'dev': return 'bg-primary';
      case 'suporte': return 'bg-secondary';
      case 'admin': return 'bg-slate-500';
      default: return 'bg-primary';
    }
  };

  return (
    <section id="experiencia" className="py-20 px-6 bg-background dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="uppercase text-primary font-bold tracking-widest text-sm mb-2 block">
            TRAJETÓRIA
          </span>
          <h2 className="font-playfair text-5xl md:text-6xl font-black text-slate-900 dark:text-white transition-colors">
            Minhas experiências
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-px h-full bg-slate-200 dark:bg-slate-800 transition-colors" />

          <div className="space-y-16">
            {experiencias.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={cn(
                  "relative flex flex-col md:flex-row items-center",
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg">
                  {React.cloneElement(exp.icone, { className: "w-5 h-5 md:w-6 md:h-6 text-white" })}
                </div>

                <div className={`w-full md:w-1/2 pt-0 pl-16 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                      <div>
                        <h3 className="font-playfair text-2xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">
                          {exp.cargo}
                        </h3>
                        <div className="flex items-center gap-2 text-primary font-bold">
                          <Briefcase className="w-4 h-4" />
                          {exp.empresa}
                        </div>
                      </div>
                      <div className="inline-block px-4 py-1.5 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap transition-colors">
                        {exp.periodo}
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.destaques.map((destaque, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm transition-colors">
                          <span className={cn("mt-1.5 w-1.5 h-1.5 rounded-full shrink-0", obterCorPorTipo(exp.tipo))} />
                          {destaque}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
