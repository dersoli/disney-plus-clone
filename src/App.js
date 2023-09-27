import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import { AuthContextProvider } from './context/AuthContext';


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route exact path='/' element={<Login/>} />
          </Routes>
        </Router>
      </AuthContextProvider>
      
    </div>
  );
}

export default App;
