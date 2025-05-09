import './App.css';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
     <Routes>
     
      <Route path='/' element={<Home />}> </Route>
      
     </Routes>
    <Footer />


     </div>
    </BrowserRouter>
    
  );
}

export default App;
