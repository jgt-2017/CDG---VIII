import { Col, Row, Table } from "reactstrap";

export default function TablePage() {
  //const { dispatch, storeLayout } = props;
  return (
    <>
      <h1></h1>
      <div className="hero">
        <Row>
          {/* <Col xs="6">
            <h4>Default</h4>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Col> */}
          {/* <Col xs="6">
            <h4>Hover</h4>
            <Table hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Col> */}
          <Col xs="12">
            <h4></h4>
            <Table striped hover>
              <thead>
                <tr>
                  <th></th>
                  <th>Billing Period</th>
                  <th>Allocation Percent</th>
                  <th>Billed Amount</th>
                  <th>Credit Allocated</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"></th>
                  <td>Aug 2021</td>
                  <td>37.50%</td>
                  <td>$48,970.78</td>
                  <td>$48,970.78</td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td>July 2021</td>
                  <td>37.50%</td>
                  <td>$27,884.76</td>
                  <td>$27,884.76</td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td>June 2021</td>
                  <td>37.50%</td>
                  <td>$31,944.77</td>
                  <td>$31,944.77</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          {/* <Col xs="6">
            <h4>Dark</h4>
            <Table dark hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Col> */}
        </Row>
      </div>
    </>
  );
}
