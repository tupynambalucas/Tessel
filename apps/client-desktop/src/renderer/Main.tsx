import { createRoot } from 'react-dom/client';
// Importa o Launcher da engine
import EngineReact from '@tessel/game/src/GameEngine';

const container = document.getElementById('root');
const root = createRoot(container!);

// Função que lida com o evento de play específico do Desktop
const handleDesktopGameStart = () => {
  console.log('Desktop: Solicitando tela cheia...');
  // Usa a API exposta pelo preload.ts
  if (window.electron && window.electron.ipcRenderer) {
    // Envia uma mensagem para o processo principal (Main Process)
    window.electron.ipcRenderer.send('window-maximize');
  }
};

root.render(<EngineReact onGameStart={handleDesktopGameStart} />);
