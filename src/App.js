import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carousel from './pages/Carousel';
import TextEditor from './pages/TextEditor';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/text-editor" element={<TextEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
