import { useState } from "react";
import { Field, Label, Switch } from "@headlessui/react";
import emailjs from "emailjs-com";

export default function Contact() {
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
    const serviceID = "service_w5he7q4";
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

  return (
    <div className="isolate px-6 py-24 sm:py-32 lg:px-8 max-w-7xl mx-auto">
      <div
        aria-hidden="true"
        className=""
      >
        <div/>
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Contáctanos
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">
          ¿Tienes alguna pregunta, comentario o necesitas asistencia? Estamos
          aquí para ayudarte. ¡No dudes en ponerte en contacto con nosotros!
        </p>
      </div>
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
              Correo
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
              Mensaje
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
              <a href="#" className="font-semibold text-indigo-600">
                política de&nbsp;privacidad.
              </a>
              .
            </Label>
          </Field>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase"
          >
            Hablemos
          </button>
        </div>
        {status && (
          <p className="mt-4 text-center text-lg text-gray-900">{status}</p>
        )}
      </form>
    </div>
  );
}
