import Content from "../components/utils/Content"
import Navigation from "../components/Navigation"
import Note from "../components/utils/Note"
import Badge from "../components/utils/Badge"

const General = () => {
    return (
        <div className='max-h-screen h-screen flex'>
            <Navigation />
            <div className="divider divider-horizontal"></div>
            <Content>
                <div className='flex flex-col gap-4 '>
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold">1. Qu’est-ce qu’un SIG ? <Badge>Pages 1–2</Badge></h2>
                        <div className="pl-10">
                            <p>
                                Un SIG est un système informatique pour recueillir, stocker, analyser
                                et visualiser des données géospatiales (long/lat/altitude).
                            </p>
                            <ul className="list-disc pl-6 my-2">
                                <li>Données géoréférencées : coordonnées pour localisation précise</li>
                                <li>Applications : transport, santé, éducation, aménagement...</li>
                            </ul>
                            <Note>
                                Le SIG est au cœur de toute gestion territoriale et
                                décision spatiale.
                            </Note>

                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold">2. Composants d’un SIG <Badge>Pages 2–3</Badge></h2>
                        <div className="pl-10">
                            <p>
                                Un SIG combine données + outils pour produire des
                                cartes intelligentes.
                            </p>
                            <ul className="list-disc pl-6 my-2">
                                <li>Données numériques, matériel (PC), logiciels (QGIS, ArcGIS)</li>
                                <li>Fonctions : acquisition, archivage, analyse, affichage</li>
                            </ul>
                        </div>

                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold">3. Données géographiques <Badge>Pages 3–4</Badge></h2>
                        <div className="pl-10">
                            <p>
                                Les données sont dites géographiques quand elles sont associées à une
                                position sur Terre, via un Système de Référence Spatiale (SRS).
                            </p>
                            <Note>
                                Tout objet localisé devient une donnée géographique.
                            </Note>
                        </div>

                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold">4. Systèmes de projection & EPSG <Badge>Pages 4–5</Badge></h2>
                        <div className="pl-10">
                            <p>
                                Les systèmes de projection assurent une lecture cohérente sur les cartes.
                            </p>
                            <ul className="list-disc pl-6 my-2">
                                <li>Projettent coordonnées 3D en 2D</li>
                                <li>EPSG:4326 (GPS), EPSG:900913 (Google Maps), Lambert 93 (France)</li>
                            </ul>
                            <Note>
                                Les systèmes de projection transforment les coordonnées 3D de la Terre en
                                coordonnées 2D sur une carte.
                            </Note>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold">5. Webmapping <Badge>Page 6</Badge></h2>
                        <div className="pl-10">
                            <p>
                                C’est l’ensemble des technologies permettant d’afficher et d’actualiser des cartes en ligne
                                via navigateur.
                            </p>
                            <Note>
                                Le Webmapping connecte les SIG au web pour une cartographie interactive.
                            </Note>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold">6. Unités cartographiques <Badge>Page 6</Badge></h2>
                        <div className="pl-10">
                            <p>
                                Chaque objet spatial a une géométrie de base (point, ligne ou surface).
                            </p>
                            <ul className="list-disc pl-6 my-2">
                                <li><strong>Point</strong> : coordonnée unique</li>
                                <li><strong>Ligne</strong> : segment à deux points</li>
                                <li><strong>Surface</strong> : polygone ou aire délimitée</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold">7. Types de données <Badge>Page 6-7</Badge></h2>
                        <div className="pl-10">
                            <p>
                                Un SIG utilise deux grands types de données : les données géométriques pour la
                                forme des objets, et les données attributaires pour leur signification.
                            </p>
                            <ul className="list-disc pl-6 my-2">
                                <li><strong>Raster</strong> : images matricielles (JPEG, PNG, TIFF...)</li>
                                <li><strong>Vecteur</strong> : entités géométriques (points, lignes, polygones - SVG)</li>
                                <li><strong>Attributaires</strong> : informations thématiques liées aux objets</li>
                            </ul>
                            <Note>
                                Un SIG combine forme (géométrie) et contenu (attributs) pour représenter le monde réel.
                            </Note>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold">8. Affichage par couches <Badge>Page 7</Badge></h2>
                        <div className="pl-10">
                            <p>
                                Les informations sont organisées par couches thématiques superposables
                                (routes, rivières, écoles…). Chaque couche contient un type homogène d’objet.
                            </p>
                            <ul className="list-disc pl-6 my-2">
                                <li>Couches vectorielles (objets définis par géométrie)</li>
                                <li>Couches raster (fond de carte, orthophotos)</li>
                            </ul>
                            <Note>
                                Les couches permettent d'organiser les données spatiales de façon modulaire et lisible.
                            </Note>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold">9. Architecture client-serveur <Badge>Page 7-8</Badge></h2>
                        <div className="pl-10">
                            <p>
                                Le Webmapping fonctionne grâce à une architecture client-serveur.
                                Le client demande, le serveur fournit les données cartographiques.
                            </p>
                            <ul className="list-disc pl-6 my-2">
                                <li><strong>Côté client</strong> : QGIS, navigateur web, Leaflet, OpenLayers</li>
                                <li><strong>Côté serveur</strong> : fournit des couches via WMS/WFS</li>
                            </ul>
                            <Note>
                                Le Webmapping repose sur une communication continue entre client et serveur pour interagir avec les données.
                            </Note>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold">10. Liens utiles <Badge>Page 1-5</Badge></h2>
                        <div className="pl-10">
                            <p>
                                Ces ressources permettent de mieux comprendre les systèmes de référence spatiale,
                                les projections et les bases des SIG.
                            </p>
                            <ul className="list-disc pl-6 my-2 text-blue-300 underline">
                                <li><a href="https://spatialreference.org" target="_blank" rel="noopener noreferrer">spatialreference.org</a></li>
                                <li><a href="https://fr.wikipedia.org/wiki/Projection_cartographique" target="_blank" rel="noopener noreferrer">Projection cartographique – Wikipédia</a></li>
                            </ul>
                            <Note>
                                Ces ressources sont essentielles pour approfondir la théorie et les normes du Webmapping.
                            </Note>
                        </div>
                    </section>

                </div>
            </Content>
        </div>
    )
}

export default General