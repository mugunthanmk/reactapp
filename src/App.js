import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Publisher from './pages/Publisher';
import NewsContext from './context/newsContext';
import { Container } from '@mui/material';

function App() {
  return (
    <NewsContext>
      <BrowserRouter>
          <Container sx={{bgcolor:"#28bbbb1a",p:2,minHeight:"100vh"}}>
            <Routes>
                <Route exact path={"/"} element={<Home/>}/>
                <Route path={"/:id"} element={<Publisher/>}/>
            </Routes>
          </Container>
      </BrowserRouter>
    </NewsContext>
  );
}

export default App;
