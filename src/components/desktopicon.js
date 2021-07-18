import './desktopicon.css';

function Desktopicon(props) {
    return(
        <div className="desktopicons">
            <div className="imagediv">
                <a href={props.href} target="_blank"><img src={props.image} alt="icon" className="desktopicon"></img></a>
            </div>
            <div className="namediv">
                <p className="appname">{props.name}</p>
            </div>
        </div>
    )
}

export default Desktopicon;