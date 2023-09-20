import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { lazy } from 'react';
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const Catalog = lazy(() => import('./pages/AllCarsPage/AllCarsPage'));
const Favorites = lazy(() =>
  import('./pages/FavoriteCarsPage/FavoriteCarsPage')
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
