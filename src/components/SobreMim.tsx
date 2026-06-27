import { motion } from 'framer-motion';

export const SobreMim = () => {
  return (
    <section id="sobre" className="py-20 px-6 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="uppercase text-primary font-bold tracking-widest text-sm mb-2 block">
            SOBRE MIM
          </span>
          <h2 className="font-playfair text-5xl md:text-6xl font-black text-slate-900 dark:text-white transition-colors">
            Quem sou eu?
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed transition-colors"
          >
            <p>
              Sou Bianca, <strong className="text-slate-900 dark:text-white">Desenvolvedora Full Stack com experiência</strong> em ambiente de produção. Construo aplicações web escaláveis com <strong className="text-slate-900 dark:text-white">React.js, Next.js, Node.js e TypeScript</strong>, do componente ao endpoint, com o mesmo cuidado nos dois lados.
            </p>
            <p>
              Minha trajetória começa antes do código. Passei pelo suporte técnico e pelo administrativo, e isso me deu algo que não vem só de curso: a capacidade de entender o problema antes de abrir o editor.
            </p>
            <p>
              Já trabalhei em sistemas reais e complexos, como plataforma de leilão de veículos, gestão de pátios e módulos financeiros. Atuo com metodologias ágeis, participo de code reviews e levo CI/CD e Docker como parte do processo.
            </p>
            <p className="italic font-playfair text-xl text-slate-800 dark:text-slate-200 border-l-4 border-primary pl-4 py-2 mt-6 transition-colors">
              "Gosto de ir fundo: no problema, na solução, nos detalhes que fazem a diferença no resultado final."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl" />

            <div className="relative group perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary blur-sm opacity-20 rounded-3xl" />
              <div className="relative bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-xl transform rotate-3 transition-all duration-500 group-hover:rotate-0">
                <div className="flex flex-col gap-6 mb-8">
                  <div className="flex items-center gap-6">
                    <h3 className="font-playfair text-5xl font-black text-primary w-10 text-center">3+</h3>
                    <p className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider transition-colors">Anos de experiência</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <h3 className="font-playfair text-5xl font-black text-secondary w-10 text-center">3</h3>
                    <p className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider transition-colors">Projetos no portfólio</p>
                  </div>
                </div>

                <hr className="border-slate-100 dark:border-slate-800 mb-8 transition-colors" />

                <div className="flex justify-center items-center gap-2 w-full flex-nowrap overflow-hidden">
                  <span className="bg-primary text-white text-[10px] sm:text-xs md:text-sm font-bold px-3 py-2 rounded-full whitespace-nowrap">
                    Full Stack
                  </span>
                  <span className="bg-secondary text-white text-[10px] sm:text-xs md:text-sm font-bold px-3 py-2 rounded-full whitespace-nowrap">
                    Produção Real
                  </span>
                  <span className="bg-slate-800 dark:bg-slate-700 text-white text-[10px] sm:text-xs md:text-sm font-bold px-3 py-2 rounded-full whitespace-nowrap">
                    Code Review
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
