import { useState, type MouseEvent } from 'react';
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react';
import { IconeGithub, IconeLinkedin } from '../utils/icones';

export const Contato = () => {
  const [textoCopiado, setTextoCopiado] = useState<string | null>(null);

  const copiarTexto = (e: MouseEvent, texto: string) => {
    e.preventDefault();
    navigator.clipboard.writeText(texto);
    setTextoCopiado(texto);
    setTimeout(() => setTextoCopiado(null), 2000);
  };

  const contatos = [
    {
      titulo: "Me manda um e-mail",
      valor: "carolinebianca280@hotmail.com",
      link: "mailto:carolinebianca280@hotmail.com",
      icone: <Mail className="w-6 h-6" />,
      copiavel: true,
    },
    {
      titulo: "Vamos conectar",
      valor: "linkedin.com/in/bianca-muniz",
      link: "https://www.linkedin.com/in/bianca-muniz-7a664b209/",
      icone: <IconeLinkedin className="w-6 h-6" />,
      copiavel: false,
    },
    {
      titulo: "Meu código",
      valor: "github.com/bianca-cs-muniz",
      link: "https://github.com/bianca-cs-muniz",
      icone: <IconeGithub className="w-6 h-6" />,
      copiavel: false,
    }
  ];

  return (
    <footer id="contato" className="relative bg-white dark:bg-slate-950 pt-20 overflow-hidden flex flex-col">
      <div className="max-w-7xl mx-auto px-6 w-full mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          <div className="flex flex-col items-start text-left">
            <h2 className="font-playfair text-[50px] md:text-[70px] font-black text-slate-900 dark:text-white mb-6 leading-tight">
              Bora construir algo <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">incrível?</span>
            </h2>

            <p className="text-xl text-slate-500 dark:text-slate-400 max-w-xl mb-12">
              Desenvolvedora Full Stack com experiência em React, Next.js e Node.js,
              criando aplicações escaláveis com foco em performance e boas práticas.
              Aberta a projetos, freelas e oportunidades.
            </p>

            <a
              href="https://wa.me/5514998618176"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-[0_8px_20px_rgba(240,57,122,0.3)] hover:shadow-[0_8px_25px_rgba(240,57,122,0.5)] transition-all hover:-translate-y-1"
            >
              Falar comigo no WhatsApp
            </a>
          </div>

          <div className="flex flex-col gap-4">
            {contatos.map((contato, idx) => (
              <a
                key={idx}
                href={contato.link}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => contato.copiavel ? copiarTexto(e, contato.valor) : undefined}
                className="group flex items-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-full mr-6 text-slate-600 dark:text-slate-400">
                  {contato.icone}
                </div>

                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                    {contato.titulo}
                  </span>
                  <span className="text-slate-900 dark:text-white font-bold text-base sm:text-lg break-all">
                    {contato.valor}
                  </span>
                </div>

                <div className="ml-auto p-3 bg-slate-50 dark:bg-slate-800 text-slate-400 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 rounded-full flex-shrink-0">
                  {contato.copiavel ? (
                    textoCopiado === contato.valor ? (
                      <Check className="w-6 h-6 text-green-500" />
                    ) : (
                      <Copy className="w-6 h-6" />
                    )
                  ) : (
                    <ArrowUpRight className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full mt-auto">
        <hr className="border-slate-200 dark:border-slate-800 w-full m-0" />
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2026 Bianca Muniz. Todos os direitos reservados.</p>
          <p className="hidden md:block">
            Feito com muito café, amor e dedicação por Bianca Muniz
          </p>
        </div>
      </div>
    </footer>
  );
};
