export default function About() {
  return (
    <main className="mt-5 m-auto p-3 flex flex-col gap-2 xl:p-40">
        <section>

      <h3 className="text-5xl lg:text-6xl my-4 font-semibold text-transparent bg-gradient-to-br from-white to-gray-950 bg-clip-text">
          {"Acerca de"}
        </h3>
      <p className="font-light text-md">
        Esta pagina en un principio estaba pensado con la idea de ver mis series y películas de forma
        rápida, directa y con una interfaz amigable. Al principio, lo esta pagina era mi portafolio en proceso de creacion
        como un portafolio personal, pero a lo largo del proceso pasó por varios
        cambios y evoluciones, y me siento muy orgulloso de lo que se ha
        convertido. Originalmente iba a ser una webapp solo para películas, pero
        decidí integrar también series para ofrecer más contenido. Aunque me
        siento muy satisfecho con el resultado, siento que siempre hay algo por
        mejorar, si encuentras algún error o tienes sugerencias de responsive o
        diseño, estaré encantado de recibir tus comentarios en mi GitHub.
      </p>
      <p className="mt-4 mb-2 text-md">
        También se creo con la idea ser diferente de las demás plataformas gratuitas de streaming, las cuales siempre creí que abusaban de los anuncios y la pestañas emergentes, al final no puede reducir los anuncios al <strong>100x100</strong>  {" "} ya que de cierto modo estos servidores necesitan de alguna manera costear sus gastos, y la mejor forma de hacerlo es por medio de anuncios. La diferencia es que servidores como <strong>Vidlinkpro</strong> no abusa de esto y lo que hace principalmente diferente.
      </p>
      <p className="text-sm">De igual manera recomiendo tener algún tipo de BLOCK ADS en tu navegador, yo principalmente utilizo <strong>Ghostery</strong>.</p>
        </section>
      <div className="divider"></div>
      <section className="mt-5">
        <h4 className="font-bold text-4xl">Tecnologías </h4>
        <p>
          Este proyecto utiliza tecnologías mordernas, como{" "}
          <strong>Vite</strong>, <strong>React</strong>,{" "}
          <strong>React Router</strong>, <strong>JavaScript</strong>,{" "}
          <strong>Node.js</strong>, <strong>Tailwind CSS</strong>, Estas
          herramientas permiten que el desarrollo sea eficiente y flexible, lo
          que me ha permitido crear una interfaz atractiva y funcional.
        </p>
      </section>
    </main>
  );
}
