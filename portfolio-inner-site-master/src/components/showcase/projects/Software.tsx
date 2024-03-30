import React from 'react';
// @ts-ignore
import saga from '../../../assets/pictures/projects/software/saga.mp4';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import scroll from '../../../assets/pictures/projects/software/scroll.mp4';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Proyectos</h3>
            <br />
            <p>
                Aqui abajo hablare y mostrare algunos de los proyectos en los que he trabajado los ultimos meses
                y que me ha encantado poderr hacer.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>RetroTheDev</h2>
                <br />
                <p>
                Retro Portafolio Virtual es mi sitio web de portafolio, y también el sitio web en el que te encuentras 
                en este momento. Este proyecto fue una absoluta alegría de hacer y me desafió tanto técnicamente 
                como creativamente. A principios de 2024, supe que quería hacer un portafolio interactivo para ayudar
                 en mi búsqueda de empleo. Eventualmente, se me ocurrió la idea para este sitio a principios de febrero y
                  comencé el desarrollo a principios de marzo. Lo he estado desarrollando 
                junto con mi 4to semestre en la escuela y si estás leyendo esto, significa que ya esta teoricamente terminado
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={computer} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> escenas de blender del desarrollo de la habitacion de la pagina.
                        </sub>
                    </p>
                </div>
                <p>
                Ahora, un rápido desglose técnico del sitio. El sitio web está dividido en dos partes, 
                el sitio 3D y el sitio OS 2D. El sitio 3D utiliza Three.js para renderizar la escena y muestra el sitio
                 2D dentro de él usando un iframe.
                 El sitio OS 2D es un sitio react simple que está alojado.{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://discord.dog/1029594358426648616"
                    >
                        aqui
                    </a>{' '}
                    y funciona como una aplicación web independiente. La renderización real del sitio 
                    2D se realiza utilizandoun renderizador CSS proporcionado por Three.js que 
                    transforma el HTML del sitio 2D con transformaciones CSS 3D para dar la ilusión de 
                    tridimensionalidad.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://discord.dog/1029594358426648616"
                        >
                            <p>
                                <b>[3D Site]</b> 
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://discord.dog/1029594358426648616"
                        >
                            <p>
                                <b>[OS Site]</b> 
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://discord.dog/1029594358426648616"
                        >
                            <p>
                            
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://discord.dog/1029594358426648616"
                        >
                            <p>
                                
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                Estoy pasando por alto muchos detalles a cambio de brevedad, 
                pero planeo hacer un análisis más detallado para aquellos interesados en algún momento en el futuro. 
                Para recibir actualizaciones sobre ese proyecto, siéntete libre de seguirme en discord.{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://discord.dog/1029594358426648616"
                    >
                        @Retro788
                    </a>
                </p>
            </div>
            <div className="text-block">
                <h2>Guntattchment Saga The Sequel</h2>
                <br />
                <p>
                Guntattchment Saga o GSTS es un juego que hice para mi 1er semestre de ingenieria. 
                El juego es un shooter desde arriba basado en oleadas donde avanzas construyendo las armas
                 más extravagantes al adjuntar tantos accesorios como puedas en tu arma. El desarrollo del 
                 juego cesó porque lamentablemente 
                 tenía horarios escolares abrumadores y un profesor me lo intento robar.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={saga} />
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 2: </b> Guntattchment Saga Gameplay
                                demo, 
presentando al personaje principal junto con algunos de nuestros enemigos peones y velocistas..
                            </sub>
                        </p>
                    </div>
                </div>
                <p>
                Guntattchment Saga fue un proyecto realmente divertido en el que trabajar y tuvo una multitud de desafíos. 
                Un desafío interesante que quizás ni siquiera notes fue la rotación de objetos como el arma del jugador. 
                Rotar arte pixelado es algo muy difícil de hacer porque en el mundo de los píxeles estás tratando con una
                 cantidad muy pequeña de información. Incluso un solo píxel mal colocado puede hacer que un sprite se lea
                  de una manera totalmente diferente e inadvertida. Para lidiar con esto, desarrollamos un algoritmo para 
                  priorizar los contornos, mientras que rotábamos el interior con un simple algoritmo de Vecino más Cercano. 
                  Al hacerlo, se obtuvo un sprite relativamente legible al rotar los sprites. Fue un desafío sorprendentemente

                difícil ya que intersectaba tanto el arte como la programación, pero en general fue divertido trabajar en él.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://discord.dog/1029594358426648616"
                        >
                            <p>
                                
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://discord.dog/1029594358426648616"
                        >
                            <p>
                                
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                Desafortunadamente, en este momento el juego no está en un estado en el que se pueda lanzar,
                 por lo que no hay una demo disponible en línea. 
                Si esto cambia en algún momento, sin embargo, se añadirá un enlace al juego aquí.
                </p>
            </div>
           
            <div className="text-block">
    <h2>Pos</h2>
    <br />
    <p>
        Un sistema de punto de venta, utilizado como muestreo digital cerrado interconectado a la red con base de almacenamiento en nube como proyecto particular
    </p>
    <br />
    <div className="captioned-image">
        <img src="https://github.com/mayank091193/vue-quasar-company-profile-website/raw/master/assets/portfolio.png" alt="Portfolio" />
        <p style={styles.caption}>
            <sub>
                <b>Figure 1:</b> escenas de blender del desarrollo de la pagina.
            </sub>
        </p>
    </div>
    
    <br />
    <h3>Links:</h3>
    <ul>
       
        <li>
            <a
                rel="noreferrer"
                target="_blank"
                href="https://discord.dog/1029594358426648616"
            >
                <p>
                    
                </p>
            </a>
        </li>
    </ul>
    <p>
        Estoy pasando por alto muchos detalles a cambio de brevedad, 
        pero planeo hacer un análisis más detallado para aquellos interesados en algún momento en el futuro. 
        Para recibir actualizaciones sobre ese proyecto, siéntete libre de seguirme en discord.{' '}
        <a
            rel="noreferrer"
            target="_blank"
            href="https://discord.dog/1029594358426648616"
        >
            @Retro788
        </a>
    </p>
</div>

<div className="text-block">
    <h2>Pos</h2>
    <br />
    <p>
    Un sistema de registro de ventas digital conectado a una red cerrada, respaldado por almacenamiento en la nube, diseñado como un proyecto personal.
    </p>
    <br />
    <div className="captioned-image">
        <img src="https://user-images.githubusercontent.com/5265663/159091815-5b022ec6-9df4-419b-86f0-85db73ce35c5.png" alt="Portfolio" />
        <p style={styles.caption}>
            <sub>
                <b>Figure 1:</b> escenas del desarrollo de de la pagina.
            </sub>
        </p>
    </div>
    
    <br />
    <h3>Links:</h3>
    <ul>
        
    </ul>
    <p>
        Estoy pasando por alto muchos detalles a cambio de brevedad, 
        pero planeo hacer un análisis más detallado para aquellos interesados en algún momento en el futuro. 
        Para recibir actualizaciones sobre ese proyecto, siéntete libre de seguirme en discord.{' '}
        <a
            rel="noreferrer"
            target="_blank"
            href="https://discord.dog/1029594358426648616"
        >
            @Retro788
        </a>
    </p>
</div>

            <div className="text-block">
    <h2>Pos</h2>
    <br />
    <p>
    Un sistema de registro de ventas digital conectado a una red cerrada, respaldado por almacenamiento en la nube, diseñado como un proyecto personal.
    </p>
    <br />
    <div className="captioned-image">
        <img src="https://camo.githubusercontent.com/357fcb27fb198cc813241804e957a9cd8b034b0d2217be5b104f98f630fbb4bb/68747470733a2f2f692e6962622e636f2f647052724252482f322e706e67" alt="Portfolio" />
        <p style={styles.caption}>
            <sub>d
                <b>Figure 1:</b> escenas de blender del desarrollo de la pagina.
            </sub>
        </p>
    </div>
    
    <br />
    <h3>Links:</h3>
    <ul>
        
    </ul>
    <p>
        Estoy pasando por alto muchos detalles a cambio de brevedad, 
        pero planeo hacer un análisis más detallado para aquellos interesados en algún momento en el futuro. 
        Para recibir actualizaciones sobre ese proyecto, siéntete libre de seguirme en discord.{' '}
        <a
            rel="noreferrer"
            target="_blank"
            href="https://discord.dog/1029594358426648616"
        >
            @Retro788
        </a>
    </p>
</div>

<div className="text-block">
    <h2>RetroTheDev</h2>
    <br />
    <p>
        Implementación de un sistema de punto de venta digital, integrado en una red privada y respaldado por almacenamiento en la nube, como proyecto independiente.
    </p>
    <br />
    <div className="captioned-image">
        <img src="https://raw.githubusercontent.com/afaqurk/screenshots/master/hunts-point-pos/checkout-screen.png" alt="Portfolio" />
        <p style={styles.caption}>
            <sub>
                <b>Figure 1:</b> escenas de blender del desarrollo de la habitacion de la pagina.
            </sub>
        </p>
    </div>
    
    <br />
    <h3>Links:</h3>
    <ul>
        
    </ul>
    <p>
        Estoy pasando por alto muchos detalles a cambio de brevedad, 
        pero planeo hacer un análisis más detallado para aquellos interesados en algún momento en el futuro. 
        Para recibir actualizaciones sobre ese proyecto, siéntete libre de seguirme en discord.{' '}
        <a
            rel="noreferrer"
            target="_blank"
            href="https://discord.dog/1029594358426648616"
        >
            @Retro788
        </a>
    </p>
</div>

            <div className="text-block">
    <h2>RetroTheDev</h2>
    <br />
    <p>
    Desarrollo de un sistema de punto de venta en formato digital, conectado a una red cerrada y respaldado por almacenamiento en la nube, como iniciativa personal.
    </p>
    <br />
    <div className="captioned-image">
        <img src="https://github.com/can101/market-case/raw/main/src/assets/images/docs/png/img_1.png" alt="Portfolio" />
        <p style={styles.caption}>
            <sub>
                <b>Figure 1:</b> escenas de blender del desarrollo de la habitacion de la pagina.
            </sub>
        </p>
    </div>
   
    <br />
    <h3>Links:</h3>
    <ul>
        
    </ul>
    <p>
        Estoy pasando por alto muchos detalles a cambio de brevedad, 
        pero planeo hacer un análisis más detallado para aquellos interesados en algún momento en el futuro. 
        Para recibir actualizaciones sobre ese proyecto, siéntete libre de seguirme en discord.{' '}
        <a
            rel="noreferrer"
            target="_blank"
            href="https://discord.dog/1029594358426648616"
        >
            @Retro788
        </a>
    </p>
</div>




            <div className="text-block">
                <h2>Skip the Scroll</h2>
                <br />
                <p>
                Mientras trabajaba en Hover, pasé mucho tiempo en las páginas de problemas de GitHub buscando respuestas
                 y soluciones a los problemas con los que me encontraba. Siempre me encontraba revisando los comentarios 
                 tratando de encontrar la respuesta correcta, que generalmente tenía más votos positivos y reacciones 
                 positivas. Con esa información, decidí crear una extensión de Chrome muy simple que revisara todos los
                  comentarios en la página, los ordenara por reacciones 
                positivas y luego te permitiera recorrerlos desde las más positivas hasta las menos positivas.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={scroll} />
                    <p style={styles.caption}>
                       
                    </p>
                </div>
                <p>
                    La extensión es de código abierto y actualmente está disponible en la tienda web de Chrome.
                    Skip the Scroll obviamente no es un proyecto con un alcance masivo, pero fue divertido de hacer y 
                    sumergirse en el mundo de las extensiones del navegador. Quería mostrarlo ya que es una herramienta 
                    para desarrolladores y quiero darle algo de visibilidad para aquellos que puedan encontrarla útil.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://discord.dog/1029594358426648616"
                        >
                            <p>
                                <b>[Discord]</b> - Skip the Scroll Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://discord.dog/1029594358426648616"
                        >
                            <p>
                                <b>[Discord]</b> - Skip the Scroll
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                Si eres un desarrollador y también te has encontrado desplazándote a través de comentario tras comentario 
                en GitHub diciendo "yo también tengo este problema...", entonces te recomiendo encarecidamente que pruebes
                 Skip the Scroll para ahorrarte algo de tu precioso tiempo. Si te gusta,
                 siéntete libre de marcarlo con una estrella en GitHub y calificarlo en la tienda web de Chrome.
                </p>
            </div>
            <div className="text-block">
    <h2>Sistema de tickets de SpaceNack</h2>
    <br />
    <p>
    Creación de un sistema de gestión de ventas digital, conectado a una red interna y con soporte de almacenamiento en la nube, como proyecto propio..
    </p>
    <br />
    <div className="captioned-image">
        <img src="https://private-user-images.githubusercontent.com/86130893/274350750-827455a7-e800-4d4f-8551-2adf2caac720.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTA0MzY1NDMsIm5iZiI6MTcxMDQzNjI0MywicGF0aCI6Ii84NjEzMDg5My8yNzQzNTA3NTAtODI3NDU1YTctZTgwMC00ZDRmLTg1NTEtMmFkZjJjYWFjNzIwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzE0VDE3MTA0M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWJiYmUwYTg2Yjg5Y2U5NTZkMTBmMmExY2Q3YjFhMDZmMzRjNDdhZGFhNTAyNGQ1ZDg2ZWNhYmMxMWM1YjY3MzMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.loNnURvczRwElrxh7F-JDfB55ttIom1DJVHzx6EzyKk" alt="Guntattchment Saga The Sequel" />
        <div style={styles.caption}>
            <p>
                
            </p>
        </div>
    </div>
</div>

<div className="text-block">
    <h2>ChatBot</h2>
    <br />
    <p>
        Potenciado la v1. del chatbot de Septiembre.IA
    </p>
    <br />
    <div className="captioned-image">
        <img src="https://user-images.githubusercontent.com/98614666/232768610-fdeada85-3d21-4cf9-915e-a0ec9f3b7a9f.png" alt="Guntattchment Saga The Sequel" />
        <div style={styles.caption}>
            <p>
                
            </p>
        </div>
    </div>
    
</div>
<div className="text-block">
    <h2>Clone de React de YOUTUBE</h2>
    <br />
    <p>
        Un Clon que incrementa la potencia de desarrollo de red lang en videos de youtube que permite mejor rendimiento
        en la captura de datos y descripcion de movimientos programados.
    </p>
    <br />
    <div className="captioned-image">
        <img src="https://github.com/manikandanraji/youtubeclone-frontend/raw/master/screenshots/video.png" alt="Guntattchment Saga The Sequel" />
        <div style={styles.caption}>
            <p>
                
            </p>
        </div>
    </div>
   
</div>
<div className="text-block">
    <h2>Clon de Whatsapp con flutter</h2>
    <br />
    <p>
        Creado especificamente para poder capturar analisis de datos, y mejorar infraestructura de aplicaciones de chat
        mediante flutter y NLS
    </p>
    <br />
    <div className="captioned-image">
        <img src="https://github.com/iampawan/FlutterWhatsAppClone/raw/master/ss2.png" alt="Guntattchment Saga The Sequel" />
        <div style={styles.caption}>
            <p>
                
            </p>
        </div>
    </div>
    
</div>
<div className="text-block">
    <h2>Adidas Sqrel Page</h2>
    <br />
    <p>
        Desarrolle la pagina de Adidas Sqrel, durante la temporada de 2022 para verano
    </p>
    <br />
    <div className="captioned-image">
        <img src="https://github.com/haldaranup/adidas-clone/raw/main/src/assets/homepage.png" alt="Guntattchment Saga The Sequel" />
        <div style={styles.caption}>
            <p>
                
            </p>
        </div>
    </div>
    
</div>














            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
