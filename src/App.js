import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation';
import List from './Components/List';
import Data from './Components/Data';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function App() {
  const [fighters, setfighters] = useState(Data);

  return (
    <div className="App">
      <Navigation />
      <hr></hr>
      <h3>Liste des {fighters.length} combattants</h3>
      <Container>
        <Row>
          <List fighters={fighters} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
