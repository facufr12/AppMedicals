// import node module libraries
import { BrowserRouter as Router } from "react-router-dom";

// import layouts
import ScrollToTop from "layouts/dashboard/ScrollToTop";
import AllRoutes from "layouts/AllRoutes";
// import AuthProvider
import { AuthProvider } from "./components/dashboard/authentication/AuthContext"; // Asegúrate de que la ruta sea correcta

// import required stylesheet
import "simplebar/dist/simplebar.min.css";
import "tippy.js/animations/scale.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <AllRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
