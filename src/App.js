import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Books from './Components/Books';
import Movies from './Components/Movies'
import Quotes from './Components/Quotes'
import Characters from './Components/Characters';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books/>}/>
          <Route path="movie" element={<Movies/>}/>
          <Route path="/movie/:movieid/quotes" element={<Quotes/>}/>
          <Route path="/character" element={<Characters/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
