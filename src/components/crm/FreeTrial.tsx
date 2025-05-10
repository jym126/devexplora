import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import GoBackButton from "@/ui/GoBackButton";

export default function FreeTrial() {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
  });

  // Estado para manejar mensajes de éxito o error
  const [message, setMessage] = useState("");

  // Manejar cambios en los campos del formulario
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Enviar los datos al servidor
      const response = await axios.post(
        "http://localhost:4000/api/clients/register",
        formData
      );

      // Mostrar mensaje de éxito
      setMessage(response.data.message);

      // Limpiar el formulario después de enviar
      setFormData({
        companyName: "",
        email: "",
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Capturar errores específicos de Axios
        setMessage(error.response?.data.message || "Error al registrar el cliente");
      } else if (error instanceof Error) {
        // Capturar errores generales de JavaScript
        setMessage(error.message);
      } else {
        setMessage("Error desconocido al registrar el cliente");
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 sm:pt-24 lg:px-8 lg:pt-32 border rounded-lg border-gray-200 shadow-lg">
      <GoBackButton />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-blue-500">🚀 Prueba Gratuita</h1>
        <p className="text-gray-700 max-w-lg text-center mt-2">
          Prueba nuestra plataforma sin costo durante 14 días. ¡Explora todas sus funciones sin compromiso!
        </p>
      </div>
      <div style={styles.card}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="companyName" style={styles.label}>
              Nombre de la empresa:
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>
              Correo electrónico:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.button}>
            Registrar Cliente
          </button>
        </form>

        {/* Mostrar mensaje de éxito o error */}
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

// Estilos para el componente
const styles = {
  card: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    fontSize: "16px",
    color: "#666",
    marginBottom: "8px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    boxSizing: "border-box" as const,
  },
  button: {
    padding: "12px 24px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  message: {
    marginTop: "20px",
    fontSize: "16px",
    color: "#28a745",
    textAlign: "center" as const,
  },
};
