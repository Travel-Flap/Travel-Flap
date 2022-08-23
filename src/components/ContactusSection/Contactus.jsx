// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';

// export const ContactUS = () => {
//   const [validated, setValidated] = useState(false);

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };

//   return (
//     <Form noValidate validated={validated} onSubmit={handleSubmit}>
//       <Row className="mb-3">
//         <Form.Group as={Col} md="4" controlId="validationCustom01">
//           <Form.Label>First name</Form.Label>
//           <Form.Control
//             required
//             type="text"
//             placeholder="First name"
//             defaultValue=""
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="4" controlId="validationCustom02">
//           <Form.Label>Subject</Form.Label>
//           <Form.Control
//             required
//             type="text"
//             placeholder="Please Enter the subject regrding your enquiry"
//             defaultValue=""
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>

//       </Row>
//       <Row className="mb-3">
//       <Form.Group as={Col} md="4" controlId="validationCustom02">
//           <Form.Label>Email Address</Form.Label>
//           <Form.Control
//             required
//             type="text"
//             placeholder="Enter your Email here"
//             defaultValue=""
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//       </Row>
//       <Row className="mb-3">
//       <Form.Group as={Col} md="4" controlId="validationCustom02">
//           <Form.Label>Message</Form.Label>
//           <Form.Control
//             required
//             type="text"
//             placeholder="Please enter detailed explaination of your query here"
//             defaultValue=""
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//       </Row>
//       <Button type="submit">Submit form</Button>
//     </Form>
//   );
// }

import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contactus.css";
import { height } from '@mui/system';

export const ContactUS = () => {
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
    <Card  className="bg-dark text-white main-card">
        {/* src="https://i.imgur.com/RemdYqk.png" */}
      <Card.Img className='cardimage' src="https://i.imgur.com/Z4oa9jg.jpg" alt="Card image" />
      <Card.ImgOverlay>

           <Form className='form-Position float-right' noValidate validated={validated} onSubmit={handleSubmit}>
       <Row className="mb-3">
         <Form.Group as={Col} md="4" controlId="validationCustom01">
           <Form.Label>First name</Form.Label>
           <Form.Control
             required
             type="text"
             placeholder="First name"
             defaultValue=""
           />
           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
         </Form.Group>
         <Form.Group as={Col} md="4" controlId="validationCustom02">
           <Form.Label>Subject</Form.Label>
           <Form.Control
             required
             type="text"
             placeholder="Please Enter the subject regrding your enquiry"
             defaultValue=""
           />
           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
         </Form.Group>

       </Row>
       <Row className="mb-3">
       <Form.Group as={Col} md="4" controlId="validationCustom02">
           <Form.Label>Email Address</Form.Label>
           <Form.Control
             required
             type="text"
             placeholder="Enter your Email here"
             defaultValue=""
           />
           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
         </Form.Group>
       </Row>
       <Row className="mb-3">
       <Form.Group as={Col} md="4" controlId="validationCustom02">
           <Form.Label>Message</Form.Label>
           <Form.Control
             required
             type="text"
             placeholder="Please enter detailed explaination of your query here"
             defaultValue=""
           />
           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
         </Form.Group>
       </Row>
       <Button type="submit">Submit form</Button>
     </Form>    

      {/* <section className="contact-section">
      <div className="container">
        <ToastContainer position="top-center" />
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="wrapper">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <div className="contact-wrap w-100 p-lg-5 p-4">
                    <h3 className="mb-4">Send us a message</h3>
                    <form
                      id="contactForm"
                      className="contactForm"
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Email"
                            
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="subject"
                              placeholder="Subject"
                        
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea
                              type="text"
                              className="form-control"
                              name="message"
                              placeholder="Message"
                              cols="30"
                              rows="6"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="submit"
                              className="btn btn-primary"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
      </Card.ImgOverlay>
    </Card>
  );
}

// export default ImgOverlayExample;