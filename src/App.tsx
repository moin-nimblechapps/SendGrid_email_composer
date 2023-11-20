import './App.css';
import Inbox from './components/Inbox';
import EmailComponent from './components/emailComponent';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Started from './components/Started';
import Sent from './components/Sent';
import Trash from './components/Trash';
import Important from './components/Impotant';
import Newemail from './components/Newemail';


const App = () => {

 
  return (
    // <EmailComponent />
    <Router>
      <div className="container my-5 emailComponent">
        <div className="row">
          <div className="col-md-3">
            <EmailComponent />
          </div>
          <div className="col-md-9">
            <Routes>
              <Route path="/" element={<Inbox />} />
              <Route path='/newEmail' element={<Newemail />}/>
              <Route path='/stared' element={<Started />}/>
              <Route path='/sent' element={<Sent />}/>
              <Route path='/trash' element={<Trash onClick={() => alert("Okay")} text='Hello' id={2}/>}/>
              <Route path='/important' element={<Important />}/>              {/* Add more routes as needed */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};


export default App;
