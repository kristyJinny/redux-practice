import { createStore } from 'redux'
import reducer from './reducer/reducer';


let store = createStore(reducer);

export default store;

// reducer 는 여러개 가능/ 그래서 폴더를 만들어서 관리!