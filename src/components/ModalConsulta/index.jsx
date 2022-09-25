import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import './index.css'

function ModalConsulta() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Agendamento consulta
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Consulta</Modal.Title>
        </Modal.Header>

        <Modal.Body id="body">
            <section class="item">
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                        Paciente
                    </InputGroup.Text>
                    <Form.Control
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                        Relatorio
                    </InputGroup.Text>
                    <Form.Control
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                        Endereço
                    </InputGroup.Text>
                    <Form.Control
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                        Data da consulta(yy/mm/dd)
                    </InputGroup.Text>
                    
                    <Form.Control
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                        Senha de confirmação
                    </InputGroup.Text>
                    
                    <Form.Control
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
            </section>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalConsulta;