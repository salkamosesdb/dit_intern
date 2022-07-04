import {Routes,Route} from 'react-router-dom'
import AllStudents from './components/allStudents';
import Dash1 from './components/dash1';
import Dash2 from './components/dash2';
import EditStu from './components/EditStu';
import EditTea from './components/EditTea';
import LoginStu from './components/loginStu';
import LoginTea from './components/loginTea';
import Main from './components/main';
import RegisterStudent from './components/register';
import StudentProf from './components/studentProf';
import Teacherreg from './components/teacherreg';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" exact element={<Main/>} />
          <Route path="/registerstudents"  element={<RegisterStudent/>} />
          <Route path="/loginStu"  element={<LoginStu/>} />
          <Route path="/loginTea"  element={<LoginTea/>} />
          <Route path="/studentProfile"  element={<StudentProf/>} />
          <Route path="/registerTeacher"  element={<Teacherreg/>} />
          <Route path="/teadashboard" element={<Dash2/>}/>
          <Route path="/studashboard" element={<Dash1/>}/>
          <Route path="/allstudents" element={<AllStudents/>}/>
          <Route path="/editteacher" element={<EditTea/>}/>
          <Route path="/editstudent" element={<EditStu/>}/>
        </Routes>
    </div>
  );
}

export default App;
