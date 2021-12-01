import { Col, Row, Table } from "reactstrap";

export default function TableSubscriber() {
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
                  <th>#</th>

                  <th>Con Edison Account Number</th>
                  <th>Con Edison Account Name</th>
                  <th>Distribution Percentage (%)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>68-8116-2480-0003-9</td>
                  <td>Anmol Sajjad</td>
                  <td>0.100%</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>64-4272-3805-0005-5</td>
                  <td>Louise Lauren</td>
                  <td>0.100%</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>41-3003-0199-2807-1</td>
                  <td>Lucy Koehler</td>
                  <td>0.100%</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>42-1217-1354-0021-7</td>
                  <td>Michael Ruther</td>
                  <td>0.100%</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>52-2306-0191-0001-5</td>
                  <td>Bill Allen</td>
                  <td>0.100%</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>64-4010-0172-0504-9 </td>
                  <td>Lucie Dupas</td>
                  <td>0.100%</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>47-4305-0862-2910-1</td>
                  <td>Peyton Boswell</td>
                  <td>0.050%</td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>45-1709-0061-0010-1</td>
                  <td>Sarah Allen</td>
                  <td>0.100%</td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>42-2101-0730-0006-5</td>
                  <td>George Blinick</td>
                  <td>0.100%</td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td>44-1103-1564-1708-0</td>
                  <td>Zaira Akhmedova</td>
                  <td>0.100%</td>
                </tr>
                <tr>
                  <th scope="row">11</th>
                  <td>44-3023-0489-1909-3</td>
                  <td>Qianqian Yan</td>
                  <td>0.100%</td>
                </tr>
                <tr>
                  <th scope="row">12</th>
                  <td>68-8202-7145-0002-3</td>
                  <td>Hai Ming Liang</td>
                  <td>0.100%</td>
                </tr>
                <tr>
                  <th scope="row">13</th>
                  <td>49-4061-0010-0000-4</td>
                  <td>The Laurel Condominium</td>
                  <td>55%</td>
                </tr>
                <tr>
                  <th scope="row">14</th>
                  <td>69-6041-9023-3001-1</td>
                  <td>70 Washington Street Condominiums</td>
                  <td>3.850%</td>
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
