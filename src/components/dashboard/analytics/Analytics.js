// import node module libraries
import { Fragment } from "react";
import { Col, Row, Card, Table, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

// import MDI icons
import Icon from "@mdi/react";
import { mdiSquareRounded } from "@mdi/js";

const Analytics = () => {
  return (
    <Fragment>
   

      {/* Sessions + Active User Row */}
      <Row>
        <Col xl={8} lg={12} md={12} className="mb-4">
          <Card className="h-100">
            <Card.Header className="align-items-center card-header-height d-flex justify-content-between align-items-center">
              <h4 className="mb-0">Sessions</h4>
            </Card.Header>
            <Card.Body></Card.Body>
          </Card>
        </Col>
        <Col xl={4} lg={12} md={12} className="mb-4">
          <Card className="h-100">
            <Card.Header className="align-items-center card-header-height d-flex justify-content-between align-items-center">
              <h4 className="mb-0">Active User</h4>
            </Card.Header>
            <Card.Body></Card.Body>
          </Card>
        </Col>
      </Row>
      {/* end of Sessions + Active User Row */}

      {/* Users by Country + Traffic Channel + Operating System  */}
      <Row>
        <Col xl={4} lg={12} md={12} className="mb-4">
          <Card className="h-100">
            <Card.Header className="align-items-center card-header-height d-flex justify-content-between align-items-center">
              <h4 className="mb-0">Users by Country</h4>
            </Card.Header>
            <Card.Body className="py-0">
              <UsersbyCountry />
              <Table borderless size="sm">
                <tbody>
                  <tr>
                    <td>United States</td>
                    <td>22,120</td>
                    <td>34.54%</td>
                  </tr>
                  <tr>
                    <td>India</td>
                    <td>12,756</td>
                    <td>22.43%</td>
                  </tr>
                  <tr>
                    <td>United Kingdom</td>
                    <td>8,864</td>
                    <td>34.54%</td>
                  </tr>
                  <tr>
                    <td>Sweden</td>
                    <td>6,749</td>
                    <td>5.29%</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={4} lg={12} md={12} className="mb-4">
          <Card className="h-100">
            <Card.Header className="align-items-center card-header-height d-flex justify-content-between align-items-center">
              <h4 className="mb-0">Traffic Channel</h4>
            </Card.Header>
            <Card.Body className="p-1">
           
              <Table size="sm" className="mt-5 mb-0 ms-2" borderless>
                <tbody>
                  <tr>
                    <td>
                      <Icon
                        path={mdiSquareRounded}
                        className="text-primary fs-5 me-2"
                        size={0.6}
                      />
                      Organic Search
                    </td>
                    <td>2,120</td>
                    <td>4.54%</td>
                  </tr>
                  <tr>
                    <td>
                      <Icon
                        path={mdiSquareRounded}
                        className="text-success fs-5 me-2"
                        size={0.6}
                      />
                      Direct
                    </td>
                    <td>639</td>
                    <td>4.37%</td>
                  </tr>
                  <tr>
                    <td>
                      <Icon
                        path={mdiSquareRounded}
                        className="text-danger fs-5 me-2"
                        size={0.6}
                      />
                      Refferrals
                    </td>
                    <td>520</td>
                    <td>45.14%</td>
                  </tr>
                  <tr>
                    <td>
                      <Icon
                        path={mdiSquareRounded}
                        className="text-info fs-5 me-2"
                        size={0.6}
                      />
                      Social Media
                    </td>
                    <td>116</td>
                    <td>12.24%</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={4} lg={12} md={12} className="mb-4">
          <Card className="h-100">
            <Card.Header className="align-items-center card-header-height d-flex justify-content-between align-items-center">
              <h4 className="mb-0">Operating System</h4>
            </Card.Header>
            <Card.Body>
             
              <div className="mt-4 d-flex justify-content-center">
                <ListGroup as="ul" bsPrefix="list-inline" className="mb-0">
                  <ListGroup.Item as="li" bsPrefix="list-inline-item mx-3">
                    <h5 className="mb-0 d-flex align-items-center fs-5 lh-1">
                      <Icon
                        path={mdiSquareRounded}
                        className="text-danger fs-5 me-2"
                        size={0.6}
                      />
                      Window
                    </h5>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" bsPrefix="list-inline-item mx-3">
                    <h5 className="mb-0 d-flex align-items-center  fs-5 lh-1">
                      <Icon
                        path={mdiSquareRounded}
                        className="text-success fs-5 me-2"
                        size={0.6}
                      />
                      macOS
                    </h5>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" bsPrefix="list-inline-item mx-3">
                    <h5 className="mb-0 d-flex align-items-center  fs-5 lh-1">
                      <Icon
                        path={mdiSquareRounded}
                        className="text-primary fs-5 me-2"
                        size={0.6}
                      />
                      Linux
                    </h5>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" bsPrefix="list-inline-item mx-3">
                    <h5 className="mb-0 d-flex align-items-center  fs-5 lh-1">
                      <Icon
                        path={mdiSquareRounded}
                        className="text-info fs-5 me-2"
                        size={0.6}
                      />
                      Android
                    </h5>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* end of Users by Country + Traffic Channel + Operating System  */}

      {/* Browsers + Social Media Traffic + Most View Pages  */}
    
      {/* end of Users by Country + Traffic Channel + Operating System  */}
    </Fragment>
  );
};

export default Analytics;
