import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import GlobalStyles from './styles/GlobalStyles';
import AppLayout from './ui/AppLayout';
import Country from './pages/Country';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route index element={<Navigate to="countries" replace />} />
        <Route path="countries" element={<AppLayout />}>
          <Route index element={<Home />}></Route>
          <Route path=":id" element={<Country />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
