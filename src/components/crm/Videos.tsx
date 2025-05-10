import GoBackButton from "@/ui/GoBackButton";

export default function Videos() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 sm:pt-24 lg:px-8 lg:pt-32 border rounded-lg border-gray-200 shadow-lg">
      <GoBackButton />
      <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-green-500">
        🎥 Videos Tutoriales
      </h1>
      <p className="text-gray-700 max-w-lg text-center mt-2">
        Aprende a utilizar nuestro CRM con estos videos explicativos.
      </p>
      <iframe
        className="mt-4"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Video tutorial"
        allowFullScreen
      ></iframe>
    </div>
    </div>
  );
}
