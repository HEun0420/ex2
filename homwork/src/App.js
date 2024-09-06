import logo from './logo.svg';
import './App.css';
import {useState} from 'react';



function App() {

  const [toDos,setToDos] = useState([
    {id: 1, toDo:'할 일 목록 추가할 것'},
]);

const [inputText, setInputText] = useState('');
const [nextId,setNextId] = useState(2);

const onChangeHandler = (event) => setInputText(event.target.value);

const onClickHandler = () =>{
  const toDosCopy= toDos.concat({
          id: nextId,
          toDo: inputText,
        });
      console.log(toDosCopy);

      setNextId(nextId + 1); // Id가 달라야 삭제하는 것도 각자 삭제 가능
      setToDos(toDosCopy);
      setInputText('');
          }

const onCheckHandler = (e) => {
    const id = parseInt(e.target.id);
    const isChecked = e.target.checked;
          
  const updatedToDos = toDos.map(toDo =>
    toDo.id === id ? { ...toDo, check: isChecked } : toDo
    );
          
  setToDos(updatedToDos);
  };

const onRemove = id => {
      const changeToDos = toDos.filter(toDo=> toDo.id !== id);
      setToDos(changeToDos);
          }

const onHighLight = (id) => {
    const updatedToDos = toDos.map(toDo =>
      toDo.id === id ? { ...toDo, highlight: !toDo.highlight } : toDo
      );
      setToDos(updatedToDos);
      };

const onClickLiked = () => {
  const url = encodeURIComponent(window.location.href);
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
  window.open(linkedInUrl, '_blank', 'width=600,height=400');
};

const toDoList =  toDos.map (toDo => 
            <p key={toDo.id} onDoubleClick={()=> onHighLight(toDo.id)} className={toDo.highlight ? 'highlight' : ''}
            >
            <input type="checkbox" id={toDo.id} checked={toDo.check} onChange={onCheckHandler}/>
            <span style={{ 'text-decoration': toDo.check ? 'line-through' : 'none' }}>{toDo.toDo}</span>
            <button onClick={()=> onRemove(toDo.id)}>❌</button></p>)

// function shareOnLinkedIn() {
//   const url = encodeURIComponent(window.location.href);
//   const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
//   window.open(linkedInUrl, '_blank', 'width=600,height=400');

  return (
    <div className="App">
      <div className="Title">
        <h1>오늘의 할 일! 2024.8.21</h1>
      </div>

      <div className="ListBack">
        <h3>todo-List</h3>
      </div>

      <div className="list">
        <ul>{toDoList}</ul>
      </div>

      <div className='share'>
            <button onClick={onClickLiked} >공유하기📤</button>
            </div>

      <div className='listAdd'>
          <input value= {inputText} onChange={onChangeHandler}/>
          <button onClick={onClickHandler}>추가하기</button>
          </div>
          

      <div className="footer">
        <h3 className="text">Copyright 2022.team-greedy all rights reserved.</h3>
      </div>
    </div>
  );
}

export default App;
