import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContactForm } from './component/ContactForm';
import {Col, Container, Row} from 'react-bootstrap';
import { ContactList } from './component/ContactList';


function App() {
  const dispatch = useDispatch();
  // const [count, setCount] = useState(0);
  const count = useSelector(state => state.count);

  const increase =  () => {
    dispatch({type: "INCREMENT"})
    // setCount(count+1);
  }

  const descrease = () => {
    dispatch({type: "DESCREMENT"})
  }

  return (
    <div className="App">
      <h1 className="title">연락처</h1>{/* useSelector 로 */}
      
      <Container>
        <Row>
          <Col><ContactForm /></Col>
          <Col><ContactList /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
