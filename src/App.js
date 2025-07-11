// Import node module libraries
import { BrowserRouter as Router } from "react-router-dom";

// Import layouts
import ScrollToTop from "layouts/dashboard/ScrollToTop";
import AllRoutes from "layouts/AllRoutes";
import DarkLightMode from "layouts/DarkLightMode";
// Import AuthProvider
import { AuthProvider } from "./components/dashboard/authentication/AuthContext"; // Asegúrate de que la ruta sea correcta
// Import CacheBuster
import CacheBuster from "./components/CacheBuster";

// Import required stylesheet
import "simplebar/dist/simplebar.min.css";
import "tippy.js/animations/scale.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <CacheBuster />
        <ScrollToTop />
        <AllRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;
