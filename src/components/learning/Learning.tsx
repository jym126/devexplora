export default function Learning() {
  const products = [
    {
      name: "Fundamentos de JavaScript",
      description:
        "Prepárate para sumergirte en el fascinante universo de la programación web con JavaScript.",
      link: "/javascript",
    },
    {
      name: "API REST con Node.js",
      description:
        "Adquiero los conceptos fundamentales del desarrollo de APIs RESTful con Node.js y Express.",
      link: "/apirestful",
    },
    {
      name: "React.js para Principiantes",
      description:
        "Aprende React desde cero: componentes, estado, hooks, rutas y más. Crea aplicaciones web dinámicas y escalables con una base sólida.",
      link: "/react",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8">
        📚Nuestros Cursos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all border border-gray-200"
          >
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
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
  );
}

