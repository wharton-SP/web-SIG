import Content from "../components/utils/Content"
import Navigation from "../components/Navigation"
import Note from "../components/utils/Note"
import Badge from "../components/utils/Badge"

const Data = () => {
    return (
        <div className='max-h-screen h-screen flex'>
            <Navigation />
            <div className="divider divider-horizontal"></div>
            <Content>
                <div className='flex flex-col gap-4'>
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold">1. Installation et Configuration <Badge>Pages 1-10</Badge></h2>
                        <div className="pl-10">
                            <p>
                                PostgreSQL, PostGIS et MapServer nécessitent une configuration spécifique pour fonctionner ensemble.
                            </p>
                            <ul className="list-disc pl-6 my-2">
                                <li><strong>PostgreSQL</strong> : Initialisation avec <code>initdb -A trust -E SQL_ASCII</code></li>
                                <li><strong>PostGIS</strong> : Activation via <code>CREATE EXTENSION postgis;</code></li>
                                <li><strong>MapServer</strong> : Installation via MS4W avec configuration Apache</li>
                            </ul>
                            <Note>
                                Les variables d'environnement comme PGDATA et PGPORT sont cruciales pour le bon fonctionnement.
                            </Note>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold">2. Création et Gestion des Bases <Badge>Pages 1-3</Badge></h2>
                        <div className="pl-10">
                            <p>
                                La création d'une base spatiale implique plusieurs étapes clés.
                            </p>
                            <ul className="list-disc pl-6 my-2">
                                <li>Création : <code>createdb madatabase</code></li>
                                <li>Ajout PostGIS : <code>psql -d madatabase -f postgis.sql</code></li>
                                <li>Colonne géométrique : <code>SELECT AddGeometryColumn('table', 'geom', -1, 'GEOMETRY', 2);</code></li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold">3. Requêtes Spatiales avec PostGIS <Badge>Pages 4-19</Badge></h2>
                        <div className="pl-10">
                            <p>
                                PostGIS offre des fonctions puissantes pour analyser les données spatiales.
                            </p>
                            <ul className="list-disc pl-6 my-2">
                                <li><strong>Extent()</strong> : Calcul de l'emprise géographique</li>
                                <li><strong>Distance()</strong> : Distance entre deux objets</li>
                                <li><strong>Within()</strong> : Test de containment</li>
                                <li><strong>Buffer()</strong> : Création de zones tampons</li>
                            </ul>
                            <Note>
                                Exemple : <code>SELECT Area2d(geom) FROM table;</code> calcule l'aire d'un polygone.
                            </Note>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold">4. PHP-MapScript <Badge>Pages 5-11</Badge></h2>
                        <div className="pl-10">
                            <p>
                                Intégration de cartes dynamiques dans des applications web.
                            </p>
                            <ul className="list-disc pl-6 my-2">
                                <li>Chargement du module : <code>dl("php_mapscript.dll")</code></li>
                                <li>Création de carte : <code>$oMap = ms_newMapObj(MAPFILE)</code></li>
                                <li>Gestion des interactions : <code>zoomPoint()</code> et <code>setExtent()</code></li>
                            </ul>
                            <Note>
                                Le MapFile est la pièce maîtresse qui définit les couches et le style de la carte.
                            </Note>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold">5. Structure du MapFile <Badge>Pages 1-8</Badge></h2>
                        <div className="pl-10">
                            <p>
                                Fichier de configuration central pour MapServer.
                            </p>
                            <ul className="list-disc pl-6 my-2">
                                <li><strong>MAP</strong> : Bloc principal</li>
                                <li><strong>LAYER</strong> : Définition des couches</li>
                                <li><strong>CLASS/STYLE</strong> : Apparence des objets</li>
                                <li><strong>WEB</strong> : Configuration des chemins</li>
                            </ul>
                            <Note>
                                Exemple : <code>EXTENT xmin ymin xmax ymax</code> définit l'emprise de la carte.
                            </Note>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold">6. Commandes Utiles <Badge>Pages 1-10</Badge></h2>
                        <div className="pl-10">
                            <p>
                                Commandes essentielles pour la gestion quotidienne.
                            </p>
                            <ul className="list-disc pl-6 my-2">
                                <li><strong>PostgreSQL</strong> : <code>psql -U utilisateur -d base</code></li>
                                <li><strong>PostGIS</strong> : <code>SELECT postgis_full_version();</code></li>
                                <li><strong>MapServer</strong> : <code>apache-restart.bat</code></li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold">7. Ressources Complémentaires <Badge>Pages 1-20</Badge></h2>
                        <div className="pl-10">
                            <p>
                                Documentation officielle et outils utiles.
                            </p>
                            <ul className="list-disc pl-6 my-2 text-blue-300 underline">
                                <li><a href="https://postgis.net/documentation/" target="_blank" rel="noopener noreferrer">Documentation PostGIS</a></li>
                                <li><a href="https://mapserver.org/documentation/" target="_blank" rel="noopener noreferrer">Documentation MapServer</a></li>
                                <li><a href="http://www.maptools.org/ms4w/" target="_blank" rel="noopener noreferrer">MS4W (MapServer for Windows)</a></li>
                            </ul>
                            <Note>
                                Ces ressources sont indispensables pour approfondir les concepts et résoudre les problèmes.
                            </Note>
                        </div>
                    </section>
                </div>
            </Content>
        </div>
    )
}

export default Data