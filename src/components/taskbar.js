import './taskbar.css';
import explorer from '../icons/fileexplorer.png';
import edge from '../icons/microsoftedge.png';
import teams from '../icons/microsoftteams.png';
import word from '../icons/microsoftword.png';
import search from '../icons/search.png';
import settings from '../icons/settings.png';
import windows from '../icons/windows.png';
import wifi from '../icons/wifi.png';
import sound from '../icons/sound.png';
import uparrow from '../icons/uparrow.png';
import charging from '../icons/charging.png';
import time from '../icons/time.png';
import notification from '../icons/notification.png';

function Taskbar() {
    return(
        <div className="taskbar">
            <div className="icons">
                <img src={windows} className="icon" alt="Windows"></img>
                <img src={search} className="icon" alt="Windows"></img>
                <img src={settings} className="icon" alt="Windows"></img>
                <img src={explorer} className="icon" alt="Windows"></img>
                <img src={teams} className="icon" alt="Windows"></img>
                <img src={word} className="icon" alt="Windows"></img>
                <img src={edge} className="icon" alt="Windows"></img>
                <div className="righticons">
                    <img src={uparrow} className="righticon" alt="Windows"></img>
                    <img src={wifi} className="righticon" alt="Windows"></img>
                    <img src={sound} className="righticon" alt="Windows"></img>
                    <img src={charging} className="righticon" alt="Windows"></img>
                    <img src={time} className="righticon" alt="Windows" style={{marginRight: 25}}></img>
                    <img src={notification} className="righticon" alt="Windows"></img>
                </div>
            </div>
        </div>
    )
}

export default Taskbar;