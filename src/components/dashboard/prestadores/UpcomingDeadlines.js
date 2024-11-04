// import node module libraries
import { Card, Table, ProgressBar, Image } from 'react-bootstrap';

const UpcomingDeadlines = () => {
  // Definir datos de ejemplo en el mismo archivo con todos los campos necesarios
  const UpcomingDeadlinesData = [
    { 
      id: 1, 
      member: 'John Doe', 
      memberimage: 'https://via.placeholder.com/40', 
      task: 'Completar reporte', 
      deadline: '2024-12-01', 
      workload: 70 
    },
    { 
      id: 2, 
      member: 'Jane Smith', 
      memberimage: 'https://via.placeholder.com/40', 
      task: 'Revisión final del proyecto', 
      deadline: '2024-12-05', 
      workload: 50 
    }
  ];

  return (
    <Card>
      <Card.Header>
        <h4 className="mb-0">Upcoming Deadlines</h4>
      </Card.Header>

      {/* Table */}
      <div className="overflow-y-hidden">
        <Table hover responsive className="mb-0 text-nowrap table-centered">
          <thead className="table-light">
            <tr>
              <th scope="col">Member</th>
              <th scope="col">Task</th>
              <th scope="col">Deadline</th>
              <th scope="col">Workload</th>
            </tr>
          </thead>
          <tbody>
            {UpcomingDeadlinesData.map((item, index) => (
              <tr key={index}>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm">
                      <Image
                        src={item.memberimage}
                        alt={item.member}
                        className="rounded-circle"
                      />
                    </div>
                    <div className="ms-2">
                      <h5 className="mb-0">{item.member}</h5>
                    </div>
                  </div>
                </td>
                <td>{item.task}</td>
                <td>{item.deadline}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <ProgressBar
                      className="flex-auto"
                      style={{ height: '6px' }}
                      now={item.workload}
                      variant="success"
                    />
                    <div className="ms-2">
                      <span>{item.workload}%</span>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Card>
  );
};

export default UpcomingDeadlines;
