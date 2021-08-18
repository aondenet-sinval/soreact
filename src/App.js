import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './components/Item';
import Card from './components/Card';
import Cols from './components/Cols';
import NewTable from './components/NewTable';
import NavBar from './components/NavBar';

/*
const App = () => {
  return (
  <>
  <Container>
  <Button color="danger">Danger!</Button>
	<h1>Componentes em React</h1>
	<ul>
	<Item text='Item 1'/>
	<Item text='Item 2'/>
	<Item text='Item 3'/>
	</ul>
	</Container>
	</>
  );
}
*/
/*
Para usar os itens com components filhos (chidren) descomente use abaixo

*/
const App = () => {
  return (
  <>
  <NavBar />
	<h1>Componentes em React</h1>
	<ul>
	<Item>
	Item 1
	</Item>
	<Item>
	Item 2
	</Item>
	<Item>
	Item 3
	</Item>
	</ul>
	<Card />
	<NewTable />
	</>
  );
}


export default App;
