import Content from "../components/utils/Content"
import Navigation from "../components/Navigation"

const Data = () => {
    return (
        <div className='max-h-screen h-screen flex'>
            <Navigation/>
            <div className="divider divider-horizontal"></div>
            <Content>
                <div className='flex flex-col gap-4 '>
                    <h1 className='text-2xl font-bold'>Bienvenue dans la section Généralité</h1>
                    <p>Cette section est en cours de développement. Vous pouvez y trouver des informations sur le site, les outils et les données.</p>
                    <p>Restez à l'écoute pour plus de contenu !</p>
                </div>
            </Content>
        </div>
    )
}

export default Data