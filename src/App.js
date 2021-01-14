import React, {useState,useEffect} from 'react';
import './App.css';
import Board from './components/Board';
import emoji from 'emoji-dictionary';
import axios from 'axios';



const App = () => {

  const [boardList, setBoardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    axios.get('https://inspiration-board.herokuapp.com/boards')
      .then((res) => {
        // res.data = array of objects
        const apiBoards = []
        
        res.data.map(singleBoard => {
          apiBoards.push(singleBoard.board)
        })
       
        setBoardList(apiBoards)
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  }, []);

  const boardNames = [];
  boardList.map(board => 
    boardNames.push(<option value={board.name}> {board.name} </option>)
  )


  return (
    <section>
      <header className="header">
        <h1 className="header__h1"><span className="header__text"> Inspiration Board</span></h1>
      </header>
      <form>
        <label>Boards:</label>
        <select>
          {boardNames}
        </select>
      </form>
      <Board
        url="https://inspiration-board.herokuapp.com/boards/"
        boardName={`tram-bui`}
      />
    </section>
  );
};

export default App;
