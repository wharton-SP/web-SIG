import { Wrench } from 'lucide-react'
import { AlertTriangle } from 'lucide-react'
import { Database } from 'lucide-react'
import { Earth } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className="bg-base-200 h-screen">
                <div className="flex flex-col items-center justify-center h-full">
                        <div className='flex flex-col items-center mb-10'>
                            <h1 className="text-5xl font-bold">Web S.I.G.</h1>
                            <h3>(Système d'Information Géometrique)</h3>
                        </div>
                        <div className='md:flex grid gap-4'>
                            <Link to="/general" className="btn btn-neutral hover:btn-accent w-60 h-20 rounded-2xl flex gap-5">
                                <Earth />
                                <span>Généralité</span>
                            </Link>
                            <Link to="/data" className="btn btn-neutral hover:btn-accent w-60 h-20 rounded-2xl flex gap-5">
                                <Database />
                                <span>Requêtes Spatiales (POSTGIS)</span>
                            </Link>
                        </div>
                    </div>
            </div>
            <div className="toast">
                <div className="alert alert-warning shadow-lg">
                    <AlertTriangle/>
                    <span>Ce site est encore en développement, alors il se pourrait qu'il se comporte de façon inattendu</span>
                </div>
            </div>
        </div>
    )
}

export default Home