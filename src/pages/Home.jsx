import { Wrench } from 'lucide-react'
import { AlertTriangle } from 'lucide-react'
import { Database } from 'lucide-react'
import { Earth } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    <div className="">
                        <div className='flex flex-col items-center gap-4 mb-10'>
                            <h1 className="text-5xl font-bold">Web S.I.G.</h1>
                            <h3>(Système d'Information Géometrique)</h3>
                        </div>
                        <div className='flex gap-6'>
                            <Link to="/general" className="btn btn-neutral hover:btn-accent w-60 h-20 rounded-2xl flex gap-5">
                                <Earth />
                                <span>Généralité</span>
                            </Link>
                            <Link to="/tools" className="btn btn-neutral hover:btn-accent w-60 h-20 rounded-2xl flex gap-5">
                                <Wrench />
                                <span>Outils</span>
                            </Link>
                            <Link to="/data" className="btn btn-neutral hover:btn-accent w-60 h-20 rounded-2xl flex gap-5">
                                <Database />
                                <span>Données</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="toast">
                <div className="alert alert-warning shadow-lg">
                    <AlertTriangle/>
                    <span>Ce site est encore en développement, alors is se pourrait <br /> qu'il se comporte de façon inattendu</span>
                </div>
            </div>
        </div>
    )
}

export default Home