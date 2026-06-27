import { useState, useEffect } from 'react';

type Tema = 'light' | 'dark';

export const useTema = () => {
  const [tema, setTema] = useState<Tema>(() => {
    if (typeof window !== 'undefined') {
      const salvo = localStorage.getItem('theme');
      if (salvo) return salvo as Tema;

      const prefereEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefereEscuro) return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    const raiz = window.document.documentElement;
    if (tema === 'dark') {
      raiz.classList.add('dark');
    } else {
      raiz.classList.remove('dark');
    }
    localStorage.setItem('theme', tema);
  }, [tema]);

  const alternarTema = () => {
    setTema((anterior) => (anterior === 'light' ? 'dark' : 'light'));
  };

  return { tema, alternarTema };
};
