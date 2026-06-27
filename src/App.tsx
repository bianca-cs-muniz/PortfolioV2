import { BarraNavegacao } from './components/BarraNavegacao';
import { Inicio } from './components/Inicio';
import { SobreMim } from './components/SobreMim';
import { Experiencia } from './components/Experiencia';
import { Projetos } from './components/Projetos';
import { Habilidades } from './components/Habilidades';
import { Contato } from './components/Contato';

function App() {
  return (
    <div className="min-h-screen bg-background dark:bg-slate-950 relative selection:bg-primary/20 selection:text-primary transition-colors duration-300">
      <BarraNavegacao />

      <main>
        <Inicio />
        <SobreMim />
        <Experiencia />
        <Projetos />
        <Habilidades />
      </main>

      <Contato />
    </div>
  );
}

export default App;
