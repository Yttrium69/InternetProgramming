import './App.css';
import Navigate from './All/Navigate';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Quiz1 from './Quiz1/Quiz1';
import Quiz2 from './Quiz2/Quiz2';
import Quiz4 from './Quiz4/Quiz4';
import Quiz7 from './Quiz7/Quiz7';
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
            element={<Quiz1 Nav={Nav}></Quiz1>}></Route>
            <Route path={"/Quiz/2"}
            element={<Quiz2 Nav={Nav}></Quiz2>}></Route>
            <Route path={"/Quiz/4"}
            element={<Quiz4 Nav={Nav}></Quiz4>}></Route>
            <Route path={"/Quiz/5"}
            element={<Quiz4 Nav={Nav}></Quiz4>}></Route>
            <Route path={"/Quiz/6"}
            element={<Quiz4 Nav={Nav}></Quiz4>}></Route>
            <Route path={"/Quiz/7"}
            element={<Quiz7 Nav={Nav}></Quiz7>}></Route>
          </Routes>
          
      </Router>
    </div>
  );
}

export default App;
