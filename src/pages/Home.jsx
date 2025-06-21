import { Wrench } from 'lucide-react'
import { Database } from 'lucide-react'
import { Earth } from 'lucide-react'
import React from 'react'

const Home = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="">
                    <div className='flex flex-col items-center gap-4 mb-10'>
                        <h1 className="text-5xl font-bold">Web S.I.G.</h1>
                        <h3>(Système d'Information Géometrique)</h3>
                    </div>
                    <div className='flex gap-6'>
                        <button className="btn btn-neutral hover:btn-accent w-60 h-20 rounded-2xl">
                            <Earth />
                            <span>Généralité</span>
                        </button>
                        <button className="btn btn-neutral hover:btn-accent w-60 h-20 rounded-2xl">
                            <Wrench />
                            <span>Outils</span>
                        </button>
                        <button className="btn btn-neutral hover:btn-accent w-60 h-20 rounded-2xl">
                            <Database />
                            <span>Données</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home