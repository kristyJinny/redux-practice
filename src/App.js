import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useState } from 'react';

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
      <h1>{count}</h1>{/* useSelector 로 */}
      <button onClick={increase}>증가</button>
      <button onClick={descrease}>감소</button>
    </div>
  );
}

export default App;
