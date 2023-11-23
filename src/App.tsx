import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import InboxContainer from './pages/Inbox/InboxContainer'
import NewemailContainer from './pages/Newemail/NewemailContainer';
import { ToastContainer } from 'react-toastify';


const App = () => {

 
  return (
    <Router>
      <ToastContainer />
      <div className="container my-5 emailComponent">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <Routes>
              <Route path='/' element={<NewemailContainer />}/>         
              <Route path="/inbox" element={<InboxContainer />} />
            </Routes>

          </div>
        </div>
      </div>
    </Router>
  );
};


export default App;
