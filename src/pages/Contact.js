import * as React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import EmailInput from '../components/Contact/EmailInput';
import NameInput from '../components/Contact/NameInput';
import MessageTextArea from '../components/Contact/MessageInput';
import SubmitButton from '../components/Contact/SubmitButton';

export default function ContactForm() {

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col sm={12} md={8}>
          <h1 className="text-center contact-header">Thanks for taking the time to get in touch.</h1>
        </Col>
        <Col sm={12} md={6}>  
          <h5 className="text-center is-roboto contact-greeter">
            Send me an email, or get in touch via my social media. I'm excited to work together, first coffee is on me. 
          </h5>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Form className="contact-form col-sm-12 col-md-6 ">
          <Col xs={12} sm={12} md={6} className="form-input">
            <NameInput />
          </Col>
          <Col xs={12} sm={12} md={6} className="form-input">
            <EmailInput />
          </Col>
          <Col xs={12} sm={12} className="form-input">
            <MessageTextArea />
          </Col>
          <Col sm={12} className="text-center">
            <SubmitButton />
          </Col>
        </Form>
      </Row>
    </Container>
  );
}
