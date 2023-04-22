import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import Search from './components/Search/Search';
import SearchPage from './components/SearchPage/SearchPage';
function App() {
  return (
    <div className="App">
      <Search />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/searchpage" element={<SearchPage />} />
      </Routes>
    </div>
  );
}
export default App;
