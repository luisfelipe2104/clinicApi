import Carousel from 'react-bootstrap/Carousel';
import './index.css'

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          class="imagem"
          src="https://saocamilo-sp.br/assets/uploads/capa_pos_cardiologia_contemporanea_3.jpg"
          alt="Cardiologia"
        />
        <Carousel.Caption>
          <h3>Cardiologia</h3>
          <p>Cardiologia é a área de atuação médica que se ocupa do diagnóstico e tratamento das doenças que acometem o coração e também do sistema circulatório.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          class="imagem"
          src="https://cefaleias.com.br/wp-content/uploads/2009/06/Captura-de-Tela-2020-06-08-a%CC%80s-13.28.48.png"
          alt="Neurologia"
        />

        <Carousel.Caption>
          <h3>Neurologia</h3>
          <p>É a área de atuação médica que se dedica ao diagnóstico e tratamento de doenças que afetam o sistema nervoso.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          class="imagem"
          src="https://usrio.com.br/images/resources/ortopedia-e-traumatologia-us-rio.jpg"
          alt="Ortopedia"
        />

        <Carousel.Caption>
          <h3>Ortopedia</h3>
          <p>
          É a área de atuação médica que cuida das doenças e deformidades dos ossos, músculos, ligamentos, articulações e tudo mais relacionado ao aparelho locomotor.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;