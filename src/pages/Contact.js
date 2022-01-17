import * as React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import EmailInput from '../components/Contact/EmailInput';
import NameInput from '../components/Contact/NameInput';
import MessageTextArea from '../components/Contact/MessageInput';

export default function ContactForm() {

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Form className="contact-form col-sm-12 col-md-6">
          <Col sm={12} md={6} className="form-input">
            <NameInput />
          </Col>
          <Col sm={12} md={6} className="form-input">
            <EmailInput />
          </Col>
          <MessageTextArea />
        </Form>
      </Row>
    </Container>
  );
}
