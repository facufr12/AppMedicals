import { Fragment } from "react";
import { Form, Image } from "react-bootstrap";
import { useAuth } from "components/dashboard/authentication/AuthContext";
import LightModeIcon from 'assets/images/sun.svg';
import DarkModeIcon from 'assets/images/moon.svg';

const DarkLightMode = ({ className }) => {
  const { theme, setTheme } = useAuth();  // Accede al tema y a la función para actualizarlo

  const changeColorMode = () => {
    // Cambia entre "light" y "dark" al hacer click
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Fragment>
      <Form.Check
        type="switch"
        id="flexSwitchCheckDefault"
        checked={theme === "dark"}
        onChange={changeColorMode}  // Alterna entre los temas
        className={`form-check form-switch theme-switch btn btn-light btn-icon rounded-circle ${className}`}
      />
      {/* Imagen de icono que cambia según el tema */}
    </Fragment>
  );
};

export default DarkLightMode;
