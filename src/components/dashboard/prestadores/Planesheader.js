// import node module libraries
import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";

// import sub components
import ProjectSummary from "./Planes";

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
