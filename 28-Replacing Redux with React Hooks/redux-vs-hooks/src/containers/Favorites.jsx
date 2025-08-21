import React, { useContext, useMemo } from 'react';
import FavoriteItem from '../components/Favorites/FavoriteItem';
import './Products.css';
import { ProductsContext } from '../context/products-context';

const Favorites = () => {

  const favoriteProducts = useContext(ProductsContext).products.filter(p => p.isFavorite);
  
  // const favoriteProducts = useMemo(
  //   () => products.filter(p => p.isFavorite),
  //   [products]
  // );

  return favoriteProducts.length === 0 ? (
    <p className="placeholder">Got no favorites yet!</p>
  ) : (
    <ul className="products-list">
      {favoriteProducts.map(prod => (
        <FavoriteItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
        />
      ))}
    </ul>
  );
};

export default Favorites;
