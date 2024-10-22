const API_URL =
  "https://script.google.com/macros/s/AKfycbxNn3wU0BDPbf6laTTq3PCaq6N7SkyVIdrzrKZkWrUW0pzcHU0Ku-tMQiZVsl6pZBRSGA/exec?func=login";

const login = async (credentials) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
   
      body: JSON.stringify({
        usuario: credentials.usuario,
        contraseña: credentials.contraseña,
      }),
    });

    const data = await response.json();

    // Verifica si la respuesta indica éxito
    if (!response.ok) {
      console.error("Error del servidor:", data.error);
      throw new Error(data.message || "Error en la autenticación");
    }

    console.log('Datos recibidos del servidor:', data); // Log de la respuesta del servidor
    return data; // Devuelve la respuesta del servidor
  } catch (error) {
    console.error("Error en el login:", error);
    throw error; // Propaga el error
  }
};

export default { login };
