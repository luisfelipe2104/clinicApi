import Header from '../../components/Header'
import Inputs from '../../components/InputsLogin';

import '../../reset.css';

function Index(props) {
  return (
    <div>
        <Header/>
        <Inputs user={props.user} setUser={props.setUser} />
    </div>
  );
}

export default Index;
