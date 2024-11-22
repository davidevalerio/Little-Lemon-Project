import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Chicago from './components/Chicago';

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Main />
      <Chicago />
    </Router>
  );
}

export default App;
