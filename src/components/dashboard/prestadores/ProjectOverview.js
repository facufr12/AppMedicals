// import node module libraries
import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";

// import sub components
import ProjectSummary from "./ProjectSummary";
import BudgetSection from "./BudgetSection";
import UpcomingDeadlines from "./UpcomingDeadlines";
import LaunchDate from "./LaunchDate";
import OverallProgressChart from "./OverallProgressChart";
import RecentActivity from "./RecentActivity";

const ProjectPrestadores = () => {
  return (
    <Fragment>
      {/* page header tabs */}

      {/* project summary section */}
      <ProjectSummary />
    </Fragment>
  );
};

export default ProjectPrestadores;
