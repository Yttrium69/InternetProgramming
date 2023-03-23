import './App.css';
import Navigate from './Navigate';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Quiz1 from './Quiz1';
import Quiz2 from './Quiz2';
import Quiz3 from './Quiz3';
// import Quiz4 from './Quiz3';
import Main from './Main/Main';


function App() {
  const week="실습";
  const cnt=3;
  const quizNum=0;
  const Nav=<Navigate week={week} cnt={cnt}></Navigate>;
  return (
    <div className="App">
      <Router>
      {Nav}
          <Routes>
            <Route path="/" element={<Main></Main>}></Route>
            <Route path={"/Quiz/1"}
            element={<Quiz1></Quiz1>}></Route>
            <Route path={"/Quiz/2"}
            element={<Quiz2></Quiz2>}></Route>
            <Route path={"/Quiz/3"}
            element={<Quiz3></Quiz3>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
