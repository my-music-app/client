import './App.css';
import { Route, Routes } from 'react-router-dom';
import { WrapsComponent } from './pages/wrapsComponent';

function App() {
  return (
    <Routes>
      <Route path='*' element={<WrapsComponent />} />
    </Routes>
  );
}

export default App;
