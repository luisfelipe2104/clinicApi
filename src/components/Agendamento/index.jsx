import Button from 'react-bootstrap/Button';
import './index.css';
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

function Index(props) {
  const navigate = useNavigate()
  const [cidade, setCidade] = useState("")
  const [relatorio, setRelatorio] = useState("")
  const [date, setDate] = useState("")

  function Marcar(){
    let medico = Math.floor(Math.random() * 4) + 1
    let sala = Math.floor(Math.random() * 4) + 1
    let enfermeiro = Math.floor(Math.random() * 4) + 1


    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        relatorio: relatorio,
        endereco: cidade,
        horario_consulta: date,
        sala: sala,
        paciente:props.user.id,
        medico:medico,
        enfermeiro:enfermeiro
      }),
    };

    fetch("http://127.0.0.1:8000/marcar-consulta/", requestOptions)
    .then((res) => res.json())
    .then((data) => {
      console.log("okkkk")
    })
  }

  useEffect(() => {
    if(!props.user) {
      navigate("/login")
    }
  }, [props.user])
    return (
        <div className='app'>
            <div className="titulos">
                <h1>Agende sua consulta!</h1>
                <h1>Selecione a forma de atendimento: </h1>
            </div>

            <div className="container">

                <label>Informe a sua cidade: </label>
                <input onChange={(e) => setCidade(e.target.value)} className='input' type="text" />

                <label>Informe a data que deseja ser atendido: </label>
                <input onChange={(e) => setDate(e.target.value)} className='input' type="date" />

                <label> Informe o motivo da consulta: </label>
                <input onChange={(e) => setRelatorio(e.target.value)} className='inputDiferente' type="text" />

                <Button className='botao' variant="outline-success" onClick={Marcar}>Marcar consulta</Button>{' '}

            </div>


        </div>
    );
}

export default Index;
