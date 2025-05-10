import { useNavigate } from "react-router-dom";

export default function GoBackButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="rounded-md bg-indigo-600 px-10 py-2 sm:text-xl font-black leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase text-center cursor-pointer"
    >
      Volver
    </button>
  );
}
