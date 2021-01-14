import React, {useState,useEffect} from 'react';
import './App.css';
import Board from './components/Board';
import emoji from 'emoji-dictionary';
import axios from 'axios';



const App = () => {

  // should app keep track of all the boards?

  const [boardList, setBoardList] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)


  useEffect(() => {
    axios.get('https://inspiration-board.herokuapp.com/boards/')
      .then((res) => {
        const apiBoards = res.data;
        setBoardList(apiBoards)
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  }, []);



  return (
    <section>
      <header className="header">
        <h1 className="header__h1"><span className="header__text">{emoji.getUnicode("heart_eyes")} Inspiration Board {emoji.getUnicode("heart_eyes")}</span></h1>
      </header>
      <Board
        url="https://inspiration-board.herokuapp.com/boards/"
        boardName={`tram-bui`}
      />
    </section>
  );
};

export default App;
