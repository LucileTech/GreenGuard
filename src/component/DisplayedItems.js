import React from 'react'
import { Card, CardBody, CardText, CardTitle, Col, Container, Navbar, NavbarBrand, Row } from "reactstrap";

function DisplayedItems({filteredItems}) {
  return (
    <Card>
    <CardBody>
    {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
                    <Card key={item.id} style={{ margin: '10px 0' }}>
                        <CardBody>
                            <CardTitle tag="h5">{item.name}</CardTitle>
                            <CardText>{item.description}</CardText>
                            <CardText><strong>Price:</strong> {item.price}</CardText>
                        </CardBody>
                    </Card>
                ))
            ) : (
                <p>No items found</p>
            )}
    </CardBody>
  </Card>
  )
}

export default DisplayedItems