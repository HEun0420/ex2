import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import { render } from '@testing-library/react';
// const {useState} = React;

function App() {



    const [menu, setMenu] = useState({
      menuName: '열무김치라떼',
      number: 0,
      menuPrice: 4500,
      category: '커피',
      orderableStatus: 'Y'
});

const countBest = () => {
  const number2 = {...menu}
  number2.number= menu.number + 1
  setMenu(number2);
}

const changeMenuName = () => {
  const menu2 = {...menu}
  menu2.menuName = '바닐라 플렛 화이트'
  setMenu(menu2);
};

// 메뉴 변경 버튼을 클릭하면 menuName => '바닐라 플렛 화이트'
  return (
    <div>
      <div className='black-nav'>
        <h1>메뉴리스트</h1>
      </div>
      <div className='menu'>
        <h1>메뉴명: {menu.menuName} 
          <button onClick = {countBest}>👍<h3>{menu.number}</h3></button>
        </h1>
        <h2>가격: {menu.menuPrice}</h2>
        <h2>카테고리: {menu.category}</h2>
        <h4>주문가능여부: {menu.orderableStatus}</h4>
      
      <button onClick={changeMenuName}>메뉴변경</button>
      </div>
    </div>
  );
}


export default App;
