import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NewsContext from './context/newsContext';
import Main from './main';


function App() {

  return (
    <NewsContext>
      <BrowserRouter>
      <Main/>
      </BrowserRouter>
    </NewsContext>
  );
}

export default App;
