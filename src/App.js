import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TextEditor from './pages/TextEditor';
import Home from './pages/Home';
import PaginationFunc from './pages/Pagination';
import CarouselFunc from './pages/Carousel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carousel" element={<CarouselFunc />} />
        <Route path="/text-editor" element={<TextEditor />} />
        <Route path="/pagination" element={<PaginationFunc />} />
      </Routes>
    </Router>
  );
}

export default App;
