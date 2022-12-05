import './index.css';

export default function Menu (props) {
    return (
        <div>
            <nav>
                <ul className='menu'>
                    <li><a href="#">{props.insta}</a></li>
                    <li><a href="#">{props.linke}</a></li>
                    <li><a href="#">{props.git}</a></li>
                </ul>
            </nav>
        </div>
    );    
}