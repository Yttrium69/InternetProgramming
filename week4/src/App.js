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
          <Routes>
            <Route path="/" element={<Main Nav={Nav}></Main>}></Route>
            <Route path={"/Quiz/1"}
            element={<Quiz1 Nav={Nav}></Quiz1>}></Route>
            <Route path={"/Quiz/2"}
            element={<Quiz2 Nav={Nav}></Quiz2>}></Route>
            <Route path={"/Quiz/3"}
            element={<Quiz3 Nav={Nav}></Quiz3>}></Route>
            {/* <Route path={"/Quiz/4"}
            element={<Quiz4 Nav={Nav}></Quiz4>}></Route> */}
          </Routes>
      </Router>
    </div>
  );
}

export default App;
