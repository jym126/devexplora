export default function Resources() {
  const products = [
    {
      name: "Aplicaciones a Medida",
      description: "Desarrollo de software personalizado para tu negocio.",
      link: "/a-medida",
    },
  ];

  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="gap-x-6">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-white">
                📂 Recursos
              </h2>
              <p className="text-lg text-white mb-6">
                Documentación, guías, herramientas y artículos pensados para
                desarrolladores, diseñadores y emprendedores digitales.
                Artículos del blog con buenas prácticas, tutoriales y
                tendencias. Plantillas gratuitas para web, diseño y wireframes.
                Mini-tools: utilidades online para desarrolladores. Casos de
                éxito y estudios de proyectos. Todo lo que necesitas para
                mantenerte actualizado y seguir creando.
              </p>
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
