import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";

export default function LearnJavaScript() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
        <p className="text-base/7 font-semibold text-indigo-600">
          Aprende JavaScript
        </p>
        <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          JavaScript para Principiantes
        </h1>
        <p className="mt-6 text-xl/8">
          Domina los fundamentos del lenguaje más popular para el desarrollo
          web. Aprende paso a paso desde conceptos básicos hasta construir
          aplicaciones dinámicas.
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            Este curso está diseñado para principiantes que desean comprender
            cómo funciona JavaScript. Descubre cómo interactuar con páginas web,
            manejar datos, y mucho más.
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-indigo-600"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Tipos de Datos.
                </strong>{" "}
                Aprende sobre variables, números, cadenas y cómo manipularlos en
                tus proyectos.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-indigo-600"
              />
              <span>
                <strong className="font-semibold text-gray-900">Bucles.</strong>{" "}
                Controla flujos repetitivos de datos y automatiza tareas comunes
                en tus scripts.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-indigo-600"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Eventos.
                </strong>{" "}
                Aprende a interactuar con los usuarios mediante formularios,
                clics y otros eventos del navegador.
              </span>
            </li>
          </ul>
          <p className="mt-8">
            Con este curso, estarás listo para dar el siguiente paso en tu
            carrera como desarrollador web. Entenderás no solo la teoría, sino
            también cómo aplicarla en proyectos reales.
          </p>
          <h2 className="mt-16 text-pretty text-3xl font-semibold tracking-tight text-gray-900">
            De Principiante a Experto en Poco Tiempo
          </h2>
          <p className="mt-6">
            Este curso intensivo cubre los aspectos más importantes de
            JavaScript en un formato práctico y fácil de seguir. Acompañado de
            ejemplos claros y ejercicios aplicables, avanzarás rápidamente.
          </p>
          <figure className="mt-10 border-l border-indigo-600 pl-9">
            <blockquote className="font-semibold text-gray-900">
              <p>
                “Gracias a este curso entendí cómo funciona JavaScript y ahora
                puedo crear aplicaciones interactivas desde cero.”
              </p>
            </blockquote>
            <figcaption className="mt-6 flex gap-x-4">
              <img
                alt="Estudiante satisfecho"
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="size-6 flex-none rounded-full bg-gray-50"
              />
              <div className="text-sm/6">
                <strong className="font-semibold text-gray-900">
                  María Pérez
                </strong>{" "}
                – Estudiante
              </div>
            </figcaption>
          </figure>
          <p className="mt-10">
            JavaScript es el lenguaje de programación que todo desarrollador web
            necesita dominar. Con esta base, estarás listo para explorar
            frameworks avanzados como React y Node.js.
          </p>
        </div>
        <figure className="mt-16">
          <img
            alt="Ejemplo de código JavaScript"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
            className="aspect-video rounded-xl bg-gray-50 object-cover"
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm/6 text-gray-500">
            <InformationCircleIcon
              aria-hidden="true"
              className="mt-0.5 size-5 flex-none text-gray-300"
            />
            Aprende con ejemplos prácticos y relevantes.
          </figcaption>
        </figure>
        <div className="mt-16 max-w-2xl">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900">
            Todo lo que necesitas para empezar
          </h2>
          <p className="mt-6">
            Este curso cubre desde la instalación de herramientas hasta la
            creación de tus primeros programas. Aprenderás las mejores prácticas
            y consejos para escribir código eficiente y escalable.
          </p>
          <p className="mt-8">
            No importa si nunca has programado antes, este curso está diseñado
            para que todos puedan aprender. ¡Empieza tu camino como
            desarrollador hoy mismo!
          </p>
        </div>
      </div>
    </div>
  );
}
