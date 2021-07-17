import './App.css';
import Desktopicon from './components/desktopicon';
import Taskbar from './components/taskbar';
import edge from './icons/microsoftedge.png';
import teams from './icons/microsoftteams.png';
import word from './icons/microsoftword.png';
import explorer from './icons/fileexplorer.png';

function App() {
  return (
    <div className="App">
      <Taskbar/>
    </div>
  );
}

export default App;
