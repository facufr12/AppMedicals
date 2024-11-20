// import node module libraries
import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";


// import sub components
import ProjectSummary from "./ProjectSummary.js"
import CommonHeaderTabs from "../CommonHeaderTabs.js";
import BudgetSection from "./BudgetSection.js";
import UpcomingDeadlines from "./UpcomingDeadlines.js";
import LaunchDate from "./fechas.js";
import OverallProgressChart from "./evolucion.js";
import RecentActivity from "./RecentActivity.js";

const ProjectOverview = () => {
  return (
    <Fragment>
      {/* page header tabs */}
      <CommonHeaderTabs />

      <Row>
        <Col md={12} xl={8} xs={12}>
          <Row>
            <Col xs={12} className="mb-4">
              {/* project summary section */}
              <ProjectSummary />
            </Col>
          </Row>
        </Col>
        <Col md={12} xl={4} xs={12}>
          {/* launch date section */}
          <LaunchDate />

          {/* overall progress chart  */}
          <OverallProgressChart />

          {/* recent activities section  */}
        </Col>
      </Row>
    </Fragment>
  );
};

export default ProjectOverview;
