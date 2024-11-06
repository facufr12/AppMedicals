/* eslint-disable */
import { v4 as uuid } from "uuid";

export const DashboardMenu = [
  {
    id: uuid(),
    title: "Inicio",
    icon: "home",
    children: [
      { id: uuid(), link: "/overview", name: "Bienvenido" }, // Ruta de bienvenida
      { id: uuid(), link: "/dashboard/analytics", name: "Overview" }
    ]
  },
  {
    id: uuid(),
    title: "Prospectos",
    icon: "user",
    children: [
      { id: uuid(), link: "/user/instructor", name: "Prospectos" },
      // { id: uuid(), link: "/user/cotizador", name: "Cotizador" }, // Nueva suburl "Cotizador"
    ]
  },
  // Nuevo objeto para "Planes"
  {
    id: uuid(),
    title: "Planes",
    icon: "calendar", // Usando el icono "calendar" disponible
    children: [
      { id: uuid(), link: "/prestadores/projectprestadores", name: "Cobertura / Zonas" }
    ]
  },
];

export default DashboardMenu;
