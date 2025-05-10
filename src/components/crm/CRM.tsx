import { useNavigate } from "react-router-dom";

const Solutions = () => {
  const navigate = useNavigate();

  // Función para manejar el clic en el botón de descripción
  const handleDescriptionClick = () => {
    navigate("/description"); // Redirige a la ruta /description
  };

  // Función para manejar el clic en el botón de prueba gratuita
  const handleFreeTrialClick = () => {
    navigate("/client"); // Redirige a la ruta /client
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>¡Potencia tu negocio con nuestro CRM!</h2>
      <p style={styles.subtitle}>
        La solución todo en uno para gestionar clientes, ventas y proyectos.
      </p>

      {/* Descripción corta */}
      <p style={styles.description}>
        Nuestro CRM te ayuda a organizar y automatizar tus procesos, mejorar la
        relación con tus clientes y aumentar tus ventas.
      </p>

      {/* Botón para ver la descripción (redirige a /description) */}
      <button onClick={handleDescriptionClick} style={styles.button}>
        Ver descripción
      </button>

      {/* Botón para prueba gratuita (redirige a /client) */}
      <button onClick={handleFreeTrialClick} style={styles.buttonPrimary}>
        Prueba gratuita
      </button>
    </div>
  );
};

// Estilos para el componente
const styles = {
  card: {
    maxWidth: "600px", // Tarjeta más grande
    margin: "40px auto", // Más margen
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center" as const,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: "28px", // Título más grande
    color: "#333",
    marginBottom: "15px",
  },
  subtitle: {
    fontSize: "18px", // Subtítulo más grande
    color: "#666",
    marginBottom: "25px",
  },
  description: {
    fontSize: "16px", // Descripción más grande
    color: "#444",
    marginBottom: "30px",
  },
  button: {
    padding: "12px 24px", // Botones más grandes
    margin: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px", // Texto más grande
    transition: "background-color 0.3s ease",
  },
  buttonPrimary: {
    padding: "12px 24px", // Botones más grandes
    margin: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#28a745",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px", // Texto más grande
    transition: "background-color 0.3s ease",
  },
};

export default Solutions;