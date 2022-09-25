import OffCanvas from '../../components/offCanvas'
import Header from '../../components/Header'
import Carousel from '../../components/Carousel'

import './index.css';

function Index() {

  const content = () => {
    return(
      <div>
        <ul>
          <li>Conteudo</li>
          <li>Conteudo</li>
          <li>Conteudo</li>
        </ul>
      </div>
    );
  };

  return (
    <>
        <Header/>

        <div class="offCanvas">
          <OffCanvas id="consulta" name="Medico e enfermeiro" conteudo={content}/>
        </div>

        <Carousel/>
    </>
  );
}

export default Index;