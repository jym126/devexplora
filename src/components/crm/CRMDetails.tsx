import GoBackButton from "@/ui/GoBackButton";
import { Link } from "react-router-dom";

export default function CRMDetails() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 sm:pt-24 lg:px-8 lg:pt-32 border rounded-lg border-gray-200 shadow-lg">
      <GoBackButton />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Descubre nuestro CRM
        </h1>
        <p className="text-gray-600 mt-2 text-center max-w-lg">
          Optimiza la gestión de clientes con nuestra plataforma. Elige una
          opción para más detalles. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maxime vel laudantium eius similique. Atque dolorum qui aperiam iusto aliquid consectetur, pariatur, perspiciatis accusamus consequuntur tempora maiores assumenda sequi itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatum voluptatem dicta molestiae expedita! Vitae repellat alias asperiores quia delectus expedita soluta obcaecati autem reiciendis, molestias rem cum. Minus.
        </p>

        <div className="mt-6 space-y-4">
          <Link
            to="/crm/free-trial"
            className="block px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition text-center"
          >
            🚀 Prueba Gratuita
          </Link>
          <Link
            to="/crm/videos"
            className="block px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700 transition text-center"
          >
            🎥 Videos Tutoriales
          </Link>
          <Link
            to="/crm/subscribe"
            className="block px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-700 transition text-center"
          >
            💳 Suscribirse
          </Link>
        </div>
      </div>
    </div>
  );
}
