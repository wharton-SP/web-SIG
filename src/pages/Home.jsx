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
                        <button className="btn btn-neutral hover:btn-accent w-60 h-20 rounded-2xl">Généralité</button>
                        <button className="btn btn-neutral hover:btn-accent w-60 h-20 rounded-2xl">Outils</button>
                        <button className="btn btn-neutral hover:btn-accent w-60 h-20 rounded-2xl">Données</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home