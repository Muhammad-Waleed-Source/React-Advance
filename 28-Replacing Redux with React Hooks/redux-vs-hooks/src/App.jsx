import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from "./components/Nav/Navigation";
import ProductsPage from './containers/Products';
import FavoritesPage from './containers/Favorites';

const App = () => {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
