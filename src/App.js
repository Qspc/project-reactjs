import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TextEditor from './pages/TextEditor';
import Home from './pages/Home';
import PaginationFunc from './pages/Pagination';
import CarouselFunc from './pages/Carousel';
import Filtering from './pages/Filtering';
import TableSorting from './pages/TableSorting';
import FormCompleted from './pages/FormCompleted';
import UpdateSorting from './pages/UpdateSorting';
import SearchInput from './pages/SearchInput';
import Tabs from './pages/Tabs';
import './index.css';
import './App.css';
import Accordion from './pages/Accordion';
import ModalFunc from './pages/Modal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carousel" element={<CarouselFunc />} />
        <Route path="/text-editor" element={<TextEditor />} />
        <Route path="/pagination" element={<PaginationFunc />} />
        <Route path="/filter" element={<Filtering />} />
        <Route path="/table" element={<TableSorting />} />
        <Route path="/form" element={<FormCompleted />} />
        <Route path="/update" element={<UpdateSorting />} />
        <Route path="/search" element={<SearchInput />} />
        <Route path="/tab" element={<Tabs />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/modal" element={<ModalFunc />} />
      </Routes>
    </Router>
  );
}

export default App;
