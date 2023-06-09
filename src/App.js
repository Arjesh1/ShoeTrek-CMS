
import { Button } from 'react-bootstrap';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MainLayout from './components/layout/MainLayout';

function App() {
  return (
    <div className="App">
      <MainLayout>
      <Button variant='dark'>Hello</Button>

      </MainLayout>
     
    </div>
  );
}

export default App;
