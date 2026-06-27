import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { cn } from '../utils/cn';
import { useTema } from '../hooks/useTema';

export const BarraNavegacao = () => {
  const [rolou, setRolou] = useState(false);
  const [menuMobileAberto, setMenuMobileAberto] = useState(false);
  const { tema, alternarTema } = useTema();

  useEffect(() => {
    const aoRolar = () => {
      setRolou(window.scrollY > 50);
    };
    window.addEventListener('scroll', aoRolar);
    return () => window.removeEventListener('scroll', aoRolar);
  }, []);

  const links = [
    { nome: 'Sobre', href: '#sobre' },
    { nome: 'Experiência', href: '#experiencia' },
    { nome: 'Projetos', href: '#projetos' },
    { nome: 'Skills', href: '#skills' },
    { nome: 'Contato', href: '#contato' },
  ];

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
          rolou ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="text-2xl font-bold font-playfair tracking-tight dark:text-white">
            B<span className="text-primary">.</span>Muniz
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.nome}
                href={link.href}
                className="relative text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white group transition-colors"
              >
                {link.nome}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            <div className="flex items-center gap-4">
              <a
                href="/documents/Curriculo_BiancaMuniz.pdf"
                target="_blank"
                rel="noreferrer"
                className="relative p-[2px] rounded-full overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" />
                <span className="relative flex items-center justify-center bg-white dark:bg-slate-900 px-5 py-2 rounded-full transition-all duration-300 group-hover:bg-transparent group-hover:text-white text-sm font-bold text-slate-900 dark:text-white">
                  Ver Currículo
                </span>
              </a>

              <button
                onClick={alternarTema}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="Alternar tema"
              >
                {tema === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </nav>

          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={alternarTema}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {tema === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              className="p-2 text-slate-900 dark:text-white"
              onClick={() => setMenuMobileAberto(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuMobileAberto && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-white dark:bg-slate-950 flex flex-col items-center justify-center p-6 lg:hidden"
          >
            <button
              className="absolute top-6 right-6 p-2 text-slate-900 dark:text-white"
              onClick={() => setMenuMobileAberto(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col items-center gap-8">
              {links.map((link) => (
                <a
                  key={link.nome}
                  href={link.href}
                  onClick={() => setMenuMobileAberto(false)}
                  className="text-4xl font-playfair font-bold text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {link.nome}
                </a>
              ))}

              <a
                href="/documents/Curriculo_BiancaMuniz.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuMobileAberto(false)}
                className="mt-4 px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white text-2xl font-bold font-playfair rounded-full shadow-[0_8px_20px_rgba(240,57,122,0.3)] transition-all active:scale-95"
              >
                Ver Currículo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
