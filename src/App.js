import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carousel from './pages/Carousel';
import TextEditor from './pages/TextEditor';
import Home from './pages/Home';
import PaginationFunc from './pages/Pagination';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/text-editor" element={<TextEditor />} />
        <Route path="/pagination" element={<PaginationFunc />} />
      </Routes>
    </Router>
  );
}

export default App;
