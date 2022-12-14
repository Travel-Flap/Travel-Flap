
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import "./TravelForm.css";

export const TravelForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form className='main-form' noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="2" controlId="validationCustom01">
          <Form.Label>Destination</Form.Label>
          <Form.Control xs={4}
            required
            type="text"
            placeholder="First name"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
        {/* This is for the Check in form contro; */}
        <Form.Group as={Col} md="2" controlId="validationCustom02">
          <Form.Label>Check In</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="YYYY-MM-DD"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        {/* This is for the check out Form Control */}
        <Form.Group as={Col} md="2" controlId="validationCustom02">
          <Form.Label>Check Out</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="YYYY-MM-DD"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        {/* This Form Group is for the Selecting Adult Values */}
        <Form.Group as={Col} md="2" xs={3} controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          {/* <Form.Control type="text" placeholder="State" required /> */}
          <Form.Select defaultValue=" ">
            <option>1</option>
            <option>2</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>

        {/* This Form Froup is for the button of the form group */}
        <Form.Group as={Col} md="2" controlId="validationCustom02">
            <Button type="submit">Submit form</Button>
        </Form.Group>
      </Row>
    </Form>
  );
}

// render(<FormExample />);