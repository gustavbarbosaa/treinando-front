import Menu from "../menu/";
import './index.css';

export default function Header() {
    return (
        <div className="header">
            <h2>Estagiário<span>.com</span></h2>
            <img src="https://www.netlinetelecom.com.br/wp-content/uploads/2021/02/Logo-Netline-Telecom-Site.png" />
            <Menu 
                insta = 'Instagram'
                linke = 'Linkedin'
                git = 'GitHub'
            />
        </div>
    );
}