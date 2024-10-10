// ** Import from react dom
import { Route, Routes, Navigate } from "react-router-dom";
import "assets/scss/theme.scss";
import DashboardIndex from "layouts/dashboard/DashboardIndex";
import AuthLayout from "layouts/dashboard/AuthLayout";
import DashboardIndexCompact from "layouts/dashboard/DashboardIndexCompact"; // ( added in v1.3.0 )
import DashboardIndexTop from "layouts/dashboard/DashboardIndexTop"; // ( added in v1.3.0 )
import JobListingLayout from "layouts/marketing/JobListingLayout"; // ( added in v2.0.0 )
import ChatLayout from "./dashboard/ChatLayout"; // ( added in v2.0.0 )
import TaskKanbanLayout from "./dashboard/TaskKanbanLayout"; // ( added in v2.0.0 )
import EcommerceLayout from "./dashboard/EcommerceLayout"; // ( added in v2.2.0 )
import Cotizador from "components/dashboard/user/Cotizador";
import Overview from "components/dashboard/overview/Overview";
import Metrics from "components/dashboard/analytics/Metrics";
import Instructor from "components/dashboard/user/Instructor";
import SignIn from "components/dashboard/authentication/SignIn";
import SignUp from "components/dashboard/authentication/SignUp";
import ForgetPassword from "components/dashboard/authentication/ForgetPassword";
import Notifications from "components/dashboard/authentication/Notifications";
import General from "components/dashboard/settings/General";
import Google from "components/dashboard/settings/Google";
import Social from "components/dashboard/settings/Social";
import SocialLogin from "components/dashboard/settings/SocialLogin";
import SMTPServer from "components/dashboard/settings/SMTPServer";
import ProjectGrid from "components/dashboard/projects/grid/ProjectGrid";
import ProjectList from "components/dashboard/projects/list/ProjectList";
import ProjectBudget from "components/dashboard/projects/single/budget/ProjectBudget";
import ProjectFiles from "components/dashboard/projects/single/files/ProjectFiles";
import ProjectOverview from "components/dashboard/projects/single/overview/ProjectOverview";
import ProjectSummary from "components/dashboard/projects/single/summary/ProjectSummary";
import ProjectTask from "components/dashboard/projects/single/task/ProjectTask";
import ProjectTeam from "components/dashboard/projects/single/team/ProjectTeam";
import BasicTables from "components/dashboard/tables/basic/BasicTables";
import Datatables from "components/dashboard/tables/Datatables";
import ChecksRadios from "components/elements/bootstrap/forms/ChecksRadios";
import FloatingLabels from "components/elements/bootstrap/forms/FloatingLabels";
import FormControls from "components/elements/bootstrap/forms/FormControls";
import FormText from "components/elements/bootstrap/forms/FormText";
import BSInputGroup from "components/elements/bootstrap/forms/BSInputGroup";
import Layouts from "components/elements/bootstrap/forms/Layouts";
import Range from "components/elements/bootstrap/forms/Range";
import BSSelect from "components/elements/bootstrap/forms/BSSelect";
import Validation from "components/elements/bootstrap/forms/Validation";
// ** Boostrap components
import Accordions from "components/elements/bootstrap/Accordions";
import Alerts from "components/elements/bootstrap/Alerts";
import AvatarStyles from "components/elements/bootstrap/AvatarStyles";
import Badges from "components/elements/bootstrap/Badges";
import Breadcrumbs from "components/elements/bootstrap/Breadcrumbs";
import Buttons from "components/elements/bootstrap/Buttons";
import ButtonGroup from "components/elements/bootstrap/ButtonGroup";
import Cards from "components/elements/bootstrap/Cards";
import Carousels from "components/elements/bootstrap/Carousels";
import CloseButtons from "components/elements/bootstrap/CloseButtons";
import Collapses from "components/elements/bootstrap/Collapses";
import Dropdowns from "components/elements/bootstrap/Dropdowns";
import Listgroups from "components/elements/bootstrap/Listgroups";
import Navbars from "components/elements/bootstrap/Navbars";
import Navs from "components/elements/bootstrap/Navs";
import BSOffcanvas from "components/elements/bootstrap/BSOffcanvas";
import Overlays from "components/elements/bootstrap/Overlays";
import Paginations from "components/elements/bootstrap/Paginations";
import Popovers from "components/elements/bootstrap/Popovers";
import Progress from "components/elements/bootstrap/Progress";
import Spinners from "components/elements/bootstrap/Spinners";
import Modals from "components/elements/bootstrap/Modals";
import Tables from "components/elements/bootstrap/Tables";
import Toasts from "components/elements/bootstrap/Toasts";
import Tooltips from "components/elements/bootstrap/Tooltips";
import DefaultLayout from "layouts/marketing/DefaultLayout";
import LayoutFooterLinks from "layouts/marketing/LayoutFooterLinks";
import BlankLayout from "layouts/marketing/BlankLayout";
import NotFound from "layouts/marketing/NotFound";
import AcademyLayout from "layouts/marketing/AcademyLayout"; // added in 2.0.0

// Mentor Pages (v2.3.
import NavbarVertical from "./dashboard/NavbarVertical";
import NavbarBrandOnly from "./marketing/navbars/NavbarBrandOnly";
import NavbarCompact from "./dashboard/navbars/NavbarCompact";
import SimpleBar from "simplebar-react";
const AllRoutes = () => {
  return (
    <Routes>
      {/* Routes with DefaultLayout */}
      <Route element={<NavbarVertical />}>
        <Route path="/home" element={<Overview />} />
      </Route>
      {/* Routes with BlankLayout */}
   
      {/* Routes with AuthLayout */}
      <Route element={<AuthLayout />}>
        <Route path="/authentication/sign-in" element={<SignIn />} />
        <Route path="/authentication/sign-up" element={<SignUp />} />
        <Route
          path="/authentication/forget-password"
          element={<ForgetPassword />}
        />
      </Route>
      {/* Routes (DASHBOARD ROUTERS) with DashboardIndex */}
      <Route element={<DashboardIndex />}>
        <Route path="/" element={<Overview />} />
        <Route path="/dashboard/analytics" element={<Metrics />} />
        <Route path="/user/instructor" element={<Instructor />} />
        <Route path="/user/Cotizador" element={<Cotizador />} />
      
        <Route
          path="/dashboard/layouts/layout-vertical"
          element={<Overview />}
        />
        {/* SETTINGS ROUTERS */}
        <Route path="/settings/general" element={<General />} />
        <Route path="/settings/google" element={<Google />} />
        <Route path="/settings/social" element={<Social />} />
        <Route path="/settings/social-login" element={<SocialLogin />} />
        <Route path="/settings/smtp-server" element={<SMTPServer />} />
        {/* PROJECTS ROUTERS */}
        <Route path="/dashboard/projects/grid" element={<ProjectGrid />} />
        <Route path="/dashboard/projects/list" element={<ProjectList />} />

        <Route
          path="/dashboard/projects/single/budget"
          element={<ProjectBudget />}
        />
        <Route
          path="/dashboard/projects/single/files"
          element={<ProjectFiles />}
        />
        <Route
          path="/dashboard/projects/single/overview"
          element={<ProjectOverview />}
        />
        <Route
          path="/dashboard/projects/single/summary"
          element={<ProjectSummary />}
        />
        <Route
          path="/dashboard/projects/single/task"
          element={<ProjectTask />}
        />
        <Route
          path="/dashboard/projects/single/team"
          element={<ProjectTeam />}
        />

        {/* REACT-BOOTSTRAP FORMS COMPOENTS ROUTERS */}
        <Route
          path="/elements/forms/checks-and-radios"
          element={<ChecksRadios />}
        />
        <Route
          path="/elements/forms/floating-labels"
          element={<FloatingLabels />}
        />
        <Route
          path="/elements/forms/form-controls"
          element={<FormControls />}
        />
        <Route path="/elements/forms/form-text" element={<FormText />} />
        <Route path="/elements/forms/input-group" element={<BSInputGroup />} />
        <Route path="/elements/forms/layouts" element={<Layouts />} />
        <Route path="/elements/forms/range" element={<Range />} />
        <Route path="/elements/forms/select" element={<BSSelect />} />
        <Route path="/elements/forms/validation" element={<Validation />} />

        {/* REACT-BOOTSTRAP COMPOENTS ROUTERS */}
        <Route path="/elements/accordions" element={<Accordions />} />
        <Route path="/elements/alerts" element={<Alerts />} />
        <Route path="/elements/avatar" element={<AvatarStyles />} />
        <Route path="/elements/badges" element={<Badges />} />
        <Route path="/elements/breadcrumbs" element={<Breadcrumbs />} />
        <Route path="/elements/buttons" element={<Buttons />} />
        <Route path="/elements/button-group" element={<ButtonGroup />} />
        <Route path="/elements/cards" element={<Cards />} />
        <Route path="/elements/carousels" element={<Carousels />} />
        <Route path="/elements/close-button" element={<CloseButtons />} />
        <Route path="/elements/collapse" element={<Collapses />} />
        <Route path="/elements/dropdowns" element={<Dropdowns />} />
        <Route path="/elements/list-group" element={<Listgroups />} />
        <Route path="/elements/modal" element={<Modals />} />
        <Route path="/elements/navs" element={<Navs />} />
        <Route path="/elements/offcanvas" element={<BSOffcanvas />} />
        <Route path="/elements/overlays" element={<Overlays />} />
        <Route path="/elements/navbar" element={<Navbars />} />
        <Route path="/elements/pagination" element={<Paginations />} />
        <Route path="/elements/popovers" element={<Popovers />} />
        <Route path="/elements/progress" element={<Progress />} />
        <Route path="/elements/spinners" element={<Spinners />} />
        <Route path="/elements/tables" element={<Tables />} />
        <Route path="/elements/toasts" element={<Toasts />} />
        <Route path="/elements/tooltips" element={<Tooltips />} />
        {/* ** Dashboard - Tables Pages ( v2.2.0 ) */}
        <Route
          path="/dashboard/tables/basic-tables"
          element={<BasicTables />}
        />
        <Route path="/dashboard/tables/datatables" element={<Datatables />} />
      </Route>
      {/* Routes with EcommerceLayout (v2.2.0) */}
      <Route element={<EcommerceLayout />}>
        {/* ** Dashboard - Ecommerce -> Customers Pages ( v2.2.0 ) */}
      </Route>
      {/* Routes with ChatLayout */}
      <Route element={<ChatLayout />}></Route>

      {/* Routes with DashboardIndexTop */}
      <Route element={<DashboardIndexTop />}>
        <Route
          path="/dashboard/layouts/layout-horizontal"
          element={<Overview />}
        />
      </Route>
      {/* Routes with DashboardIndexCompact */}
      <Route element={<DashboardIndexCompact />}>
        <Route
          path="/dashboard/layouts/layout-compact"
          element={<Overview />}
        />
      </Route>
      {/*Redirect*/}
      <Route
        path="*"
        element={<Navigate to="/marketing/specialty/404-error/" replace />}
      />
    </Routes>
  );
};

export default AllRoutes;
