import OffCanvas from '../../components/offCanvas'
import Header from '../../components/Header'

function Index({ user }) {

  return (
    <>
      <Header />
      <OffCanvas user={user} name="Tarefas?"></OffCanvas>
    </>
  );
}

export default Index;
