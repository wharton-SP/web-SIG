import { Link } from 'react-router-dom'
import Sidebar from './utils/Sidebar'

const Navigation = () => {
    return (
        <Sidebar>
            <div className='grid rounded-box'>
                <Link to="/" className='py-2 px-1 rounded-box hover:bg-base-100'>Introduction</Link>
                <Link to="/general" className='py-2 px-1 rounded-box hover:bg-base-100'>Généralité</Link>
                <Link to="/data" className='py-2 px-1 rounded-box hover:bg-base-100'>Requêtes Spatiales</Link>
            </div>
        </Sidebar>
    )
}

export default Navigation