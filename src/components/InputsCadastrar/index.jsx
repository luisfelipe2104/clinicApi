import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useState } from 'react'

import './index.css';

function SizesExample() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [senha2, setSenha2] = useState("")
  const [telefone, setTelefone] = useState("")
  const [cpf, setCpf] = useState("")

  function Cadastrar() {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        senha: senha,
        nome: nome,
        telefone: telefone,
        cpf: cpf,
      }),
    };
    if (senha === senha2) {
      fetch("http://127.0.0.1:8000/create-user/", requestOptions)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data)
        })
    }
    else {
      console.log("senha sao diferentes")
    }
  }

  return (
    <section class="container-main">
      <h1 className='titulo-cadastro' >Cadastro</h1>
      <section class="item">
        <img src="https://www.snqtb.pt/media/wrdbjs3m/fcs.png" />
      </section>

      <section class="item">
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Nome Completo
          </InputGroup.Text>
          <Form.Control
            onChange={(e) => {
              setNome(e.target.value)
              console.log(nome)
            }}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              CPF
            </InputGroup.Text>
            <Form.Control
              onChange={(e) => {
                setCpf(e.target.value)
                console.log(cpf)
              }}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Email
            </InputGroup.Text>
            <Form.Control
              onChange={(e) => {
                setEmail(e.target.value)
                console.log(email)
              }}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Senha
            </InputGroup.Text>
            <Form.Control
              onChange={(e) => {
                setSenha(e.target.value)
                console.log(senha)
              }}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Confirme sua senha
            </InputGroup.Text>
            <Form.Control
              onChange={(e) => {
                setSenha2(e.target.value)
                console.log(senha2)
              }}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Número de telefone
            </InputGroup.Text>
            <Form.Control
              onChange={(e) => {
                setTelefone(e.target.value)
                console.log(telefone)
              }}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>

          <Button onClick={Cadastrar} variant="outline-success">Cadastrar</Button>
        </InputGroup>
      </section>
    </section>
  );
}

export default SizesExample;
