import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from "react-router-dom"
import ModalConsulta from '../ModalConsulta'
import './index.css'


function OffCanvasExample({ user, name, conteudo, ...props }) {
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const [enfermeiro, setEnfermeiro] = useState("")
  const [medico, setMedico] = useState("")

  const [minhasConsultas, setMinhasConsultas] = useState([])

  useEffect(() => {
    if(!user) {
      navigate("/login")
    }
    else{
      fetch("http://127.0.0.1:8000/minhas-consultas/"+user.id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setMinhasConsultas(data)
        minhasConsultas.forEach((item, i) => {
          console.log(item.relatorio)
        });



      })
    }
  }, [user])

  const showConsulta = (consulta, key) => {
    return(
      <div>
        {consulta.relatorio}
      </div>
    )
  }

  return (
    <>
    <h1 className='titulo-consultas'>Consultas:</h1>
      {minhasConsultas.map((consulta, index) => (

          <div className="border">
            <div className="info"><p><h1>Paciente:</h1> {user.nome}</p></div>
            <div className="info"><p><h1>Relatorio:</h1> {consulta.relatorio}</p></div>
            <div className="info"><p><h1>Cidade:</h1> {consulta.endereco}</p></div>
            <div className="info"><p><h1>Data:</h1> {consulta.horario_consulta}</p></div>
            
          </div>

      )
    )
  }
    </>
  );
}



export default OffCanvasExample;
