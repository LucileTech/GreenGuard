// eslint-disable-next-line
import { React, useState, useEffect } from "react";
import { Card, CardBody, CardText, CardTitle, Col, Container, Navbar, NavbarBrand, Row } from "reactstrap";
import logo from "./logo.svg";
import SearchKeyWord from "./component/SearchKeyWord";
import DisplayedItems from "./component/DisplayedItems";
function App() {
  const [filteredItems, setFilteredItems] = useState([])

  return (
    <Container style={{ minHeight: 500 }}>
      <Navbar color="light" light expand="md">
        <NavbarBrand>
          <img src={logo} alt="CineFile logo" height="50px" />
        </NavbarBrand>
      </Navbar>
      <Row className="d-flex align-items-center justify-content-center" style={{ minHeight: 500 }}>
        {/* <Col md="6">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Category</CardTitle>
              Render the Autocomplete complete with the <code>/clients</code> data here.
            </CardBody>
          </Card>
        </Col> */}
        <Col md="6">
          <Card>
            <CardBody>
              <CardTitle tag="h5">key words</CardTitle>
              <SearchKeyWord setFilteredItems={setFilteredItems}/>
            </CardBody>
          </Card>
          <DisplayedItems filteredItems={filteredItems}/>
        </Col>
      </Row>

    </Container>
  );
}

export default App;
