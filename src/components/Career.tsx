import { useState } from "react";
import { Field, Label, Switch } from "@headlessui/react";
import emailjs from "emailjs-com";

export default function Career() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreed) {
      setStatus("Por favor, acepte las politicas de privacidad.");
      return;
    }

    // EmailJS configuration
    const serviceID = "service_6k5ktpl";
    const templateID = "template_hia7dee";
    const userID = "s_QfeXZJLKKiwrNGY";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("Mensaje enviado correctamente!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setStatus("Error al enviar el mensaje. Por favor intentelo de nuevo más tarde.");
      });
  };

  const vacantes = [
    {
      titulo: "Desarrollador/a Frontend (React)",
      modalidad: "100% remoto · Tiempo completo",
      descripcion:
        "Buscamos a alguien con experiencia en React y pasión por crear interfaces limpias y eficientes.",
      link: "/vacantes/frontend",
    },
    {
      titulo: "Diseñador/a UI/UX",
      modalidad: "Remoto/Híbrido · Freelance o permanente",
      descripcion:
        "Si te gusta diseñar experiencias digitales intuitivas y modernas, esta posición es para ti.",
      link: "/vacantes/uiux",
    },
  ];

  return (
    <div className="bg-white text-gray-800 px-6 py-12 max-w-5xl mx-auto">
      {/* Sección de Introducción */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Únete al equipo de DevExplorar
        </h1>
        <p className="text-lg">
          En DevExplorar, creemos en el poder de la tecnología para transformar
          el mundo. Si compartes esta pasión, ¡queremos conocerte!
        </p>
      </section>

      {/* Sección de Beneficios */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          ¿Por qué trabajar con nosotros?
        </h2>
        <ul className="grid md:grid-cols-2 gap-6">
          <li className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <strong className="block text-lg">Trabajo remoto y flexible</strong>
            <p>Adaptamos el trabajo a tu estilo de vida, no al revés.</p>
          </li>
          <li className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <strong className="block text-lg">Ambiente colaborativo</strong>
            <p>Aprende, enseña y crece en un equipo con talento diverso.</p>
          </li>
          <li className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <strong className="block text-lg">Proyectos con impacto</strong>
            <p>
              Desarrollamos productos que marcan la diferencia en la vida de
              miles de personas.
            </p>
          </li>
          <li className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <strong className="block text-lg">Crecimiento profesional</strong>
            <p>Acceso a formaciones, mentorías y oportunidades de liderazgo.</p>
          </li>
        </ul>
      </section>

      {/* Sección de Vacantes */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Vacantes actuales</h2>
        <div className="grid gap-4">
          {vacantes.map((vacante, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-sm bg-white"
            >
              <h3 className="text-xl font-bold">{vacante.titulo}</h3>
              <p className="text-gray-600">{vacante.modalidad}</p>
              <p className="mt-2">{vacante.descripcion}</p>
              <a
                href={vacante.link}
                className="text-blue-600 hover:underline mt-2 inline-block"
              >
                Ver detalles
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Formulario de Contacto */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          ¿Te interesa? ¡Contáctanos!
        </h2>
        <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm/6 font-semibold text-gray-900"
                    >
                      Nombre
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm/6 font-semibold text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm/6 font-semibold text-gray-900"
                    >
                      Mensaje y Número de vacante solicitada
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      />
                    </div>
                  </div>
                  <Field className="flex gap-x-4 sm:col-span-2">
                    <div className="flex h-6 items-center">
                      <Switch
                        checked={agreed}
                        onChange={setAgreed}
                        className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
                      >
                        <span className="sr-only">Aceptar las políticas</span>
                        <span
                          aria-hidden="true"
                          className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                        />
                      </Switch>
                    </div>
                    <Label className="text-sm/6 text-gray-600">
                      Al seleccionar esto, acepta nuestrar{" "}
                      <a href="/privacyPolicy" className="font-semibold text-indigo-600">
                        política de&nbsp;privacidad.
                      </a>
                    </Label>
                  </Field>
                </div>
                <div className="mt-10">
                  <button
                    type="submit"
                    className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase"
                  >
                    Enviar Solicitud
                  </button>
                </div>
                {status && (
                  <p className="mt-4 text-center text-lg text-gray-900">{status}</p>
                )}
              </form>
        <p className="text-sm mt-4 text-gray-500">
          También puedes escribirnos directamente a{" "}
          <a href="mailto:info@devexplora.com" className="underline">
            info@devexplora.com
          </a>
        </p>
      </section>
    </div>
  );
}
