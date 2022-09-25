import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import '../../';

import './index.css';

function index() {
  return (
    <Navbar bg="light" expand="lg">
      <Container class="container">
        <Navbar.Brand>
          <div class="brandItem">
            <Link className='link brand' to="/">
              <div className='titulo-da-pagina'>
                <h1>Clínica Médica</h1>
                <h2>Exames & Diagnósticos</h2>
              </div>
            </Link>
          </div>
        </Navbar.Brand>


        <section>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link className='link' to="/sobre">Sobre</Link>
              </Nav.Link>

              <NavDropdown title="Políticas de Dados" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link className='link' to="/lei-geral-de-protecao-de-dados">
                    Lei geral de proteção de dados
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className='link' to="/lei-de-protecao-de-dados">
                    Leis de proteção de dados
                  </Link>

                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Perfil" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link className="link" to="/login">Login</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="link" to="/cadastrar">Criar conta</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link className="link" to="/marcar-consulta/">Marcar Consulta</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link className="link" to="/consulta-medico/">Minhas Consultas</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </section>
      </Container>
    </Navbar>
  );
}

export default index;
