import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InputTextField from '../components/Contact/InputTextField';
import MessageTextArea from '../components/Contact/MessageInput';

export default function ContactForm() {
  const name = 'Name';
  const email = 'Email';


  return (
    <Container fluid>
      <Row>
        <Col sm={12} md={6}>
          <InputTextField label={name} />
        </Col>
        <Col sm={12} md={6}>
          <InputTextField label={email} />
        </Col>
        <Col sm={12}>
          <MessageTextArea />
        </Col>
      </Row>
    </Container>
  );
}
