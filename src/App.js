import Header from './components/Header';
import Main from './components/Main';
import { GlobalStyled } from './GlobalStyled';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SearchPage from './components/SearchPage';

function App() {
  return (
    <>
      <GlobalStyled />
      <Router>  
      <Header />
        <Routes>
          <Route excat path="/ricky-morty" element={<Main/>}/>
          <Route exact path='/search' element={<SearchPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
