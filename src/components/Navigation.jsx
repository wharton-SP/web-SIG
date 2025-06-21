import { Link } from 'react-router-dom'
import Sidebar from './utils/Sidebar'

const Navigation = () => {
    return (
        <Sidebar>
            <div>
                <ul className='menu bg-base-200 rounded-box'>
                    <li><Link to="/">Introduction </Link></li>
                    <li><Link to="/general">Généralité</Link></li>
                    <li><Link to="/tools">Outils</Link></li>
                    <li><Link to="/data">Données</Link></li>
                    <li><Link to="/about">À propos</Link></li>
                </ul>
            </div>
        </Sidebar>
    )
}

export default Navigation