import './styles/App.css';
import BarraSuperior from './componentes/BarraSuperior';
import BarraPrincipal from './componentes/BarraPrincipal';

import Destacados from './componentes/Destacados';
import Carrousel from './componentes/Carrousel';
import Informacion from './componentes/Informacion';
import Suscripcion from './componentes/Suscripcion';


function App() {
  return (
    <div className="App">
      <BarraSuperior 
      numero = {2}
      palabra = {`Palabra ejemplo`} />
      <BarraPrincipal/>
      <Carrousel/>
      <Destacados/>
      <Informacion/>
      <Suscripcion/>
    </div>
  );
}

export default App;
