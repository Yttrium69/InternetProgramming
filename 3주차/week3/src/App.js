import './App.css';
import Navigate from './Navigate';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Quiz1 from './Quiz1/Quiz1';
import Main from './Main/Main';


function App() {
  const week=3;
  const cnt=10;
  const quizNum=0;
  const Nav=<Navigate week={week} cnt={cnt}></Navigate>;
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Main Nav={Nav}></Main>}></Route>
            <Route path={"/Quiz/1"}
            element={<Quiz1></Quiz1>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
