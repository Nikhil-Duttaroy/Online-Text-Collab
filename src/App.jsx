import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage/HomePage.component';
import EditorPage from './Pages/EditorPage/EditorPage.component';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/editor/:roomId' element={<EditorPage />}></Route>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App
