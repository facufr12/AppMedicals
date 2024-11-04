/* eslint-disable */
import { v4 as uuid } from "uuid";
// import MDI icons
import Icon from "@mdi/react";
import { mdiTrello, mdiCalendar } from "@mdi/js";

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
    
       { id: uuid(), link: "/prestadores/projectprestadores", name: "Planes" },
      ]
  },
];

export default DashboardMenu;
