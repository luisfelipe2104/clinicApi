import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useState } from "react"

import './index.css';

function SizesExample(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  function Login(){
    fetch("http://127.0.0.1:8000/login/" + email)
    .then((res) => res.json())
    .then((data) => {
      if(data){
        if(data.senha == password){
          console.log("Logged in")
          props.setUser(data)
        }
        else{
          console.log("senha incorreta")
        }
      }
      else{
        console.log("usuario não existe")
      }
    })
  }
  return (
    <section class="container-main">
      <h1 className='titulo-login'>Login</h1>
      <section class="item">
        <img src="https://www.snqtb.pt/media/wrdbjs3m/fcs.png" />
      </section>

      <section class="item">
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Email
          </InputGroup.Text>
          <Form.Control
            onChange={ (e) => {
              setEmail(e.target.value)
              console.log(email)
            }
            }
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Senha
          </InputGroup.Text>
          <Form.Control
            onChange={ (e) => {
              setPassword(e.target.value)
              console.log(password)
            }
            }
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <Button variant="outline-success" onClick={Login}>Entrar</Button>{' '}

      </section>
    </section>
  );
}

export default SizesExample;
