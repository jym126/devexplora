import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function AppDev() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              alt="Desarrollo de Aplicaciones Web"
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
              className="absolute inset-0 size-full bg-gray-50 object-cover"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-20 xl:w-1/2">
            <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Desarrollo de Aplicaciones Web a tu Medida
            </h1>
            <p className="mt-6 text-xl/8 text-gray-700">
              Transformamos ideas en soluciones digitales. Diseñamos y
              desarrollamos aplicaciones web personalizadas que optimizan
              procesos y resuelven problemas complejos, adaptándonos a las
              necesidades de tu negocio.
            </p>
            <div className="mt-10 max-w-xl text-base/7 text-gray-700 lg:max-w-none">
              <p>
                En DevExplora, combinamos creatividad y tecnología para ofrecer
                soluciones innovadoras. Desde interfaces intuitivas hasta
                sistemas robustos, nuestras aplicaciones son herramientas
                diseñadas para el éxito.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Despliegue rápido en la nube.
                    </strong>{" "}
                    Nuestras aplicaciones están diseñadas para ser fácilmente
                    implementadas en entornos modernos, garantizando
                    accesibilidad y escalabilidad.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Seguridad garantizada.
                    </strong>{" "}
                    Integramos certificados SSL y las mejores prácticas para
                    proteger tus datos y los de tus usuarios.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Respaldo de datos.
                    </strong>{" "}
                    Ofrecemos soluciones con copias de seguridad automáticas
                    para mantener la continuidad de tu negocio en todo momento.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Nuestra experiencia abarca desde el desarrollo frontend
                intuitivo hasta la implementación backend confiable. Creamos
                soluciones diseñadas para crecer contigo y adaptarse a los retos
                del futuro.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                ¿Sin servidor? No hay problema.
              </h2>
              <p className="mt-6">
                Ofrecemos aplicaciones basadas en arquitecturas serverless que
                optimizan costos y simplifican el mantenimiento. ¡Deja que nos
                encarguemos de la tecnología para que puedas enfocarte en lo que
                realmente importa!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
