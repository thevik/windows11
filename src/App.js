import './App.css';
import Desktopicon from './components/desktopicon';
import Taskbar from './components/taskbar';
import edge from './icons/microsoftedge.png';
import teams from './icons/microsoftteams.png';
import word from './icons/microsoftword.png';
import explorer from './icons/fileexplorer.png';
import grammer from './icons/grammarly.png';

function App() {
  return (
    <div className="App">
      <Desktopicon image={edge} name="Microsoft Edge"></Desktopicon><br/><br/>
      <Desktopicon image={teams} name="Microsoft Teams"></Desktopicon><br/><br/>
      <Desktopicon image={word} name="Microsoft Word"></Desktopicon><br/><br/>
      <Desktopicon image={explorer} name="Explorer"></Desktopicon><br/><br/>
      <Desktopicon image={grammer} name="Grammerly" href="https://www.grammarly.com/?affiliateNetwork=ho&affiliateID=75158" ></Desktopicon>
      <Taskbar></Taskbar>
    </div>
  );
}

export default App;
