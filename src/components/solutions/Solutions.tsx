export default function Solutions() {
  const products = [
    {
      name: "CRM para Empresas",
      description:
        "Optimiza la gestión de clientes y mejora la eficiencia operativa.",
      link: "/crm/details",
    },
    {
      name: "Gestión de Campamentos",
      description:
        "Administra participantes, actividades y logística con facilidad.",
      link: "/campamentos",
    },
    {
      name: "Gestión de Restaurantes",
      description: "Organiza comandas, mesas y pedidos de manera eficiente.",
      link: "/restaurantes",
    },
    {
      name: "CRM para Empresas de Seguridad",
      description:
        "Solución especializada para la gestión de seguridad y vigilancia.",
      link: "/crm-seguridad",
    },
    {
      name: "Portal Inmoviliario",
      description: "Administración de fincas y propiedades en una plataforma intuitiva y elegante.",
      link: "/inmobiliaria",
    },
    {
      name: "Aplicaciones a Medida",
      description: "Desarrollo de software personalizado para tu negocio.",
      link: "/a-medida",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8">
        🧩Nuestras Soluciones
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
