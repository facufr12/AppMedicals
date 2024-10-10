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
      { id: uuid(), link: "/", name: "Bienvenido" }, // Ruta de bienvenida
      { id: uuid(), link: "/dashboard/analytics", name: "Overview" }
    ]
  },

  {
    id: uuid(),
    title: "Prospectos",
    icon: "user",
    children: [
      { id: uuid(), link: "/user/instructor", name: "Prospectos" },
      { id: uuid(), link: "/user/cotizador", name: "Cotizador" } // Nueva suburl "Cotizador"
    ]
  },

  {
    id: uuid(),
    title: "Proyectos", // Título del nuevo grupo
    icon: "folder", // Puedes cambiar el ícono si lo deseas
    children: [
      { id: uuid(), link: "/dashboard/projects/single/overview", name: "Overview del Proyecto" } // Nueva ruta
    ]
  }
];

export default DashboardMenu;
