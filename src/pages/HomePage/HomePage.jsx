import "./../HomePage/HomePage.css"
const HomePage = () => {
    return (
        <div className="homePage">
            <body>
                <header class="mdc-top-app-bar">
                    <div class="mdc-top-app-bar__row">
                        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                            <span class="mdc-top-app-bar__title">Plataforma de Pruebas con Axios</span>
                        </section>
                    </div>
                </header>

                <main class="mdc-layout-grid">
                    <div class="mdc-layout-grid__inner">
                        <section class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
                            <div class="mdc-card">
                                <h2 class="mdc-typography--headline5">Características Principales</h2>
                                <ul class="mdc-list">
                                    <li class="mdc-list-item"><span class="mdc-list-item__text"><strong>Interfaz Intuitiva y Amigable:</strong> Nuestra plataforma ofrece una interfaz sencilla y fácil de usar, donde los desarrolladores pueden configurar rápidamente sus peticiones.</span></li>
                                    <li class="mdc-list-item"><span class="mdc-list-item__text"><strong>Compatibilidad con Diferentes Métodos HTTP:</strong> Permite realizar peticiones GET, POST, PUT, DELETE, y más, cubriendo todas las necesidades básicas y avanzadas de integración con APIs.</span></li>
                                    <li class="mdc-list-item"><span class="mdc-list-item__text"><strong>Visualización Clara de las Respuestas:</strong> Las respuestas de la API se muestran de manera clara y estructurada, facilitando la interpretación de los datos recibidos.</span></li>
                                    <li class="mdc-list-item"><span class="mdc-list-item__text"><strong>Manejo de Errores:</strong> Nuestra web identifica y muestra detalladamente los errores en las peticiones, ayudando a los desarrolladores a depurar problemas rápidamente.</span></li>
                                    <li class="mdc-list-item"><span class="mdc-list-item__text"><strong>Soporte para Autenticación:</strong> Puedes probar peticiones que requieran autenticación mediante token, cabeceras personalizadas, y otros métodos comunes de seguridad.</span></li>
                                </ul>
                            </div>
                        </section>

                        <section class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
                            <div class="mdc-card">
                                <h2 class="mdc-typography--headline5">¿Por Qué Utilizar Nuestra Plataforma?</h2>
                                <p class="mdc-typography--body1"><strong>Eficiencia en el Desarrollo:</strong> Ahorra tiempo al permitirte probar y ajustar tus peticiones en un entorno controlado antes de implementarlas en tu aplicación.</p>
                                <p class="mdc-typography--body1"><strong>Facilidad de Uso:</strong> No necesitas configurar entornos complicados ni instalar herramientas adicionales; todo lo que necesitas está disponible directamente en nuestro sitio web.</p>
                                <p class="mdc-typography--body1"><strong>Educación y Aprendizaje:</strong> Ideal para desarrolladores en formación, ofreciendo un espacio seguro para experimentar y aprender sobre las peticiones HTTP y la interacción con APIs.</p>
                            </div>
                        </section>

                        <section class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
                            <div class="mdc-card">
                                <h2 class="mdc-typography--headline5">Cómo Empezar</h2>
                                <ol class="mdc-list mdc-list--ordered">
                                    <li class="mdc-list-item"><span class="mdc-list-item__text"><strong>Registro Rápido:</strong> Crea una cuenta en nuestra web en pocos minutos.</span></li>
                                    <li class="mdc-list-item"><span class="mdc-list-item__text"><strong>Configura tu Petición:</strong> Selecciona el tipo de petición, ingresa la URL de la API, y configura los parámetros necesarios.</span></li>
                                    <li class="mdc-list-item"><span class="mdc-list-item__text"><strong>Envía y Revisa:</strong> Envía la petición y revisa la respuesta detallada, ajusta según sea necesario.</span></li>
                                </ol>
                            </div>
                        </section>
                    </div>
                </main>

                <footer class="mdc-card">
                    <div class="mdc-card__content">
                        <p class="mdc-typography--body1">Estamos comprometidos a facilitar el trabajo de los desarrolladores y mejorar sus habilidades en la integración de APIs. ¡Visítanos y descubre cómo nuestra herramienta puede transformar tu flujo de trabajo!</p>
                        <p class="mdc-typography--headline6"><strong>Explora nuestra web y comienza a optimizar tus peticiones hoy mismo.</strong></p>
                        <p class="mdc-typography--body1">¡Gracias por elegir nuestra plataforma!</p>
                    </div>
                </footer>

                <script src="https://unpkg.com/@material/mdc-top-app-bar/dist/mdc.topAppBar.min.js"></script>
                <script src="https://unpkg.com/@material/mdc-list/dist/mdc.list.min.js"></script>
                <script src="https://unpkg.com/@material/mdc-card/dist/mdc.card.min.js"></script>
            </body>
        </div>

    )
}

export default HomePage