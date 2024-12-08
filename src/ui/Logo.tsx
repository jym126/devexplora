export default function Logo() {
  return (
    <>
      <div className="flex items-center space-x-4">
        <div className="absolute w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full flex items-center justify-center shadow-lg"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-extrabold text-gray-800">
            Dev<span className="text-blue-500">Explora</span>
          </h1>
          <p className="text-sm font-extralight text-gray-700 text-center">Explorando el Desarrollo</p>
        </div>
      </div>
    </>
  );
}
