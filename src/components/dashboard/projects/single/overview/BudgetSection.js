import { useLocation } from 'react-router-dom';

const ProspectDetails = () => {
  const location = useLocation();
  const prospecto = location.state?.prospecto; // Usar encadenamiento opcional

  // Manejo de caso donde prospecto es null
  if (!prospecto) {
    return <div>No se encontraron detalles del prospecto.</div>;
  }

  return (
    <div>
      <h2>Detalles de Prospecto</h2>
      <p><strong>Nombre:</strong> {prospecto.nombre}</p>
      <p><strong>Edad:</strong> {prospecto.edad}</p>
      <p><strong>Correo:</strong> {prospecto.correo}</p>
      <p><strong>Tipo de Afiliación:</strong> {prospecto.tAfiliacion}</p>
      <p><strong>Grupo Familiar:</strong> {prospecto.gpFamiliar}</p>
      <p><strong>Estado:</strong> {prospecto.estado}</p>
      <p><strong>Partido:</strong> {prospecto.partido}</p>
      <p><strong>Celular:</strong> {prospecto.cel}</p>
      {/* Puedes agregar más campos según lo que necesites mostrar */}
    </div>
  );
};

export default ProspectDetails;
