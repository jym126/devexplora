import GoBackButton from "@/ui/GoBackButton";
import { useState } from "react";

interface Plan {
  name: string;
  price: string;
  features: string[];
  mostPopular?: boolean;
}

const plans: Plan[] = [
  {
    name: "Básico",
    price: "Gratis",
    features: ["Gestión de clientes", "Acceso limitado", "1 usuario"],
  },
  {
    name: "Pro",
    price: "€19.99 / mes",
    features: ["Gestión avanzada", "Reportes", "Hasta 5 usuarios"],
    mostPopular: true,
  },
  {
    name: "Empresa",
    price: "€49.99 / mes",
    features: ["Todas las funciones", "Soporte 24/7", "Usuarios ilimitados"],
  },
];

export default function Subscribe() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 sm:pt-24 lg:px-8 lg:pt-32 border rounded-lg border-gray-200 shadow-lg">
      <GoBackButton />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">💳 Suscribirse</h1>
        <p className="text-gray-700 max-w-lg text-center mt-2">
          Para seguir utilizando nuestra plataforma, elige un plan de
          suscripción.
        </p>

        {/* Lista de Planes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-6 border rounded-lg shadow-md ${
                plan.mostPopular
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200"
              }`}
            >
              {plan.mostPopular && (
                <p className="text-sm font-semibold text-blue-600">
                  Más popular
                </p>
              )}
              <h2 className="text-xl font-bold text-gray-800">{plan.name}</h2>
              <p className="text-lg text-gray-700 font-semibold">
                {plan.price}
              </p>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">
                    ✅ {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setSelectedPlan(plan)}
                className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Elegir Plan
              </button>
            </div>
          ))}
        </div>

        {/* Modal de Confirmación */}
        {selectedPlan && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center p-6">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
              <h2 className="text-xl font-bold text-gray-800">
                Confirmar {selectedPlan.name}
              </h2>
              <p className="text-gray-600 mt-2">
                Vas a seleccionar el plan <b>{selectedPlan.name}</b> por{" "}
                <b>{selectedPlan.price}</b>.
              </p>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setSelectedPlan(null)}
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
                >
                  Cancelar
                </button>
                <a
                  href="http://devexplora.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition"
                >
                  Suscribirse
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
