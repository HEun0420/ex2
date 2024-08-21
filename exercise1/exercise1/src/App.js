import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>저메추</h1>
      <Menu></Menu>
      <h1>음료</h1>
      <Drink/>
    </div>
  );
}

const menu = {
  menuName: '김치오모리찌개',
  menuPrice: '8000',
  category: '진로',
  orderableStatus: 'Y'
}

function Menu(){
  return(
    <div style={{width:300, border: '1px solid black', padding : 10}}>
      <h2 style ={{color: 'green'}}>{menu.menuName}</h2>
      <h2>{menu.menuPrice}</h2>
      <h2>{menu.category}</h2>
      <h2>{menu.orderableStatus}</h2>
    </div>
  )
}

function Drink(){
 return(
  <div>
    <h2 style ={{color: 'skyblue'}}>진로</h2>
  </div>
 )
}

export default App;
