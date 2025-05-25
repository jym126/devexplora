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
      <div className="px-6 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="gap-x-6">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-white">
                🚧 Estamos construyendo algo increíble
              </h2>
              <div className="max-w-2xl mx-auto p-6 text-gray-800">
                <h1 className="text-3xl font-bold mb-4">
                  🚧 Estamos construyendo algo increíble
                </h1>
                <p className="mb-6">
                  En este momento, nuestro equipo está trabajando arduamente
                  para lanzar una plataforma de tecnología que transformará la
                  manera en que interactúas con la innovación.
                </p>

                <h2 className="text-2xl font-semibold mb-2">
                  🔧 ¿Qué puedes esperar?
                </h2>
                <ul className="list-disc list-inside mb-6 space-y-2">
                  <li>
                    Soluciones inteligentes para tus desafíos tecnológicos
                  </li>
                  <li>Herramientas intuitivas y de alto rendimiento</li>
                  <li>
                    Seguridad, escalabilidad y diseño de última generación
                  </li>
                </ul>

                <h2 className="text-2xl font-semibold mb-2">🕒 ¡Falta poco!</h2>
                <p className="mb-4">
                  Estamos afinando los últimos detalles para ofrecerte una
                  experiencia sólida, segura y sorprendente.
                </p>

                <p className="mb-6 font-medium">
                  Gracias por tu paciencia.
                  <br />
                  Muy pronto estarás explorando una nueva forma de hacer
                  tecnología.
                </p>

                <h2 className="text-2xl font-semibold mb-2">
                  📬 ¿Quieres ser el primero en enterarte del lanzamiento?
                </h2>
                <p>
                  <a href="#" className="text-blue-600 hover:underline">
                    Suscríbete aquí
                  </a>{" "}
                  o síguenos en nuestras redes sociales.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all border border-gray-200"
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <a
                      href={product.link}
                      className="text-blue-600 font-medium hover:underline"
                    >
                      Saber más →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
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
