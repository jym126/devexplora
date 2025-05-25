export default function Page404() {
  const products = [
    {
      name: "Aplicaciones a Medida",
      description: "Desarrollo de software personalizado para tu negocio.",
      link: "/a-medida",
    },
  ];

  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <div className="max-w-2xl mx-auto p-6 text-gray-800">
        <h1 className="text-3xl font-bold mb-4 text-white">
          🚧 Estamos construyendo algo increíble
        </h1>
        <p className="mb-6 text-white">
          En este momento, nuestro equipo está trabajando arduamente para lanzar
          una plataforma de tecnología que transformará la manera en que
          interactúas con la innovación.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-white">🔧 ¿Qué puedes esperar?</h2>
        <ul className="list-disc list-inside mb-6 space-y-2 text-white">
          <li>Soluciones inteligentes para tus desafíos tecnológicos</li>
          <li>Herramientas intuitivas y de alto rendimiento</li>
          <li>Seguridad, escalabilidad y diseño de última generación</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2 text-white">🕒 ¡Falta poco!</h2>
        <p className="mb-4 text-white">
          Estamos afinando los últimos detalles para ofrecerte una experiencia
          sólida, segura y sorprendente.
        </p>
        <p className="mb-6 font-medium text-white">
          Gracias por tu paciencia.
          <br />
          Muy pronto estarás explorando una nueva forma de hacer tecnología.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-white">
          📬 ¿Quieres ser el primero en enterarte del lanzamiento?
        </h2>
        <p className="mb-4 text-white">
          <a href="/contact" className="text-blue-600 hover:underline">
            Contáctanos aquí
          </a>{" "}
          o síguenos en nuestras redes sociales.
        </p>
      </div>

      <svg
        viewBox="0 0 1024 1024"
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
      >
        <circle
          r={512}
          cx={512}
          cy={512}
          fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
